# TAE Website Audit — 2026-04-18

**Scope:** theanswerengine.ai (public-facing pages)
**Source:** Direct file reads (`app/`) + live GSC data (28-day window, 2026-03-19 → 2026-04-16)
**Primary goal (from `data/client-profiles/the-answer-engine.json`):** new TAE agency client acquisition
**Secondary goals:** territory-check form fills, blind-spot report requests
**Brand/Safety rules applied:** no LAMH public reference as crown jewel, no banned jargon, no fabricated metrics

---

## 1. Current Site Inventory

### 1.1 Top-level public pages crawled
| Route | File | Role |
|---|---|---|
| `/` | [app/page.tsx](../app/page.tsx) | Homepage (hero, 3 steps, citation proof, territory map, guarantee, FAQ, territory form) |
| `/about` | [app/about/page.tsx](../app/about/page.tsx) | Founder story + AERO-10 pillars + timeline + differentiators |
| `/contact` | [app/contact/page.tsx](../app/contact/page.tsx) | Contact cards, strategy-call CTA, 3 FAQs |
| `/services` | [app/services/page.tsx](../app/services/page.tsx) | Answer Authority Foundation package (6 bullets), AEO vs SEO table, 5 FAQs |
| `/territory-check` | [app/territory-check/page.tsx](../app/territory-check/page.tsx) | Form + territory grid ("23 territories claimed this month") |
| `/case-studies` | [app/case-studies/page.tsx](../app/case-studies/page.tsx) | 6 fabricated case studies (Plumbing Phoenix, HVAC Austin, RE Denver, Dental Miami, PI Law LA, Roofing Dallas) + KPI bar + Borges deep-dive |
| `/blindspot` | [app/blindspot/page.tsx](../app/blindspot/page.tsx) | Free Blind Spot Report funnel (Calendly CTA) |
| `/blog` | [app/blog/](../app/blog) | 150+ blog articles (main indexed asset) |
| `/privacy`, `/terms` | [app/privacy/page.tsx](../app/privacy/page.tsx), [app/terms/page.tsx](../app/terms/page.tsx) | Legal boilerplate |

### 1.2 Global nav + footer
Nav: HOME · ABOUT · BLOG · CONTACT · "GET STARTED" (→ `#contact`)
Footer: PRIVACY · TERMS · ABOUT · BLOG
Global `#contact` block appended by [app/layout.tsx](../app/layout.tsx): (213) 444-2229 · support@theanswerengine.ai · M–F 9–6 PT · "FREE 30-MINUTE STRATEGY CALL" with 3 bullets + Schedule/Email buttons.

### 1.3 Global CTA anchors (what the site asks visitors to do)
1. `#territory-check` — homepage form, Formspree `xqagkqwl` (industry / city / email)
2. `tel:+12134442229` — phone direct
3. `mailto:support@theanswerengine.ai`
4. `https://calendly.com/theanswerengine-support/30min` — only on `/blindspot`
5. `/contact` — from `/territory-check` bottom CTA

### 1.4 Schema / structured data currently present
- `Organization` + `WebSite` (layout)
- `ProfessionalService`, `FAQPage`, `HowTo`, `WebPage` w/ Speakable (homepage)
- `AboutPage` + `Organization` (about)
- `ContactPage`, `ProfessionalService`, `BreadcrumbList` (contact)
- `CollectionPage`, `BreadcrumbList` (case-studies)
- `FAQPage` (blindspot)

### 1.5 Current exact copy (headline + tagline per page)

**Homepage (`/`):**
- Chip: "Answer Engine Optimization // AI Citations"
- H1: "THE END OF TRADITIONAL SEO"
- Subhead: "We optimize local businesses to be cited by ChatGPT, Google AI, Claude, and Perplexity. One business per category, per city. 90-day citation guarantee."
- Hero stats: `8,400+` Monthly Clicks · `100%` AI Citation Rate · `90-Day` Guarantee
- Authority Velocity card: `98% Authority` · `+244% Index Rate` · `14ms Latency`
- Section 2 H2: "THE THREE STEPS TO DOMINANCE"
- Steps: 01 AI Visibility Audit · 02 Authority Content Build · 03 Citation Monitoring
- Interstitial: "AUDIT. OPTIMIZE. DOMINATE."
- Section 4 H2: "70,000 AGENTS COMPETING. ONE GETS CITED."
- Citation proof stat strip: `1,000+` Queries Ranked · `70,000+` Competing Agents · `#1` AI Citation Position
- Section 5 H2: "EXCLUSIVE TERRITORY GRID"
- Section 6 H2: "90-DAY CITATION GUARANTEE" (4 checkmarks)
- Section 7 H2: "FREQUENTLY ASKED QUESTIONS" (5 FAQs, verbatim in Section 3 below)
- Orange CTA: "READY TO OVERTAKE THE ALGORITHM?" → "Book Your Free Strategy Call"
- Form section: "CHECK YOUR TERRITORY"

