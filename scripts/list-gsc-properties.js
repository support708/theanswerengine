/**
 * Smoke test: list every Search Console property support@theanswerengine.ai
 * has access to.
 *
 * Run: node scripts/list-gsc-properties.js
 *
 * Requires:
 *   - GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET (shared with Gmail)
 *   - GSC_REFRESH_TOKEN (from scripts/get-gsc-token.js)
 */
const fs = require('fs');
const { google } = require('googleapis');

const env = fs.readFileSync('.env.local', 'utf-8');
const get = (k) => (env.match(new RegExp('^' + k + '=(.+)$', 'm')) || [])[1]?.trim() || '';

const CLIENT_ID = get('GMAIL_CLIENT_ID');
const CLIENT_SECRET = get('GMAIL_CLIENT_SECRET');
const REFRESH_TOKEN = get('GSC_REFRESH_TOKEN');

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('✗ Missing GMAIL_CLIENT_ID or GMAIL_CLIENT_SECRET in .env.local');
  process.exit(1);
}
if (!REFRESH_TOKEN) {
  console.error('✗ Missing GSC_REFRESH_TOKEN in .env.local');
  console.error('  Run first: node scripts/get-gsc-token.js');
  process.exit(1);
}

const oauth2 = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
oauth2.setCredentials({ refresh_token: REFRESH_TOKEN });
const gsc = google.searchconsole({ version: 'v1', auth: oauth2 });

(async () => {
  try {
    const res = await gsc.sites.list({});
    const sites = res.data.siteEntry || [];

    if (sites.length === 0) {
      console.log('No Search Console properties found.');
      console.log('This account has no verified sites, or the token scope is wrong.');
      return;
    }

    console.log(`\n${sites.length} Search Console ${sites.length === 1 ? 'property' : 'properties'} for support@theanswerengine.ai:\n`);
    console.log('Permission         Site URL');
    console.log('-----------------  --------');
    for (const s of sites) {
      const perm = (s.permissionLevel || '').padEnd(17);
      console.log(`${perm}  ${s.siteUrl}`);
    }
    console.log('');
  } catch (err) {
    console.error('✗ Failed:', err.message);
    if (err.response?.data) console.error(JSON.stringify(err.response.data, null, 2));
    process.exit(1);
  }
})();
