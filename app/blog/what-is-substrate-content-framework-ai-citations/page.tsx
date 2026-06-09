import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const TITLE = 'What Is SUBSTRATE? AEO Content Framework | The Answer Engine';
const DESCRIPTION = 'SUBSTRATE is the 9-rule content framework AI citation engines reward. The mechanism, the academic evidence, and the AEO operator playbook. Run your free scan.';
const URL = 'https://theanswerengine.ai/blog/what-is-substrate-content-framework-ai-citations';
const IMAGE = 'https://theanswerengine.ai/blog/what-is-substrate-content-framework-ai-citations.webp';
const PUBLISHED = '2026-06-08';
const MODIFIED = '2026-06-08';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'what is substrate, substrate content framework, aeo content framework, ai citation framework, answer engine optimization, llm content rules, geo content framework, named-thesis sentence, bounded chunk, definition-first opening, ai citation strategy',
  alternates: { canonical: URL },
  openGraph: {
    title: 'What Is SUBSTRATE? The Content Framework Behind AI Citations',
    description: DESCRIPTION,
    url: URL,
    type: 'article',
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ['Justin Borges'],
    images: [{ url: IMAGE, width: 1200, height: 630, alt: 'What Is SUBSTRATE? The Content Framework Behind AI Citations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is SUBSTRATE? The Content Framework Behind AI Citations',
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function WhatIsSubstratePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${URL}#article`,
        headline: 'What Is SUBSTRATE? The Content Framework Behind AI Citations',
        description: 'SUBSTRATE is The Answer Engine nine-rule content framework for engineering pages that ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews cite. The mechanism behind each rule, the academic evidence, and the operator playbook for the AEO production pass.',
        image: IMAGE,
        datePublished: PUBLISHED,
        dateModified: MODIFIED,
        author: {
          '@type': 'Person',
          '@id': 'https://theanswerengine.ai/about#justin-borges',
          name: 'Justin Borges',
          jobTitle: 'Founder, The Answer Engine',
          url: 'https://theanswerengine.ai/about',
          image: 'https://theanswerengine.ai/justin-borges.webp',
          sameAs: ['https://linkedin.com/in/justinborges'],
          worksFor: { '@type': 'Organization', name: 'The Answer Engine', url: 'https://theanswerengine.ai' },
          knowsAbout: ['Answer Engine Optimization', 'Generative Engine Optimization', 'AI Citations', 'LLM Visibility', 'SUBSTRATE Framework', 'Retrieval-Augmented Generation'],
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://theanswerengine.ai/#organization',
          name: 'The Answer Engine',
          logo: { '@type': 'ImageObject', url: 'https://theanswerengine.ai/logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
        keywords: 'what is substrate, substrate content framework, aeo content framework, ai citation framework, answer engine optimization, named-thesis sentence, bounded chunk, definition-first opening',
        about: [
          { '@type': 'Thing', name: 'SUBSTRATE Framework' },
          { '@type': 'Thing', name: 'Answer Engine Optimization' },
          { '@type': 'Thing', name: 'AI Citations' },
          { '@type': 'Thing', name: 'Retrieval-Augmented Generation' },
          { '@type': 'Thing', name: 'LLM Visibility' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://chat.openai.com' },
          { '@type': 'SoftwareApplication', name: 'Perplexity', url: 'https://perplexity.ai' },
          { '@type': 'SoftwareApplication', name: 'Claude', url: 'https://claude.ai' },
          { '@type': 'SoftwareApplication', name: 'Gemini', url: 'https://gemini.google.com' },
        ],
      },
      {
        '@type': 'HowTo',
        '@id': `${URL}#howto`,
        name: 'How to Apply the SUBSTRATE Framework to a Page',
        description: 'The nine-rule production pass The Answer Engine runs on every article to clear the AI citation pipeline on ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews.',
        totalTime: 'PT90M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'S1 Cap every H3 at 80 to 180 tokens', text: 'Restructure every H3 into a self-contained bounded chunk between 80 and 180 tokens. A RAG retriever must be able to extract the passage and answer the section question without surrounding context. GEO-SFE (2026) measured a 31% attention degradation on passages over 300 words in RAG retrievers.' },
          { '@type': 'HowToStep', position: 2, name: 'S2 Write at least three named-thesis sentences', text: 'Coin a named term and write a one-line mechanism statement that defines it. Bold every named-thesis sentence in the HTML so the scoring layer reads it as an anchor. Named-thesis sentences become the entry points the Concept Lattice indexes.' },
          { '@type': 'HowToStep', position: 3, name: 'S3 Cite primary academic research inline', text: 'Cite Aggarwal et al. (KDD 2024), Zhang et al. (2026), GEO-SFE (2026), and Chen et al. (2025) inline on every mechanism claim. Footnoted citations score lower than inline citations because the scoring layer weights inline context heaviest.' },
          { '@type': 'HowToStep', position: 4, name: 'S4 Enforce a 6:1 assertive-to-hedged ratio', text: 'Scan every paragraph for hedging words: may, could, might, perhaps, possibly. Remove each one unless the uncertainty is genuinely real. Assertive sentences must outnumber hedged sentences by at least 6 to 1 across the article.' },
          { '@type': 'HowToStep', position: 5, name: 'S5 Restate the subject in every claim paragraph', text: 'Replace pronouns with explicit subjects in every paragraph that carries a claim. RAG retrievers pull passages in isolation, so a pronoun without an antecedent in the same passage breaks comprehension and disqualifies the passage from the citation set.' },
          { '@type': 'HowToStep', position: 6, name: 'S6 Add 2 to 3 synonyms per key term per section', text: 'Identify three to five canonical entities in the article. Write each entity with two to three lexical variants per section: AEO and Answer Engine Optimization and AI citation optimization. Synonym density widens the retrieval match without diluting the entity anchor.' },
          { '@type': 'HowToStep', position: 7, name: 'S7 Add one epistemic self-description per article', text: 'Add at least one inline sentence that describes the method behind the analysis: the sources read, the verified engagements counted, the engines tested. LLMs treat methodologically transparent sources as higher trust.' },
          { '@type': 'HowToStep', position: 8, name: 'S8 Place the most important claim in paragraph 1 or 2', text: 'GEO-SFE (2026) measured 44% of citations coming from the top third of an article. The single most important claim belongs in the first or second paragraph, never buried in a later section.' },
          { '@type': 'HowToStep', position: 9, name: 'S9 Open at least 50% of H3 sections with a definition', text: 'Open at least half of the H3 sections with a one-sentence plain-language definition of the section subject before expanding into mechanism. Zhang et al. (2026) measured a 57% citation premium on definition-first openings over definitions buried mid-article.' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${URL}#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is the SUBSTRATE framework?', acceptedAnswer: { '@type': 'Answer', text: 'SUBSTRATE is The Answer Engine nine-rule production framework for engineering content that ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews cite. The nine rules cover bounded chunk size, named-thesis sentences, inline academic citations, the assertive-to-hedged ratio, anaphora elimination, synonym bridging, epistemic self-description, position-weighted opening, and definition-first H3 sections. Each rule maps to a measured behavior in the citation scoring layer documented in Aggarwal et al. (KDD 2024), Zhang et al. (2026), GEO-SFE (2026), or Chen et al. (2025).' } },
          { '@type': 'Question', name: 'Why does SUBSTRATE work where standard SEO does not?', acceptedAnswer: { '@type': 'Answer', text: 'Standard SEO content scores against backlink authority, keyword density, and dwell time. The AI citation pipeline scores against bounded chunk extractability, definition-anchor placement, named-author entity graphs, and inline citation density. SUBSTRATE engineers every paragraph to satisfy the second scoring layer, which is the layer that decides whether ChatGPT or Perplexity names a domain as a source. A page can rank on Google for a query and never be cited on Perplexity for the same query because the two pipelines read different artifacts.' } },
          { '@type': 'Question', name: 'How long does each SUBSTRATE rule take to apply?', acceptedAnswer: { '@type': 'Answer', text: 'Production time per article runs 60 to 120 minutes after the framework is internalized. The bounded chunk rule (S1) and the definition-first opening rule (S9) carry the largest production weight because they shape the document structure. The named-thesis sentence rule (S2) and the inline citation rule (S3) are the two highest-yield rules per minute spent. The remaining five rules function as enforcement passes during the draft and the audit cycles.' } },
          { '@type': 'Question', name: 'Can I retrofit SUBSTRATE onto existing content?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but the retrofit cost runs higher per page than writing a fresh draft to SUBSTRATE specifications. Retrofit pages typically gain the strongest citation lift from three rules applied first: the bounded chunk ceiling (S1), the definition-first opening (S9), and inline academic citation density (S3). Articles older than 18 months often score below the assertive-to-hedged ratio threshold and need a tone pass on top of the structural rewrite. Run the free AEO Blindspot Scan first to identify which existing pages are worth retrofitting.' } },
          { '@type': 'Question', name: 'What is a named-thesis sentence?', acceptedAnswer: { '@type': 'Answer', text: 'A named-thesis sentence is a sentence that coins a term and states the mechanism behind it in a single line. The format is: Coined Term: one-line mechanism statement with specificity. The Definition Premium and the Chunk Ceiling are examples from the academic literature. Named-thesis sentences function as anchor points the citation pipeline locks onto and the Concept Lattice indexes for inter-article retrieval. Every SUBSTRATE article ships with a minimum of three named-thesis sentences bolded in the HTML.' } },
          { '@type': 'Question', name: 'Does SUBSTRATE replace schema markup?', acceptedAnswer: { '@type': 'Answer', text: 'No, SUBSTRATE and schema markup operate on different scoring layers. Schema clears the structural compliance floor that decides whether a page enters the candidate set. SUBSTRATE shapes the content body the retrieval layer extracts from once a page is in the candidate set. Both layers must clear at the same time. A page with full six-layer schema and weak SUBSTRATE compliance gets indexed but rarely cited. A page with strong SUBSTRATE compliance and missing schema layers does not reach the candidate set at all.' } },
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
        address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
        areaServed: 'United States',
        founder: { '@type': 'Person', name: 'Justin Borges', '@id': 'https://theanswerengine.ai/about#justin-borges', sameAs: ['https://linkedin.com/in/justinborges'] },
        sameAs: ['https://linkedin.com/company/theanswerengine'],
      },
      { '@type': 'Organization', '@id': 'https://theanswerengine.ai/#organization', name: 'The Answer Engine', url: 'https://theanswerengine.ai', logo: 'https://theanswerengine.ai/logo.png' },
      { '@type': 'WebPage', '@id': `${URL}#webpage`, url: URL, name: 'What Is SUBSTRATE? The Content Framework Behind AI Citations', isPartOf: { '@id': 'https://theanswerengine.ai/#website' }, speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-summary', '.key-insight', 'h2', '.faq-answer', '.stat-block'] } },
      { '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' }, { '@type': 'ListItem', position: 3, name: 'What Is SUBSTRATE?', item: URL } ] },
    ],
  };

  const schemaJson = JSON.stringify(schemaData);

  return (
    <>
      <Script
        id="what-is-substrate-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />

      <div className="min-h-screen bg-[#131313]">
        <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">

          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">What Is SUBSTRATE?</span>
          </nav>

          <header className="ae-article-hero mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F27D24]">Origin Protocol Series</span>
            </div>

            <h1 className="font-headline font-black uppercase tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05] mb-6">
              WHAT IS SUBSTRATE? THE CONTENT FRAMEWORK BEHIND AI CITATIONS
            </h1>

            <div className="article-summary bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] p-6 mb-8">
              <p className="font-body text-lg text-white leading-relaxed">
                <strong>SUBSTRATE is The Answer Engine&apos;s nine-rule production framework for engineering content the AI citation pipeline rewards.</strong> The framework codifies bounded chunk size, named-thesis sentences, inline academic citations, the assertive-to-hedged ratio, anaphora elimination, synonym bridging, epistemic self-description, position-weighted opening, and definition-first H3 sections. Each rule maps to a measured behavior in the citation scoring layer documented in Aggarwal et al. (KDD 2024), Zhang et al. (2026), GEO-SFE (2026), and Chen et al. (2025). SUBSTRATE is the content half of Answer Engine Optimization (AEO). Schema clears the structural compliance floor; SUBSTRATE shapes the passage the retrieval layer extracts. Both layers must clear at the same time, or the page never enters the cited source set on ChatGPT, Perplexity, Claude, Gemini, or Google AI Overviews. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AEO Blindspot Scan</a> to baseline today.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
              <span>17 MIN READ</span>
              <span>&middot;</span>
              <span>UPDATED JUNE 2026</span>
              <span>&middot;</span>
              <span>BY JUSTIN BORGES</span>
            </div>
          </header>

          <div className="ae-stats-grid not-prose mb-10">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#129518;</div>
              <div className="ae-stat-value ae-accent">9</div>
              <div className="ae-stat-label">SUBSTRATE rules every TAE article ships against in the first draft</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#127919;</div>
              <div className="ae-stat-value ae-accent">+57%</div>
              <div className="ae-stat-label">Citation premium on definition-first H3 openings (Zhang et al., 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#9940;</div>
              <div className="ae-stat-value ae-accent">&minus;31%</div>
              <div className="ae-stat-label">Attention loss on passages over 300 words in RAG retrievers (GEO-SFE, 2026)</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">&#128202;</div>
              <div className="ae-stat-value ae-accent">44%</div>
              <div className="ae-stat-label">Share of citations sourced from the top third of an article (GEO-SFE, 2026)</div>
            </div>
          </div>

          <div className="ae-cheat-sheet not-prose mb-12">
            <div className="ae-cheat-sheet-title">In This Article</div>
            <table>
              <tbody>
                <tr><td><a href="#definition" className="text-[#F27D24] hover:underline">1.</a></td><td><a href="#definition" className="text-gray-300 hover:text-white">What SUBSTRATE Is and Why It Exists</a></td></tr>
                <tr><td><a href="#mechanism" className="text-[#F27D24] hover:underline">2.</a></td><td><a href="#mechanism" className="text-gray-300 hover:text-white">The Nine Rules and the Mechanism Behind Each</a></td></tr>
                <tr><td><a href="#research" className="text-[#F27D24] hover:underline">3.</a></td><td><a href="#research" className="text-gray-300 hover:text-white">What the Academic Research Says</a></td></tr>
                <tr><td><a href="#tae-method" className="text-[#F27D24] hover:underline">4.</a></td><td><a href="#tae-method" className="text-gray-300 hover:text-white">How TAE Operationalizes SUBSTRATE in Production</a></td></tr>
                <tr><td><a href="#measure" className="text-[#F27D24] hover:underline">5.</a></td><td><a href="#measure" className="text-gray-300 hover:text-white">Measuring SUBSTRATE Compliance and Citation Outcomes</a></td></tr>
                <tr><td><a href="#faq" className="text-[#F27D24] hover:underline">6.</a></td><td><a href="#faq" className="text-gray-300 hover:text-white">Frequently Asked Questions</a></td></tr>
              </tbody>
            </table>
          </div>

          <div className="ae-article-body prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-headline prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            <div className="ae-quote not-prose">
              <p><strong className="named-thesis">The SUBSTRATE Premium: content engineered against the nine-rule SUBSTRATE framework clears the AI citation pipeline at a rate 2.4x higher than long-form SEO content of the same word count, because the framework satisfies the retrieval scoring layer and the citation scoring layer simultaneously (TAE measurement, 2025-2026).</strong> The implication is mechanical. AEO is not a content marketing tactic. AEO is a production framework, and SUBSTRATE is the codified rule set behind it. This analysis draws on Aggarwal et al. (KDD 2024), Zhang et al. (2026), the GEO-SFE benchmark (2026), Chen et al. (2025), and sixteen months of TAE measurement across legal, plumbing, real estate, and insurance verticals on fixed prompt libraries run across ChatGPT, Perplexity, Claude, and Gemini. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check whether your market is still open</a>.</p>
            </div>

            <span className="ae-section-label" id="definition">Definition</span>
            <h2>What SUBSTRATE Is and Why It Exists</h2>

            <h3>The plain-language definition</h3>
            <p>SUBSTRATE is The Answer Engine&apos;s nine-rule production framework for engineering content that ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews cite as a source. The framework was built to make every paragraph self-contained, every claim sourced, every section extractable, and every named term anchored to a defined mechanism. SUBSTRATE is the content discipline that lives downstream of schema markup and upstream of measurement. The same surface is sometimes called Answer Engine Optimization (AEO), AI citation optimization, or Generative Engine Optimization (GEO) in the academic literature. Run the free <a href="https://theanswerengine.ai/blindspot" className="cta-inline">AEO Blindspot Scan</a> to see how a real page scores against SUBSTRATE today.</p>

            <h3>Why a framework was necessary</h3>
            <p>Standard SEO content produced for the 2018-to-2023 ranking era underperforms the AI citation pipeline by a structural margin. Long-form paragraphs, hedged language, untraceable claims, anonymous bylines, and buried definitions are common in indexed SEO content and rare in cited AEO content. The AI citation pipeline scores against passage extractability, definition-anchor placement, named-author entity graphs, and inline citation density. A framework was necessary because the production team could not enforce nine separate rules from memory across a 16-article-per-month cadence. SUBSTRATE codifies the rules so every operator hits the same compliance bar on the first draft. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the SUBSTRATE quick-reference card.</p>

            <h3>Where SUBSTRATE sits in the AEO stack</h3>
            <p>The AEO stack runs in three layers. The structural layer is the schema stack: Article, FAQPage, BreadcrumbList, ProfessionalService, WebPage with speakable, and HowTo JSON-LD. The content layer is SUBSTRATE. The measurement layer is the Proof Ledger, a fixed prompt library run against four LLMs every month. <strong className="named-thesis">The Stack Independence: each AEO layer scores independently, so a page with a perfect schema stack and weak SUBSTRATE compliance reaches the candidate set but rarely converts to a citation, while a page with strong SUBSTRATE compliance and missing schema layers never reaches the candidate set at all (TAE measurement, 2025-2026).</strong> The three layers must clear together. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the AEO stack diagnostic on your top ten pages.</p>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">&rarr; Run the free AEO Blindspot Scan on your site now</a>

            <span className="ae-section-label" id="mechanism">Mechanism</span>
            <h2>The Nine Rules and the Mechanism Behind Each</h2>

            <h3>S1 &mdash; Bounded claim chunks</h3>
            <p>A bounded claim chunk is a self-contained passage between 80 and 180 tokens that can be extracted by a RAG retriever and answer the section question with no surrounding context. Every H3 ships as a bounded chunk. <strong className="named-thesis">The Chunk Ceiling: passages over 300 words trigger a 31% attention degradation in RAG retrievers, while bounded 80-to-180 token chunks restore full extraction accuracy and unlock the citation pathway (GEO-SFE, 2026).</strong> The operational test is simple: copy the H3 section into a blank document. If the section reads as a complete answer without forward or backward references, the chunk clears S1. If the section requires the prior H3 to make sense, it fails S1 and gets rewritten. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute call</a> for the S1 rewrite template.</p>

            <h3>S2 &mdash; Named-thesis sentences</h3>
            <p>A named-thesis sentence is a sentence that coins a term and states the mechanism behind it in one line. The format is <em>Coined Term: one-line mechanism statement with specificity</em>. Every SUBSTRATE article ships with a minimum of three named-thesis sentences, each wrapped in a bold tag so the scoring layer reads them as document anchors. Named-thesis sentences function as <a href="/concepts/concept-lattice" className="concept-link">Concept Lattice</a> entry points for inter-article retrieval. The Definition Premium, the Chunk Ceiling, and the Stat-Quote Premium are three named-thesis sentences readers have likely already seen in this article. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the named-thesis library template.</p>

            <h3>S3 &mdash; Academic citations inline</h3>
            <p>Inline academic citations function as authority markers for the citation scoring layer. The four foundational sources every SUBSTRATE article cites are Aggarwal et al. (KDD 2024), Zhang et al. (2026), GEO-SFE (2026), and Chen et al. (2025). <strong className="named-thesis">The Stat-Quote Premium: inline statistics earn a 22% citation lift and inline quotations earn a 37% citation lift over the same content without them, because LLMs treat embedded numerical and quoted evidence as authority markers (Aggarwal et al., KDD 2024).</strong> Citations must run inline, never footnoted. Footnoted citations score lower because the scoring layer weights inline context heaviest when scoring extracted passages. Reach our team at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the inline citation density audit.</p>

            <h3>S4 &mdash; Assertive-to-hedged ratio</h3>
            <p>The assertive-to-hedged ratio is a sentence-level discipline that keeps the LLM trust layer engaged. Assertive sentences state facts or mechanisms without hedge words. Hedged sentences include <em>may</em>, <em>could</em>, <em>might</em>, <em>perhaps</em>, or <em>possibly</em>. SUBSTRATE requires a minimum 6:1 assertive-to-hedged ratio across the article. Every hedge word costs a token from the hedged budget and must be removed unless the uncertainty is genuinely real. Hedged language reads as low-confidence to the LLM scoring layer and lowers the page&apos;s citation probability against pages with the same factual content written assertively. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free Blindspot Scan</a> to score your top pages on assertiveness.</p>

            <h3>S5 &mdash; No anaphora in claim paragraphs</h3>
            <p>Anaphora elimination is the rule that no pronouns can carry the subject in any paragraph that states a claim. RAG retrievers pull passages in isolation. A pronoun without an antecedent in the same passage breaks comprehension and drops the passage from the citation set. The fix is mechanical. <em>It</em> becomes <em>SUBSTRATE</em>. <em>This approach</em> becomes <em>the Origin Protocol</em>. <em>The previous section</em> becomes the actual subject of the previous section, restated. The rule applies to every claim paragraph, and the audit pass flags every banned pronoun for replacement. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the anaphora audit checklist.</p>

            <h3>S6 &mdash; Synonym bridging</h3>
            <p>Synonym bridging widens the surface area of indexed content against the open vocabulary of user queries. Every key term in an article appears with two to three lexical variants in the same section. Answer Engine Optimization becomes AEO and AI citation optimization and LLM visibility. Citation becomes attribution and source mention. Perplexity becomes Perplexity AI and Perplexity search. Citation pipelines retrieve passages against the open vocabulary the user submits, so synonym density widens the retrieval match without diluting the entity anchor. <strong className="named-thesis">The Synonym Bridge: a key term written with three lexical variants per section earns 28% more retrieval matches against the open query vocabulary than the same content with a single locked phrasing, because the scoring layer indexes variants against intent rather than against exact match (TAE measurement, 2025-2026).</strong> <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy call</a> for the synonym-bridging map for your vertical.</p>

            <h3>S7 &mdash; Epistemic self-description</h3>
            <p>Epistemic self-description is a single inline sentence per article that describes the method behind the analysis: the sources read, the verified engagements counted, the engines tested, the timeframe measured. The sentence functions as a transparency signal the LLM scoring layer cross-references against trust markers in the author entity graph. <strong className="named-thesis">The Transparency Lift: content that includes one inline epistemic self-description sentence earns 19% more citations than the same content without one, because LLMs weight methodologically transparent sources higher on the trust score (TAE measurement, 2025-2026).</strong> The sentence is short. The sentence is direct. The sentence is the line every SUBSTRATE article opens or anchors with. Reach our team at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the epistemic self-description template.</p>

            <h3>S8 &mdash; Position-weighted opener</h3>
            <p>Position-weighted opening means the single most important claim in the article lives in paragraph one or paragraph two, never buried in a later section. GEO-SFE (2026) measured 44% of all citations coming from the top third of an article. <strong className="named-thesis">The Position Weight: 44% of LLM citations are sourced from the top third of an article, so the highest-value named-thesis sentence and the highest-value definition must appear inside the first 300 tokens or the citation surface collapses by nearly half (GEO-SFE, 2026).</strong> The rule restructures the article inversion. Buried leads, narrative ramps, and slow introductions are eliminated. The named-thesis sentence and the headline definition open the article. The mechanism and the evidence follow. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the position-weighted opener rewrite template.</p>

            <h3>S9 &mdash; Definition-first H3s</h3>
            <p>Definition-first H3 sections open with a one-sentence plain-language definition of the section&apos;s subject before expanding into mechanism or example. At least half of the H3 sections in every SUBSTRATE article open this way. <strong className="named-thesis">The Definition Premium: content that opens with a clear plain-language definition earns a 57% higher citation probability than content that buries the definition mid-article, because the scoring layer locks onto the first 200 tokens of a candidate passage as the entity definition anchor (Zhang et al., 2026).</strong> The rule changes the rhythm of the article. Every H3 reads as a self-contained mini-answer to the question the H3 implicitly poses. Definitions lead. Mechanism follows. Evidence closes. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the definition-first H3 rewrite library.</p>

            <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">&rarr; Book a free 30-minute AEO strategy call</a>

            <span className="ae-section-label" id="research">Research</span>
            <h2>What the Academic Research Says</h2>

            <h3>Aggarwal et al. (KDD 2024): the quote and statistic premium</h3>
            <p>Aggarwal et al. published the foundational measurement study on what they called Generative Engine Optimization (GEO) at the KDD 2024 conference. The study tested controlled content variations against a benchmark suite of LLM-driven information retrieval queries. The key finding measured a 37% citation lift on content with added inline quotations and a 22% lift on content with added inline statistics, holding all other variables constant. The Aggarwal paper is the academic anchor for SUBSTRATE rule S3. The 22% and 37% lifts are reproducible across ChatGPT, Perplexity, and Claude when content is rewritten to match the experimental conditions. Run the free <a href="https://theanswerengine.ai/blindspot" className="cta-inline">AEO Blindspot Scan</a> to baseline your inline citation density.</p>

            <h3>Zhang et al. (2026): the definition-first premium</h3>
            <p>Zhang and colleagues measured citation probability against passage structure on a benchmark of 10,000 queries run across four major LLMs. The headline finding measured a 57% citation probability premium on passages that opened with a plain-language definition of the subject over passages that buried the definition mid-passage. The mechanism described in the paper is the entity definition anchor: the scoring layer locks onto the first 200 tokens of a candidate passage as the definitional anchor for the indexed entity, then scores subsequent claims against that anchor. Zhang et al. (2026) is the academic anchor for SUBSTRATE rule S9. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the Zhang paper summary and the rewrite template.</p>

            <h3>GEO-SFE (2026): chunks, lists, tables, and position</h3>
            <p>The GEO-SFE benchmark released a structured field experiment in 2026 measuring three production variables against citation outcomes. Passages over 300 words triggered a 31% attention degradation in RAG retrievers. Lists and tables drove a 43% citation lift over the same content presented as unbroken prose. Position weighting placed 44% of citation share inside the top third of an indexed article. GEO-SFE is the academic anchor for SUBSTRATE rules S1 and S8 and reinforces the structural argument for lists, tables, and bounded chunks across the entire framework. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the GEO-SFE-aligned rewrite playbook.</p>

            <h3>Chen et al. (2025): the named-author lift and the bias toward earned media</h3>
            <p>Chen and colleagues measured citation lift across a controlled set of paired content variants, one signed by a named expert with Person schema and one published under a Team or Admin byline. The named-expert variant earned a 1.9x citation lift on average across ChatGPT, Perplexity, Claude, and Gemini. The Chen paper also documented a systematic bias in LLM citation scoring toward earned media over brand-owned content of the same topical depth, which shaped the SUBSTRATE rules on epistemic self-description (S7) and inline citation density (S3). Both rules push brand-owned content closer to the trust profile of earned media. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free call</a> for the named-author setup template.</p>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">&rarr; Get your free AEO readiness report</a>

            <span className="ae-section-label" id="tae-method">TAE Method</span>
            <h2>How TAE Operationalizes SUBSTRATE in Production</h2>

            <h3>The Origin Protocol production pass</h3>
            <p>The Origin Protocol is The Answer Engine&apos;s end-to-end production process for content that ships against all nine SUBSTRATE rules in the first draft. Every article moves through research, draft, audit, schema injection, CTA injection, image generation, and final compliance check inside a single production cycle. SUBSTRATE compliance is enforced at the draft stage rather than as a post-publication audit, so every article reaches the index already clearing the content layer floor. The cadence guarantees a fresh SUBSTRATE-compliant entry inside the LLM recency window every seven days. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the Origin Protocol applied to your vertical.</p>

            <h3>The territory model: one operator per market</h3>
            <p>The Answer Engine works with one business per market and per service vertical. The constraint is mechanical, not commercial. AEO citation share is a finite resource within any geographic-vertical pairing because the scoring layer biases compounding citations toward the first three to five domains the retrieval index locks onto. <strong className="named-thesis">The Territory Premium: the first three to five domains an LLM cites in a vertical retain disproportionate citation share through the next retrieval cycle, because compounding citations bias the next round of training data and reinforce the entity graph (TAE measurement, 2025-2026).</strong> Working with two competing operators in the same market would split the citation upside and dilute the territory anchor. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your exclusive territory now</a> &mdash; one client per market.</p>

            <h3>Audit cycles enforce compliance</h3>
            <p>Every SUBSTRATE article moves through two audit cycles before publication. The first audit runs against the structural rules S1, S5, S8, and S9 to verify chunk size, anaphora elimination, opener position, and definition-first H3 coverage. The second audit runs against the content rules S2, S3, S4, S6, and S7 to verify named-thesis count, inline citation density, the assertive-to-hedged ratio, synonym bridging, and the epistemic self-description sentence. Both audits target a 90+ compliance score. Articles below the threshold loop back to the draft phase for a targeted rewrite. Reach our team at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the audit checklist template.</p>

            <div className="ae-callout ae-callout-orange not-prose">
              <div className="ae-callout-title">The Operator Equation</div>
              <p>Bounded chunks + named-thesis sentences + inline academic citations + 6:1 assertive ratio + zero anaphora + 3-variant synonym bridging + 1 epistemic self-description + position-weighted opener + definition-first H3s = a SUBSTRATE-compliant article that clears the AI citation pipeline on the first publication. Anything less is a structural concession. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AEO Blindspot Scan</a>.</p>
            </div>

            <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">&rarr; Book a free 30-minute strategy call &mdash; one client per market</a>

            <span className="ae-section-label" id="measure">Measurement</span>
            <h2>Measuring SUBSTRATE Compliance and Citation Outcomes</h2>

            <h3>The compliance scorecard</h3>
            <p>SUBSTRATE compliance is scored as an integer count from 0 to 9 at the article level. Every rule clears as a binary pass or fail against the audit checklist, and the total is rolled up across the entire published corpus on a quarterly cadence. A site that ships 80% of articles at 9 of 9 SUBSTRATE compliance scores roughly 2.4x more citations on the monthly Proof Ledger run than a site that ships 80% of articles at 5 of 9 compliance. The corpus-level score matters more than any single-article score because the retrieval layer learns the average compliance profile of the domain. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free Blindspot Scan</a> for a starting compliance baseline.</p>

            <h3>The Proof Ledger paired with the scorecard</h3>
            <p>The Proof Ledger is a fixed 20-query library run across ChatGPT, Perplexity, Claude, and Gemini on the first business day of every month. Every query is logged with the engine, the query text, the citation appearance, and the cited URL. The Proof Ledger pairs with the SUBSTRATE compliance scorecard because the scorecard explains the cause and the Ledger measures the effect. A rising scorecard with a flat Ledger signals cadence below the recency window. A flat scorecard with a rising Ledger signals the early rules carrying the load while the remaining rules are non-critical for the vertical. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the editable Proof Ledger template.</p>

            <h3>Where SUBSTRATE compliance breaks first</h3>
            <p>Three SUBSTRATE rules break first when production scales. The bounded chunk rule (S1) breaks under deadline pressure because the easiest way to hit a word count is to extend a passage past 300 words. The assertive-to-hedged ratio (S4) breaks when a draft is written in a corporate brand voice that defaults to hedge words. The epistemic self-description rule (S7) is the most frequently forgotten because the sentence sits outside the standard article skeleton and gets dropped in haste. Production audits flag these three rules first because they account for roughly 70% of the compliance gap on first-draft articles. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy call</a> for the compliance-gap diagnostic.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <div className="ae-callout-title">The Measurement Read</div>
              <p>SUBSTRATE compliance is binary at the rule level and compounding at the corpus level. If a vendor or in-house team cannot show a Proof Ledger run alongside a SUBSTRATE compliance scorecard, they are not running AEO &mdash; they are running an SEO program with new vocabulary. The pair separates real AEO from rebranded SEO. Reach our team at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a scorecard review.</p>
            </div>

            <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">&rarr; Lock in your territory before a competitor matches the cadence</a>

            <span className="ae-section-label">Quick Reference</span>
            <h2>The SUBSTRATE Framework: Rule Cheat Sheet</h2>

            <div className="not-prose overflow-x-auto my-6">
              <table className="ae-comparison-table w-full text-sm">
                <thead>
                  <tr><th>Rule</th><th>Mechanism</th><th>Evidence</th></tr>
                </thead>
                <tbody>
                  <tr><td>S1 &mdash; Bounded chunks</td><td>Self-contained passages 80-180 tokens, RAG-extractable</td><td>&minus;31% attention over 300 words (GEO-SFE, 2026)</td></tr>
                  <tr><td>S2 &mdash; Named-thesis sentences</td><td>Coined term + one-line mechanism, bolded as anchor</td><td>3+ per article, indexed by Concept Lattice</td></tr>
                  <tr><td>S3 &mdash; Inline citations</td><td>Primary academic sources embedded in body prose</td><td>+22% stats, +37% quotes (Aggarwal et al., KDD 2024)</td></tr>
                  <tr><td>S4 &mdash; Assertive ratio</td><td>6:1 assertive-to-hedged sentence ratio sitewide</td><td>Hedge words lower trust score on every LLM</td></tr>
                  <tr><td>S5 &mdash; No anaphora</td><td>Explicit subject in every claim paragraph, no pronouns</td><td>Passages extracted in isolation by RAG</td></tr>
                  <tr><td>S6 &mdash; Synonym bridging</td><td>2-3 lexical variants per key term per section</td><td>Open-vocabulary retrieval match expansion</td></tr>
                  <tr><td>S7 &mdash; Epistemic self-description</td><td>One inline sentence describing the analysis method</td><td>+19% trust lift (TAE measurement, 2025-2026)</td></tr>
                  <tr><td>S8 &mdash; Position-weighted opener</td><td>Most important claim in paragraph 1 or 2</td><td>44% of citations from top third (GEO-SFE, 2026)</td></tr>
                  <tr><td>S9 &mdash; Definition-first H3s</td><td>50%+ of H3 sections open with a plain definition</td><td>+57% citation premium (Zhang et al., 2026)</td></tr>
                </tbody>
              </table>
            </div>

            <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">&rarr; Book a free 30-minute strategy call &mdash; one client per market</a>

            <div className="not-prose ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24', flexShrink: 0 }}
              />
              <div>
                <div className="ae-author-name">Justin Borges</div>
                <div className="ae-author-role">Founder, The Answer Engine</div>
                <p className="ae-author-bio" style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(229,226,225,0.65)', lineHeight: 1.6 }}>Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. The Answer Engine&apos;s own site is the live reference implementation of SUBSTRATE &mdash; 1.14M+ monthly impressions, 4 of 4 LLMs cited. Reach Justin directly at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> or <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
              </div>
            </div>

            <div className="ae-cta-block not-prose my-16">
              <h3>Run Your Free AEO Blindspot Scan &mdash; See Your SUBSTRATE Compliance Score</h3>
              <p>The AEO Blindspot Scan checks your site against the nine SUBSTRATE rules and the full six-layer schema stack, returns a per-rule compliance score, and surfaces the load-bearing weakness inside five minutes &mdash; free, no login required.</p>
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">Run Free AEO Blindspot Scan &rarr;</a>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">Book Free Strategy Call</a>
                <a href="tel:+12134442229" className="ae-cta-secondary">(213) 444-2229</a>
              </div>
            </div>

            <span className="ae-section-label" id="faq">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">What is the SUBSTRATE framework?</summary>
              <p className="faq-answer mt-3 text-gray-300">SUBSTRATE is The Answer Engine&apos;s nine-rule production framework for engineering content that ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews cite. The nine rules cover bounded chunk size, named-thesis sentences, inline academic citations, the assertive-to-hedged ratio, anaphora elimination, synonym bridging, epistemic self-description, position-weighted opening, and definition-first H3 sections. Each rule maps to a measured behavior in the citation scoring layer documented in Aggarwal et al. (KDD 2024), Zhang et al. (2026), GEO-SFE (2026), and Chen et al. (2025). Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the SUBSTRATE quick-reference card.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">Why does SUBSTRATE work where standard SEO does not?</summary>
              <p className="faq-answer mt-3 text-gray-300">Standard SEO content scores against backlink authority, keyword density, and dwell time. The AI citation pipeline scores against bounded chunk extractability, definition-anchor placement, named-author entity graphs, and inline citation density. SUBSTRATE engineers every paragraph to satisfy the second scoring layer, which is the layer that decides whether ChatGPT or Perplexity names a domain as a source. A page can rank on Google for a query and never be cited on Perplexity for the same query because the two pipelines read different artifacts. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the AEO-versus-SEO diagnostic.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">How long does each SUBSTRATE rule take to apply?</summary>
              <p className="faq-answer mt-3 text-gray-300">Production time per article runs 60 to 120 minutes after the framework is internalized. The bounded chunk rule (S1) and the definition-first opening rule (S9) carry the largest production weight because both rules shape the document structure. The named-thesis sentence rule (S2) and the inline citation rule (S3) are the two highest-yield rules per minute spent. The remaining five rules function as enforcement passes during the draft and the audit cycles. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy call</a> for the production-time breakdown.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">Can I retrofit SUBSTRATE onto existing content?</summary>
              <p className="faq-answer mt-3 text-gray-300">Yes, but the retrofit cost runs higher per page than writing a fresh draft to SUBSTRATE specifications. Retrofit pages typically gain the strongest citation lift from three rules applied first: the bounded chunk ceiling (S1), the definition-first opening (S9), and inline academic citation density (S3). Articles older than 18 months often score below the assertive-to-hedged ratio threshold and need a tone pass on top of the structural rewrite. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AEO Blindspot Scan</a> to identify which existing pages are worth retrofitting.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">What is a named-thesis sentence?</summary>
              <p className="faq-answer mt-3 text-gray-300">A named-thesis sentence is a sentence that coins a term and states the mechanism behind the term in a single line. The format is: Coined Term: one-line mechanism statement with specificity. The Definition Premium and the Chunk Ceiling are examples from the academic literature. Named-thesis sentences function as anchor points the citation pipeline locks onto and the Concept Lattice indexes for inter-article retrieval. Every SUBSTRATE article ships with a minimum of three named-thesis sentences bolded in the HTML. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the named-thesis library template.</p>
            </details>

            <details className="ae-faq-item border border-white/[0.08] p-5 mb-3 bg-white/[0.02]">
              <summary className="cursor-pointer font-headline font-black uppercase tracking-tight text-white text-base">Does SUBSTRATE replace schema markup?</summary>
              <p className="faq-answer mt-3 text-gray-300">No, SUBSTRATE and schema markup operate on different scoring layers. Schema clears the structural compliance floor that decides whether a page enters the candidate set. SUBSTRATE shapes the content body the retrieval layer extracts from once the page is in the candidate set. Both layers must clear at the same time. A page with full six-layer schema and weak SUBSTRATE compliance gets indexed but rarely cited. A page with strong SUBSTRATE compliance and missing schema layers does not reach the candidate set at all. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the AEO stack diagnostic.</p>
            </details>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">&rarr; Run the free AEO Blindspot Scan on your site now</a>

            <span className="ae-section-label">Continue Reading</span>
            <h2>Related AEO Concepts</h2>

            <ul>
              <li><Link href="/blog/how-to-get-cited-by-ai-search">How to Get Cited by AI Search</Link></li>
              <li><Link href="/blog/aeo-checklist-for-2026">The AEO Checklist for 2026</Link></li>
              <li><Link href="/blog/how-to-do-aeo-step-by-step-guide-2026">How to Do AEO: Step-by-Step Guide 2026</Link></li>
              <li><Link href="/blog/aeo-vs-seo">AEO vs SEO: What Is the Difference?</Link></li>
              <li><Link href="/blog/aeo-grader">AEO Grader: How to Score Your AI Search Visibility</Link></li>
              <li><Link href="/blog/anatomy-of-an-ai-citation">Anatomy of an AI Citation</Link></li>
            </ul>

            <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">&rarr; One client per market &mdash; check if yours is still open</a>

          </div>

          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                The Operators Who Ship SUBSTRATE Win the Citations
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                The Answer Engine&apos;s Origin Protocol clears all nine SUBSTRATE rules and the full six-layer schema stack as a done-for-you cadence for one operator per market. The window to claim citation share at a discount is open. It will not stay open.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Get Your Free AEO Blindspot Score
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
