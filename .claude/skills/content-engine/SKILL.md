---
name: content-engine
description: "Generate 1-10 fully optimized AEO blog articles as Next.js page.tsx Server Components for theanswerengine.com. Triggers on requests to create blog content, run the content engine, or pump out articles. Default: 5 articles per run."
user-invocable: true
argument-hint: "[count] (default: 5)"
allowed-tools: Read, Write, Edit, Bash, Grep, Glob, WebSearch, WebFetch, Agent, TodoWrite
---

# The Content Engine

Generate $ARGUMENTS (default: 5) fully optimized AEO blog articles for theanswerengine.com.

## Content Protection Rule (MANDATORY)

**Never give away the secret sauce.** Every article must:
- **Tease the problem and hint at the solution** without giving a step-by-step implementation guide
- **Identify what matters** (e.g., "structured content beats volume") without teaching exactly HOW to do it
- **Create demand for our services** by showing the reader the gap between where they are and where they could be
- **End with a CTA** that drives them to /blindspot or contact

**What to include:** The "what" and "why" (principles, signals, patterns AI looks for, common mistakes, why it matters)
**What to NEVER include:** The "how" in detail (exact step counts, implementation frameworks, specific technical blueprints, schema code examples, linking architectures, cluster templates)

Hints are cool. Playbooks are not. If a competitor could read the article and replicate our client strategy, it gave away too much.

Think of it like a doctor explaining why you need surgery, not handing you a scalpel and a YouTube tutorial.

## Pre-Flight Checklist

Before generating ANY articles, execute these steps:

### 1. Load Existing Articles (Duplicate Prevention)
```
Read app/blog/blogPosts.json
```
Extract ALL existing titles and slugs into memory. **NEVER duplicate a title or slug.**

### 2. Load Topic Queue (if exists)
```
Read data/blog-topics.json
```
Pick queued topics first. If no queued topics remain, generate new ones.

### 3. Determine Count
- Parse `$ARGUMENTS` as integer. If not a valid number or empty, default to **5**
- Override with argument: `/content-engine 3` produces 3 articles
- Maximum: 10 per run (to avoid excessive context usage)
- **Category variety**: Avoid publishing all articles in the same category. Mix across How-To Guides, Platform Deep Dives, Myth Busters, Business Pain Points, and Comparisons.

## Article Generation Pipeline (Per Article)

### Step 1: Topic Research (Web Search)
- Use `WebSearch` to find current data, stats, and competitor content
- Search for what people ACTUALLY type into Google about this topic
- Find 5-8 FAQ questions real people ask
- Gather 3-5 stats with source URLs

### Step 2: Title Engineering (CRITICAL)
**Title Rules (zero tolerance):**
- Must be a **natural search query** (how someone would actually ask Google)
- Must be under **60 characters** for meta title
- **NEVER use AEO jargon** in titles. Nobody searches "answer engine optimization" or "AEO"
- Instead use phrases like: "how to get on ChatGPT", "why isn't AI recommending my business", "does schema markup help AI search"
- **NEVER repeat** any existing title from blogPosts.json
- **NEVER repeat** any existing slug
- Cross-check against the full existing title list before proceeding

**Good titles:**
- "How to Write Blog Content That Gets Cited by AI"
- "Does Schema Markup Help You Show Up on AI Search?"
- "Why Isn't ChatGPT Recommending My Business?"
- "How Does Perplexity AI Choose Which Businesses to Cite?"

**Bad titles (never do this):**
- "Answer Engine Optimization: Complete Guide" (AEO jargon)
- "AEO Strategies for Local Businesses" (nobody searches this)
- "Leveraging AI-Powered Search Visibility" (corporate speak)

### Step 3: Generate page.tsx (Server Component)

Generate a complete Next.js page.tsx following this EXACT structure:

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Title Here'
const description = 'Meta description under 160 chars'
const slug = 'url-friendly-slug'
const publishDate = 'YYYY-MM-DD'

