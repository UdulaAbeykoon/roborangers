// This is a simple script to check for remaining unescaped apostrophes in React files
const fs = require('fs');
const path = require('path');

// Get all TSX files
function getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory() && !filePath.includes('node_modules') && !filePath.includes('.next')) {
            fileList = getAllFiles(filePath, fileList);
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
            fileList.push(filePath);
        }
    }
    
    return fileList;
}

// Check a file for unescaped apostrophes in JSX
function checkFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Simple pattern to detect potential unescaped apostrophes in JSX
    const jsxPattern = /<[^>]*?'[^>]*?>/g;
    const matches = content.match(jsxPattern);
    
    if (matches) {
        console.log(`Potential issues in ${filePath}:`);
        matches.forEach(match => {
            console.log(`  ${match}`);
        });
        return true;
    }
    
    return false;
}

// All these patterns might indicate an unescaped apostrophe in JSX
const patterns = [
    /(className|style)="[^"]*'[^"]*"/g,  // className or style with apostrophe
    /<[^>]*?>[^<]*?'s\b[^<]*?</g,       // 's in text content
    /<[^>]*?>[^<]*?'t\b[^<]*?</g,       // 't in text content
    /<[^>]*?>[^<]*?'re\b[^<]*?</g,      // 're in text content
    /<[^>]*?>[^<]*?'ve\b[^<]*?</g,      // 've in text content
    /<[^>]*?>[^<]*?'d\b[^<]*?</g,       // 'd in text content
    /<[^>]*?>[^<]*?'ll\b[^<]*?</g,      // 'll in text content
    /<[^>]*?>[^<]*?'m\b[^<]*?</g,       // 'm in text content
];

// Check against all patterns
function checkFilePatterns(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    let found = false;
    
    for (const pattern of patterns) {
        const matches = content.match(pattern);
        
        if (matches) {
            if (!found) {
                console.log(`Potential issues in ${filePath}:`);
                found = true;
            }
            
            matches.forEach(match => {
                if (!match.includes('&apos;') && !match.includes('&#39;')) {
                    console.log(`  ${match}`);
                }
            });
        }
    }
    
    return found;
}

// Main function
function main() {
    const rootDir = process.cwd();
    const files = getAllFiles(rootDir);
    console.log(`Found ${files.length} React files to check`);
    
    let issuesFound = 0;
    
    for (const file of files) {
        if (checkFilePatterns(file)) {
            issuesFound++;
        }
    }
    
    if (issuesFound === 0) {
        console.log('✅ No issues found!');
    } else {
        console.log(`❌ Found potential issues in ${issuesFound} files`);
    }
}

main();
