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
                "name": "How to Get Your Business Recommended by ChatGPT",
                "item": "https://theanswerengine.ai/blog/get-business-recommended-by-chatgpt"
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
            "headline": "How to Get Your Business Recommended by ChatGPT (Case Study: 89% Growth, 5 Deals Closed)",
            "description": "The exact strategy that got a local business recommended by ChatGPT and AI platforms — producing 89% click growth, 2.9 million impressions, and 5 closed deals in 4 months.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/blog/get-business-recommended-by-chatgpt.svg",
              "width": 1024,
              "height": 1024
            },
            "author": {
              "@type": "Person",
              "name": "Justin Borges",
              "jobTitle": "Founder",
              "worksFor": {
                "@type": "Organization",
                "name": "The Answer Engine"
              },
              "url": "https://theanswerengine.ai",
              "description": "Justin Borges is the founder of The Answer Engine, a Pasadena-based AEO agency. His methodology combines proprietary voice capture interviews, hub-and-spoke content architecture, and full technical schema implementation."
            },
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "logo": {
                "@type": "ImageObject",
                "url": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png"
              }
            },
            "datePublished": "2026-03-04",
            "dateModified": "2026-03-04",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://theanswerengine.ai/blog/get-business-recommended-by-chatgpt"
            },
            "keywords": "how to get business recommended by ChatGPT, get recommended by AI, ChatGPT business recommendations, AI search optimization, how to show up in AI search results, ChatGPT SEO, answer engine optimization case study",
            "articleSection": "Case Study",
            "wordCount": 3000,
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
                "name": "What results can a local business expect from AEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Results vary significantly by niche, market competition, content investment, and baseline visibility. This case study shows an 89% click increase in 90 days, growing from hundreds of monthly clicks to over 8,400. AI citations typically begin appearing within 60 to 90 days of consistent, schema-optimized content publication."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AEO take to produce results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This real estate team saw measurable traffic growth within the first 30 days and significant ranking improvements by month two. Closed deals attributed to content began appearing in the fourth month of the content push."
                }
              },
              {
                "@type": "Question",
                "name": "Can AEO actually generate leads and closed business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. This case study documents 5 closed real estate deals in 2026 directly attributed to blog content, including one client who discovered the agent through ChatGPT before ever visiting the website."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between AEO and traditional SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Traditional SEO targets Google rankings. AEO targets AI citations — getting your business recommended by ChatGPT, Perplexity, Claude, and Google AI Overviews. The two complement each other; AEO adds schema markup, FAQ structures, and topical cluster architecture that SEO alone doesn't address."
                }
              },
              {
                "@type": "Question",
                "name": "Does AEO work for real estate agents?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Real estate is one of the strongest AEO verticals because buyers and sellers ask extremely specific, high-stakes questions that AI platforms actively try to answer. Agents with documented local expertise in complex niches — probate, rent control, inheritance — are particularly well-positioned."
                }
              },
              {
                "@type": "Question",
                "name": "How much does Answer Engine Optimization cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Answer Engine's Foundation Package starts at $2,997 and includes six authority spoke articles and one comprehensive hub guide with full schema implementation. Monthly authority builder packages range from $2,097 to $2,497 per month."
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
            "name": "How to Get Your Business Recommended by ChatGPT (Case Study: 89% Growth, 5 Deals) | The Answer Engine",
            "description": "The exact strategy that got a local business recommended by ChatGPT — 89% click growth, 2.9M impressions, and 5 closed deals in 4 months from near-zero traffic.",
            "url": "https://theanswerengine.ai/blog/get-business-recommended-by-chatgpt",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "How to Get Your Business Recommended by ChatGPT and AI Platforms"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/blog/get-business-recommended-by-chatgpt.svg"
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
            <span className="text-gray-400">How to Get Recommended by ChatGPT</span>
          </nav>

          {/* Article Header */}
          <header className="mb-16">
            {/* Simple pixel divider */}
            <div className="flex gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-orange-500" />
              <div className="w-1.5 h-1.5 bg-purple-500" />
              <div className="w-1.5 h-1.5 bg-orange-500" />
            </div>

            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-sm text-orange-300">
                CASE STUDY
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight text-gray-100">
              How to Get Your Business <span className="font-normal text-white">Recommended by ChatGPT</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light">
              The exact strategy that took a local business from near-zero organic traffic to ChatGPT recommendations, 2.9 million Google impressions, 89% click growth, and 5 closed deals in 4 months. One client found the agent through ChatGPT before ever visiting the website.
            </p>
            <p className="text-sm text-gray-500 italic mb-6 font-light">
              Every number in this case study is pulled directly from Google Search Console. Every deal is verified. Results vary by niche, market, and content investment — but this is what the strategy looks like when executed fully.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
              <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full" />
              <span>Published March 2026</span>
              <span className="text-gray-700">•</span>
              <span>By Justin Borges</span>
              <span className="text-gray-700">•</span>
              <span>12 min read</span>
            </div>
          </header>

          {/* Key Metrics Summary */}
          <section className="mb-16 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 sm:p-12">
            <h2 className="text-sm font-medium text-orange-400 uppercase tracking-wider mb-8 text-center">90-Day Results</h2>
            <div className="grid sm:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-2">+89%</div>
                <div className="text-sm text-gray-400">Monthly Click Growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500 mb-2">2.9M</div>
                <div className="text-sm text-gray-400">Google Impressions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-2">5</div>
                <div className="text-sm text-gray-400">Closed Deals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500 mb-2">1,000+</div>
                <div className="text-sm text-gray-400">Ranking Keywords</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">

            {/* The Starting Point */}
            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The Starting Point: <span className="font-normal text-white">Deep Expertise, Near-Zero Online Visibility</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              The client is a 13-year real estate practice with over $200 million in career sales and a 106% average list-to-sale ratio. A high-performing operation. The specialties include some of California's most technically demanding real estate niches: probate and inherited property, Proposition 19 transfers, rent-controlled property sales, and fire recovery consultation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              But online? The site was pulling hundreds of monthly clicks. Not thousands — hundreds. Despite 13 years of local expertise, the practice was essentially invisible on Google and nonexistent on AI platforms.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              That's the gap Answer Engine Optimization is built to close. The expertise was already there. The job was to extract that knowledge, structure it, and put it in front of the people who needed it.
            </p>

            {/* Divider */}
            <div className="flex justify-center gap-1 my-16 opacity-20">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="w-px h-px bg-gray-600" />
              ))}
            </div>

            {/* The Strategy */}
            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The Strategy: <span className="font-normal text-white">Four Tightly Defined Topic Clusters</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Rather than publish random blog posts and hope for traffic, the content push was organized around four topic clusters — each matching a genuine area of deep expertise:
            </p>
            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                { bold: "Rent control, RSO, and just cause ordinance", text: "hyper-local Los Angeles landlord-tenant law" },
                { bold: "Proposition 19, inheritance, and probate", text: "California-specific inherited property rules" },
                { bold: "Foreclosure and AB 2424", text: "a 2025 legislative change affecting California timelines" },
                { bold: "Fire recovery and the Altadena/Eaton Fire", text: "time-sensitive, locally specific topic" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">
                    <strong className="text-white font-medium">{item.bold}</strong> — {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Each cluster was built as a hub-and-spoke architecture: individual spoke articles targeting specific questions, all linking to a comprehensive hub guide that established authority across the full subject area.
            </p>
            <div className="my-8 p-6 rounded-xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-purple-500">
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                AI platforms don't evaluate individual pages in isolation. They evaluate whether a site demonstrates interconnected, deep expertise across a topic. One great article rarely earns an AI citation. A coordinated content cluster built around verified expertise almost always does.
              </p>
            </div>

            {/* Divider */}
            <div className="flex justify-center gap-1 my-16 opacity-20">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="w-px h-px bg-gray-600" />
              ))}
            </div>

            {/* The Results */}
            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The Results: <span className="font-normal text-white">90 Days of Google Search Console Data</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              The numbers below cover December 2025 through early March 2026 — approximately 90 days into the back half of the content push.
            </p>

            {/* Results Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 text-white font-medium">Metric</th>
                    <th className="py-4 px-4 text-white font-medium">Start</th>
                    <th className="py-4 px-4 text-white font-medium">End</th>
                    <th className="py-4 px-4 text-white font-medium">Change</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {[
                    { metric: "Monthly clicks", start: "4,481", end: "8,477", change: "+89%", highlight: true },
                    { metric: "Monthly impressions", start: "697,000", end: "1,162,000", change: "+67%", highlight: true },
                    { metric: "Average ranking position", start: "7.4", end: "6.8", change: "Improving", highlight: false },
                    { metric: "Total impressions (90 days)", start: "—", end: "—", change: "2,910,653", highlight: true },
                    { metric: "Total clicks (90 days)", start: "—", end: "—", change: "19,650", highlight: true },
                    { metric: "Unique queries ranking", start: "—", end: "—", change: "1,000+", highlight: false },
                    { metric: "Peak single-day clicks", start: "—", end: "—", change: "427", highlight: false }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-4 px-4 font-medium text-white">{row.metric}</td>
                      <td className="py-4 px-4">{row.start}</td>
                      <td className="py-4 px-4">{row.end}</td>
                      <td className={`py-4 px-4 font-medium ${row.highlight ? 'text-orange-400' : 'text-purple-400'}`}>{row.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              The single top-performing page — a deep-dive on Los Angeles rent control relocation fees — earned 1,365 clicks in 90 days on its own. That article now outranks content from law firms, tenant advocacy organizations, and regional media for queries that landlords and tenants are searching with real urgency.
            </p>

            {/* Divider */}
            <div className="flex justify-center gap-1 my-16 opacity-20">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="w-px h-px bg-gray-600" />
              ))}
            </div>

            {/* Timeline */}
            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              What to Expect: <span className="font-normal text-white">A Realistic AEO Timeline</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              One of the most common questions we get is when results actually show up. Based on this engagement:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { month: "Month 1", text: "First articles indexed; early rankings appear for long-tail queries; baseline impressions begin climbing" },
                { month: "Month 2", text: "Cluster architecture takes hold; position improvements visible; both landlords and tenants begin calling weekly" },
                { month: "Month 3", text: "AI platform citations begin; ChatGPT starts surfacing content; top pages reach featured snippets" },
                { month: "Month 4", text: "First verified deals closed from content; ChatGPT referral confirmed; 89% click growth documented" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex-shrink-0 w-20">
                    <span className={`text-sm font-medium ${i % 2 === 0 ? 'text-orange-400' : 'text-purple-400'}`}>{item.month}</span>
                  </div>
                  <p className="text-gray-300 font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              This timeline reflects a full-commitment content push. Slower publication schedules produce slower results. The underlying mechanics are the same — the speed depends on volume and consistency.
            </p>

            {/* Divider */}
            <div className="flex justify-center gap-1 my-16 opacity-20">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="w-px h-px bg-gray-600" />
              ))}
            </div>

            {/* The Signal */}
            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The Signal That Mattered Most: <span className="font-normal text-white">Both Sides of the Market Started Calling</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Traffic growth is measurable. What's harder to quantify — until it shows up in your phone — is the quality of trust the content was building.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              About six to eight weeks in, the team began receiving weekly calls not just from sellers and buyers, but from both landlords and tenants — people on opposite sides of the same legal and transactional questions the content was answering.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              The content wasn't perceived as advocacy for one side. It was perceived as genuine expertise — the kind that helps you understand a complicated situation regardless of which side of the table you're sitting on. In a market as legally complex as Los Angeles real estate, that's a rare reputation to earn organically.
            </p>

            {/* Divider */}
            <div className="flex justify-center gap-1 my-16 opacity-20">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="w-px h-px bg-gray-600" />
              ))}
            </div>

            {/* Business Outcome */}
            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The Business Outcome: <span className="font-normal text-white">5 Closed Deals and a ChatGPT Referral</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              By early 2026, the practice had closed five deals directly attributable to the content strategy. Multiple clients mentioned the blog as how they discovered the team.
            </p>
            <div className="my-8 p-6 rounded-xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <p className="text-white text-lg leading-relaxed font-medium mb-4">
                One client specifically found the agent through ChatGPT.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Someone typed a question into ChatGPT — not Google, not Zillow, not a referral network — and ChatGPT recommended a specific real estate agent based on the content that agent had published. That client reached out, came in already trusting the expertise, and closed a deal.
              </p>
            </div>
            {/* Client Testimonial */}
            <div className="my-10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 sm:p-10">
              <svg className="w-10 h-10 text-orange-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote className="text-xl text-gray-200 leading-relaxed font-light mb-6">
                "I receive 2-3 incoming calls a day for the last 2 months."
              </blockquote>
              <div>
                <div className="font-medium text-white">Justin Borges</div>
                <div className="text-sm text-gray-400">Team Lead, The Borges Real Estate Team</div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              That's the end state AEO is designed to produce. Not just rankings. Not just impressions. <em className="text-white font-medium not-italic">Recommended by AI.</em>
            </p>

            {/* Divider */}
            <div className="flex justify-center gap-1 my-16 opacity-20">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="w-px h-px bg-gray-600" />
              ))}
            </div>

            {/* AEO vs SEO */}
            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              AEO vs. Traditional SEO: <span className="font-normal text-white">Why Both Matter Here</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              A question worth addressing directly: isn't this just good SEO? AEO builds on SEO fundamentals — technical structure, quality content, authoritative sourcing — but adds layers that SEO alone doesn't cover.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Traditional SEO optimizes for Google's ranking algorithm. AEO optimizes for how AI platforms extract, evaluate, and recommend sources. That includes schema markup AI can parse, FAQ structures AI can directly cite, and hub-and-spoke architecture that signals topical authority to language models — not just to Google's crawler.
            </p>

            {/* Divider */}
            <div className="flex justify-center gap-1 my-16 opacity-20">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="w-px h-px bg-gray-600" />
              ))}
            </div>

            {/* What Made This Work */}
            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              What Made This Work: <span className="font-normal text-white">Three Non-Negotiables</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              This wasn't a volume play. The content push required significant effort — equivalent to a $10,000/month agency engagement. Three components had to be present and working together.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-normal text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">1</span>
                  Voice Capture Before Content Creation
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Every piece of content was built from a structured interview process that extracted real, specific expertise before a single word was written. The exact mechanics of how LA rent control relocation fees are calculated. The precise way Proposition 19 affects property tax basis. The practical implications of AB 2424 for a seller in foreclosure. That specificity is what separates content AI platforms cite from content they ignore.
                </p>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-normal text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">2</span>
                  Full Schema Stack on Every Article
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Every published piece included a minimum of five schema types: Article, FAQPage, HowTo where applicable, BreadcrumbList, and LocalBusiness. Schema markup tells AI platforms exactly what your content covers, who wrote it, and what qualifies them to answer. Without it, AI systems have to guess. With it, they know.
                </p>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-xl font-normal text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">3</span>
                  Hub-and-Spoke Architecture, Not Isolated Posts
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Every article was planned as part of a cluster. Spoke articles linked to each other and to the hub guide. The hub guide linked back to all spokes. This interconnected structure gave AI platforms the topical depth signal they need to recognize an authoritative source rather than a site that happened to publish one relevant article by accident.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center gap-1 my-16 opacity-20">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="w-px h-px bg-gray-600" />
              ))}
            </div>

            {/* Why Real Estate */}
            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              Why Real Estate Is One of the <span className="font-normal text-white">Strongest AEO Verticals</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Real estate is a high-trust, high-stakes transaction. People research extensively before they ever reach out. When your content correctly explains how LA rent control relocation fees are calculated, how Proposition 19 transfers affect a family's tax basis, or how AB 2424 changed a seller's foreclosure timeline — you've demonstrated expertise before the first phone call. The trust is pre-built.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              AEO doesn't just get you found. It gets you <em className="text-white font-medium not-italic">chosen.</em>
            </p>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Find Out Where You Stand <span className="font-normal text-white">With AI Platforms</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                If you're a local service business and you want to know exactly how you're appearing — or not appearing — on ChatGPT, Perplexity, and Google AI Overviews, we'll audit your current AI visibility at no cost.
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
                <div key={i} className="w-px h-px bg-gray-600" />
              ))}
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-8 text-gray-100">
              <span className="font-normal text-white">Frequently Asked Questions</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "What results can a local business expect from AEO?",
                  a: "Results vary significantly by niche, market competition, content investment, and baseline visibility. This case study shows an 89% click increase in 90 days, growing from hundreds of monthly clicks to over 8,400. AI citations typically begin appearing within 60 to 90 days of consistent, schema-optimized content publication."
                },
                {
                  q: "How long does AEO take to produce results?",
                  a: "This real estate team saw measurable traffic growth within the first 30 days and significant ranking improvements by month two. Closed deals attributed to content began appearing in the fourth month of the content push."
                },
                {
                  q: "Can AEO actually generate leads and closed business?",
                  a: "Yes. This case study documents 5 closed real estate deals in 2026 directly attributed to blog content, including one client who discovered the agent through ChatGPT before ever visiting the website."
                },
                {
                  q: "What is the difference between AEO and traditional SEO?",
                  a: "Traditional SEO targets Google rankings. AEO targets AI citations — getting your business recommended by ChatGPT, Perplexity, Claude, and Google AI Overviews. The two complement each other; AEO adds schema markup, FAQ structures, and topical cluster architecture that SEO alone doesn't address."
                },
                {
                  q: "Does AEO work for real estate agents?",
                  a: "Real estate is one of the strongest AEO verticals because buyers and sellers ask extremely specific, high-stakes questions that AI platforms actively try to answer. Agents with documented local expertise in complex niches — probate, rent control, inheritance — are particularly well-positioned."
                },
                {
                  q: "How much does Answer Engine Optimization cost?",
                  a: "The Answer Engine's Foundation Package starts at $2,997 and includes six authority spoke articles and one comprehensive hub guide with full schema implementation. Monthly authority builder packages range from $2,097 to $2,497 per month."
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

            {/* Disclaimer */}
            <p className="text-sm text-gray-500 italic mt-12 font-light">
              Individual results vary based on niche, market competition, content investment, and baseline visibility. The results documented in this case study reflect a full-commitment content engagement. Past results do not guarantee future outcomes.
            </p>

            {/* Author Section */}
            <div className="mt-16 pt-12 border-t border-white/[0.05]">
              <h3 className="text-2xl font-light mb-6 text-gray-100">
                <span className="font-normal text-white">About the Author</span>
              </h3>
              <p className="text-gray-300 mb-4 font-light">
                <strong className="text-white font-medium">Written by:</strong> Justin Borges
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                Justin Borges is the founder of The Answer Engine, a Pasadena-based AEO agency helping local service businesses get cited by ChatGPT, Claude, Perplexity, and Google AI Overviews. His methodology combines proprietary voice capture interviews, hub-and-spoke content architecture, and full technical schema implementation. Justin also leads The Borges Real Estate Team at eXp Realty, where the strategy documented in this case study was first developed and validated.
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