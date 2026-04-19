/**
 * Preview the Monthly AEO Intelligence Report.
 *
 * Usage:
 *   node scripts/test-monthly-report.js                      # Borges, current month
 *   node scripts/test-monthly-report.js <site-url> <yyyy-mm> # Any site + any month
 *
 * Pulls real Search Console data, builds the report, creates a Gmail DRAFT
 * addressed to Justin (justin@theborgesrealestateteam.com) so the rendering
 * can be verified in Gmail before the cron fires for real clients.
 */
const fs = require('fs');
const { google } = require('googleapis');

const env = fs.readFileSync('.env.local', 'utf-8');
const get = (k) => (env.match(new RegExp('^' + k + '=(.+)$', 'm')) || [])[1]?.trim() || '';

const CLIENT_ID = get('GMAIL_CLIENT_ID');
const CLIENT_SECRET = get('GMAIL_CLIENT_SECRET');
const GSC_TOKEN = get('GSC_REFRESH_TOKEN');
const GMAIL_TOKEN = get('GMAIL_REFRESH_TOKEN');

if (!CLIENT_ID || !CLIENT_SECRET || !GSC_TOKEN || !GMAIL_TOKEN) {
  console.error('✗ Missing env vars. Need GMAIL_CLIENT_ID/SECRET, GSC_REFRESH_TOKEN, GMAIL_REFRESH_TOKEN');
  process.exit(1);
}

