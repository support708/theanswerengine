'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function useCountAnimation(end: number, duration: number = 2000, shouldAnimate: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldAnimate]);

  return count;
}

function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isInView) {
        setIsInView(true);
      }
    }, { threshold: 0.3, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInView, options]);

  return { ref, isInView };
}

function AnimatedStat({
  value,
  suffix = '',
  label,
  sublabel,
  isInView,
  gradient = "from-[#f27d24] to-[#d66d1f]"
}: {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
  isInView: boolean;
  gradient?: string;
}) {
  const count = useCountAnimation(value, 2000, isInView);

  return (
    <div className="text-center">
      <div className={`text-4xl sm:text-5xl lg:text-6xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${gradient} font-heading`}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white font-medium text-sm sm:text-base mb-1">{label}</div>
      {sublabel && <div className="text-gray-500 text-xs sm:text-sm">{sublabel}</div>}
    </div>
  );
}

export default function CaseStudies() {
  const { ref: statsRef, isInView: statsInView } = useInView();
  const { ref: cardRef, isInView: cardInView } = useInView();
  const { ref: ctaRef, isInView: ctaInView } = useInView();

  return (
    <>
      <style jsx global>{`
        :root {
          --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
          --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
        }

        *:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #0F1117, 0 0 0 4px #f27d24;
          border-radius: 8px;
          transition: box-shadow 200ms var(--ease-out-quart);
        }

        button:focus-visible, a:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #0F1117, 0 0 0 4px #f27d24, 0 0 20px rgba(242, 125, 36, 0.3);
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AEO Case Studies - Real Results from Answer Engine Optimization",
            "description": "See how local service businesses achieved AI citation dominance through Answer Engine Optimization. Real case studies showing ChatGPT, Claude, and Google AI Overviews citations.",
            "url": "https://theanswerengine.ai/case-studies",
            "inLanguage": "en-US",
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "1",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          })
        }}
      />

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
                "name": "Case Studies",
                "item": "https://theanswerengine.ai/case-studies"
              }
            ]
          })
        }}
      />

      <main className="min-h-screen bg-[#0F1117] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 via-transparent to-orange-950/5 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 relative">
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

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-[#f27d24]/10 border border-[#f27d24]/20">
              <div className="w-2 h-2 bg-[#f27d24] rounded-full" />
              <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">Proven Results</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight text-white font-heading">
              <span className="block">Real Businesses. Real AI Citations.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f]">Real Results.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              See how Answer Engine Optimization helped local service businesses dominate AI search—generating qualified leads from ChatGPT, Claude, and Google AI Overviews.
            </p>
          </header>

          {/* Stats Section */}
          <div ref={statsRef} className="mb-16 sm:mb-20">
            <div className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 sm:p-12 transition-all duration-700 ease-out ${
              statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center mb-8">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Current Performance</p>
                <h2 className="text-xl sm:text-2xl font-semibold text-white font-heading">Verified Results</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
                <AnimatedStat
                  value={3362}
                  suffix=""
                  label="Monthly Clicks"
                  sublabel="From organic search alone"
                  isInView={statsInView}
                />

                <div className="md:border-x border-white/[0.08] md:px-4">
                  <AnimatedStat
                    value={1000}
                    suffix="+"
                    label="Search Queries Captured"
                    sublabel="High-intent local searches"
                    isInView={statsInView}
                    gradient="from-[#362478] to-[#2a1a5f]"
                  />
                </div>

                <AnimatedStat
                  value={694}
                  suffix=""
                  label="Page 1 Rankings"
                  sublabel="247 in positions 1-3"
                  isInView={statsInView}
                />
              </div>

              <div className="text-center mt-8 pt-8 border-t border-white/[0.08]">
                <p className="text-gray-400 text-sm">
                  Source: Google Search Console, November 2025 | LA County: 70,000+ competing agents
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 sm:mb-20" />

          {/* Case Study Card */}
          <article
            ref={cardRef}
            className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl overflow-hidden hover-lift transition-all duration-700 ease-out mb-16 sm:mb-20 ${
              cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative h-48 sm:h-56 bg-gradient-to-r from-[#362478]/40 to-[#f27d24]/40 backdrop-blur-xl border-b border-white/[0.08] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
              <div className="text-center text-white relative z-10 px-6">
                <div className="text-xs font-semibold mb-3 tracking-widest uppercase text-gray-300">
                  Real Estate · Los Angeles County
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-heading">
                  The Borges Real Estate Team
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-10 lg:p-12">
              {/* Challenge & Approach Summary */}
              <div className="mb-10">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white font-heading">
                  The Challenge
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                  Justin Borges: 13+ years experience, $200M+ in career sales, genuine expertise in complex transactions most agents avoid.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  The problem? <span className="text-white font-semibold">70,000 competing agents</span> in LA County. Page 2-3 rankings = invisible. When prospects asked AI for recommendations, Justin wasn't mentioned.
                </p>
              </div>

              {/* Results Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                  { value: '3,362', label: 'Monthly Clicks', sublabel: '100% organic', color: 'text-[#f27d24]' },
                  { value: '1,000+', label: 'Queries Captured', sublabel: 'High-intent searches', color: 'text-[#362478]' },
                  { value: '694', label: 'Page 1 Rankings', sublabel: '247 in top 3', color: 'text-[#f27d24]' },
                  { value: '$0', label: 'Ad Spend', sublabel: 'Zero paid ads', color: 'text-emerald-400' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-4 sm:p-5 text-center">
                    <div className={`text-2xl sm:text-3xl font-semibold ${stat.color} mb-2 font-heading`}>{stat.value}</div>
                    <div className="text-white font-medium text-sm mb-1">{stat.label}</div>
                    <div className="text-gray-400 text-xs">{stat.sublabel}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="relative p-6 sm:p-8 rounded-2xl mb-10 bg-white/[0.03] backdrop-blur-xl border-l-4 border-[#f27d24]">
                <svg className="absolute top-4 left-4 w-8 h-8 text-[#f27d24]/20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-base sm:text-lg italic text-gray-300 leading-relaxed relative z-10 mb-4 pl-6 sm:pl-0">
                  "15 years in LA real estate, but online I was invisible. Now I'm getting over 3,000 clicks a month without spending a dime on ads. But the real change? <span className="text-white font-medium">Lead quality.</span> People trust my expertise and need MY help specifically."
                </p>
                <div className="font-semibold text-[#f27d24] relative z-10 pl-6 sm:pl-0">
                  — Justin Borges, The Borges Real Estate Team
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/case-studies/justin-borges"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] hover:-translate-y-0.5 active:scale-[0.98] bg-[#f27d24] hover:bg-[#d66d1f]"
                >
                  Read Full Case Study
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 sm:mb-20" />

          {/* CTA */}
          <div
            ref={ctaRef}
            className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 sm:p-12 lg:p-16 text-center transition-all duration-700 ease-out ${
              ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-white leading-tight font-heading">
              Ready to Become the Next Success Story?
            </h2>

            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              If it works in the most competitive market in America (70,000 agents), it works for your industry with 10x less competition.
            </p>

            <Link
              href="/#territory-check"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_24px_rgba(54,36,120,0.3)] hover:shadow-[0_8px_32px_rgba(54,36,120,0.4)] hover:-translate-y-0.5 active:scale-[0.98] bg-[#362478] hover:bg-[#2a1a5f]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Check Your Territory
            </Link>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm"
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
