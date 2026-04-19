#!/usr/bin/env tsx
/**
 * Monday Brief batch smoke test — sequentially build the brief for every
 * client, with a 12-second pause between calls so we don't trip Anthropic
 * rate limits on the Haiku recommendations. No emails are drafted; pure
 * computation + fabrication scan verification.
 *
 * Reports per-client: Authority score + delta, fabrication scan result,
 * recommendation count, conversation flag. Exits non-zero if ANY client
 * brief fails to build or ANY brief shows an uncaught fabrication flag.
 *
 * Usage:  npx tsx scripts/test-monday-brief-all.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^"(.*)"$/, '$1');
  }
}
process.env.AUTO_SEND_ENABLED = 'false';

import { buildMondayBrief } from '../lib/monday-brief';
import { scanEmailForFabrication } from '../lib/fabrication-scan-email';

const RATE_LIMIT_SPACING_MS = 12000;

async function main() {
  const mapPath = path.join(process.cwd(), 'data', 'gsc-client-map.json');
  const map: Record<string, string> = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));
  const slugs = Array.from(new Set(
    Object.entries(map).filter(([k]) => !k.startsWith('_')).map(([, v]) => v).filter(v => v !== 'CONFIGURE_ME'),
  ));

  console.log(`=== Monday Brief Batch Smoke Test ===`);
  console.log(`Clients: ${slugs.length}`);
  console.log(`Rate-limit spacing: ${RATE_LIMIT_SPACING_MS}ms between clients`);
  console.log('');

  const results: { slug: string; status: 'ok' | 'fail'; score?: number; delta?: number | null; scanClean?: boolean; flagCount?: number; error?: string }[] = [];

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    process.stdout.write(`[${i + 1}/${slugs.length}] ${slug.padEnd(20)} ... `);
    try {
      const brief = await buildMondayBrief(slug);
      const scan = scanEmailForFabrication({
        subject: brief.subject,
        htmlBody: brief.htmlBody,
        textBody: brief.textBody,
        verifiedFacts: brief.verifiedFacts,
      });
      const delta = brief.snapshots.authority.deltaFromLast;
      console.log(`OK  AI=${brief.snapshots.authority.score}${delta !== null ? ` (${delta >= 0 ? '+' : ''}${delta})` : ' (baseline)'}  scan=${scan.clean ? 'CLEAN' : `${scan.flags.length} flag(s)`}  convFlag=${brief.conversationFlag.needed ? 'YES' : 'no'}`);
      results.push({ slug, status: 'ok', score: brief.snapshots.authority.score, delta, scanClean: scan.clean, flagCount: scan.flags.length });

      if (!scan.clean) {
        for (const f of scan.flags.slice(0, 5)) {
          console.log(`       ⚠️ [${f.pattern}] "${f.match}"`);
        }
      }
    } catch (err) {
      const msg = (err as Error).message?.slice(0, 200) || 'unknown';
      console.log(`FAIL  ${msg}`);
      results.push({ slug, status: 'fail', error: msg });
    }

    if (i < slugs.length - 1) {
      await new Promise(r => setTimeout(r, RATE_LIMIT_SPACING_MS));
    }
  }

  console.log(`\n${'═'.repeat(60)}`);
  const ok = results.filter(r => r.status === 'ok').length;
  const fail = results.filter(r => r.status === 'fail').length;
  const flaggedScan = results.filter(r => r.status === 'ok' && !r.scanClean).length;
  console.log(`Summary: ${ok}/${slugs.length} OK, ${fail} fail, ${flaggedScan} had scan flags`);

  if (fail > 0 || flaggedScan > 0) {
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Batch test failed:', err);
  process.exit(1);
});
