# The Answer Engine — Copy Optimization Handoff

**Status:** Visual redesign to terminal aesthetic is COMPLETE and builds clean (207 pages, 0 errors).

**Pending:** Copy optimization pass across 6+ pages. This is CRITICAL for AEO performance.

## The Problem

During the visual redesign, agents rewrote copy on key pages to match the "terminal/military" aesthetic:
- "DEPLOY PROTOCOL" instead of "Get Started"
- "COMMENCE OPERATIONS" instead of "Learn More"
- "NEURAL AUDIT" instead of "Visibility Audit"
- "MISSION LOGS" instead of "Case Studies"

**This is wrong for AEO.** The copy is the primary asset for AI crawlers. Industry terms, benefit statements, and service descriptions are how ChatGPT, Perplexity, and Google AI choose to cite or rank us. Stylistic labels don't hurt, but **core copy must be SEO-optimized and real.**

## Files That Need Copy Fixes

| File | Issue | Fix |
|------|-------|-----|
| `app/page.tsx` (Homepage) | "Get your business cited by AI" rewrote to military language | Restore SEO copy: real value prop, real CTAs |
| `app/about/page.tsx` | Timeline and framework copy changed | Restore Justin's real bio, AERO-10 framework description |
| `app/case-studies/page.tsx` | "Mission Logs" + fabricated metrics | Restore real case study data (client names/metrics/results) |
| `app/blog/page.tsx` | Blog intro copy changed | Restore original blog description and filtering language |
| `app/contact/page.tsx` | Form labels/CTA copy changed | Restore real phone/email/process description |
| `app/services/page.tsx` | NEW page — all copy is agent-generated | Write real service tiers/descriptions (need from Justin) |

## The Rule for Next Session

✅ **KEEP:** All visual styling (Space Grotesk, #131313, orange accents, sharp edges, terminal design language)
❌ **REMOVE:** Agent-written business copy, military language, placeholder metrics
✅ **RESTORE:** Real AEO-optimized copy from git history or Justin's guidance

## How to Execute

1. For each file above, check `git diff` to see what changed
2. Either restore the original copy or write new copy that:
   - Uses real industry terminology (SEO, AI citations, territory, etc.)
   - Includes real metrics/client names if applicable
   - Explains real benefits in terms crawlers understand
   - Keeps the terminal visual design intact
3. Test the build (should still be 207 pages, 0 errors)
4. Production surface test: view each page in browser, verify:
   - Copy reads naturally and matches AEO brand
   - Styling is terminal aesthetic (fonts, colors, edges)
   - No placeholder text remains

## Questions for Justin

1. **Services page:** What are the real tiers/pricing? (This page was newly created by agents)
2. **Homepage headline:** What's the exact value prop statement you want crawlers to see?
3. **Case studies:** Which clients can we name publicly? What metrics should we highlight?
4. **Copy tone:** Business-professional? Conversational? Technical? This shapes how crawlers interpret us.

---

**Committed:** `chore: stage checkpoint — visual redesign to terminal aesthetic complete, copy optimization pending`

**Dev server:** `npm run dev` (runs on port 3000)

**Preview:** All Stitch design mockups saved at `.stitch/designs/`
