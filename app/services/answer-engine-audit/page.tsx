import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Answer Engine Audit | See Where AI Can\'t Find Your Business',
  description:
    'Free 30-minute audit across ChatGPT, Claude, Perplexity, and Google AI. Your AI visibility score, the citation gaps, and the 3 fixes that move the needle first.',
  alternates: { canonical: 'https://www.theanswerengine.ai/services/answer-engine-audit' },
  openGraph: {
    title: 'Free Answer Engine Audit | See Where AI Can\'t Find Your Business',
    description: 'Live scan across 4 AI platforms. See where your business is invisible, who AI is recommending instead, and the 3 fastest fixes.',
    url: 'https://www.theanswerengine.ai/services/answer-engine-audit',
    type: 'website',
    siteName: 'The Answer Engine',
    images: [
      {
        url: 'https://www.theanswerengine.ai/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Free Answer Engine Audit — AI Visibility Scan',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Answer Engine Audit | See Where AI Can\'t Find Your Business',
    description: 'Free 30-min scan across 4 AI platforms. Your AI visibility score, citation gaps, and the 3 fastest fixes.',
    site: '@theanswerengine',
    images: ['https://www.theanswerengine.ai/og-default.png'],
  },
};

const AUDIT_CARDS = [
  {
    num: '01',
    title: 'AI Visibility Score',
    body: 'How often ChatGPT, Claude, Perplexity, and Google AI recommend you vs. your competitors. Scored across 50+ queries in your category.',
  },
  {
    num: '02',
    title: 'Citation Gap Analysis',
    body: 'The specific queries you\'re invisible on — and the exact businesses AI is recommending instead. No guessing.',
  },
  {
    num: '03',
    title: 'AERO-10 Scorecard',
    body: 'Your grade on all ten authority pillars — Answer Quality, Entity Optimization, Structural Authority, and more. Shows where you stand today.',
  },
  {
    num: '04',
    title: 'Top 3 Fixes',
    body: 'The three highest-impact changes prioritized by lift vs. effort. Not a 30-page report — an action list.',
  },
];

const FAQS = [
  {
    q: 'Is this really free? What\'s the catch?',
    a: 'No catch. The audit is free because we want you to see the data for yourself. If the findings make a strong case for working together, we\'ll share how the 90-day foundation and Monthly Program work. Zero obligation, zero pressure.',
  },
  {
    q: 'How long does the audit take?',
    a: 'The live walkthrough is 30 minutes. We scan your business across 4 AI platforms on the call so you see results in real time. A written summary follows within 48 hours.',
  },
  {
    q: 'What do I need to bring?',
    a: 'Your business name, website, and the city + category you operate in. That\'s it. We handle the rest.',
  },
  {
    q: 'How is this different from a regular SEO audit?',
    a: 'Traditional SEO audits grade you on Google rankings. This grades you on how AI platforms answer buying questions about your category. Different target, different signals, different fixes. The overlap is maybe 20%.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Free Answer Engine Audit',
  description:
    'Free 30-minute audit of how ChatGPT, Claude, Perplexity, and Google AI perceive and recommend your business today.',
  provider: {
    '@type': 'Organization',
    name: 'The Answer Engine',
    url: 'https://www.theanswerengine.ai',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  mainEntityOfPage: 'https://www.theanswerengine.ai/services/answer-engine-audit',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function AnswerEngineAuditPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': 'https://www.theanswerengine.ai/services/answer-engine-audit#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theanswerengine.ai' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.theanswerengine.ai/services' },
          { '@type': 'ListItem', position: 3, name: 'Free Answer Engine Audit', item: 'https://www.theanswerengine.ai/services/answer-engine-audit' },
        ],
      }) }} />

      <main className="min-h-screen bg-[#FAF8F2] text-white overflow-x-hidden pt-16">
        {/* Scanline Overlay */}
        <div
          className="fixed inset-0 z-50 pointer-events-none opacity-[0.03]"
          style={{
            background:
              'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.2) 50%), linear-gradient(90deg, rgba(255,0,0,0.02), rgba(0,255,0,0.01), rgba(0,0,255,0.02))',
            backgroundSize: '100% 2px, 3px 100%',
          }}
          aria-hidden="true"
        />

        {/* HERO */}
        <section
          className="relative py-24 md:py-32 px-6 lg:px-24 border-b border-white/5"
          style={{
            backgroundImage: 'radial-gradient(#F27D2411 0.5px, transparent 0.5px)',
            backgroundSize: '24px 24px',
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Link
                href="/"
                className="font-mono text-[10px] tracking-widest uppercase text-white/40 hover:text-[#F27D24] transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Home
              </Link>
            </div>

            <div className="inline-block border border-[#F27D24]/30 px-3 py-1 mb-8">
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#F27D24] uppercase">
                Free // 30-Minute Audit
              </span>
            </div>

            <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-8 max-w-5xl">
              FREE ANSWER ENGINE{' '}
              <span className="text-[#F27D24]">AUDIT</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 border-l-2 border-[#F27D24] pl-6">
              See how ChatGPT, Claude, Perplexity, and Google AI answer questions about your category today — and where you&apos;re missing from the answer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/theanswerengine-support/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F27D24] text-black font-black px-10 py-5 text-xl tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase inline-flex items-center gap-3"
              >
                Book 30-Min Audit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <Link
                href="/#territory-check"
                className="border-2 border-white/20 text-[#0A0A0A] font-bold px-10 py-5 text-xl tracking-tighter hover:bg-white/5 hover:border-white/30 transition-all font-headline uppercase"
              >
                Check Territory
              </Link>
            </div>

            <p className="mt-6 font-mono text-xs text-white/40 tracking-widest uppercase">
              No pitch, just the data // 30 minutes
            </p>
          </div>
        </section>

        {/* WHAT'S IN THE AUDIT */}
        <section className="py-24 md:py-32 px-6 lg:px-24 bg-[#F4F0E8]">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] block mb-3">
              What&apos;s Included // Four Deliverables
            </span>
            <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter mb-16">
              WHAT YOU{' '}
              <span className="text-[#F27D24]">GET</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
              {AUDIT_CARDS.map((card, i) => (
                <div
                  key={card.num}
                  className={`p-10 bg-[#FAF8F2] border-l-4 border-l-[#F27D24] hover:bg-[#F4F0E8] transition-colors
                    ${i % 2 === 0 ? 'md:border-r border-white/10' : ''}
                    ${i < 2 ? 'border-b border-white/10' : ''}
                  `}
                >
                  <div className="w-10 h-10 border border-[#F27D24]/40 flex items-center justify-center mb-6">
                    <span className="font-mono text-[10px] text-[#F27D24]">{card.num}</span>
                  </div>
                  <h3 className="font-headline font-black text-2xl uppercase tracking-tighter mb-4">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF BLOCK */}
        <section className="py-24 md:py-32 px-6 lg:px-24 bg-[#FAF8F2] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#F4F0E8] border-l-4 border-l-[#F27D24] p-10 md:p-14">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] block mb-4">
                Why This Audit Matters // Our Own Proof
              </span>
              <h2 className="font-headline font-black text-3xl md:text-4xl uppercase tracking-tighter mb-6 leading-tight">
                We ran this exact audit on ourselves before we ran it for anyone else.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-3xl">
                Our own real estate site (LA Metro Home Finder) went from invisible to 1.14M+ monthly impressions with citations across all four major AI platforms. We didn&apos;t sell the framework until we proved it on a live business in the most competitive local market in America. Now we&apos;re running the same scan — free — on yours.
              </p>
              <Link
                href="/case-studies"
                className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                Read the full case study
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32 px-6 lg:px-24 bg-[#F4F0E8]">
          <div className="max-w-4xl mx-auto">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] block mb-3">
              Frequently Asked // Audit Details
            </span>
            <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter mb-12">
              COMMON{' '}
              <span className="text-[#F27D24]">QUESTIONS</span>
            </h2>

            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-[#FAF8F2] border border-white/5 border-l-4 border-l-transparent open:border-l-[#F27D24] transition-colors"
                >
                  <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
                    <h4 className="font-headline font-bold text-lg uppercase tracking-tighter text-white group-open:text-[#F27D24] transition-colors">
                      {faq.q}
                    </h4>
                    <span className="font-mono text-white/40 text-xl select-none ml-4 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed max-w-3xl">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 px-6 lg:px-24 bg-[#F27D24]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-black/60 mb-4 block">
                Ready // Book Your Free Audit
              </span>
              <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter text-black leading-none">
                LET&apos;S SEE WHAT AI<br />THINKS OF YOUR BUSINESS.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/theanswerengine-support/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-[#F27D24] px-10 py-4 font-headline font-black uppercase tracking-tighter text-sm hover:bg-[#FAF8F2] transition-colors inline-flex items-center gap-3 whitespace-nowrap"
              >
                BOOK 30-MIN AUDIT
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <Link
                href="/#territory-check"
                className="border-2 border-black text-black px-10 py-4 font-headline font-black uppercase tracking-tighter text-sm hover:bg-black hover:text-[#F27D24] transition-colors"
              >
                CHECK TERRITORY
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
