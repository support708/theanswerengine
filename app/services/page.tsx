import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AEO Services — 90-Day Foundation + Monthly Program | The Answer Engine',
  description:
    'The complete AEO system: 90-day Answer Authority Foundation with citation guarantee, then an ongoing Monthly Program (Authority Index, Monday Brief, Monthly Report, Dashboard). One client per market.',
  openGraph: {
    title: 'AEO Services — 90-Day Foundation + Monthly Program',
    description:
      'Two parts: the 90-day foundation gets you cited. The Monthly Program compounds it. Monday Brief, Authority Index, Monthly Report, Dashboard, Reddit monitoring.',
    url: 'https://theanswerengine.ai/services',
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
    title: 'AEO Authority Index',
    desc: 'Your weekly score across ChatGPT, Claude, Perplexity, and Google AI. Updated every Monday.',
  },
  {
    icon: '✓',
    title: 'The Monday Brief',
    desc: 'One email per week. Rank deltas that matter, Reddit opportunities, and what we\'re doing next.',
  },
  {
    icon: '✓',
    title: 'Monthly AEO Intelligence Report',
    desc: 'First of every month. Impressions, clicks, CTR, rank deltas, page-2 queue, and interpretation.',
  },
  {
    icon: '✓',
    title: 'Client Dashboard',
    desc: 'Live 4-platform tabs — Perplexity, Claude, Google AI, ChatGPT. Pull-based, on your schedule.',
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
    a: 'Two parts: a one-time foundation fee (scoped to your industry and market size) and a monthly program fee that covers the Monday Brief, Monthly Report, Dashboard, Reddit monitoring, and Top-Performer Audit. We quote live on the strategy call — no surprise pricing.',
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
    <div className="bg-[#131313] text-white min-h-screen font-sans">
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
              <span className="bg-[#FF6A00]/10 text-[#FF6A00] font-mono text-[10px] px-2 py-1 border border-[#FF6A00]/20 tracking-widest uppercase">
                Our Services // AEO Packages
              </span>
              <div className="h-[1px] flex-grow bg-white/10" />
            </div>

            <h1 className="font-headline font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9] mb-8">
              WHAT YOU{' '}
              <span className="text-[#FF6A00]">GET</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-white/60 font-light tracking-tight border-l-2 border-[#FF6A00] pl-6">
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
        <section className="py-20 px-6 bg-[#1c1b1b]">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#2a2a2a] border-l-4 border-t-4 border-[#FF6A00] p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-[#FF6A00] uppercase mb-2">
                    Part 1 // One-Time Build
                  </div>
                  <div className="font-headline font-black text-3xl md:text-4xl text-[#e5e2e1] uppercase tracking-tighter">
                    The 90-Day Foundation
                  </div>
                </div>
                <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  Answer Authority Foundation
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-2xl">
                Setup. One-time build. Citation guarantee. If we don&apos;t get you cited by at least 2 AI platforms within 90 days, we keep working until you are — or refund.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {FOUNDATION_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 bg-[#0e0e0e] border border-white/5 hover:border-[#FF6A00]/50 transition-all"
                  >
                    <div className="text-[#FF6A00] text-4xl mb-4 font-black font-mono">
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

              <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
                <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                  Timeline: 90 Days // Guarantee: Active
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-[#FF6A00] animate-pulse" />
                  <div className="w-3 h-3 bg-[#FF6A00]/40" />
                  <div className="w-3 h-3 bg-[#FF6A00]/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MONTHLY PROGRAM ─────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-[#131313]">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0e0e0e] border-l-4 border-t-4 border-[#FF6A00] p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-[#FF6A00] uppercase mb-2">
                    Part 2 // Ongoing
                  </div>
                  <div className="font-headline font-black text-3xl md:text-4xl text-[#e5e2e1] uppercase tracking-tighter">
                    The Monthly Program
                  </div>
                </div>
                <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  Compounds The Foundation
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-2xl">
                What keeps you cited — and surfaces new opportunities — after the foundation ships. One email per week. One report per month. Dashboard 24/7.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {MONTHLY_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 bg-[#1c1b1b] border border-white/5 hover:border-[#FF6A00]/50 transition-all"
                  >
                    <div className="text-[#FF6A00] text-4xl mb-4 font-black font-mono">
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

              <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
                <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                  Cadence: ≤1.5 Emails/Week // Dashboard: 24/7
                </div>
                <a
                  href="https://calendly.com/theanswerengine-support/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-widest text-[#FF6A00] uppercase hover:text-[#e5e2e1] transition-colors"
                >
                  Book 30-min call →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── AEO VS SEO TABLE ─────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-[#131313]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-headline font-black text-4xl uppercase mb-12 tracking-tighter border-b border-[#FF6A00]/30 pb-4 inline-block">
              AEO VS TRADITIONAL SEO
            </h2>

            <div className="overflow-x-auto border border-white/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FF6A00] text-black font-black uppercase font-headline">
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
                      className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-[#1c1b1b]' : 'bg-[#131313]'}`}
                    >
                      <td className="p-4 border-r border-white/5 font-bold text-white">
                        {row.param}
                      </td>
                      <td className="p-4 border-r border-white/5 text-white/60">
                        {row.seo}
                      </td>
                      <td className="p-4 text-[#FF6A00]">{row.aeo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-[#1c1b1b]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end gap-6 mb-16">
              <h2 className="font-headline font-black text-5xl uppercase tracking-tighter leading-none">
                FREQUENTLY
                <br />
                ASKED
              </h2>
              <div className="h-2 w-2 bg-[#FF6A00] mb-1" />
              <div className="h-[1px] flex-grow bg-white/10 mb-2" />
            </div>

            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  open={faq.open}
                  className={`group ${faq.open ? 'bg-[#131313] border border-white/5 border-l-4 border-l-[#FF6A00]' : 'bg-[#131313] border border-white/5'}`}
                >
                  <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
                    <h4
                      className={`font-headline font-bold text-lg uppercase tracking-tighter ${faq.open ? 'text-[#FF6A00]' : 'text-white'}`}
                    >
                      {faq.q}
                    </h4>
                    <span className="font-mono text-white/40 text-xl select-none ml-4">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed max-w-2xl">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-[#131313]">
          <div className="max-w-7xl mx-auto bg-[#FF6A00] p-12 md:p-20 relative overflow-hidden">
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
