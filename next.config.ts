import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    'sharp',
    'googleapis',
    '@google/generative-ai',
    '@google/genai',
    '@ai-sdk/anthropic',
    'ai',
    'gsap',
  ],
  turbopack: {
    root: __dirname
  },
  async redirects() {
    return [];
  },
  async headers() {
    const securityHeaders = [
      { key: 'X-Frame-Options',           value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options',     value: 'nosniff' },
      { key: 'X-XSS-Protection',           value: '1; mode=block' },
      { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy',         value: 'camera=(), microphone=(), geolocation=(), payment=()' },
      { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
      { key: 'Cross-Origin-Opener-Policy',  value: 'same-origin' },
      { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
      { key: 'Content-Security-Policy',    value: [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' https://vercel.live https://*.vercel-scripts.com https://*.vercel.app",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: blob: https:",
        "connect-src 'self' https://*.vercel.app https://vitals.vercel-insights.com https://vercel.live",
        "frame-ancestors 'none'",
      ].join('; ')},
    ];
    return [
      {
        source: '/api/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          ...securityHeaders,
        ]
      },
      {
        source: '/((?!api).*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          ...securityHeaders,
        ]
      }
    ];
  }
};

export default nextConfig;
