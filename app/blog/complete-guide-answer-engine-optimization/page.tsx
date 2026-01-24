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
                "name": "The Complete Guide to Answer Engine Optimization",
                "item": "https://theanswerengine.ai/blog/complete-guide-answer-engine-optimization"
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
            "headline": "The Complete Guide to Answer Engine Optimization for Local Service Businesses",
            "description": "Learn how Answer Engine Optimization gets ChatGPT, Claude, Google AI to cite your local service business instead of competitors.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/complete-guide-aeo.png",
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
            "datePublished": "2025-11-11",
            "dateModified": "2025-11-11",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://theanswerengine.ai/blog/complete-guide-answer-engine-optimization"
            },
            "keywords": "Answer Engine Optimization, AEO guide, local service business AEO, ChatGPT optimization, Google AI Overviews, Claude optimization, AI citations for local business",
            "articleSection": "Answer Engine Optimization",
            "wordCount": 6000,
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
                "name": "What is Answer Engine Optimization (AEO)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Answer Engine Optimization (AEO) is the practice of optimizing your business's digital presence to be cited and recommended by AI platforms like ChatGPT, Google AI Overviews, Claude, and Perplexity. Unlike traditional SEO which focuses on ranking in search results, AEO focuses on becoming the source AI platforms cite when users ask questions. AEO involves structured data implementation, entity consistency, expertise documentation, and question-answer content architecture."
                }
              },
              {
                "@type": "Question",
                "name": "Why don't Google rankings matter as much for local businesses anymore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google rankings have diminished importance because AI Overviews now answer most queries directly above search results, preventing users from clicking through to websites. Additionally, millions of searches have moved to ChatGPT and other AI platforms entirely. Even a #1 Google ranking can result in zero clicks if AI provides the answer first. The businesses that get cited in AI answers capture the traffic, regardless of their traditional ranking position."
                }
              },
              {
                "@type": "Question",
                "name": "Why are most local businesses invisible to AI platforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most local businesses are invisible to AI because AI platforms use weighted authority assessment that requires: consistent business information across 47+ platforms (most businesses have inconsistencies), proper schema markup (most businesses have none), comprehensive content answering real customer questions (most have marketing copy), and documented expertise AI can verify (most have unverifiable claims). Without these elements, AI has no basis to recommend a business."
                }
              },
              {
                "@type": "Question",
                "name": "Why did website traffic drop for many businesses in 2025?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Website traffic dropped in 2025 because approximately 45% of Google searches now trigger AI Overviews that answer questions directly without requiring clicks. Combined with the growth of ChatGPT and other AI platforms that don't send traffic to websites at all, traditional web traffic has declined significantly. Businesses that relied on SEO traffic are seeing major drops unless they've optimized for AI citations."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between SEO and AEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO (Search Engine Optimization) focuses on ranking websites in traditional search results through keywords, backlinks, and technical optimization. AEO (Answer Engine Optimization) focuses on being cited by AI as the authoritative answer through structured data, entity consistency, and expertise documentation. SEO aims for position #1 in a list. AEO aims to be the answer AI gives. Both can work together, but require different strategies and priorities."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get AI to recommend my local service business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting AI to recommend your business requires a 3-step framework: First, establish entity consistency by ensuring identical NAP (Name, Address, Phone) data across all 47+ platforms where your business appears. Second, implement comprehensive schema markup (LocalBusiness, FAQ, Service, Review schemas) so AI can parse your information. Third, create authority content that answers the specific questions your customers ask AI, demonstrating verifiable expertise rather than marketing claims."
                }
              },
              {
                "@type": "Question",
                "name": "Is Answer Engine Optimization worth it for small local businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AEO is especially valuable for small local businesses because AI recommendations level the playing field. Unlike Google Ads where larger competitors can outspend you, AI recommendations are based on demonstrated expertise and consistent information. A small plumber who documents their expertise well can outperform a large franchise with a bigger marketing budget. Early movers in AEO also have a significant advantage as AI continues to grow as a discovery channel."
                }
              },
              {
                "@type": "Question",
                "name": "How long does Answer Engine Optimization take to show results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With proper implementation, most businesses see initial AI citation improvements within 60-90 days. This is faster than traditional SEO, which often takes 6-12 months for significant ranking improvements. Full AEO implementation across multiple platforms typically takes 3-6 months. The timeline depends on your starting point (how much cleanup is needed), your industry competitiveness, and how consistently you implement the optimizations."
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
            "name": "The Complete Guide to Answer Engine Optimization for Local Service Businesses | The Answer Engine",
            "description": "Learn how Answer Engine Optimization gets ChatGPT, Claude, Google AI to cite your local service business instead of competitors.",
            "url": "https://theanswerengine.ai/blog/complete-guide-answer-engine-optimization",
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
              "url": "https://theanswerengine.ai/complete-guide-aeo.png"
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
            <span className="text-gray-400">The Complete Guide to Answer Engine Optimization</span>
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
              The Complete Guide to <span className="font-normal text-white">Answer Engine Optimization</span> for Local Service Businesses
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              Learn how Answer Engine Optimization gets ChatGPT, Claude, Google AI to cite your local service business instead of competitors.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
              <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full" />
              <span>Published November 11, 2025</span>
              <span className="text-gray-700">&bull;</span>
              <span>By The Answer Engine Team</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">

            {/* Quick Answer Box */}
            <div className="my-8 p-6 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <h3 className="text-lg font-medium text-orange-400 mb-3">Quick Answer: What is Answer Engine Optimization?</h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light mb-0">
                <strong className="text-white font-medium">Answer Engine Optimization (AEO)</strong> is the practice of optimizing your business's digital presence to be cited and recommended by AI platforms like ChatGPT, Google AI Overviews, Claude, and Perplexity. Unlike traditional SEO which focuses on ranking in search results, AEO focuses on becoming the source AI platforms cite when users ask questions.
              </p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              This is the definitive guide to Answer Engine Optimization for local service businesses. Whether you're a plumber, HVAC technician, real estate agent, attorney, or any other local service provider, this guide will show you exactly how to get AI platforms to recommend your business.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Why <span className="font-normal text-white">Google Rankings Don't Matter</span> Anymore
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              For 20+ years, the game was simple: rank higher on Google, get more traffic, win more customers. That game has fundamentally changed.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's what happened:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Google AI Overviews now appear above all traditional search results, answering questions directly",
                "Millions of people now ask ChatGPT instead of Google for business recommendations",
                "Claude, Perplexity, and other AI platforms are capturing growing market share",
                "Even when people do use Google, they often get their answer without clicking anything"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">The result:</strong> A #1 Google ranking can get you zero clicks if AI answers the question first. The businesses that get cited in those AI answers capture the customers everyone else loses.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Why Most <span className="font-normal text-white">Businesses Are Invisible</span> to AI
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms don't rank websites-they assess authority. When someone asks ChatGPT "Who's the best plumber in Austin?", the AI conducts a weighted authority assessment that most businesses fail.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's what AI is looking for:
            </p>

            {/* Weighted Authority Assessment */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 text-white font-medium">Authority Signal</th>
                    <th className="py-4 px-4 text-white font-medium">What AI Needs</th>
                    <th className="py-4 px-4 text-white font-medium">Most Businesses</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-light">Entity Consistency</td>
                    <td className="py-3 px-4 font-light">Identical info across 47+ platforms</td>
                    <td className="py-3 px-4 text-red-400">Multiple inconsistencies</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-light">Structured Data</td>
                    <td className="py-3 px-4 font-light">Complete schema markup</td>
                    <td className="py-3 px-4 text-red-400">None or broken</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-light">Question-Answer Content</td>
                    <td className="py-3 px-4 font-light">Direct answers to real questions</td>
                    <td className="py-3 px-4 text-red-400">Marketing copy only</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-light">Expertise Documentation</td>
                    <td className="py-3 px-4 font-light">Verifiable credentials</td>
                    <td className="py-3 px-4 text-red-400">Unverifiable claims</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 font-light">Local Authority</td>
                    <td className="py-3 px-4 font-light">Area-specific expertise</td>
                    <td className="py-3 px-4 text-yellow-400">Generic content</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              If your business fails on any of these signals, AI lacks the confidence to recommend you. It will recommend a competitor who passes these tests, even if that competitor provides worse actual service.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Why <span className="font-normal text-white">Traffic Dropped</span> in 2025
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              If you've noticed your website traffic declining in 2025, you're not alone. Here's why:
            </p>
            <div className="my-8 p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-2xl font-light text-white mb-2">~45% of Google Searches</p>
              <p className="text-gray-300 font-light">now trigger AI Overviews that answer questions directly, reducing clicks to websites</p>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              This isn't a temporary glitch-it's a permanent shift in how people find information. The businesses that adapt to this new reality will thrive. The businesses that keep doing traditional SEO will watch their traffic continue to decline.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              <span className="font-normal text-white">SEO vs AEO:</span> Understanding the Difference
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              SEO and AEO are related but different disciplines. Here's how they compare:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h4 className="text-xl font-medium text-gray-400 mb-4">Traditional SEO</h4>
                <ul className="space-y-2 text-gray-300 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">-</span>
                    <span>Goal: Rank in search results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">-</span>
                    <span>Focus: Keywords and backlinks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">-</span>
                    <span>Success metric: Position #1-10</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">-</span>
                    <span>User sees: List of options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">-</span>
                    <span>Timeline: 6-12 months typical</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/[0.02] backdrop-blur-xl border border-orange-500/20 rounded-xl p-6">
                <h4 className="text-xl font-medium text-orange-400 mb-4">Answer Engine Optimization</h4>
                <ul className="space-y-2 text-gray-300 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">-</span>
                    <span>Goal: Be cited as the answer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">-</span>
                    <span>Focus: Structure and expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">-</span>
                    <span>Success metric: AI citation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">-</span>
                    <span>User sees: Direct recommendation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">-</span>
                    <span>Timeline: 60-90 days initial</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Important:</strong> SEO isn't dead-it's just no longer sufficient. Think of SEO as table stakes and AEO as competitive advantage. You need both, but AEO determines whether AI platforms recommend you.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              How to Get <span className="font-normal text-white">AI to Recommend You:</span> The 3-Step Framework
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              After optimizing hundreds of local service businesses for AI platforms, we've developed a proven 3-step framework:
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 1: Entity Consistency Foundation
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms verify your business by cross-referencing information across dozens of sources. Your NAP (Name, Address, Phone) data must be identical everywhere:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Google Business Profile",
                "Yelp, Facebook, and major review platforms",
                "Industry-specific directories",
                "Data aggregators (Factual, Acxiom, Infogroup, Localeze)",
                "Your website and any microsites",
                "Social media profiles",
                "Chamber of commerce and local business listings"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Even minor inconsistencies (St. vs Street, Suite vs Ste) compound to reduce AI confidence. This step requires auditing 47+ platforms minimum.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 2: Structured Data Implementation
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Schema markup tells AI exactly what your information means. Essential schemas for local businesses:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "LocalBusiness schema - Your core business information",
                "FAQ schema - Questions you answer (critical for AI citations)",
                "Service schema - Each service you offer with details",
                "Review schema - Your customer reviews aggregated",
                "Article schema - Your expertise content",
                "BreadcrumbList schema - Site navigation structure"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              These schemas must be technically correct, properly nested, and conflict-free. A syntax error anywhere breaks everything.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 3: Authority Content Creation
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Content that gets AI citations is different from marketing content. AI looks for:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Direct answers to questions customers actually ask AI",
                "Specific, verifiable details (not generic marketing claims)",
                "Documented credentials and certifications",
                "Case studies with measurable outcomes",
                "Local expertise demonstrating area-specific knowledge",
                "Educational content that helps users make decisions"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              The goal is creating content that AI can confidently cite as the authoritative answer to customer questions.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Is <span className="font-normal text-white">AEO Worth It</span> for Your Business?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Answer Engine Optimization is particularly valuable for local service businesses because:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "AI recommendations level the playing field against bigger competitors with larger ad budgets",
                "When AI recommends you, customers already trust you before they call",
                "Early movers have significant advantage as AI continues growing",
                "The investment builds a permanent asset, not ongoing ad spend",
                "ROI increases over time as more searches happen on AI platforms"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              The question isn't whether AEO is worth it-it's whether you can afford to let competitors capture this growing channel while you wait.
            </p>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Ready to Get <span className="font-normal text-white">AI Platforms to Recommend Your Business?</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We offer a free AI visibility assessment that shows exactly where your business stands today and what needs to change to start getting recommended by ChatGPT, Google AI Overviews, Claude, and other AI platforms.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
              >
                Get Your Free AI Visibility Assessment
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
                  q: "What is Answer Engine Optimization (AEO)?",
                  a: "Answer Engine Optimization (AEO) is the practice of optimizing your business's digital presence to be cited and recommended by AI platforms like ChatGPT, Google AI Overviews, Claude, and Perplexity. Unlike traditional SEO which focuses on ranking, AEO focuses on becoming the source AI platforms cite when users ask questions."
                },
                {
                  q: "Why don't Google rankings matter as much for local businesses anymore?",
                  a: "Google rankings have diminished importance because AI Overviews now answer most queries directly above search results, and millions of searches have moved to ChatGPT and other AI platforms entirely. Even a #1 ranking can result in zero clicks if AI provides the answer first."
                },
                {
                  q: "Why are most local businesses invisible to AI platforms?",
                  a: "Most local businesses are invisible because AI requires consistent information across 47+ platforms (most businesses have inconsistencies), proper schema markup (most have none), comprehensive question-answer content (most have marketing copy), and verifiable expertise (most have unverifiable claims)."
                },
                {
                  q: "Why did website traffic drop for many businesses in 2025?",
                  a: "Approximately 45% of Google searches now trigger AI Overviews that answer questions directly without requiring clicks. Combined with growth of ChatGPT and other AI platforms, traditional web traffic has declined significantly for businesses not optimized for AI citations."
                },
                {
                  q: "What's the difference between SEO and AEO?",
                  a: "SEO focuses on ranking websites through keywords and backlinks. AEO focuses on being cited by AI through structured data, entity consistency, and expertise documentation. SEO aims for position #1 in a list. AEO aims to be the answer AI gives."
                },
                {
                  q: "How do I get AI to recommend my local service business?",
                  a: "Use the 3-step framework: (1) Establish entity consistency with identical NAP data across 47+ platforms, (2) Implement comprehensive schema markup, and (3) Create authority content that answers specific customer questions with verifiable expertise."
                },
                {
                  q: "Is Answer Engine Optimization worth it for small local businesses?",
                  a: "AEO is especially valuable for small local businesses because AI recommendations level the playing field. A small plumber who documents their expertise well can outperform a large franchise with a bigger marketing budget. Early movers have significant advantage."
                },
                {
                  q: "How long does Answer Engine Optimization take to show results?",
                  a: "With proper implementation, most businesses see initial AI citation improvements within 60-90 days-faster than traditional SEO which often takes 6-12 months. Full AEO implementation across multiple platforms typically takes 3-6 months."
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
