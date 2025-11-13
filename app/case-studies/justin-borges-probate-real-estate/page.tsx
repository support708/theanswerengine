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
            "headline": "Case Study: How The Borges Real Estate Team Achieved Page 1 Authority in 90 Days",
            "description": "A comprehensive case study showing how Answer Engine Optimization transformed a local real estate specialist from page 2-3 invisibility to page 1 authority, generating 680 weekly clicks without ad spend.",
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

      {/* Person Schema - Justin Borges as case study subject */}
      <PersonSchema />

      {/* Breadcrumb Schema - Navigation structure */}
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
            <a href="/" className="hover:text-orange-400 transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/case-studies" className="hover:text-orange-400 transition-colors">Case Studies</a>
            <span className="mx-2">›</span>
            <span className="text-gray-400">Justin Borges</span>
          </nav>

          {/* Header */}
          <header className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wider uppercase text-orange-400">Case Study</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-light mb-6 text-white leading-tight">
              From Page 2 Invisibility to <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Position 1 Authority</span> in 90 Days
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Industry: Real Estate</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Location: Los Angeles, California</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Timeline: 90 days to results</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed font-light">
              How strategic Answer Engine Optimization helped a local real estate specialist generate 680 weekly clicks without ad spend—by positioning genuine expertise where AI platforms look for authoritative sources.
            </p>
          </header>

          {/* Executive Summary */}
          <section className="mb-16 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8">
            <h2 className="text-2xl font-light mb-6 text-white">Results Summary</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-2">680</div>
                <div className="text-sm text-gray-400">Weekly Clicks Without Ad Spend</div>
              </div>
              <div>
                <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500 mb-2">Position 1</div>
                <div className="text-sm text-gray-400">For High-Value Investor Query</div>
              </div>
              <div>
                <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-2">90 Days</div>
                <div className="text-sm text-gray-400">From Strategy to Results</div>
              </div>
            </div>
          </section>

          {/* The Challenge */}
          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6 text-white">The Challenge</h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                Justin Borges had what most local service businesses have: genuine expertise built over 15 years in Los Angeles real estate. He was the go-to agent for complex transactions that most competitors avoid or don't understand.
              </p>

              <p>
                But when potential clients searched online? They found Zillow, Realtor.com, and other national brands with unlimited marketing budgets. Not Justin.
              </p>

              <p>
                He was ranking on page 2-3 for valuable queries—completely invisible. His expertise existed, but his online authority didn't.
              </p>

              <div className="bg-white/[0.02] backdrop-blur-xl border-l-4 border-orange-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-normal text-white mb-3">The Specific Problem:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
                    <span><strong className="text-white font-medium">Keyword saturation:</strong> Competing against hundreds of pages and national brands with massive budgets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
                    <span><strong className="text-white font-medium">Zero differentiation:</strong> Generic real estate content looked identical across competitors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
                    <span><strong className="text-white font-medium">Wrong game:</strong> Trying to beat Zillow at their own volume-and-budget game was futile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
                    <span><strong className="text-white font-medium">AI disruption:</strong> Prospects increasingly asked ChatGPT and Claude for recommendations—where Justin was completely absent</span>
                  </li>
                </ul>
              </div>

              <p className="text-xl font-medium text-white mt-8">
                The question: How do you compete when you can't outspend the competition?
              </p>
            </div>
          </section>

          {/* The Approach */}
          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6 text-white">The Approach</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
              We didn't try to beat Zillow at their game. We played a different game entirely.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
              Instead of chasing impossible generic searches where Zillow dominates, we positioned Justin's actual expertise in specific areas where he has genuine authority—and where potential clients are desperately searching for trustworthy guidance.
            </p>

            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-8 mb-8">
              <h3 className="text-xl font-normal text-white mb-4">The Strategic Shift</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-2">INSTEAD OF:</div>
                  <div className="text-gray-300">Competing for "real estate agent near me" (position 21, page 3, invisible)</div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
                
                <div>
                  <div className="text-sm text-orange-400 mb-2">WE FOCUSED ON:</div>
                  <div className="text-white">Owning specific expertise areas where Justin has genuine authority and where clients need expert guidance</div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
              The approach: Strategic positioning that transforms expertise into authority content AI engines cite when users ask for guidance.
            </p>

            <p className="text-xl font-medium text-orange-400">
              Result: 90 days from page 2-3 invisibility to page 1 authority on 12+ high-value queries.
            </p>
          </section>

          {/* The Results */}
          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6 text-white">The Results</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
              All metrics verified via Google Search Console (November 7-13, 2025)
            </p>

            <div className="space-y-6 mb-12">
              {/* Search Rankings */}
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-normal text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                  Search Rankings Achieved
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-lg">
                    <div>
                      <div className="text-white font-medium mb-1">High-Value Investor Query</div>
                      <div className="text-sm text-gray-400">Complex ROI calculation for specific property type</div>
                    </div>
                    <div className="text-2xl font-light text-orange-400">Position 1.0</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-lg">
                    <div>
                      <div className="text-white font-medium mb-1">Educational Market Query</div>
                      <div className="text-sm text-gray-400">Explaining complex housing market dynamics</div>
                    </div>
                    <div className="text-2xl font-light text-purple-400">Position 2.32</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-lg">
                    <div>
                      <div className="text-white font-medium mb-1">Specialized Service Query</div>
                      <div className="text-sm text-gray-400">Complex estate transaction process</div>
                    </div>
                    <div className="text-2xl font-light text-orange-400">Position 3.48</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-lg">
                    <div>
                      <div className="text-white font-medium mb-1">Regulatory Guidance Query</div>
                      <div className="text-sm text-gray-400">Complex local regulations most agents avoid</div>
                    </div>
                    <div className="text-2xl font-light text-purple-400">Position 4.88</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/[0.05]">
                  <div className="text-center">
                    <div className="text-3xl font-light text-white mb-2">12+</div>
                    <div className="text-sm text-gray-400">Total queries ranking positions 1-5 (prime AI citation range)</div>
                  </div>
                </div>
              </div>

              {/* Traffic Performance */}
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-normal text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </span>
                  Traffic Generated (7-Day Period)
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="text-3xl font-light text-orange-400 mb-2">680</div>
                    <div className="text-sm text-gray-400">Clicks (Without ad spend)</div>
                  </div>
                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="text-3xl font-light text-purple-400 mb-2">117,834</div>
                    <div className="text-sm text-gray-400">Total impressions</div>
                  </div>
                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="text-3xl font-light text-orange-400 mb-2">$17,000</div>
                    <div className="text-sm text-gray-400">Equivalent weekly ad value</div>
                  </div>
                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="text-3xl font-light text-purple-400 mb-2">$0</div>
                    <div className="text-sm text-gray-400">Actual ad spend</div>
                  </div>
                </div>
              </div>

              {/* Content Performance */}
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-normal text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  Top Performing Content
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-white font-medium mb-1">Regulatory Guidance Article</div>
                        <div className="text-sm text-gray-400">Complex local rules most competitors avoid explaining</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-light text-orange-400">63</div>
                        <div className="text-xs text-gray-500">Clicks in 7 days</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-orange-400">15,752</div>
                        <div className="text-xs text-gray-500">Impressions</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-orange-400">4.88</div>
                        <div className="text-xs text-gray-500">Avg position</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-white font-medium mb-1">Timely Market Opportunity</div>
                        <div className="text-sm text-gray-400">Fast expert response to urgent local situation</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-light text-purple-400">34</div>
                        <div className="text-xs text-gray-500">Clicks (3 weeks old)</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-purple-400">1,329</div>
                        <div className="text-xs text-gray-500">Impressions</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-purple-400">4.76</div>
                        <div className="text-xs text-gray-500">Avg position</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-white font-medium mb-1">Specialized Service Guide</div>
                        <div className="text-sm text-gray-400">Complex process only 5% of competitors understand</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-light text-orange-400">21</div>
                        <div className="text-xs text-gray-500">Clicks in 7 days</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-orange-400">1,486</div>
                        <div className="text-xs text-gray-500">Impressions</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-orange-400">3.48</div>
                        <div className="text-xs text-gray-500">Avg position</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-white mb-2">What This Data Shows</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Justin isn't competing for generic "real estate agent" searches against Zillow's unlimited budget. He's owning specific expertise areas where he has genuine authority—regulatory guidance, specialized services, timely opportunities. That's where AI platforms look for authoritative sources when users ask for help. And that's where the qualified leads come from.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why This Approach Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6 text-white">Why This Approach Works</h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                Traditional SEO says: "Target high-volume keywords and build backlinks."
              </p>

              <p>
                Answer Engine Optimization says: "Own specific expertise and position it where AI platforms cite sources."
              </p>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-8 my-8">
                <h3 className="text-xl font-normal text-white mb-6">The Strategic Difference</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-6 rounded bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div className="font-medium text-white">Traditional Approach</div>
                    </div>
                    <div className="pl-9 space-y-2 text-gray-400">
                      <div>• Chase "real estate agent near me" (impossible to win)</div>
                      <div>• Result: Position 21 (page 3, invisible)</div>
                      <div>• Competing against Zillow's $2 billion marketing budget</div>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent"></div>

                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="font-medium text-white">AEO Approach</div>
                    </div>
                    <div className="pl-9 space-y-2 text-gray-300">
                      <div>• Own specific expertise areas (regulatory guidance, specialized services)</div>
                      <div>• Result: Position 1-5 on 12+ valuable queries</div>
                      <div>• Competing on authority and specificity, not marketing budget</div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                When someone asks ChatGPT or Claude a specific question in Justin's expertise area, AI platforms look for authoritative sources with genuine knowledge—not whoever spent the most on ads.
              </p>

              <p className="text-xl font-medium text-white">
                That's the opportunity for every local service business with genuine expertise.
              </p>
            </div>
          </section>

          {/* What This Means for Other Businesses */}
          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6 text-white">What This Means for Your Business</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
              Justin's in real estate. You're probably not. But the pattern is universal:
            </p>

            <div className="space-y-6">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-medium text-orange-400 mb-3">Every Local Service Business Has:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1 flex-shrink-0">1.</span>
                    <div>
                      <span className="text-white font-medium">The complex problem most competitors avoid</span>
                      <div className="text-sm text-gray-400 mt-1">For Justin: confusing local regulations. For you: licensing, permits, technical certifications, specialized methods...</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1 flex-shrink-0">2.</span>
                    <div>
                      <span className="text-white font-medium">The specialized service only you (and 2-3 others) offer</span>
                      <div className="text-sm text-gray-400 mt-1">For Justin: complex estate transactions. For you: niche certifications, unique methodologies, specialized equipment...</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1 flex-shrink-0">3.</span>
                    <div>
                      <span className="text-white font-medium">The local/timely knowledge national brands can't match</span>
                      <div className="text-sm text-gray-400 mt-1">For Justin: urgent local market situations. For you: regional regulations, community-specific needs, timely opportunities...</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-purple-400 font-medium">The question:</span> What are YOUR three expertise areas where you have unfair advantage over competitors and national brands?
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
              <svg className="w-12 h-12 text-orange-500/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote className="text-xl sm:text-2xl text-gray-200 leading-relaxed font-light mb-8">
                "I've been in LA real estate for 15 years, but online I was invisible. Page 2-3 for everything that mattered.
                <br/><br/>
                Here's what changed: Instead of competing for generic searches against companies with unlimited budgets, we identified the specific problems where I have genuine expertise—the complex situations most of my competitors avoid or don't understand.
                <br/><br/>
                90 days later, I'm ranking #1 and page 1 for those searches.
                <br/><br/>
                But the real transformation wasn't the rankings—it was the lead QUALITY.
                <br/><br/>
                Before: Price shoppers comparing five options, focused on cost. After: People who already trust my expertise, focused on getting their problem solved.
                <br/><br/>
                When someone finds my content, reads it, and calls—they're not asking 'how much do you charge?' They're saying 'I need YOUR help specifically with this complex situation.'
                <br/><br/>
                That's a completely different sales conversation. And those deals close way faster."
              </blockquote>
              <div>
                <div className="font-medium text-white">Justin Borges</div>
                <div className="text-sm text-gray-400">Team Lead, The Borges Real Estate Team</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-6 text-white">
              Ready to Position YOUR Expertise?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              See where you're losing to competitors in AI search results. Schedule your free 30-minute AEO strategy call and discover your three expertise areas where you have unfair advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                Schedule Free Strategy Call
              </a>
              <a 
                href="/case-studies"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-white/[0.05] text-white hover:bg-white/[0.08] transition-all border border-white/[0.1]"
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