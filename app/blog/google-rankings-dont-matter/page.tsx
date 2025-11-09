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
                "name": "Why Google Rankings Don't Matter Anymore",
                "item": "https://theanswerengine.ai/blog/google-rankings-dont-matter"
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
            "headline": "The Real Reason Your Google Rankings Don't Matter Anymore",
            "description": "Google AI Overviews, ChatGPT, Claude, and Perplexity are answering questions directly — which means even a #1 ranking can get 0 clicks. Here's how to get cited instead of ignored.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/google-rankings-featured.png",
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
            "datePublished": "2025-01-08",
            "dateModified": "2025-01-08",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://theanswerengine.ai/blog/google-rankings-dont-matter"
            },
            "keywords": "Answer Engine Optimization, AEO, Google AI Overviews, ChatGPT optimization, featured snippets, AI citations, local SEO, schema markup",
            "articleSection": "Search Engine Optimization",
            "wordCount": 4500,
            "inLanguage": "en-US"
          })
        }}
      />

      {/* Complete FAQ Schema - All 7 Questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why don't my Google rankings matter as much anymore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google AI Overviews now answer most queries directly above traditional search results, meaning users get their information without clicking through to websites. Even with a #1 ranking, you may lose significant traffic if Google's AI provides the answer first. Add to this the millions of searches now happening on ChatGPT and other AI platforms, and traditional rankings represent a shrinking portion of how customers find businesses."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between SEO and Answer Engine Optimization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Traditional SEO optimized to rank in search results (top 10 positions). Answer Engine Optimization (AEO) optimizes to be cited by AI as the authoritative answer—whether that's Google AI Overviews, ChatGPT, Claude, or Perplexity. SEO focused on keywords and backlinks. AEO focuses on structured data, direct answers, and demonstrable expertise that AI can verify and trust."
                }
              },
              {
                "@type": "Question",
                "name": "How do I know if AI platforms are citing my competitors instead of me?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Test it yourself. Ask ChatGPT, Claude, or Perplexity questions your customers would ask about your services in your area. For example: 'Who's the best real estate agent for flood recovery properties in Houston?' If your competitors are mentioned and you're not, you have an AEO visibility problem. Google AI Overviews can be tested by searching your target queries and seeing which businesses Google's AI cites in its answers."
                }
              },
              {
                "@type": "Question",
                "name": "Do I still need traditional SEO if I do Answer Engine Optimization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but the priorities shift. Basic SEO hygiene (site speed, mobile optimization, secure hosting) remains important. However, focus should move from 'ranking higher' to 'providing better answers.' The content that wins AI citations often ranks well anyway, because both systems value expertise and user-focused content. Think of SEO as table stakes and AEO as competitive advantage."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to start getting AI citations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With proper Answer Engine Optimization, most businesses see their first featured snippet wins (which feed AI citations) within 60-90 days. Full AI citation across multiple platforms typically takes 3-6 months of consistent, structured content creation. This is faster than traditional SEO, which often takes 6-12 months to show significant ranking improvements, because AI platforms reward expertise signals more quickly than traditional ranking algorithms."
                }
              },
              {
                "@type": "Question",
                "name": "What happens to my existing SEO investment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nothing is wasted. Your domain authority, existing backlinks, and quality content remain valuable assets. AEO builds on that foundation rather than replacing it. However, you may need to restructure content to be more answer-focused, add schema markup, and strengthen expertise signals. Think of it as upgrading your content for the AI era rather than starting over."
                }
              },
              {
                "@type": "Question",
                "name": "Can AI citations work for local service businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely—local service businesses may benefit most from AEO. When someone asks 'Who's the best plumber near me?' they want a specific recommendation, not ten links to explore. AI platforms provide that specific recommendation. Local businesses that demonstrate deep expertise in their service area, document their credentials properly, and provide detailed answer-first content dominate AI citations in their markets."
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
            "name": "Why Google Rankings Don't Matter Anymore | The Answer Engine",
            "description": "Google AI Overviews, ChatGPT, Claude, and Perplexity are answering questions directly. Learn how to get cited by AI instead of ignored.",
            "url": "https://theanswerengine.ai/blog/google-rankings-dont-matter",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "Answer Engine Optimization"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/google-rankings-featured.png"
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
            <span className="mx-2 text-gray-700">›</span>
            <a href="/blog" className="hover:text-orange-400 transition-colors">Blog</a>
            <span className="mx-2 text-gray-700">›</span>
            <span className="text-gray-400">Why Google Rankings Don't Matter Anymore</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-white/[0.05]">
            <img 
              src="/google-rankings-featured.png" 
              alt="Why Google rankings don't matter as much in 2025: Google AI Overviews and AI chatbots like ChatGPT now answer user questions directly" 
              className="w-full"
            />
          </div>

          {/* Article Header */}
          <header className="mb-16">
            {/* Simple pixel divider */}
            <div className="flex gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-orange-500" />
              <div className="w-1.5 h-1.5 bg-purple-500" />
              <div className="w-1.5 h-1.5 bg-orange-500" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight text-gray-100">
              The Real Reason Your <span className="font-normal text-white">Google Rankings</span> Don't Matter Anymore
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              Google AI Overviews, ChatGPT, Claude, and Perplexity are answering questions directly — which means even a #1 ranking can get 0 clicks. Here's how to get cited instead of ignored.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
              <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full" />
              <span>Published January 8, 2025</span>
              <span className="text-gray-700">•</span>
              <span>By The Answer Engine Team</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              If your business isn't the source AI platforms cite in those answers, you're invisible. This article explains exactly what changed, why traditional SEO is failing, and what local businesses must do to stay competitive in 2025.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              What Are <span className="font-normal text-white">Google AI Overviews?</span> (And Why They Matter More Than Rankings)
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Google AI Overviews appear at the very top of search results—above all traditional rankings—and use generative AI to answer user questions in a few sentences. Think of them as featured snippets on steroids.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              When someone searches "best plumber near me," Google AI Overviews might generate an answer like:
            </p>
            <blockquote className="border-l-4 border-orange-500/50 pl-6 py-4 my-8 bg-white/[0.02] rounded-r-lg">
              <p className="text-gray-400 text-lg italic leading-relaxed font-light">
                "Based on customer reviews and licensing verification, ABC Plumbing offers 24/7 emergency service with licensed technicians. They specialize in leak detection and water heater replacement, with same-day service available in most areas."
              </p>
            </blockquote>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Notice what happened? The user got their answer. They might not click anything else.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">The critical shift:</strong> Google AI Overviews cite sources, but most users never visit those cited websites. If your business isn't cited, you don't exist in that search.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              How <span className="font-normal text-white">ChatGPT, Claude, and Perplexity</span> Are Changing Search Behavior
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              But Google isn't the only problem. A massive portion of search traffic has moved off Google entirely.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Millions of people now use ChatGPT instead of Google for many queries. They're asking conversational questions like:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "I need a real estate agent who specializes in flood recovery properties in Houston—who's best?",
                "What HVAC company in Phoenix offers the best warranty on new AC systems?",
                "Which local contractor in Denver knows the most about energy-efficient home renovations?"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              These platforms provide detailed answers, often with specific business recommendations. If your business isn't mentioned, you lose that customer to whoever is mentioned.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">The difference from Google:</strong> ChatGPT and similar platforms don't show ten blue links. They provide one answer, citing 2-3 sources maximum. You're either in that answer or you're out.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Why <span className="font-normal text-white">Traditional SEO</span> Doesn't Work for AI Platforms
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's where most businesses get stuck: they keep optimizing for 2015 Google.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Traditional SEO focused on:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Keywords in meta tags (AI doesn't read meta descriptions)",
                "Backlink quantity (AI values content quality over link count)",
                "Keyword density (AI detects natural language, not keyword stuffing)",
                "Page load speed (important, but not the deciding factor for citations)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              AI platforms look for different signals entirely. They want:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Direct answers to specific questions (not keyword-optimized fluff)",
                "Structured data (FAQ schema, HowTo schema, Article schema)",
                "Expertise and credentials (real human authority, not just content volume)",
                "Specific, factual claims with supporting evidence (AI can verify information)",
                "Local relevance signals (service area, years in business, local case examples)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">Real-World Impact:</span> What This Means for Your Business
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Let's make this concrete with a realistic scenario:
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Example:</strong> Two HVAC companies in Phoenix both rank on page one for "air conditioning repair Phoenix."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Company A has traditional SEO optimization—meta tags, backlinks, fast-loading pages.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Company B has Answer Engine Optimization—structured FAQs, detailed service descriptions, author credentials, customer case studies with specific outcomes.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              When someone asks ChatGPT "Who's the best HVAC company for AC repair in Phoenix?", ChatGPT cites Company B with specific reasons: "They have EPA-certified technicians, offer same-day service, and specialize in the high-efficiency systems common in Phoenix's extreme climate."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Company A? Never mentioned. Despite identical Google rankings.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              What It <span className="font-normal text-white">Actually Takes</span> to Win AI Citations
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Understanding what needs to happen and successfully executing it are two very different things. Here's what's actually involved in Answer Engine Optimization:
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              The Technical Infrastructure Challenge
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms require multiple layers of structured data markup working together without conflicts. A single syntax error in your schema markup breaks the entire implementation—and most business owners don't discover the error for months.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              The Content Architecture Problem
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Every piece of content needs explicit question-answer mapping. But here's the challenge: the same article must simultaneously satisfy Google's E-E-A-T requirements AND conversational AI parsing.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              The Authority Documentation Gap
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms verify credentials before citing sources. This isn't about claiming expertise—it's about structuring your credentials in machine-readable formats that AI can validate.
            </p>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Stop Losing Customers to <span className="font-normal text-white">Competitors Who Show Up in AI Answers</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We've spent two years figuring out exactly what makes AI platforms cite businesses instead of competitors. We know which implementations work, which break, and how to get you cited in 60-90 days.
              </p>
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
              >
                Schedule Your Free Strategy Call
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
                  q: "Why don't my Google rankings matter as much anymore?",
                  a: "Google AI Overviews now answer most queries directly above traditional search results, meaning users get their information without clicking through to websites. Even with a #1 ranking, you may lose significant traffic if Google's AI provides the answer first."
                },
                {
                  q: "What's the difference between SEO and Answer Engine Optimization?",
                  a: "Traditional SEO optimized to rank in search results (top 10 positions). Answer Engine Optimization (AEO) optimizes to be cited by AI as the authoritative answer—whether that's Google AI Overviews, ChatGPT, Claude, or Perplexity."
                },
                {
                  q: "How do I know if AI platforms are citing my competitors instead of me?",
                  a: "Test it yourself. Ask ChatGPT, Claude, or Perplexity questions your customers would ask about your services in your area. If your competitors are mentioned and you're not, you have an AEO visibility problem."
                },
                {
                  q: "Do I still need traditional SEO if I do Answer Engine Optimization?",
                  a: "Yes, but the priorities shift. Basic SEO hygiene remains important. However, focus should move from 'ranking higher' to 'providing better answers.' The content that wins AI citations often ranks well anyway."
                },
                {
                  q: "How long does it take to start getting AI citations?",
                  a: "With proper Answer Engine Optimization, most businesses see their first featured snippet wins within 60-90 days. Full AI citation across multiple platforms typically takes 3-6 months of consistent, structured content creation."
                },
                {
                  q: "What happens to my existing SEO investment?",
                  a: "Nothing is wasted. Your domain authority, existing backlinks, and quality content remain valuable assets. AEO builds on that foundation rather than replacing it."
                },
                {
                  q: "Can AI citations work for local service businesses?",
                  a: "Absolutely—local service businesses may benefit most from AEO. When someone asks 'Who's the best plumber near me?' they want a specific recommendation, not ten links to explore."
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
                The Answer Engine specializes in Answer Engine Optimization (AEO) for local service businesses. We help companies get cited by Google AI Overviews, ChatGPT, Claude, Perplexity, and other AI platforms—positioning them as the trusted expert in their market.
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