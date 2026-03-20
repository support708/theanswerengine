# Project Guidelines

## SAFETY RULES (DO NOT VIOLATE)
- **NEVER use `rm -rf` in this project** — Use `npx rimraf <path>` for safe deletion instead
- **NEVER delete .next, node_modules, or any directory with `rm -rf`** — Windows/Git Bash can delete the entire project
- **ALWAYS `git commit && git push` before any cleanup or cache-clearing operation**
- **NEVER chain destructive commands with `&&`** — if one fails, the next may run in wrong context

## Build & Dev
- `npm run dev` — starts dev server on port 3000
- `npm run build` — production build
- `npm run lint` — runs ESLint
- Clear build cache safely: `npx rimraf .next`
- Deployed on Vercel with cron schedules defined in `vercel.json`

## Architecture Overview
- **Framework:** Next.js 16 App Router, React 19, TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 via PostCSS — dark theme, primary accent `#FF6A00`
- **Auth:** NextAuth v5 (beta) — single admin user, credential-based, JWT sessions (8h max)
- **Storage:** JSON files in `data/` directory — no database
- **AI:** Anthropic Claude API via direct fetch in `lib/anthropic.ts` (NOT the SDK)
- **Notifications:** Telegram bot for pipeline events
- **Email:** Gmail API OAuth for draft creation (optional)
- **Deployment:** GitHub API for auto-deploying reports to `public/blindspot/` (optional)

## Directory Structure
```
app/
  admin/                    # Protected admin dashboard
    login/page.tsx          # Password auth page
    pipeline/page.tsx       # Main dashboard (Pipeline + Lead Hunter tabs)
    pipeline/[id]/page.tsx  # Individual lead detail view
    components/             # LeadForm, LeadTable, StatusBadge
  api/
    auth/[...nextauth]/     # NextAuth handler
    leads/route.ts          # GET/POST leads
    leads/[id]/route.ts     # GET/PATCH/DELETE individual lead
    hunt/route.ts           # Manual hunt trigger (admin-only)
    hunt/status/route.ts    # Hunt status endpoint (admin-only)
    cron/hunt/route.ts      # Scheduled hunt (CRON_SECRET protected)
    cron/pipeline/route.ts  # Batch research+report+email pipeline
    generate-report/        # Research + HTML report generation
    create-draft/           # Gmail draft creation
  blog/                     # Marketing blog pages
  case-studies/             # Case study pages
  layout.tsx                # Global layout with nav/footer/schema
  page.tsx                  # Homepage with marketing content
lib/
  anthropic.ts              # Claude API wrapper (web_search tool support, rate limiting, retries)
  hunter.ts                 # 3-pass lead discovery + 5-factor scoring
  scheduler.ts              # Hunt session orchestration (rotation → search → score → dedup → route)
  hunter-types.ts           # Lead Hunter type definitions (verticals, metros, scoring)
  hunter-data.ts            # JSON I/O for hunt state, log, and backlog files
  types.ts                  # Core domain types (Lead, AERO-10 score, LeadStatus)
  leads.ts                  # Lead CRUD + file I/O for data/leads.json
  telegram.ts               # Telegram notification helpers (rate-limited 1 msg/sec)
  aero7-scorer.ts           # AERO-10 score parsing, validation, and grading (A+ to F)
  gmail.ts                  # Email subject/body template builders
  gmail-api.ts              # Gmail OAuth draft creation
  deduplicator.ts           # Lead dedup by name+city, domain, or email
  fabrication-scan.ts       # Report content verification + em-dash removal
  report-template.ts        # Industry-specific color schemes + branding config
  deploy.ts                 # GitHub API auto-deploy for HTML reports
  sanitize.ts               # Input sanitization (field length, HTML stripping, email/URL validation)
auth.ts                     # NextAuth v5 config (single admin, bcryptjs password)
middleware.ts               # Route protection: /admin/* and /api/* (except auth, cron)
data/                       # JSON file storage (gitignored)
  leads.json                # All leads with full history
  hunt-state.json           # Rotation state + session counts
  hunt-log.json             # Last 100 hunt sessions
  prospect-backlog.json     # P3 prospects (last 500)
public/blindspot/           # Generated HTML report files
vercel.json                 # Cron schedules for automated hunts
```

## Key Concepts

