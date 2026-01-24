export default function Blog() {
  const blogPosts = [
    {
      slug: "seo-not-generating-leads",
      title: "Why Am I Paying for SEO But Not Getting Leads?",
      subtitle: "",
      description: "Your SEO rankings are up but leads are down. Nearly 60% of searches end without a click - AI answers first.",
      date: "Jan 24, 2026",
      category: "SEO & AI",
      readTime: "10 min",
      image: "/blog/seo-not-generating-leads.svg",
      featured: true
    },
    {
      slug: "website-stopped-getting-calls",
      title: "Why Your Website Stopped Getting Calls",
      subtitle: "(The Shift Nobody Told You About)",
      description: "Your website traffic looks fine but the phone stopped ringing. Nearly 60% of Google searches now end without a click.",
      date: "Jan 24, 2026",
      category: "AI Visibility",
      readTime: "8 min",
      image: "/blog/website-stopped-getting-calls.svg",
      featured: true
    },
    {
      slug: "do-google-reviews-affect-ai-recommendations",
      title: "Do Google Reviews Affect AI Recommendations?",
      subtitle: "(The Surprising Truth)",
      description: "ChatGPT can't read your Google reviews. Learn which reviews AI platforms actually see.",
      date: "Dec 17, 2025",
      category: "AI Visibility",
      readTime: "8 min",
      image: "/blog/do-google-reviews-affect-ai-recommendations.svg",
      featured: true
    },
    {
      slug: "bing-places-chatgpt-connection",
      title: "Why Bing Places Matters More Than You Think",
      subtitle: "(The ChatGPT Connection)",
      description: "ChatGPT pulls local business data from Bing, not Google. The hidden key to AI visibility.",
      date: "Dec 17, 2025",
      category: "AI Visibility",
      readTime: "10 min",
      image: "/blog/bing-places-chatgpt-connection.svg",
      featured: true
    },
    {
      slug: "chatgpt-cant-see-google-business-profile",
      title: "ChatGPT Can't See Your Google Business Profile",
      subtitle: "- Here's What It CAN See",
      description: "Your Google Business Profile is invisible to ChatGPT. Learn what sources it can access.",
      date: "Dec 17, 2025",
      category: "AI Visibility",
      readTime: "9 min",
      image: "/blog/chatgpt-cant-see-google-business-profile.svg"
    },
    {
      slug: "chatgpt-optimization-cost",
      title: "How Much Does ChatGPT Optimization Cost?",
      subtitle: "(Real Pricing for 2025)",
      description: "ChatGPT optimization typically costs $1,500-$5,000+ as a one-time project.",
      date: "Jan 15, 2025",
      category: "Pricing & Services",
      readTime: "19 min",
      image: "/blog/chatgpt-optimization-cost.svg"
    },
    {
      slug: "google-rankings-dont-matter",
      title: "Why Google Rankings Don't Matter Anymore",
      subtitle: "(And What Does)",
      description: "Even a #1 ranking can get 0 clicks when AI answers questions directly.",
      date: "Jan 8, 2025",
      category: "AEO Fundamentals",
      readTime: "12 min",
      image: "/blog/google-rankings-dont-matter.svg"
    },
    {
      slug: "how-to-get-in-the-answer-engine",
      title: "How to Get in the Answer Engine",
      subtitle: "",
      description: "Complete guide to getting your business cited by AI systems like ChatGPT and Claude.",
      date: "Dec 1, 2025",
      category: "AEO Fundamentals",
      readTime: "10 min",
      image: "/blog/how-to-get-in-the-answer-engine.svg"
    },
    {
      slug: "answer-engine-solutions",
      title: "Answer Engine Solutions for Local Businesses",
      subtitle: "(2025 Guide)",
      description: "How answer engine solutions help local businesses get cited by AI platforms.",
      date: "Dec 1, 2025",
      category: "AEO Fundamentals",
      readTime: "10 min",
      image: "/blog/answer-engine-solutions.svg"
    },
    {
      slug: "aeo-vs-seo",
      title: "AEO vs SEO: What's the Difference?",
      subtitle: "(2025 Comparison)",
      description: "AEO optimizes for AI citations. SEO optimizes for search rankings. Key differences explained.",
      date: "Dec 2025",
      category: "AEO Fundamentals",
      readTime: "10 min",
      image: "/blog/aeo-vs-seo.svg"
    },
    {
      slug: "check-if-ai-recommends-your-business",
      title: "How to Check If AI Recommends Your Business",
      subtitle: "(5-Minute Test)",
      description: "Test whether ChatGPT, Claude, and Google AI recommend you or your competitors.",
      date: "Dec 2025",
      category: "DIY Guide",
      readTime: "6 min",
      image: "/blog/check-if-ai-recommends-your-business.svg"
    },
    {
      slug: "how-chatgpt-chooses-businesses-to-recommend",
      title: "How ChatGPT Chooses Which Businesses to Recommend",
      subtitle: "",
      description: "Inside the algorithm: the 7 core signals AI platforms use to identify experts.",
      date: "Nov 21, 2025",
      category: "ChatGPT Citation Series",
      readTime: "38 min",
      image: "/blog/how-chatgpt-chooses-businesses-to-recommend.svg"
    },
    {
      slug: "why-chatgpt-recommends-competitors",
      title: "Why ChatGPT Recommends Your Competitors",
      subtitle: "(And Not You)",
      description: "Learn why ChatGPT recommends competitors and how to shift AI recommendations.",
      date: "Nov 17, 2025",
      category: "ChatGPT Citation Series",
      readTime: "12 min",
      image: "/blog/why-chatgpt-recommends-competitors.svg"
    },
    {
      slug: "why-chatgpt-isnt-recommending-your-business",
      title: "Why ChatGPT Isn't Recommending Your Business",
      subtitle: "(And the 3-Step Fix)",
      description: "One team went from zero to 177K weekly impressions in 90 days.",
      date: "Nov 15, 2025",
      category: "ChatGPT Citation Series",
      readTime: "14 min",
      image: "/blog/why-chatgpt-isnt-recommending-your-business.svg"
    },
    {
      slug: "complete-guide-answer-engine-optimization",
      title: "The Complete Guide to Answer Engine Optimization",
      subtitle: "",
      description: "How to get ChatGPT, Claude, and Google AI to cite your local business.",
      date: "Nov 11, 2025",
      category: "AEO Fundamentals",
      readTime: "12 min",
      image: "/blog/complete-guide-answer-engine-optimization.svg"
    },
    {
      slug: "what-is-answer-engine-optimization",
      title: "What is Answer Engine Optimization (AEO)?",
      subtitle: "",
      description: "Complete guide to AEO, how it differs from SEO, and why you need it now.",
      date: "Nov 9, 2025",
      category: "AEO Fundamentals",
      readTime: "11 min",
      image: "/blog/what-is-answer-engine-optimization.svg"
    },
    {
      slug: "how-to-get-google-ai-chatgpt-recommend-business",
      title: "How to Get Google AI and ChatGPT to Recommend You",
      subtitle: "",
      description: "The four foundation requirements most businesses miss.",
      date: "Nov 9, 2025",
      category: "AEO Fundamentals",
      readTime: "15 min",
      image: "/blog/how-to-get-google-ai-chatgpt-recommend-business.svg"
    },
    {
      slug: "how-ai-platforms-choose-businesses-to-cite",
      title: "How AI Platforms Choose Which Businesses to Cite",
      subtitle: "",
      description: "Weighted authority assessment and cross-validation explained.",
      date: "Nov 9, 2025",
      category: "AEO Fundamentals",
      readTime: "12 min",
      image: "/blog/how-ai-platforms-choose-businesses-to-cite.svg"
    },
    {
      slug: "why-businesses-fail-answer-engine-optimization",
      title: "Why Most Businesses Fail at AEO",
      subtitle: "",
      description: "The 8 critical mistakes causing AEO implementations to fail.",
      date: "Nov 9, 2025",
      category: "AEO Fundamentals",
      readTime: "13 min",
      image: "/blog/why-businesses-fail-answer-engine-optimization.svg"
    },
    {
      slug: "is-answer-engine-optimization-worth-it",
      title: "Is Answer Engine Optimization Worth It?",
      subtitle: "",
      description: "Which businesses see strongest ROI. When to invest, wait, or skip entirely.",
      date: "Nov 9, 2025",
      category: "Pricing & Services",
      readTime: "16 min",
      image: "/blog/is-answer-engine-optimization-worth-it.svg"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const allPosts = blogPosts;

  const categoryColors: Record<string, string> = {
    "AI Visibility": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "AEO Fundamentals": "bg-orange-500/20 text-orange-300 border-orange-500/30",
    "ChatGPT Citation Series": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "DIY Guide": "bg-green-500/20 text-green-300 border-green-500/30",
    "Pricing & Services": "bg-amber-500/20 text-amber-300 border-amber-500/30",
    "SEO & AI": "bg-rose-500/20 text-rose-300 border-rose-500/30"
  };

  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService"],
            "name": "The Answer Engine",
            "description": "Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like ChatGPT, Claude, and Google AI Overviews",
            "url": "https://theanswerengine.ai",
            "telephone": "(213) 444-2229",
            "email": "support@theanswerengine.ai",
            "foundingDate": "2025",
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "1",
              "bestRating": "5"
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

      <main className="min-h-screen bg-[#0A0A0F] relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-orange-950/10 pointer-events-none" />

        {/* Simple pixel accent - top corners */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500/40" />
        <div className="absolute top-0 left-2 w-2 h-2 bg-purple-500/40" />

        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-32 relative">
          {/* Logo */}
          <a href="/" className="inline-block mb-16 group">
            <img
              src="/TheAnswerEngine_Color_just_logo.png"
              alt="The Answer Engine Logo"
              className="h-16 opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>

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

          <p className="text-xl text-gray-400 mb-16 font-light leading-relaxed max-w-3xl">
            Learn how to dominate AI search and get your business cited by ChatGPT, Claude, and Perplexity.
          </p>

          {/* Featured Posts */}
          <section className="mb-20">
            <h2 className="text-sm font-medium text-orange-400 uppercase tracking-wider mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <a
                  key={index}
                  href={`/blog/${post.slug}`}
                  className="group bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl overflow-hidden hover:border-white/[0.1] transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-orange-900/50 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full border ${categoryColors[post.category] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2 group-hover:text-orange-400 transition-colors leading-tight">
                      {post.title} {post.subtitle && <span className="font-normal text-gray-300">{post.subtitle}</span>}
                    </h3>
                    <p className="text-sm text-gray-400 font-light line-clamp-2">{post.description}</p>
                    <div className="mt-4 text-xs text-gray-500">{post.date}</div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="flex justify-center gap-1 mb-16 opacity-20">
            {[...Array(80)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>

          {/* All Articles */}
          <section>
            <h2 className="text-sm font-medium text-orange-400 uppercase tracking-wider mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPosts.map((post, index) => (
                <a
                  key={index}
                  href={`/blog/${post.slug}`}
                  className="group bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl overflow-hidden hover:border-white/[0.08] hover:bg-white/[0.04] transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${categoryColors[post.category] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-medium text-white mb-2 group-hover:text-orange-400 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-light line-clamp-2">{post.description}</p>
                    <div className="mt-3 text-xs text-gray-500">{post.date}</div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="flex justify-center gap-1 my-16 opacity-20">
            {[...Array(80)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>

          {/* CTA Section */}
          <section className="text-center py-12 px-8 bg-white/[0.02] rounded-2xl border border-white/[0.05]">
            <h2 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
              Ready to <span className="font-normal text-white">Get Cited by AI?</span>
            </h2>
            <p className="text-gray-400 mb-8 font-light max-w-xl mx-auto">
              Find out if AI platforms are recommending your competitors instead of you.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
            >
              Get Your Free AEO Audit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
