# AGENTS.md — engineering guide

This file is for AI agents and contributors working on the Evelyn firmware. It
describes the verified architecture and the rules that keep changes safe. It is
not a user manual — see `README.md` for that.

## 1. Project snapshot

Evelyn is ESP32 firmware for an outdoor/yard home-automation controller built
around Wiren Board devices on RS-485/Modbus. It runs on the Arduino framework via
PlatformIO (`platform = espressif32`, `board = esp32dev`) and provides:

- Modbus control of a Wiren Board WB-MR6C six-relay module and polling of a
  QDY30A ultrasonic water-level sensor;
- MQTT publishing with Home Assistant auto-discovery (`homeassistant` prefix by
  default);
- an async web server on port 80 serving a Preact single-page UI from LittleFS;
- ArduinoOTA updates and a remote syslog-like logger for diagnostics;
- LittleFS for the web root (`data/`) and persisted config (`/config.bin`).

Two environments exist: `wbmge` (USB upload, `board_build.filesystem =
littlefs`, `board_build.flash_mode = dio`) and `wbmge_ota` (extends `wbmge`,
`upload_protocol = espota`, `upload_port = 192.168.1.48`,
`upload_flags = --auth=somestrongpassword`).

## 2. Commands

```sh
npm --prefix frontend run build  # typecheck + Vite build into data/ (web UI)
pio run -e wbmge                 # compile (minimum validation)
pio run -e wbmge -t upload       # flash firmware over USB
pio run -e wbmge -t uploadfs     # REQUIRED after any change under data/
pio run -e wbmge_ota -t upload   # OTA update; target IP is upload_port in platformio.ini
pio device monitor -b 115200     # serial monitor (exception decoder enabled)
```

`data/` is generated output: never hand-edit it. The Preact + TypeScript
sources live in `frontend/`; run `npm --prefix frontend run build` (which runs
`tsc --noEmit && vite build`) to refresh `data/`, then flash the filesystem with
`pio run -e wbmge -t uploadfs` before the change is visible on the device. Vite
clears `data/` on every build (`emptyOutDir`), so stale files cannot survive.
`npm --prefix frontend install` is needed once (and after dependency changes).

Shell output in this repository is wrapped by `rtk`; see `RTK.md` for the
token-saving recipes and for recovering full output. There are no unit tests and
no CI: a clean compilation is the minimum validation.

## 3. Architecture map

| Path | Responsibility |
| --- | --- |
| `src/main.cpp` | Composition root: global objects, `setup()` wiring order, `loop()` call order, shared HA device and entity registration. |
| `src/defines.h` | Pins, MR6C relay channel map, buffer lengths, device metadata (`WB-MGE`, `v.3`, FW `0.1.0`). |
| `src/config.h` | Root `Config` struct and `CURRENT_VERSION`; composes `EDNetwork::Config`, `EDMQTT::Config`, `EDUtils::LogConfig` and the Modbus/OTA fields. |
| `src/service/sun.h`, `src/service/sun.cpp` | `Sun`: NOAA-style solar-altitude math and `calculateTimeByAngle(date, angle)` returning the sunrise/sunset crossings. |
| `src/automation/light.h`, `src/automation/light.cpp` | `LightAutomation`: sunset/23:00 schedule for the local-area backlight only. |
| `src/web/handler.h`, `src/web/handler.cpp` | `AsyncWebServer` on port 80: static LittleFS hosting, `/api/*` REST endpoints, healthcheck handlers. |
| `frontend/` | Preact + TypeScript SPA sources, Vite config and local UI packages (`edc-config-ui`, `edn-network-ui`, `edu-log-ui`). |
| `data/` | Generated Vite build output (`index.html` + hashed `assets/`) served from LittleFS. Do not edit by hand. |
| `platformio.ini` | Environments, `lib_deps`, build flags (`-Wshadow`, `CORE_DEBUG_LEVEL=5`, `CONFIG_LOG_COLORS=1`). |
| `LICENSE` | MIT license, © 2026 Kravchenko Artyom. |

`setup()` order matters: Serial → verbose ESP log → LittleFS → I2C → TCA9555 →
config defaults/load → network logger → Modbus (`Serial1`) → network → OTA →
MQTT + network callback → healthcheck → web handler → discovery + shared
`EDHA::Device` → MR6C → 7 entities → NTP → Sun → `LightAutomation`.
`loop()` calls, in order: `initMR6C()`, `networkMgr`, `discoveryMgr`,
`ArduinoOTA.handle`, `healthCheck`, `networkLogger.update`,
`timeClient.update`, the `update()` of the 7 entities (the gate binary sensor
only after its init succeeded), then `lightAutomation->update()`.