export const metadata: Metadata = {
  title,
  description,
  keywords: [...],
  openGraph: {
    title, description, type: 'article',
    publishedTime: publishDate,
    authors: ['The Answer Engine Team'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.svg`, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`https://theanswerengine.ai/blog/${slug}.svg`] },
  alternates: { canonical: `https://theanswerengine.ai/blog/${slug}` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: title, description, image: `...svg`, datePublished, dateModified, author: { '@type': 'Organization', name: 'The Answer Engine', url: 'https://theanswerengine.ai' }, publisher: { '@type': 'Organization', ... }, mainEntityOfPage: { '@type': 'WebPage', '@id': `...` } },
    { '@type': 'FAQPage', mainEntity: [...faqItems] },
    { '@type': 'BreadcrumbList', itemListElement: [...] },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Breadcrumb */}
      {/* Hero with inline SVG pattern */}
      {/* Article body */}
      {/* FAQ section */}
      {/* CTA to /blindspot */}
      {/* Author attribution */}
    </>
  )
}
```

**Brand Rules:**
- Background: `#0F1117`
- Accent: `#FF6A00` (orange, use sparingly)
- Font: `font-plus-jakarta` for headings (loaded globally)
- Layout: `max-w-4xl mx-auto px-6 py-20`
- Dark theme throughout: white/gray-300 text on dark bg
- ZERO em-dashes (use colons, commas, periods)
- ZERO inline event handlers (no onClick, onMouseOver). Use Tailwind `hover:` / `focus:` classes.
- This is a **Server Component** (no 'use client', no useState, no useEffect)
- 1500-2500 words target
- At least 5 FAQ Q&As
- CTA links to `/blindspot`
- Author: "The Answer Engine Team"
- **PROTECT THE SAUCE**: Teach the "what" and "why", never the exact "how". No step-by-step implementation guides, no framework blueprints, no code examples. Hint at the solution, create demand for our services.
- **Internal linking**: Each article should link to 2-3 related existing articles from blogPosts.json where relevant in the body text. Use `<Link href="/blog/{slug}">` for these.

### Step 4: Generate SVG Hero Image

Create a 1200x630 SVG with:
- Dark gradient background (`#1a1a2e` to `#0f3460` range)
- Orange accent geometric patterns (`rgba(255,106,0,...)`)
- Title text (white, last line in orange)
- Category pill at top
- "THE ANSWER ENGINE" watermark at bottom
- "AE" logo circle bottom-right

Save to: `public/blog/{slug}.svg`

Reference implementation: `lib/blog-bot.ts:generateBlogSvg()` (line ~261). Read that function and replicate its pattern.

Use `next/link` `Link` component for all internal links (`/blog`, `/blindspot`, `/`). Use `<a href>` only for external URLs.

### Step 5: Quality Audit

Run these checks on EVERY article (fail = fix and re-check):

| Check | Rule | Auto-fail? |
|-------|------|-----------|
| Em-dashes | Zero `\u2014` or `--` anywhere | YES |
| Event handlers | Zero `onClick`, `onMouseOver`, `onChange`, etc. | YES |
| Title length | Under 60 chars | YES |
| Title uniqueness | Not in existing blogPosts.json | YES |
| Slug uniqueness | Not in existing blogPosts.json | YES |
| Schema present | `@graph` with Article + FAQPage + BreadcrumbList | YES |
| FAQ count | At least 5 Q&As | YES |
| CTA present | Link to `/blindspot` | YES |
| ISR config | `revalidate = 86400` + `dynamic = 'force-static'` + `dynamicParams = true` | YES |
| No 'use client' | Server Component only | YES |
| Sauce protected | No step-by-step implementation guides or blueprints | YES |
| Meta description | Under 160 chars | WARN |
| Word count | 1500-2500 words | WARN |

If any auto-fail check fails, fix the article and re-audit before proceeding.

### Step 6: Update blogPosts.json

Calculate `next_id` as: highest existing `id` in blogPosts.json + 1 (increment per article).

Add entry for each article:
```json
{
  "id": <next_id>,
  "title": "...",
  "slug": "...",
  "excerpt": "...",
  "category": "...",
  "author": "The Answer Engine Team",
  "readTime": "X min",
  "image": "/blog/{slug}.svg",
  "publishDate": "YYYY-MM-DD",
  "lastModified": "YYYY-MM-DD",
  "featured": true,
  "tags": [...]
}
```

### Step 7: Update blog-topics.json (if topic was queued)

Mark topic status as `"published"` with `publishedAt` timestamp.

**Note:** `data/blog-topics.json` is gitignored. It will not be included in the git commit. This is expected.

## Post-Generation

After ALL articles are generated:

1. **Git commit**: `git add` all new files + updated blogPosts.json, commit with message: `blog: add {count} articles ({short titles})`
2. **Git push**: `git push origin main` to deploy to Vercel
3. **Summary report**: Print a table showing:
   - Article # | Title | Slug | Category | Audit Score
   - Total cost estimate (~$0.13/article via API, $0 via Claude Code)

## Cost Reference
- Via blog-bot.ts API pipeline: ~$0.13/article (Haiku research $0.003 + Sonnet generation $0.12 + Haiku audit $0.002)
- Via this Claude Code skill: $0 additional (included in Claude Code subscription)
- 5 articles/day = ~$0.65/day via API, $0 via skill

## Topic Generation

When no queued topics remain in blog-topics.json, generate new ones. Good topic categories:
- **How-To Guides**: "How do I...", "Can I...", "What's the best way to..."
- **Platform Deep Dives**: How specific AI platforms work (ChatGPT, Claude, Perplexity, Google AI)
- **Myth Busters**: "Does X actually help with AI search?"
- **Business Pain Points**: "Why isn't...", "Why did my..."
- **Comparisons**: "X vs Y for getting found on AI"

Always phrase as **natural search queries** a business owner would type into Google.