// --- defaults ---
const args = process.argv.slice(2);
const siteUrl = args[0] || 'sc-domain:theborgesrealestateteam.com';
const now = new Date();
const defaultMonth = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}`;
const yyyyMm = args[1] || defaultMonth;
const displayName = siteUrl.includes('borges') ? 'The Borges Real Estate Team'
  : siteUrl.includes('lamet') ? 'LA Metro Home Finder'
  : siteUrl.includes('lovery') ? 'Lovery Real Estate'
  : siteUrl.includes('rpmsouthland') ? 'RPM Southland'
  : siteUrl.includes('davis') ? 'Davis Agency'
  : siteUrl.includes('clearclose') ? 'ClearClose Builder Services'
  : siteUrl.includes('theanswerengine') ? 'The Answer Engine'
  : siteUrl;

// --- GSC clients ---
const gscAuth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
gscAuth.setCredentials({ refresh_token: GSC_TOKEN });
const gsc = google.searchconsole({ version: 'v1', auth: gscAuth });

const gmailAuth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
gmailAuth.setCredentials({ refresh_token: GMAIL_TOKEN });
const gmail = google.gmail({ version: 'v1', auth: gmailAuth });

// --- date helpers ---
function monthBounds(ym) {
  const [y, m] = ym.split('-').map(Number);
  const start = new Date(Date.UTC(y, m - 1, 1));
  const lastDay = new Date(Date.UTC(y, m, 0));
  const threeDaysAgo = new Date(Date.now() - 3 * 86400 * 1000);
  const end = lastDay < threeDaysAgo ? lastDay : threeDaysAgo;
  const fmt = d => d.toISOString().slice(0, 10);
  return { start: fmt(start), end: fmt(end), label: start.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }) };
}
function priorMonthBounds(ym) {
  const [y, m] = ym.split('-').map(Number);
  const py = m === 1 ? y - 1 : y;
  const pm = m === 1 ? 12 : m - 1;
  const start = new Date(Date.UTC(py, pm - 1, 1));
  const end = new Date(Date.UTC(py, pm, 0));
  const fmt = d => d.toISOString().slice(0, 10);
  return { start: fmt(start), end: fmt(end) };
}

async function queryGsc(siteUrl, startDate, endDate, dimension, rowLimit) {
  const res = await gsc.searchanalytics.query({
    siteUrl,
    requestBody: { startDate, endDate, dimensions: [dimension], rowLimit },
  });
  return (res.data.rows || []).map(r => ({
    key: (r.keys && r.keys[0]) || '',
    clicks: r.clicks || 0,
    impressions: r.impressions || 0,
    ctr: r.ctr || 0,
    position: r.position || 0,
  }));
}

// --- rendering (mirrors lib/gsc-monthly-report.ts) ---
const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
const SANS = `'Inter','Helvetica Neue',Arial,sans-serif`;
const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;
const BRAND = '#FF6A00';
const BG = '#ffffff';
const LOGO = 'https://www.theanswerengine.ai/The_Answer_Engine_Solo_Logo_Transparent.png';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fi = n => n.toLocaleString('en-US');
const pctDelta = (cur, prev) => prev === 0 ? (cur > 0 ? 100 : 0) : Math.round(((cur - prev) / prev) * 100);
const badge = pct => {
  const sign = pct > 0 ? '+' : '';
  const color = pct > 0 ? '#0d8a3e' : pct < 0 ? '#BF172E' : '#888';
  const arrow = pct > 0 ? '&uarr;' : pct < 0 ? '&darr;' : '';
  return `<span style="color:${color};font-weight:700;font-family:${MONO};font-size:11px;letter-spacing:0.04em;">${arrow} ${sign}${pct}%</span>`;
};

function renderInner(r) {
  const qRows = r.topQueries.map((q, i) => `
    <tr>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-family:${MONO};font-size:12px;color:#999;">${(i+1).toString().padStart(2,'0')}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#1a1a1a;">${esc(q.key)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${fi(q.impressions)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${fi(q.clicks)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${q.position.toFixed(1)}</td>
    </tr>`).join('');

  const pRows = r.topPages.map((p, i) => {
    const short = p.key.replace(/^https?:\/\/[^/]+/, '').slice(0, 48) || '/';
    return `
    <tr>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-family:${MONO};font-size:12px;color:#999;">${(i+1).toString().padStart(2,'0')}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#1a1a1a;font-family:${MONO};">${esc(short)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${fi(p.impressions)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${fi(p.clicks)}</td>
    </tr>`;
  }).join('');

  const oRows = r.opps.length > 0
    ? r.opps.map((q, i) => `
    <tr>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-family:${MONO};font-size:12px;color:${BRAND};font-weight:700;">${(i+1).toString().padStart(2,'0')}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#1a1a1a;">${esc(q.key)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;text-align:right;">${fi(q.impressions)}</td>
      <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#BF172E;font-weight:700;text-align:right;">${q.position.toFixed(1)}</td>
    </tr>`).join('')
    : `<tr><td colspan="4" style="padding:12px;color:#888;font-size:13px;font-style:italic;">No page-2 queries this month. Focus on expanding impressions.</td></tr>`;

  return `
<h2 style="margin:0 0 4px 0;font-size:24px;line-height:1.1;color:#1a1a1a;font-family:${DISPLAY};font-weight:900;letter-spacing:-0.025em;text-transform:uppercase;">Monthly AEO Report</h2>
<p style="margin:0 0 22px 0;color:#555;font-size:14px;">${esc(r.displayName)} &mdash; ${esc(r.monthLabel)}</p>

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 16px 0;">
  <tr>
    <td style="padding:16px;background:#fafafa;border-left:3px solid ${BRAND};width:50%;" valign="top">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">Impressions</div>
      <div style="font-family:${DISPLAY};font-size:28px;font-weight:900;color:#1a1a1a;letter-spacing:-0.02em;line-height:1;">${fi(r.impressions)}</div>
      <div style="margin-top:4px;">${badge(r.dImpr)} <span style="color:#888;font-size:11px;">vs prior month</span></div>
    </td>
    <td style="width:12px;"></td>
    <td style="padding:16px;background:#fafafa;border-left:3px solid ${BRAND};width:50%;" valign="top">
      <div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">Clicks</div>
      <div style="font-family:${DISPLAY};font-size:28px;font-weight:900;color:#1a1a1a;letter-spacing:-0.02em;line-height:1;">${fi(r.clicks)}</div>
      <div style="margin-top:4px;">${badge(r.dClicks)} <span style="color:#888;font-size:11px;">vs prior month</span></div>
    </td>
  </tr>
</table>

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 28px 0;">
  <tr>
    <td style="padding:12px 14px;background:#fafafa;width:50%;" valign="top">
      <span style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;">Avg CTR</span>
      <div style="font-family:${DISPLAY};font-size:18px;font-weight:800;color:#1a1a1a;margin-top:2px;">${(r.avgCtr*100).toFixed(1)}%</div>
    </td>
    <td style="width:12px;"></td>
    <td style="padding:12px 14px;background:#fafafa;width:50%;" valign="top">
      <span style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;">Avg Position</span>
      <div style="font-family:${DISPLAY};font-size:18px;font-weight:800;color:#1a1a1a;margin-top:2px;">${r.avgPos.toFixed(1)}</div>
    </td>
  </tr>
</table>

<h3 style="margin:0 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;">Top 10 Queries</h3>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 28px 0;">
  <thead><tr>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">#</th>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Query</th>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Impr</th>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Clicks</th>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Pos</th>
  </tr></thead>
  <tbody>${qRows || '<tr><td colspan="5" style="padding:12px;color:#888;font-size:13px;font-style:italic;">No query data this month.</td></tr>'}</tbody>
</table>

<h3 style="margin:0 0 4px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;">Page-2 Opportunities</h3>
<p style="margin:0 0 10px 0;font-size:12px;color:#777;">Queries ranked 11-20. One article could push each to page 1.</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 28px 0;">
  <thead><tr>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">#</th>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Query</th>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Impr</th>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Pos</th>
  </tr></thead>
  <tbody>${oRows}</tbody>
</table>

<h3 style="margin:0 0 10px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;">Top 5 Pages</h3>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 28px 0;">
  <thead><tr>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">#</th>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Path</th>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Impr</th>
    <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Clicks</th>
  </tr></thead>
  <tbody>${pRows || '<tr><td colspan="4" style="padding:12px;color:#888;font-size:13px;font-style:italic;">No page data this month.</td></tr>'}</tbody>
</table>

<div style="background:#fafafa;border-left:4px solid ${BRAND};padding:18px 20px;margin:8px 0 20px 0;">
  <p style="margin:0 0 8px 0;font-family:${DISPLAY};font-size:15px;font-weight:800;color:#1a1a1a;">Want to capture those page-2 queries?</p>
  <p style="margin:0 0 12px 0;font-size:13px;color:#555;">Reply to this email and we'll queue the next content batch targeted at your top opportunities.</p>
  <a href="mailto:support@theanswerengine.ai?subject=Content%20Request%20-%20${encodeURIComponent(r.displayName)}" style="display:inline-block;background:${BRAND};color:#000;font-family:${DISPLAY};font-size:12px;font-weight:900;padding:12px 20px;text-decoration:none;letter-spacing:-0.01em;text-transform:uppercase;">Request Content Batch &rarr;</a>
</div>

<p style="margin:20px 0 0 0;font-size:11px;color:#aaa;">Report period: ${esc(r.start)} to ${esc(r.end)}. Data pulled live from Google Search Console.</p>`;
}

// --- shell (mirrors lib/gmail.ts htmlWrap 'light' theme) ---
function htmlShell(inner) {
  const SIG = `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin-top:36px;">
  <tr><td style="border-top:1px solid #e5e7eb;padding-top:20px;font-family:${SANS};font-size:13px;line-height:1.65;color:#555;">
    <span style="display:inline-block;font-family:${MONO};font-size:10px;letter-spacing:0.24em;text-transform:uppercase;color:${BRAND};margin-bottom:10px;">// Signed</span><br/>
    <strong style="color:#1a1a1a;font-family:${DISPLAY};font-weight:900;letter-spacing:-0.01em;text-transform:uppercase;font-size:15px;">Justin Borges</strong><br/>
    <span style="color:#777;">Founder, The Answer Engine</span><br/>
    <a href="tel:+12134442229" style="color:#555;text-decoration:none;">(213) 444-2229</a><br/>
    <a href="mailto:support@theanswerengine.ai" style="color:${BRAND};text-decoration:none;">support@theanswerengine.ai</a>
  </td></tr>
</table>`;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><meta name="color-scheme" content="light"/><title>Monthly AEO Report</title>
<style>body{margin:0!important;padding:0!important;width:100%!important}a{color:${BRAND}}@media screen and (max-width:620px){.ae-shell{width:100%!important}.ae-pad{padding-left:18px!important;padding-right:18px!important}.ae-wordmark{font-size:15px!important}}</style>
</head><body style="margin:0;padding:0;background:${BG};font-family:${SANS};">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${BG};border-collapse:collapse;"><tr><td align="center" style="padding:0;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="680" class="ae-shell" style="width:680px;max-width:680px;border-collapse:collapse;background:${BG};">
<tr><td style="background:${BG};border-bottom:1px solid #e5e7eb;padding:18px 28px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr><td valign="middle" style="padding-right:12px;"><img src="${LOGO}" alt="The Answer Engine" width="28" height="28" style="display:block;border:0;"/></td><td valign="middle" class="ae-wordmark" style="font-family:${DISPLAY};font-weight:900;font-size:19px;letter-spacing:-0.035em;color:${BRAND};text-transform:uppercase;line-height:1;">THE ANSWER ENGINE</td></tr></table></td></tr>
<tr><td class="ae-pad" style="background:${BG};padding:34px 28px 30px 28px;font-family:${SANS};font-size:15px;line-height:1.62;color:#1a1a1a;">
<div style="margin-bottom:22px;"><span style="display:inline-block;background:${BRAND};color:#000;padding:5px 10px;font-family:${MONO};font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">Monthly Report</span></div>
${inner}
${SIG}
</td></tr>
<tr><td style="background:${BG};border-top:1px solid #e5e7eb;padding:16px 28px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;"><tr>
<td align="left" style="font-family:${MONO};font-size:10px;letter-spacing:0.18em;color:#888;text-transform:uppercase;">&copy; 2026 The Answer Engine&nbsp;&nbsp;//&nbsp;&nbsp;AEO</td>
<td align="right" style="font-family:${MONO};font-size:10px;letter-spacing:0.18em;color:#888;text-transform:uppercase;"><a href="https://theanswerengine.ai" style="color:#888;text-decoration:none;">theanswerengine.ai</a></td>
</tr></table></td></tr>
<tr><td align="right" style="background:${BG};padding:0;font-size:0;line-height:0;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr><td width="128" height="4" style="background:${BRAND};font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr>
</table>
</td></tr></table></body></html>`;
}

