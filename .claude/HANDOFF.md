# AEO Terminal Redesign — Copy Pass Handoff

**Status**: Visual redesign COMPLETE (Phase 1-2 done). Copy optimization PENDING (Phase 3).

**What's Done**
- ✅ Design system updated (globals.css: Space Grotesk, #131313 bg, sharp edges, orange accents)
- ✅ Layout/Nav/Footer rewritten to terminal aesthetic
- ✅ All 10 Stitch screens designed and saved at `.stitch/designs/`
- ✅ Homepage, About, Case Studies, Blog Index, Services, Territory Check, Blind Spot Checker, Contact pages fully rewritten to terminal style
- ✅ 200+ blog articles updated (Championship Format `.ae-*` CSS)
- ✅ Build clean: 207 pages, zero errors

**What's Pending** (NEXT SESSION)

### Phase 3: Copy Optimization Pass

**The Problem**: Agents rewrote copy across public pages with terminal/military language ("DEPLOY PROTOCOL", "NEURAL AUDIT", "COMMENCE OPERATIONS") that doesn't optimize for AI crawler citations. Copy must be SEO/crawlability-optimized, not stylistic gibberish.

**The Rule**: **Terminal DESIGN stays. Copy reverts to real, crawlable AEO language.**

### Files Requiring Copy Pass

Each file needs:
1. Read original copy from git (what was there before redesign)
2. Find-replace agent-generated terminal copy with original or improved AEO-optimized copy
3. Keep all terminal styling/classes/design intact — only change text content

#### Files & What to Fix

**1. `app/page.tsx` (Homepage)**
- Hero headline: Should emphasize "AI cites businesses", not "INITIALIZE PROTOCOL"
- CTA: "Get Started", not "ACTIVATE TERMINAL"
- 3-step section: Real steps (Audit → Optimize → Monitor)
- FAQ: Real questions prospects ask about AEO

**2. `app/about/page.tsx` (About)**
- Justin's bio: "$200M+ local business success", "13+ years", not "NEURAL WARFARE VETERAN"
- Framework: Real framework, not "COMBAT PROTOCOLS"
- Timeline: Real milestones, not "DEPLOYMENT STAGES"

**3. `app/case-studies/page.tsx` (Case Studies)**
- Headers: Industry/business names, not "MISSION LOG"
- Metrics: Real client metrics
- CTA: "View Case Study", not "DOWNLOAD MISSION BRIEFING"

**4. `app/contact/page.tsx` (Contact)**
- Intro: Explain what they'll get on call, not "INITIATE CONTACT PROTOCOL"
- Phone: `(213) 444-2229` (verify)
- Email: `support@theanswerengine.ai` (verify)

**5. `app/blog/page.tsx` (Blog Index)**
- Category filters: "Real Estate", "Plumbing", etc.
- Search placeholder: "Search articles..."
- CTA: "Read Article"

**6. `app/services/page.tsx` (Services)**
- Package names: Real tier names
- Descriptions: Real value props, not "ACTIVATE TIER 3"
- Feature lists: Real features

**7. `app/tools/blind-spot-checker/page.tsx` (Blind Spot Checker)**
- Description: What does it do? Real copy
- Results: Real insights, not "NEURAL VULNERABILITY"

**8. `app/territory-check/page.tsx` (Territory Check)**
- Intro: Why territory check matters (real copy)
- Results: Real status (Claimed/Available)

### Git Reference

```bash
git log --oneline app/page.tsx
git show HEAD~2:app/page.tsx  # Before redesign
git diff HEAD~2:app/page.tsx  # See exact changes
```

### Testing

- Build: `npm run build` (should stay clean)
- Dev: `npm run dev` — verify pages load with correct copy
- Keywords: Real AEO terms, not gibberish

### Next Steps

1. Run full build
2. Test in browser
3. Verify phone/email
4. Commit: `feat: copy optimization — AEO-optimized language, terminal design locked`

---

**Questions for next session**:
- Aggressive AEO language ("AI citations") or softer positioning?
- Real client testimonials for case studies?
- Any new copy you want added?
