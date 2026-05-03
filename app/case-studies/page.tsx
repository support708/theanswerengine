import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AEO Case Study — LA Metro Home Finder vs. 70,000 Agents | The Answer Engine',
  description:
    'How the AERO-10 framework took our own real estate site from invisible to 1.14M+ monthly impressions with citations across ChatGPT, Claude, Perplexity, and Google AI. The verified case.',
  alternates: {
    canonical: 'https://www.theanswerengine.ai/case-studies',
  },
  openGraph: {
    title: 'AEO Case Study — LA Metro Home Finder vs. 70,000 Agents',
    description:
      'The verified AEO case: 1.14M+ monthly impressions, citations across 4 AI platforms, $0 ad spend. Built on our own site before selling it to clients.',
    url: 'https://www.theanswerengine.ai/case-studies',
    type: 'website',
    siteName: 'The Answer Engine',
    images: [
      {
        url: 'https://www.theanswerengine.ai/og-default.png',
        width: 1200,
        height: 630,
        alt: 'AEO Case Study — LA Metro Home Finder',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEO Case Study — LA Metro Home Finder vs. 70,000 Agents',
    description: '1.14M+ monthly impressions, 4 AI platforms citing, $0 ad spend. The verified AEO case built on our own site.',
    site: '@theanswerengine',
    images: ['https://www.theanswerengine.ai/og-default.png'],
  },
};

const KPI_STATS = [
  { val: '1.14M+', label: 'Monthly Impressions' },
  { val: '4 / 4', label: 'AI Platforms Citing' },
  { val: '$0', label: 'Ad Spend' },
  { val: '90-Day', label: 'Citation Guarantee' },
];

const RESULT_STAGES = [
  {
    stage: 'STAGE 01: BASELINE',
    window: 'Weeks 1–2',
    body: 'Baseline scan across ChatGPT, Claude, Perplexity, and Google AI. Every market starts invisible. We captured the zero-state so we could measure movement.',
  },
  {
    stage: 'STAGE 02: BUILD',
    window: 'Weeks 3–8',
    body: 'AEO content and schema ship. Hub-and-spoke architecture covering rent control, probate, ADU, and seller-intent clusters. Indexing window opens. Pages appear in AI training cycles.',
  },
  {
    stage: 'STAGE 03: FIRST CITATIONS',
    window: 'Weeks 9–12',
    body: 'First citations land — measured against the 90-day guarantee. Full AEO Authority Index snapshot delivered. This is where most providers stop. We don\'t.',
  },
  {
    stage: 'STAGE 04: MONTHLY PROGRAM',
    window: 'Month 4+',
    body: 'Authority Index compounds. The Monday Brief captures rank deltas and Reddit citation opportunities. The Monthly Intelligence Report books the numbers. Dashboard shows live 4-platform tracking.',
  },
  {
    stage: 'STAGE 05: COMPOUND',
    window: 'Month 6+',
    body: 'Queries you never wrote content for start citing you. AI engines triangulate across your hub and surface your name for adjacent questions. The dashboard becomes a retention anchor, not a check-in.',
  },
];

export default function CaseStudiesPage() {
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
            '@type': 'CollectionPage',
            name: 'AEO Case Studies — Proof of Dominance',
            description:
              'Real results from Answer Engine Optimization. Local service businesses achieving AI citation dominance.',
            url: 'https://www.theanswerengine.ai/case-studies',
            publisher: {
              '@type': 'Organization',
              name: 'The Answer Engine',
              url: 'https://www.theanswerengine.ai',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theanswerengine.ai' },
              { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.theanswerengine.ai/case-studies' },
            ],
          }),
        }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <header
        className="relative pt-32 pb-24 border-b border-[#F27D24]/10 overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(#F27D2411 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          {/* Back nav */}
          <div className="mb-12">
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

          {/* Tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 bg-[#F27D24]" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
              Case Study // Our Own Site First
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-[clamp(5rem,10vw,9rem)] uppercase tracking-tighter leading-[0.85] mb-10">
            WE DIDN&apos;T SELL IT
            <br />
            <span
              className="text-[#F27D24]"
              style={{ textShadow: '0 0 10px rgba(255,106,0,0.25)' }}
            >
              UNTIL WE PROVED IT.
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-white/60 text-sm leading-relaxed max-w-xl">
              The AERO-10 framework was built and tested on our own real estate site in the most
              competitive local market in America. <span className="text-white border-b border-[#F27D24]">1.14M+ monthly impressions.</span> Four of four major AI platforms citing the same agent. Zero ad spend. Then we packaged it for local service businesses outside real estate.
            </p>
            <div className="flex flex-col gap-2 font-mono text-[10px] tracking-widest text-white/40 md:text-right">
              <p>Market: Los Angeles, CA</p>
              <p>Competitors: 70,000+ agents</p>
              <p>Status: Live &amp; compounding</p>
            </div>
          </div>
        </div>
      </header>

      {/* ── KPI BAR ──────────────────────────────────────────── */}
      <section className="bg-[#F4F0E8] border-b border-[#F27D24]/10 py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {KPI_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-headline font-black text-5xl md:text-6xl text-[#F27D24]">
                  {stat.val}
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-white/40 mt-3">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW RESULTS BUILD ─────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] block mb-3">
              What To Expect // Stage By Stage
            </span>
            <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter">
              HOW RESULTS{' '}
              <span className="text-[#F27D24]">BUILD</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mt-4 max-w-2xl">
              Same framework, applied to your market. The five stages we walk every client through — from zero baseline to compounding authority.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-0 border border-white/10">
            {RESULT_STAGES.map((stage, i) => (
              <div
                key={i}
                className={`p-6 bg-[#FAF8F2] hover:bg-[#F4F0E8] transition-colors border-l-4 border-l-[#F27D24] ${
                  i < RESULT_STAGES.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''
                }`}
              >
                <div className="w-10 h-10 border border-[#F27D24]/40 flex items-center justify-center mb-6">
                  <span className="font-mono text-[10px] text-[#F27D24]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] block mb-2">
                  {stage.stage}
                </span>
                <p className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-4">
                  {stage.window}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED DEEP DIVE ───────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#F4F0E8] border-y border-[#F27D24]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
              Deep Dive // The Verified Case
            </span>
            <h2 className="font-headline font-black text-4xl uppercase tracking-tighter mt-4">
              LA Metro Home Finder vs.{' '}
              <span className="text-[#F27D24]">70,000 Agents</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mt-4 max-w-2xl">
              Our own real estate property. The first place the AERO-10 framework ran live. Today it carries the heaviest AI-citation load of any site in the portfolio.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Phase timeline */}
            <div className="lg:col-span-4 border-l border-[#F27D24]/20 pl-8 space-y-16 py-4">
              {[
                {
                  phase: 'PHASE_01: STRATEGY',
                  active: true,
                  body: 'Semantic mapping of 1,200+ real estate queries across LA County. Hub-and-spoke architecture built around buyer, seller, and investor intent — with entity alignment for the site as the definitive local expert.',
                },
                {
                  phase: 'PHASE_02: IMPLEMENTATION',
                  active: false,
                  body: 'AERO-10 content architecture shipped. Schema markup, knowledge graph seeding, citation tracking across ChatGPT, Claude, Perplexity, and Google AI Overviews.',
                },
                {
                  phase: 'PHASE_03: RESULTS',
                  active: false,
                  body: 'All four major AI platforms now cite the site for rent control, probate, and ADU questions. 1.14M+ monthly impressions. $0 ad spend. And the authority keeps compounding.',
                },
              ].map((phase, i) => (
                <div key={i} className="relative">
                  <div
                    className={`absolute -left-[37px] top-0 w-4 h-4 ${
                      phase.active ? 'bg-[#F27D24]' : 'bg-white/20'
                    }`}
                  />
                  <h4 className="font-headline font-black text-lg uppercase tracking-tighter mb-2">
                    {phase.phase}
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed">{phase.body}</p>
                </div>
              ))}
            </div>

            {/* Data terminal */}
            <div className="lg:col-span-8 bg-black p-8 border border-white/5">
              <div className="flex justify-between items-center mb-12">
                <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
                  Results Chart
                </span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-red-500/50" />
                  <div className="w-2 h-2 bg-yellow-500/50" />
                  <div className="w-2 h-2 bg-green-500/50" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-4">
                    Before AEO
                  </p>
                  <div className="h-40 flex items-end gap-1">
                    {[10, 15, 12, 8, 18].map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-white/10"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] mb-4">
                    After AEO
                  </p>
                  <div className="h-40 flex items-end gap-1">
                    {[40, 65, 85, 95, 100].map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-[#F27D24]"
                        style={{ height: `${h}%`, opacity: 0.4 + i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-wrap gap-12">
                {[
                  { label: 'Monthly Impressions', val: '1.14M+', orange: true },
                  { label: 'AI Platforms Citing', val: '4 / 4', orange: false },
                  { label: 'Ad Spend', val: '$0', orange: false },
                  { label: 'Query Clusters Won', val: '3+', orange: false },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="block font-mono text-[10px] tracking-widest uppercase text-white/40 mb-1">
                      {stat.label}
                    </span>
                    <span
                      className={`font-headline font-black text-3xl ${
                        stat.orange ? 'text-[#F27D24]' : 'text-white'
                      }`}
                    >
                      {stat.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RPM SOUTHLAND FEATURED CASE ─────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#FAF8F2] border-b border-[#F27D24]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
              Deep Dive // Property Management Category
            </span>
            <h2 className="font-headline font-black text-4xl uppercase tracking-tighter mt-4">
              RPM Southland vs.{' '}
              <span className="text-[#F27D24]">Every Competitor Without a Schema</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mt-4 max-w-2xl">
              921 Google reviews at 4.8 stars. 730+ properties managed. Three named guarantees. All invisible to AI search — until AEO fixed the infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-0 border border-white/10 mb-10">
            {[
              {
                label: 'THE PROBLEM',
                body: 'The strongest social proof in Long Beach property management — 921 reviews, 730+ properties, 3 named guarantees — was completely invisible to AI engines. No aggregateRating schema. No topical cluster. No answer-engine presence.',
                orange: true,
              },
              {
                label: 'THE FIX',
                body: 'Full 5-type JSON-LD schema per article. AggregateRating marked at 4.8/921. 12 articles live in 4 months targeting high-intent landlord queries. Internal-link mesh connecting every piece. Voice locked to Miles Williams.',
                orange: false,
              },
              {
                label: 'THE RESULT',
                body: 'RPM Southland\'s 921 reviews and three named guarantees are now machine-readable authority signals. Topical cluster covering fees, multi-family, switching managers, first-time landlords, and territory-specific guides — live and compounding.',
                orange: false,
              },
            ].map((col, i) => (
              <div
                key={i}
                className={`p-8 bg-[#F4F0E8] border-l-4 ${col.orange ? 'border-l-[#F27D24]' : 'border-l-white/10'} ${i < 2 ? 'border-r border-white/10' : ''}`}
              >
                <span className={`font-mono text-[10px] tracking-widest uppercase ${col.orange ? 'text-[#F27D24]' : 'text-white/40'} block mb-4`}>
                  {col.label}
                </span>
                <p className="text-white/50 text-sm leading-relaxed">{col.body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-12 mb-10">
            {[
              { label: 'Google Reviews', val: '921', orange: true },
              { label: 'Star Rating', val: '4.8', orange: false },
              { label: 'Properties Managed', val: '730+', orange: false },
              { label: 'Articles Live', val: '12', orange: false },
              { label: 'Schema Types Per Article', val: '5', orange: false },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="block font-mono text-[10px] tracking-widest uppercase text-white/40 mb-1">
                  {stat.label}
                </span>
                <span className={`font-headline font-black text-3xl ${stat.orange ? 'text-[#F27D24]' : 'text-white'}`}>
                  {stat.val}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/case-studies/rpm-southland"
            className="inline-flex items-center gap-3 border border-[#F27D24]/40 text-[#F27D24] px-8 py-4 font-headline font-black uppercase tracking-tighter text-sm hover:bg-[#F27D24]/10 transition-colors"
          >
            Read the Full Case Study
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── ALSO WORKING WITH — portfolio adjacency ────────── */}
      <section className="py-24 px-6 lg:px-24 bg-[#FAF8F2] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24] block mb-3">
            Portfolio // Also On The Framework
          </span>
          <h2 className="font-headline font-black text-3xl md:text-4xl uppercase tracking-tighter mb-4">
            ALSO WORKING{' '}
            <span className="text-[#F27D24]">WITH</span>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-2xl">
            The LAMH case is the flagship. These are the other businesses running on the AERO-10 framework right now.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
            {[
              { name: 'Borges Real Estate Team', city: 'Pasadena, CA', cat: 'Residential real estate', href: null },
              { name: 'Lovery Real Estate', city: 'San Diego, CA', cat: 'Real estate · seller focus', href: null },
              { name: 'Brandon Thompson', city: 'Inland Empire, CA', cat: 'Real estate · IE markets', href: null },
              { name: 'Davis Agency', city: 'Austin, TX', cat: 'Real estate', href: null },
              { name: 'RPM Southland', city: 'Long Beach, CA', cat: 'Property management · Case study available', href: '/case-studies/rpm-southland' },
              { name: 'ClearClose Builder Services', city: 'Nationwide', cat: 'Builder financial services', href: null },
            ].map((c, i, arr) => {
              const inner = (
                <>
                  <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase mb-3">{c.city}</div>
                  <h3 className="font-headline font-bold text-lg uppercase tracking-tighter text-[#0A0A0A] mb-2">{c.name}</h3>
                  <p className="text-white/50 text-sm">{c.cat}</p>
                  {c.href && (
                    <span className="inline-flex items-center gap-1 mt-3 font-mono text-[10px] tracking-widest uppercase text-[#F27D24]">
                      Read case study →
                    </span>
                  )}
                </>
              );
              const cls = `p-8 bg-[#F4F0E8] hover:bg-[#F4F0E8] transition-colors border-l-4 border-l-[#F27D24] ${i < arr.length - 1 ? 'border-b lg:border-b-0' : ''} ${(i + 1) % 3 !== 0 ? 'lg:border-r' : ''} ${(i % 2 === 0) ? 'md:border-r lg:border-r' : ''} border-white/10`;
              return c.href ? (
                <Link key={c.name} href={c.href} className={cls}>
                  {inner}
                </Link>
              ) : (
                <div key={c.name} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#F27D24] py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter text-black leading-none text-center md:text-left">
            READY TO SEE YOUR NAME<br />IN AI RESULTS?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#territory-check"
              className="bg-black text-[#F27D24] px-12 py-5 font-headline font-black uppercase tracking-tighter text-lg hover:bg-[#FAF8F2] transition-colors inline-flex items-center gap-3 whitespace-nowrap"
            >
              Check Territory
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="https://calendly.com/theanswerengine-support/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black text-black px-12 py-5 font-headline font-black uppercase tracking-tighter text-lg hover:bg-black hover:text-[#F27D24] transition-colors inline-flex items-center justify-center whitespace-nowrap"
            >
              Book 30-Min Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
