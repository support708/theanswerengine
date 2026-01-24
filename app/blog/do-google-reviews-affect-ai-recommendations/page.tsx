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
                "name": "Do Google Reviews Affect AI Recommendations?",
                "item": "https://theanswerengine.ai/blog/do-google-reviews-affect-ai-recommendations"
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
            "headline": "Do Google Reviews Affect AI Recommendations? (The Surprising Truth)",
            "description": "ChatGPT can't read your Google reviews. Learn which reviews AI platforms actually see and how to fix your visibility.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/google-reviews-ai-featured.png",
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
              "@id": "https://theanswerengine.ai/blog/do-google-reviews-affect-ai-recommendations"
            },
            "keywords": "Google reviews AI, ChatGPT reviews, AI recommendations, review visibility, Answer Engine Optimization, AEO, local business reviews",
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
                "name": "Can ChatGPT read my Google reviews?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, ChatGPT cannot read your Google reviews. Google reviews are loaded dynamically via JavaScript, which ChatGPT's web crawlers cannot execute. This means even if you have hundreds of 5-star Google reviews, ChatGPT has no way to see or reference them when making recommendations."
                }
              },
              {
                "@type": "Question",
                "name": "Which review platforms can AI assistants actually see?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI platforms like ChatGPT can read reviews from Yelp, Facebook, BBB (Better Business Bureau), and reviews displayed as plain text on your website. These platforms render their content in ways that AI crawlers can access, unlike Google's JavaScript-dependent review display."
                }
              },
              {
                "@type": "Question",
                "name": "Should I still collect Google reviews if AI can't see them?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely yes. Google reviews remain critical for Google Search rankings, Google Maps visibility, and Google AI Overviews. They influence whether you appear in local pack results and how prominently you're featured. The key is to diversify your review strategy across multiple platforms."
                }
              },
              {
                "@type": "Question",
                "name": "How can I make my reviews visible to ChatGPT?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Display customer testimonials as plain text on your website (not embedded widgets), add Review schema markup to help AI understand your review data, collect reviews on platforms ChatGPT can access (Yelp, Facebook, BBB), and include specific customer outcomes and quotes in your content."
                }
              },
              {
                "@type": "Question",
                "name": "Do Google reviews affect Google AI Overviews?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Google AI Overviews can access Google reviews because they're part of Google's own ecosystem. Your Google reviews influence whether Google's AI recommends your business. However, this doesn't help with ChatGPT, Claude, or Perplexity, which cannot access Google review data."
                }
              },
              {
                "@type": "Question",
                "name": "What's the best review strategy for AI visibility in 2025?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Diversify across platforms: prioritize Google reviews for Google visibility, build Yelp and Facebook reviews for ChatGPT visibility, display testimonials on your website with proper schema markup, and include specific, quotable customer outcomes in your content that AI can reference."
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
            "name": "Do Google Reviews Affect AI Recommendations? | The Answer Engine",
            "description": "ChatGPT can't read your Google reviews. Learn which reviews AI platforms actually see and how to fix your visibility.",
            "url": "https://theanswerengine.ai/blog/do-google-reviews-affect-ai-recommendations",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "AI Review Visibility"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/google-reviews-ai-featured.png"
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
            <span className="text-gray-400">Do Google Reviews Affect AI Recommendations?</span>
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
              Do Google Reviews Affect <span className="font-normal text-white">AI Recommendations?</span> (The Surprising Truth)
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              ChatGPT can't read your Google reviews. Learn which reviews AI platforms actually see and how to fix your visibility.
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
              You've spent years building up your Google reviews. Hundreds of happy customers, a stellar 4.8-star rating, glowing testimonials about your service. But here's the uncomfortable truth: <strong className="text-white font-medium">ChatGPT can't see any of it.</strong>
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">JavaScript Barrier:</span> Why ChatGPT Is Blind to Google Reviews
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Google reviews are loaded dynamically using JavaScript. When you visit a Google Business Profile, your browser executes JavaScript code that fetches and displays the reviews. This works great for humans using web browsers.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              But AI crawlers don't execute JavaScript. They see only the raw HTML of a page before any dynamic content loads. This means:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "ChatGPT cannot read your Google reviews",
                "Claude cannot access your Google review content",
                "Perplexity cannot see your Google review ratings",
                "Your hundreds of 5-star reviews are invisible to these platforms"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">The impact:</strong> When someone asks ChatGPT "Who's the best plumber in Austin?", your 500 Google reviews don't factor into the answer at all.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Which <span className="font-normal text-white">Review Platforms</span> Can AI Actually See?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Not all review platforms have this JavaScript problem. Here's what AI platforms can and cannot access:
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 text-white font-medium">Platform</th>
                    <th className="py-4 px-4 text-white font-medium">ChatGPT Can Read?</th>
                    <th className="py-4 px-4 text-white font-medium">Why?</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Google Reviews</td>
                    <td className="py-4 px-4 text-red-400">No</td>
                    <td className="py-4 px-4">JavaScript-loaded content</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Yelp</td>
                    <td className="py-4 px-4 text-green-400">Yes</td>
                    <td className="py-4 px-4">Server-rendered HTML</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Facebook Reviews</td>
                    <td className="py-4 px-4 text-green-400">Partial</td>
                    <td className="py-4 px-4">Some content accessible</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">BBB</td>
                    <td className="py-4 px-4 text-green-400">Yes</td>
                    <td className="py-4 px-4">Static HTML content</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Website Testimonials</td>
                    <td className="py-4 px-4 text-green-400">Yes</td>
                    <td className="py-4 px-4">Plain text on your site</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Embedded Review Widgets</td>
                    <td className="py-4 px-4 text-red-400">No</td>
                    <td className="py-4 px-4">JavaScript-loaded iframes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              How to Make Your <span className="font-normal text-white">Reviews Visible</span> to AI Platforms
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              The good news: you can fix this. Here's exactly how to make your reviews visible to ChatGPT and other AI platforms:
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              1. Display Reviews as Plain Text on Your Website
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Don't use embedded Google review widgets-they load via JavaScript and are invisible to AI. Instead, manually add your best reviews as plain text on your website:
            </p>
            <blockquote className="border-l-4 border-orange-500/50 pl-6 py-4 my-8 bg-white/[0.02] rounded-r-lg">
              <p className="text-gray-400 text-lg italic leading-relaxed font-light">
                "ABC Plumbing fixed our emergency leak at 2am. Their technician arrived in 30 minutes and had the problem solved within an hour. Best plumber we've ever used." - Sarah M., Austin TX
              </p>
            </blockquote>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI can read this. AI cannot read an embedded widget showing the same review.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              2. Add Review Schema Markup
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Schema markup helps AI understand that the text on your page represents customer reviews. Add AggregateRating and Review schema to your testimonials:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "AggregateRating schema shows your overall rating (4.8 out of 5)",
                "Review schema marks individual testimonials as reviews",
                "This structured data helps AI cite your reviews accurately"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              3. Diversify Your Review Platforms
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Don't put all your eggs in the Google basket. Actively collect reviews on platforms AI can read:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Yelp - ChatGPT can read Yelp reviews and frequently cites them",
                "Facebook - Build your Facebook review presence",
                "BBB - Get accredited and collect reviews there",
                "Industry-specific platforms - Houzz for contractors, Healthgrades for medical"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              4. Include Specific Customer Outcomes in Your Content
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI loves specific, quotable facts. Include customer outcomes throughout your website content:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "\"We've helped over 2,000 Austin homeowners with emergency plumbing since 2015\"",
                "\"Our customers report an average 30% reduction in energy bills after our HVAC upgrades\"",
                "\"98% of our roofing clients would recommend us to friends and family\""
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Should You Still <span className="font-normal text-white">Collect Google Reviews?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Absolutely yes.</strong> Google reviews remain critical for several reasons:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Google Search rankings - Reviews directly impact local pack rankings",
                "Google Maps visibility - More reviews = better Maps placement",
                "Google AI Overviews - Google's own AI CAN see Google reviews",
                "Consumer trust - Many customers still check Google reviews before buying",
                "Conversion rates - Star ratings in search results increase click-through rates"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              The solution isn't to abandon Google reviews-it's to diversify. Build your Google review presence for Google visibility, and simultaneously build your Yelp/Facebook/website testimonial presence for AI visibility.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">Dual Strategy:</span> Reviews for Both Google and AI
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's the review strategy that works in 2025:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Continue prioritizing Google reviews for Google Search and Maps",
                "Ask happy customers to also leave reviews on Yelp and Facebook",
                "Feature your best reviews as plain text on your website",
                "Add proper schema markup to all testimonials",
                "Include specific customer outcomes in your service pages",
                "Consider BBB accreditation for additional AI-visible credibility"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Make Your Reviews <span className="font-normal text-white">Visible to AI</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We'll audit your current review visibility across AI platforms and show you exactly what ChatGPT, Claude, and Perplexity can (and can't) see about your business.
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
                  q: "Can ChatGPT read my Google reviews?",
                  a: "No, ChatGPT cannot read your Google reviews. Google reviews are loaded dynamically via JavaScript, which ChatGPT's web crawlers cannot execute. This means even if you have hundreds of 5-star Google reviews, ChatGPT has no way to see or reference them when making recommendations."
                },
                {
                  q: "Which review platforms can AI assistants actually see?",
                  a: "AI platforms like ChatGPT can read reviews from Yelp, Facebook, BBB (Better Business Bureau), and reviews displayed as plain text on your website. These platforms render their content in ways that AI crawlers can access, unlike Google's JavaScript-dependent review display."
                },
                {
                  q: "Should I still collect Google reviews if AI can't see them?",
                  a: "Absolutely yes. Google reviews remain critical for Google Search rankings, Google Maps visibility, and Google AI Overviews. They influence whether you appear in local pack results and how prominently you're featured. The key is to diversify your review strategy across multiple platforms."
                },
                {
                  q: "How can I make my reviews visible to ChatGPT?",
                  a: "Display customer testimonials as plain text on your website (not embedded widgets), add Review schema markup to help AI understand your review data, collect reviews on platforms ChatGPT can access (Yelp, Facebook, BBB), and include specific customer outcomes and quotes in your content."
                },
                {
                  q: "Do Google reviews affect Google AI Overviews?",
                  a: "Yes, Google AI Overviews can access Google reviews because they're part of Google's own ecosystem. Your Google reviews influence whether Google's AI recommends your business. However, this doesn't help with ChatGPT, Claude, or Perplexity, which cannot access Google review data."
                },
                {
                  q: "What's the best review strategy for AI visibility in 2025?",
                  a: "Diversify across platforms: prioritize Google reviews for Google visibility, build Yelp and Facebook reviews for ChatGPT visibility, display testimonials on your website with proper schema markup, and include specific, quotable customer outcomes in your content that AI can reference."
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
