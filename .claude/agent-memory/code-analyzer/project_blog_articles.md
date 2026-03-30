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

## Audit 1 Findings (2026-03-30) — 5 New Articles (Cycle 1)

Articles audited:
1. how-to-optimize-your-google-business-profile-for-ai
2. how-to-create-content-that-chatgpt-actually-trusts
3. what-happens-when-you-ask-alexa-to-find-a-business
4. how-accountants-and-cpas-get-found-on-ai-search
5. why-ai-keeps-recommending-the-same-3-businesses

### Resolved Items (verified fixed in Cycle 2 re-audit)
- **www domain inconsistency in article 2** — RESOLVED. All URLs now use `https://theanswerengine.ai` (no www). Previous memory was stale.

### Cross-Article Issues (apply to multiple files)

**STATIC EXPORT CONFIG CONFLICT (all 5 articles):**
- `export const dynamicParams = true` combined with `export const dynamic = 'force-static'` is contradictory.
  `dynamicParams = true` only has meaning for dynamic segments ([param] routes). These are leaf pages with no params — the flag is meaningless noise but could confuse the Next.js build optimizer.
  Verdict: Non-blocking, but should be removed for clean config.

**TABLE ACCESSIBILITY — ALL 5 ARTICLES:**
- Every `<table>` across all 5 files is missing a `<caption>` element or `aria-label` on the wrapping element.
- Screen readers announce tables without captions as anonymous tables, destroying the navigability of the comparison data.
- Affects: all comparison tables, decision matrices, cheat sheets using `<table>`.

**`dynamicParams = true` IS A NON-ISSUE ON 82 OTHER ARTICLES TOO:**
- This pattern is used on 82+ articles site-wide — treat as a low-priority style issue, not a bug.

**BREADCRUMB A11Y — ARTICLES 2 AND 4:**
- Article 2 (`how-to-create-content-that-chatgpt-actually-trusts`): `Breadcrumb` component has no `aria-label` on the `<nav>` element. Screen readers cannot distinguish this breadcrumb from other `<nav>` landmarks.
- Article 4 (`how-accountants-and-cpas-get-found-on-ai-search`): `<nav>` for breadcrumb has no `aria-label`. Uses `<Link>` correctly but the nav is unlabeled.
- Articles 1, 3, 5: breadcrumb `<nav>` has `aria-label="Breadcrumb"` — correct.

**JSON-LD SCHEMA INCONSISTENCY ACROSS ARTICLES:**
- Articles 1, 4: Use `schemaData` / `jsonLd` as a module-level variable injected via a `<ComprehensiveSchema>` component or directly in JSX.
- Articles 2, 3, 5: Use module-level `const jsonLd` injected directly. No functional difference.
- Article 1 `ComprehensiveSchema` component wraps schema in a functional component with no props and returns only the `<script>` tag — unnecessary abstraction but not a bug.

**SVG PATTERN IDs — ALL UNIQUE (no collision):**
- GBP article: `hero-grid-98`, ChatGPT content article: `hero-grid-99`, Alexa article: `hero-grid-100`, Accountants article: `hero-grid-101`, Same-3-businesses article: `hero-grid-102`. No duplicates. ✓

**INTERNAL LINK VALIDITY — ALL CONFIRMED EXIST. ✓**

### Per-Article Issues

**Article 1 (GBP):**
- `Breadcrumb` uses bare `<a>` tags internally — not Next.js `<Link>`. Minor: loses prefetch/client-side nav. The breadcrumb `<nav>` has `aria-label="Breadcrumb"` — correct.
- `<article>` tag wraps the prose body correctly.
- No `<caption>` on the review comparison table.

**Article 2 (ChatGPT content):**
- `Breadcrumb` nav has NO `aria-label`.
- `<main>` wrapper present. `<article>` tag present.
- `<table>` in decision matrix has no `<caption>`.
- No `modifiedTime` in OG metadata (minor omission).
- `siteName` missing from OG metadata.

**Article 3 (Alexa):**
- `<nav aria-label="Table of Contents">` — correct a11y for TOC.
- `Breadcrumb` nav has `aria-label="Breadcrumb"` — correct.
- All comparison tables lack `<caption>`.
- Inline styles on `<main>` (style prop) mixed with Tailwind — inconsistent pattern vs other articles.

**Article 4 (Accountants):**
- Breadcrumb `<nav>` has NO `aria-label`.
- Multiple `<table>` elements (4 total) without `<caption>`.
- Two `<table>` elements have no `overflow-x-auto` wrapper — mobile overflow risk.
- OG `images` array item missing `alt` field.

**Article 5 (Same-3-businesses):**
- Breadcrumb `<nav>` has `aria-label="Breadcrumb"` — correct.
- `<nav aria-label="Table of Contents">` — correct.
- All tables lack `<caption>`.
- Inline styles on `<main>` mixed with Tailwind — same as article 3.

### Severity Summary
- AUTO-FAIL: None detected. No XSS risk (JSON.stringify on hardcoded objects), no user input in schema, no client-side secrets.
- HIGH: Table accessibility (missing captions) — affects all screen reader users navigating comparison content.
- MEDIUM: Breadcrumb `aria-label` missing on articles 2 and 4.
- LOW: `dynamicParams = true` noise, inline style inconsistency, missing OG fields on article 4.
- BUILD READINESS: All 5 articles are static Server Components with no hooks, no client boundaries, no TypeScript errors visible from static analysis. Ready to build.