**About (`/about`):**
- H1: "BUILT BY A PRACTITIONER, NOT A THEORIST"
- Sub: "Justin Borges spent 13+ years and $200M+ in transactions proving what works in the real world before he ever wrote the AERO-10 framework."
- Timeline: 2012 → 2023 → 2024 → 2025 (see file for full text)
- AERO-10 pillars rendered with **fabricated pillar scores** (94%, 88%, 91%, 97%, 83%, 89%, 76%, 92%, 85%, 99%)
- Differentiators: Battle-Tested · Exclusive Territories · 90-Day Guarantee
- Founder stats: `13+` years · `$200M+` transactions · `100%` AI Citation Rate
- Closing CTA: "READY TO BECOME THE ANSWER?" → Check Territory / View Case Studies

**Services (`/services`):**
- H1: "WHAT YOU GET"
- Sub: "The Answer Authority Foundation — a complete AEO system designed for total market dominance."
- 6 package bullets: Competitive Audit · AI-Optimized Articles · Schema Implementation · Citation Monitoring · Monthly Reporting · Territory Protection
- Package footer: "Timeline: 90 Days // Guarantee: Active"
- AEO vs SEO comparison table (5 rows)
- 5 FAQs (pricing, industries, territory, commitment, post-90)
- CTA: "CLAIM YOUR TERRITORY" → `/territory-check`

**Contact (`/contact`):**
- H1: "ESTABLISH CONTACT"
- 3 contact cards (phone, email, hours)
- Strategy call card: "FREE 30-MINUTE STRATEGY BRIEFING" — 3 bullets, CALL/EMAIL buttons
- Trust signals: 90-DAY GUARANTEE · TERRITORY EXCLUSIVITY · 24HR RESPONSE
- 3 FAQs (strategy call, timeline, non-US)

**Territory Check (`/territory-check`):**
- H1: "CHECK IF YOUR TERRITORY IS STILL AVAILABLE"
- Form (industry dropdown + city text) — action points to `/territory-check` (GET)
- Territory grid: 4 secured (LA RE, Austin RE, Long Beach PM, San Diego RE) + 4 available (Phoenix HVAC, Denver Plumbing, Miami Dental, Dallas HVAC)
- Urgency: "Territories claimed this month: 23" (**fabricated**)
- Footer CTA: "LOCK IN YOUR TERRITORY BEFORE IT'S GONE" → `/contact`

**Case Studies (`/case-studies`):**
- H1: "PROOF OF DOMINANCE"
- KPIs: `34+` Citations · `6` Active Territories · `67` Avg Days · `4.2x` Avg Traffic Multiplier (**all fabricated**)
- 6 invented case studies with specific client counts, ROI figures, timeframes (see file)
- Borges deep-dive: "1,200+ real estate queries", 8,400+ clicks, 1.1M+ impressions — only this one has verifiable data
- Closing CTA: "READY TO SEE YOUR NAME IN AI RESULTS?" → `/#territory-check`

**Blindspot (`/blindspot`):**
- H1: "Where Is Your Business Invisible to AI?"
- Sub: free Blind Spot Report from ChatGPT/Claude/Perplexity/Google AI
- CTA: Calendly "Book Your Free Strategy Call" + "No pitch, just the data. 30 minutes."
- 3 benefit cards: AI Visibility Score · Citation Gap Analysis · Fix Priority List
- Trust signals: `8,400+` clicks · `1.1M+` impressions · `90-day` timeline
- 4 FAQs

### 1.6 Global `#contact` block (appears after every page via layout)
- "FREE 30-MINUTE STRATEGY CALL" + 3 bullets:
  - "Identify which competitor owns your AI territory"
  - "Map your citation blind spots across all platforms"
  - "Receive a 90-day dominance roadmap"
- CTA buttons: SCHEDULE A CALL (tel) + EMAIL US (mailto)
- "NOW ACCEPTING NEW CLIENTS"

---

