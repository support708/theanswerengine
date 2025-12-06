export default function JustinBorgesCaseStudy() {
  return (
    <>
      {/* Complete 9-Schema Package for Case Study */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              // 1. Article Schema
              {
                "@type": "Article",
                "@id": "https://theanswerengine.ai/case-studies/justin-borges#article",
                "headline": "Case Study: 3,300+ Monthly Clicks in LA's Most Competitive Market",
                "description": "How Answer Engine Optimization helped The Borges Real Estate Team capture 3,300+ monthly clicks and dominate 1,000+ search queries—competing against 70,000 agents without ad spend.",
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
              // 2. WebPage Schema
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
              // 3. Organization Schema (The Answer Engine)
              {
                "@type": "Organization",
                "@id": "https://theanswerengine.ai/#organization",
                "name": "The Answer Engine",
                "url": "https://theanswerengine.ai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png"
                },
                "sameAs": [
                  "https://www.google.com/maps?cid=11yq2khd8q"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "1",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              // 4. LocalBusiness Schema
              {
                "@type": "LocalBusiness",
                "@id": "https://theanswerengine.ai/#localbusiness",
                "name": "The Answer Engine",
                "image": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png",
                "telephone": "+1-213-444-2229",
                "url": "https://theanswerengine.ai",
                "priceRange": "$$",
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
                "sameAs": [
                  "https://www.google.com/search?kgmid=/g/11yq2khd8q"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "1",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              // 5. Service Schema (AEO Service)
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
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "AEO Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Answer Authority Foundation Package"
                      }
                    }
                  ]
                }
              },
              // 6. Person Schema (Justin Borges - Case Study Subject)
              {
                "@type": "Person",
                "@id": "https://theanswerengine.ai/case-studies/justin-borges#justin-borges",
                "name": "Justin Borges",
                "jobTitle": "Real Estate Agent",
                "worksFor": {
                  "@type": "RealEstateAgent",
                  "name": "The Borges Real Estate Team"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/justinborgesrealtor",
                  "https://www.lametrohomefinder.com"
                ],
                "knowsAbout": ["Los Angeles Real Estate", "Rent Control", "Probate Sales", "ADU Investments"]
              },
              // 7. Person Schema (JB - Article Author)
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
              // 8. Review Schema (Justin's Google Review)
              {
                "@type": "Review",
                "@id": "https://theanswerengine.ai/case-studies/justin-borges#review",
                "author": {
                  "@id": "https://theanswerengine.ai/case-studies/justin-borges#justin-borges"
                },
                "datePublished": "2025-11-23",
                "reviewBody": "JB and The Answer Engine completely transformed how AI platforms recommend my real estate services. Before working with him, ChatGPT and Perplexity would cite my competitors when people asked about LA real estate agents. Now I'm getting cited 100% of the time for relevant queries in my market. The process was straightforward - JB conducted a detailed interview to capture my actual expertise, then created content optimized for how AI systems actually work. Within days of publishing, I started appearing in AI responses. The ROI has been incredible. I'm generating qualified leads at 50-70% lower cost than my previous paid advertising, and these leads come in already viewing me as the trusted expert rather than just another agent to compare. If you're a local service business tired of competing on price and want to be the authority AI platforms recommend, JB knows exactly how to make that happen. The results speak for themselves.",
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
              // 9. BreadcrumbList Schema
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

      <main className="min-h-screen bg-[#0F1117]">
        <article className="max-w-4xl mx-auto px-6 py-16">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-[#f27d24] transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/case-studies" className="hover:text-[#f27d24] transition-colors">Case Studies</a>
            <span className="mx-2">›</span>
            <span className="text-gray-400">Justin Borges</span>
          </nav>

          {/* Header */}
          <header className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-[#f27d24]/10 border border-[#f27d24]/20">
              <div className="w-2 h-2 bg-[#f27d24] rounded-full" />
              <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">Case Study</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-white leading-tight">
              3,300+ Monthly Clicks in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f]">America's Most Competitive Market</span>
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Industry: Real Estate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>LA County: 70,000 Competing Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Zero Ad Spend</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              How strategic Answer Engine Optimization helped one real estate team go from invisible to generating 3,300+ monthly clicks and dominating 1,000+ search queries—without spending a dollar on ads, in the most saturated market in America.
            </p>
          </header>

          {/* Results Summary - UPDATED WITH REAL DATA */}
          <section className="mb-16 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Verified Results</p>
              <h2 className="text-2xl font-semibold text-white">Current Performance</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f] mb-3">3,362</div>
                <div className="text-sm text-gray-400 font-medium">Monthly Clicks</div>
                <div className="text-xs text-gray-500 mt-1">From organic search alone</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#362478] to-[#2a1a5f] mb-3">1,000+</div>
                <div className="text-sm text-gray-400 font-medium">Search Queries Captured</div>
                <div className="text-xs text-gray-500 mt-1">High-intent local searches</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f] mb-3">648</div>
                <div className="text-sm text-gray-400 font-medium">Pages Indexed</div>
                <div className="text-xs text-gray-500 mt-1">Content moat established</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/[0.08]">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/[0.03] rounded-lg">
                  <div className="text-2xl font-semibold text-white mb-1">247</div>
                  <div className="text-sm text-gray-400">Queries in Top 3 Positions</div>
                </div>
                <div className="text-center p-4 bg-white/[0.03] rounded-lg">
                  <div className="text-2xl font-semibold text-white mb-1">694</div>
                  <div className="text-sm text-gray-400">Queries on Page 1</div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                Source: Google Search Console, November 2025
              </p>
            </div>
          </section>

          {/* The Challenge */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-white">The Challenge</h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                LA County real estate: <span className="text-white font-medium">70,000+ competing agents</span>. National brands with unlimited budgets. Zillow spending $2 billion annually on marketing.
              </p>

              <p>
                Justin Borges had 13+ years of experience, $200M+ in career sales, and genuine expertise in complex transactions most agents avoid. But online? Invisible.
              </p>

              <div className="bg-white/[0.03] backdrop-blur-xl border-l-4 border-[#f27d24] p-6 rounded-r-xl">
                <h3 className="text-xl font-semibold text-white mb-4">The Specific Problem</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] mt-1 flex-shrink-0">•</span>
                    <span><strong className="text-white font-medium">Brutal competition:</strong> Generic searches like "real estate agent LA" had hundreds of pages competing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] mt-1 flex-shrink-0">•</span>
                    <span><strong className="text-white font-medium">Budget disadvantage:</strong> Can't outspend Zillow or Realtor.com on ads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] mt-1 flex-shrink-0">•</span>
                    <span><strong className="text-white font-medium">AI invisibility:</strong> When prospects asked ChatGPT or Claude for recommendations, Justin wasn't mentioned</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] mt-1 flex-shrink-0">•</span>
                    <span><strong className="text-white font-medium">Undifferentiated content:</strong> Every agent's website looked identical</span>
                  </li>
                </ul>
              </div>

              <p className="text-xl font-semibold text-white">
                The question: How do you compete when you can't outspend the competition?
              </p>
            </div>
          </section>

          {/* The Approach - ABSTRACTED TO PROTECT METHODOLOGY */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-white">The Approach</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We didn't try to beat Zillow at their game. We played a different game entirely.
            </p>

            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">The Strategic Shift</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Instead Of:</div>
                  <div className="text-gray-300 p-4 bg-white/[0.03] rounded-lg border border-red-500/20">
                    Competing for "real estate agent near me" (Position 21, page 3, invisible)
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-[#f27d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
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
              <h3 className="text-lg font-semibold text-white mb-3">The Strategy</h3>
              <p className="text-gray-300 mb-4">
                We identified the complex problems Justin solves every day—the situations where his 13+ years of expertise actually matters. Then we built authoritative content that answers the exact questions prospects are asking.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#f27d24] font-bold">→</span>
                  <span><strong className="text-white">Complex local regulations</strong> that confuse homeowners and investors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f27d24] font-bold">→</span>
                  <span><strong className="text-white">Specialized transaction types</strong> most agents avoid or handle poorly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f27d24] font-bold">→</span>
                  <span><strong className="text-white">Timely local knowledge</strong> that national brands can't match</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f27d24] font-bold">→</span>
                  <span><strong className="text-white">Investment opportunities</strong> requiring deep market expertise</span>
                </li>
              </ul>
            </div>

            <p className="text-xl font-medium text-[#f27d24] mt-8">
              The result: From invisible to 3,300+ monthly clicks and 694 page-one rankings.
            </p>
          </section>

          {/* The Results - UPDATED WITH REAL DATA, ABSTRACTED */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-white">The Results</h2>
            
            <p className="text-gray-400 mb-8">
              All metrics verified via Google Search Console (November 2025)
            </p>

            <div className="space-y-6 mb-12">
              {/* Traffic Performance */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f27d24] to-[#d66d1f] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                  Traffic Performance
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-white/[0.03] rounded-lg text-center">
                    <div className="text-3xl font-semibold text-[#f27d24] mb-2">3,362</div>
                    <div className="text-sm text-gray-400">Monthly Clicks</div>
                    <div className="text-xs text-gray-500 mt-1">~146/day average</div>
                  </div>
                  <div className="p-4 bg-white/[0.03] rounded-lg text-center">
                    <div className="text-3xl font-semibold text-[#362478] mb-2">488K+</div>
                    <div className="text-sm text-gray-400">Monthly Impressions</div>
                    <div className="text-xs text-gray-500 mt-1">Brand visibility</div>
                  </div>
                  <div className="p-4 bg-white/[0.03] rounded-lg text-center">
                    <div className="text-3xl font-semibold text-[#f27d24] mb-2">$0</div>
                    <div className="text-sm text-gray-400">Ad Spend</div>
                    <div className="text-xs text-gray-500 mt-1">100% organic</div>
                  </div>
                  <div className="p-4 bg-white/[0.03] rounded-lg text-center">
                    <div className="text-3xl font-semibold text-[#362478] mb-2">648</div>
                    <div className="text-sm text-gray-400">Pages Indexed</div>
                    <div className="text-xs text-gray-500 mt-1">Content moat</div>
                  </div>
                </div>
              </div>

              {/* Ranking Performance */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#362478] to-[#2a1a5f] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </span>
                  Search Rankings
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#f27d24]/10 to-transparent rounded-lg border border-[#f27d24]/20">
                    <div>
                      <div className="text-white font-semibold">Top 3 Positions</div>
                      <div className="text-sm text-gray-400">Featured prominently in search results</div>
                    </div>
                    <div className="text-3xl font-semibold text-[#f27d24]">247</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#362478]/10 to-transparent rounded-lg border border-[#362478]/20">
                    <div>
                      <div className="text-white font-semibold">Page 1 Rankings</div>
                      <div className="text-sm text-gray-400">Visible when prospects search</div>
                    </div>
                    <div className="text-3xl font-semibold text-[#362478]">694</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/[0.03] rounded-lg">
                    <div>
                      <div className="text-white font-semibold">Total Queries Captured</div>
                      <div className="text-sm text-gray-400">Unique search terms ranking</div>
                    </div>
                    <div className="text-3xl font-semibold text-white">1,000+</div>
                  </div>
                </div>
              </div>

              {/* Device Breakdown */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f27d24] to-[#d66d1f] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Traffic by Device
                </h3>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/[0.03] rounded-lg text-center">
                    <div className="text-2xl font-semibold text-[#f27d24] mb-2">1,819</div>
                    <div className="text-sm text-gray-400">Mobile Clicks</div>
                    <div className="text-xs text-gray-500 mt-1">54% of traffic</div>
                  </div>
                  <div className="p-4 bg-white/[0.03] rounded-lg text-center">
                    <div className="text-2xl font-semibold text-[#362478] mb-2">1,495</div>
                    <div className="text-sm text-gray-400">Desktop Clicks</div>
                    <div className="text-xs text-gray-500 mt-1">44% of traffic</div>
                  </div>
                  <div className="p-4 bg-white/[0.03] rounded-lg text-center">
                    <div className="text-2xl font-semibold text-white mb-2">48</div>
                    <div className="text-sm text-gray-400">Tablet Clicks</div>
                    <div className="text-xs text-gray-500 mt-1">2% of traffic</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f27d24]/10 to-[#d66d1f]/10 border border-[#f27d24]/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#f27d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white mb-2">What These Numbers Mean</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Justin isn't competing for generic "real estate agent" searches against Zillow's $2B marketing budget. He owns specific expertise areas where he has genuine authority. That's where AI platforms look for sources to cite. That's where qualified leads come from. And that's a game he can win.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why This Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-white">Why This Approach Works</h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Traditional SEO says: "Target high-volume keywords and build backlinks."
              </p>

              <p>
                Answer Engine Optimization says: "Own specific expertise and position it where AI platforms cite sources."
              </p>

              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold text-white mb-6">The Strategic Difference</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-6 rounded bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div className="font-semibold text-white">Traditional SEO</div>
                    </div>
                    <div className="pl-9 space-y-2 text-gray-400">
                      <div>• Chase "real estate agent near me"</div>
                      <div>• Result: Position 21 (page 3, invisible)</div>
                      <div>• Competing against $2B marketing budgets</div>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent"></div>

                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="font-semibold text-white">Answer Engine Optimization</div>
                    </div>
                    <div className="pl-9 space-y-2 text-gray-300">
                      <div>• Own complex expertise areas competitors avoid</div>
                      <div>• Result: 694 page-one rankings, 3,300+ monthly clicks</div>
                      <div>• Competing on authority, not budget</div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                When someone asks ChatGPT or Claude a complex real estate question, AI platforms look for authoritative sources with genuine knowledge—not whoever spent the most on ads.
              </p>

              <p className="text-xl font-semibold text-white">
                That's the opportunity for every local service business.
              </p>
            </div>
          </section>

          {/* What This Means for Other Businesses */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-white">What This Means for Your Business</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Justin's in real estate with 70,000 competitors. Your market probably has 50-200. The opportunity is 10x bigger.
            </p>

            <div className="space-y-6">
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#f27d24] mb-4">Every Local Service Business Has:</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] font-bold text-lg mt-1 flex-shrink-0">1.</span>
                    <div>
                      <span className="text-white font-semibold">Complex problems competitors avoid</span>
                      <div className="text-sm text-gray-400 mt-1">Regulations, certifications, technical processes that require real expertise...</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] font-bold text-lg mt-1 flex-shrink-0">2.</span>
                    <div>
                      <span className="text-white font-semibold">Specialized services only you offer</span>
                      <div className="text-sm text-gray-400 mt-1">Niche certifications, unique methods, specialized equipment, specific client types...</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] font-bold text-lg mt-1 flex-shrink-0">3.</span>
                    <div>
                      <span className="text-white font-semibold">Timely local knowledge nationals can't match</span>
                      <div className="text-sm text-gray-400 mt-1">Regional regulations, community needs, local events, market conditions...</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#362478]/10 to-[#2a1a5f]/10 border border-[#362478]/20 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  <span className="text-[#f27d24] font-semibold">The question:</span> What are YOUR expertise areas where you have unfair advantage?
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  That's where Answer Engine Optimization positions you.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 sm:p-12">
              <svg className="w-12 h-12 text-[#f27d24]/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote className="text-xl sm:text-2xl text-gray-200 leading-relaxed mb-8">
                "15 years in LA real estate, but online I was invisible. Buried on page 2-3 for everything.
                <br/><br/>
                We identified specific problems where I have genuine expertise—complex situations most competitors avoid. Now I'm getting over 3,000 clicks a month without spending a dime on ads.
                <br/><br/>
                But the real change? Lead quality.
                <br/><br/>
                Before: Price shoppers comparing five options. After: People who trust my expertise and need MY help specifically.
                <br/><br/>
                That's a completely different sales conversation. Those deals close way faster."
              </blockquote>
              <div>
                <div className="font-semibold text-white text-lg">Justin Borges</div>
                <div className="text-sm text-gray-400">The Borges Real Estate Team | 13+ Years | $200M+ Sales</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-white">
              Ready to Position YOUR Expertise?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              If it works in the most competitive market in America (70,000 agents), it works for your industry with 10x less competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#audit-form"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white transition-all shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] hover:-translate-y-0.5 bg-[#f27d24] hover:bg-[#d66d1f]"
              >
                Get Your Free Lead Analysis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a 
                href="/case-studies"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white transition-all bg-white/10 hover:bg-white/15 border-2 border-white/20 hover:border-white/30"
              >
                View More Case Studies
              </a>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}