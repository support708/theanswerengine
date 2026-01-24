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
                "name": "Answer Engine Solutions for Local Service Businesses",
                "item": "https://theanswerengine.ai/blog/answer-engine-solutions"
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
            "headline": "Answer Engine Solutions for Local Service Businesses (2025 Guide)",
            "description": "Answer engine solutions help local service businesses get cited by AI platforms like ChatGPT, Claude, and Google AI Overview.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/answer-engine-solutions-featured.png",
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
            "dateModified": "2025-12-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://theanswerengine.ai/blog/answer-engine-solutions"
            },
            "keywords": "answer engine solutions, AEO services, AI visibility services, ChatGPT optimization services, local business AI, answer engine optimization provider",
            "articleSection": "Answer Engine Optimization",
            "wordCount": 4000,
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
                "name": "What are answer engine solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Answer engine solutions are specialized services that help businesses get cited by AI platforms like ChatGPT, Claude, Google AI Overview, and Perplexity. These solutions typically include expertise extraction (documenting your unique knowledge), content architecture (organizing information for AI comprehension), technical implementation (schema markup and structured data), and ongoing visibility monitoring."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need professional answer engine solutions or can I do it myself?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "DIY is possible if you have technical skills, 40-60 hours to invest, and comfort with schema markup implementation. Professional solutions make sense if you need faster results, lack technical expertise, or operate in a competitive market where implementation quality matters. Most businesses find that the ROI of professional implementation (faster results, fewer errors) justifies the cost."
                }
              },
              {
                "@type": "Question",
                "name": "What should answer engine solutions include?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Comprehensive answer engine solutions should include four core components: (1) Expertise extraction and documentation of your unique business knowledge; (2) Hub-and-spoke content architecture with pillar pages and supporting content; (3) Technical implementation including LocalBusiness, FAQ, Service, and other schema markup; (4) Quality audits ensuring accuracy and consistency across all platforms."
                }
              },
              {
                "@type": "Question",
                "name": "How do I choose an answer engine solutions provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Look for providers who can show documented results (actual AI citations achieved), understand the technical requirements (schema markup expertise), focus on your specific industry, and offer transparent pricing. Red flags include guaranteeing specific rankings, using AI-generated content without human oversight, or offering one-size-fits-all packages without understanding your business."
                }
              },
              {
                "@type": "Question",
                "name": "How long until answer engine solutions show results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With professional implementation, expect first featured snippet wins within 60-90 days. Consistent AI citations across multiple platforms typically emerge within 3-6 months. Full market dominance in AI recommendations takes 6-12 months of sustained effort. DIY implementation usually takes 2-3x longer due to learning curve and implementation errors."
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
            "name": "Answer Engine Solutions for Local Service Businesses | The Answer Engine",
            "description": "Answer engine solutions help local service businesses get cited by AI platforms like ChatGPT, Claude, and Google AI Overview.",
            "url": "https://theanswerengine.ai/blog/answer-engine-solutions",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "Answer Engine Solutions"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/answer-engine-solutions-featured.png"
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
            <span className="text-gray-400">Answer Engine Solutions for Local Service Businesses</span>
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
              <span className="font-normal text-white">Answer Engine Solutions</span> for Local Service Businesses (2025 Guide)
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              Answer engine solutions help local service businesses get cited by AI platforms like ChatGPT, Claude, and Google AI Overview.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
              <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full" />
              <span>Published December 1, 2025</span>
              <span className="text-gray-700">•</span>
              <span>By Justin Borges, Founder</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              If you're a local service business owner, you've probably noticed something changing: customers are increasingly telling you "AI recommended you" or asking questions that suggest they found you through ChatGPT or Google's AI features.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Answer engine solutions are the specialized services that help businesses win those AI recommendations. This guide covers what these solutions include, who they're for, and how to evaluate whether you need professional help or can do it yourself.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">4 Core Components</span> of Answer Engine Solutions
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Professional answer engine solutions typically include these four interconnected components:
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              1. Expertise Extraction
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              This is the process of documenting your unique business knowledge in a format AI can understand and cite. Most business owners have decades of expertise locked in their heads that never makes it onto their website.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Expertise extraction involves:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Interviewing key team members about specialized knowledge",
                "Documenting credentials, certifications, and experience",
                "Identifying unique processes, methodologies, or approaches",
                "Capturing case studies with specific, verifiable outcomes",
                "Translating industry jargon into customer-friendly language"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              2. Hub-and-Spoke Content Architecture
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms prefer well-organized content that demonstrates comprehensive topic coverage. Hub-and-spoke architecture creates this structure:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Hub pages: Comprehensive pillar content on core service areas",
                "Spoke pages: Detailed content answering specific questions",
                "Internal linking: Connections showing topical relationships",
                "FAQ integration: Direct question-answer pairs throughout",
                "Hierarchical organization: Clear parent-child content relationships"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              3. Schema Markup Implementation
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Schema markup is the technical code that makes your content machine-readable. Without it, AI has to guess what your content means. With it, AI knows exactly what information you're providing.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Essential schema types for local service businesses:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "LocalBusiness: Your business name, address, phone, hours, service area",
                "Service: Detailed descriptions of each service you offer",
                "FAQ: Question-answer pairs that AI can directly cite",
                "Review/AggregateRating: Social proof and customer satisfaction signals",
                "Person: Team credentials and expertise documentation"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              4. Quality Audits and Consistency Checks
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI platforms cross-reference information across the web. Inconsistencies reduce trust and citation likelihood.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "NAP consistency: Name, address, phone matching across all platforms",
                "Service description alignment: Same services described consistently everywhere",
                "Credential verification: Ensuring all claimed credentials are documented",
                "Review platform optimization: Consistent presence on major review sites",
                "Content accuracy audits: Regular checks for outdated or incorrect information"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Who Needs <span className="font-normal text-white">Answer Engine Solutions?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Answer engine solutions are most valuable for:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Local service businesses that depend on customer trust (HVAC, plumbing, legal, medical, real estate)",
                "Businesses in competitive markets where multiple providers offer similar services",
                "Companies with deep expertise that isn't currently documented online",
                "Businesses losing customers to competitors who are already being cited by AI",
                "Companies that want to establish market leadership before competitors catch on"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              <span className="font-normal text-white">DIY vs. Professional:</span> Comparison
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's an honest comparison to help you decide:
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white font-medium">Factor</th>
                    <th className="text-left py-4 px-4 text-white font-medium">DIY Approach</th>
                    <th className="text-left py-4 px-4 text-white font-medium">Professional Solutions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300 font-light">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-orange-400">Time Investment</td>
                    <td className="py-4 px-4">40-60 hours initial + ongoing</td>
                    <td className="py-4 px-4">2-4 hours for interviews</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-orange-400">Cost</td>
                    <td className="py-4 px-4">$0-500 (tools only)</td>
                    <td className="py-4 px-4">$2,000-10,000+</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-orange-400">Time to Results</td>
                    <td className="py-4 px-4">6-12 months</td>
                    <td className="py-4 px-4">2-4 months</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-orange-400">Technical Skill Required</td>
                    <td className="py-4 px-4">High (schema, HTML, SEO)</td>
                    <td className="py-4 px-4">None</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-orange-400">Error Risk</td>
                    <td className="py-4 px-4">High (common mistakes)</td>
                    <td className="py-4 px-4">Low (experienced implementation)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-orange-400">Ongoing Maintenance</td>
                    <td className="py-4 px-4">You handle everything</td>
                    <td className="py-4 px-4">Often included or available</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-orange-400">Best For</td>
                    <td className="py-4 px-4">Technical owners with time</td>
                    <td className="py-4 px-4">Busy owners wanting results</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              How to Choose an <span className="font-normal text-white">Answer Engine Solutions Provider</span>
            </h2>

            <h3 className="text-2xl font-light mt-12 mb-4 text-green-400">
              Green Flags (What to Look For)
            </h3>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Can show specific examples of AI citations achieved for clients",
                "Understands schema markup and can explain their technical approach",
                "Focuses on your specific industry and market",
                "Offers transparent, project-based pricing (not vague monthly fees)",
                "Emphasizes expertise extraction and content quality over volume",
                "Provides realistic timelines (60-90 days for initial results)",
                "Includes monitoring and reporting on AI visibility"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-red-400">
              Red Flags (What to Avoid)
            </h3>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Guarantees specific rankings or \"#1 on ChatGPT\"",
                "Uses primarily AI-generated content without human expertise",
                "Offers one-size-fits-all packages without learning your business",
                "Can't explain how their approach differs from traditional SEO",
                "Focuses on content volume over content quality",
                "No clear examples or case studies from similar businesses",
                "Requires long-term contracts before proving results",
                "Vague pricing that depends on \"what you need\""
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Questions to Ask <span className="font-normal text-white">Potential Providers</span>
            </h2>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "\"Can you show me examples of clients getting cited by ChatGPT or Google AI Overview?\"",
                "\"What schema markup types will you implement and why?\"",
                "\"How will you extract and document my specific expertise?\"",
                "\"What does your content creation process look like?\"",
                "\"How do you measure success and what reporting will I receive?\"",
                "\"What's your timeline for initial results?\"",
                "\"What happens if the strategy isn't working after 90 days?\""
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
                Need <span className="font-normal text-white">Answer Engine Solutions</span> for Your Business?
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We specialize in Answer Engine Optimization for local service businesses. Let's discuss whether professional solutions make sense for your situation-no pressure, just honest advice.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
              >
                Schedule Your Free Consultation
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
                  q: "What are answer engine solutions?",
                  a: "Answer engine solutions are specialized services that help businesses get cited by AI platforms like ChatGPT, Claude, Google AI Overview, and Perplexity. They include expertise extraction, content architecture, technical implementation, and visibility monitoring."
                },
                {
                  q: "Do I need professional answer engine solutions or can I do it myself?",
                  a: "DIY is possible if you have technical skills and 40-60 hours to invest. Professional solutions make sense if you need faster results, lack technical expertise, or operate in a competitive market where implementation quality matters."
                },
                {
                  q: "What should answer engine solutions include?",
                  a: "Comprehensive solutions include four core components: expertise extraction and documentation, hub-and-spoke content architecture, technical schema markup implementation, and quality audits for accuracy and consistency."
                },
                {
                  q: "How do I choose an answer engine solutions provider?",
                  a: "Look for providers who can show documented results, understand schema markup, focus on your industry, and offer transparent pricing. Avoid providers who guarantee rankings, use AI-generated content without human oversight, or offer one-size-fits-all packages."
                },
                {
                  q: "How long until answer engine solutions show results?",
                  a: "With professional implementation, expect first featured snippet wins within 60-90 days and consistent AI citations within 3-6 months. DIY implementation usually takes 2-3x longer due to learning curve and errors."
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
