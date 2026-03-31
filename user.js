// Enable userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Open home page (custom new tab) on startup
// NOTE: the moz-extension:// UUID is machine-specific. If reinstalling on a new machine,
// run the UUID lookup step again to update this URL.
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "moz-extension://f599ac3b-ae66-4bf1-852a-defd1d0fdf63/newtab.html");

// Allow sideloaded extensions from profile folder
user_pref("extensions.autoDisableScopes", 0);
user_pref("extensions.startupScanScopes", 15);
