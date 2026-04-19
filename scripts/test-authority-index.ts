#!/usr/bin/env tsx
/**
 * Live run of lib/aeo-authority-index.ts across all 7 clients.
 *
 * Computes the current Authority Index for each client using real GSC +
 * Reddit + profile data. Shows the score, the breakdown by component, and
 * the top signals driving the result. Does NOT persist unless --persist
 * is passed, so iterating on the formula is safe.
 *
 * Usage:
 *   npx tsx scripts/test-authority-index.ts           # dry run
 *   npx tsx scripts/test-authority-index.ts --persist # also write history
 *   npx tsx scripts/test-authority-index.ts lovery-re # single client
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

import { computeAuthorityIndex } from '../lib/aeo-authority-index';

async function main() {
  const args = process.argv.slice(2);
  const persist = args.includes('--persist');
  const single = args.find(a => !a.startsWith('--'));

  const mapPath = path.join(process.cwd(), 'data', 'gsc-client-map.json');
  const map: Record<string, string> = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));
  const allSlugs = Array.from(new Set(
    Object.entries(map)
      .filter(([key]) => !key.startsWith('_'))
      .map(([, slug]) => slug)
      .filter(s => s !== 'CONFIGURE_ME'),
  ));

  const slugs = single ? [single] : allSlugs;

  console.log(`=== AEO Authority Index — Live Run ===`);
  console.log(`Persist: ${persist ? 'YES (writing to data/authority-index-history.json)' : 'no (dry run)'}`);
  console.log(`Clients: ${slugs.join(', ')}\n`);

  const results: { slug: string; score: number }[] = [];

  for (const slug of slugs) {
    try {
      const result = await computeAuthorityIndex(slug, { persist });

      console.log(`\n${'─'.repeat(60)}`);
      console.log(`${result.displayName} (${slug})`);
      console.log(`GSC property: ${result.siteUrl}`);
      console.log(`\nSCORE: ${result.score}/100${result.deltaFromLast !== null ? `  (${result.deltaFromLast >= 0 ? '+' : ''}${result.deltaFromLast} from last reading)` : '  (baseline)'}`);
      console.log(`\nBreakdown (0-100 per component):`);
      console.log(`  GSC performance  (40%): ${result.breakdown.gsc}`);
      console.log(`  Reddit engagement(15%): ${result.breakdown.reddit}`);
      console.log(`  Content velocity (15%): ${result.breakdown.content_velocity}`);
      console.log(`  Reviews          (15%): ${result.breakdown.reviews}`);
      console.log(`  AI citations     (10%): ${result.breakdown.ai_citations} (stub)`);
      console.log(`  Backlink proxy   ( 5%): ${result.breakdown.backlink_proxy} (stub)`);
      console.log(`\nSignals:`);
      console.log(`  28d impressions: ${result.signals.impressions_28d.toLocaleString()} (prev: ${result.signals.impressions_prev_28d.toLocaleString()})`);
      console.log(`  28d clicks:      ${result.signals.clicks_28d.toLocaleString()}`);
      console.log(`  Avg position:    ${result.signals.avg_position}`);
      console.log(`  Avg CTR:         ${(result.signals.avg_ctr * 100).toFixed(2)}%`);
      console.log(`  Unique queries:  ${result.signals.unique_queries}`);
      console.log(`  New ranking pages (28d): ${result.signals.new_ranking_pages}`);
      console.log(`  Reddit high-impact opps (30d): ${result.signals.reddit_high_impact_30d}`);
      console.log(`  Reviews: ${result.signals.review_count} @ ${result.signals.review_rating} stars`);

      results.push({ slug, score: result.score });
    } catch (err) {
      console.log(`\n${'─'.repeat(60)}`);
      console.log(`${slug}: FAILED`);
      console.log(`  Error: ${(err as Error).message}`);
    }
  }

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`SUMMARY (ranked by score):`);
  for (const r of results.sort((a, b) => b.score - a.score)) {
    const bar = '█'.repeat(Math.round(r.score / 5));
    console.log(`  ${r.slug.padEnd(22)} ${String(r.score).padStart(3)}/100 ${bar}`);
  }
  console.log('');
}

main().catch(err => {
  console.error('Run failed:', err);
  process.exit(1);
});
