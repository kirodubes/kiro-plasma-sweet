# Changelog

## 2026.06.20 — ship Sweet as the default appearance via /etc/xdg

### What Changed
- New users now boot straight into the **Sweet** colour scheme and Aurorae window
  decoration without having to apply the global theme manually. Captured the applied
  Sweet look from a live Plasma test box and baked the theme-relevant keys into
  system-default config.
- Kept it **theme-only**: just the colour scheme, look-and-feel selection, titlebar
  contrast, WM colours, and the Aurorae decoration — no behavioural settings, no
  session-generated panel/applet layout.

### Technical Details
- Delivered under `/etc/xdg` (the system-default layer) rather than `/etc/skel`, so it
  doesn't freeze user config and doesn't collide with `kiro-dot-files`, which owns
  `etc/skel/.config/`. The Kvantum selection stays in `kiro-dot-files` — not re-added here.
- `etc/xdg/kdeglobals` carries the six `Colors:*` groups, `[ColorEffects:*]`, `[General]`
  accent + scheme hash, `[KDE]` `LookAndFeelPackage=Sweet` + `contrast`/`frameContrast`,
  and `[WM]` titlebar colours. Excluded non-theme groups (KFileDialog/KShortcuts/Preview).
- `etc/xdg/kwinrc` carries only `[org.kde.kdecoration2]` (Aurorae `__aurorae__svg__Sweet`).
- Values verified against the shipped `Sweet.colors` (Window `BackgroundNormal=24,27,40`),
  confirming the captured state is stock Sweet, not a local tweak.
- Build recipe PKGBUILD now copies `etc/` alongside `usr/` (the `etc/` copy line had been
  removed when the old Kvantum skel file was dropped).

### Files Modified
- `etc/xdg/kdeglobals` (new)
- `etc/xdg/kwinrc` (new)
- `README.md` — replaced the stale `/etc/skel` Kvantum row with the `/etc/xdg` default-appearance row
- `CLAUDE.md` — documented the `/etc/xdg` defaults and the Kvantum move to `kiro-dot-files`
- `../KIRO-PKG-BUILD-APPS/kiro-plasma-sweet/PKGBUILD` — restore `etc/` copy in `package()`

## 2026.06.20 — renamed kiro-sweet → kiro-plasma-sweet

### What Changed
- Renamed the package `kiro-sweet` → **kiro-plasma-sweet** to follow the ecosystem
  naming rule: the DE/TWM goes right after `kiro-` so packages cluster per environment
  (`kiro-plasma-*`). PKGBUILD `replaces=('kiro-sweet')` for a clean upgrade; GitHub repo,
  recipe dir, source dir, flow (`flow-kiro-plasma-sweet`), and ECOSYSTEM entry all renamed.

## 2026.06.20 — initial package

### What Changed
- New repo: **kiro-plasma-sweet**, a combined **Sweet** Plasma global theme for the Kiro
  Plasma edition. Sweet is the #1 most-downloaded and top-rated global theme on the
  KDE Store — packaged here as a single Global Theme with Kiro's own icons.
- Combined the KDE/Plasma, Kvantum, and SDDM layers from one upstream into a single
  package: Plasma desktop theme + look-and-feel + Aurorae decorations + color scheme
  (`/usr/share/plasma`, `/usr/share/aurorae`, `/usr/share/color-schemes`), the Kvantum
  Qt theme (`/usr/share/Kvantum`), and the SDDM login theme (`/usr/share/sddm`).
- **Icons are ours:** the look-and-feel `defaults` icon theme was switched from
  upstream `candy-icons` to **`neo-candy-icons`** (depends on `neo-candy-icons-git`).
- Cursor theme in `defaults` switched from the unbundled `Sweet-cursors` to
  `breeze_cursors` so applying the theme never leaves a dangling cursor reference.
- **Default Kvantum selection shipped:** `etc/skel/.config/Kvantum/kvantum.kvconfig`
  (`[General] theme=Sweet`) so new users get Sweet's Kvantum colours in Qt apps without
  opening Kvantum Manager. Delivered via `/etc/skel` (not `/etc/xdg`) because Kvantum
  reads theme selection only from the user's `~/.config/Kvantum/`. PKGBUILD now copies
  `etc/` as well as `usr/` (mixed delivery).
- **Not bundled:** upstream `cursors/` (source-only, needs building) and `konsole/`
  (Kiro ships `kiro-plasma-konsole` separately).

### Technical Details
- Source: [Gigas002/Sweet-kde](https://github.com/Gigas002/Sweet-kde) `plasma-6-migration`
  branch — a Plasma-6 consolidation of [EliverLara/Sweet](https://github.com/EliverLara/Sweet).
- License: **CC BY-SA 4.0** (upstream `LICENSE/` carried into the package).
- Recipe at `~/KIRO-PKG-BUILD-APPS/kiro-plasma-sweet` copies `usr/` verbatim; depends on
  `neo-candy-icons-git`, `kvantum`, `sddm`.

### Files Modified
- usr/share/plasma/{desktoptheme,look-and-feel}/Sweet (new)
- usr/share/aurorae/themes/{Sweet,Sweet-transparent} (new)
- usr/share/color-schemes/Sweet.colors (new)
- usr/share/Kvantum/{Sweet,Sweet-transparent-toolbar} (new)
- usr/share/sddm/themes/Sweet (new)
- usr/share/plasma/look-and-feel/Sweet/contents/defaults (icons + cursor edited)
- README.md, CHANGELOG.md, CLAUDE.md, LICENSE, up.sh, setup.sh, kiro.jpg, .gitignore (new)
