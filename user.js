// Enable userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Force a fixed UUID for the new tab extension so the homepage URL is stable across machines
user_pref("extensions.webextensions.uuids", "{\"newtab@georg-davidson-firefox\":\"84b6a5f9-d329-4a15-8c1e-a7e9d2c4f031\"}");

// Open custom new tab page on startup and for new windows
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "moz-extension://84b6a5f9-d329-4a15-8c1e-a7e9d2c4f031/newtab.html");

// Allow sideloaded extensions from profile folder
user_pref("extensions.autoDisableScopes", 0);
user_pref("extensions.startupScanScopes", 15);