### Lead Pipeline
Leads flow through 15 statuses: `queued` → `researching` → `research_complete` → `generating_report` → `report_ready` → `reviewing` → `approved` → `email_drafted` → `sending` → `sent` → `replied` → `follow_up_1/2/3` → `closed_won` / `closed_lost` / `closed_no_response`

### AERO-10 Scoring
Each lead is scored on 10 pillars (0-10 each, 100 max):
1. Answer Quality (P1)
2. Entity Optimization (P2)
3. Relevance & Freshness (P3)
4. Optimization Structure (P4)
5. Voice & Authenticity (P5)
6. Authority Signals (P6)
7. Authority Distribution (P7)
8. Consensus & Co-Citation (P8)
9. Platform-Specific Readiness (P9)
10. Technical AI Accessibility (P10)

Grades: A+ (≥90), A (≥80), B+ (≥70), B (≥60), C (≥50), D (≥40), F (<40)

### Lead Hunter Bot
Automated prospect discovery using Claude with web search:
- **3-Pass Search:** pain signals → prospect data → contact enrichment
- **5-Factor Scoring (0-50):** AI Blind Spot, Reputation Strength, Content Gap, Revenue Potential, Contact Quality
- **Priority Routing:** P1 (≥35) and P2 (≥25) → queue, P3 (<25) → backlog
- **Rotation:** 8 verticals × 8 metros, advancing weekly
- **Verticals:** Personal Injury Attorney, HVAC, Roofing, Plumber, Electrician, Dentist, Chiropractor, Med Spa
- **Metros:** Los Angeles, Phoenix, Dallas, Houston, Atlanta, Denver, San Diego, Tampa
- Uses model: `claude-haiku-4-5-20251001`

### Report Generation Pipeline
1. Research with Claude Haiku + web_search (credentials, reviews, schema, AI citations)
2. Generate branded HTML report with Claude Sonnet (industry-specific colors)
3. Fabrication scan against verified research data
4. Em-dash detection + auto-strip
5. Auto-deploy to GitHub (if configured)
6. Generate preview card image

## Environment Variables
Required in `.env.local` (not in git):

| Variable | Required | Purpose |
|---|---|---|
| `ANTHROPIC_API_KEY` | Yes | Claude API access |
| `ADMIN_PASSWORD_HASH` | Yes | bcryptjs hash for admin login |
| `CRON_SECRET` | Yes | Bearer token for `/api/cron/*` routes |
| `HUNT_ENABLED` | No | Set `true` to enable Lead Hunter Bot |
| `HUNT_MAX_LEADS_PER_SESSION` | No | Default: 10 |
| `TELEGRAM_BOT_TOKEN` | No | Telegram notification bot |
| `TELEGRAM_CHAT_ID` | No | Telegram notification channel |
| `GMAIL_CLIENT_ID` | No | Gmail OAuth for email drafts |
| `GMAIL_CLIENT_SECRET` | No | Gmail OAuth for email drafts |
| `GMAIL_REFRESH_TOKEN` | No | Gmail OAuth for email drafts |
| `GMAIL_SEND_AS` | No | Override sender (default: support@theanswerengine.ai) |
| `GITHUB_TOKEN` | No | Auto-deploy reports to repo |
| `NEXTAUTH_SECRET` | Yes | NextAuth session encryption |

## Cron Schedules (Vercel)
- **Daily hunt:** Weekdays at 1:00 PM PT — `/api/cron/hunt?trigger=cron_daily`
- **Weekly hunt:** Fridays at 1:30 PM PT — `/api/cron/hunt?trigger=cron_weekly`
- **Monthly hunt:** First Monday at 2:00 PM PT — `/api/cron/hunt?trigger=cron_monthly`

## Conventions
- **No database** — all state lives in `data/*.json` files
- **No Anthropic SDK** — use direct fetch via `lib/anthropic.ts`
- **Dark theme only** — backgrounds `#0A0A0F` / `#0F1117`, text white/zinc variants
- **Industry colors** defined in `lib/report-template.ts` (legal=gold, HVAC/trade=orange, medical=teal)
- **Input sanitization** via `lib/sanitize.ts` — always sanitize user input at API boundaries
- **Rate limiting** — 10 reports/hour in `lib/anthropic.ts`, 15s delay between hunter API calls
- **Telegram notifications** for all major pipeline events
- **Path alias** `@/*` maps to project root (tsconfig)
- API route max durations: 120s default, 300s for batch pipeline
