# The Answer Engine — Client Rollout & Automation Plan

**Status:** Draft — design approved in brainstorm session 2026-04-19, awaiting final review before implementation planning.
**Owner:** Justin Borges
**Fleet owner:** ae-ops (primary), analyst (audit/measurement), evening-review (daily surfacing), hq (escalation)
**Branch target:** `main`

---

## 1. Goal

Safely transition The Answer Engine from a Sprint 1-4 delivery stack (fully built, all draft-only, `AUTO_SEND_ENABLED=off`) to a steady-state automated client operations machine where:

- Every client receives **one predictable weekly Monday Brief** and **one comprehensive Monthly Report**.
- Every client-facing output is gated by fabrication-scan + brand-safety + goal-aware recommender before send.
- Every other tool shipped to date (GSC cohort, Page-2 Opps, Wins/Misses, CTR Outliers, Authority Index, Pillar Clustering, etc.) consolidates into one of two email surfaces or the dashboard — **no new email channels ever.**
- The cortextos fleet owns ongoing operations with one agent per task and Telegram-native accountability.
- Steady-state client email load is ≤ 1.5/week (cardinal rule preserved), averaging ~1.15/week with ~20% slack.

## 2. Non-goals

- Not rebuilding anything shipped (everything from Sprint 1-4 is considered working).
- Not changing the Client Dashboard's admin-gated model before Phase 5.
- Not flipping LAMH to client-facing email — LAMH is always blocked in the roster.
- Not adding new outbound email channels. Every new signal becomes a *section* in Monday Brief or Monthly Report.
- Not automating the "which 2 clients are the friendly pilot" decision — that's a human judgment call.

## 3. Current state (reference)

Last commit on `main`: `89ca947` (cohort + battlecard wiring).

Shipped and in use (do not rebuild):
- `lib/fabrication-scan-email.ts` (exports `sendGmailMessageGated`)
- `lib/aeo-authority-index.ts` (+ `data/authority-index-history.json`)
- `lib/monday-brief.ts` + `app/api/cron/monday-brief/route.ts`
- `lib/gsc-top-performer-audit.ts`
- `app/clients/[slug]/page.tsx` (admin-gated)
- `lib/agency-activity.ts`
- `lib/cohort-aggregator.ts` + `app/api/cron/cohort-aggregate/route.ts` (N<3 suppressed)
- `scripts/generate-case-study.ts`
- `app/api/cron/monthly-pulse/route.ts`
- `lib/battlecard.ts`
- 11 GSC tool libs + 5 Vercel crons (see `docs/gsc-tools-backlog.md`)
- `lib/goal-aware-recommender.ts` (Haiku 4.5, prompt cached)

Three legacy call sites still use `sendGmailMessageWithRetry` and must migrate before Phase 1:
- `app/api/pipeline/route.ts`
- `app/api/followup/route.ts`
- `lib/reddit-digest.ts`

Hard invariants already enforced in code:
- LAMH slug blocked from any client-facing email
- Cohort aggregator auto-suppresses N<3
- Goal-aware recommender ties recommendations to `profile.goals.primary_outcome`
- Brand-safety layer rejects banned phrases / proprietary names

---

## 4. Phase structure

| Phase | Window | Mondays covered | Deliverables |
|---|---|---|---|
| **0 — Safety** | 2026-04-19 → 2026-04-25 | Apr 20 (still draft-only) | Migrate 3 call sites, fix LAMH bug, wire remaining aggregations into Monday Brief, green smoke tests |
| **1 — Dogfood** | 2026-04-26 → 2026-05-09 | Apr 27, May 4 | `AUTO_SEND_ROSTER=["borges"]`; Justin receives his own Monday Brief from support@ |
| **2 — Friendly pilot** | 2026-05-10 → 2026-05-23 | May 11, May 18 | Add 2 trusted clients to roster |
| **3 — Full fan-out** | 2026-05-24 → 2026-05-31 | May 25 | All 7 clients; flip Monthly Report auto-send |
| **4 — Authority Index surfacing** | 2026-06-01 → 2026-06-07 | Jun 1 | Score + 30-day trend rendered inside Monthly Report — no new email |
| **5 — Pull surfaces** | 2026-06-08+ | — | Per-client NextAuth on dashboard, platform citation tracker |

