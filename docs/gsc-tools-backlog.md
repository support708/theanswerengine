# GSC-Powered Tools Backlog

Prioritized build list for turning Google Search Console data into $1k/mo-worthy client deliverables.

## 🛡️ BRAND SAFETY LAYER (non-negotiable)

**Every client-facing output from every tool below must pass these gates before sending.**

1. **No negative framing.** Never surface a metric to a client unless it can be framed as (a) a win, or (b) an opportunity we're already solving. Raw losses, declines, or "you're not performing" language are PROHIBITED.
2. **Reframe losses as agency action.** A rank drop becomes "we spotted an opening and are deploying X." A low-CTR page becomes "optimization target identified, rewrite in queue."
3. **Auto-gate on all-negative reports.** If every metric in a digest is negative, HOLD THE SEND and route to Justin for manual framing — don't let the system auto-ship a bleak report.
4. **Always include one forward-looking line.** Every client-facing email ends with "here's what's coming next" / "this is what we're working on."
5. **Seasonality/context footnotes.** If numbers are down, auto-attach context (seasonal, content maturation window, algorithm update, etc.) so the decline isn't attributed to agency failure.
6. **Two-track architecture.**
   - **Internal (Justin/Telegram):** full picture — wins, losses, raw data, diagnosis
   - **Client (email):** curated for brand, always wins-forward, losses reframed as proactive work
7. **No raw dashboard links.** Never link clients to Search Console/Analytics directly where they'd see the raw decline. Always show them interpreted/curated numbers.

**Implementation:** every new tool gets a `passesBrandSafety()` check before `sendGmailMessage()` fires. Justin-facing builds skip the check.

## 🧠 INTERPRETATION LAYER (non-negotiable)

**Every report, digest, or data output must interpret — never just present raw numbers.**

1. **Always read the client's goals first.** Load `data/client-profiles/{slug}.json` → `goals` field. Every recommendation ties back to one of those stated goals.
2. **Narrative interpretation, not a dashboard.** Clients don't pay $1k/mo for a GSC screenshot — they pay for "here's what this means for your business, and here's what we're doing about it."
3. **Top 3 next-steps per client, always.** Every client-facing output includes "What we're doing next" — three concrete actions, each tied to a goal.
4. **Flag when a conversation is needed.** If data shows something requiring strategic decision (pivot, pause, expand), escalate to "Justin needs to call this client."
5. **Prerequisite: every client profile needs a `goals` field.** Onboarding must capture: (a) primary business goal, (b) KPI they measure, (c) what "success at 90 days" looks like.

## Reusable prompt template — ad-hoc client analysis

> **"For {CLIENT}, generate next-step recommendations:**
> - **Pull:** their stated goals from `data/client-profiles/{slug}.json`, last 30/90-day GSC data, and recent work we've shipped (blog posts, Reddit digests, sitemap submissions).
> - **Interpret:** what's trending up/down/flat? What does each movement mean *for their stated goals* (not generic AEO)?
> - **Recommend:** top 3 next-actions we should take, each mapped to a specific goal.
> - **Flag:** anything requiring Justin to have a strategic conversation with the client.
>
> **Output format:**
> 1. 2-sentence narrative interpretation (no raw numbers dumps)
> 2. 3 bulleted next-actions with rationale tied to goal
> 3. Conversation flag if applicable"

## Status Legend
- ✅ Shipped (may need retrofit for Brand Safety)
- 🔨 In progress
- 📋 Planned

## Shipped

- ✅ **Monthly AEO Intelligence Report** (`lib/gsc-monthly-report.ts` + `scripts/test-monthly-report.js`)
  - Impressions/clicks/CTR/position with MoM deltas, top 10 queries, top 5 pages, page-2 opportunity queue
  - Preview draft tested for all 7 clients 2026-04-18

- ✅ **Monthly AEO Report cron** (`app/api/cron/monthly-report/route.ts`) — shipped 2026-04-19
  - Fires 1st of month at 7am PT (15:00 UTC `0 15 1 * *`), builds reports for prior completed month
  - Draft-only: creates Gmail draft per client addressed to Justin; no auto-send
  - Telegram summary per run. Query overrides: `?month=YYYY-MM`, `?slug=<slug>`

- ✅ **Auto-submit sitemaps** (`scripts/submit-sitemaps.js` + `lib/gsc-api.ts::submitSitemap` + `lib/sitemap-auto-submit.ts`) — shipped 2026-04-19
  - All 7 client sitemaps submitted to GSC 2026-04-18
  - ClearClose `app/sitemap.ts` added to fill missing sitemap
  - `autoSubmitTae()` hook wired into `publishStagedArticles()` — every TAE blog batch publish triggers a sitemap submit
  - Manual Content Engine path: `node scripts/submit-sitemaps.js sc-domain:theanswerengine.ai` after push

