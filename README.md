# my-firefox

Minimal Firefox setup. Clone and run one script.

## Install

1. Install Firefox and open it once
2. `git clone https://github.com/GeoDavidson/my-firefox`
3. Right-click `setup.ps1` → **Run with PowerShell**
4. Restart Firefox

Or install the extension directly from [Firefox Add-ons (addons.mozilla.org)](https://addons.mozilla.org/firefox/addon/my-new-tab/).

## Commands

| Script      | What it does                                                       |
| ----------- | ------------------------------------------------------------------ |
| `setup.ps1` | Applies everything to your Firefox profile (run on fresh computer) |
| `build.ps1` | Repackages `extension/newtab.xpi` for re-signing                   |

## Managing bookmarks (new tab page)

The grid shows your **Bookmarks Toolbar** — no custom workflow needed.

- **Add:** Use Firefox's normal bookmarking (`Ctrl+D`, the star button, or the bookmarks menu). Save to the toolbar and the grid updates instantly.
- **Delete:** Right-click the bookmark in the toolbar (or go to `Bookmarks → Manage Bookmarks`) and delete it there.
- Subfolders inside the toolbar are not shown — only direct URL bookmarks.
- Press `Ctrl+Shift+B` to show/hide the Bookmarks Toolbar if it's not visible.

To edit the extension code itself (HTML/JS):

1. Make changes in `extension/`
2. Run `build.ps1`
3. Upload `extension/newtab.xpi` to [AMO Developer Hub](https://addons.mozilla.org/developers/addon/my-new-tab/versions) → download signed `.xpi`
4. Attach to a GitHub Release

## Updating userChrome.css

1. Edit `chrome/userChrome.css`
2. Copy to `%APPDATA%\Mozilla\Firefox\Profiles\<profile>\chrome\userChrome.css`
3. Restart Firefox to test, then commit and push

## Privacy

Bookmark favicons are fetched from `https://icons.duckduckgo.com/ip3/<hostname>.ico` — this is a cosmetic request to load site icons and no personal data is sent. If the fetch fails, a generic globe icon is shown instead. No other network requests are made; no analytics; no data collection. The `bookmarks` permission is used only to read your Bookmarks Toolbar folder.

## Notes

- Extension ID: `newtab@georg-davidson-firefox`
- Built on Firefox 149 / Windows 11 — if CSS selectors break, use Browser Toolbox (`Tools → Browser Tools → Browser Toolbox`) to find updated ones

## License

[MIT](LICENSE)
