export default function Privacy() {
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
            "name": "Privacy Policy - The Answer Engine",
            "description": "Privacy Policy for The Answer Engine. Learn how we collect, use, and protect your personal information.",
            "url": "https://theanswerengine.ai/privacy",
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
                "name": "Privacy Policy",
                "item": "https://theanswerengine.ai/privacy"
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
            <span className="text-gray-400">Privacy Policy</span>
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
              <span className="font-normal text-white">Privacy Policy</span>
            </h1>
            <p className="text-lg text-gray-400 font-light">
              Last Updated: December 2025
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              The Answer Engine ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website theanswerengine.ai or engage with our Answer Engine Optimization services.
            </p>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">1.</span> Information We Collect
              </h2>

              <h3 className="text-xl font-medium text-white mb-4">Personal Information You Provide</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                We may collect personal information that you voluntarily provide when you:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "Fill out our contact forms or Answer Audit request forms",
                  "Subscribe to our newsletter or marketing communications",
                  "Schedule a consultation or strategy call",
                  "Engage our services as a client",
                  "Communicate with us via email, phone, or other channels"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                This information may include your name, email address, phone number, company name, website URL, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-medium text-white mb-4 mt-8">Automatically Collected Information</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                When you visit our website, we may automatically collect certain information about your device and usage, including:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "IP address and geographic location",
                  "Browser type and version",
                  "Operating system",
                  "Pages visited and time spent on pages",
                  "Referring website addresses",
                  "Device identifiers"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">2.</span> How We Use Your Information
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                We use the information we collect to:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "Provide, maintain, and improve our Answer Engine Optimization services",
                  "Respond to your inquiries and fulfill your requests",
                  "Send you marketing communications (with your consent)",
                  "Conduct Answer Audits and competitive analysis",
                  "Analyze website usage to improve user experience",
                  "Protect against fraudulent or unauthorized activity",
                  "Comply with legal obligations"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">3.</span> Information Sharing
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "With service providers who assist us in operating our business (e.g., hosting, analytics, email services)",
                  "To comply with legal obligations or respond to lawful requests",
                  "To protect our rights, privacy, safety, or property",
                  "In connection with a merger, acquisition, or sale of assets (with notice to you)",
                  "With your consent or at your direction"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">4.</span> Data Security
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "Encryption of data in transit using SSL/TLS",
                  "Secure storage of client data",
                  "Limited access to personal information on a need-to-know basis",
                  "Regular security assessments"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">5.</span> Cookies and Tracking
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                Our website uses cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "Remember your preferences and settings",
                  "Understand how you interact with our website",
                  "Analyze website traffic and performance",
                  "Deliver relevant content and marketing"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                You can control cookies through your browser settings. Disabling cookies may affect the functionality of certain features on our website.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">6.</span> Your Rights
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "The right to access the personal information we hold about you",
                  "The right to request correction of inaccurate information",
                  "The right to request deletion of your personal information",
                  "The right to opt out of marketing communications",
                  "The right to data portability",
                  "The right to withdraw consent"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">7.</span> Contact Information
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
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

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-100">
                <span className="text-orange-400">8.</span> Policy Updates
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make material changes, we will:
              </p>
              <ul className="space-y-3 mb-6 text-gray-300 text-lg">
                {[
                  "Update the \"Last Updated\" date at the top of this policy",
                  "Notify you via email if you are a client or subscriber",
                  "Post a prominent notice on our website"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
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
              Questions About <span className="font-normal text-white">Our Privacy Practices?</span>
            </h2>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              We're here to help. Contact us with any questions or concerns about how we handle your information.
            </p>

            <a
              href="mailto:support@theanswerengine.ai"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
