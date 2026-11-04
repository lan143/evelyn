#include <ArduinoJSON.h>
#include <AsyncJson.h>
#include <FS.h>
#include <LittleFS.h>
#include <esp_system.h>
#include <ExtStrings.h>
#include <Json.h>
#include <backup/config_backup_handler.hpp>
#include <backup/config_file_handler.hpp>
#include <cstring>
#include <string.h>
#include "defines.h"
#include "control/devices.h"
#include "handler.h"

namespace
{
    const EDConfig::BackupFileSpec BACKUP_FILES[] = {
        {"config.bin", "/config.bin", sizeof(Config), CURRENT_VERSION, true},
    };

    constexpr size_t BACKUP_FILE_COUNT = sizeof(BACKUP_FILES) / sizeof(BACKUP_FILES[0]);

    // Evelyn stores config directly in LittleFS, so a restored /config.bin is
    // applied by rebooting into the normal boot-time load.
    void rebootAfterConfigRestore()
    {
        delay(200);
        ESP.restart();
    }

    void writeSwitch(JsonObject item, const char* id, const char* name, const Devices::SwitchValue& value)
    {
        item["id"] = id;
        item["name"] = name;
        item["enabled"] = value.available ? value.enabled : false;
        item["available"] = value.available;
    }

    void writeSensor(
        JsonObject item,
        const char* id,
        const char* name,
        const char* unit,
        const Devices::SensorValue& value
    )
    {
        item["id"] = id;
        item["name"] = name;
        item["unit"] = unit;
        item["value"] = value.available ? value.value : 0.0f;
        item["available"] = value.available;
    }

    void writeBinary(JsonObject item, const char* id, const char* name, const Devices::BinaryValue& value)
    {
        item["id"] = id;
        item["name"] = name;
        item["unit"] = "";
        item["value"] = value.available ? value.value : false;
        item["available"] = value.available;
    }

    void writeDevices(JsonObject root, const Devices::Snapshot& snapshot)
    {
        JsonArray sections = root["sections"].to<JsonArray>();

        JsonObject lighting = sections.add<JsonObject>();
        lighting["id"] = "lighting";
        lighting["name"] = "Lighting";
        JsonArray switches = lighting["switches"].to<JsonArray>();
        writeSwitch(
            switches.add<JsonObject>(),
            "local_area_backlight",
            "Local area backlight",
            snapshot.localAreaBacklight
        );
        writeSwitch(
            switches.add<JsonObject>(),
            "yard_fence_backlight",
            "Yard fence backlight",
            snapshot.yardFenceBacklight
        );
        writeSwitch(
            switches.add<JsonObject>(),
            "local_area_garland",
            "Local area garland",
            snapshot.localAreaGarland
        );

        JsonObject watering = sections.add<JsonObject>();
        watering["id"] = "watering";
        watering["name"] = "Watering";
        JsonArray wateringSwitches = watering["switches"].to<JsonArray>();
        writeSwitch(
            wateringSwitches.add<JsonObject>(),
            "left_lawn_watering",
            "Left lawn watering",
            snapshot.leftLawnWatering
        );
        writeSwitch(
            wateringSwitches.add<JsonObject>(),
            "local_area_right_watering",
            "Local area right watering",
            snapshot.localAreaRightLawnWatering
        );

        JsonObject sensorsSection = sections.add<JsonObject>();
        sensorsSection["id"] = "sensors";
        sensorsSection["name"] = "Sensors";
        JsonArray sensors = sensorsSection["sensors"].to<JsonArray>();
        writeSensor(
            sensors.add<JsonObject>(),
            "rainwater_pit_level",
            "Rainwater pit level",
            "m",
            snapshot.rainwaterPitLevel
        );
        writeBinary(sensors.add<JsonObject>(), "gate", "Gate", snapshot.gate);
    }

    bool parseEnabled(const String& value, bool& out)
    {
        if (value.equalsIgnoreCase("on") || value.equalsIgnoreCase("true")) {
            out = true;
            return true;
        }

        if (value.equalsIgnoreCase("off") || value.equalsIgnoreCase("false")) {
            out = false;
            return true;
        }

        return false;
    }

