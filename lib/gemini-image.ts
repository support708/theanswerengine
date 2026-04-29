/**
 * Gemini Image Generation for The Answer Engine blog hero images.
 * Uses @google/genai SDK directly for full control over output.
 * Produces 1200x630 WebP images with dark tech aesthetic.
 */

import { GoogleGenAI } from '@google/genai';
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const GEMINI_MODEL = 'gemini-2.5-flash-image';

const CATEGORY_STYLES: Record<string, string> = {
  'AEO Education': 'abstract visualization of interconnected knowledge nodes and flowing data streams, glowing blue and orange pathways connecting information clusters',
  'How-To Guides': 'hands interacting with a glowing holographic interface, futuristic tools and gears made of light floating in dark space',
  'Platform Deep Dives': 'abstract neural network visualization with layered data architecture, nodes connected by pulsing orange energy pathways against deep navy',
  'Myth Busters': 'dramatic scene of shattering glass revealing digital truth underneath, particles of light and dark in contrast, deconstructed data fragments',
  'Competitive Intelligence': 'split-screen visualization with two contrasting tech ecosystems, one fading and one thriving with vibrant connections',
  'Business Pain Points': 'moody atmospheric scene of a single glowing screen in a dark office space, dramatic volumetric lighting with orange accent beams',
  'Pricing & Services': 'abstract golden and orange geometric shapes suggesting premium value, crystalline structures catching light against deep dark background',
  'AI Algorithm Series': 'deep learning network visualization with multiple layers, data flowing through neural connections rendered as luminous orange and blue particles',
  'ChatGPT Citation Series': 'conversational AI interface with citation bubbles expanding outward, connected knowledge graph rendered in glowing wireframe',
  'Case Studies': 'abstract data dashboard visualization floating in 3D space, charts and metrics rendered as holographic projections with orange highlights',
  'Local SEO': 'abstract city map visualization from above with glowing location pins and search radius circles, dark atmospheric perspective',
  'Content Strategy': 'network of interconnected content nodes forming a constellation pattern, each node glowing with different intensity suggesting hierarchy',
};

const DEFAULT_STYLE = 'abstract futuristic tech visualization with flowing data streams and glowing nodes, interconnected digital pathways against deep dark background';

/**
 * Build a detailed image generation prompt from article metadata.
 */
export function buildImagePrompt(title: string, category: string): string {
  const categoryStyle = CATEGORY_STYLES[category] || DEFAULT_STYLE;

  return [
    `Create a premium, cinematic 16:9 hero image for a tech blog article.`,
    `Article topic: "${title}".`,
    `Visual concept: ${categoryStyle}.`,
    `Style requirements:`,
    `- Dark moody background transitioning from deep navy (#0F1117) to charcoal`,
    `- Subtle orange accent lighting and highlights (#F27D24)`,
    `- Cinematic depth of field with bokeh effects`,
    `- Futuristic, premium, editorial quality`,
    `- Abstract and conceptual, not literal`,
    `- No human faces, no hands, no people`,
    `- No text, no words, no letters, no logos, no watermarks`,
    `- No stock photo aesthetic`,
    `- Ultra clean composition with strong focal point`,
    `- Volumetric lighting with subtle god rays`,
  ].join(' ');
}

/**
 * Generate a hero image via Gemini API.
 * Returns raw image buffer (PNG).
 */
export async function generateHeroImage(
  title: string,
  category: string,
  slug: string,
): Promise<Buffer> {
  const apiKey = process.env.NANOBANANA_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Missing NANOBANANA_API_KEY or GEMINI_API_KEY environment variable');
  }

  const ai = new GoogleGenAI({ apiKey });
  const prompt = buildImagePrompt(title, category);

  let lastError: Error | null = null;
  const maxRetries = 3;
  const baseDelay = 2000;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt,
        config: {
          responseModalities: ['IMAGE', 'TEXT'],
        },
      });

      // Extract image from response
      if (response.candidates && response.candidates[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData?.data) {
            const imageBuffer = Buffer.from(part.inlineData.data, 'base64');
            console.log(`[Gemini] Generated image for "${slug}" (attempt ${attempt + 1})`);
            return imageBuffer;
          }
        }
      }

      throw new Error('No image data in Gemini response');
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      console.warn(`[Gemini] Attempt ${attempt + 1}/${maxRetries} failed for "${slug}": ${lastError.message}`);
      if (attempt < maxRetries - 1) {
        const delay = baseDelay * Math.pow(2, attempt);
        await new Promise(r => setTimeout(r, delay));
      }
    }
  }

  throw lastError || new Error('Image generation failed after all retries');
}

/**
 * Process and save image as optimized WebP (1200x630).
 * Returns the public path: /blog/{slug}.webp
 */
export async function saveHeroWebp(imageBuffer: Buffer, slug: string): Promise<string> {
  const outputDir = path.join(process.cwd(), 'public', 'blog');
  await fs.mkdir(outputDir, { recursive: true });

  const outputPath = path.join(outputDir, `${slug}.webp`);

  await sharp(imageBuffer)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .webp({ quality: 85 })
    .toFile(outputPath);

  const stats = await fs.stat(outputPath);
  console.log(`[Sharp] Saved ${slug}.webp (${(stats.size / 1024).toFixed(1)}KB)`);

  return `/blog/${slug}.webp`;
}

/**
 * Full pipeline: generate + process + save.
 * Returns the public image path or null on failure.
 */
export async function generateAndSaveHeroImage(
  title: string,
  category: string,
  slug: string,
): Promise<string | null> {
  try {
    const rawBuffer = await generateHeroImage(title, category, slug);
    const webpPath = await saveHeroWebp(rawBuffer, slug);
    return webpPath;
  } catch (err) {
    console.error(`[Gemini] Failed to generate image for "${slug}":`, err);
    return null;
  }
}
