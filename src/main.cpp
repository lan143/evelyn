#include <Arduino.h>
#include <ArduinoOTA.h>
#include <LittleFS.h>
#include <data_mgr.h>
#include <storage/littlefs_storage.hpp>
#include <esp_log.h>
#include <discovery.h>
#include <mqtt.h>
#include <healthcheck.h>
#include <wirenboard.h>
#include <network/network.h>
#include <network/network_api.h>
#include <log/log.h>
#include <Wire.h>
#include <TCA9555.h>
#include <device/qdy30a.h>
#include <device/wb_mr6c.h>
#include <light/relay_light.h>
#include <relay/wb_mr6c.h>
#include <sensor/water_level.h>
#include <binary_sensor/wb_mr6c.h>
#include <NTPClient.h>
#include <WiFiUdp.h>

#include "defines.h"
#include "config.h"
#include "service/sun.h"
#include "automation/light.h"
#include "control/devices.h"
#include "web/handler.h"

TCA9555 tca9555(0x20, &Wire);

EDConfig::DataMgr<Config> configMgr(new EDConfig::StorageLittleFS<Config>("/config.bin"));
EDNetwork::NetworkMgr networkMgr;
EDNetwork::NetworkApi networkApi(networkMgr);
EDMQTT::MQTT mqtt;
EDWB::WirenBoard modbus(Serial1, RS485RTS);

EDWB::MR6C* mr6c = nullptr;
bool mr6cInited = false;
int64_t mr6cLastUpdateTime = 0;
bool gateContactInited = false;
int64_t gateContactLastUpdateTime = 0;

EDHealthCheck::HealthCheck healthCheck;
EDHA::DiscoveryMgr discoveryMgr;
EDHA::Device* device = nullptr;

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);

Sun sun;

Handler handler(&configMgr, &networkMgr, &networkApi, &healthCheck, &networkLogger);

EDCommon::Light::Relay* localAreaBacklight = nullptr;
EDCommon::Light::Relay* yardFenceBacklight = nullptr;
EDCommon::Light::Relay* localAreaGarland = nullptr;
EDCommon::Relay::WBMR6C* leftLawnWatering = nullptr;
EDCommon::Relay::WBMR6C* localAreaRightLawnWatering = nullptr;
EDCommon::Sensor::WaterLevel* rainwaterPitLevel = nullptr;
EDCommon::BinarySensor::WBMR6C* gateContact = nullptr;

Devices* devices = nullptr;

LightAutomation* lightAutomation = nullptr;

void initGateContact();

