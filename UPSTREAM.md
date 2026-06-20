# Upstream references — kiro-sweet

Everything needed to refresh this theme from upstream in the future.

## Source

| | |
|------------------|------------------------------------------------------------|
| **Repo** | https://github.com/Gigas002/Sweet-kde |
| **Branch** | `plasma-6-migration` |
| **Vendored commit** | `0feee613b574f507ac0d6ef3ec8c7481cc9f4864` (`0feee61`, 2026-01-08) |
| **Original author** | EliverLara — https://github.com/EliverLara/Sweet |
| **License** | CC BY-SA 4.0 (upstream `LICENSE/` carried into this repo) |

`Gigas002/Sweet-kde` `plasma-6-migration` is a Plasma-6 consolidation that bundles
every Sweet layer in one repo. To update: re-clone that branch and re-copy the trees
below, then re-apply the Kiro edits.

## What was copied (upstream path → install path)

| Upstream subdir | Installed to |
|----------------------------|----------------------------------------|
| `plasma/desktoptheme/` | `usr/share/plasma/desktoptheme/` |
| `plasma/look-and-feel/` | `usr/share/plasma/look-and-feel/` |
| `aurorae/themes/` | `usr/share/aurorae/themes/` |
| `color-schemes/` | `usr/share/color-schemes/` |
| `Kvantum/` | `usr/share/Kvantum/` |
| `sddm/themes/` | `usr/share/sddm/themes/` |
| `LICENSE/` | `LICENSE/` |

## Intentionally NOT copied

- `cursors/` — source-only (XML, needs building). Cursor falls back to `breeze_cursors`.
- `konsole/` — Kiro ships `kiro-plasma-konsole` separately.

## Kiro edits to re-apply after any refresh

In `usr/share/plasma/look-and-feel/Sweet/contents/defaults`:
- `[kdeglobals][Icons] Theme=candy-icons` → `Theme=neo-candy-icons` (our icons)
- `[kcminputrc][Mouse] cursorTheme=Sweet-cursors` → `cursorTheme=breeze_cursors`

Kiro-only file (not from upstream — leave as is on refresh):
- `etc/skel/.config/Kvantum/kvantum.kvconfig` → `[General] theme=Sweet`
