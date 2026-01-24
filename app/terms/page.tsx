export default function Terms() {
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
            "description": "Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like ChatGPT, Claude, and Google AI Overviews",
            "url": "https://theanswerengine.ai",
            "telephone": "(213) 444-2229",
            "email": "support@theanswerengine.ai",
            "foundingDate": "2025",
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
            }
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
            "name": "Terms of Service - The Answer Engine",
            "description": "Terms of Service for The Answer Engine's Answer Engine Optimization services. Read our terms and conditions.",
            "url": "https://theanswerengine.ai/terms",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
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
                "name": "Terms of Service",
                "item": "https://theanswerengine.ai/terms"
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
            <span className="text-gray-400">Terms of Service</span>
          </nav>

          {/* Header */}
          <header className="mb-16">
            {/* Simple pixel divider */}
            <div className="flex gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-orange-500" />
              <div className="w-1.5 h-1.5 bg-purple-500" />
              <div className="w-1.5 h-1.5 bg-orange-500" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight text-gray-100">
              <span className="font-normal text-white">Terms of Service</span>
            </h1>
            <p className="text-lg text-gray-400 font-light">
              Last Updated: December 2025
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              These Terms of Service ("Terms") govern your use of The Answer Engine website and Answer Engine Optimization services. By accessing our website or engaging our services, you agree to be bound by these Terms.
            </p>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">1.</span> Acceptance of Terms
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                By accessing or using The Answer Engine's website (theanswerengine.ai) or engaging our Answer Engine Optimization services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                If you do not agree to these Terms, please do not use our website or services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any modifications.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">2.</span> Services Description
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                The Answer Engine provides Answer Engine Optimization (AEO) services designed to help local service businesses improve their visibility and citation rates on AI platforms including but not limited to:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "ChatGPT and OpenAI products",
                  "Google AI Overviews and Search Generative Experience",
                  "Claude (Anthropic)",
                  "Perplexity AI",
                  "Other emerging AI search and recommendation platforms"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Our services include content optimization, technical implementation (schema markup, structured data), expertise documentation, and multi-platform verification and testing.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">3.</span> Territory Protection
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                The Answer Engine operates on an exclusive territory model. This means:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "We work with only ONE business per service category per defined geographic area",
                  "Once you engage our services, we will not work with your direct competitors in your protected territory",
                  "Territory boundaries are defined during the onboarding process and documented in your service agreement",
                  "Territory protection remains in effect for the duration of your active service agreement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Territory exclusivity is subject to proper categorization of your business and geographic service area. The Answer Engine reserves the right to determine whether businesses are in direct competition.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">4.</span> Service Guarantee
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                The Answer Engine offers a 90-Day Citation Guarantee:
              </p>
              <div className="bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500 p-6 rounded-r-xl mb-6">
                <p className="text-white text-lg font-medium mb-4">
                  We guarantee that your business will receive citations from at least 2 AI platforms within 90 days of completing our implementation process.
                </p>
                <p className="text-gray-300 font-light">
                  If we do not achieve this result, we will continue working at no additional cost until the goal is achieved, or provide a full refund of service fees at your option.
                </p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                <strong className="text-white font-medium">Guarantee Conditions:</strong>
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "Client must provide timely access to required assets (website, content, credentials)",
                  "Client must approve deliverables within 5 business days of submission",
                  "Client must not make unauthorized changes to optimized content or technical implementations",
                  "The 90-day period begins after all initial implementations are complete and verified"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">5.</span> Client Responsibilities
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                As a client, you agree to:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "Provide accurate and complete information about your business, services, and expertise",
                  "Grant necessary access to your website, hosting, and relevant platforms",
                  "Review and approve content and implementations in a timely manner",
                  "Maintain the integrity of optimized content and not make unauthorized modifications",
                  "Comply with all applicable laws and regulations in your industry",
                  "Not engage in deceptive practices or misrepresent your credentials or expertise",
                  "Communicate promptly regarding any issues or concerns"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">6.</span> Payment Terms
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                Payment terms are as follows:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "Service fees and payment schedules are outlined in your individual service agreement",
                  "Payment is due according to the schedule specified in your agreement",
                  "We accept payment via credit card, ACH transfer, or wire transfer",
                  "Late payments may result in suspension of services and may incur late fees",
                  "All fees are non-refundable except as specified in our Service Guarantee",
                  "Prices are subject to change with 30 days notice for ongoing services"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">7.</span> Intellectual Property
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                Regarding intellectual property rights:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "You retain all rights to your existing content, trademarks, and business information",
                  "Content created specifically for your AEO campaign becomes your property upon full payment",
                  "The Answer Engine retains rights to our methodologies, processes, templates, and proprietary tools",
                  "We may use anonymized results and general learnings to improve our services",
                  "You may not reverse engineer or attempt to replicate our proprietary processes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">8.</span> Results Disclaimer
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                While we are confident in our methodologies and offer our 90-Day Guarantee, please understand:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "AI platforms are operated by third parties and their algorithms change frequently",
                  "We cannot guarantee specific ranking positions or citation volumes",
                  "Results may vary based on your industry, competition, and market conditions",
                  "Historical results do not guarantee future performance",
                  "AI platform behavior is not entirely predictable or within our control"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Our guarantee is based on achieving verifiable citations, not on any specific business outcomes such as leads, revenue, or conversion rates.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">9.</span> Limitation of Liability
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "The Answer Engine's total liability shall not exceed the amount paid by you for services in the 12 months preceding any claim",
                  "We are not liable for indirect, incidental, special, consequential, or punitive damages",
                  "We are not responsible for third-party platform changes, outages, or policy modifications",
                  "We are not liable for any loss of business, revenue, or profits",
                  "We are not responsible for delays caused by client non-responsiveness or third-party issues"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">10.</span> Termination
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                Regarding termination of services:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "Either party may terminate ongoing services with 30 days written notice",
                  "We may terminate immediately if you breach these Terms or engage in fraudulent activity",
                  "Upon termination, you remain responsible for all fees incurred prior to termination",
                  "Territory protection ends upon termination of your service agreement",
                  "We will provide reasonable assistance in transitioning any ongoing work"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 11 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">11.</span> Governing Law
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                Any disputes arising from these Terms or our services shall be resolved through:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "Good faith negotiation between the parties",
                  "If negotiation fails, binding arbitration in Los Angeles County, California",
                  "Arbitration shall be conducted under the rules of the American Arbitration Association",
                  "Each party shall bear their own costs and attorney fees unless otherwise awarded"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 12 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">12.</span> Contact Information
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/20">
                      <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Email</p>
                      <a href="mailto:support@theanswerengine.ai" className="text-orange-400 hover:text-orange-300 transition-colors">
                        support@theanswerengine.ai
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/20">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Phone</p>
                      <a href="tel:+12134442229" className="text-purple-400 hover:text-purple-300 transition-colors">
                        (213) 444-2229
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Divider */}
          <div className="flex justify-center gap-1 my-16 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 text-center">
            {/* Simple pixel accent */}
            <div className="flex justify-center gap-1.5 mb-8">
              <div className="w-1 h-1 bg-orange-500/60" />
              <div className="w-1 h-1 bg-purple-500/60" />
              <div className="w-1 h-1 bg-orange-500/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mb-6 text-gray-100 leading-tight">
              Ready to <span className="font-normal text-white">Get Started?</span>
            </h2>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Schedule your free strategy call to learn how Answer Engine Optimization can help your business dominate AI search.
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
