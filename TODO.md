# TODO

## Add bookmarks in-browser (form with URL + label)
**Complication:** `page-icon:` pulls favicons from Firefox's cache. If cache is cleared or the site has never been visited, the icon falls back to a generic globe. Original bundled PNGs are unaffected.

## Auto-migrate existing 8 bookmarks into storage on first install
**Complication:** If the storage schema changes later (e.g. adding a category field), migration logic is needed to handle bookmarks saved in the old format — easy to forget and causes subtle bugs.

## Auto-fetch favicons via `page-icon:` protocol
**Complication:** Same as above — cache-dependent. Icons can disappear after clearing browsing data.

## Drag to reorder bookmarks
**Complication:** HTML5 drag and drop on a CSS grid has edge cases — visual placeholders during drag, drop targets between items, and handling the saved order correctly in storage. Most complex piece of this feature set.

## Delete bookmarks from the UI
**Complication:** The grid column count recalculates on every add/delete. Removing one bookmark can completely reshuffle the layout (e.g. 9 items in 3×3 becomes 8 items in 4×2). Could feel jarring.

## Export/import bookmarks
**Complication:** Bookmarks live in the browser profile, not the repo. If the Firefox profile is corrupted or lost, anything added through the UI is gone with no recovery. Export/import is the safety net for this.

---

## AI Prompt — Implement bookmark management + drag and drop

Build the following features into the Firefox new tab extension (`extension/newtab.html`, `extension/newtab.js`):

**1. Bookmark management**
- Move all hardcoded bookmarks out of the HTML and into `browser.storage.local`
- On first load, if storage is empty, seed it with the existing 8 bookmarks (preserving their bundled PNG icons from `extension/icons/`)
- Add a **+** button on the new tab page that opens a small inline form (URL + label fields, a save and cancel button)
- On save, fetch the favicon using the `page-icon:` protocol and add the new bookmark to storage, then re-render the grid
- On hover over a card, show a small **×** delete button — clicking it removes that bookmark from storage and re-renders

**2. Drag and drop reordering**
- Make every bookmark card draggable using the HTML5 Drag and Drop API (no libraries)
- Show a visual placeholder where the card will be dropped as the user drags
- On drop, save the new order to `browser.storage.local`
- The grid column count should still auto-calculate based on total number of bookmarks

**Known tradeoffs to keep in mind:**
- `page-icon:` is cache-dependent — if the site has never been visited or cache is cleared, fall back to a generic icon gracefully
- Deleting a bookmark will change the item count and may reshuffle the grid columns — this is acceptable for now
- Do not break the existing bundled PNG icons for the original 8 bookmarks
- Re-sign the extension on AMO after any code changes
