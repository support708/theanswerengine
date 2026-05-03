import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | The Answer Engine',
  description: 'Terms of service for The Answer Engine website and Answer Engine Optimization services.',
  alternates: {
    canonical: 'https://www.theanswerengine.ai/terms',
  },
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#0F1117] relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theanswerengine.ai' },
            { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: 'https://www.theanswerengine.ai/terms' },
          ],
        }) }}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24 relative">
        {/* Back to Home */}
        <div className="flex justify-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-12">
          <Link href="/" className="inline-block mb-8">
            <Image
              src="/TheAnswerEngine_white logo only.png"
              alt="The Answer Engine"
              width={200}
              height={60}
              className="h-16 w-auto mx-auto"
            />
          </Link>

          <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
            Terms of Service
          </h1>

          <p className="text-gray-400">
            Last updated: December 2025
          </p>
        </header>

        {/* Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using The Answer Engine website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              2. Services Description
            </h2>
            <p className="mb-4">
              The Answer Engine provides Answer Engine Optimization (AEO) services designed to help local service businesses improve their visibility and citations in AI-powered search platforms, including but not limited to ChatGPT, Claude, Google AI Overviews, and Perplexity.
            </p>
            <p>
              Our services include content strategy, authority positioning, schema markup optimization, and ongoing optimization campaigns tailored to each client's specific industry and geographic market.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              3. Territory Protection
            </h2>
            <p>
              We operate on an exclusive territory model. Once a client engages our services for a specific industry category and geographic area, we will not accept competing businesses in that same territory for the duration of the service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              4. Service Guarantee
            </h2>
            <p>
              We offer a 90-day citation guarantee: clients who complete our program will be cited by at least 2 AI platforms within 90 days, or we will continue working at no additional charge until this goal is achieved, or provide a full refund at the client's discretion. Specific guarantee terms are outlined in individual service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              5. Client Responsibilities
            </h2>
            <p className="mb-4">Clients agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and truthful information about their business</li>
              <li>Respond to requests for information in a timely manner</li>
              <li>Not misrepresent their qualifications, credentials, or business practices</li>
              <li>Comply with all applicable laws and regulations in their industry</li>
              <li>Not engage in practices that could harm the reputation of The Answer Engine</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              6. Payment Terms
            </h2>
            <p>
              Payment terms, including pricing, billing cycles, and refund policies, are specified in individual service agreements. All fees are due according to the payment schedule agreed upon at the time of service engagement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              7. Intellectual Property
            </h2>
            <p>
              Content created by The Answer Engine for client campaigns remains the intellectual property of the client upon full payment. Our methodologies, frameworks, and proprietary processes remain the exclusive property of The Answer Engine.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              8. Results Disclaimer
            </h2>
            <p>
              While we have a strong track record of success, results may vary based on factors including market competition, industry dynamics, and changes to AI platform algorithms. Past performance does not guarantee future results. We make no guarantees about specific traffic numbers, revenue increases, or business outcomes beyond our stated citation guarantee.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, The Answer Engine shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              10. Termination
            </h2>
            <p>
              Either party may terminate services according to the terms specified in the individual service agreement. Upon termination, client access to ongoing services will cease, but clients retain ownership of content created on their behalf.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              11. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              12. Contact Information
            </h2>
            <p>
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 p-4 bg-white/[0.03] rounded-xl border border-white/[0.08]">
              <p><strong className="text-white">The Answer Engine</strong></p>
              <p>Email: <a href="mailto:support@theanswerengine.ai" className="text-white hover:text-white/80 transition-colors">support@theanswerengine.ai</a></p>
              <p>Phone: <a href="tel:+12134442229" className="text-white hover:text-white/80 transition-colors">(213) 444-2229</a></p>
            </div>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
