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
                "name": "Why Am I Paying for SEO But Not Getting Leads?",
                "item": "https://theanswerengine.ai/blog/seo-not-generating-leads"
              }
            ]
          })
        }}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Why Am I Paying for SEO But Not Getting Any Leads?",
            "description": "Nearly 60% of searches now end without a click because AI answers directly. Learn why your SEO rankings look good but leads are down, and what actually generates leads now.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/blog/seo-not-generating-leads.svg",
              "width": 1200,
              "height": 630
            },
            "author": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "logo": {
                "@type": "ImageObject",
                "url": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png"
              }
            },
            "datePublished": "2026-01-24",
            "dateModified": "2026-01-24",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://theanswerengine.ai/blog/seo-not-generating-leads"
            },
            "keywords": "SEO not generating leads, paying for SEO no results, SEO rankings up but no calls, is SEO worth it, AI visibility, Answer Engine Optimization",
            "articleSection": "SEO & AI Visibility",
            "wordCount": 1800,
            "inLanguage": "en-US"
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why is my SEO not generating leads anymore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nearly 60% of searches now end without a click because AI answers questions directly. High-intent buyers get recommendations from AI before they see search results and call whoever AI recommends."
                }
              },
              {
                "@type": "Question",
                "name": "Should I stop paying for SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. SEO still provides value for informational searches and builds topical authority. But SEO alone is no longer enough - you need AI visibility alongside SEO to capture high-intent buyers."
                }
              },
              {
                "@type": "Question",
                "name": "How is AI visibility different from SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO optimizes for search engine rankings using keywords and backlinks. AI visibility optimizes for being recommended when people ask AI assistants for suggestions. Research shows AI uses different signals - brand mentions matter more than domain authority."
                }
              },
              {
                "@type": "Question",
                "name": "Can my SEO agency handle AI visibility?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Some can, most can't. Ask your agency about their strategy for AI-generated answers. If they don't have data on AI platform mentions, you may need specialized help alongside your SEO."
                }
              },
              {
                "@type": "Question",
                "name": "Why can't ChatGPT see my Google reviews?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ChatGPT uses Bing's web index, not Google's data. To influence AI recommendations, you need reviews on platforms AI can read - Yelp, BBB, and sites indexed by Bing."
                }
              },
              {
                "@type": "Question",
                "name": "How long before I see results from AI visibility optimization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most businesses see measurable changes in AI citations within 90-120 days when they establish clear authority signals across the platforms AI reads."
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
            "name": "Why Am I Paying for SEO But Not Getting Leads? | The Answer Engine",
            "description": "Your SEO rankings are up but leads are down. Here's why: nearly 60% of searches now end without a click. AI answers first - and your rankings don't matter if AI skips you.",
            "url": "https://theanswerengine.ai/blog/seo-not-generating-leads",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "SEO and AI Visibility"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/blog/seo-not-generating-leads.svg"
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
            <span className="text-gray-400">Why Am I Paying for SEO But Not Getting Leads?</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-white/[0.05]">
            <img
              src="/blog/seo-not-generating-leads.svg"
              alt="Why Am I Paying for SEO But Not Getting Any Leads?"
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
              Why Am I <span className="font-normal text-white">Paying for SEO</span> But Not Getting Any Leads?
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              Your SEO rankings are up but leads are down. Here's why: nearly 60% of searches now end without a click. AI answers first - and your rankings don't matter if AI skips you.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
              <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full" />
              <span>Published January 24, 2026</span>
              <span className="text-gray-700">•</span>
              <span>By The Answer Engine Team</span>
            </div>
          </header>

          {/* The Short Answer Box */}
          <div className="mb-12 p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-orange-500/30">
            <h2 className="text-xl font-medium text-orange-400 mb-4">The Short Answer</h2>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              <strong className="text-white font-medium">You're paying for SEO but not getting leads because the way people find businesses changed.</strong> Nearly 60% of searches now end without anyone clicking a website (<a href="https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web/" className="text-orange-400 hover:text-orange-300 underline" target="_blank" rel="noopener noreferrer">SparkToro, 2024</a>). People ask AI for recommendations, AI gives them one answer, and they call that business. Your page 1 ranking doesn't matter if AI answers the question before anyone sees your listing.
            </p>
            <p className="text-gray-400 text-base leading-relaxed font-light mt-4">
              Your SEO agency is probably doing their job. The problem isn't your agency - it's that SEO alone no longer reaches the people ready to buy.
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Your SEO agency sends you a report every month.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Rankings are up. Traffic is "healthy." They're hitting their KPIs.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              But your phone isn't ringing. Leads are down. And you're starting to wonder if you're just burning money.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Here's the uncomfortable truth: <strong className="text-white font-medium">Your SEO agency might be doing everything right - and it still won't work.</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Not because they're bad at SEO. Because SEO alone isn't enough anymore.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The Report <span className="font-normal text-white">Looks Good.</span> The Results Don't.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Let's look at what your agency is probably showing you:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                '"You\'re ranking on page 1 for 47 keywords!"',
                '"Organic traffic increased 23% this quarter!"',
                '"Domain authority is up 4 points!"'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              These metrics were meaningful five years ago. Today, they're vanity numbers.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Here's what they don't show you: <strong className="text-white font-medium">Nearly 60% of Google searches now end without a click.</strong> According to SparkToro and Datos (2024), people search, AI gives them an answer, and they never visit any website.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Your page 1 ranking doesn't matter if the searcher never scrolls past the AI-generated answer at the top.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              What Your SEO Investment <span className="font-normal text-white">Actually Delivers Now</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's the honest breakdown:
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-green-400 font-medium">SEO Still Works For</th>
                    <th className="text-left py-4 px-4 text-red-400 font-medium">SEO Doesn't Work For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300 font-light">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Informational searches ("how to fix a leaky faucet")</td>
                    <td className="py-3 px-4">"Who should I hire" searches (AI answers directly)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Comparison content ("plumber vs handyman")</td>
                    <td className="py-3 px-4">Voice searches ("Hey Siri, find me a plumber")</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Research-stage queries ("average cost of kitchen remodel")</td>
                    <td className="py-3 px-4">Urgent need searches ("I need a plumber right now")</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Long-form educational content</td>
                    <td className="py-3 px-4">High-intent buyer queries</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Building topical authority over time</td>
                    <td className="py-3 px-4">Immediate lead generation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              The problem? Those right-column searches are where the money is. Those are the people ready to hire today. And they're increasingly going to whoever AI recommends.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <strong className="text-white font-medium">Your SEO investment is capturing the researchers. Your competitor - the one AI recommends - is capturing the buyers.</strong>
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              What Your Agency <span className="font-normal text-white">Isn't Telling You</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Most SEO agencies are still running playbooks from five years ago. Keyword optimization. Backlink building. Technical audits. Content calendars.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              That stuff still matters - for the 40% of searches where people actually click through to websites.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              But the high-intent searches? The "who should I hire" searches? Those are increasingly answered by AI. And AI evaluates businesses differently than Google does.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              When someone asks ChatGPT "Who's the best plumber in Denver?" it doesn't check your domain authority score. According to research from Onely and Ahrefs (December 2025), AI systems prioritize completely different signals:
            </p>

            <h3 className="text-2xl font-light mt-12 mb-6 text-orange-400">
              What AI Actually Looks For:
            </h3>
            <ol className="space-y-4 mb-8 text-gray-300 text-lg">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium">1</span>
                <div>
                  <strong className="text-white font-medium">Brand mentions across authoritative sources</strong>
                  <span className="font-light leading-relaxed"> - Are you featured in industry lists, local publications, and trusted directories?</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium">2</span>
                <div>
                  <strong className="text-white font-medium">Authoritative list appearances</strong>
                  <span className="font-light leading-relaxed"> - Being named in "best of" articles accounts for 41% of ChatGPT brand recommendations (Onely research)</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium">3</span>
                <div>
                  <strong className="text-white font-medium">Consistent business information</strong>
                  <span className="font-light leading-relaxed"> - Is your name, address, and phone identical everywhere AI looks?</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium">4</span>
                <div>
                  <strong className="text-white font-medium">Content that directly answers questions</strong>
                  <span className="font-light leading-relaxed"> - Not keyword-stuffed pages. Real expertise that AI can cite.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium">5</span>
                <div>
                  <strong className="text-white font-medium">Reviews on platforms AI can access</strong>
                  <span className="font-light leading-relaxed"> - <a href="/blog/bing-places-chatgpt-connection" className="text-orange-400 hover:text-orange-300 underline">ChatGPT can't see your Google reviews</a>. It reads Yelp, BBB, and other platforms indexed by Bing.</span>
                </div>
              </li>
            </ol>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Traditional SEO metrics like domain authority have "weak correlation" with AI recommendations, according to Ahrefs' study of 75,000 brands. Your SEO agency isn't optimizing for what AI actually measures.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The Real Reason <span className="font-normal text-white">Your Leads Dried Up</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's what's actually happening:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h4 className="text-purple-400 font-medium mb-4">The Old Customer Journey</h4>
                <ol className="space-y-2 text-gray-400 font-light text-sm">
                  <li>1. Customer searches "emergency plumber Phoenix"</li>
                  <li>2. Sees 10 results on Google</li>
                  <li>3. Clicks 2-3 websites, compares</li>
                  <li>4. Calls the one that looks most professional</li>
                  <li className="text-green-400">5. Your SEO investment pays off</li>
                </ol>
              </div>
              <div className="bg-white/[0.02] border border-orange-500/20 rounded-xl p-6">
                <h4 className="text-orange-400 font-medium mb-4">The New Customer Journey</h4>
                <ol className="space-y-2 text-gray-400 font-light text-sm">
                  <li>1. Customer asks ChatGPT "I need an emergency plumber in Phoenix, who should I call?"</li>
                  <li>2. ChatGPT recommends one company with a phone number</li>
                  <li>3. Customer calls that company</li>
                  <li>4. Your website never enters the picture</li>
                  <li className="text-red-400">5. Your SEO investment generates reports, not leads</li>
                </ol>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <strong className="text-white font-medium">The customer journey changed. Your marketing didn't.</strong>
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Proof: <span className="font-normal text-white">What Happens When You Optimize for AI</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              One of our clients - a real estate agent in Los Angeles - had strong SEO rankings but noticed leads declining. After implementing AI visibility optimization alongside their existing SEO:
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              <strong className="text-white font-medium">Verified Results (Google Search Console, January 2026):</strong>
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "5,766 clicks in the last 30 days from organic search",
                "10,654 clicks from strategic content clusters designed to win AI citations",
                "3,800+ clicks from a single topic cluster (rent control content)",
                "3,700+ clicks from probate and trust content"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              The difference? They stopped creating keyword-optimized pages and started creating answer-optimized content that AI systems recognize as authoritative.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              "But My <span className="font-normal text-white">Rankings Are Great!</span>"
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              I know. That's the frustrating part.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              You might be ranking #1 for your most important keywords. Your agency might be doing genuinely excellent work. The technical SEO might be flawless.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">And it doesn't matter</strong> if AI is answering the question before anyone sees your ranking.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Think about it: When was the last time you personally scrolled past an AI answer to click on a regular search result? When the AI answer is good enough, most people stop there. Your customers are doing the same thing.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The Conversation You Need to <span className="font-normal text-white">Have With Your Agency</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Don't fire your SEO agency. But do have this conversation:
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Ask them:</strong> "What's our strategy for showing up in AI-generated answers?"
            </p>
            <ul className="space-y-4 mb-8 text-gray-300 text-lg">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500/60 rounded-full mt-3" />
                <span className="font-light leading-relaxed">If they say "AI pulls from Google, so SEO is enough" - <strong className="text-red-400">they're behind.</strong> Research shows AI uses different ranking signals.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-yellow-500/60 rounded-full mt-3" />
                <span className="font-light leading-relaxed">If they say "We're monitoring AI mentions but haven't built a strategy yet" - <strong className="text-yellow-400">at least they're aware.</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-500/60 rounded-full mt-3" />
                <span className="font-light leading-relaxed">If they say "That's not really SEO, that's a different service" - <strong className="text-green-400">they're right,</strong> and you need both.</span>
              </li>
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              SEO and AI visibility are becoming separate disciplines. Your agency might be excellent at one and have no expertise in the other.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">4-Step Framework:</span> What Actually Gets You Leads Now
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h4 className="text-orange-400 font-medium mb-2">Step 1: AI Platform Visibility</h4>
                <p className="text-gray-400 font-light mb-3">You need to show up when people ask ChatGPT, Google AI Overview, Perplexity, and Claude for recommendations. This requires:</p>
                <ul className="space-y-1 text-gray-400 font-light text-sm">
                  <li>• Claiming listings on platforms AI actually reads (Bing, Apple Maps, data aggregators)</li>
                  <li>• Consistent business information everywhere</li>
                  <li>• Content structured the way AI systems prefer</li>
                  <li>• Being featured in authoritative "best of" lists in your industry</li>
                </ul>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h4 className="text-orange-400 font-medium mb-2">Step 2: Answer-First Content</h4>
                <p className="text-gray-400 font-light mb-3">AI is looking for content that directly answers questions. Not keyword-stuffed pages. Real answers to real questions:</p>
                <ul className="space-y-1 text-gray-400 font-light text-sm">
                  <li>• "How much does [service] cost in [your city]?"</li>
                  <li>• "What should I look for when hiring a [your profession]?"</li>
                  <li>• "How do I know if I need [your service]?"</li>
                </ul>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h4 className="text-orange-400 font-medium mb-2">Step 3: Multi-Platform Authority</h4>
                <p className="text-gray-400 font-light mb-3">AI systems cross-reference your business across multiple sources. This means:</p>
                <ul className="space-y-1 text-gray-400 font-light text-sm">
                  <li>• Reviews on Yelp, BBB, and industry directories (not just Google)</li>
                  <li>• Mentions in local publications and industry blogs</li>
                  <li>• Consistent NAP (name, address, phone) across all platforms</li>
                  <li>• Being listed in relevant "best of" articles and roundups</li>
                </ul>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h4 className="text-orange-400 font-medium mb-2">Step 4: Keep Your SEO Foundation</h4>
                <p className="text-gray-400 font-light">Don't abandon SEO. It still captures 40% of searches and builds the topical authority that AI also recognizes. But SEO alone is now incomplete. Think of it like this: <strong className="text-white">SEO is still the foundation. But AI visibility is now the roof.</strong> Without both, you're exposed.</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Find Out <span className="font-normal text-white">What AI Says About You</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Before your next conversation with your SEO agency, find out where you actually stand:
            </p>
            <ol className="space-y-3 mb-8 text-gray-300 text-lg">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium text-sm">1</span>
                <span className="font-light leading-relaxed">Ask ChatGPT: "Who's the best [your service] in [your city]?"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium text-sm">2</span>
                <span className="font-light leading-relaxed">Ask Google (and look at the AI Overview, not the regular results)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium text-sm">3</span>
                <span className="font-light leading-relaxed">Ask Perplexity the same question</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium text-sm">4</span>
                <span className="font-light leading-relaxed">Check if your competitor shows up instead of you</span>
              </li>
            </ol>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              If AI isn't recommending you, that's your leak. That's where your leads are going. And no amount of SEO will fix it.
            </p>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Want a Complete <span className="font-normal text-white">AI Visibility Audit?</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We'll show you exactly where you stand across every major AI platform, what your competitors are doing differently, and what it would take to become the business AI recommends.
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
                  q: "Why is my SEO not generating leads anymore?",
                  a: "Nearly 60% of searches now end without a click because AI answers questions directly. Your SEO rankings may be strong, but high-intent buyers - the people ready to hire today - are getting recommendations from AI before they see search results. They call whoever AI recommends."
                },
                {
                  q: "Should I stop paying for SEO?",
                  a: "No. SEO still provides value for informational and research searches, and it builds topical authority that AI also recognizes. But SEO alone is no longer enough - you need AI visibility alongside your SEO to capture high-intent buyers who ask AI for recommendations."
                },
                {
                  q: "How is AI visibility different from SEO?",
                  a: "SEO optimizes for search engine rankings using factors like keywords, backlinks, and technical performance. AI visibility optimizes for being recommended when people ask AI assistants like ChatGPT, Google AI Overview, and Perplexity for suggestions. Research shows AI uses different signals - brand mentions and authoritative list appearances matter more than domain authority scores."
                },
                {
                  q: "Can my SEO agency handle AI visibility?",
                  a: "Some can, most can't. Ask your agency specifically about their strategy for AI-generated answers. If they don't have data on which AI platforms mention your business or a strategy for increasing AI citations, you may need specialized help alongside your SEO."
                },
                {
                  q: "Why can't ChatGPT see my Google reviews?",
                  a: "ChatGPT uses Bing's web index, not Google's data. This means it can't directly access Google Business Profile information including reviews. To influence AI recommendations, you need reviews on platforms AI can read - Yelp, BBB, industry directories, and sites indexed by Bing."
                },
                {
                  q: "How long before I see results from AI visibility optimization?",
                  a: "Most businesses see measurable changes in AI citations within 90-120 days. Unlike SEO, which compounds slowly over years, AI visibility can shift more quickly when you establish clear authority signals across the right platforms. The key is consistency across all platforms AI reads, not just Google."
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
                <span className="font-normal text-white">About The Answer Engine</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                We help local service businesses become the answer when customers ask AI for recommendations. We work alongside your existing SEO - not instead of it - to capture the leads traditional search is no longer delivering. Our clients see results like 5,700+ monthly clicks from strategic content optimized for AI visibility.
              </p>
              <p>
                <a href="/case-studies/justin-borges" className="inline-flex items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition-colors group">
                  See our case studies
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </p>
            </div>

            {/* Sources */}
            <div className="mt-12 pt-8 border-t border-white/[0.05]">
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Sources Cited</h4>
              <ul className="space-y-2 text-sm text-gray-500 font-light">
                <li>1. SparkToro/Datos 2024 Zero-Click Search Study</li>
                <li>2. Onely - "How ChatGPT Decides Which Brands to Recommend" (December 2025)</li>
                <li>3. Ahrefs - "Top Brand Visibility Factors in ChatGPT, AI Mode, and AI Overviews" (December 2025)</li>
                <li>4. Client GSC Data: lametrohomefinder.com (January 2026)</li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
