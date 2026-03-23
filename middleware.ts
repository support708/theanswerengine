export { auth as middleware } from './auth';

export const config = {
  // Protect all /admin routes and /api routes (except auth, cron, og, telegram, heartbeat endpoints)
  matcher: ['/admin/:path*', '/api/((?!auth|cron|og|telegram|command-center/heartbeat|webhook|indexnow).*)'],
};
