import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname
  },
  async redirects() {
    return [];
  },
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow'
          }
        ]
      },
      {
        source: '/((?!api).*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
