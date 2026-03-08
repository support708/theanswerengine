# Project Guidelines

## SAFETY RULES (DO NOT VIOLATE)
- **NEVER use `rm -rf` in this project** — Use `npx rimraf <path>` for safe deletion instead
- **NEVER delete .next, node_modules, or any directory with `rm -rf`** — Windows/Git Bash can delete the entire project
- **ALWAYS `git commit && git push` before any cleanup or cache-clearing operation**
- **NEVER chain destructive commands with `&&`** — if one fails, the next may run in wrong context

## Build & Dev
- `npm run dev` — starts dev server on port 3000
- `npm run build` — production build
- Clear build cache safely: `npx rimraf .next`

## Architecture
- Next.js 16 App Router, React 19, Tailwind v4, TypeScript
- NextAuth v5 (beta) for admin auth — single admin user, JWT sessions
- JSON file storage (data/leads.json) — no database
- Anthropic API via direct fetch in lib/anthropic.ts (NOT SDK)
- Telegram bot for notifications

## Key Paths
- Admin pipeline: app/admin/pipeline/
- API routes: app/api/
- Core library: lib/
- Lead Hunter Bot: lib/hunter.ts, lib/scheduler.ts, lib/hunter-types.ts, lib/hunter-data.ts
- Auth: auth.ts + middleware.ts

## Environment
- .env.local required (not in git) — copy from .env.example
- CRON_SECRET needed for /api/cron/* routes
- ANTHROPIC_API_KEY for Claude API calls
