'use client';

import { useEffect, useRef, useState, RefObject } from 'react';
import Image from 'next/image';

// Hook to respect reduced motion preferences (accessibility)
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
    // If user prefers reduced motion, show immediately
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

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Scroll animation refs for each section
  const caseStudyAnim = useScrollAnimation();
  const testimonialsAnim = useScrollAnimation();
  const citationsAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();
  const processAnim = useScrollAnimation();
  const aeroAnim = useScrollAnimation();
  const beforeAfterAnim = useScrollAnimation();
  const guaranteeAnim = useScrollAnimation();
  const faqAnim = useScrollAnimation();
  const territoryAnim = useScrollAnimation();

  // Track scroll position for sticky header and mobile CTA
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        setShowStickyHeader(window.scrollY > heroBottom);
      }

      // Mobile CTA visibility
      const territorySection = document.getElementById('territory-check');
      if (territorySection) {
        const rect = territorySection.getBoundingClientRect();
        setShowMobileCta(window.scrollY > 400 && rect.top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null);
    };
    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  return (
    <>
      <style jsx global>{`
        *:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #0F1117, 0 0 0 4px #f27d24;
          border-radius: 8px;
          transition: box-shadow 200ms cubic-bezier(0.25, 1, 0.5, 1);
        }

        button:focus-visible, a:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #0F1117, 0 0 0 4px #f27d24, 0 0 20px rgba(242, 125, 36, 0.3);
        }
      `}</style>

      {/* Schema Markup - ProfessionalService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://theanswerengine.ai/#organization",
            "name": "The Answer Engine",
            "description": "Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like Google AI Overviews, ChatGPT, Claude, and Perplexity. 90-day citation guarantee. Exclusive territory protection.",
            "url": "https://theanswerengine.ai",
            "logo": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png",
              "width": 400,
              "height": 400
            },
            "image": "https://theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png",
            "telephone": "+1-213-444-2229",
            "email": "support@theanswerengine.ai",
            "priceRange": "$$",
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pasadena",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "34.1478",
              "longitude": "-118.1445"
            },
            "founder": {
              "@type": "Person",
              "name": "Justin Borges",
              "jobTitle": "Founder & AEO Strategist"
            },
            "foundingDate": "2025",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "12",
              "bestRating": "5",
              "worstRating": "1"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "telephone": "+1-213-444-2229",
              "email": "support@theanswerengine.ai",
              "availableLanguage": "English",
              "areaServed": "US"
            },
            "sameAs": [
              "https://www.linkedin.com/company/theanswerengine",
              "https://twitter.com/theanswerengine"
            ],
            "knowsAbout": [
              "Answer Engine Optimization",
              "AI Citations",
              "ChatGPT Optimization",
              "Google AI Overviews",
              "Perplexity SEO",
              "Claude AI Optimization",
              "Local Business Marketing"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AEO Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Answer Authority Foundation",
                    "description": "Complete AEO implementation including competitive audit, 6 AI-optimized articles, schema implementation, and 90-day citation monitoring"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* FAQ Schema with Speakable */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Answer Engine Optimization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Answer Engine Optimization (AEO) is the practice of optimizing content to be cited by AI platforms like Google AI Overviews, ChatGPT, Claude, and Perplexity as the authoritative answer, rather than just ranking in traditional search results."
                }
              },
              {
                "@type": "Question",
                "name": "Do you guarantee results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer a 90-day citation guarantee. If you don't get cited by at least 2 AI engines within 90 days, we'll continue working for free until you do, or provide a full refund. Your choice."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with competing businesses in the same area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. We only work with one business per category per geographic area. Once you secure your spot, we will not work with any competing business in your service area."
                }
              },
              {
                "@type": "Question",
                "name": "How is AEO different from regular SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Traditional SEO gets you on page 1. AEO gets you cited as THE answer. When someone asks AI 'who's the best plumber in Phoenix,' we make sure AI says your name—not a list of 10 competitors."
                }
              },
              {
                "@type": "Question",
                "name": "How long until I see results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most clients see their first AI citations within 60-90 days. That's why we offer a 90-day guarantee. If you're not getting cited, we keep working for free until you are."
                }
              }
            ],
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#faq-section"]
            }
          })
        }}
      />

      {/* HowTo Schema - Process Steps */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Get Cited by AI Platforms Like ChatGPT and Google AI",
            "description": "The Answer Engine's 3-step process to make AI platforms trust and cite your business as the authoritative answer.",
            "totalTime": "P90D",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "2997"
            },
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Competitive Audit",
                "text": "We test 50+ customer queries across Google AI, ChatGPT, Claude & Perplexity to see who AI recommends—and identify exactly what you need to outrank them.",
                "url": "https://theanswerengine.ai/#how-it-works"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Answer Authority Foundation",
                "text": "We create 6 research-backed articles in your authentic voice, structured specifically for AI citation with proper schema markup.",
                "url": "https://theanswerengine.ai/#how-it-works"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Citation Monitoring",
                "text": "Track your monthly citation rate. Watch AI engines start recommending you to prospects asking buying questions.",
                "url": "https://theanswerengine.ai/#how-it-works"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": "AI Platform Testing Suite"
              },
              {
                "@type": "HowToTool",
                "name": "Schema Markup Implementation"
              }
            ]
          })
        }}
      />

      {/* Product/Offer Schema - Pricing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Answer Authority Foundation Package",
            "description": "Complete Answer Engine Optimization implementation for local service businesses. Includes competitive audit across 50+ queries, 6 AI-optimized articles, schema implementation, and 90-day citation monitoring with guaranteed results.",
            "brand": {
              "@type": "Brand",
              "name": "The Answer Engine"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://theanswerengine.ai/#territory-check",
              "priceCurrency": "USD",
              "price": "2997",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/LimitedAvailability",
              "itemCondition": "https://schema.org/NewCondition",
              "seller": {
                "@type": "Organization",
                "name": "The Answer Engine"
              },
              "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": "US",
                "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                "merchantReturnDays": 90,
                "returnMethod": "https://schema.org/ReturnByMail",
                "returnFees": "https://schema.org/FreeReturn"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "12",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />

      {/* Review Schema - Testimonials */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://theanswerengine.ai/#reviews",
            "name": "The Answer Engine",
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Justin Borges",
                  "jobTitle": "Real Estate Team Leader",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "The Borges Real Estate Team"
                  }
                },
                "reviewBody": "JB doesn't just understand SEO—he understands how AI actually decides who to recommend. That's a completely different skill set, and it's working.",
                "datePublished": "2025-01-15",
                "itemReviewed": {
                  "@type": "Service",
                  "name": "Answer Engine Optimization"
                }
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Home Services Client"
                },
                "reviewBody": "I was skeptical that this would work in my market. 90 days later, I'm the only contractor Perplexity recommends in my zip code.",
                "datePublished": "2025-02-01",
                "itemReviewed": {
                  "@type": "Service",
                  "name": "Answer Engine Optimization"
                }
              }
            ]
          })
        }}
      />

      {/* DefinedTerm Schema - AEO Definition */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            "name": "Answer Engine Optimization",
            "alternateName": ["AEO", "AI Search Optimization", "AI Citation Optimization"],
            "description": "Answer Engine Optimization (AEO) is the practice of structuring content so AI platforms—ChatGPT, Claude, Perplexity, Google AI Overviews—cite your business as the trusted answer. Unlike traditional SEO which optimizes for rankings, AEO optimizes for being the definitive answer AI recommends.",
            "inDefinedTermSet": {
              "@type": "DefinedTermSet",
              "name": "Digital Marketing Terminology",
              "description": "Terms related to digital marketing, SEO, and AI-powered search optimization"
            }
          })
        }}
      />

      {/* Case Study Schema - Justin Borges Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": "https://theanswerengine.ai/#case-study",
            "headline": "LA County Real Estate AEO Case Study: From Invisible to #1 AI Citation",
            "description": "Justin Borges achieved 100% AI citation rate in LA County real estate market with 70,000+ competing agents, ranking for 1,000+ search queries.",
            "articleSection": "Case Study",
            "author": {
              "@type": "Organization",
              "name": "The Answer Engine"
            },
            "about": {
              "@type": "Person",
              "name": "Justin Borges",
              "jobTitle": "Real Estate Agent",
              "worksFor": {
                "@type": "RealEstateAgent",
                "name": "The Borges Real Estate Team",
                "url": "https://lametrohomefinder.com",
                "areaServed": "Los Angeles County"
              }
            },
            "mentions": [
              {
                "@type": "QuantitativeValue",
                "name": "Search Queries Ranked",
                "value": "1000",
                "unitText": "queries"
              },
              {
                "@type": "QuantitativeValue",
                "name": "Competing Agents",
                "value": "70000",
                "unitText": "agents"
              },
              {
                "@type": "QuantitativeValue",
                "name": "AI Citation Rank",
                "value": "1",
                "unitText": "position"
              }
            ]
          })
        }}
      />

      {/* WebPage Schema with Speakable */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://theanswerengine.ai/",
            "name": "The Answer Engine - Answer Engine Optimization for Local Businesses",
            "description": "Get your business cited by ChatGPT, Claude, Google AI Overviews, and Perplexity. Answer Engine Optimization with 90-day citation guarantee and exclusive territory protection.",
            "url": "https://theanswerengine.ai",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "Answer Engine Optimization"
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".hero-description", "#faq-section"]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Answer Engine Optimization",
              "provider": {
                "@id": "https://theanswerengine.ai/#organization"
              }
            }
          })
        }}
      />

      <main className="min-h-screen bg-[#0F1117] relative overflow-hidden">
        {/* Sticky Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 bg-[#0F1117]/80 backdrop-blur-xl border-b border-white/[0.08] transition-all duration-300 ${
            showStickyHeader
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            <Image
              src="/TheAnswerEngine_white logo only.png"
              alt="The Answer Engine"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <a
              href="#territory-check"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all shadow-[0_4px_16px_rgba(242,125,36,0.25)] hover:shadow-[0_6px_20px_rgba(242,125,36,0.35)] hover:-translate-y-0.5 bg-[#f27d24] hover:bg-[#d66d1f]"
            >
              Check My Territory
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </header>

        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 via-transparent to-orange-950/5 pointer-events-none" />
        
        {/* Hero Section */}
        <section ref={heroRef} className="relative max-w-5xl mx-auto px-6 pt-16 sm:pt-24 pb-24 sm:pb-32">
          <div className="flex justify-center mb-12">
            <Image
              src="/TheAnswerEngine_white logo only.png"
              alt="The Answer Engine"
              width={384}
              height={128}
              priority
              className="h-24 sm:h-32 w-auto"
            />
          </div>

          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-8 leading-tight text-white font-heading">
              ChatGPT Recommends<br />
              Your Competitors. Not You.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f]">
                Let's Fix That.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              When customers ask AI to find the best service provider in your area, your competitors get cited. We make AI cite you instead.
            </p>

            {/* Industry badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Plumbers', 'HVAC', 'Real Estate', 'Electricians', 'Attorneys', 'Dentists'].map((industry) => (
                <span key={industry} className="px-4 py-2 bg-white/5 border border-white/[0.08] rounded-lg text-gray-300 text-sm">
                  {industry}
                </span>
              ))}
            </div>

            {/* AI Platform Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-12 opacity-60">
              <span className="text-gray-500 text-sm">Optimize for:</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#10a37f] flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span className="text-gray-400 text-sm hidden sm:inline">ChatGPT</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#D97757] flex items-center justify-center">
                  <span className="text-white font-bold text-xs">C</span>
                </div>
                <span className="text-gray-400 text-sm hidden sm:inline">Claude</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#20B8CD] flex items-center justify-center">
                  <span className="text-white font-bold text-xs">P</span>
                </div>
                <span className="text-gray-400 text-sm hidden sm:inline">Perplexity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span className="text-gray-400 text-sm hidden sm:inline">Google AI</span>
              </div>
            </div>

            <a
              href="#territory-check"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_40px_rgba(242,125,36,0.5)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] bg-[#f27d24] hover:bg-[#d66d1f]"
            >
              Show Me Who's Stealing My Leads
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            <p className="text-gray-500 text-sm mt-6">
              One business per category, per city. Nationwide availability—check if your territory is open.
            </p>
          </div>
        </section>

        {/* Protected Territory - PROPERLY SIZED */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-[#f27d24] text-white rounded-2xl p-8 sm:p-12 text-center shadow-[0_0_60px_rgba(242,125,36,0.2)] border-2 border-[#d66d1f] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }} />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-1.5 rounded-lg mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
                </svg>
                <span className="font-bold text-xs tracking-wider uppercase">Protected Territory</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 font-heading">
                Only One Business Per Category, Per Area
              </h2>
              
              <p className="text-lg text-white/90 max-w-xl mx-auto">
                First come, first served. Your competitors are locked out once you claim your spot.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div
            ref={caseStudyAnim.ref}
            className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-12 sm:p-16 hover-lift transition-all duration-700 ease-out ${
              caseStudyAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-[#362478]/10 border border-[#362478]/20">
                <div className="w-2 h-2 rounded-full bg-[#362478]" />
                <span className="text-sm font-semibold tracking-wider uppercase text-[#a89bd9]">Proof</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-semibold mb-6 leading-tight text-white font-heading">
                LA County Real Estate: 70,000 Agents Competing
              </h2>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 max-w-2xl mx-auto mb-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Justin Borges went from invisible to AI platforms to being the <span className="text-white font-semibold">ONLY agent cited</span> for rent control, probate real estate, and ADU questions across LA County.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  { value: '1,000+', label: 'Search Queries Ranked' },
                  { value: '70,000+', label: 'Competing Agents' },
                  { value: '#1', label: 'AI Citations in Market' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-500 ease-out ${
                      caseStudyAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: caseStudyAnim.isVisible ? `${i * 100 + 200}ms` : '0ms' }}
                  >
                    <div className="text-3xl font-semibold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://lametrohomefinder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#f27d24] hover:text-[#d66d1f] transition-colors text-lg font-medium"
              >
                See the proof: lametrohomefinder.com
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div
            ref={testimonialsAnim.ref}
            className={`transition-all duration-700 ease-out ${
              testimonialsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-[#f27d24]/10 border border-[#f27d24]/20">
                <div className="w-2 h-2 rounded-full bg-[#f27d24]" />
                <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">Client Results</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white font-heading">What Business Owners Say</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  quote: "JB doesn't just understand SEO—he understands how AI actually decides who to recommend. That's a completely different skill set, and it's working.",
                  name: "Justin Borges",
                  role: "The Borges Real Estate Team, Pasadena",
                  initials: "JB",
                  bgColor: "bg-[#362478]"
                },
                {
                  quote: "I was skeptical that this would work in my market. 90 days later, I'm the only contractor Perplexity recommends in my zip code.",
                  name: "Home Services Client",
                  role: "Los Angeles County",
                  initials: "★",
                  bgColor: "bg-emerald-600"
                }
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className={`bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 transition-all duration-500 ease-out ${
                    testimonialsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: testimonialsAnim.isVisible ? `${i * 150}ms` : '0ms' }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-[#f27d24]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-semibold`}>{testimonial.initials}</div>
                    <div>
                      <div className="text-white font-medium">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-10">
              Currently serving clients in: Real Estate • Property Management • Home Services
            </p>
          </div>
        </section>

        {/* AI Citation Examples Section */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div
            ref={citationsAnim.ref}
            className={`transition-all duration-700 ease-out ${
              citationsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-[#362478]/10 border border-[#362478]/20">
                <div className="w-2 h-2 rounded-full bg-[#362478]" />
                <span className="text-sm font-semibold tracking-widest uppercase text-[#a89bd9]">See It In Action</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white font-heading mb-4">
                What AI Citations Actually Look Like
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                When someone asks AI for help, your business gets recommended by name.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  platform: 'ChatGPT',
                  icon: 'G',
                  bgColor: 'bg-[#10a37f]',
                  query: 'Which realtor can help with my rent controlled property?',
                  image: '/citations/chat-rent-control.png',
                  alt: 'ChatGPT screenshot recommending Justin Borges for rent controlled property sales in Los Angeles'
                },
                {
                  platform: 'Google AI',
                  icon: 'G',
                  bgColor: 'bg-gradient-to-br from-blue-500 to-green-500',
                  query: 'Who is the best agent for RSO properties in LA?',
                  image: '/citations/google-rso.png',
                  alt: 'Google AI Overview citing Justin Borges as expert for RSO rent stabilized properties in Los Angeles'
                },
                {
                  platform: 'ChatGPT',
                  icon: 'G',
                  bgColor: 'bg-[#10a37f]',
                  query: 'Who is the best agent for probate sales in LA?',
                  image: '/citations/chat-probate.png',
                  alt: 'ChatGPT screenshot recommending Justin Borges for probate real estate sales in Los Angeles'
                },
                {
                  platform: 'Google AI',
                  icon: 'G',
                  bgColor: 'bg-gradient-to-br from-blue-500 to-green-500',
                  query: 'Realtor specializing in inherited property Los Angeles',
                  image: '/citations/google-inherited.png',
                  alt: 'Google AI Overview citing Justin Borges as specialist for inherited property sales in Los Angeles'
                }
              ].map((citation, i) => (
                <div
                  key={i}
                  className={`bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 hover-lift transition-all duration-500 ease-out ${
                    citationsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: citationsAnim.isVisible ? `${i * 100}ms` : '0ms' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg ${citation.bgColor} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{citation.icon}</span>
                    </div>
                    <div className="text-white font-medium text-sm">{citation.platform}</div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 italic">&ldquo;{citation.query}&rdquo;</p>
                  <button
                    onClick={() => setActiveImage(citation.image)}
                    className="w-full rounded-xl overflow-hidden border border-white/[0.08] cursor-zoom-in transition-all duration-200 hover:border-white/20 hover:shadow-lg"
                  >
                    <Image
                      src={citation.image}
                      alt={citation.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </button>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm">
              Real results from a single client in LA County real estate. Your industry could be next.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <div
            ref={ctaAnim.ref}
            className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-12 sm:p-16 hover-lift transition-all duration-700 ease-out ${
              ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-semibold mb-6 text-white font-heading">
                Not Sure If This Is Right For You?
              </h3>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Text me your industry, city, and biggest lead challenge. If you're not a fit, I'll tell you. If your competitor claimed your territory, I'll tell you. No pitch, just honest answers.
              </p>

              <a
                href="tel:2134442229"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-2xl font-semibold text-white transition-all mb-6 bg-white/10 hover:bg-white/15 border-2 border-white/20 hover:border-white/30"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (213) 444-2229
              </a>

              <p className="text-sm text-gray-500 mb-8">
                Usually respond within 2 hours during business hours
              </p>

              <div className="border-t border-white/[0.08] pt-8">
                <p className="text-gray-400 mb-4">Or prefer the formal route?</p>
                <a
                  href="#territory-check"
                  className="inline-flex items-center gap-2 text-[#f27d24] hover:text-[#d66d1f] transition-colors text-lg font-medium"
                >
                  Check If My Territory Is Available
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div
            ref={processAnim.ref}
            className={`transition-all duration-700 ease-out ${
              processAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-[#f27d24]/10 border border-[#f27d24]/20">
                <div className="w-2 h-2 rounded-full bg-[#f27d24]" />
                <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">The Process</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-semibold mb-6 leading-tight text-white font-heading">
                How We Make AI Trust You
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Traditional SEO is dead. AI engines decide who gets recommended.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f27d24] via-[#362478] to-[#f27d24] rounded-full" />

              <div className="space-y-12">
                {[
                  {
                    number: '1',
                    title: "Competitive Audit",
                    description: "We test 50+ customer queries across Google AI, ChatGPT, Claude & Perplexity to see who AI recommends—and identify exactly what you need to outrank them.",
                    timeline: "Week 1-2"
                  },
                  {
                    number: '2',
                    title: "Answer Authority Foundation",
                    description: "We create 6 research-backed articles in your authentic voice, structured specifically for AI citation with proper schema markup.",
                    timeline: "Weeks 3-6"
                  },
                  {
                    number: '3',
                    title: "Citation Monitoring",
                    description: "Track your monthly citation rate. Watch AI engines start recommending you to prospects asking buying questions.",
                    timeline: "Month 2+"
                  }
                ].map((step, i) => (
                  <div
                    key={i}
                    className={`relative pl-20 transition-all duration-500 ease-out ${
                      processAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: processAnim.isVisible ? `${i * 150}ms` : '0ms' }}
                  >
                    <div className="absolute left-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#f27d24] to-[#d66d1f] flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-[#f27d24]/20 ring-4 ring-[#f27d24]/10">
                      {step.number}
                    </div>

                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover-lift">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white font-heading">{step.title}</h3>
                        <span className="text-sm text-[#f27d24] font-medium bg-[#f27d24]/10 px-3 py-1 rounded-lg whitespace-nowrap ml-4">
                          {step.timeline}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AERO-7 Framework Section */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <div
            ref={aeroAnim.ref}
            className={`transition-all duration-700 ease-out ${
              aeroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-[#362478]/10 border border-[#362478]/20">
                <div className="w-2 h-2 rounded-full bg-[#362478]" />
                <span className="text-sm font-semibold tracking-widest uppercase text-[#a89bd9]">Proprietary Methodology</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white font-heading mb-4">
                The AERO-7 Framework
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our 7-pillar system measures exactly how ready your content is to be cited by AI engines.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
                {[
                  { num: "1", name: "Answer Quality", desc: "Direct, comprehensive responses" },
                  { num: "2", name: "Entity Optimization", desc: "Schema markup & structure" },
                  { num: "3", name: "Relevance & Freshness", desc: "Current, intent-matched content" },
                  { num: "4", name: "Optimization Structure", desc: "Scannable, AI-readable format" },
                  { num: "5", name: "Voice & Authenticity", desc: "Real expertise, not generic" },
                  { num: "6", name: "Authority Signals", desc: "Credentials & trust markers" },
                  { num: "7", name: "Authority Distribution", desc: "Third-party validation", highlight: true },
                ].map((pillar, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border transition-all duration-500 ease-out ${
                      aeroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    } ${pillar.highlight ? 'bg-[#f27d24]/10 border-[#f27d24]/30 col-span-2 sm:col-span-1' : 'bg-white/[0.02] border-white/[0.05]'}`}
                    style={{ transitionDelay: aeroAnim.isVisible ? `${i * 75}ms` : '0ms' }}
                  >
                    <div className={`text-2xl font-bold mb-2 ${pillar.highlight ? 'text-[#f27d24]' : 'text-[#362478]'}`}>
                      {pillar.num}
                    </div>
                    <div className="text-white font-medium text-sm mb-1">{pillar.name}</div>
                    <div className="text-gray-500 text-xs">{pillar.desc}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.08]">
                <div className="text-center sm:text-left">
                  <div className="text-gray-400 text-sm mb-1">Total Framework Score</div>
                  <div className="text-4xl font-bold text-white font-heading">0-70 <span className="text-lg font-normal text-gray-500">points</span></div>
                </div>

                <div className="flex gap-6 sm:gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-red-400">28</div>
                    <div className="text-xs text-gray-500">Typical Site</div>
                  </div>
                  <div className="text-center px-6 border-x border-white/[0.1]">
                    <div className="text-2xl font-semibold text-yellow-400">45</div>
                    <div className="text-xs text-gray-500">Competitor Avg</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-emerald-400">62+</div>
                    <div className="text-xs text-gray-500">Our Target</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-6">
              Every client starts with a full AERO-7 audit to identify exactly where to focus.
            </p>
          </div>
        </section>

        {/* Before/After Comparison Section */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <div
            ref={beforeAfterAnim.ref}
            className={`transition-all duration-700 ease-out ${
              beforeAfterAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white font-heading">
                Before vs. After Answer Engine Optimization
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className={`bg-white/[0.03] border border-red-500/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden hover-lift transition-all duration-500 ease-out ${
                  beforeAfterAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: beforeAfterAnim.isVisible ? '100ms' : '0ms' }}
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/20 rounded-lg text-red-400 text-xs font-semibold uppercase tracking-wider">
                  Before
                </div>
                <h3 className="text-xl font-semibold text-white mb-6 pr-16 font-heading">Without AEO</h3>
                <ul className="space-y-4">
                  {[
                    "AI recommends your competitors by name",
                    "Generic content that blends in",
                    "No schema markup or structured data",
                    "Invisible to ChatGPT, Claude, Perplexity",
                    "Competing on price, not authority",
                    "Leads go to whoever AI suggests"
                  ].map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 transition-all duration-500 ease-out ${
                        beforeAfterAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: beforeAfterAnim.isVisible ? `${200 + i * 75}ms` : '0ms' }}
                    >
                      <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`bg-white/[0.03] border border-emerald-500/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden hover-lift transition-all duration-500 ease-out ${
                  beforeAfterAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: beforeAfterAnim.isVisible ? '100ms' : '0ms' }}
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/20 rounded-lg text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  After
                </div>
                <h3 className="text-xl font-semibold text-white mb-6 pr-16 font-heading">With AEO</h3>
                <ul className="space-y-4">
                  {[
                    "AI cites YOUR business as the expert",
                    "Content structured for AI comprehension",
                    "Full schema markup across all pages",
                    "Cited on ChatGPT, Claude, Google AI, Perplexity",
                    "Positioned as the trusted authority",
                    "Leads come pre-sold on your expertise"
                  ].map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 transition-all duration-500 ease-out ${
                        beforeAfterAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: beforeAfterAnim.isVisible ? `${200 + i * 75}ms` : '0ms' }}
                    >
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <div
            ref={guaranteeAnim.ref}
            className={`bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-2 border-emerald-500/30 rounded-3xl p-12 sm:p-16 relative overflow-hidden hover-lift transition-all duration-700 ease-out ${
              guaranteeAnim.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className="text-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>

              <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-white font-heading">
                Zero-Risk Guarantee
              </h2>

              <div className="space-y-4 text-left max-w-xl mx-auto mb-8">
                {[
                  "Get cited by AI within 90 days — or I keep working for free until you do",
                  "Don't want to wait? Request a full refund instead. Your choice.",
                  "Territory protection included — I won't work with your competitors"
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 transition-all duration-500 ease-out ${
                      guaranteeAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: guaranteeAnim.isVisible ? `${200 + i * 100}ms` : '0ms' }}
                  >
                    <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-6 max-w-xl mx-auto">
                <p className="text-gray-300 leading-relaxed">
                  I've never had to give a refund. When you follow the process, AI engines cite you. Plus, your territory is protected—I won't work with competing businesses in your area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq-section" className="max-w-4xl mx-auto px-6 pb-24">
          <div
            ref={faqAnim.ref}
            className={`transition-all duration-700 ease-out ${
              faqAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white font-heading">Common Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What exactly is Answer Engine Optimization?",
                  a: "AEO is the practice of structuring your content so AI platforms—ChatGPT, Claude, Perplexity, Google AI Overviews—cite your business as the trusted answer. It's not about ranking on Google anymore. It's about being the business AI recommends."
                },
                {
                  q: "How is this different from regular SEO?",
                  a: "Traditional SEO gets you on page 1. AEO gets you cited as THE answer. When someone asks AI 'who's the best plumber in Phoenix,' we make sure AI says your name—not a list of 10 competitors."
                },
                {
                  q: "How long until I see results?",
                  a: "Most clients see their first AI citations within 60-90 days. That's why we offer a 90-day guarantee. If you're not getting cited, we keep working for free until you are."
                },
                {
                  q: "What if my competitor already signed up?",
                  a: "We only work with one business per category per area. If your territory is claimed, we'll tell you upfront. No pitch, no pressure."
                },
                {
                  q: "What's the investment?",
                  a: "The Answer Authority Foundation is $2,997, delivered over 6 weeks. This includes your competitive audit, 6 AI-optimized articles, schema implementation, and 90-day citation monitoring."
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  className={`bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden transition-all duration-500 ease-out ${
                    faqAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: faqAnim.isVisible ? `${i * 100}ms` : '0ms' }}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between"
                  >
                    <span className="text-white font-medium text-lg">{faq.q}</span>
                    <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${expandedFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="px-6 pb-5 text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Territory Check Section */}
        <section id="territory-check" className="max-w-3xl mx-auto px-6 pb-24">
          <div
            ref={territoryAnim.ref}
            className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 sm:p-12 transition-all duration-700 ease-out ${
              territoryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white font-heading">
                Is Your Territory Still Available?
              </h2>
              <p className="text-lg text-gray-300">
                Find out in 30 seconds if your competitors already claimed your spot.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Investment starts at $2,997 for the complete Answer Authority Foundation.
              </p>
            </div>

            <form className="space-y-5 max-w-md mx-auto" action="https://formspree.io/f/xqagkqwl" method="POST">
              <div
                className={`transition-all duration-500 ease-out ${
                  territoryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: territoryAnim.isVisible ? '100ms' : '0ms' }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-2">Industry *</label>
                <select name="industry" required className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white focus:outline-none focus:ring-2 focus:ring-[#f27d24]">
                  <option value="">Select your industry</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="hvac">HVAC</option>
                  <option value="electrical">Electrical</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="attorney">Attorney</option>
                  <option value="dentist">Dentist</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div
                className={`transition-all duration-500 ease-out ${
                  territoryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: territoryAnim.isVisible ? '200ms' : '0ms' }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-2">City / Area *</label>
                <input type="text" name="city" required placeholder="e.g., Phoenix, AZ" className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f27d24]" />
              </div>

              <div
                className={`transition-all duration-500 ease-out ${
                  territoryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: territoryAnim.isVisible ? '300ms' : '0ms' }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email *</label>
                <input type="email" name="email" required placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f27d24]" />
              </div>

              <input type="hidden" name="_subject" value="Territory Check Request" />

              <div
                className={`transition-all duration-500 ease-out ${
                  territoryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: territoryAnim.isVisible ? '400ms' : '0ms' }}
              >
                <button type="submit" className="w-full px-8 py-4 rounded-xl text-lg font-semibold text-white bg-[#f27d24] hover:bg-[#d66d1f] transition-all shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] hover:-translate-y-0.5 active:scale-[0.98]">
                  Check Availability
                </button>
              </div>

              <p className="text-center text-gray-500 text-sm">
                We'll respond within 24 hours with your territory status.
              </p>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.08] py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Serving local service businesses nationwide. Proven in America's most competitive market—LA County real estate.
            </p>
            <p className="text-gray-500 text-sm mb-4">
              © 2025 The Answer Engine. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Answer Engine Optimization • Territory Protection • 90-Day Citation Guarantee
            </p>
          </div>
        </footer>

        {/* Mobile Floating CTA */}
        <div className={`fixed bottom-6 left-4 right-4 z-50 sm:hidden transition-all duration-300 ${showMobileCta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
          <a
            href="#territory-check"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-semibold text-white bg-[#f27d24] shadow-lg shadow-[#f27d24]/40 active:scale-[0.98] transition-all duration-200"
          >
            Check Your Territory
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            <Image
              src={activeImage}
              alt="Enlarged screenshot"
              width={1200}
              height={900}
              className="max-w-full max-h-full rounded-lg object-contain"
              unoptimized
            />
          </div>
        )}
      </main>
    </>
  );
}