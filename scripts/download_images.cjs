const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const COMPONENTS_DIR = path.join(__dirname, '../src/components');
const CSS_DIR = path.join(__dirname, '../src');
const IMAGES_DIR = path.join(__dirname, '../public/images');

if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects (common for Google Drive)
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, filePath).then(resolve).catch(reject);
      }
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

function getFileExtension(url) {
  const extMatch = url.match(/\.(png|jpe?g|gif|webp|svg)/i);
  if (extMatch) return extMatch[1].toLowerCase();
  return 'jpg'; // Default for Google Drive links which are usually photos
}

async function processFiles() {
  const files = [
    ...fs.readdirSync(COMPONENTS_DIR).filter(f => f.endsWith('.tsx')).map(f => path.join(COMPONENTS_DIR, f)),
    path.join(CSS_DIR, 'index.css'),
    path.join(CSS_DIR, 'App.css')
  ];

  for (const filePath of files) {
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');
    // Regex for both standard image URLs and Google Drive direct links
    const urlRegex = /(https?:\/\/(?:[a-zA-Z0-9-]+\.)+[a-z]{2,}(?::\d+)?(?:\/[^\s"']*)?)/gi;
    const matches = content.match(urlRegex) || [];
    
    // Filter matches to only include those that likely point to images or are in src/url attributes
    const imageMatches = [...new Set(matches.filter(url => {
        return url.match(/\.(png|jpe?g|gif|webp|svg)(\?|$)/i) || 
               url.includes('googleusercontent.com') ||
               url.includes('h5cdn.hunbei.com/editorCustomPic');
    }))];

    if (imageMatches.length > 0) {
      console.log(`Processing ${path.basename(filePath)}... found ${imageMatches.length} URLs`);
      for (const url of imageMatches) {
        if (url.startsWith('/images/')) continue;
        if (url.includes('maps.google.com')) continue; // Skip Google Maps iframe URLs

        try {
          const hash = crypto.createHash('md5').update(url).digest('hex');
          const ext = getFileExtension(url);
          const fileName = `${hash}.${ext}`;
          const localPath = path.join(IMAGES_DIR, fileName);
          
          if (!fs.existsSync(localPath)) {
            console.log(`  Downloading ${url.substring(0, 50)}... -> ${fileName}`);
            await download(url, localPath);
          }
          
          // Use split/join to replace all occurrences precisely
          content = content.split(url).join(`/images/${fileName}`);
        } catch (err) {
          console.error(`  Error processing ${url.substring(0, 50)}...:`, err.message);
        }
      }
      fs.writeFileSync(filePath, content);
    }
  }
}

processFiles().then(() => console.log('Done!'));
