// Automated IndexNow Submission Script
// Submits all canonical URLs to Bing / Yandex / IndexNow API

const INDEXNOW_KEY = 'e98fbeb26cb6473d96898f8e9ba3eaf8';
const HOST = 'howheight.org';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

async function submitIndexNow() {
  console.log(`Submitting URLs to IndexNow for host: ${HOST}...`);
  
  // Fetch local or remote sitemap
  const fs = await import('node:fs');
  let urlList = [];

  if (fs.existsSync('dist/sitemap.xml')) {
    const sitemapContent = fs.readFileSync('dist/sitemap.xml', 'utf8');
    const matches = sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g);
    for (const match of matches) {
      urlList.push(match[1]);
    }
  } else {
    urlList = [
      `https://${HOST}/`,
      `https://${HOST}/compare/`,
      `https://${HOST}/celebrity-height-comparison/`,
      `https://${HOST}/animal-height-comparison/`,
      `https://${HOST}/anime-height-comparison/`,
      `https://${HOST}/film-height-comparison/`,
      `https://${HOST}/object-height-comparison/`,
      `https://${HOST}/height-comparison-calculator/`,
      `https://${HOST}/height-comparison-chart/`,
      `https://${HOST}/how-to-use/`
    ];
  }

  console.log(`Prepared ${urlList.length} URLs for IndexNow submission.`);

  // Submit in batches of 10,000 (IndexNow API limit is 10k per request)
  const batch = urlList.slice(0, 10000);
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: batch
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    console.log(`IndexNow Response Status: ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log('✓ Successfully submitted URLs to IndexNow!');
    } else {
      const text = await res.text();
      console.log('Response body:', text);
    }
  } catch (err) {
    console.error('Error submitting to IndexNow:', err);
  }
}

submitIndexNow();
