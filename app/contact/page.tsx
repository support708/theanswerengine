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
            "logo": "https://theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png",
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

      <style jsx>{`
        .hover-lift {
          transition: all 500ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hover-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.35);
          border-color: rgba(255,255,255,0.12);
        }

        *:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #0F1117, 0 0 0 4px #f27d24;
          border-radius: 8px;
        }

        @media (prefers-reduced-motion: reduce) {
          .hover-lift {
            transition: none;
          }
          .hover-lift:hover {
            transform: none;
          }
        }
      `}</style>

      <main className="min-h-screen bg-[#0F1117] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 via-transparent to-orange-950/5 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 py-20 sm:py-32 relative">
          {/* Header */}
          <header className="text-center mb-20">
            <div className="flex justify-center mb-12">
              <img
                src="/TheAnswerEngine_white logo only.png"
                alt="The Answer Engine"
                className="h-24 sm:h-32 w-auto"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-8 leading-tight text-white font-heading">
              Get Started with<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f]">Answer Engine Optimization</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Ready to dominate AI search? Let's discuss how to get your business cited by ChatGPT, Claude, Google AI Overviews, and Perplexity.
            </p>
          </header>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-20">
            <div className="hover-lift bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-[#f27d24]/10 border border-[#f27d24]/20">
                  <svg className="w-8 h-8 text-[#f27d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  Call or Text
                </h2>
                
                <p className="text-gray-500 text-sm mb-8">
                  Speak with an AEO specialist
                </p>
                
                <a 
                  href="tel:+12134442229"
                  className="inline-block text-3xl font-semibold text-[#f27d24] hover:text-[#d66d1f] transition-colors"
                >
                  (213) 444-2229
                </a>
              </div>
            </div>

            <div className="hover-lift bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-[#362478]/10 border border-[#362478]/20">
                  <svg className="w-8 h-8 text-[#a89bd9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  Email Us
                </h2>
                
                <p className="text-gray-500 text-sm mb-8">
                  Response within 24 hours
                </p>
                
                <a 
                  href="mailto:support@theanswerengine.ai"
                  className="inline-block text-lg font-medium text-[#a89bd9] hover:text-[#9989c9] transition-colors break-all"
                >
                  support@theanswerengine.ai
                </a>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

          {/* Strategy Call Section */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-12 sm:p-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight font-heading">
                Free 30-Minute<br />
                AEO Strategy Call
              </h2>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                We'll analyze where you're losing to competitors in AI citations, identify your highest-value opportunities, and map out a 90-day plan to dominate AI recommendations.
              </p>
            </div>

            <div className="space-y-4 mb-12 max-w-2xl mx-auto">
              {[
                "See exactly which competitors AI platforms are citing instead of you",
                "Identify your 3 highest-value expertise areas to own",
                "Get a 90-day roadmap to dominate AI recommendations in your market"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.03]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center bg-[#f27d24]/20 border border-[#f27d24]/20 mt-0.5">
                    <svg className="w-4 h-4 text-[#f27d24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white transition-all shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] hover:-translate-y-0.5 bg-[#f27d24] hover:bg-[#d66d1f]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now: (213) 444-2229
              </a>
              
              <a 
                href="mailto:support@theanswerengine.ai"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white transition-all bg-white/10 hover:bg-white/15 border-2 border-white/20 hover:border-white/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email Us
              </a>
            </div>

            {/* Guarantee Note */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] text-center">
              <p className="text-gray-400 text-sm max-w-xl mx-auto">
                <span className="text-white font-semibold">90-day guarantee:</span> Get cited by 2+ AI engines or we work for free until you do. Or full refund. Your choice.
              </p>
            </div>
          </div>

          {/* Info Footer */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#f27d24]" />
                <span><span className="text-gray-400 font-medium">Response Time:</span> Within 2 hours during business hours</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-800" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#362478]" />
                <span><span className="text-gray-400 font-medium">Hours:</span> Monday - Friday, 9 AM - 6 PM PT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sticky Footer */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#0F1117]/95 backdrop-blur-xl border-t border-white/[0.08] z-50">
          <div className="flex gap-3">
            <a 
              href="tel:+12134442229" 
              className="flex-1 text-center py-3 rounded-xl font-semibold bg-[#f27d24] text-white"
            >
              Call
            </a>
            <a 
              href="mailto:support@theanswerengine.ai" 
              className="flex-1 text-center py-3 rounded-xl font-semibold bg-white/[0.05] text-gray-300 border border-white/[0.1]"
            >
              Email
            </a>
          </div>
        </div>
      </main>
    </>
  );
}