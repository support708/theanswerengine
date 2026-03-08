/**
 * CLI script to generate blog articles locally.
 * Usage: npx tsx scripts/generate-blog.ts [count]
 * Default: generates 1 article. Pass a number for more.
 */

import { readFileSync } from 'fs';
import { join } from 'path';

// Load .env.local manually (no dotenv dependency)
try {
  const envFile = readFileSync(join(process.cwd(), '.env.local'), 'utf-8');
  for (const line of envFile.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
} catch { /* .env.local not found */ }

import { runBlogSession } from '../lib/blog-scheduler';
import { readTopicQueue } from '../lib/blog-data';

async function main() {
  const count = parseInt(process.argv[2] || '1', 10);
  console.log(`\nBlog Bot - Generating ${count} article(s)\n`);

  // Show queued topics
  const topics = await readTopicQueue();
  const queued = topics.filter(t => t.status === 'queued');
  console.log(`Queued topics: ${queued.length}`);
  queued.slice(0, count).forEach((t, i) => {
    console.log(`  ${i + 1}. [P${t.priority}] ${t.title}`);
  });
  console.log('');

  for (let i = 0; i < count; i++) {
    console.log(`--- Article ${i + 1}/${count} ---`);
    const start = Date.now();

    try {
      const session = await runBlogSession('manual');
      const elapsed = ((Date.now() - start) / 1000).toFixed(1);

      if (session.published) {
        console.log(`Published: ${session.topicTitle}`);
        console.log(`  Slug: ${session.slug}`);
        console.log(`  Audit: ${session.auditScore}/100`);
        console.log(`  Tokens: ${session.researchTokens + session.generationTokens + session.auditTokens}`);
        console.log(`  Duration: ${elapsed}s`);
      } else {
        console.log(`FAILED: ${session.topicTitle}`);
        console.log(`  Error: ${session.error}`);
        console.log(`  Audit: ${session.auditScore}/100`);
      }
    } catch (err) {
      console.error(`Error: ${err instanceof Error ? err.message : err}`);
    }

    console.log('');

    // Small delay between articles
    if (i < count - 1) {
      console.log('Waiting 10s before next article...\n');
      await new Promise(r => setTimeout(r, 10000));
    }
  }

  console.log('Done!');
}

main().catch(console.error);
