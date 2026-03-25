#!/usr/bin/env npx tsx
/**
 * Backfill all existing blog articles with Gemini-generated hero images.
 * Idempotent: skips articles that already have a .webp file.
 * Rate-limited: 4s between API calls (safe for 15 RPM free tier).
 */

import { promises as fs } from 'fs';
import path from 'path';
import { generateAndSaveHeroImage } from '../lib/gemini-image';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  [key: string]: unknown;
}

const BLOG_POSTS_PATH = path.join(process.cwd(), 'app', 'blog', 'blogPosts.json');
const PUBLIC_BLOG_DIR = path.join(process.cwd(), 'public', 'blog');
const RATE_LIMIT_MS = 4000;

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!process.env.NANOBANANA_API_KEY && !process.env.GEMINI_API_KEY) {
    console.error('Error: Set NANOBANANA_API_KEY or GEMINI_API_KEY environment variable');
    process.exit(1);
  }

  const raw = await fs.readFile(BLOG_POSTS_PATH, 'utf-8');
  const posts: BlogPost[] = JSON.parse(raw);

  console.log(`Found ${posts.length} articles to process\n`);

  let success = 0;
  let skipped = 0;
  let failed = 0;
  const failures: { slug: string; error: string }[] = [];
  const startTime = Date.now();

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const webpPath = path.join(PUBLIC_BLOG_DIR, `${post.slug}.webp`);

    // Skip if already generated
    if (await fileExists(webpPath)) {
      console.log(`[${i + 1}/${posts.length}] SKIP: ${post.slug}.webp (already exists)`);
      // Still update the image path in metadata
      if (post.image.endsWith('.svg')) {
        post.image = `/blog/${post.slug}.webp`;
      }
      skipped++;
      continue;
    }

    console.log(`[${i + 1}/${posts.length}] Generating: ${post.slug}`);

    const result = await generateAndSaveHeroImage(post.title, post.category, post.slug);

    if (result) {
      post.image = result;
      success++;
      console.log(`  ✓ ${result}\n`);
    } else {
      failed++;
      failures.push({ slug: post.slug, error: 'Generation failed' });
      console.log(`  ✗ FAILED (SVG fallback retained)\n`);
    }

    // Rate limit (skip delay on last item)
    if (i < posts.length - 1) {
      await new Promise(r => setTimeout(r, RATE_LIMIT_MS));
    }
  }

  // Write updated blogPosts.json
  await fs.writeFile(BLOG_POSTS_PATH, JSON.stringify(posts, null, 2), 'utf-8');

  const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

  console.log('\n=== BACKFILL COMPLETE ===');
  console.log(`Total:   ${posts.length}`);
  console.log(`Success: ${success}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Failed:  ${failed}`);
  console.log(`Time:    ${elapsed} minutes`);

  if (failures.length > 0) {
    const failPath = path.join(process.cwd(), 'data', 'backfill-failures.json');
    await fs.writeFile(failPath, JSON.stringify(failures, null, 2), 'utf-8');
    console.log(`\nFailures saved to: ${failPath}`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
