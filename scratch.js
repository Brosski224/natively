import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('scripts/prerender.js', 'utf8');

// Use a regex to extract seoRoutes
const match = content.match(/const seoRoutes = (\[[\s\S]*?\]);/);
if (match) {
    // console.log("Found seoRoutes");
}
