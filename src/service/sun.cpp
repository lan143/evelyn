#include "sun.h"
std::pair<std::pair<TimePoint, bool>, std::pair<TimePoint, bool>> Sun::calculateTimeByAngle(TimePoint date, double angle) const 
{
    constexpr int stepMinutes = 1;
    constexpr int maxMinutes  = 24 * 60;

    // Начало суток: date уже локальное, делим нацело на 86400
    TimePoint tonight = (date / 86400) * 86400;

    std::vector<TimePoint> angleTimes;
    double prevAngle = calculateSunAngle(tonight);
    TimePoint prevTime = tonight;

    for (int i = 1; i <= maxMinutes; ++i) {
        TimePoint currentTime = tonight + i * stepMinutes * 60;
        double currentAngle   = calculateSunAngle(currentTime);

        if ((prevAngle < angle && currentAngle >= angle) ||
            (prevAngle > angle && currentAngle <= angle))
        {
            double fraction = (angle - prevAngle) / (currentAngle - prevAngle);
            double interpSec = fraction * (currentTime - prevTime);
            TimePoint angleTime = prevTime + static_cast<TimePoint>(interpSec);

            angleTimes.push_back(angleTime);

            if (angleTimes.size() == 2)
                break;
        }

        prevAngle = currentAngle;
        prevTime  = currentTime;
    }

    if (angleTimes.size() == 2)
        return {{angleTimes[0], true}, {angleTimes[1], true}};
    if (angleTimes.size() == 1)
        return {{angleTimes[0], true}, {0, false}};

    return {{0, false}, {0, false}};
}

double Sun::calculateSunAngle(TimePoint date) const
{
    // date локальное — вычитаем offset, чтобы получить UTC
    TimePoint utcTime = date - _offset;
    double jd = julianDateFromUnix(utcTime);
    double jc = (jd - 2451545.0) / 36525.0;

    double M  = (357.52911 + jc * (35999.05029 - 0.0001537 * jc)) * DegreeToRad;
    double L0 = (280.46646 + jc * (36000.76983 + 0.0003032 * jc)) * DegreeToRad;

    double C = (1.914602 - jc * (0.004817 + 0.000014 * jc)) * std::sin(M)
             + (0.019993 - 0.000101 * jc)                    * std::sin(2 * M)
             + 0.000289                                        * std::sin(3 * M);

    double sunLong = L0 + C * DegreeToRad;

    double epsilon = (23.439292 - 0.000013 * jc) * DegreeToRad;
    double sunRA  = std::atan2(std::cos(epsilon) * std::sin(sunLong), std::cos(sunLong));
    double sunDec = std::asin(std::sin(epsilon)  * std::sin(sunLong));

    double lmst = (280.46061837 + 360.98564736629 * (jd - 2451545.0) + _lon) * DegreeToRad;
    lmst = std::fmod(lmst, 2 * M_PI);
    if (lmst < 0) lmst += 2 * M_PI;

    double hourAngle = lmst - sunRA;
    if (hourAngle < 0)
        hourAngle += 2 * M_PI;

    double latRad   = _lat * DegreeToRad;
    double altitude = std::asin(
        std::sin(latRad) * std::sin(sunDec) +
        std::cos(latRad) * std::cos(sunDec) * std::cos(hourAngle)
    );

    return altitude * RadToDegree;
}
