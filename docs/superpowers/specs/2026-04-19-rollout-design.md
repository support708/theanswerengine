# Rollout Design: AEO Client Email Automation + Fleet Integration
**Date:** 2026-04-19
**Owner:** ae-ops (Cortextos fleet)
**Target completion:** ~2026-06-08 (7 weeks)

---

## Executive Summary

The Answer Engine has built 11 new GSC-analysis tools + interpretation layer (Brand Safety, Fabrication Scan, Recommender) across Sprints 1–4. The pipeline is fully functional but locked behind three un-migrated call sites using the old `sendGmailMessageWithRetry` instead of the gated version. This design unlocks safe client email automation through a phased rollout anchored on the Cortextos fleet, with strict cardinal-rule enforcement (≤1.5 emails/client/week).

**Success criteria:**
- Phase 0 completes with zero test failures and green smoke test
- Phase 1 dogfoods Borges (you) for 2 full Mondays with zero fabrication flags
- Phase 2 expands to 2 trusted clients, still zero flags
- Phase 3 enables all 7 clients, cardinal rule never breached
- Phase 5 (final): clients see unified dashboard, receive optimized Monday + Monthly email
- Steady state: ~1.15 emails/client/week (80% of cardinal-rule budget)

---

## Section 1 — Phase structure + dates

| Phase | Window | Mondays covered | What happens |
|---|---|---|---|
| **0 — Safety** | Apr 19 → Apr 25 | Apr 20 (still draft-only) | Migrate 3 call sites, fix LAMH bug, green smoke tests |
| **1 — Dogfood** | Apr 26 → May 9 | Apr 27, May 4 | `roster=["borges"]` → you receive your own Monday Brief |
| **2 — Friendly pilot** | May 10 → May 23 | May 11, May 18 | Add 2 trusted clients to roster |
| **3 — Full fan-out** | May 24 → May 31 | May 25 | All 7 clients on Monday Brief + Monthly Report auto-send |
| **4 — Authority Index surfacing** | Jun 1 → Jun 7 | Jun 1 | Score appears *inside* Monthly Report (no new email — cardinal rule) |
| **5 — Pull surfaces** | Jun 8+ | — | Per-client dashboard auth, citation tracker |

**Total elapsed time: ~7 weeks. First real client email: May 11 (Phase 2).**
**Steady-state email cadence per client:** Monday Brief (4/mo) + Monthly Report (1/mo) = **1.15 emails/week** ✓ under cardinal rule.

Key design choice: **Phase 1's dogfood window is 2 Mondays, not 1**, because one clean Monday could be luck — two is reproducible evidence.

---

## Section 2 — Accountability via Cortextos fleet

No new discipline systems. Use existing agents + Telegram infrastructure.

**Agent ownership map:**

| Fleet agent | Rollout responsibility | Integration |
|---|---|---|
| **ae-ops** | Rollout state owner. Holds phase state in `data/rollout-state.json`, runs migrations, owns gate checks, commits roster changes. Heartbeat format: `"ROLLOUT-P{N}: week {x}/{y}, gates: {open\|pass\|fail}"` | AE operations — natural fit |
| **analyst** | Weekly audit runner (Tue 14:00 UTC, new cron). Measures: send volume per client, brand-safety flags, fabrication blocks, cardinal-rule breaches, LAMH outbound links. Writes `data/rollout-audit-{date}.md`. DMs ae-ops with receipt. | Already runs fleet-health crons |
| **evening-review-*** | Daily surfacing. New hook: `includeRolloutStatus()` reads `rollout-state.json`, appends status line to every evening summary. Mondays: "Monday Brief fired: ✓ N sends, 0 flags." Tuesdays: "Phase advance eligibility: {date}." | Natural anchor in daily summaries |
| **hq** | Escalation + Justin-facing. Auto-rollback tripwires DM hq first with "this happened, I reverted X, you need to decide Y." | hq is the Justin-conversation channel |
| **builder** | Not involved — content track | — |
| **justin-clone** | Not involved — lead track | — |

**Your role:** 4 human touches total across 7 weeks:
1. Eyeball ≥2 drafts at Phase 0 gate (10 min, once)
2. Pick 2 friendly clients at Phase 2 gate (5 min, once)
3. Telegram-reply "advance" / "hold" / "rollback" to ae-ops each Tuesday morning (30 sec × 7 times)
4. Decide action if a tripwire fires (rare, <5 min if happens)

**Conversational forcing function:** ae-ops posts weekly status in Telegram. If Justin doesn't reply within 24h, ae-ops escalates to hq with *"Justin hasn't advanced or held Phase {N}. Last audit clean. Default: hold."*

---

## Section 3 — Whitelist + tripwires (the code hinge)

**Decision:** git-committed roster + kill-list (not Vercel env, not per-profile flag). Tripwires commit file edits from code; they cannot edit Vercel env.

**Files:**
- `data/auto-send-roster.json` — array of slugs eligible for real send. Grows across phases.
- `data/auto-send-killlist.json` — array of slugs temp-reverted by tripwires.

