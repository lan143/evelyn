# RTK.md — project usage notes

`rtk` is a CLI output-condensing proxy installed via Homebrew at
`/opt/homebrew/bin/rtk`. The global `~/.claude/RTK.md` defines the general
contract: condensed output is complete, truncated output states its recovery
path, and a command whose result is unusable is re-run with `rtk proxy <cmd>`.
This file only adds recipes that are useful in this repository; do not duplicate
the global rules.

## Common commands here

| Command | Use |
| --- | --- |
| `rtk git status` | Compact working-tree state. |
| `rtk git diff` | Condensed diff of uncommitted changes. |
| `rtk git log --oneline -10` | Recent commit history and message style. |
| `rtk grep <pattern>` | Compact literal/regex search, grouped by file. |
| `rtk rg <pattern>` | Native ripgrep with the same compact filter. |
| `rtk read src/main.cpp` | Filtered read of a source file (drop boilerplate). |
| `rtk find -name "*.h"` | Locate headers while keeping a compact tree. |
| `rtk ls` / `rtk tree` | Inspect `src/` and `data/` layout. |
| `rtk err pio run -e wbmge` | Build, surfacing only errors/warnings. |
| `rtk summary pio run -e wbmge -t upload` | USB upload with a short result summary. |
| `rtk summary pio run -e wbmge -t uploadfs` | Filesystem upload with a short result summary. |
| `rtk deps` | Dependency summary parsed from `platformio.ini`. |

Example workflow:

```sh
rtk git status
rtk grep "MR6C_CHANNEL" src
rtk read src/automation/light.cpp
rtk err pio run -e wbmge
```

## Getting full output

- A line like `[+N hidden: rtk recall <hash>]` means output was elided. Run
  `rtk recall <hash>` to print the omitted part.
- If output is empty when it clearly should not be, contradicts the exit code,
  or is garbled, bypass filtering with `rtk proxy <original cmd>` (tracked) or
  `rtk run <cmd>` (raw, no tracking).

## Repo-specific warnings

- Never wrap interactive sessions: run `pio device monitor -b 115200` plainly,
  without `rtk`, or the live serial stream and exception decoder are unusable.
- Do not hide build/upload failures: `pio run` exit code is the contract, and
  `rtk err` / `rtk summary` must still be checked against it.
- Web UI changes under `data/` still require
  `pio run -e wbmge -t uploadfs`; a successful compile says nothing about the
  filesystem image being flashed.
- For commands with no dedicated filter (for example unusual `pio` subcommands
  or `pio run -e wbmge_ota -t upload`), use `rtk run` or `rtk proxy` rather than
  guessing at a filter.
