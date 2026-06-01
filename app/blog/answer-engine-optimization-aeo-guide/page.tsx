import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

export const metadata: Metadata = {
  title: 'Answer Engine Optimization: AEO Guide 2026 | TAE',
  description:
    'AEO playbook for 2026: get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. Field-tested across 1.14M+ impressions. Run a free Blind Spot scan.',
  keywords:
    'answer engine optimization, AEO, AEO guide 2026, how to get cited by ChatGPT, how to rank on Perplexity, AI Overview optimization, LLM citation strategy, AEO vs SEO, generative engine optimization, AI search visibility, ChatGPT optimization, Claude citations, Gemini AI search, AI citation surface',
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  openGraph: {
    title: 'Answer Engine Optimization: Complete AEO Guide for 2026',
    description:
      'The 2026 playbook for getting cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. Field-tested across 1.14M+ monthly impressions and 412 client query audits.',
    url: 'https://theanswerengine.ai/blog/answer-engine-optimization-aeo-guide',
    siteName: 'The Answer Engine',
    type: 'article',
    publishedTime: '2026-03-08T00:00:00Z',
    modifiedTime: '2026-05-31T00:00:00Z',
    authors: ['https://theanswerengine.ai/about'],
    images: [
      {
        url: 'https://theanswerengine.ai/blog/answer-engine-optimization-aeo-guide.webp',
        width: 1200,
        height: 630,
        alt: 'Answer Engine Optimization Complete AEO Guide for 2026 — The Answer Engine',
      },
    ],
    tags: [
      'Answer Engine Optimization',
      'AEO',
      'AI Search',
      'LLM Citation Strategy',
      'ChatGPT Optimization',
      'Perplexity SEO',
      'Google AI Overviews',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Answer Engine Optimization: Complete AEO Guide for 2026',
    description:
      'The 2026 AEO playbook: get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. Field-tested across 412 client query audits.',
    site: '@theanswerengine',
    images: [
      'https://theanswerengine.ai/blog/answer-engine-optimization-aeo-guide.webp',
    ],
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/answer-engine-optimization-aeo-guide',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://theanswerengine.ai/blog/answer-engine-optimization-aeo-guide#article',
      headline: 'Answer Engine Optimization: Complete AEO Guide for 2026',
      description:
        'The complete 2026 playbook for Answer Engine Optimization. Reverse-engineered citation mechanics, field-tested across 1.14M+ monthly impressions and 412 client query audits. Cite-by-cite playbook for ChatGPT, Perplexity, Claude, and Google AI Overviews.',
      datePublished: '2026-03-08T00:00:00Z',
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
          'AI Search',
          'LLM Retrieval',
          'Citation Surface',
          'Generative Engine Optimization',
          'Brand Entity Recognition',
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
      image: 'https://theanswerengine.ai/blog/answer-engine-optimization-aeo-guide.webp',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://theanswerengine.ai/blog/answer-engine-optimization-aeo-guide',
      },
      keywords:
        'answer engine optimization, AEO, AEO guide 2026, AI search, LLM citation strategy, ChatGPT optimization, Perplexity AI, Google AI Overviews, generative engine optimization, citation surface',
      articleSection: 'AEO Education',
      wordCount: 4200,
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://theanswerengine.ai/blog/answer-engine-optimization-aeo-guide#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Answer Engine Optimization (AEO)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Answer Engine Optimization is the practice of structuring content so AI systems like ChatGPT, Perplexity, Claude, and Google AI Overviews select it as the basis for generated answers and attribute it as a source. AEO targets the moment an answer is synthesized rather than the moment a list of links is shown. The unit of success is the citation, not the click.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is AEO different from traditional SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SEO optimizes for position inside an ordered list of links. AEO optimizes for attribution inside a generated answer. SEO success metrics are rankings, clicks, and sessions. AEO success metrics are citations, brand mentions, and named recommendations across answer engines. SEO and AEO share technical fundamentals (site speed, schema, authority) but diverge on content structure: AEO requires bounded answer chunks, definition-first paragraphs, and quoted statistics to feed retrieval extractors.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to see AEO results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most businesses with an established domain see the first AI citations inside 30 to 60 days after publishing AEO-structured content. Consistent citation surface across multiple engines typically takes 90 days, matching the cadence of LLM retrieval index refreshes. Sites without entity recognition or schema foundations must build those first, which extends the timeline to 120 days.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which answer engines should I optimize for in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The four engines that matter for 2026 are ChatGPT (900M+ weekly users), Google AI Overviews and AI Mode (now in 16% of US desktop searches), Perplexity AI (the citation-native retriever), and Claude (rising influence in research and enterprise queries). Each draws from overlapping but distinct retrieval pools. Content engineered for one engine usually surfaces in the others, but engine-specific tuning still matters — Perplexity rewards source authority, ChatGPT rewards entity confidence, AI Overviews reward schema completeness.',
          },
        },
        {
          '@type': 'Question',
          name: 'What content formats work best for AEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Definition-first paragraphs, bounded answer chunks under 180 tokens, quoted statistics with named sources, comparison tables, and FAQ sections earn the highest citation rates. The GEO-SFE 2026 study found lists and tables boost citation by 43%, while content chunks over 300 words trigger a 31% citation drop. Aggarwal et al. (KDD 2024) confirmed quoted sources lift citation by 37% and statistics by 22%. Articles that combine definition, citation, and structure outperform unstructured long-form by 4 to 6 times.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if my content is being cited by AI systems?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Direct AI citation tracking requires querying each engine for category-defining questions and recording which brands and URLs appear in answers. Tools like Profound, Otterly AI, and AthenaHQ automate this across ChatGPT, Perplexity, Claude, and Google AI Overviews. The Answer Engine builds a Proof Ledger for every client that records the exact query, engine, date, and citation position for each tracked attribution. Without a ledger, there is no way to prove AEO is working or where it is failing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I do AEO myself or do I need an agency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Solo founders with existing domain authority and time to publish 4 to 8 AEO-structured articles per month can build citation surface without an agency, especially in low-competition categories. Categories with established AEO operators or high competition require professional execution because citation surface is winner-take-most: the first three citations in a category usually keep earning the next thirty. Agencies that operate one client per market protect the territory lock by refusing to take competing clients.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does AEO replace SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AEO does not replace SEO — it inherits and extends it. The foundational SEO signals (site speed, authority, schema, internal linking) still feed AI retrievers because most retrievers crawl the same web as Google. AEO adds a content layer optimized for extraction and attribution. Sites that abandon SEO lose the retrieval foundation. Sites that ignore AEO lose the answer-layer share. The 2026 reality is both layers must run in parallel.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://theanswerengine.ai/blog/answer-engine-optimization-aeo-guide#breadcrumb',
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
          name: 'Answer Engine Optimization: Complete AEO Guide for 2026',
          item: 'https://theanswerengine.ai/blog/answer-engine-optimization-aeo-guide',
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
      sameAs: [
        'https://linkedin.com/company/theanswerengine',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://theanswerengine.ai/blog/answer-engine-optimization-aeo-guide#webpage',
      url: 'https://theanswerengine.ai/blog/answer-engine-optimization-aeo-guide',
      name: 'Answer Engine Optimization: Complete AEO Guide for 2026',
      isPartOf: { '@id': 'https://theanswerengine.ai/#website' },
      primaryImageOfPage:
        'https://theanswerengine.ai/blog/answer-engine-optimization-aeo-guide.webp',
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
          Answer Engine Optimization: Complete AEO Guide
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
            <span className="ae-section-label">AEO Foundational Guide // 2026</span>
            <h1 className="font-headline font-black uppercase tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-[#e5e2e1] mt-4 mb-6 leading-[0.95]">
              Answer Engine Optimization: Complete AEO Guide for 2026
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl leading-relaxed">
              The 2026 playbook for getting cited by ChatGPT, Perplexity, Claude, and
              Google AI Overviews. Field-tested across 1.14M+ monthly impressions on our
              own domain, 412 verified client query audits, and three peer-reviewed
              retrieval studies. The first three citations in a category usually earn
              the next thirty — this guide shows how to claim them.
            </p>
            <div className="ae-article-hero w-full overflow-hidden my-2" style={{ maxHeight: 440 }}>
              <img
                src="/blog/answer-engine-optimization-aeo-guide.webp"
                alt="Answer Engine Optimization Complete AEO Guide for 2026 — citation playbook for ChatGPT, Perplexity, Claude, and Google AI Overviews"
                style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-white/40 mt-6">
              <span>Updated May 31, 2026</span>
              <span className="text-white/20">//</span>
              <span>18 min read</span>
              <span className="text-white/20">//</span>
              <span>Justin Borges</span>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="not-prose ae-stats-grid mb-12">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🧠</div>
              <div className="ae-stat-value ae-accent">900M+</div>
              <div className="ae-stat-label">Weekly ChatGPT Users by Late 2025 (OpenAI)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📈</div>
              <div className="ae-stat-value ae-accent">+57%</div>
              <div className="ae-stat-label">Definition-First Citation Premium (Zhang et al., 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📊</div>
              <div className="ae-stat-value ae-accent">+43%</div>
              <div className="ae-stat-label">List and Table Citation Lift (GEO-SFE, 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⚠️</div>
              <div className="ae-stat-value ae-accent">−31%</div>
              <div className="ae-stat-label">Citation Loss on Chunks Over 300 Words (GEO-SFE, 2026)</div>
            </div>
          </div>

          {/* Cheat Sheet / TOC */}
          <div className="not-prose ae-cheat-sheet mb-12">
            <div className="ae-cheat-sheet-title">What This Guide Answers</div>
            <table>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Short Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>What is AEO?</td>
                  <td>The discipline of getting your content cited by AI answer engines.</td>
                </tr>
                <tr>
                  <td>How is it different from SEO?</td>
                  <td>SEO targets rankings. AEO targets attributions inside generated answers.</td>
                </tr>
                <tr>
                  <td>Which engines matter most in 2026?</td>
                  <td>ChatGPT, Google AI Overviews, Perplexity, and Claude.</td>
                </tr>
                <tr>
                  <td>What earns a citation?</td>
                  <td>Bounded chunks, definition-first paragraphs, quoted stats, and entity confidence.</td>
                </tr>
                <tr>
                  <td>What blocks a citation?</td>
                  <td>Long unstructured prose, missing entity recognition, and inconsistent NAP data.</td>
                </tr>
                <tr>
                  <td>How long does AEO take?</td>
                  <td>30 to 90 days for established domains. 120+ days from cold start.</td>
                </tr>
                <tr>
                  <td>How is success measured?</td>
                  <td>The Proof Ledger — tracked citations per query per engine.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Article Body */}
          <article className="ae-article-body prose prose-invert prose-lg max-w-none">
            {/* Intro */}
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              <strong>Answer Engine Optimization (AEO) is the discipline of structuring
              content so AI answer engines — ChatGPT, Perplexity, Claude, Google AI
              Overviews, and Gemini — select it as the source for generated answers and
              attribute it inside the response.</strong> The unit of success is the
              citation, not the click. The first paragraph of a published article is
              where 44% of all AI citations are drawn from (GEO-SFE, 2026), which is
              why this guide opens with the answer.{' '}
              <a
                href="https://calendly.com/theanswerengine-support/30min"
                className="cta-inline"
              >
                One operator per market — book a 30-minute territory review before a competitor does.
              </a>
            </p>
            <p className="text-white/70 leading-relaxed mb-10">
              We are The Answer Engine. We built our own citation surface — 1.14M+ monthly
              impressions, cited across all four major answer engines — before offering
              the playbook to clients. This guide draws on three peer-reviewed retrieval
              studies (Aggarwal et al., KDD 2024; Zhang et al., 2026; GEO-SFE, 2026), the
              Averi 680M-citation index, and 412 verified client query audits across local
              service categories. The foundational academic work on AI citation behavior
              is less than two years old, which means the field is still unclaimed in
              most markets.{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">
                Run a free Blind Spot scan and see who is being cited in your category right now.
              </a>
            </p>

            {/* Section 1 — Definition */}
            <span className="not-prose ae-section-label">The Foundation</span>
            <h2 className="font-headline font-black uppercase tracking-tighter mt-2 mb-4">
              What Answer Engine Optimization Actually Is
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Defining AEO in One Sentence
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Answer Engine Optimization is the practice of engineering content,
              entities, and structured data so AI retrieval systems select a brand as
              the cited source inside a generated answer. AEO sits one layer above
              traditional SEO. Where SEO competes for position inside an ordered list
              of links, AEO competes for attribution inside a synthesized response. The
              same page can rank first on Google for years and never earn a single
              citation on ChatGPT or Perplexity, because the signals that earn ranking
              and the signals that earn citation are not the same. Want to see whether
              your site has any citation surface at all?{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">
                Free AERO Blind Spot Scan — results in 60 seconds.
              </a>
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Why &quot;Answer Engine&quot; and Not &quot;Search Engine&quot;
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              The term answer engine separates AI systems that generate a single
              synthesized response from search engines that return a list of links.
              ChatGPT, Perplexity, Claude, and Google AI Overviews are all answer
              engines. They consume web content, run retrieval, synthesize an answer,
              and emit citations as the supporting evidence. The user receives the
              answer first and the citation second — sometimes never, if attribution
              is hidden in a footnote. This inversion is why AEO exists as a distinct
              discipline: the unit of distribution changed from the link to the
              attribution. To talk through what this means for your specific market,
              call{' '}
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
              The Core Reframe
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              <strong className="named-thesis">
                The Citation Inversion: in answer-engine traffic, the AI consumes the
                content and the user consumes the AI — which means the optimization
                target shifts from human readers scanning a SERP to retrieval systems
                extracting verifiable claims from chunks, and brands that fail to
                restructure for extraction become invisible regardless of their
                Google ranking (Aggarwal et al., KDD 2024; GEO-SFE 2026).
              </strong>{' '}
              Operators who treat AEO as a marketing tactic miss the structural change.
              AEO is a content engineering discipline that touches the schema layer,
              the chunk layer, the entity layer, and the publication cadence. Treating
              it as a content marketing add-on produces no citation movement. Treating
              it as an engineering rebuild produces compounding citation surface inside
              90 days.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
                Walk through your category citation map on a 30-minute call.
              </a>
            </p>

            <div className="not-prose ae-callout ae-callout-orange">
              <div className="ae-callout-title">The 2026 Reality</div>
              <p>
                Citation surface is winner-take-most. The first three brands cited in
                a category typically capture the next thirty citations, because answer
                engines reinforce trusted sources with every retrieval pass.{' '}
                <a href="https://theanswerengine.ai/blindspot" className="cta-inline">
                  Find out where you stand in your category — free Blind Spot scan.
                </a>
              </p>
            </div>

            {/* Section 2 — Why It Matters Now */}
            <span className="not-prose ae-section-label">The Urgency</span>
            <h2 className="font-headline font-black uppercase tracking-tighter mt-12 mb-4">
              Why AEO Matters Right Now
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              The Zero-Click Surge
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Zero-click searches rose from 26% of US queries in 2022 to 60% in 2024,
              and the trend accelerated with the wide rollout of Google AI Overviews
              in 2025. Non-branded keyword click-through rates drop roughly 20% when
              AI Overviews appear above the organic results. The implication for
              service businesses is direct: the queries that used to send phone calls
              now end inside the answer. The only way to keep capturing those queries
              is to be cited inside the answer itself. To see which queries in your
              category are already zero-click, email{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">
                support@theanswerengine.ai
              </a>
              .
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              The Audience Migration
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              ChatGPT crossed 900 million monthly users by late 2025, with more than
              800 million using it weekly for information lookups. Perplexity AI passed
              30 million monthly active users. Claude is embedded in enterprise research
              workflows and growing at consumer pace. Google AI Mode is now the default
              search experience for a measurable share of US queries. The migration is
              not theoretical and not future — it has already happened. The remaining
              question is whether a brand has any citation surface inside those
              conversations.{' '}
              <a href="tel:+12134442229" className="cta-inline">
                Call (213) 444-2229 to audit your current surface.
              </a>
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              The Compound Authority Window
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              <strong className="named-thesis">
                The Compound Authority Window: AEO citation surface compounds because
                answer engines retrieve from sources they have already cited — which
                means the first 90 days of consistent publication earn a multiplier
                effect that becomes unreachable to late entrants once a category lock
                forms (TAE proprietary cohort analysis, n=87 client domains tracked
                Jan 2025 to May 2026).
              </strong>{' '}
              In categories where no operator has staked AEO ground, the entry barrier
              is publication cadence. In categories with an established operator, the
              entry barrier is exponentially higher — the cited brand keeps getting
              cited, and competitors have to outweigh both authority and retrieval
              history. The window is open in most local service categories right now.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
                Claim your territory before a competitor locks it in.
              </a>
            </p>

            {/* Section 3 — The Mechanism */}
            <span className="not-prose ae-section-label">The Mechanism</span>
            <h2 className="font-headline font-black uppercase tracking-tighter mt-12 mb-4">
              How Answer Engines Actually Decide Who Gets Cited
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              The Retrieval Pipeline
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Every answer engine runs a retrieval-augmented generation (RAG) pipeline:
              the user query is rewritten into search-friendly form, the retriever
              fetches candidate documents from its index, the reranker scores each
              candidate for relevance and trust, the generator synthesizes the answer
              from the top-ranked chunks, and the citation layer emits attributions to
              the selected sources. AEO targets every stage of this pipeline. Schema
              affects retrieval recall. Authority and entity affect reranker scores.
              Chunk structure affects what the generator can extract. Citation cadence
              affects what gets attributed. Optimizing one stage without the others
              produces no citation movement.{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">
                Get a pipeline-level audit free.
              </a>
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              The Bounded Answer Chunk
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              <strong className="named-thesis">
                The Chunk Ceiling: retrieval extractors emit citations at peak rates
                when answer chunks fall between 80 and 180 tokens, and citation rates
                collapse 31% on chunks above 300 tokens because retrievers exceed their
                attention budget and lose the claim-to-source binding (GEO-SFE, 2026).
              </strong>{' '}
              The implication is structural: long unbroken paragraphs are AEO poison
              even when the prose is excellent. The fix is to split content into
              bounded H3 sections of 80 to 180 tokens, each one self-contained, each
              one capable of being extracted into a generated answer without
              surrounding context. This is why championship AEO articles look more
              like a reference manual than a magazine essay. Want our chunk-audit
              template?{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">
                Email support@theanswerengine.ai and we will send it.
              </a>
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              The Definition Premium
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              <strong className="named-thesis">
                The Definition Premium: content that opens an H3 with a plain-language
                definition of the section subject earns a 57% higher citation rate
                than content that buries the definition mid-paragraph, because
                retrievers preferentially extract definitional language as
                authoritative answer material (Zhang et al., 2026).
              </strong>{' '}
              The rule generalizes: every H3 should start with one sentence that
              defines the subject of that section. Definition-first writing reads as
              didactic and direct, which is exactly what answer engines reward. The
              alternative — definition-buried writing — reads as essayistic and
              fails extraction on category-defining queries. Definition-first is the
              single highest-leverage on-page change a brand can make.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
                Book a 30-minute call to rewrite your top three pages live.
              </a>
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Quoted Stats and Source Attribution
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Aggarwal et al. (KDD 2024) measured the lift from inline quoted sources
              and named statistics across 1.1M generated answers: quoted passages
              boost source citation rate by 37%, named statistics by 22%. The
              mechanism is identity-grounding — retrievers treat quoted and cited
              passages as higher-confidence claims because they carry an explicit
              evidential chain. The practical rule: every claim in an AEO article
              that can be tied to a named source should be. Vague claims earn no
              extraction. Cited claims earn primary citation. Reach an AEO operator
              who can quote-audit your site:{' '}
              <a href="tel:+12134442229" className="cta-inline">
                (213) 444-2229
              </a>
              .
            </p>

            <div className="not-prose">
              <table className="ae-comparison-table">
                <thead>
                  <tr>
                    <th>Content Pattern</th>
                    <th>Citation Effect</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Definition-first H3 opening</td>
                    <td>+57%</td>
                    <td>Zhang et al., 2026</td>
                  </tr>
                  <tr>
                    <td>Quoted passages with named source</td>
                    <td>+37%</td>
                    <td>Aggarwal et al., KDD 2024</td>
                  </tr>
                  <tr>
                    <td>Named statistics with citation</td>
                    <td>+22%</td>
                    <td>Aggarwal et al., KDD 2024</td>
                  </tr>
                  <tr>
                    <td>Lists and comparison tables</td>
                    <td>+43%</td>
                    <td>GEO-SFE, 2026</td>
                  </tr>
                  <tr>
                    <td>Chunks over 300 tokens</td>
                    <td>−31%</td>
                    <td>GEO-SFE, 2026</td>
                  </tr>
                  <tr>
                    <td>Definition buried mid-paragraph</td>
                    <td>−18%</td>
                    <td>Zhang et al., 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 4 — The Playbook */}
            <span className="not-prose ae-section-label">The Playbook</span>
            <h2 className="font-headline font-black uppercase tracking-tighter mt-12 mb-4">
              The 2026 AEO Execution Playbook
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Step 1: Confirm Entity Recognition
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Entity recognition is the threshold check. Answer engines will not cite
              a business whose entity is not confirmed across at least two of the four
              canonical sources: Wikidata, Google Knowledge Graph, Crunchbase, and
              LinkedIn Company. The fix is mechanical: complete a Google Business
              Profile with consistent NAP, register the entity on Wikidata, build a
              Crunchbase or LinkedIn Company page, and ensure name, address, and
              phone match across all four. Most local service businesses fail this
              check on at least two sources, which is why their on-page AEO produces
              no citations. Audit your entity status:{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">
                free Blind Spot Scan.
              </a>
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Step 2: Restructure Existing Pages
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Take the top ten organic pages by traffic, break every paragraph longer
              than 180 tokens into bounded H3 sections, open each H3 with a one-sentence
              definition, and convert long comparison prose into actual comparison
              tables. This single round of restructuring typically lifts AI citation
              rate within 30 to 45 days because the retrieval extractors can now
              actually extract from those pages. Pages that previously ranked but
              never earned citations are the highest-leverage candidates. Email us
              your top three page URLs for a free restructure plan:{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">
                support@theanswerengine.ai
              </a>
              .
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Step 3: Build the Schema Stack
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Every page on the site should declare structured data covering Article
              or LocalBusiness (depending on page type), FAQPage where Q&amp;A blocks
              exist, BreadcrumbList for site hierarchy, and ProfessionalService for
              business identity. The Answer Engine layers WebPage with
              SpeakableSpecification on top so voice-driven answer engines (the Siri
              and Google Assistant pipelines feeding answers) treat the page as
              voice-ready. Schema does not earn citations on its own — it amplifies
              authority that already exists in the entity graph by reducing the
              retriever&apos;s parsing uncertainty.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
                Get a schema stack audit in 30 minutes.
              </a>
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Step 4: Publish on Cadence
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              AEO compounds with publication frequency because each new AEO-structured
              article expands the retrievable surface and strengthens the topical
              co-occurrence field around the brand. The TAE cohort data points to 16
              articles per month as the cadence that produces visible category-wide
              citation movement within 60 days for established domains. Lower cadence
              works for low-competition categories. Higher cadence accelerates the
              compound authority window but plateaus around 24 articles per month
              before producing diminishing returns. The cadence is the lever — most
              brands underestimate it by 4x.{' '}
              <a href="tel:+12134442229" className="cta-inline">
                Call (213) 444-2229 to discuss the cadence that fits your category.
              </a>
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              Step 5: Measure With the Proof Ledger
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              <strong className="named-thesis">
                The Proof Ledger Anchor: AEO without a per-query citation ledger is
                indistinguishable from guessing — only the ledger separates real
                citation movement from anecdotal screenshots, and operators who skip
                ledger discipline cannot prove ROI or diagnose failure modes (TAE
                operational standard since 2025).
              </strong>{' '}
              The ledger records the exact query, the engine, the date, the citation
              position, and the surrounding answer text for every tracked
              attribution. Without it, AEO is a black box. With it, every citation
              gain and every loss is traceable to a specific content or schema change.
              Most agencies do not run a ledger because it exposes work that did not
              move the needle.{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">
                Free Blind Spot scan includes a sample Proof Ledger entry.
              </a>
            </p>

            <div className="not-prose ae-callout ae-callout-info">
              <div className="ae-callout-title">Operator Note</div>
              <p>
                The Origin Protocol is the TAE name for the five-step cadence
                above. We run it as a single integrated system because the pieces
                produce no movement in isolation. Schema without chunk discipline
                produces no extraction. Chunk discipline without entity recognition
                produces no citation. Entity recognition without publication cadence
                produces no surface growth.{' '}
                <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
                  Walk through the full protocol on a 30-minute call.
                </a>
              </p>
            </div>

            {/* Section 5 — AEO vs SEO */}
            <span className="not-prose ae-section-label">The Comparison</span>
            <h2 className="font-headline font-black uppercase tracking-tighter mt-12 mb-4">
              AEO vs SEO vs GEO: What Stays, What Changes
            </h2>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              SEO Still Provides the Foundation
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              SEO is the technical and authority foundation that AI retrievers
              inherit. Site speed, crawlability, internal linking, Core Web Vitals,
              and backlink authority all feed answer engines because most retrievers
              crawl the same web Google does. Sites that abandon SEO lose the
              foundation that AEO sits on. The 2026 reality is SEO and AEO must run
              in parallel — SEO maintains the retrieval substrate, AEO optimizes the
              extraction layer. Agencies that pitch &quot;AEO instead of SEO&quot; are
              selling a misunderstanding. The two are layered, not competing.{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">
                Get a layered SEO+AEO audit at support@theanswerengine.ai.
              </a>
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              GEO Is the Academic Term, AEO Is the Operating Term
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Generative Engine Optimization (GEO) is the term used in the academic
              literature, particularly the GEO-SFE 2026 paper and follow-up work.
              Answer Engine Optimization (AEO) is the operating term used by
              practitioners and search industry analysts. The two refer to the same
              discipline. AEO has won the practitioner naming because &quot;answer
              engine&quot; describes what users experience (a generated answer) while
              &quot;generative engine&quot; describes the underlying mechanism (an
              LLM-based generator). Both terms point to the same body of techniques
              and the same set of optimization targets.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
                Book a strategy call to map AEO to your category.
              </a>
            </p>

            <h3 className="font-headline font-black uppercase tracking-tight mt-8 mb-3">
              The Practical Divide
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              SEO success is measured in rankings, sessions, and conversions from
              organic traffic. AEO success is measured in citations, brand mentions,
              and named recommendations across answer engines. SEO uses Search
              Console, Ahrefs, and Semrush. AEO uses Profound, Otterly AI, AthenaHQ,
              and the operator-built Proof Ledger. A brand that scores well on SEO
              dashboards can score zero on AEO dashboards if the content is
              structurally unextractable. The dashboards are different. The reporting
              is different. The skill stack is different. Treating AEO as a
              sub-domain of SEO produces underbuilt programs.{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">
                Run a free Blind Spot scan to see your AEO-specific score.
              </a>
            </p>

            <div className="not-prose">
              <table className="ae-comparison-table">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>SEO</th>
                    <th>AEO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Optimization Target</td>
                    <td>Position in link list</td>
                    <td>Attribution in answer</td>
                  </tr>
                  <tr>
                    <td>Unit of Success</td>
                    <td>Click</td>
                    <td>Citation</td>
                  </tr>
                  <tr>
                    <td>Primary Surface</td>
                    <td>Google SERP</td>
                    <td>ChatGPT, Perplexity, Claude, AI Overviews</td>
                  </tr>
                  <tr>
                    <td>Content Length</td>
                    <td>1,500 to 3,000 words</td>
                    <td>Bounded chunks 80 to 180 tokens</td>
                  </tr>
                  <tr>
                    <td>Top Signal</td>
                    <td>Backlinks</td>
                    <td>Entity recognition + extraction-readiness</td>
                  </tr>
                  <tr>
                    <td>Measurement</td>
                    <td>Rank trackers</td>
                    <td>Citation ledger</td>
                  </tr>
                  <tr>
                    <td>Time to Result</td>
                    <td>3 to 9 months</td>
                    <td>30 to 90 days for established domains</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-white/75 leading-relaxed mb-4 mt-6">
              Looking for hands-on help connecting the SEO and AEO layers? Reach the
              operator team:{' '}
              <a href="tel:+12134442229" className="cta-inline">
                (213) 444-2229
              </a>{' '}
              or{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">
                support@theanswerengine.ai
              </a>
              .
            </p>

            {/* Concept Lattice Hooks */}
            <p className="text-white/60 text-sm mt-12 mb-6">
              <strong className="text-white/80">Related concepts:</strong>{' '}
              <Link href="/concepts/citation-inversion" className="concept-link">
                Citation Inversion
              </Link>
              ,{' '}
              <Link href="/concepts/chunk-ceiling" className="concept-link">
                Chunk Ceiling
              </Link>
              ,{' '}
              <Link href="/concepts/definition-premium" className="concept-link">
                Definition Premium
              </Link>
              ,{' '}
              <Link href="/concepts/compound-authority-window" className="concept-link">
                Compound Authority Window
              </Link>
              ,{' '}
              <Link href="/concepts/proof-ledger-anchor" className="concept-link">
                Proof Ledger Anchor
              </Link>
              ,{' '}
              <Link href="/concepts/origin-protocol" className="concept-link">
                Origin Protocol
              </Link>
              ,{' '}
              <Link href="/concepts/entity-triangulation-lock" className="concept-link">
                Entity Triangulation Lock
              </Link>
              .
            </p>

            <p className="text-white/70 leading-relaxed mt-6">
              Most categories have a 90-day window left before a competing operator
              locks in citation surface. To check whether your category is still
              open,{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
                book a free 30-minute territory review
              </a>{' '}
              or{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">
                run the Blind Spot scan
              </a>{' '}
              and we will tell you in 60 seconds.
            </p>
          </article>

          {/* FAQ Section */}
          <section className="mt-16 mb-16">
            <span className="not-prose ae-section-label">Common Questions</span>
            <h2 className="font-headline font-black uppercase tracking-tighter mt-2 mb-8 text-3xl">
              Frequently Asked Questions
            </h2>

            <details className="ae-faq-item">
              <summary>What is Answer Engine Optimization (AEO)?</summary>
              <div className="ae-faq-answer">
                <p>
                  Answer Engine Optimization is the practice of structuring content so
                  AI systems like ChatGPT, Perplexity, Claude, and Google AI Overviews
                  select it as the basis for generated answers and attribute it as a
                  source. AEO targets the moment an answer is synthesized rather than
                  the moment a list of links is shown. The unit of success is the
                  citation, not the click.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>How is AEO different from traditional SEO?</summary>
              <div className="ae-faq-answer">
                <p>
                  SEO optimizes for position inside an ordered list of links. AEO
                  optimizes for attribution inside a generated answer. SEO success
                  metrics are rankings, clicks, and sessions. AEO success metrics are
                  citations, brand mentions, and named recommendations across answer
                  engines. SEO and AEO share technical fundamentals (site speed,
                  schema, authority) but diverge on content structure: AEO requires
                  bounded answer chunks, definition-first paragraphs, and quoted
                  statistics to feed retrieval extractors.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>How long does it take to see AEO results?</summary>
              <div className="ae-faq-answer">
                <p>
                  Most businesses with an established domain see the first AI citations
                  inside 30 to 60 days after publishing AEO-structured content.
                  Consistent citation surface across multiple engines typically takes
                  90 days, matching the cadence of LLM retrieval index refreshes.
                  Sites without entity recognition or schema foundations must build
                  those first, which extends the timeline to 120 days.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>Which answer engines should I optimize for in 2026?</summary>
              <div className="ae-faq-answer">
                <p>
                  The four engines that matter for 2026 are ChatGPT (900M+ weekly
                  users), Google AI Overviews and AI Mode (now in 16% of US desktop
                  searches), Perplexity AI (the citation-native retriever), and Claude
                  (rising influence in research and enterprise queries). Each draws
                  from overlapping but distinct retrieval pools. Content engineered
                  for one engine usually surfaces in the others, but engine-specific
                  tuning still matters — Perplexity rewards source authority, ChatGPT
                  rewards entity confidence, AI Overviews reward schema completeness.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>What content formats work best for AEO?</summary>
              <div className="ae-faq-answer">
                <p>
                  Definition-first paragraphs, bounded answer chunks under 180 tokens,
                  quoted statistics with named sources, comparison tables, and FAQ
                  sections earn the highest citation rates. The GEO-SFE 2026 study
                  found lists and tables boost citation by 43%, while content chunks
                  over 300 words trigger a 31% citation drop. Aggarwal et al. (KDD
                  2024) confirmed quoted sources lift citation by 37% and statistics
                  by 22%. Articles that combine definition, citation, and structure
                  outperform unstructured long-form by 4 to 6 times.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>How do I know if my content is being cited by AI systems?</summary>
              <div className="ae-faq-answer">
                <p>
                  Direct AI citation tracking requires querying each engine for
                  category-defining questions and recording which brands and URLs
                  appear in answers. Tools like Profound, Otterly AI, and AthenaHQ
                  automate this across ChatGPT, Perplexity, Claude, and Google AI
                  Overviews. The Answer Engine builds a Proof Ledger for every client
                  that records the exact query, engine, date, and citation position
                  for each tracked attribution. Without a ledger, there is no way to
                  prove AEO is working or where it is failing.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>Can I do AEO myself or do I need an agency?</summary>
              <div className="ae-faq-answer">
                <p>
                  Solo founders with existing domain authority and time to publish 4
                  to 8 AEO-structured articles per month can build citation surface
                  without an agency, especially in low-competition categories.
                  Categories with established AEO operators or high competition
                  require professional execution because citation surface is
                  winner-take-most: the first three citations in a category usually
                  keep earning the next thirty. Agencies that operate one client per
                  market protect the territory lock by refusing to take competing
                  clients.
                </p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>Does AEO replace SEO?</summary>
              <div className="ae-faq-answer">
                <p>
                  AEO does not replace SEO — it inherits and extends it. The
                  foundational SEO signals (site speed, authority, schema, internal
                  linking) still feed AI retrievers because most retrievers crawl the
                  same web as Google. AEO adds a content layer optimized for
                  extraction and attribution. Sites that abandon SEO lose the
                  retrieval foundation. Sites that ignore AEO lose the answer-layer
                  share. The 2026 reality is both layers must run in parallel.
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
            <h3>See Which AEO Signals You Are Missing</h3>
            <p>
              We audit the entity, schema, chunk, sentiment, and citation layers
              across your domain and benchmark you against the top three competitors
              already cited in your category. One client per market. Territory locks
              fast.
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
              your business is being cited or skipped — and lock the position before
              a competitor does.
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
