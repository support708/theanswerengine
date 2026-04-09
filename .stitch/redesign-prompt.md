# The Answer Engine — Full 10-Screen Redesign Prompt for Stitch

## Instructions
Feed each screen to Stitch `generate_screen_from_text` one at a time. Include the DESIGN SYSTEM block with every screen prompt to maintain uniformity.

---

## DESIGN SYSTEM (INCLUDE WITH EVERY SCREEN)

```
DESIGN SYSTEM (REQUIRED):
- Platform: Web, Desktop-first responsive
- Theme: Dark, ultra-premium SaaS — clean, confident, data-driven
- Background Primary: Near Black (#0F1117) — the canvas
- Background Secondary: Slightly lighter (#14151f) for card surfaces
- Text Primary: White (#ffffff) at 90-95% for headings
- Text Secondary: White at 40-50% for body copy
- Text Tertiary: White at 20-30% for metadata/labels
- Accent Primary: Burnt Orange (#FF6A00) — CTAs, highlights, data points, hover states
- Accent Hover: Darker orange (#e55f00)
- Success: Soft green (rgba(100,220,100,0.9)) for positive metrics
- Borders: White at 6-8% opacity. Hover: white at 10-15%
- Typography Headings: Plus Jakarta Sans 600-700, tracking-tight, fluid sizing
- Typography Body: Inter 400, 16px, line-height 1.7, max-width 65ch
- Typography Labels: 11-12px, uppercase, tracking-widest, white/30
- Buttons Primary: White bg / #0F1117 text, rounded-xl (12px), px-7 py-3.5, font-semibold
- Buttons Secondary: White/8 border, white/60 text, rounded-xl
- Buttons Orange: #FF6A00 bg, white text, rounded-lg (8px), font-semibold
- Cards: rounded-2xl (16px), border white/6, hover border white/10, bg white/[0.03]
- Section Spacing: py-20 sm:py-32 consistently
- Section Headers: label (uppercase tracking-widest white/30 text-sm mb-6) + headline (Plus Jakarta 600-700 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6) + subtext (text-lg white/40 max-w-lg mx-auto)
- Max Width: max-w-6xl mx-auto px-6
- Dividers: h-px bg-white/[0.04] between sections
- Nav: Sticky, bg #0F1117/80 + backdrop-blur-xl, border-b white/8. Logo "The Answer Engine" left, links: Home, About, Blog, Case Studies, Contact. White "Get Started" CTA.
- Footer: Logo, Company/Services/Connect columns, privacy/terms.
```

---

## SCREEN 1: HOMEPAGE

