# Changelog

## 2026.06.21 — default cursor → Breeze Light (white) + explicit ColorScheme name

### What Changed
- Changed the default cursor theme from the dark `breeze_cursors` to the white
  **Breeze Light** (`Breeze_Light`) so new users picking Kiro Sweet get the light cursor.
- Added an explicit `[General] ColorScheme=Kiro-Sweet` to the system-default
  `etc/xdg/kdeglobals` so the already-shipped Sweet colours name their scheme for all users.

### Technical Details
- Verified live on a Plasma box: changing the cursor in System Settings → Mouse → Cursors
  writes `[Mouse] cursorTheme=Breeze_Light` to `~/.config/kcminputrc`, and selecting the
  Kiro-Sweet colour scheme writes `[General] ColorScheme=Kiro-Sweet` to `~/.config/kdeglobals`
  (captured via `kiro-plasma-system-settings/capture-plasma-config.sh` snapshot/diff). All
  other colour values from the capture already matched what `etc/xdg/kdeglobals` ships.
- The cursor default is delivered via the look-and-feel `defaults` file (`[kcminputrc][Mouse]`),
  applied when the user selects the Kiro Sweet Global Theme. Cursors are still not bundled —
  `Breeze_Light` ships with Plasma.

### Files Modified
- `usr/share/plasma/look-and-feel/Kiro-Sweet/contents/defaults` — `cursorTheme` → `Breeze_Light`
- `etc/xdg/kdeglobals` — added `[General] ColorScheme=Kiro-Sweet`
- `CLAUDE.md` — cursor note updated

## 2026.06.20 — rename theme identity to Kiro namespace (coexist with upstream Sweet)

### What Changed
- Renamed every shipped theme identity from the upstream `Sweet` name into a `Kiro-`
  namespace so the package **coexists with the upstream Sweet theme** — a user can install
  `sweet-kde-theme-git` alongside this without any pacman file conflict — and so System
  Settings shows an honest **Kiro Sweet** label instead of plain "Sweet".
- Internal identifiers (folder names, KPlugin `Id`, `__aurorae__svg__` token, `ColorScheme`,
  Kvantum dir, SDDM `Theme-Id`, `.colors` filename) → hyphenated `Kiro-Sweet*`. The visible
  Global Theme name is the spaced **Kiro Sweet** (look-and-feel `KPlugin.Name`).

### Technical Details
- Look-and-feel `Sweet` → `Kiro-Sweet`; desktoptheme `Sweet` → `Kiro-Sweet`; aurorae
  `Sweet`/`Sweet-transparent` → `Kiro-Sweet`/`Kiro-Sweet-transparent` (incl. the `*rc`
  config files); Kvantum `Sweet`/`Sweet-transparent-toolbar` → `Kiro-*` (incl. inner
  `.kvconfig`/`.svg`); SDDM `Sweet` → `Kiro-Sweet`; `Sweet.colors` → `Kiro-Sweet.colors`.
- Cross-references repointed to match: look-and-feel `contents/defaults`
  (`ColorScheme`/`plasmarc name`/`__aurorae__svg__`/`KSplash Theme`) and the `/etc/xdg`
  defaults (`LookAndFeelPackage=Kiro-Sweet`, kwinrc Aurorae). Icon theme stays `neo-candy-icons`.
- Internal-only assets kept their upstream names (splash `sweetlogo.png`, svg `docname`) —
  they live under the renamed dirs so there is no conflict surface.
- PKGBUILD: dropped the upstream `conflicts=(sweet-*)` array (no longer needed — paths no
  longer collide) and bumped `pkgrel`.

### Files Modified
- Renamed all theme dirs/files under `usr/share/{plasma,aurorae,color-schemes,Kvantum,sddm}` to `Kiro-Sweet*`
- `usr/share/plasma/look-and-feel/Kiro-Sweet/contents/defaults`, `etc/xdg/kdeglobals`, `etc/xdg/kwinrc` — repointed
- `README.md`, `CLAUDE.md` — Kiro Sweet naming + coexistence note
- `../KIRO-PKG-BUILD-APPS/kiro-plasma-sweet/PKGBUILD` — drop upstream conflicts, bump pkgrel

## 2026.06.20 — ship Sweet as the default appearance via /etc/xdg

### What Changed
- New users now boot straight into the **Sweet** colour scheme and Aurorae window
  decoration without having to apply the global theme manually. Captured the applied
  Sweet look from a live Plasma test box and baked the theme-relevant keys into
  system-default config.
- Kept it **theme-only**: just the colour scheme, look-and-feel selection, titlebar
  contrast, WM colours, and the Aurorae decoration — no behavioural settings, no
  session-generated panel/applet layout.
- Default layout for new users: **toolbar (panel) at the top and minimal** (fit-content
  width, not full-width), with Krystian Zajdel's **Waterfall** as the default wallpaper.
  Confirmed working on a live apply.

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
- Panel/wallpaper defaults live in the Sweet look-and-feel layout script
  (`org.kde.plasma.desktop-layout.js`), not in the session-renumbered `appletsrc` — so
  they apply on a fresh layout / when Sweet is applied, without freezing machine-specific
  applet IDs. Panel: `location = "top"`, `lengthMode = "fit"`. Wallpaper references the
  breeze-owned KPackage `/usr/share/wallpapers/Next/` (auto-picks resolution + dark
  variant), so nothing is bundled.

### Files Modified
- `etc/xdg/kdeglobals` (new)
- `etc/xdg/kwinrc` (new)
- `usr/share/plasma/look-and-feel/Sweet/contents/layouts/org.kde.plasma.desktop-layout.js` — panel to top + fit-content, Waterfall default wallpaper
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
