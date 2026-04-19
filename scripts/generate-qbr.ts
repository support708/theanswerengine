/**
 * Generate a Quarterly Business Review deck per client.
 *
 * Writes the standalone HTML to data/qbr/{slug}-{date}.html locally AND
 * creates a Gmail DRAFT addressed to Justin with the report inline.
 * Never auto-sent.
 *
 * Usage:
 *   npx tsx scripts/generate-qbr.ts all                  # every client
 *   npx tsx scripts/generate-qbr.ts <slug>               # one client
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { google } from 'googleapis';
import { buildQbr, renderQbrStandaloneHtml, renderQbrInner, checkBrandSafety } from '../lib/gsc-qbr';
import { htmlWrap } from '../lib/gmail';
import type { BaselineSnapshot } from '../lib/gsc-onboarding-baseline';

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

const BASELINES_PATH = join(process.cwd(), 'data', 'gsc-baselines.json');
const QBR_DIR = join(process.cwd(), 'data', 'qbr');

interface BaselinesFile {
  version: 1;
  byClient: Record<string, { baseline: BaselineSnapshot; additional_snapshots: BaselineSnapshot[] }>;
}

function loadBaselines(): BaselinesFile | null {
  try {
    return JSON.parse(readFileSync(BASELINES_PATH, 'utf-8')) as BaselinesFile;
  } catch { return null; }
}

function loadMap(): Record<string, string> {
  const raw = JSON.parse(readFileSync(join(process.cwd(), 'data', 'gsc-client-map.json'), 'utf-8')) as Record<string, string>;
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) if (!k.startsWith('_') && v && v !== 'CONFIGURE_ME') out[k] = v;
  return out;
}

interface ClientProfileJson {
  business?: { legal_name?: string; dba?: string };
  author?: { first_name?: string; full_name?: string };
  engagement?: { contact_name?: string; primary_contact_name?: string };
  goals?: { primary_outcome?: string; conversion_definition?: string };
}
function loadProfile(slug: string): ClientProfileJson | null {
  try {
    return JSON.parse(readFileSync(join(process.cwd(), 'data', 'client-profiles', `${slug}.json`), 'utf-8')) as ClientProfileJson;
  } catch { return null; }
}

function firstName(p: ClientProfileJson | null): string {
  return (
    p?.author?.first_name ||
    (p?.author?.full_name || '').trim().split(/\s+/)[0] ||
    (p?.engagement?.contact_name || p?.engagement?.primary_contact_name || '').trim().split(/\s+/)[0] ||
    'there'
  );
}

function encodeRaw(from: string, to: string, subject: string, plain: string, html: string): string {
  const boundary = `b_${Date.now()}`;
  const lines = [
    `From: ${from}`, `To: ${to}`, `Subject: ${subject}`, 'MIME-Version: 1.0',
    `Content-Type: multipart/alternative; boundary="${boundary}"`, '',
    `--${boundary}`, 'Content-Type: text/plain; charset=utf-8', '', plain, '',
    `--${boundary}`, 'Content-Type: text/html; charset=utf-8', '', html, '',
    `--${boundary}--`,
  ];
  return Buffer.from(lines.join('\r\n')).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function main() {
  const arg = process.argv[2] || 'all';
  const map = loadMap();
  const slugToSite: Record<string, string> = {};
  for (const [site, slug] of Object.entries(map)) slugToSite[slug] = site;

  const baselines = loadBaselines();
  if (!existsSync(QBR_DIR)) mkdirSync(QBR_DIR, { recursive: true });

  const gmailAuth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
  gmailAuth.setCredentials({ refresh_token: GMAIL_TOKEN });
  const gmail = google.gmail({ version: 'v1', auth: gmailAuth });

  const slugs = arg === 'all' ? Object.keys(slugToSite) : [arg];

  for (const slug of slugs) {
    const siteUrl = slugToSite[slug];
    if (!siteUrl) {
      console.log(`[${slug}] no siteUrl mapped, skipping`);
      continue;
    }
    const profile = loadProfile(slug);
    const displayName = profile?.business?.dba || profile?.business?.legal_name || slug;
    const goal = profile?.goals?.primary_outcome;
    if (!goal) {
      console.log(`[${slug}] no goals.primary_outcome, skipping`);
      continue;
    }
    const baseline = baselines?.byClient[slug]?.baseline;

    console.log(`\n=== ${displayName} (${slug}) ===`);
    console.log(`  baseline: ${baseline ? baseline.capturedAt.slice(0, 10) : 'NONE'}`);

    try {
      const qbr = await buildQbr({
        slug,
        displayName,
        siteUrl,
        isLamh: slug === 'lamh',
        goalPrimaryOutcome: goal,
        goalConversionDefinition: profile?.goals?.conversion_definition,
        baseline,
      });

      const fname = firstName(profile);
      const standaloneHtml = renderQbrStandaloneHtml(qbr, fname);
      const emailInner = renderQbrInner(qbr, fname);
      const emailHtml = htmlWrap(emailInner, 'light');

      // Save standalone HTML locally
      const dateStr = qbr.generatedAt.slice(0, 10);
      const outPath = join(QBR_DIR, `${slug}-${dateStr}.html`);
      writeFileSync(outPath, standaloneHtml, 'utf-8');
      console.log(`  ✓ wrote ${outPath}`);

      if (qbr.delta) {
        console.log(`  Delta vs day-0 (${qbr.delta.daysSinceBaseline} days): impr ${qbr.delta.impressionsPct > 0 ? '+' : ''}${qbr.delta.impressionsPct}% · clicks ${qbr.delta.clicksPct > 0 ? '+' : ''}${qbr.delta.clicksPct}% · pos ${qbr.delta.positionDelta > 0 ? '+' : ''}${qbr.delta.positionDelta}`);
      }

      // Brand Safety gate for client-facing email
      const verdict = checkBrandSafety(emailInner, qbr);
      if (!verdict.pass) {
        console.log(`  ✗ Brand Safety blocks client draft:`);
        for (const r of verdict.reasons) console.log(`    - ${r}`);
        console.log('  (standalone HTML saved locally regardless)');
        continue;
      }

      const subject = `[Preview] Quarterly Business Review — ${displayName}`;
      const plain = `Quarterly Business Review for ${displayName}\nGenerated ${dateStr}\n\nSee HTML for full report. Standalone version saved at: ${outPath}`;
      const raw = encodeRaw(GMAIL_SEND_AS, 'justin@theborgesrealestateteam.com', subject, plain, emailHtml);
      const res = await gmail.users.drafts.create({ userId: 'me', requestBody: { message: { raw } } });
      console.log(`  ✓ draft: ${res.data.id}`);
    } catch (err) {
      console.log(`  ✗ ERROR: ${(err as Error).message}`);
    }
  }

  console.log(`\nAll QBRs in ${QBR_DIR}`);
}

main().catch(err => { console.error('Fatal:', err instanceof Error ? err.message : err); process.exit(1); });
