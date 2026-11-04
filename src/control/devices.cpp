#include <math.h>
#include <string.h>

#include "devices.h"

namespace
{
    constexpr uint32_t SNAPSHOT_INTERVAL_MS = 500;

    void updateSwitch(Devices::SwitchValue& target, std::pair<bool, bool> value)
    {
        target.enabled = value.first;
        target.available = value.second;
    }
}

Devices::Devices(
    EDCommon::Light::Relay* localAreaBacklight,
    EDCommon::Light::Relay* yardFenceBacklight,
    EDCommon::Light::Relay* localAreaGarland,
    EDCommon::Relay::WBMR6C* leftLawnWatering,
    EDCommon::Relay::WBMR6C* localAreaRightLawnWatering,
    EDCommon::Sensor::WaterLevel* rainwaterPitLevel,
    EDCommon::BinarySensor::WBMR6C* gateContact
) : _localAreaBacklight(localAreaBacklight),
    _yardFenceBacklight(yardFenceBacklight),
    _localAreaGarland(localAreaGarland),
    _leftLawnWatering(leftLawnWatering),
    _localAreaRightLawnWatering(localAreaRightLawnWatering),
    _rainwaterPitLevel(rainwaterPitLevel),
    _gateContact(gateContact)
{
}

void Devices::updateSnapshot()
{
    const uint32_t now = millis();

    if (_snapshotInitialized && (now - _lastSnapshotUpdateTime) < SNAPSHOT_INTERVAL_MS) {
        return;
    }

    _lastSnapshotUpdateTime = now;
    _snapshotInitialized = true;

    if (_localAreaBacklight != nullptr) {
        updateSwitch(_snapshot.localAreaBacklight, _localAreaBacklight->isEnabled());
    }

    if (_yardFenceBacklight != nullptr) {
        updateSwitch(_snapshot.yardFenceBacklight, _yardFenceBacklight->isEnabled());
    }

    if (_localAreaGarland != nullptr) {
        updateSwitch(_snapshot.localAreaGarland, _localAreaGarland->isEnabled());
    }

    if (_leftLawnWatering != nullptr) {
        updateSwitch(_snapshot.leftLawnWatering, _leftLawnWatering->isEnabled());
    }

    if (_localAreaRightLawnWatering != nullptr) {
        updateSwitch(_snapshot.localAreaRightLawnWatering, _localAreaRightLawnWatering->isEnabled());
    }

    if (_rainwaterPitLevel != nullptr) {
        auto level = _rainwaterPitLevel->getValue();
        _snapshot.rainwaterPitLevel.value = roundf(level.first * 1000.0f) / 1000.0f;
        _snapshot.rainwaterPitLevel.available = level.second;
    }

    if (_gateContact != nullptr) {
        auto active = _gateContact->isActive();
        _snapshot.gate.value = active.first;
        _snapshot.gate.available = active.second;
    }
}

bool Devices::isSensor(const char* id) const
{
    return strcmp(id, "rainwater_pit_level") == 0 || strcmp(id, "gate") == 0;
}

bool Devices::isSwitch(const char* id) const
{
    return strcmp(id, "local_area_backlight") == 0
        || strcmp(id, "yard_fence_backlight") == 0
        || strcmp(id, "local_area_garland") == 0
        || strcmp(id, "left_lawn_watering") == 0
        || strcmp(id, "local_area_right_watering") == 0;
}

bool Devices::setSwitchState(const char* id, bool enabled, bool& known)
{
    known = true;

    if (strcmp(id, "local_area_backlight") == 0 && _localAreaBacklight != nullptr) {
        return _localAreaBacklight->setState(enabled);
    }

    if (strcmp(id, "yard_fence_backlight") == 0 && _yardFenceBacklight != nullptr) {
        return _yardFenceBacklight->setState(enabled);
    }

    if (strcmp(id, "local_area_garland") == 0 && _localAreaGarland != nullptr) {
        return _localAreaGarland->setState(enabled);
    }

    if (strcmp(id, "left_lawn_watering") == 0 && _leftLawnWatering != nullptr) {
        return _leftLawnWatering->setState(enabled);
    }

    if (strcmp(id, "local_area_right_watering") == 0 && _localAreaRightLawnWatering != nullptr) {
        return _localAreaRightLawnWatering->setState(enabled);
    }

    known = false;
    return false;
}
