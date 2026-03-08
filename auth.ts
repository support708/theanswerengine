import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Admin Login',
      credentials: {
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.password || typeof credentials.password !== 'string') {
          return null;
        }

        const hash = process.env.ADMIN_PASSWORD_HASH;
        if (!hash) {
          console.error('ADMIN_PASSWORD_HASH env var not set');
          return null;
        }

        const valid = await bcrypt.compare(credentials.password, hash);
        if (!valid) return null;

        // Single admin user - no database needed
        return { id: 'admin', name: 'Admin', email: 'admin@theanswerengine.ai' };
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 8 * 60 * 60, // 8 hours
  },
  callbacks: {
    authorized({ auth: session, request: { nextUrl } }) {
      const isLoggedIn = !!session?.user;
      const isAdminRoute = nextUrl.pathname.startsWith('/admin');
      const isLoginPage = nextUrl.pathname === '/admin/login';
      const isApiRoute = nextUrl.pathname.startsWith('/api/');

      // Protect /api/ routes (except /api/auth and /api/cron)
      if (isApiRoute && !nextUrl.pathname.startsWith('/api/auth') && !nextUrl.pathname.startsWith('/api/cron')) {
        return isLoggedIn;
      }

      // Protect /admin routes (except login page)
      if (isAdminRoute && !isLoginPage) {
        return isLoggedIn;
      }

      // Redirect logged-in users away from login page
      if (isLoginPage && isLoggedIn) {
        return Response.redirect(new URL('/admin/pipeline', nextUrl));
      }

      return true;
    },
  },
});