**Gate logic inside `sendGmailMessageGated`:**
```ts
const shouldSend =
  process.env.AUTO_SEND_ENABLED === "true" &&
  roster.includes(clientSlug) &&
  !kills.includes(clientSlug);
return shouldSend ? sendGmailMessage(...) : createGmailDraft(...);
```

**Hard rules enforced at send-time:**

| Tripwire | Action |
|---|---|
| LAMH slug appears at runtime | Hard error, refuse, urgent hq DM — no recovery needed |
| 2+ brand-safety flags in 14d rolling window (per client) | Auto-add client to kill-list, DM hq |
| 1 fabrication-scan block (per client) | Immediate revert to drafts, DM hq |
| Cardinal-rule violation (>1.5 emails in 7d for any client) | System-wide `AUTO_SEND_ENABLED=false`, urgent hq DM |
| Cohort N < 3 | Auto-suppress "You vs Industry" block (existing behavior) |
| Onboarding spike (new client, `onboarding_phase: true`) | Cardinal-rule bypass for 14 days from onboarding start |
| QBR week | Suppress Monday Brief for that client that week (QBR replaces it) |

**Tripwire propagation:** kill-list edit → git commit → Vercel redeploy (60-90s) → next cron reads new state. Acceptable because tripwires block the *next* cron, not a mid-flight send.

---

## Section 4 — Surface inventory + tool mapping

**Architectural principle: every shipped tool consolidates into one of five surfaces. No new email channels ever.**

| Surface | Cadence | Recipient |
|---|---|---|
| Monday Brief | Weekly Mon 15:00 UTC | All 7 clients |
| Monthly Report | 1st of month 07:00 PT | All 7 clients |
| QBR | Quarterly (replaces Monday Brief that week) | Client |
| Client Dashboard | On-demand pull (Phase 5) | Per-client login |
| Justin's Telegram | Real-time | Internal, uncapped |

**Feeds Monday Brief (as sections, not separate emails):**
- Page-2 Opportunities → top 3 "This week's push"
- Wins/Misses → "Celebrations" block
- CTR Outliers → "Quick fix" callout
- Top-Performer Audit → "Action queue"
- Reddit Digest → folded section when opt-in (never standalone)

**Feeds Monthly Report:**
- Authority Index → score + 30d trend block (Phase 4+)
- Agency Activity → "What we did for you this month"
- Cohort "You vs Industry" → benchmark block (N≥3 required)
- Pillar Clustering → "Content roadmap" appendix
- Cannibalization (severe) → "Pages competing" action item
- Onboarding Baseline delta → "Your first 30 days" (new clients only)

**Standalone (sales/marketing — not client email):**
- Case Study Generator → `/case-studies` + `/blog`
- Public AEO Pulse → monthly blog post
- Battlecard → injected into Blind Spot reports (prospects, not clients)