void setup()
{
    randomSeed(micros());

    Serial.begin(SERIAL_SPEED);

    esp_log_level_set("*", ESP_LOG_VERBOSE);

    LOGI("setup", "Evelyn");
    LOGI("setup", "start");

    LOGI("setup", "littlefs begin");
    if (!LittleFS.begin(true)) {
        LOGE("setup", "failed to init littlefs");
        return;
    }

    LOGI("setup", "init i2c");
    Wire.begin(I2CSDA, I2CSCL);
    Wire.setClock(100000);

    // tmp enable Vout
    tca9555.begin(OUTPUT, 0x40);

    configMgr.setDefault([](Config* config) {
        snprintf(config->network.wifiAPSSID, WIFI_SSID_LEN, "Evelyn_%s", EDUtils::getMacAddress().c_str());
        snprintf(config->mqttHADiscoveryPrefix, MQTT_TOPIC_LEN, "homeassistant");

        strcpy(config->log.host, "192.168.1.2");
        config->log.port = 5555;
        strcpy(config->log.uri, "/_bulk");

        strcpy(config->otaPassword, "somestrongpassword");

        snprintf(config->mqttTopicsPrefix, MQTT_TOPIC_LEN, "evelyn/%s", EDUtils::getChipID());

        config->modbusSpeed = 9600;
        config->modbusAddressQDY30A = 1;
        config->modbusAddressWBMR6C = 2;
    });
    configMgr.load();

    networkLogger.init(configMgr.getData()->log, CONTROLLER_NAME, EDUtils::formatString("Evelyn_%s", EDUtils::getMacAddress().c_str()));

    Serial1.begin(configMgr.getData()->modbusSpeed, SERIAL_8N1, RS485RX, RS485TX);

    modbus.init(15);

    networkMgr.init(configMgr.getData()->network, true, ETH_ADDR, ETH_POWER_PIN, ETH_MDC_PIN, ETH_MDIO_PIN, ETH_TYPE, ETH_CLK_MODE);

    ArduinoOTA.setPassword(configMgr.getData()->otaPassword);
    ArduinoOTA.begin();

    mqtt.init(configMgr.getData()->mqtt);
    networkMgr.OnConnect([&](bool isConnected) {
        networkLogger.enable(isConnected);
        LOGD("network", "network event. connected: %s", isConnected ? "true" : "false");

        if (isConnected) {
            mqtt.connect();
        } else {
            mqtt.disconnect();
        }
    });
    healthCheck.registerService(&mqtt);

    discoveryMgr.init(
        configMgr.getData()->mqttHADiscoveryPrefix,
        configMgr.getData()->mqttIsHADiscovery,
        [](std::string topicName, std::string payload) {
            return mqtt.publish(topicName.c_str(), payload.c_str(), true);
        }
    );

    device = discoveryMgr.addDevice();
    device->setHWVersion(deviceHWVersion)
        ->setSWVersion(deviceFWVersion)
        ->setModel(deviceModel)
        ->setName(deviceName)
        ->setManufacturer(deviceManufacturer);

    mr6c = modbus.addMR6C(configMgr.getData()->modbusAddressWBMR6C);

    auto localAreaBacklightRelay = new EDCommon::Relay::WBMR6C(mr6c);
    localAreaBacklightRelay->init(MR6C_CHANNEL_LOCAL_AREA_BACKLIGHT, -1, {});
    localAreaBacklight = new EDCommon::Light::Relay(localAreaBacklightRelay);
    localAreaBacklight->init({
        EDCommon::Light::withMQTT(
            &mqtt,
            configMgr.getData()->mqttTopicsPrefix,
            "evelyn",
            "Local area backlight"
        ), 
        EDCommon::Light::withDiscovery(&discoveryMgr, device)
    });

    auto yardFenceBacklightRelay = new EDCommon::Relay::WBMR6C(mr6c);
    yardFenceBacklightRelay->init(MR6C_CHANNEL_YARD_FENCE_BACKLIGHT, -1, {});
    yardFenceBacklight = new EDCommon::Light::Relay(yardFenceBacklightRelay);
    yardFenceBacklight->init({
        EDCommon::Light::withMQTT(
            &mqtt,
            configMgr.getData()->mqttTopicsPrefix,
            "evelyn",
            "Yard fence backlight"
        ),
        EDCommon::Light::withDiscovery(&discoveryMgr, device)
    });

    auto localAreaGarlandRelay = new EDCommon::Relay::WBMR6C(mr6c);
    localAreaGarlandRelay->init(MR6C_CHANNEL_LOCAL_AREA_GARLAND, -1, {});
    localAreaGarland = new EDCommon::Light::Relay(localAreaGarlandRelay);
    localAreaGarland->init({
        EDCommon::Light::withMQTT(
            &mqtt,
            configMgr.getData()->mqttTopicsPrefix,
            "evelyn",
            "Local area garland"
        ),
        EDCommon::Light::withDiscovery(&discoveryMgr, device)
    });

    leftLawnWatering = new EDCommon::Relay::WBMR6C(mr6c);
    leftLawnWatering->init(MR6C_CHANNEL_LEFT_LAWN_WATERING, -1, {
        EDCommon::Relay::withMQTT(
            &mqtt,
            configMgr.getData()->mqttTopicsPrefix,
            "evelyn",
            "Left lawn watering"
        ),
        EDCommon::Relay::withDiscovery(&discoveryMgr, device),
        EDCommon::Relay::withTimeout(20*60*1000000LL),
    });

    localAreaRightLawnWatering = new EDCommon::Relay::WBMR6C(mr6c);
    localAreaRightLawnWatering->init(MR6C_CHANNEL_LOCAL_AREA_RIGHT_LAWN_WATERING, -1, {
        EDCommon::Relay::withMQTT(
            &mqtt,
            configMgr.getData()->mqttTopicsPrefix,
            "evelyn",
            "Local area right watering"
        ),
        EDCommon::Relay::withDiscovery(&discoveryMgr, device),
        EDCommon::Relay::withTimeout(20*60*1000000LL),
    });

    auto qdy30a = modbus.addQDY30A(configMgr.getData()->modbusAddressQDY30A);
    rainwaterPitLevel = new EDCommon::Sensor::WaterLevel(qdy30a);
    rainwaterPitLevel->init(3, 10000, {
        EDCommon::Sensor::withMQTT(
            &mqtt,
            configMgr.getData()->mqttTopicsPrefix,
            "evelyn",
            "Rainwater pit level"
        ),
        EDCommon::Sensor::withDiscovery(&discoveryMgr, device)
    });

    gateContact = new EDCommon::BinarySensor::WBMR6C(1, EDHA::deviceClassBinarySensorDoor, false, mr6c);
    initGateContact();

    devices = new Devices(
        localAreaBacklight,
        yardFenceBacklight,
        localAreaGarland,
        leftLawnWatering,
        localAreaRightLawnWatering,
        rainwaterPitLevel,
        gateContact
    );

    handler.init(devices);

    timeClient.begin();
    timeClient.setTimeOffset(3600*3); // tmp, move to config

    sun.init(SunConfig(44.067465f, 42.887368f, 3600*3)); // tmp, move to config

    lightAutomation = new LightAutomation(&timeClient, &sun, localAreaBacklight);

    LOGI("setup", "complete");
}

