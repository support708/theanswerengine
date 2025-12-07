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

export default function Contact() {
  const cardsAnim = useScrollAnimation();
  const strategyAnim = useScrollAnimation();

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

      {/* Schema Markup - ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact The Answer Engine - AEO Strategy Call",
            "description": "Get in touch with The Answer Engine for Answer Engine Optimization services. Schedule your free 30-minute AEO strategy call to dominate AI citations.",
            "url": "https://theanswerengine.ai/contact",
            "inLanguage": "en-US",
            "mainEntity": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "telephone": "+1-213-444-2229",
              "email": "support@theanswerengine.ai"
            }
          })
        }}
      />

      {/* Schema Markup - ProfessionalService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "The Answer Engine",
            "description": "Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like ChatGPT, Claude, Google AI Overviews, and Perplexity.",
            "url": "https://theanswerengine.ai",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png",
            "telephone": "+1-213-444-2229",
            "email": "support@theanswerengine.ai",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US",
              "addressRegion": "CA"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "priceRange": "$",
            "openingHours": "Mo-Fr 09:00-18:00",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-213-444-2229",
              "contactType": "Sales",
              "email": "support@theanswerengine.ai",
              "availableLanguage": "English"
            }
          })
        }}
      />

      {/* Schema Markup - BreadcrumbList */}
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
                "name": "Contact",
                "item": "https://theanswerengine.ai/contact"
              }
            ]
          })
        }}
      />

      <main className="min-h-screen bg-[#0F1117] relative pb-24 md:pb-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 via-transparent to-orange-950/5 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 relative">
          {/* Header */}
          <header className="text-center mb-16 sm:mb-20">
            {/* Back to Home Link */}
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

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight text-white font-heading">
              <span className="block">Get Started with</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f]">
                Answer Engine Optimization
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Ready to dominate AI search? Let's discuss how to get your business cited by ChatGPT, Claude, Google AI, and Perplexity.
            </p>
          </header>

          {/* Contact Cards */}
          <div
            ref={cardsAnim.ref}
            className={`grid sm:grid-cols-2 gap-6 mb-20 transition-all duration-700 ease-out ${
              cardsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div
              className={`hover-lift bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 transition-all duration-500 ${
                cardsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: cardsAnim.isVisible ? '100ms' : '0ms' }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 bg-[#f27d24]/10 border border-[#f27d24]/20 ring-4 ring-[#f27d24]/5">
                  <svg className="w-7 h-7 text-[#f27d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white font-heading">
                  Call or Text
                </h2>

                <p className="text-gray-500 text-sm mb-6">
                  Speak with an AEO specialist
                </p>

                <a
                  href="tel:+12134442229"
                  className="inline-block text-2xl sm:text-3xl font-semibold text-[#f27d24] hover:text-[#d66d1f] transition-colors font-heading"
                >
                  (213) 444-2229
                </a>
              </div>
            </div>

            <div
              className={`hover-lift bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 transition-all duration-500 ${
                cardsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: cardsAnim.isVisible ? '200ms' : '0ms' }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 bg-[#362478]/10 border border-[#362478]/20 ring-4 ring-[#362478]/5">
                  <svg className="w-7 h-7 text-[#a89bd9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white font-heading">
                  Email Us
                </h2>

                <p className="text-gray-500 text-sm mb-6">
                  Response within 24 hours
                </p>

                <a
                  href="mailto:support@theanswerengine.ai"
                  className="inline-block text-base sm:text-lg font-medium text-[#a89bd9] hover:text-[#9989c9] transition-colors break-all"
                >
                  support@theanswerengine.ai
                </a>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

          {/* Strategy Call Section */}
          <div
            ref={strategyAnim.ref}
            className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 sm:p-12 lg:p-16 transition-all duration-700 ease-out ${
              strategyAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-[#f27d24]/10 border border-[#f27d24]/20">
                <div className="w-2 h-2 rounded-full bg-[#f27d24]" />
                <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">Free Consultation</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-white leading-tight font-heading">
                30-Minute AEO Strategy Call
              </h2>

              <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
                We'll analyze where you're losing to competitors in AI citations and map out your 90-day plan.
              </p>
            </div>

            <div className="space-y-3 mb-10 max-w-xl mx-auto">
              {[
                "See exactly which competitors AI platforms are citing instead of you",
                "Identify your 3 highest-value expertise areas to own",
                "Get a 90-day roadmap to dominate AI recommendations"
              ].map((text, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] transition-all duration-500 ${
                    strategyAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: strategyAnim.isVisible ? `${200 + i * 100}ms` : '0ms' }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center bg-emerald-500/20 border border-emerald-500/20 mt-0.5">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12134442229"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] hover:-translate-y-0.5 active:scale-[0.98] bg-[#f27d24] hover:bg-[#d66d1f]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call: (213) 444-2229
              </a>

              <a
                href="mailto:support@theanswerengine.ai"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold text-white transition-all duration-300 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.15]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email Us
              </a>
            </div>

            {/* Guarantee Note */}
            <div className="mt-10 pt-8 border-t border-white/[0.06] text-center">
              <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span>
                  <span className="text-white font-medium">90-day guarantee:</span> Get cited by 2+ AI engines or we work for free until you do.
                </span>
              </div>
            </div>
          </div>

          {/* Info Footer */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span><span className="text-gray-400">Response:</span> Within 2 hours (business hours)</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f27d24]" />
                <span><span className="text-gray-400">Hours:</span> Mon-Fri, 9 AM - 6 PM PT</span>
              </div>
            </div>
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

        {/* Mobile Sticky Footer */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#0F1117]/95 backdrop-blur-xl border-t border-white/[0.08] z-50">
          <div className="flex gap-3">
            <a
              href="tel:+12134442229"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold bg-[#f27d24] text-white active:scale-[0.98] transition-transform"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call
            </a>
            <a
              href="mailto:support@theanswerengine.ai"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold bg-white/[0.05] text-gray-300 border border-white/[0.1] active:scale-[0.98] transition-transform"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
