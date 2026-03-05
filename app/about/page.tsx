'use client';

import { useEffect, useRef, useState, RefObject } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Hook to respect reduced motion preferences
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
};

// Hook for scroll-triggered animations
const useScrollAnimation = (): { ref: RefObject<HTMLDivElement | null>; isVisible: boolean } => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return { ref, isVisible };
};

export default function About() {
  const storyAnim = useScrollAnimation();
  const missionAnim = useScrollAnimation();
  const approachAnim = useScrollAnimation();
  const founderAnim = useScrollAnimation();
  const resultsAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <>
      <style jsx global>{`
        :root {
          --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
          --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
        }

        *:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #0F1117, 0 0 0 4px rgba(255,255,255,0.4);
          border-radius: 8px;
          transition: box-shadow 200ms var(--ease-out-quart);
        }

        button:focus-visible, a:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #0F1117, 0 0 0 4px rgba(255,255,255,0.4), ;
        }

        .font-heading {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .hover-lift {
          transition: all 500ms var(--ease-out-expo);
        }

        .hover-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.12);
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          .hover-lift:hover {
            transform: none;
          }
        }
      `}</style>

      {/* Schema Markup - AboutPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About The Answer Engine - AEO Specialists",
            "description": "Learn about The Answer Engine, the leading Answer Engine Optimization agency helping local service businesses get cited by AI platforms like ChatGPT, Claude, and Google AI Overviews.",
            "url": "https://theanswerengine.ai/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "founder": {
                "@type": "Person",
                "name": "JB",
                "jobTitle": "Founder & AEO Strategist"
              }
            }
          })
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://theanswerengine.ai"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://theanswerengine.ai/about"
              }
            ]
          })
        }}
      />

      <main className="min-h-screen bg-[#0F1117] relative">
        {/* removed gradient overlay */}

        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 relative">
          {/* Back to Home */}
          <div className="flex justify-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <header className="text-center mb-16 sm:mb-20">
            <div className="flex justify-center mb-10">
              <Link href="/">
                <Image
                  src="/TheAnswerEngine_white logo only.png"
                  alt="The Answer Engine"
                  width={384}
                  height={128}
                  priority
                  className="h-20 sm:h-28 w-auto"
                />
              </Link>
            </div>

            <p className="text-sm text-white/30 uppercase tracking-widest mb-6">About</p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight text-white font-heading tracking-tight">
              We make AI recommend<br />
              <span className="text-white/40">your business.</span>
            </h1>

            <p className="text-lg text-white/40 max-w-lg mx-auto leading-relaxed">
              Answer Engine Optimization for local service businesses who want to be the answer AI recommends.
            </p>
          </header>

          {/* The Story Section */}
          <section className="mb-16 sm:mb-20">
            <div
              ref={storyAnim.ref}
              className={`transition-all duration-700 ease-out ${
                storyAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white font-heading">The Problem We Solve</h2>

              <div className="space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                <p>
                  Search is changing. When people ask ChatGPT, Claude, Perplexity, or Google AI Overviews for recommendations,
                  <span className="text-white font-medium"> AI doesn't show a list of 10 blue links</span>. It gives one answer.
                </p>

                <p>
                  If you're not that answer, you're invisible.
                </p>

                <div className="border-l border-white/[0.10] pl-6 py-2">
                  <p className="text-white/60 leading-relaxed">
                    Most local businesses have spent years optimizing for the old Google.
                    But AI engines work differently. They don&apos;t rank pages &mdash; they cite authorities.
                    Your competitors are probably getting cited instead of you.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-16 sm:mb-20" />

          {/* Mission Section */}
          <section className="mb-16 sm:mb-20">
            <div
              ref={missionAnim.ref}
              className={`border border-white/[0.06] rounded-2xl p-8 sm:p-12 transition-all duration-700 ease-out ${
                missionAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-6">
                <p className="text-sm text-white/30 uppercase tracking-widest mb-4">Mission</p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white font-heading tracking-tight">
                  Position local experts as AI-cited authorities
                </h2>
              </div>

              <p className="text-center text-white/40 leading-relaxed max-w-lg mx-auto">
                We help local service businesses become the trusted source that AI cites.
                Not through tricks &mdash; through genuine authority positioning.
              </p>
            </div>
          </section>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-16 sm:mb-20" />

          {/* Our Approach Section */}
          <section className="mb-16 sm:mb-20">
            <div
              ref={approachAnim.ref}
              className={`transition-all duration-700 ease-out ${
                approachAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-white font-heading">What Makes Us Different</h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Territory Protection",
                    description: "We only work with one business per category, per geographic area. Once you claim your spot, competitors are locked out.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    )
                  },
                  {
                    title: "90-Day Guarantee",
                    description: "Get cited by at least 2 AI platforms within 90 days, or we work for free until you do. Or take a full refund. Your choice.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Proven in Competition",
                    description: "Our methods work in America's most competitive market: LA County real estate with 70,000+ agents. Your industry has less competition.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  {
                    title: "AI-First Strategy",
                    description: "We don't retrofit old SEO tactics. Every piece of content is structured specifically for how AI platforms evaluate and cite sources.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    )
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`border border-white/[0.06] rounded-2xl p-6 transition-all duration-500 ${
                      approachAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: approachAnim.isVisible ? `${100 + i * 100}ms` : '0ms' }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 font-heading">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-16 sm:mb-20" />

          {/* Founder Section */}
          <section className="mb-16 sm:mb-20">
            <div
              ref={founderAnim.ref}
              className={`transition-all duration-700 ease-out ${
                founderAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 sm:p-12">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <span className="text-3xl font-heading text-white">JB</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium tracking-widest uppercase text-white/30 mb-3 block">Founder</span>
                    <h3 className="text-xl sm:text-2xl font-heading text-white mb-3">Justin Borges</h3>
                    <p className="text-white/50 leading-relaxed mb-4">
                      Before building The Answer Engine, JB spent 13+ years in real estate, building a team that closed $200M+ in sales across LA County. When AI started reshaping how customers find businesses, he didn&apos;t wait — he built the system that now powers AI visibility for local service businesses nationwide.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-white/40">
                      <span className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                        13+ Years in Business
                      </span>
                      <span className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                        $200M+ in Sales
                      </span>
                      <span className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                        100% AI Citation Rate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-16 sm:mb-20" />

          {/* Results Stats Bar */}
          <section className="mb-16 sm:mb-20">
            <div
              ref={resultsAnim.ref}
              className={`transition-all duration-700 ease-out ${
                resultsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-heading text-white">Results That Speak</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: '8,400+', label: 'Monthly Clicks', color: 'text-white' },
                  { value: '1.1M+', label: 'Impressions', color: 'text-white' },
                  { value: '100%', label: 'AI Citation Rate', color: 'text-white' },
                  { value: '90-Day', label: 'Guarantee', color: 'text-white' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 text-center transition-all duration-500 ${
                      resultsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: resultsAnim.isVisible ? `${i * 100}ms` : '0ms' }}
                  >
                    <div className={`text-2xl sm:text-3xl font-heading ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-16 sm:mb-20" />

          {/* CTA Section */}
          <section>
            <div
              ref={ctaAnim.ref}
              className={`border border-white/[0.08] rounded-2xl p-8 sm:p-12 lg:p-16 text-center transition-all duration-700 ease-out ${
                ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 leading-tight font-heading">
                <span className="text-white">Ready to become</span>{' '}
                <span className="text-white/40">the answer?</span>
              </h2>

              <p className="text-base sm:text-lg text-white/50 mb-8 max-w-xl mx-auto leading-relaxed">
                Check if your territory is available and see where competitors are winning AI citations.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/#territory-check"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white text-[#0F1117] rounded-xl font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 active:scale-[0.98]"
                >
                  Check Territory
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-[15px] text-white/60 hover:text-white border border-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </section>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
