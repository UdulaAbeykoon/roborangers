const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);

// Files with content we already fixed
const fixedFiles = [
  'app/about/page.tsx',
  'app/booking/page.tsx',
  'app/contact/page.tsx',
  'app/pricing/page.tsx',
  'components/bookingSection/bookingSection.tsx',
  'components/contactSection/contactSection.tsx',
  'components/aboutSection/projectCard.tsx'
];

// Regex pattern for detecting common unescaped apostrophes in React/JSX
const problematicPatterns = [
  /(\s|>|^)([^<>]*?)'s(\s|<|$)/g,           // words ending with 's
  /(\s|>|^)([^<>]*?)'ve(\s|<|$)/g,          // contractions with 've
  /(\s|>|^)([^<>]*?)'re(\s|<|$)/g,          // contractions with 're
  /(\s|>|^)([^<>]*?)'d(\s|<|$)/g,           // contractions with 'd
  /(\s|>|^)([^<>]*?)'ll(\s|<|$)/g,          // contractions with 'll
  /(\s|>|^)([^<>]*?)'t(\s|<|$)/g,           // contractions with 't
  /(\s|>|^)([^<>]*?)'m(\s|<|$)/g,           // contractions with 'm
  /(\s|>|^)(Let|let)'s(\s|<|$)/g,           // Let's
  /(\s|>|^)(Don|don)'t(\s|<|$)/g,           // Don't
  /(\s|>|^)(Can|can)'t(\s|<|$)/g,           // Can't
  /(\s|>|^)(Won|won)'t(\s|<|$)/g,           // Won't
  /(\s|>|^)(Shouldn|shouldn)'t(\s|<|$)/g,   // Shouldn't
  /(\s|>|^)(Couldn|couldn)'t(\s|<|$)/g,     // Couldn't
  /(\s|>|^)(Wouldn|wouldn)'t(\s|<|$)/g,     // Wouldn't
  /(\s|>|^)(We|we)'ve(\s|<|$)/g,            // We've
  /(\s|>|^)(They|they)'re(\s|<|$)/g,        // They're
  /(\s|>|^)(We|we)'re(\s|<|$)/g,            // We're
  /(\s|>|^)(You|you)'re(\s|<|$)/g,          // You're
  /(\s|>|^)(I|i)'m(\s|<|$)/g,               // I'm
  /(\s|>|^)(That|that)'s(\s|<|$)/g,         // That's
  /(\s|>|^)(What|what)'s(\s|<|$)/g,         // What's
  /(\s|>|^)(Here|here)'s(\s|<|$)/g,         // Here's
  /(\s|>|^)(It|it)'s(\s|<|$)/g,             // It's
  /(\s|>|^)(child)'s(\s|<|$)/g,             // child's
];

// Only check tsx files
const isTSXFile = filePath => filePath.endsWith('.tsx');

// Avoid node_modules and other non-source directories
const ignoreDirs = ['node_modules', '.next', '.git', 'public'];
const shouldSkipDir = dirName => ignoreDirs.some(ignored => dirName === ignored);

// Check if a file is in our "already fixed" list
const isFixedFile = filePath => {
  return fixedFiles.some(fixed => filePath.replace(/\\/g, '/').includes(fixed));
};

// Recursively find all TSX files
async function findTSXFiles(dir, fileList = []) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await stat(filePath);
    
    if (stats.isDirectory()) {
      if (!shouldSkipDir(file)) {
        fileList = await findTSXFiles(filePath, fileList);
      }
    } else if (isTSXFile(file) && !isFixedFile(filePath)) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

// Check a file for unescaped apostrophes
async function checkFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
    let hasIssue = false;
    
    for (const pattern of problematicPatterns) {
      const matches = content.match(pattern);
      if (matches) {
        if (!hasIssue) {
          console.log(`\nPotential issues in ${relativePath}:`);
          hasIssue = true;
        }
        
        matches.forEach(match => {
          const trimmed = match.trim();
          if (trimmed) {
            console.log(`  - "${trimmed}" should be escaped as "&apos;"`);
          }
        });
      }
    }
    
    return hasIssue;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const rootDir = process.cwd();
  console.log(`Checking TSX files in ${rootDir} for unescaped apostrophes...`);
  
  const tsxFiles = await findTSXFiles(rootDir);
  console.log(`Found ${tsxFiles.length} TSX files to check (excluding already fixed files).`);
  
  let issuesFound = 0;
  
  for (const file of tsxFiles) {
    const hasIssue = await checkFile(file);
    if (hasIssue) {
      issuesFound++;
    }
  }
  
  if (issuesFound > 0) {
    console.log(`\n✖ Found potential issues in ${issuesFound} files.`);
    console.log('Fix these issues by replacing apostrophes with &apos;');
  } else {
    console.log('\n✓ No potential issues found!');
  }
}

main().catch(err => {
  console.error('An error occurred:', err);
  process.exit(1);
});