## 4. External library ecosystem

The runtime core is the author's `ed-*` library family (`github.com/lan143`):
ed-mqtt, ed-config, ed-utils, ed-ha, ed-healthcheck, ed-wb, ed-network,
ed-common. `ESP32Async/ESPAsyncWebServer` + `ArduinoJSON` serve the API;
`TCA9555` drives the I2C expander; `NTPClient` and `FS` are also used.

Entities follow the `EDCommon` component pattern: allocate with `new`, call
`init(...)` with MQTT and discovery options (relays take a `switchChannel`
second argument, `-1` when no button input is wired; sensors take `precision`
and an update interval in milliseconds) and let `loop()` call `update()`:

```cpp
leftLawnWatering = new EDCommon::Relay::WBMR6C(mr6c);
leftLawnWatering->init(MR6C_CHANNEL_LEFT_LAWN_WATERING, -1, {
    EDCommon::Relay::withMQTT(
        &mqtt,
        configMgr.getData()->mqttTopicsPrefix,
        "evelyn",
        "Left lawn watering"
    ),
    EDCommon::Relay::withDiscovery(&discoveryMgr, device),
    EDCommon::Relay::withTimeout(20*60*1000000LL),
});
```

Lights use `EDCommon::Light::Relay` + `EDCommon::Light::withMQTT` /
`withDiscovery`. Every entity registers in BOTH MQTT and HA discovery via the
single shared `EDHA::Device` created in `main.cpp`, with room argument `evelyn`.

`BinarySensor::WBMR6C` takes `(channel, deviceClass, reverse, mr6c)` in its
constructor and configures its own MR6C input mode during `init()`;
`Sensor::WaterLevel` wraps the `EDWB::QDY30A` driver.

## 5. Configuration model

`Config` is persisted to `/config.bin` on LittleFS via `EDConfig::DataMgr`
(`EDConfig::StorageLittleFS<Config>`). All defaults live in the
`configMgr.setDefault(...)` lambda in `main.cpp`: Wi-Fi AP SSID
`Evelyn_<MAC>`, HA discovery prefix `homeassistant`, remote log host
`192.168.1.2:5555` with URI `/_bulk`, OTA password `somestrongpassword`, MQTT
topic prefix `evelyn/<chipid>`, Modbus speed `9600`, QDY30A address `1` and
WB-MR6C address `2`.

HARD RULE: any change to the `Config` struct layout requires bumping
`CURRENT_VERSION` in `src/config.h` (currently `1`) because ed-config storage is
versioned. The default `otaPassword` is duplicated in `main.cpp` (`setDefault`)
and in `platformio.ini` (`espota upload_flags`) — keep the two in sync.

Dependencies in `platformio.ini` are pinned for the eight `ed-*` libraries: tags
where upstream has them at the wanted state (ed-mqtt 0.1.1, ed-utils 0.2.0,
ed-common 0.4.0) and 40-character git SHAs otherwise (ed-config, ed-ha,
ed-healthcheck, ed-wb, ed-network, because upstream has no tags or the tag is
older than the working commit). The registry libraries are pinned too:
ESPAsyncWebServer 3.12.1, AsyncTCP 3.5.0, ArduinoJson 7.4.3, TCA9555 0.4.4 and
NTPClient 3.2.1. `FS` is an Arduino framework built-in without a version pin. Do
not float the `ed-*` refs back to bare URLs and do not add new floating
dependencies; pin any touched dependency to a tag or full SHA in the same
change. The `lib_ignore = RPAsyncTCP, ESPAsyncTCP` option in `[env:wbmge]`
exists because ESPAsyncWebServer 3.12.1 declares all platform TCP backends as
transitive dependencies and PlatformIO 6.2.0 does not filter them by target
platform. On ESP32 only the explicitly pinned `ESP32Async/AsyncTCP` backend may
build. Never remove the `lib_ignore` lines or add those backends to `lib_deps`.

## 6. Conventions

- Private members use `_camelCase` (see `Sun`, `LightAutomation`, `Handler`);
  pointers are initialized to `nullptr`.
- Logging uses `LOGI` / `LOGD` / `LOGE` with a short tag, e.g.
  `LOGE("initMR6C", ...)`.
- New code, comments and commit messages are English. Some pre-existing comments
  in `src/service/sun.cpp` are Russian; do not propagate that pattern or write
  new Russian text.
