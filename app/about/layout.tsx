import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About The Answer Engine | AEO Specialists in Pasadena, CA',
  description: 'Meet the team behind The Answer Engine. Helping local service businesses get cited by ChatGPT, Claude, Perplexity, and Google AI Overviews.',
  alternates: { canonical: 'https://www.theanswerengine.ai/about' },
  openGraph: {
    title: 'About The Answer Engine | AEO Specialists',
    description: 'Meet the team behind The Answer Engine. Helping local service businesses get cited by AI platforms.',
    url: 'https://www.theanswerengine.ai/about',
    type: 'website'
  },
  twitter: { card: 'summary_large_image', title: 'About The Answer Engine', description: 'AEO specialists helping local businesses get cited by AI.' }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
