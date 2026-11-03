# Evelyn — yard automation controller

Evelyn is ESP32 firmware for an outdoor/yard home-automation controller built on
a Wiren Board WB-MGE board. It controls a Wiren Board WB-MR6C six-relay module
and reads a QDY30A ultrasonic water-level sensor over RS-485/Modbus, publishes
everything to MQTT with Home Assistant auto-discovery, and serves its own
configuration web UI. Firmware updates can be done over the air (OTA).

## Features

- **Local-area backlight** — WB-MR6C relay channel 1.
- **Yard-fence backlight** — WB-MR6C relay channel 2.
- **Local-area garland** — WB-MR6C relay channel 3.
- **Left lawn watering** — WB-MR6C relay channel 4, with a 20-minute automatic
  shut-off.
- **Local-area right lawn watering** — WB-MR6C relay channel 5, with the same
  20-minute automatic shut-off.
- **Rainwater pit level** — QDY30A ultrasonic sensor.
- **Gate contact** — binary door sensor on WB-MR6C input 1.
- **Backlight automation** — the local-area backlight switches on at sunset and
  off at 23:00 local time, using NTP time and computed solar altitude.
- **Web configuration** — Wi-Fi, MQTT and Modbus settings from the browser.
- **Home Assistant integration** — every entity is announced via MQTT
  discovery.
- **OTA firmware updates** and a remote diagnostic logger.

## Hardware

| Interface | Purpose and pins |
| --- | --- |
| Ethernet | PHY RTL8201 at address 0; power GPIO5; MDC GPIO23; MDIO GPIO18; clock GPIO0 (input) |
| RS-485 | RX GPIO9, TX GPIO10, RTS GPIO4, hardware UART `Serial1` |
| I2C | SDA GPIO32, SCL GPIO33; TCA9555 expander at address 0x20 (temporary Vout enable) |

WB-MR6C v.3 channel map:

| Channel | Function | Notes |
| --- | --- | --- |
| 1 | Local-area backlight | Controlled by the sunset automation |
| 2 | Yard-fence backlight | |
| 3 | Local-area garland | |
| 4 | Left lawn watering | 20-minute auto-off |
| 5 | Local-area right lawn watering | 20-minute auto-off |
| 6 | — | Unused |

Input 1 is owned by the gate contact binary sensor, which sets its own input
mode during init; MR6C inputs 2–6 are neutralized (frequency mode) on every
boot. The gate sensor init automatically retries once per second until the
Modbus bus answers, so it also comes up when the relay module boots slowly.

Modbus defaults (9600 baud, 8N1):

| Device | Default address |
| --- | --- |
| WB-MR6C | 2 |
| QDY30A | 1 |

## Getting started

Prerequisites: PlatformIO (CLI or the VS Code extension) with the `espressif32`
platform.

Build and flash over USB:

```bash
pio run -e wbmge -t upload
pio run -e wbmge -t uploadfs
```

The second command is required: the web UI and its static assets live in
LittleFS. Without `uploadfs` the browser page will be missing or stale. The
files under `data/` are edited by hand; there is no frontend build step.

On first boot the controller starts a Wi-Fi access point named
`Evelyn_<MAC>`; join it, or connect through the wired Ethernet port, then open
`http://<device-ip>/` in a browser. In the Settings tab enter your home Wi-Fi
network, MQTT broker and Modbus parameters. Each save reboots the controller so
the new settings take effect.

## Configuration

The web UI has two tabs:

- **Statistic** — Wi-Fi status, uptime, free heap and the last reset reason,
  refreshed every 10 seconds.
- **Settings** — three forms:
  - **Wi-Fi** — SSID and password;
  - **MQTT** — broker host/port, login, password, topic prefix, Home Assistant
    discovery prefix and the discovery on/off switch;
  - **Modbus** — bus speed (1200–115200) and the WB-MR6C / QDY30A addresses.
    The addresses must match the devices actually attached to the bus.

Saving any form triggers an automatic reboot.

## Home Assistant

With discovery enabled, entities appear automatically under the configured
discovery prefix (`homeassistant` by default). The MQTT topic prefix defaults
to `evelyn/<chip-id>`, and all entities use the room name `evelyn`.

| Entity | Type | Source |
| --- | --- | --- |
| Local area backlight | light | WB-MR6C relay 1 |
| Yard fence backlight | light | WB-MR6C relay 2 |
| Local area garland | light | WB-MR6C relay 3 |
| Left lawn watering | relay / switch | WB-MR6C relay 4 |
| Local area right watering | relay / switch | WB-MR6C relay 5 |
| Rainwater pit level | water-level sensor | QDY30A |
| Gate | door binary sensor | WB-MR6C input 1 |

The sunset/23:00 schedule runs in firmware and is not exposed as a separate
Home Assistant entity; it drives the local-area backlight, which can still be
controlled manually.

## Firmware updates via OTA

```bash
pio run -e wbmge_ota -t upload
```

The target IP is `upload_port` in `platformio.ini` (currently `192.168.1.48`).
The espota password must match the OTA password stored in the controller
configuration.

## Security

The web server has no authentication. `GET /api/settings` returns the stored
Wi-Fi SSID/password and MQTT login/password in plaintext, and the Modbus
settings endpoint exposes the bus parameters. Operate the controller only on a
trusted local network and never publish its port to the internet. Change the
default OTA password (`somestrongpassword`) both in the firmware configuration
and in `platformio.ini`.

## Troubleshooting

- Live logs: `pio device monitor -b 115200` (the ESP32 exception decoder is
  enabled).
- Check Wi-Fi status, uptime, free heap and the last reset reason on the
  Statistic tab.
- If devices are missing, check RS-485 power and wiring, the Modbus speed and
  the WB-MR6C / QDY30A addresses in the Settings tab.
- After changing anything under `data/`, re-upload the filesystem:
  `pio run -e wbmge -t uploadfs`.
- `POST /api/reboot` (used by the web UI after saving settings) restarts the
  controller.

## License

MIT, © 2026 Kravchenko Artyom. See `LICENSE`.
