#include <log/log.h>

#include "light.h"

void LightAutomation::init()
{
    calculate();
}

void LightAutomation::update()
{
    if (_nextUpdateTime < esp_timer_get_time()) {
        calculate();
    }
}

void LightAutomation::calculate()
{
    if (!_timeClient->isTimeSet()) {
        LOGD("calculate", "ntp client not ready, try again later");
        _nextUpdateTime = esp_timer_get_time() + 5000000ULL;
        return;
    }

    auto currentTime = _timeClient->getEpochTime();
    auto sunResult = _sun->calculateTimeByAngle(currentTime, 0);

    LOGD(
        "calculate",
        "current time: %s, unix: %d",
        _timeClient->getFormattedTime().c_str(),
        currentTime);

    if (sunResult.second.second) {
        if (sunResult.second.first > currentTime) {
            _localAreaBacklight->setState(false);
            _nextUpdateTime = esp_timer_get_time() + (sunResult.second.first - currentTime) * 1000000ULL;
            LOGD(
                "calculate",
                "current time before sunset time. Disable light and sleep %d seconds. Next update time: %lld",
                sunResult.second.first - currentTime,
                _nextUpdateTime
            );
        } else {
            time_t midnight = (currentTime / 86400) * 86400;
            time_t target2300 = midnight + 23 * 3600;

            if (target2300 <= currentTime) {
                _localAreaBacklight->setState(false);
                _nextUpdateTime = esp_timer_get_time() + 2 * 60 * 60 * 1000000ULL;
                LOGD(
                    "calculate",
                    "current time after sunset and after 23:00. Disable light and sleep 2 hours. Next update time: %lld",
                    _nextUpdateTime
                );
            } else {
                _localAreaBacklight->setState(true);
                time_t secondsUntil2300 = target2300 - currentTime;
                _nextUpdateTime = esp_timer_get_time() + secondsUntil2300 * 1000000ULL;

                LOGD(
                    "calculate",
                    "current time after sunset and before 23:00. Enable light and sleep %d seconds. Sunset time: %d. Next update time: %lld",
                    target2300 - currentTime,
                    sunResult.second.first,
                    _nextUpdateTime
                );
            }
        }
    } else {
        LOGE("init", "failed to get sunset time");
        _nextUpdateTime = esp_timer_get_time() + 60 * 1000000ULL;
    }
}
