/**
 * Blog Bot - 3-call pipeline for automated AEO article generation.
 * Call 1: Haiku + web_search (research)
 * Call 2: Sonnet (generate page.tsx)
 * Call 3: Haiku (quality audit)
 */

import { callClaude, callClaudeWithWebSearch, extractText } from './anthropic';
import type { BlogTopic, ResearchOutput, AuditResult } from './blog-types';

const HAIKU = 'claude-haiku-4-5-20251001';
const SONNET = 'claude-sonnet-4-6';

const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

// --- System Prompts (static, cacheable) ---

const RESEARCH_SYSTEM = [
  {
    type: 'text' as const,
    text: `You are a research assistant for The Answer Engine, an AEO (Answer Engine Optimization) agency.

Your job: research a given topic and produce a structured brief for article generation.

RULES:
- Draw on your training knowledge to find relevant data, stats, and search patterns for this topic
- Prioritize stats you are confident are accurate; note approximate year if uncertain
- Focus on what makes content get cited by AI platforms (ChatGPT, Claude, Perplexity, Google AI Overviews)
- Target audience: local service business owners (plumbers, lawyers, dentists, roofers, etc.)
- Tone: authoritative but accessible, no jargon without explanation
- Find 5-8 FAQ questions real people ask about this topic

KEYWORD STRATEGY (CRITICAL):
- Identify what people ACTUALLY search for on Google related to this topic based on your training data
- Prioritize SEO keywords over AEO jargon. Most business owners search "how to get on ChatGPT" not "answer engine optimization"
- The refined title MUST target a real search query people type into Google
- Think like Google autocomplete and "People Also Ask" — use those patterns
- Do NOT use the same title or near-identical title as any existing article (a list of existing titles will be provided)
- The slug must be unique and not duplicate any existing slug

OUTPUT FORMAT: Return ONLY valid JSON matching this structure:
{
  "refinedTitle": "Optimized H1 title (under 65 chars for search)",
  "slug": "url-friendly-slug",
  "outline": ["H2 section 1", "H2 section 2", ...],
  "keyStats": ["Stat with source: description (Source: URL)", ...],
  "faqQuestions": [{"question": "...", "answer": "2-3 sentence answer"}, ...],
  "excerpt": "150-char meta description with target keyword",
  "tags": ["tag1", "tag2", ...],
  "readTimeMinutes": 8,
  "category": "Category name"
}`,
    cache_control: { type: 'ephemeral' as const },
  },
];

