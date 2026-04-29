import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Amazon Alexa+ Recommends Local Businesses'
const description = 'Alexa+ runs on Claude AI and integrates Angi, Yelp, and Square to book local services by voice. Here is how the recommendation system works and how to be in it.'
const slug = 'how-amazon-alexa-plus-recommends-local-businesses'
const publishDate = '2026-04-17'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Amazon Alexa Plus local business recommendations',
    'how Alexa Plus finds local businesses',
    'Alexa AI local services',
    'Alexa Plus Claude AI integration',
    'Amazon Alexa local search 2026',
    'Alexa Plus Angi Yelp integration',
    'voice AI local business search',
    'get found on Alexa Plus',
    'Alexa Plus home services booking',
    'Amazon AI business recommendations',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.webp`, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
  },
  alternates: { canonical: `https://theanswerengine.ai/blog/${slug}` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: title,
      description,
      image: {
        '@type': 'ImageObject',
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
      },
      datePublished: publishDate,
      dateModified: publishDate,
      author: {
        '@type': 'Person',
        '@id': 'https://theanswerengine.ai/about#justin-borges',
        name: 'Justin Borges',
        jobTitle: 'Founder, The Answer Engine',
        worksFor: {
          '@type': 'Organization',
          name: 'The Answer Engine',
          url: 'https://theanswerengine.ai',
        },
        knowsAbout: ['Answer Engine Optimization', 'AI Search', 'Content Strategy', 'Real Estate Marketing', 'Citation Surface'],
        url: 'https://theanswerengine.ai/about',
        image: 'https://theanswerengine.ai/justin-borges.webp',
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
          name: 'What AI powers Amazon Alexa+?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alexa+ runs on a combination of Amazon\'s own Nova AI models and Anthropic\'s Claude. Claude handles the conversational reasoning and understanding, while Amazon\'s models handle specific capabilities including local business lookup and booking. Alexa+ rolled out in the U.S. in early 2025 and represents a major leap from the older Alexa, which was limited to simple skill-based commands.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which platforms does Alexa+ use to find local businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alexa+ integrates with Yelp for local business discovery and reviews, Angi for home services booking, Square for payment processing, and Expedia for travel. For local businesses, Yelp and Angi are the most important integrations. When a user asks Alexa+ to find a plumber, landscaper, electrician, or other home service provider, Alexa+ queries Yelp and Angi listings to surface options.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get my business found by Amazon Alexa+?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most direct path is maintaining active, complete profiles on Yelp and Angi since those are the data sources Alexa+ queries for local business recommendations. Your Yelp profile should have accurate business hours, current photos, a complete description of your services, and a healthy review count. Your Angi profile should be up to date with current availability and pricing. Beyond directories, Alexa+ also factors in signals from your website if it is indexed and structured.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Alexa+ actually book an appointment with my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, if your business uses Square for payments or is bookable through Angi. Alexa+ can surface a recommendation, present details from Yelp or Angi, and complete a booking with payment through Square, all within a single voice conversation. This agentic capability (where AI completes a multi-step transaction on the user\'s behalf) is what makes Alexa+ fundamentally different from the older Alexa, which could only provide information.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many people use Alexa+ compared to other AI assistants?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amazon has not released specific Alexa+ subscriber counts, but the underlying Alexa ecosystem reaches hundreds of millions of devices globally. Alexa+ is a premium subscription tier within that ecosystem. The broader context is that voice-based AI search, led by Alexa+, Google Assistant with Gemini, and Apple Siri with AI capabilities, is a growing portion of how consumers find and hire local services. Ignoring voice AI is ignoring a real and expanding channel.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Alexa+ different from regular Alexa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Significantly. The original Alexa relied on pre-built skills and simple intent matching. Alexa+ uses Claude AI for reasoning, which means it can handle complex multi-step conversations ("Find me a landscaper who can do lawn mowing and also install a new drip irrigation system"), understand context across a conversation, and take actions like booking and paying, not just answering. For local businesses, Alexa+ is a booking platform, not just an information assistant.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
        { '@type': 'ListItem', position: 3, name: title, item: `https://theanswerengine.ai/blog/${slug}` },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8 pb-0" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link></li>
          <li className="text-gray-700">/</li>
          <li><Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link></li>
          <li className="text-gray-700">/</li>
          <li className="text-gray-400 truncate max-w-[200px]">{title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-10 pb-12">
        <div className="relative rounded-2xl overflow-hidden bg-[#0F1117] border border-gray-800">
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern id="hero-grid-alexa" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F27D24" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-alexa)" />
          </svg>
          <div className="relative z-10 px-8 py-14 md:px-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="ae-section-label">Platform Deep Dives</span>
              <span className="text-gray-500 text-sm">9 min read</span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-5xl font-black text-white leading-tight mb-5">
              How Amazon Alexa+ Recommends Local Businesses
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Alexa used to just set timers. Alexa+ books plumbers. Powered by Claude AI and integrated with Angi, Yelp, and Square, the new Alexa is a full service booking assistant. Here is how it decides who to recommend.
            </p>
            <p className="text-gray-500 text-sm mt-6">
              Published {publishDate} by Justin Borges
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">

        {/* Stats Grid */}
        <div className="ae-stats-grid mb-12">
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🔊</span>
            <span className="ae-stat-value">2025</span>
            <span className="ae-stat-label">Year Alexa+ launched with Claude AI in the U.S.</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🤝</span>
            <span className="ae-stat-value">4</span>
            <span className="ae-stat-label">Platform integrations: Angi, Yelp, Square, Expedia</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">📦</span>
            <span className="ae-stat-value">400M+</span>
            <span className="ae-stat-label">Alexa-enabled devices in the global ecosystem</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">💳</span>
            <span className="ae-stat-value">0 clicks</span>
            <span className="ae-stat-label">Required by homeowner to complete a booking via Alexa+</span>
          </div>
        </div>

        {/* TOC */}
        <div className="ae-toc mb-12">
          <div className="ae-toc-title">What You Will Learn</div>
          <ol className="space-y-1 text-sm text-gray-400 list-decimal list-inside">
            <li><a href="#what-is-alexa-plus" className="hover:text-[#F27D24] transition-colors">What Alexa+ actually is and how it differs from old Alexa</a></li>
            <li><a href="#ai-engine" className="hover:text-[#F27D24] transition-colors">The Claude AI engine powering recommendations</a></li>
            <li><a href="#integrations" className="hover:text-[#F27D24] transition-colors">Angi, Yelp, Square: the data sources it queries</a></li>
            <li><a href="#recommendation-logic" className="hover:text-[#F27D24] transition-colors">How Alexa+ decides who to surface</a></li>
            <li><a href="#booking-flow" className="hover:text-[#F27D24] transition-colors">The full booking flow from voice to payment</a></li>
            <li><a href="#how-to-appear" className="hover:text-[#F27D24] transition-colors">How to position your business for Alexa+ visibility</a></li>
            <li><a href="#vs-chatgpt" className="hover:text-[#F27D24] transition-colors">Alexa+ vs ChatGPT: different recommendation engines</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="what-is-alexa-plus" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            Alexa+ Is Not the Alexa You Remember
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The original Alexa was a clever novelty: set timers, play music, check the weather, run predefined "skills" that third-party developers built. It was impressive in 2014. By 2023, it felt limited and hollow.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Alexa+ is something different. Launched in 2025, it is a reasoning AI assistant built on Claude (Anthropic) and Amazon's Nova models. It can hold a real conversation, understand complex requests, and most importantly for local businesses: take action. Not just look things up. Actually book, pay, and confirm.
          </p>

          <div className="ae-callout ae-callout-info">
            <div className="ae-callout-title">What "Agentic" Actually Means</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              An agentic AI can take multi-step actions on your behalf. A user can say "Alexa, find me a plumber who can come this Saturday and book them for me." Alexa+ searches Angi, finds available pros, presents options, and with the user's confirmation, completes the booking and payment. The human just approves. The AI executes the rest.
            </p>
          </div>

          <div className="ae-cta-inline my-6">
            <p className="text-gray-400 text-sm">Is your business visible to Alexa+ and other AI assistants?</p>
            <Link href="/blindspot" className="text-[#F27D24] hover:text-[#D96416] font-semibold text-sm transition-colors">
              Get your free Blind Spot Report and find out exactly where you stand
            </Link>
          </div>
        </section>

        {/* Section 2 */}
        <section id="ai-engine" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            The Claude AI Engine Behind the Recommendations
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Anthropic's Claude is a large language model known for its reasoning precision and safety profile. Amazon accessed Claude through Amazon Bedrock (its AI infrastructure platform) to power Alexa+. This is the same Claude that powers many enterprise AI systems.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            What this means practically: Alexa+ does not just keyword-match your business listing to a user query. It reasons. "I need someone reliable who can do both the mowing and the edging and is available weekends" is a query the old Alexa could not handle. Alexa+ processes that intent, queries its data sources, and surfaces options that actually match.
          </p>

          <div className="ae-pros-cons mb-6">
            <div className="ae-pros-box">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">What Claude Helps Alexa+ Do</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Understand complex, multi-part requests</li>
                <li>Handle follow-up questions in context</li>
                <li>Reason about availability and fit</li>
                <li>Explain why it recommended a specific business</li>
                <li>Handle objections and re-query with new parameters</li>
                <li>Confirm and summarize before booking</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">What Limits Alexa+ Recommendations</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Data only from integrated platforms (Angi, Yelp)</li>
                <li>Cannot crawl your website directly for recommendations</li>
                <li>Businesses not listed on partner platforms are invisible</li>
                <li>Incomplete or outdated profiles get filtered out</li>
                <li>Availability information must be current on Angi</li>
                <li>No Alexa+ coverage outside U.S. market yet</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="integrations" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            Angi, Yelp, and Square: The Data Sources Alexa+ Queries
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Alexa+ does not maintain its own local business database. It pulls from partner platforms that have already aggregated that data. For local home services, the two most important integrations are Angi and Yelp.
          </p>

          <div className="ae-decision-matrix mb-6">
            <div className="ae-decision-row">
              <div className="ae-decision-if">User asks for home service (plumber, landscaper, electrician)</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">Alexa+ queries Angi for available, rated pros in the area</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">User asks for local restaurant, salon, or retail</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">Alexa+ queries Yelp for reviews, hours, and contact info</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">User is ready to pay for a service</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">Alexa+ routes payment through Square if the business uses it</div>
            </div>
            <div className="ae-decision-row">
              <div className="ae-decision-if">Business is not on Angi or Yelp</div>
              <div className="ae-decision-arrow">→</div>
              <div className="ae-decision-then">Business does not exist in the Alexa+ recommendation pool</div>
            </div>
          </div>

          <table className="ae-comparison-table mb-6">
            <thead>
              <tr>
                <th>Platform</th>
                <th>What Alexa+ Gets From It</th>
                <th>Who Needs It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">Angi</td>
                <td>Pro listings, availability, pricing, booking flow</td>
                <td className="text-green-400">All home service businesses</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Yelp</td>
                <td>Reviews, ratings, hours, photos, contact info</td>
                <td className="text-green-400">All local businesses</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Square</td>
                <td>Booking confirmation and payment processing</td>
                <td className="text-yellow-400">Businesses accepting payment via Square</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Expedia</td>
                <td>Travel bookings (hotels, flights)</td>
                <td className="text-gray-500">Hospitality only</td>
              </tr>
            </tbody>
          </table>

          <div className="ae-callout ae-callout-orange">
            <div className="ae-callout-title">Angi Is More Important Than You Think</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Angi is not just a lead generation platform anymore. It is infrastructure. Angi data feeds into Alexa+ for voice recommendations and into ChatGPT via the Angi ChatGPT app launched in March 2026. A complete, active Angi profile now means visibility across multiple AI systems simultaneously. Treating Angi as just "another directory" is leaving significant AI visibility on the table.
            </p>
          </div>

          <div className="ae-cta-inline my-6">
            <p className="text-gray-400 text-sm">Not sure which platforms feed your AI visibility?</p>
            <Link href="/blindspot" className="text-[#F27D24] hover:text-[#D96416] font-semibold text-sm transition-colors">
              Run a free Blind Spot Report to see your full directory and AI coverage
            </Link>
          </div>
        </section>

        {/* Section 4 */}
        <section id="recommendation-logic" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            How Alexa+ Decides Who to Surface
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Alexa+ is not random. It applies a ranking logic to the data it pulls from Angi and Yelp before presenting options. The signals that drive surfacing fall into a predictable pattern:
          </p>

          <div className="space-y-4 mb-6">
            <div className="ae-bar-item">
              <span className="ae-bar-label">Service match accuracy</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '95%' }}></div>
              </div>
              <span className="ae-bar-value">95</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Profile completeness (hours, photos, description)</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '88%' }}></div>
              </div>
              <span className="ae-bar-value">88</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Review rating and volume</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '84%' }}></div>
              </div>
              <span className="ae-bar-value">84</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Availability match (can serve the requested time)</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '79%' }}></div>
              </div>
              <span className="ae-bar-value">79</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Response time history</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '71%' }}></div>
              </div>
              <span className="ae-bar-value">71</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Geographic proximity</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '68%' }}></div>
              </div>
              <span className="ae-bar-value">68</span>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            The service match piece is critical: Alexa+ does not guess. If your Angi profile says you offer "general home services" without listing specific services, you will be skipped when someone asks for a specific service. The businesses that surface reliably are the ones whose profiles explicitly list what they do.
          </p>
        </section>

        {/* Section 5 */}
        <section id="booking-flow" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            The Full Booking Flow: From Voice to Payment
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Here is what happens when a homeowner uses Alexa+ to hire a home service provider. Understanding this flow makes it clear exactly where your business either enters the conversation or gets cut off.
          </p>

          <div className="ae-timeline mb-6">
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">1</div>
              <div>
                <div className="font-semibold text-white text-sm">User makes a voice request</div>
                <div className="text-gray-400 text-xs">"Alexa, find me someone to fix a leaky faucet this Thursday"</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">2</div>
              <div>
                <div className="font-semibold text-white text-sm">Claude interprets the intent</div>
                <div className="text-gray-400 text-xs">Service type: plumbing. Urgency: scheduled. Day: Thursday. Location: user's home address.</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">3</div>
              <div>
                <div className="font-semibold text-white text-sm">Alexa+ queries Angi</div>
                <div className="text-gray-400 text-xs">Pulls plumbers near user's address with Thursday availability and ratings above threshold</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">4</div>
              <div>
                <div className="font-semibold text-white text-sm">Alexa+ surfaces top matches</div>
                <div className="text-gray-400 text-xs">"I found three plumbers available Thursday. The highest rated is [Business] with 4.8 stars and 140 reviews."</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">5</div>
              <div>
                <div className="font-semibold text-white text-sm">User confirms</div>
                <div className="text-gray-400 text-xs">"Yeah, book them."</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">6</div>
              <div>
                <div className="font-semibold text-white text-sm">Alexa+ completes the booking and charges Square</div>
                <div className="text-gray-400 text-xs">Confirmation sent to user and business. No website visit required.</div>
              </div>
            </div>
          </div>

          <div className="ae-callout ae-callout-success">
            <div className="ae-callout-title">Zero-Click Booking</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The homeowner never visited your website. Never Googled you. Never read your reviews manually. Alexa+ did all of that on their behalf. The businesses that benefit from this flow are the ones with clean profiles, good reviews, and current availability data. The ones that get skipped are the ones whose profiles are stale, incomplete, or nonexistent.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="how-to-appear" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            How to Position Your Business for Alexa+ Visibility
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The path to Alexa+ visibility is more direct than most AI channels because the data sources are known. You are not trying to guess what a general AI crawler wants. You are optimizing for specific platforms that feed into Alexa+.
          </p>

          <div className="ae-cheat-sheet mb-6">
            <div className="ae-cheat-sheet-title">Alexa+ Visibility Checklist</div>
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Platform</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Claim and complete your Angi profile</td>
                  <td>Angi</td>
                  <td className="text-red-400">Critical</td>
                </tr>
                <tr>
                  <td>List every service you offer explicitly (no "and more")</td>
                  <td>Angi</td>
                  <td className="text-red-400">Critical</td>
                </tr>
                <tr>
                  <td>Update your availability calendar</td>
                  <td>Angi</td>
                  <td className="text-red-400">Critical</td>
                </tr>
                <tr>
                  <td>Claim and complete your Yelp profile</td>
                  <td>Yelp</td>
                  <td className="text-red-400">Critical</td>
                </tr>
                <tr>
                  <td>Add current photos to Yelp</td>
                  <td>Yelp</td>
                  <td className="text-yellow-400">High</td>
                </tr>
                <tr>
                  <td>Achieve 50+ reviews on Yelp</td>
                  <td>Yelp</td>
                  <td className="text-yellow-400">High</td>
                </tr>
                <tr>
                  <td>Connect Square for payment processing</td>
                  <td>Square</td>
                  <td className="text-yellow-400">High (enables full booking flow)</td>
                </tr>
                <tr>
                  <td>Respond to all Angi and Yelp reviews</td>
                  <td>Both</td>
                  <td className="text-blue-400">Medium</td>
                </tr>
                <tr>
                  <td>Maintain rapid response time on Angi inquiries</td>
                  <td>Angi</td>
                  <td className="text-blue-400">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ae-cta-block my-8">
            <h3 className="font-plus-jakarta text-xl font-bold text-white mb-3">Audit Your Alexa+ Readiness</h3>
            <p className="text-gray-400 mb-6">Our Blind Spot Report checks your presence on the platforms that feed Alexa+, ChatGPT, Perplexity, and Google AI. One report, all the gaps.</p>
            <Link href="/blindspot" className="ae-cta-primary inline-flex items-center gap-2">
              Get Your Free Blind Spot Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </section>

        {/* Section 7 */}
        <section id="vs-chatgpt" className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-4">
            Alexa+ vs ChatGPT: Two Different Recommendation Engines
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Both ChatGPT and Alexa+ can recommend local businesses. But they operate very differently and pull from different data sources. Optimizing for one does not automatically cover the other.
          </p>

          <table className="ae-comparison-table mb-6">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Alexa+</th>
                <th>ChatGPT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">Primary AI model</td>
                <td>Claude + Amazon Nova</td>
                <td>GPT-4o</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Data sources for local biz</td>
                <td>Angi, Yelp (integrated)</td>
                <td>Web crawl + Thumbtack, Angi (app integrations)</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Interaction mode</td>
                <td>Voice-first</td>
                <td>Text-first (with voice option)</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Can it book?</td>
                <td className="text-green-400">Yes, directly with payment</td>
                <td className="text-yellow-400">Via Thumbtack integration</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Website crawling</td>
                <td className="text-gray-500">Limited for recommendations</td>
                <td className="text-green-400">Yes, GPTBot crawls your site</td>
              </tr>
            </tbody>
          </table>

          <p className="text-gray-300 leading-relaxed mb-4">
            The smart strategy is not to choose between them. It is to build the foundation that both systems draw from: strong directory profiles, consistent business information, and a website that clearly describes what you do and where you do it. Both AI systems reward the same underlying signals, even if they access them through different pipelines.
          </p>

          <div className="ae-callout ae-callout-info">
            <div className="ae-callout-title">The Convergence Point</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Notice that Angi appears in both ChatGPT's integration ecosystem and Alexa+'s integration ecosystem. That is not coincidence. Angi is positioning itself as the connective tissue of AI-powered home services. A well-maintained Angi profile feeds multiple AI recommendation channels simultaneously, which makes it arguably the highest-leverage platform for home service businesses in 2026.
            </p>
          </div>

          <div className="ae-cta-inline my-6">
            <p className="text-gray-400 text-sm">Want to compare your Alexa+ vs ChatGPT visibility?</p>
            <Link href="/blindspot" className="text-[#F27D24] hover:text-[#D96416] font-semibold text-sm transition-colors">
              Get your free Blind Spot Report and see where each AI platform can find you
            </Link>
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-12">
          <h2 className="font-plus-jakarta text-2xl font-bold text-white mb-4">Related Platform Deep Dives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/how-apple-intelligence-finds-and-recommends-local-businesses" className="block p-4 rounded-xl bg-white/5 border border-gray-800 hover:border-[#F27D24]/40 transition-colors">
              <span className="text-[#F27D24] text-xs font-semibold uppercase tracking-wide">Platform Deep Dives</span>
              <p className="text-white font-semibold text-sm mt-1">How Apple Intelligence Finds and Recommends Local Businesses</p>
            </Link>
            <Link href="/blog/does-being-on-angi-or-thumbtack-help-ai-find-you" className="block p-4 rounded-xl bg-white/5 border border-gray-800 hover:border-[#F27D24]/40 transition-colors">
              <span className="text-[#F27D24] text-xs font-semibold uppercase tracking-wide">Myth Busters</span>
              <p className="text-white font-semibold text-sm mt-1">Does Being on Angi or Thumbtack Help AI Find You</p>
            </Link>
          </div>
        </section>

        {/* 3-tier CTA */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">See If Alexa+ and Other AI Assistants Can Find Your Business</h3>
          <p className="text-gray-400 mb-6">Our free Blind Spot Report audits your visibility across Alexa+, ChatGPT, Perplexity, and Google AI. See exactly which platforms can recommend you and which cannot.</p>
          <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">
            Get Your Free Blind Spot Report
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
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

        {/* Author card */}
        <div className="not-prose">
            <div className="ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div className="ae-author-name" style={{ fontWeight: 600 }}>Justin Borges</div>
                <div className="ae-author-role" style={{ fontWeight: 400 }}>Founder, The Answer Engine</div>
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini.</p>
              </div>
            </div>
          </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'What AI powers Amazon Alexa+?',
                a: "Alexa+ runs on a combination of Amazon's own Nova AI models and Anthropic's Claude. Claude handles the conversational reasoning and understanding, while Amazon's models handle specific capabilities including local business lookup and booking. Alexa+ rolled out in the U.S. in early 2025 and represents a major leap from the older Alexa, which was limited to simple skill-based commands.",
              },
              {
                q: 'Which platforms does Alexa+ use to find local businesses?',
                a: 'Alexa+ integrates with Yelp for local business discovery and reviews, Angi for home services booking, Square for payment processing, and Expedia for travel. For local businesses, Yelp and Angi are the most important integrations. When a user asks Alexa+ to find a plumber, landscaper, electrician, or other home service provider, Alexa+ queries Yelp and Angi listings to surface options.',
              },
              {
                q: 'How do I get my business found by Amazon Alexa+?',
                a: 'The most direct path is maintaining active, complete profiles on Yelp and Angi since those are the data sources Alexa+ queries for local business recommendations. Your Yelp profile should have accurate business hours, current photos, a complete description of your services, and a healthy review count. Your Angi profile should be up to date with current availability and pricing.',
              },
              {
                q: 'Can Alexa+ actually book an appointment with my business?',
                a: "Yes, if your business uses Square for payments or is bookable through Angi. Alexa+ can surface a recommendation, present details from Yelp or Angi, and complete a booking with payment through Square, all within a single voice conversation. This agentic capability is what makes Alexa+ fundamentally different from the older Alexa, which could only provide information.",
              },
              {
                q: 'How many people use Alexa+ compared to other AI assistants?',
                a: "Amazon has not released specific Alexa+ subscriber counts, but the underlying Alexa ecosystem reaches hundreds of millions of devices globally. Voice-based AI search, led by Alexa+, Google Assistant with Gemini, and Apple Siri with AI capabilities, is a growing portion of how consumers find and hire local services.",
              },
              {
                q: 'Is Alexa+ different from regular Alexa?',
                a: "Significantly. The original Alexa relied on pre-built skills and simple intent matching. Alexa+ uses Claude AI for reasoning, which means it can handle complex multi-step conversations, understand context, and take actions like booking and paying, not just answering. For local businesses, Alexa+ is a booking platform, not just an information assistant.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-gray-800 pb-6">
                <h3 className="font-plus-jakarta font-bold text-white mb-2 text-lg">{q}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="ae-final-cta">
          <h2 className="font-plus-jakarta text-3xl font-black text-white mb-4">
            Get Into the AI Recommendation Pool
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Alexa+, ChatGPT, Perplexity, and Google AI are recommending local businesses right now. Your free Blind Spot Report shows exactly where you stand across all of them.
          </p>
          <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D96416] transition-colors ae-pulse-glow">
            Get Your Free Blind Spot Report
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <p className="text-gray-600 text-sm mt-4">Free. No credit card. Results in minutes.</p>
        </div>

      </main>
    </>
  )
}
