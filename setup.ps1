# Firefox Setup Script
# Run this after a fresh Firefox install to apply all customizations.

$ErrorActionPreference = "Stop"

# --- Find Firefox profile ---
$profilesPath = "$env:APPDATA\Mozilla\Firefox\Profiles"

if (-not (Test-Path $profilesPath)) {
    Write-Error "No Firefox profiles found. Open Firefox at least once first, then re-run this script."
    exit 1
}

$profile = Get-ChildItem $profilesPath -Directory | Where-Object { $_.Name -like "*.default-release" } | Select-Object -First 1

if (-not $profile) {
    Write-Error "No default Firefox profile found. Open Firefox at least once first."
    exit 1
}

$profilePath = $profile.FullName
Write-Host "Found profile: $profilePath"

# --- Apply files ---
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# userChrome.css
$chromePath = "$profilePath\chrome"
New-Item -ItemType Directory -Force $chromePath | Out-Null
Copy-Item "$scriptDir\chrome\userChrome.css" "$chromePath\userChrome.css" -Force
Write-Host "Copied userChrome.css"

# user.js
Copy-Item "$scriptDir\user.js" "$profilePath\user.js" -Force
Write-Host "Copied user.js"

# Extension (signed .xpi)
$xpiPath = "$scriptDir\extension\newtab-signed.xpi"
if (Test-Path $xpiPath) {
    $extensionsPath = "$profilePath\extensions"
    New-Item -ItemType Directory -Force $extensionsPath | Out-Null
    Copy-Item $xpiPath "$extensionsPath\newtab@georg-davidson-firefox.xpi" -Force
    Write-Host "Installed new tab extension"
} else {
    Write-Warning "extension\newtab-signed.xpi not found — skipping new tab setup."
    Write-Warning "See README.md for how to sign and add the extension."
}

Write-Host ""
Write-Host "Done. Restart Firefox to apply all changes."
