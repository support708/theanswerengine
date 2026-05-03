import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Free AI Blind Spot Report | The Answer Engine',
  description:
    'Find out where your business is invisible to AI search. Get a free Blind Spot Report showing how ChatGPT, Claude, Perplexity, and Google AI see your business.',
  alternates: { canonical: 'https://www.theanswerengine.ai/blindspot' },
  openGraph: {
    title: 'Free AI Blind Spot Report | The Answer Engine',
    description: 'Find out exactly where your business is invisible to ChatGPT, Claude, Perplexity, and Google AI. Free diagnostic with your AI visibility score and fix list.',
    url: 'https://www.theanswerengine.ai/blindspot',
    type: 'website',
    siteName: 'The Answer Engine',
    images: [
      {
        url: 'https://www.theanswerengine.ai/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Free AI Blind Spot Report — The Answer Engine',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Blind Spot Report | The Answer Engine',
    description: 'Find out exactly where your business is invisible to ChatGPT, Claude, Perplexity, and Google AI. Free diagnostic.',
    site: '@theanswerengine',
    images: ['https://www.theanswerengine.ai/og-default.png'],
  },
}

const faqs = [
  {
    question: 'What exactly is an AI Blind Spot Report?',
    answer:
      'It is a detailed analysis of how AI platforms like ChatGPT, Claude, Perplexity, and Google AI Overviews perceive your business. We query each platform with the exact phrases your customers use, then document where you show up, where you do not, and what your competitors are doing differently to get cited.',
  },
  {
    question: 'How long does the analysis take?',
    answer:
      'The strategy call is 30 minutes. During that call, we walk through preliminary findings from our AI visibility scan. After the call, we deliver a full written report within 48 hours that includes your AI Visibility Score, Citation Gap Analysis, and Fix Priority List.',
  },
  {
    question: 'Is this really free? What is the catch?',
    answer:
      'There is no catch. The Blind Spot Report is free because we want you to see the data for yourself. If the findings make a strong case for working together, we will share how our implementation program works. But there is zero obligation and zero pressure.',
  },
  {
    question: 'What kind of businesses benefit most from this?',
    answer:
      'Any business that depends on being found by customers online. Service-based businesses, local companies, SaaS products, professional services, and e-commerce brands all benefit. If your customers are searching for solutions you offer, AI platforms are already shaping whether they find you or a competitor.',
  },
  {
    question: 'What if AI is giving wrong information about my business?',
    answer:
      'We flag that in the report. The scan will show you exactly what ChatGPT, Claude, Perplexity, and Google AI say about you today, including misattributed sources feeding bad data into AI training. Fixing AI misinformation is part of what the full 90-day foundation handles.',
  },
  {
    question: 'How long until I see results if we work together?',
    answer:
      'Foundation builds over 90 days. Most clients see their first AI citations between weeks 6 and 10. The full citation pattern — where AI consistently recommends you for your category — typically stabilizes in months 3 to 6. The 90-day citation guarantee backs this timeline.',
  },
  {
    question: 'Do you have proof this actually works?',
    answer:
      'Yes. Our own real estate site (lametrohomefinder.com) reached 1.14M+ monthly impressions with citations across ChatGPT, Claude, Perplexity, and Google AI — 4 of 4 major AI platforms. We built and tested the AERO-10 framework there first before selling it to clients.',
  },
  {
    question: 'How is this different from a regular SEO audit?',
    answer:
      'Traditional SEO audits grade you on Google rankings. This grades you on how AI platforms answer buying questions about your category. Different target, different signals, different fixes. The overlap is maybe 20%.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function BlindSpotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': 'https://www.theanswerengine.ai/blindspot#webpage',
              name: 'Free AI Blind Spot Report — The Answer Engine',
              description: 'Find out where your business is invisible to ChatGPT, Claude, Perplexity, and Google AI. Free diagnostic with AI visibility score and fix list.',
              url: 'https://www.theanswerengine.ai/blindspot',
              inLanguage: 'en-US',
              isPartOf: { '@id': 'https://www.theanswerengine.ai/#website' },
              breadcrumb: { '@id': 'https://www.theanswerengine.ai/blindspot#breadcrumb' },
            },
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://www.theanswerengine.ai/blindspot#breadcrumb',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theanswerengine.ai' },
                { '@type': 'ListItem', position: 2, name: 'Blind Spot Report', item: 'https://www.theanswerengine.ai/blindspot' },
              ],
            },
          ],
        }) }}
      />

      <main className="min-h-screen bg-[#FAF8F2] text-[#0A0A0A] overflow-x-hidden pt-16">
        {/* HERO */}
        <section
          className="relative py-24 md:py-32 px-6 lg:px-24 border-b border-white/5"
          style={{
            backgroundImage: 'radial-gradient(#F27D2411 0.5px, transparent 0.5px)',
            backgroundSize: '24px 24px',
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,106,0,0.10) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto">
            <div className="mb-8">
              <Link href="/" className="font-mono text-[10px] tracking-widest uppercase text-black/40 hover:text-[#F27D24] transition-colors inline-flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Home
              </Link>
            </div>

            <div className="inline-block border border-[#F27D24]/30 px-3 py-1 mb-8">
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#F27D24] uppercase">
                Free // AI Visibility Analysis
              </span>
            </div>

            <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-8 max-w-5xl">
              WHERE IS YOUR BUSINESS{' '}
              <span className="text-[#F27D24]">INVISIBLE</span> TO AI?
            </h1>

            <p className="text-black/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 border-l-2 border-[#F27D24] pl-6">
              A free Blind Spot Report showing exactly how ChatGPT, Claude, Perplexity, and Google AI see your business right now — with the top 3 fixes that move the needle first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://calendly.com/theanswerengine-support/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F27D24] text-black font-black px-10 py-5 text-xl tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase inline-flex items-center gap-3"
              >
                Book 30-Min Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/#territory-check"
                className="border-2 border-black/20 text-[#0A0A0A] font-bold px-10 py-5 text-xl tracking-tighter hover:bg-white/5 hover:border-white/30 transition-all font-headline uppercase"
              >
                Check Territory
              </Link>
            </div>
            <p className="mt-6 font-mono text-xs text-black/40 tracking-widest uppercase">
              No pitch, just the data // 30 minutes
            </p>
          </div>
        </section>

        {/* WHAT YOU'LL DISCOVER */}
        <section className="py-24 md:py-32 px-6 lg:px-24 bg-[#F4F0E8]">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] block mb-3">
              What&apos;s Included // Three Deliverables
            </span>
            <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter mb-16">
              WHAT YOU WILL{' '}
              <span className="text-[#F27D24]">DISCOVER</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/10">
              {[
                {
                  num: '01',
                  title: 'AI Visibility Score',
                  body: 'How often AI platforms recommend you vs. your competitors. See exactly where you rank across ChatGPT, Claude, Perplexity, and Google AI Overviews.',
                },
                {
                  num: '02',
                  title: 'Citation Gap Analysis',
                  body: 'Where competitors are getting cited and you are not. We identify the specific queries, topics, and content gaps that keep you out of AI responses.',
                },
                {
                  num: '03',
                  title: 'Fix Priority List',
                  body: 'The three highest-impact changes to make first. No guesswork. Each recommendation is ranked by effort required and expected lift in AI visibility.',
                },
              ].map((c, i, arr) => (
                <div
                  key={c.num}
                  className={`p-10 bg-[#FAF8F2] border-l-4 border-l-[#F27D24] ${i < arr.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''} border-black/10 hover:bg-[#F4F0E8] transition-colors`}
                >
                  <div className="w-10 h-10 border border-[#F27D24]/40 flex items-center justify-center mb-6">
                    <span className="font-mono text-[10px] text-[#F27D24]">{c.num}</span>
                  </div>
                  <h3 className="font-headline font-black text-2xl uppercase tracking-tighter mb-4 text-[#0A0A0A]">{c.title}</h3>
                  <p className="text-black/60 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST SIGNALS */}
        <section className="py-16 px-6 lg:px-24 bg-[#FAF8F2] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/10">
              {[
                { val: '1.14M+', label: 'Monthly Impressions (Our Site)' },
                { val: '4 / 4', label: 'Major AI Platforms Citing Us' },
                { val: '90-Day', label: 'Citation Guarantee' },
              ].map((stat, i, arr) => (
                <div
                  key={stat.label}
                  className={`p-8 bg-[#F4F0E8] ${i < arr.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''} border-black/10`}
                >
                  <div className="font-headline font-black text-4xl md:text-5xl text-[#F27D24] mb-2">{stat.val}</div>
                  <div className="font-mono text-[10px] text-black/40 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 px-6 lg:px-24 bg-[#F27D24]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-black/60 mb-4 block">
                Ready // Book Your Free Report
              </span>
              <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter text-black leading-none">
                SEE WHAT AI THINKS<br />OF YOUR BUSINESS.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://calendly.com/theanswerengine-support/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-[#F27D24] px-10 py-4 font-headline font-black uppercase tracking-tighter text-sm hover:bg-[#FAF8F2] transition-colors inline-flex items-center gap-3 whitespace-nowrap"
              >
                BOOK 30-MIN CALL
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/#territory-check"
                className="border-2 border-black text-black px-10 py-4 font-headline font-black uppercase tracking-tighter text-sm hover:bg-black hover:text-[#F27D24] transition-colors"
              >
                CHECK TERRITORY
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32 px-6 lg:px-24 bg-[#FAF8F2]">
          <div className="max-w-4xl mx-auto">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] block mb-3">
              Common Questions // FAQ
            </span>
            <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter mb-12">
              FREQUENTLY ASKED{' '}
              <span className="text-[#F27D24]">QUESTIONS</span>
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-[#F4F0E8] border border-black/10 border-l-4 border-l-transparent open:border-l-[#F27D24] transition-colors"
                >
                  <summary className="px-6 py-5 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <h4 className="font-headline font-bold text-base md:text-lg uppercase tracking-tighter text-[#0A0A0A] group-open:text-[#F27D24] transition-colors">
                      {faq.question}
                    </h4>
                    <span className="font-mono text-black/40 text-xl select-none ml-4 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-black/60 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