    void sendJsonMessage(AsyncWebServerRequest* request, int status, const char* message)
    {
        AsyncResponseStream* response = request->beginResponseStream("application/json");
        response->setCode(status);

        std::string payload = EDUtils::buildJson([message](JsonObject entity) {
            entity["message"] = message;
        });

        response->write(payload.c_str());
        request->send(response);
    }

    void sendLogSettingsState(
        AsyncWebServerRequest* request,
        int status,
        const EDUtils::LogConfig& config,
        bool enabled
    )
    {
        AsyncResponseStream* response = request->beginResponseStream("application/json");
        response->setCode(status);

        std::string payload = EDUtils::buildJson([&config, enabled](JsonObject entity) {
            entity["host"] = config.host;
            entity["uri"] = config.uri;
            entity["port"] = config.port;
            entity["enabled"] = enabled;
        });

        response->write(payload.c_str());
        request->send(response);
    }
}

void Handler::init(Devices* devices)
{
    _devices = devices;

    _server->serveStatic("/", LittleFS, "/").setDefaultFile("index.html");

    _healthCheck->registerHandlers(_server);

    registerLogSettingsHandlers();

    _networkApi->registerRoutes(*_server);

    _networkApi->onSettingsChanged([this](const EDNetwork::Config& cfg) {
        _configMgr->getData()->network = cfg;
        return _configMgr->store();
    });

    // Archive route must be registered before the single-file /api/config
    // handler: ESPAsyncWebServer can match the shorter path first.
    static EDConfig::ConfigBackupHandler backupHandler({
        BACKUP_FILES,
        BACKUP_FILE_COUNT,
        "evelyn-config.zip",
        0,
        rebootAfterConfigRestore
    });
    backupHandler.registerHandlers(_server);

    static EDConfig::ConfigFileHandler configFileHandler({
        "/config.bin",
        sizeof(Config),
        CURRENT_VERSION,
        true,
        rebootAfterConfigRestore
    });
    configFileHandler.registerHandlers(_server);

    _server->on("/api/settings/modbus", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string payload = EDUtils::buildJson([this](JsonObject entity) {
            auto config = _configMgr->getData();

            entity["modbusSpeed"] = config->modbusSpeed;
            entity["modbusAddressWBMR6C"] = config->modbusAddressWBMR6C;
            entity["modbusAddressQDY30A"] = config->modbusAddressQDY30A;
        });

        response->write(payload.c_str());
        request->send(response);
    });

    _server->on("/api/settings/modbus", HTTP_POST, [this](AsyncWebServerRequest *request) {
        if (
            !request->hasParam("modbusSpeed", true)
            || !request->hasParam("modbusAddressWBMR6C", true)
            || !request->hasParam("modbusAddressQDY30A", true)
        ) {
            request->send(422, "application/json", "{\"message\": \"not present modbus params in request\"}");
            return;
        }

        const AsyncWebParameter* modbusSpeedParam = request->getParam("modbusSpeed", true);
        const AsyncWebParameter* modbusAddressWBMR6CParam = request->getParam("modbusAddressWBMR6C", true);
        const AsyncWebParameter* modbusAddressQDY30AParam = request->getParam("modbusAddressQDY30A", true);

        int modbusSpeed;
        if (EDUtils::str2int(&modbusSpeed, modbusSpeedParam->value().c_str(), 10) != EDUtils::STR2INT_SUCCESS) {
            request->send(422, "application/json", "{\"message\": \"Incorrect modbus speed\"}");
            return;
        }

        switch (modbusSpeed) {
            case 1200:
                break;
            case 2400:
                break;
            case 4800:
                break;
            case 9600:
                break;
            case 19200:
                break;
            case 38400:
                break;
            case 57600:
                break;
            case 115200:
                break;
            default:
                request->send(422, "application/json", "{\"message\": \"Unsupported modbus speed\"}");
                return;
        }

        int modbusAddressWBMR6C;
        if (EDUtils::str2int(&modbusAddressWBMR6C, modbusAddressWBMR6CParam->value().c_str(), 10) != EDUtils::STR2INT_SUCCESS) {
            request->send(422, "application/json", "{\"message\": \"Incorrect WB-MR6C address\"}");
            return;
        }

        int modbusAddressQDY30A;
        if (EDUtils::str2int(&modbusAddressQDY30A, modbusAddressQDY30AParam->value().c_str(), 10) != EDUtils::STR2INT_SUCCESS) {
            request->send(422, "application/json", "{\"message\": \"Incorrect QDY30A address\"}");
            return;
        }

        _configMgr->getData()->modbusSpeed = modbusSpeed;
        _configMgr->getData()->modbusAddressWBMR6C = modbusAddressWBMR6C;
        _configMgr->getData()->modbusAddressQDY30A = modbusAddressQDY30A;

        if (_configMgr->store()) {
            request->send(200, "application/json", "{}");
        } else {
            request->send(500, "application/json", "{\"message\": \"Failed to update config\"}");
        }
    });

    // Specific /api/settings/* route MUST be registered before bare /api/settings
    // (BackwardCompatible URI matching: exact OR prefix + '/').
    _server->on("/api/settings/mqtt", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string payload = EDUtils::buildJson([this](JsonObject entity) {
            auto config = _configMgr->getData();

            entity["host"] = config->mqtt.host;
            entity["port"] = config->mqtt.port;
            entity["login"] = config->mqtt.login;
            entity["password"] = config->mqtt.password;
            entity["haDiscoveryPrefix"] = config->mqttHADiscoveryPrefix;
            entity["topicPrefix"] = config->mqttTopicsPrefix;
            entity["mqttIsHADiscovery"] = config->mqttIsHADiscovery;
        });

        response->write(payload.c_str());
        request->send(response);
    });

    _server->on("/api/settings", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string payload = EDUtils::buildJson([this](JsonObject entity) {
            auto config = _configMgr->getData();

            entity["wifiSSID"] = config->network.wifiSSID;
            entity["wifiPassword"] = config->network.wifiPassword;
            entity["mqttHost"] = config->mqtt.host;
            entity["mqttPort"] = config->mqtt.port;
            entity["mqttLogin"] = config->mqtt.login;
            entity["mqttPassword"] = config->mqtt.password;
            entity["mqttTopicPrefix"] = config->mqttTopicsPrefix;
            entity["mqttIsHADiscovery"] = config->mqttIsHADiscovery;
            entity["mqttHADiscoveryPrefix"] = config->mqttHADiscoveryPrefix;
        });

        response->write(payload.c_str());
        request->send(response);
    });

    _server->on("/api/settings/wifi", HTTP_POST, [this](AsyncWebServerRequest *request) {
        if (!request->hasParam("wifiSSID", true) || !request->hasParam("wifiPassword", true)) {
            request->send(422, "application/json", "{\"message\": \"not present wifiSSID or wifiPassword in request\"}");
            return;
        }

        const AsyncWebParameter* wifiSSID = request->getParam("wifiSSID", true);
        const AsyncWebParameter* wifiPassword = request->getParam("wifiPassword", true);

        if (wifiSSID->value().length() > WIFI_SSID_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"WiFi SSID lenght more 32 symbols\"}");
            return;
        }

        if (wifiPassword->value().length() > WIFI_PWD_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"WiFi password lenght more 63 symbols\"}");
            return;
        }

        auto config = _configMgr->getData();
        std::strcpy(config->network.wifiSSID, wifiSSID->value().c_str());
        std::strcpy(config->network.wifiPassword, wifiPassword->value().c_str());
        config->network.isAPMode = false;

        _configMgr->store();

        request->send(200, "application/json", "{}");
    });

    _server->on("/api/settings/mqtt", HTTP_POST, [this](AsyncWebServerRequest *request) {
        if (
            !request->hasParam("host", true)
            || !request->hasParam("port", true)
            || !request->hasParam("login", true)
            || !request->hasParam("password", true)
            || !request->hasParam("haDiscoveryPrefix", true)
            || !request->hasParam("topicPrefix", true)
        ) {
            request->send(422, "application/json", "{\"message\": \"not present mqtt params in request\"}");
            return;
        }

        auto config = _configMgr->getData();
        const AsyncWebParameter* host = request->getParam("host", true);
        const AsyncWebParameter* port = request->getParam("port", true);
        const AsyncWebParameter* login = request->getParam("login", true);
        const AsyncWebParameter* password = request->getParam("password", true);
        const AsyncWebParameter* haDiscoveryPrefix = request->getParam("haDiscoveryPrefix", true);
        const AsyncWebParameter* ishaDiscoveryEnabled = request->getParam("mqttIsHADiscovery", true);
        const AsyncWebParameter* topicPrefixParam = request->getParam("topicPrefix", true);

        if (host->value().length() == 0 || host->value().length() > HOST_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"MQTT host lenght invalid\"}");
            return;
        }

        int mqttPort;
        if (EDUtils::str2int(&mqttPort, port->value().c_str(), 10) != EDUtils::STR2INT_SUCCESS) {
            request->send(422, "application/json", "{\"message\": \"Incorrect port\"}");
            return;
        }

        if (login->value().length() > MQTT_LOGIN_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"MQTT login length invalid\"}");
            return;
        }

        if (password->value().length() > MQTT_PASSWORD_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"MQTT password length invalid\"}");
            return;
        }

        if (haDiscoveryPrefix->value().length() == 0) {
            request->send(422, "application/json", "{\"message\": \"You must specify mqtt topic name\"}");
            return;
        }

        if (haDiscoveryPrefix->value().length() > MQTT_TOPIC_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"HA discovery prefix length invalid\"}");
            return;
        }

        if (topicPrefixParam->value().length() > MQTT_TOPIC_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"Topic prefix length invalid\"}");
            return;
        }

        strcpy(config->mqtt.host, host->value().c_str());
        config->mqtt.port = (uint16_t)mqttPort;
        strcpy(config->mqtt.login, login->value().c_str());
        strcpy(config->mqtt.password, password->value().c_str());
        strcpy(config->mqttHADiscoveryPrefix, haDiscoveryPrefix->value().c_str());
        strcpy(config->mqttTopicsPrefix, topicPrefixParam->value().c_str());

        config->mqttIsHADiscovery =
            ishaDiscoveryEnabled != nullptr && strcmp(ishaDiscoveryEnabled->value().c_str(), "true") == 0;

        _configMgr->store();

        request->send(200, "application/json", "{}");
    });

    _server->on("/api/devices", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string payload = EDUtils::buildJson([this](JsonObject root) {
            writeDevices(root, _devices->snapshot());
        });

        response->write(payload.c_str());
        request->send(response);
    });

    _server->on("/api/devices/set", HTTP_POST, [this](AsyncWebServerRequest *request) {
        handleDeviceSet(request);
    });

    _server->on("/api/status", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string data = EDUtils::buildJson([this](JsonObject entity) {
            if (_networkMgr->isConnected()) {
                entity[F("wifiStatus")] = "connected";
            } else {
                entity[F("wifiStatus")] = "disconnected";
            }

            entity[F("freeHeap")] = ESP.getFreeHeap();
            entity[F("uptime")] = esp_timer_get_time() / 1000000;

            esp_reset_reason_t reason = esp_reset_reason();

            switch (reason) {
                case ESP_RST_POWERON:
                    entity[F("lastResetReason")] = "Power-on Reset";
                    break;
                case ESP_RST_EXT:
                    entity[F("lastResetReason")] = "External Reset";
                    break;
                case ESP_RST_SW:
                    entity[F("lastResetReason")] = "Software Reset";
                    break;
                case ESP_RST_PANIC:
                    entity[F("lastResetReason")] = "Panic Reset";
                    break;
                case ESP_RST_INT_WDT:
                    entity[F("lastResetReason")] = "Interrupt Watchdog Reset";
                    break;
                case ESP_RST_TASK_WDT:
                    entity[F("lastResetReason")] = "Task Watchdog Reset";
                    break;
                case ESP_RST_WDT:
                    entity[F("lastResetReason")] = "Other Watchdog Reset";
                    break;
                case ESP_RST_DEEPSLEEP:
                    entity[F("lastResetReason")] = "Wake from Deep Sleep";
                    break;
                case ESP_RST_BROWNOUT:
                    entity[F("lastResetReason")] = "Brownout Reset";
                    break;
                case ESP_RST_SDIO:
                    entity[F("lastResetReason")] = "SDIO Reset";
                    break;
                default:
                    entity[F("lastResetReason")] = "Unknown";
                    break;
            }
        });
        response->print(data.c_str());
        request->send(response);
    });

    _server->on("/api/reboot", HTTP_POST, [this](AsyncWebServerRequest *request) {
        request->send(200, "application/json", "{}");
        delay(200);
        ESP.restart();
    });

    _server->begin();
}

