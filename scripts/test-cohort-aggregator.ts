#!/usr/bin/env tsx
/**
 * Live dry-run of lib/cohort-aggregator.ts.
 *
 *   npx tsx scripts/test-cohort-aggregator.ts           # dry
 *   npx tsx scripts/test-cohort-aggregator.ts --persist # write snapshot
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

import { aggregateCohorts } from '../lib/cohort-aggregator';

async function main() {
  const persist = process.argv.includes('--persist');
  console.log(`=== Cohort Aggregate — Live Run ===`);
  console.log(`Persist: ${persist ? 'YES' : 'no (dry)'}\n`);

  const benchmarks = await aggregateCohorts({ persist });

  for (const b of benchmarks) {
    console.log(`${'─'.repeat(60)}`);
    console.log(`${b.cohortDisplayName} (${b.cohort})`);
    console.log(`  Size: ${b.cohortSize} client${b.cohortSize === 1 ? '' : 's'} ${b.cohortSize < 3 ? '⚠️ suppressed in client-facing output' : ''}`);
    console.log(`  Members: ${b.sampleSlugs.join(', ')}`);
    console.log(`  Medians:`);
    console.log(`    Authority Index:  ${b.median.authority_index}/100`);
    console.log(`    Impressions 28d:  ${b.median.impressions_28d.toLocaleString()}`);
    console.log(`    Clicks 28d:       ${b.median.clicks_28d.toLocaleString()}`);
    console.log(`    Avg position:     ${b.median.avg_position}`);
    console.log(`    Avg CTR:          ${(b.median.avg_ctr * 100).toFixed(2)}%`);
    console.log(`    Unique queries:   ${b.median.unique_queries}`);
    console.log(`    New ranking pages: ${b.median.new_ranking_pages_28d}`);
    console.log(`    Reviews:          ${b.median.review_count} @ ${b.median.review_rating} stars`);
    console.log('');
  }
}

main().catch(err => {
  console.error('Run failed:', err);
  process.exit(1);
});
