# The Answer Engine — Terminal Aesthetic Redesign Spec

**Date:** April 9, 2026
**Scope:** Visual/design layer only. All functionality, content, and business logic unchanged.

## Design Direction
- **Aesthetic:** Terminal/brutalist (`AEO_TERMINAL`)
- **Typography:** Space Grotesk (sans-serif, sharp, tech-forward)
- **Background:** `#131313` (near-black with slight warmth)
- **Text:** `#e5e2e1` (off-white, reduced contrast for readability)
- **Accents:** Orange (CTA emphasis)
- **Effects:** Scanline overlay (subtle, 2px horizontal lines), grid background, dark borders
- **Vibe:** CRT monitor, hacker terminal, premium-industrial — not corporate SaaS

## What Stays Unchanged
- **Routes & Pages:** All URLs, route structure, nav hierarchy
- **Content:** 200+ blog articles, metadata, SEO markup
- **Backend:** Auth, API routes, Stripe integration, Telegram bot, lead pipeline
- **Admin:** Dashboard, article management, analytics, settings
- **Database:** All tables, relations, data unchanged
- **Business Logic:** Tag detection, citation scoring, territory mapping, email workflows

## What Changes

### 1. Design System (globals.css + tailwind)
- **Colors:** Update all tailwind theme colors to dark mode palette
  - `background: #131313`
  - `foreground: #e5e2e1`
  - `accent: orange` (specific hex TBD — current Stitch uses bright orange)
  - `muted: #353534` (slightly lighter than background)
  - `border: #5a4136` (dark outline-variant for borders)
- **Typography:**
  - Remove Plus Jakarta Sans, add Space Grotesk
  - Headers: Space Grotesk 700-900 weight
  - Body: Inter 400-500 (keep Inter for readability at small sizes)
  - Code: Monospace, unchanged
- **Borders:** Change from `rounded-lg` / `rounded-xl` to sharp corners (`rounded-none`)
- **Effects:**
  - Add scanline overlay as pseudo-element on body
  - Keep subtle grid background on hero sections
  - Dark borders on cards/panels instead of soft shadows

### 2. Shared Components (Nav, Footer, Primitives)
- **Navigation:**
  - Sticky, full-width, dark background
  - Logo text "The Answer Engine" or logo image TBD
  - Links in Space Grotesk, uppercase or small-caps
  - Active state: orange underline or border
  - CTA button: orange background, dark text
- **Footer:**
  - Multi-column layout (Capabilities, Company, Legal)
  - Links in small text, muted color
  - Copyright: "© 2026 The Answer Engine"
- **Buttons:**
  - Primary: orange background, dark text, sharp corners
  - Secondary: transparent, light border, hover darkens
  - Outlined: border-only variant
- **Cards/Panels:**
  - Dark background (`#1d1d1d` or `#131313`)
  - Thin borders (`1px`, `#5a4136`)
  - Sharp corners
  - Minimal shadow (only on hover if needed)
- **Form Inputs:**
  - Dark background (`#1d1d1d`)
  - Light border on focus
  - Monospace font for numeric inputs

### 3. Page Templates (One at a time)
1. **Homepage** (`app/page.tsx`)
   - Hero with dot grid background
   - Social proof strip (icons)
   - Problem section (before/after cards)
   - How-it-works cards
   - Territory protection feature
   - 90-day guarantee callout
   - FAQ accordion
   - Contact CTA
   - Pricing preview (if applicable)

2. **About** (`app/about/page.tsx`)
   - Company story/mission
   - Team section
   - Timeline or milestones
   - Values

3. **Case Studies** (`app/case-studies/page.tsx`)
   - Grid of case study cards
   - Real client data (not Stitch placeholders)
   - Link to individual case study pages

4. **Blog Index** (`app/blog/page.tsx`)
   - List of articles (existing)
   - Search/filter (existing)
   - Visual refresh only

5. **Blog Post** (`app/blog/[slug]/page.tsx`)
   - Championship Format styling (update colors/borders to terminal theme)
   - Keep all existing markdown rendering
   - Real article content (already exists)

6. **Blind Spot Checker** (`app/blind-spot-checker/page.tsx`)
   - Interactive tool (form → analysis)
   - Result cards
   - CTA to "Get Started"

7. **Services** (`app/services/page.tsx`)
   - Service cards with real package details
   - Pricing if public-facing
   - FAQs specific to services

8. **Territory Check** (`app/territory/page.tsx`)
   - Interactive territory grid or map
   - Search by location
   - Availability status

9. **Contact** (`app/contact/page.tsx`)
   - Contact form
   - Phone: `(213) 444-2229`
   - Email: `support@theanswerengine.ai`
   - Calendar link (if applicable)

10. **Admin Dashboard** (`app/admin/dashboard/page.tsx`)
    - Keep existing functionality
    - Visual refresh (terminal aesthetic)
    - Charts, metrics, etc.

### 4. Copy & Real Data
- **Phone:** `(213) 444-2229` everywhere
- **Email:** `support@theanswerengine.ai`
- **Brand Name:** "The Answer Engine" (public) — "AEO_TERMINAL" is internal codename
- **Justin's Bio:** Real credentials (13+ years, $200M+ in citations, etc.)
- **Case Study Metrics:** Real numbers from actual clients
- **Service Descriptions:** Your actual packages, not AI-generated placeholders

## Implementation Order
1. Update design system (colors, fonts, tailwind config)
2. Refresh shared components (Nav, Footer, buttons, cards, inputs)
3. Convert 10 HTML Stitch screens to React components
4. Test each page in browser
5. QA: Check all links work, forms submit, content renders, copy is correct
6. Production surface test: Load live URL, verify all pages, check SEO markup

## Success Criteria
- [ ] Terminal aesthetic applied consistently across all pages
- [ ] All existing functionality works identically
- [ ] No broken links or missing images
- [ ] All real copy in place (no "AEO_TERMINAL" branding visible to public)
- [ ] Mobile responsive (tested on 320px, 768px, 1024px viewports)
- [ ] Blog articles render correctly with Championship Format styling
- [ ] Admin dashboard fully functional
- [ ] Performance: Lighthouse score 90+ on desktop and mobile

## Notes
- Stitch designs are visual reference only — we won't use the HTML directly
- We're converting the visual language to React components that integrate with existing Next.js architecture
- The redesign is purely aesthetic; no route changes, API changes, or content restructuring
- All 200+ existing blog articles remain unchanged
