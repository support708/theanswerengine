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
                "name": "Why Bing Places Matters More Than You Think",
                "item": "https://theanswerengine.ai/blog/bing-places-chatgpt-connection"
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
            "headline": "Why Bing Places Matters More Than You Think (The ChatGPT Connection)",
            "description": "ChatGPT pulls local business data from Bing, not Google. Learn why Bing Places is the hidden key to AI visibility.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/bing-places-chatgpt-featured.png",
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
              "@id": "https://theanswerengine.ai/blog/bing-places-chatgpt-connection"
            },
            "keywords": "Bing Places, ChatGPT local business, Microsoft OpenAI, AI visibility, Answer Engine Optimization, AEO, local business listings",
            "articleSection": "Answer Engine Optimization",
            "wordCount": 3800,
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
                "name": "Does ChatGPT use Bing or Google for local business information?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ChatGPT uses Bing, not Google, for local business information. Microsoft invested $13 billion in OpenAI, and ChatGPT's web browsing feature pulls data from Bing's index. This means your Google Business Profile optimization doesn't directly help your ChatGPT visibility."
                }
              },
              {
                "@type": "Question",
                "name": "How do I claim my Bing Places listing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Visit bingplaces.com, sign in with a Microsoft account, search for your business or add it manually, verify ownership via phone, email, or postcard, then complete your profile with all business details. The process typically takes 1-2 weeks for verification."
                }
              },
              {
                "@type": "Question",
                "name": "Will optimizing Bing Places help me appear in ChatGPT answers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, optimizing your Bing Places listing directly improves your chances of being cited by ChatGPT. Since ChatGPT pulls local business data from Bing's index, a complete, accurate, and well-optimized Bing Places profile increases your visibility when users ask ChatGPT for local business recommendations."
                }
              },
              {
                "@type": "Question",
                "name": "Should I still maintain my Google Business Profile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Google Business Profile remains critical for Google Search, Google Maps, and Google AI Overviews. The strategy is to optimize both: Google Business Profile for Google's ecosystem, and Bing Places for ChatGPT and Bing-powered AI platforms."
                }
              },
              {
                "@type": "Question",
                "name": "What information should I include in my Bing Places listing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Include complete business information: name, address, phone, website, hours, categories, services offered, service areas, photos, and a detailed business description highlighting your expertise and specialties. The more complete your listing, the better ChatGPT can understand and recommend your business."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take for Bing Places changes to affect ChatGPT?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Changes to your Bing Places listing typically take 2-4 weeks to be fully indexed by Bing and reflected in ChatGPT's knowledge. Major updates or new listings may take longer. Consistency between your website, Bing Places, and other directories speeds up this process."
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
            "name": "Why Bing Places Matters More Than You Think | The Answer Engine",
            "description": "ChatGPT pulls local business data from Bing, not Google. Learn why Bing Places is the hidden key to AI visibility.",
            "url": "https://theanswerengine.ai/blog/bing-places-chatgpt-connection",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "Bing Places for Business"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/bing-places-chatgpt-featured.png"
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
            <span className="text-gray-400">Why Bing Places Matters More Than You Think</span>
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
              Why <span className="font-normal text-white">Bing Places</span> Matters More Than You Think (The ChatGPT Connection)
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              ChatGPT pulls local business data from Bing, not Google. Learn why Bing Places is the hidden key to AI visibility.
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
              Most businesses obsess over their Google Business Profile while completely ignoring Bing Places. That made sense in 2020. In 2025, it's a critical mistake-because <strong className="text-white font-medium">ChatGPT gets its local business data from Bing, not Google.</strong>
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">Microsoft-OpenAI Connection:</span> Why This Matters
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              In January 2023, Microsoft invested $13 billion in OpenAI, the company behind ChatGPT. This wasn't just a financial investment-it was a strategic partnership that integrated Bing directly into ChatGPT.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              When ChatGPT needs real-time information, including local business data, it uses Bing's search index. This means:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Your Google Business Profile optimization doesn't directly help ChatGPT visibility",
                "Bing Places information flows directly into ChatGPT's recommendations",
                "Microsoft Copilot (Bing Chat) uses the same data source",
                "Businesses with strong Bing presence get cited more often by AI"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Where Each <span className="font-normal text-white">AI Platform</span> Gets Its Data
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Different AI platforms pull data from different sources. Understanding this is crucial for AI visibility:
            </p>

            {/* Data Source Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 text-white font-medium">AI Platform</th>
                    <th className="py-4 px-4 text-white font-medium">Primary Data Source</th>
                    <th className="py-4 px-4 text-white font-medium">Key Listing</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">ChatGPT</td>
                    <td className="py-4 px-4">Bing Index</td>
                    <td className="py-4 px-4 text-orange-400">Bing Places</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Microsoft Copilot</td>
                    <td className="py-4 px-4">Bing Index</td>
                    <td className="py-4 px-4 text-orange-400">Bing Places</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Google AI Overviews</td>
                    <td className="py-4 px-4">Google Index</td>
                    <td className="py-4 px-4 text-blue-400">Google Business Profile</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Perplexity</td>
                    <td className="py-4 px-4">Multiple Sources</td>
                    <td className="py-4 px-4 text-purple-400">Website + Both Listings</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Claude</td>
                    <td className="py-4 px-4">Web Crawling</td>
                    <td className="py-4 px-4 text-purple-400">Website Content</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Why <span className="font-normal text-white">Bing Places</span> Matters in 2025
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Bing's market share in traditional search is small (around 3-4%). That's why most businesses ignored it. But AI changes everything:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "ChatGPT has over 200 million weekly active users",
                "Microsoft Copilot is integrated into Windows, Office, and Edge",
                "Many of these users are asking for local business recommendations",
                "Bing Places data directly influences these AI recommendations"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">The math is simple:</strong> If you're not optimized for Bing, you're invisible to ChatGPT's 200+ million users when they ask for local business recommendations.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              How to <span className="font-normal text-white">Claim and Optimize</span> Your Bing Places Listing
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's the complete 7-step process for claiming and optimizing your Bing Places listing:
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 1: Go to Bing Places for Business
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Visit <strong className="text-white font-medium">bingplaces.com</strong> and click "Get Started" or "Claim Your Business."
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 2: Sign In with Microsoft Account
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              You'll need a Microsoft account (Outlook, Hotmail, or Microsoft 365). If you don't have one, create a free account.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 3: Search for Your Business
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Search for your business name. If it exists, claim it. If not, you'll need to add it manually.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 4: Verify Your Business
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Choose your verification method:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Phone verification (fastest - instant or within minutes)",
                "Email verification (1-2 days)",
                "Postcard verification (1-2 weeks)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 5: Complete Your Business Information
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Fill in every field completely:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Business name (exactly as it appears on your signage)",
                "Complete address with suite/unit numbers",
                "Phone number (local number preferred)",
                "Website URL",
                "Business hours (including special hours)",
                "Business categories (choose all that apply)",
                "Services offered",
                "Service areas",
                "Payment methods accepted"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 6: Add Photos
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Upload high-quality photos:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Logo (square format, high resolution)",
                "Cover photo (storefront or team)",
                "Interior photos",
                "Photos of your work/products",
                "Team photos"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 7: Write a Detailed Business Description
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              This is crucial for AI visibility. Your description should include:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "What you do and who you serve",
                "Your specialties and expertise",
                "Years in business",
                "Service area coverage",
                "What makes you different from competitors",
                "Credentials, certifications, or awards"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Bing Places <span className="font-normal text-white">Optimization Tips</span> for AI Visibility
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Beyond basic setup, here's how to optimize for maximum AI citation potential:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Use natural language in your description - AI understands conversational text better",
                "Include specific services you offer, not just categories",
                "Mention your service areas by name (cities, neighborhoods)",
                "Keep information consistent with your website and other listings",
                "Update regularly - fresh information signals an active business",
                "Respond to any reviews you receive through Bing"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Don't Abandon <span className="font-normal text-white">Google Business Profile</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              While Bing Places is crucial for ChatGPT, Google Business Profile remains essential for:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Google Search visibility (still 90%+ of search traffic)",
                "Google Maps and local pack rankings",
                "Google AI Overviews (Google's AI can see GBP data)",
                "Traditional SEO and local search"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">The winning strategy:</strong> Optimize both platforms. Google Business Profile for Google's ecosystem, Bing Places for ChatGPT and Microsoft's AI ecosystem.
            </p>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Get Visible to <span className="font-normal text-white">ChatGPT and Google AI</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We'll audit your presence across all AI data sources-Google Business Profile, Bing Places, your website, and more-and show you exactly how to get cited by every major AI platform.
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
                  q: "Does ChatGPT use Bing or Google for local business information?",
                  a: "ChatGPT uses Bing, not Google, for local business information. Microsoft invested $13 billion in OpenAI, and ChatGPT's web browsing feature pulls data from Bing's index. This means your Google Business Profile optimization doesn't directly help your ChatGPT visibility."
                },
                {
                  q: "How do I claim my Bing Places listing?",
                  a: "Visit bingplaces.com, sign in with a Microsoft account, search for your business or add it manually, verify ownership via phone, email, or postcard, then complete your profile with all business details. The process typically takes 1-2 weeks for verification."
                },
                {
                  q: "Will optimizing Bing Places help me appear in ChatGPT answers?",
                  a: "Yes, optimizing your Bing Places listing directly improves your chances of being cited by ChatGPT. Since ChatGPT pulls local business data from Bing's index, a complete, accurate, and well-optimized Bing Places profile increases your visibility when users ask ChatGPT for local business recommendations."
                },
                {
                  q: "Should I still maintain my Google Business Profile?",
                  a: "Absolutely. Google Business Profile remains critical for Google Search, Google Maps, and Google AI Overviews. The strategy is to optimize both: Google Business Profile for Google's ecosystem, and Bing Places for ChatGPT and Bing-powered AI platforms."
                },
                {
                  q: "What information should I include in my Bing Places listing?",
                  a: "Include complete business information: name, address, phone, website, hours, categories, services offered, service areas, photos, and a detailed business description highlighting your expertise and specialties. The more complete your listing, the better ChatGPT can understand and recommend your business."
                },
                {
                  q: "How long does it take for Bing Places changes to affect ChatGPT?",
                  a: "Changes to your Bing Places listing typically take 2-4 weeks to be fully indexed by Bing and reflected in ChatGPT's knowledge. Major updates or new listings may take longer. Consistency between your website, Bing Places, and other directories speeds up this process."
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
