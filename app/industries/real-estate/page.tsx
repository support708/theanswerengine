import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AEO for Real Estate Agents | Get Cited by ChatGPT, Claude, Google AI, Perplexity',
  description:
    'Answer Engine Optimization built for real estate. Our own LA site reached 1.14M+ monthly impressions with citations across 4 AI platforms. One agent per market. 90-day guarantee.',
  alternates: { canonical: 'https://www.theanswerengine.ai/industries/real-estate' },
  openGraph: {
    title: 'AEO for Real Estate Agents',
    description:
      'The AEO playbook we built on our own real estate site — 1.14M+ monthly impressions, 4 AI platforms citing, $0 ad spend. Now one real estate agent per market gets the same system.',
    url: 'https://www.theanswerengine.ai/industries/real-estate',
    type: 'website',
  },
};

const QUERY_CLUSTERS = [
  {
    num: '01',
    tag: 'BUYER INTENT',
    title: 'Buyer Queries',
    body: '"Best real estate agent in {city}", "first-time homebuyer {city}", "agent who specializes in condos {neighborhood}". Every local buyer query is an AI prompt now.',
    examples: 'first-time buyers · investors · condo · luxury · relocators',
  },
  {
    num: '02',
    tag: 'SELLER INTENT',
    title: 'Seller Queries',
    body: '"Sell my house fast {city}", "probate sale agent {county}", "relocate and sell home". Sellers ask AI first because the stakes are high and the process is confusing.',
    examples: 'probate · divorce · trust · relocation · inherited',
  },
  {
    num: '03',
    tag: 'INVESTOR INTENT',
    title: 'Investor Queries',
    body: '"1031 exchange agent {city}", "rent control specialist {state}", "multifamily broker {market}". Investors treat AI as a qualification filter for finding specialists.',
    examples: '1031 · rent control · ADU · multifamily · STR',
  },
  {
    num: '04',
    tag: 'SPECIALTY INTENT',
    title: 'Specialty / Niche',
    body: '"Agent who understands RSO properties", "ADU conversion specialist", "HOA dispute agent". Niche expertise is where AI decisively picks one name over a list.',
    examples: 'RSO · ADU · HOA · new construction · equestrian',
  },
];

const WHO_ITS_FOR = [
  {
    title: 'Solo Agents',
    body: 'You compete against teams and brands with larger budgets. AEO levels the field — AI platforms cite based on signal quality, not spend.',
  },
  {
    title: 'Small & Mid Teams',
    body: 'You need leads that don\'t come from Zillow lead-buying. AI citations send pre-qualified prospects directly to your site.',
  },
  {
    title: 'Brokerages',
    body: 'You need every agent on your roster to inherit citation authority. Hub-and-spoke content architecture makes that possible.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Answer Engine Optimization for Real Estate Agents',
  description:
    'AEO program built specifically for real estate — solo agents, teams, and brokerages — to get cited as the authoritative answer across ChatGPT, Claude, Perplexity, and Google AI Overviews.',
  provider: {
    '@type': 'Organization',
    name: 'The Answer Engine',
    url: 'https://www.theanswerengine.ai',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Answer Engine Optimization',
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'Real Estate Agents',
  },
  mainEntityOfPage: 'https://www.theanswerengine.ai/industries/real-estate',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theanswerengine.ai' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.theanswerengine.ai/industries/real-estate' },
    { '@type': 'ListItem', position: 3, name: 'Real Estate', item: 'https://www.theanswerengine.ai/industries/real-estate' },
  ],
};

