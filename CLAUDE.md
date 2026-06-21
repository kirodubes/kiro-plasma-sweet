# kiro-plasma-sweet — Project Claude Instructions

## Overview
Combined **Sweet** Plasma global theme for the Kiro Plasma edition. One package that
ships every Sweet layer (Plasma desktop theme, look-and-feel, Aurorae, color scheme,
Kvantum, SDDM) so a user picks **Kiro Sweet** once in System Settings and gets the whole
look — but wired to **Kiro's own `neo-candy-icons`**, not upstream candy-icons.

## Current state
- Source repo: `~/KIRO/kiro-plasma-sweet` (payload under `usr/share/`).
- Build recipe: `~/KIRO-PKG-BUILD-APPS/kiro-plasma-sweet` (copies `usr/`, GitHub `git+` source).
- Upstream: [Gigas002/Sweet-kde](https://github.com/Gigas002/Sweet-kde) `plasma-6-migration`
  (Plasma-6 fork of [EliverLara/Sweet](https://github.com/EliverLara/Sweet)). License CC BY-SA 4.0.

## Patterns / things to know
- **Icons are deliberately ours.** `usr/share/plasma/look-and-feel/Kiro-Sweet/contents/defaults`
  sets `[kdeglobals][Icons] Theme=neo-candy-icons`. Do not revert to `candy-icons`.
- Cursors are not bundled; `defaults` points cursorTheme at `Breeze_Light` (white Breeze).
- `konsole/` and `cursors/` from upstream are intentionally **excluded** — Konsole is
  owned by `kiro-plasma-konsole`; upstream cursors are source-only.
- **Kvantum selection lives in `kiro-dot-files`, NOT here.** It was removed from this
  package (`etc/skel/.config/Kvantum/kvantum.kvconfig`) because it conflicts with
  `kiro-dot-files`, which owns `etc/skel/.config/`. Do **not** re-add it here. The
  look-and-feel `defaults` still sets `widgetStyle=kvantum-dark` to engage the Kvantum engine.
- **Default Sweet appearance for new users:** `etc/xdg/kdeglobals` (Sweet colour scheme +
  `LookAndFeelPackage=Kiro-Sweet` + titlebar contrast + WM colours) and `etc/xdg/kwinrc`
  (`[org.kde.kdecoration2]` Aurorae Kiro-Sweet). `/etc/xdg` is the system-default layer, so it
  doesn't freeze user config and doesn't collide with `kiro-dot-files`' `etc/skel`. These
  were captured from a live Plasma box via `kiro-plasma-system-settings/capture-plasma-config.sh`.
- Mixed delivery: theme payload → `/usr/share`, default appearance → `/etc/xdg`. PKGBUILD copies both `usr/` and `etc/`.
- **Refreshing upstream:** all source references (repo, branch, vendored commit
  `0feee61`, path mapping, exclusions, the edits to re-apply) are in
  [UPSTREAM.md](./UPSTREAM.md) — the single source of truth for where this came from.
- Part of the six-plus kiro-plasma-* package set — see HQ memory `kiro-plasma-package-set`.
