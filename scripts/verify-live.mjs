async function verifyLive() {
  const browserHeaders = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  };

  const googlebotHeaders = {
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
  };

  console.log('====================================================');
  console.log('1. Checking Production Domain: https://howheight.org/');
  console.log('====================================================');
  try {
    const res = await fetch('https://howheight.org/', { headers: browserHeaders, redirect: 'manual' });
    console.log('Status:', res.status);
    console.log('X-Robots-Tag:', res.headers.get('x-robots-tag'));
    console.log('Cache-Control:', res.headers.get('cache-control'));
    console.log('cf-cache-status:', res.headers.get('cf-cache-status'));
    const text = await res.text();
    console.log('HTML Length:', text.length);
    console.log('Has static noindex?', text.includes('meta name="robots" content="noindex'));
    const canonical = text.match(/<link rel="canonical" href="([^"]+)"/);
    console.log('Canonical:', canonical ? canonical[1] : 'NONE');
  } catch (err) {
    console.error('Prod error:', err.message);
  }

  console.log('\n====================================================');
  console.log('2. Checking Production as Googlebot: https://howheight.org/');
  console.log('====================================================');
  try {
    const res = await fetch('https://howheight.org/', { headers: googlebotHeaders, redirect: 'manual' });
    console.log('Status:', res.status);
    console.log('X-Robots-Tag:', res.headers.get('x-robots-tag'));
    const text = await res.text();
    console.log('Has static noindex for Googlebot?', text.includes('meta name="robots" content="noindex'));
    const canonical = text.match(/<link rel="canonical" href="([^"]+)"/);
    console.log('Canonical for Googlebot:', canonical ? canonical[1] : 'NONE');
  } catch (err) {
    console.error('Googlebot error:', err.message);
  }

  console.log('\n====================================================');
  console.log('3. Checking Sample Subpages: /compare/, /celebrity-height-comparison/, /celebrity-height/brad-pitt/');
  console.log('====================================================');
  for (const p of ['/compare/', '/celebrity-height-comparison/', '/celebrity-height/brad-pitt/']) {
    const res = await fetch(`https://howheight.org${p}`, { headers: browserHeaders });
    const text = await res.text();
    const c = text.match(/<link rel="canonical" href="([^"]+)"/);
    const noindex = text.includes('meta name="robots" content="noindex');
    console.log(`${p} -> status: ${res.status}, x-robots-tag: ${res.headers.get('x-robots-tag')}, canonical: ${c ? c[1] : 'NONE'}, has-meta-noindex: ${noindex}`);
  }

  console.log('\n====================================================');
  console.log('4. Checking Preview Domain: https://howheight.pages.dev/');
  console.log('====================================================');
  try {
    const res = await fetch('https://howheight.pages.dev/', { headers: browserHeaders, redirect: 'manual' });
    console.log('Status:', res.status);
    console.log('Location (redirect):', res.headers.get('location'));
    console.log('X-Robots-Tag:', res.headers.get('x-robots-tag'));
    const text = await res.text();
    const hasClientScript = text.includes('howheight.pages.dev') && text.includes('noindex, nofollow');
    console.log('Has client-side preview noindex script?', hasClientScript);
    const c = text.match(/<link rel="canonical" href="([^"]+)"/);
    console.log('Canonical points to:', c ? c[1] : 'NONE');
  } catch (err) {
    console.error('Preview error:', err.message);
  }

  console.log('\n====================================================');
  console.log('5. Checking 404 Behavior: https://howheight.org/404/');
  console.log('====================================================');
  try {
    const res = await fetch('https://howheight.org/404/', { headers: browserHeaders });
    console.log('404 Status:', res.status);
    const text = await res.text();
    console.log('404 has noindex tag?', text.includes('meta name="robots" content="noindex, nofollow"'));
    const c = text.match(/<link rel="canonical" href="([^"]+)"/);
    console.log('404 canonical:', c ? c[1] : 'NONE (correct)');
  } catch (err) {
    console.error('404 error:', err.message);
  }

  console.log('\n====================================================');
  console.log('6. Checking CSS & JS Static Bundles');
  console.log('====================================================');
  try {
    const res = await fetch('https://howheight.org/', { headers: browserHeaders });
    const text = await res.text();
    const cssMatch = text.match(/href="(\/_astro\/[^"]+\.css)"/);
    const jsMatch = text.match(/src="(\/_astro\/[^"]+\.js)"/);
    if (cssMatch) {
      const cssRes = await fetch('https://howheight.org' + cssMatch[1]);
      console.log('CSS:', cssMatch[1], '-> Status:', cssRes.status, 'Cache-Control:', cssRes.headers.get('cache-control'));
    }
    if (jsMatch) {
      const jsRes = await fetch('https://howheight.org' + jsMatch[1]);
      console.log('JS:', jsMatch[1], '-> Status:', jsRes.status, 'Cache-Control:', jsRes.headers.get('cache-control'));
    }
  } catch (err) {
    console.error('Asset check error:', err.message);
  }
}

verifyLive();