## 2. GSC Intent Mining (28-day window: 2026-03-19 → 2026-04-16)

**Site totals:** 91 clicks · 4,738 impressions · 1.92% CTR · avg position varies

> Raw dump: [docs/_tae-gsc-raw.json](./_tae-gsc-raw.json) · mining script: [scripts/tae-gsc-intent-mine.js](../scripts/tae-gsc-intent-mine.js)

### 2.1 Top queries by impressions (signal = demand)

| # | Query | Imp | Clicks | CTR | Pos | Read |
|---|---|---:|---:|---:|---:|---|
| 1 | `answerprime` | 1,722 | 90 | 5.23% | 50.5 | Likely navigational misfire — not an AEO target; investigate separately |
| 2 | `aeo vs seo` | 103 | 0 | 0% | 57.2 | **High demand, page 6+. Article exists (`aeo-vs-seo`). Ranking is broken.** |
| 3 | `ai answer engine` | 44 | 0 | 0% | 37.8 | Category-defining query. We're off page. |
| 4 | `ai crawlers website performance` | 37 | 0 | 0% | 41.2 | Article exists; ranking weak |
| 5 | `how long to set up ai search optimization platforms` | 25 | 1 | 4.0% | 4 | Already page-1; winnable |
| 6 | `ai search optimisation for dental clinics` | 21 | 0 | 0% | 72.4 | Vertical-specific demand; we have a dental article |
| 7 | `aeo visibility monitoring` | 19 | 0 | 0% | 92.4 | Product-intent query we don't rank for |
| 8 | `aeo ranking` | 17 | 0 | 0% | 66.1 | Same |
| 9 | `ai discovery responses for law firms` | 16 | 0 | 0% | 75.6 | Vertical demand |
| 10 | `ai crawl optimisation` | 15 | 0 | 0% | 46.8 | Category query |
| 11 | `aeo vs seo differences` | 14 | 0 | 0% | 71.6 | Matches article we have |
| 12 | `ai powered answer engine` | 10 | 0 | 0% | 73.1 | Category query |

**Category-level takeaway:** the biggest named queries (`aeo vs seo`, `ai answer engine`, `aeo ranking`, `aeo visibility monitoring`) are all on page 5–9. Site is not surfacing for the *name of the category we are selling*.

### 2.2 Top pages by clicks (what actually works)

| Page | Clicks | Imp | CTR | Pos |
|---|---:|---:|---:|---:|
| `/` | 91 | 2,054 | 4.43% | 49.2 |
| `/blog/first-90-days-of-ai-search-optimization-what-to-expect` | 3 | 504 | 0.6% | 8 |
| `/blog/how-grok-decides-which-businesses-to-recommend` | 2 | 1,183 | 0.17% | 6.5 |
| `/blog/how-real-estate-agents-get-found-ai-search` | 2 | 279 | 0.72% | 6.6 |
| `/blog/ai-search-replacing-map-pack` | 1 | 179 | 0.56% | 7.2 |
| `/blog/does-having-a-blog-actually-help-ai-recommend-your-business` | 1 | 20 | 5% | 7.9 |
| `/blog/how-auto-repair-shops-get-found-on-ai-search` | 1 | 43 | 2.33% | 18.4 |
| `/blog/how-dentists-show-up-ai-search` | 1 | 174 | 0.57% | 31.2 |
| `/blog/how-siri-decides-which-businesses-to-suggest` | 1 | 135 | 0.74% | 11.6 |
| `/blog/squarespace-vs-shopify-for-getting-found-on-ai` | 1 | 21 | 4.76% | 7.3 |
| `/blog/why-fresh-content-key-ai-search-visibility` | 1 | 422 | 0.24% | 10.6 |
| `/blog/why-multi-location-businesses-struggle-ai-search` | 1 | 138 | 0.72% | 11 |
| `/about` | 0 | 6 | 0% | 4.5 |

**Read:** homepage eats most impressions but ranks pos 49. Blog is the only asset doing discovery work — everything else is dark.

### 2.3 Page-2/page-3 opportunities (pos 11-30, ≥5 imp) — page-1 within reach

Ordered by impressions (titles to rewrite first):