Dark, premium SaaS homepage for an AEO (Answer Engine Optimization) agency. Ultra-clean, confident, data-driven. Near-black background (#0F1117).

**DESIGN SYSTEM (REQUIRED):**
[Include full design system above]

**PAGE STRUCTURE:**
1. **Nav:** Sticky, bg #0F1117/80 + backdrop-blur-xl, border-b white/8. Logo + "The Answer Engine" left. Links: Home, About, Blog, Case Studies, Contact. White "Get Started" button right.
2. **Hero Section:** Subtle dot grid pattern background. Section label "ANSWER ENGINE OPTIMIZATION" in white/30 uppercase tracking-widest. Large headline "Get Your Business Cited by AI" in Plus Jakarta Sans 700. Subtext white/40: "When customers ask ChatGPT, Google AI, or Perplexity for recommendations, we make sure they hear your name." Two CTAs: "Check Your Territory" (white bg/dark text) + "See How It Works" (outline white/8 border). Below: animated mockup showing AI platforms citing a business.
3. **Social Proof Strip:** "Trusted by local businesses across the US" with industry icons.
4. **Problem Section:** "Your Competitors Are Already Being Recommended by AI" — before/after comparison showing what AI says about competitor vs you. Chat-style mockup boxes.
5. **How It Works:** 3 cards with orange number badges. Step 1: Competitive Audit. Step 2: Content + Schema. Step 3: Monitor + Optimize. Each card: rounded-2xl, border white/6, bg white/[0.03].
6. **Territory Protection:** "One Business Per Category. Per City. Period." Territory grid visualization. Orange accent glow.
7. **Guarantee:** "90-Day Citation Guarantee" card with orange gradient glow animated border. Terms below.
8. **FAQ:** 5-question accordion. Orange accent on active item.
9. **Contact:** Call card + Email card side by side. Below: "Free 30-minute strategy call" card with bullet points and dual CTAs.
10. **Footer:** Logo, Company/Services/Connect columns, privacy/terms.

---

## SCREEN 2: ABOUT PAGE

Dark premium about page for The Answer Engine. Same design system as homepage.

**PAGE STRUCTURE:**
1. **Nav:** Same as homepage.
2. **Hero:** Section label "ABOUT". Headline "Built by a Practitioner, Not a Theorist" in Plus Jakarta Sans 700. Subtext about Justin building AEO on his own site first.
3. **Justin's Story:** Timeline component. Key milestones: 13+ years real estate, $200M+ sales, built AEO for own site, founded The Answer Engine. Photo of Justin (justin-borges-headshot.jpg).
4. **AERO-10 Framework:** Visualization of the 10-pillar scoring system. Horizontal bar chart or radar chart style. Orange (#FF6A00) accent on pillars. Labels: Answer Quality, Entity Optimization, Relevance, Structure, Voice, Authority Signals, Distribution, Platform Fit, Cluster Architecture, Conversion.
5. **Why We're Different:** 3 differentiator cards (same card style as homepage). 1: "We Built It For Ourselves First" 2: "Exclusive Territory Protection" 3: "90-Day Citation Guarantee".
6. **Footer:** Same as homepage.

---

## SCREEN 3: CASE STUDIES

Dark premium case studies page. Grid of proof.

**PAGE STRUCTURE:**
1. **Nav:** Same as homepage.
2. **Hero:** Section label "PROOF". Headline "Real Results for Real Businesses". Subtext about measurable citation results.
3. **Case Study Grid:** 2-column grid of cards. Each card: industry icon (plumber, HVAC, real estate, etc.), business type (not name), headline result in white ("Plumber: 0 to 4 AI Citations in 67 Days"), key metrics row with orange numbers (Citations Before: 0, After: 4, Platforms: 3, Days: 67). Rounded-2xl cards, border white/6, hover-lift.
4. **Individual Case Study Expanded:** Timeline of strategy, implementation, results. Before/after screenshots. Metrics dashboard style.
5. **CTA Section:** "Ready to See Your Name in AI Results?" White CTA button.
6. **Footer:** Same.

---

## SCREEN 4: BLOG INDEX

Dark premium blog listing for 200+ AEO articles.

**PAGE STRUCTURE:**
1. **Nav:** Same.
2. **Hero:** Section label "INSIGHTS". Headline "AEO Insights & Guides". Subtext.
3. **Search + Filters:** Search bar (rounded-xl, bg white/[0.03], border white/6). Category filter pills below: AEO Education, How-To, Competitive Intelligence, Client Results, Implementation. Active pill: orange bg.
4. **Featured Article:** Full-width large card. Hero image, category tag (orange pill), large title, excerpt, read time, author. Rounded-2xl.
5. **Article Grid:** 3-column grid. Each card: blog image top, category tag (orange pill), title (white/90, Plus Jakarta 600), excerpt (2-line clamp, white/40), read time + date (white/20). Rounded-2xl, border white/6, hover-lift.
6. **Pagination:** Page numbers with active state (orange).
7. **Footer:** Same.

---

## SCREEN 5: BLOG POST (Championship Format)

Single blog article template. Must support all Championship Format components.

**PAGE STRUCTURE:**
1. **Reading Progress Bar:** Fixed top, orange (#FF6A00), thin 3px.
2. **Nav:** Same.
3. **Article Hero:** Category tag (orange pill). H1 title (Plus Jakarta 700, large). Author card: Justin headshot, name, date, read time. Share buttons.
4. **Content Body:** Max-width 65ch centered. Supports: ae-stats-grid (4-col stat cards), ae-callout boxes (info/warning/success/orange), ae-comparison-table (orange header), ae-decision-matrix, ae-pros-cons, ae-timeline (orange dots), ae-quote (orange left border), ae-toc (numbered orange circles), ae-bar-group (orange fill), ae-cheat-sheet, ae-dollar-compare.
5. **Sidebar (desktop):** Sticky table of contents + related articles. Right side.
6. **CTA Block:** ae-cta-block with orange gradient glow border. "Get Your Free Competitive Audit" headline.
7. **Author Card:** ae-author-card at bottom. Justin avatar, name, bio, credentials.
8. **Footer:** Same.

---

## SCREEN 6: BLIND SPOT CHECKER

Lead generation tool page. Interactive.

**PAGE STRUCTURE:**
1. **Nav:** Same.
2. **Hero:** Section label "FREE TOOL". Headline "Is AI Recommending Your Competitors Instead of You?" Subtext about checking your AI visibility.
3. **Form Card:** Large centered card (rounded-2xl, border white/6). Fields: Business Name, Industry (dropdown), City/Zip, Website URL. White submit button "Check My Visibility".
4. **Results Mockup:** Below form. Shows which AI platforms cite competitors in your area. Chat-style mockups from ChatGPT, Perplexity, Google AI. Orange highlights on competitor names. Red indicators where you're missing.
5. **CTA:** "Get Your Full Competitive Audit" → links to Calendly. Orange button.
6. **Footer:** Same.

---

## SCREEN 7: CONTACT

Conversion-focused contact page.

**PAGE STRUCTURE:**
1. **Nav:** Same.
2. **Hero:** Section label "CONTACT". Headline "Let's Get You Cited". Subtext.
3. **Split Layout:** Left: headline, phone (213) 444-2229, email support@theanswerengine.ai, hours Mon-Fri 9-6 PT. Right: form card (name, email, phone, business type dropdown, message, "How did you hear about us?" dropdown). White submit button.
4. **Strategy Call Card:** Full-width below. "Free 30-Minute Strategy Call" headline. Bullet points: See competitor citations, Identify opportunities, Get 90-day plan. Dual CTAs: Call + Email.
5. **Trust Signals:** 3 badges — 90-Day Guarantee, Territory Exclusivity, 24hr Response.
6. **Footer:** Same.

---

## SCREEN 8: SERVICES

What you get page. Package breakdown.

**PAGE STRUCTURE:**
1. **Nav:** Same.
2. **Hero:** Section label "SERVICES". Headline "What You Get". Subtext about the Answer Authority Foundation package.
3. **Package Card:** Large featured card with orange gradient border glow. "Answer Authority Foundation" title. Grid of what's included: Competitive Audit, AI-Optimized Articles/Month, Schema Implementation, Citation Monitoring, Monthly Reporting, Territory Protection. Each with checkmark icon.
4. **AEO vs SEO Table:** Comparison table (ae-comparison-table style). Columns: Feature, Traditional SEO, Answer Engine Optimization. Rows comparing approach, results, timeline, measurement.
5. **Service FAQ:** 4-5 questions specific to pricing/service. Accordion style.
6. **CTA:** "Claim Your Territory" orange button → Calendly.
7. **Footer:** Same.

---

## SCREEN 9: TERRITORY CHECK

Mini landing page for territory exclusivity.

**PAGE STRUCTURE:**
1. **Nav:** Same.
2. **Hero:** Section label "TERRITORY". Headline "Check If Your Territory Is Still Available". Subtext about exclusive one-per-category-per-area.
3. **Form:** Simple card. Industry dropdown + City/State input. White "Check Availability" button.
4. **Territory Grid:** Visual grid/map showing claimed (green badge) vs available (orange glow) territories by category and city. Creates urgency.
5. **Urgency Messaging:** "Only one business per category per area. Once claimed, your competitors are locked out."
6. **CTA:** "Lock In Your Territory" → schedule call.
7. **Footer:** Same.

---

## SCREEN 10: ADMIN DASHBOARD

Internal admin panel. Password-protected. Same dark aesthetic.

**PAGE STRUCTURE:**
1. **Admin Nav:** Simplified. Logo left, "Dashboard" title center, logout button right.
2. **Stats Row:** 4 KPI cards — Total Leads, Conversion Rate, Revenue Pipeline, Active Territories. Orange accent on key numbers. Green for positive trends.
3. **Lead Pipeline:** Kanban board with columns: New → Contacted → Qualified → Proposal → Closed. Lead cards: business name, industry, location, status, last contact date. Draggable.
4. **Command Center:** Quick action buttons: Send Follow-Up, Schedule Call, Update Status, Add Note. Rounded-xl, border white/6.
5. **Recent Activity Feed:** Timeline of recent actions (emails sent, calls made, status changes). Timestamps in white/20.

---

## UNIFORMITY CHECKLIST

Before generating each screen, verify:
- [ ] Same nav (sticky, blur, border, logo left, links right, white CTA)
- [ ] Same footer (logo, 3 columns, privacy/terms)
- [ ] Same section spacing (py-20 sm:py-32)
- [ ] Same section header pattern (label → headline → subtext)
- [ ] Same card style (rounded-2xl, border white/6, bg white/[0.03])
- [ ] Same button styles (white primary, outline secondary, orange accent)
- [ ] Same max-w-6xl container
- [ ] Same typography scale (headings 90%, body 40%, meta 20%)
- [ ] Orange only for: CTAs, data highlights, active states
- [ ] Same divider style between sections
