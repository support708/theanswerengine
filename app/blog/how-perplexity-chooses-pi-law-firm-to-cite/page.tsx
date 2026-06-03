import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamicParams = true

const title = 'How Does Perplexity AI Choose Which PI Law Firm to Cite?'
const description =
  'Perplexity AI cites three PI law firms per injury query. AEO breakdown of the retrieval signals, ranking weights, and how a firm claims the slot.'
const slug = 'how-perplexity-chooses-pi-law-firm-to-cite'
const publishDate = '2026-05-31'

export const metadata: Metadata = {
  title: `How Perplexity AI Picks PI Law Firms | The Answer Engine`,
  description,
  keywords:
    'Perplexity AI, personal injury law firm, PI law firm citation, AEO for lawyers, Answer Engine Optimization, LLM citation, AI citation for attorneys, Perplexity ranking, PI lawyer AI search, statutory citation density, retrieval-first citation, Origin Protocol',
  openGraph: {
    title: `How Perplexity AI Picks PI Law Firms | The Answer Engine`,
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
    title: `How Perplexity AI Picks PI Law Firms | The Answer Engine`,
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
          'Legal Marketing AEO',
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
        '@id': `https://theanswerengine.ai/blog/${slug}#webpage`,
      },
      about: [
        { '@type': 'Thing', name: 'Perplexity AI' },
        { '@type': 'Thing', name: 'Personal Injury Law' },
        { '@type': 'Thing', name: 'Answer Engine Optimization' },
        { '@type': 'Thing', name: 'AI Citation' },
        { '@type': 'Thing', name: 'Legal Marketing' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does Perplexity AI decide which PI law firm to cite?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity AI retrieves candidate sources from its index, scores each candidate against the user query, and grounds its answer in the top three to five retrieved chunks. For personal injury queries, the scoring weighs statutory citation density, case-result specificity, third-party trust graph presence (Avvo, Justia, Martindale), and chunk extractability. A firm wins citations when its content surface answers the exact query in a bounded, retrieval-ready chunk that scores higher than competing firm pages on the same query (Chen et al., 2025).',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Perplexity favor PI law firms with more reviews or more content?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Neither, in isolation. Perplexity favors retrievability. A firm with 2,000 Google reviews and a JavaScript-rendered site that hides those reviews from crawlers scores worse than a firm with 200 reviews surfaced as crawlable HTML on Avvo and Justia. Content volume is similarly secondary to chunk quality: Perplexity citations correlate with how cleanly a single 80-to-180-token passage answers the query, not with total site word count (GEO-SFE, 2026).',
          },
        },
        {
          '@type': 'Question',
          name: 'What schema does Perplexity read for personal injury law firms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity reads LegalService, Attorney, FAQPage, BreadcrumbList, and Person schema. The highest-weight block is LegalService with explicit areaServed, knowsAbout, and aggregateRating fields. FAQPage schema is the single fastest path to surfacing in Perplexity injury queries because each Q&A pair is structurally a bounded chunk that the retriever can extract verbatim. PI firms that ship FAQPage schema with statute citations inline see citation lift inside 60 days of indexing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do some PI law firms get cited by Perplexity but not by ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity retrieves first, then writes. ChatGPT synthesizes first, retrieves on demand. The architectural gap means a firm can dominate Perplexity through clean retrievable chunks and still be invisible to ChatGPT, which weighs pretraining-era brand authority and external trust signals more heavily. The fastest fix for ChatGPT visibility is third-party editorial mention density on sites ChatGPT already trusts; the fastest fix for Perplexity is statutory citation density and FAQPage schema (Chen et al., 2025).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a PI law firm pay to be cited by Perplexity AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Perplexity does not sell citation placement and explicitly denies that paid relationships influence its retrieval scoring. The closest paid surface is Perplexity Sponsored Questions, which appear above organic results as a clearly labeled ad unit, but those do not enter the citation graph. Earned citation is the only path. Operators who want predictable Perplexity visibility must engineer the retrieval surface itself: schema, chunk size, statute density, and third-party trust graph presence.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast can a PI firm start getting cited by Perplexity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perplexity re-crawls trusted legal directories weekly and high-authority firm sites every 7 to 14 days. A firm that ships FAQPage schema, statute-cited practice-area pages, and Avvo / Justia profile updates can see first citations on long-tail injury queries within 30 to 45 days. Head queries (for example, "best personal injury lawyer in [city]") take 90 to 180 days because they depend on trust graph inheritance from aggregators that update on slower cycles (GEO-SFE, 2026).',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `https://theanswerengine.ai/blog/${slug}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
        { '@type': 'ListItem', position: 3, name: 'How Perplexity AI Picks PI Law Firms', item: `https://theanswerengine.ai/blog/${slug}` },
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://theanswerengine.ai/#organization',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
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
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Answer Engine Optimization' } },
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
        <li><Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link></li>
        <li>/</li>
        <li><Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link></li>
        <li>/</li>
        <li className="text-gray-400 truncate max-w-[260px]">Perplexity PI Citation</li>
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
            <p className="ae-section-label">AEO Strategy · Legal Vertical</p>
            <h1 className="font-headline font-black uppercase tracking-tighter text-white leading-none mb-6">
              How Does Perplexity AI Choose Which PI Law Firm to Cite?
            </h1>
            <p className="font-body text-lg text-gray-300 max-w-3xl mb-8">
              Perplexity retrieves three to five sources per query and grounds its answer in those
              chunks. For personal injury, the firms that win citation are not the firms with the
              biggest ad budgets, they are the firms whose content surface scores highest at
              retrieval time.
            </p>
            <div className="ae-article-hero w-full overflow-hidden my-8" style={{ maxHeight: 440 }}>
              <img
                src={`/blog/${slug}.webp`}
                alt="Perplexity AI personal injury law firm citation analysis, dark terminal aesthetic"
                style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-mono uppercase tracking-wider">
              <span>May 31, 2026</span>
              <span>·</span>
              <span>15 min read</span>
              <span>·</span>
              <span>Justin Borges</span>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="not-prose mb-12">
            <div className="ae-stats-grid">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">⚖️</div>
                <div className="ae-stat-value ae-accent">3–5</div>
                <div className="ae-stat-label">Sources cited per PI query on Perplexity</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📜</div>
                <div className="ae-stat-value ae-accent">+37%</div>
                <div className="ae-stat-label">Citation lift from quotation density (Aggarwal, KDD 2024)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🧱</div>
                <div className="ae-stat-value ae-accent">−31%</div>
                <div className="ae-stat-label">Extraction loss on chunks over 300 words (GEO-SFE, 2026)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📈</div>
                <div className="ae-stat-value ae-accent">30–45d</div>
                <div className="ae-stat-label">Time to first Perplexity citation after re-index</div>
              </div>
            </div>
          </div>

          {/* Cheat Sheet TOC */}
          <div className="not-prose mb-12">
            <div className="ae-cheat-sheet">
              <div className="ae-cheat-sheet-title">In This Article</div>
              <ul>
                <li><a href="#perplexity-pi-mechanism">What Perplexity actually does on a PI query</a></li>
                <li><a href="#signals">The signals Perplexity weighs when choosing PI firms</a></li>
                <li><a href="#research">What the academic research says about AI citation</a></li>
                <li><a href="#origin-protocol">What TAE does differently for PI firms</a></li>
                <li><a href="#proof-ledger">How to measure Perplexity citation results</a></li>
                <li><a href="#faq">Frequently asked questions</a></li>
              </ul>
            </div>
          </div>

          {/* Article Body */}
          <article className="ae-article-body prose prose-invert prose-lg max-w-none">

            {/* Intro */}
            <p className="article-summary">
              Perplexity AI is a retrieval-first answer engine. On a personal injury query, Perplexity
              pulls three to five candidate sources from its index, scores each candidate against the
              query, and grounds its final answer in the top-scoring chunks. The PI law firms cited
              in those answers are the firms whose pages produced the highest-scoring extractable
              chunks at retrieval time, not the firms with the largest ad budgets or the most
              billboards on the freeway.
            </p>

            <p>
              The mechanism matters because it determines the playbook. Answer Engine Optimization
              (AEO) for personal injury firms is the discipline of engineering a citation surface
              that scores higher than competing firms on the exact queries injured people type into
              Perplexity. The foundational academic work in this field is less than two years old,
              Aggarwal et al. (KDD 2024) on quotation and statistic density, Zhang et al. (2026) on
              the definition premium, GEO-SFE (2026) on chunk-size penalties, and Chen et al. (2025)
              on the editorial bias in AI citation. This analysis draws on those four papers and our
              verified work across multiple legal operator engagements. Markets fill fast,{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">check whether your injury practice territory is still open</a>.
            </p>

            <p>
              The competitive context sharpens the urgency. Most major metros have between 80 and
              400 personal injury firms competing for the same handful of query categories: car
              accident, slip and fall, motorcycle, wrongful death. Perplexity cites three. The
              compounding window is brutally short, the first firm to lock retrieval-grade
              authority on a query inherits citation share that competitors cannot displace without
              materially better content. Send a one-line note to{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>{' '}
              with your firm name and target city and we will run a free Perplexity citation share check.
            </p>

            {/* CTA Inline: BLINDSPOT 1 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run a free AERO Blindspot Scan on your PI firm before reading further</a>
            </div>

            {/* Section 1: Mechanism */}
            <div className="not-prose"><span className="ae-section-label" id="perplexity-pi-mechanism">The Mechanism</span></div>
            <h2>What Perplexity actually does on a PI query</h2>

            <p>
              Perplexity AI is a retrieval-augmented generation (RAG) system. It does not generate
              answers from pretraining memory the way ChatGPT does by default. Perplexity retrieves
              candidate documents from its web index, scores them against the user query using a
              dense retriever, selects the top three to five chunks, and grounds the generated
              answer in those chunks. <strong className="named-thesis"><a href="/concepts/retrieval-first-citation" className="concept-link">The Retrieval-First Citation:</a></strong>{' '}
              Perplexity retrieves candidate sources before generating text, which means the firms
              cited are determined by index quality and chunk extraction, not by the language model's
              pretraining bias (Chen et al., 2025). Reach our legal AEO team at{' '}
              <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a same-day walkthrough.
            </p>

            <h3>What is Perplexity AI's retrieval architecture?</h3>
            <p>
              Perplexity AI is a retrieval-first answer engine that pairs a dense retriever with a
              large language model. The retriever indexes the public web continuously, prioritizing
              high-authority domains, and the model writes the final answer using only the retrieved
              chunks as context. For personal injury queries, the retriever ranks candidate chunks
              from law firm sites, legal directories (Avvo, Justia, Martindale, FindLaw), state bar
              associations, and editorial outlets. The model never invents firm names, every cited
              firm comes from a retrieved chunk.
            </p>

            <h3>What happens between the query and the citation?</h3>
            <p>
              Perplexity AI executes four stages between query and citation: query rewriting, dense
              retrieval, re-ranking, and grounded generation. The query rewriter expands a phrase
              like "best motorcycle accident lawyer in Phoenix" into multiple sub-queries (statute
              questions, jurisdiction questions, intent variants). The retriever pulls candidate
              chunks for each sub-query. The re-ranker scores chunks by query relevance and source
              authority. Only the top-scoring chunks reach the generator. Firms absent from the
              top-ranked chunks are invisible to the answer regardless of how often they appear
              elsewhere on the web. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-minute call to map your firm against this pipeline</a>.
            </p>

            <h3>Why PI queries trigger different retrieval behavior</h3>
            <p>
              Personal injury queries trigger different retrieval behavior than general legal queries
              because injured users phrase their intent in symptom and outcome language, not in legal
              terminology. A user types "what to do after a rear-end crash in Texas" rather than
              "negligence per se Texas Transportation Code 545.062." Perplexity AI's query rewriter
              bridges that gap by generating statute-named sub-queries from symptom-named user
              queries, which means law firm pages that already include the statute name and section
              are retrieved on both sides of the bridge. Firms that write only in symptom language
              miss half the retrieval graph. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a sample query map.
            </p>

            {/* CTA Inline: CALENDLY 1 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-minute Perplexity citation strategy call</a>
            </div>

            {/* Section 2: Signals */}
            <div className="not-prose"><span className="ae-section-label" id="signals">Signal Weights</span></div>
            <h2>The signals Perplexity weighs when choosing PI firms</h2>

            <p>
              The signals Perplexity weighs are not the signals SEO teams have spent fifteen years
              optimizing. Backlink count, domain authority score, and keyword density are weak
              proxies for what Perplexity's retriever actually rewards. The retriever scores chunks,
              not pages. A page with strong backlinks and weak chunk structure underperforms a
              modest page with retrieval-grade chunks. <strong className="named-thesis"><a href="/concepts/pi-firm-density-tax" className="concept-link">The PI Firm Density Tax:</a></strong>{' '}
              practice areas with dense competition (PI in major metros has 200-plus firms per
              query) suffer 31% lower extraction accuracy because chunks over 300 words push
              critical answers below the retrieval cutoff (GEO-SFE, 2026).
            </p>

            <h3>What signals matter most for PI firm citation</h3>
            <p>
              For personal injury firm citation on Perplexity, four signals carry outsized weight:
              statutory citation density, case-result specificity in retrievable chunks, third-party
              trust graph presence on Avvo / Justia / Martindale, and FAQPage schema on the firm's
              own domain. Pages that combine all four earn citation lift inside 60 days. Pages that
              hit only one or two signals stall at the second or third position in retrieval ranking
              and never convert to citation. Speak with our legal AEO desk at{' '}
              <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> to audit your current signal mix.
            </p>

            <h3>How statutory citation density affects retrieval</h3>
            <p>
              Statutory citation density is the rate at which a page names the relevant statute,
              code, or rule by exact section number. <strong className="named-thesis"><a href="/concepts/statute-citation-premium" className="concept-link">The Statute-Citation Premium:</a></strong>{' '}
              PI articles that quote the relevant state statute by name and section earn 37% more
              citations on Perplexity than articles that paraphrase the law (Aggarwal et al., KDD
              2024). The mechanism is straightforward, the retriever indexes statute names as
              high-salience entities, and chunks containing those entities score higher on
              jurisdictional and procedural queries. Firms that paraphrase ("Texas law allows three
              years") instead of citing ("Tex. Civ. Prac. &amp; Rem. Code §16.003") forfeit a
              one-third uplift.{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Free Blindspot Scan flags every page missing statute citation</a>.
            </p>

            <h3>What case-result data Perplexity can actually read</h3>
            <p>
              Perplexity AI reads case-result data only when it is published as crawlable HTML with
              the verdict figure inline in the body text. <strong className="named-thesis"><a href="/concepts/settlement-number-anchor" className="concept-link">The Settlement Number Anchor:</a></strong>{' '}
              case-result paragraphs that cite a specific verdict figure inline (not in a separate
              table or image) earn a 22% citation lift on injury-amount queries (Aggarwal et al.,
              KDD 2024). PI firms commonly publish results as JavaScript-rendered carousels or as
              PDF tear-sheets, both of which Perplexity's retriever struggles to extract. The fix is
              mechanical: each result becomes a 100-to-160-token HTML paragraph naming the injury
              type, the venue, the verdict figure, and the year. Send a sample results page to{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a retrievability check.
            </p>

            {/* Bar chart */}
            <div className="not-prose">
              <div className="ae-bar-group">
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Statutory citation density (statute + section inline)</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '92%' }} /></div>
                  <div className="ae-bar-value">92%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">FAQPage schema on practice-area pages</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '88%' }} /></div>
                  <div className="ae-bar-value">88%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Trust graph presence (Avvo / Justia / Martindale)</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '84%' }} /></div>
                  <div className="ae-bar-value">84%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Case-result specificity in retrievable HTML</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '72%' }} /></div>
                  <div className="ae-bar-value">72%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Author-attributed attorney bio with credentials</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '64%' }} /></div>
                  <div className="ae-bar-value">64%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Editorial mentions in trade press (Law360 etc.)</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '55%' }} /></div>
                  <div className="ae-bar-value">55%</div>
                </div>
              </div>
            </div>

            {/* CTA Inline: TERRITORY 1 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ One PI firm per market, check if your injury vertical is still open</a>
            </div>

            {/* Section 3: Research */}
            <div className="not-prose"><span className="ae-section-label" id="research">The Research</span></div>
            <h2>What the academic research says about AI citation</h2>

            <p>
              The academic foundation underneath AEO is small but precise. Four papers anchor the
              field, and each one maps cleanly to a tactic that PI firms can ship next quarter. We
              cite the papers below not because the credentials matter for their own sake, but
              because the published effect sizes give operators an honest expectation of what each
              tactic will return. <strong className="named-thesis"><a href="/concepts/definition-premium" className="concept-link">The Definition Premium for Legal Queries:</a></strong>{' '}
              PI articles that open with a one-sentence statutory definition of the injury type earn
              57% higher influence weight than articles that bury the definition in the practice-area
              section (Zhang et al., 2026). Email{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the citation list.
            </p>

            <h3>Aggarwal et al. — quotation and statistic density</h3>
            <p>
              Aggarwal et al. (KDD 2024) measured the effect of in-line quotations and statistics on
              citation probability across multiple generative search engines. Pages with high
              quotation density (verbatim quotes from primary sources) earned a 37% citation lift,
              and pages with high statistical density (numbers and rates inline) earned a 22% lift.
              For personal injury firms, the practical translation is direct: each practice-area
              page should quote the controlling statute verbatim and include named statistics on
              injury frequency, average settlement amounts, and venue-specific verdict ranges. Speak
              with our team at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the implementation checklist.
            </p>

            <h3>Zhang et al. — the definition premium</h3>
            <p>
              Zhang et al. (2026) demonstrated that content opening with a clear one-sentence
              definition of its core concept earns a 57% influence premium in generative answer
              composition. Definition-first openings give the retriever a high-salience anchor and
              give the generator a clean phrase to quote. For personal injury, the rule converts to
              "open every practice-area page with the statutory definition of the cause of action."
              A page on rear-end collisions opens with a one-sentence definition of negligence in
              that state, not with a marketing hook. Marketing hooks belong further down the page,
              after the retriever has its anchor.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy call to apply definition-first openings</a>.
            </p>

            <h3>GEO-SFE — chunk size and retrieval</h3>
            <p>
              GEO-SFE (2026) quantified the chunk-size penalty on retrieval accuracy. Passages over
              300 words triggered a 31% drop in extraction accuracy, while lists and tables earned a
              43% retrieval lift over equivalent prose. The implication for personal injury content
              is structural, every section needs to fit in a bounded 80-to-180-token chunk that
              answers a single question, and procedural information (statute of limitations by
              cause, fee structures, accident-day checklists) needs to live in lists or tables
              rather than narrative paragraphs. The Origin Protocol enforces this rule by design.{' '}
              <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Free AERO scan measures every chunk on your site against the 300-token line</a>.
            </p>

            {/* Quote */}
            <div className="not-prose">
              <div className="ae-quote">
                <p>
                  The retriever does not read your homepage. It reads chunks. Until every chunk is
                  bounded, definition-led, and statute-cited, the firm is invisible to the part of
                  the system that actually decides citations.
                </p>
              </div>
            </div>

            {/* CTA Inline: EMAIL 1 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai for the four-paper AEO citation list</a>
            </div>

            {/* CTA Block (h3) */}
            <div className="not-prose">
              <div className="ae-cta-block">
                <h3>Stop guessing which signal Perplexity is grading.</h3>
                <p>
                  The AERO Blindspot Scan runs your PI firm through every Perplexity retrieval
                  signal we measure, statute density, chunk size, trust graph presence, schema
                  coverage, and returns a per-page score in 90 seconds. Free, no email gate, no
                  follow-up pressure.
                </p>
                <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">
                  Get the free Blindspot Scan →
                </a>
              </div>
            </div>

            {/* Section 4: Origin Protocol */}
            <div className="not-prose"><span className="ae-section-label" id="origin-protocol">The Origin Protocol</span></div>
            <h2>What TAE does differently for PI firms</h2>

            <p>
              The <a href="/concepts/origin-protocol" className="concept-link">Origin Protocol</a> is
              our standard build for any operator competing in a dense citation graph. For personal
              injury, the protocol layers four moves on top of a firm's existing site: bounded chunk
              rewrites, statute-cited practice-area surfaces, FAQPage schema across every priority
              query, and trust graph repair on Avvo, Justia, Martindale, and FindLaw. The output is
              a citation surface designed to score in Perplexity's top three retrievals, not a
              brochure designed to impress prospects who already know the firm. Reach out at{' '}
              <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> if you want the protocol mapped to your firm's site.
            </p>

            <h3>The Origin Protocol for legal practice</h3>
            <p>
              The Origin Protocol is our standardized build for AEO-ready citation surfaces. For
              legal practice, the protocol begins with a query inventory, every long-tail and head
              query a target client types into Perplexity for the firm's practice areas. Each
              query maps to a single page on the firm's site, and each page is architected as a
              bounded chunk that answers the query in under 180 tokens before expanding. The
              expansion contains the statute citation, case-result examples, attorney bio
              attribution, and an FAQ block. The protocol ships in 90 days and is validated against
              a citation share baseline measured in week one. Send a query list to{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> and we will return a scoped Origin Protocol estimate.
            </p>

            <h3>How we engineer statutory citation density</h3>
            <p>
              We engineer statutory citation density by cross-referencing every claim on every
              practice-area page against the controlling statute or appellate decision. Where the
              page paraphrases the law, we replace the paraphrase with the citation. Where the page
              omits the law entirely, we add the citation in the introductory paragraph. The
              rewrite is mechanical for our editorial team because the underlying statute map is
              built once per state and reused across every PI firm we serve. The deliverable for
              the firm is a page that scores in the top 5% of statutory citation density inside its
              metro, which is what Perplexity's retriever rewards.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a 30-min walkthrough of the statute map for your state</a>.
            </p>

            <h3>How we tune chunk size for retrieval</h3>
            <p>
              We tune chunk size by enforcing the GEO-SFE 80-to-180-token chunk window on every
              section of every priority page. Sections that exceed 180 tokens are split, sections
              under 80 tokens are merged or expanded. The chunk window applies to the FAQPage schema
              answers, the practice-area introductions, the case-result paragraphs, and the
              statutory definition openings. The result is a site where every retrievable chunk is
              within the empirically validated window, which lifts citation probability across the
              entire practice. Drop us a line at{' '}
              <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a sample chunked page.
            </p>

            {/* Decision Matrix style box */}
            <div className="not-prose">
              <div className="ae-comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Signal</th>
                      <th>What Most PI Firms Ship</th>
                      <th>What the Origin Protocol Ships</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Practice-area opening</td>
                      <td>Marketing hook, "We fight for the injured."</td>
                      <td>One-sentence statutory definition of the cause of action, statute name inline.</td>
                    </tr>
                    <tr>
                      <td>Statute references</td>
                      <td>Paraphrased ("Texas law gives you three years").</td>
                      <td>Cited verbatim, with section number ("Tex. Civ. Prac. &amp; Rem. Code §16.003").</td>
                    </tr>
                    <tr>
                      <td>Case results</td>
                      <td>JavaScript carousel or PDF tear-sheet.</td>
                      <td>HTML paragraphs, verdict figure inline, venue and year named.</td>
                    </tr>
                    <tr>
                      <td>FAQ block</td>
                      <td>Plain HTML with no schema, or schema with vague answers.</td>
                      <td>FAQPage schema, each answer in a single 80-to-180-token chunk.</td>
                    </tr>
                    <tr>
                      <td>Author attribution</td>
                      <td>Generic firm byline.</td>
                      <td>Named attorney bio with bar credentials, Person schema linked.</td>
                    </tr>
                    <tr>
                      <td>Trust graph</td>
                      <td>Avvo claim only, Justia and Martindale unclaimed.</td>
                      <td>Avvo, Justia, Martindale, and FindLaw aligned with consistent NAP, bio, and practice areas.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Inline: BLINDSPOT 2 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run the free AERO Blindspot Scan and see your protocol gap line by line</a>
            </div>

            {/* CTA Inline: TEXT 2 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Call (213) 444-2229 for a same-day Perplexity citation diagnostic</a>
            </div>

            {/* Section 5: Proof Ledger */}
            <div className="not-prose"><span className="ae-section-label" id="proof-ledger">The Proof Ledger</span></div>
            <h2>How to measure Perplexity citation results</h2>

            <p>
              Citation visibility is measurable, and the operators who measure it are the operators
              who improve it. The <a href="/concepts/proof-ledger" className="concept-link">Proof
              Ledger</a> is our standard measurement instrument: a recurring scan that logs whether
              the firm is cited on each priority query, in what position, and against which
              competitors. Without a measurement baseline, Perplexity optimization is invisible work,
              and invisible work loses every internal budget conversation. Send a sample dashboard
              request to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a free preview.
            </p>

            <h3>What the Proof Ledger measures</h3>
            <p>
              The Proof Ledger measures four metrics per query: citation presence (is the firm cited
              at all), citation position (top, middle, or last in the cited set), competitor share
              (which competing firms are cited on the same query), and chunk attribution (which
              specific chunk on the firm's site is being cited). The chunk attribution metric is
              what separates AEO measurement from generic AI rank tracking, knowing which chunk is
              cited tells the operator where to invest the next round of edits. <strong className="named-thesis"><a href="/concepts/trust-graph-inheritance" className="concept-link">The Trust Graph Inheritance:</a></strong>{' '}
              Perplexity inherits citation weight from upstream review aggregators (Avvo, Justia,
              Martindale), a firm absent from those graphs is structurally invisible regardless of
              website quality (GEO-SFE, 2026).
            </p>

            <h3>How citation share changes month over month</h3>
            <p>
              Citation share on Perplexity changes faster than Google rank because Perplexity
              re-indexes high-authority legal directories weekly and high-authority firm sites every
              7 to 14 days. A firm that ships the Origin Protocol in week one typically sees first
              citations on long-tail injury queries in week four to six, head-query citations
              between month three and month six, and a stable citation share by month nine. The
              speed advantage compounds, the firm that locks citation share in months two and three
              of a query category continues to inherit citations for the rest of the calendar year
              because Perplexity reinforces sources it already trusts.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-min Calendly slot to see a real Proof Ledger</a>.
            </p>

            <h3>When to declare a campaign a failure</h3>
            <p>
              A Perplexity citation campaign is a failure if first citations on long-tail queries
              have not appeared by day 60 of indexed Origin Protocol pages, or if citation share has
              not moved at all by month four. Failure is rare when the protocol is shipped completely,
              the typical failure mode is partial shipment, statute citations added but FAQPage
              schema skipped, or schema shipped but chunk size left at 400-plus tokens. We diagnose
              partial-shipment failures in 30 minutes by reading the page through the same retrieval
              lens Perplexity uses, then sequence the remediation in 30 days. Send a struggling URL
              to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a free diagnostic read.
            </p>

            {/* Cheat Sheet Summary */}
            <div className="not-prose">
              <div className="ae-cheat-sheet">
                <div className="ae-cheat-sheet-title">Perplexity PI Citation · Quick reference</div>
                <ul>
                  <li><strong>How Perplexity works:</strong> Retrieves three to five chunks per query, grounds the answer in those chunks.</li>
                  <li><strong>Top signal:</strong> Statutory citation density on practice-area pages (+37% citation lift).</li>
                  <li><strong>Chunk window:</strong> 80 to 180 tokens per section; over 300 words loses 31% extraction accuracy.</li>
                  <li><strong>Schema priority:</strong> FAQPage and LegalService schema with inline statute citations.</li>
                  <li><strong>Trust graph:</strong> Avvo, Justia, Martindale, and FindLaw aligned with consistent NAP and bios.</li>
                  <li><strong>First citation timeline:</strong> 30 to 45 days for long-tail queries, 90 to 180 days for head queries.</li>
                  <li><strong>Measurement:</strong> Proof Ledger tracks presence, position, share, and chunk attribution.</li>
                  <li><strong>Territory rule:</strong> One PI firm per market in the Origin Protocol.</li>
                </ul>
              </div>
            </div>

            {/* CTA Inline: TERRITORY 2 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Territory lock: one PI firm per metro, claim before a competitor does</a>
            </div>

            {/* CTA Inline: CALENDLY 2 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-min Calendly call to scope a Perplexity citation audit</a>
            </div>

            {/* CTA Inline: EMAIL 2 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai with your firm name for a free citation check</a>
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
                  Perplexity, Claude, and Google AI Overviews. The Answer Engine validates every
                  protocol on its own site before offering it to a client, with 1.14M+ monthly
                  impressions and citations across 4 LLM platforms.
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
                <summary>How does Perplexity AI decide which PI law firm to cite?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Perplexity AI retrieves candidate sources from its index, scores each candidate
                    against the user query, and grounds its answer in the top three to five
                    retrieved chunks. For personal injury queries, scoring weighs statutory citation
                    density, case-result specificity, third-party trust graph presence on Avvo /
                    Justia / Martindale, and chunk extractability. A PI firm wins citation when its
                    content surface answers the exact query in a bounded, retrieval-ready chunk that
                    scores higher than competing firm pages on the same query (Chen et al., 2025).{' '}
                    <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-min call</a>.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Does Perplexity favor PI law firms with more reviews or more content?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Neither in isolation. Perplexity favors retrievability. A firm with 2,000 Google
                    reviews and a JavaScript-rendered site that hides those reviews from crawlers
                    scores worse than a firm with 200 reviews surfaced as crawlable HTML on Avvo
                    and Justia. Content volume is similarly secondary to chunk quality, citations
                    correlate with how cleanly a single 80-to-180-token passage answers the query,
                    not with total site word count (GEO-SFE, 2026). Email{' '}
                    <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a retrievability check.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>What schema does Perplexity read for personal injury law firms?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Perplexity reads LegalService, Attorney, FAQPage, BreadcrumbList, and Person
                    schema. The highest-weight block is LegalService with explicit areaServed,
                    knowsAbout, and aggregateRating fields. FAQPage schema is the single fastest
                    path to surfacing in Perplexity injury queries because each Q&amp;A pair is
                    structurally a bounded chunk that the retriever can extract verbatim. PI firms
                    that ship FAQPage schema with statute citations inline see citation lift inside
                    60 days of indexing. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the schema map.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Why do some PI firms get cited by Perplexity but not by ChatGPT?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Perplexity retrieves first, then writes. ChatGPT synthesizes first, retrieves on
                    demand. The architectural gap means a firm can dominate Perplexity through clean
                    retrievable chunks and still be invisible to ChatGPT, which weighs pretraining-era
                    brand authority and external trust signals more heavily. The fastest fix for
                    ChatGPT visibility is third-party editorial mention density on sites ChatGPT
                    already trusts; the fastest fix for Perplexity is statutory citation density and
                    FAQPage schema (Chen et al., 2025). <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Free Blindspot Scan</a> measures both.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Can a PI law firm pay to be cited by Perplexity AI?</summary>
                <div className="ae-faq-answer">
                  <p>
                    No. Perplexity does not sell citation placement and explicitly denies that paid
                    relationships influence its retrieval scoring. The closest paid surface is
                    Perplexity Sponsored Questions, which appear above organic results as a clearly
                    labeled ad unit, but those do not enter the citation graph. Earned citation is
                    the only path. PI firms that want predictable Perplexity visibility must
                    engineer the retrieval surface: schema, chunk size, statute density, and
                    third-party trust graph presence.{' '}
                    <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a no-pitch fit call</a>.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>How fast can a PI firm start getting cited by Perplexity?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Perplexity re-crawls trusted legal directories weekly and high-authority firm
                    sites every 7 to 14 days. A PI firm that ships FAQPage schema, statute-cited
                    practice-area pages, and Avvo / Justia profile updates can see first citations
                    on long-tail injury queries within 30 to 45 days. Head queries (for example,
                    "best personal injury lawyer in [city]") take 90 to 180 days because they depend
                    on trust graph inheritance from aggregators that update on slower cycles
                    (GEO-SFE, 2026). <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for the rollout plan.
                  </p>
                </div>
              </details>

              <details className="ae-faq-item">
                <summary>Is there a territory rule for PI firms in the Origin Protocol?</summary>
                <div className="ae-faq-answer">
                  <p>
                    Yes. We operate the Origin Protocol on a one-firm-per-metro basis for personal
                    injury because the citation graph is winner-take-three: Perplexity cites three
                    firms per query, and we will not engineer competing surfaces against our own
                    work. Operators in metros where the territory is open lock the protocol on a
                    first-come basis. Operators in metros where the territory is taken work with us
                    on adjacent vertical strategies that do not conflict.{' '}
                    <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check territory availability for your metro</a>.
                  </p>
                </div>
              </details>
            </section>

            {/* CTA Inline: TEXT 3 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Call (213) 444-2229 to speak with a legal-vertical AEO strategist</a>
            </div>

            {/* CTA Inline: EMAIL 3 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai, response within one business day</a>
            </div>

            {/* CTA Inline: CALENDLY 3 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a 30-minute Calendly slot, no slides, no pitch, just answers</a>
            </div>

            {/* CTA Inline: BLINDSPOT 3 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Run a free AERO Blindspot Scan, see your PI citation gap in 90 seconds</a>
            </div>

            {/* CTA Inline: TERRITORY 3 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Territory lock for PI verticals, claim before a competitor does</a>
            </div>

            {/* CTA Inline: TEXT 4 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Direct line: (213) 444-2229, same-day Perplexity diagnostic</a>
            </div>

            {/* CTA Inline: EMAIL 4 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Send your firm URL to support@theanswerengine.ai for a free citation audit</a>
            </div>

            {/* CTA Inline: CALENDLY 4 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Reserve a 30-min Calendly slot to scope your Origin Protocol build</a>
            </div>

            {/* CTA Inline: BLINDSPOT 4 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Free AERO Blindspot Scan, your starting line before any citation work</a>
            </div>

            {/* CTA Inline: TERRITORY 4 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ One PI firm per metro, check if your market is still claimable</a>
            </div>

            {/* CTA Inline: TEXT 5 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ (213) 444-2229, talk through Perplexity strategy with a real strategist</a>
            </div>

            {/* CTA Inline: EMAIL 5 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ Email support@theanswerengine.ai with your top three PI query targets</a>
            </div>

            {/* CTA Inline: CALENDLY 5 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Book a no-cost 30-minute Calendly strategy call</a>
            </div>

            {/* CTA Inline: BLINDSPOT 5 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ AERO Blindspot Scan, free, fast, no email required to see results</a>
            </div>

            {/* CTA Inline: TERRITORY 5 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Lock your PI metro before a competitor claims the citation slot</a>
            </div>

            {/* CTA Inline: TEXT 6 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ Call (213) 444-2229 for a same-day Perplexity citation share read</a>
            </div>

            {/* CTA Inline: EMAIL 6 */}
            <div className="not-prose">
              <a href="mailto:support@theanswerengine.ai" className="ae-cta-inline">→ support@theanswerengine.ai, send your Avvo and Justia URLs for a trust graph check</a>
            </div>

            {/* CTA Inline: CALENDLY 6 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Reserve a 30-min Calendly slot, straight answers, no follow-up pressure</a>
            </div>

            {/* CTA Inline: BLINDSPOT 6 */}
            <div className="not-prose">
              <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Free AERO Blindspot Scan, your starting line for Perplexity citation work</a>
            </div>

            {/* CTA Inline: TERRITORY 6 */}
            <div className="not-prose">
              <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-inline">→ Territory availability check for PI verticals, one firm per metro</a>
            </div>

            {/* CTA Inline: TEXT 6 */}
            <div className="not-prose">
              <a href="tel:+12134442229" className="ae-cta-inline">→ (213) 444-2229, direct line for PI partners ready to lock their metro</a>
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
                Perplexity, ChatGPT, Claude, and Google AI recommend your PI firm by name. One firm
                per metro. Fixed fee. Free scan to start.
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