| Query | Imp | Pos | Current ranking page (or gap) |
|---|---:|---:|---|
| `answer engine` | 147 | 29.1 | Category query. Homepage should own this. |
| `answer engine solutions` | 71 | 22.2 | We have `/blog/answer-engine-solutions` — weak. |
| `how to fix incorrect company information in ai responses` | 17 | ~15 | Content gap → new article |
| `answer engine optimization success story` | 18 | 22.2 | `/case-studies` opportunity |
| `do daily automated posts sustainably improve visibility` | 15 | 17.5 | Pitch for content engine |
| `ai seo platform that shows why ai models pull wrong information` | 14 | 13.4 | Pitch — we DO have this (AEO Authority Index + monthly report) |
| `how to appear in ai search for dentists` | 13 | 18.5 | Vertical page gap |
| `typical use cases of grok ai across industries` | 14 | 11.5 | Grok article has 1,183 imp at pos 6.5 but broken CTR |
| `how to audit schema for ai answers` | 10 | 13.4 | Content gap |
| `answer engine audit` | 9 | 12.4 | Service page gap |
| `how to rank my business on google gemini` | 9 | 15.8 | Content gap |
| `answer engine optimization case study` | 5 | 29.8 | Points at `/case-studies` — but current case studies are fabricated |
| `how to fix inaccurate ai answers about my brand` | 5 | 16 | Service pitch opportunity (Fabrication Scan 2.0) |

### 2.4 Low-CTR top-10 pages (title/meta rewrite targets)

Pages at pos ≤10 with <1.5% CTR and ≥50 impressions — pure title/description loss:

| Page | Imp | CTR | Pos | Notes |
|---|---:|---:|---:|---|
| `/blog/how-grok-decides-which-businesses-to-recommend` | 1,183 | 0.17% | 6.5 | **#1 rewrite target — biggest CTR gap on site.** |
| `/blog/first-90-days-of-ai-search-optimization-what-to-expect` | 504 | 0.6% | 8 | Retitle to match "how long to set up" intent. |
| `/blog/how-real-estate-agents-get-found-ai-search` | 279 | 0.72% | 6.6 | Vertical; title probably too long for SERP. |
| `/blog/can-you-pay-to-get-recommended-by-chatgpt` | 230 | 0% | 6.9 | **Zero CTR despite page 1.** Title buried or answered by snippet. |
| `/blog/why-competitors-show-up-perplexity-not-you` | 221 | 0% | 6.2 | Zero CTR, high intent. |
| `/blog/how-ai-answers-change-based-on-your-location` | 182 | 0% | 6.4 | Zero CTR. |
| `/blog/ai-search-replacing-map-pack` | 179 | 0.56% | 7.2 | Mid-CTR. |
| `/blog/how-to-build-faq-page-ai-cites` | 174 | 0% | 9.6 | Zero CTR. |
| `/blog/why-ai-recommends-businesses-with-worse-reviews` | 121 | 0% | 8.6 | Zero CTR. |
| `/blog/what-content-does-chatgpt-read-on-my-website` | 104 | 0% | 10 | Zero CTR. |
| `/blog/google-ai-overviews-replacing-search` | 87 | 0% | 9.8 | Zero CTR. |
| `/blog/how-ai-search-is-changing-lead-quality-for-local-businesses` | 81 | 0% | 6.6 | Zero CTR. |

**Combined low-CTR impression loss: ~3,100 impressions / month converting at basically 0%.** If we ship title/meta rewrites on these 12 pages and get even 2% aggregate CTR, that's ~60 extra clicks/month without needing to rank higher — bigger than all current blog traffic combined.

### 2.5 Homepage specifically

- Clicks: 91 (the "answerprime" anomaly accounts for most of this — real intent clicks trivial)
- Impressions: 2,054
- Position: 49.2
- CTR: 4.43% (inflated by the answerprime anomaly; real homepage CTR for category queries ≈ 0%)

The homepage does not rank for `answer engine`, `aeo`, `answer engine optimization`, or any variant. It ranks pos 22-29 for `answer engine` and `answer engine solutions` — **page 2 for the literal name of what we sell.** That is the single biggest on-page SEO/AEO fix available.

---

## 3. Offering Gap Analysis (vs. `docs/needle-movers-top-20.md`)

### 3.1 What the site currently sells (reading copy verbatim)
- "Answer Authority Foundation" — 6 bundled deliverables (audit, articles, schema, monitoring, monthly reporting, territory)
- One-time 90-day engagement implied; `/services` pricing FAQ says "setup fee + monthly maintenance" — mentioned but not featured
- 90-day guarantee
- Territory exclusivity

