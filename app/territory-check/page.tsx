import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Territory Check | One AEO Client per Market',
  description:
    'One business per category per city. Check if your market is still open before a competitor claims it. 24-hour response. 90-day citation guarantee.',
  alternates: {
    canonical: 'https://www.theanswerengine.ai/territory-check',
  },
  openGraph: {
    title: 'Territory Check | One AEO Client per Market',
    description:
      'One business per category per city. Check if your market is still open before a competitor claims it. 24-hour response. 90-day citation guarantee.',
    url: 'https://www.theanswerengine.ai/territory-check',
    type: 'website',
    siteName: 'The Answer Engine',
    images: [
      {
        url: 'https://www.theanswerengine.ai/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Territory Check — One AEO Client per Market',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Territory Check | One AEO Client per Market',
    description: 'One business per category per city. Check if your market is open. 90-day citation guarantee.',
    site: '@theanswerengine',
    images: ['https://www.theanswerengine.ai/og-default.png'],
  },
};

type TerritoryStatus = 'secured' | 'available';

interface Territory {
  id: string;
  city: string;
  category: string;
  status: TerritoryStatus;
}

const TERRITORIES: Territory[] = [
  // LOCKED — signed clients
  { id: '01', city: 'LOS ANGELES, CA', category: 'REAL ESTATE', status: 'secured' },
  { id: '02', city: 'PASADENA, CA', category: 'REAL ESTATE', status: 'secured' },
  { id: '03', city: 'SAN DIEGO, CA', category: 'REAL ESTATE', status: 'secured' },
  { id: '04', city: 'INLAND EMPIRE, CA', category: 'REAL ESTATE', status: 'secured' },
  { id: '05', city: 'AUSTIN, TX', category: 'REAL ESTATE', status: 'secured' },
  { id: '06', city: 'LONG BEACH, CA', category: 'PROPERTY MANAGEMENT', status: 'secured' },
  // OPEN — real-estate-first expansion
  { id: '07', city: 'CHICAGO, IL', category: 'REAL ESTATE', status: 'available' },
  { id: '08', city: 'MIAMI, FL', category: 'REAL ESTATE', status: 'available' },
  { id: '09', city: 'SEATTLE, WA', category: 'REAL ESTATE', status: 'available' },
  { id: '10', city: 'ATLANTA, GA', category: 'REAL ESTATE', status: 'available' },
  { id: '11', city: 'DENVER, CO', category: 'REAL ESTATE', status: 'available' },
  { id: '12', city: 'PHOENIX, AZ', category: 'REAL ESTATE', status: 'available' },
];

const INDUSTRIES = [
  'Select Industry',
  'Real Estate',
  'Property Management',
  'Builder / Financial Services',
  'Legal Services',
  'Dental / Medical',
  'HVAC / Plumbing',
  'Roofing',
  'Other Local Service',
];

export default function TerritoryCheckPage() {
  return (
    <div className="bg-[#131313] text-white min-h-screen font-sans">
      {/* BreadcrumbList + WebPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.theanswerengine.ai/territory-check#webpage',
                name: 'Territory Check — One AEO Client per Market',
                description: 'One business per category per city. Check if your market is still open before a competitor claims it.',
                url: 'https://www.theanswerengine.ai/territory-check',
                inLanguage: 'en-US',
                isPartOf: { '@id': 'https://www.theanswerengine.ai/#website' },
                breadcrumb: { '@id': 'https://www.theanswerengine.ai/territory-check#breadcrumb' },
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://www.theanswerengine.ai/territory-check#breadcrumb',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theanswerengine.ai' },
                  { '@type': 'ListItem', position: 2, name: 'Territory Check', item: 'https://www.theanswerengine.ai/territory-check' },
                ],
              },
            ],
          }),
        }}
      />
      {/* Scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1) 51%)',
          backgroundSize: '100% 4px',
        }}
        aria-hidden="true"
      />

      <main className="relative z-20 pt-16">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[820px] flex flex-col items-center justify-center px-6 overflow-hidden"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,106,0,0.1) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        >
          {/* Scanline layer */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1) 51%)',
              backgroundSize: '100% 4px',
            }}
            aria-hidden="true"
          />

          <div className="max-w-6xl w-full text-center relative z-10">
            {/* Tag */}
            <div className="inline-block border border-[#F27D24]/30 px-3 py-1 mb-8">
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#F27D24] uppercase">
                Territory Check // Is Your Market Available?
              </span>
            </div>

            <h1 className="font-headline font-black text-4xl md:text-7xl leading-none tracking-tighter mb-8 uppercase">
              CHECK IF YOUR{' '}
              <span className="text-[#F27D24]">TERRITORY</span> IS STILL
              AVAILABLE
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12">
              One business per category. Per city. Once claimed, your competitors
              are{' '}
              <span className="text-white font-bold">permanently locked out.</span>
            </p>

            {/* Query Form Card */}
            <div className="max-w-2xl mx-auto bg-[#2a2a2a] border-t-4 border-[#F27D24] p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6 opacity-60">
                <span className="font-mono text-[10px] uppercase tracking-widest">
                  Check Availability
                </span>
              </div>

              {/* Visual-only form — functionality to be wired server-side */}
              <form className="space-y-6" action="/territory-check" method="GET">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-left">
                    <label
                      htmlFor="industry"
                      className="block font-mono text-[10px] text-white/40 mb-2 uppercase tracking-widest"
                    >
                      Your Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      className="w-full bg-[#0e0e0e] border border-white/10 text-white p-4 focus:outline-none focus:border-[#F27D24] transition-all cursor-pointer font-mono text-sm"
                    >
                      {INDUSTRIES.map((ind) => (
                        <option key={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                  <div className="text-left">
                    <label
                      htmlFor="city"
                      className="block font-mono text-[10px] text-white/40 mb-2 uppercase tracking-widest"
                    >
                      Your City
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="e.g. Austin, TX"
                      className="w-full bg-[#0e0e0e] border border-white/10 text-white p-4 focus:outline-none focus:border-[#F27D24] transition-all font-mono text-sm placeholder:text-white/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F27D24] text-black font-headline font-black py-5 text-lg uppercase tracking-widest hover:bg-white hover:-translate-y-[2px] transition-all active:translate-y-0"
                >
                  CHECK AVAILABILITY
                </button>
              </form>
            </div>
          </div>

          {/* Binary decoration */}
          <div
            className="absolute bottom-10 left-10 hidden lg:block opacity-20 pointer-events-none"
            aria-hidden="true"
          >
            <pre className="font-mono text-[8px] leading-tight text-[#F27D24]">
              {`01011001 01001111 01010101 01010010\n01010100 01000101 01010010 01010010\n01001001 01010100 01001111 01010010\n01011001 01001100 01001111 01000011\n01001011 01000101 01000100`}
            </pre>
          </div>
        </section>

        {/* ── TERRITORY GRID ───────────────────────────────────────────────── */}
        <section className="bg-[#1c1b1b] py-24 px-6 border-y border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-headline font-black text-3xl uppercase tracking-tighter">
                ACTIVE TERRITORY MAP
              </h2>
              <div className="flex gap-6 font-mono text-[10px] tracking-widest text-white/40">
                <span className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 bg-[#F27D24]"
                    style={{ boxShadow: '0 0 8px #F27D24' }}
                  />
                  AVAILABLE
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white/20" />
                  Claimed
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10">
              {TERRITORIES.map((t) =>
                t.status === 'secured' ? (
                  <div
                    key={t.id}
                    className="bg-[#2a2a2a] p-6 opacity-40 grayscale"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-mono text-[10px] font-bold text-white/40">
                        {t.id}
                      </span>
                      <span className="text-white/40 text-sm font-mono">
                        Claimed
                      </span>
                    </div>
                    <h3 className="font-headline font-black text-xl mb-1 uppercase tracking-tighter">
                      {t.city}
                    </h3>
                    <p className="text-[10px] text-white/40 mb-6 uppercase tracking-wider">
                      {t.category}
                    </p>
                    <div className="bg-white/10 text-[10px] py-1 text-center font-mono font-bold tracking-widest text-white/40 uppercase">
                      Claimed
                    </div>
                  </div>
                ) : (
                  <div
                    key={t.id}
                    className="bg-[#2a2a2a] p-6 border-2 border-[#F27D24] relative"
                  >
                    <div
                      className="absolute inset-0 bg-[#F27D24]/5 animate-pulse pointer-events-none"
                      aria-hidden="true"
                    />
                    <div className="flex justify-between items-start mb-4 relative z-10">
                      <span className="font-mono text-[10px] font-bold text-[#F27D24]">
                        {t.id}
                      </span>
                      <span className="text-[#F27D24] text-sm font-mono">
                        Available
                      </span>
                    </div>
                    <h3 className="font-headline font-black text-xl mb-1 uppercase tracking-tighter relative z-10">
                      {t.city}
                    </h3>
                    <p className="text-[10px] text-white/60 mb-6 uppercase tracking-wider relative z-10">
                      {t.category}
                    </p>
                    <div className="bg-[#F27D24] text-black text-[10px] py-1 text-center font-mono font-bold tracking-widest relative z-10 uppercase">
                      AVAILABLE
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── URGENCY SECTION ──────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-[#0e0e0e]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-white mb-12 uppercase leading-tight tracking-tighter">
              ONLY ONE BUSINESS PER CATEGORY PER AREA. ONCE CLAIMED, YOUR
              COMPETITORS ARE{' '}
              <span className="text-[#F27D24]">LOCKED OUT.</span>
            </h2>
            <div className="inline-flex items-center gap-4 bg-[#1c1b1b] border border-[#F27D24]/30 px-8 py-6">
              <span
                className="w-3 h-3 bg-[#F27D24] animate-pulse"
                aria-hidden="true"
              />
              <span className="font-headline font-black text-lg md:text-2xl text-[#F27D24] tracking-widest">
                90-day citation guarantee. One client per market.
              </span>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="bg-[#F27D24] py-20 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="font-headline font-black text-4xl md:text-5xl text-black uppercase leading-none tracking-tighter max-w-xl">
              LOCK IN YOUR TERRITORY BEFORE IT&apos;S GONE
            </h2>
            <Link
              href="/contact"
              className="bg-black text-[#F27D24] font-headline font-black px-12 py-6 text-xl uppercase tracking-widest hover:bg-[#1c1b1b] transition-all inline-block"
            >
              Claim My Territory
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
