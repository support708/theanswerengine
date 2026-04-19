#!/usr/bin/env tsx
/**
 * Live dry-run of the Monday Brief builder.
 *
 * Calls buildMondayBrief(slug) against real data (GSC + Reddit + Recommender)
 * and prints the computed subject, verifiedFacts, and a preview of the HTML
 * body. Optionally writes the full HTML to /tmp/monday-brief-<slug>.html so
 * you can open it in a browser before anything gets drafted.
 *
 * No emails are drafted or sent. Use the cron route itself (with ?dryRun=1)
 * once the env is wired up to test draft creation end-to-end.
 *
 * Usage:
 *   npx tsx scripts/test-monday-brief.ts lovery-re
 *   npx tsx scripts/test-monday-brief.ts lovery-re --write
 *   npx tsx scripts/test-monday-brief.ts            # all 7 clients
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
// Force no-send (defense in depth; the lib also defaults to drafts-only).
process.env.AUTO_SEND_ENABLED = 'false';

import { buildMondayBrief } from '../lib/monday-brief';
import { scanEmailForFabrication } from '../lib/fabrication-scan-email';

async function main() {
  const args = process.argv.slice(2);
  const write = args.includes('--write');
  const single = args.find(a => !a.startsWith('--'));

  const mapPath = path.join(process.cwd(), 'data', 'gsc-client-map.json');
  const map: Record<string, string> = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));
  const allSlugs = Array.from(new Set(
    Object.entries(map).filter(([k]) => !k.startsWith('_')).map(([, v]) => v).filter(v => v !== 'CONFIGURE_ME'),
  ));
  const slugs = single ? [single] : allSlugs;

  for (const slug of slugs) {
    console.log(`\n${'═'.repeat(70)}`);
    console.log(`Monday Brief — ${slug}`);
    console.log('═'.repeat(70));

    try {
      const brief = await buildMondayBrief(slug);

      console.log(`Display name:      ${brief.displayName}`);
      console.log(`First name:        ${brief.firstName}`);
      console.log(`Subject:           ${brief.subject}`);
      console.log(`Authority score:   ${brief.snapshots.authority.score}/100  delta=${brief.snapshots.authority.deltaFromLast}`);
      console.log(`Wins this week:    ${brief.snapshots.winsMisses.wins.length}`);
      console.log(`New queries:       ${brief.snapshots.winsMisses.newQueries.length}`);
      console.log(`Unsent Reddit:     ${brief.snapshots.unsentRedditCount}`);
      console.log(`Conversation flag: ${brief.conversationFlag.needed}${brief.conversationFlag.reason ? ` — ${brief.conversationFlag.reason}` : ''}`);
      console.log(`Brand-safe:        ${brief.brandSafe}`);

      console.log(`\nRecommendations:`);
      for (let i = 0; i < brief.snapshots.recommendation.recommendations.length; i++) {
        const r = brief.snapshots.recommendation.recommendations[i];
        console.log(`  ${i + 1}. ${r.action}`);
        console.log(`     rationale: ${r.rationale}`);
        console.log(`     tied to: ${r.tied_to_goal}`);
      }

      console.log(`\nVerified facts (${brief.verifiedFacts.length}):`);
      for (const f of brief.verifiedFacts.slice(0, 10)) console.log(`  - ${f}`);
      if (brief.verifiedFacts.length > 10) console.log(`  ...and ${brief.verifiedFacts.length - 10} more`);

      // Run the brief through the fabrication scan with its own verifiedFacts
      // — this is exactly what sendGmailMessageGated() does in the cron.
      const scan = scanEmailForFabrication({
        subject: brief.subject,
        htmlBody: brief.htmlBody,
        textBody: brief.textBody,
        verifiedFacts: brief.verifiedFacts,
      });
      console.log(`\nFabrication scan: ${scan.clean ? '✅ CLEAN' : `⚠️ ${scan.flags.length} flag(s)`}`);
      if (!scan.clean) {
        for (const f of scan.flags.slice(0, 10)) {
          console.log(`  [${f.pattern}] "${f.match}"`);
        }
        if (scan.flags.length > 10) console.log(`  ...and ${scan.flags.length - 10} more`);
      }

      console.log(`\nText body preview:`);
      console.log(brief.textBody.split('\n').slice(0, 12).map(l => `  ${l}`).join('\n'));

      if (write) {
        const out = path.join(process.cwd(), `monday-brief-${slug}.html`);
        fs.writeFileSync(out, brief.htmlBody);
        console.log(`\n📝 HTML written: ${out}`);
      }
    } catch (err) {
      console.log(`\n❌ FAILED: ${(err as Error).message}`);
    }
  }

  console.log('');
}

main().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
