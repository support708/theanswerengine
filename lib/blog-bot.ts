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
- Use web_search to find current data, stats, and competitor content
- Every stat MUST have a source URL
- Focus on what makes content get cited by AI platforms (ChatGPT, Claude, Perplexity, Google AI Overviews)
- Target audience: local service business owners (plumbers, lawyers, dentists, roofers, etc.)
- Tone: authoritative but accessible, no jargon without explanation
- Find 5-8 FAQ questions real people ask about this topic

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

BRAND RULES:
- Dark theme: background #0F1117, text white/gray-300
- Accent: #FF6A00 (orange) - use sparingly for highlights and CTAs
- Font: Plus Jakarta Sans for headings (via className, already loaded globally)
- Layout: max-w-4xl mx-auto px-6 py-20

CONTENT RULES:
- ZERO em-dashes (--) anywhere. Use colons, commas, or periods instead.
- ZERO fabricated stats. Only use stats provided in the research brief.
- Every claim must be supportable by the research provided.
- Write for local service business owners, not marketers.
- Conversational but authoritative tone.
- Include practical, actionable advice.
- 1500-2500 words target.
- ZERO inline event handlers (no onClick, onMouseOver, onMouseOut, onChange, onFocus, onBlur). This is a Server Component. Use Tailwind hover:/focus: classes instead (e.g. hover:bg-orange-600).

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

HERO SECTION TEMPLATE (customize colors/pattern per article):
<div className="relative overflow-hidden rounded-2xl mb-12" style={{background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'}}>
  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 400" fill="none">
    {/* Unique geometric pattern - vary per article */}
    <circle cx="200" cy="200" r="150" stroke="#FF6A00" strokeWidth="0.5" />
    <circle cx="200" cy="200" r="100" stroke="#FF6A00" strokeWidth="0.5" />
    <line x1="0" y1="200" x2="800" y2="200" stroke="#FF6A00" strokeWidth="0.3" />
  </svg>
  <div className="relative px-8 py-16 sm:px-12 sm:py-20">
    <p className="text-sm font-medium text-orange-400 mb-4">{category}</p>
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">{title}</h1>
    <div className="flex items-center gap-4 text-sm text-gray-400">
      <span>{date}</span>
      <span>-</span>
      <span>{readTime} read</span>
    </div>
  </div>
</div>

CTA SECTION TEMPLATE:
<div className="mt-16 p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
  <h2 className="text-2xl font-bold text-white mb-4">Find Out If AI Platforms Can See Your Business</h2>
  <p className="text-gray-300 mb-6">Get a free AI visibility check. No pitch, just the data.</p>
  <a href="/blindspot" className="inline-block bg-[#FF6A00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
    Get Your Free Blind Spot Report
  </a>
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
- Brand Compliance (15 pts): Correct colors (#0F1117, #FF6A00), dark theme, proper layout
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

export async function researchTopic(topic: BlogTopic): Promise<{ research: ResearchOutput; tokens: number }> {
  const response = await callClaudeWithWebSearch({
    model: HAIKU,
    system: RESEARCH_SYSTEM,
    messages: [{
      role: 'user',
      content: `Research the topic: "${topic.title}"
Target keyword: "${topic.targetKeyword}"
Category: ${topic.category}
Pillar: ${topic.pillar}

Find current stats, competitor gaps, and FAQs. Return structured JSON.`,
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

export async function runPipeline(topic: BlogTopic): Promise<{
  research: ResearchOutput;
  code: string;
  audit: AuditResult;
  researchTokens: number;
  generationTokens: number;
  auditTokens: number;
}> {
  // Call 1: Research
  const { research, tokens: researchTokens } = await researchTopic(topic);

  await delay(15000); // Rate limit buffer

  // Call 2: Generate
  const { code, tokens: generationTokens } = await generateArticle(research);

  await delay(15000); // Rate limit buffer

  // Call 3: Audit
  const { audit, tokens: auditTokens } = await auditArticle(code);

  return { research, code, audit, researchTokens, generationTokens, auditTokens };
}
