#pragma once

#include <Arduino.h>
#include <WiFi.h>
#include <mqtt_config.h>
#include <network/network_config.h>
#include <log/log_config.h>

#include "defines.h"

#define CURRENT_VERSION 1

struct Config
{
    uint8_t version = CURRENT_VERSION;

    EDNetwork::Config network;
    EDMQTT::Config mqtt;
    EDUtils::LogConfig log;

    char otaPassword[WIFI_PWD_LEN] = {0};

    bool mqttIsHADiscovery = true;
    char mqttHADiscoveryPrefix[MQTT_TOPIC_LEN] = {0};
    char mqttTopicsPrefix[MQTT_TOPIC_LEN] = {0};

    // modbus
    uint32_t modbusSpeed = 0;
    uint8_t addressQDY30A = 0;
    uint8_t modbusAddressWBMR6C = 0;
};