const GENERATION_SYSTEM = [
  {
    type: 'text' as const,
    text: `You are a senior content engineer for The Answer Engine (theanswerengine.ai).

Your job: generate a COMPLETE Next.js page.tsx file for a blog article.

BRAND RULES (match the live site exactly):
- Background: #0A0A0F (dark, near-black) — use bg-[#0A0A0F] on the outer wrapper
- Accent color: #F27D24 (orange) — used in links (prose-a), ae-accent class, borders, icon tints
- Headings (H1 + H2s): Space Grotesk — className="font-headline font-black tracking-tighter uppercase"
- Body: Inter (loaded globally via --font-body — no extra className needed)
- Mono labels / metadata / section tags: font-mono text-[10px] tracking-widest uppercase
- Prose body: className="prose prose-invert prose-lg max-w-none prose-headings:font-headline prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white"
- Article layout: max-w-4xl mx-auto px-6 py-12 sm:py-16
- Scanline overlay is applied globally by globals.css — do NOT add it in page.tsx

AVAILABLE CSS UTILITY CLASSES (use these, they are already in globals.css):
- ae-stats-grid / ae-stat-card / ae-stat-value ae-accent / ae-stat-label — stat grid blocks
- ae-section-label — orange mono section tag before an h2
- ae-cta-primary — orange CTA button (Link or a href)
- ae-cta-inline — inline mid-article CTA box (not-prose, flex row)
- ae-final-cta — dark final CTA block at end of article
- ae-final-cta-pulse — decorative pulse inside ae-final-cta

CONTENT RULES:
- ZERO em-dashes (--) anywhere. Use colons, commas, or periods instead.
- ZERO fabricated stats. Only use stats provided in the research brief.
- Every claim must be supportable by the research provided.
- Write for local service business owners, not marketers.
- Conversational but authoritative tone.
- Include practical, actionable advice.
- 1500-2500 words target.
- ZERO inline event handlers (no onClick, onMouseOver, onMouseOut, onChange, onFocus, onBlur). This is a Server Component. Use Tailwind hover:/focus: classes instead (e.g. hover:bg-orange-700).

PAGE STRUCTURE (must include ALL of these):
1. ISR config: export const revalidate = 86400; export const dynamic = 'force-static'; export const dynamicParams = true;
2. Metadata export with full OG, Twitter, canonical, keywords
3. JSON-LD schema: Article + FAQPage + BreadcrumbList in a @graph array
4. Breadcrumb component
5. Hero section with gradient background and geometric SVG pattern (no external image)
6. Article body with proper heading hierarchy (H1 in hero, H2s for sections)
7. FAQ section with all provided Q&As
8. CTA section linking to /blindspot (free AI visibility check)
9. Author attribution: "The Answer Engine Team"

CATEGORY PILL TEMPLATE (above H1 in header):
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
  <span className="text-sm font-semibold tracking-wider uppercase text-white">{category}</span>
</div>

H1 TEMPLATE:
<h1 className="font-headline font-black tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-tight mb-6">{title}</h1>

FEATURED SNIPPET BLOCK (immediately after H1, before article body):
<div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
  <p className="text-lg text-white leading-relaxed"><strong>{1-2 sentence direct answer to the article's core question}</strong></p>
</div>

SECTION LABEL + H2 PATTERN (inside prose body):
<span className="ae-section-label">{SECTION TAG}</span>
<h2>{Section Title}</h2>

INLINE CTA (mid-article, inside not-prose div):
<div className="ae-cta-inline not-prose">
  <p>{short hook}</p>
  <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
</div>

FINAL CTA BLOCK (after prose, before closing article tag):
<div className="ae-final-cta">
  <div className="ae-final-cta-pulse"></div>
  <h2>Is AI Recommending Your Competitors Instead of You?</h2>
  <p>Our free blind spot report shows you exactly where you stand and what it would take to become the recommended answer in your market.</p>
  <Link href="/blindspot" className="ae-cta-primary">Get Your Free Blind Spot Report</Link>
</div>

IMPORTS TO USE:
import type { Metadata } from 'next'
import Link from 'next/link'

OUTPUT: Return ONLY the complete page.tsx code. No markdown fences, no explanations. Start with the import statement.`,
    cache_control: { type: 'ephemeral' as const },
  },
];

const AUDIT_SYSTEM = [
  {
    type: 'text' as const,
    text: `You are a quality auditor for The Answer Engine blog content.

Audit the provided page.tsx file and score it 0-100 on these criteria:

SCORING (100 points total):
- JSX Validity (15 pts): Valid JSX, proper imports, no syntax errors
- Metadata Quality (10 pts): Complete OG, Twitter, canonical, keywords
- Schema Markup (10 pts): Article + FAQPage + BreadcrumbList in @graph
- Content Quality (20 pts): Informative, actionable, proper heading hierarchy
- Brand Compliance (15 pts): bg-[#0A0A0F] outer wrapper, #F27D24 accent, font-headline font-black tracking-tighter uppercase on all headings, ae-* CSS classes used for CTAs and stats
- Zero Em-Dashes (10 pts): No -- or \u2014 characters anywhere (instant 0 if found)
- No Event Handlers (5 pts): No inline onClick/onMouseOver/etc. (Server Component)
- FAQ Section (10 pts): At least 4 FAQ Q&As present
- CTA Present (10 pts): Links to /blindspot or similar

OUTPUT FORMAT: Return ONLY valid JSON:
{
  "score": 85,
  "passed": true,
  "issues": ["Issue 1", "Issue 2"],
  "suggestions": ["Suggestion 1"]
}

A score of 85+ passes. Be strict but fair.`,
    cache_control: { type: 'ephemeral' as const },
  },
];

// --- Pipeline Functions ---

