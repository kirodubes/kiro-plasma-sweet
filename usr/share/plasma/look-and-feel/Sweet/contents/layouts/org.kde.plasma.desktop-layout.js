loadTemplate("org.kde.plasma.desktop.defaultPanel")

var allPanels = panels();
for (var i = 0; i < allPanels.length; i++) {
    allPanels[i].location = "top";
    allPanels[i].lengthMode = "fit";
}

var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
    desktopsArray[j].currentConfigGroup = ['Wallpaper', 'org.kde.image', 'General'];
    // Krystian Zajdel's "Waterfall" (KPackage id "Next"), shipped by breeze
    desktopsArray[j].writeConfig('Image', '/usr/share/wallpapers/Next/');
}
