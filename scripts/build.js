const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Define paths
const srcDir = path.join(__dirname, '../src');
const publicDir = path.join(__dirname, '../public');
const tailwindInput = path.join(srcDir, 'assets/css/style.css');
const tailwindOutput = path.join(publicDir, 'assets/css/output.css');

// Helper to copy files
const copyFiles = (source, destination) => {
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination, { recursive: true });
    }

    fs.readdirSync(source).forEach((item) => {
        const srcPath = path.join(source, item);
        const destPath = path.join(destination, item);

        if (fs.lstatSync(srcPath).isDirectory()) {
            copyFiles(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
};

// Clean and build public directory
const buildSite = () => {
    if (fs.existsSync(publicDir)) {
        fs.rmSync(publicDir, { recursive: true, force: true });
    }
    fs.mkdirSync(publicDir);

    // Copy assets and pages
    copyFiles(path.join(srcDir, 'assets'), path.join(publicDir, 'assets'));
    copyFiles(path.join(srcDir, 'pages'), publicDir);

    // Build Tailwind CSS
    try {
        console.log('Building Tailwind CSS...');
        execSync(`npx tailwindcss -i ${tailwindInput} -o ${tailwindOutput}`, { stdio: 'inherit' });
        console.log('Tailwind CSS built successfully!');
    } catch (error) {
        console.error('Failed to build Tailwind CSS:', error.message);
        process.exit(1);
    }
};

buildSite();
console.log('Build completed! Files are in the public/ directory.');