export async function researchTopic(topic: BlogTopic, existingTitles: string[] = [], existingSlugs: string[] = []): Promise<{ research: ResearchOutput; tokens: number }> {
  const duplicateWarning = existingTitles.length > 0
    ? `\n\nEXISTING ARTICLES (do NOT duplicate these titles or slugs):\nTitles: ${existingTitles.map(t => `"${t}"`).join(', ')}\nSlugs: ${existingSlugs.join(', ')}`
    : '';

  const response = await callClaude({
    model: HAIKU,
    system: RESEARCH_SYSTEM,
    messages: [{
      role: 'user',
      content: `Research the topic: "${topic.title}"
Target keyword: "${topic.targetKeyword}"
Category: ${topic.category}
Pillar: ${topic.pillar}

Produce a thorough research brief using your training knowledge. Identify real search queries people use, relevant stats, competitor content gaps, and FAQs.${duplicateWarning}

Return structured JSON.`,
    }],
    maxTokens: 4096,
  });

  const text = extractText(response);
  const tokens = (response.usage?.input_tokens || 0) + (response.usage?.output_tokens || 0);

  // Parse JSON from response (may be wrapped in markdown fences)
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Research call returned no valid JSON');
  }

  const research = JSON.parse(jsonMatch[0]) as ResearchOutput;
  return { research, tokens };
}

export async function generateArticle(research: ResearchOutput): Promise<{ code: string; tokens: number }> {
  const response = await callClaude({
    model: SONNET,
    system: GENERATION_SYSTEM,
    messages: [{
      role: 'user',
      content: `Generate a complete page.tsx blog article based on this research brief:

${JSON.stringify(research, null, 2)}

IMPORTANT:
- Use the refinedTitle as the H1
- Use the slug for all canonical/OG URLs: https://theanswerengine.ai/blog/${research.slug}
- Include ALL FAQ questions in the FAQ schema and rendered section
- Use ONLY the stats provided in keyStats (do not invent new ones)
- Zero em-dashes
- publishDate: ${new Date().toISOString().split('T')[0]}
- Author: "The Answer Engine Team"

Return ONLY the page.tsx code.`,
    }],
    maxTokens: 16384,
  });

  let code = extractText(response);
  const tokens = (response.usage?.input_tokens || 0) + (response.usage?.output_tokens || 0);

  // Strip markdown fences if present
  code = code.replace(/^```(?:tsx?|jsx?)?\s*\n?/m, '').replace(/\n?```\s*$/m, '').trim();

  // Post-process: strip em-dashes
  code = code.replace(/\u2014/g, ' - ').replace(/\u2013/g, '-');

  return { code, tokens };
}

export async function auditArticle(code: string): Promise<{ audit: AuditResult; tokens: number }> {
  const response = await callClaude({
    model: HAIKU,
    system: AUDIT_SYSTEM,
    messages: [{
      role: 'user',
      content: `Audit this blog post page.tsx:\n\n${code}`,
    }],
    maxTokens: 2048,
  });

  const text = extractText(response);
  const tokens = (response.usage?.input_tokens || 0) + (response.usage?.output_tokens || 0);

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Audit call returned no valid JSON');
  }

  const audit = JSON.parse(jsonMatch[0]) as AuditResult;
  // Ensure passed matches score threshold
  audit.passed = audit.score >= 85;
  return { audit, tokens };
}

/**
 * Generate an SVG hero image for a blog post.
 * Matches the brand style: dark gradient, orange accents, geometric patterns.
 */
