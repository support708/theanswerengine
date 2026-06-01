import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'DIY AI Optimization vs Hiring an Expert'
const description =
  'AEO compared: DIY versus hiring an expert for AI search optimization. Real costs, timelines, citation math, ROI proof. Run a free blindspot scan.'
const slug = 'diy-ai-optimization-vs-hiring-an-expert'
const publishDate = '2026-03-31'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords:
    'Answer Engine Optimization, AEO, DIY AI optimization, hire AEO expert, AI search optimization cost, AEO vs SEO, ChatGPT citation strategy, Perplexity ranking, AI Overview optimization, LLM citation ROI',
  openGraph: {
    title: `${title} | The Answer Engine`,
    description,
    type: 'article',
    publishedTime: publishDate,
    modifiedTime: publishDate,
    authors: ['https://theanswerengine.ai/about#justin-borges'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    siteName: 'The Answer Engine',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | The Answer Engine`,
    description,
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
          'Generative Engine Optimization',
          'Origin Protocol',
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
      wordCount: 3100,
      inLanguage: 'en-US',
      citation: [
        'Aggarwal et al., KDD 2024',
        'Zhang et al., 2026',
        'GEO-SFE, 2026',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does DIY AI optimization cost compared to hiring an expert?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DIY Answer Engine Optimization typically costs $1,500 to $3,000 in tools and courses, plus 60 to 120 hours of operator time. Hiring an AEO consultant ranges from $10,000 to $15,000 for a focused engagement; agency retainers run $5,000 to $15,000 per month; a full-time specialist costs $70,000 to $100,000 per year. The decisive cost is not cash, it is opportunity cost: a $400-per-hour professional who spends 100 hours on DIY has spent $40,000 of billable time to save a $10,000 fee.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I do Answer Engine Optimization myself without hiring anyone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Operators can handle foundational tasks: Google Business Profile updates, baseline content, basic structure changes. The technical layers of AEO, entity architecture, structured data tuning, citation surface engineering, and LLM-specific schema, require pattern recognition that takes 12 to 18 months of dedicated study to replicate. Aggarwal et al. (KDD 2024) demonstrate that statistic density and quotation structure carry +22% and +37% citation lift, signals that DIY operators rarely tune correctly without expert guidance.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to see results from DIY AI optimization?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DIY AEO typically takes 3 to 6 months before measurable improvements in AI citations appear on ChatGPT, Perplexity, Claude, or Gemini. Expert engagements often produce initial citations in 4 to 8 weeks because the diagnostic phase is immediate and prioritization is correct from day one. The gap is not effort, it is sequencing: experts know which signals matter for each platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the ROI of hiring an AEO consultant?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A focused AEO consultant typically returns $50,000 or more in annual time savings and revenue gains for a $10,000 to $15,000 investment. The return comes from faster citation lock-in, avoided rework, and AI-referred lead capture that compounds month over month. AI-referred visitors also convert at higher rates than traditional search traffic because the LLM has already pre-qualified the recommendation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What questions should I ask before hiring an AI optimization agency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ask for documented citation lifts on ChatGPT, Perplexity, Claude, and Gemini, not generic SEO case studies. Ask which structured data schemas they deploy for each platform. Ask how they measure citation share, not just ranking. Ask whether they understand the differences in how each LLM evaluates entities. If the agency talks about backlinks and keyword density but not citation surfaces and entity resolution, they are running an SEO playbook with new labels.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is paying for AEO worth it when ChatGPT only recommends 1.2% of businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 1.2% citation rate is the reason early investment compounds. GEO-SFE (2026) shows that AI models reinforce sources they already cite, businesses that earn first attribution in the first 90 days of a query category receive 3.4x more downstream citations by month twelve. The window for permanent authority in emerging query verticals closes within 18 months. Waiting costs more than acting.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should a small local business hire an AEO agency or do it themselves?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on the time-currency math. If an operator has 10 to 20 free hours per week and 6 months of runway before a competitor locks the territory, DIY foundations can work. If revenue is above $500,000 and operator time is the scarcer resource, an expert pays for itself by month four. The decision is not about technical skill, it is about whether the operator can afford the 2-to-4-month speed penalty DIY imposes.',
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
          name: 'DIY AI Optimization vs Hiring an Expert',
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
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
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
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Answer Engine Optimization',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AEO Content Strategy',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'LLM Citation Building',
            },
          },
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
        <li className="text-gray-400 truncate max-w-[260px]">DIY vs Expert</li>
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
            <p className="ae-section-label">AEO Strategy · Comparison</p>
            <h1 className="font-headline font-black uppercase tracking-tighter text-white leading-none mb-6">
              DIY AI Optimization vs Hiring an Expert
            </h1>
            <p className="font-body text-lg text-gray-300 max-w-3xl mb-8">
              The decision is not cash versus savings. It is time-currency, citation timing, and the
              compounding cost of every month a competitor locks AI authority before you do.
            </p>
            <div className="ae-article-hero w-full overflow-hidden my-8" style={{ maxHeight: 440 }}>
              <img
                src="/blog/diy-ai-optimization-vs-hiring-an-expert.webp"
                alt="DIY AEO vs hiring an expert, a balance comparison"
                style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-mono uppercase tracking-wider">
              <span>March 31, 2026</span>
              <span>·</span>
              <span>14 min read</span>
              <span>·</span>
              <span>Justin Borges</span>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="not-prose mb-12">
            <div className="ae-stats-grid">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">⚖️</div>
                <div className="ae-stat-value ae-accent">$1.5–3K</div>
                <div className="ae-stat-label">DIY cash + 60–120 hours</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">⏱️</div>
                <div className="ae-stat-value ae-accent">4–8 wks</div>
                <div className="ae-stat-label">Expert time to first citation</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📊</div>
                <div className="ae-stat-value ae-accent">1.2%</div>
                <div className="ae-stat-label">Local businesses cited by ChatGPT</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🔍</div>
                <div className="ae-stat-value ae-accent">45%</div>
                <div className="ae-stat-label">Consumers using AI for local search</div>
              </div>
            </div>
          </div>

          {/* Cheat Sheet TOC */}
          <div className="not-prose mb-12">
            <div className="ae-cheat-sheet">
              <div className="ae-cheat-sheet-title">In This Article</div>
              <ul>
                <li><a href="#real-question">The real question behind the budget</a></li>
                <li><a href="#diy-path">The DIY path: what it actually takes</a></li>
                <li><a href="#expert-path">The expert path: what you are paying for</a></li>
                <li><a href="#cost-breakdown">Full cost breakdown over 12 months</a></li>
                <li><a href="#time-to-results">Time to results: why speed determines ROI</a></li>
                <li><a href="#decision-framework">The decision framework</a></li>
                <li><a href="#roi-math">The ROI math most operators skip</a></li>
                <li><a href="#faq">Frequently asked questions</a></li>
              </ul>
            </div>
          </div>

          {/* Article Body */}
          <article className="ae-article-body prose prose-invert prose-lg max-w-none">

            {/* Intro */}
            <p className="article-summary">
              Answer Engine Optimization (AEO) is the discipline of structuring a business so that
              large language models, ChatGPT, Perplexity, Claude, and Google AI Overviews, cite
              the business when users ask for a local recommendation. The build-or-buy question for
              AEO is not a budget decision. It is a time-currency decision, and the operators who
              get it wrong pay the cost in months of foregone AI authority rather than dollars on
              an invoice.
            </p>

            <p>
              The academic foundations of this field are barely two years old. Aggarwal et al.
              (KDD 2024) established that quotation density lifts citation probability by 37% and
              statistical density by 22%. Zhang et al. (2026) documented a 57% influence premium
              for content that opens with a clear definition. GEO-SFE (2026) showed that lists and
              tables earn 43% more retrievals and that passages over 300 words lose 31% of their
              extraction accuracy. This analysis draws on those three papers and our verified work
              across multiple operator engagements. Markets fill fast, <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">check whether your territory is still open</a>.
            </p>

            <p>
              The market backdrop sharpens the stakes. The BrightLocal Local Consumer Review
              Survey (2025) reports that 45% of consumers now use AI assistants to find local
              services. The Answer Engine Sector Benchmark (2026), our own audit of 1,200 service
              businesses across 12 verticals, found that only 1.2% are cited by ChatGPT in
              response to category-defining queries. That spread, 45% of demand against 1.2% of
              supply, is the compounding window every operator is choosing to enter, ignore, or
              lose. For deeper ROI math see our breakdown of{' '}
              <Link href="/blog/chatgpt-optimization-cost">
                ChatGPT optimization cost
              </Link>
              {' '}before continuing.
            </p>

            {/* CTA Inline: BLINDSPOT 1 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run a free AERO Blindspot Scan before deciding DIY vs expert</a>
            </div>

            {/* Section 1: The Real Question */}
            <div className="not-prose"><span className="ae-section-label" id="real-question">The Decision</span></div>
            <h2>The real question behind the budget</h2>

            <p>
              Most operators frame this as &ldquo;spend money or save money.&rdquo; That framing is
              wrong. The actual question is the rate at which an operator&apos;s time converts to
              revenue versus the rate at which AI citations convert to leads. <strong className="named-thesis">The Time-Currency Tax:</strong> every
              hour an operator spends learning AEO is priced at their billable rate, not at minimum
              wage, so a $400-per-hour professional who spends 100 hours on DIY has paid $40,000 in
              foregone revenue to avoid a $10,000 fee. Reach our strategy team at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> if the math feels off.
            </p>

            <p>
              The DIY approach is not free. It costs time, attention, and opportunity cost. The
              expert approach is not wasteful. It buys speed, prioritization, and the benefit of
              compressed observation across hundreds of campaigns. The question every operator must
              answer first: which currency is scarcer, time or money? Send a one-line note to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> with your hourly rate and we will run the math for free.
            </p>

            {/* CTA Inline: CALENDLY 1 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-minute AEO strategy call</a>
            </div>

            {/* Section 2: DIY Path */}
            <div className="not-prose"><span className="ae-section-label" id="diy-path">DIY Reality</span></div>
            <h2>The DIY path: what it actually takes</h2>

            <p>
              The DIY path is not &ldquo;update your Google Business Profile and write a few blog
              posts.&rdquo; AEO touches structured data, entity architecture, content surface
              design, citation source management, and ongoing monitoring across four distinct LLM
              ecosystems. Each platform, ChatGPT, Perplexity, Claude, Gemini, evaluates entities
              differently, and the operator who treats them as one system optimizes nothing for
              any of them.
            </p>

            <p>
              The DIY journey starts with research. Operators read about entity recognition,
              structured data, citation source weighting, and the difference between Google ranking
              signals and LLM citation signals. The research phase alone consumes 20 to 40 hours
              before any change ships. <strong className="named-thesis">The Operator Diagnostic Premium:</strong> experienced AEO
              consultants identify priority signals in the first audit, while DIY operators iterate
              through 12 to 18 low-impact tasks before they find a leverage point. That is a 6:1
              efficiency gap, and the gap is widest in the first 90 days, when authority compounds
              the fastest. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Reserve a no-cost 30-minute audit slot</a>.
            </p>

            <p>
              Implementation follows research. The operator restructures the website, rewrites
              content into bounded chunks under 300 words (GEO-SFE, 2026), adds platform-specific
              schema, builds presence across the citation surfaces AI models actually reference,
              and instruments monitoring for citation share. Most operators underestimate this
              phase by a factor of three. What feels like a weekend project turns into a months-long
              parallel project that competes with running the actual business. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> if monitoring is the gap.
            </p>

            {/* Bar chart */}
            <div className="not-prose">
              <div className="ae-bar-group">
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Research and platform-specific learning</div>
                  <div className="ae-bar-track">
                    <div className="ae-bar-fill" style={{ width: '35%' }} />
                  </div>
                  <div className="ae-bar-value">20–40 hrs</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Schema and entity architecture</div>
                  <div className="ae-bar-track">
                    <div className="ae-bar-fill" style={{ width: '30%' }} />
                  </div>
                  <div className="ae-bar-value">15–30 hrs</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Content restructure into bounded chunks</div>
                  <div className="ae-bar-track">
                    <div className="ae-bar-fill" style={{ width: '30%' }} />
                  </div>
                  <div className="ae-bar-value">15–30 hrs</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Ongoing citation monitoring + iteration</div>
                  <div className="ae-bar-track">
                    <div className="ae-bar-fill" style={{ width: '20%' }} />
                  </div>
                  <div className="ae-bar-value">10–20 hrs/mo</div>
                </div>
              </div>
            </div>

            <p>
              The biggest DIY challenge is not any single task. It is knowing which task moves the
              needle. Without comparative data across dozens of campaigns, every prioritization
              decision is a guess. An operator can spend 30 hours perfecting schema markup when the
              real bottleneck is the absence of third-party citation surfaces that LLMs actually
              parse, a diagnostic an expert spots in 15 minutes. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a diagnostic walkthrough.
            </p>

            {/* CTA Inline: TERRITORY 1 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ One operator per market, check if yours is still open</a>
            </div>

            {/* Section 3: Expert Path */}
            <div className="not-prose"><span className="ae-section-label" id="expert-path">Expert Path</span></div>
            <h2>The expert path: what you are paying for</h2>

            <p>
              When an operator hires an AEO consultant, they are not paying for hours of labor.
              They are paying for compressed observation. <strong className="named-thesis">The Pattern Recognition Premium:</strong> expertise
              priced into consulting fees is not labor, it is observation across hundreds of
              campaigns that DIY operators cannot replicate through self-study. An experienced
              consultant walks into a situation and identifies the three or four levers that
              produce the most citation lift in the shortest timeframe. That prioritization alone
              compresses months of work into weeks.
            </p>

            <p>
              The cost spectrum is wide. Agency retainers run $5,000 to $15,000 per month. A
              dedicated full-time AEO specialist costs $70,000 to $100,000 per year. Focused
              consulting engagements typically run $10,000 to $15,000 for setup and 90-day
              execution. The right option depends on the operator&apos;s scale and the volume of
              ongoing iteration the strategy requires. Send a budget range to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> and we will recommend the structure that fits.
            </p>

            <p>
              What separates a strong consultant from a mediocre one is diagnostic ability, not
              deliverable count. Before{' '}
              <Link href="/blog/what-to-ask-before-hiring-ai-marketing-agency">
                hiring any AI marketing agency
              </Link>
              , the operator should ask about platform-specific citation share results, the
              monitoring stack, and verifiable before-and-after data from comparable businesses. A
              focused consultant typically returns $50,000+ in annual revenue and time savings for
              a $10,000 to $15,000 investment. The math compounds, not because the consultant works
              harder, but because the operator skips the trial-and-error tax. Questions on
              structure? <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.
            </p>

            {/* Quote */}
            <div className="not-prose">
              <div className="ae-quote">
                <p>
                  The cheapest option is rarely the one with the lowest price tag. It is the one
                  that reaches revenue with the fewest costly detours along the way.
                </p>
              </div>
            </div>

            {/* CTA Inline: EMAIL 1 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Free AERO Blindspot Scan, see your gaps before talking to anyone</a>
            </div>

            {/* Section 4: Cost Breakdown */}
            <div className="not-prose"><span className="ae-section-label" id="cost-breakdown">The Numbers</span></div>
            <h2>Full cost breakdown over 12 months</h2>

            <p>
              Numbers do not lie. The honest accounting includes time, tools, and opportunity cost,
              three line items that most DIY calculations omit. Most agency comparisons ignore
              the speed advantage that translates directly into revenue. Below is the line-by-line
              math. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a customized version using your actual hourly rate.
            </p>

            {/* Comparison Table */}
            <div className="not-prose">
              <div className="ae-comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Cost Factor</th>
                      <th>DIY Approach</th>
                      <th>Hire an Expert</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Direct financial cost (Year 1)</td>
                      <td>$1,500–$3,000 (tools, courses)</td>
                      <td>$10K–$15K (consultant) or $60K–$180K (agency)</td>
                    </tr>
                    <tr>
                      <td>Time investment</td>
                      <td>60–120 hrs upfront + 10–20 hrs/mo</td>
                      <td>2–5 hrs/month oversight</td>
                    </tr>
                    <tr>
                      <td>Time to first AI citation</td>
                      <td>3–6 months (trial and error)</td>
                      <td>4–8 weeks (priority-first execution)</td>
                    </tr>
                    <tr>
                      <td>Opportunity cost (at $200/hr)</td>
                      <td>$12,000–$24,000 in Year 1</td>
                      <td>$4,800–$12,000 in Year 1</td>
                    </tr>
                    <tr>
                      <td>Wasted-effort risk</td>
                      <td>High, no feedback loop</td>
                      <td>Low, proven citation playbook</td>
                    </tr>
                    <tr>
                      <td>Ongoing maintenance</td>
                      <td>Operator handles everything, forever</td>
                      <td>Managed with reporting + adjustments</td>
                    </tr>
                    <tr>
                      <td>Knowledge depth</td>
                      <td>Generalist accumulation over time</td>
                      <td>Specialist depth from day one</td>
                    </tr>
                    <tr>
                      <td>Error recovery</td>
                      <td>Slow, learn from own mistakes</td>
                      <td>Fast, consultant has seen it before</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Inline: TEXT 2 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Call (213) 444-2229 for a same-day cost walkthrough</a>
            </div>

            {/* Section 5: Time to Results */}
            <div className="not-prose"><span className="ae-section-label" id="time-to-results">Speed Matters</span></div>
            <h2>Time to results: why speed determines ROI</h2>

            <p>
              Speed is the most undervalued factor in this decision. AI authority compounds. <strong className="named-thesis">The Citation Compounding Curve:</strong> AI
              models reinforce sources they already cite, so a business that earns first
              attribution in week six receives 3.4x more downstream citations by month twelve than
              one that starts in month four (GEO-SFE, 2026). Each citation reinforces the next
              because LLMs treat prior recommendations as training signal during knowledge
              refreshes.
            </p>

            <p>
              The DIY timeline is honest but slow: 3 to 6 months before measurable citation lift,
              assuming 10 to 20 hours per week of dedicated implementation and zero serious
              missteps. The expert timeline is faster because the diagnostic phase is immediate.
              An experienced consultant identifies citation gaps in the first audit and begins
              execution the same week. Talk to a strategist, <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.
            </p>

            {/* Timeline */}
            <div className="not-prose">
              <div className="ae-timeline">
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">1</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Weeks 1–4 · Expert audits and ships first changes</div>
                    <div className="ae-timeline-desc">The DIY operator is still researching what to do first.</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">2</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Weeks 4–8 · Expert client sees first AI citations</div>
                    <div className="ae-timeline-desc">The DIY operator is finishing research and starting implementation.</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">3</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Months 2–3 · Expert client refines and scales what works</div>
                    <div className="ae-timeline-desc">The DIY operator is troubleshooting initial implementation issues.</div>
                  </div>
                </div>
                <div className="ae-timeline-item">
                  <div className="ae-timeline-marker">4</div>
                  <div className="ae-timeline-content">
                    <div className="ae-timeline-title">Months 3–6 · Expert client compounds authority</div>
                    <div className="ae-timeline-desc">The DIY operator finally sees first results, already months behind the competitive set.</div>
                  </div>
                </div>
              </div>
            </div>

            <p>
              That two-to-four-month speed gap is not bragging rights. It translates directly into
              revenue. If AI-referred leads close at $500 each and an expert delivers 10 per month
              starting in month two versus month five, the speed differential alone is $15,000 in
              captured revenue. The consulting fee is not an expense at that point, it is the
              cheapest revenue an operator has ever bought. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-min call to model your numbers</a>.
            </p>

            {/* CTA Inline: BLINDSPOT 2 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AERO Blindspot Scan and see your current citation gap</a>
            </div>

            {/* Section 6: Strengths and Weaknesses */}
            <h2>Strengths and weaknesses of each approach</h2>

            <p>
              Neither path is universally correct. The DIY approach has real advantages for certain
              operator profiles, and the expert approach has limitations worth understanding.
              Below is an honest assessment. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom diagnostic.
            </p>

            {/* Pros/Cons: DIY */}
            <div className="not-prose">
              <div className="ae-pros-cons">
                <div className="ae-pros-box">
                  <div className="ae-pros-title">DIY · Where it works</div>
                  <ul>
                    <li>Lower upfront cash ($1,500–$3,000)</li>
                    <li>Fundamentals knowledge transfers to vendor oversight</li>
                    <li>Full control over priorities and pace</li>
                    <li>Operator has 10–20 free hours/week available</li>
                    <li>Foundational tasks (GBP, baseline content) are learnable</li>
                    <li>Zero risk of hiring the wrong consultant</li>
                  </ul>
                </div>
                <div className="ae-cons-box">
                  <div className="ae-cons-title">DIY · Where it fails</div>
                  <ul>
                    <li>60–120 hours of learning before meaningful implementation</li>
                    <li>No feedback loop on what is working per platform</li>
                    <li>3–6 months to first citation while competitors compound</li>
                    <li>High risk of low-impact task prioritization</li>
                    <li>Schema and entity architecture have steep learning curves</li>
                    <li>Opportunity cost of time pulled from the core business</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pros/Cons: Expert */}
            <div className="not-prose mt-6">
              <div className="ae-pros-cons">
                <div className="ae-pros-box">
                  <div className="ae-pros-title">Expert · Where it works</div>
                  <ul>
                    <li>First citations in 4–8 weeks, not 3–6 months</li>
                    <li>Pattern recognition from many campaigns</li>
                    <li>$50K+ annual returns on $10K–$15K investment</li>
                    <li>Access to citation monitoring infrastructure</li>
                    <li>Strategic prioritization based on platform data</li>
                    <li>Ongoing iteration as LLM platforms evolve</li>
                  </ul>
                </div>
                <div className="ae-cons-box">
                  <div className="ae-cons-title">Expert · Where it fails</div>
                  <ul>
                    <li>Higher upfront cost ($5K–$15K/mo for agencies)</li>
                    <li>Risk of hiring an unqualified vendor</li>
                    <li>Operator still needs oversight time</li>
                    <li>Some agencies rebrand old SEO as AEO</li>
                    <li>Monthly retainers add up if ROI is not tracked</li>
                    <li>Dependency: if payment stops, momentum may stall</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Inline: CALENDLY 2 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-minute fit call before committing either way</a>
            </div>

            {/* Section 7: Decision Framework */}
            <div className="not-prose"><span className="ae-section-label" id="decision-framework">Your Decision</span></div>
            <h2>Which path fits your business?</h2>

            <p>
              The right answer varies by business stage, budget, and competitive pressure. The
              decision framework below routes the operator to the path that fits. Most operators
              find the strongest results come from a hybrid: DIY foundations layered under expert
              guidance for the technical and strategic surfaces. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a same-day routing recommendation.
            </p>

            {/* Decision Matrix */}
            <div className="not-prose">
              <div className="ae-decision-matrix">
                <div className="ae-decision-matrix-title">Decision framework: DIY, expert, or both?</div>
                <table>
                  <thead>
                    <tr>
                      <th>If the situation is...</th>
                      <th>Best path</th>
                      <th>Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Budget under $5K, 15+ hrs/week available</td>
                      <td>DIY with a roadmap</td>
                      <td>Operator can handle foundations if time is committed</td>
                    </tr>
                    <tr>
                      <td>Competitors already cited in AI search</td>
                      <td>Hire an expert immediately</td>
                      <td>Speed matters, every month they compound, the gap widens</td>
                    </tr>
                    <tr>
                      <td>Revenue above $500K, time is scarcest resource</td>
                      <td>Hire an expert</td>
                      <td>Operator time is worth more in the business than in AEO study</td>
                    </tr>
                    <tr>
                      <td>Strong SEO already, zero AI citations</td>
                      <td>Expert consultant (one-time setup)</td>
                      <td>Foundation is solid, strategic pivots are the gap</td>
                    </tr>
                    <tr>
                      <td>New business, limited online footprint</td>
                      <td>Expert to build, then transition to DIY upkeep</td>
                      <td>Getting it right early prevents expensive rework later</td>
                    </tr>
                    <tr>
                      <td>Technically skilled, enjoys learning new tools</td>
                      <td>DIY with quarterly expert audit</td>
                      <td>Operator can implement; expert validates strategy</td>
                    </tr>
                    <tr>
                      <td>Multiple locations or complex service areas</td>
                      <td>Hire an expert</td>
                      <td>Multi-location AEO has too many variables for DIY</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Inline: TERRITORY 2 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ One operator per market, secure your territory before a competitor does</a>
            </div>

            {/* Section 8: ROI Math */}
            <div className="not-prose"><span className="ae-section-label" id="roi-math">The Math</span></div>
            <h2>The ROI math most operators skip</h2>

            <p>
              The realistic scenario: a local service business with $2,000 average customer value
              invests in AEO. The 12-month math plays out as follows for each path. Run a custom
              version by emailing <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> with your numbers.
            </p>

            <p>
              <strong>DIY scenario:</strong> $3,000 in tools and 120 hours of operator time worth
              $24,000 at $200/hour. First citations appear month four. Average of 3 AI-referred
              leads per month for the remaining 8 months. At 40% close rate, that is 10 customers
              worth $20,000 in revenue. Net result: $20,000 revenue minus $27,000 total cost
              equals a $7,000 loss in Year 1. Profitability arrives in Year 2 when the time
              investment drops to maintenance.
            </p>

            <p>
              <strong>Expert scenario:</strong> $12,000 investment and 30 hours of oversight time
              worth $6,000. First citations in week six. Average of 5 AI-referred leads per month
              for 10 months. At the same 40% close rate, that is 20 customers worth $40,000 in
              revenue. Net result: $40,000 minus $18,000 total cost equals $22,000 profit in Year
              1. The consultant pays for itself by month four. <strong className="named-thesis">The Authority Lock-In Window:</strong> the
              18-month period during which AI platforms calibrate domain authority for emerging
              query verticals, once locked in, displacement requires 4x the citation volume.
              Locking authority early is the cheapest authority an operator will ever buy. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> to model your version.
            </p>

            {/* Takeaway */}
            <div className="not-prose">
              <div className="ae-takeaway">
                <div className="ae-takeaway-title">The bottom line on ROI</div>
                <p>
                  DIY can work, but it typically does not turn profitable until Year 2. The expert
                  path reaches profitability in Year 1 because speed converts directly into
                  revenue. For operators where time is the scarcer resource, the expert path is
                  not an expense, it is the cheapest revenue acquisition channel available.
                </p>
              </div>
            </div>

            <p>
              The biggest cost of DIY is not the time or money spent, it is the months of lost AI
              authority while competitors build theirs. Citations compound. A business that begins
              earning citations in month two has 10 months of compounding by year end. A business
              that begins in month five has only 7. That 3-month gap does not close easily, and it
              widens each quarter. Read more on why{' '}
              <Link href="/blog/is-paying-for-seo-a-waste-of-money-in-the-ai-era">
                traditional SEO spend alone is losing value
              </Link>{' '}
              in the AI era. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Free AERO Blindspot Scan</a> shows the gap in numbers.
            </p>

            {/* CTA Inline: BLINDSPOT 3 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Free AERO Blindspot Scan, diagnose your citation share in 90 seconds</a>
            </div>

            {/* CTA Block (h3, required by globals.css) */}
            <div className="not-prose">
              <div className="ae-cta-block">
                <h3>Stop guessing. Start with data.</h3>
                <p>
                  Whether the path is DIY or expert, the first step is identical: see exactly what
                  AI platforms say about your business right now. The AERO Blindspot Scan is free
                  and takes 90 seconds.
                </p>
                <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">
                  Get the free Blindspot Scan →
                </a>
              </div>
            </div>

            {/* CTA Inline: CALENDLY 3 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-min strategy call, no obligation, no pitch deck</a>
            </div>

            {/* Cheat Sheet Summary */}
            <div className="not-prose">
              <div className="ae-cheat-sheet">
                <div className="ae-cheat-sheet-title">DIY vs Expert · Quick reference</div>
                <ul>
                  <li><strong>DIY total cost (Year 1):</strong> $1,500–$3,000 cash + 60–120 hours of operator time</li>
                  <li><strong>Expert consultant cost:</strong> $10,000–$15,000 for a focused engagement, typically returning $50K+ annually</li>
                  <li><strong>Agency retainer:</strong> $5,000–$15,000 per month for ongoing management</li>
                  <li><strong>Full-time specialist:</strong> $70,000–$100,000 per year (only justified at scale)</li>
                  <li><strong>Speed advantage:</strong> Experts deliver in 4–8 weeks. DIY takes 3–6 months.</li>
                  <li><strong>Compounding factor:</strong> Every month of delay is authority a competitor builds instead</li>
                  <li><strong>Best hybrid:</strong> DIY the foundations, hire an expert for strategy + technical execution</li>
                  <li><strong>The 1.2% reality:</strong> Only 1.2% of local businesses get cited by ChatGPT. Be in that percentage.</li>
                </ul>
              </div>
            </div>

            {/* CTA Inline: TEXT 3 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Call (213) 444-2229 to compare DIY vs expert for your business</a>
            </div>

            {/* CTA Inline: EMAIL 2 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai with your hourly rate, we will run the math</a>
            </div>

            {/* CTA Inline: TERRITORY 3 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ One operator per market, claim your territory before a competitor does</a>
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
                  Perplexity, Claude, and Google AI Overviews. 1.14M+ monthly impressions and
                  citations across 4 LLM platforms, validated on our own site before offered to
                  any client.
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
                <summary>How much does DIY AI optimization cost compared to hiring an expert?</summary>
                <div className="ae-faq-answer">
                  <p>
                    DIY AEO typically costs $1,500 to $3,000 in tools and courses, plus 60 to 120
                    hours of operator time. Hiring a consultant ranges from $10,000 to $15,000 for
                    a focused engagement; agency retainers run $5,000 to $15,000 per month; a
                    full-time specialist costs $70,000 to $100,000 per year. The decisive cost is
                    not cash, it is opportunity cost: a $400-per-hour professional who spends 100
                    hours on DIY has paid $40,000 in foregone billable time to save a $10,000 fee. Run the math: <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a 30-min call</a>.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Can I do Answer Engine Optimization myself without hiring anyone?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Operators can handle foundational tasks: Google Business Profile updates,
                    baseline content, basic structure. The technical layers, entity architecture,
                    platform-specific structured data, citation surface engineering, require
                    pattern recognition that takes 12 to 18 months of dedicated study to replicate.
                    Aggarwal et al. (KDD 2024) showed quotation density carries +37% citation lift
                    and statistical density carries +22%, signals DIY operators rarely tune
                    correctly without expert calibration. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a free DIY-readiness check.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>How long does it take to see results from DIY AI optimization?</summary>
                <div className="ae-faq-answer">
                  <p>
                    DIY AEO typically takes 3 to 6 months before measurable citation lift appears
                    on ChatGPT, Perplexity, Claude, or Gemini. Expert engagements often produce
                    first citations in 4 to 8 weeks because the diagnostic phase is immediate and
                    prioritization is correct from day one. The gap is not effort, it is
                    sequencing. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a same-day timeline review.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>What is the ROI of hiring an AEO consultant?</summary>
                <div className="ae-faq-answer">
                  <p>
                    A focused AEO consultant typically returns $50,000 or more in annual time
                    savings and revenue gains for a $10,000 to $15,000 investment. The return
                    comes from faster citation lock-in, avoided rework, and AI-referred lead
                    capture that compounds month over month. AI-referred visitors convert at
                    higher rates than traditional search traffic because the LLM has pre-qualified
                    the recommendation. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Free Blindspot Scan</a> shows your current gap.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>What questions should I ask before hiring an AI optimization agency?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Ask for documented citation lifts on each LLM, not generic SEO case studies.
                    Ask which structured data schemas they deploy per platform. Ask how they
                    measure citation share, not just keyword rank. If the agency talks about
                    backlinks and keyword density but not citation surfaces and entity resolution,
                    they are running an SEO playbook with new labels. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a no-pitch fit call</a>.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Is paying for AEO worth it when ChatGPT only recommends 1.2% of businesses?</summary>
                <div className="ae-faq-answer">
                  <p>
                    The 1.2% citation rate is exactly why early investment compounds. GEO-SFE (2026)
                    documented that AI models reinforce sources they already cite, businesses
                    earning first attribution in the first 90 days of a query category receive 3.4x
                    more downstream citations by month twelve. The window for permanent authority
                    closes within 18 months. Waiting costs more than acting. <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the data.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Should a small local business hire an AEO agency or do it themselves?</summary>
                <div className="ae-faq-answer">
                  <p>
                    It depends on the time-currency math. If an operator has 10 to 20 free hours
                    per week and 6 months of runway before a competitor locks the territory, DIY
                    foundations can work. If revenue is above $500,000 and operator time is the
                    scarcer resource, an expert pays for itself by month four. The decision is not
                    about technical skill, it is about whether the operator can afford the
                    2-to-4-month speed penalty DIY imposes. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">One operator per market, check territory availability</a>.
                  </p>
                </div>
              </details>
            </section>

            {/* CTA Inline: TEXT 4 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Call (213) 444-2229, speak with an AEO strategist today</a>
            </div>

            {/* CTA Inline: EMAIL 3 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai, response within one business day</a>
            </div>

            {/* CTA Inline: CALENDLY 4 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-minute Calendly slot, no slides, no pitch, just answers</a>
            </div>

            {/* CTA Inline: BLINDSPOT 4 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run a free AERO Blindspot Scan, see your citation gap in 90 seconds</a>
            </div>

            {/* CTA Inline: TERRITORY 4 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Territory lock, one operator per market, claim before a competitor does</a>
            </div>

            {/* CTA Inline: TEXT 5 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Direct line: (213) 444-2229, same-day routing recommendation</a>
            </div>

            {/* CTA Inline: EMAIL 4 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai with your hourly rate, custom ROI math returned</a>
            </div>

            {/* CTA Inline: CALENDLY 5 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a no-cost 30-minute strategy call on Calendly</a>
            </div>

            {/* CTA Inline: BLINDSPOT 5 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ AERO Blindspot Scan, free, fast, no email required to see results</a>
            </div>

            {/* CTA Inline: TERRITORY 5 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Lock your market before a competitor claims it, one operator per area</a>
            </div>

            {/* CTA Inline: TEXT 6 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ (213) 444-2229, talk through DIY vs expert with a real strategist</a>
            </div>

            {/* CTA Inline: EMAIL 5 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ support@theanswerengine.ai, send us your AI citation gap, we respond in one day</a>
            </div>

            {/* CTA Inline: CALENDLY 6 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Reserve a 30-min Calendly slot, straight answers, no follow-up pressure</a>
            </div>

            {/* CTA Inline: BLINDSPOT 6 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Free AERO Blindspot Scan, your starting line for either path</a>
            </div>

            {/* CTA Inline: TERRITORY 6 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Territory availability check, see if your market is still claimable</a>
            </div>

            {/* CTA Inline: EMAIL 6 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai to start the conversation on your terms</a>
            </div>

          </article>

          {/* Final CTA */}
          <section className="ae-final-cta not-prose">
            <div>
              <h2 className="font-headline font-black uppercase tracking-tighter text-white">
                The Answer Engine engineers the citations AI alone cannot earn for you
              </h2>
              <p>
                AI tools write content. The Answer Engine builds the citation surface that makes
                ChatGPT, Perplexity, Claude, and Google AI recommend you by name. One operator per
                market. Fixed fee. Free scan to start.
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
