const fs = require('fs-extra');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src/assets');
const destDir = path.resolve(__dirname, 'dist/assets');

fs.copySync(srcDir, destDir, { recursive: true });

console.log('Assets copied successfully.');
