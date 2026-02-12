import fs from 'fs';
import path from 'path';

const srcDir = "src";
const distDir = "dist";

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir);

function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });

    for (const file of fs.readdirSync(src)) {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);

        if (fs.statSync(srcPath).isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyDir(srcDir, distDir);