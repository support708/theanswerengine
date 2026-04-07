import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Borges Operating System',
  robots: 'noindex, nofollow',
  description: 'Strategic operating system for The Borges Family',
};

export default function BorgesOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
