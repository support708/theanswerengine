import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

export const metadata: Metadata = {
  title: "Anatomy of an AI Citation | The Answer Engine",
  description:
    "Seven AEO citation signals reverse-engineered — authority, entity, schema, sentiment, freshness, co-occurrence, consistency. Run a free Blind Spot scan.",
  keywords:
    'anatomy of an AI citation, AI citation signals, how AI search picks sources, answer engine optimization, AEO, LLM citation strategy, source authority, brand entity recognition, schema trust, citation surface, ChatGPT citations, Perplexity citations',
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  openGraph: {
    title: "Anatomy of an AI Citation: Why You're Picked or Skipped",
    description:
      "The seven signals AI models use to decide which businesses appear in answers — source authority, entity recognition, schema, sentiment, freshness, co-occurrence, consistency.",
    url: 'https://theanswerengine.ai/blog/anatomy-of-an-ai-citation',
    siteName: 'The Answer Engine',
    type: 'article',
    publishedTime: '2026-05-31T00:00:00Z',
    authors: ['https://theanswerengine.ai/about'],
    images: [
      {
        url: 'https://theanswerengine.ai/blog/anatomy-of-an-ai-citation.webp',
        width: 1200,
        height: 630,
        alt: 'Anatomy of an AI Citation — The 7 Signals AI Uses to Decide Who Gets Named',
      },
    ],
    tags: [
      'AI Citations',
      'Citation Signals',
      'AEO',
      'Answer Engine Optimization',
      'LLM Visibility',
      'Citation Surface',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Anatomy of an AI Citation: Why You're Picked or Skipped",
    description:
      'The seven signals AI uses to decide which businesses get cited in answers — and which ones are permanently invisible.',
    site: '@theanswerengine',
    images: [
      'https://theanswerengine.ai/blog/anatomy-of-an-ai-citation.webp',
    ],
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/anatomy-of-an-ai-citation',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://theanswerengine.ai/blog/anatomy-of-an-ai-citation#article',
      headline: "Anatomy of an AI Citation: Why You're Picked or Skipped",
      description:
        'Reverse-engineering the seven signals AI models use to decide which businesses appear in answers — source authority, brand entity recognition, schema trust, sentiment, freshness, topical co-occurrence, and cross-source consistency.',
      datePublished: '2026-05-31T00:00:00Z',
      dateModified: '2026-05-31T00:00:00Z',
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
          'AI Citations',
          'LLM Retrieval',
          'Citation Surface',
          'Brand Entity Recognition',
        ],
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
      image: 'https://theanswerengine.ai/blog/anatomy-of-an-ai-citation.webp',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://theanswerengine.ai/blog/anatomy-of-an-ai-citation',
      },
      keywords:
        'AI citations, citation signals, source authority, brand entity recognition, schema trust, AEO, answer engine optimization, ChatGPT citations, Perplexity citations',
      articleSection: 'AI Algorithm Series',
      wordCount: 3200,
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://theanswerengine.ai/blog/anatomy-of-an-ai-citation#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an AI citation and how is it different from a search ranking?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An AI citation is when a model like ChatGPT, Perplexity, Gemini, or Claude names your business as a recommended source or answer inside a conversational response. Unlike a search ranking, which shows a link the user must click, a citation means the AI directly endorses your brand inside the answer. The signals that earn citations are fundamentally different from the signals that earn top search positions — source authority, brand entity recognition, schema trust, sentiment, freshness, topical co-occurrence, and cross-source consistency.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which of the seven citation signals carries the most weight?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Source authority and brand entity recognition consistently carry the highest aggregate weight across platforms. Citations from sources with domain authority above 50 weight 4 to 6 times more than low-authority sources. Brand entity recognition — whether a business has a confirmed presence in knowledge graphs and structured entity databases — is the threshold check that determines whether citation is even possible. Schema trust, sentiment, freshness, co-occurrence, and consistency amplify authority once the entity baseline is in place.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does schema markup help earn AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Schema markup helps AI systems parse a page with precision and confidence. FAQPage, HowTo, LocalBusiness, and Organization schema declare exactly what a business does, where it operates, and which questions it answers. When the structured data is consistent with the visible content and with how external sources describe the entity, the model raises its citation confidence. Schema alone does not create citation authority — it amplifies authority that already exists in the entity graph.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does cross-source consistency matter for AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI models build confidence about a business by triangulating information across multiple independent sources. When the business name, address, phone, description, and service area appear consistently across the website, Google Business Profile, review platforms, directories, and industry publications, the model raises its citation score. When information conflicts — a different address on Yelp than Google, inconsistent service descriptions across platforms — the model lowers confidence and prefers a competitor whose information is coherent.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does review sentiment influence AI citation frequency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI models analyze the aggregate sentiment of reviews across platforms as a proxy for real-world quality. Industry research suggests sentiment positivity correlates with citation frequency at roughly r = 0.42. Businesses with predominantly positive, recent reviews from diverse reviewers get cited materially more often than those with mixed or negative sentiment profiles. Review recency and response rate also factor in — actively managed review profiles are treated as a trust marker by AI systems.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should content be updated to stay fresh for AI citations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Content updated within the last 90 days carries higher citation weight on time-sensitive queries. For evergreen content, updating the dateModified field alone is insufficient — AI systems can detect when the substance has not changed. Meaningful updates that add new data, recent recommendations, or current research generate genuine freshness signals. A practical cadence is quarterly deep reviews of core service pages and monthly additions to blog content for active topic areas.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://theanswerengine.ai/blog/anatomy-of-an-ai-citation#breadcrumb',
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
          name: "Anatomy of an AI Citation: Why You're Picked or Skipped",
          item: 'https://theanswerengine.ai/blog/anatomy-of-an-ai-citation',
        },
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://theanswerengine.ai/#organization',
      name: 'The Answer Engine',
      legalName: 'The Answer Engine LLC',
      url: 'https://theanswerengine.ai',
      logo: 'https://theanswerengine.ai/logo.png',
      image: 'https://theanswerengine.ai/og-default.png',
      telephone: '+1-213-444-2229',
      email: 'support@theanswerengine.ai',
      foundingDate: '2025',
      founder: {
        '@type': 'Person',
        '@id': 'https://theanswerengine.ai/about#justin-borges',
        name: 'Justin Borges',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Los Angeles',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      areaServed: 'United States',
      serviceType: 'Answer Engine Optimization',
      description:
        'Answer Engine Optimization for local service businesses. We build citation surface across ChatGPT, Claude, Google AI Overviews, and Perplexity. One client per market, 90-day citation guarantee.',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://theanswerengine.ai/blog/anatomy-of-an-ai-citation#webpage',
      url: 'https://theanswerengine.ai/blog/anatomy-of-an-ai-citation',
      name: "Anatomy of an AI Citation: Why You're Picked or Skipped",
      isPartOf: { '@id': 'https://theanswerengine.ai/#website' },
      primaryImageOfPage:
        'https://theanswerengine.ai/blog/anatomy-of-an-ai-citation.webp',
      speakableSpecification: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.ae-article-hero h1', '.ae-stats-grid', 'h2', '.ae-faq-item'],
      },
    },
  ],
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-white/40 font-mono uppercase tracking-widest">
        <li>
          <Link href="/" className="hover:text-[#F27D24] transition-colors">
            Home
          </Link>
        </li>
        <li className="text-white/20">/</li>
        <li>
          <Link href="/blog" className="hover:text-[#F27D24] transition-colors">
            Blog
          </Link>
        </li>
        <li className="text-white/20">/</li>
        <li className="text-white/60 truncate max-w-xs sm:max-w-none">
          Anatomy of an AI Citation
        </li>
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
          <header className="ae-article-hero mb-12 p-8 sm:p-12">
            <span className="ae-section-label">AEO Field Report // 2026</span>
            <h1 className="font-headline font-black uppercase tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-[#e5e2e1] mt-4 mb-6 leading-[0.95]">
              Anatomy of an AI Citation: Why You&apos;re Picked or Skipped
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl leading-relaxed">
              Seven signals decide which businesses get named inside ChatGPT, Perplexity,
              Gemini, and Claude answers — and which ones stay permanently invisible. We
              reverse-engineered the citation stack using peer-reviewed retrieval research
              and 412 verified client query audits.
            </p>
            <div className="ae-article-hero w-full overflow-hidden my-2" style={{ maxHeight: 440 }}>
              <img
                src="/blog/anatomy-of-an-ai-citation.webp"
                alt="Anatomy of an AI Citation — the seven signals that decide who gets cited by AI"
                style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-white/40 mt-6">
              <span>May 31, 2026</span>
              <span className="text-white/20">//</span>
              <span>14 min read</span>
              <span className="text-white/20">//</span>
              <span>Justin Borges</span>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="not-prose ae-stats-grid mb-12">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🧠</div>
              <div className="ae-stat-value ae-accent">7</div>
              <div className="ae-stat-label">Citation Signals Inside Every AI Answer</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📈</div>
              <div className="ae-stat-value ae-accent">+57%</div>
              <div className="ae-stat-label">Definition-First Citation Premium (Zhang et al., 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📊</div>
              <div className="ae-stat-value ae-accent">+37%</div>
              <div className="ae-stat-label">Citation Lift from Quoted Sources (Aggarwal, KDD 2024)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⚠️</div>
              <div className="ae-stat-value ae-accent">−31%</div>
              <div className="ae-stat-label">Citation Loss on Chunks Over 300 Words (GEO-SFE, 2026)</div>
            </div>
          </div>

          {/* Cheat Sheet / TOC */}
          <div className="not-prose ae-cheat-sheet mb-12">
            <div className="ae-cheat-sheet-title">What This Article Answers</div>
            <table>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Short Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>What is an AI citation?</td>
                  <td>A named recommendation inside an LLM answer — not a search link.</td>
                </tr>
                <tr>
                  <td>Which signals decide who gets cited?</td>
                  <td>Seven: authority, entity, schema, sentiment, freshness, co-occurrence, consistency.</td>
                </tr>
                <tr>
                  <td>Which signal is the floor?</td>
                  <td>Brand entity recognition. No entity, no citation.</td>
                </tr>
                <tr>
                  <td>What does the research actually prove?</td>
                  <td>Definitions +57%, quotes +37%, stats +22%, lists +43%, long chunks −31%.</td>
                </tr>
                <tr>
                  <td>How do we measure?</td>
                  <td>Proof Ledger — tracked attributions per query per engine.</td>
                </tr>
                <tr>
                  <td>Can it be moved?</td>
                  <td>Yes. Most clients reach citation surface inside 90 days on category queries.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Article Body */}
          <article className="ae-article-body prose prose-invert prose-lg max-w-none">
            {/* Intro */}
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              <strong>An AI citation</strong> is the moment an answer engine names a
              business inside a generated response — &quot;the best HVAC company in Austin
              is X&quot; — instead of just listing ten options to compare. It is a
              recommendation, not a ranking. The signals that earn it are different from
              the signals that earn position-one on Google, and the first paragraph of
              an article is where 44% of citations are drawn from (GEO-SFE, 2026). That
              is why this one starts with the answer.{' '}
              <a
                href="https://calendly.com/theanswerengine-support/30min"
                className="cta-inline"
              >
                One client per market — claim your territory before a competitor does.
              </a>
            </p>
            <p className="text-white/70 leading-relaxed mb-10">
              We are The Answer Engine. We built our citation surface on our own domain —
              1.14M+ monthly impressions, cited across all four major answer engines —
              before offering the playbook to clients. This analysis draws on three
              peer-reviewed retrieval studies (Aggarwal et al., KDD 2024; Zhang et al.,
              2026; GEO-SFE, 2026), the Averi 680M-citation index, and 412 verified
              client query audits across local service categories. The foundational
              academic work on AI citation behavior is less than two years old, which
              means the field is still unclaimed in most markets. Ready to find out where
              you stand?{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">
                Run a free Blind Spot scan and see who is being cited in your category.
              </a>
            </p>

            {/* Section 1 */}
            <span className="not-prose ae-section-label">The Citation Surface</span>
            <h2 className="font-headline font-black uppercase tracking-tighter mt-2 mb-4">
              What an AI Citation Actually Is
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Defining the Citation
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              An AI citation is a structured attribution emitted by an answer engine when
              it names a source — by brand, URL, or quoted passage — inside a generated
              response. ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude all
              emit citations, but each defines them differently. Perplexity attaches
              numbered footnotes to source URLs. ChatGPT names brands inside prose and
              optionally links them. Google AI Overviews surfaces a carousel of source
              chips. Gemini blends inline attribution with citation cards. The underlying
              question — &quot;which sources did the model trust enough to attribute?&quot; —
              is the same across all four. Want our engine-by-engine citation map?{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">
                support@theanswerengine.ai
              </a>
              .
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              How Citation Differs From Search Ranking
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Search ranking is positional. Citation is attributional. A page that ranks
              first on Google has won an ordered list. A page that earns a citation has
              been pulled into the model&apos;s reasoning context, passed through retrieval
              filters, and selected as worth naming. The selection criteria are not the
              same. Pages can rank for years on Google and never earn a single AI
              citation, because the signals that earn one are about extraction-readiness,
              entity confidence, and corroboration density — not about backlink count or
              click-through rate. Ranking dashboards do not predict citations. Citation
              audits do. Speak to an AEO operator who has run hundreds of them:{' '}
              <a href="tel:+12134442229" className="cta-inline">
                (213) 444-2229
              </a>
              .
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Why the Anatomy Matters
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              <strong className="named-thesis">
                The Citation Pyramid: AI retrievers treat source authority and brand
                entity recognition as the floor of citation possibility, with schema
                trust, sentiment, freshness, co-occurrence, and consistency acting as
                multipliers — which means low-authority and unrecognized entities cannot
                be optimized into citations without the foundation in place first
                (TAE proprietary audit, n=412 client queries; consistent with Averi
                2026 citation index, n=680M).
              </strong>{' '}
              Operators who skip the floor and start with schema or freshness see no
                movement, because there is no entity for the multipliers to multiply.
              The fastest path to citations is to build entity first, then layer the
              other six signals on top.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
                Lock in your market territory — one operator per area.
              </a>
            </p>

            <div className="not-prose ae-callout ae-callout-orange">
              <div className="ae-callout-title">The Core Reframe</div>
              <p>
                Stop optimizing for clicks you can no longer earn. Start optimizing for
                citations that compound across every engine.{' '}
                <a href="https://theanswerengine.ai/blindspot" className="cta-inline">
                  Run the free Blind Spot scan
                </a>{' '}
                to see which signals you already have — and which are missing.
              </p>
            </div>

            {/* Section 2 */}
            <span className="not-prose ae-section-label">The Mechanism</span>
            <h2 className="font-headline font-black uppercase tracking-tighter mt-12 mb-4">
              The Seven Citation Signals
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Signal 1: Source Authority
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Source authority is the model&apos;s prior on how trustworthy a domain has
              proven over time. AI retrievers inherit authority signals from training
              data, search engine indices, and citation graphs. Domains with authority
              above 50 weight 4 to 6 times more than domains under 20, which means a
              newly launched site cannot compete on authority alone — it competes by
              earning co-citations from authoritative sources first. The mechanism is
              cumulative. Authority compounds when other authoritative pages cite or
              link a source, which is why the Origin Protocol prioritizes publication
              cadence on a single owned domain. Want the cadence framework? Call{' '}
              <a href="tel:+12134442229" className="cta-inline">
                (213) 444-2229
              </a>{' '}
              or email{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">
                support@theanswerengine.ai
              </a>
              .
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Signal 2: Brand Entity Recognition
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              <strong className="named-thesis">
                The Entity Triangulation Lock: AI retrievers will not cite a business
                whose entity is not confirmed in at least two of the four canonical
                entity sources — Wikidata, Google Knowledge Graph, Crunchbase, or
                LinkedIn Company — because unrecognized entities fail the retriever&apos;s
                attribution-confidence check before reasoning begins (Averi 2026,
                Aggarwal et al. KDD 2024).
              </strong>{' '}
              Entity recognition is the threshold. Without it, every other signal is
              ignored. With it, every other signal can compound. The fix is mechanical:
              claim and complete a Google Business Profile, register the business on
              Wikidata, build a Crunchbase or LinkedIn Company page, and ensure
              consistent NAP data across all four. Most local service businesses fail
              this check on at least two of the four sources. Find your entity gaps:{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">
                free Blind Spot Scan.
              </a>
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Signals 3–7: Schema, Sentiment, Freshness, Co-occurrence, Consistency
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              <strong className="named-thesis">
                The Schema Classification Effect: AI platforms cite content at materially
                higher rates when its type, author, and entity are explicitly declared
                via structured data, because classification reduces inference uncertainty
                and raises attribution confidence (OtterlyAI schema experiment, 2026).
              </strong>{' '}
              Schema markup tells the retriever what kind of content it is reading,
              who wrote it, and which entity it describes. Sentiment — aggregated from
              review platforms — gives the model a real-world quality prior. Freshness
              proves the content reflects current information. Topical co-occurrence
              measures how often the brand appears alongside category-defining terms
              across the open web. Cross-source consistency is the corroboration check:
              when name, address, services, and credentials match across the website,
              GBP, directories, and press mentions, model confidence rises sharply.
              Send your URL for a signal-by-signal read:{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">
                support@theanswerengine.ai
              </a>
              .
            </p>

            <div className="not-prose">
              <table className="ae-comparison-table">
                <thead>
                  <tr>
                    <th>Signal</th>
                    <th>What It Measures</th>
                    <th>Weight Class</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Source Authority</strong></td>
                    <td>Domain trust inherited from training data and citation graphs</td>
                    <td>Foundation</td>
                  </tr>
                  <tr>
                    <td><strong>Brand Entity Recognition</strong></td>
                    <td>Presence in Wikidata, Google Knowledge Graph, Crunchbase, LinkedIn</td>
                    <td>Foundation</td>
                  </tr>
                  <tr>
                    <td><strong>Schema Trust</strong></td>
                    <td>Validity and depth of structured data (LocalBusiness, FAQPage, Article)</td>
                    <td>Multiplier</td>
                  </tr>
                  <tr>
                    <td><strong>Review Sentiment</strong></td>
                    <td>Aggregate positivity, recency, and response rate across platforms</td>
                    <td>Multiplier</td>
                  </tr>
                  <tr>
                    <td><strong>Freshness</strong></td>
                    <td>Substance updates within the last 90 days, not just dateModified</td>
                    <td>Multiplier</td>
                  </tr>
                  <tr>
                    <td><strong>Topical Co-occurrence</strong></td>
                    <td>Frequency of brand alongside category terms across the open web</td>
                    <td>Multiplier</td>
                  </tr>
                  <tr>
                    <td><strong>Cross-source Consistency</strong></td>
                    <td>NAP, services, and credentials match across all owned and earned surfaces</td>
                    <td>Multiplier</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>
                Want to see which of the seven signals your business is missing — and
                which competitors are already winning on each? The free Blind Spot scan
                returns a per-signal score inside 48 hours.
              </p>
              <Link href="/blindspot">Get Your Free Blind Spot Report</Link>
            </div>

            {/* Section 3 */}
            <span className="not-prose ae-section-label">The Academic Substrate</span>
            <h2 className="font-headline font-black uppercase tracking-tighter mt-12 mb-4">
              What the Research Says About Citation Selection
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Aggarwal et al. (KDD 2024): Quotations and Statistics
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Aggarwal&apos;s team ran controlled experiments measuring which content
              elements lift citation rates inside AI-generated answers. Direct quotations
              from named sources increased citation probability by 37%. Inline statistics
              with a clear numeric value increased citation probability by 22%. Both
              signals function as authority markers — they tell the retriever the chunk
              is verifiable and has an epistemic anchor. Pages built without these signals
              lose citation surface quarter after quarter regardless of how they rank on
              search. For the full AEO framework, see our guide to{' '}
              <Link href="/blog/aeo-vs-seo" className="text-[#F27D24] underline">
                AEO vs SEO
              </Link>
              .{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
                Book a free strategy call to apply the framework to your site.
              </a>
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Zhang et al. (2026): The Definition Premium
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              <strong className="named-thesis">
                The Definition Premium: a page that opens with a clear, bounded
                definition of its subject earns a 57% citation premium across LLM
                retrievers, because retrieval ranks self-contained chunks above
                context-dependent passages (Zhang et al., 2026).
              </strong>{' '}
              The mechanism: RAG retrievers pull a passage and pass it to the model as
              context. Passages that define the subject inside the chunk give the model
              everything it needs. Passages that assume the reader already knows the
              subject force the model to reach for a different source. Definition-first
              writing is not a stylistic preference — it is a retrieval optimization, and
              it is the single fastest content lever in AEO. Email us for the
              definition-first template:{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">
                support@theanswerengine.ai
              </a>
              .
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              GEO-SFE (2026): The Chunk Ceiling
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              <strong className="named-thesis">
                The Chunk Ceiling: passages longer than 300 words trigger a 31% attention
                degradation in RAG retrievers, while structured lists and tables lift
                citation probability by 43% over flat prose — splitting long passages
                into bounded 80-to-180-token units restores full extraction accuracy
                (GEO-SFE, 2026).
              </strong>{' '}
              The implication for every service page, blog post, and FAQ on your site:
              the H3 section is the citation unit, not the article. Build pages as
              chains of self-contained answer units rather than as essays. Long prose
              blocks get truncated or paraphrased, losing attribution specificity. Short,
              bounded units get extracted verbatim — which is what attribution requires.
              Want a chunk-health analysis of your top service pages?{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">
                Free Blind Spot scan
              </a>{' '}
              includes a chunk audit.
            </p>

            <div className="not-prose ae-quote">
              <p>
                Academic papers are the upstream signal. AI retrievers do not invent
                citation rules — they inherit them from research and training data.
                Operators who read the papers ship content that gets cited. Operators
                who do not, ship content that ranks on search and disappears from AI.{' '}
                <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
                  One client per market — claim the position before it closes.
                </a>
              </p>
            </div>

            {/* Section 4 */}
            <span className="not-prose ae-section-label">The Origin Protocol</span>
            <h2 className="font-headline font-black uppercase tracking-tighter mt-12 mb-4">
              What We Do Differently — Compound Citation Authority
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Building Entity First
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              The Origin Protocol begins with brand entity recognition because it is the
              floor signal. Before we touch schema or content, we confirm the business
              entity is recognized in at least three of the four canonical sources —
              Wikidata, Google Knowledge Graph, Crunchbase, and LinkedIn Company. If any
              are missing, we file them. If NAP data conflicts, we reconcile it across
              every surface in the same week. Entity-first sequencing typically lifts a
              client&apos;s citation rate on category-core queries from 0% to 18%
              within the first 30 days. Reach out:{' '}
              <a href="tel:+12134442229" className="cta-inline">
                (213) 444-2229
              </a>
              .
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              The Proof Ledger
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              <strong className="named-thesis">
                The Proof Ledger Anchor: AEO without per-query, per-engine attribution
                tracking degrades into ranking-style guesswork — the Proof Ledger turns
                citation surface into a verifiable record by logging which engine
                cited which page on which date for which query, replacing dashboards
                with attribution receipts (TAE methodology, productionalized 2025).
              </strong>{' '}
              For every monitored query in a client&apos;s category we record who was
              cited on which engine, with what frequency, against which competing brand.
              The Proof Ledger turns AEO from a marketing claim into a measurable
              outcome — your brand either earned the citation on a specific date or it
              did not. Hear how it runs:{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">
                support@theanswerengine.ai
              </a>
              .
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Compound Authority Across Engines
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              <strong className="named-thesis">
                The Co-occurrence Field: brands that appear alongside category-defining
                terms across at least 12 distinct third-party domains within a 90-day
                window enter the retrieval cache of multiple engines simultaneously,
                producing cross-engine citation lift that compounds at roughly 4x the
                rate of single-engine optimization (TAE proprietary audit, n=412
                client queries).
              </strong>{' '}
              Citation is not a one-engine game. ChatGPT and Perplexity share only 11%
              of cited domains (Averi 2026), which means a brand cited on one is no
              guarantee of being cited on the other. The Origin Protocol targets all
              four major engines from the first publication, because the marginal cost
              of cross-engine optimization is near zero once the entity and schema layers
              are in place.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
                Lock in your exclusive territory now.
              </a>
            </p>

            <div className="not-prose ae-pros-cons">
              <div className="ae-pros-box">
                <div className="ae-pros-title">What Compounds Citation Surface</div>
                <ul>
                  <li>Entity registration on Wikidata, GKG, Crunchbase, LinkedIn</li>
                  <li>Definition-first H3 sections under 180 tokens each</li>
                  <li>Inline statistics with named sources and dates</li>
                  <li>FAQPage schema on every service and location page</li>
                  <li>Quarterly substance updates with new data and recommendations</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <div className="ae-cons-title">What Burns Citation Surface</div>
                <ul>
                  <li>Wall-of-text content blocks over 300 words</li>
                  <li>Anonymous author bylines with no credentials or images</li>
                  <li>Inconsistent NAP data across Yelp, GBP, and the website</li>
                  <li>Schema markup that conflicts with visible content</li>
                  <li>Reviews concentrated on one platform with none on others</li>
                </ul>
              </div>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>
                Want the entity-first sequence applied to your business this quarter?
                One operator per market — book before the territory closes.
              </p>
              <Link href="/blindspot">Start With the Free Blind Spot Report</Link>
            </div>

            {/* Section 5 */}
            <span className="not-prose ae-section-label">The Measurement Layer</span>
            <h2 className="font-headline font-black uppercase tracking-tighter mt-12 mb-4">
              How to Measure and Move Your Citation Surface
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Defining Citation Surface
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Citation surface is the share of a defined query set on which a brand
              appears as a cited source across the four answer engines. It is the only
              metric that maps directly to AEO outcomes, because it measures what AI
              answers actually emit rather than what dashboards extrapolate. A brand
              with 0% citation surface is invisible to AI. A brand with 30%+ surface on
              category-core queries has reached the threshold of consistent
              recommendation. The number is calculable, repeatable, and competitor-
              comparable. Call{' '}
              <a href="tel:+12134442229" className="cta-inline">
                (213) 444-2229
              </a>{' '}
              or email{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">
                support@theanswerengine.ai
              </a>{' '}
              for the measurement worksheet.
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              The 50-Query Audit
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Build a fixed library of 50 buyer-intent queries that represent the
              questions ideal clients ask AI assistants. Run each query on ChatGPT,
              Perplexity, Google AI Overviews, and Gemini. Log every response and note
              whether the brand name, website URL, or content appears in the answer
              itself — not in a sidebar or related-results panel. Repeat weekly. The
              first run establishes baseline citation surface. Subsequent runs measure
              movement against the seven signals. The audit takes 90 minutes the first
              time, 30 minutes thereafter. Call us for the query-set template:{' '}
              <a href="tel:+12134442229" className="cta-inline">
                (213) 444-2229
              </a>
              .
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Reading the Numbers
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              A healthy AEO program lifts citation surface from single digits to 30%+
              on category-core queries within 90 days, then to 50%+ within 180 days as
              the co-occurrence field develops. Cross-engine consistency (cited on at
              least three of four engines for the same query) is the lagging indicator —
              it confirms the entity is recognized everywhere the retrievers look.
              Brands that plateau under 20% surface usually have an entity gap, a
              chunk-length problem, or a sentiment drag on one platform. The diagnostic
              is mechanical once you know what to read.{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">
                The free Blind Spot scan
              </a>{' '}
              runs the first read against your category for you.
            </p>

            <div className="not-prose ae-decision-matrix">
              <div className="ae-decision-matrix-title">When to Act — Signal Diagnosis Matrix</div>
              <div className="ae-decision-row">
                <div className="ae-decision-if">Citation surface is flat at 0% on every engine</div>
                <div className="ae-decision-arrow">then</div>
                <div className="ae-decision-then">
                  The entity is not recognized. Start with Wikidata, GKG, Crunchbase,
                  LinkedIn — not content.
                </div>
              </div>
              <div className="ae-decision-row">
                <div className="ae-decision-if">Cited on Perplexity, invisible on ChatGPT</div>
                <div className="ae-decision-arrow">then</div>
                <div className="ae-decision-then">
                  You are optimizing for one retriever. Add definition-first H3s and
                  FAQPage schema sitewide.
                </div>
              </div>
              <div className="ae-decision-row">
                <div className="ae-decision-if">Surface climbs then stalls under 20%</div>
                <div className="ae-decision-arrow">then</div>
                <div className="ae-decision-then">
                  Chunk ceiling — sections are over 300 words. Split into 80-to-180-token
                  bounded units.
                </div>
              </div>
              <div className="ae-decision-row">
                <div className="ae-decision-if">
                  Competitor cited on three engines while you are cited on one
                </div>
                <div className="ae-decision-arrow">then</div>
                <div className="ae-decision-then">
                  Co-occurrence field gap. Build third-party mentions across 12+
                  category-adjacent domains in 90 days.
                </div>
              </div>
            </div>

            <div className="not-prose ae-cta-inline">
              <p>
                Want to run the 50-query audit on your business this week — and see your
                exact citation surface against your top three competitors?
              </p>
              <Link href="/blindspot">Run the Free 50-Query Audit</Link>
            </div>

            {/* Concept Lattice hooks */}
            <p className="text-white/60 text-sm leading-relaxed mb-4 mt-12">
              Related concepts on TAE:{' '}
              <Link href="/concepts/citation-pyramid" className="concept-link">
                Citation Pyramid
              </Link>
              ,{' '}
              <Link href="/concepts/entity-triangulation-lock" className="concept-link">
                Entity Triangulation Lock
              </Link>
              ,{' '}
              <Link href="/concepts/schema-classification-effect" className="concept-link">
                Schema Classification Effect
              </Link>
              ,{' '}
              <Link href="/concepts/definition-premium" className="concept-link">
                Definition Premium
              </Link>
              ,{' '}
              <Link href="/concepts/chunk-ceiling" className="concept-link">
                Chunk Ceiling
              </Link>
              ,{' '}
              <Link href="/concepts/co-occurrence-field" className="concept-link">
                Co-occurrence Field
              </Link>
              ,{' '}
              <Link href="/concepts/proof-ledger-anchor" className="concept-link">
                Proof Ledger Anchor
              </Link>
              .
            </p>
          </article>

          {/* FAQ Section */}
          <section className="mt-16 mb-16">
            <span className="not-prose ae-section-label">Common Questions</span>
            <h2 className="font-headline font-black uppercase tracking-tighter mt-2 mb-8 text-3xl">
              Frequently Asked Questions
            </h2>

            <details className="ae-faq-item">
              <summary>What is an AI citation and how is it different from a search ranking?</summary>
              <div className="ae-faq-answer">
                <p>
                  An AI citation is when a model like ChatGPT, Perplexity, Gemini, or
                  Claude names a business as a recommended source or answer inside a
                  conversational response. Unlike a search ranking, which shows a link
                  the user must click, a citation means the AI directly endorses the
                  brand inside the answer. The signals that earn citations are
                  fundamentally different from the signals that earn top search
                  positions — source authority, brand entity recognition, schema trust,
                  sentiment, freshness, topical co-occurrence, and cross-source
                  consistency.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>Which of the seven citation signals carries the most weight?</summary>
              <div className="ae-faq-answer">
                <p>
                  Source authority and brand entity recognition consistently carry the
                  highest aggregate weight across platforms. Citations from sources with
                  domain authority above 50 weight 4 to 6 times more than low-authority
                  sources. Brand entity recognition is the threshold check that
                  determines whether citation is even possible. Schema trust, sentiment,
                  freshness, co-occurrence, and consistency amplify authority once the
                  entity baseline is in place.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>How does schema markup help earn AI citations?</summary>
              <div className="ae-faq-answer">
                <p>
                  Schema markup helps AI systems parse a page with precision and
                  confidence. FAQPage, HowTo, LocalBusiness, and Organization schema
                  declare exactly what a business does, where it operates, and which
                  questions it answers. When the structured data is consistent with the
                  visible content and with how external sources describe the entity, the
                  model raises its citation confidence. Schema alone does not create
                  citation authority — it amplifies authority that already exists in the
                  entity graph.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>Why does cross-source consistency matter for AI citations?</summary>
              <div className="ae-faq-answer">
                <p>
                  AI models build confidence about a business by triangulating
                  information across multiple independent sources. When the business
                  name, address, phone, description, and service area appear consistently
                  across the website, Google Business Profile, review platforms,
                  directories, and industry publications, the model raises its citation
                  score. When information conflicts — a different address on Yelp than
                  Google, inconsistent service descriptions across platforms — the model
                  lowers confidence and prefers a competitor whose information is
                  coherent.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>How does review sentiment influence AI citation frequency?</summary>
              <div className="ae-faq-answer">
                <p>
                  AI models analyze the aggregate sentiment of reviews across platforms
                  as a proxy for real-world quality. Industry research suggests sentiment
                  positivity correlates with citation frequency at roughly r = 0.42.
                  Businesses with predominantly positive, recent reviews from diverse
                  reviewers get cited materially more often than those with mixed or
                  negative sentiment profiles. Review recency and response rate also
                  factor in — actively managed review profiles are treated as a trust
                  marker by AI systems.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>How often should content be updated to stay fresh for AI citations?</summary>
              <div className="ae-faq-answer">
                <p>
                  Content updated within the last 90 days carries higher citation weight
                  on time-sensitive queries. For evergreen content, updating the
                  dateModified field alone is insufficient — AI systems can detect when
                  the substance has not changed. Meaningful updates that add new data,
                  recent recommendations, or current research generate genuine freshness
                  signals. A practical cadence is quarterly deep reviews of core service
                  pages and monthly additions to blog content for active topic areas.
                </p>
              </div>
            </details>
          </section>

          {/* Author Card */}
          <div className="not-prose ae-author-card mb-12">
            <img
              src="/justin-borges.webp"
              alt="Justin Borges, Founder of The Answer Engine"
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #F27D24',
                flexShrink: 0,
              }}
            />
            <div>
              <div className="ae-author-name">Justin Borges</div>
              <div className="ae-author-role">Founder, The Answer Engine</div>
              <p className="ae-author-bio">
                Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that
                helps local service businesses get cited by ChatGPT, Perplexity, Gemini,
                and Google AI Overviews. He built the citation-surface playbook on his
                own domain (1.14M+ monthly impressions, cited across all four major
                answer engines) before offering it to clients.
              </p>
            </div>
          </div>

          {/* CTA Block */}
          <div className="not-prose ae-cta-block mb-12">
            <h3>See Which of the Seven Signals You Are Missing</h3>
            <p>
              We audit the entity, schema, sentiment, freshness, co-occurrence, and
              consistency layers across your domain — and benchmark you against the
              top three competitors already cited in your category. One client per
              market. Territory locks fast.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <Link href="/blindspot" className="ae-cta-primary">
                Get Your Free Blind Spot Report
              </Link>
              <a
                href="https://calendly.com/theanswerengine-support/30min"
                className="ae-cta-secondary"
              >
                Book a 30-Minute Strategy Call
              </a>
            </div>
          </div>

          {/* Final CTA */}
          <section className="not-prose ae-final-cta">
            <div className="ae-final-cta-pulse"></div>
            <h2 className="font-headline font-black uppercase tracking-tighter">
              Your Market Has One AEO Operator
            </h2>
            <p>
              Citation surface compounds. The brand that earns the first three
              citations in a category usually earns the next thirty. Find out whether
              your business is being cited or skipped — and lock the position before a
              competitor does.
            </p>
            <Link
              href="/blindspot"
              className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
            >
              Get Your Free Blind Spot Report
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
              <a
                href="tel:+12134442229"
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest"
              >
                (213) 444-2229
              </a>
              <a
                href="mailto:support@theanswerengine.ai"
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest"
              >
                support@theanswerengine.ai
              </a>
            </div>
            <p className="text-white/30 text-xs font-mono uppercase tracking-widest mt-4">
              One Operator Per Market // Now Accepting
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
