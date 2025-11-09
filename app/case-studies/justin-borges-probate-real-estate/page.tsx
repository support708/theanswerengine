export default function JustinBorgesCaseStudy() {
  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Case Study: How The Borges Real Estate Team Achieved 100% AI Citation Dominance",
            "author": {
              "@type": "Organization",
              "name": "The Answer Engine"
            },
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine"
            }
          })
        }}
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
              How The Borges Real Estate Team Achieved <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">100% AI Citation Dominance</span> in Probate Real Estate
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
                <span>Timeline: 60 days to first citations</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed font-light">
              A comprehensive look at how Answer Engine Optimization transformed a local probate real estate specialist into the authoritative answer cited by ChatGPT, Claude, and Google AI Overviews.
            </p>
          </header>

          {/* Executive Summary */}
          <section className="mb-16 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8">
            <h2 className="text-2xl font-light mb-6 text-white">Executive Summary</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-2">100%</div>
                <div className="text-sm text-gray-400">AI Citation Rate</div>
              </div>
              <div>
                <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500 mb-2">40%</div>
                <div className="text-sm text-gray-400">Increase in Qualified Leads</div>
              </div>
              <div>
                <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-2">60</div>
                <div className="text-sm text-gray-400">Days to First Citation</div>
              </div>
            </div>
          </section>

          {/* The Challenge */}
          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6 text-white">The Challenge</h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                The Los Angeles real estate market represents one of the most competitive digital landscapes in the country. With over 50,000 licensed agents in Los Angeles County alone, achieving differentiation through traditional SEO had become nearly impossible.
              </p>

              <div className="bg-white/[0.02] backdrop-blur-xl border-l-4 border-orange-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-normal text-white mb-3">Specific Challenges:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">•</span>
                    <span><strong className="text-white font-medium">Keyword saturation:</strong> "Probate real estate Los Angeles" had 400+ competing pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">•</span>
                    <span><strong className="text-white font-medium">Zero differentiation:</strong> Traditional SEO content looked identical across competitors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">•</span>
                    <span><strong className="text-white font-medium">Declining ROI:</strong> Cost per lead from Google Ads had increased 60% year-over-year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">•</span>
                    <span><strong className="text-white font-medium">AI disruption:</strong> Prospects increasingly asked ChatGPT and Claude for recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6 text-white">The Solution</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
              Rather than competing with 400+ pages for traditional rankings, we repositioned The Borges Team as the authoritative source that AI platforms cite.
            </p>

            <div className="space-y-6">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-normal text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">1</span>
                  Strategic Positioning
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  We identified unique positioning angles where The Borges Team had genuine expertise: California Proposition 19 probate implications and fire recovery property sales.
                </p>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-normal text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">2</span>
                  Content Architecture
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Comprehensive hub content on Proposition 19 implications, supported by spoke articles following answer-first formatting.
                </p>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-normal text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">3</span>
                  Technical Implementation
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Complete schema markup with explicit credential verification, structuring 12 years of probate experience in machine-readable formats.
                </p>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-normal text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">4</span>
                  Multi-Platform Verification
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Systematic testing across ChatGPT, Claude, Perplexity, and Google AI Overviews until achieving 100% citation rate.
                </p>
              </div>
            </div>
          </section>

          {/* The Results */}
          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6 text-white">The Results</h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-normal text-white mb-4">AI Citation Metrics</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>ChatGPT Citations:</span>
                    <span className="text-orange-400 font-medium">100%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Claude Citations:</span>
                    <span className="text-orange-400 font-medium">100%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Perplexity Citations:</span>
                    <span className="text-orange-400 font-medium">100%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Google AI Overviews:</span>
                    <span className="text-orange-400 font-medium">85%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-normal text-white mb-4">Business Impact</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>Lead Volume:</span>
                    <span className="text-purple-400 font-medium">+40%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cost Per Lead:</span>
                    <span className="text-purple-400 font-medium">-58%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lead Quality:</span>
                    <span className="text-purple-400 font-medium">+65%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Conversion Rate:</span>
                    <span className="text-purple-400 font-medium">+32%</span>
                  </li>
                </ul>
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
                "The shift from competing for rankings to being THE answer AI recommends changed everything. When prospects call now, they're not shopping they're ready to work with us because ChatGPT or Claude already told them we're the experts."
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
              Ready for Similar Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              See where you're losing to competitors in AI citations. Schedule your free 30-minute AEO strategy call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all"
              >
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