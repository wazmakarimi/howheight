import https from 'https';
import fs from 'fs';

const categories = ['male', 'female', 'apparel', 'animal', 'object', 'fantasy', 'plant', 'sport'];

async function fetchCategory(cat) {
  return new Promise((resolve) => {
    const url = `https://howheight-height-assets-api.yuyukongkong1.workers.dev/api/height-assets/catalog?sourceGroup=${cat}&limit=500`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          resolve(j.assets || []);
        } catch (e) {
          console.error(`Error parsing ${cat}:`, e);
          resolve([]);
        }
      });
    }).on('error', err => {
      console.error(`Error fetching ${cat}:`, err);
      resolve([]);
    });
  });
}

async function run() {
  const allCatalog = {};
  for (const cat of categories) {
    console.log(`Fetching catalog for ${cat}...`);
    const assets = await fetchCategory(cat);
    console.log(`Received ${assets.length} assets for ${cat}`);
    allCatalog[cat] = assets;
  }
  fs.writeFileSync('scripts/full-catalog.json', JSON.stringify(allCatalog, null, 2));
  console.log('Successfully saved scripts/full-catalog.json!');
}

run();