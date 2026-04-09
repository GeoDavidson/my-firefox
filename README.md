# my-firefox

Minimal Firefox setup. Clone and run one script.

## Install

1. Install Firefox and open it once
2. `git clone https://github.com/GeoDavidson/my-firefox`
3. Right-click `setup.ps1` → **Run with PowerShell**
4. Restart Firefox

## Commands

| Script | What it does |
|---|---|
| `setup.ps1` | Applies everything to your Firefox profile (run on fresh computer) |
| `build.ps1` | Repackages `extension/newtab.xpi` for re-signing |

## Updating bookmarks (new tab page)

1. Edit `extension/newtab.html`
2. Run `build.ps1`
3. Upload `extension/newtab.xpi` to [AMO](https://addons.mozilla.org/developers/addon/my-new-tab/versions) → download signed `.xpi`
4. Save as `extension/newtab-signed.xpi`, commit and push

## Updating userChrome.css

1. Edit `chrome/userChrome.css`
2. Copy to `%APPDATA%\Mozilla\Firefox\Profiles\<profile>\chrome\userChrome.css`
3. Restart Firefox to test, then commit and push

## Notes

- Extension ID: `newtab@georg-davidson-firefox`
- Built on Firefox 149 / Windows 11 — if CSS selectors break, use Browser Toolbox (`Tools → Browser Tools → Browser Toolbox`) to find updated ones
- To re-sign from scratch: [AMO Developer Hub](https://addons.mozilla.org/developers/) → Submit New Add-on → On your own (unlisted)
