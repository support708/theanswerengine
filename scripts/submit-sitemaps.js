/**
 * Submit each client's sitemap to Google Search Console.
 *
 * Usage:
 *   node scripts/submit-sitemaps.js                    # all clients from gsc-client-map.json
 *   node scripts/submit-sitemaps.js <site-url>         # one specific property
 *
 * For each site:
 *   1. Derive the sitemap URL from the GSC siteUrl
 *      - sc-domain:example.com   -> https://example.com/sitemap.xml
 *      - https://example.com/    -> https://example.com/sitemap.xml
 *   2. HEAD-check the sitemap responds 200 (skip if 404)
 *   3. Call gsc.sitemaps.submit(siteUrl, feedpath)
 *   4. Log result, continue on error
 */
const fs = require('fs');
const { google } = require('googleapis');

const env = fs.readFileSync('.env.local', 'utf-8');
const get = (k) => (env.match(new RegExp('^' + k + '=(.+)$', 'm')) || [])[1]?.trim() || '';

const CLIENT_ID = get('GMAIL_CLIENT_ID');
const CLIENT_SECRET = get('GMAIL_CLIENT_SECRET');
const REFRESH_TOKEN = get('GSC_REFRESH_TOKEN');

if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
  console.error('✗ Missing env vars (GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GSC_REFRESH_TOKEN)');
  process.exit(1);
}

const oauth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
oauth.setCredentials({ refresh_token: REFRESH_TOKEN });
const gsc = google.searchconsole({ version: 'v1', auth: oauth });

function deriveSitemapUrl(siteUrl) {
  if (siteUrl.startsWith('sc-domain:')) {
    const domain = siteUrl.slice('sc-domain:'.length);
    return `https://${domain}/sitemap.xml`;
  }
  // https://example.com/ -> https://example.com/sitemap.xml
  return siteUrl.replace(/\/?$/, '/') + 'sitemap.xml';
}

async function headCheck(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(8000) });
    return res.status;
  } catch (err) {
    return 0;
  }
}

async function submitOne(siteUrl) {
  const feedpath = deriveSitemapUrl(siteUrl);
  process.stdout.write(`  ${siteUrl.padEnd(56)} -> ${feedpath.padEnd(60)} `);

  const status = await headCheck(feedpath);
  if (status !== 200) {
    console.log(`SKIP (sitemap ${status || 'unreachable'})`);
    return { siteUrl, feedpath, ok: false, reason: `sitemap returned ${status}` };
  }

  try {
    await gsc.sitemaps.submit({ siteUrl, feedpath });
    console.log('✓ submitted');
    return { siteUrl, feedpath, ok: true };
  } catch (err) {
    console.log(`✗ ${err.message}`);
    return { siteUrl, feedpath, ok: false, reason: err.message };
  }
}

async function main() {
  const override = process.argv[2];
  let siteUrls;

  if (override) {
    siteUrls = [override];
  } else {
    const map = JSON.parse(fs.readFileSync('data/gsc-client-map.json', 'utf-8'));
    siteUrls = Object.keys(map).filter(k => !k.startsWith('_'));
  }

  console.log(`\n=== Sitemap submission — ${siteUrls.length} ${siteUrls.length === 1 ? 'property' : 'properties'} ===\n`);

  const results = [];
  for (const s of siteUrls) {
    results.push(await submitOne(s));
  }

  const ok = results.filter(r => r.ok).length;
  const fail = results.length - ok;
  console.log(`\n${ok} submitted, ${fail} skipped/failed.`);

  if (fail > 0) {
    console.log('\nFailures:');
    for (const r of results.filter(r => !r.ok)) {
      console.log(`  ${r.siteUrl}: ${r.reason}`);
    }
  }
  console.log('');
}

main().catch(err => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
