import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AEO Case Studies — Proof of Dominance | The Answer Engine',
  description:
    'Real results from Answer Engine Optimization. See how local service businesses achieved AI citation dominance across ChatGPT, Claude, Perplexity, and Google AI Overviews.',
  openGraph: {
    title: 'AEO Case Studies — Proof of Dominance',
    description:
      'Plumbers, HVAC, real estate, dental, law firms, and roofers — all achieving AI citation dominance through the AERO-10 framework.',
    url: 'https://theanswerengine.ai/case-studies',
  },
};

const KPI_STATS = [
  { val: '34+', label: 'AI_CITATIONS_GENERATED' },
  { val: '6', label: 'ACTIVE_TERRITORIES' },
  { val: '67', label: 'AVG_DAYS_TO_FIRST_CITATION' },
  { val: '4.2x', label: 'AVG_TRAFFIC_MULTIPLIER' },
];

const CASE_STUDIES = [
  {
    sector: 'SERVICES_PLUMBING',
    location: 'SEC_01 // PHOENIX',
    headline: 'PLUMBER: 0 TO 4 AI CITATIONS IN 67 DAYS',
    citationsPre: '0',
    citationsPost: '4',
    timeframe: '67_D',
    detail: 'A residential plumbing company with no online presence. Zero citations at start. AERO-10 entity mapping + answer-layer content pushed them to the top of ChatGPT and Google AI Overviews for emergency plumbing queries in Phoenix.',
  },
  {
    sector: 'CLIMATE_CONTROL',
    location: 'SEC_02 // AUSTIN',
    headline: 'HVAC: 120% INCREASE IN SEARCH VISIBILITY',
    citationsPre: '1',
    citationsPost: '7',
    timeframe: '90_D',
    detail: 'A mid-size HVAC company already ranking on Google but invisible to AI platforms. Structural authority overhaul and distribution matrix deployment pushed citation count from 1 to 7 across 4 major AI engines.',
  },
  {
    sector: 'REAL_ESTATE',
    location: 'SEC_03 // DENVER',
    headline: 'AGENCY: DOMINATING LUXURY CONDO QUERIES',
    citationsPre: '0',
    citationsPost: '3',
    timeframe: '45_D',
    detail: 'Boutique luxury real estate firm in Denver. Fastest citation capture in the portfolio — 45 days from onboarding to first Perplexity and Claude citations for high-intent buyer queries in the LoDo and Cherry Creek corridors.',
  },
  {
    sector: 'MEDICAL_DENTAL',
    location: 'SEC_04 // MIAMI',
    headline: 'DENTIST: 5X ROI VIA PERPLEXITY CITATIONS',
    citationsPre: '2',
    citationsPost: '9',
    timeframe: '120_D',
    detail: 'Established dental practice with strong local SEO but no AI presence. Voice calibration and platform alignment protocols turned existing authority into 9 AI citations — generating a documented 5x ROI in new patient revenue.',
  },
  {
    sector: 'LEGAL_INJURY',
    location: 'SEC_05 // LOS_ANGELES',
    headline: 'PI_LAW: CAPTURING HIGH-VALUE INTENT DATA',
    citationsPre: '0',
    citationsPost: '5',
    timeframe: '80_D',
    detail: 'Personal injury law firm in Los Angeles. High-value intent queries ($15K–$80K case value). Cluster architecture built around accident types and injury categories. ChatGPT now recommends this firm for 5 distinct high-intent query categories.',
  },
  {
    sector: 'HOME_SERVICES',
    location: 'SEC_06 // DALLAS',
    headline: 'ROOFING: OVERTAKING NATIONAL COMPETITION',
    citationsPre: '1',
    citationsPost: '6',
    timeframe: '55_D',
    detail: 'Local roofing contractor competing against Home Depot and national franchise networks for AI citations. Relevance depth and structural authority protocol neutralized the national budget advantage. Local operator now cited above national brands.',
  },
];

