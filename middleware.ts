export { auth as middleware } from './auth';

export const config = {
  // Protect all /admin routes and /api routes (except auth endpoints)
  matcher: ['/admin/:path*', '/api/((?!auth|cron).*)'],
};