### 3.2 What the offering stack actually is (per needle-movers doc)
Post-consolidation stack clients pay for monthly:
1. **AEO Authority Index** (hero number, refreshed weekly)
2. **The Monday Brief** (weekly email — wins, rank deltas, Reddit ops, what's next)
3. **Client Dashboard** (pull-based, platform tabs for Perplexity/Claude/Google AI/ChatGPT)
4. **Monthly AEO Intelligence Report** ✅ shipped — MoM deltas, top queries, page-2 queue, wins, what's next
5. **Top-Performer Conversion Audit** ✅ shipped — monthly page audit + rewrite briefs
6. **Cohort Benchmark Data** — "You vs. Industry" in monthly report
7. **Fabrication Scan 2.0** — brand-safety gate on outbound
8. **Reddit Opportunity Monitor** (live) — threads folded into Monday Brief
9. **Goal-Aware Recommendation Engine** ✅ shipped — interpretation layer
10. **Backlinking execution** — editorial placements across owned portfolio (private)

### 3.3 Gaps — what's on the site vs. what we actually deliver

| Site says | Reality | Gap |
|---|---|---|
| "6-week delivery" / "90-day engagement" | Continuous monthly retainer | **Current copy implies one-shot; real model is $1k/mo ongoing. Biggest framing gap.** |
| "Monthly Reporting" (one bullet) | Monthly AEO Intelligence Report is a full deliverable now — executive report w/ queries, page-2 queue, what's next | Under-sold. Needs own section. |
| Nothing about weekly touchpoint | Monday Brief is the product's retention spine | **Missing entirely from site.** |
| Nothing about dashboard | Client Dashboard is in-flight | Missing. |
| Nothing about Authority Index | Hero metric of the whole program | Missing from hero, homepage, about. |
| Nothing about Reddit monitoring | Live on Vercel, delivers citation opportunities | Missing. |
| Nothing about Top-Performer Conversion Audit | Ships monthly per client now | Missing. |
| "Citation Monitoring" generically | Platform-specific tabs (Perplexity/Claude/Google AI/ChatGPT) | Generic vs. specific; under-sold. |
| Fabricated case studies (Plumbing Phoenix, HVAC Austin, etc.) | Only verifiable result: Borges Real Estate | **Zero-fabrication rule violation. These must go.** |
| AERO-10 pillar scores (94%, 88%, etc.) | Not a real client dashboard — decorative | Decorative numbers read as fake to a sharp buyer. Soft flag. |
| "Territories claimed this month: 23" | Fabricated counter | Zero-fabrication rule violation. |
| Case-study KPIs ("34+ citations, 6 territories, 4.2x traffic multiplier") | Fabricated | Zero-fabrication rule violation. |

### 3.4 Brand Safety / banned-language scan (per `lib/goal-aware-recommender.ts` ban list)

Searched for: `PBN`, `link scheme`, `cannibaliz`, `black hat`, `link juice`, `authority` (in negative sense), `underperform`, `bad CTR`, `poor ranking`.

- **"authority"** used ~60× across site but always positive framing ("Authority Content Build", "entity authority", "AEO Authority"). **Not a violation** — banned only when accusatory toward the prospect.
- **"dominance" / "dominate"**: used 11× across homepage, services, case-studies, contact. Brand Safety Layer technically allows aggressive framing to prospects; this isn't client-facing recommendation output. **Pass, but noted** — may want to tone for professional-services buyers.
- **"overtake the algorithm"** (homepage orange CTA): aggressive. **Pass for prospecting; consider outcome-focused alt.**
- No `PBN`, `link juice`, `link scheme`, `cannibaliz`, `black hat` anywhere. ✅

### 3.5 LAMH Safety Protocol scan

Searched site for `lametrohomefinder`, `LAMH`, `1.1M`, `1.14M`, `crown jewel`:

- **Case Studies page (Borges deep-dive):** "8,400+ Monthly Clicks", "1.1M+ Impressions" — these numbers belong to LAMH, not Borges Real Estate Team. Presented as Borges results.
- **Blindspot page trust signals:** "8,400+ Monthly clicks" / "1.1M+ Impressions" same — same LAMH data presented as TAE client output.
- **Homepage hero stats:** "8,400+ Monthly Clicks" same.

**Finding:** these numbers are LAMH's, re-skinned under "Borges Real Estate Team" or presented as aggregate TAE-client results. Per the LAMH Safety Protocol, the site should never publicly cite LAMH's 1.14M impressions as a crown jewel, but it also shouldn't misattribute them. Either (a) properly attribute to LAMH and keep the number conservative enough that it's not a target, (b) present the real Borges Real Estate Team numbers (Borges Team has ~10,184 impressions in last 28d per backlinking doc — materially smaller), or (c) drop the specific number and talk outcomes.

Recommendation for Phase 4: replace the "1.1M+ impressions" trust signal with Borges Team's actual GSC numbers **or** with an outcome sentence that doesn't quote the LAMH metric. Same for "8,400+ monthly clicks" — verify the source site for this before keeping.

### 3.6 Search-intent vs. on-page mismatch

| Query (impressions) | What prospect wants | Where current site lands them |
|---|---|---|
| `answer engine` (147 imp, pos 29) | Category explainer or homepage | `/` ranks poorly for it; `/blog/answer-engine-solutions` is weak |
| `aeo vs seo` (103 imp, pos 57) | Comparison article | `/blog/aeo-vs-seo` exists but doesn't rank; `/services` has a comparison table that should |
| `answer engine optimization case study` (5 imp, pos 30) | Proof | `/case-studies` — but it's fabricated |
| `answer engine audit` (9 imp, pos 12) | Buy a one-time audit | No page sells a standalone audit |
| `aeo visibility monitoring` (19 imp, pos 92) | Subscription tool | Not sold anywhere — we DO deliver this via Monthly Report |
| `how to fix incorrect company information in ai responses` (17 imp, pos 15) | Remediation tool/service | Not on site — Fabrication Scan 2.0 is the answer, undocumented |
| `how to rank my business on google gemini` (9 imp, pos 16) | How-to | Blog article exists (`how-to-get-cited-google-gemini`), could rank |

---

## 4. Cross-cutting issues (fix-before-copy-rewrite)

1. **Zero-fabrication violations** — remove/replace: fake case studies, "23 territories claimed this month", AERO-10 pillar percentages, `34+`/`6`/`67`/`4.2x` case-study KPIs.
2. **LAMH-number attribution** — either attribute correctly, use real Borges Team GSC data, or drop specific numbers for outcome language.
3. **Homepage doesn't rank for "answer engine"** — H1 ("THE END OF TRADITIONAL SEO") does not contain the category phrase prospects search. Needs an H1 containing "Answer Engine Optimization" or "Answer Engine".
4. **12 blog pages are page-1-ranked but invisible** — title/meta rewrite pass has the fastest possible ROI on the whole site (~3,100 monthly impressions converting at ~0%).
5. **The actual product (monthly $1k retainer stack) is not described anywhere** — site sells a 90-day implementation; reality is an ongoing program. `/services` is the most off-strategy page because of this.
6. **No Calendly on homepage** — only `/blindspot` uses Calendly; homepage routes to a Formspree form that creates a lead but no immediate booking.
7. **Meta description template** — site-wide meta uses the same string ("Get your business cited by AI platforms…"). Only homepage and a couple of pages override. CTR-starved pages deserve query-specific descriptions.

---

## 5. Phase 3 output — what Phase 4 must produce

Going into the recommendations doc, Phase 4 must:

1. Rewrite every flagged page for goal-alignment (TAE new-client acquisition) per goal-aware recommender principles.
2. Replace fabricated case studies with verified-only (Borges deep-dive + a generalized "how results build" framing).
3. Fold in the monthly offering stack with a new "The Monthly Program" section on `/services` and/or homepage.
4. Provide per-page meta title + description rewrites (table form).
5. Provide a title/meta rewrite batch for the 12 low-CTR page-1 blog pages — highest immediate lift.
6. Add 5 new FAQ entries derived from the real GSC page-2 queries (`answer engine audit`, `how to fix incorrect info in AI responses`, `how to rank on Gemini`, `how long does AEO take`, `do daily posts help`).
7. Propose the homepage H1 rewrite so we rank for `answer engine` and `answer engine optimization`.
8. Keep dark-theme aesthetic, nav, footer, schema unchanged.
9. Priority order by impression/click lift.

---

## 6. Appendix — raw GSC dump + mining script

- Raw JSON: [docs/_tae-gsc-raw.json](./_tae-gsc-raw.json)
- Script: [scripts/tae-gsc-intent-mine.js](../scripts/tae-gsc-intent-mine.js)
- Date range: 2026-03-19 → 2026-04-16 (28 days; GSC 3-day lag applied)
- Query: `sc-domain:theanswerengine.ai`
