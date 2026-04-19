/**
 * Top-Performer Conversion Audit CLI.
 *
 * For one or more clients, pull top pages from GSC (last 28d), fetch each page,
 * ask Claude Haiku to score CTA alignment vs stated goals + propose a rewrite
 * brief, and create a Gmail DRAFT addressed to Justin for review. Every
 * client-facing preview is gated by checkBrandSafety() before we even render
 * a "preview" body — LAMH is always surface-only.
 *
 * Usage:
 *   npx tsx scripts/audit-top-performers.ts                   # default: lovery-re
 *   npx tsx scripts/audit-top-performers.ts lovery-re         # by slug
 *   npx tsx scripts/audit-top-performers.ts borges-team       # by slug
 *   npx tsx scripts/audit-top-performers.ts all               # every slug in gsc-client-map.json
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { google } from 'googleapis';

import {
  buildTopPerformerAudit,
  renderJustinAuditInner,
  renderClientCuratedInner,
  checkBrandSafety,
  buildAuditSubject,
  type ClientProfileLite,
  type TopPerformerAudit,
} from '../lib/gsc-top-performer-audit';

// ---- env loading (no dotenv dep) ----
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
  } catch {
    /* .env.local not found — fall through, may already be exported */
  }
}
loadEnv();

const CLIENT_ID = process.env.GMAIL_CLIENT_ID || '';
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET || '';
const GSC_TOKEN = process.env.GSC_REFRESH_TOKEN || '';
const GMAIL_TOKEN = process.env.GMAIL_REFRESH_TOKEN || '';
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || '';
const GMAIL_SEND_AS = process.env.GMAIL_SEND_AS || 'support@theanswerengine.ai';

function requireEnv() {
  const missing: string[] = [];
  if (!CLIENT_ID) missing.push('GMAIL_CLIENT_ID');
  if (!CLIENT_SECRET) missing.push('GMAIL_CLIENT_SECRET');
  if (!GSC_TOKEN) missing.push('GSC_REFRESH_TOKEN');
  if (!GMAIL_TOKEN) missing.push('GMAIL_REFRESH_TOKEN');
  if (!ANTHROPIC_KEY) missing.push('ANTHROPIC_API_KEY');
  if (missing.length > 0) {
    console.error('\u2717 Missing env vars: ' + missing.join(', '));
    process.exit(1);
  }
}
requireEnv();

// ---- profile loader ----
interface ClientProfileJson {
  _meta?: { client_slug?: string };
  business?: { legal_name?: string; dba?: string; website?: string };
  contact?: {
    website_url?: string;
    primary_contact_email?: string;
    email?: string;
  };
  engagement?: {
    contact_email?: string;
    primary_contact_email?: string;
    contact_name?: string;
    primary_contact_name?: string;
  };
  services?: Array<string | { name: string; description?: string; is_primary?: boolean }>;
  brand?: { brand_voice_notes?: string };
  goals?: {
    primary_outcome?: string;
    secondary_outcomes?: string[];
    target_audience?: string;
    conversion_definition?: string;
    notes?: string;
  };
}

function loadProfile(slug: string): ClientProfileJson {
  const path = join(process.cwd(), 'data', 'client-profiles', `${slug}.json`);
  return JSON.parse(readFileSync(path, 'utf-8')) as ClientProfileJson;
}

function loadGscMap(): Record<string, string> {
  const path = join(process.cwd(), 'data', 'gsc-client-map.json');
  const raw = JSON.parse(readFileSync(path, 'utf-8')) as Record<string, string>;
  const clean: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) {
    if (!k.startsWith('_') && v && v !== 'CONFIGURE_ME') clean[k] = v;
  }
  return clean;
}

function firstName(fullName: string | undefined): string {
  if (!fullName) return 'there';
  const clean = fullName.trim().split(/\s+/)[0] || 'there';
  return clean;
}

function clientProfileLiteFromSlug(slug: string, siteUrl: string): ClientProfileLite {
  const p = loadProfile(slug);
  const displayName = p.business?.dba || p.business?.legal_name || slug;
  const websiteUrl = p.contact?.website_url || p.business?.website || '';
  const goals = p.goals || {};

  if (!goals.primary_outcome) {
    throw new Error(`client ${slug} has no goals.primary_outcome — Interpretation Layer requires it`);
  }

  return {
    slug,
    displayName,
    siteUrl,
    websiteUrl,
    contactEmail:
      p.engagement?.primary_contact_email ||
      p.engagement?.contact_email ||
      p.contact?.primary_contact_email ||
      p.contact?.email ||
      '',
    goals: {
      primary_outcome: goals.primary_outcome,
      secondary_outcomes: goals.secondary_outcomes,
      target_audience: goals.target_audience,
      conversion_definition: goals.conversion_definition,
      notes: goals.notes,
    },
    services: p.services,
    brandVoiceNotes: p.brand?.brand_voice_notes || '',
    isLamh: slug === 'lamh',
  };
}

