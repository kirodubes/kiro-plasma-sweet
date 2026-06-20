# kiro-sweet — Project Claude Instructions

## Overview
Combined **Sweet** Plasma global theme for the Kiro Plasma edition. One package that
ships every Sweet layer (Plasma desktop theme, look-and-feel, Aurorae, color scheme,
Kvantum, SDDM) so a user picks **Sweet** once in System Settings and gets the whole
look — but wired to **Kiro's own `neo-candy-icons`**, not upstream candy-icons.

## Current state
- Source repo: `~/KIRO/kiro-sweet` (payload under `usr/share/`).
- Build recipe: `~/KIRO-PKG-BUILD-APPS/kiro-sweet` (copies `usr/`, GitHub `git+` source).
- Upstream: [Gigas002/Sweet-kde](https://github.com/Gigas002/Sweet-kde) `plasma-6-migration`
  (Plasma-6 fork of [EliverLara/Sweet](https://github.com/EliverLara/Sweet)). License CC BY-SA 4.0.

## Patterns / things to know
- **Icons are deliberately ours.** `usr/share/plasma/look-and-feel/Sweet/contents/defaults`
  sets `[kdeglobals][Icons] Theme=neo-candy-icons`. Do not revert to `candy-icons`.
- Cursors are not bundled; `defaults` points cursorTheme at `breeze_cursors`.
- `konsole/` and `cursors/` from upstream are intentionally **excluded** — Konsole is
  owned by `kiro-plasma-konsole`; upstream cursors are source-only.
- Kvantum colours are automatic for **new** users: `etc/skel/.config/Kvantum/kvantum.kvconfig`
  sets `theme=Sweet`. Kvantum reads theme selection only from the user's
  `~/.config/Kvantum/` (it does NOT honor the `/etc/xdg` cascade), so skel is correct —
  not `/etc/xdg`. The look-and-feel `defaults` sets `widgetStyle=kvantum-dark` to engage
  the Kvantum engine; existing users with an old kvantum.kvconfig keep their selection.
- Mixed delivery: theme payload → `/usr/share`, Kvantum selection → `/etc/skel`. PKGBUILD copies both `usr/` and `etc/`.
- **Refreshing upstream:** all source references (repo, branch, vendored commit
  `0feee61`, path mapping, exclusions, the edits to re-apply) are in
  [UPSTREAM.md](./UPSTREAM.md) — the single source of truth for where this came from.
- Part of the six-plus kiro-plasma-* package set — see HQ memory `kiro-plasma-package-set`.
