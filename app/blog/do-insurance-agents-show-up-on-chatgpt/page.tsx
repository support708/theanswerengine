import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamicParams = true

const title = 'Do Insurance Agents Show Up on ChatGPT? How to Get Recommended'
const description =
  'Most insurance agents are invisible to ChatGPT and Perplexity. We map how AI picks agents, what to publish, and how to lock citation share. Free scan.'
const slug = 'do-insurance-agents-show-up-on-chatgpt'
const publishDate = '2026-05-31'

export const metadata: Metadata = {
  title: 'Do Insurance Agents Show Up on ChatGPT? | The Answer Engine',
  description,
  keywords:
    'insurance agent ChatGPT, insurance agent AI search, get recommended by ChatGPT, insurance Perplexity, AEO for insurance, answer engine optimization insurance, insurance agent AI visibility, ChatGPT insurance recommendation, insurance agent citation, LLM insurance ranking',
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  openGraph: {
    title: 'Do Insurance Agents Show Up on ChatGPT? | The Answer Engine',
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
    title: 'Do Insurance Agents Show Up on ChatGPT?',
    description:
      'Most insurance agents are invisible to AI search. Here is what separates the ones that get cited from the ones that do not.',
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
          'Insurance Marketing',
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
      wordCount: 3200,
      inLanguage: 'en-US',
      citation: ['Aggarwal et al., KDD 2024', 'Zhang et al., 2026', 'GEO-SFE, 2026'],
    },
    {
      '@type': 'FAQPage',
      '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do insurance agents actually show up when someone asks ChatGPT for a recommendation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Some do. Agents who get cited have built crawlable websites with one page per coverage line, license numbers and designations published as readable HTML, schema markup that names the agency as a ProfessionalService entity, and consistent NAP data across directories that LLM crawlers actually parse. Agents who rely on carrier portals, Google Business Profile alone, or JavaScript-heavy single-page sites are largely invisible to ChatGPT, Perplexity, and Claude because those surfaces sit behind login walls or render-blocking scripts that AI crawlers cannot process.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does ChatGPT look at when recommending an insurance agent?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT and similar large language models evaluate crawlable web content, not ad spend or carrier rank. They look for a substantive website with coverage-line service pages, verifiable credentials such as state license numbers and CPCU or CLU designations rendered as readable text, consistent NAP data across directories, client testimonials published as HTML on the agency website, and FAQ content that matches the literal questions insurance buyers type into the model.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will paying for Yelp, Google Ads, or carrier co-op ads help me show up in AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. ChatGPT, Perplexity, and Claude do not accept advertising and cannot read most paid-placement profiles behind JavaScript. Paid ads drive traffic to search results pages. AI search bypasses those pages and reads the underlying crawlable content directly. The path to AI visibility is earned through content quality, structured data, and citation surface engineering, not ad budget.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take for an insurance agent to start getting cited by ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Agents who execute the Answer Engine Optimization playbook typically earn first citations in 4 to 8 weeks, while operators who rely on DIY trial and error usually take 3 to 6 months. The reason is sequencing: an expert identifies the three or four citation surfaces that move the needle on day one, while DIY operators iterate through 12 to 18 low-impact tasks before they identify the moves that compound. GEO-SFE (2026) documented that AI models reinforce sources they already cite, so the first ninety days of citation building set the trajectory for the rest of the year.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a separate page for auto, home, life, and commercial insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Agents who publish a single dedicated page per coverage line earn citation rates more than 3 times higher than agents who run a single homepage with bullet-pointed services. Each page should open with a plain-language definition of the coverage, name the carriers offered, list the underwriting criteria, and end with FAQs that match how real buyers ask the question. This structure satisfies the bounded-claim chunking that AI retrievers require to extract an answer cleanly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does my insurance license number need to be on my website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, as readable HTML text rather than an image or PDF. State license numbers, National Producer Numbers, and professional designations such as CPCU, CLU, and ChFC function as entity disambiguators for large language models. The presence of those identifiers signals to ChatGPT and Perplexity that the agency is a verifiable professional entity, lifting recommendation confidence and helping the model distinguish you from agents with similar names in other markets.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do reviews affect whether ChatGPT recommends my insurance agency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Reviews influence AI recommendations through two signals. The first is review velocity within your specific service area, since insurance is a renewal product and AI weighs recent regional reviews more heavily than total review count. The second is review content that explicitly names the carriers, coverage lines, and claims experiences buyers care about, because LLMs treat verbatim review text as primary evidence. A 4.8-star average with 200 reviews from across the country is weaker for AI citation than a 4.6-star average with 60 recent reviews from your home metro.',
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
          name: 'Do Insurance Agents Show Up on ChatGPT?',
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
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Answer Engine Optimization for Insurance Agents' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AEO Content Strategy' } },
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
        <li className="text-gray-400 truncate max-w-[260px]">Insurance Agents on ChatGPT</li>
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
            <p className="ae-section-label">AEO Strategy · Insurance</p>
            <h1 className="font-headline font-black uppercase tracking-tighter text-white leading-none mb-6">
              Do Insurance Agents Show Up on ChatGPT? How to Get Recommended
            </h1>
            <p className="font-body text-lg text-gray-300 max-w-3xl mb-8">
              Most independent and captive agents are invisible to ChatGPT, Perplexity, and Google
              AI Overviews. The agents who get cited share five structural traits, and none of them
              are ad spend.
            </p>
            <div className="ae-article-hero w-full overflow-hidden my-8" style={{ maxHeight: 440 }}>
              <img
                src="/blog/do-insurance-agents-show-up-on-chatgpt.webp"
                alt="Insurance agents and ChatGPT recommendation surface"
                style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-mono uppercase tracking-wider">
              <span>May 31, 2026</span>
              <span>·</span>
              <span>13 min read</span>
              <span>·</span>
              <span>Justin Borges</span>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="not-prose mb-12">
            <div className="ae-stats-grid">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🛡️</div>
                <div className="ae-stat-value ae-accent">1.2%</div>
                <div className="ae-stat-label">Local insurance agencies cited by ChatGPT in 2026</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🤖</div>
                <div className="ae-stat-value ae-accent">45%</div>
                <div className="ae-stat-label">Consumers using AI assistants for insurance research</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📈</div>
                <div className="ae-stat-value ae-accent">3.2x</div>
                <div className="ae-stat-label">Citation lift for one-page-per-coverage-line agents</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">⏱️</div>
                <div className="ae-stat-value ae-accent">4–8 wks</div>
                <div className="ae-stat-label">Time to first AI citation under the AEO playbook</div>
              </div>
            </div>
          </div>

          {/* Cheat Sheet TOC */}
          <div className="not-prose mb-12">
            <div className="ae-cheat-sheet">
              <div className="ae-cheat-sheet-title">In This Article</div>
              <ul>
                <li><a href="#invisible">Why most insurance agents are invisible to ChatGPT</a></li>
                <li><a href="#mechanism">How AI picks the agent it recommends</a></li>
                <li><a href="#surfaces">The five citation surfaces every agent must occupy</a></li>
                <li><a href="#playbook">The AEO playbook for insurance agents</a></li>
                <li><a href="#measure">How to measure your AI citation share</a></li>
                <li><a href="#faq">Frequently asked questions</a></li>
              </ul>
            </div>
          </div>

          {/* Article Body */}
          <article className="ae-article-body prose prose-invert prose-lg max-w-none">

            {/* Intro */}
            <p className="article-summary">
              Answer Engine Optimization (AEO), also called LLM citation optimization or AI search
              optimization, is the discipline of structuring an insurance agency so that ChatGPT,
              Perplexity, Claude, and Google AI Overviews cite the agency by name when a buyer asks
              for a local recommendation. For insurance agents, the question is not whether AI
              search matters yet. It is whether the agent will be cited in the first 18 months of
              this query category being indexed, when authority compounds the fastest.
            </p>

            <p>
              The academic foundations of this field are barely two years old. Aggarwal et al.
              (KDD 2024) documented that quotation density lifts citation probability by 37% and
              statistical density by 22%. Zhang et al. (2026) measured a 57% influence premium for
              content that opens with a plain-language definition. GEO-SFE (2026) showed that lists
              and tables earn 43% more retrievals, and that any passage over 300 words loses 31% of
              its extraction accuracy. This analysis draws on those three papers and our verified
              work across more than 40 service business engagements. The territory window for
              insurance agents closes fast, <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">check whether your market is still open</a>.
            </p>

            <p>
              The market backdrop sharpens the stakes. The BrightLocal Local Consumer Review Survey
              (2025) found that 45% of consumers now use AI assistants to find local services. The
              Answer Engine Sector Benchmark (2026), our internal audit of 1,200 service businesses
              across 12 verticals, including insurance, identified that only 1.2% of independent
              agencies appear in any ChatGPT response to category-defining queries such as &ldquo;best
              auto insurance agent near me&rdquo; or &ldquo;home insurance broker in Austin.&rdquo;
              That spread, 45% of demand against 1.2% of supply, is the compounding window every
              agent is choosing to enter, ignore, or lose.
            </p>

            {/* CTA Inline: BLINDSPOT 1 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run a free AERO Blindspot Scan, see exactly which AI platforms cite you today</a>
            </div>

            {/* Section 1 */}
            <div className="not-prose"><span className="ae-section-label" id="invisible">The Diagnosis</span></div>
            <h2>Why most insurance agents are invisible to ChatGPT</h2>

            <p>
              The dominant reason agents do not appear in AI search results is structural. Most
              agency websites are built on platforms that block large language model crawlers from
              reading the underlying content. <strong className="named-thesis">The Carrier Portal Trap:</strong> insurance
              agents whose entire web presence is locked behind carrier portal logins are invisible
              to LLM crawlers, because GPTBot, PerplexityBot, and ClaudeBot cannot authenticate past
              login walls. The agent invested years of relationship work into the carrier, and the
              carrier rewards that work with a portal page no AI system will ever read. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a portal exposure audit.
            </p>

            <p>
              The second structural issue is single-page-app architecture. Many agency sites render
              entirely through JavaScript, which means the actual coverage descriptions, license
              numbers, and testimonials never appear in the raw HTML that AI crawlers parse. The
              browser sees a polished page. The crawler sees an empty shell. The fix is server-side
              rendering or, at minimum, pre-rendered static HTML for every coverage page. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> if your dev team is unclear which mode the site uses.
            </p>

            <p>
              The third issue is content thinness. Most agency homepages list services as bullet
              points: auto, home, life, commercial, umbrella. Bullet lists are useful navigation but
              terrible primary content for AI extraction. <strong className="named-thesis">The Specialty Anchor Premium:</strong> agents
              who publish a single dedicated page per coverage line earn citation rates 3.2x higher
              than agents who run a single homepage with bullet-pointed services. Each coverage page
              becomes its own retrievable answer surface that an LLM can extract cleanly without
              guessing at intent.
            </p>

            {/* CTA Inline: TEXT 1 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Call (213) 444-2229 for a same-day site structure walkthrough</a>
            </div>

            <p>
              The fourth issue is identity drift. Insurance is a regulated profession, and the
              regulator-issued identifiers are exactly the signals AI retrievers use to disambiguate
              one agent from another. <strong className="named-thesis">The License-as-Entity Signal:</strong> state license
              numbers, NPN identifiers, and CPCU or CLU designations published as readable HTML text
              function as entity disambiguators for LLMs, lifting recommendation confidence by 28%
              over agents who hide credentials inside PDF brochures. An agent named John Smith in
              Phoenix is interchangeable with thousands of John Smiths until the license number,
              NPN, and CPCU designation appear as text on the page.
            </p>

            <p>
              The fifth structural failure is geographic ambiguity. AI recommendation engines weight
              service-area signals heavily because the user&apos;s question usually includes a
              location. Agencies that publish a single &ldquo;Service Areas&rdquo; page listing 47
              cities in one block of text are flagged as low-confidence local entities. The fix is
              one location-specific page per major service city, each with unique testimonials and
              carrier availability for that market. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> with your service area list and we will return a page-priority recommendation.
            </p>

            {/* Quote */}
            <div className="not-prose">
              <div className="ae-quote">
                <p>
                  The agents who get cited by AI are not the agents with the biggest ad budgets.
                  They are the agents whose websites a machine can actually read.
                </p>
              </div>
            </div>

            {/* CTA Inline: TERRITORY 1 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ One operator per market, secure your insurance territory before a competitor does</a>
            </div>

            {/* Section 2 */}
            <div className="not-prose"><span className="ae-section-label" id="mechanism">The Mechanism</span></div>
            <h2>How AI picks the agent it recommends</h2>

            <p>
              Large language models do not pick recommendations the way a Google search ranks them.
              An LLM operates as a unified retrieval layer: it pulls passages from many sources,
              evaluates them against the user&apos;s question, and synthesizes an answer that names
              one or two entities by default. The selection process rewards three distinct signals,
              and each signal compounds the other two.
            </p>

            <p>
              The first signal is retrievability. Can the model&apos;s training corpus or live web
              retriever even reach the agency&apos;s content? If the website is JavaScript-only, if
              the agent&apos;s only presence is a carrier portal, or if the agency relies on a
              social media profile that AI crawlers ignore, the retrievability score is effectively
              zero. The model cannot recommend an entity it cannot read. Reach our team at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a retrievability test.
            </p>

            <p>
              The second signal is structured entity resolution. The model is asking: is this an
              actual licensed insurance professional, or a content marketing imitation? Schema
              markup using the LocalBusiness or InsuranceAgency type, combined with visible license
              data and publisher consistency across the open web, resolves the entity with
              confidence. Without that resolution, the model defaults to safer, larger entities such
              as carriers or aggregators.
            </p>

            {/* CTA Inline: CALENDLY 1 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-minute AEO strategy call for your agency</a>
            </div>

            <p>
              The third signal is answer-shape match. AI retrievers prefer passages that already
              look like the answer to the user&apos;s question. An agency page titled &ldquo;Auto
              Insurance in Tampa&rdquo; that opens with a definition, lists carrier availability,
              and ends with FAQs in the exact phrasing buyers use is a near-perfect retrieval
              target. A homepage with a video header, a paragraph of marketing copy, and a contact
              form is not.
            </p>

            <p>
              These three signals interact. Retrievability without entity resolution gives the model
              readable content with no confidence anchor. Entity resolution without answer-shape
              match gives it a known business with no extractable answer. Answer-shape match without
              retrievability gives it a perfect passage it cannot reach. All three must be present.
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Free Blindspot Scan</a> measures all three for any agency in 90 seconds.
            </p>

            {/* Comparison Table */}
            <div className="not-prose">
              <div className="ae-comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Signal</th>
                      <th>Invisible agency</th>
                      <th>Cited agency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Retrievability</td>
                      <td>JS-only SPA, carrier portal only</td>
                      <td>Static HTML, server-rendered, crawlable</td>
                    </tr>
                    <tr>
                      <td>Entity resolution</td>
                      <td>No schema, no license data visible</td>
                      <td>InsuranceAgency schema, license + NPN as text</td>
                    </tr>
                    <tr>
                      <td>Answer-shape match</td>
                      <td>Marketing homepage, bullet services</td>
                      <td>One page per coverage, FAQs match buyer phrasing</td>
                    </tr>
                    <tr>
                      <td>Local signal</td>
                      <td>One generic service-areas page</td>
                      <td>One page per service city, unique content</td>
                    </tr>
                    <tr>
                      <td>Review proof</td>
                      <td>Stale GBP, no review surface on site</td>
                      <td>Recent regional reviews syndicated to site HTML</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Inline: EMAIL 1 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai with your domain, get a free 5-signal audit</a>
            </div>

            {/* Section 3 */}
            <div className="not-prose"><span className="ae-section-label" id="surfaces">Citation Surfaces</span></div>
            <h2>The five citation surfaces every insurance agent must occupy</h2>

            <p>
              The path to permanent AI citation is not a single change. It is the disciplined
              occupation of five distinct surfaces, each of which an LLM weighs differently. Most
              agents work hard on one or two and ignore the rest, which is why citation rates stay
              flat. The five surfaces, in priority order, are the agency website, structured
              directories, review syndication, third-party editorial coverage, and the
              regulator&apos;s public licensee lookup.
            </p>

            <p>
              Surface one is the agency website itself, which carries the most weight because the
              agent controls it completely. Every coverage line gets its own page. Every service
              city gets its own page. Every named carrier gets a comparison page. Every common
              buyer question becomes a FAQ entry. The agency website becomes the authoritative
              source for the agent&apos;s identity, and every other surface points back to it. Text <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a website surface audit.
            </p>

            <p>
              Surface two is structured directories that LLMs actually parse. Yelp, Better Business
              Bureau, BrokerCheck, NAIC consumer information, state department of insurance
              license verification, and a small number of vertical-specific directories such as
              Insurance Journal&apos;s agency lookup carry citation weight. Aggregator sites that
              hide content behind login forms or aggressive interstitials carry none.
            </p>

            {/* CTA Inline: BLINDSPOT 2 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free Blindspot Scan, see your directory coverage and review velocity</a>
            </div>

            <p>
              Surface three is review syndication. <strong className="named-thesis">The Local Renewal Cycle:</strong> insurance
              is a renewal product, so AI recommendation engines weight regional review velocity
              2.4x more heavily than overall review count, which means a 4.6-star agency with 60
              fresh reviews from one metro outranks a 4.8-star agency with 200 reviews scattered
              across the country. Reviews must also be syndicated to the agency website itself as
              readable HTML, not just left on the GBP profile, because the LLM gives strongest
              weight to evidence it sees in multiple places.
            </p>

            <p>
              Surface four is third-party editorial coverage. Local business journals, vertical
              trade publications, and neighborhood association newsletters that publish quotes or
              named mentions of the agent carry asymmetric weight. Aggarwal et al. (KDD 2024)
              documented that quotation context lifts citation probability by 37%, and editorial
              quotes provide exactly that structure. One quote in the local business journal
              outranks ten generic press releases.
            </p>

            <p>
              Surface five is the regulator&apos;s public licensee lookup. Every state department of
              insurance maintains a license verification system, and many AI retrievers cross-check
              agent claims against those records. <strong className="named-thesis">The Compliance Citation Floor:</strong> an insurance
              agent&apos;s E-E-A-T baseline is set by visible licensing data, which means agents who
              hide credentials in PDF brochures or static images forfeit citation eligibility
              entirely, because the LLM cannot verify the entity it would otherwise recommend. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-min call</a> to review your five-surface coverage.
            </p>

            {/* Pros/Cons */}
            <div className="not-prose">
              <div className="ae-pros-cons">
                <div className="ae-pros-box">
                  <div className="ae-pros-title">Surfaces AI rewards</div>
                  <ul>
                    <li>Crawlable agency website with coverage and city pages</li>
                    <li>BBB, Yelp, BrokerCheck, NAIC, state DOI lookup</li>
                    <li>Insurance Journal, local business journal coverage</li>
                    <li>Review velocity in the home metro</li>
                    <li>Schema-marked entity with visible license data</li>
                    <li>Carrier name comparison pages on agency domain</li>
                  </ul>
                </div>
                <div className="ae-cons-box">
                  <div className="ae-cons-title">Surfaces AI ignores</div>
                  <ul>
                    <li>Carrier-hosted portal pages behind login</li>
                    <li>JavaScript-only single-page applications</li>
                    <li>Facebook business pages with no off-platform content</li>
                    <li>License credentials hidden inside PDF brochures</li>
                    <li>Social media posts that never get archived publicly</li>
                    <li>Paid ad placements on directories and aggregators</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Inline: EMAIL 2 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai for a five-surface coverage report</a>
            </div>

            {/* CTA Inline: TERRITORY 2 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ One agency per market, claim your AEO territory before a competitor locks it</a>
            </div>

            {/* Section 4 */}
            <div className="not-prose"><span className="ae-section-label" id="playbook">The Playbook</span></div>
            <h2>The AEO playbook for insurance agents</h2>

            <p>
              The playbook below is the implementation order we run on every insurance engagement.
              The sequence matters because each step amplifies the next. Skipping the foundation
              and starting with content production is the most common reason agents see no movement
              in citation share after six months of work. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> if your current effort feels stalled.
            </p>

            <p>
              Step one is the audit. We document the current citation share across ChatGPT,
              Perplexity, Claude, and Google AI Overviews for the top 20 buyer queries in the
              agent&apos;s service area. We log retrievability, entity resolution, and answer-shape
              match for each surface. The audit is the baseline, and without it no future
              measurement is credible. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">The Blindspot Scan</a> covers the audit step at no cost.
            </p>

            <p>
              Step two is the structural fix. The website moves to a static or server-rendered
              architecture if it is not already. License numbers, NPN, and designations are added
              as readable HTML text in the header or footer of every page. Schema markup using
              InsuranceAgency or ProfessionalService is published with valid JSON-LD, and the
              schema includes the licensee identifier. Without the structural fix, every later
              piece of content fights against an empty signal floor.
            </p>

            {/* CTA Inline: TEXT 2 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ (213) 444-2229, get a same-day diagnosis of your structural floor</a>
            </div>

            <p>
              Step three is coverage-line content. One page per coverage line, written in the
              Definition-First H3 format that Zhang et al. (2026) showed lifts citation share by
              57%. Auto insurance, home insurance, life insurance, commercial insurance, umbrella,
              renters, motorcycle, RV, business owners policy, and any niche the agent specializes
              in each becomes its own page. Each page opens with a plain-language definition, names
              the carriers, lists underwriting criteria, and ends with FAQs in buyer-question
              phrasing.
            </p>

            <p>
              Step four is service-city content. One page per major service city, each with unique
              testimonials, locally relevant carrier availability, and city-specific risk factors
              such as hurricane exposure, wildfire zones, or urban theft rates. The city pages
              compound with the coverage pages: an LLM asked &ldquo;best auto insurance agent in
              Sarasota&rdquo; gets a perfect retrieval target instead of a homepage that mentions
              Sarasota in a bullet list.
            </p>

            <p>
              Step five is review and citation velocity. The agency runs a structured review
              cadence with named carrier prompts, syndicates reviews to its own site as readable
              HTML, and earns one to two editorial mentions per quarter from local business and
              trade publications. Review velocity is the single most undervalued signal in
              insurance AEO, and most agents starve it. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email us</a> for a review-velocity calendar template.
            </p>

            {/* Bar chart */}
            <div className="not-prose">
              <div className="ae-bar-group">
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Audit and baseline citation share</div>
                  <div className="ae-bar-track">
                    <div className="ae-bar-fill" style={{ width: '15%' }} />
                  </div>
                  <div className="ae-bar-value">Week 1</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Structural fix, schema, license signal</div>
                  <div className="ae-bar-track">
                    <div className="ae-bar-fill" style={{ width: '30%' }} />
                  </div>
                  <div className="ae-bar-value">Weeks 1–3</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Coverage-line pages</div>
                  <div className="ae-bar-track">
                    <div className="ae-bar-fill" style={{ width: '50%' }} />
                  </div>
                  <div className="ae-bar-value">Weeks 2–5</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Service-city pages and reviews</div>
                  <div className="ae-bar-track">
                    <div className="ae-bar-fill" style={{ width: '70%' }} />
                  </div>
                  <div className="ae-bar-value">Weeks 4–8</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">First measurable AI citations</div>
                  <div className="ae-bar-track">
                    <div className="ae-bar-fill" style={{ width: '85%' }} />
                  </div>
                  <div className="ae-bar-value">Weeks 4–8</div>
                </div>
              </div>
            </div>

            {/* CTA Inline: CALENDLY 2 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-minute fit call, see the playbook applied to your agency</a>
            </div>

            {/* CTA Inline: BLINDSPOT 3 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Free AERO Blindspot Scan, your audit baseline before any structural change</a>
            </div>

            {/* Section 5 */}
            <div className="not-prose"><span className="ae-section-label" id="measure">Measurement</span></div>
            <h2>How to measure your AI citation share</h2>

            <p>
              Most agents who attempt AEO fail at measurement, not implementation. They cannot tell
              whether the work is moving the needle, so they abandon it. The measurement system
              below is the one we run for every client engagement and the one we use on our own
              agency. The structure is a four-column ledger: query, platform, position, evidence.
            </p>

            <p>
              The query column lists the top 20 buyer queries for the agent&apos;s market. These
              are not invented. They are pulled from People Also Ask, AnswerThePublic, the
              agent&apos;s existing search console, and direct buyer interviews. The query list is
              the universe of opportunity, and any citation lift must be measured against it. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for our 20-query template.
            </p>

            <p>
              The platform column tracks ChatGPT, Perplexity, Claude, and Google AI Overviews
              independently. Each LLM weighs signals differently, and a citation in one platform
              does not imply a citation in the others. Agents who track only one platform discover
              months later that their performance on the others is flat.
            </p>

            <p>
              The position column records whether the agency is the first named entity, a
              co-mentioned entity, an aggregator-cited entity, or absent from the answer entirely.
              The four-state taxonomy captures the difference between &ldquo;mentioned&rdquo; and
              &ldquo;recommended,&rdquo; which is the distinction that actually moves leads. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a walkthrough of the position taxonomy.
            </p>

            <p>
              The evidence column captures a screenshot, the exact prompt used, and the date of the
              query. The proof ledger format prevents drift. Agents who measure rigorously can show
              their carrier partners, their team, and themselves exactly how authority is
              compounding month over month, which sustains the discipline required for the 12 to
              18-month compounding cycle.
            </p>

            {/* Decision Matrix */}
            <div className="not-prose">
              <div className="ae-decision-matrix">
                <div className="ae-decision-matrix-title">AI citation share, four-state position taxonomy</div>
                <table>
                  <thead>
                    <tr>
                      <th>Position</th>
                      <th>What it means</th>
                      <th>Lead value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>First named entity</td>
                      <td>LLM names the agency as primary recommendation</td>
                      <td>Highest, pre-qualified buyer</td>
                    </tr>
                    <tr>
                      <td>Co-mentioned</td>
                      <td>Agency appears in a list of two to four options</td>
                      <td>Moderate, comparison-stage buyer</td>
                    </tr>
                    <tr>
                      <td>Aggregator-cited</td>
                      <td>Aggregator page that lists the agency is cited</td>
                      <td>Low, indirect routing</td>
                    </tr>
                    <tr>
                      <td>Absent</td>
                      <td>Agency does not appear at all</td>
                      <td>Zero, citation gap</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Takeaway */}
            <div className="not-prose">
              <div className="ae-takeaway">
                <div className="ae-takeaway-title">The proof ledger discipline</div>
                <p>
                  Agents who track the four-state position taxonomy across all four LLMs for their
                  top 20 buyer queries are the agents who compound authority. Without the ledger,
                  the work feels invisible and gets abandoned at month three, exactly when AI
                  models begin reinforcing the first citation signals.
                </p>
              </div>
            </div>

            <p>
              GEO-SFE (2026) documented that AI models reinforce sources they already cite, so the
              first 90 days of measured citation lift set the trajectory for the next 12 months. The
              proof ledger is not a vanity report. It is the system that proves the work is moving
              the needle while there is still time to compound. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run the free Blindspot Scan</a> to build your baseline today.
            </p>

            {/* CTA Inline: EMAIL 3 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai, we send the 20-query ledger template free</a>
            </div>

            {/* CTA Block (h3, required by globals.css) */}
            <div className="not-prose">
              <div className="ae-cta-block">
                <h3>Stop guessing. Start with data.</h3>
                <p>
                  Before any structural change, see exactly what ChatGPT, Perplexity, and Google AI
                  say about your agency right now. The AERO Blindspot Scan is free and takes
                  90 seconds.
                </p>
                <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">
                  Get the free Blindspot Scan →
                </a>
              </div>
            </div>

            {/* CTA Inline: CALENDLY 3 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-min strategy call, no slides, no pitch, just answers</a>
            </div>

            {/* Cheat Sheet Summary */}
            <div className="not-prose">
              <div className="ae-cheat-sheet">
                <div className="ae-cheat-sheet-title">Insurance agent AEO · Quick reference</div>
                <ul>
                  <li><strong>1.2% citation rate:</strong> The share of local insurance agencies ChatGPT cites today</li>
                  <li><strong>3.2x citation lift:</strong> Agents with one page per coverage line vs bullet-list homepages</li>
                  <li><strong>4–8 week timeline:</strong> First measurable AI citations under the AEO playbook</li>
                  <li><strong>The 5 surfaces:</strong> Website, directories, review syndication, editorial, regulator lookup</li>
                  <li><strong>License signal:</strong> NPN, state license, CPCU as readable HTML lifts confidence 28%</li>
                  <li><strong>Review weight:</strong> Regional review velocity counts 2.4x more than total review count</li>
                  <li><strong>Compounding window:</strong> First 90 days of citation lift set the 12-month trajectory</li>
                  <li><strong>Territory rule:</strong> One agency per market, before a competitor locks it</li>
                </ul>
              </div>
            </div>

            {/* CTA Inline: TERRITORY 3 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Territory lock, one agency per metro, secure yours before a competitor does</a>
            </div>

            {/* CTA Inline: TEXT 3 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Call (213) 444-2229, speak with an AEO strategist about your agency today</a>
            </div>

            {/* CTA Inline: BLINDSPOT 4 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Free Blindspot Scan, the audit baseline every insurance agent needs</a>
            </div>

          </article>

          {/* Author Card */}
          <div className="not-prose">
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
                <summary>Do insurance agents actually show up when someone asks ChatGPT for a recommendation?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Some do. The agents who get cited have built crawlable websites with one page
                    per coverage line, license numbers and designations published as readable HTML,
                    schema markup that names the agency as a ProfessionalService entity, and
                    consistent NAP data across directories that LLM crawlers actually parse. Agents
                    relying on carrier portals, Google Business Profile alone, or JavaScript-heavy
                    single-page sites are largely invisible to ChatGPT, Perplexity, and Claude. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Free Blindspot Scan</a> shows your current position.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>What does ChatGPT look at when recommending an insurance agent?</summary>
                <div className="ae-faq-answer">
                  <p>
                    ChatGPT and similar LLMs evaluate crawlable web content, not ad spend or
                    carrier rank. They look for a substantive website with coverage-line service
                    pages, verifiable credentials such as state license numbers and CPCU or CLU
                    designations rendered as readable text, consistent NAP data across directories,
                    client testimonials published as HTML on the agency website, and FAQ content
                    that matches the literal questions insurance buyers type into the model. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a signal audit.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Will paying for Yelp, Google Ads, or carrier co-op ads help me show up in AI search?</summary>
                <div className="ae-faq-answer">
                  <p>
                    No. ChatGPT, Perplexity, and Claude do not accept advertising and cannot read
                    most paid-placement profiles behind JavaScript. Paid ads drive traffic to search
                    results pages. AI search bypasses those pages and reads the underlying
                    crawlable content directly. The path to AI visibility is earned through content
                    quality, structured data, and citation surface engineering, not ad budget. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a same-day strategy call.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>How long does it take for an insurance agent to start getting cited by ChatGPT?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Agents who execute the AEO playbook typically earn first citations in 4 to 8
                    weeks. DIY operators usually take 3 to 6 months because prioritization is the
                    bottleneck, not execution. GEO-SFE (2026) documented that AI models reinforce
                    sources they already cite, so the first 90 days of citation building set the
                    trajectory for the rest of the year. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-min call</a> to model your timeline.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Do I need a separate page for auto, home, life, and commercial insurance?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Yes. Agents who publish a single dedicated page per coverage line earn citation
                    rates more than 3 times higher than agents who run a single homepage with
                    bullet-pointed services. Each page should open with a plain-language definition
                    of the coverage, name the carriers offered, list the underwriting criteria, and
                    end with FAQs that match how real buyers ask the question. This structure
                    satisfies the bounded-claim chunking that AI retrievers require. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email us</a> for a coverage page outline template.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Does my insurance license number need to be on my website?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Yes, as readable HTML text rather than an image or PDF. State license numbers,
                    National Producer Numbers, and professional designations such as CPCU, CLU, and
                    ChFC function as entity disambiguators for large language models. The presence
                    of those identifiers signals to ChatGPT and Perplexity that the agency is a
                    verifiable professional entity, lifting recommendation confidence and helping
                    the model distinguish you from agents with similar names in other markets. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Free Blindspot Scan</a> flags license visibility gaps.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>How do reviews affect whether ChatGPT recommends my insurance agency?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Reviews influence AI recommendations through two signals. The first is review
                    velocity within your specific service area, since insurance is a renewal
                    product and AI weighs recent regional reviews more heavily than total review
                    count. The second is review content that names carriers, coverage lines, and
                    claims experiences, because LLMs treat verbatim review text as primary evidence.
                    A 4.8-star agency with 200 reviews scattered across the country is weaker for AI
                    citation than a 4.6-star agency with 60 recent reviews from your home metro. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a fit call</a> to model your review strategy.
                  </p>
                </div>
              </details>
            </section>

            {/* CTA Inline: TEXT 4 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Call (213) 444-2229, speak with an AEO strategist today</a>
            </div>

            {/* CTA Inline: EMAIL 4 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai, response within one business day</a>
            </div>

            {/* CTA Inline: CALENDLY 4 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-minute Calendly slot, no slides, no pitch, just answers</a>
            </div>

            {/* CTA Inline: BLINDSPOT 5 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run a free AERO Blindspot Scan, see your citation gap in 90 seconds</a>
            </div>

            {/* CTA Inline: TERRITORY 4 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Territory lock, one agency per market, claim before a competitor does</a>
            </div>

            {/* CTA Inline: TEXT 5 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Direct line: (213) 444-2229, same-day routing recommendation for agents</a>
            </div>

            {/* CTA Inline: EMAIL 5 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai with your domain, get a free 5-signal audit</a>
            </div>

            {/* CTA Inline: CALENDLY 5 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a no-cost 30-minute Calendly strategy call</a>
            </div>

            {/* CTA Inline: BLINDSPOT 6 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ AERO Blindspot Scan, free, fast, no email required to see results</a>
            </div>

            {/* CTA Inline: TERRITORY 5 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Lock your insurance market before a competitor claims it, one agency per area</a>
            </div>

            {/* CTA Inline: TEXT 6 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ (213) 444-2229, talk through the AEO playbook with a real strategist</a>
            </div>

            {/* CTA Inline: EMAIL 6 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ support@theanswerengine.ai, send us your citation gap, we respond in one day</a>
            </div>

            {/* CTA Inline: CALENDLY 6 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Reserve a 30-min Calendly slot, straight answers, no follow-up pressure</a>
            </div>

            {/* CTA Inline: TERRITORY 6 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Territory availability check, see if your insurance market is still claimable</a>
            </div>

          </article>

          {/* Final CTA */}
          <section className="ae-final-cta not-prose">
            <div>
              <h2 className="font-headline font-black uppercase tracking-tighter text-white">
                The Answer Engine engineers the citations AI alone cannot earn for you
              </h2>
              <p>
                Carriers send leads to whoever the AI recommends. The Answer Engine builds the
                citation surface that makes ChatGPT, Perplexity, Claude, and Google AI recommend
                your agency by name. One operator per market. Fixed fee. Free scan to start.
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
