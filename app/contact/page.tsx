import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact The Answer Engine | Book a Free AEO Strategy Call',
  description: 'Free 30-minute strategy call. We scan your AI visibility live across ChatGPT, Claude, Perplexity, and Google AI and map the 90-day plan. (213) 444-2229 or book Calendly.',
  alternates: {
    canonical: 'https://www.theanswerengine.ai/contact',
  },
  openGraph: {
    title: 'Contact The Answer Engine | Book a Free AEO Strategy Call',
    description: 'Free 30-minute strategy call. We scan your AI visibility live across 4 AI platforms and map the 90-day plan.',
    type: 'website',
    url: 'https://www.theanswerengine.ai/contact',
    siteName: 'The Answer Engine',
    images: [
      {
        url: 'https://www.theanswerengine.ai/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Contact The Answer Engine — Free AEO Strategy Call',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact The Answer Engine | Book a Free AEO Strategy Call',
    description: 'Schedule your free 30-minute AEO strategy call. We scan your AI visibility across 4 platforms live.',
    site: '@theanswerengine',
    images: ['https://www.theanswerengine.ai/og-default.png'],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Schema Markup — ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact The Answer Engine — AEO Strategy Call',
            description:
              'Get in touch with The Answer Engine for Answer Engine Optimization services. Schedule your free 30-minute AEO strategy call to dominate AI citations.',
            url: 'https://theanswerengine.ai/contact',
            inLanguage: 'en-US',
            mainEntity: {
              '@type': 'Organization',
              name: 'The Answer Engine',
              telephone: '+1-213-444-2229',
              email: 'support@theanswerengine.ai',
            },
          }),
        }}
      />

      {/* Schema Markup — ProfessionalService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'The Answer Engine',
            description:
              'Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like ChatGPT, Claude, Google AI Overviews, and Perplexity.',
            url: 'https://theanswerengine.ai',
            logo: 'https://theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png',
            telephone: '+1-213-444-2229',
            email: 'support@theanswerengine.ai',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'US',
              addressRegion: 'CA',
            },
            areaServed: { '@type': 'Country', name: 'United States' },
            openingHours: 'Mo-Fr 09:00-18:00',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-213-444-2229',
              contactType: 'Sales',
              email: 'support@theanswerengine.ai',
              availableLanguage: 'English',
            },
          }),
        }}
      />

      {/* Schema Markup — BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theanswerengine.ai' },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.theanswerengine.ai/contact' },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-[#131313] text-white pt-[72px] pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Hero Section */}
          <section
            className="relative py-16 mb-12 overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(circle, #353534 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#F27D24]" />
              <p className="font-mono text-xs text-[#F27D24] tracking-[0.3em] uppercase">
                Get in Touch // Let's Talk
              </p>
            </div>

            <h1 className="text-6xl md:text-8xl font-black font-['Space_Grotesk'] leading-none tracking-tighter uppercase mb-6">
              ESTABLISH{' '}
              <span className="text-[#F27D24]">CONTACT</span>
            </h1>

            <p className="max-w-2xl text-white/50 text-lg border-l-2 border-white/10 pl-6">
              Reach out to our team directly. Ready to dominate AI search? Let&apos;s map your
              90-day plan to get cited by ChatGPT, Claude, Google AI, and Perplexity.
            </p>
          </section>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Phone Card */}
              <div className="bg-[#2a2a2a] border-l-4 border-[#F27D24] p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/10">
                  Phone
                </div>
                <p className="font-mono text-[10px] text-[#F27D24] tracking-widest mb-1 uppercase">
                  Call Us
                </p>
                <a
                  href="tel:+12134442229"
                  className="text-2xl font-bold font-['Space_Grotesk'] uppercase text-white hover:text-[#F27D24] transition-colors"
                >
                  (213) 444-2229
                </a>
                <p className="text-sm text-white/40 mt-2">Speak with an AEO specialist</p>
              </div>

              {/* Email Card */}
              <div className="bg-[#2a2a2a] border-l-4 border-[#F27D24] p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/10">
                  Email
                </div>
                <p className="font-mono text-[10px] text-[#F27D24] tracking-widest mb-1 uppercase">
                  Email Us
                </p>
                <a
                  href="mailto:support@theanswerengine.ai"
                  className="text-xl font-bold font-['Space_Grotesk'] uppercase text-white hover:text-[#F27D24] transition-colors break-all"
                >
                  support@theanswerengine.ai
                </a>
                <p className="text-sm text-white/40 mt-2">Response within 24 hours</p>
              </div>

              {/* Hours Card */}
              <div className="bg-[#2a2a2a] border-l-4 border-[#F27D24] p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-white/10">
                  Hours
                </div>
                <p className="font-mono text-[10px] text-[#F27D24] tracking-widest mb-1 uppercase">
                  Business Hours
                </p>
                <p className="text-2xl font-bold font-['Space_Grotesk'] uppercase text-white">
                  MON&ndash;FRI, 9 AM&ndash;6 PM PT
                </p>
                <p className="text-sm text-white/40 mt-2">Monday – Friday, 9 AM – 6 PM PT</p>
              </div>

              {/* System Status */}
              <div className="bg-[#1c1b1b] p-4 flex items-center justify-between border border-white/10">
                <span className="text-xs font-mono uppercase text-white/30">Status</span>
                <span className="text-xs font-mono text-green-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 animate-pulse inline-block" />
                  Online
                </span>
              </div>
            </div>

            {/* Right: Strategy Call Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#2a2a2a] border-t-4 border-[#F27D24] p-8 h-full">
                <div className="mb-8">
                  <p className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase mb-3">
                    Free Strategy Call // 30 Minutes
                  </p>
                  <h2 className="text-3xl font-black font-['Space_Grotesk'] uppercase tracking-tighter leading-tight mb-2">
                    FREE 30-MINUTE{' '}
                    <span className="text-[#F27D24]">STRATEGY BRIEFING</span>
                  </h2>
                  <div className="h-px w-24 bg-[#F27D24] mt-3" />
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    "See exactly which competitors AI platforms are citing instead of you",
                    "Identify your 3 highest-value expertise areas to own",
                    "Get a 90-day roadmap to dominate AI recommendations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-mono text-[#F27D24] text-sm mt-0.5">[+]</span>
                      <span className="font-mono text-sm text-white/70 uppercase tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+12134442229"
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#F27D24] text-black font-black font-['Space_Grotesk'] text-base uppercase tracking-widest hover:bg-white transition-colors"
                  >
                    CALL: (213) 444-2229
                  </a>
                  <a
                    href="mailto:support@theanswerengine.ai"
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-black font-['Space_Grotesk'] text-base uppercase tracking-widest hover:border-[#F27D24] hover:text-[#F27D24] transition-colors"
                  >
                    EMAIL US
                  </a>
                </div>

                {/* Guarantee */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm font-mono text-white/40 uppercase tracking-wide">
                    <span className="text-white">90-DAY GUARANTEE:</span> Get cited by 2+ AI engines or we work free until you do.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-16">
            {[
              { label: '90-DAY GUARANTEE', sub: '90-Day Guarantee' },
              { label: 'TERRITORY EXCLUSIVITY', sub: 'Exclusive Territory' },
              { label: '24HR RESPONSE', sub: 'Results Guaranteed' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#2a2a2a] p-8 flex flex-col items-center text-center"
              >
                <h4 className="font-black font-['Space_Grotesk'] uppercase tracking-tighter text-white mb-2">
                  {item.label}
                </h4>
                <p className="text-xs font-mono text-[#F27D24]/60">{item.sub}</p>
              </div>
            ))}
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1 h-4 bg-[#F27D24]" />
              <h3 className="text-xs font-['Space_Grotesk'] font-black tracking-widest uppercase text-white">
                Common Questions
              </h3>
            </div>
            <div className="flex flex-col gap-px bg-white/10 border border-white/10">
              {[
                {
                  q: 'WHAT HAPPENS ON THE STRATEGY CALL?',
                  a: "We test your business across ChatGPT, Claude, and Google AI right on the call. You'll see exactly who AI recommends instead of you, and we'll map out a 90-day plan to change that.",
                },
                {
                  q: 'HOW LONG DOES IT TAKE TO SEE RESULTS?',
                  a: "Most clients see their first AI citations within 60-90 days. That's why we back everything with a 90-day guarantee.",
                },
                {
                  q: 'DO YOU WORK WITH BUSINESSES OUTSIDE THE US?',
                  a: 'Currently we focus on US-based local service businesses, as AI citation patterns and data sources vary significantly by region.',
                },
              ].map((item) => (
                <div key={item.q} className="bg-[#1c1b1b] p-6 border-l-4 border-transparent hover:border-[#F27D24] transition-colors">
                  <p className="font-mono text-xs text-[#F27D24] font-bold tracking-widest uppercase mb-2">
                    {item.q}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-white/30 hover:text-[#F27D24] transition-colors uppercase tracking-widest"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
          </div>

        </div>
      </main>

      {/* Mobile Sticky Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#131313]/95 border-t border-[#F27D24]/20 z-50">
        <div className="flex gap-3">
          <a
            href="tel:+12134442229"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#F27D24] text-black font-black font-['Space_Grotesk'] uppercase text-sm tracking-widest active:opacity-80 transition-all"
          >
            CALL
          </a>
          <a
            href="mailto:support@theanswerengine.ai"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-white/20 text-white font-black font-['Space_Grotesk'] uppercase text-sm tracking-widest hover:border-[#F27D24] active:opacity-80 transition-all"
          >
            EMAIL
          </a>
        </div>
      </div>
    </>
  );
}
