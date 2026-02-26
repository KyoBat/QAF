const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Sizes to generate
const sizes = [48, 72, 96, 128, 144, 192, 384, 512];

async function generateIcons() {
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  const iconsDir = path.join(__dirname, '../public/icons');
  
  // Create icons directory if it doesn't exist
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }
  
  console.log('📦 Generating TahaLearn icons...\n');
  
  for (const size of sizes) {
    const outputPath = path.join(iconsDir, `icon-${size}x${size}.png`);
    
    try {
      await sharp(svgPath)
        .resize(size, size)
        .png({ quality: 100 })
        .toFile(outputPath);
      
      console.log(`✅ Generated: icon-${size}x${size}.png`);
    } catch (error) {
      console.error(`❌ Error generating ${size}x${size}:`, error.message);
    }
  }
  
  // Generate Apple Touch Icon (180x180)
  const applePath = path.join(iconsDir, 'icon-180x180.png');
  await sharp(svgPath)
    .resize(180, 180)
    .png({ quality: 100 })
    .toFile(applePath);
  
  console.log(`✅ Generated: icon-180x180.png`);
  console.log('\n🎉 All icons generated successfully!');
}

generateIcons().catch(console.error);
