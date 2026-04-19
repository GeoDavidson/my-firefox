# Changelog

## v2.5 — 2026-04-19

- Custom page now overrides homepage and new windows — selectable as "My New Tab" in about:preferences#home
- Bookmark grid capped at 5 icons per row, each row independently centered
- Favicons use Google faviconV2 — subdomains now get their own icons (e.g. Google Calendar vs Google Drive)

## v2.4 — 2026-04-18

- Fixed bookmark grid layout — dynamic auto-fit columns with scrollable overflow
- Simplified userChrome.css — hide only 4 UI elements

## v2.3 — 2026-04-14

- Replaced hard-coded bookmark tiles with a live grid driven by the Firefox Bookmarks Toolbar
- Added `bookmarks` permission to read and watch `toolbar_____` folder
- Grid updates instantly when bookmarks are added, removed, moved, or renamed
- Removed the old `extension/icons/` static PNGs; favicons are now fetched at runtime
- Added extension icon (48/96px) and `description` field to manifest
- Added MIT license

## v2.1 — 2025-07-10

- Initial public release
- Fixed permission popups; hid Go button in address bar via userChrome.css
