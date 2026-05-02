/**
 * lovery-gsc-checkin.js — Fresh GSC pull for Ryan Fisher / Lovery RE meeting (2026-04-30).
 *
 * Pulls two windows of equal length (33 days):
 *   - Engagement:    2026-03-25 → 2026-04-27 (start date → most recent stable GSC data)
 *   - Pre-baseline:  2026-02-20 → 2026-03-24 (same length, immediately before)
 *
 * For each window: site totals, top 25 queries, top 25 pages.
 * Also pulls daily-by-date series for the engagement window to show trend.
 *
 * Output:
 *   clients/lovery-re/gsc-checkin-2026-04-30.json   (raw)
 *   clients/lovery-re/gsc-checkin-2026-04-30.md     (meeting-ready summary)
 */
const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const env = fs.readFileSync('.env.local', 'utf-8');
const get = (k) => (env.match(new RegExp('^' + k + '=(.+)$', 'm')) || [])[1]?.trim() || '';

const CLIENT_ID     = get('GMAIL_CLIENT_ID');
const CLIENT_SECRET = get('GMAIL_CLIENT_SECRET');
const REFRESH_TOKEN = get('GSC_REFRESH_TOKEN');

if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
  console.error('✗ Missing GSC creds in .env.local');
  process.exit(1);
}

const SITE_URL = 'https://loveryrealestate.com/';
const ENGAGEMENT_START = '2026-03-25';
const ENGAGEMENT_END   = '2026-04-27';
const BASELINE_START   = '2026-02-20';
const BASELINE_END     = '2026-03-24';

const OUT_DIR = path.resolve('../The Answer Engine LLC/clients/lovery-re');
const TODAY   = '2026-04-30';

const oauth2 = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
oauth2.setCredentials({ refresh_token: REFRESH_TOKEN });
const gsc = google.searchconsole({ version: 'v1', auth: oauth2 });

async function query(body) {
  const res = await gsc.searchanalytics.query({ siteUrl: SITE_URL, requestBody: body });
  return res.data.rows || [];
}

async function windowSummary(label, startDate, endDate) {
  const totalsRows = await query({ startDate, endDate, dimensions: [], rowLimit: 1 });
  const totals = totalsRows[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };

  const queries = await query({ startDate, endDate, dimensions: ['query'], rowLimit: 25 });
  const pages   = await query({ startDate, endDate, dimensions: ['page'],  rowLimit: 25 });

  return {
    label,
    startDate,
    endDate,
    totals: {
      clicks:      totals.clicks      || 0,
      impressions: totals.impressions || 0,
      ctr:         totals.ctr         || 0,
      position:    totals.position    || 0,
    },
    topQueries: queries.map(r => ({
      query: r.keys?.[0] || '',
      clicks: r.clicks || 0,
      impressions: r.impressions || 0,
      ctr: r.ctr || 0,
      position: r.position || 0,
    })),
    topPages: pages.map(r => ({
      page: r.keys?.[0] || '',
      clicks: r.clicks || 0,
      impressions: r.impressions || 0,
      ctr: r.ctr || 0,
      position: r.position || 0,
    })),
  };
}