void Handler::registerLogSettingsHandlers()
{
    _server->on("/api/log/settings", HTTP_GET, [this](AsyncWebServerRequest* request) {
        sendLogSettingsState(request, 200, _logger->getConfig(), _logger->isEnabled());
    });

    auto* postHandler = new AsyncCallbackJsonWebHandler(
        "/api/log/settings",
        [this](AsyncWebServerRequest* request, JsonVariant& json) {
            if (!json.is<JsonObject>()) {
                sendJsonMessage(request, 422, "invalid json");
                return;
            }

            const JsonVariant hostValue = json["host"];
            if (hostValue.isNull() || !hostValue.is<const char*>() || strlen(hostValue.as<const char*>()) == 0) {
                sendJsonMessage(request, 422, "host is required");
                return;
            }

            if (strlen(hostValue.as<const char*>()) >= LOG_HOST_LEN) {
                sendJsonMessage(request, 422, "host too long");
                return;
            }

            const JsonVariant uriValue = json["uri"];
            if (uriValue.isNull() || !uriValue.is<const char*>() || strlen(uriValue.as<const char*>()) == 0) {
                sendJsonMessage(request, 422, "uri is required");
                return;
            }

            if (strlen(uriValue.as<const char*>()) >= LOG_HOST_LEN) {
                sendJsonMessage(request, 422, "uri too long");
                return;
            }

            const JsonVariant portValue = json["port"];
            if (!portValue.is<int>() || portValue.as<int>() < 1 || portValue.as<int>() > 65535) {
                sendJsonMessage(request, 422, "invalid port");
                return;
            }

            const bool hasEnabled = !json["enabled"].isNull();
            if (hasEnabled && !json["enabled"].is<bool>()) {
                sendJsonMessage(request, 422, "invalid enabled");
                return;
            }

            EDUtils::LogConfig config;
            strncpy(config.host, hostValue.as<const char*>(), sizeof(config.host) - 1);
            config.host[sizeof(config.host) - 1] = '\0';
            strncpy(config.uri, uriValue.as<const char*>(), sizeof(config.uri) - 1);
            config.uri[sizeof(config.uri) - 1] = '\0';
            config.port = static_cast<uint16_t>(portValue.as<int>());

            if (!_logger->setConfig(config)) {
                sendJsonMessage(request, 422, "invalid settings");
                return;
            }

            if (hasEnabled) {
                _logger->enable(json["enabled"].as<bool>());
            }

            // enabled is runtime-only (network connect events drive it); only
            // the target fields belong to the persisted Config layout.
            auto current = _configMgr->getData();
            strncpy(current->log.host, config.host, sizeof(current->log.host) - 1);
            current->log.host[sizeof(current->log.host) - 1] = '\0';
            strncpy(current->log.uri, config.uri, sizeof(current->log.uri) - 1);
            current->log.uri[sizeof(current->log.uri) - 1] = '\0';
            current->log.port = config.port;

            if (!_configMgr->store()) {
                sendJsonMessage(request, 500, "failed to store settings");
                return;
            }

            sendLogSettingsState(request, 200, _logger->getConfig(), _logger->isEnabled());
        }
    );
    postHandler->setMethod(HTTP_POST);
    postHandler->setMaxContentLength(1024);
    _server->addHandler(postHandler);
}

void Handler::handleDeviceSet(AsyncWebServerRequest* request)
{
    if (!request->hasParam("id", true)) {
        request->send(422, "application/json", "{\"message\": \"id is required\"}");
        return;
    }

    const String id = request->getParam("id", true)->value();

    if (_devices->isSensor(id.c_str()) || !_devices->isSwitch(id.c_str())) {
        request->send(422, "application/json", "{\"message\": \"unknown device\"}");
        return;
    }

    if (!request->hasParam("enabled", true)) {
        request->send(422, "application/json", "{\"message\": \"enabled is required\"}");
        return;
    }

    bool enabled = false;
    if (!parseEnabled(request->getParam("enabled", true)->value(), enabled)) {
        request->send(422, "application/json", "{\"message\": \"incorrect enabled value\"}");
        return;
    }

    bool known = false;
    if (!_devices->setSwitchState(id.c_str(), enabled, known)) {
        if (!known) {
            request->send(422, "application/json", "{\"message\": \"unknown device\"}");
        } else {
            request->send(500, "application/json", "{\"message\": \"device not ready\"}");
        }
        return;
    }

    request->send(200, "application/json", "{}");
}
