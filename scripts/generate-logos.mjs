import sharp from 'sharp';
import { readFileSync } from 'fs';

const logoDir = 'C:/Users/Justi/The Answer Engine LLC/design-system/logos';
const desktop = 'C:/Users/Justi/Desktop';

const svgDark = readFileSync(`${logoDir}/ae-logo-dark.svg`);
const svgLight = readFileSync(`${logoDir}/ae-logo-light.svg`);
const svgTransparent = readFileSync(`${logoDir}/ae-logo-transparent.svg`);
const svgIcon = readFileSync(`${logoDir}/ae-icon.svg`);

// Stripe optimal logo: 1200x400
await sharp(svgDark).resize(1200, 400).png().toFile(`${logoDir}/ae-logo-dark-1200x400.png`);
await sharp(svgLight).resize(1200, 400).png().toFile(`${logoDir}/ae-logo-light-1200x400.png`);
await sharp(svgTransparent).resize(1200, 400).png().toFile(`${logoDir}/ae-logo-transparent-1200x400.png`);

// Stripe optimal icon: 512x512
await sharp(svgIcon).resize(512, 512).png().toFile(`${logoDir}/ae-icon-512x512.png`);

// Copy best versions to desktop
await sharp(svgDark).resize(1200, 400).png().toFile(`${desktop}/ae-logo-BLACK-1200x400.png`);
await sharp(svgLight).resize(1200, 400).png().toFile(`${desktop}/ae-logo-WHITE-1200x400.png`);
await sharp(svgTransparent).resize(1200, 400).png().toFile(`${desktop}/ae-logo-TRANSPARENT-1200x400.png`);
await sharp(svgIcon).resize(512, 512).png().toFile(`${desktop}/ae-icon-512x512.png`);

console.log('✅ Done! Desktop files:');
console.log('  ae-logo-BLACK-1200x400.png      ← dark bg wordmark');
console.log('  ae-logo-WHITE-1200x400.png      ← light bg wordmark');
console.log('  ae-logo-TRANSPARENT-1200x400.png ← no background');
console.log('  ae-icon-512x512.png              ← square icon');
