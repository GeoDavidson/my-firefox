# my-firefox

Minimal Firefox customization. Clone the repo and run one script.

## What's included

- `chrome/userChrome.css` — UI tweaks applied via Firefox's legacy stylesheet system
- `user.js` — preference overrides written to your profile on every Firefox start
- `extension/` — a custom new tab page (requires a signed `.xpi` to install; see below)
- `setup.ps1` — copies the above files into your active Firefox profile
- `build.ps1` — packages `extension/` into `newtab.xpi` for uploading to AMO for signing

## Install

**Prerequisites:** Firefox must have been opened at least once so that a profile folder exists.

### 1. Clone the repo

```powershell
git clone https://github.com/GeoDavidson/my-firefox.git
cd my-firefox
```

### 2. (Optional) Add the signed extension

If you have a signed copy of the new tab extension, place it at:

```
extension\newtab-signed.xpi
```

Without this file the script still runs — it copies `userChrome.css` and `user.js` and prints a warning about the missing extension.

### 3. Run setup.ps1

Windows blocks unsigned scripts by default. Run the script by bypassing the execution policy for this one process — this does **not** change your system's policy permanently:

```powershell
powershell.exe -ExecutionPolicy Bypass -File .\setup.ps1
```

What the script does, step by step:

1. Reads `%APPDATA%\Mozilla\Firefox\profiles.ini` to find the path of your default profile (the one listed under an `[InstallXXX]` section).
2. Creates `<profile>\chrome\` if it does not exist and copies `chrome\userChrome.css` into it.
3. Copies `user.js` into the profile root. Firefox reads this file on every start and applies the preferences listed in it.
4. If `extension\newtab-signed.xpi` is present, creates `<profile>\extensions\` and copies the file there as `newtab@georg-davidson-firefox.xpi`.

Example output from a successful run:

```
Found profile: C:\Users\georg\AppData\Roaming\Mozilla\Firefox\Profiles\q1tqg4pd.default-release-1777500164116
Copied userChrome.css
Copied user.js
Installed new tab extension

Done. Restart Firefox to apply all changes.
```

### 4. Restart Firefox

All changes take effect only after a full restart.

---

## Preferences set by user.js

| Preference | Value | Effect |
|---|---|---|
| `toolkit.legacyUserProfileCustomizations.stylesheets` | `true` | Enables `userChrome.css` |
| `extensions.autoDisableScopes` | `14` | Allows sideloaded extensions from the profile folder |
| `extensions.startupScanScopes` | `1` | Scans the profile extensions folder on startup |
| `browser.tabs.hoverPreview.enabled` | `false` | Disables the tab hover preview card |
| `devtools.chrome.enabled` | `true` | Enables the Browser Toolbox for inspecting Firefox UI |
| `devtools.debugger.remote-enabled` | `true` | Required for the Browser Toolbox remote debugger |

---

## Signing the extension (developer workflow)

Firefox requires extensions to be signed by Mozilla. The workflow:

1. Edit files inside `extension/`.
2. Run `build.ps1` to package them:
   ```powershell
   powershell.exe -ExecutionPolicy Bypass -File .\build.ps1
   ```
   This creates `extension\newtab.xpi`.
3. Upload `newtab.xpi` to [addons.mozilla.org](https://addons.mozilla.org/developers/) as a new version.
4. Download the signed `.xpi` from AMO and save it as `extension\newtab-signed.xpi`.
5. Re-run `setup.ps1` (step 3 above).
