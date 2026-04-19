/**
 * Geographic expansion audit CLI.
 *
 * For each client, detects queries mentioning cities NOT in their
 * profile.service_area.cities. Surfaces as a territory-expansion signal.
 *
 * Usage:
 *   npx tsx scripts/audit-geo-expansion.ts             # every client
 *   npx tsx scripts/audit-geo-expansion.ts <slug>      # one client
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { google } from 'googleapis';
import { findGeoExpansionForClient, renderGeoInner } from '../lib/gsc-geographic-expansion';

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
  service_area?: { cities?: string[] };
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
  const SIG = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin-top:28px;"><tr><td style="border-top:1px solid #e5e7eb;padding-top:16px;font-family:${SANS};font-size:13px;color:#555;"><b style="color:#1a1a1a;">Justin Borges</b> · Founder, The Answer Engine</td></tr></table>`;
  return `<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Geo Expansion</title></head><body style="margin:0;padding:0;background:${BG};font-family:${SANS};"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center"><table role="presentation" width="720" cellpadding="0" cellspacing="0" border="0" style="width:720px;max-width:720px;background:${BG};"><tr><td style="border-bottom:1px solid #e5e7eb;padding:16px 24px;"><img src="${LOGO}" alt="TAE" width="24" height="24" style="vertical-align:middle;"/> <span style="font-family:${DISPLAY};font-weight:900;font-size:17px;color:${BRAND};text-transform:uppercase;vertical-align:middle;margin-left:8px;">THE ANSWER ENGINE</span></td></tr><tr><td style="padding:28px 24px;"><div style="margin-bottom:18px;"><span style="display:inline-block;background:${BRAND};color:#000;padding:4px 10px;font-family:${MONO};font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;">Upsell Signal</span></div>${inner}${SIG}</td></tr></table></td></tr></table></body></html>`;
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
    const servedCities = profile?.service_area?.cities || [];

    console.log(`\n=== ${displayName} (${slug}) ===`);
    console.log(`  servedCities: ${servedCities.length} (${servedCities.slice(0, 5).join(', ')}${servedCities.length > 5 ? '...' : ''})`);

    try {
      const r = await findGeoExpansionForClient({ slug, displayName, siteUrl, servedCities });
      console.log(`  Unserved cities with demand: ${r.cityTotals.length}`);
      for (const c of r.cityTotals.slice(0, 5)) {
        console.log(`    ${c.city}: ${c.impressions} impr across ${c.queryCount} queries`);
      }

      if (r.cityTotals.length === 0) {
        console.log('  (skipping draft — no unserved cities)');
        continue;
      }

      const inner = renderGeoInner(r);
      const html = htmlShell(inner);
      const subject = `[Upsell] Geographic Expansion — ${displayName}`;
      const plain = `Unserved cities with search demand for ${displayName}:\n\n` +
        r.cityTotals.slice(0, 5).map(c => `  ${c.city}: ${c.impressions} impressions`).join('\n');
      const raw = encodeRaw(GMAIL_SEND_AS, 'justin@theborgesrealestateteam.com', subject, plain, html);
      const res = await gmail.users.drafts.create({ userId: 'me', requestBody: { message: { raw } } });
      console.log(`  ✓ draft: ${res.data.id}`);
    } catch (err) {
      console.log(`  ✗ ERROR: ${(err as Error).message}`);
    }
  }
}

main().catch(err => { console.error('Fatal:', err instanceof Error ? err.message : err); process.exit(1); });