// ---- Gmail draft helpers ----
const gmailAuth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
gmailAuth.setCredentials({ refresh_token: GMAIL_TOKEN });
const gmail = google.gmail({ version: 'v1', auth: gmailAuth });

function htmlShell(innerBodyHtml: string, tagLabel: string): string {
  // Mirrors lib/gmail.ts htmlWrap light theme (reused styles)
  const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
  const SANS = `'Inter','Helvetica Neue',Arial,sans-serif`;
  const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;
  const BRAND = '#FF6A00';
  const BG = '#ffffff';
  const LOGO = 'https://www.theanswerengine.ai/The_Answer_Engine_Solo_Logo_Transparent.png';

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
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><meta name="color-scheme" content="light"/><title>Top-Performer Conversion Audit</title>
<style>body{margin:0!important;padding:0!important;width:100%!important}a{color:${BRAND}}@media screen and (max-width:720px){.ae-shell{width:100%!important}.ae-pad{padding-left:18px!important;padding-right:18px!important}.ae-wordmark{font-size:15px!important}}</style>
</head><body style="margin:0;padding:0;background:${BG};font-family:${SANS};">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${BG};border-collapse:collapse;"><tr><td align="center" style="padding:0;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="720" class="ae-shell" style="width:720px;max-width:720px;border-collapse:collapse;background:${BG};">
<tr><td style="background:${BG};border-bottom:1px solid #e5e7eb;padding:18px 28px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr><td valign="middle" style="padding-right:12px;"><img src="${LOGO}" alt="The Answer Engine" width="28" height="28" style="display:block;border:0;"/></td><td valign="middle" class="ae-wordmark" style="font-family:${DISPLAY};font-weight:900;font-size:19px;letter-spacing:-0.035em;color:${BRAND};text-transform:uppercase;line-height:1;">THE ANSWER ENGINE</td></tr></table></td></tr>
<tr><td class="ae-pad" style="background:${BG};padding:34px 28px 30px 28px;font-family:${SANS};font-size:15px;line-height:1.62;color:#1a1a1a;">
<div style="margin-bottom:22px;"><span style="display:inline-block;background:${BRAND};color:#000;padding:5px 10px;font-family:${MONO};font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">${tagLabel}</span></div>
${innerBodyHtml}
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

function buildPlainSummary(audit: TopPerformerAudit): string {
  const lines: string[] = [];
  lines.push(`Top-Performer Conversion Audit — ${audit.displayName}`);
  lines.push(`Window: ${audit.periodStart} to ${audit.periodEnd}`);
  lines.push(`Goal: ${audit.goals.primary_outcome}`);
  if (audit.goals.conversion_definition) lines.push(`Conversion: ${audit.goals.conversion_definition}`);
  lines.push('');
  lines.push(`Top ${audit.pages.length} pages — ${audit.totalClicksTop10.toLocaleString()} clicks, ${audit.totalImpressionsTop10.toLocaleString()} impressions`);
  lines.push('');
  for (const [i, p] of audit.pages.entries()) {
    const score = p.brief ? `${p.brief.alignmentScore}/3` : audit.isLamh ? 'surface-only' : 'no brief';
    lines.push(`${(i + 1).toString().padStart(2, '0')}. ${p.path} — ${p.clicks} clicks, pos ${p.position.toFixed(1)} [${score}]`);
    if (p.brief) {
      lines.push(`    ${p.brief.alignmentRationale}`);
      if (p.brief.recommendedH1) lines.push(`    Rec H1: ${p.brief.recommendedH1}`);
      if (p.brief.recommendedPrimaryCta) lines.push(`    Rec CTA: "${p.brief.recommendedPrimaryCta.text}" -> ${p.brief.recommendedPrimaryCta.intent}`);
    }
  }
  lines.push('');
  lines.push('Next actions:');
  audit.topNextActions.forEach((a, i) => lines.push(`  ${i + 1}. ${a}`));
  if (audit.conversationFlag) {
    lines.push('');
    lines.push(`CONVERSATION FLAG: ${audit.conversationFlag}`);
  }
  return lines.join('\n');
}

function encodeRaw(from: string, to: string, subject: string, plain: string, html: string): string {
  const boundary = `b_${Date.now()}`;
  const lines = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset=utf-8',
    '',
    plain,
    '',
    `--${boundary}`,
    'Content-Type: text/html; charset=utf-8',
    '',
    html,
    '',
    `--${boundary}--`,
  ];
  return Buffer.from(lines.join('\r\n'))
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

async function createDraft(opts: { to: string; subject: string; plain: string; html: string }): Promise<string> {
  const raw = encodeRaw(GMAIL_SEND_AS, opts.to, opts.subject, opts.plain, opts.html);
  const res = await gmail.users.drafts.create({ userId: 'me', requestBody: { message: { raw } } });
  return res.data.id || '';
}

// ---- main ----
async function runForSlug(slug: string, siteUrl: string) {
  const client = clientProfileLiteFromSlug(slug, siteUrl);
  console.log(`\n=== ${client.displayName} (${slug}) ===`);
  console.log(`Site: ${siteUrl}`);
  console.log(`Goal: ${client.goals.primary_outcome}`);
  if (client.isLamh) console.log('LAMH Safety Protocol: surface-only, no LLM briefs.');

  const audit = await buildTopPerformerAudit({
    client,
    anthropicApiKey: ANTHROPIC_KEY,
    anthropicModel: 'claude-haiku-4-5-20251001',
    topN: 10,
    onProgress: msg => console.log('  ' + msg),
  });

  // Justin-facing draft (always created — raw truth, Brand Safety skipped per backlog rule)
  const justinHtmlInner = renderJustinAuditInner(audit);
  const justinHtml = htmlShell(justinHtmlInner, 'Internal Audit');
  const justinPlain = buildPlainSummary(audit);
  const justinSubject = `[Preview] ${buildAuditSubject(audit.displayName)}`;

  const justinDraftId = await createDraft({
    to: 'justin@theborgesrealestateteam.com',
    subject: justinSubject,
    plain: justinPlain,
    html: justinHtml,
  });
  console.log(`  \u2713 Justin draft: ${justinDraftId}`);
  console.log(`    Subject: ${justinSubject}`);
  console.log('\n----- AUDIT SUMMARY -----');
  console.log(justinPlain);
  console.log('----- END SUMMARY -----\n');

  // Client-facing curated PREVIEW (also addressed to Justin for review — never client direct)
  if (!audit.isLamh) {
    const curatedInner = renderClientCuratedInner(audit, firstName(client.contactEmail?.split('@')[0]));
    const verdict = checkBrandSafety(curatedInner, audit);

    if (verdict.pass) {
      const curatedHtml = htmlShell(curatedInner, 'Client Preview');
      const curatedPlain = `[CLIENT PREVIEW — DO NOT SEND DIRECTLY]\n\nClient email: ${client.contactEmail || 'n/a'}\n\n` + buildPlainSummary(audit);
      const curatedSubject = `[Client Preview] ${buildAuditSubject(audit.displayName)} \u2014 Brand Safety OK`;
      const curatedDraftId = await createDraft({
        to: 'justin@theborgesrealestateteam.com',
        subject: curatedSubject,
        plain: curatedPlain,
        html: curatedHtml,
      });
      console.log(`  \u2713 Client preview draft: ${curatedDraftId}`);
      console.log(`    Subject: ${curatedSubject}`);
    } else {
      console.log(`  \u2717 Client preview BLOCKED by Brand Safety:`);
      for (const r of verdict.reasons) console.log(`    - ${r}`);
      console.log(`    (Justin-facing draft still created above.)`);
    }
  }

  console.log('');
  return audit;
}

async function main() {
  const arg = process.argv[2] || 'lovery-re';
  const map = loadGscMap();

  // Invert map: slug -> siteUrl
  const slugToSite: Record<string, string> = {};
  for (const [site, slug] of Object.entries(map)) slugToSite[slug] = site;

  if (arg === 'all') {
    for (const [slug, site] of Object.entries(slugToSite)) {
      try {
        await runForSlug(slug, site);
      } catch (err) {
        console.error(`  \u2717 ${slug} failed: ${(err as Error).message}`);
      }
    }
  } else {
    const site = slugToSite[arg];
    if (!site) {
      console.error(`\u2717 Unknown slug "${arg}". Valid: ${Object.keys(slugToSite).join(', ')}`);
      process.exit(1);
    }
    await runForSlug(arg, site);
  }
}

main().catch(err => {
  console.error('\nFatal:', err instanceof Error ? err.message : err);
  if (err instanceof Error && err.stack) console.error(err.stack);
  process.exit(1);
});
