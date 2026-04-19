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
  - TODO: wire cron at `/api/cron/monthly-report` for 1st-of-month sends

- ✅ **Auto-submit sitemaps** (`scripts/submit-sitemaps.js` + `lib/gsc-api.ts::submitSitemap`)
  - All 7 client sitemaps submitted to GSC 2026-04-18
  - ClearClose `app/sitemap.ts` added to fill missing sitemap
  - TODO: wire into blog-publish flow so each new post triggers a submit

## Planned (priority order)

### Tier 1 — Compounds immediately

- 📋 **Page-2 Opportunity Queue → Content Engine** (~4h)
  - Weekly cron finds queries at position 11-20 with ≥10 impressions
  - Routes them into the blog topic queue as content briefs
  - Closes the GSC-data ↔ content-bot loop

- 📋 **Weekly "Wins & Misses" digest** (~3h)
  - Internal Telegram version: full picture (wins + losses + diagnosis) to Justin
  - Client-facing email: wins only + proactive "we spotted an opening" on losses
  - Rank gain/loss >3 positions = trigger

### Tier 2 — Proof/retention drivers

- 📋 **Branded search tracker** (~2h)
  - Weekly delta of `"{ClientName}"` searches
  - The metric that proves AEO authority work is translating to search demand
  - Gut-check first: run live check on existing clients before shipping client-facing

- 📋 **Onboarding baseline snapshot** (~1h)
  - Day-0 GSC state frozen for every new client
  - Before/after ammo for sales deck and QBRs

### Tier 3 — Surgical optimizations

- 📋 **CTR outlier detector** (~3h, pair with pillar clustering)
  - Pages in top-10 with below-expected CTR → queue title/meta rewrite tickets
  - Evolve into "Content Health Score" combining CTR × Position × Impressions momentum

- 📋 **Keyword cannibalization detector** (~3h)
  - Cross-reference query→page dimension over 28-day window
  - Flag 2+ pages competing for same query → merge/301 or differentiate

- 📋 **Query-to-pillar clustering** (~5h)
  - Group semantically-related queries into topic pillars
  - Auto-generate outlines for pillar content that ranks for dozens of queries

### Tier 4 — Revenue levers

- 📋 **Geographic expansion alert** (~2h)
  - Detect queries from cities the client doesn't serve
  - Triggers upsell opportunity (territory expansion = revenue, not just traffic)

- 📋 **Quarterly Business Review auto-deck** (~6h)
  - PDF with wins/misses/strategy/QoQ trend for each client
  - Retention glue — makes clients FEEL the $1k/mo

## Open Questions

- Vercel env — need `GSC_REFRESH_TOKEN` pushed once monthly cron goes live
- Telegram channel for internal wins/misses alerts — new bot or existing?
- QBR cadence — 90-day auto or aligned to contract anniversary?
