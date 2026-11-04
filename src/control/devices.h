#pragma once

#include <Arduino.h>
#include <binary_sensor/wb_mr6c.h>
#include <light/relay_light.h>
#include <relay/wb_mr6c.h>
#include <sensor/water_level.h>

// Plain data shared between the loopTask producer and the web handler
// (async_tcp consumer). The web task only reads this snapshot and enqueues
// commands through the existing entity methods.
class Devices
{
public:
    struct SwitchValue
    {
        bool enabled = false;
        bool available = false;
    };

    struct SensorValue
    {
        float_t value = 0;
        bool available = false;
    };

    struct BinaryValue
    {
        bool value = false;
        bool available = false;
    };

    struct Snapshot
    {
        SwitchValue localAreaBacklight;
        SwitchValue yardFenceBacklight;
        SwitchValue localAreaGarland;
        SwitchValue leftLawnWatering;
        SwitchValue localAreaRightLawnWatering;
        SensorValue rainwaterPitLevel;
        BinaryValue gate;
    };

    Devices(
        EDCommon::Light::Relay* localAreaBacklight,
        EDCommon::Light::Relay* yardFenceBacklight,
        EDCommon::Light::Relay* localAreaGarland,
        EDCommon::Relay::WBMR6C* leftLawnWatering,
        EDCommon::Relay::WBMR6C* localAreaRightLawnWatering,
        EDCommon::Sensor::WaterLevel* rainwaterPitLevel,
        EDCommon::BinarySensor::WBMR6C* gateContact
    );

    // Reads cached sensor values and the loopTask-only relay isEnabled()
    // Modbus polls. Must only be called from loopTask.
    void updateSnapshot();

    const Snapshot& snapshot() const { return _snapshot; }

    bool isSensor(const char* id) const;
    bool isSwitch(const char* id) const;

    // known is false for unknown ids and sensors. The return value mirrors the
    // entity setState() result.
    bool setSwitchState(const char* id, bool enabled, bool& known);

private:
    EDCommon::Light::Relay* _localAreaBacklight = nullptr;
    EDCommon::Light::Relay* _yardFenceBacklight = nullptr;
    EDCommon::Light::Relay* _localAreaGarland = nullptr;
    EDCommon::Relay::WBMR6C* _leftLawnWatering = nullptr;
    EDCommon::Relay::WBMR6C* _localAreaRightLawnWatering = nullptr;
    EDCommon::Sensor::WaterLevel* _rainwaterPitLevel = nullptr;
    EDCommon::BinarySensor::WBMR6C* _gateContact = nullptr;

    Snapshot _snapshot;
    uint32_t _lastSnapshotUpdateTime = 0;
    bool _snapshotInitialized = false;
};
