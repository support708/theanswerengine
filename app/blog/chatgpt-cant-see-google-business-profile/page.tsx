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
                "name": "ChatGPT Can't See Your Google Business Profile",
                "item": "https://theanswerengine.ai/blog/chatgpt-cant-see-google-business-profile"
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
            "headline": "ChatGPT Can't See Your Google Business Profile - Here's What It CAN See",
            "description": "Your Google Business Profile is invisible to ChatGPT. Learn what information sources ChatGPT can access about your business.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/chatgpt-gbp-featured.png",
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
            "datePublished": "2025-12-17",
            "dateModified": "2025-12-17",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://theanswerengine.ai/blog/chatgpt-cant-see-google-business-profile"
            },
            "keywords": "ChatGPT Google Business Profile, AI visibility, ChatGPT data sources, Bing Places, Answer Engine Optimization, AEO, local business AI",
            "articleSection": "Answer Engine Optimization",
            "wordCount": 3600,
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
                "name": "Why can't ChatGPT see my Google Business Profile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ChatGPT cannot access Google Business Profile data for two reasons: First, ChatGPT uses Bing's search index (not Google's) due to Microsoft's partnership with OpenAI. Second, Google Business Profile content is loaded via JavaScript, which AI crawlers cannot execute."
                }
              },
              {
                "@type": "Question",
                "name": "What information sources can ChatGPT see about my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ChatGPT can see your website content, Bing Places listing, Yelp profile, Facebook business page, BBB listing, LinkedIn company page, and other platforms that render content as static HTML. Any information on these platforms can influence ChatGPT's recommendations about your business."
                }
              },
              {
                "@type": "Question",
                "name": "Does my Google Business Profile help with any AI platforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, your Google Business Profile directly influences Google AI Overviews, which appear at the top of Google search results. Google's AI can access all GBP data including reviews, photos, and business information. However, it doesn't help with ChatGPT, Claude, or Perplexity."
                }
              },
              {
                "@type": "Question",
                "name": "How do I optimize my business for ChatGPT visibility?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Focus on sources ChatGPT can access: claim and optimize your Bing Places listing, ensure your website has comprehensive business information, build your Yelp and Facebook presence, add proper schema markup to your website, and create content that directly answers customer questions."
                }
              },
              {
                "@type": "Question",
                "name": "Should I stop focusing on Google Business Profile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Google Business Profile remains critical for Google Search rankings, Google Maps visibility, and Google AI Overviews. The strategy is to optimize for both ecosystems: Google Business Profile for Google's AI and search, plus Bing Places and your website for ChatGPT."
                }
              },
              {
                "@type": "Question",
                "name": "Which is more important: Google Business Profile or Bing Places?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both are important for different reasons. Google Business Profile is essential for Google's 90%+ search market share and Google AI Overviews. Bing Places is essential for ChatGPT's 200+ million weekly users. For complete AI visibility, you need both optimized."
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
            "name": "ChatGPT Can't See Your Google Business Profile | The Answer Engine",
            "description": "Your Google Business Profile is invisible to ChatGPT. Learn what information sources ChatGPT can access about your business.",
            "url": "https://theanswerengine.ai/blog/chatgpt-cant-see-google-business-profile",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "ChatGPT Data Sources"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/chatgpt-gbp-featured.png"
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
            <span className="mx-2 text-gray-700">&gt;</span>
            <a href="/blog" className="hover:text-orange-400 transition-colors">Blog</a>
            <span className="mx-2 text-gray-700">&gt;</span>
            <span className="text-gray-400">ChatGPT Can't See Your Google Business Profile</span>
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
              ChatGPT Can't See Your <span className="font-normal text-white">Google Business Profile</span> - Here's What It CAN See
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              Your Google Business Profile is invisible to ChatGPT. Learn what information sources ChatGPT can access about your business.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
              <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full" />
              <span>Published December 17, 2025</span>
              <span className="text-gray-700">•</span>
              <span>By The Answer Engine Team</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              You've spent hours perfecting your Google Business Profile. Great photos, detailed services, dozens of 5-star reviews. But when someone asks ChatGPT for a business recommendation in your industry, <strong className="text-white font-medium">none of that information exists to ChatGPT.</strong>
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Why ChatGPT Is <span className="font-normal text-white">Completely Blind</span> to Your Google Business Profile
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              There are two reasons ChatGPT cannot see your Google Business Profile:
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Reason 1: ChatGPT Uses Bing, Not Google
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Microsoft invested $13 billion in OpenAI. As part of that partnership, ChatGPT's web browsing feature uses Bing's search index-not Google's. When ChatGPT needs current information about businesses, it pulls from Bing.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Your Google Business Profile doesn't exist in Bing's index. It's a Google product that Google keeps within its own ecosystem.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Reason 2: The JavaScript Barrier
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Even if ChatGPT tried to access Google Business Profile directly, it couldn't. Google Business Profiles load dynamically via JavaScript. AI crawlers see only raw HTML before JavaScript executes-which means they see an empty page where your business information should be.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              What ChatGPT <span className="font-normal text-white">CAN See</span> About Your Business
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's the complete list of information sources ChatGPT can access:
            </p>

            {/* Platform Visibility Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 text-white font-medium">Source</th>
                    <th className="py-4 px-4 text-white font-medium">ChatGPT Can See?</th>
                    <th className="py-4 px-4 text-white font-medium">What It Accesses</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Google Business Profile</td>
                    <td className="py-4 px-4 text-red-400">No</td>
                    <td className="py-4 px-4">Nothing - completely invisible</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Your Website</td>
                    <td className="py-4 px-4 text-green-400">Yes</td>
                    <td className="py-4 px-4">All text content, services, about page</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Bing Places</td>
                    <td className="py-4 px-4 text-green-400">Yes</td>
                    <td className="py-4 px-4">Business info, categories, description</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Yelp</td>
                    <td className="py-4 px-4 text-green-400">Yes</td>
                    <td className="py-4 px-4">Reviews, ratings, business details</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Facebook Business</td>
                    <td className="py-4 px-4 text-green-400">Partial</td>
                    <td className="py-4 px-4">Public page info, some reviews</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">BBB</td>
                    <td className="py-4 px-4 text-green-400">Yes</td>
                    <td className="py-4 px-4">Accreditation, rating, complaints</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">LinkedIn Company Page</td>
                    <td className="py-4 px-4 text-green-400">Yes</td>
                    <td className="py-4 px-4">Company overview, size, industry</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Industry Directories</td>
                    <td className="py-4 px-4 text-green-400">Varies</td>
                    <td className="py-4 px-4">Depends on how content is rendered</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              How to Optimize <span className="font-normal text-white">Each Source</span> for ChatGPT
            </h2>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              1. Your Website (Most Important)
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Your website is the #1 source of information ChatGPT uses about your business. Optimize it for AI visibility:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Create dedicated service pages for each service you offer",
                "Include complete business information (NAP) on every page",
                "Add a detailed About page with credentials and experience",
                "Display customer testimonials as plain text (not widgets)",
                "Answer common customer questions directly in your content",
                "Add LocalBusiness and Service schema markup"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              2. Bing Places (Critical for ChatGPT)
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Since ChatGPT uses Bing's index, your Bing Places listing directly influences ChatGPT recommendations:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Claim your listing at bingplaces.com",
                "Complete every field in your profile",
                "Write a detailed business description",
                "Add all relevant business categories",
                "Upload high-quality photos",
                "Keep information consistent with your website"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              3. Yelp
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              ChatGPT frequently cites Yelp for local business information:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Claim and verify your Yelp business page",
                "Respond to all reviews (positive and negative)",
                "Add photos and keep hours updated",
                "Encourage satisfied customers to leave Yelp reviews"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              4. Facebook Business Page
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Facebook business pages provide ChatGPT with additional signals:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Complete your Facebook business page information",
                "Enable and encourage Facebook reviews",
                "Post regularly to show you're an active business",
                "Include service descriptions and business hours"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              5. Better Business Bureau (BBB)
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              BBB accreditation provides strong credibility signals:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Consider BBB accreditation for your business",
                "Respond to any complaints professionally",
                "Keep your BBB profile information current",
                "BBB ratings are often cited by AI as trust signals"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">Complete Action Plan</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's your priority order for maximizing ChatGPT visibility:
            </p>
            <ol className="space-y-3 mb-8 text-gray-300 text-lg list-decimal list-inside">
              <li className="font-light leading-relaxed"><strong className="text-white font-medium">Website optimization</strong> - Add comprehensive business info and schema markup</li>
              <li className="font-light leading-relaxed"><strong className="text-white font-medium">Claim Bing Places</strong> - Complete your profile thoroughly</li>
              <li className="font-light leading-relaxed"><strong className="text-white font-medium">Optimize Yelp</strong> - Build reviews and keep information current</li>
              <li className="font-light leading-relaxed"><strong className="text-white font-medium">Update Facebook</strong> - Complete business page with reviews enabled</li>
              <li className="font-light leading-relaxed"><strong className="text-white font-medium">Consider BBB</strong> - Accreditation adds credibility signals</li>
              <li className="font-light leading-relaxed"><strong className="text-white font-medium">Maintain consistency</strong> - Same NAP across all platforms</li>
            </ol>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Don't Forget <span className="font-normal text-white">Google Business Profile</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              While ChatGPT can't see your Google Business Profile, it's still essential for:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Google Search rankings (still 90%+ of search traffic)",
                "Google Maps visibility and local pack results",
                "Google AI Overviews (Google's AI CAN see your GBP)",
                "Traditional local SEO performance",
                "Customer trust and conversion (people check Google reviews)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">The winning strategy:</strong> Optimize Google Business Profile for Google's ecosystem AND the platforms ChatGPT can see. You need visibility in both AI ecosystems to capture the full market.
            </p>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                See What AI <span className="font-normal text-white">Actually Knows</span> About Your Business
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We'll test your business across ChatGPT, Claude, Perplexity, and Google AI Overviews-showing you exactly what each platform sees and recommends when customers ask about your industry.
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
                  q: "Why can't ChatGPT see my Google Business Profile?",
                  a: "ChatGPT cannot access Google Business Profile data for two reasons: First, ChatGPT uses Bing's search index (not Google's) due to Microsoft's partnership with OpenAI. Second, Google Business Profile content is loaded via JavaScript, which AI crawlers cannot execute."
                },
                {
                  q: "What information sources can ChatGPT see about my business?",
                  a: "ChatGPT can see your website content, Bing Places listing, Yelp profile, Facebook business page, BBB listing, LinkedIn company page, and other platforms that render content as static HTML. Any information on these platforms can influence ChatGPT's recommendations about your business."
                },
                {
                  q: "Does my Google Business Profile help with any AI platforms?",
                  a: "Yes, your Google Business Profile directly influences Google AI Overviews, which appear at the top of Google search results. Google's AI can access all GBP data including reviews, photos, and business information. However, it doesn't help with ChatGPT, Claude, or Perplexity."
                },
                {
                  q: "How do I optimize my business for ChatGPT visibility?",
                  a: "Focus on sources ChatGPT can access: claim and optimize your Bing Places listing, ensure your website has comprehensive business information, build your Yelp and Facebook presence, add proper schema markup to your website, and create content that directly answers customer questions."
                },
                {
                  q: "Should I stop focusing on Google Business Profile?",
                  a: "No. Google Business Profile remains critical for Google Search rankings, Google Maps visibility, and Google AI Overviews. The strategy is to optimize for both ecosystems: Google Business Profile for Google's AI and search, plus Bing Places and your website for ChatGPT."
                },
                {
                  q: "Which is more important: Google Business Profile or Bing Places?",
                  a: "Both are important for different reasons. Google Business Profile is essential for Google's 90%+ search market share and Google AI Overviews. Bing Places is essential for ChatGPT's 200+ million weekly users. For complete AI visibility, you need both optimized."
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
