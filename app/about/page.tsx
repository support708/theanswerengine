import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About The Answer Engine | Built By a Practitioner, Not a Theorist',
  description:
    'Justin Borges built the AERO-10 framework on his own real estate site first — 1.14M+ monthly impressions, 4 AI platforms citing. 13+ years in LA real estate. $200M+ closed. Now the system is yours.',
  alternates: {
    canonical: 'https://www.theanswerengine.ai/about',
  },
  openGraph: {
    title: 'About The Answer Engine | Built By a Practitioner, Not a Theorist',
    description:
      'AEO built by a practitioner. Tested on our own site first — 1.14M+ monthly impressions and AI citations across 4 platforms.',
    url: 'https://www.theanswerengine.ai/about',
    type: 'website',
    siteName: 'The Answer Engine',
    images: [
      {
        url: 'https://www.theanswerengine.ai/justin-borges.webp',
        width: 1200,
        height: 630,
        alt: 'Justin Borges — Founder, The Answer Engine',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About The Answer Engine | Built By a Practitioner, Not a Theorist',
    description: 'Justin Borges built the AERO-10 framework on his own real estate site first — 1.14M+ monthly impressions, 4 AI platforms citing.',
    site: '@theanswerengine',
    images: ['https://www.theanswerengine.ai/justin-borges.webp'],
  },
};

const AERO_10_PILLARS = [
  { num: '01', label: 'Answer Quality' },
  { num: '02', label: 'Entity Optimization' },
  { num: '03', label: 'Relevance Depth' },
  { num: '04', label: 'Structural Authority' },
  { num: '05', label: 'Voice Calibration' },
  { num: '06', label: 'Authority Signals' },
  { num: '07', label: 'Distribution Matrix' },
  { num: '08', label: 'Platform Alignment' },
  { num: '09', label: 'Cluster Architecture' },
  { num: '10', label: 'Conversion Optimization' },
];

const TIMELINE = [
  {
    code: '2012 — The Beginning',
    headline: 'Real Estate Expert',
    body: 'Entered real estate in Los Angeles — the most competitive market in America with 70,000+ active agents. 13+ years and $200M+ in closed transactions followed.',
  },
  {
    code: '2023 — Building the System',
    headline: 'AEO Framework Built',
    body: 'Built the AEO system for his own real estate site. Tested every tactic in real market conditions — no simulations, no case studies from other industries.',
  },
  {
    code: '2024 — First AI Citations',
    headline: 'AI Citations Proven',
    body: 'Site ranked as the #1 AI recommendation across ChatGPT, Claude, Perplexity, and Google AI Overviews for high-intent real estate queries in LA County.',
  },
  {
    code: '2025 — The Answer Engine Launches',
    headline: 'The Answer Engine',
    body: 'Founded The Answer Engine to bring the AERO-10 framework to local service businesses nationwide. First clients onboarded. Territory locks activated.',
  },
];

const DIFFERENTIATORS = [
  {
    tag: 'Battle-Tested Results',
    body: 'Every element of the AERO-10 framework was built on a live business in the most competitive local market in the country. No whiteboard theories. No borrowed case studies. Real money was on the line.',
  },
  {
    tag: 'Exclusive Territories',
    body: 'We work with one business per category, per city. Once you claim your territory, it is locked. Competitors cannot buy into the same market. Your advantage compounds permanently.',
  },
  {
    tag: '90-Day Guarantee',
    body: 'Get cited by at least 2 AI platforms within 90 days or we work for free until you do. You can also take a full refund. The guarantee is hard-coded into every engagement.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F2] text-white overflow-x-hidden">
      {/* Scanline Overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.03]"
        style={{
          background:
            'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.2) 50%), linear-gradient(90deg, rgba(255,0,0,0.02), rgba(0,255,0,0.01), rgba(0,0,255,0.02))',
          backgroundSize: '100% 2px, 3px 100%',
        }}
      />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'AboutPage',
                '@id': 'https://www.theanswerengine.ai/about#webpage',
                name: 'About The Answer Engine — Built By A Practitioner',
                description: 'Justin Borges founded The Answer Engine after 13+ years in real estate and $200M+ in production. The AERO-10 framework was forged in real market conditions before being offered to clients.',
                url: 'https://www.theanswerengine.ai/about',
                inLanguage: 'en-US',
                isPartOf: { '@id': 'https://www.theanswerengine.ai/#website' },
                breadcrumb: { '@id': 'https://www.theanswerengine.ai/about#breadcrumb' },
                mainEntity: { '@id': 'https://www.theanswerengine.ai/about#justin-borges' },
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://www.theanswerengine.ai/about#breadcrumb',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theanswerengine.ai' },
                  { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.theanswerengine.ai/about' },
                ],
              },
              {
                '@type': 'Person',
                '@id': 'https://www.theanswerengine.ai/about#justin-borges',
                name: 'Justin Borges',
                jobTitle: 'Founder & AEO Strategist',
                description: 'Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate and $200M+ in production. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini.',
                url: 'https://www.theanswerengine.ai/about',
                image: {
                  '@type': 'ImageObject',
                  url: 'https://www.theanswerengine.ai/justin-borges.webp',
                  width: 400,
                  height: 400,
                },
                worksFor: {
                  '@type': 'Organization',
                  '@id': 'https://www.theanswerengine.ai/#organization',
                  name: 'The Answer Engine',
                  url: 'https://www.theanswerengine.ai',
                },
                knowsAbout: [
                  'Answer Engine Optimization',
                  'AI Search',
                  'Citation Surface',
                  'Content Strategy',
                  'Real Estate',
                  'AEO Framework',
                  'Schema Markup',
                  'Google AI Overviews',
                  'ChatGPT Optimization',
                ],
                alumniOf: 'Real Estate Industry — Los Angeles, CA',
                hasOccupation: {
                  '@type': 'Occupation',
                  name: 'AEO Strategist',
                  description: 'Answer Engine Optimization strategist specializing in AI citation authority for local service businesses.',
                },
                sameAs: [
                  'https://www.linkedin.com/in/justinborges',
                  'https://lametrohomefinder.com',
                ],
              },
              {
                '@type': 'Organization',
                '@id': 'https://www.theanswerengine.ai/#organization',
                name: 'The Answer Engine',
                url: 'https://www.theanswerengine.ai',
                foundingDate: '2025',
                founder: { '@id': 'https://www.theanswerengine.ai/about#justin-borges' },
              },
            ],
          }),
        }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[780px] flex flex-col justify-center py-32 px-6 lg:px-24 border-b border-white/5"
        style={{
          backgroundImage: 'radial-gradient(#ffffff0a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Back nav */}
          <div className="mb-12">
            <Link
              href="/"
              className="font-mono text-[10px] tracking-widest uppercase text-black/40 hover:text-[#F27D24] transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Tag */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-2 h-2 bg-[#F27D24]" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24]">
              About Us // The Answer Engine
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-10 max-w-5xl">
            BUILT BY A{' '}
            <span
              className="text-[#F27D24]"
              style={{ textShadow: '0 0 10px rgba(255,106,0,0.3)' }}
            >
              PRACTITIONER
            </span>
            ,<br />
            NOT A THEORIST
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-black/60 text-sm leading-relaxed max-w-xl">
              Justin Borges spent 13+ years and $200M+ in transactions proving what works in the
              real world before he ever wrote the AERO-10 framework. When AI started reshaping how
              customers find businesses, he built the system on his own site first — and took it
              live before calling it a product.
            </p>
            <div className="flex flex-col gap-2 font-mono text-[10px] tracking-widest text-black/40 md:text-right">
              <p>Status: Proven // Results-Driven</p>
              <p>FRAMEWORK: AERO-10 // ACTIVE</p>
              <p>TERRITORIES: AVAILABLE</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline font-black text-4xl uppercase tracking-tighter mb-16">
            Our{' '}
            <span className="text-[#F27D24]">Story</span>
          </h2>

          {/* Horizontal rule behind cards */}
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-black/10 -translate-y-1/2 z-0" />
            <div className="grid md:grid-cols-4 gap-4 relative z-10">
              {TIMELINE.map((item, i) => (
                <div
                  key={i}
                  className={`bg-[#F4F0E8] border border-black/10 border-l-4 border-l-[#F27D24] p-6 flex flex-col gap-4 ${
                    i % 2 === 1 ? 'md:mt-12' : ''
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24]">
                    {item.code}
                  </span>
                  <h3 className="font-headline font-black text-xl uppercase tracking-tighter">
                    {item.headline}
                  </h3>
                  <p className="text-black/40 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AERO-10 FRAMEWORK ────────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#F4F0E8] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline font-black text-4xl uppercase tracking-tighter mb-4">
            THE AERO-10 SCORING{' '}
            <span className="text-[#F27D24]">PROTOCOL</span>
          </h2>
          <p className="text-black/40 text-sm leading-relaxed mb-16 max-w-2xl">
            Ten pillars. Every AEO engagement is scored against all ten. No pillar below 80
            ships to production. This is the framework that earned #1 AI citations in LA County.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 border border-black/10">
            {AERO_10_PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                className="relative p-6 border border-white/5 bg-[#FAF8F2] aspect-square flex flex-col justify-between overflow-hidden"
              >
                <span className="absolute -right-4 -top-8 text-8xl font-black text-white/[0.03] select-none font-headline">
                  {pillar.num}
                </span>
                <h4 className="font-headline font-black text-base leading-tight uppercase relative z-10">
                  {pillar.label}
                </h4>
                <div className="relative z-10">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] block">
                    Pillar {pillar.num}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* AERO-10 scorecard CTA */}
          <div className="mt-12 border border-[#F27D24]/30 border-l-4 border-l-[#F27D24] bg-[#FAF8F2] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] block mb-2">
                Free // Your AERO-10 Scorecard
              </span>
              <h3 className="font-headline font-black text-2xl md:text-3xl uppercase tracking-tighter text-[#0A0A0A] mb-2">
                See where your business scores on all ten pillars.
              </h3>
              <p className="text-black/50 text-sm leading-relaxed max-w-lg">
                Your scorecard ships with the free Blind Spot Report. No pitch — just the data.
              </p>
            </div>
            <a
              href="https://calendly.com/theanswerengine-support/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-[#F27D24] text-black font-black px-8 py-4 font-headline uppercase tracking-tighter text-sm hover:translate-y-[2px] transition-transform inline-flex items-center gap-3 whitespace-nowrap"
            >
              BOOK 30-MIN CALL
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ──────────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline font-black text-4xl uppercase tracking-tighter mb-16">
            WHY WE{' '}
            <span className="text-[#F27D24]">DOMINATE</span>
          </h2>

          <div className="grid md:grid-cols-3 border border-black/10">
            {DIFFERENTIATORS.map((item, i) => (
              <div
                key={i}
                className={`p-12 flex flex-col gap-6 ${
                  i < DIFFERENTIATORS.length - 1 ? 'border-r border-black/10' : ''
                } border-l-4 border-l-[#F27D24]`}
              >
                <div className="w-10 h-10 border border-[#F27D24] flex items-center justify-center">
                  <span className="font-mono text-[10px] text-[#F27D24]">0{i + 1}</span>
                </div>
                <h3 className="font-headline font-black text-2xl uppercase tracking-tighter">
                  {item.tag}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER BLOCK ────────────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#F4F0E8] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] mb-4 block">
                Founder // Justin Borges
              </span>
              <h2 className="font-headline font-black text-5xl uppercase tracking-tighter mb-6 leading-none">
                JUSTIN<br />BORGES
              </h2>
              <p className="text-black/60 text-sm leading-relaxed mb-8">
                13+ years in LA real estate. $200M+ closed. 70,000+ competing agents beaten with
                zero ad spend. The AERO-10 framework is the system Justin built for himself — it
                earned #1 AI recommendations across every major platform before a single client
                ever paid for it.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: '13+', label: 'Years in Real Estate' },
                  { val: '$200M+', label: 'TRANSACTIONS' },
                  { val: '100%', label: 'AI Citation Rate' },
                ].map((stat) => (
                  <div key={stat.label} className="border border-black/10 p-4 bg-[#F4F0E8]">
                    <div className="font-headline font-black text-2xl text-white mb-1">
                      {stat.val}
                    </div>
                    <div className="font-mono text-[10px] tracking-widest uppercase text-black/40">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-black/10 bg-[#F4F0E8] p-10 border-l-4 border-l-[#F27D24]">
              <span className="font-mono text-[10px] tracking-widest uppercase text-black/40 mb-6 block">
                In His Own Words
              </span>
              <blockquote className="text-white/80 text-base leading-relaxed mb-6 italic">
                &ldquo;I didn&apos;t build this for clients first. I built it for myself because
                I was invisible online despite being one of the top-producing agents in LA. When
                AI started recommending competitors, I reverse-engineered exactly how to become
                the answer. It worked. Then I made it a business.&rdquo;
              </blockquote>
              <cite className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] not-italic">
                — Justin Borges, Founder
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE MONTHLY PROGRAM ──────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] block mb-3">
            After The Foundation // Ongoing
          </span>
          <h2 className="font-headline font-black text-4xl uppercase tracking-tighter mb-4">
            THE MONTHLY{' '}
            <span className="text-[#F27D24]">PROGRAM</span>
          </h2>
          <p className="text-black/50 text-sm leading-relaxed mb-16 max-w-2xl">
            What you receive after the 90-day foundation ships. One email per week. One report per month. Dashboard 24/7.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/10">
            {[
              {
                title: 'THE MONDAY BRIEF',
                body: 'One email every Monday. Your AEO Authority Index, the rank movements that matter this week, Reddit citation opportunities, and what we\'re doing next — tied to your goal.',
              },
              {
                title: 'MONTHLY AEO REPORT',
                body: 'First of every month. Impressions, clicks, CTR, rank deltas, top pages, page-2 queue, competitor movements, and the next three actions we\'ll take.',
              },
              {
                title: 'CLIENT DASHBOARD',
                body: 'Live visibility across ChatGPT, Claude, Perplexity, and Google AI — on your schedule, not ours. Pull-based, 24/7.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-10 bg-[#F4F0E8] border-l-4 border-l-[#F27D24] hover:bg-[#F4F0E8] transition-colors ${
                  i < 2 ? 'border-b md:border-b-0 md:border-r border-black/10' : ''
                }`}
              >
                <h3 className="font-headline font-black text-lg uppercase tracking-tighter mb-4">
                  {item.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="text-black/40 text-xs mt-6 font-mono tracking-widest uppercase">
            Cardinal rule: ≤ 1.5 emails/week. Everything else lives in your dashboard.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#F27D24]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-black/60 mb-4 block">
              Next Step // Check Your Territory
            </span>
            <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter text-black leading-none">
              READY TO BECOME<br />THE ANSWER?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#territory-check"
              className="bg-black text-[#F27D24] px-10 py-4 font-headline font-black uppercase tracking-tighter text-sm hover:bg-[#FAF8F2] transition-colors inline-flex items-center gap-3"
            >
              CHECK TERRITORY
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="https://calendly.com/theanswerengine-support/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black text-black px-10 py-4 font-headline font-black uppercase tracking-tighter text-sm hover:bg-black hover:text-[#F27D24] transition-colors"
            >
              BOOK 30-MIN CALL
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
