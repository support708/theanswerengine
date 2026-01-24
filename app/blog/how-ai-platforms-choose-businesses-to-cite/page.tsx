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
                "name": "How AI Platforms Choose Which Businesses to Cite",
                "item": "https://theanswerengine.ai/blog/how-ai-platforms-choose-businesses-to-cite"
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
            "headline": "How AI Platforms Choose Which Businesses to Cite",
            "description": "Discover how ChatGPT, Claude, and Perplexity actually decide which businesses to recommend using weighted authority assessment.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/ai-citation-selection-featured.png",
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
              "@id": "https://theanswerengine.ai/blog/how-ai-platforms-choose-businesses-to-cite"
            },
            "keywords": "AI citation selection, how ChatGPT chooses businesses, AI recommendations, weighted authority assessment, AI platform citations, business recommendations AI",
            "articleSection": "Answer Engine Optimization",
            "wordCount": 3800,
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
                "name": "How do AI platforms like ChatGPT decide which businesses to recommend?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI platforms use weighted authority assessment, evaluating multiple factors including source type authority (how credible is the information source), content structure and clarity (how clearly the business answers relevant questions), and cross-validation (whether the information is consistent across multiple sources). They don't simply pick the highest-ranked Google result."
                }
              },
              {
                "@type": "Question",
                "name": "What is weighted authority assessment in AI citation selection?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Weighted authority assessment is the process AI platforms use to evaluate potential citation sources. Each source receives implicit scoring across multiple dimensions: the authority of the source type (industry database vs. random blog), the clarity and specificity of the content, the consistency of information across different platforms, and the verifiable credentials of the business or author."
                }
              },
              {
                "@type": "Question",
                "name": "Do AI platforms verify business information before citing them?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, AI platforms cross-validate information across multiple sources before citing. They check whether business details (services, credentials, location) are consistent across your website, business listings, industry directories, and review platforms. Inconsistencies reduce citation confidence, while perfect consistency increases trust and citation likelihood."
                }
              },
              {
                "@type": "Question",
                "name": "What is the 3-layer authority model AI platforms use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The 3-layer authority model includes: Layer 1 - Source type authority (credibility of the platform or website), Layer 2 - Content structure and clarity (how well information answers user questions), and Layer 3 - Cross-validation and consistency (whether information matches across multiple sources). All three layers must be strong for reliable AI citations."
                }
              },
              {
                "@type": "Question",
                "name": "What is query fan-out and how does it affect citations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Query fan-out is the process where AI platforms expand a single user query into multiple related queries to gather comprehensive information. For example, 'best plumber in Austin' might fan out to queries about Austin plumber reviews, licensed plumbers Austin TX, emergency plumbing services Austin, etc. Businesses must be optimized for the entire query family, not just primary keywords."
                }
              },
              {
                "@type": "Question",
                "name": "Why does waiting make AI citation harder to achieve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI platforms develop citation preference through repeated successful references. Businesses cited early build trust with the AI over time, making them increasingly likely to be cited again. This creates citation preference lock-in. Late entrants must not only optimize their content but also displace already-trusted competitors - a significantly harder task."
                }
              },
              {
                "@type": "Question",
                "name": "How do Google AI Overviews choose which sources to cite?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google AI Overviews synthesize information from multiple sources, weighing factors including E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness), structured data markup, content relevance and specificity, and the source's historical reliability. They may cite sources that don't rank #1 organically if those sources provide clearer, more authoritative answers."
                }
              },
              {
                "@type": "Question",
                "name": "Can a small local business compete with larger companies for AI citations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. AI platforms prioritize answer quality and relevance over business size. A local business with well-structured content, verified credentials, consistent information across platforms, and clear expertise documentation can outperform larger competitors with generic content. Local specificity is actually an advantage - AI platforms value businesses that clearly serve specific areas."
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
            "name": "How AI Platforms Choose Which Businesses to Cite | The Answer Engine",
            "description": "Discover how ChatGPT, Claude, and Perplexity actually decide which businesses to recommend using weighted authority assessment.",
            "url": "https://theanswerengine.ai/blog/how-ai-platforms-choose-businesses-to-cite",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "AI Citation Selection"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/ai-citation-selection-featured.png"
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
            <span className="text-gray-400">How AI Platforms Choose Which Businesses to Cite</span>
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
              How <span className="font-normal text-white">AI Platforms Choose</span> Which Businesses to Cite
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              Discover how ChatGPT, Claude, and Perplexity actually decide which businesses to recommend using weighted authority assessment.
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
              When someone asks ChatGPT "Who's the best plumber in Houston?" or when Perplexity generates recommendations for "top-rated HVAC contractors in Phoenix," these AI platforms aren't randomly selecting businesses. They're running a sophisticated evaluation process that most business owners don't understand - and that's costing them citations.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Understanding how AI platforms actually choose which businesses to cite is the first step to positioning your business as the one they recommend.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              <span className="font-normal text-white">Weighted Authority Assessment:</span> How AI Evaluates Potential Citations
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms use what we call <strong className="text-white font-medium">weighted authority assessment</strong> to decide which businesses to cite. Unlike Google's ranking algorithm that produces a sorted list, AI citation selection is more like a confidence threshold - the AI needs to feel confident enough in a source to stake its answer on it.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Each potential citation source receives implicit scoring across multiple dimensions:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "How credible is the source type (industry database vs. random blog)?",
                "How clearly does the content answer the specific question asked?",
                "How consistent is this information across multiple platforms?",
                "What verifiable credentials support this business's expertise?"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Only sources that pass all evaluation layers get cited. Sources that fail any dimension get ignored - even if they would rank well on Google.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">3-Layer Authority Model</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Our research across hundreds of AI citation tests reveals a consistent 3-layer evaluation model:
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Layer 1: Source Type Authority
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Not all sources are created equal. AI platforms implicitly weight information based on where it comes from:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Industry-specific directories and databases (high authority)",
                "Government and licensing databases (high authority)",
                "Established review platforms (moderate-high authority)",
                "Business websites with proper schema markup (moderate authority)",
                "Generic web content without credentials (low authority)",
                "User-generated content on forums (variable, often low authority)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Key insight:</strong> Your business website's authority depends heavily on how well it signals credibility through structured data, credentials documentation, and professional presentation.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Layer 2: Content Structure and Clarity
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms need to extract clear answers from your content. They evaluate:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Does the content directly answer questions users ask?",
                "Is information organized in extractable formats (FAQs, clear sections)?",
                "Are claims specific and factual rather than vague marketing language?",
                "Does the content cover the full scope of relevant user questions?"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Content that says "We provide excellent service" gives AI nothing to cite. Content that says "We offer 24/7 emergency plumbing with guaranteed 60-minute response times in the Houston metro area, with licensed technicians averaging 15 years experience" gives AI specific, citable claims.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Layer 3: Cross-Validation and Consistency
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Before citing your business, AI platforms check whether your information is consistent across multiple sources:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Does your website match your Google Business Profile?",
                "Do your services listed match across all directories?",
                "Are your credentials consistent everywhere they appear?",
                "Do reviews support the expertise you claim?"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Inconsistency kills citations.</strong> If your website says you've been in business 20 years but your Google profile says 15 years, AI platforms notice. If your service area differs between platforms, they notice. Each inconsistency reduces citation confidence.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              <span className="font-normal text-white">Query Fan-Out:</span> Why Single-Keyword Thinking Fails
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              When a user asks ChatGPT a question, the AI doesn't just search for that exact phrase. It performs <strong className="text-white font-medium">query fan-out</strong> - expanding the query into multiple related searches to gather comprehensive information.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              For example, "best plumber in Austin" might fan out to:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Austin plumber reviews",
                "Licensed plumbers Austin TX",
                "Emergency plumbing services Austin",
                "Highest rated plumbers Austin area",
                "Austin plumber credentials certifications",
                "Plumbing companies serving Austin metro"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Your business needs to appear as a strong candidate across this entire query family - not just for one primary keyword. Businesses optimized for single keywords get missed because they don't show up consistently across the fan-out.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              <span className="font-normal text-white">Why Waiting Gets Harder:</span> Citation Preference Lock-In
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms develop citation preferences over time. When they successfully cite a source and users don't correct the information, that source builds trust. This creates a compounding advantage for early movers.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Here's what happens:</strong>
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Business A optimizes for AI citation in early 2025",
                "AI platforms begin citing Business A for relevant queries",
                "Repeated successful citations build trust in Business A as a source",
                "By late 2025, Business A has citation preference for their market",
                "Business B tries to enter the market in 2026",
                "Business B must now displace an already-trusted competitor - much harder than entering an open market"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              This isn't speculation - we've observed this pattern across multiple markets. Businesses that established citation preference early are significantly harder to displace than businesses entering markets where no clear leader exists.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">Strategic Shift</span> Required
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Understanding how AI platforms choose citations reveals why traditional optimization approaches fail:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-100 font-medium">Old Approach</th>
                    <th className="text-left py-4 px-4 text-gray-100 font-medium">Required Shift</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Optimize for keywords</td>
                    <td className="py-4 px-4 font-light">Optimize for query families</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Focus on Google rankings</td>
                    <td className="py-4 px-4 font-light">Focus on citation confidence</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Build backlinks</td>
                    <td className="py-4 px-4 font-light">Build cross-platform consistency</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Write for engagement</td>
                    <td className="py-4 px-4 font-light">Write for extraction</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Claim expertise</td>
                    <td className="py-4 px-4 font-light">Document verifiable credentials</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-light">Update periodically</td>
                    <td className="py-4 px-4 font-light">Maintain perfect consistency</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Every aspect of your digital presence needs to work together to pass all three layers of AI evaluation. Partial implementation doesn't work - AI platforms need comprehensive signals to build citation confidence.
            </p>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Find Out Why <span className="font-normal text-white">AI Platforms Aren't Citing Your Business</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We've spent two years studying how AI platforms evaluate and cite businesses. Our analysis reveals exactly where your business is failing in the 3-layer authority model - and what to fix first.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
              >
                Get Your Free Citation Analysis
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
                  q: "How do AI platforms like ChatGPT decide which businesses to recommend?",
                  a: "AI platforms use weighted authority assessment, evaluating source type authority (how credible is the source), content structure and clarity (how clearly you answer questions), and cross-validation (whether your information is consistent across platforms). They don't simply pick the highest-ranked Google result."
                },
                {
                  q: "What is weighted authority assessment in AI citation selection?",
                  a: "Weighted authority assessment is the process AI platforms use to evaluate potential citation sources. Each source receives implicit scoring across multiple dimensions: source type authority, content clarity, cross-platform consistency, and verifiable credentials. Only sources passing all dimensions get cited."
                },
                {
                  q: "Do AI platforms verify business information before citing them?",
                  a: "Yes, AI platforms cross-validate information across multiple sources before citing. They check whether your business details are consistent across your website, business listings, industry directories, and review platforms. Inconsistencies reduce citation confidence."
                },
                {
                  q: "What is the 3-layer authority model AI platforms use?",
                  a: "The 3-layer model includes: Layer 1 - Source type authority (credibility of the platform), Layer 2 - Content structure and clarity (how well you answer questions), and Layer 3 - Cross-validation and consistency (information accuracy across sources). All three must be strong for reliable citations."
                },
                {
                  q: "What is query fan-out and how does it affect citations?",
                  a: "Query fan-out is when AI platforms expand a user query into multiple related searches. 'Best plumber in Austin' might become searches for reviews, licensing, emergency services, etc. Your business must appear strong across the entire query family, not just one keyword."
                },
                {
                  q: "Why does waiting make AI citation harder to achieve?",
                  a: "AI platforms develop citation preference through repeated successful references. Early movers build trust over time, creating citation preference lock-in. Late entrants must displace already-trusted competitors - significantly harder than entering an open market."
                },
                {
                  q: "How do Google AI Overviews choose which sources to cite?",
                  a: "Google AI Overviews weigh E-E-A-T signals, structured data markup, content relevance, and historical reliability. They may cite sources that don't rank #1 organically if those sources provide clearer, more authoritative answers to the specific question."
                },
                {
                  q: "Can a small local business compete with larger companies for AI citations?",
                  a: "Yes. AI platforms prioritize answer quality over business size. A local business with well-structured content, verified credentials, and consistent information can outperform larger competitors with generic content. Local specificity is actually an advantage."
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
