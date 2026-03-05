'use client';

import { useEffect, useRef, useState, RefObject } from 'react';
import Image from 'next/image';
import FocusTrap from 'focus-trap-react';
import HeroDotGrid from './components/HeroDotGrid';
import CitationProof from './components/CitationProof';

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

  // Mouse glow handlers for hover-lift cards
  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  };
  const handleCardMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty('--mouse-x', '50%');
    e.currentTarget.style.setProperty('--mouse-y', '50%');
  };

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
          box-shadow: 0 0 0 2px #0F1117, 0 0 0 4px rgba(255,255,255,0.4);
          border-radius: 8px;
          transition: box-shadow 200ms cubic-bezier(0.25, 1, 0.5, 1);
        }

        button:focus-visible, a:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #0F1117, 0 0 0 4px rgba(255,255,255,0.4), ;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        input:focus, select:focus, textarea:focus {
          border-color: rgba(255,255,255,0.3) !important;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.15), 0 0 20px -5px rgba(255,255,255,0.1);
          transition: border-color 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        label {
          transition: color 300ms ease;
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
          className={`fixed top-0 left-0 right-0 z-50 bg-[#0F1117]/80 backdrop-blur-xl border-b border-white/[0.06] transition-all duration-300 ${
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
              className="h-7 w-auto opacity-80"
            />
            <a
              href="#territory-check"
              className="inline-flex items-center gap-2 px-5 py-2 bg-white text-[#0F1117] rounded-lg font-semibold text-sm hover:bg-white/90 transition-all duration-200"
            >
              Check Territory
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </header>
        
        {/* ==================== HERO SECTION ==================== */}
        <section ref={heroRef} className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden">

          {/* Background — subtle ambient glow + dot grid */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
          </div>
          <HeroDotGrid className="absolute inset-0 pointer-events-none" />

          {/* Headline — 5 words, declarative */}
          <h1 className="relative z-10 text-center font-heading max-w-4xl mx-auto">
            <span
              className="block text-fluid-hero font-heading-hero text-white opacity-0 animate-fade-up"
              style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
            >
              Become the answer
            </span>
            <span
              className="block text-fluid-hero font-heading-hero text-white/40 mt-1 opacity-0 animate-fade-up"
              style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
            >
              AI recommends.
            </span>
          </h1>

          {/* Subheadline — one sentence, muted */}
          <p
            className="hero-description relative z-10 text-lg sm:text-xl text-white/40 max-w-lg mx-auto text-center mt-8 mb-12 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            We optimize local businesses to be cited by ChatGPT, Google AI, Claude, and Perplexity.
          </p>

          {/* 2 CTAs — filled + ghost, that's it */}
          <div
            className="relative z-10 flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <a
              href="#territory-check"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-[#0F1117] rounded-xl font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 active:scale-[0.98]"
            >
              Check Territory
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#case-study"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-[15px] text-white/60 hover:text-white border border-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
            >
              See Results
            </a>
          </div>

          {/* Metric proof — Vercel-style, not badges */}
          <div
            className="relative z-10 flex items-center gap-8 mt-16 opacity-0 animate-hero-fade-in"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            <div className="text-center">
              <div className="text-2xl font-semibold text-white font-heading">8,400+</div>
              <div className="text-xs text-white/30 mt-1">monthly clicks</div>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-2xl font-semibold text-white font-heading">100%</div>
              <div className="text-xs text-white/30 mt-1">AI citation rate</div>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-2xl font-semibold text-white font-heading">90-day</div>
              <div className="text-xs text-white/30 mt-1">guarantee</div>
            </div>
          </div>

        </section>
        {/* ==================== END HERO SECTION ==================== */}

        {/* Subtle section divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Case Study */}
        <section id="case-study" className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)]" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={caseStudyAnim.ref}
            className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-12 sm:p-16 hover-lift transition-all duration-700 ease-out ${
              caseStudyAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="text-center mb-12">
              <p className="text-sm text-white/30 uppercase tracking-widest mb-6">Case Study</p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight text-white font-heading tracking-tight">
                70,000 agents competing.<br />
                <span className="text-white/40">One gets cited.</span>
              </h2>

              <p className="text-lg text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
                Justin Borges went from invisible to being the only agent AI platforms cite for rent control, probate, and ADU questions across LA County.
              </p>

              <div className="grid sm:grid-cols-3 gap-8 mb-8">
                {[
                  { value: '1,000+', label: 'Queries ranked' },
                  { value: '70,000+', label: 'Competing agents' },
                  { value: '#1', label: 'AI citation position' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-500 ease-out ${
                      caseStudyAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: caseStudyAnim.isVisible ? `${i * 100 + 200}ms` : '0ms' }}
                  >
                    <div className="text-3xl sm:text-4xl font-semibold mb-1.5 text-white font-heading">{stat.value}</div>
                    <div className="text-white/30 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="relative h-px w-full max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* AI Citation Examples Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)]" />
          </div>
          <div
            ref={citationsAnim.ref}
            className={`relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
              citationsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <p className="text-sm text-white/30 uppercase tracking-widest mb-6">Real Results</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-heading mb-4 tracking-tight">
                What AI citations look like
              </h2>
              <p className="text-lg text-white/40 max-w-lg mx-auto">
                When someone asks AI for help, your business gets cited by name.
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
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
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

            {/* Interactive AI Citation Demo */}
            <div className="mt-16">
              <p className="text-center text-sm text-white/30 uppercase tracking-widest mb-8">Interactive Demo</p>
              <CitationProof isVisible={citationsAnim.isVisible} />
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="relative h-px w-full max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* Testimonials Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)]" />
          </div>
          <div
            ref={testimonialsAnim.ref}
            className={`relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
              testimonialsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/80 leading-[1.3] mb-10 font-heading tracking-tight">
                  &ldquo;He understands how AI actually decides who to recommend. That&apos;s a completely different skill set, and it&apos;s working.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center text-white/60 text-sm font-medium">JB</div>
                  <div>
                    <p className="text-sm font-medium text-white/80">Justin Borges</p>
                    <p className="text-sm text-white/30">Borges Real Estate Team, Pasadena CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24" />

        {/* How It Works */}
        <section id="how-it-works" className="max-w-5xl mx-auto px-6 pb-32">
          <div
            ref={processAnim.ref}
            className={`transition-all duration-700 ease-out ${
              processAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <p className="text-sm text-white/30 uppercase tracking-widest mb-6">Process</p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight text-white font-heading tracking-tight">
                Three steps to AI authority
              </h2>

              <p className="text-lg text-white/40 max-w-lg mx-auto">
                AI engines decide who gets recommended. We make sure it&apos;s you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  number: '01',
                  title: "Audit",
                  description: "We test 50+ queries across ChatGPT, Google AI, Claude & Perplexity to map exactly where you're losing.",
                  timeline: "Week 1-2"
                },
                {
                  number: '02',
                  title: "Build",
                  description: "6 research-backed articles in your voice, structured for AI citation with proper schema markup.",
                  timeline: "Week 3-6"
                },
                {
                  number: '03',
                  title: "Monitor",
                  description: "Track your citation rate. Watch AI engines start recommending you to prospects asking buying questions.",
                  timeline: "Month 2+"
                }
              ].map((step, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 ease-out ${
                    processAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: processAnim.isVisible ? `${i * 100}ms` : '0ms' }}
                >
                  <div className="text-sm text-white/20 font-mono mb-6">{step.number}</div>
                  <h3 className="text-xl font-semibold text-white font-heading mb-3">{step.title}</h3>
                  <p className="text-white/40 leading-relaxed text-[15px] mb-4">{step.description}</p>
                  <span className="text-xs text-white/20">{step.timeline}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="max-w-5xl mx-auto px-6 py-32">
          <div
            ref={beforeAfterAnim.ref}
            className={`transition-all duration-700 ease-out ${
              beforeAfterAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-heading tracking-tight">
                Without AEO vs. with it.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-white/[0.06]">
                <p className="text-xs text-white/20 uppercase tracking-widest mb-6">Without</p>
                <ul className="space-y-4">
                  {[
                    "AI recommends your competitors by name",
                    "Generic content that blends in",
                    "Invisible to ChatGPT, Claude, Perplexity",
                    "Leads go to whoever AI suggests"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-white/20 mt-2.5 flex-shrink-0" />
                      <span className="text-white/30">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl border border-white/[0.10] bg-white/[0.02]">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-6">With AEO</p>
                <ul className="space-y-4">
                  {[
                    "AI cites your business as the expert",
                    "Content structured for AI comprehension",
                    "Cited on ChatGPT, Claude, Google AI, Perplexity",
                    "Leads come pre-sold on your expertise"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-white/40 mt-2.5 flex-shrink-0" />
                      <span className="text-white/60">{item}</span>
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
            className={`border border-white/[0.06] rounded-2xl p-12 sm:p-16 transition-all duration-700 ease-out ${
              guaranteeAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center">
              <p className="text-sm text-white/30 uppercase tracking-widest mb-6">Guarantee</p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 text-white font-heading tracking-tight">
                90 days or your money back.
              </h2>

              <div className="space-y-3 text-left max-w-md mx-auto mb-10">
                {[
                  "AI citations within 90 days, or free work until you do",
                  "Full refund option. Your choice.",
                  "Exclusive territory. No competitors served."
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 transition-all duration-500 ease-out ${
                      guaranteeAnim.isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: guaranteeAnim.isVisible ? `${200 + i * 100}ms` : '0ms' }}
                  >
                    <div className="w-1 h-1 rounded-full bg-white/30 mt-2.5 flex-shrink-0" />
                    <span className="text-white/50">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-white/20 max-w-md mx-auto">
                Zero refunds issued to date. When you follow the process, AI cites you.
              </p>
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
            <div className="text-center mb-16">
              <p className="text-sm text-white/30 uppercase tracking-widest mb-6">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white font-heading tracking-tight">Common questions</h2>
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
                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-out"
                    style={{ gridTemplateRows: expandedFaq === i ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden min-h-0">
                      <p className="px-6 pb-5 text-gray-400 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-16" />

        {/* Territory Check Section */}
        <section id="territory-check" className="max-w-3xl mx-auto px-6 pb-24">
          <div
            ref={territoryAnim.ref}
            className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 sm:p-12 transition-all duration-700 ease-out ${
              territoryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white font-heading tracking-tight">
                Check your territory
              </h2>
              <p className="text-white/40">
                One business per category, per area. See if yours is open.
              </p>
            </div>

            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/[0.08] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Request Received!</h3>
                <p className="text-gray-400 mb-4">We'll check your territory and respond within 24 hours.</p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="text-white/50 hover:text-white/70 transition-colors text-sm font-medium"
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
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a24] border border-white/[0.1] text-white focus:outline-none focus:border-white/30 focus:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] appearance-none cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a24] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a24] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <input type="hidden" name="_subject" value="Territory Check Request" />

                {formStatus === 'error' && (
                  <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/50 text-sm text-center">
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
                    className="w-full px-8 py-4 rounded-xl text-base font-semibold text-[#0F1117] bg-white hover:bg-white/90 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
        <footer className="relative border-t border-white/[0.06]">
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
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8" />
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
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-semibold text-[#0F1117] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.4)] active:scale-[0.98] transition-all duration-200"
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