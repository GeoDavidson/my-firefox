# Repackages the extension into newtab.xpi for uploading to AMO.
# Run this after editing extension/newtab.html, then upload newtab.xpi to AMO as a new version.

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$extDir = "$scriptDir\extension"

python3 -c "
import zipfile, os
os.chdir(r'$extDir')
with zipfile.ZipFile('newtab.xpi', 'w', zipfile.ZIP_DEFLATED) as z:
    z.write('manifest.json')
    z.write('newtab.html')
print('Built extension/newtab.xpi -- upload this to AMO, then save the signed version as newtab-signed.xpi')
"
