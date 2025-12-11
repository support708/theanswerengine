'use client';

import { useEffect, useRef, useState, RefObject } from 'react';
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

export default function JustinBorgesCaseStudy() {
  const resultsAnim = useScrollAnimation();
  const challengeAnim = useScrollAnimation();
  const approachAnim = useScrollAnimation();
  const metricsAnim = useScrollAnimation();
  const testimonialAnim = useScrollAnimation();
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

      {/* Complete 9-Schema Package for Case Study */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": "https://theanswerengine.ai/case-studies/justin-borges#article",
                "headline": "Case Study: 3,300+ Monthly Clicks in LA's Most Competitive Market",
                "description": "How Answer Engine Optimization helped The Borges Real Estate Team capture 3,300+ monthly clicks and dominate 1,000+ search queries, competing against 70,000 agents without ad spend.",
                "image": "https://theanswerengine.ai/justin-borges-headshot.jpg",
                "author": {
                  "@id": "https://theanswerengine.ai/#jb-author"
                },
                "publisher": {
                  "@id": "https://theanswerengine.ai/#organization"
                },
                "datePublished": "2024-12-01",
                "dateModified": "2025-11-30",
                "mainEntityOfPage": {
                  "@id": "https://theanswerengine.ai/case-studies/justin-borges#webpage"
                },
                "about": {
                  "@id": "https://theanswerengine.ai/#aeo-service"
                },
                "keywords": ["Answer Engine Optimization", "AEO", "local service business", "real estate", "case study", "organic traffic", "search rankings"]
              },
              {
                "@type": "WebPage",
                "@id": "https://theanswerengine.ai/case-studies/justin-borges#webpage",
                "url": "https://theanswerengine.ai/case-studies/justin-borges",
                "name": "Justin Borges Case Study | The Answer Engine",
                "description": "How Answer Engine Optimization helped The Borges Real Estate Team capture 3,300+ monthly clicks in LA's most competitive market.",
                "isPartOf": {
                  "@id": "https://theanswerengine.ai/#website"
                },
                "about": {
                  "@id": "https://theanswerengine.ai/#aeo-service"
                },
                "mentions": [
                  {
                    "@id": "https://theanswerengine.ai/case-studies/justin-borges#justin-borges"
                  }
                ]
              },
              {
                "@type": "Organization",
                "@id": "https://theanswerengine.ai/#organization",
                "name": "The Answer Engine",
                "url": "https://theanswerengine.ai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "1",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://theanswerengine.ai/#localbusiness",
                "name": "The Answer Engine",
                "image": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png",
                "telephone": "+1-213-444-2229",
                "url": "https://theanswerengine.ai",
                "priceRange": "$",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Los Angeles",
                  "addressRegion": "CA",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "34.0522",
                  "longitude": "-118.2437"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "1",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              {
                "@type": "Service",
                "@id": "https://theanswerengine.ai/#aeo-service",
                "name": "Answer Engine Optimization",
                "description": "Strategic content optimization that positions local service businesses as the authoritative source AI platforms cite when users ask relevant questions.",
                "provider": {
                  "@id": "https://theanswerengine.ai/#organization"
                },
                "serviceType": "Answer Engine Optimization",
                "areaServed": {
                  "@type": "Country",
                  "name": "United States"
                }
              },
              {
                "@type": "Person",
                "@id": "https://theanswerengine.ai/case-studies/justin-borges#justin-borges",
                "name": "Justin Borges",
                "jobTitle": "Real Estate Agent",
                "worksFor": {
                  "@type": "RealEstateAgent",
                  "name": "The Borges Real Estate Team"
                },
                "knowsAbout": ["Los Angeles Real Estate", "Rent Control", "Probate Sales", "ADU Investments"]
              },
              {
                "@type": "Person",
                "@id": "https://theanswerengine.ai/#jb-author",
                "name": "JB",
                "jobTitle": "Founder & AEO Strategist",
                "worksFor": {
                  "@id": "https://theanswerengine.ai/#organization"
                },
                "description": "Founder of The Answer Engine, specializing in Answer Engine Optimization for local service businesses.",
                "knowsAbout": ["Answer Engine Optimization", "AEO", "AI Citations", "Local SEO", "Content Strategy"]
              },
              {
                "@type": "Review",
                "@id": "https://theanswerengine.ai/case-studies/justin-borges#review",
                "author": {
                  "@id": "https://theanswerengine.ai/case-studies/justin-borges#justin-borges"
                },
                "datePublished": "2025-11-23",
                "reviewBody": "JB and The Answer Engine completely transformed how AI platforms recommend my real estate services. Before working with him, ChatGPT and Perplexity would cite my competitors when people asked about LA real estate agents. Now I'm getting cited 100% of the time for relevant queries in my market.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "itemReviewed": {
                  "@id": "https://theanswerengine.ai/#aeo-service"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://theanswerengine.ai/case-studies/justin-borges#breadcrumb",
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
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Justin Borges Case Study",
                    "item": "https://theanswerengine.ai/case-studies/justin-borges"
                  }
                ]
              }
            ]
          })
        }}
      />

      <main className="min-h-screen bg-[#0F1117] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 via-transparent to-orange-950/5 pointer-events-none" />

        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16 relative">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#f27d24] transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/case-studies" className="hover:text-[#f27d24] transition-colors">Case Studies</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-400">Justin Borges</span>
          </nav>

          {/* Header */}
          <header className="mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-[#f27d24]/10 border border-[#f27d24]/20">
              <div className="w-2 h-2 bg-[#f27d24] rounded-full" />
              <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">Case Study</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight font-heading">
              3,300+ Monthly Clicks in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f]">America's Most Competitive Market</span>
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Industry: Real Estate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>LA County: 70,000 Competing Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Zero Ad Spend</span>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              How strategic Answer Engine Optimization helped one real estate team go from invisible to generating 3,300+ monthly clicks and dominating 1,000+ search queries, all without spending a dollar on ads.
            </p>
          </header>

          {/* Results Summary */}
          <section className="mb-16">
            <div
              ref={resultsAnim.ref}
              className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 sm:p-12 transition-all duration-700 ease-out ${
                resultsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-8">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Verified Results</p>
                <h2 className="text-2xl font-semibold text-white font-heading">Current Performance</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { value: '3,362', label: 'Monthly Clicks', sublabel: 'From organic search alone', color: 'from-[#f27d24] to-[#d66d1f]' },
                  { value: '1,000+', label: 'Search Queries Captured', sublabel: 'High-intent local searches', color: 'from-[#362478] to-[#2a1a5f]' },
                  { value: '648', label: 'Pages Indexed', sublabel: 'Content moat established', color: 'from-[#f27d24] to-[#d66d1f]' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`text-center transition-all duration-500 ${
                      resultsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: resultsAnim.isVisible ? `${100 + i * 100}ms` : '0ms' }}
                  >
                    <div className={`text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-3 font-heading`}>{stat.value}</div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.sublabel}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/[0.08]">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/[0.03] rounded-lg">
                    <div className="text-2xl font-semibold text-white mb-1 font-heading">247</div>
                    <div className="text-sm text-gray-400">Queries in Top 3 Positions</div>
                  </div>
                  <div className="text-center p-4 bg-white/[0.03] rounded-lg">
                    <div className="text-2xl font-semibold text-white mb-1 font-heading">694</div>
                    <div className="text-sm text-gray-400">Queries on Page 1</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">
                  Source: Google Search Console, November 2025
                </p>
              </div>
            </div>
          </section>

          {/* The Challenge */}
          <section className="mb-16">
            <div
              ref={challengeAnim.ref}
              className={`transition-all duration-700 ease-out ${
                challengeAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white font-heading">The Challenge</h2>

              <div className="space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                <p>
                  LA County real estate: <span className="text-white font-medium">70,000+ competing agents</span>. National brands with unlimited budgets. Zillow spending $2 billion annually on marketing.
                </p>

                <p>
                  Justin Borges had 13+ years of experience, $200M+ in career sales, and genuine expertise in complex transactions most agents avoid. But online? Invisible.
                </p>

                <div className="bg-white/[0.03] backdrop-blur-xl border-l-4 border-[#f27d24] p-6 rounded-r-xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 font-heading">The Specific Problem</h3>
                  <ul className="space-y-3 text-gray-300">
                    {[
                      { bold: 'Brutal competition:', text: 'Generic searches like "real estate agent LA" had hundreds of pages competing' },
                      { bold: 'Budget disadvantage:', text: "Can't outspend Zillow or Realtor.com on ads" },
                      { bold: 'AI invisibility:', text: "When prospects asked ChatGPT or Claude for recommendations, Justin wasn't mentioned" },
                      { bold: 'Undifferentiated content:', text: "Every agent's website looked identical" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#f27d24] mt-1 flex-shrink-0">•</span>
                        <span><strong className="text-white font-medium">{item.bold}</strong> {item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg sm:text-xl font-semibold text-white">
                  The question: How do you compete when you can't outspend the competition?
                </p>
              </div>
            </div>
          </section>

          {/* The Approach */}
          <section className="mb-16">
            <div
              ref={approachAnim.ref}
              className={`transition-all duration-700 ease-out ${
                approachAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white font-heading">The Approach</h2>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                We didn't try to beat Zillow at their game. We played a different game entirely.
              </p>

              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 sm:p-8 mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 font-heading">The Strategic Shift</h3>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Instead Of:</div>
                    <div className="text-gray-300 p-4 bg-white/[0.03] rounded-lg border border-red-500/20">
                      Competing for "real estate agent near me" (Position 21, page 3, invisible)
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-[#f27d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  <div>
                    <div className="text-sm text-[#f27d24] mb-2 uppercase tracking-wide font-semibold">We Focused On:</div>
                    <div className="text-white p-4 bg-[#f27d24]/10 rounded-lg border border-[#f27d24]/30 font-medium">
                      Owning specific expertise areas where Justin has genuine authority and prospects desperately need guidance
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f27d24]/10 border-l-4 border-[#f27d24] p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-white mb-3 font-heading">The Strategy</h3>
                <p className="text-gray-300 mb-4">
                  We identified the complex problems Justin solves every day, the situations where his 13+ years of expertise actually matters:
                </p>
                <ul className="space-y-2 text-gray-300">
                  {[
                    { bold: 'Complex local regulations', text: 'that confuse homeowners and investors' },
                    { bold: 'Specialized transaction types', text: 'most agents avoid or handle poorly' },
                    { bold: 'Timely local knowledge', text: "that national brands can't match" },
                    { bold: 'Investment opportunities', text: 'requiring deep market expertise' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#f27d24] font-bold">→</span>
                      <span><strong className="text-white">{item.bold}</strong> {item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg sm:text-xl font-medium text-[#f27d24] mt-8">
                The result: From invisible to 3,300+ monthly clicks and 694 page-one rankings.
              </p>
            </div>
          </section>

          {/* Detailed Metrics */}
          <section className="mb-16">
            <div
              ref={metricsAnim.ref}
              className={`transition-all duration-700 ease-out ${
                metricsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white font-heading">The Results</h2>

              <p className="text-gray-400 mb-8">
                All metrics verified via Google Search Console (November 2025)
              </p>

              <div className="space-y-6 mb-12">
                {/* Traffic Performance */}
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center gap-3 font-heading">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f27d24] to-[#d66d1f] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </span>
                    Traffic Performance
                  </h3>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { value: '3,362', label: 'Monthly Clicks', sublabel: '~146/day average', color: 'text-[#f27d24]' },
                      { value: '488K+', label: 'Monthly Impressions', sublabel: 'Brand visibility', color: 'text-[#362478]' },
                      { value: '$0', label: 'Ad Spend', sublabel: '100% organic', color: 'text-[#f27d24]' },
                      { value: '648', label: 'Pages Indexed', sublabel: 'Content moat', color: 'text-[#362478]' }
                    ].map((stat, i) => (
                      <div key={i} className="p-4 bg-white/[0.03] rounded-lg text-center">
                        <div className={`text-2xl sm:text-3xl font-semibold ${stat.color} mb-2 font-heading`}>{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                        <div className="text-xs text-gray-500 mt-1">{stat.sublabel}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ranking Performance */}
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center gap-3 font-heading">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#362478] to-[#2a1a5f] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </span>
                    Search Rankings
                  </h3>

                  <div className="space-y-4">
                    {[
                      { label: 'Top 3 Positions', sublabel: 'Featured prominently in search results', value: '247', gradient: 'from-[#f27d24]/10', border: 'border-[#f27d24]/20', color: 'text-[#f27d24]' },
                      { label: 'Page 1 Rankings', sublabel: 'Visible when prospects search', value: '694', gradient: 'from-[#362478]/10', border: 'border-[#362478]/20', color: 'text-[#362478]' },
                      { label: 'Total Queries Captured', sublabel: 'Unique search terms ranking', value: '1,000+', gradient: 'from-white/[0.03]', border: 'border-white/[0.08]', color: 'text-white' }
                    ].map((item, i) => (
                      <div key={i} className={`flex items-center justify-between p-4 bg-gradient-to-r ${item.gradient} to-transparent rounded-lg border ${item.border}`}>
                        <div>
                          <div className="text-white font-semibold">{item.label}</div>
                          <div className="text-sm text-gray-400">{item.sublabel}</div>
                        </div>
                        <div className={`text-2xl sm:text-3xl font-semibold ${item.color} font-heading`}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#f27d24]/10 to-[#d66d1f]/10 border border-[#f27d24]/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#f27d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-2">What These Numbers Mean</div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Justin isn't competing for generic "real estate agent" searches against Zillow's $2B marketing budget. He owns specific expertise areas where he has genuine authority. That's where AI platforms look for sources to cite. That's where qualified leads come from.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="mb-16">
            <div
              ref={testimonialAnim.ref}
              className={`bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 sm:p-12 transition-all duration-700 ease-out ${
                testimonialAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <svg className="w-10 h-10 text-[#f27d24]/30 mb-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
                "15 years in LA real estate, but online I was invisible. Buried on page 2-3 for everything.
                <br/><br/>
                We identified specific problems where I have genuine expertise, complex situations most competitors avoid. Now I'm getting over 3,000 clicks a month without spending a dime on ads.
                <br/><br/>
                But the real change? <span className="text-white font-semibold">Lead quality.</span>
                <br/><br/>
                Before: Price shoppers comparing five options.<br/>
                After: People who trust my expertise and need MY help specifically.
                <br/><br/>
                That's a completely different sales conversation."
              </blockquote>
              <div>
                <div className="font-semibold text-white text-lg">Justin Borges</div>
                <div className="text-sm text-gray-400">The Borges Real Estate Team | 13+ Years | $200M+ Sales</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div
              ref={ctaAnim.ref}
              className={`bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 sm:p-12 text-center transition-all duration-700 ease-out ${
                ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-white font-heading">
                Ready to Position YOUR Expertise?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                If it works in the most competitive market in America (70,000 agents), it works for your industry with 10x less competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#territory-check"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] hover:-translate-y-0.5 active:scale-[0.98] bg-[#f27d24] hover:bg-[#d66d1f]"
                >
                  Check Your Territory
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold text-white transition-all duration-300 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.15]"
                >
                  View More Case Studies
                </Link>
              </div>
            </div>
          </section>

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
        </article>
      </main>
    </>
  );
}
