#pragma once

#include <Arduino.h>
#include <cmath>
#include <ctime>
#include <optional>
#include <vector>

constexpr double DegreeToRad = M_PI / 180.0;
constexpr double RadToDegree = 180.0 / M_PI;

struct SunConfig
{
    double lat;
    double lon;
    time_t offset;

    SunConfig(double lat, double lon, time_t offset) : lat(lat), lon(lon), offset(offset) {}
};

using TimePoint = std::time_t;

class Sun
{
public:
    void init(const SunConfig& c)
    {
        _lat  = c.lat;
        _lon = c.lon;
        _offset = c.offset;
    }

    std::pair<std::pair<TimePoint, bool>, std::pair<TimePoint, bool>> calculateTimeByAngle(TimePoint date, double angle) const;
    double calculateSunAngle(TimePoint date) const;

private:
    double julianDateFromUnix(TimePoint t) const
    {
        return static_cast<double>(t) / 86400.0 + 2440587.5;
    }

private:
    double _lat = 0.0;
    double _lon = 0.0;
    time_t _offset = 0;
};
