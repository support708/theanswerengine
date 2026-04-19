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
| **1 — Dogfood** | Apr 26 → May 9 | Apr 27, May 4 | \`AUTO_SEND_CLIENTS=borges\` → you receive your own Monday Brief |
| **2 — Friendly pilot** | May 10 → May 23 | May 11, May 18 | Add 2 trusted clients to whitelist |
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
| **ae-ops** | Rollout state owner. Holds phase state in \`data/rollout-state.json\`, runs migrations, owns gate checks, commits roster changes. Heartbeat format: \`"ROLLOUT-P{N}: week {x}/{y}, gates: {open\|pass\|fail}"\` | AE operations — natural fit |
| **analyst** | Weekly audit runner (Tue 14:00 UTC, new cron). Measures: send volume per client, brand-safety flags, fabrication blocks, cardinal-rule breaches, LAMH outbound links. Writes \`data/rollout-audit-{date}.md\`. DMs ae-ops with receipt. | Already runs fleet-health crons |
| **evening-review-*** | Daily surfacing. New hook: \`includeRolloutStatus()\` reads \`rollout-state.json\`, appends status line to every evening summary. Mondays: "Monday Brief fired: ✓ N sends, 0 flags." Tuesdays: "Phase advance eligibility: {date}." | Natural anchor in daily summaries |
| **hq** | Escalation + Justin-facing. Auto-rollback tripwires DM hq first with "this happened, I reverted X, you need to decide Y." | hq is the Justin-conversation channel |
| **builder** | Not involved — content track | — |
| **justin-clone** | Not involved — lead track | — |

**Your role:** 4 human touches total across 7 weeks:
1. Eyeball ≥2 drafts at Phase 0 gate (10 min, once)
2. Pick 2 friendly clients at Phase 2 gate (5 min, once)
3. Telegram-reply "advance" / "hold" / "rollback" to ae-ops each Tuesday morning (30 sec × 7 times)
4. Decide action if a tripwire fires (rare, <5 min if happens)

**This design is now approved and ready for Phase 0 handoff to ae-ops.**

