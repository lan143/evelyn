#pragma once

#ifdef ESP32
    #include <AsyncTCP.h>
#elif defined(ESP8266)
    #include <ESPAsyncTCP.h>
#endif

#include <ESPAsyncWebServer.h>
#include <data_mgr.h>
#include <healthcheck.h>
#include <log/log.h>
#include <network/network.h>
#include <network/network_api.h>

#include "config.h"
#include "control/devices.h"

class Handler {
public:
    Handler(
        EDConfig::DataMgr<Config>* configMgr,
        EDNetwork::NetworkMgr* networkMgr,
        EDNetwork::NetworkApi* networkApi,
        EDHealthCheck::HealthCheck* healthCheck,
        EDUtils::NetworkLogger* logger
    ) : _configMgr(configMgr), _networkMgr(networkMgr), _networkApi(networkApi),
        _healthCheck(healthCheck), _logger(logger) {
        _server = new AsyncWebServer(80);
    }

    void init(Devices* devices);

private:
    void registerLogSettingsHandlers();
    void handleDeviceSet(AsyncWebServerRequest* request);

private:
    AsyncWebServer* _server;
    EDConfig::DataMgr<Config>* _configMgr;
    EDNetwork::NetworkMgr* _networkMgr;
    EDNetwork::NetworkApi* _networkApi;
    EDHealthCheck::HealthCheck* _healthCheck;
    EDUtils::NetworkLogger* _logger;
    Devices* _devices = nullptr;
};
