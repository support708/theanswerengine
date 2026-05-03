import type { Metadata } from 'next';
import { ReadingProgress } from '../components/ReadingProgress';

export const metadata: Metadata = {
  title: 'Answer Engine Optimization Blog - Expert AEO Insights & Strategies | The Answer Engine',
  description: 'Expert insights on Answer Engine Optimization, AI citations, and how to get your business recommended by ChatGPT, Claude, Google AI Overviews, and Perplexity.',

  openGraph: {
    title: 'Answer Engine Optimization Blog - Expert AEO Insights',
    description: 'Learn how to get AI platforms to cite your business instead of competitors.',
    type: 'website',
    url: 'https://www.theanswerengine.ai/blog',
    images: [
      {
        url: 'https://www.theanswerengine.ai/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Answer Engine Optimization Blog — AEO Insights & Strategies',
      }
    ],
    siteName: 'The Answer Engine',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Answer Engine Optimization Blog',
    description: 'Expert insights on AEO and AI citations.',
    images: ['https://www.theanswerengine.ai/og-default.png'],
    creator: '@theanswerengine',
  },

  alternates: {
    canonical: 'https://www.theanswerengine.ai/blog',
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
  return (
    <>
      <ReadingProgress />
      {children}

      {/* Universal blog footer CTA — every article gets this */}
      <section className="bg-[#FAF8F2] border-t border-white/10 py-20 px-6 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
            <a
              href="/industries/real-estate"
              className="block p-10 bg-[#F4F0E8] hover:bg-[#F4F0E8] transition-colors border-l-4 border-l-[#F27D24] border-b md:border-b-0 md:border-r border-white/10 group"
            >
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] block mb-3">
                Who We Serve // Real Estate Lead
              </span>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tighter text-[#0A0A0A] mb-4">
                AEO for Real Estate Agents
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                The playbook we built on our own real estate site — 1.14M+ monthly impressions, cited by 4 of 4 AI platforms. Now available to one agent per market.
              </p>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] group-hover:text-white transition-colors inline-flex items-center gap-2">
                See the real estate playbook →
              </span>
            </a>
            <a
              href="/services/answer-engine-audit"
              className="block p-10 bg-[#F4F0E8] hover:bg-[#F4F0E8] transition-colors border-l-4 border-l-[#F27D24] group"
            >
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] block mb-3">
                Free // 30-Minute Audit
              </span>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tighter text-[#0A0A0A] mb-4">
                Run a Free Answer Engine Audit
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                See how ChatGPT, Claude, Perplexity, and Google AI answer questions about your category today — and where your name should be.
              </p>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] group-hover:text-white transition-colors inline-flex items-center gap-2">
                Book the audit →
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
