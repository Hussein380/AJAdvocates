const fs = require('fs');
const https = require('https');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const filesToDownload = [
  { url: 'https://realfavicongenerator.net/files/2c62e03d-7f4f-4645-8912-87412dc3d248/favicon.svg', name: 'favicon.svg' },
  { url: 'https://realfavicongenerator.net/files/2c62e03d-7f4f-4645-8912-87412dc3d248/favicon-96x96.png', name: 'favicon-96x96.png' },
  { url: 'https://realfavicongenerator.net/files/2c62e03d-7f4f-4645-8912-87412dc3d248/favicon.ico', name: 'favicon.ico' },
  { url: 'https://realfavicongenerator.net/files/2c62e03d-7f4f-4645-8912-87412dc3d248/apple-touch-icon.png', name: 'apple-touch-icon.png' },
  { url: 'https://realfavicongenerator.net/files/2c62e03d-7f4f-4645-8912-87412dc3d248/web-app-manifest-192x192.png', name: 'web-app-manifest-192x192.png' },
  { url: 'https://realfavicongenerator.net/files/2c62e03d-7f4f-4645-8912-87412dc3d248/web-app-manifest-512x512.png', name: 'web-app-manifest-512x512.png' },
  { url: 'https://realfavicongenerator.net/files/2c62e03d-7f4f-4645-8912-87412dc3d248/site.webmanifest', name: 'site.webmanifest' }
];

async function downloadFiles() {
  for (const file of filesToDownload) {
    const dest = path.join(publicDir, file.name);
    await new Promise((resolve, reject) => {
      https.get(file.url, (response) => {
        if (response.statusCode === 200) {
          const fileStream = fs.createWriteStream(dest);
          response.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`Downloaded ${file.name}`);
            resolve();
          });
        } else {
          reject(new Error(`Failed to download ${file.name}: ${response.statusCode}`));
        }
      }).on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    });
  }
}

downloadFiles().then(() => console.log('All downloads complete.')).catch(console.error);
