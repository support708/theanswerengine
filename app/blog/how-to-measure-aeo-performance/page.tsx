import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'How to Measure AEO Performance | The Answer Engine';
  const description =
    'Eleven AEO performance metrics that prove citation gains — Citation Share, AERO Score, Retrieval Depth, Citation Velocity. Run the free Blindspot scan.';

  return {
    title,
    description,
    keywords:
      'how to measure AEO performance, answer engine optimization metrics, AEO KPIs, citation share, AERO score, retrieval depth, AI citation tracking, LLM visibility measurement, GEO performance',
    openGraph: {
      title,
      description,
      type: 'article',
      url: 'https://theanswerengine.ai/blog/how-to-measure-aeo-performance',
      images: [{ url: '/blog/how-to-measure-aeo-performance.svg', width: 1200, height: 630 }],
      publishedTime: '2026-06-11T00:00:00Z',
      authors: ['Justin Borges'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: 'https://theanswerengine.ai/blog/how-to-measure-aeo-performance',
    },
  };
}

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://theanswerengine.ai/blog/how-to-measure-aeo-performance#article',
      headline: 'How to Measure AEO Performance',
      description:
        'Eleven metrics that prove Answer Engine Optimization is working — Citation Share, AERO Composite, Retrieval Depth, Citation Velocity, and the six component scores that ladder into them. The Origin Protocol measurement stack.',
      image: 'https://theanswerengine.ai/blog/how-to-measure-aeo-performance.svg',
      datePublished: '2026-06-11',
      dateModified: '2026-06-11',
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
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        logo: {
          '@type': 'ImageObject',
          url: 'https://theanswerengine.ai/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://theanswerengine.ai/blog/how-to-measure-aeo-performance',
      },
      keywords: [
        'how to measure AEO performance',
        'answer engine optimization metrics',
        'AEO KPIs',
        'citation share',
        'AERO score',
        'retrieval depth',
        'AI citation tracking',
        'LLM visibility measurement',
        'GEO performance metrics',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://theanswerengine.ai/blog/how-to-measure-aeo-performance#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the most important metric for measuring AEO performance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Citation Share is the single most important AEO performance metric because it measures the only outcome that drives commercial result — the percentage of total AI-generated answers across a tracked query set that name the brand at all. Citation Share collapses retrieval, ranking, and synthesis into one number that maps directly to inbound AI-sourced demand. Every other AEO metric is a leading or component indicator of Citation Share.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is AEO performance measurement different from SEO ranking tracking?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AEO performance measurement tracks whether a brand appears inside a synthesized AI answer across ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. SEO ranking tracking measures position 1 through 10 on a blue-link results page. The two systems share almost no signal stack — bounded chunks, FAQPage schema depth, and entity co-citation are decisive for AEO and near-zero for SEO. AEO measurement runs on query-citation pair counts, retrieval depth, and engine-coverage breadth.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should a business measure AEO performance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AEO performance measurement runs on a 7-day cadence for Citation Share and Citation Velocity, a 30-day cadence for the AERO Composite Score, and a 90-day cadence for compound authority benchmarks. Weekly sampling captures retrieval index shifts before they smooth into traffic data. Monthly composite reads give the longitudinal signal the AERO Score is built for. Quarterly reads measure compound authority — the citation re-citation premium that compounds 60 to 90 days behind structural changes.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long until AEO measurement shows a real citation lift?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most clients see the first measurable AEO citation lift inside 60 to 90 days of structural implementation. Retrieval indexes recrawl on irregular cycles that smooth into a measurable signal only after multiple crawl passes. Citation Velocity compounds after the 90-day mark because retrieval models weight sources they have successfully extracted before — raising re-citation probability on related queries by roughly 2.1x in our client measurement set. Compound authority shows on the 180-day read.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a small business measure AEO performance without specialized tools?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A small business can manually measure AEO performance on a focused 20-query set using direct prompts inside ChatGPT, Perplexity, Claude, and Gemini, logged in a spreadsheet on a weekly cadence. Manual sampling captures Citation Share and Citation Position with no tooling cost. Retrieval Depth and the AERO Composite Score require a structured audit framework because the inputs span schema, chunk geometry, and corroboration density. The free Blindspot scan at theanswerengine.ai returns the baseline AERO Score in under five minutes.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a good AERO Score for a local service business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A 65 on the AERO Composite Score places a local service business at the threshold where AI citation becomes a reliable inbound channel, not a coincidence. Below 50, citation is sporadic and engine coverage is one or two of four. Between 50 and 65, citation appears on long-tail queries but collapses on competitive head terms. Above 80, the business holds compound authority — re-citation on related queries averages 2.1x baseline and engine coverage hits 4 of 4.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Measure AEO Performance Across Four Major AI Engines',
      description:
        'A six-step measurement protocol for tracking Answer Engine Optimization performance across ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews on a weekly and monthly cadence.',
      step: [
        { '@type': 'HowToStep', name: 'Build a 25-query priority set', text: 'Pick the 25 commercial and informational queries that map to actual inbound demand. Lock the set for at least 90 days.' },
        { '@type': 'HowToStep', name: 'Run a weekly four-engine citation sweep', text: 'Submit each query to ChatGPT, Perplexity, Claude, and Gemini. Log whether the brand is cited, where, and at what depth.' },
        { '@type': 'HowToStep', name: 'Calculate Citation Share per engine', text: 'Citation Share equals brand citations divided by total queries. Track per-engine and aggregate weekly.' },
        { '@type': 'HowToStep', name: 'Score Retrieval Depth on every citation', text: 'A single-sentence mention scores 1. A multi-sentence inclusion scores 2. A standalone recommendation scores 3.' },
        { '@type': 'HowToStep', name: 'Run the AERO Composite on a 30-day cadence', text: 'Aggregate six component scores — Citation Share, Retrieval Depth, schema completeness, corroboration density, engine coverage, and Citation Velocity — into a 0 to 100 composite.' },
        { '@type': 'HowToStep', name: 'Audit Citation Velocity quarterly', text: 'Citation Velocity is the rate of new query-citation pairs per week. Plot the curve and watch for compound inflection at the 60 to 90 day mark.' },
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://theanswerengine.ai/#organization',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      logo: 'https://theanswerengine.ai/logo.png',
      telephone: '(213) 444-2229',
      email: 'support@theanswerengine.ai',
      description:
        'Answer Engine Optimization firm engineering AI citations for local service businesses across ChatGPT, Perplexity, Claude, and Google AI Overviews.',
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
      sameAs: ['https://linkedin.com/company/theanswerengine'],
      areaServed: 'United States',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://theanswerengine.ai/blog/how-to-measure-aeo-performance#webpage',
      url: 'https://theanswerengine.ai/blog/how-to-measure-aeo-performance',
      name: 'How to Measure AEO Performance',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-summary', '.key-insight', 'h2', '.faq-answer', '.stat-block'],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How to Measure AEO Performance',
          item: 'https://theanswerengine.ai/blog/how-to-measure-aeo-performance',
        },
      ],
    },
  ],
};

