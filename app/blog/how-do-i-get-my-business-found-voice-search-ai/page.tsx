import type { Metadata } from 'next'

export const revalidate = 86400
export const dynamic = 'force-static'

const title =
  'How Do I Get My Business Found on Voice Search and AI?'
const description =
  'Voice search drives 58% of local business queries. Learn how to optimize your business for Siri, Alexa, Google Assistant, and AI platforms so customers find you first.'
const slug = 'how-do-i-get-my-business-found-voice-search-ai'
const publishDate = '2026-03-09'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['The Answer Engine Team'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.svg`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.svg`],
  },
  alternates: {
    canonical: `https://theanswerengine.ai/blog/${slug}`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: title,
      description,
      image: `https://theanswerengine.ai/blog/${slug}.svg`,
      datePublished: publishDate,
      dateModified: publishDate,
      author: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
        logo: {
          '@type': 'ImageObject',
          url: 'https://theanswerengine.ai/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://theanswerengine.ai/blog/${slug}`,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What percentage of voice searches are about local businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research shows that 58% of voice searches are specifically looking for local business information, including hours, directions, and services offered. This makes voice search one of the highest-intent channels for local service businesses.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is voice search different from typing a search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Voice queries are longer and more conversational, typically 4 to 7 words compared to 2 to 3 words for typed searches. Voice users ask full questions like "who is the best plumber near me" rather than typing "plumber near me." This means your content needs to match natural spoken language.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a special website to show up in voice search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You do not need a special website, but your existing site needs specific optimizations. Fast loading speed (under 4.6 seconds), mobile responsiveness, structured data markup, and content written in a question-and-answer format all significantly improve your chances of being the voice search result.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the connection between voice search and AI platforms like ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Voice assistants and AI platforms both pull from structured, authoritative online content to generate answers. The same optimizations that help you appear in voice search results, such as FAQ content, schema markup, and consistent business listings, also improve your visibility on AI platforms like ChatGPT, Claude, and Google AI Overviews.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check if my business shows up in voice search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ask your voice assistant the questions your customers would ask, such as "who is the best [your service] near me" or "what does [your service] cost." If your business is not mentioned in the answer, you are likely missing key optimizations around structured data, business listings, or content format.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://theanswerengine.ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://theanswerengine.ai/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: `https://theanswerengine.ai/blog/${slug}`,
        },
      ],
    },
  ],
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        <li>
          <a href="/" className="hover:text-orange-400 transition-colors">
            Home
          </a>
        </li>
        <li>/</li>
        <li>
          <a href="/blog" className="hover:text-orange-400 transition-colors">
            Blog
          </a>
        </li>
        <li>/</li>
        <li className="text-gray-400 truncate max-w-[250px]">{title}</li>
      </ol>
    </nav>
  )
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        className="min-h-screen"
        style={{ backgroundColor: '#0F1117', color: 'white' }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Breadcrumb />

          {/* Hero Section */}
          <div
            className="relative overflow-hidden rounded-2xl mb-12"
            style={{
              background:
                'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 400"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="600" cy="200" r="120" stroke="#FF6A00" strokeWidth="0.5" />
              <circle cx="600" cy="200" r="80" stroke="#FF6A00" strokeWidth="0.5" />
              <circle cx="600" cy="200" r="40" stroke="#FF6A00" strokeWidth="0.5" />
              <path d="M580 180 L600 160 L620 180" stroke="#FF6A00" strokeWidth="0.8" fill="none" />
              <path d="M570 210 L600 240 L630 210" stroke="#FF6A00" strokeWidth="0.8" fill="none" />
              <circle cx="200" cy="100" r="4" fill="#FF6A00" />
              <circle cx="150" cy="300" r="3" fill="#FF6A00" />
              <circle cx="700" cy="350" r="3" fill="#FF6A00" />
              <line x1="0" y1="150" x2="800" y2="150" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="0" y1="250" x2="800" y2="250" stroke="#FF6A00" strokeWidth="0.3" />
              <line x1="300" y1="0" x2="300" y2="400" stroke="#FF6A00" strokeWidth="0.3" />
            </svg>
            <div className="relative px-8 py-16 sm:px-12 sm:py-20">
              <p className="text-sm font-medium text-orange-400 mb-4">Voice Search &amp; AI</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
                How Do I Get My Business Found on Voice Search and AI?
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 9, 2026</span>
                <span>-</span>
                <span>10 min read</span>
                <span>-</span>
                <span>The Answer Engine Team</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-invert prose-lg max-w-none">

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              More than half the people searching for a local business are no longer typing
              their query into a search bar. They are speaking it out loud. Whether they are
              asking Siri for a plumber, telling Alexa to find a nearby electrician, or using
              Google Assistant to locate a restaurant,{' '}
              <strong className="text-white">58% of voice searches are specifically looking
              for local business information</strong>. If your business is not showing up in
              those spoken answers, you are invisible to a growing majority of potential
              customers.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Why Voice Search Matters for Local Service Businesses
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Voice search is not a novelty anymore. It is how a significant portion of your
              potential customers find services every single day. There are now more than 8.4
              billion voice assistants in use worldwide, which is more than the global
              population. Every smartphone, smart speaker, car dashboard, and laptop has one
              built in.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The numbers that matter most for local businesses are these:{' '}
              <strong className="text-white">76% of voice searches include a
              &quot;near me&quot; component</strong>, and{' '}
              <strong className="text-white">28% of local voice searches result in a
              phone call</strong>. That call rate is significantly higher than what most
              businesses see from traditional search clicks. When someone uses their voice
              to find a service, they are typically ready to act.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Despite this, only about 4% of businesses have taken steps to optimize for
              voice search. That gap between demand and preparation is both the risk and the
              opportunity. If you act now, you are competing against very few businesses for
              a channel that is growing rapidly.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              How Voice Search Actually Works (And Why It Changes Everything)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Voice search behaves differently from typed search in a critical way: it
              usually returns only one answer. When you type a query into Google, you get a
              page of ten or more results to browse. When you ask Siri or Google Assistant a
              question, you get one spoken response. Maybe two. That is it.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This means the competition is not about being on the first page. It is about
              being the single answer. Voice assistants pull their responses from featured
              snippets, structured data, and the top result for a given query. If your
              business is not in that position, you simply do not exist in the voice search
              world.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The language of voice search is also different. Typed queries tend to be 2 to
              3 words: &quot;plumber Los Angeles.&quot; Voice queries are{' '}
              <strong className="text-white">4 to 7 words</strong> and conversational:
              &quot;Who is the best plumber near me that is open right now?&quot; Your
              content needs to match the way people actually talk, not the way they type.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Five Things That Determine Whether Voice Search Finds You
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Getting found on voice search is not random. There are specific factors that
              voice assistants weigh when deciding which business to recommend. Here are the
              five that matter most.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              1. Your Google Business Profile Must Be Complete and Accurate
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Google Assistant and Siri both pull heavily from Google Business Profile data.
              If your profile has incomplete hours, a missing phone number, no service
              categories, or an unverified address, you are unlikely to be recommended. Every
              field should be filled out. Your business name, address, and phone number need
              to be exactly consistent across every platform where they appear.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              2. Your Website Needs to Load Fast on Mobile
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The average voice search result page loads in{' '}
              <strong className="text-white">4.6 seconds</strong>, which is significantly
              faster than most websites. Speed is not just a nice-to-have; it is a ranking
              signal that voice assistants use when selecting results. A slow site will not
              be selected, regardless of how good your content is.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              3. You Need FAQ Content That Matches Spoken Questions
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Featured snippets win{' '}
              <strong className="text-white">40 to 60% of voice search answers</strong>.
              The best way to earn a featured snippet is to answer the exact questions your
              customers ask, in the exact way they ask them. A dedicated FAQ page or
              question-and-answer sections on your service pages give voice assistants the
              clean, structured answers they need.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Think about what your customers ask before they hire you: &quot;How much does
              AC repair cost?&quot; &quot;Do I need a permit for a bathroom remodel?&quot;
              &quot;What is the best time to service my HVAC?&quot; Each of those questions
              should have a clear, direct answer on your website, ideally in the first
              sentence of the response.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              4. Structured Data (Schema Markup) Tells AI What You Do
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Schema markup is code that tells search engines and AI systems exactly what
              your business does, where it is located, what services you offer, and what
              your hours are. It is the difference between a search engine guessing what your
              page is about and knowing with certainty.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              For local businesses, the most important schema types are LocalBusiness,
              Service, FAQPage, and Review. Adding these to your website makes it
              significantly easier for voice assistants to pull accurate information about
              your business and present it as an answer.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3 font-plus-jakarta">
              5. Reviews and Ratings Influence Voice Recommendations
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When a voice assistant has to choose between two similar businesses, reviews
              and ratings are often the deciding factor. A business with 200 reviews and a
              4.7 average will almost always be recommended over one with 15 reviews and a
              4.9 average. Volume and recency matter just as much as the score itself.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Responding to reviews also matters. AI systems recognize active engagement
              with customers as a trust signal. If you are consistently replying to both
              positive and negative reviews, that activity reinforces your legitimacy as a
              recommended business.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              Voice Search and AI Platforms Are Connected
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Here is what most businesses miss: voice search optimization and AI platform
              visibility are two sides of the same coin. The same factors that make voice
              assistants recommend your business are the same factors that make ChatGPT,
              Claude, Perplexity, and Google AI Overviews cite your business in their
              responses.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              All of these systems, whether they are voice-based or text-based, are looking
              for the same things: clear and direct answers to specific questions, consistent
              business information across the web, structured data that confirms who you are
              and what you do, and third-party signals like reviews and citations that
              confirm your expertise.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you optimize for voice search, you are simultaneously building the
              foundation that AI platforms use to decide which businesses to recommend. It
              is not two separate strategies. It is one strategy that works across every
              channel where customers are looking for answers.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              A Practical Checklist: Getting Voice-Search Ready This Week
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You do not need to hire an agency or rebuild your website to start showing up
              in voice search. Here is a practical checklist you can work through this week.
            </p>
            <div className="my-6 p-6 rounded-xl border border-gray-800 bg-gray-900">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">1.</span>
                  <span><strong className="text-white">Claim and complete your Google Business Profile.</strong> Fill in every field: hours, phone, address, services, description, photos. Verify your listing if you have not already.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">2.</span>
                  <span><strong className="text-white">Check your NAP consistency.</strong> Your business name, address, and phone number should be identical on your website, Google Business Profile, Yelp, Bing Places, and every directory listing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">3.</span>
                  <span><strong className="text-white">Add an FAQ section to your top service pages.</strong> Write the questions your customers actually ask, word for word. Answer each one directly in the first sentence, then expand.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">4.</span>
                  <span><strong className="text-white">Test your site speed on mobile.</strong> Use Google PageSpeed Insights. If your mobile score is below 50, focus on image compression, code minification, and removing render-blocking resources.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">5.</span>
                  <span><strong className="text-white">Add LocalBusiness and FAQPage schema markup.</strong> If your website is on WordPress, plugins like Rank Math or Yoast make this straightforward. For custom sites, use Google&apos;s Structured Data Markup Helper.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">6.</span>
                  <span><strong className="text-white">Ask your recent customers for reviews.</strong> Send a direct link to your Google Business Profile review page. Aim for at least 5 new reviews per month.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-0.5">7.</span>
                  <span><strong className="text-white">Test your voice visibility.</strong> Ask Siri, Google Assistant, and Alexa the questions your customers would ask. &quot;Who is the best [your service] near [your city]?&quot; If you are not in the answer, you know what to fix.</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-plus-jakarta">
              The Businesses That Act Now Will Own the Voice Channel
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Voice search adoption is accelerating. The number of voice assistant users has
              grown steadily every year, and the technology is only getting better at
              understanding natural language and local context. As AI platforms like ChatGPT
              integrate voice capabilities and Google continues to expand AI Overviews, the
              line between voice search and AI search is disappearing entirely.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The window of opportunity right now is significant. With only 4% of businesses
              actively optimizing for voice search, the competition is minimal. The
              businesses that build their voice and AI presence today will be the default
              recommendations when everyone else finally catches up.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is not a future problem. The 8.4 billion voice assistants already in use
              are answering questions about your industry right now. The only question is
              whether your business is the one being recommended, or whether your competitor
              is getting that call instead.
            </p>
          </article>

          {/* FAQ Section */}
          <section className="mt-16" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-bold text-white mb-8 font-plus-jakarta"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What percentage of voice searches are about local businesses?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Research shows that{' '}
                  <strong className="text-white">58% of voice searches</strong> are
                  specifically looking for local business information, including hours,
                  directions, and services offered. This makes voice search one of the
                  highest-intent channels for local service businesses.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How is voice search different from typing a search?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Voice queries are longer and more conversational, typically{' '}
                  <strong className="text-white">4 to 7 words</strong> compared to 2 to 3
                  words for typed searches. Voice users ask full questions like &quot;who is
                  the best plumber near me&quot; rather than typing &quot;plumber near
                  me.&quot; Your content needs to match natural spoken language to appear in
                  voice results.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Do I need a special website to show up in voice search?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You do not need a special website, but your existing site needs specific
                  optimizations. Fast loading speed (under 4.6 seconds), mobile
                  responsiveness, structured data markup, and content written in a
                  question-and-answer format all significantly improve your chances of being
                  the voice search result.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What is the connection between voice search and AI platforms like ChatGPT?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Voice assistants and AI platforms both pull from structured, authoritative
                  online content to generate answers. The same optimizations that help you
                  appear in voice search results (FAQ content, schema markup, consistent
                  business listings) also improve your visibility on AI platforms like
                  ChatGPT, Claude, and Google AI Overviews.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How do I check if my business shows up in voice search?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Ask your voice assistant the questions your customers would ask. Try
                  &quot;Who is the best [your service] near me?&quot; or &quot;What does
                  [your service] cost in [your city]?&quot; If your business is not
                  mentioned, focus on completing your Google Business Profile, adding FAQ
                  schema, and building more reviews.
                </p>
              </div>

            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4 font-plus-jakarta">
              Is Your Business Visible to Voice Search and AI?
            </h2>
            <p className="text-gray-300 mb-6">
              Voice assistants and AI platforms are answering questions about your industry
              right now. Find out whether your business is being recommended or overlooked.
              Get a free AI visibility check with real data. No pitch, just the data.
            </p>
            <a
              href="/blindspot"
              className="inline-block bg-[#FF6A00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Get Your Free Blind Spot Report
            </a>
    <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
      <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        (213) 444-2229
      </a>
      <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        support@theanswerengine.ai
      </a>
    </div>
          </div>

          {/* Author Attribution */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                AE
              </div>
              <div>
                <p className="text-white font-medium text-sm">The Answer Engine Team</p>
                <p className="text-gray-500 text-sm">
                  Helping local service businesses stay visible in an AI-first world.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
