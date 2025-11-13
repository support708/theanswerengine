'use client';

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact The Answer Engine - AEO Strategy Call",
            "description": "Get in touch with The Answer Engine for Answer Engine Optimization services. Schedule your free 30-minute AEO strategy call to dominate AI citations.",
            "url": "https://theanswerengine.ai/contact",
            "inLanguage": "en-US",
            "mainEntity": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "telephone": "+1-213-444-2229",
              "email": "support@theanswerengine.ai"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "The Answer Engine",
            "description": "Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like ChatGPT, Claude, Google AI Overviews, and Perplexity.",
            "url": "https://theanswerengine.ai",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_Color.png",
            "telephone": "+1-213-444-2229",
            "email": "support@theanswerengine.ai",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US",
              "addressRegion": "CA"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 09:00-18:00",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-213-444-2229",
              "contactType": "Sales",
              "email": "support@theanswerengine.ai",
              "availableLanguage": "English"
            }
          })
        }}
      />

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
                "name": "Contact",
                "item": "https://theanswerengine.ai/contact"
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Answer Engine",
            "url": "https://theanswerengine.ai",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_Color.png",
            "description": "We specialize in Answer Engine Optimization (AEO) for local service businesses, positioning companies to be cited by Google AI Overviews, ChatGPT, Claude, and Perplexity.",
            "sameAs": [
              "https://www.linkedin.com/company/theanswerengine",
              "https://twitter.com/theanswerengine"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "telephone": "+1-213-444-2229",
              "email": "support@theanswerengine.ai",
              "url": "https://theanswerengine.ai/contact"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Contact The Answer Engine - Schedule Your Free AEO Strategy Call",
            "description": "Schedule your free 30-minute Answer Engine Optimization strategy call. Learn where you're losing to competitors in AI citations.",
            "url": "https://theanswerengine.ai/contact",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "Answer Engine Optimization Contact"
            }
          })
        }}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .card-soft-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-soft-hover:hover {
          transform: translateY(-4px);
        }

        .pixel-accent {
          position: relative;
        }

        .pixel-accent::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 4px;
          background: currentColor;
          opacity: 0.6;
        }

        .pixel-accent::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          width: 4px;
          height: 4px;
          background: currentColor;
          opacity: 0.6;
        }
      `}</style>

      <main className="min-h-screen bg-[#0A0A0F] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-orange-950/10 pointer-events-none" />
        
        <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500/40" />
        <div className="absolute top-0 left-2 w-2 h-2 bg-purple-500/40" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-orange-500/40" />
        <div className="absolute top-0 right-2 w-2 h-2 bg-purple-500/40" />

        <div className="max-w-4xl mx-auto px-6 py-20 sm:py-32 relative">
          <header className="text-center mb-24 fade-in">
            <div className="flex justify-center gap-2 mb-12">
              <div className="w-1.5 h-1.5 bg-orange-500" />
              <div className="w-1.5 h-1.5 bg-purple-500" />
              <div className="w-1.5 h-1.5 bg-orange-500" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight tracking-tight text-gray-100">
              Get Started with<br />
              <span className="font-normal text-white">Answer Engine Optimization</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Ready to dominate AI search? Let's discuss how to get your business cited by ChatGPT, Claude, Google AI Overviews, and Perplexity.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 gap-6 mb-24 fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="card-soft-hover bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-10 group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 group-hover:border-orange-500/40 transition-colors">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-medium mb-3 text-white">
                  Call Us
                </h2>
                
                <p className="text-gray-500 text-sm mb-8">
                  Speak with an AEO specialist
                </p>
                
                <a 
                  href="tel:+12134442229"
                  className="inline-block text-3xl font-medium text-orange-400 hover:text-orange-300 transition-colors"
                >
                  (213) 444-2229
                </a>
              </div>
            </div>

            <div className="card-soft-hover bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-10 group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-medium mb-3 text-white">
                  Email Us
                </h2>
                
                <p className="text-gray-500 text-sm mb-8">
                  Get a response within 24 hours
                </p>
                
                <a 
                  href="mailto:support@theanswerengine.ai"
                  className="inline-block text-lg font-medium text-purple-400 hover:text-purple-300 transition-colors break-all"
                >
                  support@theanswerengine.ai
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-1 mb-24 opacity-30">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className="w-px h-px bg-gray-600"
                style={{ opacity: 0.2 + (i % 5) * 0.15 }}
              />
            ))}
          </div>

          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-12">
              <div className="flex justify-center gap-1.5 mb-8">
                <div className="w-1 h-1 bg-orange-500/60" />
                <div className="w-1 h-1 bg-purple-500/60" />
                <div className="w-1 h-1 bg-orange-500/60" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-gray-100 leading-tight">
                Schedule Your Free<br />
                <span className="font-normal text-white">30-Minute AEO Strategy Call</span>
              </h2>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                We'll analyze where you're losing to competitors in AI citations right now, identify your highest-value opportunities, and map out a 90-day plan to dominate AI recommendations in your market.
              </p>
            </div>

            <div className="space-y-4 mb-12 max-w-2xl mx-auto">
              {[
                "See exactly where you're losing to competitors in AI citations",
                "Identify your highest-value featured snippet opportunities",
                "90-day plan to dominate AI recommendations in your market"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.03] hover:border-white/[0.06] transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-orange-500/20 mt-0.5">
                    <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-base leading-relaxed">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+12134442229"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now: (213) 444-2229
              </a>
              
              <a 
                href="mailto:support@theanswerengine.ai"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-white/[0.05] text-gray-300 hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email Us
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
                <span><span className="text-gray-400 font-medium">Response Time:</span> Within 24 hours on business days</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-800" />
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
                <span><span className="text-gray-400 font-medium">Hours:</span> Monday - Friday, 9 AM - 6 PM PT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#0A0A0F]/95 backdrop-blur-xl border-t border-white/[0.05] z-50">
          <div className="flex gap-3">
            <a 
              href="tel:+12134442229" 
              className="flex-1 text-center py-3 rounded-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white"
            >
              Call
            </a>
            <a 
              href="mailto:support@theanswerengine.ai" 
              className="flex-1 text-center py-3 rounded-lg font-medium bg-white/[0.05] text-gray-300 border border-white/[0.1]"
            >
              Email
            </a>
          </div>
        </div>
      </main>
    </>
  );
}