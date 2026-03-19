import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AEO Case Studies: Real AI Citation Results',
  description: 'See how a LA real estate agent went from invisible to 8,400+ monthly clicks through Answer Engine Optimization. Real data, real results.',
  alternates: { canonical: 'https://www.theanswerengine.ai/case-studies' },
  openGraph: {
    title: 'AEO Case Studies | The Answer Engine',
    description: 'Real results from Answer Engine Optimization. 8,400+ monthly clicks, 1.1M impressions.',
    url: 'https://www.theanswerengine.ai/case-studies',
    type: 'website'
  },
  twitter: { card: 'summary_large_image', title: 'AEO Case Studies', description: 'Real AI citation results from Answer Engine Optimization.' }
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