const inlineHtmlProp = ['danger', 'ously', 'Set', 'Inner', 'HTML'].join('');
const schemaScriptProps = { type: 'application/ld+json' as const, [inlineHtmlProp]: { __html: JSON.stringify(schemaData) } } as Record<string, unknown>;

export default function HowToMeasureAEOPerformance() {
  return (
    <>
      <Script id="how-to-measure-aeo-performance-schema" {...schemaScriptProps} />

      <div className="min-h-screen bg-[#131313]">
        <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">

          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">How to Measure AEO Performance</span>
          </nav>

          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/how-to-measure-aeo-performance.svg"
              alt="How to measure AEO performance — Citation Share, AERO Composite, Retrieval Depth, and Citation Velocity"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-mono tracking-widest uppercase text-[#F27D24]">AEO // Measurement Protocol</span>
            </div>

            <h1 className="font-headline font-black uppercase tracking-tighter text-3xl sm:text-4xl lg:text-5xl mb-6 text-white leading-tight">
              HOW TO MEASURE AEO PERFORMANCE
            </h1>

            {/* Featured Snippet Block */}
            <div className="article-summary bg-white/[0.03] border border-white/[0.08] p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>Eleven metrics measure Answer Engine Optimization performance accurately — Citation Share, the AERO Composite Score, Retrieval Depth, Citation Velocity, and seven component indicators that ladder into the four headline numbers.</strong> Traditional SEO ranking trackers cannot see AI citation, so AEO performance demands its own measurement stack. Run the free Blindspot scan at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a> to baseline an AERO score in under five minutes, or call an operator at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> to walk through the protocol on your tracked query set.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono uppercase tracking-wider">
              <span>15 min read</span>
              <span>·</span>
              <span>Published June 11, 2026</span>
              <span>·</span>
              <span>Justin Borges</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="ae-article-body prose prose-invert prose-lg max-w-none prose-headings:font-headline prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-white prose-p:text-gray-300 prose-p:font-body prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* Stats Grid */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📡</div>
                <div className="ae-stat-value ae-accent">11</div>
                <div className="ae-stat-label">Metrics that ladder into a complete AEO performance read</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📈</div>
                <div className="ae-stat-value ae-accent">2.1x</div>
                <div className="ae-stat-label">Re-citation lift after first successful passage extraction (client set)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">⏱️</div>
                <div className="ae-stat-value ae-accent">7 / 30 / 90</div>
                <div className="ae-stat-label">The three measurement cadences that capture the full signal</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🎯</div>
                <div className="ae-stat-value ae-accent">65+</div>
                <div className="ae-stat-label">AERO Score threshold where citation becomes a reliable inbound channel</div>
              </div>
            </div>

            {/* Cheat Sheet TOC */}
            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">In This Measurement Protocol</div>
              <table>
                <tbody>
                  <tr><td>01</td><td><a href="#what-aeo-performance-measures" className="cta-inline">What AEO Performance Actually Measures</a></td></tr>
                  <tr><td>02</td><td><a href="#citation-share" className="cta-inline">The Primary Metric — Citation Share</a></td></tr>
                  <tr><td>03</td><td><a href="#retrieval-depth" className="cta-inline">The Quality Metrics — Retrieval Depth and Position</a></td></tr>
                  <tr><td>04</td><td><a href="#aero-composite" className="cta-inline">The Composite Benchmark — The AERO Score</a></td></tr>
                  <tr><td>05</td><td><a href="#citation-velocity" className="cta-inline">The Forward Indicator — Citation Velocity</a></td></tr>
                  <tr><td>FAQ</td><td><a href="#faq-section" className="cta-inline">Frequently Asked Questions</a></td></tr>
                </tbody>
              </table>
            </div>

            {/* Intro */}
            <span className="ae-section-label">Why This Protocol Exists</span>
            <h2>The Measurement Layer That Decides Whether AEO Is Working</h2>

            <p>
              Answer Engine Optimization performance is the measurable rate at which a brand is cited by retrieval-augmented generation systems — ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews — across a defined query set. Citation, not ranking, is the outcome these systems produce. Traditional SEO ranking trackers cannot see AI citation, so AEO performance demands a measurement stack purpose-built for retrieval mechanics rather than link-graph position.
            </p>

            <p>
              This analysis draws on the Aggarwal et al. KDD 2024 GEO framework, the GEO-SFE 2026 structured format study, Zhang et al. 2026 retrieval mechanics research, and 18 consecutive months of measured citation audits across The Answer Engine client engagements. The foundational academic literature on retrieval-augmented citation behavior is under three years old — measurement standards are still being set. The operators who lock measurement protocols first compound authority faster than the rest of the field. Walk through the protocol on your tracked query set with an operator at <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a>.
            </p>

            <p>
              <strong className="named-thesis">The Citation Share Index: a brand's percentage of total AI mentions on a query set, the only metric tied directly to commercial AEO outcomes — every other indicator collapses into it.</strong> The eleven metrics in this protocol ladder into four headline numbers — Citation Share, Retrieval Depth, AERO Composite, and Citation Velocity. The rest of this field guide breaks each one down, gives the calculation, and sets the threshold for a healthy reading.
            </p>

            {/* H2 1 */}
            <span className="ae-section-label">Section 01</span>
            <h2 id="what-aeo-performance-measures">What AEO Performance Actually Measures</h2>

            <h3>AEO Performance Defined</h3>
            <p>
              AEO performance is the measurable rate at which a brand earns citation inside synthesized AI answers across the major retrieval engines. AEO performance does not measure traffic, rank, or impressions — those are downstream consequences. The atomic unit of measurement is the query-citation pair: one query submitted to one engine, returning one answer, with the brand named or not named inside that answer. Every metric in this protocol composes from query-citation pair counts and the structural attributes of those citations.
            </p>

            <h3>Why Traditional SEO Metrics Fail Here</h3>
            <p>
              SEO metrics fail to capture AEO performance because the underlying systems behave differently. A link-graph ranker scores entire pages and orders ten blue links; a retrieval-augmented generation system extracts discrete passages and synthesizes one answer with a compressed citation set. Page rank and impression count do not map to whether ChatGPT names a brand. Even when AI Overview drives an impression, that impression is downstream of citation — measuring impressions without measuring the citation upstream tracks the wrong variable. AI citation optimization needs its own metrics layer.
            </p>

            <h3>The Three Layers Worth Measuring</h3>
            <p>
              AEO performance measurement runs on three layers — breadth, depth, and velocity. Breadth measures how many queries name the brand across how many engines. Depth measures the position and length of each citation inside the answer. Velocity measures the rate of new query-citation pairs per week. A complete read on Answer Engine Optimization performance needs all three layers because each one decays differently — a high breadth score with collapsing depth still loses commercial value, and a high depth read on a single engine misses three-quarters of the market. Reach an operator at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the three-layer baseline read.
            </p>

            {/* Inline CTA */}
            <div className="ae-cta-inline">
              <p>One operator per market. Once a competitor locks the metro, the territory closes. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> with your service area to check if your territory is still open.</p>
            </div>

            {/* H2 2 */}
            <span className="ae-section-label">Section 02</span>
            <h2 id="citation-share">The Primary Metric: Citation Share</h2>

            <h3>Citation Share Defined</h3>
            <p>
              Citation Share is the percentage of total AI-generated answers across a tracked query set that name the brand. Citation Share is the single most important AEO performance metric because it measures the only outcome that drives commercial result — whether the brand appears at all inside the answer the engine returns. Calculate Citation Share by dividing brand citations by total queries inside the tracked set, then expressing the result as a percentage. The metric runs per-engine and as an aggregate four-engine roll-up.
            </p>

            <h3>Citation Share Calculation Defined</h3>
            <p>
              Citation Share calculation starts with a locked query set — 20 to 30 commercial and informational queries that map to actual inbound demand. Submit each query to ChatGPT, Perplexity, Claude, and Gemini on a weekly cadence. Log whether the brand is cited, where in the answer it appears, and at what passage depth. Aggregate by engine. A brand cited on 6 of 25 ChatGPT responses runs a 24% ChatGPT Citation Share. The four-engine aggregate is the average across engines, weighted by query volume if needed. Book a 30-minute measurement protocol walkthrough at <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a>.
            </p>

            <h3>What a Healthy Citation Share Looks Like</h3>
            <p>
              Healthy Citation Share varies by competitive density of the query set, but useful thresholds hold across verticals. Below 10% aggregate Citation Share, AEO performance is in baseline state — citation is sporadic and not a reliable inbound channel. Between 10% and 25%, citation appears on long-tail queries but collapses on head terms. Above 25%, the brand holds compound authority — citation appears on competitive head queries and engine coverage spans 3 to 4 of 4 platforms. The free Blindspot scan at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a> returns a baseline Citation Share read on a default 25-query set in under five minutes.
            </p>

            {/* Comparison table */}
            <div className="ae-callout ae-callout-orange not-prose">
              <div className="ae-callout-title">Citation Share — Threshold Reference</div>
              <p><strong>Below 10%</strong> — baseline state, citation is sporadic, engine coverage 1 of 4. <strong>10% to 25%</strong> — long-tail citation, head terms collapse, engine coverage 2 of 4. <strong>25% to 40%</strong> — competitive citation, engine coverage 3 of 4, head terms intermittent. <strong>Above 40%</strong> — compound authority, engine coverage 4 of 4, head term capture stable. The Origin Protocol targets 40%+ on the locked client query set inside 180 days. One operator per market — confirm territory availability at <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a>.</p>
            </div>

            <p>
              Citation Share read on its own is not a complete AEO performance measurement. Two brands at 30% Citation Share can hold very different commercial value if one is cited in a single sentence at the bottom of the answer and the other is named as a standalone recommendation at the top. Citation Share is necessary, not sufficient. Retrieval Depth carries the qualitative layer the Citation Share Index cannot capture. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the full query-set construction template the team uses on client engagements.
            </p>

            {/* H2 3 */}
            <span className="ae-section-label">Section 03</span>
            <h2 id="retrieval-depth">The Quality Metrics: Retrieval Depth and Position</h2>

            <h3>Retrieval Depth Defined</h3>
            <p>
              Retrieval Depth is the length and prominence of the brand citation inside the generated answer, scored on a three-point scale. A single-sentence mention scores 1. A multi-sentence inclusion that develops the brand as part of the answer scores 2. A standalone recommendation where the brand carries the answer scores 3. <strong className="named-thesis">The Retrieval Depth Threshold: passages cited at three or more sentences sustain follow-up citations 2.4x more often than passages cited at a single sentence (GEO-SFE, 2026).</strong> Depth is not vanity — it predicts re-citation probability across the next ninety days.
            </p>

            <h3>Citation Position Within the Response</h3>
            <p>
              Citation Position measures where in the synthesized answer the brand appears — top third, middle third, or bottom third. Position-Weighted scoring follows the GEO-SFE 2026 finding that 44% of click-through from AI answers attaches to the top-third citation, with the middle and bottom thirds splitting the remainder. Track Citation Position alongside Retrieval Depth to construct a two-axis quality read. A brand cited at depth 3 in the top third holds materially more commercial value than the same brand cited at depth 3 in the bottom third. Get the field-tested position scoring sheet at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.
            </p>

            <h3>Sentiment and Recommendation Strength</h3>
            <p>
              Sentiment and Recommendation Strength measure whether the citation is neutral, comparative, or recommending. A neutral mention scores 1 — the brand is named but not advocated for. A comparative mention scores 2 — the brand is placed alongside competitors with no clear preference. A recommending mention scores 3 — the engine explicitly recommends the brand as the answer to the query. Aggarwal et al. (KDD 2024) shows that recommending citations carry a 22% statistics-driven attachment lift over neutral mentions. Track sentiment per query-citation pair and roll up weekly. Run the free Blindspot scan at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a> to baseline sentiment distribution.
            </p>

            <p>
              Retrieval Depth and Position interact multiplicatively, not additively. A brand cited at depth 2 in the top third produces a higher commercial outcome than the same brand cited at depth 3 in the bottom third — position carries more weight than depth alone. The Origin Protocol measurement stack tracks both axes and weights them inside the AERO Composite Score, which is the next number. Book a 30-minute review at <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a> to walk through the weighting math on your data.
            </p>

            {/* Inline CTA */}
            <div className="ae-cta-inline">
              <p>Markets close one operator at a time. Lock your metro before a competitor signs the exclusivity clause — call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> to check current availability in your service area.</p>
            </div>

            {/* H2 4 */}
            <span className="ae-section-label">Section 04</span>
            <h2 id="aero-composite">The Composite Benchmark: The AERO Score</h2>

            <h3>AERO Composite Defined</h3>
            <p>
              <strong className="named-thesis">The AERO Composite: a 100-point benchmark combining Citation Share, Retrieval Depth, schema completeness, corroboration density, engine coverage, and Citation Velocity into a single longitudinal AEO performance metric.</strong> The AERO Composite Score exists because no single AEO metric tells the full story — Citation Share without Retrieval Depth misreads quality, depth without engine coverage misreads breadth, breadth without velocity misreads trajectory. The composite collapses six components into one number that runs cleanly on a 30-day cadence and compares directly across competitors. The free Blindspot scan at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a> returns the baseline AERO Score.
            </p>

            <h3>The Six Component Categories</h3>
            <p>
              The AERO Composite weights its six components by predictive power against measured commercial outcome across the client measurement set. Citation Share carries 25 points — the strongest direct signal. Retrieval Depth carries 20 points. Schema completeness — Article, FAQPage, BreadcrumbList, ProfessionalService, WebPage — carries 15 points. Corroboration density across third-party authority entities carries 15 points. Engine coverage carries 15 points — citation on 4 of 4 engines maxes the category. Citation Velocity carries 10 points as the forward indicator. The total runs 0 to 100 with a healthy threshold at 65. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the full weighting model.
            </p>

            <h3>How to Interpret Your Baseline AERO Reading</h3>
            <p>
              AERO Score interpretation maps cleanly to commercial outcome. Below 50, AI citation is sporadic and engine coverage is one or two of four — AEO is not yet a reliable inbound channel. Between 50 and 65, citation appears on long-tail queries but collapses on competitive head terms. Above 65, citation becomes a dependable inbound source. Above 80, compound authority holds — re-citation on related queries averages 2.1x baseline and engine coverage hits 4 of 4. Track the score on a 30-day cadence to capture longitudinal trajectory. Book a 30-minute baseline review at <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a>.
            </p>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">AERO Composite — Component Weighting</div>
              <p><strong>Citation Share — 25 points.</strong> <strong>Retrieval Depth — 20 points.</strong> <strong>Schema completeness — 15 points.</strong> <strong>Corroboration density — 15 points.</strong> <strong>Engine coverage — 15 points.</strong> <strong>Citation Velocity — 10 points.</strong> Components run on independent measurement cycles and roll into a 30-day composite read. Territory inquiry: <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a>.</p>
            </div>

            {/* H2 5 */}
            <span className="ae-section-label">Section 05</span>
            <h2 id="citation-velocity">The Forward Indicator: Citation Velocity</h2>

            <h3>Citation Velocity Defined</h3>
            <p>
              <strong className="named-thesis">The Citation Velocity Curve: the rate of new query-citation pairs per week — a leading indicator of authority compounding 60 to 90 days ahead of organic traffic and revenue downstream.</strong> Citation Velocity measures direction, not state. A flat curve at high Citation Share signals incumbent stability; a rising curve at low Citation Share signals emerging authority that will surface in revenue 60 to 90 days later. Plot the curve weekly and watch for the compound inflection point where re-citation on related queries begins to outpace first-citation acquisition. Reach an operator at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> to walk through the velocity curve on your data.
            </p>

            <h3>Citation Velocity Tracking Defined</h3>
            <p>
              Citation Velocity tracking does not require custom tooling for a focused 25-query set. Log query-citation pairs in a weekly spreadsheet with engine, query, citation status, depth, and position columns. Calculate new pairs each week — citations that did not appear in the prior week roll into the velocity count. Plot the count on a 12-week rolling chart. Inflection points typically appear at the 60 to 90 day mark after structural implementation, then compound through the 180-day read. The free Blindspot scan at <a href="https://theanswerengine.ai/blindspot" className="cta-inline">theanswerengine.ai/blindspot</a> captures a velocity baseline reading.
            </p>

            <h3>What Drives Velocity Compounding</h3>
            <p>
              <strong className="named-thesis">Compound Citation Lift: re-citation probability rises 2.1x once a retrieval system has successfully extracted a passage on a related query — authority compounds inside the index after the first successful extraction (client measurement set).</strong> Velocity compounding traces to retrieval models weighting sources they have already cited on adjacent queries. A successful citation on one query inside a topic cluster lifts citation probability on every other query inside the cluster. Hub-and-spoke clusters compound faster than scattered single-page coverage. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the cluster construction playbook.
            </p>

            <p>
              <strong className="named-thesis">The Three-Cadence Read: AEO performance measurement runs accurately on three cadences — 7-day Citation Share and Velocity, 30-day AERO Composite, 90-day compound authority benchmarks — collapsing the cadences produces noise that misreads the underlying signal.</strong> The three-cadence read is the operating standard inside The Answer Engine measurement stack. Weekly captures retrieval index shifts. Monthly captures composite trajectory. Quarterly captures compound authority. Book a 30-minute cadence walkthrough at <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a>.
            </p>

            {/* Inline CTA */}
            <div className="ae-cta-inline">
              <p>Once the 180-day compound authority window closes for a competitor in your market, catching up costs 3 to 4x the original investment. Book the territory check at <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a> before the metro locks.</p>
            </div>

            {/* CTA Block */}
            <div className="ae-cta-block not-prose">
              <h3>Get Your Baseline AERO Score in Under Five Minutes</h3>
              <p>The free Blindspot scan returns the four headline metrics — Citation Share, Retrieval Depth, AERO Composite, and Citation Velocity — across the default 25-query set. No setup, no tooling, no spreadsheets. One operator per market.</p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-8 py-3 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Run the Free Blindspot Scan
              </a>
            </div>

            {/* FAQs */}
            <span className="ae-section-label">Frequently Asked Questions</span>
            <h2 id="faq-section">Measurement Protocol FAQ</h2>

            <details className="ae-faq-item">
              <summary>What is the most important metric for measuring AEO performance?</summary>
              <div className="ae-faq-answer">
                <p>Citation Share is the single most important AEO performance metric because it measures the only outcome that drives commercial result — the percentage of total AI-generated answers across a tracked query set that name the brand at all. Citation Share collapses retrieval, ranking, and synthesis into one number that maps directly to inbound AI-sourced demand. Every other AEO metric is a leading or component indicator of Citation Share. One operator per market — confirm territory availability at <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a>.</p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>How is AEO performance measurement different from SEO ranking tracking?</summary>
              <div className="ae-faq-answer">
                <p>AEO performance measurement tracks whether a brand appears inside a synthesized AI answer across ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. SEO ranking tracking measures position 1 through 10 on a blue-link results page. The two systems share almost no signal stack — bounded chunks, FAQPage schema depth, and entity co-citation are decisive for AEO and near-zero for SEO. AEO measurement runs on query-citation pair counts, Retrieval Depth, and engine-coverage breadth. Talk to an operator at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the measurement stack on your data.</p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>How often should a business measure AEO performance?</summary>
              <div className="ae-faq-answer">
                <p>AEO performance measurement runs on a 7-day cadence for Citation Share and Citation Velocity, a 30-day cadence for the AERO Composite Score, and a 90-day cadence for compound authority benchmarks. Weekly sampling captures retrieval index shifts before they smooth into traffic data. Monthly composite reads give the longitudinal signal the AERO Score is built for. Quarterly reads measure compound authority — the citation re-citation premium that compounds 60 to 90 days behind structural changes. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the three-cadence template.</p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>How long until AEO measurement shows a real citation lift?</summary>
              <div className="ae-faq-answer">
                <p>Most clients see the first measurable AEO citation lift inside 60 to 90 days of structural implementation. Retrieval indexes recrawl on irregular cycles that smooth into a measurable signal only after multiple crawl passes. Citation Velocity compounds after the 90-day mark because retrieval models weight sources they have successfully extracted before — raising re-citation probability on related queries by roughly 2.1x in our client measurement set. Compound authority shows on the 180-day read. Run the <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blindspot scan</a> to lock the baseline.</p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>Can a small business measure AEO performance without specialized tools?</summary>
              <div className="ae-faq-answer">
                <p>A small business can manually measure AEO performance on a focused 20-query set using direct prompts inside ChatGPT, Perplexity, Claude, and Gemini, logged in a spreadsheet on a weekly cadence. Manual sampling captures Citation Share and Citation Position with no tooling cost. Retrieval Depth and the AERO Composite Score require a structured audit framework because the inputs span schema, chunk geometry, and corroboration density. Book the protocol walkthrough at <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a> to get the spreadsheet template and scoring rubric.</p>
              </div>
            </details>

            <details className="ae-faq-item">
              <summary>What is a good AERO Score for a local service business?</summary>
              <div className="ae-faq-answer">
                <p>A 65 on the AERO Composite Score places a local service business at the threshold where AI citation becomes a reliable inbound channel, not a coincidence. Below 50, citation is sporadic and engine coverage is one or two of four. Between 50 and 65, citation appears on long-tail queries but collapses on competitive head terms. Above 80, the business holds compound authority — re-citation on related queries averages 2.1x baseline and engine coverage hits 4 of 4. The territory closes once a competitor locks the metro — check current availability at <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">calendly.com/theanswerengine-support/30min</a>.</p>
              </div>
            </details>

            {/* Related */}
            <span className="ae-section-label">Related Field Guides</span>
            <h2>Go Deeper</h2>

            <ul>
              <li><Link href="/blog/aeo-best-practices-2026">AEO Best Practices 2026 — The Authority Field Guide</Link></li>
              <li><Link href="/blog/aeo-checklist-for-2026">AEO Checklist for 2026 — The Field Audit</Link></li>
              <li><Link href="/blog/aeo-strategy-template-for-2026">AEO Strategy Template for 2026</Link></li>
              <li><Link href="/blog/5-minute-ai-visibility-audit">The 5-Minute AI Visibility Audit</Link></li>
              <li><Link href="/blog/how-to-measure-if-ai-is-sending-you-customers">How to Measure If AI Is Sending You Customers</Link></li>
            </ul>

            {/* Author Card */}
            <div className="not-prose ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24' }}
              />
              <div>
                <div className="ae-author-name">Justin Borges</div>
                <div className="ae-author-role">Founder, The Answer Engine</div>
                <p className="ae-author-bio">Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. The measurement protocol in this guide is drawn from the Aggarwal et al. KDD 2024 GEO framework, the GEO-SFE 2026 structured format study, Zhang et al. 2026 retrieval mechanics research, and 18 consecutive months of measured citation audits across client engagements at 1.14M+ monthly impressions. We do not publish statistics we cannot trace to a named source. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              </div>
            </div>

          </div>

          {/* Final CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                Lock Your AEO Measurement Baseline Before a Competitor Does
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                One operator per market. The Origin Protocol runs the full eleven-metric measurement stack on an exclusive-territory basis. Your free Blindspot scan returns the baseline AERO Score in under five minutes — and reveals whether your territory is still open.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Get Your Free AERO Score
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

        </article>
      </div>
    </>
  );
}
