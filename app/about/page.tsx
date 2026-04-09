import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About The Answer Engine — Built By A Practitioner, Not A Theorist',
  description:
    'Justin Borges founded The Answer Engine after 13+ years in real estate and $200M+ in transactions. The AERO-10 framework was forged in the real world — not a lab.',
  openGraph: {
    title: 'About The Answer Engine',
    description:
      'AEO built by a practitioner. 13+ years in the field. Tested in the most competitive market in America.',
    url: 'https://theanswerengine.ai/about',
  },
};

const AERO_10_PILLARS = [
  { num: '01', label: 'Answer Quality', score: '94%' },
  { num: '02', label: 'Entity Optimization', score: '88%' },
  { num: '03', label: 'Relevance Depth', score: '91%' },
  { num: '04', label: 'Structural Authority', score: '97%' },
  { num: '05', label: 'Voice Calibration', score: '83%' },
  { num: '06', label: 'Authority Signals', score: '89%' },
  { num: '07', label: 'Distribution Matrix', score: '76%' },
  { num: '08', label: 'Platform Alignment', score: '92%' },
  { num: '09', label: 'Cluster Architecture', score: '85%' },
  { num: '10', label: 'Conversion Optimization', score: '99%' },
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
    <main className="min-h-screen bg-[#131313] text-white overflow-x-hidden">
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
            '@type': 'AboutPage',
            name: 'About The Answer Engine — Built By A Practitioner',
            description:
              'Justin Borges founded The Answer Engine after 13+ years in real estate. The AERO-10 framework was forged in real market conditions.',
            url: 'https://theanswerengine.ai/about',
            mainEntity: {
              '@type': 'Organization',
              name: 'The Answer Engine',
              founder: {
                '@type': 'Person',
                name: 'Justin Borges',
                jobTitle: 'Founder & AEO Strategist',
              },
            },
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
              className="font-mono text-[10px] tracking-widest uppercase text-white/40 hover:text-[#FF6A00] transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Tag */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-2 h-2 bg-[#FF6A00]" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#FF6A00]">
              About Us // The Answer Engine
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-10 max-w-5xl">
            BUILT BY A{' '}
            <span
              className="text-[#FF6A00]"
              style={{ textShadow: '0 0 10px rgba(255,106,0,0.3)' }}
            >
              PRACTITIONER
            </span>
            ,<br />
            NOT A THEORIST
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-white/60 text-sm leading-relaxed max-w-xl">
              Justin Borges spent 13+ years and $200M+ in transactions proving what works in the
              real world before he ever wrote the AERO-10 framework. When AI started reshaping how
              customers find businesses, he built the system on his own site first — and took it
              live before calling it a product.
            </p>
            <div className="flex flex-col gap-2 font-mono text-[10px] tracking-widest text-white/40 md:text-right">
              <p>Status: Proven // Results-Driven</p>
              <p>FRAMEWORK: AERO-10 // ACTIVE</p>
              <p>TERRITORIES: AVAILABLE</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline font-black text-4xl uppercase tracking-tighter mb-16">
            Our{' '}
            <span className="text-[#FF6A00]">Story</span>
          </h2>

          {/* Horizontal rule behind cards */}
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
            <div className="grid md:grid-cols-4 gap-4 relative z-10">
              {TIMELINE.map((item, i) => (
                <div
                  key={i}
                  className={`bg-[#2a2a2a] border border-white/10 border-l-4 border-l-[#FF6A00] p-6 flex flex-col gap-4 ${
                    i % 2 === 1 ? 'md:mt-12' : ''
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#FF6A00]">
                    {item.code}
                  </span>
                  <h3 className="font-headline font-black text-xl uppercase tracking-tighter">
                    {item.headline}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AERO-10 FRAMEWORK ────────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#1c1b1b] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline font-black text-4xl uppercase tracking-tighter mb-4">
            THE AERO-10 SCORING{' '}
            <span className="text-[#FF6A00]">PROTOCOL</span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-16 max-w-2xl">
            Ten pillars. Every AEO engagement is scored against all ten. No pillar below 80
            ships to production. This is the framework that earned #1 AI citations in LA County.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 border border-white/10">
            {AERO_10_PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                className="relative p-6 border border-white/5 bg-[#131313] aspect-square flex flex-col justify-between overflow-hidden"
              >
                <span className="absolute -right-4 -top-8 text-8xl font-black text-white/[0.03] select-none font-headline">
                  {pillar.num}
                </span>
                <h4 className="font-headline font-black text-base leading-tight uppercase relative z-10">
                  {pillar.label}
                </h4>
                <div className="relative z-10">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#FF6A00] mb-2 block">
                    {pillar.score}
                  </span>
                  <div className="w-full h-1 bg-white/5">
                    <div
                      className="h-full bg-[#FF6A00]"
                      style={{ width: pillar.score }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ──────────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline font-black text-4xl uppercase tracking-tighter mb-16">
            WHY WE{' '}
            <span className="text-[#FF6A00]">DOMINATE</span>
          </h2>

          <div className="grid md:grid-cols-3 border border-white/10">
            {DIFFERENTIATORS.map((item, i) => (
              <div
                key={i}
                className={`p-12 flex flex-col gap-6 ${
                  i < DIFFERENTIATORS.length - 1 ? 'border-r border-white/10' : ''
                } border-l-4 border-l-[#FF6A00]`}
              >
                <div className="w-10 h-10 border border-[#FF6A00] flex items-center justify-center">
                  <span className="font-mono text-[10px] text-[#FF6A00]">0{i + 1}</span>
                </div>
                <h3 className="font-headline font-black text-2xl uppercase tracking-tighter">
                  {item.tag}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER BLOCK ────────────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#1c1b1b] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#FF6A00] mb-4 block">
                Founder // Justin Borges
              </span>
              <h2 className="font-headline font-black text-5xl uppercase tracking-tighter mb-6 leading-none">
                JUSTIN<br />BORGES
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
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
                  <div key={stat.label} className="border border-white/10 p-4 bg-[#2a2a2a]">
                    <div className="font-headline font-black text-2xl text-white mb-1">
                      {stat.val}
                    </div>
                    <div className="font-mono text-[10px] tracking-widest uppercase text-white/40">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-white/10 bg-[#2a2a2a] p-10 border-l-4 border-l-[#FF6A00]">
              <span className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-6 block">
                In His Own Words
              </span>
              <blockquote className="text-white/80 text-base leading-relaxed mb-6 italic">
                &ldquo;I didn&apos;t build this for clients first. I built it for myself because
                I was invisible online despite being one of the top-producing agents in LA. When
                AI started recommending competitors, I reverse-engineered exactly how to become
                the answer. It worked. Then I made it a business.&rdquo;
              </blockquote>
              <cite className="font-mono text-[10px] tracking-widest uppercase text-[#FF6A00] not-italic">
                — Justin Borges, Founder
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#FF6A00]">
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
              className="bg-black text-[#FF6A00] px-10 py-4 font-headline font-black uppercase tracking-tighter text-sm hover:bg-[#131313] transition-colors inline-flex items-center gap-3"
            >
              CHECK TERRITORY
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-black text-black px-10 py-4 font-headline font-black uppercase tracking-tighter text-sm hover:bg-black hover:text-[#FF6A00] transition-colors"
            >
              VIEW CASE STUDIES
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