- Commit messages are short imperative sentences (e.g. "Implement light
  automation").
- Entities are created once in `setup()` with `new`, initialized immediately,
  and intentionally never freed (one boot lifetime).
- Frontend JSON keys mirror the firmware contract in `src/web/handler.cpp`
  (`/api/devices`, `/api/log/settings`, `/api/settings/modbus`,
  `/api/settings/mqtt`, `/api/status`); when an API shape changes, update the
  matching page and types under `frontend/src/` in the same change. `data/` is
  build output, so edits go to `frontend/` and are regenerated by the Vite
  build.
- Code that touches Modbus/serial belongs in `loopTask` paths (entity
  `update()`, `setup()`, `initMR6C()`); the async web handlers only read/write
  config and system state.

## 7. Invariants and gotchas

- `-Wshadow` is enabled: do not shadow globals, parameters or members.
- Entities are heap-allocated in `setup()` and intentionally never freed. Do not
  add cleanup churn.
- Modbus runs over `Serial1` (RX GPIO9, TX GPIO10, RTS GPIO4). Synchronous
  `EDWB`/`EDCommon` device access must only happen from the loop task; do not
  call it from the async web server callbacks.
- The web server has NO authentication anywhere. `GET /api/settings` returns the
  Wi-Fi SSID/password and MQTT login/password in plaintext; `GET
  /api/settings/modbus` returns the bus parameters. Operate on a trusted LAN
  only and do not extend the exposure. Any new POST endpoint must validate
  required params/lengths and answer `422` with a JSON `{"message": ...}` body,
  following the existing handlers.
- `POST /api/settings/wifi` ignores the return value of `configMgr.store()` and
  always answers `200`; the Modbus handler is the reference for reporting a
  store failure (`500`).
- The 20-minute auto-off on the two watering relays
  (`EDCommon::Relay::withTimeout(20*60*1000000LL)` microseconds) is a safety
  limit. Do not remove or shorten it without hardware context.
- The sunset automation depends on NTP sync: `calculate()` retries every 5 s
  while `timeClient.isTimeSet()` is false, and every 60 s if the sunset
  calculation fails. A controller without network time keeps the light in its
  last state until time is available.
- The sun coordinates (`44.067465, 42.887368`) and UTC+3 offsets in
  `timeClient.setTimeOffset(3600*3)` and `SunConfig(..., 3600*3)` are hardcoded
  and marked `// tmp, move to config`. Treat them as temporary.
- `initMR6C()` forces MR6C inputs 2..6 into `MR6C_INPUT_MODE_FREQUENCY` on every
  boot until it succeeds (about 1 s retry cadence); this neutralizes the unused
  button inputs. Input 1 is owned by `gateContact` — the new
  `EDCommon::BinarySensor::WBMR6C` sets its own input mode during `init()`.
- A failed binary-sensor `init()` leaves the internal update interval at zero,
  which would busy-poll the Modbus bus from `update()`. `initGateContact()`
  therefore retries `gateContact->init(500, ...)` every second until success and
  `loop()` only calls `gateContact->update()` when `gateContactInited` is true.
  Preserve this guard when touching the gate wiring.
- `GET /api/wifi/list` is a stub: the handler body is fully commented out, so it
  never responds. Do not document it as a working scan endpoint.
- `LightAutomation::init()` is never called. This is harmless: `_nextUpdateTime`
  starts at `0`, so the first `update()` in `loop()` immediately runs
  `calculate()`.
- `tca9555.begin(OUTPUT, 0x40)` is a temporary "enable Vout" step; do not
  remove it without hardware context.

## 8. Validation / definition of done

- `pio run -e wbmge` completes cleanly.
- Any UI change requires `npm --prefix frontend run build` (typecheck + Vite)
  and then `pio run -e wbmge -t uploadfs`; mention `-t uploadfs` in the
  PR/commit note. Never edit `data/` directly.
- Changes touching pins, the Modbus map/addresses or the `Config` layout are
  device-sensitive: flag them for physical testing on real hardware.
- For OTA-only changes, `pio run -e wbmge_ota -t upload` must target the device
  IP in `platformio.ini` and use the OTA password configured on the device.

## 9. Known gaps

- No unit tests, no CI pipeline and no lint/format configuration.
- `FS` is an Arduino framework built-in library with no version pin.
- Legacy macros `RELAY_WARM_FLOOR`, `RELAY_UNKNOW`, `MQTT_DEFAULT_PORT` and
  `MR6C_CHANNEL_SIX` in `src/defines.h` are unused.
- `deviceFWVersion` in `src/defines.h` is maintained manually (currently
  `0.1.0`).
- `CURRENT_VERSION` is still `1`; bump it with any `Config` layout change.
- The web UI has no authentication and exposes stored credentials via
  `/api/settings`; `GET /api/wifi/list` is a non-responsive stub.
- Sun coordinates and UTC offset are hardcoded firmware values rather than
  configuration.