export function generateBlogSvg(title: string, category: string, slug: string): string {
  // Split title into lines (max ~30 chars per line for readability)
  const words = title.split(' ');
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    if ((current + ' ' + word).trim().length > 28 && current) {
      lines.push(current.trim());
      current = word;
    } else {
      current = current ? current + ' ' + word : word;
    }
  }
  if (current.trim()) lines.push(current.trim());

  // Use slug hash for deterministic pattern variation
  const hash = slug.split('').reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0);
  const patternType = Math.abs(hash) % 4;

  // Gradient colors based on pattern type
  const gradients = [
    ['#1a1a2e', '#16213e', '#0f3460'],
    ['#0c2d48', '#1a1a2e', '#111827'],
    ['#1e1b4b', '#172554', '#111827'],
    ['#172554', '#1e1b4b', '#111827'],
  ];
  const [c1, c2, c3] = gradients[patternType];

  // Pattern SVG elements
  const patterns = [
    `<circle cx="900" cy="315" r="200" stroke="rgba(255,106,0,0.15)" stroke-width="0.5" fill="none"/>
     <circle cx="900" cy="315" r="140" stroke="rgba(255,106,0,0.1)" stroke-width="0.5" fill="none"/>
     <circle cx="900" cy="315" r="80" stroke="rgba(255,106,0,0.2)" stroke-width="0.5" fill="none"/>`,
    `<rect x="850" y="150" width="250" height="250" rx="8" stroke="rgba(255,106,0,0.12)" stroke-width="0.5" fill="none" transform="rotate(15 975 275)"/>
     <rect x="880" y="180" width="190" height="190" rx="6" stroke="rgba(255,106,0,0.08)" stroke-width="0.5" fill="none" transform="rotate(15 975 275)"/>`,
    `<line x1="600" y1="80" x2="600" y2="550" stroke="rgba(255,106,0,0.15)" stroke-width="1" stroke-dasharray="8 8"/>
     <circle cx="600" cy="315" r="120" stroke="rgba(255,106,0,0.08)" stroke-width="0.5" fill="none"/>
     <circle cx="600" cy="315" r="60" stroke="rgba(255,106,0,0.12)" stroke-width="0.5" fill="none"/>`,
    `<path d="M 100 500 A 400 400 0 0 1 900 500" stroke="rgba(255,106,0,0.1)" stroke-width="0.5" fill="none"/>
     <path d="M 200 500 A 300 300 0 0 1 800 500" stroke="rgba(255,106,0,0.15)" stroke-width="0.5" fill="none"/>
     <path d="M 300 500 A 200 200 0 0 1 700 500" stroke="rgba(255,106,0,0.08)" stroke-width="0.5" fill="none"/>`,
  ];

  const titleY = 240;
  const titleLines = lines.map((line, i) => {
    const isLast = i === lines.length - 1;
    const fill = isLast && lines.length > 1 ? '#ff6b35' : 'white';
    return `<text x="80" y="${titleY + i * 65}" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="700" fill="${fill}">${escapeXml(line)}</text>`;
  }).join('\n  ');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${c1};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${c2};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${c3};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  ${patterns[patternType]}
  <rect x="40" y="40" width="${Math.min(category.length * 10 + 40, 250)}" height="32" rx="16" fill="rgba(255,106,0,0.15)" stroke="rgba(255,106,0,0.3)" stroke-width="1"/>
  <text x="${Math.min(category.length * 5 + 60, 165)}" y="62" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="#ff6b35" text-anchor="middle">${escapeXml(category)}</text>
  ${titleLines}
  <text x="600" y="580" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="rgba(255,255,255,0.5)" text-anchor="middle" letter-spacing="4">THE ANSWER ENGINE</text>
  <circle cx="1120" cy="590" r="30" fill="rgba(255,255,255,0.1)"/>
  <text x="1120" y="598" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="rgba(255,255,255,0.3)" text-anchor="middle">AE</text>
</svg>`;
}

function escapeXml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * Generate a hero image for a blog post using Gemini, with SVG fallback.
 */
export async function generateBlogHeroImage(
  title: string,
  category: string,
  slug: string,
): Promise<{ webpPath: string; svgFallback: string; webpBase64?: string }> {
  const svgFallback = generateBlogSvg(title, category, slug);

  try {
    // Dynamic import to avoid breaking builds when @google/genai isn't available
    const { generateHeroImage, saveHeroWebp } = await import('./gemini-image');
    const rawBuffer = await generateHeroImage(title, category, slug);
    const webpPath = await saveHeroWebp(rawBuffer, slug);
    const webpBase64 = rawBuffer.toString('base64');
    return { webpPath, svgFallback, webpBase64 };
  } catch (err) {
    console.warn(`[Hero] Gemini failed, using SVG fallback for "${slug}":`, err);
    return { webpPath: '', svgFallback };
  }
}

export async function runPipeline(topic: BlogTopic, existingTitles: string[] = [], existingSlugs: string[] = []): Promise<{
  research: ResearchOutput;
  code: string;
  audit: AuditResult;
  researchTokens: number;
  generationTokens: number;
  auditTokens: number;
}> {
  // Call 1: Research (pass existing titles/slugs to prevent duplicates)
  const { research, tokens: researchTokens } = await researchTopic(topic, existingTitles, existingSlugs);

  await delay(90000); // Rate limit buffer — 90s for OAuth token quota window

  // Call 2: Generate
  const { code, tokens: generationTokens } = await generateArticle(research);

  await delay(90000); // Rate limit buffer — 90s for OAuth token quota window

  // Call 3: Audit
  const { audit, tokens: auditTokens } = await auditArticle(code);

  return { research, code, audit, researchTokens, generationTokens, auditTokens };
}
