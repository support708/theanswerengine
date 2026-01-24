export default function BlogPost() {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Answer Engine",
            "url": "https://theanswerengine.ai",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png",
            "description": "The Answer Engine specializes in Answer Engine Optimization (AEO) for local service businesses. We help companies get cited by Google AI Overviews, ChatGPT, Claude, Perplexity, and other AI platforms.",
            "foundingDate": "2023",
            "areaServed": "United States",
            "knowsAbout": [
              "Answer Engine Optimization",
              "AI Citation Optimization",
              "Featured Snippet Optimization",
              "Schema Markup Implementation",
              "Google AI Overviews",
              "ChatGPT Optimization",
              "Local SEO",
              "E-E-A-T Optimization"
            ]
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "How to Get Google AI Overviews and ChatGPT to Recommend Your Business",
                "item": "https://theanswerengine.ai/blog/how-to-get-google-ai-chatgpt-recommend-business"
              }
            ]
          })
        }}
      />

      {/* Article Schema with Complete Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Get Google AI Overviews and ChatGPT to Recommend Your Business",
            "description": "Learn what Google AI Overviews and ChatGPT require to cite your business. Discover the four foundation requirements most businesses miss.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/google-ai-chatgpt-recommendations.png",
              "width": 1024,
              "height": 1024
            },
            "author": {
              "@type": "Organization",
              "name": "The Answer Engine Team",
              "url": "https://theanswerengine.ai",
              "description": "Specialized Answer Engine Optimization team with 2+ years experience, 500+ schema implementations, and 100+ featured snippet wins across multiple AI platforms."
            },
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "logo": {
                "@type": "ImageObject",
                "url": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png"
              }
            },
            "datePublished": "2025-11-09",
            "dateModified": "2025-11-09",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://theanswerengine.ai/blog/how-to-get-google-ai-chatgpt-recommend-business"
            },
            "keywords": "Google AI Overviews optimization, ChatGPT business recommendations, AI citation requirements, schema markup, Answer Engine Optimization, local business AI visibility",
            "articleSection": "Answer Engine Optimization",
            "wordCount": 5500,
            "inLanguage": "en-US"
          })
        }}
      />

      {/* Complete FAQ Schema - All 8 Questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are Google AI Overviews?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google AI Overviews are AI-generated answers that appear at the top of Google search results, above all traditional website listings. When users search for questions, Google's AI synthesizes information from multiple sources to provide a direct answer. Businesses cited in these overviews gain visibility even if searchers don't click through, while businesses not cited become effectively invisible for that query."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get Google AI Overviews to cite my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting cited in Google AI Overviews requires four foundation elements: technical schema infrastructure (properly implemented LocalBusiness, FAQ, Service, and Review schemas), question-answer content architecture (content that directly answers queries in structured formats), verifiable expertise signals (documented credentials, certifications, and experience AI can verify), and comprehensive topic coverage (depth of content that demonstrates authority in your service area)."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between Google AI Overviews and ChatGPT recommendations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google AI Overviews appear within Google search and focus heavily on schema markup and structured data. ChatGPT operates independently and emphasizes content quality and expertise demonstration. Both require similar foundational elements (entity consistency, structured data, quality content), but Google AI Overviews weight technical SEO signals more heavily while ChatGPT focuses more on natural language understanding and content depth."
                }
              },
              {
                "@type": "Question",
                "name": "Why do most businesses fail at AI optimization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most businesses fail at AI optimization because they attempt DIY implementations without proper expertise. Common failures include: schema markup errors that break functionality (one syntax error invalidates everything), inconsistent business information across platforms, content that answers questions business owners think customers ask rather than questions customers actually ask AI, and lack of ongoing monitoring to catch issues. Professional implementation typically achieves results that DIY attempts cannot match."
                }
              },
              {
                "@type": "Question",
                "name": "What schema markup do I need for AI citations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For local service businesses, essential schema types include: LocalBusiness schema (business name, address, phone, hours, service area), FAQ schema (questions and answers in structured format), Service schema (detailed information about each service offered), Review schema (aggregated customer reviews and ratings), and Article schema (for expertise content). These schemas must work together without conflicts and be technically error-free."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to get AI to recommend my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With proper Answer Engine Optimization, most businesses see initial results within 60-90 days. This includes first appearances in Google AI Overviews and beginning ChatGPT citations. Full optimization across multiple AI platforms typically takes 3-6 months. The timeline depends on your starting point (how much cleanup is needed), competitive landscape, and consistency of implementation."
                }
              },
              {
                "@type": "Question",
                "name": "Why do early movers have an advantage in AI optimization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Early movers in AI optimization have several advantages: they establish authority while competitors remain invisible, AI platforms tend to continue citing sources they've previously found reliable, building comprehensive content and schema infrastructure takes time that late adopters must compress, and competitive markets are harder to enter once established players are optimized. The businesses that act now will be entrenched when competitors finally realize they need to catch up."
                }
              },
              {
                "@type": "Question",
                "name": "Can I do Answer Engine Optimization myself or do I need professional help?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While understanding AEO concepts is valuable, DIY implementation typically fails for several reasons: schema markup requires technical precision where a single error breaks everything, identifying all 47+ platforms where your business appears is time-intensive, creating content that AI actually cites requires specific strategies, and ongoing monitoring and adjustment needs dedicated tools and expertise. Most businesses find professional implementation delivers significantly better results and faster ROI."
                }
              }
            ]
          })
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "How to Get Google AI Overviews and ChatGPT to Recommend Your Business | The Answer Engine",
            "description": "Learn what Google AI Overviews and ChatGPT require to cite your business. Discover the four foundation requirements most businesses miss.",
            "url": "https://theanswerengine.ai/blog/how-to-get-google-ai-chatgpt-recommend-business",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "AI Business Recommendations"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/google-ai-chatgpt-recommendations.png"
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

        <article className="max-w-4xl mx-auto px-6 py-20 sm:py-32 relative">
          {/* Logo */}
          <a href="/" className="inline-block mb-12 group">
            <img
              src="/TheAnswerEngine_Color_just_logo.png"
              alt="The Answer Engine Logo"
              className="h-16 opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-12 font-light">
            <a href="/" className="hover:text-orange-400 transition-colors">Home</a>
            <span className="mx-2 text-gray-700">&rsaquo;</span>
            <a href="/blog" className="hover:text-orange-400 transition-colors">Blog</a>
            <span className="mx-2 text-gray-700">&rsaquo;</span>
            <span className="text-gray-400">How to Get Google AI Overviews and ChatGPT to Recommend Your Business</span>
          </nav>

          {/* Article Header */}
          <header className="mb-16">
            {/* Simple pixel divider */}
            <div className="flex gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-orange-500" />
              <div className="w-1.5 h-1.5 bg-purple-500" />
              <div className="w-1.5 h-1.5 bg-orange-500" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight text-gray-100">
              How to Get <span className="font-normal text-white">Google AI Overviews and ChatGPT</span> to Recommend Your Business
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              Learn what Google AI Overviews and ChatGPT require to cite your business. Discover the four foundation requirements most businesses miss.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
              <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full" />
              <span>Published November 9, 2025</span>
              <span className="text-gray-700">&bull;</span>
              <span>By The Answer Engine Team</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Every day, potential customers ask Google and ChatGPT questions like "Who's the best plumber near me?" or "Which HVAC company should I use in Phoenix?" The AI provides specific recommendations-and if your business isn't one of them, you're invisible to that customer.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              This guide reveals exactly what both Google AI Overviews and ChatGPT require before they'll cite your business-and the four foundation requirements that most businesses miss entirely.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              <span className="font-normal text-white">The Four Foundation Requirements</span> for AI Recommendations
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              After analyzing thousands of AI citations across Google AI Overviews and ChatGPT, we've identified four foundational requirements that determine whether AI platforms will recommend a business:
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Requirement #1: Technical Schema Infrastructure
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms need machine-readable data to understand your business. Schema markup provides this infrastructure. Without it, AI has to guess at what your content means-and guessing means lower confidence, which means fewer citations.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Essential schemas for local businesses:</strong>
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <h4 className="text-lg font-medium text-white mb-2">LocalBusiness Schema</h4>
                <p className="text-gray-400 font-light">Your core business identity: name, address, phone, hours, service area, payment methods, and business type. This is the foundation everything else builds on.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <h4 className="text-lg font-medium text-white mb-2">FAQ Schema</h4>
                <p className="text-gray-400 font-light">Questions and answers in structured format. This is critical for AI citations because AI platforms are essentially answering questions-FAQ schema tells them exactly what questions you answer.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <h4 className="text-lg font-medium text-white mb-2">Service Schema</h4>
                <p className="text-gray-400 font-light">Detailed information about each service you offer: what it includes, pricing ranges, duration, geographic availability. AI uses this to match your services to user queries.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <h4 className="text-lg font-medium text-white mb-2">Review Schema</h4>
                <p className="text-gray-400 font-light">Aggregated review information including rating, review count, and selected reviews. AI uses reviews as a trust signal when deciding which businesses to recommend.</p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Critical note:</strong> These schemas must be technically perfect and work together without conflicts. A single syntax error can invalidate your entire schema implementation, and most businesses never know their schema is broken.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Requirement #2: Question-Answer Content Architecture
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms answer questions. To get cited, your content must directly answer the questions your target customers ask. This requires a specific content architecture:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Identify the actual questions customers ask AI (not what you think they should ask)",
                "Create dedicated content that directly answers each question",
                "Structure answers with the conclusion first, then supporting details",
                "Use clear headings that match how people phrase questions",
                "Include specific, factual information AI can verify",
                "Mark up Q&A content with FAQ schema for machine readability"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              The key insight: AI doesn't cite businesses that talk about themselves. It cites businesses that answer the user's question. Your content must be organized around customer questions, not company information.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Requirement #3: Verifiable Expertise Signals
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms are designed to provide accurate, helpful information. They won't cite sources they can't trust. Verifiable expertise signals give AI the confidence to recommend you:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Professional credentials that can be verified (licenses, certifications)",
                "Association memberships (BBB, industry groups, chambers of commerce)",
                "Years in business with consistent documentation across platforms",
                "Case studies with specific, measurable outcomes",
                "Named authors with documented expertise on content",
                "Consistent information across all online platforms (entity consistency)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <blockquote className="border-l-4 border-orange-500/50 pl-6 py-4 my-8 bg-white/[0.02] rounded-r-lg">
              <p className="text-gray-400 text-lg italic leading-relaxed font-light">
                "AI doesn't trust what you claim about yourself. It trusts what it can verify across multiple sources. If your credentials only appear on your website, AI has no way to validate them."
              </p>
            </blockquote>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Requirement #4: Comprehensive Topic Coverage
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms assess topical authority-how comprehensively you cover your subject matter. Surface-level content doesn't get cited. Comprehensive coverage includes:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Detailed service pages for each service you offer (not just a list)",
                "FAQ content covering common customer questions",
                "Process explanations showing how you deliver services",
                "Pricing information or pricing methodology",
                "Geographic content specific to your service areas",
                "Educational content helping customers make informed decisions"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Think of it this way: if a competitor has 50 pages of detailed content about HVAC services, and you have 5 generic pages, who looks like the authority to AI? Comprehensive coverage signals expertise.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Why <span className="font-normal text-white">DIY Usually Fails</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Most businesses that attempt to optimize for AI recommendations on their own fail. Here's why:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h4 className="text-lg font-medium text-red-400 mb-2">Schema Markup Errors</h4>
                <p className="text-gray-300 font-light">Schema requires precise technical implementation. A single missing comma, unclosed bracket, or incorrect property invalidates everything. Most DIY implementations have errors that go undetected for months.</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h4 className="text-lg font-medium text-red-400 mb-2">Incomplete Platform Coverage</h4>
                <p className="text-gray-300 font-light">AI cross-references 47+ platforms to verify business information. Most businesses don't even know all the places their information appears, let alone how to correct inconsistencies across all of them.</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h4 className="text-lg font-medium text-red-400 mb-2">Wrong Content Focus</h4>
                <p className="text-gray-300 font-light">Business owners create content about what they want to say, not what customers ask AI. Without proper research into actual AI queries, content misses the questions that drive citations.</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h4 className="text-lg font-medium text-red-400 mb-2">No Monitoring or Iteration</h4>
                <p className="text-gray-300 font-light">AI optimization isn't one-and-done. It requires ongoing monitoring to catch issues, track citation performance, and adapt to AI platform changes. DIY implementations rarely include this.</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Why <span className="font-normal text-white">Early Movers Win</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI optimization has a significant first-mover advantage that compounds over time:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "AI platforms tend to continue citing sources they've found reliable-incumbency matters",
                "Building comprehensive content and schema infrastructure takes time that late adopters must compress",
                "Early optimizers capture citations while competitors remain invisible",
                "Competitive markets become harder to enter once established players are optimized",
                "Customer trust and brand recognition build while competitors are still figuring this out"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              The businesses that act now will be entrenched when competitors finally realize they need to catch up. Every month you wait is a month of citations going to competitors.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              <span className="font-normal text-white">The Path Forward</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Getting Google AI Overviews and ChatGPT to recommend your business requires implementing all four foundation requirements:
            </p>
            <ol className="space-y-4 mb-8 text-gray-300 text-lg">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium">1</span>
                <span className="font-light leading-relaxed pt-1"><strong className="text-white font-medium">Technical schema infrastructure</strong> - Implement error-free, comprehensive schema markup</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium">2</span>
                <span className="font-light leading-relaxed pt-1"><strong className="text-white font-medium">Question-answer content architecture</strong> - Create content that directly answers customer questions</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium">3</span>
                <span className="font-light leading-relaxed pt-1"><strong className="text-white font-medium">Verifiable expertise signals</strong> - Document credentials AI can verify across sources</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium">4</span>
                <span className="font-light leading-relaxed pt-1"><strong className="text-white font-medium">Comprehensive topic coverage</strong> - Build topical authority through deep content</span>
              </li>
            </ol>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Most businesses need professional help to implement these requirements correctly. The technical precision required, combined with the need to coordinate across 47+ platforms, makes DIY implementation impractical for most.
            </p>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Find Out <span className="font-normal text-white">What's Missing From Your AI Foundation</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We'll analyze your current presence across Google AI Overviews and ChatGPT, identify which of the four foundation requirements you're missing, and show you exactly what needs to change to start getting AI recommendations.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
              >
                Get Your Free Foundation Assessment
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
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

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-8 text-gray-100">
              <span className="font-normal text-white">Frequently Asked Questions</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "What are Google AI Overviews?",
                  a: "Google AI Overviews are AI-generated answers that appear at the top of Google search results, above all traditional website listings. When users search questions, Google's AI synthesizes information from multiple sources to provide a direct answer. Businesses cited gain visibility; businesses not cited become invisible for that query."
                },
                {
                  q: "How do I get Google AI Overviews to cite my business?",
                  a: "Getting cited requires four foundations: technical schema infrastructure, question-answer content architecture, verifiable expertise signals, and comprehensive topic coverage. All four must work together for AI to confidently cite your business."
                },
                {
                  q: "What's the difference between Google AI Overviews and ChatGPT recommendations?",
                  a: "Google AI Overviews appear within Google search and focus heavily on schema markup. ChatGPT operates independently and emphasizes content quality and expertise. Both require similar foundational elements, but Google weights technical SEO signals more heavily while ChatGPT focuses on natural language and content depth."
                },
                {
                  q: "Why do most businesses fail at AI optimization?",
                  a: "DIY implementations fail due to: schema markup errors that break functionality, inconsistent business information across platforms, content that doesn't match actual customer queries, and lack of ongoing monitoring. Professional implementation achieves results DIY cannot."
                },
                {
                  q: "What schema markup do I need for AI citations?",
                  a: "Essential schemas include: LocalBusiness (business identity), FAQ (questions and answers), Service (service details), Review (customer reviews), and Article (expertise content). These must work together without conflicts and be technically error-free."
                },
                {
                  q: "How long does it take to get AI to recommend my business?",
                  a: "With proper optimization, most businesses see initial results within 60-90 days, including first Google AI Overview appearances and ChatGPT citations. Full optimization across multiple platforms typically takes 3-6 months."
                },
                {
                  q: "Why do early movers have an advantage in AI optimization?",
                  a: "AI tends to continue citing reliable sources (incumbency), building comprehensive infrastructure takes time, early optimizers capture citations while competitors are invisible, and competitive markets become harder to enter once established players are optimized."
                },
                {
                  q: "Can I do Answer Engine Optimization myself or do I need professional help?",
                  a: "DIY typically fails because schema requires technical precision, identifying all 47+ platforms is time-intensive, creating citable content requires specific strategies, and ongoing monitoring needs dedicated tools. Professional implementation delivers significantly better results and faster ROI."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.08] transition-colors">
                  <h3 className="text-xl font-light mb-3 text-white">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Author Section */}
            <div className="mt-16 pt-12 border-t border-white/[0.05]">
              <h3 className="text-2xl font-light mb-6 text-gray-100">
                <span className="font-normal text-white">About the Author</span>
              </h3>
              <p className="text-gray-300 mb-4 font-light">
                <strong className="text-white font-medium">Written by:</strong> The Answer Engine Team
              </p>
              <div className="text-gray-300 leading-relaxed space-y-4 mb-6 font-light">
                <p className="text-white font-medium">Credentials & Experience:</p>
                <ul className="space-y-2">
                  {[
                    "2+ years specialized experience in Answer Engine Optimization (2023-present)",
                    "10+ years combined traditional SEO experience",
                    "Schema.org markup specialists with 500+ implementations deployed",
                    "Featured snippet optimization: 100+ featured snippet wins for clients",
                    "Multi-platform AI testing across Google AI Overviews, ChatGPT, Claude, and Perplexity"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-2.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                The Answer Engine specializes in Answer Engine Optimization (AEO) for local service businesses. We help companies get cited by Google AI Overviews, ChatGPT, Claude, Perplexity, and other AI platforms-positioning them as the trusted expert in their market.
              </p>
              <p>
                <a href="/" className="inline-flex items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition-colors group">
                  Learn more at TheAnswerEngine.ai
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
