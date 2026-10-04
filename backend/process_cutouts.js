const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const trophiesDir = path.join(__dirname, 'public', 'trophies');

async function removeGreenAndBlackBg(filename, outName) {
  const inputPath = path.join(trophiesDir, filename);
  const outputPath = path.join(trophiesDir, outName);

  if (!fs.existsSync(inputPath)) {
    console.log('File missing:', filename);
    return;
  }

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixelData = data;
  const { width, height, channels } = info;

  for (let i = 0; i < pixelData.length; i += channels) {
    const r = pixelData[i];
    const g = pixelData[i + 1];
    const b = pixelData[i + 2];

    const x = (i / channels) % width;
    const y = Math.floor((i / channels) / width);

    // Green grass background (FIFA, ODI, T20)
    const isGreen = (g > 50 && g > r * 1.08 && g > b * 1.05) || (g > 70 && r < 120 && b < 120);

    // Dark background (Test Mace)
    const isDarkBg = (r < 40 && g < 40 && b < 40);

    // Corner blurred background
    const isCorner = (y < height * 0.28 || y > height * 0.88) && (x < width * 0.25 || x > width * 0.75);
    const isGrayBg = (Math.abs(r - g) < 22 && Math.abs(g - b) < 22 && r > 85 && r < 200);

    if (isGreen || isDarkBg || (isCorner && isGrayBg)) {
      pixelData[i + 3] = 0; // Transparent
    }
  }

  await sharp(pixelData, {
    raw: { width, height, channels }
  })
  .png()
  .toFile(outputPath);

  console.log('Created transparent cutout:', outName, fs.statSync(outputPath).size, 'bytes');
}

async function main() {
  await removeGreenAndBlackBg('football_wc.jpg', 'football_wc_clean.png');
  await removeGreenAndBlackBg('odi_wc.jpg', 'odi_wc_clean.png');
  await removeGreenAndBlackBg('t20_wc.png', 't20_wc_clean.png');
  await removeGreenAndBlackBg('test_wc.png', 'test_wc_clean.png');
  await removeGreenAndBlackBg('prudential_wc.png', 'prudential_wc_clean.png');
}

main().catch(err => console.error(err));
