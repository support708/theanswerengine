#!/usr/bin/env npx tsx
/**
 * Update all page.tsx files to reference .webp hero images instead of .svg.
 * Only modifies articles that use the /blog/{slug}.svg pattern.
 * Leaves custom images (PNG, JPG in /images/) untouched.
 */

import { promises as fs } from 'fs';
import path from 'path';

interface BlogPost {
  slug: string;
  image: string;
  [key: string]: unknown;
}

const BLOG_POSTS_PATH = path.join(process.cwd(), 'app', 'blog', 'blogPosts.json');
const BLOG_DIR = path.join(process.cwd(), 'app', 'blog');

async function main() {
  const raw = await fs.readFile(BLOG_POSTS_PATH, 'utf-8');
  const posts: BlogPost[] = JSON.parse(raw);

  // Only process articles that have .webp images (already backfilled)
  const webpPosts = posts.filter(p => p.image.endsWith('.webp'));
  console.log(`Found ${webpPosts.length} articles with .webp images to update\n`);

  let updated = 0;
  let skipped = 0;

  for (const post of webpPosts) {
    const pagePath = path.join(BLOG_DIR, post.slug, 'page.tsx');

    try {
      let content = await fs.readFile(pagePath, 'utf-8');
      const original = content;

      // Replace SVG references with WebP in OG images, Twitter images, and schema
      // Pattern 1: /blog/slug.svg → /blog/slug.webp
      content = content.replace(
        new RegExp(`/blog/${post.slug}\\.svg`, 'g'),
        `/blog/${post.slug}.webp`,
      );

      // Pattern 2: Full URL variants
      content = content.replace(
        new RegExp(`theanswerengine\\.ai/blog/${post.slug}\\.svg`, 'g'),
        `theanswerengine.ai/blog/${post.slug}.webp`,
      );

      // Pattern 3: /images/ path variants (some articles use /images/slug.svg)
      content = content.replace(
        new RegExp(`/images/${post.slug}\\.svg`, 'g'),
        `/blog/${post.slug}.webp`,
      );
      content = content.replace(
        new RegExp(`theanswerengine\\.ai/images/${post.slug}\\.svg`, 'g'),
        `theanswerengine.ai/blog/${post.slug}.webp`,
      );

      if (content !== original) {
        await fs.writeFile(pagePath, content, 'utf-8');
        updated++;
        console.log(`[${updated}] Updated: ${post.slug}`);
      } else {
        skipped++;
      }
    } catch {
      console.warn(`  Could not process: ${post.slug}`);
      skipped++;
    }
  }

  console.log(`\n=== UPDATE COMPLETE ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
