'use client';

import { useEffect, useRef, useState } from 'react';

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

export default function AboutPage() {
  const { ref: valuesRef, isInView: valuesInView } = useInView();

  return (
    <>
      <style jsx global>{`
        @keyframes pixel-glow {
          0%, 100% { 
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
            opacity: 1;
          }
          50% { 
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
            opacity: 0.85;
          }
        }

        .luxury-pixel {
          position: relative;
          animation: pixel-glow 5s ease-in-out infinite;
        }

        .brand-orange {
          background: #f27d24;
          color: #f27d24;
        }

        .brand-purple {
          background: #362478;
          color: #362478;
        }

        @media (prefers-reduced-motion: reduce) {
          .luxury-pixel {
            animation: none;
          }
        }

        *:focus-visible {
          outline: 2px solid #f27d24;
          outline-offset: 2px;
          border-radius: 4px;
        }

        .hover-lift {
          transition: all 300ms ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.15);
        }
      `}</style>

      {/* Schema Markup - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://theanswerengine.ai/#organization",
            "name": "The Answer Engine",
            "alternateName": "Answer Engine Optimization",
            "url": "https://theanswerengine.ai",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_Color.png",
            "description": "Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like Google AI Overviews, ChatGPT, Claude, and Perplexity. Founded 2025 by Justin Borges.",
            "email": "support@theanswerengine.ai",
            "telephone": "+1-213-444-2229",
            "foundingDate": "2025",
            "founder": {
              "@type": "Person",
              "@id": "https://theanswerengine.ai/about#founder",
              "name": "Justin Borges",
              "jobTitle": "Founder & Lead Strategist",
              "description": "Real estate professional and Answer Engine Optimization pioneer who achieved 100% AI citation rates for probate realtor queries in Los Angeles County before founding The Answer Engine.",
              "url": "https://theanswerengine.ai/about"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pasadena",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "areaServed": "United States",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "12"
            }
          })
        }}
      />

      {/* Schema Markup - AboutPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://theanswerengine.ai/about",
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://theanswerengine.ai/#organization"
            },
            "description": "Learn about The Answer Engine, founded by Justin Borges to help local service businesses get cited by AI platforms through Answer Engine Optimization. Our mission: make AI cite you instead of your competitors."
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
            "@id": "https://theanswerengine.ai/about#breadcrumb",
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

      {/* Schema Markup - Person (Founder) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://theanswerengine.ai/about#founder",
            "name": "Justin Borges",
            "jobTitle": "Founder & Lead Strategist",
            "description": "Justin Borges founded The Answer Engine after achieving 100% AI citation rates for his own real estate team in Pasadena, California. He operates both The Answer Engine (AEO agency) and The Borges Real Estate Team (probate and luxury residential specialist), providing both proven methodology and firsthand understanding of local service business challenges. With 13+ years of real estate experience and $200M+ in sales, Justin developed Answer Engine Optimization by testing it on his own business in America's most competitive market before offering it to other local service providers.",
            "worksFor": {
              "@type": "Organization",
              "@id": "https://theanswerengine.ai/#organization"
            },
            "alumniOf": "Real Estate Industry",
            "award": "100% AI Citation Rate Achievement - Probate Real Estate Queries",
            "knowsAbout": [
              "Answer Engine Optimization",
              "AI Platform Citations",
              "Content Strategy",
              "Local Service Marketing",
              "Real Estate"
            ]
          })
        }}
      />

      {/* Schema Markup - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://theanswerengine.ai/about#service",
            "serviceType": "Answer Engine Optimization",
            "provider": {
              "@type": "Organization",
              "@id": "https://theanswerengine.ai/#organization"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Local Service Businesses"
            },
            "offers": {
              "@type": "Offer",
              "priceRange": "$$",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      {/* Schema Markup - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who founded The Answer Engine?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Justin Borges founded The Answer Engine after achieving 100% AI citation rates for his own real estate team in Pasadena, California. He operates both The Answer Engine (AEO agency) and The Borges Real Estate Team (probate and luxury residential specialist), providing both proven methodology and firsthand understanding of local service business challenges."
                }
              },
              {
                "@type": "Question",
                "name": "What is The Answer Engine's mission?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Answer Engine's mission is to help local service businesses get cited by AI platforms like ChatGPT, Claude, Perplexity, and Google AI Overviews instead of their competitors, transforming them from price-competing vendors into trusted authorities that AI systems recommend."
                }
              },
              {
                "@type": "Question",
                "name": "What makes The Answer Engine different from competitors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Answer Engine uses a proprietary verification protocol ensuring every claim is backed by authoritative sources. We focus on authentic voice capture through strategic interviews, comprehensive research before content creation, and a results-first approach where clients see proof before additional optimization commitments."
                }
              },
              {
                "@type": "Question",
                "name": "Where is The Answer Engine located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Answer Engine operates remotely serving clients nationwide, with founder Justin Borges based in Pasadena, California. Services are available to local service businesses across all U.S. markets."
                }
              }
            ]
          })
        }}
      />

      <main className="min-h-screen bg-[#0A0A0F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 via-transparent to-orange-950/5 pointer-events-none" />
        
        {/* Corner pixels */}
        <div className="absolute top-0 left-0 flex gap-2 p-4">
          <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" />
          <div className="luxury-pixel w-3 h-3 brand-purple rounded-sm" style={{animationDelay: '1s'}} />
        </div>

        <div className="absolute top-0 right-0 flex gap-2 p-4">
          <div className="luxury-pixel w-3 h-3 brand-purple rounded-sm" style={{animationDelay: '0.5s'}} />
          <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" style={{animationDelay: '1.5s'}} />
        </div>

        {/* Hero Section */}
        <section className="relative max-w-5xl mx-auto px-6 pt-16 sm:pt-24 pb-24 sm:pb-32">
          <div className="flex justify-center mb-12">
            <img 
              src="/TheAnswerEngine_Color.png" 
              alt="The Answer Engine - Answer Engine Optimization" 
              className="h-24 sm:h-32 w-auto"
            />
          </div>

          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-8 leading-tight text-white">
              About The Answer Engine
            </h1>
            
            <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f] font-medium mb-8">
              We make AI cite you instead of your competitors.
            </p>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Founded 2025 by Justin Borges after achieving 100% AI citation rates in America's most competitive market. Now helping local service businesses nationwide become the trusted answer AI platforms recommend.
            </p>
          </div>
        </section>

        {/* What is The Answer Engine */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 hover-lift">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-[#f27d24]/10 border border-[#f27d24]/20">
              <div className="w-2 h-2 rounded-full bg-[#f27d24]" />
              <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">Our Mission</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-white">
              What is The Answer Engine?
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                The Answer Engine is a specialized Answer Engine Optimization (AEO) agency that helps local service businesses get cited by AI platforms like ChatGPT, Claude, Perplexity, and Google AI Overviews instead of their competitors.
              </p>

              <p>
                We position small businesses as the definitive answers that AI systems recommend when users ask relevant questions in their market. Our clients transform from price-competing vendors into trusted authorities.
              </p>

              <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-8 my-8">
                <h3 className="text-2xl font-semibold text-white mb-4">The Core Problem We Solve</h3>
                <p className="text-gray-400 mb-4">
                  Your potential customers aren't scrolling through ten pages of Google results anymore. They're asking AI one question and trusting the first answer they get.
                </p>
                <p className="text-[#f27d24] font-semibold text-xl">
                  Whoever AI cites becomes the authority. Everyone else becomes invisible.
                </p>
              </div>

              <p>
                Traditional SEO helped you rank on page one. Answer Engine Optimization makes you <span className="text-white font-semibold">the</span> answer that AI recommends—the only business users hear about when they ask buying questions.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 hover-lift">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-[#362478]/10 border border-[#362478]/20">
              <div className="w-2 h-2 rounded-full bg-[#362478]" />
              <span className="text-sm font-semibold tracking-wider uppercase text-[#a89bd9]">Origin Story</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-white">
              Who Founded The Answer Engine?
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="text-2xl text-[#f27d24] font-medium mb-6">
                Justin Borges founded The Answer Engine after achieving 100% AI citation rates for his own real estate team in Pasadena, California.
              </p>

              <p>
                Before offering this to other businesses, Justin tested it on himself in the most competitive market in America: LA County real estate with 70,000+ competing agents.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 my-8">
                <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-semibold text-white mb-2">13+ Years</div>
                  <div className="text-gray-400">Real Estate Experience</div>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-semibold text-white mb-2">$200M+</div>
                  <div className="text-gray-400">In Sales Volume</div>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-semibold text-white mb-2">100%</div>
                  <div className="text-gray-400">AI Citation Rate</div>
                </div>
              </div>

              <p>
                When ChatGPT, Claude, and Perplexity started citing Justin specifically for probate sales queries—ahead of every competitor in Pasadena—he realized something fundamental had shifted.
              </p>

              <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-8 my-8">
                <p className="text-white font-semibold mb-4">
                  Being recommended by AI isn't luck. It's a repeatable methodology.
                </p>
                <p className="text-gray-400">
                  Justin operates both The Answer Engine (AEO agency) and The Borges Real Estate Team (probate and luxury residential specialist), providing both proven methodology and firsthand understanding of local service business challenges.
                </p>
              </div>

              <p>
                If it works in the most competitive market, it works for yours. That's why The Answer Engine exists—to help other local service businesses achieve the same authority positioning that generated 7+ qualified weekly leads for Justin's team.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section ref={valuesRef} className="max-w-5xl mx-auto px-6 pb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-[#f27d24]/10 border border-[#f27d24]/20">
              <div className="w-2 h-2 rounded-full bg-[#f27d24]" />
              <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">Core Principles</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-white">
              What Makes Us Different
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Five non-negotiable principles that guide every client engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Authenticity Over Enhancement",
                description: "Real expertise beats fabricated credentials. We capture your genuine knowledge through voice interviews, not generic AI-generated content that could describe anyone.",
                iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              },
              {
                title: "Research Before Content",
                description: "Comprehensive verification prevents credibility issues. Every claim is backed by authoritative sources. If we can't verify it, we flag it for removal—never fabricate.",
                iconPath: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              },
              {
                title: "Voice Capture Over AI Generation",
                description: "Your expertise in your words. Strategic interviews extract authentic communication style that AI platforms recognize as genuine, building trust with potential customers.",
                iconPath: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
              },
              {
                title: "Results Before Upselling",
                description: "See proof before committing to additional optimization. Post-results services available only after 90-day performance period demonstrates citation success.",
                iconPath: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              }
            ].map((value, i) => (
              <div 
                key={i}
                className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 hover-lift"
                style={{
                  opacity: valuesInView ? 1 : 0,
                  transform: valuesInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 500ms ease ${i * 100}ms`
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-br from-[#f27d24]/10 to-[#d66d1f]/10 border border-[#f27d24]/20">
                  <svg className="w-6 h-6 text-[#f27d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.iconPath} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Flag Don't Fabricate Protocol - Featured */}
          <div className="mt-6">
            <div 
              className="bg-gradient-to-br from-[#362478]/10 to-[#362478]/5 border-2 border-[#362478]/30 rounded-2xl p-12 hover-lift"
              style={{
                opacity: valuesInView ? 1 : 0,
                transform: valuesInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 500ms ease 400ms'
              }}
            >
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br from-[#362478]/20 to-[#362478]/10 border border-[#362478]/30">
                  <svg className="w-8 h-8 text-[#a89bd9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">The "Flag Don't Fabricate" Protocol</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Our competitive differentiator. Every claim must be verified through authoritative sources before publication. No exceptions.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  No invented data, no fabricated success stories, no questionable claims. This authenticity-first approach achieves higher AI citation rates than competitors using fabricated content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We're Different */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 hover-lift">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-white">
              How is The Answer Engine Different From Traditional SEO Agencies?
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-8">
              <p>
                Traditional SEO agencies optimize for rankings, traffic, and clicks. The Answer Engine optimizes for AI citations, authority positioning, and becoming the recommended answer.
              </p>
              <p className="text-white font-semibold">
                Different goal, different metrics, different methodology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-gray-500">❌</span>
                  Traditional SEO
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>Keyword-optimized content for rankings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>Backlink building campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>Templated content creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>Meta tags for search engines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>Ranking monitoring in Google</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>Traffic and click metrics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#f27d24]/10 to-[#d66d1f]/10 border-2 border-[#f27d24]/30 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-[#f27d24]">✓</span>
                  Answer Engine Optimization
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f27d24] mt-1">•</span>
                    <span>Answer-dense content with proof assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f27d24] mt-1">•</span>
                    <span>Source verification and authenticity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f27d24] mt-1">•</span>
                    <span>Voice capture for genuine expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f27d24] mt-1">•</span>
                    <span>Schema markup for AI platform parsing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f27d24] mt-1">•</span>
                    <span>Citation tracking across AI platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f27d24] mt-1">•</span>
                    <span>Authority positioning and lead quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 hover-lift">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-white">
              Who Does The Answer Engine Serve?
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We serve local service businesses earning $100,000-$2,000,000 annually with 1-10 employees. Our clients compete on expertise, not price.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {[
                'HVAC Contractors',
                'Real Estate Agents', 
                'Home Inspectors',
                'Plumbers',
                'Electricians',
                'Chiropractors',
                'Attorneys',
                'Dentists',
                'Roofing Contractors',
                'Landscapers',
                'Financial Advisors',
                'General Contractors'
              ].map((industry) => (
                <div key={industry} className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4 text-center text-gray-300">
                  {industry}
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  You're Ideal If:
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>You have genuine expertise worth showcasing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>You're committed to authentic positioning (no fabrication)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>You understand authority compounds over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>You want to compete on expertise, not just price</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-red-400">✗</span>
                  You're Not Ideal If:
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>You need immediate ROI this month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>You prefer volume over quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>You want us to exaggerate capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>You're looking for traditional SEO services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Common questions about The Answer Engine and our approach
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Where is The Answer Engine located?",
                answer: "The Answer Engine operates remotely serving clients nationwide, with founder Justin Borges based in Pasadena, California. Services are available to local service businesses across all U.S. markets. Answer Engine Optimization works across geographic markets—local specificity and authentic expertise matter more than physical location."
              },
              {
                question: "What makes The Answer Engine different from competitors?",
                answer: "We use a proprietary verification protocol ensuring every claim is backed by authoritative sources. Our approach combines authentic voice capture through strategic interviews, comprehensive research before content creation, and a results-first philosophy where clients see proof before additional optimization commitments. We focus on quality over volume with systematic standards that competitors don't maintain."
              },
              {
                question: "Can The Answer Engine work with businesses outside California?",
                answer: "Yes. Answer Engine Optimization methodology works across geographic markets. Local specificity and authentic expertise matter more than physical location. We serve local service businesses nationwide, helping them achieve AI citations in their specific markets regardless of where they're located."
              },
              {
                question: "How long does it take to see results?",
                answer: "AI citations typically begin appearing within 30-60 days as platforms index optimized content. Authority compounds over time, with most clients seeing consistent citation rates between months 3-6. We provide 90-day performance tracking to capture initial momentum and identify optimization opportunities for sustained growth."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 hover-lift">
                <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 pb-32">
          <div className="bg-gradient-to-br from-[#f27d24]/10 to-[#d66d1f]/10 border-2 border-[#f27d24]/30 rounded-3xl p-12 sm:p-16 text-center hover-lift">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-white">
              Ready to Become the Answer?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Get your free Lead Analysis and see exactly where AI is recommending your competitors—plus find out if your territory is still available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="/#audit-form"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white transition-all shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] hover:-translate-y-0.5 bg-[#f27d24] hover:bg-[#d66d1f]"
              >
                Get Free Lead Analysis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <a 
                href="tel:2134442229"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white transition-all bg-white/10 hover:bg-white/15 border-2 border-white/20 hover:border-white/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (213) 444-2229
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              90-day guarantee: Get cited or we work for free until you do. Or full refund.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.05] py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-500 text-sm mb-4">
              © 2025 The Answer Engine. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mb-4">
              Answer Engine Optimization • Territory Protection • 90-Day Citation Guarantee
            </p>
            <p className="text-gray-600 text-xs">
              Founded by Justin Borges • Pasadena, California • Serving Local Service Businesses Nationwide
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}