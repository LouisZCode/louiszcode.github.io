// This script can be used to convert the SVG files to PNG
// You'll need to install these dependencies:
// npm install puppeteer sharp

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const sharp = require('sharp');

async function convertSvgToPng(svgFilePath) {
  const pngFilePath = svgFilePath.replace('.svg', '.png');
  const svgContent = fs.readFileSync(svgFilePath, 'utf8');
  
  // Launch browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to SVG dimensions
  await page.setViewport({ width: 800, height: 450 });
  
  // Set content to SVG
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { margin: 0; }
        </style>
      </head>
      <body>
        ${svgContent}
      </body>
    </html>
  `);
  
  // Capture screenshot
  const screenshot = await page.screenshot({ 
    omitBackground: true,
    type: 'png'
  });
  
  // Close browser
  await browser.close();
  
  // Optimize PNG
  await sharp(screenshot)
    .toFile(pngFilePath);
  
  console.log(`Converted ${svgFilePath} to ${pngFilePath}`);
}

async function main() {
  const imagesDir = path.join(__dirname, 'images');
  const svgFiles = fs.readdirSync(imagesDir)
    .filter(file => file.endsWith('.svg'))
    .map(file => path.join(imagesDir, file));
  
  console.log(`Found ${svgFiles.length} SVG files to convert`);
  
  for (const svgFile of svgFiles) {
    await convertSvgToPng(svgFile);
  }
  
  console.log('Conversion complete!');
}

main().catch(console.error);
