Add-Type -AssemblyName System.Drawing

$heroImg = [System.Drawing.Image]::FromFile("C:\Users\USER\.gemini\antigravity\scratch\joseph-portfolio\src\assets\hero-ref.png")
$w = $heroImg.Width
$h = $heroImg.Height
Write-Host "Hero image size: $w x $h"

# In hero-ref.png, Joseph is on the right side:
# roughly from X = 58% to 92%, Y = 25% to 100%
$cropX = [int]($w * 0.58)
$cropY = [int]($h * 0.25)
$cropW = [int]($w * 0.35)
$cropH = [int]($h * 0.75)

$rect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
$bitmap = New-Object System.Drawing.Bitmap $cropW, $cropH
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.DrawImage($heroImg, (New-Object System.Drawing.Rectangle 0, 0, $cropW, $cropH), $rect, [System.Drawing.GraphicsUnit]::Pixel)
$bitmap.Save("C:\Users\USER\.gemini\antigravity\scratch\joseph-portfolio\src\assets\hero-portrait.png", [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()
$heroImg.Dispose()
Write-Host "Created hero-portrait.png"

# Now for about-ref.png:
$aboutImg = [System.Drawing.Image]::FromFile("C:\Users\USER\.gemini\antigravity\scratch\joseph-portfolio\src\assets\about-ref.png")
$aw = $aboutImg.Width
$ah = $aboutImg.Height
Write-Host "About image size: $aw x $ah"

# In about-ref.png, Joseph's framed photo is from X = 55% to 87%, Y = 20% to 85%
$acropX = [int]($aw * 0.55)
$acropY = [int]($ah * 0.20)
$acropW = [int]($aw * 0.32)
$acropH = [int]($ah * 0.65)

$arect = New-Object System.Drawing.Rectangle $acropX, $acropY, $acropW, $acropH
$abitmap = New-Object System.Drawing.Bitmap $acropW, $acropH
$agraphics = [System.Drawing.Graphics]::FromImage($abitmap)
$agraphics.DrawImage($aboutImg, (New-Object System.Drawing.Rectangle 0, 0, $acropW, $acropH), $arect, [System.Drawing.GraphicsUnit]::Pixel)
$abitmap.Save("C:\Users\USER\.gemini\antigravity\scratch\joseph-portfolio\src\assets\about-portrait.png", [System.Drawing.Imaging.ImageFormat]::Png)
$agraphics.Dispose()
$abitmap.Dispose()
$aboutImg.Dispose()
Write-Host "Created about-portrait.png"
