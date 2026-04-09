import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Blind Spot Checker — Is AI Recommending Your Competitors? | The Answer Engine',
  description:
    'Free scan reveals which businesses AI platforms are citing in your territory. Run a blind spot check across ChatGPT, Perplexity, and Google AI to see where you are invisible.',
  openGraph: {
    title: 'AI Blind Spot Checker — Find Out Who AI Recommends Instead of You',
    description:
      'Scan ChatGPT, Perplexity, and Google AI simultaneously. See exactly which competitors are being cited and where your brand disappears from the AI conversation.',
    url: 'https://theanswerengine.ai/tools/blind-spot-checker',
  },
};

const INDUSTRIES = [
  'Select Industry',
  'Real Estate',
  'Legal Services',
  'HVAC / Plumbing',
  'Dental / Medical',
  'Solar Energy',
  'Roofing',
  'Financial Services',
  'Insurance',
  'Consulting',
];

const SCAN_STEPS = [
  {
    num: '01',
    label: 'CROSS-PLATFORM ANALYSIS',
    desc: 'We scan ChatGPT, Perplexity, and Google AI simultaneously.',
  },
  {
    num: '02',
    label: 'BLIND SPOT MAPPING',
    desc: 'Identify exactly where your brand vanishes from the conversational AI journey.',
  },
  {
    num: '03',
    label: 'THREAT DETECTION',
    desc: 'Discover which competitors are being favored by current LLM recommendation engines.',
  },
];

const PREVIEW_RESULTS = [
  {
    platform: 'PLATFORM: CHATGPT_v4',
    icon: '◎',
    query: 'Query: "Best consulting firms in the area..."',
    response: (
      <>
        Response: Based on current data,{' '}
        <span className="text-[#FF6A00] font-bold underline">
          STRATOS_CORE_INC
        </span>{' '}
        is the most cited authority for...
      </>
    ),
    status: 'STATUS: CITED_BY_AI',
    ref: 'SEC_01 // DATA_FIX',
    variant: 'normal' as const,
  },
  {
    platform: 'PLATFORM: PERPLEXITY',
    icon: '◈',
    query: 'Query: "Top rated services for..."',
    response: (
      <>
        Citations point primarily to{' '}
        <span className="text-[#FF6A00] font-bold underline">
          OMEGA_DYNAMIC_SYSTEMS
        </span>{' '}
        as the market leader...
      </>
    ),
    status: 'STATUS: CITED_BY_AI',
    ref: 'SEC_04 // DATA_FIX',
    variant: 'normal' as const,
  },
  {
    platform: 'PLATFORM: GOOGLE_AI',
    icon: '⚠',
    query: 'Query: "Reliable vendors for..."',
    response: null,
    status: 'STATUS: VOID_DETECTED',
    ref: 'SEC_99 // DATA_NULL',
    variant: 'error' as const,
  },
];

