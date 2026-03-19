import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact The Answer Engine | Free AEO Strategy Call',
  description: 'Book a free 30-minute AEO strategy call. Find out how to get your business cited by ChatGPT, Claude, and Google AI Overviews.',
  alternates: { canonical: 'https://www.theanswerengine.ai/contact' },
  openGraph: {
    title: 'Contact The Answer Engine',
    description: 'Book a free AEO strategy call.',
    url: 'https://www.theanswerengine.ai/contact',
    type: 'website'
  },
  twitter: { card: 'summary_large_image', title: 'Contact The Answer Engine', description: 'Book a free AEO strategy call.' }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
