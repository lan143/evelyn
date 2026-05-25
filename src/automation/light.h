#pragma once

#include <Arduino.h>
#include <NTPClient.h>
#include <light/light.h>

#include "service/sun.h"

class LightAutomation
{
public:
    LightAutomation(
        NTPClient* timeClient,
        Sun* sun,
        EDCommon::Light::Light* localAreaBacklight
    ) : _timeClient(timeClient), _sun(sun), _localAreaBacklight(localAreaBacklight) {}

    void init();
    void update();

private:
    void calculate();

private:
    NTPClient* _timeClient = nullptr;
    Sun* _sun = nullptr;
    EDCommon::Light::Light* _localAreaBacklight = nullptr;

private:
    int64_t _nextUpdateTime = 0;
};