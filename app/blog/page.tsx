export default function Blog() {
  return (
    <>
      {/* Blog CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AEO Insights & Strategy Blog",
            "description": "Learn how to dominate AI search and get your business cited by ChatGPT, Claude, and Perplexity.",
            "url": "https://theanswerengine.ai/blog",
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine"
            }
          })
        }}
      />

      {/* BreadcrumbList Schema */}
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
                "name": "Blog",
                "item": "https://theanswerengine.ai/blog"
              }
            ]
          })
        }}
      />

      <main className="min-h-screen bg-[#0A0A0F] relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-orange-950/10 pointer-events-none" />
        
        {/* Simple pixel accent - top corners */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500/40" />
        <div className="absolute top-0 left-2 w-2 h-2 bg-purple-500/40" />

        <div className="max-w-4xl mx-auto px-6 py-20 sm:py-32 relative">
          {/* Simple pixel divider */}
          <div className="flex gap-2 mb-12">
            <div className="w-1.5 h-1.5 bg-orange-500" />
            <div className="w-1.5 h-1.5 bg-purple-500" />
            <div className="w-1.5 h-1.5 bg-orange-500" />
          </div>

          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight text-gray-100">
            <span className="font-normal text-white">AEO Insights</span> & Strategy
          </h1>
          
          <p className="text-xl text-gray-400 mb-16 font-light leading-relaxed">
            Learn how to dominate AI search and get your business cited by ChatGPT, Claude, and Perplexity.
          </p>
          
          {/* Blog Posts List */}
          <div className="space-y-6">
            {/* Blog Post 1 - How AI Chooses (NEWEST) */}
            <article className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 hover:border-white/[0.08] transition-all group">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                  New
                </span>
                <span className="text-sm text-gray-500 font-light">November 9, 2025</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light mb-4 leading-tight">
                <a 
                  href="/blog/how-ai-platforms-choose-businesses-to-cite" 
                  className="text-white group-hover:text-orange-400 transition-colors"
                >
                  How <span className="font-normal">AI Platforms Choose</span> Which Businesses to Cite
                </a>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed font-light">
                Discover how ChatGPT, Claude, and Perplexity actually decide which businesses to recommend using weighted authority assessment and cross-validation. Understand the three-layer evaluation process that determines whether your business gets cited or ignored.
              </p>
              <a 
                href="/blog/how-ai-platforms-choose-businesses-to-cite" 
                className="inline-flex items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition-colors group/link"
              >
                Read More
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </article>

            {/* Blog Post 2 - What is AEO */}
            <article className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 hover:border-white/[0.08] transition-all group">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-gray-500 font-light">November 9, 2025</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light mb-4 leading-tight">
                <a 
                  href="/blog/what-is-answer-engine-optimization" 
                  className="text-white group-hover:text-orange-400 transition-colors"
                >
                  What is <span className="font-normal">Answer Engine Optimization (AEO)?</span> The Complete Guide for 2025
                </a>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed font-light">
                Answer Engine Optimization is the practice of positioning your business as the authoritative source that AI platforms cite when answering questions about your services. Learn how it differs from traditional SEO and why local businesses must implement it now to dominate AI-powered search.
              </p>
              <a 
                href="/blog/what-is-answer-engine-optimization" 
                className="inline-flex items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition-colors group/link"
              >
                Read More
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </article>

            {/* Blog Post 3 - Google Rankings */}
            <article className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 hover:border-white/[0.08] transition-all group">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-gray-500 font-light">January 8, 2025</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light mb-4 leading-tight">
                <a 
                  href="/blog/google-rankings-dont-matter" 
                  className="text-white group-hover:text-orange-400 transition-colors"
                >
                  Why Google Rankings Don't Matter Anymore <span className="font-normal">(And What Does)</span>
                </a>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed font-light">
                The search landscape has fundamentally changed. While businesses obsess over page 1 rankings, AI platforms are becoming the new gatekeepers of customer attention. Learn why being THE answer matters more than being on page 1.
              </p>
              <a 
                href="/blog/google-rankings-dont-matter" 
                className="inline-flex items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition-colors group/link"
              >
                Read More
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </article>
          </div>

          {/* Divider */}
          <div className="flex justify-center gap-1 my-16 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className="w-px h-px bg-gray-600"
              />
            ))}
          </div>
          
          {/* Placeholder for future posts */}
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/[0.02] border border-white/[0.05] rounded-xl">
              <div className="w-2 h-2 bg-purple-500/50 rounded-full animate-pulse" />
              <span className="text-gray-500 text-sm font-light">More articles coming soon...</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}