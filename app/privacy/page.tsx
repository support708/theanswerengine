import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Answer Engine',
  description: 'Privacy policy for The Answer Engine website and Answer Engine Optimization services.',
  alternates: {
    canonical: 'https://theanswerengine.ai/privacy',
  },
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#0F1117] relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theanswerengine.ai' },
            { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://www.theanswerengine.ai/privacy' },
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
            Privacy Policy
          </h1>

          <p className="text-gray-400">
            Last updated: December 2025
          </p>
        </header>

        {/* Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              1. Information We Collect
            </h2>
            <p className="mb-4">
              When you visit The Answer Engine website or use our services, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, and business details when you fill out our contact forms or territory check form.</li>
              <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and navigation patterns.</li>
              <li><strong className="text-white">Device Information:</strong> Browser type, operating system, and device identifiers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver our Answer Engine Optimization services</li>
              <li>Send relevant communications about our services (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              3. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and delivering services, provided they agree to keep your information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              4. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              5. Cookies and Tracking
            </h2>
            <p>
              We use cookies and similar technologies to enhance your experience on our website. These help us understand how visitors use our site and improve our services. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              6. Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              7. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="mt-4 p-4 bg-white/[0.03] rounded-xl border border-white/[0.08]">
              <p><strong className="text-white">The Answer Engine</strong></p>
              <p>Email: <a href="mailto:support@theanswerengine.ai" className="text-white hover:text-white/80 transition-colors">support@theanswerengine.ai</a></p>
              <p>Phone: <a href="tel:+12134442229" className="text-white hover:text-white/80 transition-colors">(213) 444-2229</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
