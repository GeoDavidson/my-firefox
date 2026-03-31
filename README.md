# my-firefox

A fully customized Firefox setup. One script restores everything on a new computer.

## What it includes
- Minimal UI — no tab bar, no back/forward buttons, no reload button, no window controls
- Auto-hiding vertical tabs (hover left edge to reveal)
- Minimal bookmarks toolbar centered under the URL bar
- Custom new tab page showing your bookmarks (no Firefox search bar)

## Setup (fresh computer)

1. Install Firefox and open it once so a profile is created
2. Clone this repo
3. Right-click `setup.ps1` → **Run with PowerShell**
4. Restart Firefox

No admin rights required.

## First-time extension signing (one-time setup)

The new tab page requires a Mozilla-signed extension. You only do this once — after that, the signed file lives in the repo.

1. Go to https://addons.mozilla.org/developers/
2. Create a free Mozilla account
3. Click **Submit a New Add-on** → choose **On your own** (unlisted)
4. Upload `extension/newtab.xpi`
5. Download the signed `.xpi` Mozilla sends back
6. Save it as `extension/newtab-signed.xpi`
7. Commit it to the repo

## Updating bookmarks

Edit `extension/newtab.html` to add or remove bookmarks, then re-sign and replace `newtab-signed.xpi`.

## File structure

```
my-firefox/
├── README.md
├── setup.ps1           — automated setup script
├── user.js             — about:config preferences
├── chrome/
│   └── userChrome.css  — all Firefox UI customization
└── extension/
    ├── manifest.json
    ├── newtab.html
    └── newtab-signed.xpi  (add after signing)
```