void initMR6C()
{
    if (!mr6cInited && (mr6cLastUpdateTime + 1000000LL) < esp_timer_get_time()) {
        mr6cLastUpdateTime = esp_timer_get_time();

        for (uint8_t i = 2; i <= 6; ++i) {
            if (!mr6c->setInputMode(i, EDWB::MR6C_INPUT_MODE_FREQUENCY)) {
                LOGE("initMR6C", "failed to set input mode for channel %u", i);
                return;
            }
        }

        LOGI("initMR6C", "successful inited WB-MR6C");
        mr6cInited = true;
    }
}

void initGateContact()
{
    if (!gateContactInited && (gateContactLastUpdateTime + 1000000LL) < esp_timer_get_time()) {
        gateContactLastUpdateTime = esp_timer_get_time();

        gateContactInited = gateContact->init(500, {
            EDCommon::BinarySensor::withMQTT(
                &mqtt,
                configMgr.getData()->mqttTopicsPrefix,
                "evelyn",
                "Gate"
            ),
            EDCommon::BinarySensor::withDiscovery(&discoveryMgr, device)
        });

        if (!gateContactInited) {
            LOGE("initGateContact", "failed to init gate binary sensor");
            return;
        }

        LOGI("initGateContact", "successful inited gate binary sensor");
    }
}

void loop()
{
    initMR6C();
    initGateContact();

    networkMgr.loop();
    discoveryMgr.loop();
    ArduinoOTA.handle();
    healthCheck.loop();
    networkLogger.update();
    timeClient.update();

    localAreaBacklight->update();
    yardFenceBacklight->update();
    localAreaGarland->update();
    leftLawnWatering->update();
    localAreaRightLawnWatering->update();
    rainwaterPitLevel->update();

    if (gateContactInited) {
        gateContact->update();
    }

    if (devices != nullptr) {
        devices->updateSnapshot();
    }

    lightAutomation->update();
}
