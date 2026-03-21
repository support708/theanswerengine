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
- 2000-3500 words target (Championship articles are longer)
- At least 5 FAQ Q&As

**Championship Format Rules (MANDATORY):**
Every article MUST include at minimum:
- **15+ CTA touchpoints** (mix of ae-cta-block, ae-cta-inline, ae-final-cta, tel/email links)
- **30+ visual components** (stats grids, callouts, comparison tables, etc.)
- **Stats grid near the top** with 4 topic-relevant metrics
- **Inline CTAs every 2-3 sections** (small contextual prompts)
- **At least 2 callout boxes** (ae-callout-info, ae-callout-warning, ae-callout-success, ae-callout-orange)
- **At least 1 comparison table or decision matrix** relevant to the topic
- **At least 1 pros/cons section**
- **Cheat sheet or key takeaway box** near the bottom
- **Author card** before the FAQ section
- **Final CTA with pulse glow animation** at the very end

**Championship CSS Classes (defined in globals.css):**
Use these CSS classes directly in JSX. All classes are prefixed with `ae-` to avoid conflicts.

| Component | Usage | JSX Pattern |
|-----------|-------|-------------|
| Stats Grid | `<div className="ae-stats-grid">` with `<div className="ae-stat-card">` children | 4 cards with ae-stat-emoji, ae-stat-value, ae-stat-label |
| Callout | `<div className="ae-callout ae-callout-info">` | ae-callout-title + p |
| Comparison Table | `<table className="ae-comparison-table">` | thead/tbody with standard td/th |
| Decision Matrix | `<div className="ae-decision-matrix">` | ae-decision-row with ae-decision-if, ae-decision-arrow, ae-decision-then |
| Pros/Cons | `<div className="ae-pros-cons">` | ae-pros-box + ae-cons-box with ul/li |
| Cheat Sheet | `<div className="ae-cheat-sheet">` | ae-cheat-sheet-title + table |
| Dollar Compare | `<div className="ae-dollar-compare">` | ae-dollar-item with ae-dollar-label, ae-dollar-price |
| Tier Badge | `<span className="ae-tier-badge ae-tier-premium">` | Inline badge |
| Bar Group | `<div className="ae-bar-group">` | ae-bar-item with ae-bar-label, ae-bar-track, ae-bar-fill, ae-bar-value |
| CTA Block | `<div className="ae-cta-block">` | h3 + p + ae-cta-primary link |
| CTA Inline | `<div className="ae-cta-inline">` | p + link |
| Final CTA | `<div className="ae-final-cta">` | h2 + p + ae-cta-primary |
| Author Card | `<div className="ae-author-card">` | ae-author-avatar + name/role |
| TOC | `<div className="ae-toc">` | ae-toc-title + ol/li with links |
| Timeline | `<div className="ae-timeline">` | ae-timeline-item with step/title/desc |
| Quote | `<div className="ae-quote">` | p + cite |
| Takeaway | `<div className="ae-takeaway">` | ae-takeaway-title + p |
| Section Label | `<span className="ae-section-label">` | Inline pill badge |

**CTA Placement Guide:**
1. After intro paragraph: ae-cta-inline (contextual)
2. After every 2-3 content sections: ae-cta-inline or ae-cta-block
3. Before FAQ section: ae-cta-block (full 3-tier with phone/email)
4. After FAQ: ae-final-cta with pulse glow
5. Tel/sms links scattered in callouts and inline CTAs
- **3-tier CTA block** (MANDATORY in every article, placed before the FAQ section):
  ```tsx
  <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20">
    <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">{CTA heading}</h3>
    <p className="text-gray-400 mb-6">{CTA description mentioning Blind Spot Report}</p>
    <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#FF6A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors">
      Get Your Free Blind Spot Report
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    </Link>
    <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
      <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        (213) 444-2229
      </a>
      <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        support@theanswerengine.ai
      </a>
    </div>
  </div>
  ```
  Vary the h3 heading and description per article. Always include all 3 tiers: Blind Spot button + phone + email.
