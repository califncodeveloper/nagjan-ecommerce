const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function main() {
  const logoPath = path.join(__dirname, '../public/logo/nagjan-logo.png');
  const meta = await sharp(logoPath).metadata();
  console.log('Logo metadata:', meta);

  // Let's create an icon for the browser tab.
  // In Next.js App Router:
  // - src/app/icon.png (e.g. 32x32, 48x48, 64x64, 192x192, 512x512)
  // - src/app/apple-icon.png (180x180)
  // - src/app/favicon.ico (standard multi-size ICO or 32x32)
  // - public/favicon.ico
  // - public/logo/favicon-32x32.png
  // - public/logo/favicon-16x16.png
  // - public/logo/apple-touch-icon.png

  // Let's create a beautiful square icon centered with padding on the brand navy background (#013074)
  // Or transparent if applicable.
  // The full logo is 1024x397.
  // When placed inside a square (e.g. 512x512) with the brand navy background (#013074):
  // Let's resize the logo to fit width: 460 with height ~ 178, centered on a 512x512 canvas with background #013074 and rounded/clean edges,
  // OR create an emblem/icon.
  
  // Let's inspect the cropped content of the logo:
  const content = await sharp(logoPath)
    .trim({
      background: { r: 1, g: 48, b: 116 }
    })
    .toBuffer({ resolveWithObject: true });
    
  console.log('Trimmed content info:', content.info);

  // For high-res square icon (512x512):
  // We can put the full trimmed wordmark centered in a rounded rectangle or navy background with amber accent border:
  const trimmed = await sharp(content.data)
    .resize(460, null, { fit: 'inside' })
    .toBuffer();

  const icon512 = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 1, g: 48, b: 116, alpha: 1 }
    }
  })
    .composite([
      {
        input: trimmed,
        gravity: 'centre'
      }
    ])
    .png()
    .toBuffer();

  // Save to src/app/icon.png and public/favicon.png and public/apple-touch-icon.png
  fs.writeFileSync(path.join(__dirname, '../src/app/icon.png'), icon512);
  fs.writeFileSync(path.join(__dirname, '../src/app/apple-icon.png'), icon512);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.png'), icon512);
  fs.writeFileSync(path.join(__dirname, '../public/apple-touch-icon.png'), icon512);
  
  // Generate 32x32 and 48x48 PNGs
  const icon32 = await sharp(icon512).resize(32, 32).png().toBuffer();
  const icon48 = await sharp(icon512).resize(48, 48).png().toBuffer();
  const icon16 = await sharp(icon512).resize(16, 16).png().toBuffer();

  fs.writeFileSync(path.join(__dirname, '../public/favicon-32x32.png'), icon32);
  fs.writeFileSync(path.join(__dirname, '../public/favicon-16x16.png'), icon16);

  // Convert 32x32 PNG directly to ICO format header + PNG body or replace src/app/favicon.ico
  // Modern browsers (Chrome, Edge, Firefox, Safari) support PNG directly inside .ico or as /favicon.ico!
  fs.writeFileSync(path.join(__dirname, '../src/app/favicon.ico'), icon32);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icon32);

  console.log('Successfully generated all tab icons and favicon files!');
}

main().catch(console.error);
