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
                "name": "How to Check If AI Is Recommending Your Business",
                "item": "https://theanswerengine.ai/blog/check-if-ai-recommends-your-business"
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
            "headline": "How to Check If AI Is Recommending Your Business (5-Minute Test)",
            "description": "Test whether ChatGPT, Claude, and Google AI recommend your business or your competitors.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/check-ai-recommends-featured.png",
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
            "datePublished": "2025-12-01",
            "dateModified": "2025-12-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://theanswerengine.ai/blog/check-if-ai-recommends-your-business"
            },
            "keywords": "AI visibility test, ChatGPT recommendations, Claude AI citations, Google AI Overview, AI business visibility, answer engine optimization",
            "articleSection": "Answer Engine Optimization",
            "wordCount": 3500,
            "inLanguage": "en-US"
          })
        }}
      />

      {/* Complete FAQ Schema - All 6 Questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I check if ChatGPT recommends my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Open ChatGPT and ask a question your ideal customer would ask, including your service type and location. For example: 'Who is the best [your service] in [your city]?' or 'Can you recommend a [your service] company in [your area]?' If your business appears in the response with specific details about your services, ChatGPT is recommending you. If not, you have an AI visibility gap."
                }
              },
              {
                "@type": "Question",
                "name": "Why might AI not recommend my business even if I have good reviews?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI platforms don't just look at reviews-they look for structured data, consistent business information across platforms, detailed service descriptions, and expertise signals. Your business might have great reviews but lack the technical implementation (schema markup, FAQ content, detailed service pages) that AI platforms need to confidently cite you as a recommendation."
                }
              },
              {
                "@type": "Question",
                "name": "How often should I test my AI visibility?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Test your AI visibility monthly at minimum. AI platforms update their knowledge and algorithms regularly, and your competitors may be implementing Answer Engine Optimization strategies that change the landscape. After making any significant website changes or content updates, test again within 2-4 weeks to see if the changes improved your AI citations."
                }
              },
              {
                "@type": "Question",
                "name": "What questions should I ask AI to test my business visibility?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ask questions your actual customers would ask: 'Who is the best [service] in [location]?', 'Can you recommend a [service] company near [location]?', 'What [service] company should I use for [specific need] in [location]?', and 'Who specializes in [specific service] in [location]?' Test multiple variations because AI responses can differ based on phrasing."
                }
              },
              {
                "@type": "Question",
                "name": "Does being recommended by one AI platform mean I'm visible on all of them?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Each AI platform (ChatGPT, Claude, Google AI Overview, Perplexity) uses different data sources and algorithms. You might be cited by ChatGPT but invisible to Claude, or appear in Google AI Overviews but not in Perplexity. Comprehensive AI visibility requires optimization across all major platforms, which is why testing each one separately is essential."
                }
              },
              {
                "@type": "Question",
                "name": "What score do I need to be considered AI-visible?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If AI platforms cite you for 4-5 out of 5 test queries across multiple platforms, you have strong AI visibility. If you appear in 2-3 queries, you have partial visibility with room for improvement. If you appear in 0-1 queries, you're essentially invisible to AI and losing customers to competitors who are being recommended. Most local businesses score 0-1 before implementing Answer Engine Optimization."
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
            "name": "How to Check If AI Is Recommending Your Business | The Answer Engine",
            "description": "Test whether ChatGPT, Claude, and Google AI recommend your business or your competitors.",
            "url": "https://theanswerengine.ai/blog/check-if-ai-recommends-your-business",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "AI Visibility Testing"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/check-ai-recommends-featured.png"
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
            <span className="text-gray-400">How to Check If AI Is Recommending Your Business</span>
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
              How to Check If <span className="font-normal text-white">AI Is Recommending Your Business</span> (5-Minute Test)
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              Test whether ChatGPT, Claude, and Google AI recommend your business or your competitors.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
              <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full" />
              <span>Published December 2025</span>
              <span className="text-gray-700">•</span>
              <span>By The Answer Engine Team</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Right now, potential customers are asking AI platforms like ChatGPT, Claude, and Google AI Overview for business recommendations. The question is: are those AI platforms recommending you, or your competitors?
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              This 5-minute test will tell you exactly where you stand. No technical skills required-just follow the steps below.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">5-Step AI Visibility Test</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Follow these steps to discover whether AI is recommending your business to potential customers.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 1: Open ChatGPT
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Go to <strong className="text-white font-medium">chat.openai.com</strong> and sign in (or create a free account if you don't have one). ChatGPT is where millions of people now search for business recommendations instead of Google.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 2: Ask for a Recommendation
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Type a question your ideal customer would ask. Use this format:
            </p>
            <blockquote className="border-l-4 border-orange-500/50 pl-6 py-4 my-8 bg-white/[0.02] rounded-r-lg">
              <p className="text-gray-400 text-lg italic leading-relaxed font-light">
                "Who is the best [your service] in [your city]?"
              </p>
            </blockquote>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Examples:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Who is the best plumber in Austin, Texas?",
                "Can you recommend a real estate agent in Denver who specializes in first-time buyers?",
                "What HVAC company should I use for AC repair in Phoenix?",
                "Who's the best personal injury lawyer in Miami?"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 3: Analyze the Response
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Look carefully at ChatGPT's answer. Ask yourself:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Is my business mentioned by name?",
                "Does it describe my specific services accurately?",
                "Are my competitors mentioned instead of me?",
                "Does ChatGPT provide details about my business (specialties, years in business, unique offerings)?"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Record your result:</strong> Write down whether you were mentioned, and if so, what details were included.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 4: Test Other AI Platforms
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Repeat the same question on these platforms:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Claude (claude.ai) - Anthropic's AI assistant",
                "Google AI Overview - Search your query on Google and look for the AI-generated summary at the top",
                "Perplexity (perplexity.ai) - AI-powered search engine",
                "Microsoft Copilot (copilot.microsoft.com) - Microsoft's AI assistant"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 5: Score Your Results
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              For each platform, give yourself a point if your business was mentioned with accurate information. Your score out of 5 tells you where you stand.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              What Your <span className="font-normal text-white">Score Means</span>
            </h2>

            <div className="my-8 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <h4 className="text-xl font-medium text-green-400 mb-3">4-5 Platforms: Strong AI Visibility</h4>
              <p className="text-gray-300 font-light leading-relaxed">
                Congratulations! AI platforms are actively recommending your business. You're capturing customers that your competitors are missing. Focus on maintaining this advantage and expanding to new query types.
              </p>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <h4 className="text-xl font-medium text-yellow-400 mb-3">2-3 Platforms: Partial Visibility</h4>
              <p className="text-gray-300 font-light leading-relaxed">
                You have some AI visibility, but you're missing opportunities. Some platforms recognize your business, but others don't. With targeted optimization, you can close these gaps and capture more AI-driven leads.
              </p>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <h4 className="text-xl font-medium text-red-400 mb-3">0-1 Platforms: Invisible to AI</h4>
              <p className="text-gray-300 font-light leading-relaxed">
                This is where most local businesses are today. AI platforms don't know enough about your business to recommend you. Every day, potential customers ask AI for recommendations, and those customers are going to your competitors.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Why AI Might <span className="font-normal text-white">Not Be Recommending You</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              If you scored low on the visibility test, it's not because your business isn't good enough. It's because AI platforms can't find or verify the information they need to confidently recommend you.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              <strong className="text-white font-medium">Common reasons AI doesn't cite your business:</strong>
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Missing structured data (schema markup) that AI can easily parse",
                "Inconsistent business information across platforms",
                "Thin content that doesn't answer specific customer questions",
                "No clear expertise signals (credentials, specializations, case studies)",
                "Website content not formatted for AI comprehension",
                "Competitors have implemented Answer Engine Optimization and you haven't"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              What to Do <span className="font-normal text-white">With Your Results</span>
            </h2>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              If You Scored 0-1: Take Immediate Action
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              You're losing customers every day to competitors who are being recommended by AI. The good news? Most of your competitors probably haven't optimized for AI either, so there's a first-mover advantage available. The businesses that act now will dominate AI citations in their market.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              If You Scored 2-3: Close the Gaps
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              You have a foundation to build on. Focus on the platforms where you're not appearing and identify what's different about how those platforms evaluate businesses. Often, small technical implementations can dramatically improve visibility.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              If You Scored 4-5: Expand and Defend
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              You're ahead of most businesses. Now test additional query types to ensure you're capturing all relevant searches. Also monitor monthly-your competitors will eventually catch on, and maintaining your advantage requires ongoing attention.
            </p>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Ready to Get <span className="font-normal text-white">AI Recommending Your Business?</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We specialize in Answer Engine Optimization for local service businesses. In 60-90 days, we can get AI platforms citing your business as the go-to recommendation in your market.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
              >
                Get Your Free AI Visibility Audit
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
                  q: "How do I check if ChatGPT recommends my business?",
                  a: "Open ChatGPT and ask a question your ideal customer would ask, including your service type and location. For example: 'Who is the best [your service] in [your city]?' If your business appears in the response with specific details, ChatGPT is recommending you."
                },
                {
                  q: "Why might AI not recommend my business even if I have good reviews?",
                  a: "AI platforms don't just look at reviews-they look for structured data, consistent business information across platforms, detailed service descriptions, and expertise signals. You might have great reviews but lack the technical implementation that AI platforms need."
                },
                {
                  q: "How often should I test my AI visibility?",
                  a: "Test your AI visibility monthly at minimum. AI platforms update their knowledge regularly, and your competitors may be implementing optimization strategies. After making website changes, test again within 2-4 weeks."
                },
                {
                  q: "What questions should I ask AI to test my business visibility?",
                  a: "Ask questions your actual customers would ask: 'Who is the best [service] in [location]?', 'Can you recommend a [service] company near [location]?', and 'Who specializes in [specific service] in [location]?' Test multiple variations."
                },
                {
                  q: "Does being recommended by one AI platform mean I'm visible on all of them?",
                  a: "No. Each AI platform uses different data sources and algorithms. You might be cited by ChatGPT but invisible to Claude. Comprehensive AI visibility requires optimization across all major platforms."
                },
                {
                  q: "What score do I need to be considered AI-visible?",
                  a: "If AI platforms cite you for 4-5 out of 5 test queries across multiple platforms, you have strong AI visibility. 2-3 means partial visibility with room for improvement. 0-1 means you're essentially invisible to AI."
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