export default function BlindSpotCheckerPage() {
  return (
    <div
      className="text-white min-h-screen font-sans overflow-x-hidden"
      style={{
        backgroundColor: '#131313',
        backgroundImage: 'radial-gradient(#2a2a2a 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      {/* Scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[100]"
        style={{
          background:
            'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1) 50%)',
          backgroundSize: '100% 4px',
        }}
        aria-hidden="true"
      />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative z-20">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              {/* Tag */}
              <div className="inline-block px-3 py-1 bg-[#353534] text-[#FF6A00] font-mono text-[10px] tracking-widest mb-6 uppercase">
                THREAT_DETECTION // SCANNING_ENABLED
              </div>

              <h1 className="font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-8">
                IS AI RECOMMENDING YOUR{' '}
                <span className="text-[#FF6A00]">COMPETITORS</span> INSTEAD OF
                YOU?
              </h1>

              <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
                Run a free scan to see which businesses AI platforms are citing
                in your territory.
              </p>
            </div>

            {/* Decorative panel */}
            <div className="lg:col-span-4 flex justify-end">
              <div className="w-full aspect-square bg-[#1c1b1b] border border-white/10 p-4 relative overflow-hidden hidden lg:block">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background:
                      'radial-gradient(#ff6a00 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-mono text-[#FF6A00] text-8xl font-black opacity-30 select-none"
                    aria-hidden="true"
                  >
                    AI_
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[#FF6A00] tracking-tighter uppercase">
                  LIVE_INTEL_FEED // 404.99
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FORM SECTION ─────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
          <div className="order-2 lg:order-1">
            <div
              className="bg-[#201f1f] border-t-4 border-[#FF6A00] p-8 lg:p-12"
              style={{ boxShadow: '4px 4px 0px 0px #000000' }}
            >
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <h2 className="font-headline font-bold text-xl uppercase tracking-widest">
                  INITIATE_SCAN // INPUT_REQUIRED
                </h2>
                <span className="text-[#FF6A00] font-mono text-sm">[SCAN]</span>
              </div>

              <form className="space-y-6" action="/tools/blind-spot-checker" method="GET">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="business-name"
                      className="block font-mono text-[10px] uppercase text-white/40 tracking-widest"
                    >
                      Business Name
                    </label>
                    <input
                      id="business-name"
                      name="business"
                      type="text"
                      placeholder="ENTER_ENTITY_ID"
                      className="w-full bg-[#0e0e0e] border border-white/10 focus:border-[#FF6A00] focus:outline-none text-white font-mono py-3 px-4 text-sm placeholder:text-white/20 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="industry-select"
                      className="block font-mono text-[10px] uppercase text-white/40 tracking-widest"
                    >
                      Industry
                    </label>
                    <select
                      id="industry-select"
                      name="industry"
                      className="w-full bg-[#0e0e0e] border border-white/10 focus:border-[#FF6A00] focus:outline-none text-white font-mono py-3 px-4 text-sm transition-colors cursor-pointer"
                    >
                      {INDUSTRIES.map((ind) => (
                        <option key={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="city-zip"
                      className="block font-mono text-[10px] uppercase text-white/40 tracking-widest"
                    >
                      City / Zip
                    </label>
                    <input
                      id="city-zip"
                      name="location"
                      type="text"
                      placeholder="COORDINATES"
                      className="w-full bg-[#0e0e0e] border border-white/10 focus:border-[#FF6A00] focus:outline-none text-white font-mono py-3 px-4 text-sm placeholder:text-white/20 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="website-url"
                      className="block font-mono text-[10px] uppercase text-white/40 tracking-widest"
                    >
                      Website URL
                    </label>
                    <input
                      id="website-url"
                      name="website"
                      type="url"
                      placeholder="HTTPS://DATA_SOURCE"
                      className="w-full bg-[#0e0e0e] border border-white/10 focus:border-[#FF6A00] focus:outline-none text-white font-mono py-3 px-4 text-sm placeholder:text-white/20 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF6A00] text-black font-headline font-black py-4 px-8 uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-colors text-lg"
                  style={{ boxShadow: '4px 4px 0px 0px #000000' }}
                >
                  EXECUTE SCAN
                  <span aria-hidden="true">&#9655;</span>
                </button>
              </form>
            </div>
          </div>

          {/* Steps */}
          <div className="order-1 lg:order-2 space-y-8">
            {SCAN_STEPS.map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <span className="text-[#FF6A00] font-mono text-2xl font-black shrink-0">
                  {step.num}
                </span>
                <p className="text-white/60 font-light">
                  <span className="text-white font-bold">{step.label}: </span>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PREVIEW RESULTS ──────────────────────────────────────────────── */}
        <section className="mb-32">
          <div className="mb-12">
            <h2 className="font-headline font-black text-3xl uppercase tracking-tighter mb-2">
              SCAN_RESULTS // PREVIEW
            </h2>
            <div className="h-1 w-24 bg-[#FF6A00]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
            {PREVIEW_RESULTS.map((card) =>
              card.variant === 'error' ? (
                <div
                  key={card.platform}
                  className="bg-[#201f1f] p-6 border border-white/10 border-r-4 relative overflow-hidden"
                  style={{ borderRightColor: '#ffb4ab' }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                      {card.platform}
                    </div>
                    <span className="text-[#ffb4ab] font-mono text-sm">
                      {card.icon}
                    </span>
                  </div>
                  <div className="font-mono text-sm leading-relaxed mb-8 h-24 overflow-hidden">
                    <span className="text-white/40">{card.query}</span>
                    <br />
                    <span className="text-[#ffb4ab] font-bold tracking-widest">
                      YOUR BUSINESS: NOT_FOUND
                    </span>
                    <br />
                    <span className="text-white/40 italic">
                      No specific entity matches your profile in the current
                      vector space.
                    </span>
                  </div>
                  <div className="flex justify-between items-center font-mono text-[10px]">
                    <span className="text-[#ffb4ab] font-bold">
                      {card.status}
                    </span>
                    <span className="text-white/40">{card.ref}</span>
                  </div>
                </div>
              ) : (
                <div
                  key={card.platform}
                  className="bg-[#201f1f] p-6 border border-white/10 relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                      {card.platform}
                    </div>
                    <span className="text-white/40 font-mono text-sm">
                      {card.icon}
                    </span>
                  </div>
                  <div className="font-mono text-sm leading-relaxed mb-8 h-24 overflow-hidden">
                    <span className="text-white/40">{card.query}</span>
                    <br />
                    <span className="text-white">{card.response}</span>
                  </div>
                  <div className="flex justify-between items-center font-mono text-[10px]">
                    <span className="text-white/40">{card.status}</span>
                    <span className="text-white/40">{card.ref}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* ── URGENCY BAR ──────────────────────────────────────────────────── */}
        <section className="bg-[#2a2a2a] border-l-8 border-[#FF6A00] p-8 mb-32 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-headline text-xl md:text-2xl font-black uppercase tracking-tight text-white max-w-2xl">
            YOUR COMPETITORS ARE BEING CITED RIGHT NOW.{' '}
            <span className="text-[#FF6A00]">YOU ARE NOT.</span>
          </div>
          <div className="bg-[#0e0e0e] px-6 py-4 font-mono text-sm border border-white/10 shrink-0">
            <span className="text-white/40">BUSINESSES_SCANNED_TODAY:</span>
            <span className="text-[#FF6A00] font-bold ml-2">147</span>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section
          className="relative bg-[#FF6A00] p-12 lg:p-20 overflow-hidden"
          style={{ boxShadow: '4px 4px 0px 0px #000000' }}
        >
          {/* Background text */}
          <div
            className="absolute top-0 right-0 p-4 font-mono text-black/20 text-8xl font-black select-none pointer-events-none"
            aria-hidden="true"
          >
            PROTOCOL_X
          </div>

          <div className="relative z-10 text-black max-w-4xl">
            <h2 className="font-headline font-black text-4xl md:text-6xl uppercase tracking-tighter mb-8 leading-none">
              GET YOUR FULL COMPETITIVE AUDIT
            </h2>
            <p className="text-black/80 text-lg md:text-xl font-medium mb-12 max-w-2xl">
              Stop the bleed. Secure your position in the LLM ecosystem before
              your territory is permanently annexed by competitors.
            </p>
            <Link
              href="/contact"
              className="bg-black text-white font-headline font-black py-5 px-12 uppercase tracking-widest text-lg inline-flex items-center gap-4 hover:bg-[#1c1b1b] transition-all"
              style={{ boxShadow: '4px 4px 0px 0px #FF6A00' }}
            >
              SCHEDULE BRIEFING
              <span aria-hidden="true">&#9654;</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