- Author: "The Answer Engine Team"
- **PROTECT THE SAUCE**: Teach the "what" and "why", never the exact "how". No step-by-step implementation guides, no framework blueprints, no code examples. Hint at the solution, create demand for our services.
- **Internal linking**: Each article should link to 2-3 related existing articles from blogPosts.json where relevant in the body text. Use `<Link href="/blog/{slug}">` for these.

### Step 4: Generate Premium SVG Hero Image

Create a **premium dashboard-style** 1200x630 SVG. NOT a basic text-on-gradient. Every SVG has a **right-panel data visualization** that tells a visual story specific to the article.

Save to: `public/blog/{slug}.svg`

**Read `public/blog/how-to-track-ai-search-visibility.svg` as the gold-standard reference before generating.** Match its quality, contrast, and density.

#### Layout (fixed for every SVG)

- **Left side** (x=40-600): Category pill, 3-line title (last line `#FF6A00` with glow filter), subtitle
- **Right panel** (translate 660,45): 470x470 rounded rect with dashboard content inside
- **Footer**: "THE ANSWER ENGINE" centered, "AE" circle bottom-right
- **Background**: Dark gradient through `#0F1117` midpoint + 7 subtle grid lines at 0.05 opacity

#### Right Panel Content (pick best match for article topic)

| Type | Use for | Elements |
|------|---------|----------|
| Metric Cards + Chart | Results, growth, ROI | 3 cards (font-size 24 numbers), line/bar chart, insight box |
| Comparison Table | "vs" articles | Column headers, 4-6 rows with check/X, bar comparison, verdict |
| Step Checklist | How-to guides | 4-5 numbered cards with colored borders, CRITICAL badge, stats |
| Scoring Dashboard | Platform deep dives | Central score (font-size 28), 5 signal bars, checklist |
| Browser Mockup | Website/crawl topics | Chrome dots, URL bar, content sections with read/skip indicators |
| Data Pipeline | Technical AI topics | Connected nodes, source-to-output flow, priority ranking |

#### Contrast Rules (CRITICAL for thumbnail readability at 370px)

| Element | Value |
|---------|-------|
| Hero numbers | `fill="#FF6A00"` + `filter="url(#glow{ID})"`, font-size 24 |
| Secondary numbers | `fill="white"`, font-size 24 |
| Card labels | font-size 9, color at 0.9 opacity |
| Chart bars | 0.5 opacity (green=`100,220,100`, red=`255,80,80`, orange=`255,106,0`) |
| Positive text | `rgba(100,220,100,0.9)` |
| Negative text | `rgba(255,80,80,0.85)` |
| Card backgrounds | `rgba(color, 0.06-0.08)` |
| Card strokes | stroke-width 1.5, color at 0.4-0.5 |
| Primary card | `stroke="#FF6A00"` + glow filter + `stroke-opacity="0.6"` |
| Panel fill/stroke | `rgba(255,255,255, 0.06)` / `rgba(255,255,255, 0.12)` |
| Body text | `rgba(255,255,255, 0.8)` |
| Labels | `rgba(255,255,255, 0.5)` |
| Insight box | `rgba(255,106,0,0.08)` fill + `stroke="#FF6A00"` at 0.5 opacity |

#### Color palette: `#FF6A00` (brand), `rgba(100,220,100)` (success), `rgba(255,80,80)` (error), `rgba(100,150,255)` (info), `rgba(255,200,50)` (warning), `rgba(200,150,255)` (accent)

#### Gradient variation: Vary corner tints per article (`#0d2e3b`, `#1a1b4e`, `#0d3b1a`, `#3b0d0d`, `#3b1a0d`, `#1a0d3b`, `#2e0d1a`). Always `#0F1117` at 50% stop.

#### Unique IDs: All gradient/filter IDs must be unique per SVG (use 3-4 letter slug abbreviation, e.g. `bgHTAI`, `glowHTAI`). Prevents conflicts on blog listing page.

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