First real client email: **May 11, 2026 (Phase 2 week 1).**
Full fan-out: **May 25, 2026.**

### 4.1 Phase 0 — Safety gates (all must pass to advance)

- [ ] `app/api/pipeline/route.ts` migrated to `sendGmailMessageGated` with caller-provided `verifiedFacts[]`
- [ ] `app/api/followup/route.ts` migrated with `verifiedFacts[]` from GSC snapshot
- [ ] `lib/reddit-digest.ts` migrated; verifiedFacts = Reddit post URLs + AEO-fact corpus
- [ ] `lib/aeo-authority-index.ts` supports `profile.component_exclusions: ['reddit']` with re-weighted remaining components (LAMH bug fix)
- [ ] Monday Brief aggregates Page-2, Wins/Misses, CTR Outliers, Top-Performer rewrite briefs as sections (not separate emails)
- [ ] `npx tsx scripts/test-monday-brief-all.ts` exits zero with zero scan flags
- [ ] `npx tsx scripts/test-authority-index.ts` passes for all 7 clients (LAMH included)
- [ ] `npx tsc --noEmit` clean
- [ ] Justin eyeballs ≥2 Monday Brief drafts in Gmail and confirms "I would send this."

### 4.2 Phase 1 — Dogfood gates (2 consecutive clean Mondays required)

- [ ] `data/auto-send-roster.json` = `["borges"]`
- [ ] `AUTO_SEND_ENABLED=true` in Vercel env
- [ ] Apr 27 Monday Brief arrives in your Gmail inbox from `support@theanswerengine.ai`
- [ ] May 4 same
- [ ] Both renders clean on mobile + desktop
- [ ] Zero brand-safety flags in 14d rolling window
- [ ] Zero fabrication-scan blocks
- [ ] All recommender outputs trace to GSC data (no fabrication)
- [ ] Justin confirms "I'd forward this to a client without edits"

### 4.3 Phase 2 — Friendly pilot gates (2 consecutive clean Mondays)

- [ ] Justin picks 2 friendly clients (criteria: trusts you + clean GSC data + recent contact)
- [ ] Roster expands: `["borges", client_A, client_B]`
- [ ] May 11, May 18 both ship clean
- [ ] Zero "what is this" replies from clients
- [ ] Open rate ≥ 40% (requires tracking pixel implementation — see open item in §9)
- [ ] Zero brand-safety / fabrication flags
- [ ] Zero LAMH outbound portfolio links in 90d rolling window

### 4.4 Phase 3 — Full fan-out gates

- [ ] All 7 eligible clients in roster (LAMH permanently excluded)
- [ ] May 25 Monday Brief ships to all 7, clean
- [ ] June 1 Monthly Report auto-send flips on (from current draft-only)
- [ ] QBR remains draft-only (quarterly high-stakes)
- [ ] Public AEO Pulse remains draft-only (decision deferred to Phase 5)

### 4.5 Phase 4 — Authority Index surfacing gates