**Internal only (Justin's Telegram):** Branded Search (data too noisy for clients); Geographic Expansion (also surfaces on Dashboard).

**Plumbing (no user-facing surface):** Fabrication Scan, Goal-Aware Recommender, Sitemap auto-submit.

**Sitemap flow (trigger-based + weekly hybrid):**
- **TAE (`theanswerengine.ai`):** `autoSubmitTae()` called at end of Content Engine publish + `publishStagedArticles()` + new `/api/sitemap/submit-tae` route (Vercel post-deploy webhook)
- **Client sites:** `/api/cron/client-sitemaps` Sunday 06:00 UTC, calls `autoSubmitForClient(slug)` with 10s stagger, logs per client
- Rationale: daily unconditional submission wastes quota — client sites rarely change daily, TAE changes are trigger-visible

---

## Section 5 — Operational cadence

| Cadence | Task | Owner |
|---|---|---|
| Every 4h | Heartbeats | ae-ops, analyst |
| Every 15 min | Reddit monitor | Vercel cron |
| Daily 02:00 UTC | Anthropic + Gmail token health | ae-ops |
| Daily 03:00 UTC | `data/` snapshot + GSC freshness check | ae-ops, analyst |
| Daily 04:00 UTC | Brand-safety rolling tally | analyst |
| Evening PT | Evening review (+ rollout status line) | evening-review agents |
| Mon 15:00 UTC | Monday Brief cron | Vercel |
| Mon 17-19 UTC | Page-2, Wins-Misses, Branded feeds | Vercel |
| **Tue 14:00 UTC (NEW)** | Rollout audit cron | analyst |
| **Tue 15:00 UTC (NEW)** | Send-verification spot check | ae-ops |
| Wed 12:00 UTC | LAMH outbound audit | analyst |
| Thu 12:00 UTC | Top-performer rotation check | ae-ops |
| Fri evening | Fleet retrospective | analyst + hq |
| **Sun 06:00 UTC (NEW)** | Client sitemap refresh | analyst |
| 1st 07:00 PT | Monthly Report cron | Vercel |
| 1st 16:00 UTC | Public AEO Pulse | Vercel |
| 1st 18:00 UTC | Cohort aggregator | analyst |
| 15th | Authority history rollup + profile drift review | analyst, ae-ops |
| 20th | Dependency CVE + Next.js version scan | ae-ops |
| 28th | Fleet cost review | analyst |
| Quarterly | QBR generation, GSC + Gmail token rotation, full audit | Vercel + ae-ops |
| On TAE blog publish | Sitemap trigger submit | In-pipeline |

**Cost strategy:** Haiku 4.5 default for all ops; Sonnet only for multi-file reasoning (hits 429s during batch work); prompt caching on goal-aware-recommender (already live); batch Anthropic endpoint for Monday Brief generation (~50% cost cut); GSC response cached per client per day in `data/gsc-cache/{slug}-{date}.json`; Telegram message consolidation hourly where possible.

**Failure detection:** token expiry (ae-ops daily), Vercel deploy block (ae-ops monthly CVE scan), brand-safety streak (tripwire + hq), client profile drift (ae-ops 15th), cohort collapse (auto-suppress), silent cron failure (analyst Tuesday audit), cost spike (analyst monthly + >$50/day anomaly).

---

## Section 6 — Phase 0 deliverables (executable from this spec)

**Migrations** (three call sites currently using `sendGmailMessageWithRetry`):
- `app/api/pipeline/route.ts` → `sendGmailMessageGated` (verifiedFacts from pipeline payload)
- `app/api/followup/route.ts` → `sendGmailMessageGated` (verifiedFacts from GSC snapshot)
- `lib/reddit-digest.ts` → `sendGmailMessageGated` (verifiedFacts = Reddit post URLs + AEO corpus)

**Bootstrap state files:**
- `data/auto-send-roster.json` = `[]`
- `data/auto-send-killlist.json` = `[]`
- `data/rollout-state.json` — Phase 0 entry, gate checklist, entry date 2026-04-19

**Code additions:**
- `sendGmailMessageGated` — reads roster + kill-list; enforces LAMH block, cardinal-rule tripwire, onboarding bypass, QBR week suppression
- `lib/aeo-authority-index.ts` — supports `profile.component_exclusions: ['reddit']` with weight redistribution (LAMH fix)
- `lib/monday-brief.ts` — aggregates Page-2 top-3, Wins celebrations, CTR quick-fix, Top-Performer action queue, Reddit (when opt-in)
- `lib/monday-brief.ts` — QBR week suppression
- TAE sitemap trigger — `autoSubmitTae()` at end of Content Engine publish flow + `publishStagedArticles()` + new `/api/sitemap/submit-tae` route
- `/api/cron/client-sitemaps` — weekly Sun 06:00 UTC, iterates roster, calls `autoSubmitForClient(slug)` with 10s stagger
- `/api/cron/rollout-audit` — weekly Tue 14:00 UTC, writes `data/rollout-audit-{date}.md`
- `scripts/check-phase-gate.ts` — local CLI for gate verification
- `includeRolloutStatus()` hook in evening-review agent
- ae-ops agent definition — rollout skill + new heartbeat format
- analyst agent — 3 new crons added (rollout audit, LAMH outbound, cost review)

**Verification gates (must pass to advance to Phase 1):**
- `npx tsc --noEmit` clean
- `npx tsx scripts/test-monday-brief-all.ts` exits zero with zero scan flags (12s Haiku spacing)
- `npx tsx scripts/test-authority-index.ts` passes for all 7 clients (LAMH with component_exclusions)
- 7 Monday Briefs render as drafts in justin@theborgesrealestateteam.com inbox
- Justin eyeballs ≥2 drafts → "I'd send this"
- `scripts/check-phase-gate.ts` prints all ✓ for Phase 0 → Phase 1 readiness

---

## Section 7 — Rollback paths

| From | To | How |
|---|---|---|
| Phase 1 | Phase 0 | `data/auto-send-roster.json = []` + commit + push |
| Phase 2 | Phase 1 | Remove client slugs from roster + commit |
| Phase 3 | Phase 2 | Revert to 3-slug roster + commit |
| Any phase | Full draft mode | `AUTO_SEND_ENABLED=false` in Vercel env |
| Tripwire-triggered | Kill-list revert | Automatic commit; manual recovery = remove slug from kill-list |
| LAMH appearance | Hard error | Code-level refuse-to-send; no recovery path needed |

All rollback paths are git-auditable (roster/killlist changes) or env-auditable (AUTO_SEND_ENABLED flip).

---

## Section 8 — Open items

Decide before the phase that needs them:

1. **`GSC_REFRESH_TOKEN` push to Vercel env** — blocks Phase 1. Currently in `docs/gsc-tools-backlog.md`.
2. **Email tracking pixel** — blocks Phase 2 engagement gate. Recommend in-house `/api/track` beacon over vendor (Postmark/SendGrid).
3. **QBR cadence** — 90d auto vs contract anniversary. Decide before Phase 3.
4. **NextAuth mode for Phase 5** — magic-link preferred; confirm vs password.
5. **Public AEO Pulse posture** — auto-publish vs Justin-reviewed. Decide by Phase 5.
6. **Telegram rollout channel** — dedicated vs folded into hq main channel. Nice-to-have, not blocking.

---

*Handoff ready: ae-ops owns Phase 0 execution. Implementation plan next via `writing-plans` skill.*
