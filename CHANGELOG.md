# Changelog

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
