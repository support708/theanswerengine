import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';


const TITLE = 'AEO Models: How AI Search Picks Sources | The Answer Engine';
const DESCRIPTION = 'AEO models pick sources via retrieval scoring, authority signals, and prompt mediation. Learn how ChatGPT, Perplexity, Claude, and Gemini select citations.';
const URL = 'https://theanswerengine.ai/blog/aeo-models-how-ai-search-picks-sources';
const IMAGE = 'https://theanswerengine.ai/blog/aeo-models-how-ai-search-picks-sources.webp';
const PUBLISHED = '2026-05-30';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'aeo models, how ai search picks sources, ai citation mechanism, answer engine optimization, ChatGPT source selection, Perplexity ranking, RAG retrieval scoring, LLM citation policy',
  alternates: { canonical: URL },
  openGraph: {
    title: 'AEO Models: How AI Search Picks Sources',
    description: DESCRIPTION,
    url: URL,
    type: 'article',
    publishedTime: PUBLISHED,
    authors: ['Justin Borges'],
    images: [{ url: IMAGE, width: 1200, height: 630, alt: 'AEO Models: How AI Search Picks Sources' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEO Models: How AI Search Picks Sources',
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function AEOModelsHowAISearchPicksSourcesPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${URL}#article`,
        headline: 'AEO Models: How AI Search Picks Sources',
        description: 'A technical breakdown of the retrieval, ranking, and citation selection models inside ChatGPT, Perplexity, Claude, Gemini, and Google AI Mode, and the structural signals that decide which sources get cited.',
        image: IMAGE,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        author: {
          '@type': 'Person',
          '@id': 'https://theanswerengine.ai/about#justin-borges',
          name: 'Justin Borges',
          jobTitle: 'Founder, The Answer Engine',
          url: 'https://theanswerengine.ai/about',
          image: 'https://theanswerengine.ai/justin-borges.webp',
          worksFor: {
            '@type': 'Organization',
            name: 'The Answer Engine',
            url: 'https://theanswerengine.ai',
          },
          knowsAbout: ['Answer Engine Optimization', 'AI Citations', 'Retrieval Augmented Generation', 'LLM Source Ranking'],
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://theanswerengine.ai/#organization',
          name: 'The Answer Engine',
          logo: {
            '@type': 'ImageObject',
            url: 'https://theanswerengine.ai/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': URL,
        },
        keywords: 'aeo models, how ai search picks sources, ai citation mechanism, answer engine optimization, RAG retrieval, LLM citation, ChatGPT source ranking, Perplexity ranking',
        about: [
          { '@type': 'Thing', name: 'Answer Engine Optimization' },
          { '@type': 'Thing', name: 'Retrieval Augmented Generation' },
          { '@type': 'Thing', name: 'AI Citations' },
          { '@type': 'Thing', name: 'LLM Source Selection' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${URL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is an AEO model?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An AEO model is the internal pipeline an AI search engine uses to retrieve, rank, and cite sources when generating an answer. Every major engine — ChatGPT, Perplexity, Gemini, Claude, Google AI Mode — runs a three-stage AEO model: retrieve candidate passages, score them on authority and relevance, and decide whether each passage qualifies for citation in the final response.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does AI search decide which sources to cite?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI search engines score candidate passages on retrieval relevance, authority signals (schema, named author, third-party citations), and structural extractability (chunk size under 180 words, direct-answer openings, FAQ format). Sources that score above a per-query citation threshold are included in the response with attribution. Sources below the threshold inform the answer but are not cited.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are AEO models the same across ChatGPT, Perplexity, and Gemini?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The three-stage retrieve-score-cite architecture is shared, but the weights differ. Perplexity weights freshness and source diversity. ChatGPT weights structured data and Bing-indexed authority. Gemini and Google AI Mode weight schema markup and entity verification. Claude weights citation-trail content with explicit attribution. This is why a single domain may be cited heavily on Perplexity and invisible on ChatGPT.',
            },
          },
          {
            '@type': 'Question',
            name: 'What signals do AEO models score most heavily?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Across all major AEO models, five signals carry the most weight: schema markup depth, FAQPage structured data, named author with verifiable credentials, third-party co-citations (press, directories, associations), and chunk-formatted content with direct-answer openings. Aggarwal et al. (KDD 2024) measured citation lifts up to 40% from these tactics, with quotations adding 37% and statistics adding 22%.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does the user prompt affect which sources an AEO model picks?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The user prompt is the first filter every AEO model applies. The model rewrites the prompt into one or more retrieval queries, expands synonyms, and scopes the retrieval window. A query like "best plumber in Austin" produces different candidate sources than "who fixes slab leaks in Austin TX," even though the underlying intent overlaps. Content that uses multiple phrasings of the same topic qualifies for more prompts and earns more citation surface.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you reverse-engineer an AEO model to guarantee citations?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No engine publishes its exact ranking weights. What is reverse-engineerable is the structural pattern of cited sources, which is consistent across engines: cited passages are under 180 words, open with a direct answer, are wrapped in FAQ or Article schema, and come from domains with named authors and at least one third-party co-citation. Implementing these structural patterns is what produces durable citation gains, not gaming a specific ranking weight.',
            },
          },
        ],
      },
      {
        '@type': 'HowTo',
        '@id': `${URL}#howto`,
        name: 'How to Structure Content for AEO Model Citation',
        description: 'A six-step process for restructuring existing content so AEO models inside ChatGPT, Perplexity, Claude, and Gemini score it above their citation thresholds.',
        totalTime: 'PT45M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Audit chunk sizes on existing pages',
            text: 'Open your top 10 service or content pages. Measure the word count of each H3 section. Any section over 180 words triggers the chunk-ceiling penalty documented by GEO-SFE (2026). Split oversized sections into self-contained sub-chunks of 80 to 180 words each.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Rewrite section openings as direct answers',
            text: 'Every H3 section should answer its own heading question in the first sentence. Remove warmup phrases. Move the conclusion to the top. AEO models score the first sentence of a passage heaviest in relevance ranking.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Add FAQPage schema to top 5 pages',
            text: 'Wrap 5 to 10 question-answer pairs per page in FAQPage JSON-LD. Each answer should be 40 to 80 words. This is the highest-citation-potential schema type across all major AEO models.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Add named-author Article schema with credentials',
            text: 'Every article should carry Article schema with a Person author, credentials in the jobTitle field, and sameAs links to verifiable external profiles. AEO models score named, verifiable authors above anonymous content.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Synonym-bridge key terms within each section',
            text: 'Every key concept should appear with two or three synonym variants in the same section. AEO models expand user prompts into multiple query forms; content that matches multiple forms qualifies for more retrieval candidates.',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Measure citation rate monthly across all four engines',
            text: 'Run a fixed 20-query prompt library across ChatGPT, Perplexity, Gemini, and Google AI Mode. Log every citation. Track citation rate per engine. AEO models drift in their weighting over time; measurement is the only way to catch drift early.',
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://theanswerengine.ai/#professionalservice',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
        telephone: '+1-213-444-2229',
        email: 'support@theanswerengine.ai',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Los Angeles',
          addressRegion: 'CA',
          addressCountry: 'US',
        },
        areaServed: 'United States',
        founder: {
          '@type': 'Person',
          name: 'Justin Borges',
          '@id': 'https://theanswerengine.ai/about#justin-borges',
        },
        sameAs: ['https://linkedin.com/company/theanswerengine'],
      },
      {
        '@type': 'Organization',
        '@id': 'https://theanswerengine.ai/#organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
        logo: 'https://theanswerengine.ai/logo.png',
      },
      {
        '@type': 'WebPage',
        '@id': `${URL}#webpage`,
        url: URL,
        name: 'AEO Models: How AI Search Picks Sources',
        isPartOf: { '@id': 'https://theanswerengine.ai/#website' },
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
          { '@type': 'ListItem', position: 3, name: 'AEO Models: How AI Search Picks Sources', item: URL },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="aeo-models-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="min-h-screen bg-[#131313]">
        <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">

          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">AEO Models</span>
          </nav>

          {/* Hero */}
          <header className="ae-article-hero mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F27D24]">AEO Mechanism Series</span>
            </div>

            <h1 className="font-headline font-black uppercase tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05] mb-6">
              AEO MODELS: HOW AI SEARCH PICKS SOURCES
            </h1>

            <div className="article-summary bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] p-6 mb-8">
              <p className="font-body text-lg text-white leading-relaxed">
                <strong>Every AI search engine runs the same three-stage AEO model: retrieve candidate passages, score them on authority and structure, then decide whether each passage qualifies for citation.</strong> The weights differ between ChatGPT, Perplexity, Claude, Gemini, and Google AI Mode, but the architecture is shared. Sources that hit five structural signals — schema markup, FAQ format, named author, third-party co-citation, and chunk-bounded direct-answer openings — clear the citation threshold across every model. Sources that miss those signals inform the answer but get no attribution.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
              <span>14 MIN READ</span>
              <span>·</span>
              <span>UPDATED MAY 2026</span>
              <span>·</span>
              <span>BY JUSTIN BORGES</span>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="ae-stats-grid not-prose mb-10">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⚙️</div>
              <div className="ae-stat-value ae-accent">3-Stage</div>
              <div className="ae-stat-label">Retrieve → score → cite architecture shared across every major AEO model</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📈</div>
              <div className="ae-stat-value ae-accent">+40%</div>
              <div className="ae-stat-label">Maximum citation lift from nine optimization tactics (Aggarwal et al., KDD 2024)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🎯</div>
              <div className="ae-stat-value ae-accent">+57%</div>
              <div className="ae-stat-label">Influence premium on content opening with a clear definition (Zhang et al., 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⛔</div>
              <div className="ae-stat-value ae-accent">−31%</div>
              <div className="ae-stat-label">Attention degradation on passages over 300 words in RAG retrievers (GEO-SFE, 2026)</div>
            </div>
          </div>

          {/* Cheat Sheet TOC */}
          <div className="ae-cheat-sheet not-prose mb-12">
            <div className="ae-cheat-sheet-title">In This Article</div>
            <table>
              <tbody>
                <tr>
                  <td><a href="#what-is-an-aeo-model" className="text-[#F27D24] hover:underline">1.</a></td>
                  <td><a href="#what-is-an-aeo-model" className="text-gray-300 hover:text-white">What an AEO Model Actually Is</a></td>
                </tr>
                <tr>
                  <td><a href="#retrieval-hierarchy" className="text-[#F27D24] hover:underline">2.</a></td>
                  <td><a href="#retrieval-hierarchy" className="text-gray-300 hover:text-white">The Three-Stage Retrieval Hierarchy</a></td>
                </tr>
                <tr>
                  <td><a href="#authority-triad" className="text-[#F27D24] hover:underline">3.</a></td>
                  <td><a href="#authority-triad" className="text-gray-300 hover:text-white">The Five Signals AEO Models Score</a></td>
                </tr>
                <tr>
                  <td><a href="#engine-by-engine" className="text-[#F27D24] hover:underline">4.</a></td>
                  <td><a href="#engine-by-engine" className="text-gray-300 hover:text-white">How Each Major Engine Picks Sources</a></td>
                </tr>
                <tr>
                  <td><a href="#tae-method" className="text-[#F27D24] hover:underline">5.</a></td>
                  <td><a href="#tae-method" className="text-gray-300 hover:text-white">The TAE Origin Protocol Mapping</a></td>
                </tr>
                <tr>
                  <td><a href="#faq" className="text-[#F27D24] hover:underline">6.</a></td>
                  <td><a href="#faq" className="text-gray-300 hover:text-white">Frequently Asked Questions</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Article body */}
          <div className="ae-article-body prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-headline prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* Named-thesis opener */}
            <div className="ae-quote not-prose">
              <p><strong className="named-thesis">The Retrieval Hierarchy: every major AEO model — ChatGPT, Perplexity, Claude, Gemini, Google AI Mode — runs the same three-stage funnel (retrieve, score, cite), and a source that fails any stage is structurally invisible no matter how authoritative the brand is offline.</strong> The implication is direct: AEO is not about beating one ranking algorithm. It is about clearing three thresholds inside every engine simultaneously. This analysis draws on Aggarwal et al. (KDD 2024), Zhang et al. (2026), the GEO-SFE benchmark (2026), and 16 months of TAE client engagements measured against fixed prompt libraries. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>
            </div>

            {/* Section 1 */}
            <span className="ae-section-label" id="what-is-an-aeo-model">Definition</span>
            <h2>What an AEO Model Actually Is</h2>

            <h3>The plain-language definition</h3>
            <p>An AEO model is the internal pipeline an AI search engine uses to decide which sources to cite when answering a user query. Answer Engine Optimization (AEO) — also called AI citation optimization or LLM visibility — is the practice of structuring content so that pipeline scores it above the engine&apos;s citation threshold. Every major engine runs an AEO model, and every model can be reduced to three sequential stages: retrieve candidate passages from an index, score those passages on relevance and authority, and decide whether each scored passage clears the bar for inline attribution in the final response. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

            <h3>Why the model — not the engine — is what AEO targets</h3>
            <p>Brands and operators often treat ChatGPT, Perplexity, and Gemini as separate problems. The engines are separate. The underlying AEO model is shared. Aggarwal et al. (KDD 2024) tested nine optimization tactics across three different generative search engines and found that the same content interventions — quotations, statistics, structured data — produced citation lifts on all three, with magnitudes ranging from 22% to 40%. The lift is not engine-specific. It is signal-specific. Optimize for the AEO model architecture and the engine-level wins follow. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

            <h3>The field is younger than your content stack</h3>
            <p>The foundational academic work on AEO and Generative Engine Optimization (GEO) is less than two years old. The Aggarwal et al. paper at KDD 2024 was the first peer-reviewed measurement of optimization tactics on generative engines. The GEO-SFE benchmark followed in 2026 with the first standardized scoring framework for source-format extractability. The implication: anyone publishing AEO advice older than 24 months is working from pre-evidence intuition. The Answer Engine has run AEO against this academic literature on our own site since 2025 — 1.14M+ monthly impressions and citation presence across all four major LLMs — and we map every client engagement to the same protocol. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            {/* CTA 1 — calendly */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AEO Grader on your site now</a>

            {/* Section 2 */}
            <span className="ae-section-label" id="retrieval-hierarchy">Mechanism</span>
            <h2>The Three-Stage Retrieval Hierarchy</h2>

            <h3>Stage one: candidate retrieval</h3>
            <p>The first stage of every AEO model rewrites the user&apos;s natural-language prompt into one or more retrieval queries, expands synonyms, and pulls a candidate pool of passages from the engine&apos;s index. The size of the candidate pool varies — Perplexity typically retrieves 6 to 12 sources per answer, Google AI Mode pulls a wider net before scoring — but the function is identical. <strong className="named-thesis">The Prompt Mediation Layer: the user prompt is rewritten by the engine into multiple synonymous queries before retrieval, so content that uses two or three phrasings of the same concept qualifies for more retrieval candidates than content that uses one (Aggarwal et al., KDD 2024).</strong> The practical consequence: a service page that names &quot;slab leak repair,&quot; &quot;under-slab leak,&quot; and &quot;foundation pipe leak&quot; clears more retrieval queries than a page that uses only one phrasing. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            <h3>Stage two: relevance and authority scoring</h3>
            <p>The retrieved candidate passages are scored on two axes. Relevance scoring measures how closely the passage answers the rewritten query. Authority scoring measures structural and entity signals: schema markup presence, named author with credentials, third-party co-citations, indexed depth on the topic, freshness. Zhang et al. (2026) demonstrated that passages opening with a clear definition of their subject earned a 57% influence premium in the final response. The mechanism is mechanical: the scoring layer weights the first sentence of a passage heaviest, and a definition-first opening collides cleanly with both relevance and authority signals. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

            <h3>Stage three: citation threshold and inclusion</h3>
            <p>The final stage decides whether each scored passage clears the engine&apos;s citation threshold. Passages above the threshold are included in the response with inline attribution. Passages below the threshold may still inform the synthesized answer but receive no source mention. <strong className="named-thesis">The Citation Decision Tree: every AEO model runs a binary classifier at the inclusion stage that gates attribution behind a minimum extractability score, which is why a passage can shape the answer without ever being cited (GEO-SFE, 2026).</strong> The implication for operators: low-extractability content can still be read by the model and still lose attribution. Citation requires clearing both the relevance bar and the structural bar — not just one. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">The Three Stages in Sequence</div>
              <p><strong>Retrieve</strong> (prompt rewrite + index pull) → <strong>Score</strong> (relevance + authority) → <strong>Cite</strong> (threshold + inclusion). A source must clear all three. Failing any stage produces invisibility even if the brand is dominant offline. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            </div>

            {/* CTA 2 — blindspot */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AEO Grader on your site now</a>

            {/* Section 3 */}
            <span className="ae-section-label" id="authority-triad">The Signals</span>
            <h2>The Five Signals AEO Models Score</h2>

            <p>The scoring stage of every AEO model evaluates the same core signals, even when the relative weights differ between engines. The five signals below are the consistent levers across the academic literature and the TAE client measurement set. Optimizing for these five compounds across every engine. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            <h3>Signal 1: schema markup depth</h3>
            <p>Schema markup is the machine-readable label AEO models use to classify a passage. A page with FAQPage, Article, and LocalBusiness schema is pre-classified for the scoring layer. The model knows what the content is, who authored it, and what entity it describes. <strong className="named-thesis">The Schema Classification Effect: structured data raises the authority score by removing inference uncertainty, which is why pages with full schema stacks are cited at 2.8x the rate of equivalent unstructured pages in benchmark measurement (OtterlyAI, 2026).</strong> Schema markup is the lowest-cost, highest-yield AEO intervention. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            <h3>Signal 2: FAQ format and self-contained chunks</h3>
            <p>FAQPage schema produces the highest citation lift of any structured data type. The reason is mechanical: a question paired with a 40-to-80-word direct answer is the exact format the citation stage of every AEO model expects. The chunk is self-contained, the answer is verbatim-quotable, and the question matches user prompt language. GEO-SFE (2026) measured a 43% citation lift from list and table formatting alone. FAQ blocks combine both effects. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

            <h3>Signal 3: named author with verifiable credentials</h3>
            <p>The authority score weights attribution chain explicitly. An anonymous page is treated as lower-trust than a page authored by a named expert with sameAs links to verifiable external profiles. <strong className="named-thesis">The Verifiability Premium: content authored by named experts with sameAs schema links to external profiles clears the authority threshold at 1.9x the rate of anonymous content, because the model can trace the attribution chain (Chen et al., 2025).</strong> This is operational, not theoretical: adding a Person schema block with a sameAs LinkedIn URL takes ten lines of JSON-LD. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

            <h3>Signal 4: third-party co-citation</h3>
            <p>AEO models score sources higher when other indexed sources cite or mention the same entity. Press mentions, directory listings, association memberships, and review citations all contribute to the co-citation graph the authority score reads from. Chen et al. (2025) documented a systematic bias in AEO models toward earned media coverage over self-published brand content — meaning a press mention often outweighs your own service page on the same topic. Brands that have no third-party mentions are scoring against themselves. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <h3>Signal 5: chunk-bounded direct-answer openings</h3>
            <p>The extractability score in the citation stage measures whether a passage can be quoted verbatim without surrounding context. Aggarwal et al. (KDD 2024) measured that adding quotations to a passage produced a 37% citation lift; adding statistics produced 22%. Both work because they create discrete, attribution-ready facts inside a self-contained chunk. <strong className="named-thesis">The Chunk Ceiling: passages over 300 words trigger a 31% attention degradation in RAG retrievers, and splitting them into 80-to-180-word self-contained units restores full extraction accuracy (GEO-SFE, 2026).</strong> The 80-180 word window is the engineering target. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            <div className="not-prose overflow-x-auto my-8">
              <table className="ae-comparison-table w-full text-sm">
                <thead>
                  <tr>
                    <th>Signal</th>
                    <th>Mechanism</th>
                    <th>Citation Lift Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Schema markup depth</strong></td>
                    <td>Pre-classifies content type, author, entity for scoring layer</td>
                    <td>2.8x lift (OtterlyAI, 2026)</td>
                  </tr>
                  <tr>
                    <td><strong>FAQ format</strong></td>
                    <td>40-80 word answers match citation stage extract format</td>
                    <td>+43% on lists / tables (GEO-SFE, 2026)</td>
                  </tr>
                  <tr>
                    <td><strong>Named author</strong></td>
                    <td>sameAs chain produces verifiable authority trace</td>
                    <td>1.9x lift (Chen et al., 2025)</td>
                  </tr>
                  <tr>
                    <td><strong>Third-party co-citation</strong></td>
                    <td>External mentions raise entity authority graph score</td>
                    <td>Systematic earned-media bias (Chen et al., 2025)</td>
                  </tr>
                  <tr>
                    <td><strong>Direct-answer chunks</strong></td>
                    <td>Self-contained 80-180 word passages clear extractability bar</td>
                    <td>+37% quotations, +22% stats (Aggarwal et al., KDD 2024)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA 3 — territory */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AEO Grader on your site now</a>

            {/* Section 4 */}
            <span className="ae-section-label" id="engine-by-engine">Engine Mapping</span>
            <h2>How Each Major Engine Picks Sources</h2>

            <p>The three-stage AEO model is shared, but the per-engine weights diverge. Below is the operational read on each major engine, mapped to the AEO model architecture and validated against TAE&apos;s 16-month measurement set. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

            <h3>ChatGPT (OpenAI)</h3>
            <p>ChatGPT&apos;s search mode retrieves through Bing and weights structured data heavily in the scoring stage. Pages with full schema stacks are cited at materially higher rates than unstructured pages on identical topics. The citation threshold is high — ChatGPT prefers a smaller number of authoritative sources over a wide pool. Operational implication: Bing indexing health and Article + FAQPage schema are the two highest-yield ChatGPT levers. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <h3>Perplexity AI</h3>
            <p>Perplexity (also called Perplexity AI or Perplexity search) is the most retrieval-first of the major engines. Every answer pulls 6 to 12 sources before generation. Freshness is a primary ranking signal in the scoring stage. The citation threshold is lower than ChatGPT&apos;s, producing dense per-answer citation lists. Operational implication: publish or refresh content quarterly with visible publication dates, and structure for breadth across sub-question coverage. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <h3>Claude (Anthropic)</h3>
            <p>Claude weights citation-trail content with explicit attribution. The scoring stage favors sources that themselves cite primary research, name their data sources inline, and surface verifiable evidence chains. Claude is the engine most sensitive to the named-author and sameAs signals. Operational implication: Person schema with verifiable sameAs links and inline citation of primary sources lift Claude attribution disproportionately. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

            <h3>Gemini and Google AI Mode</h3>
            <p>Gemini and Google AI Mode share Google&apos;s entity graph for the authority scoring stage. Schema markup is read natively and entity verification is heavy. The citation threshold rewards LocalBusiness, AggregateRating, and HowTo schema together. Operational implication: a full Google schema stack — LocalBusiness with verified data, AggregateRating with real review counts, HowTo on process pages — is the fastest lever for Google AI Mode citation visibility. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            <div className="not-prose overflow-x-auto my-8">
              <table className="ae-comparison-table w-full text-sm">
                <thead>
                  <tr>
                    <th>Engine</th>
                    <th>Heaviest Scoring Signal</th>
                    <th>Citation Threshold</th>
                    <th>Highest-Yield Lever</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>ChatGPT</strong></td>
                    <td>Schema markup + Bing-indexed authority</td>
                    <td>High (selective)</td>
                    <td>Article + FAQPage schema, Bing indexing</td>
                  </tr>
                  <tr>
                    <td><strong>Perplexity</strong></td>
                    <td>Freshness + source diversity</td>
                    <td>Low (dense citation lists)</td>
                    <td>Quarterly refresh, sub-question breadth</td>
                  </tr>
                  <tr>
                    <td><strong>Claude</strong></td>
                    <td>Attribution chain + named author</td>
                    <td>Medium</td>
                    <td>Person schema sameAs, inline source citation</td>
                  </tr>
                  <tr>
                    <td><strong>Gemini / Google AI Mode</strong></td>
                    <td>Entity graph + structured data</td>
                    <td>Medium-high</td>
                    <td>Full Google schema stack with verified entities</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="ae-quote not-prose">
              <p><strong className="named-thesis">The Source Memory Decay: AEO model preference for a given source erodes within 60 to 90 days without fresh indexing signals (publication, update, third-party citation), because the authority score factors recency at every scoring pass (TAE client measurement, 2025-2026).</strong> Citation gained is not citation kept. AEO is a compounding cadence, not a one-time fix. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>
            </div>

            {/* CTA 4 — text/phone */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AEO Grader on your site now</a>

            {/* Section 5 */}
            <span className="ae-section-label" id="tae-method">TAE Method</span>
            <h2>The TAE Origin Protocol Mapping</h2>

            <h3>Why the Origin Protocol exists</h3>
            <p>The Origin Protocol is The Answer Engine&apos;s production process for engineering content against the three-stage AEO model. Every article, service page, and FAQ block we publish for an operator is built to clear all three stages on the four major engines simultaneously. The Protocol exists because reverse-engineering one engine produces fragile gains; engineering against the shared model architecture produces compound authority that survives ranking weight drift. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            <h3>What the Protocol enforces at production time</h3>
            <ul>
              <li><strong>Bounded chunks</strong> — every H3 section is 80 to 180 words, self-contained, no anaphora to surrounding context</li>
              <li><strong>Named-thesis sentences</strong> — every article ships with three or more coined-term mechanism statements anchored in cited research</li>
              <li><strong>Inline academic citation</strong> — Aggarwal et al. (KDD 2024), Zhang et al. (2026), GEO-SFE (2026), Chen et al. (2025) cited inline where mechanism claims appear</li>
              <li><strong>Synonym bridging</strong> — every key term appears with two or three variants in the same section, qualifying for more retrieval candidates</li>
              <li><strong>Full schema stack</strong> — Article, FAQPage, BreadcrumbList, ProfessionalService, WebPage, HowTo on every article</li>
              <li><strong>Verifiable author</strong> — Person schema with sameAs links to verifiable external profiles</li>
            </ul>

            <h3>The Proof Ledger: how we measure citation outcomes</h3>
            <p>Every Origin Protocol engagement runs against a fixed 20-query prompt library across ChatGPT, Perplexity, Claude, and Gemini, measured monthly. The Proof Ledger logs citation appearances per engine, per query, per month. Operators see the exact engines and exact queries their citation count moves on. Compound authority is measurable when the measurement cadence is fixed. <strong>This analysis draws on TAE&apos;s 16 months of client engagements running this protocol against the academic literature cited throughout this article.</strong> <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            <div className="ae-callout ae-callout-orange not-prose">
              <div className="ae-callout-title">The Operator Equation</div>
              <p>Three-stage AEO model + five structural signals + monthly measurement cadence = compound authority that survives engine ranking-weight drift. Anything less is a one-time spike followed by decay. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
            </div>

            {/* CTA 5 — email */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AEO Grader on your site now</a>

            {/* Section 6 — Quick-reference cheat */}
            <span className="ae-section-label">Quick Reference</span>
            <h2>AEO Model Cheat Sheet</h2>

            <div className="not-prose overflow-x-auto my-6">
              <table className="ae-comparison-table w-full text-sm">
                <thead>
                  <tr>
                    <th>If You Want To...</th>
                    <th>The AEO Model Stage Is...</th>
                    <th>The Highest-Yield Fix Is...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Get pulled into the candidate pool</td>
                    <td>Retrieval (stage 1)</td>
                    <td>Synonym-bridge key terms; cover sub-questions explicitly</td>
                  </tr>
                  <tr>
                    <td>Win the relevance + authority score</td>
                    <td>Scoring (stage 2)</td>
                    <td>Full schema stack + named author + definition-first H3 openings</td>
                  </tr>
                  <tr>
                    <td>Clear the citation threshold</td>
                    <td>Citation inclusion (stage 3)</td>
                    <td>Chunk-bounded 80-180 word passages, FAQ format, inline quotes / stats</td>
                  </tr>
                  <tr>
                    <td>Hold the citation across months</td>
                    <td>All three, ongoing</td>
                    <td>Quarterly content refresh + new FAQ cadence + co-citation building</td>
                  </tr>
                  <tr>
                    <td>Win Perplexity specifically</td>
                    <td>Scoring + threshold</td>
                    <td>Visible publication dates, quarterly refreshes, sub-question breadth</td>
                  </tr>
                  <tr>
                    <td>Win Gemini / Google AI Mode specifically</td>
                    <td>Scoring (authority graph)</td>
                    <td>LocalBusiness + AggregateRating + HowTo schema with verified entities</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA 6 — calendly */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AEO Grader on your site now</a>

            {/* Author Card */}
            <div className="not-prose ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24', flexShrink: 0 }}
              />
              <div>
                <div className="ae-author-name">Justin Borges</div>
                <div className="ae-author-role">Founder, The Answer Engine</div>
                <p className="ae-author-bio" style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(229,226,225,0.65)', lineHeight: 1.6 }}>Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. TAE&apos;s own site runs against the AEO model architecture described in this article — 1.14M+ monthly impressions, 4 of 4 LLMs cited. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
              </div>
            </div>

            {/* CTA Block */}
            <div className="ae-cta-block not-prose my-16">
              <h3>Run Your Free AEO Grader — See Exactly Where AI Ranks You</h3>
              <p>390 businesses/month search for AEO services. One wins your market. The AEO Grader scans your site against 47 citation signals and tells you your exact score — free, no login required.</p>
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Run Free AEO Grader →</a>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Strategy Call</a>
                <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
              </div>
            </div>

            {/* FAQ Section */}
            <span className="ae-section-label" id="faq">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">What is an AEO model?</summary>
              <p className="faq-answer mt-3 text-gray-300">An AEO model is the internal pipeline an AI search engine uses to retrieve, rank, and cite sources when generating an answer. Every major engine — ChatGPT, Perplexity, Gemini, Claude, Google AI Mode — runs a three-stage AEO model: retrieve candidate passages, score them on authority and relevance, and decide whether each passage qualifies for citation in the final response.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">How does AI search decide which sources to cite?</summary>
              <p className="faq-answer mt-3 text-gray-300">AI search engines score candidate passages on retrieval relevance, authority signals (schema, named author, third-party citations), and structural extractability (chunk size under 180 words, direct-answer openings, FAQ format). Sources that score above a per-query citation threshold are included in the response with attribution. Sources below the threshold inform the answer but are not cited.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">Are AEO models the same across ChatGPT, Perplexity, and Gemini?</summary>
              <p className="faq-answer mt-3 text-gray-300">The three-stage retrieve-score-cite architecture is shared, but the weights differ. Perplexity weights freshness and source diversity. ChatGPT weights structured data and Bing-indexed authority. Gemini and Google AI Mode weight schema markup and entity verification. Claude weights citation-trail content with explicit attribution. This is why a single domain may be cited heavily on Perplexity and invisible on ChatGPT.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">What signals do AEO models score most heavily?</summary>
              <p className="faq-answer mt-3 text-gray-300">Across all major AEO models, five signals carry the most weight: schema markup depth, FAQPage structured data, named author with verifiable credentials, third-party co-citations (press, directories, associations), and chunk-formatted content with direct-answer openings. Aggarwal et al. (KDD 2024) measured citation lifts up to 40% from these tactics, with quotations adding 37% and statistics adding 22%.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">How does the user prompt affect which sources an AEO model picks?</summary>
              <p className="faq-answer mt-3 text-gray-300">The user prompt is the first filter every AEO model applies. The model rewrites the prompt into one or more retrieval queries, expands synonyms, and scopes the retrieval window. A query like &quot;best plumber in Austin&quot; produces different candidate sources than &quot;who fixes slab leaks in Austin TX,&quot; even though the underlying intent overlaps. Content that uses multiple phrasings of the same topic qualifies for more prompts and earns more citation surface.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">Can you reverse-engineer an AEO model to guarantee citations?</summary>
              <p className="faq-answer mt-3 text-gray-300">No engine publishes its exact ranking weights. What is reverse-engineerable is the structural pattern of cited sources, which is consistent across engines: cited passages are under 180 words, open with a direct answer, are wrapped in FAQ or Article schema, and come from domains with named authors and at least one third-party co-citation. Implementing these structural patterns is what produces durable citation gains, not gaming a specific ranking weight.</p>
            </details>

            {/* CTA 7 — blindspot */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AEO Grader on your site now</a>

            {/* Related */}
            <span className="ae-section-label">Continue Reading</span>
            <h2>Related AEO Concepts</h2>

            <ul>
              <li><Link href="/blog/aeo-grader">AEO Grader: How to Score Your AI Search Visibility</Link></li>
              <li><Link href="/blog/how-perplexity-vs-chatgpt-grounding-differs">Perplexity vs ChatGPT: How AI Grounding Differs</Link></li>
              <li><Link href="/blog/aeo-vs-seo">AEO vs SEO: What is the Difference?</Link></li>
              <li><Link href="/blog/anatomy-of-an-ai-citation">Anatomy of an AI Citation</Link></li>
              <li><Link href="/blog/answer-engine-optimization-aeo-guide">Answer Engine Optimization: The Complete Guide</Link></li>
            </ul>

            {/* CTA 8 — calendly */}
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AEO Grader on your site now</a>

          </div>

          {/* Final CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                Your AEO Score Determines Who AI Recommends
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Every month 390 businesses search for AEO services. The Answer Engine's Origin Protocol gets businesses cited where competitors get ignored. One slot per market.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Get Your Free AEO Grader Score
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <a href="tel:+12134442229" className="hover:text-orange-400 transition-colors">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="hover:text-orange-400 transition-colors">Book Free Call</a>
                <a href="mailto:support@theanswerengine.ai" className="hover:text-orange-400 transition-colors">support@theanswerengine.ai</a>
              </div>
            </div>
          </section>

        </article>
      </div>
    </>
  );
}
