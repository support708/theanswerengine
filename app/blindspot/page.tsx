import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Free AI Blind Spot Report | The Answer Engine',
  description:
    'Find out where your business is invisible to AI search. Get a free Blind Spot Report showing how ChatGPT, Claude, Perplexity, and Google AI see your business.',
  alternates: { canonical: 'https://www.theanswerengine.ai/blindspot' },
  openGraph: {
    title: 'Free AI Blind Spot Report',
    description: 'Discover where AI search cannot find your business.',
    url: 'https://www.theanswerengine.ai/blindspot',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'What exactly is an AI Blind Spot Report?',
    answer:
      'It is a detailed analysis of how AI platforms like ChatGPT, Claude, Perplexity, and Google AI Overviews perceive your business. We query each platform with the exact phrases your customers use, then document where you show up, where you do not, and what your competitors are doing differently to get cited.',
  },
  {
    question: 'How long does the analysis take?',
    answer:
      'The strategy call is 30 minutes. During that call, we walk through preliminary findings from our AI visibility scan. After the call, we deliver a full written report within 48 hours that includes your AI Visibility Score, Citation Gap Analysis, and Fix Priority List.',
  },
  {
    question: 'Is this really free? What is the catch?',
    answer:
      'There is no catch. The Blind Spot Report is free because we want you to see the data for yourself. If the findings make a strong case for working together, we will share how our implementation program works. But there is zero obligation and zero pressure.',
  },
  {
    question: 'What kind of businesses benefit most from this?',
    answer:
      'Any business that depends on being found by customers online. Service-based businesses, local companies, SaaS products, professional services, and e-commerce brands all benefit. If your customers are searching for solutions you offer, AI platforms are already shaping whether they find you or a competitor.',
  },
  {
    question: 'What if AI is giving wrong information about my business?',
    answer:
      'We flag that in the report. The scan will show you exactly what ChatGPT, Claude, Perplexity, and Google AI say about you today, including misattributed sources feeding bad data into AI training. Fixing AI misinformation is part of what the full 90-day foundation handles.',
  },
  {
    question: 'How long until I see results if we work together?',
    answer:
      'Foundation builds over 90 days. Most clients see their first AI citations between weeks 6 and 10. The full citation pattern — where AI consistently recommends you for your category — typically stabilizes in months 3 to 6. The 90-day citation guarantee backs this timeline.',
  },
  {
    question: 'Do you have proof this actually works?',
    answer:
      'Yes. Our own real estate site (lametrohomefinder.com) reached 1.14M+ monthly impressions with citations across ChatGPT, Claude, Perplexity, and Google AI — 4 of 4 major AI platforms. We built and tested the AERO-10 framework there first before selling it to clients.',
  },
  {
    question: 'How is this different from a regular SEO audit?',
    answer:
      'Traditional SEO audits grade you on Google rankings. This grades you on how AI platforms answer buying questions about your category. Different target, different signals, different fixes. The overlap is maybe 20%.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function BlindSpotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
        {/* Background gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,106,0,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#FF6A00]">
            Free AI Visibility Analysis
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Where Is Your Business{' '}
            <span className="text-[#FF6A00]">Invisible</span> to AI?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            Get a free Blind Spot Report showing exactly how ChatGPT, Claude,
            Perplexity, and Google AI see your business right now.
          </p>
          <div className="mt-10">
            <Link
              href="https://calendly.com/theanswerengine-support/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#FF6A00] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#FF6A00]/20 transition-all duration-200 hover:bg-[#e65e00] hover:shadow-xl hover:shadow-[#FF6A00]/30 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2 focus:ring-offset-[#0F1117]"
            >
              Book Your Free Strategy Call
            </Link>
            <p className="mt-3 text-sm text-gray-500">
              No pitch, just the data. 30 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Discover */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
            What You Will Discover
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-gray-400">
            Your report breaks down three critical dimensions of AI search
            visibility.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-200 hover:border-[#FF6A00]/30 hover:bg-white/[0.05]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF6A00]/10">
                <svg
                  className="h-6 w-6 text-[#FF6A00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                AI Visibility Score
              </h3>
              <p className="leading-relaxed text-gray-400">
                How often AI platforms recommend you vs your competitors. See
                exactly where you rank across ChatGPT, Claude, Perplexity, and
                Google AI Overviews.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-200 hover:border-[#FF6A00]/30 hover:bg-white/[0.05]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF6A00]/10">
                <svg
                  className="h-6 w-6 text-[#FF6A00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Citation Gap Analysis
              </h3>
              <p className="leading-relaxed text-gray-400">
                Where competitors are getting cited and you are not. We identify
                the specific queries, topics, and content gaps that keep you out
                of AI responses.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-200 hover:border-[#FF6A00]/30 hover:bg-white/[0.05]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF6A00]/10">
                <svg
                  className="h-6 w-6 text-[#FF6A00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Fix Priority List
              </h3>
              <p className="leading-relaxed text-gray-400">
                The 3 highest-impact changes to make first. No guesswork. Each
                recommendation is ranked by effort required and expected lift in
                AI visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-y border-white/10 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 text-center sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-[#FF6A00] sm:text-4xl">
                1.14M+
              </p>
              <p className="mt-2 text-gray-400">
                Monthly impressions on our own site
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#FF6A00] sm:text-4xl">
                4 / 4
              </p>
              <p className="mt-2 text-gray-400">
                Major AI platforms citing us
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#FF6A00] sm:text-4xl">
                90-Day
              </p>
              <p className="mt-2 text-gray-400">
                Citation guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to See What AI Search Thinks of Your Business?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400">
            Book a free 30-minute strategy call. We will walk you through your
            AI visibility data and show you exactly where the gaps are.
          </p>
          <div className="mt-10">
            <Link
              href="https://calendly.com/theanswerengine-support/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#FF6A00] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#FF6A00]/20 transition-all duration-200 hover:bg-[#e65e00] hover:shadow-xl hover:shadow-[#FF6A00]/30 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2 focus:ring-offset-[#0F1117]"
            >
              Book Your Free Strategy Call
            </Link>
            <p className="mt-3 text-sm text-gray-500">
              No pitch, just the data. 30 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-white/10 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-200 open:border-[#FF6A00]/20"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-lg font-medium text-white [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5">
                  <p className="leading-relaxed text-gray-400">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
