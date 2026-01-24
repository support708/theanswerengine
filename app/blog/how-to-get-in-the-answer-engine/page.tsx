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
                "name": "How to Get in the Answer Engine",
                "item": "https://theanswerengine.ai/blog/how-to-get-in-the-answer-engine"
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
            "headline": "How to Get in the Answer Engine: Complete Guide to AI Citations",
            "description": "Learn how to get your business cited by AI systems like ChatGPT, Claude, and Google AI Overview.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/how-to-get-in-answer-engine-featured.png",
              "width": 1024,
              "height": 1024
            },
            "author": {
              "@type": "Person",
              "name": "Justin Borges",
              "jobTitle": "Founder",
              "url": "https://theanswerengine.ai",
              "description": "Founder of The Answer Engine, specializing in Answer Engine Optimization for local service businesses."
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
            "dateModified": "2026-01-23",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://theanswerengine.ai/blog/how-to-get-in-the-answer-engine"
            },
            "keywords": "answer engine optimization, AI citations, ChatGPT optimization, Claude AI, Google AI Overview, featured snippets, local business AI visibility",
            "articleSection": "Answer Engine Optimization",
            "wordCount": 4500,
            "inLanguage": "en-US"
          })
        }}
      />

      {/* Complete FAQ Schema - All 5 Questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is an answer engine and how is it different from a search engine?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A search engine shows you a list of links to explore (like traditional Google results). An answer engine directly provides the answer to your question, often citing 1-3 sources. Examples of answer engines include ChatGPT, Claude, Google AI Overview, and Perplexity. The key difference: users get answers without clicking through to websites, which means being cited in that answer is now more valuable than ranking in search results."
                }
              },
              {
                "@type": "Question",
                "name": "How do AI systems choose which businesses to cite?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI platforms evaluate businesses based on five key criteria: (1) Structured data that AI can easily parse, like schema markup; (2) Demonstrated expertise through detailed, specific content; (3) Consistent information across all online platforms; (4) Authority signals like credentials, certifications, and years of experience; (5) Content that directly answers specific questions users are asking. Businesses that excel in these areas get cited; those that don't are invisible."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to start getting AI citations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With proper Answer Engine Optimization, most businesses see their first featured snippet wins (which feed into AI citations) within 60-90 days. Full AI citation visibility across multiple platforms typically takes 3-6 months of consistent implementation. This timeline varies based on your current online presence, competition level, and how quickly you can implement the required changes."
                }
              },
              {
                "@type": "Question",
                "name": "Can I do Answer Engine Optimization myself or do I need an expert?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can implement basic AEO yourself if you have technical skills and time. The core elements-structured data markup, FAQ content, expertise documentation-are learnable. However, the technical implementation is complex and errors are common. Most businesses find that working with an AEO specialist saves time and produces faster results, especially for competitive markets where implementation quality matters."
                }
              },
              {
                "@type": "Question",
                "name": "What's the ROI of Answer Engine Optimization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The ROI of AEO comes from capturing customers who would otherwise go to competitors. When AI recommends your business, you get the lead-and that customer never sees your competitors. Unlike paid advertising (ongoing cost per click), AEO creates an asset that continues generating leads without additional cost. Most local service businesses see positive ROI within 6-12 months, with compounding returns as AI citations increase."
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
            "name": "How to Get in the Answer Engine: Complete Guide to AI Citations | The Answer Engine",
            "description": "Learn how to get your business cited by AI systems like ChatGPT, Claude, and Google AI Overview.",
            "url": "https://theanswerengine.ai/blog/how-to-get-in-the-answer-engine",
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
              "url": "https://theanswerengine.ai/how-to-get-in-answer-engine-featured.png"
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
            <span className="text-gray-400">How to Get in the Answer Engine</span>
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
              How to Get in <span className="font-normal text-white">the Answer Engine:</span> Complete Guide to AI Citations
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              Learn how to get your business cited by AI systems like ChatGPT, Claude, and Google AI Overview.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
              <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full" />
              <span>Published December 1, 2025</span>
              <span className="text-gray-700">•</span>
              <span>Updated January 23, 2026</span>
              <span className="text-gray-700">•</span>
              <span>By Justin Borges, Founder</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              "Getting in the answer engine" means having AI platforms cite your business when users ask relevant questions. When someone asks ChatGPT "Who's the best plumber in Austin?", being the business that gets mentioned is worth more than any Google ranking.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              This guide walks you through exactly how to make that happen-from understanding what answer engines are to implementing the specific strategies that get businesses cited.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              What Is an <span className="font-normal text-white">Answer Engine?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              An answer engine is any platform that provides direct answers to user questions instead of a list of links to explore.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              <strong className="text-white font-medium">Traditional search engine (Google circa 2015):</strong> You search "best plumber Austin" and get 10 blue links. You click through several, compare, and eventually choose.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              <strong className="text-white font-medium">Answer engine (ChatGPT, Google AI Overview, Claude):</strong> You ask "Who's the best plumber in Austin?" and get a direct recommendation with reasons why.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              The major answer engines today include:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "ChatGPT - OpenAI's conversational AI",
                "Google AI Overview - AI-generated summaries at the top of Google search results",
                "Claude - Anthropic's AI assistant",
                "Perplexity - AI-powered search engine with citations",
                "Microsoft Copilot - Microsoft's AI integrated across products"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Why <span className="font-normal text-white">AI Citations Matter</span> More Than Rankings
            </h2>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Zero-Click Reality
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              When an answer engine provides a recommendation, most users don't click anywhere else. They got their answer. This means even ranking #1 on Google gets you nothing if Google's AI Overview answers the question first-and cites someone else.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Trust Transfer
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              When ChatGPT or Google AI recommends your business, users perceive it as a vetted endorsement. They trust AI recommendations more than advertisements or even top rankings, because they believe AI evaluated the options objectively.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Compounding Authority
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Unlike paid ads (which stop when you stop paying), AI citations build on themselves. As AI platforms cite you more, they develop a stronger "knowledge" of your business, making future citations more likely. Early movers in AEO gain compounding advantages.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              How AI <span className="font-normal text-white">Chooses Which Businesses to Cite</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms evaluate businesses across five key criteria before citing them as recommendations:
            </p>

            <div className="my-8 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <h4 className="text-xl font-medium text-orange-400 mb-3">1. Structured Data Accessibility</h4>
              <p className="text-gray-300 font-light leading-relaxed">
                Can AI easily parse your business information? Schema markup (LocalBusiness, Service, FAQ schemas) makes your content machine-readable. Without it, AI has to guess-and usually guesses wrong or ignores you entirely.
              </p>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <h4 className="text-xl font-medium text-orange-400 mb-3">2. Demonstrated Expertise</h4>
              <p className="text-gray-300 font-light leading-relaxed">
                Do you have detailed content that proves deep knowledge? AI looks for specific, detailed answers to questions-not generic marketing copy. The more specific and helpful your content, the more likely you are to be cited.
              </p>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <h4 className="text-xl font-medium text-orange-400 mb-3">3. Information Consistency</h4>
              <p className="text-gray-300 font-light leading-relaxed">
                Is your business information consistent across all platforms? AI cross-references data from multiple sources. Inconsistencies (different addresses, phone numbers, or service descriptions) reduce AI's confidence in citing you.
              </p>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <h4 className="text-xl font-medium text-orange-400 mb-3">4. Authority Signals</h4>
              <p className="text-gray-300 font-light leading-relaxed">
                Can AI verify your credentials? Documented certifications, licenses, years in business, and professional affiliations all serve as trust signals. AI platforms prefer citing businesses they can verify as legitimate authorities.
              </p>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <h4 className="text-xl font-medium text-orange-400 mb-3">5. Direct Question-Answer Mapping</h4>
              <p className="text-gray-300 font-light leading-relaxed">
                Does your content directly answer specific questions? AI citation often comes from FAQ sections, how-to guides, and content structured around specific questions. If your content answers what users are asking, AI will cite it.
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">5-Step Process</span> to Get AI Citations
            </h2>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 1: Identify the Questions That Matter
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Start by listing every question a potential customer might ask AI about your services. Think about:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "\"Who is the best [your service] in [your location]?\"",
                "\"Can you recommend a [your service] that specializes in [specific need]?\"",
                "\"What should I look for when hiring a [your service]?\"",
                "\"How much does [your service] typically cost in [your location]?\"",
                "\"What's the difference between [service option A] and [service option B]?\""
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 2: Audit Your Current AI Visibility
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Test each question from Step 1 on major AI platforms. For each, record:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Were you mentioned? Yes/No",
                "Were competitors mentioned? Which ones?",
                "What information did AI provide about you (if any)?",
                "Was the information accurate?"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 3: Create Answer-First Content
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              For every question you identified, create content that directly answers it. The structure should be:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Question as the heading (exactly how users would phrase it)",
                "Direct answer in the first sentence",
                "Supporting detail and expertise in following paragraphs",
                "Specific examples, credentials, or proof points",
                "Related questions linked for comprehensive coverage"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 4: Implement Technical Optimization
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Add the structured data that makes your content machine-readable:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "LocalBusiness schema with complete business information",
                "FAQ schema for all question-answer content",
                "Service schema detailing each service you offer",
                "Review/Rating schema for social proof",
                "Person schema for team credentials and expertise"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Step 5: Monitor and Iterate
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI visibility isn't set-and-forget. Establish a monthly monitoring routine:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Re-test all priority questions on all platforms",
                "Track changes in citation frequency and accuracy",
                "Identify new questions customers are asking AI",
                "Update content based on what's working",
                "Monitor competitor visibility and adapt"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Common <span className="font-normal text-white">Mistakes to Avoid</span>
            </h2>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Treating AEO like traditional SEO - keyword stuffing doesn't work for AI citations",
                "Generic content that doesn't answer specific questions",
                "Inconsistent business information across platforms",
                "Missing or broken schema markup",
                "Focusing only on Google and ignoring ChatGPT, Claude, and Perplexity",
                "Expecting overnight results - AEO takes 60-90 days minimum"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Real Results: <span className="font-normal text-white">Case Study</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              A local HVAC company in Phoenix came to us with strong Google rankings but zero AI visibility. When customers asked ChatGPT for HVAC recommendations in Phoenix, the company wasn't mentioned despite 15 years in business and hundreds of 5-star reviews.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              After implementing our Answer Engine Optimization process:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "60 days: First featured snippet wins for service-specific queries",
                "90 days: Consistent citations on ChatGPT and Perplexity for \"best HVAC Phoenix\" queries",
                "120 days: Google AI Overview citations for multiple service categories",
                "6 months: 40% increase in qualified leads, with customers specifically mentioning \"AI recommended you\""
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Ready to Get <span className="font-normal text-white">in the Answer Engine?</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We've helped dozens of local service businesses go from invisible to cited across AI platforms. Let's find out where you stand and what it would take to get AI recommending your business.
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
                  q: "What is an answer engine and how is it different from a search engine?",
                  a: "A search engine shows you a list of links to explore. An answer engine directly provides the answer, often citing 1-3 sources. Examples include ChatGPT, Claude, Google AI Overview, and Perplexity. The key difference: users get answers without clicking through to websites."
                },
                {
                  q: "How do AI systems choose which businesses to cite?",
                  a: "AI platforms evaluate five key criteria: structured data accessibility, demonstrated expertise, information consistency across platforms, authority signals like credentials, and content that directly answers specific questions users are asking."
                },
                {
                  q: "How long does it take to start getting AI citations?",
                  a: "With proper Answer Engine Optimization, most businesses see first featured snippet wins within 60-90 days. Full AI citation visibility across multiple platforms typically takes 3-6 months of consistent implementation."
                },
                {
                  q: "Can I do Answer Engine Optimization myself or do I need an expert?",
                  a: "You can implement basic AEO yourself if you have technical skills and time. However, the technical implementation is complex and errors are common. Most businesses find that working with an AEO specialist saves time and produces faster results."
                },
                {
                  q: "What's the ROI of Answer Engine Optimization?",
                  a: "Unlike paid ads (which stop when you stop paying), AEO creates an asset that continues generating leads without additional cost. Most local service businesses see positive ROI within 6-12 months, with compounding returns as AI citations increase."
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
                <strong className="text-white font-medium">Written by:</strong> Justin Borges, Founder
              </p>
              <div className="text-gray-300 leading-relaxed space-y-4 mb-6 font-light">
                <p>
                  Justin Borges is the founder of The Answer Engine, where he leads the development of Answer Engine Optimization strategies for local service businesses. With a background in both traditional SEO and emerging AI technologies, Justin recognized early that the shift to AI-powered search would fundamentally change how businesses need to appear online.
                </p>
                <p className="text-white font-medium">Credentials & Experience:</p>
                <ul className="space-y-2">
                  {[
                    "Pioneer in Answer Engine Optimization methodology",
                    "2+ years specialized AEO experience (2023-present)",
                    "500+ schema markup implementations",
                    "100+ featured snippet wins for clients",
                    "Expertise across Google AI Overviews, ChatGPT, Claude, and Perplexity"
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
