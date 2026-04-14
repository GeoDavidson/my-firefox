# AMO Developer Hub — Listing Copy

Paste these fields into https://addons.mozilla.org/developers/ when submitting or updating the listing.

---

## Name

My New Tab

---

## Summary (≤250 chars — paste into the Summary field)

Replaces the new tab page with a live grid of your Bookmarks Toolbar. No configuration — just bookmark a site, save it to the toolbar, and it appears on your next new tab.

---

## Description (paste into the Description field — supports basic HTML)

<p>My New Tab replaces Firefox's default new tab page with a clean, minimal grid of your Bookmarks Toolbar entries.</p>

<p><strong>How it works</strong></p>
<ul>
  <li>Open a new tab and see all your Bookmarks Toolbar bookmarks as clickable cards.</li>
  <li>The grid updates live — add or remove a bookmark in Firefox and the grid reflects it instantly, no page refresh needed.</li>
  <li>Each card shows the site's favicon (loaded from DuckDuckGo's icon service) and the bookmark name.</li>
  <li>If you have no bookmarks yet, a hint appears to open the Bookmarks Toolbar (<code>Ctrl+Shift+B</code>).</li>
  <li>Adapts to light and dark system themes automatically.</li>
</ul>

<p><strong>Managing your bookmarks</strong></p>
<ul>
  <li>Add: press <code>Ctrl+D</code> and save to the Bookmarks Toolbar.</li>
  <li>Remove: right-click a bookmark in the toolbar and delete it.</li>
  <li>Only direct URL bookmarks in the toolbar are shown — subfolders are ignored.</li>
</ul>

<p>Source code: https://github.com/GeoDavidson/my-firefox</p>

---

## Categories

- Appearance
- Tabs

---

## Tags (enter these one at a time in the Tags field)

- newtab
- bookmarks
- grid
- minimal
- toolbar

---

## License

MIT License

---

## Privacy Policy (paste into the Privacy Policy field)

This extension fetches site favicons from https://icons.duckduckgo.com/ip3/<hostname>.ico for display purposes only. No personal data is transmitted. No analytics, telemetry, or tracking of any kind. The `bookmarks` permission is used exclusively to read your Firefox Bookmarks Toolbar folder — bookmark data never leaves your browser.

---

## Support Site / Homepage

https://github.com/GeoDavidson/my-firefox

---

## Notes for AMO reviewers (paste into the Notes to Reviewer field)

This is a straightforward new-tab override. It reads the Firefox Bookmarks Toolbar folder (`toolbar_____`) via `browser.bookmarks.getChildren` and renders bookmark cards. Favicons are fetched from `https://icons.duckduckgo.com/ip3/<hostname>.ico` — this is a cosmetic GET request and no user data is sent. The source ships unminified; no build step is required to read it. All code is in `newtab.js` (61 lines).
