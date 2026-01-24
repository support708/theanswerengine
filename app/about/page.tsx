export default function About() {
  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService"],
            "name": "The Answer Engine",
            "description": "The leading Answer Engine Optimization agency for local service businesses who want to dominate AI search. We make AI recommend your business.",
            "url": "https://theanswerengine.ai",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png",
            "image": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png",
            "telephone": "(213) 444-2229",
            "email": "support@theanswerengine.ai",
            "foundingDate": "2025",
            "founder": {
              "@type": "Person",
              "name": "Justin Borges",
              "jobTitle": "Founder & AEO Strategist"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "1",
              "bestRating": "5"
            },
            "knowsAbout": [
              "Answer Engine Optimization",
              "AI Citation Optimization",
              "Featured Snippet Optimization",
              "Schema Markup Implementation",
              "Google AI Overviews",
              "ChatGPT Optimization",
              "Claude AI Optimization",
              "Perplexity AI Optimization",
              "Local SEO",
              "E-E-A-T Optimization"
            ],
            "slogan": "Become the Answer"
          })
        }}
      />

      {/* AboutPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About The Answer Engine",
            "description": "Learn about The Answer Engine - the leading Answer Engine Optimization agency helping local service businesses dominate AI search.",
            "url": "https://theanswerengine.ai/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "The Answer Engine"
            }
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
                "name": "About",
                "item": "https://theanswerengine.ai/about"
              }
            ]
          })
        }}
      />

      <main className="min-h-screen bg-[#0A0A0F] relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-orange-950/10 pointer-events-none" />

        {/* Simple pixel accent - top corners */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500/40" />
        <div className="absolute top-0 left-2 w-2 h-2 bg-purple-500/40" />

        <div className="max-w-4xl mx-auto px-6 py-20 sm:py-32 relative">
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
            <span className="text-gray-400">About</span>
          </nav>

          {/* Header */}
          <header className="mb-20">
            {/* Simple pixel divider */}
            <div className="flex gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-orange-500" />
              <div className="w-1.5 h-1.5 bg-purple-500" />
              <div className="w-1.5 h-1.5 bg-orange-500" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight text-gray-100">
              We Make AI <span className="font-normal text-white">Recommend Your Business</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed font-light">
              The Answer Engine is the leading Answer Engine Optimization agency for local service businesses who want to dominate AI search.
            </p>
          </header>

          {/* The Problem We Solve */}
          <section className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span className="text-sm font-medium tracking-wider uppercase text-purple-400">The Problem We Solve</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mb-8 text-gray-100">
              AI Search Has <span className="font-normal text-white">Changed Everything</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                When someone asks ChatGPT, Claude, or Google AI Overviews for a business recommendation, they don't get a list of ten options to evaluate. They get one answer. Maybe two.
              </p>
              <p>
                Traditional search gave you a fighting chance - land on page one and you're in the game. AI search is different. It synthesizes information and delivers a single recommendation.
              </p>
              <p className="text-xl text-white font-medium bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500 p-6 rounded-r-xl">
                If you're not that answer, you're invisible.
              </p>
              <p>
                Your competitors are getting cited by AI platforms right now. Every recommendation they receive is a customer you'll never see - because that customer never knew you existed.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="flex justify-center gap-1 mb-20 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>

          {/* Our Mission */}
          <section className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wider uppercase text-orange-400">Our Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mb-8 text-gray-100">
              Position Local Experts as <span className="font-normal text-white">AI-Cited Authorities</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                We believe that local experts - the plumber who's fixed thousands of pipes, the realtor who knows every neighborhood, the accountant who's saved clients millions - deserve to be found.
              </p>
              <p>
                Our mission is to ensure that when AI platforms answer questions in your field, they cite YOU as the authority. Not the biggest company. Not the one with the most ad spend. The one with real expertise.
              </p>
              <p>
                We specialize exclusively in Answer Engine Optimization for local service businesses. This focused expertise means we understand exactly what AI platforms need to trust and cite your business.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="flex justify-center gap-1 mb-20 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>

          {/* What Sets Us Apart */}
          <section className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span className="text-sm font-medium tracking-wider uppercase text-purple-400">What Sets Us Apart</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mb-12 text-gray-100">
              Our <span className="font-normal text-white">Differentiators</span>
            </h2>

            <div className="grid gap-6">
              {[
                {
                  title: "Territory Protection",
                  description: "We only work with one business per category per geographic area. When you work with us, your competitors can't. This exclusivity ensures our full commitment to making YOU the AI-cited authority in your market.",
                  gradient: "from-orange-500 to-orange-600",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  )
                },
                {
                  title: "90-Day Guarantee",
                  description: "We guarantee citations from at least 2 AI platforms (ChatGPT, Claude, Google AI Overviews, or Perplexity) within 90 days. If we don't deliver, we continue working for free until we do - or provide a full refund.",
                  gradient: "from-purple-500 to-purple-600",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  )
                },
                {
                  title: "Proven in Competition",
                  description: "Our methodologies were developed and tested in LA County real estate - one of the most competitive markets in the country with over 70,000 active agents. If it works there, it works anywhere.",
                  gradient: "from-orange-500 to-orange-600",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
                  )
                },
                {
                  title: "AI-First Strategy",
                  description: "We don't adapt SEO tactics for AI - we've built our entire approach around how AI platforms evaluate, verify, and cite sources. Every piece of content is structured specifically for how AI systems work.",
                  gradient: "from-purple-500 to-purple-600",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  )
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 hover:border-white/[0.08] transition-colors">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.gradient} text-white`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed font-light">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="flex justify-center gap-1 mb-20 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>

          {/* Contact Section */}
          <section className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wider uppercase text-orange-400">Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mb-12 text-gray-100">
              Ready to <span className="font-normal text-white">Become the Answer?</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {/* Phone */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 hover:border-white/[0.08] transition-all group">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 group-hover:border-orange-500/40 transition-colors">
                    <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-white">Call Us</h3>
                  <a
                    href="tel:+12134442229"
                    className="text-2xl font-medium text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    (213) 444-2229
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 hover:border-white/[0.08] transition-all group">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
                    <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-white">Email Us</h3>
                  <a
                    href="mailto:support@theanswerengine.ai"
                    className="text-lg font-medium text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    support@theanswerengine.ai
                  </a>
                </div>
              </div>
            </div>

            {/* Founder Info */}
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 text-center">
              <p className="text-gray-400 font-light mb-2">Your point of contact:</p>
              <p className="text-xl text-white font-medium">JB</p>
              <p className="text-orange-400">Founder & AEO Strategist</p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 text-center">
            {/* Simple pixel accent */}
            <div className="flex justify-center gap-1.5 mb-8">
              <div className="w-1 h-1 bg-orange-500/60" />
              <div className="w-1 h-1 bg-purple-500/60" />
              <div className="w-1 h-1 bg-orange-500/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-gray-100 leading-tight">
              Schedule Your Free<br />
              <span className="font-normal text-white">AEO Strategy Call</span>
            </h2>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Discover exactly where you're losing to competitors in AI citations and get a customized plan to dominate your market.
            </p>

            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              Schedule Your Free Strategy Call
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
