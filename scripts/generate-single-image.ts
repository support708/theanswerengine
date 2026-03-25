#!/usr/bin/env npx tsx
/**
 * CLI wrapper for generating a single blog hero image via Gemini.
 * Usage: NANOBANANA_API_KEY=... npx tsx scripts/generate-single-image.ts "Title" "Category" "slug"
 */

import { generateAndSaveHeroImage } from '../lib/gemini-image';

async function main() {
  const [title, category, slug] = process.argv.slice(2);

  if (!title || !category || !slug) {
    console.error('Usage: npx tsx scripts/generate-single-image.ts "Title" "Category" "slug"');
    process.exit(1);
  }

  if (!process.env.NANOBANANA_API_KEY && !process.env.GEMINI_API_KEY) {
    console.error('Error: Set NANOBANANA_API_KEY or GEMINI_API_KEY environment variable');
    process.exit(1);
  }

  console.log(`Generating hero image for: "${title}" [${category}] → ${slug}.webp`);

  const result = await generateAndSaveHeroImage(title, category, slug);

  if (result) {
    console.log(`Success: ${result}`);
  } else {
    console.error('Failed to generate image');
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