// --- main ---
(async () => {
  console.log(`\nPulling GSC data: ${siteUrl} for ${yyyyMm}...\n`);
  const cur = monthBounds(yyyyMm);
  const prev = priorMonthBounds(yyyyMm);
  console.log(`  Current: ${cur.start} to ${cur.end}`);
  console.log(`  Prior:   ${prev.start} to ${prev.end}\n`);

  const [curQueries, curPages, prevQueries] = await Promise.all([
    queryGsc(siteUrl, cur.start, cur.end, 'query', 50),
    queryGsc(siteUrl, cur.start, cur.end, 'page', 20),
    queryGsc(siteUrl, prev.start, prev.end, 'query', 50),
  ]);

  const curTot = curQueries.reduce((a, r) => ({ impr: a.impr + r.impressions, clicks: a.clicks + r.clicks }), { impr: 0, clicks: 0 });
  const prevTot = prevQueries.reduce((a, r) => ({ impr: a.impr + r.impressions, clicks: a.clicks + r.clicks }), { impr: 0, clicks: 0 });

  const avgCtr = curTot.impr > 0 ? curTot.clicks / curTot.impr : 0;
  const avgPos = curTot.impr > 0 ? curQueries.reduce((s, r) => s + r.position * r.impressions, 0) / curTot.impr : 0;

  const opps = curQueries
    .filter(q => q.position > 10 && q.position <= 20 && q.impressions >= 10)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 10);

  const r = {
    displayName,
    monthLabel: cur.label,
    start: cur.start,
    end: cur.end,
    impressions: curTot.impr,
    clicks: curTot.clicks,
    avgCtr,
    avgPos,
    dImpr: pctDelta(curTot.impr, prevTot.impr),
    dClicks: pctDelta(curTot.clicks, prevTot.clicks),
    topQueries: curQueries.slice(0, 10),
    topPages: curPages.slice(0, 5),
    opps,
  };

  console.log(`  Impressions: ${fi(r.impressions)} (${r.dImpr>0?'+':''}${r.dImpr}%)`);
  console.log(`  Clicks:      ${fi(r.clicks)} (${r.dClicks>0?'+':''}${r.dClicks}%)`);
  console.log(`  Avg pos:     ${r.avgPos.toFixed(1)}`);
  console.log(`  Page-2 opps: ${r.opps.length}\n`);

  const htmlBody = htmlShell(renderInner(r));
  const plainBody = `${r.monthLabel} AEO Report — ${r.displayName}\nImpressions: ${fi(r.impressions)} (${r.dImpr>0?'+':''}${r.dImpr}%)\nClicks: ${fi(r.clicks)} (${r.dClicks>0?'+':''}${r.dClicks}%)\nSee HTML for full report.`;

  const subject = `[Preview] ${r.monthLabel} AEO Report — ${r.displayName}`;
  const to = 'justin@theborgesrealestateteam.com';
  const from = get('GMAIL_SEND_AS') || 'support@theanswerengine.ai';

  const boundary = `b_${Date.now()}`;
  const raw = Buffer.from([
    `From: ${from}`, `To: ${to}`, `Subject: ${subject}`,
    'MIME-Version: 1.0', `Content-Type: multipart/alternative; boundary="${boundary}"`, '',
    `--${boundary}`, 'Content-Type: text/plain; charset=utf-8', '', plainBody, '',
    `--${boundary}`, 'Content-Type: text/html; charset=utf-8', '', htmlBody, '',
    `--${boundary}--`,
  ].join('\r\n')).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  const res = await gmail.users.drafts.create({ userId: 'me', requestBody: { message: { raw } } });
  console.log(`✓ Draft created: ${res.data.id}`);
  console.log(`  Subject: ${subject}\n`);
  console.log('Open Gmail → Drafts to preview the rendered report.');
})().catch(err => {
  console.error('✗ Failed:', err.message);
  if (err.response?.data) console.error(JSON.stringify(err.response.data, null, 2));
  process.exit(1);
});
