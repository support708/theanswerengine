import { PersonSchema, BreadcrumbSchema } from '../../components/schema';

export default function JustinBorgesCaseStudy() {
  return (
    <>
      {/* Enhanced Article Schema for Case Study */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Case Study: 1,000+ Search Queries Captured in LA's Most Competitive Market",
            "description": "How Answer Engine Optimization helped The Borges Real Estate Team achieve 330 page-1 rankings and 655 clicks in 90 days—competing against 70,000 agents without ad spend.",
            "image": "https://theanswerengine.ai/justin-borges-headshot.jpg",
            "author": {
              "@type": "Person",
              "name": "Justin Borges",
              "url": "https://theanswerengine.ai/about",
              "sameAs": "https://www.linkedin.com/in/justinborgesrealtor"
            },
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "logo": {
                "@type": "ImageObject",
                "url": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png"
              }
            },
            "datePublished": "2024-12-01",
            "dateModified": "2025-01-10",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://theanswerengine.ai/case-studies/justin-borges"
            },
            "about": {
              "@type": "Thing",
              "name": "Answer Engine Optimization",
              "description": "AEO strategy and implementation for local real estate"
            },
            "keywords": ["Answer Engine Optimization", "AEO", "local service business", "real estate", "case study", "organic traffic", "search rankings"]
          })
        }}
      />

      {/* Person Schema */}
      <PersonSchema />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://theanswerengine.ai" },
          { name: "Case Studies", url: "https://theanswerengine.ai/case-studies" },
          { name: "Justin Borges Case Study", url: "https://theanswerengine.ai/case-studies/justin-borges" }
        ]}
      />

      <main className="min-h-screen bg-[#0A0A0F]">
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
              1,000+ Search Queries Captured in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f]">America's Most Competitive Market</span>
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
                <span>Timeline: 90 days</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              How strategic Answer Engine Optimization helped one real estate team dominate 1,000+ search queries and generate 655 clicks in 3 months—without ad spend, competing in the most saturated market in America.
            </p>
          </header>

          {/* Results Summary - UPDATED WITH REAL DATA */}
          <section className="mb-16 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Verified Results</p>
              <h2 className="text-2xl font-semibold text-white">90-Day Performance Summary</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f] mb-3">1,000+</div>
                <div className="text-sm text-gray-400 font-medium">Search Queries Captured</div>
                <div className="text-xs text-gray-500 mt-1">Across rent control, probate, ADUs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#362478] to-[#2a1a5f] mb-3">330</div>
                <div className="text-sm text-gray-400 font-medium">Page 1 Rankings (Positions 1-3)</div>
                <div className="text-xs text-gray-500 mt-1">33% of all queries top 3</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f] mb-3">655+</div>
                <div className="text-sm text-gray-400 font-medium">Clicks From Answer Content</div>
                <div className="text-xs text-gray-500 mt-1">In just 3 months, zero ad spend</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/[0.05] text-center">
              <p className="text-gray-400 text-sm">
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

              <div className="bg-white/[0.02] backdrop-blur-xl border-l-4 border-[#f27d24] p-6 rounded-r-xl">
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

          {/* The Approach */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-white">The Approach</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We didn't try to beat Zillow at their game. We played a different game entirely.
            </p>

            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">The Strategic Shift</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Instead Of:</div>
                  <div className="text-gray-300 p-4 bg-white/[0.02] rounded-lg border border-red-500/20">
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
              <h3 className="text-lg font-semibold text-white mb-3">The Content Strategy</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#f27d24] font-bold">→</span>
                  <span><strong className="text-white">Rent Control:</strong> 16 articles about LA's complex regulations (276 clicks in 3 months)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f27d24] font-bold">→</span>
                  <span><strong className="text-white">Probate/Trust:</strong> 240 articles on estate transactions (182 clicks from top 10)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f27d24] font-bold">→</span>
                  <span><strong className="text-white">ADUs:</strong> 17 articles on accessory dwelling units (100 clicks from top 10)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f27d24] font-bold">→</span>
                  <span><strong className="text-white">Fire Recovery:</strong> 10 articles on Altadena/Palisades rebuilding (97 clicks)</span>
                </li>
              </ul>
            </div>

            <p className="text-xl font-medium text-[#f27d24] mt-8">
              Result: 90 days from invisibility to 330 page-1 rankings capturing 1,000+ queries.
            </p>
          </section>

          {/* The Results - UPDATED WITH REAL DATA */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-white">The Results</h2>
            
            <p className="text-gray-400 mb-8">
              All metrics verified via Google Search Console (November 2025)
            </p>

            <div className="space-y-6 mb-12">
              {/* Top Content Performance */}
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f27d24] to-[#d66d1f] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  Top Performing Content Themes
                </h3>

                <div className="space-y-4">
                  <div className="p-4 bg-white/[0.02] rounded-lg border border-white/[0.05]">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-white font-semibold mb-1">Rent Control Content (16 articles)</div>
                        <div className="text-sm text-gray-400">Complex LA regulations most agents avoid</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-semibold text-[#f27d24]">276</div>
                        <div className="text-xs text-gray-500">Clicks (3 months)</div>
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-[#f27d24]">4,091</div>
                        <div className="text-xs text-gray-500">Top article impressions</div>
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-[#f27d24]">4.68</div>
                        <div className="text-xs text-gray-500">Avg position</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/[0.02] rounded-lg border border-white/[0.05]">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-white font-semibold mb-1">Probate/Trust Content (240 articles)</div>
                        <div className="text-sm text-gray-400">Estate transactions and complex processes</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-semibold text-[#362478]">182</div>
                        <div className="text-xs text-gray-500">Clicks (top 10)</div>
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-[#362478]">2,943</div>
                        <div className="text-xs text-gray-500">Top article impressions</div>
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-[#362478]">3.93</div>
                        <div className="text-xs text-gray-500">Avg position</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/[0.02] rounded-lg border border-white/[0.05]">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-white font-semibold mb-1">ADU Content (17 articles)</div>
                        <div className="text-sm text-gray-400">Accessory dwelling units and rentals</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-semibold text-[#f27d24]">100</div>
                        <div className="text-xs text-gray-500">Clicks (top 10)</div>
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-[#f27d24]">5,083</div>
                        <div className="text-xs text-gray-500">Top article impressions</div>
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-[#f27d24]">4.11</div>
                        <div className="text-xs text-gray-500">Avg position</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/[0.02] rounded-lg border border-white/[0.05]">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-white font-semibold mb-1">Fire Recovery Content (10 articles)</div>
                        <div className="text-sm text-gray-400">Timely response to Altadena/Palisades fires</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-semibold text-[#362478]">97</div>
                        <div className="text-xs text-gray-500">Total clicks</div>
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-[#362478]">2,735</div>
                        <div className="text-xs text-gray-500">Top article impressions</div>
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-[#362478]">4.65</div>
                        <div className="text-xs text-gray-500">Avg position</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample High-Value Rankings */}
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#362478] to-[#2a1a5f] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                  Sample High-Value Rankings
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg">
                    <div className="text-gray-300">"is my property rent controlled la"</div>
                    <div className="text-[#f27d24] font-semibold">Position 4.68</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg">
                    <div className="text-gray-300">"transfer title from trust california"</div>
                    <div className="text-[#f27d24] font-semibold">Position 3.93</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg">
                    <div className="text-gray-300">"los angeles rent control single family"</div>
                    <div className="text-[#f27d24] font-semibold">Position 6.33</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg">
                    <div className="text-gray-300">"ellis act los angeles"</div>
                    <div className="text-[#f27d24] font-semibold">Position 5.57</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.05] text-center">
                  <div className="text-3xl font-semibold text-white mb-2">330</div>
                  <div className="text-sm text-gray-400">Total queries ranking positions 1-3</div>
                </div>
              </div>

              {/* Traffic Impact */}
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f27d24] to-[#d66d1f] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </span>
                  Traffic Impact
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="text-3xl font-semibold text-[#f27d24] mb-2">655+</div>
                    <div className="text-sm text-gray-400">Clicks from answer content</div>
                    <div className="text-xs text-gray-500 mt-1">3-month period</div>
                  </div>
                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="text-3xl font-semibold text-[#362478] mb-2">$0</div>
                    <div className="text-sm text-gray-400">Ad spend required</div>
                    <div className="text-xs text-gray-500 mt-1">100% organic traffic</div>
                  </div>
                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="text-3xl font-semibold text-[#f27d24] mb-2">529</div>
                    <div className="text-sm text-gray-400">Pages indexed</div>
                    <div className="text-xs text-gray-500 mt-1">Content moat built</div>
                  </div>
                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="text-3xl font-semibold text-[#362478] mb-2">2-6%</div>
                    <div className="text-sm text-gray-400">Average CTR</div>
                    <div className="text-xs text-gray-500 mt-1">vs 0.5% generic terms</div>
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
                  <div className="font-semibold text-white mb-2">What This Data Shows</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Justin isn't competing for generic "real estate agent" searches against Zillow. He owns specific expertise areas—rent control, probate, ADUs, fire recovery. That's where AI platforms look for authoritative sources. That's where qualified leads come from. And that's a game he can win.
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

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-8 my-8">
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
                      <div>• Own expertise (rent control, probate, ADUs)</div>
                      <div>• Result: 330 position 1-3 rankings</div>
                      <div>• Competing on authority, not budget</div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                When someone asks ChatGPT or Claude about LA rent control, AI platforms look for authoritative sources with genuine knowledge—not whoever spent the most on ads.
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
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#f27d24] mb-4">Every Local Service Business Has:</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] font-bold text-lg mt-1 flex-shrink-0">1.</span>
                    <div>
                      <span className="text-white font-semibold">Complex problems competitors avoid</span>
                      <div className="text-sm text-gray-400 mt-1">Justin: LA rent control regulations. You: Permits, certifications, technical processes...</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] font-bold text-lg mt-1 flex-shrink-0">2.</span>
                    <div>
                      <span className="text-white font-semibold">Specialized services only you offer</span>
                      <div className="text-sm text-gray-400 mt-1">Justin: Probate transactions. You: Niche certifications, unique methods, specialized equipment...</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f27d24] font-bold text-lg mt-1 flex-shrink-0">3.</span>
                    <div>
                      <span className="text-white font-semibold">Timely local knowledge nationals can't match</span>
                      <div className="text-sm text-gray-400 mt-1">Justin: Fire recovery opportunities. You: Regional regulations, community needs, local events...</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#362478]/10 to-[#2a1a5f]/10 border border-[#362478]/20 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  <span className="text-[#f27d24] font-semibold">The question:</span> What are YOUR three expertise areas where you have unfair advantage?
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  That's where Answer Engine Optimization positions you.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 sm:p-12">
              <svg className="w-12 h-12 text-[#f27d24]/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote className="text-xl sm:text-2xl text-gray-200 leading-relaxed mb-8">
                "15 years in LA real estate, but online I was invisible. Page 2-3 for everything.
                <br/><br/>
                We identified specific problems where I have genuine expertise—complex situations most competitors avoid. 90 days later: #1 rankings, 1,000+ queries captured, 655 clicks without ad spend.
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
          <section className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 sm:p-12 text-center">
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