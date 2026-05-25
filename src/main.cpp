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
#include "web/handler.h"

TCA9555 tca9555(0x20, &Wire);

EDConfig::DataMgr<Config> configMgr(new EDConfig::StorageLittleFS<Config>("/config.bin"));
EDNetwork::NetworkMgr networkMgr;
EDMQTT::MQTT mqtt;
EDWB::WirenBoard modbus(Serial1, RS485RTS);

EDHealthCheck::HealthCheck healthCheck;
EDHA::DiscoveryMgr discoveryMgr;

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);

Sun sun;

Handler handler(&configMgr, &networkMgr, &healthCheck);

EDCommon::Light::Relay* localAreaBacklight = nullptr;
EDCommon::Light::Relay* yardFenceBacklight = nullptr;
EDCommon::Light::Relay* localAreaGarland = nullptr;
EDCommon::Relay::WBMR6C* leftLawnWatering = nullptr;
EDCommon::Relay::WBMR6C* localAreaRightLawnWatering = nullptr;
EDCommon::Sensor::WaterLevel* rainwaterPitLevel = nullptr;
EDCommon::BinarySensor::WBMR6C* gateContact = nullptr;

LightAutomation* lightAutomation = nullptr;

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

    handler.init();

    discoveryMgr.init(
        configMgr.getData()->mqttHADiscoveryPrefix,
        configMgr.getData()->mqttIsHADiscovery,
        [](std::string topicName, std::string payload) {
            return mqtt.publish(topicName.c_str(), payload.c_str(), true);
        }
    );

    EDHA::Device* device = discoveryMgr.addDevice();
    device->setHWVersion(deviceHWVersion)
        ->setSWVersion(deviceFWVersion)
        ->setModel(deviceModel)
        ->setName(deviceName)
        ->setManufacturer(deviceManufacturer);

    auto mr6c = modbus.addMR6C(configMgr.getData()->modbusAddressWBMR6C);
    mr6c->setInputMode(MR6C_CHANNEL_LOCAL_AREA_BACKLIGHT, EDWB::MR6C_INPUT_MODE_DONT_USE);
    mr6c->setInputMode(MR6C_CHANNEL_YARD_FENCE_BACKLIGHT, EDWB::MR6C_INPUT_MODE_DONT_USE);
    mr6c->setInputMode(MR6C_CHANNEL_LOCAL_AREA_GARLAND, EDWB::MR6C_INPUT_MODE_DONT_USE);
    mr6c->setInputMode(MR6C_CHANNEL_LEFT_LAWN_WATERING, EDWB::MR6C_INPUT_MODE_DONT_USE);
    mr6c->setInputMode(MR6C_CHANNEL_LOCAL_AREA_RIGHT_LAWN_WATERING, EDWB::MR6C_INPUT_MODE_DONT_USE);
    mr6c->setInputMode(MR6C_CHANNEL_SIX, EDWB::MR6C_INPUT_MODE_DONT_USE);

    auto localAreaBacklightRelay = new EDCommon::Relay::WBMR6C(mr6c);
    localAreaBacklightRelay->init(MR6C_CHANNEL_LOCAL_AREA_BACKLIGHT, {});
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
    yardFenceBacklightRelay->init(MR6C_CHANNEL_YARD_FENCE_BACKLIGHT, {});
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
    localAreaGarlandRelay->init(MR6C_CHANNEL_LOCAL_AREA_GARLAND, {});
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
    leftLawnWatering->init(MR6C_CHANNEL_LEFT_LAWN_WATERING, {
        EDCommon::Relay::withMQTT(
            &mqtt,
            configMgr.getData()->mqttTopicsPrefix,
            "evelyn",
            "Left lawn watering"
        ),
        EDCommon::Relay::withDiscovery(&discoveryMgr, device)
    });

    localAreaRightLawnWatering = new EDCommon::Relay::WBMR6C(mr6c);
    localAreaRightLawnWatering->init(MR6C_CHANNEL_LOCAL_AREA_RIGHT_LAWN_WATERING, {
        EDCommon::Relay::withMQTT(
            &mqtt,
            configMgr.getData()->mqttTopicsPrefix,
            "evelyn",
            "Local area right watering"
        ),
        EDCommon::Relay::withDiscovery(&discoveryMgr, device)
    });

    auto qdy30a = modbus.addQDY30A(configMgr.getData()->modbusAddressQDY30A);
    rainwaterPitLevel = new EDCommon::Sensor::WaterLevel(qdy30a);
    rainwaterPitLevel->init({
        EDCommon::Sensor::withMQTT(
            &mqtt,
            configMgr.getData()->mqttTopicsPrefix,
            "evelyn",
            "Rainwater pit level"
        ),
        EDCommon::Sensor::withDiscovery(&discoveryMgr, device)
    });

    gateContact = new EDCommon::BinarySensor::WBMR6C(mr6c);
    gateContact->init(1, {
        EDCommon::BinarySensor::withMQTT(
            &mqtt,
            configMgr.getData()->mqttTopicsPrefix,
            "evelyn",
            "Gate"
        ),
        EDCommon::BinarySensor::withDiscovery(&discoveryMgr, device, EDHA::deviceClassBinarySensorDoor)
    });

    timeClient.begin();
    timeClient.setTimeOffset(3600*3); // tmp, move to config

    sun.init(SunConfig(44.067465f, 42.887368f, 3600)); // tmp, move to config

    lightAutomation = new LightAutomation(&timeClient, &sun, localAreaBacklight);

    LOGI("setup", "complete");
}

void loop()
{
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
    gateContact->update();

    lightAutomation->update();
}
