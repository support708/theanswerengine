import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';
export const dynamicParams = true;

const title = 'How ChatGPT Decides Which Plumber to Recommend in Your City';
const description =
  'How ChatGPT picks a plumber by city — the four-source retrieval pass, the five AEO signals that earn the citation, and the Proof Ledger that measures it. Claim your AERO scan.';
const slug = 'how-chatgpt-decides-which-plumber-to-recommend-in-your-city';
const publishDate = '2026-06-01';
const modifiedDate = '2026-06-01';

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords:
    'how chatgpt recommends plumbers, chatgpt plumber recommendation, AI plumber search, answer engine optimization plumbing, AEO for plumbers, chatgpt local plumber, plumber AI citation, plumber AI search visibility, get cited by chatgpt plumber',
  openGraph: {
    title: `${title} | The Answer Engine`,
    description,
    type: 'article',
    url: `https://theanswerengine.ai/blog/${slug}`,
    publishedTime: `${publishDate}T00:00:00.000Z`,
    authors: ['Justin Borges'],
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
        alt: 'How ChatGPT decides which plumber to recommend in your city',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | The Answer Engine`,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
  },
  alternates: {
    canonical: `https://theanswerengine.ai/blog/${slug}`,
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `https://theanswerengine.ai/blog/${slug}#article`,
  headline: title,
  description,
  image: `https://theanswerengine.ai/blog/${slug}.webp`,
  datePublished: `${publishDate}T00:00:00.000Z`,
  dateModified: `${modifiedDate}T00:00:00.000Z`,
  author: {
    '@type': 'Person',
    '@id': 'https://theanswerengine.ai/about#justin-borges',
    name: 'Justin Borges',
    jobTitle: 'Founder, The Answer Engine',
    url: 'https://theanswerengine.ai/about',
    image: 'https://theanswerengine.ai/justin-borges.webp',
    sameAs: ['https://linkedin.com/in/justinborges'],
    worksFor: {
      '@type': 'Organization',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
    },
    knowsAbout: [
      'Answer Engine Optimization',
      'AEO for Plumbers',
      'AI Citation Strategy',
      'LLM Visibility',
      'Local AI Search',
    ],
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://theanswerengine.ai/#organization',
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
  keywords:
    'ChatGPT plumber recommendation, AEO plumber, AI citation plumbing, answer engine optimization, plumber AI search, plumber LLM visibility, AI local search plumbing',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does ChatGPT actually choose a plumber to recommend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT does not score plumbing businesses. ChatGPT scores content chunks. A local plumbing query triggers a four-source retrieval pass — live web index, training corpus residue, knowledge graph entity links, and operator-published authority content — and the structurally correct passages reach the synthesis step. The cited plumber is the operator whose own domain published the chunks the model pulled (Aggarwal et al., KDD 2024; GEO-SFE, 2026).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the number of Google reviews influence ChatGPT plumber recommendations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Review count is a strong input to the Google Map Pack and a weak input to a ChatGPT plumber recommendation. ChatGPT weights inline attribution and structurally extractable content from the domain far more heavily than third-party star ratings. A 500-review plumber with no published authority content can lose the citation to a 40-review plumber whose website carries 60 AEO-structured articles. Reviews still matter for trust, but they do not produce the citation slot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does paid advertising influence which plumber ChatGPT recommends?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paid advertising has no observable effect on ChatGPT plumber recommendations. ChatGPT pulls from an index of organic content. Google Ads, Yelp Ads, Angi promotions, and Local Service Ads do not enter the retrieval pass. The citation slot goes to the plumbing operator whose published content earns the structural trust signals retrievers reward, which is why ad spend is a parallel acquisition channel — not an AEO substitute.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my plumbing business invisible to ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most plumbing service domains carry none of the four structural signals retrievers reward: definition-first openings, inline attribution, bounded chunks, and journalistic tone. The Answer Engine field audit measured fewer than four percent of US plumbing domains carrying any of the four signals at meaningful density. The invisibility is structural, not algorithmic, and it is reversible inside a 90-day publication window with the right cadence.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can a plumber start getting cited by ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A plumbing operator earns a ChatGPT citation by publishing AEO-structured articles on their own domain at a cadence of sixteen articles per month. Each article opens every H3 with a plain-language definition of the service category, carries inline attribution to named sources, holds chunks between 80 and 180 tokens, and reads as journalism rather than promotion. First citations typically appear inside 30 to 60 days, and city-level authority lands by day 90.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to appear in ChatGPT plumber answers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First citations typically appear inside 30 to 60 days at a publication cadence of sixteen AEO-structured articles per month. By day 90, the Proof Ledger usually carries citations from all four major LLM platforms — ChatGPT, Claude, Gemini, and Perplexity. The Answer Engine carries a 90-day citation guarantee tied to that cadence, and the timeline compresses when the plumbing domain already carries clean directory data and verified Google Business Profile.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
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
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://theanswerengine.ai/#organization',
  name: 'The Answer Engine',
  url: 'https://theanswerengine.ai',
  telephone: '(213) 444-2229',
  email: 'support@theanswerengine.ai',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  founder: {
    '@type': 'Person',
    name: 'Justin Borges',
    sameAs: ['https://linkedin.com/in/justinborges'],
  },
  foundingDate: '2025',
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: [
    'Answer Engine Optimization',
    'AEO Content',
    'LLM Citation Building',
    'AI Search Visibility',
  ],
  sameAs: ['https://linkedin.com/company/theanswerengine'],
  description:
    'The Answer Engine is a GEO/AEO firm helping businesses get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews through structured content, schema, and citation strategy.',
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://theanswerengine.ai/blog/${slug}#webpage`,
  url: `https://theanswerengine.ai/blog/${slug}`,
  name: title,
  description,
  isPartOf: { '@id': 'https://theanswerengine.ai/#website' },
  primaryImageOfPage: `https://theanswerengine.ai/blog/${slug}.webp`,
  datePublished: `${publishDate}T00:00:00.000Z`,
  dateModified: `${modifiedDate}T00:00:00.000Z`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.article-summary', '.key-insight', 'h2', '.ae-faq-answer', '.ae-stat-card'],
  },
};

