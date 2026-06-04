export { auth as middleware } from './auth';

export const config = {
  // Protect /admin routes and custom /api routes.
  // Payload REST collection endpoints are excluded — they have their own
  // requireApiKey() gate in app/(payload)/api/[...slug]/route.ts.
  matcher: [
    '/admin/:path*',
    '/api/((?!auth|cron|og|telegram|command-center/heartbeat|webhook|indexnow|borges-os|docusign|gsc-impressions|posts|content-queue|citation-log|aero-scores|scanner-leads|reports|brand-audits|users).*)',
  ],
};
