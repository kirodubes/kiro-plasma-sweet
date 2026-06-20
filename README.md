<p align="center">
  <img src="kiro.jpg" alt="Kiro" width="220" />
</p>

# kiro-plasma-sweet

Kiro's all-in-one **Kiro Sweet** Plasma global theme — the dark, neon-accented look that
tops the KDE Store popularity charts, repackaged for Kiro with **our own icons**.

Everything ships under a `Kiro-` namespace, so it **coexists with the upstream Sweet
theme** — install the real `sweet-kde-theme-git` alongside it without any file conflict.

## What it ships

A single Global Theme you select once in **System Settings → Appearance → Global
Themes → Kiro Sweet**, which pulls in every layer at once:

| Layer | Path | Notes |
|---------------------|------------------------------------------|------------------------------|
| Plasma desktop theme | `/usr/share/plasma/desktoptheme/Kiro-Sweet` | panels, widgets, popups |
| Global theme (look-and-feel) | `/usr/share/plasma/look-and-feel/Kiro-Sweet` | the glue that sets the rest |
| Window decorations | `/usr/share/aurorae/themes/Kiro-Sweet`, `Kiro-Sweet-transparent` | Aurorae titlebars |
| Color scheme | `/usr/share/color-schemes/Kiro-Sweet.colors` | application colours |
| Kvantum theme | `/usr/share/Kvantum/Kiro-Sweet`, `Kiro-Sweet-transparent-toolbar` | Qt app styling |
| SDDM login theme | `/usr/share/sddm/themes/Kiro-Sweet` | the login screen |
| Default appearance | `/etc/xdg/kdeglobals`, `/etc/xdg/kwinrc` | new users boot into the Kiro Sweet colour scheme + Aurorae decoration without applying it manually |

**Icons are ours.** The global theme's defaults set the icon theme to
**`neo-candy-icons`** (shipped by `neo-candy-icons-git`), not upstream `candy-icons`.
Cursors fall back to `breeze_cursors` (Sweet cursors are not bundled).

## Install

```bash
sudo pacman -S kiro-plasma-sweet
```

New users boot straight into the Kiro Sweet colour scheme and Aurorae window decoration —
shipped as system defaults under `/etc/xdg`. To pull in every remaining layer (Plasma
desktop theme, icons, SDDM), open **System Settings → Appearance → Global Themes** and
apply **Kiro Sweet**. For the login screen, set the SDDM theme to **Kiro Sweet** under **System
Settings → Colors & Themes → Login Screen (SDDM)**. The Kiro Sweet **Kvantum** selection for
Qt apps is shipped separately by `kiro-dot-files`.

## Heritage

Based on [EliverLara's Sweet](https://github.com/EliverLara/Sweet) theme, using the
Plasma-6 consolidation by [Gigas002/Sweet-kde](https://github.com/Gigas002/Sweet-kde)
(`plasma-6-migration` branch). Licensed **CC BY-SA 4.0** — see [LICENSE](./LICENSE).
