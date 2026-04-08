import type { Metadata } from 'next';
import "../globals.css";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * Root layout for the (borges) route group.
 * Intentionally excludes the site Nav, footer, and all AE branding.
 * This is a private internal tool.
 */
export default function BorgesRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
