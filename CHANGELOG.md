# Changelog

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
