---
name: Blog Article Architecture and Audit History
description: Architecture patterns, known issues, and audit findings for theanswerengine.ai blog articles
type: project
---

## Blog Article Architecture

All blog articles follow a Server Component pattern with:
- `export const dynamic = 'force-static'` + `revalidate = 86400`
- JSON-LD schema injected via `dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}`
  (safe because data is never from user input — all hardcoded constants)
- Custom CSS class system: `ae-stats-grid`, `ae-stat-card`, `ae-cta-inline`, `ae-callout`, `ae-toc`, etc. (defined in globals.css)
- No React hooks — pure Server Components (correct for static content pages)
- SVG hero background patterns using numbered IDs (hero-grid-98 through hero-grid-102+)

## Audit 1 Findings (2026-03-30) — 5 New Articles

Articles audited:
1. how-to-optimize-your-google-business-profile-for-ai
2. how-to-create-content-that-chatgpt-actually-trusts
3. what-happens-when-you-ask-alexa-to-find-a-business
4. how-accountants-and-cpas-get-found-on-ai-search
5. why-ai-keeps-recommending-the-same-3-businesses

### Cross-Article Issues (apply to multiple files)

**DOMAIN INCONSISTENCY (article 2 only):**
- `how-to-create-content-that-chatgpt-actually-trusts` uses `https://www.theanswerengine.ai` (with www) throughout OG tags, Twitter tags, canonical, and all JSON-LD URLs. Every other article uses `https://theanswerengine.ai` (no www). This creates canonical confusion and potential duplicate-content risk in schema crawlers.

**SVG PATTERN IDs — ALL UNIQUE (no collision):**
- GBP article: `hero-grid-98`
- ChatGPT content article: `hero-grid-99`
- Alexa article: `hero-grid-100`
- Accountants article: `hero-grid-101`
- Same-3-businesses article: `hero-grid-102`
- No duplicates detected across these 5 articles. ✓

**INTERNAL LINK VALIDITY — CONFIRMED:**
- `/blog/make-your-site-the-one-ai-trusts` — EXISTS ✓
- `/blog/how-online-reviews-shape-ai-recommendations` — EXISTS ✓
- `/blog/directory-listings-that-help-ai-find-business` — EXISTS ✓
- `/blog/does-schema-markup-help-ai-search` — EXISTS ✓
- `/blog/why-fresh-content-key-ai-search-visibility` — EXISTS ✓
- `/blog/why-your-blog-not-getting-ai-citations` — EXISTS ✓
- `/blog/how-lawyers-get-found-ai-search` — EXISTS ✓
- `/blog/how-ai-platforms-choose-businesses-to-cite` — EXISTS ✓
- `/blog/hub-spoke-content-strategy-ai-citations` — EXISTS ✓
- `/blog/how-ai-picks-between-two-similar-businesses` — EXISTS ✓
- `/blog/how-siri-decides-which-businesses-to-suggest` — EXISTS ✓

### Per-Article Issues

**Article 1 (GBP):** `Breadcrumb` uses bare `<a>` tags instead of Next.js `<Link>`. Minor — no client-side navigation benefit.

**Article 2 (ChatGPT content):**
- www vs non-www domain inconsistency across ALL URLs (OG, Twitter, canonical, JSON-LD)
- metadata `title` field is plain title with no site suffix (other articles add `| AEO` or `| The Answer Engine`)
- JSON-LD FAQPage missing `@id` field (other articles include it)
- JSON-LD BreadcrumbList missing `@id` field
- Article schema missing `@id` field
- `modifiedTime` missing from OG metadata (other articles include it)
- `siteName` missing from OG metadata
- `authors` field missing from OG metadata (other articles include it)

**Article 3 (Alexa):**
- SVG uses no `viewBox` attribute — relies on `width="100%" height="100%"` inline which is fine for decorative background but not ideal for intrinsic sizing
- Inline `style={{ backgroundColor: '#0F1117', color: '#E5E7EB' }}` on `<main>` mixing Tailwind and inline styles (inconsistent with other articles)

**Article 4 (Accountants):**
- `<table>` used directly without wrapper div for comparison tables — risk of horizontal overflow on mobile without `overflow-x-auto` wrapper
- OG image missing `alt` attribute in the images array

**Article 5 (Same-3-businesses):**
- SVG uses no `viewBox` — same as article 3
- Same inline style mixing as article 3

**Why:** These issues reduce SEO authority consistency, can cause schema validation errors in Google's Rich Results Test, and the www inconsistency in article 2 is a real canonical risk.
