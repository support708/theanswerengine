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
                "name": "What is Answer Engine Optimization (AEO)?",
                "item": "https://theanswerengine.ai/blog/what-is-answer-engine-optimization"
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
            "headline": "What is Answer Engine Optimization (AEO)? The Complete Guide for 2025",
            "description": "Complete guide explaining what Answer Engine Optimization (AEO) is, how it differs from traditional SEO, and why local businesses need to implement it now.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/what-is-aeo-featured.png",
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
              "@id": "https://theanswerengine.ai/blog/what-is-answer-engine-optimization"
            },
            "keywords": "Answer Engine Optimization, AEO, what is AEO, AEO definition, AEO vs SEO, AI optimization, ChatGPT optimization, local business AEO",
            "articleSection": "Answer Engine Optimization",
            "wordCount": 4200,
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
                  "text": "Answer Engine Optimization (AEO) is the practice of optimizing your business's online presence to become the authoritative source that AI platforms cite when answering user questions. Unlike traditional SEO which focuses on ranking in search results, AEO focuses on positioning your content so that ChatGPT, Google AI Overviews, Claude, and Perplexity reference your business as the definitive answer to relevant queries."
                }
              },
              {
                "@type": "Question",
                "name": "How is AEO different from traditional SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Traditional SEO optimizes for search engine rankings (appearing in the top 10 results), focusing on keywords, backlinks, and meta tags. AEO optimizes for AI citations, focusing on structured data, direct answer formatting, verifiable expertise, and content that AI platforms can confidently cite. SEO gets you on a list of options; AEO makes you THE recommended answer."
                }
              },
              {
                "@type": "Question",
                "name": "Why do AI platforms value different content than Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI platforms need to provide confident, direct answers rather than lists of possibilities. They evaluate content for factual accuracy, expertise verification, answer clarity, and cross-source consistency. Google historically valued signals like backlinks and keyword optimization. AI platforms value structured data, demonstrable expertise, and content formatted as clear answers to specific questions."
                }
              },
              {
                "@type": "Question",
                "name": "What does AEO actually involve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AEO is multi-layered: (1) Direct answer optimization - structuring content to directly answer questions AI users ask, (2) Technical infrastructure - implementing schema markup, FAQ structures, and machine-readable expertise signals, (3) Verifiable expertise documentation - credentials, certifications, and authority signals AI can validate, (4) Cross-platform consistency - ensuring your information is accurate across all sources AI consults."
                }
              },
              {
                "@type": "Question",
                "name": "When should a business start implementing AEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Now. The 2025-2026 window represents a critical competitive timing opportunity. AI platforms are still building their understanding of which businesses to trust in each market. Early movers who establish citation preference now will be significantly harder to displace later. Waiting means competing against businesses who have already built AI platform trust."
                }
              },
              {
                "@type": "Question",
                "name": "Can I do AEO myself or do I need a specialist?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "DIY is possible but challenging. AEO requires technical schema implementation (one syntax error breaks everything), understanding how different AI platforms parse content, ongoing testing across multiple platforms, and knowledge of what actually triggers citations vs. what seems like it should work. Most DIY attempts fail silently - your content just doesn't get cited and you don't know why. Specialists have tested what works and can implement proven approaches."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AEO take to show results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With proper implementation, businesses typically see initial featured snippet wins within 60-90 days. Full AI citation across ChatGPT, Claude, Perplexity, and Google AI Overviews usually takes 3-6 months of consistent optimization. This is actually faster than traditional SEO, which often requires 6-12 months for significant ranking improvements."
                }
              },
              {
                "@type": "Question",
                "name": "Does AEO replace my existing SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, AEO builds on your existing SEO foundation. Your domain authority, quality content, and technical SEO remain valuable. AEO adds new layers - structured data, answer formatting, expertise documentation - that make your content citable by AI. Think of SEO as table stakes and AEO as competitive advantage in the AI era."
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
            "name": "What is Answer Engine Optimization (AEO)? The Complete Guide for 2025 | The Answer Engine",
            "description": "Complete guide explaining what Answer Engine Optimization (AEO) is, how it differs from traditional SEO, and why local businesses need to implement it now.",
            "url": "https://theanswerengine.ai/blog/what-is-answer-engine-optimization",
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
              "url": "https://theanswerengine.ai/what-is-aeo-featured.png"
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
            <span className="text-gray-400">What is Answer Engine Optimization (AEO)?</span>
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
              What is <span className="font-normal text-white">Answer Engine Optimization</span> (AEO)? The Complete Guide for 2025
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              Complete guide explaining what Answer Engine Optimization (AEO) is, how it differs from traditional SEO, and why local businesses need to implement it now.
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
              Answer Engine Optimization is the most significant shift in digital marketing since Google introduced mobile-first indexing. If you're still focused exclusively on traditional SEO, you're optimizing for a world that's rapidly disappearing. This guide explains exactly what AEO is, why it matters, and how it changes everything about getting customers online.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              <span className="font-normal text-white">Defining Answer Engine Optimization:</span> The Authoritative Source AI Platforms Cite
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Answer Engine Optimization (AEO)</strong> is the practice of optimizing your business's digital presence to become the authoritative source that AI platforms cite when users ask questions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              When someone asks ChatGPT "Who's the best plumber in Austin?" or when Google AI Overviews generates an answer to "How do I find a reliable HVAC contractor?", AEO determines whether your business gets mentioned or remains invisible.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              The key distinction: <strong className="text-white font-medium">AEO isn't about ranking on a list. It's about being THE answer.</strong>
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">Fundamental Shift:</span> From Link Lists to Direct Answers
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              For twenty years, search meant "type query, get list of links, pick one." Users did the work of evaluating options.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              That model is ending. Now when users search:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Google AI Overviews provide synthesized answers at the top of results",
                "ChatGPT gives direct recommendations without showing alternatives",
                "Claude and Perplexity explain their reasoning and cite specific sources",
                "Users increasingly skip Google entirely for AI platforms"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">The implication:</strong> If your business isn't the one AI cites, you don't get consideration. There's no "page one" to land on. You're either the answer or you're nothing.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              How <span className="font-normal text-white">AEO Works:</span> The Multi-Layered Approach
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Answer Engine Optimization isn't a single tactic. It's a comprehensive approach across three interconnected layers:
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Layer 1: Direct Answer Optimization
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Your content must directly answer the questions AI users ask. This means:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Structuring content as clear question-answer pairs",
                "Providing specific, factual information (not vague marketing language)",
                "Formatting answers so AI can extract and cite them cleanly",
                "Covering the full range of questions customers actually ask"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Layer 2: Technical Infrastructure
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms need machine-readable signals to understand and trust your content:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Schema markup (FAQ, HowTo, LocalBusiness, Article schemas)",
                "Structured data that validates without errors",
                "Proper heading hierarchy and content organization",
                "Technical site performance that enables crawling"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Layer 3: Verifiable Expertise Documentation
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms verify credentials before citing sources. Your expertise must be documented in ways AI can validate:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Professional certifications and licensing information",
                "Years of experience with specific documentation",
                "Industry affiliations and memberships",
                "Published case studies with verifiable outcomes",
                "Consistent information across all platforms AI consults"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Why <span className="font-normal text-white">AI Values Different Content</span> Than Google
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Google's algorithm evolved to rank pages based on signals like backlinks, keyword usage, and user engagement metrics. These signals helped identify relevant pages, but they didn't necessarily identify authoritative answers.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms have different requirements:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "They must provide confident answers, not ranked possibilities",
                "They're evaluated on accuracy, making source verification critical",
                "They need to cite specific claims, not general content",
                "They cross-reference multiple sources for consistency",
                "They parse semantic meaning, not just keyword matches"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">The result:</strong> Content that ranks well on Google may never get cited by AI. And content AI loves may not have traditional SEO signals at all.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              <span className="font-normal text-white">AEO vs. Traditional SEO:</span> The Complete Comparison
            </h2>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-100 font-medium">Factor</th>
                    <th className="text-left py-4 px-4 text-gray-100 font-medium">Traditional SEO</th>
                    <th className="text-left py-4 px-4 text-gray-100 font-medium">Answer Engine Optimization</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Primary Goal</td>
                    <td className="py-4 px-4 font-light">Rank in top 10 results</td>
                    <td className="py-4 px-4 font-light">Be the cited answer</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Success Metric</td>
                    <td className="py-4 px-4 font-light">Rankings, organic traffic</td>
                    <td className="py-4 px-4 font-light">AI citations, direct mentions</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Content Focus</td>
                    <td className="py-4 px-4 font-light">Keywords, length, backlinks</td>
                    <td className="py-4 px-4 font-light">Direct answers, structured data</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Technical Priority</td>
                    <td className="py-4 px-4 font-light">Site speed, mobile, meta tags</td>
                    <td className="py-4 px-4 font-light">Schema markup, FAQ structure</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Authority Signal</td>
                    <td className="py-4 px-4 font-light">Backlink quantity/quality</td>
                    <td className="py-4 px-4 font-light">Verifiable expertise, credentials</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Competitive Position</td>
                    <td className="py-4 px-4 font-light">One of 10 options shown</td>
                    <td className="py-4 px-4 font-light">Either cited or invisible</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">User Behavior</td>
                    <td className="py-4 px-4 font-light">Clicks through to evaluate</td>
                    <td className="py-4 px-4 font-light">Accepts AI recommendation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">Competitive Timing Window:</span> 2025-2026
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms are still learning which businesses to trust in each market. This creates a critical window of opportunity.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Early movers gain compounding advantages:</strong>
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Citation preference builds over time as AI learns to trust sources",
                "First businesses to demonstrate expertise become default recommendations",
                "Later entrants must displace established trusted sources",
                "The gap between optimized and non-optimized businesses widens monthly"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              By 2027, the businesses that established citation preference in 2025-2026 will be extremely difficult to displace. Waiting isn't neutral - it's actively ceding ground to competitors who move now.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              <span className="font-normal text-white">DIY vs. Specialist:</span> What Actually Works
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Can you implement AEO yourself? Technically yes. Should you? That depends on several factors.
            </p>

            {/* DIY vs Specialist Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-100 font-medium">Factor</th>
                    <th className="text-left py-4 px-4 text-gray-100 font-medium">DIY Approach</th>
                    <th className="text-left py-4 px-4 text-gray-100 font-medium">Specialist Approach</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Technical Implementation</td>
                    <td className="py-4 px-4 font-light">High error rate, silent failures</td>
                    <td className="py-4 px-4 font-light">Validated implementations</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Time Investment</td>
                    <td className="py-4 px-4 font-light">Significant learning curve</td>
                    <td className="py-4 px-4 font-light">Immediate expert execution</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Feedback Loop</td>
                    <td className="py-4 px-4 font-light">No way to know if it's working</td>
                    <td className="py-4 px-4 font-light">Testing across platforms</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Strategy</td>
                    <td className="py-4 px-4 font-light">Trial and error</td>
                    <td className="py-4 px-4 font-light">Proven methodologies</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Opportunity Cost</td>
                    <td className="py-4 px-4 font-light">Months of learning, delayed results</td>
                    <td className="py-4 px-4 font-light">Faster time to citation</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Typical Outcome</td>
                    <td className="py-4 px-4 font-light">Partial implementation, unknown status</td>
                    <td className="py-4 px-4 font-light">Measurable citations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">The silent failure problem:</strong> The biggest challenge with DIY AEO is that you won't know it's not working. Your schema might have errors. Your content structure might not trigger citations. You'll just continue not being mentioned, with no feedback on why.
            </p>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Ready to Become the <span className="font-normal text-white">Answer AI Platforms Cite?</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We specialize exclusively in Answer Engine Optimization for local service businesses. Our team has spent 2+ years testing what actually triggers AI citations - and what doesn't. Get a free assessment of your current AI visibility.
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
                  q: "What is Answer Engine Optimization (AEO)?",
                  a: "Answer Engine Optimization (AEO) is the practice of optimizing your business's online presence to become the authoritative source that AI platforms cite when answering user questions. Unlike traditional SEO which focuses on ranking in search results, AEO focuses on positioning your content so that ChatGPT, Google AI Overviews, Claude, and Perplexity reference your business as the definitive answer."
                },
                {
                  q: "How is AEO different from traditional SEO?",
                  a: "Traditional SEO optimizes for search engine rankings (appearing in the top 10 results), focusing on keywords, backlinks, and meta tags. AEO optimizes for AI citations, focusing on structured data, direct answer formatting, verifiable expertise, and content that AI platforms can confidently cite. SEO gets you on a list; AEO makes you THE answer."
                },
                {
                  q: "Why do AI platforms value different content than Google?",
                  a: "AI platforms need to provide confident, direct answers rather than lists of possibilities. They evaluate content for factual accuracy, expertise verification, answer clarity, and cross-source consistency. Google historically valued signals like backlinks and keyword optimization. AI platforms value structured data, demonstrable expertise, and content formatted as clear answers."
                },
                {
                  q: "What does AEO actually involve?",
                  a: "AEO is multi-layered: direct answer optimization (structuring content to answer questions), technical infrastructure (schema markup, FAQ structures), verifiable expertise documentation (credentials AI can validate), and cross-platform consistency (accurate information everywhere AI looks)."
                },
                {
                  q: "When should a business start implementing AEO?",
                  a: "Now. The 2025-2026 window represents a critical competitive timing opportunity. AI platforms are still learning which businesses to trust. Early movers who establish citation preference now will be significantly harder to displace later."
                },
                {
                  q: "Can I do AEO myself or do I need a specialist?",
                  a: "DIY is possible but challenging. AEO requires technical schema implementation (one syntax error breaks everything), understanding how AI platforms parse content, ongoing testing, and knowledge of what actually triggers citations. Most DIY attempts fail silently. Specialists have tested what works."
                },
                {
                  q: "How long does AEO take to show results?",
                  a: "With proper implementation, businesses typically see initial featured snippet wins within 60-90 days. Full AI citation across ChatGPT, Claude, Perplexity, and Google AI Overviews usually takes 3-6 months of consistent optimization."
                },
                {
                  q: "Does AEO replace my existing SEO?",
                  a: "No, AEO builds on your existing SEO foundation. Your domain authority, quality content, and technical SEO remain valuable. AEO adds new layers that make your content citable by AI. Think of SEO as table stakes and AEO as competitive advantage."
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