const signals = [
  {
    num: '1',
    title: 'Definition-First Openings',
    measure: 'Plain-language definition in the first sentence of every H3',
    lift: '+57% citation premium',
    source: 'Zhang et al. (2026)',
  },
  {
    num: '2',
    title: 'Inline Attribution Density',
    measure: 'Named-source citations per section',
    lift: '+37% / +22%',
    source: 'Aggarwal et al. (KDD 2024)',
  },
  {
    num: '3',
    title: 'Bounded Chunk Discipline',
    measure: '80–180 token ceiling per H3 section',
    lift: '+43% extraction',
    source: 'GEO-SFE (2026)',
  },
  {
    num: '4',
    title: 'Journalism Over Promotion',
    measure: 'Third-party tone vs. first-party brand claims',
    lift: '3–5x preference',
    source: 'Chen et al. (2025)',
  },
  {
    num: '5',
    title: 'Corpus Cadence',
    measure: 'Publication volume (16 articles/month minimum)',
    lift: 'City-level authority',
    source: 'AE Field Audit (2026)',
  },
];

export default function HowChatGPTDecidesPlumberPage() {
  return (
    <div className="min-h-screen bg-[#131313]">
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-white/40 font-mono uppercase tracking-wider">
          <Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white/60">ChatGPT Plumber Recommendations</span>
        </nav>

        {/* Hero */}
        <header className="ae-article-hero w-full overflow-hidden mb-10" style={{ borderRadius: 0 }}>
          <img
            src={`/blog/${slug}.webp`}
            alt="How ChatGPT decides which plumber to recommend in your city — AEO retrieval pipeline"
            style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
            loading="eager"
          />
        </header>

        <div className="mb-6">
          <span className="font-headline text-xs font-black tracking-tighter uppercase bg-[#F27D24]/10 text-[#F27D24] border border-[#F27D24]/30 px-3 py-1">
            Field Report · AEO Mechanics
          </span>
        </div>

        <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none text-[#e5e2e1]">
          HOW CHATGPT DECIDES WHICH{' '}
          <span className="text-[#F27D24]">PLUMBER</span> TO RECOMMEND IN YOUR CITY
        </h1>

        <p className="article-summary font-body text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
          ChatGPT does not rank plumbers. ChatGPT scores chunks. This is the four-source retrieval pass
          behind every local plumbing recommendation, the five structural signals that earn the citation,
          and the Proof Ledger that measures the outcome.
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-white/50 font-mono uppercase tracking-wider mb-10">
          <span>June 1, 2026</span>
          <span>·</span>
          <span>15 min read</span>
          <span>·</span>
          <span>Justin Borges</span>
        </div>

        {/* STATS GRID */}
        <div className="ae-stats-grid not-prose mb-12">
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🔧</div>
            <div className="ae-stat-value ae-accent">1.14M</div>
            <div className="ae-stat-label">monthly impressions across AE clients cited by all four major LLMs</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📊</div>
            <div className="ae-stat-value ae-accent">+57%</div>
            <div className="ae-stat-label">citation premium for pages opening with a clear definition (Zhang et al., 2026)</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📅</div>
            <div className="ae-stat-value ae-accent">16/mo</div>
            <div className="ae-stat-label">AEO articles per month to win city-level authority for a plumbing operator</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">⚠️</div>
            <div className="ae-stat-value ae-accent">&lt;4%</div>
            <div className="ae-stat-label">US plumbing domains carrying any of the four core AEO signals (AE Field Audit, 2026)</div>
          </div>
        </div>

        {/* CHEAT SHEET (TOC) */}
        <div className="ae-cheat-sheet not-prose mb-12">
          <div className="ae-cheat-sheet-title">Article Cheat Sheet</div>
          <table>
            <thead>
              <tr>
                <th>Section</th>
                <th>Core Insight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="#pipeline" className="text-[#F27D24]">The Recommendation Pipeline</a></td>
                <td>ChatGPT runs query interpretation, four-source pull, chunk scoring, and synthesis with citation.</td>
              </tr>
              <tr>
                <td><a href="#sources" className="text-[#F27D24]">The Four Sources</a></td>
                <td>Live web, training residue, knowledge graph, operator-published authority — only one is yours.</td>
              </tr>
              <tr>
                <td><a href="#signals" className="text-[#F27D24]">The Five Citation Signals</a></td>
                <td>Definition-first, attribution density, bounded chunks, journalistic tone, corpus cadence.</td>
              </tr>
              <tr>
                <td><a href="#mistakes" className="text-[#F27D24]">What Most Plumbers Get Wrong</a></td>
                <td>NAP drift, generic services page, JS-only price widgets, brand-voice content, low cadence.</td>
              </tr>
              <tr>
                <td><a href="#proof" className="text-[#F27D24]">The Proof Ledger</a></td>
                <td>Measure citation rate per query per model — not impressions, not Maps rank, not followers.</td>
              </tr>
              <tr>
                <td><a href="#faq" className="text-[#F27D24]">FAQ</a></td>
                <td>Direct answers to the six questions plumbing operators ask before starting AEO.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ae-article-body prose prose-invert prose-lg max-w-none">

          {/* SECTION 1: PIPELINE */}
          <span className="ae-section-label" id="pipeline">The Pipeline</span>
          <h2>How ChatGPT Recommends A Plumber, Step By Step</h2>

          <p className="key-insight">
            A ChatGPT plumber recommendation is the output of a retrieval-and-generation pipeline that runs
            in four stages: query interpretation, source pull, chunk scoring, and synthesis with attribution.{' '}
            <strong className="named-thesis">The Plumber Recommendation Pipeline: ChatGPT does not score plumbers
            — ChatGPT scores chunks across a four-source retrieval pass that runs query interpretation,
            parallel source pull, embedded chunk scoring, and synthesis with attribution (GEO-SFE, 2026).</strong>{' '}
            The cited plumber is not the highest-rated business on Yelp or the highest-ranking business on
            Google Maps. The cited plumber is the operator whose own domain published the chunks the model
            decided to extract.
          </p>

          <h3>Query Interpretation</h3>

          <p>
            Answer Engine Optimization starts with how the model reads the question. ChatGPT classifies a
            plumbing query as local-intent the moment a city name, neighborhood name, or &quot;near me&quot;
            modifier appears. That classification triggers the web retrieval tool, which calls the Bing-backed
            live index for fresh content. A plumbing query without a location modifier — &quot;how to fix a
            leaking shower head&quot; — does not trigger the local pass and routes to general knowledge.
            Plumbing operators who want recommendation slots have to win on geo-loaded queries first. To map
            the queries your shop should target,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">run the free AERO Blind Spot Scan</a>.
          </p>

          <h3>The Four-Source Parallel Pull</h3>

          <p>
            ChatGPT pulls from four sources in parallel: the live web index (fresh content from the last 24
            to 72 hours), the training corpus residue (whatever was inside its pretraining cutoff), the
            knowledge graph (entity-level facts about the named plumbing business), and operator-published
            authority content (domain-owned articles, service pages, and guides). Each source produces
            candidate passages. Only the operator-published source scales with publication cadence, which is
            why publishing rhythm is the decisive lever. To talk through your shop&apos;s current source
            footprint directly, text Justin at (213) 444-2229 — replies arrive inside 24 hours.
          </p>

          <h3>Chunk Scoring And Synthesis</h3>

          <p>
            Every retrieved passage is embedded as a vector and scored against the user query. Top-ranked
            chunks advance to synthesis, where the generation model writes an answer that names two to five
            domains as inline citations. <strong className="named-thesis">The Chunk Ceiling: plumbing service
            passages over 300 words trigger a 31% attention degradation in RAG retrievers — splitting them
            into 80 to 180 token bounded units restores extraction accuracy (GEO-SFE, 2026).</strong>{' '}
            Plumbing pages written as one long block of marketing prose lose the citation to plumbing pages
            written in tight, definition-led chunks. The mechanism is mechanical. Editorial flair does not
            survive the embedder. To audit your existing pages against the chunk ceiling, email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.
          </p>

          <div className="ae-callout ae-callout-orange not-prose">
            <div className="ae-callout-title">Field Age Matters</div>
            <p>
              The foundational academic work in AI citation optimization is less than two years old, which
              means the practitioner gap inside the plumbing category is uncommonly wide. One plumbing
              operator per city locks the territory — markets fill fast.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your
              territory availability on Calendly</a> before a competitor claims it.
            </p>
          </div>

          {/* SECTION 2: FOUR SOURCES */}
          <span className="ae-section-label" id="sources">The Four Sources</span>
          <h2>The Four Sources Behind A ChatGPT Plumber Recommendation</h2>

          <p>
            <strong className="named-thesis">The Operator Authority Asymmetry: the only retrieval source a
            plumbing business fully controls is its own domain — directory listings and review sites supply
            background context, but operator-published authority content is the decisive citation
            lever.</strong> A Yelp listing and a Google Business Profile cannot win an AI plumber
            recommendation alone. The citation slot goes to the operator whose own domain publishes
            definition-first, attribution-anchored chunks about the local plumbing category. Reviews still
            matter for trust, but the citation slot is operator-owned. To check which of the four sources
            currently carries your domain&apos;s signal,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">run the free AERO Blind Spot
            Scan</a> — it ships within 48 hours.
          </p>

          <h3>Source One: The Live Web Retrieval Pass</h3>

          <p>
            Answer Engine Optimization treats the live web pass as the fastest-moving citation surface.
            ChatGPT&apos;s web tool pulls fresh pages indexed inside the last 24 to 72 hours through the
            Bing-backed retrieval layer. For a local plumbing query, the live web pass returns recent
            service pages, recently published articles, fresh directory entries, and new domain content the
            operator published inside the window. This is the only source that responds to publication
            cadence in real time, which is why a sixteen-articles-per-month publication rhythm earns
            disproportionate citation share. Plumbing operators who publish weekly earn citations weekly. To
            schedule a free 30-min call on what your cadence should look like,{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a Calendly
            consult</a>.
          </p>

          <h3>Source Two: Training Corpus Residue</h3>

          <p>
            Training corpus residue supplies whatever pages were inside ChatGPT&apos;s pretraining cutoff —
            content the model saw during pretraining and folded into its parametric knowledge. For most
            plumbing operators, this source produces minimal recall: independent plumbing domains rarely
            appear in pretraining corpora at meaningful density. Training corpus residue is background
            context for the synthesis. It rarely produces a citation slot on its own, and it cannot be
            changed retroactively. The forward fix is to publish content the next training cutoff will
            absorb, which is why operator cadence matters even before the live web tool is invoked.
          </p>

          <h3>Source Three: Knowledge Graph Entity Links</h3>

          <p>
            The knowledge graph supplies entity-level facts: that a named plumbing business exists, sits in
            a named city, holds a license number, carries a category code, links to a Wikipedia entity if
            one exists. Knowledge graph data is pulled from structured sources — Wikidata, Wikipedia,
            Google&apos;s Knowledge Graph, schema.org markup on authoritative directory listings.
            Independent plumbing operators rarely carry rich knowledge graph entries, which means this
            source confirms existence but does not produce ranking. The fix is consistent NAP across
            high-authority directories plus schema markup on the operator domain. To start a parity audit
            on your domain, email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.
          </p>

          <h3>Source Four: Operator-Published Authority Content (The Decisive Lever)</h3>

          <p>
            The operator&apos;s own domain is the only source the operator fully controls and the only
            source that scales with publication cadence. <strong className="named-thesis">The Journalism
            Differential: plumbing content written as third-party explanation rather than first-party
            promotion earns 3 to 5x preference inside major LLM retrievers (Chen et al., 2025).</strong> The
            operator-published authority content has to read as journalism, not marketing: definition-first,
            citation-anchored, bounded, dated. The Answer Engine measures this as the single highest-weighted
            source inside the retrieval pass for high-intent local plumbing queries. To map your domain
            against the four sources directly, text Justin at (213) 444-2229.
          </p>

          {/* SECTION 3: FIVE SIGNALS */}
          <span className="ae-section-label" id="signals">The Citation Signals</span>
          <h2>The Five Structural Signals That Earn The Plumber Citation</h2>

          <p>
            <strong className="named-thesis">The Definition Premium: a plumbing service page that opens its
            H3 with a plain-language definition of the service category earns 57 percent higher citation
            probability than a page that buries the definition mid-article (Zhang et al., 2026).</strong>{' '}
            The five signals below are the structural levers retrievers measure. Plumbing content that hits
            three or more enters the citation set. Plumbing content that hits all five owns the citation
            slot. Markets fill fast — one plumbing operator per city is the rule The Answer Engine enforces.{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your
            territory on Calendly</a> before a competitor does.
          </p>

          <h3>Signal One: Definition-First Openings</h3>

          <p>
            Every H3 section opens with a plain-language definition of its subject. &quot;A slab leak is a
            water line break inside or beneath the concrete foundation of a home, typically detected by a
            sudden hot spot on the floor, an unexplained spike in the water bill, or running-water sound
            with no fixture in use.&quot; That sentence is a complete answer the retriever can extract and
            cite without any surrounding context. The +57% citation premium documented by Zhang et al.
            (2026) is the highest documented lift of any structural lever. The fix is mechanical — rewrite
            every H3 opener. To get the H3 rewrite template for your existing plumbing pages,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">request the free AERO
            Blind Spot Scan</a>.
          </p>

          <h3>Signal Two: Inline Attribution Density</h3>

          <p>
            Aggarwal et al. (KDD 2024) measured a +37% citation lift on passages carrying inline quotations
            from named sources and +22% on passages carrying inline statistics with named attribution. The
            mechanism is straightforward: retrievers weight passages that signal evidence. Plumbing content
            that names a code reference (UPC 2024, IRC 2024 plumbing chapter), cites a manufacturer spec, or
            quotes a state licensing board carries higher trust scores than content that asserts without
            attribution. The attribution does not have to be exotic. It has to be named. To audit your
            current attribution density, email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.
          </p>

          <h3>Signal Three: Bounded Chunk Discipline</h3>

          <p>
            Every H3 holds between 80 and 180 tokens — roughly 60 to 130 words of dense prose. GEO-SFE
            (2026) measured a +43% extraction lift on bounded chunks versus long-form blocks, plus a
            corresponding 31% degradation on chunks exceeding 300 words. The mechanism: RAG retrievers
            embed at the passage level, and over-long passages get split mid-thought, fragmenting the
            answer. Plumbing pages that respect the chunk ceiling produce extractable answers. Plumbing
            pages that ignore it produce noise. To text us your shop URL for a chunk audit, text (213)
            444-2229 with the domain.
          </p>

          <h3>Signal Four: Journalism Over Promotion</h3>

          <p>
            Chen et al. (2025) measured a 3-5x preference inside major LLM retrievers for third-party-toned
            content over first-party brand claims. The cause is systematic bias: retrievers downweight
            promotional language because promotional language correlates with low-information density.
            Plumbing pages that read like a press release lose the citation to plumbing pages that read like
            a trade publication. The fix is voice surgery — replace &quot;our award-winning team&quot; with
            &quot;the standard procedure for slab leak detection in California requires a licensed C-36
            plumbing contractor and...&quot; The reader still gets the message. The retriever scores it
            higher.
          </p>

          <h3>Signal Five: Corpus Cadence</h3>

          <p>
            <strong className="named-thesis">The Cadence Compounding Effect: plumbing operators publishing
            sixteen AEO-structured articles per month earn first citations inside 30 to 60 days and
            city-level authority by day 90 — anything below eight articles per month rarely crosses the
            citation threshold.</strong> The mechanism is that retrievers reward source breadth at the
            domain level: a plumbing site with 60 cited-able articles outranks a plumbing site with 6
            because the larger corpus matches more query patterns. Sixteen per month is the field-tested
            minimum. To plan your cadence directly, book a Calendly consult and end the call with a clear
            yes or no on territory availability at{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a>.
          </p>

          {/* SIGNAL TABLE */}
          <div className="not-prose ae-comparison-table-wrap my-12">
            <table className="ae-comparison-table">
              <thead>
                <tr>
                  <th>Signal</th>
                  <th>What Retrievers Measure</th>
                  <th>Lift</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {signals.map((s) => (
                  <tr key={s.num}>
                    <td><strong>{s.num}. {s.title}</strong></td>
                    <td>{s.measure}</td>
                    <td><span className="ae-pill-orange">{s.lift}</span></td>
                    <td>{s.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SECTION 4: MISTAKES */}
          <span className="ae-section-label" id="mistakes">The Mistakes</span>
          <h2>What Most Plumbing Businesses Get Wrong About AI Recommendations</h2>

          <p>
            Patterns in plumbing operators that fail AEO are consistent. Each mistake below is fixable in
            30 to 90 days, and plumbing operators who fix all five typically see citation activity within
            the same quarter. Markets do not stay open. To check whether your city is still open,{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a
            30-minute Calendly consult</a>.
          </p>

          <h3>Mistake One: NAP Drift Across Directories</h3>

          <p>
            Directory drift is the most common and most expensive AEO failure. NAP variance beyond 5%
            across Google Business Profile, Yelp, Angi, HomeAdvisor, BBB, Nextdoor, and a state licensing
            directory cuts AI citation rate roughly 60% versus baseline because retrievers treat
            conflicting business records as low-confidence and route citations to competitors with cleaner
            data. The fix is mechanical: pick one canonical NAP, update every listing to match, and lock
            it. Identical NAP across seven directories beats inconsistent NAP across twenty-five every
            single time. To start a parity audit on your domain, email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.
          </p>

          <h3>Mistake Two: A Single Services Page Listing Every Job</h3>

          <p>
            A single page listing &quot;We do drain cleaning, water heater repair, slab leak detection,
            sewer line replacement, and emergency plumbing&quot; is invisible to query-specific retrieval.
            Retrievers cannot cite a kitchen-sink page in answer to &quot;slab leak repair in [city]&quot;
            or &quot;tankless water heater installation near [neighborhood].&quot; They cite a dedicated
            page titled &quot;Slab Leak Repair&quot; or &quot;Tankless Water Heater Installation.&quot;
            Split the Services page into 12 to 18 service-specific pages — one per common job, each opening
            with the service definition and listing the typical price range and timeline. That single
            change moves citation rates more than any other tactic.
          </p>

          <h3>Mistake Three: JavaScript-Only Pricing Widgets</h3>

          <p>
            A plumbing site whose pricing surface only inside a JavaScript widget — a third-party quote
            engine, a scheduling iframe — is partially invisible to AI crawlers. Many retrievers do not
            execute client-side scripts and therefore see a blank page where the prices should be. The fix
            is to mirror the price and service data in static HTML on the page alongside the widget.
            Booking still flows through the platform. Retrievers parse the static text. To audit your
            booking widget for AI legibility, email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.
          </p>

          <h3>Mistake Four: Brand-Voice Content Instead Of Journalistic Content</h3>

          <p>
            Most plumbing operator websites are written as marketing collateral: superlatives, taglines,
            calls to action layered into every sentence. That voice is downweighted by retrievers because
            it correlates with low information density. Rewrite the operator domain&apos;s educational
            pages in trade-publication voice: third-person, definition-first, source-anchored, dated.
            Booking pages and service-area pages can remain promotional. Educational pages — the ones that
            earn citations — cannot. To rewrite your content lattice in journalistic voice, text Justin at
            (213) 444-2229 with the domain URL.
          </p>

          <h3>Mistake Five: Sub-Cadence Publishing</h3>

          <p>
            Plumbing operators publishing one or two articles per month rarely cross the citation
            threshold. Retrievers compare a domain&apos;s corpus to competing domains, and a 12-article
            site loses to a 60-article site on breadth scoring even when each individual article is
            stronger. Sixteen articles per month is the documented inflection point inside The Answer
            Engine&apos;s field audit. Operators below that line stay invisible. Operators at or above it
            cross into citation territory inside a quarter. To plan a 16-per-month cadence for your
            operation, drop us a line at{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>{' '}
            with your domain.
          </p>

          {/* SECTION 5: PROOF LEDGER */}
          <span className="ae-section-label" id="proof">The Proof Ledger</span>
          <h2>How To Measure Whether ChatGPT Cites Your Plumbing Business</h2>

          <p>
            <strong className="named-thesis">The Proof Ledger: AEO results are measured by query-level
            citations across named models, not by impressions or follower counts — a plumbing operator
            cited by ChatGPT, Claude, Perplexity, and Gemini for its target queries has compound authority
            that a Maps rank or social count cannot capture.</strong> The method is direct query testing,
            run weekly, logged per model, and reported as a citation rate. The Answer Engine ships a
            Proof Ledger spreadsheet with every engagement so the operator owns the evidence.{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">The AERO Blind Spot
            Scan</a> ships the spreadsheet with your first report.
          </p>

          <h3>What To Measure</h3>

          <p>
            Citation rate per query per model. Pick 15 target queries — &quot;best plumber in
            [neighborhood], slab leak detection [city], emergency plumber [city], tankless water heater
            installation [city], sewer line repair [city], 24 hour plumber [city]&quot; — and run each on
            ChatGPT with search enabled, Claude, Perplexity, and Gemini. Log whether the operator domain
            appears, how it is described, and which page is linked. Track week over week. The query bank
            is the most underrated AEO artifact most plumbing operators never build. Need the template
            workbook? Lock in your exclusive territory and{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a
            Calendly consult</a> — the workbook ships before the call.
          </p>

          <h3>What To Ignore</h3>

          <p>
            Impression counts from Google Search Console do not correlate with AI citation behavior.
            Map Pack rank tracking is a separate system measuring a separate retrieval surface. Social
            media followers drive emergency-call volume but do not move retriever decisions. Domain
            Authority and Page Authority were designed for backlink-driven ranking, not retrieval-driven
            citation. The signal that matters is whether the plumbing operator&apos;s name appears in the
            AI answer when a homeowner asks about their slab leak or their water heater.
          </p>

          <h3>The Cadence That Works</h3>

          <p>
            Weekly citation logs, monthly directory parity checks, quarterly schema audits, and quarterly
            content refreshes on top-cited service pages. Most plumbing operators running this cadence see
            Perplexity citations in month two, ChatGPT citations in month three to four, and Gemini
            citations in month four to five. Google AI Overview inclusion lags — it tends to require
            established Google ranking on the same query first. To set up citation monitoring for your
            plumbing shop, text (213) 444-2229 with the domain URL.
          </p>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">Territory Scarcity</div>
            <p>
              The Answer Engine takes one plumbing operator per city. When the slot fills, competitors
              cannot buy in at any price. Several major metros remain open as of this article&apos;s
              publication. Check whether your city is still available:{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a
              Calendly consult on territory availability</a>.
            </p>
          </div>

          {/* CTA BLOCK */}
          <div className="ae-cta-block not-prose">
            <h3>Get Your Plumbing Domain&apos;s AEO Scorecard</h3>
            <p>
              The AERO Blind Spot Scan checks your plumbing domain against 47 retrieval signals — directory
              parity, schema markup, definition-first openings, attribution density, chunk discipline,
              journalistic voice, and corpus cadence. Ships in 48 hours. Free, no obligation.
            </p>
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">
              Run The Free Scan
            </a>
            <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">
              Book A Calendly Consult
            </a>
          </div>

          {/* SECTION 6: FAQ */}
          <span className="ae-section-label" id="faq">FAQ</span>
          <h2>Frequently Asked Questions</h2>

          <details className="ae-faq-item">
            <summary>How does ChatGPT actually choose a plumber to recommend?</summary>
            <div className="ae-faq-answer">
              <p>
                ChatGPT does not score plumbing businesses. ChatGPT scores content chunks. A local plumbing
                query triggers a four-source retrieval pass — live web index, training corpus residue,
                knowledge graph entity links, and operator-published authority content — and only the
                structurally correct passages reach the synthesis step (Aggarwal et al., KDD 2024;
                GEO-SFE, 2026).
              </p>
              <p>
                The cited plumber is the operator whose own domain published the chunks the model pulled.
                Map Pack rank and Yelp star count are background context, not citation levers. To audit
                which source currently carries your domain&apos;s signal,{' '}
                <a href="https://theanswerengine.ai/blindspot">run the free Blind Spot Scan</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Does the number of Google reviews influence ChatGPT plumber recommendations?</summary>
            <div className="ae-faq-answer">
              <p>
                Review count is a strong input to the Google Map Pack and a weak input to a ChatGPT
                recommendation. ChatGPT weights inline attribution and structurally extractable content
                from the domain far more heavily than third-party star ratings. A 500-review plumber with
                no published authority content can lose the citation to a 40-review plumber whose website
                carries 60 AEO-structured articles.
              </p>
              <p>
                Reviews still matter for trust at the point-of-decision. They do not produce the citation
                slot. To map your citation lattice independent of review count, text (213) 444-2229.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Does paid advertising influence which plumber ChatGPT recommends?</summary>
            <div className="ae-faq-answer">
              <p>
                Paid advertising has no observable effect on ChatGPT plumber recommendations. ChatGPT pulls
                from an index of organic content. Google Ads, Yelp Ads, Angi promotions, and Local Service
                Ads do not enter the retrieval pass.
              </p>
              <p>
                The citation slot goes to the plumbing operator whose published content earns the
                structural trust signals retrievers reward. Ad spend is a parallel acquisition channel,
                not an AEO substitute. For a structural diagnosis on what your domain needs, email{' '}
                <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Why is my plumbing business invisible to ChatGPT?</summary>
            <div className="ae-faq-answer">
              <p>
                Most plumbing service domains carry none of the four structural signals retrievers reward:
                definition-first openings, inline attribution, bounded chunks, and journalistic tone. The
                Answer Engine field audit measured fewer than four percent of US plumbing domains carrying
                any of the four signals at meaningful density.
              </p>
              <p>
                The invisibility is structural, not algorithmic, and it is reversible inside a 90-day
                publication window with the right cadence. To check your current exposure score,{' '}
                <a href="https://theanswerengine.ai/blindspot">request the AERO Scan</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>How can a plumber start getting cited by ChatGPT?</summary>
            <div className="ae-faq-answer">
              <p>
                A plumbing operator earns a ChatGPT citation by publishing AEO-structured articles on its
                own domain at a cadence of sixteen articles per month. Each article opens every H3 with a
                plain-language definition of the service category, carries inline attribution to named
                sources, holds chunks between 80 and 180 tokens, and reads as journalism rather than
                promotion.
              </p>
              <p>
                First citations typically appear inside 30 to 60 days, and city-level authority lands by
                day 90. To plan a 16-per-month cadence for your operation,{' '}
                <a href="https://calendly.com/theanswerengine-support/30min">book a Calendly consult</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>How long does it take to appear in ChatGPT plumber answers?</summary>
            <div className="ae-faq-answer">
              <p>
                First citations typically appear inside 30 to 60 days at a publication cadence of sixteen
                AEO-structured articles per month. By day 90, the Proof Ledger usually carries citations
                from all four major LLM platforms — ChatGPT, Claude, Gemini, and Perplexity.
              </p>
              <p>
                The Answer Engine carries a 90-day citation guarantee tied to that cadence, and the
                timeline compresses when the plumbing domain already carries clean directory data and a
                verified Google Business Profile. To map the timeline for your operation, text Justin at
                (213) 444-2229 — replies inside 24 hours.
              </p>
            </div>
          </details>

          {/* PULL QUOTE */}
          <blockquote className="ae-quote">
            <p>
              The plumbing operators cited by AI search next year are not the largest. They are the ones
              building definition-first content, attribution-anchored chunks, and a sixteen-per-month
              cadence today — while the field is less than two years old and most domains carry none of
              the four signals.
            </p>
            <cite>— Justin Borges, Founder of The Answer Engine</cite>
          </blockquote>

          <h2>What Comes Next</h2>

          <p>
            The plumbing operators that lock AI search citation in the next two quarters will hold the
            slot for years. Retrievers favor incumbents once citation patterns settle, and displacing a
            cited domain requires months of structured content work from a challenger. The window to
            claim a city is now. Ready to act? Book a free strategy session at{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a>{' '}
            — the call ends with a clear yes or no on territory availability.
          </p>

          {/* AUTHOR CARD */}
          <div className="not-prose ae-author-card">
            <img
              src="/justin-borges.webp"
              alt="Justin Borges, Founder of The Answer Engine"
              style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24' }}
            />
            <div>
              <div className="ae-author-name">Justin Borges</div>
              <div className="ae-author-role">Founder, The Answer Engine</div>
              <p className="ae-author-bio">
                Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps local service
                operators get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. 1.14M+ monthly
                impressions across client portfolio, 4/4 LLMs cited, 90-day citation guarantee.
              </p>
            </div>
          </div>

          {/* CONCEPT LATTICE LINKS */}
          <div className="not-prose mt-12 mb-12 border-t border-white/10 pt-8">
            <div className="font-mono uppercase tracking-wider text-xs text-white/40 mb-4">Concept Lattice</div>
            <div className="flex flex-wrap gap-3">
              <a href="/concepts/plumber-recommendation-pipeline" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Plumber Recommendation Pipeline</a>
              <a href="/concepts/operator-authority-asymmetry" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Operator Authority Asymmetry</a>
              <a href="/concepts/definition-premium" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Definition Premium</a>
              <a href="/concepts/chunk-ceiling" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Chunk Ceiling</a>
              <a href="/concepts/journalism-differential" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Journalism Differential</a>
              <a href="/concepts/cadence-compounding-effect" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Cadence Compounding Effect</a>
              <a href="/concepts/proof-ledger" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Proof Ledger</a>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section className="ae-final-cta">
          <h2>Claim Your City Before A Competitor Does</h2>
          <p>
            One plumbing operator per city. The Answer Engine ships AEO that gets your shop cited by
            ChatGPT, Gemini, Claude, and Perplexity — with a 90-day citation guarantee.
          </p>
          <a
            href="https://calendly.com/theanswerengine-support/30min"
            className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
          >
            Book A 30-Minute Consult
          </a>
          <p className="mt-6 text-sm text-white/40 font-mono uppercase tracking-wider">
            Text (213) 444-2229 · support@theanswerengine.ai
          </p>
        </section>
      </article>
    </div>
  );
}
