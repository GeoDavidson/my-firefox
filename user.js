// Enable userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Homepage and new-window override is handled by the extension
// (chrome_settings_overrides.homepage in extension/manifest.json)

// Allow sideloaded extensions from profile folder (profile scope only)
user_pref("extensions.autoDisableScopes", 14);
user_pref("extensions.startupScanScopes", 1);

// Disable tab hover preview
user_pref("browser.tabs.hoverPreview.enabled", false);

// Enable Browser Toolbox for inspecting Firefox UI
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.remote-enabled", true);
