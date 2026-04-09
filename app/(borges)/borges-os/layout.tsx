import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Borges OS',
  description: 'Private family operating system',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function BorgesOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
