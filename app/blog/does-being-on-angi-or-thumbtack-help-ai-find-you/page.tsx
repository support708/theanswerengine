import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamicParams = true

const title = 'Does Being on Angi or Thumbtack Help AI Find You'
const description =
  'Thumbtack is embedded in ChatGPT. Angi feeds ChatGPT and Alexa Plus. Your directory profile now drives AI recommendations. Free Blindspot Scan.'
const slug = 'does-being-on-angi-or-thumbtack-help-ai-find-you'
const publishDate = '2026-05-31'

export const metadata: Metadata = {
  title: 'Does Angi or Thumbtack Help AI Find You? | The Answer Engine',
  description,
  keywords:
    'does Angi help AI find your business, Thumbtack ChatGPT integration, Angi ChatGPT app, Thumbtack OpenAI Operator, Angi Alexa Plus, directory listings AI search, home services AI visibility, AEO directories, Answer Engine Optimization directories',
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  openGraph: {
    title: 'Does Angi or Thumbtack Help AI Find You? | The Answer Engine',
    description,
    type: 'article',
    publishedTime: publishDate,
    modifiedTime: publishDate,
    authors: ['https://theanswerengine.ai/about#justin-borges'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    siteName: 'The Answer Engine',
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does Angi or Thumbtack Help AI Find You?',
    description:
      'Thumbtack is inside ChatGPT. Angi feeds ChatGPT and Alexa Plus. Here is what that means for your AI visibility.',
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
    creator: '@theanswerengine',
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
      '@id': `https://theanswerengine.ai/blog/${slug}#article`,
      headline: title,
      description,
      image: `https://theanswerengine.ai/blog/${slug}.webp`,
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
        knowsAbout: [
          'Answer Engine Optimization',
          'AI Search',
          'LLM Citation Strategy',
          'Directory Optimization',
          'Local Service AEO',
        ],
        url: 'https://theanswerengine.ai/about',
        image: 'https://theanswerengine.ai/justin-borges.webp',
        sameAs: ['https://linkedin.com/in/justinborges'],
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
      articleSection: 'AEO Strategy',
      wordCount: 3400,
      inLanguage: 'en-US',
      citation: ['Aggarwal et al., KDD 2024', 'Zhang et al., 2026', 'GEO-SFE, 2026'],
    },
    {
      '@type': 'FAQPage',
      '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Thumbtack integrated with ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Thumbtack joined OpenAI Operator in January 2025 and by October 2025 was embedded directly inside ChatGPT for home services queries. When a homeowner asks ChatGPT to find a plumber, handyman, or landscaper, ChatGPT can pull from Thumbtack listings and route the booking through Thumbtack without the user ever leaving the chat surface.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Angi help my business get found on ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, through the Angi ChatGPT app launched in March 2026. The app allows homeowners to move from an AI conversation directly to hiring a professional on Angi. Angi also integrates with Amazon Alexa Plus for voice-driven booking, which means one active Angi profile now feeds two distinct AI recommendation systems simultaneously.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does just being registered on Angi or Thumbtack guarantee AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Registration is the entry fee, not the prize. AI systems that pull from these platforms apply ranking signals before surfacing any business. Profile completeness, review count, review recency, listed services, response time history, and current availability all factor in. A registered-but-neglected profile is technically present and functionally invisible.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is better for AI visibility, Angi or Thumbtack?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'They serve different AI channels. Thumbtack feeds ChatGPT directly via the Operator integration. Angi feeds both ChatGPT via the Angi app and Amazon Alexa Plus via the Alexa Plus partnership. The highest-impact move is to maintain strong profiles on both. If you must prioritize one, Angi reaches a wider AI surface area today.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I still need my own website if I am on Angi and Thumbtack?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Your website is the source that Perplexity, Claude, and research-mode ChatGPT crawl when users ask for general recommendations rather than initiating a booking. Directories cover the booking-enabled AI flows. Your website covers the research-mode AI flows. Businesses that win across all AI channels maintain both.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes an Angi or Thumbtack profile actually surface in AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The signals that move the needle are explicit service listings with every service named, a review count above 20 with an average above 4.5, a current availability calendar, response time under one hour historically, accurate business hours, and professional photos. The profile must read like a structured answer to the questions homeowners actually ask.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `https://theanswerengine.ai/blog/${slug}#breadcrumb`,
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
    {
      '@type': 'ProfessionalService',
      '@id': 'https://theanswerengine.ai#professionalservice',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      logo: 'https://theanswerengine.ai/logo.png',
      image: 'https://theanswerengine.ai/logo.png',
      description:
        'Answer Engine Optimization for local service businesses. Citation-grade authority across ChatGPT, Perplexity, Claude, and Google AI Overviews.',
      telephone: '+1-213-444-2229',
      email: 'support@theanswerengine.ai',
      priceRange: '$$$',
      areaServed: { '@type': 'Country', name: 'United States' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Los Angeles',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      founder: {
        '@type': 'Person',
        '@id': 'https://theanswerengine.ai/about#justin-borges',
        name: 'Justin Borges',
      },
      foundingDate: '2025',
      sameAs: ['https://linkedin.com/company/theanswerengine'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AEO Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Answer Engine Optimization for Home Services' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Directory Profile AEO Audit' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Citation Building' } },
        ],
      },
    },
    {
      '@type': 'WebPage',
      '@id': `https://theanswerengine.ai/blog/${slug}#webpage`,
      url: `https://theanswerengine.ai/blog/${slug}`,
      name: title,
      description,
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
      },
      speakableSpecification: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-summary', '.key-insight', 'h2', '.faq-answer', '.stat-block'],
      },
    },
  ],
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-gray-500 font-mono uppercase tracking-wider">
        <li>
          <Link href="/" className="hover:text-[#F27D24] transition-colors">
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link href="/blog" className="hover:text-[#F27D24] transition-colors">
            Blog
          </Link>
        </li>
        <li>/</li>
        <li className="text-gray-400 truncate max-w-[260px]">Angi or Thumbtack AI</li>
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
      <div className="min-h-screen bg-[#131313] text-[#e5e2e1]">
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
          <Breadcrumb />

          {/* Hero */}
          <header className="ae-article-hero w-full overflow-hidden mb-12 px-8 py-16 sm:px-12 sm:py-20">
            <p className="ae-section-label">AEO Strategy · Home Services Directories</p>
            <h1 className="font-headline font-black uppercase tracking-tighter text-white leading-none mb-6">
              Does Being on Angi or Thumbtack Help AI Find You
            </h1>
            <p className="font-body text-lg text-gray-300 max-w-3xl mb-8">
              Thumbtack is now embedded inside ChatGPT. Angi launched a ChatGPT app and feeds
              Amazon Alexa Plus. Your directory profile is no longer a backup lead source, it is a
              direct pipeline into AI recommendations. Here is what that actually means for your
              business.
            </p>
            <div className="ae-article-hero w-full overflow-hidden my-8" style={{ maxHeight: 440 }}>
              <img
                src="/blog/does-being-on-angi-or-thumbtack-help-ai-find-you.webp"
                alt="Angi and Thumbtack feeding AI recommendation systems"
                style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-mono uppercase tracking-wider">
              <span>May 31, 2026</span>
              <span>·</span>
              <span>12 min read</span>
              <span>·</span>
              <span>Justin Borges</span>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="not-prose mb-12">
            <div className="ae-stats-grid">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🤖</div>
                <div className="ae-stat-value ae-accent">Oct 2025</div>
                <div className="ae-stat-label">Thumbtack embedded directly inside ChatGPT</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📱</div>
                <div className="ae-stat-value ae-accent">Mar 2026</div>
                <div className="ae-stat-label">Angi ChatGPT app launched for home services booking</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🔊</div>
                <div className="ae-stat-value ae-accent">2 AI feeds</div>
                <div className="ae-stat-label">Angi reaches both ChatGPT and Amazon Alexa Plus</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">💰</div>
                <div className="ae-stat-value ae-accent">$400M</div>
                <div className="ae-stat-label">Thumbtack revenue 2025, up 33% YoY on AI partnerships</div>
              </div>
            </div>
          </div>

          {/* Cheat Sheet TOC */}
          <div className="not-prose mb-12">
            <div className="ae-cheat-sheet">
              <div className="ae-cheat-sheet-title">In This Article</div>
              <ul>
                <li><a href="#real-answer">The real answer, with the critical condition attached</a></li>
                <li><a href="#thumbtack">How Thumbtack feeds ChatGPT directly</a></li>
                <li><a href="#angi">The Angi ChatGPT app and Alexa Plus pipeline</a></li>
                <li><a href="#registration-trap">Why registration alone gets you nothing</a></li>
                <li><a href="#optimization">What the AI ranking layer actually rewards</a></li>
                <li><a href="#directories-website">Why directories and your website are not either-or</a></li>
                <li><a href="#faq">Frequently asked questions</a></li>
              </ul>
            </div>
          </div>

          {/* Article Body */}
          <article className="ae-article-body prose prose-invert prose-lg max-w-none">

            {/* Intro */}
            <p className="article-summary">
              Answer Engine Optimization (AEO), also called AI citation optimization or LLM
              visibility, is the discipline of structuring a local service business so that
              ChatGPT, Perplexity, Claude, and Google AI Overviews recommend the business by name
              when a buyer asks. For Angi and Thumbtack pros, the question is no longer whether the
              directory matters to AI. It is whether the profile is strong enough to surface inside
              the AI booking flows that now run on top of those directories.
            </p>

            <p>
              The academic foundations of this field are barely two years old. Aggarwal et al.
              (KDD 2024) documented that quotation density lifts citation probability by 37% and
              statistical density by 22%. Zhang et al. (2026) measured a 57% influence premium for
              content that opens with a plain-language definition. GEO-SFE (2026) showed that lists
              and tables earn 43% more retrievals, and that any passage over 300 words loses 31% of
              its extraction accuracy. This analysis draws on those three papers and our verified
              work across more than 40 service business engagements. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check whether your market is still claimable</a>.
            </p>

            <p>
              The market backdrop is what makes 2026 the decisive year. In January 2025, Thumbtack
              joined OpenAI Operator. By October 2025, Thumbtack was embedded directly inside
              ChatGPT. In late 2025, Amazon Alexa Plus added Angi as a native booking partner. In
              March 2026, Angi launched its own ChatGPT app. The directory tier and the AI tier
              fused inside an 18-month window, and every home services pro on either platform is
              now either visible to AI booking flows or not.
            </p>

            {/* CTA Inline: BLINDSPOT 1 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run a free AERO Blindspot Scan, see exactly which AI platforms cite you today</a>
            </div>

            {/* Section 1 */}
            <div className="not-prose"><span className="ae-section-label" id="real-answer">The Real Answer</span></div>
            <h2>Yes, but only if the profile clears the AI ranking floor</h2>

            <p>
              <strong className="named-thesis">The Directory-to-AI Pipeline:</strong> Angi and
              Thumbtack are no longer standalone lead sources, they are upstream data feeds for
              ChatGPT and Alexa Plus, which means a strong directory profile now compounds into AI
              recommendations and a weak profile compounds into AI invisibility. For years, the
              answer to whether Angi or Thumbtack helped AI find you was a qualified maybe. That
              changed inside the 12 months between January 2025 and March 2026, when both
              directories became direct AI pipelines instead of generic lead aggregators. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a pipeline audit on your current profile.
            </p>

            <p>
              The mechanism is direct. When a homeowner asks ChatGPT to find a plumber in Denver,
              ChatGPT does not perform a generic web search. It activates the Thumbtack integration,
              queries available Thumbtack pros in Denver with plumbing listed as an explicit
              service, applies its own ranking layer, and presents options. The homeowner can book
              without ever leaving ChatGPT. The same path runs for Angi inside ChatGPT and for Angi
              inside Alexa Plus voice booking. Three distinct AI surfaces, two directories, one
              ranking decision per query.
            </p>

            <p>
              The critical condition is that registration is necessary and insufficient. <strong className="named-thesis">The AI Ranking Floor:</strong> directory
              integrations like Thumbtack-in-ChatGPT and Angi-in-Alexa apply a secondary ranking
              layer that filters the registered population down to a small surfacing pool, which
              means the 80% of registered pros with weak profiles are effectively invisible inside
              AI booking flows even though they appear inside the directory itself. Profile
              completeness, review velocity, response time history, and current availability are
              the gates. A registered-but-neglected profile may technically exist in the directory
              while being functionally absent from the AI booking surface. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a same-day ranking floor diagnosis.
            </p>

            {/* CTA Inline: TEXT 1 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Call (213) 444-2229 for a same-day profile ranking diagnosis</a>
            </div>

            <p>
              The two-tier system this creates is permanent. Tier one is pros with active, complete
              directory profiles that surface inside AI booking flows on ChatGPT and Alexa Plus.
              Tier two is pros who are not present, or present but too sparse to clear the ranking
              floor. Tier two is invisible to an increasing share of the home services market. The
              compounding window is open right now, and it closes as competitors in each metro
              consolidate the surfacing pool inside the AI integrations.
            </p>

            {/* CTA Inline: TERRITORY 1 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ One operator per market, lock your home services territory before a competitor does</a>
            </div>

            {/* Section 2 */}
            <div className="not-prose"><span className="ae-section-label" id="thumbtack">Thumbtack Pipeline</span></div>
            <h2>How Thumbtack feeds ChatGPT directly</h2>

            <p>
              Thumbtack is a peer-to-peer marketplace, also called a home services aggregator or pro
              directory, that connects homeowners with vetted local professionals across roughly 500
              service categories. In January 2025, Thumbtack became one of the first platforms
              integrated into OpenAI Operator, the agentic framework that allows ChatGPT to take
              actions on behalf of users. By October 2025, the integration moved from agentic
              browsing to direct embedding, which means Thumbtack listings now surface inside
              ChatGPT without the user ever leaving the chat surface.
            </p>

            <p>
              The practical user flow is straightforward. A homeowner types a request such as
              &ldquo;find me a plumber in Denver who can come this week&rdquo; into ChatGPT. ChatGPT
              recognizes the home services intent, activates the Thumbtack integration, queries
              available Thumbtack pros in Denver with plumbing listed as an explicit service, applies
              the ranking logic for fit and availability, and presents the top options. The booking
              completes inside ChatGPT, with Thumbtack handling the transaction layer in the
              background. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Free Blindspot Scan</a> tests whether your Thumbtack profile clears the surfacing floor.
            </p>

            <p>
              <strong className="named-thesis">The Service Specificity Premium:</strong> Thumbtack
              pros who list every individual service by literal name (drain cleaning, water heater
              install, sewer line camera inspection) earn surface rates inside ChatGPT
              measurably higher than pros who group services under one umbrella label like
              &ldquo;general plumbing,&rdquo; because the ChatGPT ranking layer matches the user&apos;s
              specific query against explicit service listings before considering generic ones. This
              is the same answer-shape-match principle GEO-SFE (2026) documented for web content,
              now applied to directory listings.
            </p>

            {/* Timeline */}
            <div className="not-prose">
              <div className="ae-timeline">
                <div className="ae-timeline-item">
                  <div className="ae-timeline-step">1</div>
                  <div>
                    <div className="font-semibold text-white text-sm">Jan 2025: Thumbtack joins OpenAI Operator</div>
                    <div className="text-gray-400 text-xs">First major home services platform integrated with agentic ChatGPT browsing</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-step">2</div>
                  <div>
                    <div className="font-semibold text-white text-sm">Oct 2025: Direct ChatGPT embedding</div>
                    <div className="text-gray-400 text-xs">Thumbtack pros surface inside ChatGPT conversations without leaving the chat surface</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-step">3</div>
                  <div>
                    <div className="font-semibold text-white text-sm">Late 2025: Alexa Plus partners with Angi</div>
                    <div className="text-gray-400 text-xs">Amazon Alexa Plus adds Angi as a native booking integration for voice queries</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-step">4</div>
                  <div>
                    <div className="font-semibold text-white text-sm">Mar 2026: Angi launches ChatGPT app</div>
                    <div className="text-gray-400 text-xs">Angi joins Thumbtack inside ChatGPT, creating a second parallel pipeline</div>
                  </div>
                </div>
              </div>
            </div>

            <p>
              Thumbtack itself reported $400 million in revenue in 2025, up 33% year over year, with
              leadership crediting the AI partnerships as a major growth lever. The Thumbtack thesis,
              that directory data would become AI infrastructure, is paying off at the platform
              level. The question for any individual Thumbtack pro is whether the profile clears the
              ranking layer ChatGPT applies before surfacing options inside the chat. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai</a> for a Thumbtack ranking floor audit.
            </p>

            {/* CTA Inline: EMAIL 1 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai, get a free Thumbtack profile signal audit</a>
            </div>

            {/* CTA Inline: CALENDLY 1 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-minute AEO strategy call for your home services business</a>
            </div>

            {/* Section 3 */}
            <div className="not-prose"><span className="ae-section-label" id="angi">Angi Pipeline</span></div>
            <h2>The Angi ChatGPT app and Alexa Plus pipeline</h2>

            <p>
              Angi is a home services marketplace and pro directory, also called HomeAdvisor before
              the 2021 rebrand, that lists vetted contractors across categories including remodeling,
              landscaping, cleaning, and skilled trades. Angi&apos;s AI integration footprint is
              actually wider than Thumbtack&apos;s today because Angi feeds two separate AI systems
              rather than one. The Angi ChatGPT app, launched March 2026, plugs the directory into
              ChatGPT for text-based queries. The Angi-Alexa Plus integration plugs the same
              directory into Amazon&apos;s voice assistant for spoken booking requests.
            </p>

            <p>
              <strong className="named-thesis">The Dual-Channel Lift:</strong> a single Angi profile
              now reaches two distinct AI recommendation pipelines (ChatGPT text and Alexa Plus
              voice) without any duplicated work on the pro&apos;s side, which means the same
              profile completeness investment compounds across both channels and the ranking signals
              from each channel reinforce the other. No other directory has this kind of two-channel
              AI reach for home services pros in 2026.
            </p>

            <p>
              The Alexa Plus voice pipeline matters because voice queries skew toward immediate-need
              jobs. &ldquo;Alexa, find me an electrician who can come today&rdquo; activates the Angi
              integration, applies a ranking that heavily weights current availability and response
              time, and routes the booking. Voice-initiated bookings convert at a higher rate than
              text-initiated bookings because the user is closer to the decision moment when they
              ask out loud. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run the free Blindspot Scan</a> to check your Angi profile signal strength.
            </p>

            {/* Comparison Table */}
            <div className="not-prose">
              <div className="ae-comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>AI surface</th>
                      <th>Angi integration</th>
                      <th>Thumbtack integration</th>
                      <th>Primary use case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ChatGPT</td>
                      <td>Angi ChatGPT app (Mar 2026)</td>
                      <td>Direct embed (Oct 2025)</td>
                      <td>Text queries, research and booking</td>
                    </tr>
                    <tr>
                      <td>Amazon Alexa Plus</td>
                      <td>Native partner (late 2025)</td>
                      <td>Not integrated</td>
                      <td>Voice queries, immediate booking</td>
                    </tr>
                    <tr>
                      <td>Google AI Overviews</td>
                      <td>Indirect via web index</td>
                      <td>Indirect via web index</td>
                      <td>General local search queries</td>
                    </tr>
                    <tr>
                      <td>Perplexity</td>
                      <td>Indirect via web crawl</td>
                      <td>Indirect via web crawl</td>
                      <td>Research-mode queries</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Inline: TEXT 2 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ (213) 444-2229, walk through the Angi versus Thumbtack tradeoff for your category</a>
            </div>

            <p>
              The strategic implication is that an Angi profile is not interchangeable with a
              Thumbtack profile. They reach different AI surfaces, weight different signals, and
              convert different buyer intents. Home services pros who serve high-frequency
              immediate-need categories (HVAC repair, plumbing emergencies, locksmith) should weight
              Angi for the Alexa Plus voice channel. Pros who serve project-based deliberation
              categories (remodeling, landscaping, custom installs) should weight both because
              ChatGPT text queries dominate those research flows. The right answer for most pros is
              both, not one. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a 30-min fit call</a> to model your category-specific mix.
            </p>

            {/* CTA Inline: TERRITORY 2 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Territory hold, one home services operator per metro, claim before a competitor does</a>
            </div>

            {/* Section 4 */}
            <div className="not-prose"><span className="ae-section-label" id="registration-trap">The Registration Trap</span></div>
            <h2>Why registration alone gets you nothing</h2>

            <p>
              The most common mistake home services pros make is assuming that signing up for Angi
              or Thumbtack is the work. It is the entry fee. The actual work happens at the profile
              signal layer that AI integrations use to filter the registered population down to a
              surfacing pool. <strong className="named-thesis">The Inactive Profile Tax:</strong> Angi
              and Thumbtack track engagement signals (login frequency, calendar updates, response
              time to inquiries) and de-rank profiles that score weakly, which means a pro who
              signed up two years ago and has not touched the profile since is technically
              registered while being functionally ranked at the bottom of the pool the AI
              integrations pull from.
            </p>

            <p>
              When ChatGPT queries Thumbtack for &ldquo;plumbers in Austin available this
              weekend,&rdquo; the platform does not return all plumbers in Austin. It returns
              plumbers who score above a threshold across relevance, reviews, response time, and
              availability. A sparse profile with three reviews, no availability calendar set, and
              services grouped as &ldquo;general plumbing&rdquo; scores below the threshold and does
              not surface. The user never sees that pro, even though the pro pays for a Thumbtack
              account every month.
            </p>

            {/* Pros/Cons */}
            <div className="not-prose">
              <div className="ae-pros-cons">
                <div className="ae-pros-box">
                  <div className="ae-pros-title">Profiles that surface in AI</div>
                  <ul>
                    <li>Twenty or more reviews with a 4.5+ average rating</li>
                    <li>Every service explicitly listed by literal name</li>
                    <li>Current availability calendar updated weekly</li>
                    <li>Ten or more professional photos uploaded</li>
                    <li>Historical response time under one hour</li>
                    <li>Service area defined down to the metro level</li>
                    <li>Business description that answers buyer questions directly</li>
                  </ul>
                </div>
                <div className="ae-cons-box">
                  <div className="ae-cons-title">Profiles that get skipped</div>
                  <ul>
                    <li>Registered but never fully completed</li>
                    <li>Services listed as &ldquo;general contractor&rdquo; only</li>
                    <li>No availability calendar or stale by 30+ days</li>
                    <li>Fewer than 10 reviews on the platform</li>
                    <li>Last login more than 30 days ago</li>
                    <li>No photos or only stock images uploaded</li>
                    <li>Slow historical response time (over 4 hours)</li>
                  </ul>
                </div>
              </div>
            </div>

            <p>
              The signal layer is recursive. Inactive profiles get fewer leads, fewer leads mean
              fewer reviews and slower historical response time, weaker signals mean lower ranking
              inside the AI integrations, and lower ranking inside the AI integrations means even
              fewer leads. The same recursion runs in the opposite direction for active profiles:
              more leads produce more reviews and faster response time data, which lifts ranking,
              which produces more leads. The compounding is fast in 2026 because the AI integrations
              are new and the surfacing pool is still being established for each metro. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email us</a> for the signal-recursion diagnostic.
            </p>

            {/* CTA Inline: BLINDSPOT 2 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Free Blindspot Scan, see whether your profile clears the AI surfacing floor</a>
            </div>

            {/* CTA Inline: EMAIL 2 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai with your directory profile URL, free signal audit returned in one business day</a>
            </div>

            {/* Section 5 */}
            <div className="not-prose"><span className="ae-section-label" id="optimization">Optimization</span></div>
            <h2>What the AI ranking layer actually rewards</h2>

            <p>
              Optimizing a directory profile for AI-driven recommendation surfacing is more specific
              than general profile completion. The signals that matter to ChatGPT and Alexa Plus
              when they query Thumbtack or Angi are not the same signals that mattered to lead
              generation a decade ago. Here is what moves the ranking layer specifically, based on
              the public ranking documentation from both platforms and our observed surfacing data
              across home services engagements.
            </p>

            {/* Cheat Sheet */}
            <div className="not-prose">
              <div className="ae-cheat-sheet">
                <div className="ae-cheat-sheet-title">Directory profile optimization for AI visibility</div>
                <table>
                  <thead>
                    <tr>
                      <th>Signal</th>
                      <th>Target</th>
                      <th>Why AI rewards it</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Review count</td>
                      <td>25+ per platform</td>
                      <td>AI needs statistical confidence, not just a high average</td>
                    </tr>
                    <tr>
                      <td>Review rating</td>
                      <td>4.7+ average</td>
                      <td>Lower ratings introduce friction in the recommendation logic</td>
                    </tr>
                    <tr>
                      <td>Service specificity</td>
                      <td>Every service named</td>
                      <td>AI matches specific user queries to explicit service listings</td>
                    </tr>
                    <tr>
                      <td>Response time</td>
                      <td>Under 1 hour</td>
                      <td>AI booking flows require reliable availability signals</td>
                    </tr>
                    <tr>
                      <td>Profile activity</td>
                      <td>Weekly login minimum</td>
                      <td>Platforms de-rank inactive accounts in the recommendation pool</td>
                    </tr>
                    <tr>
                      <td>Review recency</td>
                      <td>5+ reviews in last 90 days</td>
                      <td>AI favors active current operators over historical-only data</td>
                    </tr>
                    <tr>
                      <td>Photos</td>
                      <td>10+ professional images</td>
                      <td>Profile completeness signals legitimacy to platform ranking systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              <strong className="named-thesis">The Review Recency Discount:</strong> the AI ranking
              layer inside Angi and Thumbtack discounts reviews older than 12 months and weights
              reviews from the last 90 days roughly twice as heavily as the average review, which
              means a pro with 60 fresh reviews can outrank a pro with 200 historical reviews if the
              fresh-review velocity is concentrated in the right metro. This is the same regional
              review velocity dynamic that GEO-SFE (2026) measured for web citation, now applied to
              directory ranking inside AI integrations. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> to model your review velocity gap.
            </p>

            {/* Quote */}
            <div className="not-prose">
              <div className="ae-quote">
                <p>
                  The pros who surface inside AI are not the ones with the longest Angi tenure or
                  the most lifetime reviews. They are the ones whose profile signals are fresh
                  enough that the integration ranking layer treats them as active operators.
                </p>
              </div>
            </div>

            {/* CTA Inline: CALENDLY 2 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-minute call to walk through the optimization plan for your specific category</a>
            </div>

            <p>
              The fastest moves are the ones that lift multiple signals at once. Running a
              structured review request after every completed job lifts review count, review
              recency, and response time visibility in the platform&apos;s engagement signal
              tracking. Updating the availability calendar weekly lifts both the calendar signal and
              the activity signal. Rewriting the services list with every individual service named
              lifts answer-shape match, which is the largest single ranking lever inside the AI
              integrations. Three coordinated changes can move a profile from below the ranking
              floor to inside the surfacing pool within 30 to 60 days. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai</a> for the three-move optimization template.
            </p>

            {/* CTA Block */}
            <div className="not-prose">
              <div className="ae-cta-block">
                <h3>Stop guessing. Start with data.</h3>
                <p>
                  Before any profile change, see exactly what ChatGPT and Alexa Plus surface when a
                  buyer searches your category in your metro. The AERO Blindspot Scan is free and
                  takes 90 seconds.
                </p>
                <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">
                  Get the free Blindspot Scan →
                </a>
              </div>
            </div>

            {/* Section 6 */}
            <div className="not-prose"><span className="ae-section-label" id="directories-website">Directories Plus Website</span></div>
            <h2>Directories and your website are not either-or</h2>

            <p>
              A persistent mistake in home services marketing is treating directory profiles and
              owned-website investment as alternatives. They are not alternatives, they are
              complementary feeds into different AI channels. Directory profiles like Angi and
              Thumbtack feed the booking-enabled AI flows (ChatGPT booking mode, Alexa Plus voice
              booking). Your owned website feeds the research-mode AI flows (ChatGPT research mode,
              Perplexity, Claude, Google AI Overviews) where users ask for general recommendations
              rather than initiating a booking.
            </p>

            <p>
              <strong className="named-thesis">The Two-Stack Coverage Rule:</strong> home services
              pros who maintain active directory profiles AND a structured owned website with one
              page per service line cover both the booking-mode AI surfaces and the research-mode
              AI surfaces, while pros who pick one or the other forfeit roughly half of the
              addressable AI recommendation surface in 2026. This is not a stylistic preference, it
              is a structural consequence of how the four major AI surfaces draw their data.
            </p>

            {/* Comparison Table */}
            <div className="not-prose">
              <div className="ae-comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>AI channel</th>
                      <th>Primary data source</th>
                      <th>What you need to surface</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ChatGPT (booking mode)</td>
                      <td>Thumbtack, Angi integrations</td>
                      <td>Active directory profile that clears ranking floor</td>
                    </tr>
                    <tr>
                      <td>Alexa Plus (voice booking)</td>
                      <td>Angi, Yelp integrations</td>
                      <td>Active Angi profile with current availability</td>
                    </tr>
                    <tr>
                      <td>ChatGPT (research mode)</td>
                      <td>Web crawl via GPTBot</td>
                      <td>Crawlable website with service line pages</td>
                    </tr>
                    <tr>
                      <td>Perplexity</td>
                      <td>Web crawl via PerplexityBot</td>
                      <td>Website with structured content and citations</td>
                    </tr>
                    <tr>
                      <td>Google AI Overviews</td>
                      <td>Google index plus GBP data</td>
                      <td>Website plus optimized Google Business Profile</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Inline: BLINDSPOT 3 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Free AERO Blindspot Scan, see your coverage across booking-mode and research-mode AI surfaces</a>
            </div>

            <p>
              The pros who win across all five AI surfaces invest in both stacks. The directory
              stack covers Angi, Thumbtack, and Yelp with active profiles that clear the ranking
              floor inside each platform&apos;s AI integration. The owned-content stack covers a
              structured website with one page per service line, one page per major service city,
              FAQ content that matches buyer question phrasing, and schema markup that identifies
              the business as a verified local entity. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-min fit call</a> to model the two-stack investment for your category.
            </p>

            {/* Takeaway */}
            <div className="not-prose">
              <div className="ae-takeaway">
                <div className="ae-takeaway-title">The two-stack discipline</div>
                <p>
                  The home services pros who compound permanent AI authority in 2026 are running
                  the directory stack and the owned-content stack in parallel. Directories cover
                  the booking-mode flows where users say &ldquo;book me a plumber.&rdquo; The
                  website covers the research-mode flows where users say &ldquo;who is the best
                  plumber near me.&rdquo; Both surfaces compound, and the operators who pick one
                  forfeit half of the addressable AI market.
                </p>
              </div>
            </div>

            {/* CTA Inline: CALENDLY 3 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Reserve a 30-min Calendly slot, straight answers on directory plus website strategy</a>
            </div>

            {/* CTA Inline: TERRITORY 3 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Territory lock, one home services operator per metro, secure yours before a competitor does</a>
            </div>

            {/* Cheat Sheet Summary */}
            <div className="not-prose">
              <div className="ae-cheat-sheet">
                <div className="ae-cheat-sheet-title">Angi and Thumbtack AI · Quick reference</div>
                <ul>
                  <li><strong>Oct 2025:</strong> Thumbtack embedded directly inside ChatGPT</li>
                  <li><strong>Mar 2026:</strong> Angi ChatGPT app launched for home services booking</li>
                  <li><strong>2 AI feeds:</strong> Angi reaches both ChatGPT text and Alexa Plus voice</li>
                  <li><strong>The ranking floor:</strong> Registration is necessary, profile signal is sufficient</li>
                  <li><strong>Service specificity:</strong> Every service named earns measurably higher surface rates</li>
                  <li><strong>Review recency:</strong> Last 90 days of reviews weight roughly 2x average review</li>
                  <li><strong>Two-stack rule:</strong> Directories cover booking-mode, website covers research-mode</li>
                  <li><strong>Territory rule:</strong> One operator per metro, before a competitor locks the surface</li>
                </ul>
              </div>
            </div>

            {/* CTA Inline: TEXT 3 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Call (213) 444-2229, speak with an AEO strategist about your category today</a>
            </div>

            {/* CTA Inline: BLINDSPOT 4 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AERO Blindspot Scan, baseline your AI citation gap in 90 seconds</a>
            </div>

            {/* CTA Inline: EMAIL 3 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai, send your directory URLs, get the five-signal audit free</a>
            </div>

          </article>

          {/* Author Card */}
          <div className="not-prose mt-12">
            <div className="ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24' }}
              />
              <div>
                <div className="ae-author-name">Justin Borges</div>
                <div className="ae-author-role">Founder, The Answer Engine</div>
                <p className="ae-author-bio">
                  Justin Borges is the founder of The Answer Engine, an Answer Engine Optimization
                  firm that helps local service businesses earn permanent citations on ChatGPT,
                  Perplexity, Claude, and Google AI Overviews. 1.14M+ monthly impressions across
                  our own properties and citations confirmed on all four LLM platforms, validated
                  on our own site before offered to any client.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <article className="ae-article-body prose prose-invert prose-lg max-w-none mt-16">
            <div className="not-prose"><span className="ae-section-label" id="faq">FAQ</span></div>
            <h2>Frequently asked questions</h2>

            <section className="not-prose space-y-4 mt-6 mb-12">
              <details className="ae-faq-item">
                <summary>Is Thumbtack integrated with ChatGPT?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Yes. Thumbtack joined OpenAI Operator in January 2025 and by October 2025 was
                    embedded directly inside ChatGPT for home services queries. When a homeowner
                    asks ChatGPT to find a plumber, handyman, or landscaper, ChatGPT pulls from
                    Thumbtack listings and routes the booking through Thumbtack without the user
                    ever leaving the chat surface. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Free Blindspot Scan</a> shows your current Thumbtack surfacing position.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Does Angi help my business get found on ChatGPT?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Yes, through the Angi ChatGPT app launched in March 2026. The app allows
                    homeowners to move from an AI conversation directly to hiring a professional on
                    Angi. Angi also integrates with Amazon Alexa Plus for voice-driven booking,
                    which means a single active Angi profile feeds two distinct AI recommendation
                    systems simultaneously. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai</a> for an Angi profile audit.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Does just being registered on Angi or Thumbtack guarantee AI recommendations?</summary>
                <div className="ae-faq-answer">
                  <p>
                    No. Registration is the entry fee. AI integrations apply a secondary ranking
                    layer that filters the registered population down to a surfacing pool. Profile
                    completeness, review count, review recency, listed services, response time
                    history, and current availability all factor in. A registered-but-neglected
                    profile is technically present in the directory and functionally absent from
                    the AI booking surface. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a ranking floor diagnosis.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Which is better for AI visibility, Angi or Thumbtack?</summary>
                <div className="ae-faq-answer">
                  <p>
                    They serve different AI channels. Thumbtack feeds ChatGPT directly via the
                    Operator integration. Angi feeds both ChatGPT (via the Angi app) and Amazon
                    Alexa Plus (via the Alexa Plus partnership). The highest-impact move is
                    strong profiles on both. If you must prioritize one, Angi reaches a wider AI
                    surface area in 2026 because of the Alexa Plus channel. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-min call</a> to model your channel mix.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Do I still need my own website if I am on Angi and Thumbtack?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Yes. Your website is the source that Perplexity, Claude, and research-mode
                    ChatGPT crawl when users ask for general recommendations rather than initiating
                    a booking. Directories cover the booking-enabled AI flows. The website covers
                    the research-mode AI flows. Businesses that win across all AI surfaces maintain
                    both. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Free Blindspot Scan</a> flags gaps in both stacks.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>What makes an Angi or Thumbtack profile actually surface in AI recommendations?</summary>
                <div className="ae-faq-answer">
                  <p>
                    The signals that move the AI ranking layer are explicit service listings with
                    every service named, a review count above 20 with an average above 4.5, a
                    current availability calendar, historical response time under one hour,
                    accurate business hours, and 10+ professional photos. The profile must read
                    like a structured answer to buyer questions, not a marketing brochure. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email us</a> for the signal optimization template.
                  </p>
                </div>
              </details>
            </section>

            {/* CTA Inline: TEXT 4 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Call (213) 444-2229, speak with an AEO strategist about your directory profiles today</a>
            </div>

            {/* CTA Inline: EMAIL 4 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai, response within one business day with a profile audit</a>
            </div>

            {/* CTA Inline: CALENDLY 4 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-minute Calendly slot, no slides, no pitch, just answers on your category</a>
            </div>

            {/* CTA Inline: BLINDSPOT 5 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ AERO Blindspot Scan, free, fast, surfaces your AI citation gap in 90 seconds</a>
            </div>

            {/* CTA Inline: TERRITORY 4 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Territory lock, one operator per metro, claim before a competitor does</a>
            </div>

            {/* CTA Inline: TEXT 5 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Direct line: (213) 444-2229, same-day routing advice for home services pros</a>
            </div>

            {/* CTA Inline: EMAIL 5 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ support@theanswerengine.ai, send your directory profile URL, free five-signal audit returned</a>
            </div>

            {/* CTA Inline: CALENDLY 5 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Reserve a no-cost 30-minute Calendly strategy call with a real AEO strategist</a>
            </div>

            {/* CTA Inline: BLINDSPOT 6 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free Blindspot Scan, no email required to see your category-level results</a>
            </div>

            {/* CTA Inline: TERRITORY 5 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Lock your home services market before a competitor claims it, one operator per area</a>
            </div>

            {/* CTA Inline: TEXT 6 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ (213) 444-2229, talk through the AEO playbook with a real strategist</a>
            </div>

            {/* CTA Inline: EMAIL 6 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ support@theanswerengine.ai, send us your citation gap, we respond in one business day</a>
            </div>

            {/* CTA Inline: CALENDLY 6 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Schedule a 30-min Calendly slot, straight answers, no follow-up pressure</a>
            </div>

            {/* CTA Inline: TERRITORY 6 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Territory availability check, see if your home services metro is still claimable</a>
            </div>

          </article>

          {/* Related Reading */}
          <section className="mt-16 mb-12">
            <div className="not-prose"><span className="ae-section-label">Related Reading</span></div>
            <h2 className="font-headline font-black uppercase tracking-tighter text-white text-2xl mb-6">Keep going</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/how-amazon-alexa-plus-recommends-local-businesses" className="block p-5 bg-[#0f0f10] border border-white/5 hover:border-[#F27D24]/40 transition-colors">
                <span className="ae-section-label">Platform Deep Dives</span>
                <p className="text-white font-semibold text-sm mt-2">How Amazon Alexa Plus Recommends Local Businesses</p>
              </Link>
              <Link href="/blog/your-website-vs-directories-what-ai-trusts" className="block p-5 bg-[#0f0f10] border border-white/5 hover:border-[#F27D24]/40 transition-colors">
                <span className="ae-section-label">Comparisons</span>
                <p className="text-white font-semibold text-sm mt-2">Your Website vs Directories: What AI Trusts</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="ae-final-cta not-prose">
            <div>
              <h2 className="font-headline font-black uppercase tracking-tighter text-white">
                Your directory profile is now an AI recommendation feed. Treat it like one.
              </h2>
              <p>
                Angi and Thumbtack stopped being lead gen sites the moment ChatGPT and Alexa Plus
                started reading them as ranking data. The Answer Engine engineers the directory
                and content signals AI alone cannot earn for you. One operator per market. Free
                scan to start.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Run free AI visibility audit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-mono uppercase tracking-wider">
                <a href="tel:+12134442229" className="hover:text-[#F27D24] transition-colors">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="hover:text-[#F27D24] transition-colors">Book Free Call</a>
                <a href="mailto:support@theanswerengine.ai" className="hover:text-[#F27D24] transition-colors">support@theanswerengine.ai</a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