export default function CaseStudiesPage() {
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
            '@type': 'CollectionPage',
            name: 'AEO Case Studies — Proof of Dominance',
            description:
              'Real results from Answer Engine Optimization. Local service businesses achieving AI citation dominance.',
            url: 'https://theanswerengine.ai/case-studies',
            publisher: {
              '@type': 'Organization',
              name: 'The Answer Engine',
              url: 'https://theanswerengine.ai',
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai' },
              { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://theanswerengine.ai/case-studies' },
            ],
          }),
        }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <header
        className="relative pt-32 pb-24 border-b border-[#FF6A00]/10 overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(#FF6A0011 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          {/* Back nav */}
          <div className="mb-12">
            <Link
              href="/"
              className="font-mono text-[10px] tracking-widest uppercase text-white/40 hover:text-[#FF6A00] transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              BACK_TO_HOME
            </Link>
          </div>

          {/* Tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 bg-[#FF6A00]" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
              MISSION_LOGS // DECLASSIFIED
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-[clamp(5rem,10vw,9rem)] uppercase tracking-tighter leading-[0.85] mb-10">
            PROOF OF
            <br />
            <span
              className="text-[#FF6A00]"
              style={{ textShadow: '0 0 10px rgba(255,106,0,0.25)' }}
            >
              DOMINANCE
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-white/60 text-sm leading-relaxed max-w-xl">
              Measurable results. Real businesses.{' '}
              <span className="text-white border-b border-[#FF6A00]">Zero theory.</span> Every
              case study below was executed with the same AERO-10 framework — deployed against
              real competition in real markets.
            </p>
            <div className="flex flex-col gap-2 font-mono text-[10px] tracking-widest text-white/40 md:text-right">
              <p>RECORDS: VERIFIED</p>
              <p>ENCRYPTION: NONE</p>
              <p>TERMINAL_ACCESS: PUBLIC_READ</p>
            </div>
          </div>
        </div>
      </header>

      {/* ── KPI BAR ──────────────────────────────────────────── */}
      <section className="bg-[#1c1b1b] border-b border-[#FF6A00]/10 py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {KPI_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-headline font-black text-5xl md:text-6xl text-[#FF6A00]">
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

      {/* ── MISSION ARCHIVE GRID ─────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-headline font-black text-3xl uppercase tracking-tighter">
              MISSION_ARCHIVE
            </h2>
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
              FILTER: [ALL_RECORDS]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#FF6A00]/10">
            {CASE_STUDIES.map((cs, i) => (
              <div
                key={i}
                className="bg-[#131313] p-10 hover:bg-[#1c1b1b] transition-colors border border-[#FF6A00]/5 group"
              >
                {/* Header row */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-10 h-10 border border-[#FF6A00]/40 flex items-center justify-center">
                    <span className="font-mono text-[10px] text-[#FF6A00]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
                    {cs.location}
                  </span>
                </div>

                {/* Label + Headline */}
                <div className="mb-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#FF6A00]">
                    {cs.sector}
                  </span>
                  <h3 className="font-headline font-black text-2xl uppercase tracking-tighter mt-2 group-hover:text-[#FF6A00] transition-colors leading-tight">
                    {cs.headline}
                  </h3>
                </div>

                {/* Detail */}
                <p className="text-white/40 text-sm leading-relaxed mb-8">{cs.detail}</p>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6">
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-2">
                      CITATIONS_PRE
                    </p>
                    <p className="font-headline font-black text-xl">{cs.citationsPre}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-2">
                      CITATIONS_POST
                    </p>
                    <p className="font-headline font-black text-xl text-[#FF6A00]">
                      {cs.citationsPost}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-2">
                      TIMEFRAME
                    </p>
                    <p className="font-headline font-black text-xl">{cs.timeframe}</p>
                  </div>
                </div>

                {/* Status */}
                <div className="mt-6">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#FF6A00]">
                    MISSION_STATUS: COMPLETE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED DEEP DIVE ───────────────────────────────── */}
      <section className="py-32 px-6 lg:px-24 bg-[#1c1b1b] border-y border-[#FF6A00]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
              DEEP_DIVE // FEATURED_INTEL
            </span>
            <h2 className="font-headline font-black text-4xl uppercase tracking-tighter mt-4">
              TERMINAL ANALYSIS:{' '}
              <span className="text-[#FF6A00]">BORGES_REAL_ESTATE</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Phase timeline */}
            <div className="lg:col-span-4 border-l border-[#FF6A00]/20 pl-8 space-y-16 py-4">
              {[
                {
                  phase: 'PHASE_01: STRATEGY',
                  active: true,
                  body: 'Semantic mapping of 1,200+ real estate queries in LA County. Entity alignment for Justin Borges as the definitive local expert across buyer, seller, and investor intent.',
                },
                {
                  phase: 'PHASE_02: IMPLEMENTATION',
                  active: false,
                  body: 'AERO-10 content architecture deployed. Schema injection, knowledge graph seeding, and distribution matrix activation across all major AI training pipelines.',
                },
                {
                  phase: 'PHASE_03: RESULTS',
                  active: false,
                  body: 'ChatGPT, Claude, Perplexity, and Google AI Overviews all citing Justin Borges as the recommended LA real estate agent. 8,400+ monthly organic clicks. Zero ad spend.',
                },
              ].map((phase, i) => (
                <div key={i} className="relative">
                  <div
                    className={`absolute -left-[37px] top-0 w-4 h-4 ${
                      phase.active ? 'bg-[#FF6A00]' : 'bg-white/20'
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
                  VISUAL_FEED: DATA_EXTRACTION
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
                    PRE_INJECTION_AUTHORITY
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
                  <p className="font-mono text-[10px] tracking-widest uppercase text-[#FF6A00] mb-4">
                    POST_TERMINAL_DOMINANCE
                  </p>
                  <div className="h-40 flex items-end gap-1">
                    {[40, 65, 85, 95, 100].map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-[#FF6A00]"
                        style={{ height: `${h}%`, opacity: 0.4 + i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-wrap gap-12">
                {[
                  { label: 'MONTHLY_CLICKS', val: '8,400+', orange: true },
                  { label: 'AI_PLATFORMS_CITING', val: '4', orange: false },
                  { label: 'AD_SPEND', val: '$0', orange: false },
                  { label: 'IMPRESSION_VOLUME', val: '1.1M+', orange: false },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="block font-mono text-[10px] tracking-widest uppercase text-white/40 mb-1">
                      {stat.label}
                    </span>
                    <span
                      className={`font-headline font-black text-3xl ${
                        stat.orange ? 'text-[#FF6A00]' : 'text-white'
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#FF6A00] py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter text-black leading-none text-center md:text-left">
            READY TO SEE YOUR NAME<br />IN AI RESULTS?
          </h2>
          <Link
            href="/#territory-check"
            className="bg-black text-[#FF6A00] px-12 py-5 font-headline font-black uppercase tracking-tighter text-lg hover:bg-[#131313] transition-colors inline-flex items-center gap-3 whitespace-nowrap"
          >
            INITIATE AUDIT
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
