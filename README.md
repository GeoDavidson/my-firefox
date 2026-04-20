# my-firefox

Minimal Firefox setup. Clone the repo and run one script.

## What's included

- `setup.ps1` — installs userChrome.css, sets preferences, and configures the profile
- `extension.xpi` — [brief one-line description of what it does]

## Install

**1. Download the extension**

Grab `extension.xpi` from the [Releases](../../releases) tab.

**2. Run the setup script**

Open PowerShell in the project folder and run:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\setup.ps1
```
