import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Answer Engine Optimization Blog - Expert AEO Insights & Strategies | The Answer Engine',
  description: 'Expert insights on Answer Engine Optimization, AI citations, and how to get your business recommended by ChatGPT, Claude, Google AI Overviews, and Perplexity.',

  openGraph: {
    title: 'Answer Engine Optimization Blog - Expert AEO Insights',
    description: 'Learn how to get AI platforms to cite your business instead of competitors.',
    type: 'website',
    url: 'https://theanswerengine.ai/blog',
    images: [
      {
        url: 'https://theanswerengine.ai/images/blog-featured.png',
        width: 1200,
        height: 630,
        alt: 'Answer Engine Optimization Blog',
      }
    ],
    siteName: 'The Answer Engine',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Answer Engine Optimization Blog',
    description: 'Expert insights on AEO and AI citations.',
    images: ['https://theanswerengine.ai/images/blog-featured.png'],
    creator: '@theanswerengine',
  },

  alternates: {
    canonical: 'https://theanswerengine.ai/blog',
  },

  keywords: [
    'answer engine optimization',
    'AEO blog',
    'AI citations',
    'ChatGPT optimization',
    'Google AI Overviews',
    'AI search optimization',
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
