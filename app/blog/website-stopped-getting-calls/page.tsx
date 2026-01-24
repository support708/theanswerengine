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
                "name": "Why Your Website Stopped Getting Calls",
                "item": "https://theanswerengine.ai/blog/website-stopped-getting-calls"
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
            "headline": "Why Your Website Stopped Getting Calls (The Shift Nobody Told You About)",
            "description": "Nearly 60% of searches now end without a click because AI answers questions directly. Learn why your website traffic looks fine but calls have dropped.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/website-stopped-getting-calls-featured.png",
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
            "datePublished": "2026-01-24",
            "dateModified": "2026-01-24",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://theanswerengine.ai/blog/website-stopped-getting-calls"
            },
            "keywords": "website not getting calls, website traffic but no leads, AI search, zero-click searches, Answer Engine Optimization, AEO, local business marketing",
            "articleSection": "Answer Engine Optimization",
            "wordCount": 1800,
            "inLanguage": "en-US"
          })
        }}
      />

      {/* Complete FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why is my website getting traffic but no phone calls?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nearly 60% of searches now end without a click because AI answers questions directly. High-intent buyers get recommendations from AI and call that business without ever visiting a website."
                }
              },
              {
                "@type": "Question",
                "name": "How do I know if AI is recommending my competitors instead of me?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ask ChatGPT, Google AI Overview, and Perplexity 'Who's the best [your service] in [your city]?' If your competitor shows up consistently and you don't, AI is sending them your potential customers."
                }
              },
              {
                "@type": "Question",
                "name": "Does ChatGPT use my Google Business Profile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. ChatGPT uses Bing's web index, not Google's data. You need to claim Bing Places and ensure your information is consistent across platforms AI actually reads."
                }
              },
              {
                "@type": "Question",
                "name": "What changed about how people find local businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI assistants now answer questions directly instead of showing a list of websites. When someone asks for a recommendation, AI gives one or two answers-not ten."
                }
              },
              {
                "@type": "Question",
                "name": "Can I still get leads if I'm not showing up in AI recommendations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but you're competing for a shrinking pool. Only about 40% of searches result in website clicks anymore. Businesses in AI recommendations get access to the other 60%."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to start showing up in AI recommendations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Businesses implementing comprehensive AI visibility strategies typically see changes within 90-120 days through consistent authority signals across multiple platforms."
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
            "name": "Why Your Website Stopped Getting Calls | The Answer Engine",
            "description": "Your website traffic looks fine but the phone stopped ringing. Here's what changed-and why your competitors are getting calls instead of you.",
            "url": "https://theanswerengine.ai/blog/website-stopped-getting-calls",
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
              "url": "https://theanswerengine.ai/website-stopped-getting-calls-featured.png"
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
            <span className="text-gray-400">Why Your Website Stopped Getting Calls</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-white/[0.05]">
            <img
              src="/website-stopped-getting-calls-featured.png"
              alt="Why your website stopped getting calls: Nearly 60% of searches now end without a click as AI answers questions directly"
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
              Why Your Website <span className="font-normal text-white">Stopped Getting Calls</span> (The Shift Nobody Told You About)
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              Your website traffic looks fine but the phone stopped ringing. Here's what changed-and why your competitors are getting calls instead of you.
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
              Your website stopped getting calls because nearly 60% of Google searches now end without anyone clicking a website. According to <a href="https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web/" className="text-orange-400 hover:text-orange-300 underline" target="_blank" rel="noopener noreferrer">SparkToro and Datos research (2024)</a>, people get their answers directly from AI-and they call whoever AI recommends. If AI isn't recommending your business, those callers never see your website.
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Your website traffic looks fine. Maybe it's even up from last year.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              But the phone stopped ringing.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              You're not imagining it. Something fundamental changed in how people find and choose local businesses-and most business owners have no idea it happened.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The Shift <span className="font-normal text-white">Nobody Told You About</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's what's happening: <strong className="text-white font-medium">Nearly 60% of Google searches now end without a single click.</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              That's not a typo. According to research from SparkToro and Datos (a Semrush company), 58.5% of U.S. searches and 59.7% of EU searches end without anyone visiting any website. They get their answer directly from AI-and they call whoever AI recommends.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">This isn't coming. It's already here.</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              When someone asks "Who's the best plumber in Phoenix?" or "Find me a home inspector near me," they're not scrolling through 10 blue links anymore. They're asking ChatGPT. They're using Google's AI Overview. They're talking to Siri or Alexa.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              And those AI systems? They give one answer. Maybe two.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <strong className="text-white font-medium">If you're not that answer, you don't exist.</strong>
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">Old Way</span> vs. The <span className="font-normal text-white">New Way</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's how the customer journey changed:
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-purple-400 font-medium">Before (2020-2023)</th>
                    <th className="text-left py-4 px-4 text-orange-400 font-medium">Now</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300 font-light">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Customer searches Google</td>
                    <td className="py-3 px-4">Customer asks AI for a recommendation</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Sees 10 website results</td>
                    <td className="py-3 px-4">Gets 1-2 business names directly</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Clicks 2-3 websites to compare</td>
                    <td className="py-3 px-4">Calls the recommended business</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Evaluates, then calls</td>
                    <td className="py-3 px-4">Never visits any website</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Your SEO investment pays off</td>
                    <td className="py-3 px-4">Your website is bypassed entirely</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              The high-intent buyers-the people ready to hire someone today-are getting their answer from AI before they ever reach your website.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              You're left with the tire-kickers. The researchers. The people comparing prices with no intention to buy.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Meanwhile, your competitor (you know the one) seems busier than ever. Same market. Same services. But their phone keeps ringing.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              They're not running better ads. They don't have a bigger marketing budget.<br />
              <strong className="text-white font-medium">They're the business AI recommends.</strong>
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">Three Reasons</span> AI Isn't Recommending You
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              When AI platforms decide which business to recommend, they're not looking at what you think they're looking at.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              1. You're Invisible to the Right Platforms
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              ChatGPT doesn't read your Google Business Profile. It uses Bing's web index to find information about local businesses.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Most business owners have never claimed their Bing Places listing. They've never thought about whether their business shows up in the data sources AI actually uses.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <strong className="text-white font-medium">If AI can't find clear, consistent information about your business, it won't recommend you. Period.</strong>
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              2. Your Website Answers the Wrong Questions
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Traditional SEO taught you to stuff keywords into pages. "Best plumber Phoenix AZ. Affordable plumber Phoenix. Emergency plumber Phoenix Arizona."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">AI doesn't work that way.</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              AI is looking for content that directly answers the questions people actually ask:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "\"How do I know if my water heater needs replacing?\"",
                "\"What should I look for in a home inspector?\"",
                "\"How much does probate cost in California?\""
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              If your website reads like a keyword-stuffed brochure, AI will skip right past you to the competitor who actually answers questions.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              3. You Have No Authority Signals AI Recognizes
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms are trying to figure out one thing: <strong className="text-white font-medium">Who is the trusted expert in this category?</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              They look for:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Consistent business information across the web",
                "Content that demonstrates genuine expertise",
                "Reviews on platforms they can actually access (hint: ChatGPT can't see Google reviews)",
                "Clear signals that a real expert created your content"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Generic websites with stock photos and copy that could describe any business in your industry? AI ignores them.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              What AI <span className="font-normal text-white">Actually Looks For</span> (The 4 Authority Signals)
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's what makes AI recommend one business over another:
            </p>
            <ol className="space-y-6 mb-8 text-gray-300 text-lg">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium">1</span>
                <div>
                  <strong className="text-white font-medium">Platform Presence</strong>
                  <span className="font-light leading-relaxed"> - Are you on Bing Places, Apple Maps, and data aggregators that feed AI systems? Not just Google.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium">2</span>
                <div>
                  <strong className="text-white font-medium">Answer-First Content</strong>
                  <span className="font-light leading-relaxed"> - Does your website directly answer the questions people ask AI? Not keyword pages-real answers.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium">3</span>
                <div>
                  <strong className="text-white font-medium">Consistency</strong>
                  <span className="font-light leading-relaxed"> - Is your business name, address, and phone number identical everywhere AI looks? Inconsistencies = distrust.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-medium">4</span>
                <div>
                  <strong className="text-white font-medium">Corroborating Evidence</strong>
                  <span className="font-light leading-relaxed"> - Are you mentioned on industry sites, local publications, and review platforms beyond Google? AI cross-references.</span>
                </div>
              </li>
            </ol>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Real Results: <span className="font-normal text-white">What Happens When You Get This Right</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              One of our clients-a real estate agent in Los Angeles-was invisible to AI 18 months ago.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              After implementing a hub-and-spoke content strategy optimized for AI visibility, here's what happened:
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              <strong className="text-white font-medium">Verified Results (Google Search Console, January 2026):</strong>
            </p>
            <ul className="space-y-3 mb-6 text-gray-300 text-lg">
              {[
                "5,766 clicks in the last 30 days from organic search",
                "220+ clicks per day average (last 7 days)",
                "10,654 clicks from strategic content clusters alone"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Their top-performing content cluster (LA rent control topics) drives 3,800+ clicks from a single hub article and its supporting content. Their probate and trust content cluster drives another 3,700+ clicks.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <strong className="text-white font-medium">This isn't theory. It's what happens when you become the business AI recommends.</strong>
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              What Actually <span className="font-normal text-white">Needs to Change</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              This isn't about working harder at the marketing you're already doing.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              <strong className="text-white font-medium">It's not about:</strong>
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "More Google Ads (people ask AI before clicking ads)",
                "More SEO content (rankings don't matter if AI answers first)",
                "More social media posts (not where buying decisions happen)",
                "More reviews on Google (ChatGPT can't see them)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <strong className="text-white font-medium">It's about becoming the business AI recommends when someone in your market needs your service.</strong>
            </p>

            <h3 className="text-2xl font-light mt-12 mb-6 text-white">
              The 4-Step Framework:
            </h3>

            <div className="space-y-6 mb-8">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h4 className="text-orange-400 font-medium mb-2">Step 1: Claim the listings AI actually reads.</h4>
                <p className="text-gray-400 font-light">Bing Places. Apple Maps. Data aggregators that feed AI systems. Not just Google.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h4 className="text-orange-400 font-medium mb-2">Step 2: Create content that answers real questions.</h4>
                <p className="text-gray-400 font-light">Not keyword-stuffed service pages. Genuine expertise that AI recognizes as authoritative. Structure it so AI can extract clear answers.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h4 className="text-orange-400 font-medium mb-2">Step 3: Build authority signals AI understands.</h4>
                <p className="text-gray-400 font-light">Consistent information everywhere. Expert authorship. Schema markup that helps AI understand what you do.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h4 className="text-orange-400 font-medium mb-2">Step 4: Show up on multiple AI platforms.</h4>
                <p className="text-gray-400 font-light">ChatGPT, Google AI Overview, Perplexity, Claude-they all pull from different sources. You need visibility on all of them.</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The Window <span className="font-normal text-white">Is Closing</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Right now, most of your competitors haven't figured this out yet.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              They're still pouring money into SEO strategies built for 2019. They're still wondering why their rankings look good but calls are down.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">This is your window.</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              The businesses that establish themselves as the AI-recommended answer in their market over the next 6-12 months will be nearly impossible to displace. AI systems learn to trust certain sources, and that trust compounds over time.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              The businesses that wait will find themselves invisible to an entire generation of buyers who never learned to scroll through Google results-because they never had to.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Find Out <span className="font-normal text-white">Where You Stand</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's what I'd suggest: before you spend another dollar on marketing, find out what AI actually says about your business.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Ask ChatGPT: "Who's the best [your service] in [your city]?"
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Ask Google's AI Overview the same question.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Try Perplexity. Try Claude.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              If you're not being recommended-or worse, if your competitor is-you now know why your phone stopped ringing.
            </p>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Want to Know <span className="font-normal text-white">Exactly Where You're Invisible?</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We'll run a complete AI visibility check for your business. You'll see exactly where you're being recommended, where you're invisible, and what your competitors are doing that you're not.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
              >
                Check Your AI Visibility - Free Assessment
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
                  q: "Why is my website getting traffic but no phone calls?",
                  a: "Nearly 60% of searches now end without a click because AI answers questions directly. High-intent buyers-the people ready to hire today-get recommendations from AI and call that business without ever visiting a website. Your traffic may be stable, but you're getting researchers instead of buyers."
                },
                {
                  q: "How do I know if AI is recommending my competitors instead of me?",
                  a: "Test it yourself: Ask ChatGPT, Google AI Overview, and Perplexity \"Who's the best [your service] in [your city]?\" Note which businesses appear. If your competitor shows up consistently and you don't, AI is sending them your potential customers."
                },
                {
                  q: "Does ChatGPT use my Google Business Profile?",
                  a: "No. ChatGPT uses Bing's web index, not Google's data. This is why many businesses with strong Google presence are invisible to ChatGPT. You need to claim Bing Places and ensure your information is consistent across platforms AI actually reads."
                },
                {
                  q: "What changed about how people find local businesses?",
                  a: "AI assistants now answer questions directly instead of showing a list of websites. When someone asks for a recommendation, AI gives one or two answers-not ten. If you're not the recommended business, you're invisible to these searchers who never click through to compare options."
                },
                {
                  q: "Can I still get leads if I'm not showing up in AI recommendations?",
                  a: "Yes, but you're competing for a shrinking pool. Only about 40% of searches result in website clicks anymore. Businesses that show up in AI recommendations get access to the other 60%-plus they still benefit from traditional search visibility."
                },
                {
                  q: "How long does it take to start showing up in AI recommendations?",
                  a: "Results vary, but businesses that implement comprehensive AI visibility strategies typically see changes within 90-120 days. The key is building consistent authority signals across multiple platforms simultaneously, not just optimizing one channel."
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
                We help local service businesses become the answer when customers ask AI for recommendations. Our clients see results like 5,700+ monthly clicks from organic search and dominant positions across entire topic categories.
              </p>
              <p>
                <a href="/case-studies" className="inline-flex items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition-colors group">
                  See our case studies
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
