#!/usr/bin/env tsx
/**
 * Live dry-run for lib/fabrication-scan-email.ts.
 *
 * Feeds the scanner a realistic client-facing email body (Monday Brief style)
 * with a mix of verified and unverified statistical claims. No emails are
 * actually sent — the scanner is a pure function and the gated-send test uses
 * AUTO_SEND_ENABLED=false so every path creates a draft instead.
 *
 * Usage: npx tsx scripts/test-fabrication-scan-email.ts
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

import { scanEmailForFabrication } from '../lib/fabrication-scan-email';

async function main() {
  const verifiedFacts = [
    "Lovery's AEO Authority Index is 47/100 this week",
    'Lovery impressions: 884 last 28 days',
    '"sell my house San Diego" moved from position 14 to 8',
    '3 previously-unranked queries now on page 1-2',
    'published 1 new article indexed this week',
  ];

  const subject = 'Monday Brief — Lovery Real Estate (Apr 20)';
  const htmlBody = `
    <div>
      <h2>Good morning, Ryan.</h2>
      <p>Your AEO Authority Index is <b>47/100</b> (↑ 3 from last week).</p>
      <ul>
        <li><b>Rank up:</b> "sell my house San Diego" moved from position 14 to 8.</li>
        <li><b>New queries:</b> 3 previously-unranked phrases now on page 1-2.</li>
        <li><b>Content:</b> 1 new article indexed.</li>
        <li><b>Revenue lift:</b> $12,500 in projected deal value this quarter.</li>
        <li>Studies show 73% of buyers start their search online.</li>
        <li>We're seeing 2.5x organic traffic compared to last month.</li>
      </ul>
    </div>
  `;
  const textBody = [
    'Your AEO Authority Index is 47/100 this week.',
    '"sell my house San Diego" moved from position 14 to 8.',
    '3 previously-unranked queries now on page 1-2.',
    '$12,500 in projected deal value this quarter.',
    'Studies show 73% of buyers start online.',
    '2.5x organic traffic compared to last month.',
  ].join('\n');

  console.log('=== Fabrication Scan 2.0 — Live Dry-Run ===\n');
  console.log(`Verified facts supplied: ${verifiedFacts.length}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body (text preview): ${textBody.slice(0, 120)}...\n`);

  const result = scanEmailForFabrication({ subject, htmlBody, textBody, verifiedFacts });

  console.log(`Clean: ${result.clean}`);
  console.log(`Flags: ${result.flags.length}\n`);

  if (result.flags.length > 0) {
    console.log('--- Flagged Claims ---');
    for (const flag of result.flags) {
      console.log(`  [${flag.pattern}] "${flag.match}"`);
      console.log(`    context: ${flag.context}`);
    }
    console.log('');
  }

  const verifiedPhrases = ['47/100', '884', '14 to 8'];
  const falsePositives = verifiedPhrases.filter(p =>
    result.flags.some(f => f.match.toLowerCase().includes(p.toLowerCase())),
  );
  if (falsePositives.length > 0) {
    console.log('⚠️ FALSE POSITIVES (verified facts that got flagged):');
    for (const p of falsePositives) console.log(`  - "${p}"`);
    console.log('');
  } else {
    console.log('✅ No false positives on verified facts.\n');
  }

  const expectedCatches = ['12,500', '73%', '2.5x', 'studies show'];
  const missed = expectedCatches.filter(p =>
    !result.flags.some(f => f.match.toLowerCase().includes(p.toLowerCase())),
  );
  if (missed.length > 0) {
    console.log('⚠️ MISSED CATCHES (expected to flag but did not):');
    for (const p of missed) console.log(`  - "${p}"`);
    console.log('');
  } else {
    console.log('✅ All expected fabrications caught.\n');
  }

  console.log('=== Dry-run complete — no emails sent. ===');
}

main().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
