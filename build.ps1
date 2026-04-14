# Repackages the extension into newtab.xpi for uploading to AMO.
# Run this after editing extension/ files, then upload newtab.xpi to AMO as a new version.

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$extDir = "$scriptDir\extension"
$xpiPath = "$extDir\newtab.xpi"

if (Test-Path $xpiPath) { Remove-Item $xpiPath }

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::Open($xpiPath, [System.IO.Compression.ZipArchiveMode]::Create)
[System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, "$extDir\manifest.json",      "manifest.json",      [System.IO.Compression.CompressionLevel]::Optimal)
[System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, "$extDir\newtab.html",        "newtab.html",        [System.IO.Compression.CompressionLevel]::Optimal)
[System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, "$extDir\newtab.js",          "newtab.js",          [System.IO.Compression.CompressionLevel]::Optimal)
[System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, "$extDir\icons\icon-48.png",  "icons/icon-48.png",  [System.IO.Compression.CompressionLevel]::Optimal)
[System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, "$extDir\icons\icon-96.png",  "icons/icon-96.png",  [System.IO.Compression.CompressionLevel]::Optimal)
$zip.Dispose()

Write-Host "Built extension/newtab.xpi (manifest, newtab.html, newtab.js, icons) -- upload to AMO, download signed version"