export default function RealEstateIndustryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="min-h-screen bg-[#131313] text-white overflow-x-hidden pt-16">
        {/* HERO */}
        <section
          className="relative py-24 md:py-32 px-6 lg:px-24 border-b border-white/5"
          style={{
            backgroundImage: 'radial-gradient(#FF6A0011 0.5px, transparent 0.5px)',
            backgroundSize: '24px 24px',
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
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

            <div className="inline-block border border-[#FF6A00]/30 px-3 py-1 mb-8">
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#FF6A00] uppercase">
                Industries // Real Estate
              </span>
            </div>

            <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-8 max-w-5xl">
              AEO FOR{' '}
              <span className="text-[#FF6A00]">REAL ESTATE</span><br />
              AGENTS
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 border-l-2 border-[#FF6A00] pl-6">
              Built on a real estate site first. 1.14M+ monthly impressions. Cited by ChatGPT, Claude, Perplexity, and Google AI Overviews. Now one real estate professional per market gets the same playbook.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#territory-check"
                className="bg-[#FF6A00] text-black font-black px-10 py-5 text-xl tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase inline-flex items-center gap-3"
              >
                Check Your Market
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="https://calendly.com/theanswerengine-support/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#FF6A00] text-[#FF6A00] font-bold px-10 py-5 text-xl tracking-tighter hover:bg-[#FF6A00] hover:text-black transition-all font-headline uppercase"
              >
                Book 30-Min Call
              </a>
            </div>
          </div>
        </section>

        {/* PROOF BAR */}
        <section className="py-16 px-6 lg:px-24 bg-[#1c1b1b] border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/10">
              {[
                { val: '1.14M+', label: 'Monthly Impressions (Our RE Site)' },
                { val: '4 / 4', label: 'AI Platforms Citing' },
                { val: '70,000+', label: 'LA Agents Competing Against' },
                { val: '$0', label: 'Ad Spend' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-8 ${i < 3 ? 'border-b md:border-b-0 md:border-r' : ''} border-white/10 bg-[#131313]`}
                >
                  <div className="font-headline font-black text-4xl md:text-5xl text-[#FF6A00] mb-2">{stat.val}</div>
                  <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUERY CLUSTERS */}
        <section className="py-24 md:py-32 px-6 lg:px-24 bg-[#131313]">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#FF6A00] block mb-3">
              What We Target // Real Estate Query Clusters
            </span>
            <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter mb-6">
              EVERY QUERY A CLIENT{' '}
              <span className="text-[#FF6A00]">ASKS AI.</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-16 max-w-2xl">
              We map the specific questions buyers, sellers, and investors ask AI platforms in your market. Then we build the authority surface that positions you as the named answer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
              {QUERY_CLUSTERS.map((q, i) => (
                <div
                  key={q.num}
                  className={`p-8 bg-[#1c1b1b] hover:bg-[#2a2a2a] transition-colors border-l-4 border-l-[#FF6A00] ${
                    i < 2 ? 'border-b border-white/10' : ''
                  } ${i % 2 === 0 ? 'md:border-r border-white/10' : ''}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl font-headline font-black text-white/10">{q.num}</span>
                    <span className="font-mono text-[10px] text-[#FF6A00] tracking-widest uppercase mt-3">
                      {q.tag}
                    </span>
                  </div>
                  <h3 className="font-headline font-bold text-2xl uppercase mb-4 text-[#e5e2e1]">{q.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{q.body}</p>
                  <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase pt-4 border-t border-white/10">
                    {q.examples}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-24 md:py-32 px-6 lg:px-24 bg-[#1c1b1b] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#FF6A00] block mb-3">
              Who It&apos;s For // Three Profiles
            </span>
            <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter mb-16">
              SOLO, TEAM,{' '}
              <span className="text-[#FF6A00]">OR BROKERAGE.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
              {WHO_ITS_FOR.map((w, i) => (
                <div
                  key={w.title}
                  className={`p-10 bg-[#131313] hover:bg-[#2a2a2a] transition-colors ${
                    i < WHO_ITS_FOR.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''
                  } border-white/10`}
                >
                  <h3 className="font-headline font-bold text-2xl uppercase mb-4 text-[#e5e2e1]">{w.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LAMH MINI CASE */}
        <section className="py-24 md:py-32 px-6 lg:px-24 bg-[#131313]">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#2a2a2a] border-l-4 border-l-[#FF6A00] p-10 md:p-14">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#FF6A00] block mb-4">
                The Proof // LA Metro Home Finder
              </span>
              <h2 className="font-headline font-black text-3xl md:text-4xl uppercase tracking-tighter mb-6 leading-tight">
                Our real estate site vs. 70,000 LA agents.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-3xl">
                We built the AERO-10 framework on our own real estate site in Los Angeles — the most competitive local market in America. Today it holds 1.14M+ monthly impressions and sits as the recommended agent on ChatGPT, Claude, Perplexity, and Google AI Overviews for rent control, probate, and ADU questions across LA County. We didn&apos;t sell the framework until it proved itself there.
              </p>
              <Link
                href="/case-studies"
                className="font-mono text-[10px] tracking-widest uppercase text-[#FF6A00] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                Read the full case study
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 px-6 lg:px-24 bg-[#FF6A00]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-black/60 mb-4 block">
                One Agent // Per Market
              </span>
              <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter text-black leading-none">
                IS YOUR MARKET<br />STILL OPEN?
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#territory-check"
                className="bg-black text-[#FF6A00] px-10 py-4 font-headline font-black uppercase tracking-tighter text-sm hover:bg-[#131313] transition-colors inline-flex items-center gap-3 whitespace-nowrap"
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
                className="border-2 border-black text-black px-10 py-4 font-headline font-black uppercase tracking-tighter text-sm hover:bg-black hover:text-[#FF6A00] transition-colors"
              >
                BOOK 30-MIN CALL
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
