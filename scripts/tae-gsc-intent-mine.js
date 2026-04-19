/**
 * One-off: pull GSC intent data for theanswerengine.ai.
 * - Top 25 queries (by impressions) — last 28 days
 * - Top 10 pages (by clicks)
 * - All queries at position 11-30 with >=5 impressions (page 2/3 opportunities)
 * - Low-CTR pages (pos <= 10, CTR below expected)
 *
 * Usage: node scripts/tae-gsc-intent-mine.js > docs/_tae-gsc-raw.json
 */
const fs = require('fs');
const { google } = require('googleapis');

const env = fs.readFileSync('.env.local', 'utf-8');
const get = (k) => (env.match(new RegExp('^' + k + '=(.+)$', 'm')) || [])[1]?.trim() || '';

const CLIENT_ID = get('GMAIL_CLIENT_ID');
const CLIENT_SECRET = get('GMAIL_CLIENT_SECRET');
const REFRESH_TOKEN = get('GSC_REFRESH_TOKEN');

const oauth2 = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
oauth2.setCredentials({ refresh_token: REFRESH_TOKEN });
const gsc = google.searchconsole({ version: 'v1', auth: oauth2 });

const SITE = 'sc-domain:theanswerengine.ai';

function daysAgo(n) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
}

// GSC lags 2-3 days; use day-3 as endDate, 28-day window
const endDate = daysAgo(3);
const startDate = daysAgo(31);

async function queryGSC(dimensions, rowLimit, filters) {
  const body = { startDate, endDate, dimensions, rowLimit };
  if (filters) body.dimensionFilterGroups = filters;
  const res = await gsc.searchanalytics.query({ siteUrl: SITE, requestBody: body });
  return (res.data.rows || []).map(r => ({
    keys: r.keys,
    clicks: r.clicks || 0,
    impressions: r.impressions || 0,
    ctr: r.ctr || 0,
    position: r.position || 0,
  }));
}

(async () => {
  try {
    // 1. Top queries by impressions (top 25)
    const topQueriesByImp = (await queryGSC(['query'], 100))
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 25)
      .map(r => ({ query: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: +(r.ctr * 100).toFixed(2), position: +r.position.toFixed(1) }));

    // 2. Top queries by clicks (top 25)
    const topQueriesByClicks = (await queryGSC(['query'], 200))
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 25)
      .map(r => ({ query: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: +(r.ctr * 100).toFixed(2), position: +r.position.toFixed(1) }));

    // 3. Top 10 pages by clicks
    const topPagesByClicks = (await queryGSC(['page'], 100))
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 15)
      .map(r => ({ page: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: +(r.ctr * 100).toFixed(2), position: +r.position.toFixed(1) }));

    // 4. Position 11-30 queries with >=5 impressions (page 2/3 opportunities)
    const allQueries = await queryGSC(['query'], 1000);
    const page23Opps = allQueries
      .filter(r => r.position >= 11 && r.position <= 30 && r.impressions >= 5)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 50)
      .map(r => ({ query: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: +(r.ctr * 100).toFixed(2), position: +r.position.toFixed(1) }));

    // 5. Low-CTR pages (pos <= 10, CTR below 1.5% and impressions >= 50)
    const allPages = await queryGSC(['page'], 500);
    const lowCtrPages = allPages
      .filter(r => r.position <= 10 && r.ctr < 0.015 && r.impressions >= 50)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 20)
      .map(r => ({ page: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: +(r.ctr * 100).toFixed(3), position: +r.position.toFixed(1) }));

    // 6. Site-wide totals for context
    const allQ = allQueries.reduce((acc, r) => {
      acc.clicks += r.clicks; acc.impressions += r.impressions; return acc;
    }, { clicks: 0, impressions: 0 });

    const out = {
      site: SITE,
      date_range: { startDate, endDate, days: 28 },
      totals: { clicks: allQ.clicks, impressions: allQ.impressions, ctr_pct: +((allQ.clicks / Math.max(1, allQ.impressions)) * 100).toFixed(2) },
      top_queries_by_impressions: topQueriesByImp,
      top_queries_by_clicks: topQueriesByClicks,
      top_pages_by_clicks: topPagesByClicks,
      page_2_3_opportunities: page23Opps,
      low_ctr_top_10_pages: lowCtrPages,
    };

    console.log(JSON.stringify(out, null, 2));
  } catch (err) {
    console.error('✗ Failed:', err.message);
    if (err.response?.data) console.error(JSON.stringify(err.response.data, null, 2));
    process.exit(1);
  }
})();
