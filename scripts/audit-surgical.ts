/**
 * Surgical Optimizations audit: CTR outliers + keyword cannibalization.
 *
 * For one or all clients, runs both detectors and creates a single Gmail
 * DRAFT addressed to Justin combining both findings. Never auto-sent.
 *
 * Usage:
 *   npx tsx scripts/audit-surgical.ts                # every client
 *   npx tsx scripts/audit-surgical.ts <slug>         # one client
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { google } from 'googleapis';
import { findCtrOutliersForSite, renderOutliersInner } from '../lib/gsc-ctr-outliers';
import { findCannibalizationForSite, renderCannibalizationInner } from '../lib/gsc-cannibalization';

function loadEnv() {
  try {
    const txt = readFileSync(join(process.cwd(), '.env.local'), 'utf-8');
    for (const line of txt.split('\n')) {
      const t = line.trim();
      if (!t || t.startsWith('#')) continue;
      const eq = t.indexOf('=');
      if (eq === -1) continue;
      const k = t.slice(0, eq).trim();
      const v = t.slice(eq + 1).trim();
      if (!process.env[k]) process.env[k] = v;
    }
  } catch { /* noop */ }
}
loadEnv();

const CLIENT_ID = process.env.GMAIL_CLIENT_ID || '';
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET || '';
const GMAIL_TOKEN = process.env.GMAIL_REFRESH_TOKEN || '';
const GMAIL_SEND_AS = process.env.GMAIL_SEND_AS || 'support@theanswerengine.ai';

function loadMap(): Record<string, string> {
  const raw = JSON.parse(readFileSync(join(process.cwd(), 'data', 'gsc-client-map.json'), 'utf-8')) as Record<string, string>;
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) if (!k.startsWith('_') && v && v !== 'CONFIGURE_ME') out[k] = v;
  return out;
}

interface ClientProfileJson {
  business?: { legal_name?: string; dba?: string };
}
function loadProfile(slug: string): ClientProfileJson | null {
  try {
    return JSON.parse(readFileSync(join(process.cwd(), 'data', 'client-profiles', `${slug}.json`), 'utf-8')) as ClientProfileJson;
  } catch { return null; }
}

const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
const SANS = `'Inter','Helvetica Neue',Arial,sans-serif`;
const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;
const BRAND = '#FF6A00';
const BG = '#ffffff';
const LOGO = 'https://www.theanswerengine.ai/The_Answer_Engine_Solo_Logo_Transparent.png';

function htmlShell(inner: string): string {
  const SIG = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin-top:28px;"><tr><td style="border-top:1px solid #e5e7eb;padding-top:16px;font-family:${SANS};font-size:13px;color:#555;"><b style="color:#1a1a1a;">Justin Borges</b> · Founder, The Answer Engine · support@theanswerengine.ai</td></tr></table>`;

  return `<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>Surgical Audit</title><style>body{margin:0;padding:0;background:${BG};font-family:${SANS};}a{color:${BRAND}}</style></head><body style="margin:0;padding:0;background:${BG};">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:${BG};"><tr><td align="center">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="720" style="width:720px;max-width:720px;border-collapse:collapse;background:${BG};">
<tr><td style="background:${BG};border-bottom:1px solid #e5e7eb;padding:16px 24px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td valign="middle" style="padding-right:10px;"><img src="${LOGO}" alt="TAE" width="24" height="24" style="display:block;border:0;"/></td><td valign="middle" style="font-family:${DISPLAY};font-weight:900;font-size:17px;letter-spacing:-0.03em;color:${BRAND};text-transform:uppercase;">THE ANSWER ENGINE</td></tr></table></td></tr>
<tr><td style="padding:28px 24px;font-family:${SANS};color:#1a1a1a;">
<div style="margin-bottom:18px;"><span style="display:inline-block;background:${BRAND};color:#000;padding:4px 10px;font-family:${MONO};font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;">Internal Audit</span></div>
${inner}
${SIG}
</td></tr>
<tr><td align="right" style="padding:0;"><table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td width="120" height="4" style="background:${BRAND};font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr>
</table></td></tr></table></body></html>`;
}

function encodeRaw(from: string, to: string, subject: string, plain: string, html: string): string {
  const boundary = `b_${Date.now()}`;
  const lines = [
    `From: ${from}`, `To: ${to}`, `Subject: ${subject}`,
    'MIME-Version: 1.0', `Content-Type: multipart/alternative; boundary="${boundary}"`, '',
    `--${boundary}`, 'Content-Type: text/plain; charset=utf-8', '', plain, '',
    `--${boundary}`, 'Content-Type: text/html; charset=utf-8', '', html, '',
    `--${boundary}--`,
  ];
  return Buffer.from(lines.join('\r\n')).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function main() {
  const arg = process.argv[2];
  const map = loadMap();
  const slugToSite: Record<string, string> = {};
  for (const [site, slug] of Object.entries(map)) slugToSite[slug] = site;

  const slugs = arg ? [arg] : Object.keys(slugToSite);

  const gmailAuth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
  gmailAuth.setCredentials({ refresh_token: GMAIL_TOKEN });
  const gmail = google.gmail({ version: 'v1', auth: gmailAuth });

  for (const slug of slugs) {
    const siteUrl = slugToSite[slug];
    if (!siteUrl) continue;
    const profile = loadProfile(slug);
    const displayName = profile?.business?.dba || profile?.business?.legal_name || slug;

    console.log(`\n=== ${displayName} (${slug}) ===`);
    console.log('  fetching CTR outliers...');
    let ctrSection = '';
    let ctrSummary = '';
    try {
      const { pageOutliers, queryOutliers } = await findCtrOutliersForSite({ siteUrl });
      ctrSection = renderOutliersInner(displayName, pageOutliers, queryOutliers);
      ctrSummary = `  CTR outliers: ${pageOutliers.length} pages / ${queryOutliers.length} queries`;
      console.log(ctrSummary);
    } catch (err) {
      ctrSection = `<p style="color:#BF172E;">CTR outliers failed: ${(err as Error).message}</p>`;
      console.log(`  CTR outliers ERROR: ${(err as Error).message}`);
    }

    console.log('  fetching cannibalization...');
    let cannSection = '';
    let cannSummary = '';
    try {
      const cases = await findCannibalizationForSite({ siteUrl });
      cannSection = renderCannibalizationInner(displayName, cases);
      cannSummary = `  Cannibalization: ${cases.length} queries (${cases.filter(c => c.severity === 'high').length} high severity)`;
      console.log(cannSummary);
    } catch (err) {
      cannSection = `<p style="color:#BF172E;">Cannibalization failed: ${(err as Error).message}</p>`;
      console.log(`  Cannibalization ERROR: ${(err as Error).message}`);
    }

    const inner = `${ctrSection}<hr style="margin:28px 0;border:none;border-top:1px solid #e5e7eb;">${cannSection}`;
    const html = htmlShell(inner);
    const subject = `[Audit] Surgical Optimizations \u2014 ${displayName}`;
    const plain = `Surgical audit for ${displayName}\n\n${ctrSummary}\n${cannSummary}\n\nSee HTML for details.`;

    const raw = encodeRaw(GMAIL_SEND_AS, 'justin@theborgesrealestateteam.com', subject, plain, html);
    try {
      const res = await gmail.users.drafts.create({ userId: 'me', requestBody: { message: { raw } } });
      console.log(`  \u2713 draft: ${res.data.id}`);
    } catch (err) {
      console.log(`  \u2717 draft failed: ${(err as Error).message}`);
    }
  }
}

main().catch(err => { console.error('Fatal:', err instanceof Error ? err.message : err); process.exit(1); });
