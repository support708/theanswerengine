import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AEO Services — 90-Day Foundation + Monthly Program | The Answer Engine',
  description:
    'The complete AEO system: 90-day Answer Authority Foundation with citation guarantee, then an ongoing Monthly Program (Monthly AEO Report, Reddit monitoring, quarterly strategy). One client per market.',
  alternates: {
    canonical: 'https://www.theanswerengine.ai/services',
  },
  openGraph: {
    title: 'AEO Services — 90-Day Foundation + Monthly Program',
    description:
      'Two parts: the 90-day foundation gets you cited. The Monthly Program compounds it. Monthly AEO Report, Reddit monitoring, quarterly strategy call.',
    url: 'https://www.theanswerengine.ai/services',
    type: 'website',
    siteName: 'The Answer Engine',
    images: [
      {
        url: 'https://www.theanswerengine.ai/og-default.png',
        width: 1200,
        height: 630,
        alt: 'The Answer Engine AEO Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEO Services — 90-Day Foundation + Monthly Program',
    description: 'The complete AEO system: foundation gets you cited in 90 days, Monthly Program compounds it. One client per market.',
    site: '@theanswerengine',
    images: ['https://www.theanswerengine.ai/og-default.png'],
  },
};

const FOUNDATION_ITEMS = [
  {
    icon: '✓',
    title: 'Competitive Citation Audit',
    desc: 'Full AI citation landscape scan across ChatGPT, Claude, Perplexity, and Google AI.',
  },
  {
    icon: '✓',
    title: 'AEO-Optimized Content Build',
    desc: 'Research-backed article hub structured for AI citation, with proper schema markup.',
  },
  {
    icon: '✓',
    title: 'Schema Markup Implementation',
    desc: 'Structured data layering so AI crawlers parse your business correctly.',
  },
  {
    icon: '✓',
    title: 'Citation Baseline & Monitoring Setup',
    desc: 'Day-0 snapshot across 4 AI platforms. Tracking infrastructure live by week 2.',
  },
  {
    icon: '✓',
    title: 'AERO-10 Scorecard',
    desc: 'Ten-pillar grade on your current AI authority, shipped with a prioritized fix list.',
  },
  {
    icon: '✓',
    title: 'Territory Lock',
    desc: 'Exclusive category-and-city lockout for your industry. Competitors barred from the same market.',
  },
];

const MONTHLY_ITEMS = [
  {
    icon: '✓',
    title: 'Monthly AEO Intelligence Report',
    desc: 'First of every month. Impressions, clicks, CTR, rank deltas, page-2 queue, competitor movements, and the next three actions we\'ll take.',
  },
  {
    icon: '✓',
    title: 'Reddit Citation Monitor',
    desc: 'Flags high-intent Reddit threads where your AI-voice can land. Draft responses included.',
  },
  {
    icon: '✓',
    title: 'Top-Performer Conversion Audit',
    desc: 'Monthly scan of your top-cited pages with rewrite briefs to push them further.',
  },
];

const PRICING_TIERS = [
  {
    id: 'authority',
    name: 'Authority',
    price: 1497,
    onboarding: 1500,
    articles: 16,
    prepayMonths: 5,
    prepayPrice: 7485,
    prepayLabel: 'Save $1,497',
    features: [
      '16 articles per month',
      '5-type JSON-LD schema per article',
      'Internal-link mesh',
      'Reddit opportunity notifications',
      'Review support & accountability',
      'Quarterly cluster strategy session',
    ],
  },
  {
    id: 'dominance',
    name: 'Dominance',
    price: 1997,
    onboarding: 1500,
    articles: 24,
    prepayMonths: 5,
    prepayPrice: 9985,
    prepayLabel: 'Save $1,997',
    features: [
      '24 articles per month',
      '5-type JSON-LD schema per article',
      'Internal-link mesh',
      'Reddit opportunity notifications',
      'Review support & accountability',
      'Bi-monthly strategy sessions',
      'Quarterly executive review',
      'Publishing handled (we post on your schedule)',
      'Priority topic queueing',
      'Monthly citation-surface report',
    ],
  },
];

const COMPARISON_ROWS = [
  {
    param: 'TARGET ENGINE',
    seo: 'Google/Bing Indices',
    aeo: 'AI Platforms (ChatGPT, Claude, Perplexity)',
  },
  {
    param: 'CONTENT GOAL',
    seo: 'Keywords & Links',
    aeo: 'Entity Authority',
  },
  {
    param: 'VISIBILITY',
    seo: 'Blue Link Clicks',
    aeo: 'Direct Answer Synthesis',
  },
  {
    param: 'LATENCY',
    seo: 'Months to Rank',
    aeo: 'Weeks to First Citation',
  },
  {
    param: 'LONGEVITY',
    seo: 'Algorithm Sensitive',
    aeo: 'Algorithm-Resistant',
  },
];

const FAQS = [
  {
    q: 'How does pricing work?',
    a: 'Two parts: a one-time foundation fee (scoped to your industry and market size) and a monthly program fee that covers the Monthly AEO Report, Reddit monitoring, Top-Performer Audit, and quarterly strategy call. We quote live on the strategy call — no surprise pricing.',
    open: true,
  },
  {
    q: 'What industries do you serve?',
    a: 'Real estate is our primary vertical — the AERO-10 framework was built there first and our signed client roster is real estate and real-estate-adjacent (property management, builder financial services). We also take select adjacent local-service engagements — legal, dental, HVAC, roofing — when a territory is open and the category rewards AEO. If AI platforms are being asked about your category in your city, we can help.',
    open: false,
  },
  {
    q: 'How does territory protection work?',
    a: 'One client per industry per city. Once you claim a territory, no competitor in your category can become a client in that market. The territory lock stays active as long as you\'re on the Monthly Program.',
    open: false,
  },
  {
    q: 'How long is the engagement?',
    a: 'The foundation is 90 days and carries the citation guarantee. After that, most clients continue on the Monthly Program — that\'s where the compounding happens. You can pause the Monthly Program any time after the foundation ships.',
    open: false,
  },
  {
    q: 'Why do I need the Monthly Program after the 90-day foundation?',
    a: 'AI platforms update their training data constantly. A single 90-day engagement gets you cited. The Monthly Program keeps you cited, surfaces new opportunities the Authority Index spots each week, and feeds fresh content into the hub. The businesses that compound over time are the ones on the Monthly Program.',
    open: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF8F2] text-[#0A0A0A] min-h-screen font-sans">
      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            '@id': 'https://www.theanswerengine.ai/services#breadcrumb',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theanswerengine.ai' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.theanswerengine.ai/services' },
            ],
          }),
        }}
      />
      {/* Scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(0deg, rgba(255,255,255,0) 50%, rgba(255,255,255,0.02) 50%)',
          backgroundSize: '100% 4px',
        }}
        aria-hidden="true"
      />

      <main className="relative z-20">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="relative py-24 md:py-32 px-6 overflow-hidden"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,106,0,0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        >
          <div className="max-w-7xl mx-auto relative z-20">
            {/* Tag */}
            <div className="mb-6 flex items-center gap-4">
              <span className="bg-[#F27D24]/10 text-[#F27D24] font-mono text-[10px] px-2 py-1 border border-[#F27D24]/20 tracking-widest uppercase">
                Our Services // AEO Packages
              </span>
              <div className="h-[1px] flex-grow bg-black/10" />
            </div>

            <h1 className="font-headline font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9] mb-8">
              WHAT YOU{' '}
              <span className="text-[#F27D24]">GET</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-black/60 font-light tracking-tight border-l-2 border-[#F27D24] pl-6">
              The Answer Authority Foundation — a complete AEO system
              designed for total market dominance.
            </p>
          </div>

          {/* Decorative watermark */}
          <div
            className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none select-none"
            aria-hidden="true"
          >
            <span className="text-[12rem] font-black font-headline leading-none">
              AEO_
            </span>
          </div>
        </section>

        {/* ── 90-DAY FOUNDATION ─────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-[#F4F0E8]">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#F4F0E8] border-l-4 border-t-4 border-[#F27D24] p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-[#F27D24] uppercase mb-2">
                    Part 1 // One-Time Build
                  </div>
                  <div className="font-headline font-black text-3xl md:text-4xl text-[#0A0A0A] uppercase tracking-tighter">
                    The 90-Day Foundation
                  </div>
                </div>
                <div className="font-mono text-[10px] text-black/40 uppercase tracking-widest">
                  Answer Authority Foundation
                </div>
              </div>
              <p className="text-black/50 text-sm leading-relaxed mb-12 max-w-2xl">
                Setup. One-time build. Citation guarantee. If we don&apos;t get you cited by at least 2 AI platforms within 90 days, we keep working until you are — or refund.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {FOUNDATION_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 bg-[#0A0A0A] text-white border border-white/5 hover:border-[#F27D24]/50 transition-all"
                  >
                    <div className="text-[#F27D24] text-4xl mb-4 font-black font-mono">
                      {item.icon}
                    </div>
                    <h3 className="font-headline font-bold text-xl uppercase mb-2 tracking-tighter">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/10 gap-4">
                <div className="font-mono text-[10px] tracking-widest text-black/40 uppercase">
                  Timeline: 90 Days // Guarantee: Active
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-[#F27D24] animate-pulse" />
                  <div className="w-3 h-3 bg-[#F27D24]/40" />
                  <div className="w-3 h-3 bg-[#F27D24]/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MONTHLY PROGRAM ─────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-[#FAF8F2]">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0A0A0A] border-l-4 border-t-4 border-[#F27D24] p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-[#F27D24] uppercase mb-2">
                    Part 2 // Ongoing
                  </div>
                  <div className="font-headline font-black text-3xl md:text-4xl text-white uppercase tracking-tighter">
                    The Monthly Program
                  </div>
                </div>
                <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  Compounds The Foundation
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-2xl">
                What keeps you cited — and surfaces new opportunities — after the foundation ships. One report per month. Ongoing Reddit monitoring and quarterly strategy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {MONTHLY_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 bg-[#F4F0E8] border border-white/5 hover:border-[#F27D24]/50 transition-all"
                  >
                    <div className="text-[#F27D24] text-4xl mb-4 font-black font-mono">
                      {item.icon}
                    </div>
                    <h3 className="font-headline font-bold text-xl uppercase mb-2 tracking-tighter">
                      {item.title}
                    </h3>
                    <p className="text-black/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
                <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                  Monthly Report // Quarterly Strategy Call // Reddit Monitor
                </div>
                <a
                  href="https://calendly.com/theanswerengine-support/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-widest text-[#F27D24] uppercase hover:text-white/60 transition-colors"
                >
                  Book 30-min call →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ──────────────────────────────────────────────────────── */}
        <section id="pricing" className="py-24 px-6 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div className="mb-16">
              <div className="font-mono text-[10px] tracking-widest text-[#F27D24] uppercase mb-3">
                + Pricing // Monthly Program
              </div>
              <h2 className="font-headline font-black text-5xl md:text-6xl uppercase tracking-tighter leading-none mb-6 text-white">
                TWO TIERS.
                <br />
                <span className="text-[#F27D24]">ONE MARKET EACH.</span>
              </h2>
              <p className="max-w-2xl text-white/60 text-lg border-l-2 border-[#F27D24] pl-6">
                Both plans include the $1,500 one-time onboarding. Six-month prepay = 1 month free (pay 5, get 6). Territory lock is exclusive — one client per category per city.
              </p>
            </div>

            {/* Tier cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {PRICING_TIERS.map((tier, i) => (
                <div
                  key={tier.id}
                  className={`relative border-t-4 border-l-4 p-10 ${
                    i === 1
                      ? 'bg-[#F27D24] border-[#F27D24] text-black'
                      : 'bg-[#F4F0E8] border-[#F27D24] text-[#0A0A0A]'
                  }`}
                >
                  {i === 1 && (
                    <div className="absolute top-4 right-4 bg-black text-white font-mono text-[9px] tracking-widest uppercase px-2 py-1">
                      Most Popular
                    </div>
                  )}

                  <div className={`font-mono text-[10px] tracking-widest uppercase mb-3 ${i === 1 ? 'text-black/60' : 'text-[#F27D24]'}`}>
                    + {tier.name} Plan
                  </div>

                  <div className={`font-headline font-black text-5xl md:text-6xl tracking-tighter mb-2 ${i === 1 ? 'text-black' : 'text-[#0A0A0A]'}`}>
                    ${tier.price.toLocaleString()}
                    <span className={`text-xl font-mono font-normal tracking-normal ${i === 1 ? 'text-black/60' : 'text-black/40'}`}>/mo</span>
                  </div>

                  <div className={`font-mono text-[11px] tracking-wide mb-8 ${i === 1 ? 'text-black/70' : 'text-black/50'}`}>
                    + $1,500 one-time onboarding
                  </div>

                  <ul className="space-y-3 mb-10">
                    {tier.features.map((f) => (
                      <li key={f} className={`flex items-start gap-3 text-sm ${i === 1 ? 'text-black' : 'text-black/70'}`}>
                        <span className={`mt-0.5 font-bold flex-shrink-0 ${i === 1 ? 'text-black' : 'text-[#F27D24]'}`}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className={`border-t pt-6 ${i === 1 ? 'border-black/20' : 'border-black/10'}`}>
                    <div className={`font-mono text-[10px] tracking-widest uppercase mb-2 ${i === 1 ? 'text-black/60' : 'text-black/40'}`}>
                      6-Month Prepay (Pay 5, Get 6)
                    </div>
                    <div className={`font-headline font-black text-2xl tracking-tighter mb-1 ${i === 1 ? 'text-black' : 'text-[#0A0A0A]'}`}>
                      ${tier.prepayPrice.toLocaleString()}
                    </div>
                    <div className={`font-mono text-[10px] tracking-widest uppercase ${i === 1 ? 'text-black/60' : 'text-[#F27D24]'}`}>
                      {tier.prepayLabel}
                    </div>
                  </div>

                  <a
                    href="https://calendly.com/theanswerengine-support/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 flex items-center justify-center px-8 py-4 font-headline font-black text-base uppercase tracking-widest transition-all ${
                      i === 1
                        ? 'bg-black text-white hover:translate-x-1 hover:-translate-y-1'
                        : 'bg-[#F27D24] text-black hover:translate-x-1 hover:-translate-y-1'
                    }`}
                  >
                    Claim {tier.name} Territory →
                  </a>
                </div>
              ))}
            </div>

            {/* Included in both / How we start */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-[#F4F0E8] border border-black/10 p-8">
                <div className="font-mono text-[10px] tracking-widest text-[#F27D24] uppercase mb-4">
                  + Included in Both Plans
                </div>
                <ul className="space-y-3">
                  {[
                    'Monthly AEO Intelligence Report',
                    'Reddit Citation Monitor + draft responses',
                    'Top-Performer Conversion Audit (monthly)',
                    'Quarterly strategy call',
                    'Territory lock — one client per category per city',
                    '90-day citation guarantee (from foundation)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-black/70">
                      <span className="mt-0.5 text-[#F27D24] font-bold flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F4F0E8] border border-black/10 p-8">
                <div className="font-mono text-[10px] tracking-widest text-[#F27D24] uppercase mb-4">
                  + How We Get Started
                </div>
                <ol className="space-y-5">
                  {[
                    { step: '01', title: 'Territory Check', desc: 'Confirm your category and city are open. We only take one client per market.' },
                    { step: '02', title: 'Strategy Call', desc: '30-minute session to scope the foundation, confirm pricing, and lock your territory.' },
                    { step: '03', title: '90-Day Foundation', desc: 'We build your citation surface — content hub, schema, entity signals, baseline monitoring.' },
                    { step: '04', title: 'Monthly Program', desc: 'Monthly AEO report, Reddit monitoring, quarterly strategy call, and compounding content.' },
                  ].map((s) => (
                    <li key={s.step} className="flex gap-4">
                      <span className="font-mono text-[#F27D24] font-bold text-sm flex-shrink-0 w-8">{s.step}</span>
                      <div>
                        <div className="font-headline font-bold text-sm uppercase text-[#0A0A0A] tracking-tight mb-1">{s.title}</div>
                        <div className="text-black/50 text-sm leading-relaxed">{s.desc}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Pricing JSON-LD schema */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@graph': [
                    {
                      '@type': 'Service',
                      '@id': 'https://www.theanswerengine.ai/services#authority',
                      name: 'Authority AEO Plan',
                      description: 'Answer Engine Optimization — 16 articles/month, 5-type JSON-LD schema, internal-link mesh, Reddit monitoring, quarterly strategy session. $1,497/month + $1,500 onboarding.',
                      provider: { '@id': 'https://www.theanswerengine.ai/#organization' },
                      url: 'https://www.theanswerengine.ai/services',
                      offers: {
                        '@type': 'Offer',
                        price: '1497',
                        priceCurrency: 'USD',
                        priceSpecification: [
                          {
                            '@type': 'UnitPriceSpecification',
                            price: '1497',
                            priceCurrency: 'USD',
                            unitText: 'monthly',
                            name: 'Authority Monthly',
                          },
                          {
                            '@type': 'UnitPriceSpecification',
                            price: '7485',
                            priceCurrency: 'USD',
                            unitText: '6-month prepay',
                            name: 'Authority 6-Month Prepay (1 month free)',
                          },
                          {
                            '@type': 'UnitPriceSpecification',
                            price: '1500',
                            priceCurrency: 'USD',
                            unitText: 'one-time',
                            name: 'Onboarding Fee',
                          },
                        ],
                        availability: 'https://schema.org/LimitedAvailability',
                        availabilityStarts: '2026-01-01',
                      },
                      hasOfferCatalog: {
                        '@type': 'OfferCatalog',
                        name: 'Authority Plan Features',
                        itemListElement: [
                          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '16 AEO-optimized articles per month' } },
                          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '5-type JSON-LD schema per article' } },
                          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Internal-link mesh' } },
                          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reddit opportunity notifications' } },
                          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Quarterly cluster strategy session' } },
                        ],
                      },
                    },
                    {
                      '@type': 'Service',
                      '@id': 'https://www.theanswerengine.ai/services#dominance',
                      name: 'Dominance AEO Plan',
                      description: 'Answer Engine Optimization — 24 articles/month, publishing handled, bi-monthly strategy sessions, quarterly executive review, monthly citation-surface report. $1,997/month + $1,500 onboarding.',
                      provider: { '@id': 'https://www.theanswerengine.ai/#organization' },
                      url: 'https://www.theanswerengine.ai/services',
                      offers: {
                        '@type': 'Offer',
                        price: '1997',
                        priceCurrency: 'USD',
                        priceSpecification: [
                          {
                            '@type': 'UnitPriceSpecification',
                            price: '1997',
                            priceCurrency: 'USD',
                            unitText: 'monthly',
                            name: 'Dominance Monthly',
                          },
                          {
                            '@type': 'UnitPriceSpecification',
                            price: '9985',
                            priceCurrency: 'USD',
                            unitText: '6-month prepay',
                            name: 'Dominance 6-Month Prepay (1 month free)',
                          },
                          {
                            '@type': 'UnitPriceSpecification',
                            price: '1500',
                            priceCurrency: 'USD',
                            unitText: 'one-time',
                            name: 'Onboarding Fee',
                          },
                        ],
                        availability: 'https://schema.org/LimitedAvailability',
                        availabilityStarts: '2026-01-01',
                      },
                      hasOfferCatalog: {
                        '@type': 'OfferCatalog',
                        name: 'Dominance Plan Features',
                        itemListElement: [
                          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24 AEO-optimized articles per month' } },
                          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '5-type JSON-LD schema per article' } },
                          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Publishing handled on client schedule' } },
                          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bi-monthly strategy sessions' } },
                          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Quarterly executive review' } },
                          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monthly citation-surface report' } },
                        ],
                      },
                    },
                    {
                      '@type': 'FAQPage',
                      '@id': 'https://www.theanswerengine.ai/services#pricing-faq',
                      mainEntity: [
                        {
                          '@type': 'Question',
                          name: 'How much does AEO cost?',
                          acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'The Answer Engine offers two monthly plans: Authority at $1,497/month (16 articles) and Dominance at $1,997/month (24 articles). Both include a $1,500 one-time onboarding fee. Six-month prepay gives you 1 month free — Authority 6-month is $7,485 (save $1,497), Dominance 6-month is $9,985 (save $1,997).',
                          },
                        },
                        {
                          '@type': 'Question',
                          name: 'What is included in the onboarding fee?',
                          acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'The $1,500 onboarding fee covers the 90-day Answer Authority Foundation: competitive citation audit, AERO-10 Scorecard, citation baseline setup, schema implementation, content strategy, and territory lock. It is a one-time build that precedes the monthly program.',
                          },
                        },
                        {
                          '@type': 'Question',
                          name: 'What is the difference between Authority and Dominance?',
                          acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Authority delivers 16 articles per month with quarterly strategy sessions — ideal for businesses building a foundational citation presence. Dominance delivers 24 articles per month with bi-monthly strategy sessions, publishing handled by The Answer Engine, priority topic queueing, and a monthly citation-surface report — ideal for businesses targeting aggressive market dominance.',
                          },
                        },
                        {
                          '@type': 'Question',
                          name: 'Is there a contract?',
                          acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'The 90-day foundation carries the citation guarantee and is a committed build period. After the foundation ships, the monthly program can be paused at any time. Six-month prepay clients pay upfront for 5 months and receive 6 months of service.',
                          },
                        },
                      ],
                    },
                  ],
                }),
              }}
            />
          </div>
        </section>

        {/* ── AEO VS SEO TABLE ─────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-[#FAF8F2]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-headline font-black text-4xl uppercase mb-12 tracking-tighter border-b border-[#F27D24]/30 pb-4 inline-block">
              AEO VS TRADITIONAL SEO
            </h2>

            <div className="overflow-x-auto border border-black/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F27D24] text-black font-black uppercase font-headline">
                    <th className="p-4 border-r border-black/10 text-sm tracking-tighter">
                      PARAMETER
                    </th>
                    <th className="p-4 border-r border-black/10 text-sm tracking-tighter">
                      TRADITIONAL SEO
                    </th>
                    <th className="p-4 text-sm tracking-tighter">
                      AEO
                    </th>
                  </tr>
                </thead>
                <tbody className="font-mono text-sm">
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr
                      key={row.param}
                      className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-[#F4F0E8]' : 'bg-[#FAF8F2]'}`}
                    >
                      <td className="p-4 border-r border-white/5 font-bold text-white">
                        {row.param}
                      </td>
                      <td className="p-4 border-r border-white/5 text-black/60">
                        {row.seo}
                      </td>
                      <td className="p-4 text-[#F27D24]">{row.aeo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-[#F4F0E8]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end gap-6 mb-16">
              <h2 className="font-headline font-black text-5xl uppercase tracking-tighter leading-none">
                FREQUENTLY
                <br />
                ASKED
              </h2>
              <div className="h-2 w-2 bg-[#F27D24] mb-1" />
              <div className="h-[1px] flex-grow bg-black/10 mb-2" />
            </div>

            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  open={faq.open}
                  className={`group ${faq.open ? 'bg-[#FAF8F2] border border-white/5 border-l-4 border-l-[#F27D24]' : 'bg-[#FAF8F2] border border-white/5'}`}
                >
                  <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
                    <h4
                      className={`font-headline font-bold text-lg uppercase tracking-tighter ${faq.open ? 'text-[#F27D24]' : 'text-white'}`}
                    >
                      {faq.q}
                    </h4>
                    <span className="font-mono text-black/40 text-xl select-none ml-4">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-black/60 text-sm leading-relaxed max-w-2xl">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-[#FAF8F2]">
          <div className="max-w-7xl mx-auto bg-[#F27D24] p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-20 flex flex-col items-center text-center">
              <h2 className="font-headline font-black text-6xl md:text-8xl uppercase tracking-tighter text-black mb-8">
                CLAIM YOUR TERRITORY
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/territory-check"
                  className="bg-black text-white px-12 py-5 font-headline font-black text-xl uppercase tracking-widest hover:translate-x-2 hover:-translate-y-2 transition-transform inline-block"
                >
                  Check Territory
                </Link>
                <a
                  href="https://calendly.com/theanswerengine-support/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black text-black px-12 py-5 font-headline font-black text-xl uppercase tracking-widest hover:bg-black hover:text-white transition-colors inline-block"
                >
                  Book 30-Min Call
                </a>
              </div>
            </div>

            {/* Background text decor */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden"
              aria-hidden="true"
            >
              <div className="whitespace-nowrap font-mono text-[10rem] font-bold text-black transform rotate-12">
                THE ANSWER ENGINE THE ANSWER ENGINE THE ANSWER ENGINE THE ANSWER ENGINE
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