async function dailySeries(startDate, endDate) {
  const rows = await query({ startDate, endDate, dimensions: ['date'], rowLimit: 1000 });
  return rows
    .map(r => ({
      date: r.keys?.[0] || '',
      clicks: r.clicks || 0,
      impressions: r.impressions || 0,
      ctr: r.ctr || 0,
      position: r.position || 0,
    }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function pct(a, b) {
  if (b === 0) return a === 0 ? '0%' : '∞';
  const v = ((a - b) / b) * 100;
  const sign = v >= 0 ? '+' : '';
  return `${sign}${v.toFixed(0)}%`;
}

function fmtCtr(c) { return `${(c * 100).toFixed(1)}%`; }
function fmtPos(p) { return p ? p.toFixed(1) : '—'; }

function table(rows, cols) {
  if (!rows.length) return '_no data_';
  const header = '| ' + cols.map(c => c.label).join(' | ') + ' |';
  const sep    = '| ' + cols.map(() => '---').join(' | ') + ' |';
  const body   = rows.map(r => '| ' + cols.map(c => c.fmt(r)).join(' | ') + ' |').join('\n');
  return `${header}\n${sep}\n${body}`;
}

function buildMarkdown({ engagement, baseline, daily }) {
  const e = engagement.totals;
  const b = baseline.totals;

  let md = '';
  md += `# Lovery RE — GSC Check-in (${TODAY})\n\n`;
  md += `**Property:** ${SITE_URL}\n`;
  md += `**Engagement start:** ${ENGAGEMENT_START} (5 weeks ago)\n`;
  md += `**Window:** ${ENGAGEMENT_START} → ${ENGAGEMENT_END} (33 days)\n`;
  md += `**Baseline (prior 33d):** ${BASELINE_START} → ${BASELINE_END}\n\n`;

  md += `## Headline Numbers — Engagement vs. Pre-Engagement\n\n`;
  md += `| Metric | Pre-engagement | Engagement | Δ |\n`;
  md += `| --- | --- | --- | --- |\n`;
  md += `| Clicks | ${b.clicks} | **${e.clicks}** | ${pct(e.clicks, b.clicks)} |\n`;
  md += `| Impressions | ${b.impressions} | **${e.impressions}** | ${pct(e.impressions, b.impressions)} |\n`;
  md += `| CTR | ${fmtCtr(b.ctr)} | **${fmtCtr(e.ctr)}** | ${pct(e.ctr, b.ctr)} |\n`;
  md += `| Avg position | ${fmtPos(b.position)} | **${fmtPos(e.position)}** | ${pct(e.position, b.position)} |\n\n`;

  md += `## Top 25 Queries (Engagement Window)\n\n`;
  md += table(engagement.topQueries, [
    { label: 'Query',       fmt: r => r.query || '_(anon)_' },
    { label: 'Clicks',      fmt: r => r.clicks },
    { label: 'Impr.',       fmt: r => r.impressions },
    { label: 'CTR',         fmt: r => fmtCtr(r.ctr) },
    { label: 'Pos',         fmt: r => fmtPos(r.position) },
  ]) + '\n\n';

  md += `## Top 25 Pages (Engagement Window)\n\n`;
  md += table(engagement.topPages, [
    { label: 'Page',        fmt: r => r.page.replace('https://loveryrealestate.com', '') },
    { label: 'Clicks',      fmt: r => r.clicks },
    { label: 'Impr.',       fmt: r => r.impressions },
    { label: 'CTR',         fmt: r => fmtCtr(r.ctr) },
    { label: 'Pos',         fmt: r => fmtPos(r.position) },
  ]) + '\n\n';

  md += `## Top 25 Queries (Pre-Engagement Baseline)\n\n`;
  md += table(baseline.topQueries, [
    { label: 'Query',       fmt: r => r.query || '_(anon)_' },
    { label: 'Clicks',      fmt: r => r.clicks },
    { label: 'Impr.',       fmt: r => r.impressions },
    { label: 'CTR',         fmt: r => fmtCtr(r.ctr) },
    { label: 'Pos',         fmt: r => fmtPos(r.position) },
  ]) + '\n\n';

  md += `## Daily Trend — Engagement Window\n\n`;
  md += `| Date | Clicks | Impressions | CTR | Pos |\n`;
  md += `| --- | --- | --- | --- | --- |\n`;
  for (const d of daily) {
    md += `| ${d.date} | ${d.clicks} | ${d.impressions} | ${fmtCtr(d.ctr)} | ${fmtPos(d.position)} |\n`;
  }

  return md;
}

(async () => {
  console.log(`Pulling GSC for ${SITE_URL}`);
  console.log(`  Engagement: ${ENGAGEMENT_START} → ${ENGAGEMENT_END}`);
  console.log(`  Baseline:   ${BASELINE_START} → ${BASELINE_END}\n`);

  const [engagement, baseline, daily] = await Promise.all([
    windowSummary('engagement', ENGAGEMENT_START, ENGAGEMENT_END),
    windowSummary('baseline',   BASELINE_START,   BASELINE_END),
    dailySeries(ENGAGEMENT_START, ENGAGEMENT_END),
  ]);

  const payload = {
    pulledAt: new Date().toISOString(),
    site: SITE_URL,
    engagement,
    baseline,
    daily,
  };

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, `gsc-checkin-${TODAY}.json`);
  const mdPath   = path.join(OUT_DIR, `gsc-checkin-${TODAY}.md`);

  fs.writeFileSync(jsonPath, JSON.stringify(payload, null, 2));
  fs.writeFileSync(mdPath, buildMarkdown(payload));

  console.log('═'.repeat(60));
  console.log(`ENGAGEMENT (${ENGAGEMENT_START} → ${ENGAGEMENT_END}):`);
  console.log(`  Clicks:      ${engagement.totals.clicks}`);
  console.log(`  Impressions: ${engagement.totals.impressions}`);
  console.log(`  CTR:         ${fmtCtr(engagement.totals.ctr)}`);
  console.log(`  Avg pos:     ${fmtPos(engagement.totals.position)}`);
  console.log();
  console.log(`BASELINE (${BASELINE_START} → ${BASELINE_END}):`);
  console.log(`  Clicks:      ${baseline.totals.clicks}`);
  console.log(`  Impressions: ${baseline.totals.impressions}`);
  console.log(`  CTR:         ${fmtCtr(baseline.totals.ctr)}`);
  console.log(`  Avg pos:     ${fmtPos(baseline.totals.position)}`);
  console.log();
  console.log(`Δ Clicks:      ${pct(engagement.totals.clicks, baseline.totals.clicks)}`);
  console.log(`Δ Impressions: ${pct(engagement.totals.impressions, baseline.totals.impressions)}`);
  console.log('═'.repeat(60));
  console.log(`\nWritten:\n  ${jsonPath}\n  ${mdPath}`);
})().catch(err => {
  console.error('✗ Failed:', err.message);
  if (err.response?.data) console.error(JSON.stringify(err.response.data, null, 2));
  process.exit(1);
});
