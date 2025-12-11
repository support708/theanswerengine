'use client';

import { useEffect, useRef, useState, RefObject } from 'react';
import Image from 'next/image';
import FocusTrap from 'focus-trap-react';

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
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Scroll animation refs for each section
  const caseStudyAnim = useScrollAnimation();
  const testimonialsAnim = useScrollAnimation();
  const citationsAnim = useScrollAnimation();
  const processAnim = useScrollAnimation();
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

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xqagkqwl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

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

        @keyframes shimmer {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
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
              "reviewCount": "1",
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
              "https://instagram.com/theanswerengine"
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
                  "text": "Traditional SEO gets you on page 1. AEO gets you cited as THE answer. When someone asks AI 'who's the best plumber in Phoenix,' we make sure AI says your name, not a list of 10 competitors."
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
                "text": "We test 50+ customer queries across Google AI, ChatGPT, Claude & Perplexity to see who AI recommends and identify exactly what you need to outrank them.",
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
              "reviewCount": "1",
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
                "reviewBody": "JB doesn't just understand SEO. He understands how AI actually decides who to recommend. That's a completely different skill set, and it's working.",
                "datePublished": "2025-01-15",
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
            "description": "Answer Engine Optimization (AEO) is the practice of structuring content so AI platforms like ChatGPT, Claude, Perplexity, and Google AI Overviews cite your business as the trusted answer. Unlike traditional SEO which optimizes for rankings, AEO optimizes for being the definitive answer AI recommends.",
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
                "url": "https://theanswerengine.ai/#case-study",
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#f27d24] to-[#d66d1f] rounded-lg font-semibold text-white text-sm shadow-[0_0_20px_rgba(242,125,36,0.3)] hover:shadow-[0_0_30px_rgba(242,125,36,0.5)] transition-all duration-300 hover:scale-[1.02]"
            >
              Check My Territory
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </header>

        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 via-transparent to-orange-950/5 pointer-events-none" />
        
        {/* ==================== HERO SECTION ==================== */}
        <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0F1117] via-[#0F1117] to-[#0a0a0f]">

          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Radial glow - centered behind content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,125,36,0.30),transparent_70%)]" />
            </div>

            {/* Secondary purple glow - offset */}
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(54,36,120,0.20),transparent_70%)]" />
            </div>

            {/* Dot grid pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>

            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }} />
          </div>

          {/* Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 opacity-0 animate-hero-fade-in" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-white/60 tracking-wide">Answer Engine Optimization Agency</span>
          </div>

          {/* Headline */}
          <h1 className="relative z-10 text-center font-heading">
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight opacity-0 animate-fade-up"
              style={{ animationDelay: '100ms', animationFillMode: 'forwards', textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}
            >
              ChatGPT Recommends
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mt-1 opacity-0 animate-fade-up"
              style={{ animationDelay: '200ms', animationFillMode: 'forwards', textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}
            >
              Your Competitors<span className="text-[#f27d24]">.</span> Not You<span className="text-[#f27d24]">.</span>
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f] opacity-0 animate-fade-up"
              style={{ animationDelay: '300ms', animationFillMode: 'forwards', textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}
            >
              Let's Fix That.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="hero-description relative z-10 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto text-center mt-6 mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            We help local service businesses become the answer AI platforms recommend, turning invisible experts into the obvious choice.
          </p>

          {/* AI Platform Logos */}
          <div
            className="relative z-10 flex flex-col items-center mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center justify-center gap-8 sm:gap-10">
              {/* ChatGPT */}
              <div className="opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-110" title="ChatGPT">
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                </svg>
              </div>

              {/* Claude */}
              <div className="opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-110" title="Claude">
                <svg className="h-8 w-8" viewBox="0 0 1024 1024" fill="white" aria-hidden="true">
                  <path d="M472.5 1013.3l-12.7-9.8-6.4-15c-3.5-8.2-6.4-15.7-6.4-16.8 0-1 3.3-17.2 7.4-36 4.1-18.8 8.6-40.3 10.1-47.7 1.5-7.4 7.8-38.7 14.1-69.5 7.9-38.7 13.5-69 17.9-98 4.3-28.1 7.6-46.1 9.9-54.5 1.9-6.8 3.2-12.8 3-13.2-0.9-1.5-6.1-0.8-7.7 1-0.8 0.9-15.6 21.1-32.9 44.7-17.2 23.7-51.7 70.5-76.6 104l-45.2 61-36 38.5-36 38.5-8.8 3.6-8.7 3.6-13.5-6.8c-7.4-3.7-14.3-7.4-15.2-8.1-1.6-1.2-1.7-2.2-0.3-14.8l1.4-13.4 7.8-11.5c4.3-6.3 31.7-41.9 60.8-79.1 29.2-37.1 66.9-85.5 83.7-107.5 16.9-22 39-49.7 49.2-61.5 17.1-19.8 18.5-21.8 18.6-25.4 0-3.5-0.2-3.8-2.3-3.4-1.3 0.2-63 39.8-137.3 88l-134.9 87.5-23.6 2.9-23.6 3-10.2-9.6-10.3-9.5 1.3-15.7 1.2-15.7 6.1-5.9c3.6-3.5 22.3-17.1 45.1-32.8l39-26.8 101-56.6 101-56.6 1.8-5c1.7-4.4 1.7-5.2 0.4-7.9l-1.5-3.1-23.3-1.2c-12.9-0.7-48.1-1.9-78.4-2.7-64.2-1.8-130.9-4.4-201-8-42.8-2.2-51.9-3-63-5.2-7.2-1.4-13.6-3-14.3-3.6-0.7-0.5-6-7.3-11.8-14.9l-10.6-14 0.7-6.1c0.3-3.4 1-6.8 1.5-7.7 0.5-0.9 5.2-4.5 10.5-8l9.6-6.4 14.2 1.2c23.6 2 169.7 12 208.2 14.2 20.9 1.2 58 4.4 88.5 7.6 28.9 3 56.9 5.4 62.3 5.4 9.5 0 9.8-0.1 10.7-2.6 1.6-4.1 1.3-4.6-4.8-9.6-7.5-6.2-86.7-59.8-156.7-106.1-30.8-20.3-69.7-47-86.5-59.2-16.8-12.2-36.6-26.3-44.2-31.3-12.4-8.3-14.3-10-21.5-19.1l-7.9-10.1-3.3-21.1-3.2-21.2 2.9-3.1c2.7-2.9 22.8-25.3 24.1-26.8 1-1.2 39.4 2 43.9 3.6 2.4 0.9 12 7.5 21.5 14.8 9.5 7.3 37 28.6 61.2 47.3 24.3 18.7 67.5 51.2 96 72.2 28.6 21.1 55.2 41 59.1 44.2l7.1 6 3.6-2.5c2.3-1.5 3.7-3.3 3.7-4.5 0-1.2-2.2-5.8-4.9-10.3-2.6-4.4-16.9-29.9-31.6-56.6-31.2-56.4-81.5-143.4-102.1-176.6-7.9-12.7-14.8-24.4-15.5-26-3.1-8.2-10-38.4-10.6-46.4l-0.6-8.8 15.9-21.6 15.9-21.5 8.5-2.7 8.5-2.7 18.1 2.2c9.9 1.3 19.6 2.6 21.4 3 1.9 0.4 6.6 3.5 11.9 8.1l8.7 7.5 11.4 26c34.1 78 59.2 132.1 80.4 173.5 69.6 135.5 62.2 120.2 68.7 142 8.7 29.2 7.8 27.4 12.7 27.8l4.2 0.3 0-6.4c0-13.4 5.3-74.9 10-116.7 2.7-24 7-67.4 9.5-96.5 2.4-29.2 5.4-62.7 6.6-74.5l2.2-21.5 8-19.6 8-19.6 14.5-9.4c7.9-5.2 15.2-9.8 16.1-10.2 1.2-0.6 5.2 0.9 13.7 5l11.9 5.9 10.1 14.5 10.1 14.4-7.7 50c-4.7 30.3-12.9 76.8-20.8 118-7.2 37.4-16 83.3-19.5 102l-6.4 34 5 0.3c4.8 0.3 5.2 0.1 9.9-4.5 2.7-2.6 14.4-17.4 26.1-32.8 27.9-36.9 88.9-113.2 105.7-132 28.9-32.6 53.3-57.7 65.2-67.2l11.8-9.3 21.4 0 21.5 0 14.5 21.4c8 11.8 15.3 22.7 16.2 24.3 1.6 2.8 1.5 3.5-5.4 27.2-4 13.4-7.6 24.9-8 25.5-0.5 0.6-10.3 13-21.8 27.6-32.1 40.6-58.5 75-87.5 114-23.8 32.1-28.1 38.4-43.6 65l-17.1 29.4 1.8 2.6c1.6 2.2 2.5 2.6 5.7 2.2 2.1-0.2 31.5-6.2 65.3-13.4 60.5-12.8 112-22.5 174-32.9l31.5-5.2 15.5 7.2c8.5 4 16.4 7.8 17.6 8.6 1.5 1 2.6 3.5 3.8 9.2l1.7 7.9-7 16.9-6.9 17-39.3 9.8c-21.9 5.4-63.4 14.6-93.4 20.7-48.1 9.7-190.2 42.3-196.4 45-2.3 1-2.3 1.2-0.8 2.8 1.4 1.3 8.4 2.3 35.4 5 31.4 3 37.7 3.3 88.3 4.2 50.5 0.8 58.7 1.2 112.2 5.3l57.7 4.4 16.8 11.1 16.8 11.1 9 12.2c5 6.8 9.4 12.9 9.9 13.7 0.9 1.6-1 17.5-2.5 20.4-0.5 0.9-12.2 7.4-26.1 14.4l-25.2 12.7-17.6-4.1c-61.4-14.4-215.4-51.3-240.7-57.6-16.6-4.2-32.3-7.6-34.8-7.6-4.2 0-4.5 0.2-4.5 2.6 0 3.7 36.4 39.1 89.5 86.9 23.1 20.8 66.3 60.5 96.1 88.1l54 50.2 2.3 10.9c1.3 5.9 2.5 11.3 2.8 11.8 0.2 0.6-2.7 5.4-6.3 10.6-3.7 5.1-6.8 9.5-6.9 9.6 0 0.1-3.2-0.2-7-0.8l-7-1.1-47-35.2c-28.9-21.7-53.6-41-64-50.3-9.3-8.2-36.1-31-59.4-50.6-34.1-28.7-42.9-35.7-45.2-35.7-2.7 0-2.9 0.3-2.9 4.1 0 3.7 5.1 11.8 59.4 93.2l59.5 89.2 2.4 22.5 2.5 22.5-3.4 7.5-3.5 7.5-12.6 4.4-12.7 4.4-14.2-2.3-14.2-2.4-30-42c-39.3-55.1-82.7-121.7-113.2-173.7-13.4-22.8-24.4-41.5-24.5-41.7-0.2-0.2-1.8 0.4-3.7 1.3l-3.4 1.7-14.3 154.6c-8.2 88.5-14.8 155.3-15.4 156.2-0.7 0.8-3.7 4.5-6.9 8.1-5.7 6.6-5.8 6.6-20.5 12.3-8.1 3.1-15.1 5.6-15.4 5.6-0.4 0-6.4-4.4-13.4-9.7z"/>
                </svg>
              </div>

              {/* Perplexity */}
              <div className="opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-110" title="Perplexity">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2V22"/>
                  <path d="M4 6L12 12L20 6"/>
                  <path d="M4 18L12 12L20 18"/>
                  <path d="M4 6V18"/>
                  <path d="M20 6V18"/>
                  <path d="M1 12H4"/>
                  <path d="M20 12H23"/>
                </svg>
              </div>

              {/* Google AI */}
              <div className="opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-110" title="Google AI">
                <svg className="h-8 w-8" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
            </div>
            <p className="text-xs text-white/40 mt-4 tracking-wide">Platforms we optimize for</p>
          </div>

          {/* CTA Section */}
          <div
            className="relative z-10 flex flex-col items-center pb-24 opacity-0 animate-fade-up"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            {/* Primary CTA */}
            <a
              href="#territory-check"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f27d24] to-[#d66d1f] rounded-xl font-semibold text-white shadow-[0_0_30px_rgba(242,125,36,0.3)] hover:shadow-[0_0_50px_rgba(242,125,36,0.5)] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
            >
              Check My Territory
              <svg
                className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a href="#case-study" className="mt-4 text-sm text-white/50 hover:text-white/80 transition-colors duration-300">See how we did it for an LA County realtor</a>

            {/* Social proof line */}
            <p className="mt-6 text-sm text-white/40 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400/80" />
              Only accepting 3 new clients per month
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-hero-fade-in" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
            <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
            <div className="animate-bounce">
              <svg className="w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Subtle section divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f27d24]/20 to-transparent" />

        </section>
        {/* ==================== END HERO SECTION ==================== */}

        {/* Subtle section divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Case Study */}
        <section id="case-study" className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(54,36,120,0.08),transparent_70%)]" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

              <div className="grid sm:grid-cols-3 gap-8 mb-8">
                {[
                  { value: '1,000+', label: 'Search Queries Ranked', color: 'text-[#f27d24]' },
                  { value: '70,000+', label: 'Competing Agents', color: 'text-white' },
                  { value: '#1', label: 'AI Citations in Market', color: 'text-emerald-400' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-500 ease-out ${
                      caseStudyAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: caseStudyAnim.isVisible ? `${i * 100 + 200}ms` : '0ms' }}
                  >
                    <div className={`text-4xl sm:text-5xl font-bold mb-2 font-heading ${stat.color}`}>{stat.value}</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-gray-400 text-base">
                Full case study details shared during your territory consultation.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="relative h-px w-full max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* AI Citation Examples Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(242,125,36,0.08),transparent_70%)]" />
          </div>
          <div
            ref={citationsAnim.ref}
            className={`relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
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

            <div className="grid md:grid-cols-2 gap-8 mb-8">
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
                  platform: 'Google AI Overview',
                  icon: 'G',
                  bgColor: 'bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500',
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
                  platform: 'Google AI Overview',
                  icon: 'G',
                  bgColor: 'bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500',
                  query: 'Realtor specializing in inherited property Los Angeles',
                  image: '/citations/google-inherited.png',
                  alt: 'Google AI Overview citing Justin Borges as specialist for inherited property sales in Los Angeles'
                }
              ].map((citation, i) => (
                <div
                  key={i}
                  className={`group bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover-lift transition-all duration-500 ease-out ${
                    citationsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: citationsAnim.isVisible ? `${i * 100}ms` : '0ms' }}
                >
                  {/* Screenshot first - hero treatment */}
                  <button
                    onClick={() => setActiveImage(citation.image)}
                    className="w-full cursor-zoom-in transition-all duration-300 group-hover:opacity-95"
                  >
                    <div className="relative">
                      <Image
                        src={citation.image}
                        alt={citation.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                      {/* Subtle gradient overlay at bottom */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0F1117] to-transparent" />
                    </div>
                  </button>

                  {/* Info bar at bottom */}
                  <div className="p-5 border-t border-white/[0.06]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-7 h-7 rounded-lg ${citation.bgColor} flex items-center justify-center`}>
                        <span className="text-white font-bold text-xs">{citation.icon}</span>
                      </div>
                      <div className="text-white font-medium text-sm">{citation.platform}</div>
                      <button
                        onClick={() => setActiveImage(citation.image)}
                        className="ml-auto text-gray-500 hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm italic leading-relaxed">&ldquo;{citation.query}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm">
              Real results from a single client in LA County real estate. Your industry could be next.
            </p>
          </div>
        </section>

        {/* Section Divider */}
        <div className="relative h-px w-full max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Testimonials Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(242,125,36,0.08),transparent_70%)]" />
          </div>
          <div
            ref={testimonialsAnim.ref}
            className={`relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
              testimonialsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]">
                <div className="w-2 h-2 rounded-full bg-[#f27d24] animate-pulse" />
                <span className="text-sm text-white/60 tracking-wide">Client Results</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-center text-white tracking-tight mt-6">What Business Owners Say</h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 sm:p-12">
                <svg className="absolute top-8 left-8 w-16 h-16 text-[#f27d24]/10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#f27d24]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8 relative z-10">
                  &ldquo;JB doesn&apos;t just understand SEO. He understands how AI actually decides who to recommend. That&apos;s a completely different skill set, and it&apos;s working.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f27d24]/20 to-[#362478]/20 ring-2 ring-[#f27d24]/30 ring-offset-2 ring-offset-[#0F1117] flex items-center justify-center text-white font-semibold text-lg">JB</div>
                  <div>
                    <p className="font-semibold text-white font-heading">Justin Borges</p>
                    <p className="text-sm text-white/50">The Borges Real Estate Team, Pasadena CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

        {/* How It Works */}
        <section id="how-it-works" className="max-w-5xl mx-auto px-6 pb-32">
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
              <div className="absolute left-[30px] top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#f27d24] via-[#362478] to-[#f27d24] rounded-full shadow-[0_0_20px_rgba(242,125,36,0.3)]" />

              <div className="space-y-12">
                {[
                  {
                    number: '1',
                    title: "Competitive Audit",
                    description: "We test 50+ customer queries across Google AI, ChatGPT, Claude & Perplexity to see who AI recommends and identify exactly what you need to outrank them.",
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
                    <div className="absolute left-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f27d24] to-[#d66d1f] flex items-center justify-center text-white text-2xl font-bold shadow-[0_8px_32px_rgba(242,125,36,0.4)] ring-4 ring-[#f27d24]/20 font-heading">
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

        {/* Before/After Comparison Section */}
        <section className="max-w-5xl mx-auto px-6 py-32">
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
                      <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
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
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
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
        <section className="max-w-4xl mx-auto px-6 pb-32">
          <div
            ref={guaranteeAnim.ref}
            className={`bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-2 border-emerald-500/30 rounded-3xl p-12 sm:p-16 relative overflow-hidden hover-lift transition-all duration-700 ease-out ${
              guaranteeAnim.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className="text-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>

              <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-white font-heading">
                Zero-Risk Guarantee
              </h2>

              <div className="space-y-4 text-left max-w-xl mx-auto mb-8">
                {[
                  "Get cited by AI within 90 days, or I keep working for free until you do",
                  "Don't want to wait? Request a full refund instead. Your choice.",
                  "Territory protection included. I won't work with your competitors"
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 transition-all duration-500 ease-out ${
                      guaranteeAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: guaranteeAnim.isVisible ? `${200 + i * 100}ms` : '0ms' }}
                  >
                    <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-6 max-w-xl mx-auto">
                <p className="text-gray-300 leading-relaxed">
                  I've never had to give a refund. When you follow the process, AI engines cite you. Plus, your territory is protected. I won't work with competing businesses in your area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq-section" className="max-w-4xl mx-auto px-6 pb-32">
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
                  a: "AEO is the practice of structuring your content so AI platforms like ChatGPT, Claude, Perplexity, and Google AI Overviews cite your business as the trusted answer. It's not about ranking on Google anymore. It's about being the business AI recommends."
                },
                {
                  q: "How is this different from regular SEO?",
                  a: "Traditional SEO gets you on page 1. AEO gets you cited as THE answer. When someone asks AI 'who's the best plumber in Phoenix,' we make sure AI says your name, not a list of 10 competitors."
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
                    aria-expanded={expandedFaq === i}
                  >
                    <span className="text-white font-medium text-lg">{faq.q}</span>
                    <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
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

        {/* Still Have Questions? CTA */}
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white font-heading">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
              Text me your industry and city. I'll tell you straight if we're a fit.
            </p>

            <a
              href="tel:2134442229"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xl font-semibold text-white transition-all bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (213) 444-2229
            </a>
            <p className="text-gray-500 text-sm mt-3">
              Or text <span className="text-white font-medium">"TERRITORY"</span> to get a quick answer
            </p>
          </div>
        </section>

        {/* Separator */}
        <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

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
              <p className="text-[#f27d24] text-sm font-medium mt-3">
                Currently accepting 3 new clients per month
              </p>
            </div>

            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Request Received!</h3>
                <p className="text-gray-400 mb-4">We'll check your territory and respond within 24 hours.</p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="text-[#f27d24] hover:text-[#d66d1f] transition-colors text-sm font-medium"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form className="space-y-5 max-w-md mx-auto" onSubmit={handleFormSubmit}>
                <div
                  className={`transition-all duration-500 ease-out ${
                    territoryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: territoryAnim.isVisible ? '100ms' : '0ms' }}
                >
                  <label htmlFor="industry" className="block text-sm font-semibold text-gray-300 mb-2">Industry *</label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a24] border border-white/[0.1] text-white focus:outline-none focus:ring-2 focus:ring-[#f27d24] focus:border-transparent appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '20px',
                    }}
                  >
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
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-300 mb-2">City / Area *</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    required
                    disabled={formStatus === 'submitting'}
                    placeholder="e.g., Phoenix, AZ"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a24] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f27d24] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div
                  className={`transition-all duration-500 ease-out ${
                    territoryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: territoryAnim.isVisible ? '300ms' : '0ms' }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    disabled={formStatus === 'submitting'}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a24] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f27d24] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <input type="hidden" name="_subject" value="Territory Check Request" />

                {formStatus === 'error' && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <div
                  className={`transition-all duration-500 ease-out ${
                    territoryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: territoryAnim.isVisible ? '400ms' : '0ms' }}
                >
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full px-8 py-4 rounded-xl text-lg font-semibold text-white bg-[#f27d24] hover:bg-[#d66d1f] transition-all shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_4px_24px_rgba(242,125,36,0.3)] flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Checking...
                      </>
                    ) : (
                      'Check Availability'
                    )}
                  </button>
                </div>

                <p className="text-center text-gray-500 text-sm">
                  We'll respond within 24 hours with your territory status.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/[0.05] bg-gradient-to-b from-[#0F1117] to-[#0a0a0f]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[radial-gradient(ellipse_at_top,rgba(242,125,36,0.05),transparent_70%)] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
              <div className="max-w-sm">
                <Image
                  src="/TheAnswerEngine_white logo only.png"
                  alt="The Answer Engine"
                  width={120}
                  height={40}
                  className="h-10 w-auto mb-4 opacity-60"
                />
                <p className="text-white/50 text-sm">We help local service businesses become the answer AI platforms recommend.</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4 font-heading">Company</h4>
                  <ul className="space-y-3">
                    <li><a href="/about" className="text-sm text-white/50 hover:text-white transition-colors">About</a></li>
                    <li><a href="/case-studies" className="text-sm text-white/50 hover:text-white transition-colors">Case Studies</a></li>
                    <li><a href="/blog" className="text-sm text-white/50 hover:text-white transition-colors">Blog</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4 font-heading">Services</h4>
                  <ul className="space-y-3">
                    <li><a href="#territory-check" className="text-sm text-white/50 hover:text-white transition-colors">Territory Check</a></li>
                    <li><a href="/contact" className="text-sm text-white/50 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4 font-heading">Connect</h4>
                  <ul className="space-y-3">
                    <li><a href="https://www.linkedin.com/company/theanswerengine" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">LinkedIn</a></li>
                    <li><a href="https://instagram.com/theanswerengine" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Instagram</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/40">&copy; 2025 The Answer Engine. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="/privacy" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-sm text-white/40 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Mobile Floating CTA */}
        <div className={`fixed bottom-6 left-4 right-4 z-50 sm:hidden transition-all duration-300 ${showMobileCta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
          <a
            href="#territory-check"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#f27d24] to-[#d66d1f] shadow-[0_0_30px_rgba(242,125,36,0.4)] active:scale-[0.98] transition-all duration-200"
          >
            Check Your Territory
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Lightbox Modal with Focus Trap */}
        {activeImage && (
          <FocusTrap>
            <div
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
              onClick={() => setActiveImage(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Enlarged image view"
            >
              <div className="relative max-w-5xl w-full">
                <Image
                  src={activeImage}
                  alt="Enlarged screenshot"
                  width={1400}
                  height={1000}
                  className="w-full h-auto rounded-xl shadow-2xl"
                  unoptimized
                />
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                  autoFocus
                >
                  Press ESC or click to close
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </FocusTrap>
        )}
      </main>
    </>
  );
}