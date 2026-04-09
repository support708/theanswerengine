import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — Answer Authority Foundation | The Answer Engine',
  description:
    'Complete AEO system for local business dominance. Competitive Audit, AI-Optimized Articles, Schema Implementation, Citation Monitoring, Monthly Reporting, and Territory Protection.',
  openGraph: {
    title: 'AEO Services — Answer Authority Foundation',
    description:
      'One package. Total territory dominance. The Answer Authority Foundation builds full AEO infrastructure so AI recommends you — not your competitors.',
    url: 'https://theanswerengine.ai/services',
  },
};

const PACKAGE_ITEMS = [
  {
    icon: '✓',
    title: 'Competitive Audit',
    desc: 'Full AI citation landscape analysis across LLMs and search engines.',
  },
  {
    icon: '✓',
    title: 'AI-Optimized Articles',
    desc: 'Research-backed articles structured for AI citation with proper schema markup.',
  },
  {
    icon: '✓',
    title: 'Schema Implementation',
    desc: 'Advanced structured data layering for native AI comprehension.',
  },
  {
    icon: '✓',
    title: 'Citation Monitoring',
    desc: 'Real-time tracking of brand mentions and entity connections.',
  },
  {
    icon: '✓',
    title: 'Monthly Reporting',
    desc: 'Technical performance metrics and iterative optimization data.',
  },
  {
    icon: '✓',
    title: 'Territory Protection',
    desc: 'Exclusive category and city lockout for your industry.',
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
    aeo: 'Strategic Content Publishing',
  },
  {
    param: 'LONGEVITY',
    seo: 'Algorithm Sensitive',
    aeo: 'Algorithm-Resistant',
  },
];

const FAQS = [
  {
    q: 'How does the pricing model work?',
    a: 'We operate on a setup fee combined with a monthly maintenance plan. Our pricing is reflective of the intensive data layering required to achieve Answer Authority within a competitive landscape. Contact our team for a custom quote based on your industry volume.',
    open: true,
  },
  {
    q: 'What industries do you serve?',
    a: 'We serve high-competition local service industries: real estate, legal, medical, HVAC, plumbing, roofing, solar, dental, and more. If AI models are being asked about your category in your city, we can help.',
    open: false,
  },
  {
    q: 'How does territory protection work?',
    a: 'We accept one client per industry per city. Once you claim a territory, no competitor in your category can become a client in that market. This exclusivity is the core of the AEO value proposition.',
    open: false,
  },
  {
    q: 'What is the required commitment?',
    a: 'Minimum engagement is 90 days. AEO requires consistent data layering to achieve citation authority — results compound over time. We do not offer one-month trials because they cannot produce meaningful outcomes.',
    open: false,
  },
  {
    q: 'What happens post-90 days?',
    a: 'After the initial 90-day engagement, most clients continue on a monthly maintenance plan to preserve and expand their entity authority as AI models update. We will review your citation footprint and recommend next-phase strategy.',
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

        {/* ── PACKAGE CARD ─────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-[#1c1b1b]">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#2a2a2a] border-l-4 border-t-4 border-[#FF6A00] p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                <div className="font-mono text-xl tracking-widest text-[#FF6A00]">
                  Answer Authority Foundation
                </div>
                <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  Our Core Package
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {PACKAGE_ITEMS.map((item) => (
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

              {/* Package footer */}
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
              <Link
                href="/territory-check"
                className="bg-black text-white px-12 py-5 font-headline font-black text-xl uppercase tracking-widest hover:translate-x-2 hover:-translate-y-2 transition-transform inline-block"
              >
                Get Started
              </Link>
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