- ✅ **Top-Performer Conversion Audit** (`lib/gsc-top-performer-audit.ts` + `scripts/audit-top-performers.ts`) — shipped 2026-04-19
  - Pulls top 10 pages by clicks (last 28d) per client, fetches each page, parses H1/meta/primary CTA
  - Claude Haiku 4.5 scores alignment vs client's stated goal + produces rewrite brief (new H1, new CTA, supporting element)
  - Two drafts per client: Justin-facing (raw truth) + client-facing curated preview gated by `checkBrandSafety()`
  - LAMH Safety Protocol: surface-only, no LLM briefs, never client-facing
  - Verified live on Lovery — consistent finding: Subscribe overrides Valuation CTA site-wide

- ✅ **Page-2 Opportunity Queue** (`lib/gsc-page2-opportunities.ts` + `app/api/cron/page2-opportunities/route.ts` + `scripts/test-page2-opportunities.ts`) — shipped 2026-04-19
  - Weekly cron Monday 9am PT (17:00 UTC `0 17 * * 1`)
  - For every client, filters queries at position 11-20 with ≥10 impressions, dedupes against prior store entries (tracks timesSeen), persists to `data/gsc-page2-opportunities.json` via GitHub REST
  - Telegram digest with top 10 new opportunities. Live verification: 14 opportunities across 4 clients

- ✅ **Weekly Wins & Misses digest** (`lib/gsc-wins-misses.ts` + `app/api/cron/wins-misses/route.ts`) — shipped 2026-04-19
  - Weekly cron Monday 10am PT (18:00 UTC `0 18 * * 1`)
  - Two-track: Telegram raw for Justin, Gmail DRAFT wins-forward for clients (Brand Safety gated; blocks all-negative weeks, banned phrases, LAMH)
  - Rank thresholds: >3 position change = win/miss

- ✅ **Branded search tracker** (`lib/gsc-branded-search.ts` + `app/api/cron/branded-search/route.ts` + `scripts/test-branded-search.ts`) — shipped 2026-04-19
  - Weekly cron Monday 11am PT (19:00 UTC `0 19 * * 1`) — INTERNAL-ONLY by default
  - 4-week trend per client with BRAND_TOKENS dictionary; verdict = rising / stable / falling / no-data
  - Gut-check 2026-04-19: only Davis Agency passed client-facing gate — kept internal-only until data matures + email outreach audit
  - Override `?mode=with-drafts` when ready

- ✅ **Onboarding baseline snapshot** (`lib/gsc-onboarding-baseline.ts` + `scripts/capture-baseline.ts` + `data/gsc-baselines.json`) — shipped 2026-04-19
  - Day-0 snapshots captured for all 7 clients
  - `captureSnapshot` / `mergeSnapshot` / `deltaVsBaseline` — additional_snapshots append for trend lines
  - Before/after ammo for every future case study + QBR

- ✅ **CTR outlier detector + Keyword cannibalization** (`lib/gsc-ctr-outliers.ts` + `lib/gsc-cannibalization.ts` + `scripts/audit-surgical.ts`) — shipped 2026-04-19
  - Combined CLI creates one Gmail draft to Justin per client with both findings
  - CTR: flags top-10 pages/queries with CTR <60% of expected; sorts by missed-clicks estimate
  - Cannibalization: query+page dimension, high/medium/low severity
  - Live verification (RPM): 12 page outliers + 19 query outliers + 17 cannibalization cases (7 high severity)

- ✅ **Geographic expansion alert** (`lib/gsc-geographic-expansion.ts` + `scripts/audit-geo-expansion.ts`) — shipped 2026-04-19
  - Detects queries mentioning cities NOT in `profile.service_area.cities`
  - KNOWN_CITIES dictionary (CA + TX focus); empty servedCities returns empty (prevents false positives on LAMH)
  - Live verification: Davis Agency Georgetown TX = strongest signal (115 impr, 6 queries)

- ✅ **Query-to-pillar clustering** (`lib/gsc-pillar-clustering.ts` + `scripts/audit-pillars.ts`) — shipped 2026-04-19
  - Lightweight shared-token connected-components clustering (no embeddings)
  - Claude Haiku 4.5 names each cluster + proposes 5-8 H2 pillar outline
  - Live verification (RPM): 3 clusters, top one = 125 queries / 9,624 impressions

- ✅ **Quarterly Business Review auto-deck** (`lib/gsc-qbr.ts` + `scripts/generate-qbr.ts`) — shipped 2026-04-19
  - Uses day-0 baseline vs current snapshot to compute QoQ deltas
  - Standalone HTML saved to `data/qbr/{slug}-{date}.html` (browser / print-to-PDF)
  - Gmail DRAFT variant for client-facing review (Brand Safety gated)
  - Top 3 pillar opportunities + 3 forward-looking next-quarter actions tied to client goal

## Open Questions

- Vercel env — need `GSC_REFRESH_TOKEN` pushed once cron routes go live on production
- Telegram channel for internal wins/misses alerts — new bot or existing?
- QBR cadence — 90-day auto or aligned to contract anniversary?
- Full email outreach audit (pending Justin) before flipping client-facing sends on any cron
