import type { Metadata } from 'next';
import { AdminSessionProvider } from './providers';

export const metadata: Metadata = {
  title: 'Admin Pipeline | The Answer Engine',
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminSessionProvider>
      <div className="min-h-screen bg-[#0F1117]">
        {children}
      </div>
    </AdminSessionProvider>
  );
}