- [ ] Authority Index score + 30d trend renders *inside* Monthly Report (no new email)
- [ ] Component exclusions honored (LAMH doesn't show "Reddit: 0")
- [ ] Historical trend data correct (verify against `data/authority-index-history.json`)

### 4.6 Phase 5 — Pull surface gates

- [ ] Per-client NextAuth flow on `/clients/[slug]` (magic link preferred; confirm with Justin)
- [ ] Platform citation tracker stub tabs replaced with real data (Perplexity/Claude/Google AI/ChatGPT)
- [ ] First client logs in and completes a self-serve session without support

---

## 5. Accountability — cortextos fleet integration

| Agent | Responsibility |
|---|---|
| **ae-ops** | Rollout owner. Heartbeat format: `"ROLLOUT-P{N}: week {x}/{y}, gates: {open|pass|fail}"`. Owns phase state, migrations, token health, deploy health. |
| **analyst** | Weekly rollout audit (Tuesday 14:00 UTC cron). Measures: sends per client, brand-safety flags, fabrication blocks, cardinal-rule breaches, LAMH outbound. Writes `data/rollout-audit-{date}.md`. DMs ae-ops. |
| **evening-review-\*** | Daily surfacing via new `includeRolloutStatus()` hook. Every evening review appends current phase + gate status. |
| **hq** | Escalation + Justin-facing. Tripwires DM hq first; hq composes the "this happened, I reverted X, you decide Y" message. |
| **builder** | Not involved — content track. |
| **justin-clone** | Not involved — leads track. |

### 5.1 Human touches required across the 7-week rollout

1. Eyeball ≥2 drafts at Phase 0 gate (10 min, once)
2. Pick 2 friendly clients at Phase 2 gate (5 min, once)
3. Reply "advance / hold / rollback" to ae-ops each Tuesday morning (30 sec × 7)
4. Respond to tripwire escalations (rare, unbounded)

### 5.2 Conversational forcing function

ae-ops posts weekly rollout status in Telegram. If Justin doesn't reply within 24h, ae-ops escalates to hq with:
> "Justin hasn't advanced or held Phase {N}. Last audit was clean. Default action: hold."

No calendar blocks required; the conversation is the forcing function.

---

## 6. Whitelist mechanism (the code hinge)

**Decision: git-committed roster + kill-list** (not Vercel env, not per-profile flag).

Files:
- `data/auto-send-roster.json` — array of client slugs eligible for real send. Grows across phases.
- `data/auto-send-killlist.json` — array of client slugs temporarily reverted by tripwires.

Gate logic in `sendGmailMessageGated`:

```ts
const roster = readRoster();
const kills = readKillList();
const shouldSend =
  process.env.AUTO_SEND_ENABLED === "true" &&
  roster.includes(clientSlug) &&
  !kills.includes(clientSlug);
return shouldSend ? sendGmailMessage(...) : createGmailDraft(...);
```

Rationale: auto-rollback tripwires cannot edit Vercel env from code but can commit file changes. 60-90s Vercel propagation is acceptable — tripwires block the *next* cron, not a mid-flight send.

Recovery from tripwire = remove slug from kill-list + commit + push.

---

## 7. Auto-rollback tripwires

Hard-coded in `sendGmailMessageGated` runtime checks (not just audit cron):

| Tripwire | Action |
|---|---|
| 2+ brand-safety flags in rolling 14 days for a client | Auto-add to kill-list, DM hq |
| 1 fabrication-scan block for a client | Immediate revert, DM hq |
| 1 cardinal-rule violation (>1.5 emails in rolling 7d) anywhere | System-wide `AUTO_SEND_ENABLED=false`, urgent DM hq |
| LAMH slug appears in roster at runtime | Hard error, refuse to send, urgent DM hq |

Notification chain: tripwire → `data/` update + commit → hq Telegram message → Justin.

---

## 8. Steady-state surface inventory (end of Phase 5)

### 8.1 Delivery surfaces

| Surface | Cadence | Recipient | Automation |
|---|---|---|---|
| **Monday Brief** | Weekly Mon 15:00 UTC | All 7 clients | Auto-send (Phase 3+) |
| **Monthly Report** | 1st of month 07:00 PT | All 7 clients | Auto-send (Phase 3+) |
| **QBR** | Quarterly per contract anniversary | Client | Draft-only; replaces Monday Brief that week |
| **Client Dashboard** | On-demand pull | Per-client login (Phase 5) | N/A |
| **Justin's Telegram** | Real-time | Justin only | Internal — no cap |
| **Marketing/Sales** | Various | Public + prospects | Draft-only case studies + public pulse; battlecard auto-injects into Blind Spot |

### 8.2 Tool-to-surface mapping

| Tool | Feeds | How it shows up |
|---|---|---|
| GSC Monthly Report lib | Monthly Report | The email itself |
| AEO Authority Index | Monthly Report | Score + 30d trend block (Phase 4) |
| Agency Activity | Monthly Report | "What we did for you this month" |
| Cohort "You vs Industry" | Monthly Report | Benchmark block (N≥3 required) |
| Pillar Clustering | Monthly Report | "Content roadmap" appendix |
| Cannibalization (severe) | Monthly Report | "Pages competing" action item |
| GSC Monday Brief lib | Monday Brief | The email itself |
| Page-2 Opportunities | Monday Brief + Telegram | Top 3 "This week's push" |
| Wins/Misses | Monday Brief + Telegram | "Celebrations" block |
| CTR Outliers | Monday Brief + Telegram | "Quick fix" callout |
| Top-Performer Audit | Monday Brief | Action queue (rewrite briefs) |
| Reddit Digest | Monday Brief (section) | Folded in, not separate email |
| Branded Search | Telegram only | Internal (data too noisy for clients) |
| Geographic Expansion | Telegram + Dashboard | On-demand Justin report + dashboard tab |
| QBR | own quarterly email | Standalone |
| Sitemap auto-submit | Trigger-based (TAE) + weekly cron (clients) | No surface |
| Onboarding Baseline | Silent until 30d | Feeds first Monthly Report |
| Client Dashboard | Pull surface | Itself |
| Platform Citation Tracker | Dashboard | Phase 5 tab |
| Fabrication Scan | Plumbing | Gates every send |
| Goal-Aware Recommender | Plumbing | Top-3 actions inside Monday Brief + Monthly Report |
| Case Study Generator | Marketing | `/blog` + `/case-studies` |
| Public AEO Pulse | Marketing | Monthly blog post |
| Battlecard | Sales | Injected into Blind Spot for prospects |

### 8.3 Cardinal-rule math

- Monday Brief: 1.00/wk
- Monthly Report: 0.23/wk (1/4.33)
- QBR: 0.08/wk (replaces Monday Brief that week; net 1.00, not 2.00)
- Base steady-state: **1.15–1.23 emails/client/week**
- Cardinal cap: 1.5/week
- Slack: ~20% for ad-hoc (onboarding, renewal nudges)

### 8.4 Rule additions (special cases)

- **QBR week suppression:** when a QBR is scheduled to send in a given ISO week, suppress the Monday Brief for that client that week.
- **Reddit Digest fold-in:** `REDDIT_DIGEST_ENABLED` stays off as a standalone sender. When enabled per client, `lib/reddit-digest.ts` renders into a Monday Brief section instead.
- **Onboarding spike bypass:** new client profiles with `onboarding_phase: true` bypass the 1.5/week cap for 14 days from onboarding start date. Expected: welcome + setup + first brief = ~3 emails week 1.
- **LAMH hard block:** LAMH is permanently excluded from the roster at the code level (not just config).
- **Cohort N<3:** Cohort block renders empty when fewer than 3 clients in cohort. Aggregator already enforces this.

---

## 9. Client experience narrative (what's different, client-visible)

### 9.1 A client's day (weekday)

Zero push. Dashboard available on demand (Phase 5+). Nothing new in the inbox.

### 9.2 A client's week

Monday 8am PT: **Monday Brief** arrives — one email containing:
- "This week's push" (top 3 Page-2 opportunities ranked by goal fit)
- "Celebrations" (week-over-week ranking wins)
- "Quick fix" (top CTR outlier with missed-clicks estimate)
- "Action queue" (rewrite briefs ranked by relevance to `primary_outcome`)
- *(Opt-in)* Reddit section
- "What we're doing next" (forward-looking)
- Goal tie-back: *"This supports your primary outcome of {goal}."*

Tuesday–Sunday: silence.

### 9.3 A client's month

1st of month 7am PT: **Monthly Report** arrives — comprehensive:
- AEO Authority Index score + 30-day trend
- Agency Activity block
- Cohort "You vs. Industry" (N≥3 required)
- Content roadmap (Pillar Clustering output)
- Fixes applied (cannibalization, CTR)
- *(New clients)* "Your first 30 days" baseline delta
- Goal progress metric

Mid-month: no push. Dashboard remains available.

### 9.4 A client's quarter

QBR week: QBR email replaces that week's Monday Brief. 90-day deep dive + strategic pivots. Justin books a 30-min call on request.

### 9.5 Before vs after (client-felt delta)

| Dimension | Before | After |
|---|---|---|
| Cadence predictability | None | Monday + 1st of month, like clockwork |
| Proof of work | "Trust us" | Agency Activity every month |
| Competitive context | None | Cohort benchmark monthly |
| Goal alignment | Implicit | Every email references `primary_outcome` |
| Self-serve access | None | Dashboard 24/7 (Phase 5) |
| Citation visibility | None | Platform tracker in dashboard (Phase 5) |
| Authority score | None | 0-100 index + trend, monthly |
| Content roadmap | Ad-hoc | Pillar-clustered, outlined, quarterly |
| Win recognition | Occasional | Weekly celebrations block |
| Fabrication risk | Unchecked | Every send gated + auto-rollback |
| Justin's time per client per week | 30-60 min | 5-10 min |

---

## 10. Operational cadence + ownership

### 10.1 Daily

| Task | Owner | When | Notes |
|---|---|---|---|
| Heartbeat + state sync | ae-ops, analyst | Every 4h | Already wired |
| Reddit monitor scan | (Vercel cron) | Every 15 min | Already live |
| Sitemap auto-submit (TAE) | Blog publish hook | On every TAE blog push | Trigger-based; no scheduled run |
| GSC data freshness check | analyst | 03:00 UTC | Confirms yesterday's pull landed |
| Anthropic + Gmail token health | ae-ops | 02:00 UTC | Catches refresh-token expiry |
| `data/` directory snapshot | ae-ops | 03:00 UTC | Backup roster, killlist, rollout-state, cohort, authority history |
| Evening review | evening-review agents | Evening PT | Adds rollout status line |
| Brand-safety rolling tally | analyst | 04:00 UTC | Feeds 14d tripwire window |

### 10.2 Weekly

| Task | Owner | When |
|---|---|---|
| Monday Brief cron | Vercel | Mon 15:00 UTC |
| Page-2 / Wins-Misses / Branded feeds | Vercel | Mon 17-19:00 UTC |
| Rollout audit (NEW) | analyst | Tue 14:00 UTC |
| Send-verification spot check | ae-ops | Tue 15:00 UTC |
| LAMH outbound-link audit | analyst | Wed 12:00 UTC |
| Top-performer rotation check | ae-ops | Thu 12:00 UTC |
| Client sitemap refresh (NEW) | analyst | Sun 06:00 UTC |
| Fleet retrospective | analyst + hq | Fri evening |

### 10.3 Monthly

| Task | Owner | When |
|---|---|---|
| Monthly Report cron | Vercel | 1st 07:00 PT |
| Public AEO Pulse cron | Vercel | 1st 16:00 UTC |
| Cohort benchmark aggregator | analyst | 1st 18:00 UTC |
| Case study candidate scan | analyst | 5th |
| Authority Index history rollup | analyst | 15th |
| Client profile drift review | ae-ops → Justin | 15th |
| Dependency CVE + Next.js scan | ae-ops | 20th |
| Fleet cost review | analyst | 28th |
| Phase advance call | ae-ops → Justin | End of phase window |

### 10.4 Quarterly

| Task | Owner |
|---|---|
| QBR generation per client | Vercel cron / CLI |
| GSC refresh token rotation | ae-ops |
| Gmail refresh token rotation | ae-ops |
| Full dependency audit | ae-ops |
| Baseline refresh check | analyst |
| Rollout retrospective | hq + Justin |

### 10.5 Sitemap submission flow

**Split by site ownership:**

- **TAE (`theanswerengine.ai`)** — trigger-based. `autoSubmitTae()` called at the end of:
  - The Content Engine blog publish flow (after git push completes)
  - Any `publishStagedArticles()` run in `lib/blog-scheduler.ts`
  - Any direct commit to `main` touching `app/blog/**` (via a post-deploy Vercel webhook calling `/api/sitemap/submit-tae`)
  - Failure mode: logged to `data/sitemap-log.json`, non-blocking; ae-ops Tuesday spot-check reads the log
- **Client sites (7 total)** — weekly cron at `/api/cron/client-sitemaps` Sunday 06:00 UTC. Calls `autoSubmitForClient(slug)` sequentially with 10s stagger. Result per-client logged.
- **No daily unconditional submission.** Volume would be wasted — client sites rarely change daily; TAE changes are trigger-visible.

### 10.6 Cost + quota strategy

- Anthropic: Haiku 4.5 default. Sonnet 4.6 only for multi-file reasoning. Batch endpoint for Monday Brief generation (~50% cost cut).
- GSC API: cache response per client per day in `data/gsc-cache/{slug}-{date}.json`. Dedupe across Monday Brief + Wins/Misses consumers.
- Gmail: 8 sends/week fleet total — well under 2k/day ceiling. Not a constraint.
- Telegram: consolidate agent messages hourly where possible. Raw truth to Telegram; summaries to evening-review. Don't double-post.
- Cron stampede: Monday crons already staggered (15:00 → 19:00 UTC). Preserve gaps.

### 10.7 Failure modes + detection

1. Gmail token expires → daily ae-ops check → Telegram ping to run `scripts/get-gmail-token.js`
2. GSC token expires → same pattern
3. Vercel deploy blocked (Next.js CVE) → ae-ops monthly scan → escalate
4. Brand-safety flag streak → tripwire + auto-rollback + hq escalation
5. Client profile drift → ae-ops 15th-of-month review prompt
6. Cohort N drops below 3 → auto-suppress + Telegram warn
7. Cron silently fails on Vercel → analyst Tuesday audit catches missing sends
8. Token-budget spike → analyst monthly review + daily >$50/day anomaly alert

---

## 11. Implementation deliverables by phase

### 11.1 Phase 0 code deliverables

- `data/auto-send-roster.json` — new file, initial `[]`
- `data/auto-send-killlist.json` — new file, initial `[]`
- `data/rollout-state.json` — new file, seeded with Phase 0 + Apr 19 entry date
- `sendGmailMessageGated` updated to read roster + kill-list
- Migrate `app/api/pipeline/route.ts` → `sendGmailMessageGated`
- Migrate `app/api/followup/route.ts` → `sendGmailMessageGated`
- Migrate `lib/reddit-digest.ts` → `sendGmailMessageGated`
- `lib/aeo-authority-index.ts` — support `profile.component_exclusions` with weight redistribution
- `lib/monday-brief.ts` — add sections: Page-2 top-3, Wins celebrations, CTR quick-fix, Top-Performer action queue, Reddit (when opt-in)
- `scripts/check-phase-gate.ts` — new CLI for local gate check
- `scripts/test-monday-brief-all.ts` — already exists; verify covers new sections
- QBR week suppression rule in `lib/monday-brief.ts`
- Onboarding-phase bypass rule in `sendGmailMessageGated`
- LAMH hard block in `sendGmailMessageGated`
- TAE sitemap trigger hook — `autoSubmitTae()` call at end of Content Engine publish flow + `publishStagedArticles()` + new `/api/sitemap/submit-tae` route (called by post-deploy Vercel webhook)
- `/api/cron/client-sitemaps` — weekly Vercel cron route (Sun 06:00 UTC), iterates roster, calls `autoSubmitForClient(slug)` with 10s stagger, logs to `data/sitemap-log.json`

### 11.2 Phase 1 deliverables

- `AUTO_SEND_ENABLED=true` in Vercel env
- `data/auto-send-roster.json` = `["borges"]`
- Tracking pixel decision made + implemented before Phase 2 engagement gate

### 11.3 Phase 2 deliverables

- Roster expands to 3 slugs (Justin picks the 2)
- Open-rate tracking live

### 11.4 Phase 3 deliverables

- Roster expands to all 7 eligible
- Monthly Report cron flipped from draft → auto-send
- QBR cadence scheduler (per-client contract anniversary)

### 11.5 Phase 4 deliverables

- Authority Index render block inside Monthly Report template
- Historical trend data visualization
- Component exclusion honored in rendering

### 11.6 Phase 5 deliverables

- Per-client NextAuth flow (magic link preferred; confirm)
- Platform citation tracker data source wired (Perplexity/Claude/Google AI/ChatGPT)
- Dashboard tabs populated with real data

### 11.7 Cross-cutting deliverables

- `/api/cron/rollout-audit` — Tuesday 14:00 UTC (analyst)
- `includeRolloutStatus()` hook in evening-review agent
- Tripwire handlers inside `sendGmailMessageGated`
- hq escalation template for rollback events
- ae-ops agent definition updates (rollout skill, heartbeat format)
- analyst agent cron additions (rollout audit, LAMH outbound, cost review)

---

## 12. Open items / dependencies

1. **`GSC_REFRESH_TOKEN` must be pushed to Vercel env** before Phase 1. Currently a backlog item from `docs/gsc-tools-backlog.md`.
2. **Email tracking pixel decision** before Phase 2 engagement gate. Options: simple `/api/track` beacon, Postmark/SendGrid (requires vendor). Recommend in-house beacon for cost control.
3. **QBR cadence decision**: 90-day auto vs contract anniversary. Not blocking for Phase 0-3. Decide before Phase 3.
4. **Public AEO Pulse posture**: draft-only for now. Decide by Phase 5 whether to flip to auto-publish or keep Justin-reviewed.
5. **Telegram channel for wins/misses alerts**: today it's Justin's main hq channel. Decide if we want a dedicated rollout channel for Phase 1+.
6. **NextAuth magic-link vs password** for per-client Phase 5 accounts — confirm with Justin.

---

## 13. Rollback paths

| From | To | How |
|---|---|---|
| Phase 1 | Phase 0 | `data/auto-send-roster.json = []` + commit + push |
| Phase 2 | Phase 1 | Remove client slugs from roster + commit |
| Phase 3 | Phase 2 | Revert to 3-slug roster + commit |
| Any phase | Full draft mode | `AUTO_SEND_ENABLED=false` in Vercel env |
| Tripwire-triggered | Kill-list revert | Automatic; manual recovery = remove from kill-list |
| LAMH appearance | Hard error | Code-level refuse-to-send; no recovery path required |

All rollback paths are git-auditable (roster/killlist changes = commits) or env-auditable (AUTO_SEND_ENABLED change = Vercel log).

---

## 14. Success criteria (end of Phase 5)

- All 7 eligible clients on Monday Brief for ≥4 consecutive weeks, zero flags
- Monthly Report auto-sent to all 7 for ≥2 consecutive months, zero flags
- Zero cardinal-rule violations in audit log since Phase 3
- Zero LAMH outbound portfolio links in 90d window
- Per-client dashboard login working for ≥3 clients who self-serve without support
- Justin's time-per-client-per-week reduced from ~30-60min to ≤10min
- Authority Index + Cohort rendering stable inside Monthly Report for ≥2 cycles
- Fleet-wide cost under budget for 2 consecutive months

---

## 15. Review sign-off

- [ ] Justin reads this spec and approves or requests changes
- [ ] After approval, move to implementation-plan writing via `writing-plans` skill
- [ ] Implementation plan broken into tasks aligned with Phase 0 deliverables first

---

*Spec generated by brainstorm session 2026-04-19. Design approved after 6-section review (phases, fleet integration, whitelist, inventory, surface mapping, operational cadence). Next step after spec approval: implementation plan.*
