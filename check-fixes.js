const fs = require('fs');
const path = require('path');

// Files we fixed
const filesToCheck = [
  'app/contact/page.tsx',
  'app/pricing/page.tsx',
  'components/bookingSection/bookingSection.tsx',
  'components/contactSection/contactSection.tsx',
  'components/aboutSection/projectCard.tsx',
  'app/layout.tsx',
  'app/fonts.ts',
  '.eslintrc.json'
];

console.log('Checking fixed files:');
filesToCheck.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    console.log(`✅ ${file} exists`);
    
    // Check for apostrophes
    if (file.endsWith('.tsx') && !file.includes('projectCard') && !file.includes('layout')) {
      const hasUnescapedApostrophe = content.includes("'s ") || content.includes("'re ");
      const hasEscapedApostrophe = content.includes("&apos;s") || content.includes("&apos;re");
      console.log(`  - Unescaped apostrophes: ${hasUnescapedApostrophe ? '❌' : '✅'}`);
      console.log(`  - Escaped apostrophes: ${hasEscapedApostrophe ? '✅' : '❌'}`);
    }
    
    // Check for Next Image in projectCard
    if (file.includes('projectCard')) {
      console.log(`  - Uses Next/Image: ${content.includes('import Image from "next/image"') ? '✅' : '❌'}`);
    }
    
    // Check for fonts configuration
    if (file === 'app/fonts.ts') {
      console.log(`  - Fonts configuration: ${content.includes('variable:') ? '✅' : '❌'}`);
    }
  } else {
    console.log(`❌ ${file} not found`);
  }
});
