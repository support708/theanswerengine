import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'Does Having a Wikipedia Page Help AI Find Your Business'
const description =
  'Wikipedia is a major AI training source — but 99.9% of local businesses will never qualify for a page. Discover what actually signals authority to AI and what local businesses should chase instead.'
const slug = 'does-having-a-wikipedia-page-help-ai-find-you'
const publishDate = '2026-04-21'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Wikipedia page AI search visibility',
    'does Wikipedia help AI recommendations',
    'Wikipedia local business AI',
    'ChatGPT Wikipedia entity recognition',
    'AI entity score local business',
    'Wikidata AI recommendations',
    'alternative to Wikipedia for AI visibility',
    'answer engine optimization authority signals',
    'Google Knowledge Panel AI visibility',
    'local business AI citations Wikipedia',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['The Answer Engine Team'],
    url: `https://www.theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://www.theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`https://www.theanswerengine.ai/blog/${slug}.webp`],
  },
  alternates: {
    canonical: `https://www.theanswerengine.ai/blog/${slug}`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: title,
      description,
      image: `https://www.theanswerengine.ai/blog/${slug}.webp`,
      datePublished: publishDate,
      dateModified: publishDate,
      author: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
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
        '@id': `https://www.theanswerengine.ai/blog/${slug}`,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can a local business get a Wikipedia page to help AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Almost certainly not. Wikipedia's notability guidelines require that a subject has received significant coverage in reliable, independent published sources. A local plumber, dentist, or restaurant — no matter how excellent — will not meet this bar. Wikipedia editors actively delete pages created for local businesses, viewing them as promotional content. The realistic path for local businesses is not Wikipedia; it is building the entity signals that are actually accessible: knowledge panels, structured data, authoritative directory mentions, and press coverage.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does Wikipedia help AI like ChatGPT recommend businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wikipedia is a significant training source for large language models and does influence AI entity recognition — but almost entirely for brands, public figures, and national companies with genuine notability. For local businesses, Wikipedia plays no meaningful role in AI recommendation engines. The signals that actually drive local business recommendations are structured data, consistent directory presence, authoritative third-party mentions, and review platform authority.',
          },
        },
        {
          '@type': 'Question',
          name: "If I can't get on Wikipedia, what gives me the same type of authority signal?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The entity signals accessible to local businesses include a verified Google Business Profile (which feeds the Knowledge Graph), consistent NAP data across 50+ authoritative directories, structured schema markup on your website, press mentions in local and regional publications, and professional association listings. Taken together, these signals build an entity footprint that AI platforms use to confidently recognize and recommend your business — without requiring Wikipedia.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does AI seem to know a lot about big brands but little about my local business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Large brands appear extensively in the training data AI systems learned from: news articles, Wikipedia entries, industry publications, financial filings, and millions of web pages referencing them across the open internet. Local businesses, by contrast, generate a much smaller information footprint. AI systems see fewer consistent, cross-validated mentions and therefore have lower confidence when recommending them. The solution is systematically building that footprint through the channels available to local businesses.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Wikidata and does it affect AI recommendations for local businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Wikidata is a structured knowledge base that underpins Wikipedia and feeds directly into Google's Knowledge Graph. Entities in Wikidata get unique identifiers (Q-numbers) that AI platforms use for unambiguous entity resolution — distinguishing your plumbing company from the dozen other businesses with similar names. However, getting a Wikidata entry carries essentially the same notability hurdles as Wikipedia for local businesses. The practical alternative is ensuring your Google Business Profile and structured data are complete and consistent, which feeds the same Knowledge Graph through accessible channels.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does having a Google Knowledge Panel replace Wikipedia for AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "A verified Google Knowledge Panel is arguably more valuable than a Wikipedia page for local business AI visibility. It signals to Google's systems — and by extension to Google AI Mode and Google-integrated AI tools — that your business is a confirmed, real-world entity with verified attributes. It also feeds structured entity data into the same Knowledge Graph that Wikipedia entries contribute to. For local businesses, earning and optimizing a Knowledge Panel is a realistic and high-impact goal that Wikipedia simply is not.",
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a Wikipedia page actually help AI recommend a business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For major brands and nationally recognized organizations, a Wikipedia page provides meaningful AI authority signals through entity recognition, cross-referenced facts, and training data presence. For the vast majority of local businesses — which will never qualify for a Wikipedia page — the question is moot. The more productive question is what entity signals ARE accessible and how to maximize them. Structured data, authoritative directories, press mentions, and a verified Knowledge Panel together create an entity profile that moves the needle for local AI recommendations.',
          },
        },
      ],
    },
    {
      '@type': 'Organization',
      name: 'The Answer Engine',
      url: 'https://theanswerengine.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://theanswerengine.ai/logo.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-213-444-2229',
        contactType: 'customer service',
        email: 'support@theanswerengine.ai',
      },
    },
    {
      '@type': 'BreadcrumbList',
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
          name: 'Does Having a Wikipedia Page Help AI Find Your Business',
          item: `https://www.theanswerengine.ai/blog/${slug}`,
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen" style={{ background: '#0F1117' }}>

        {/* Hero Section */}
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F1117 0%, #1a1025 50%, #0F1117 100%)' }}>
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="hero-grid-wikipedia-myth" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF6A00" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-wikipedia-myth)" />
          </svg>
          <div className="relative max-w-4xl mx-auto px-6 py-20">

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">&rsaquo;</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span className="mx-2">&rsaquo;</span>
              <span className="text-gray-400">Does Wikipedia Help AI Find Your Business</span>
            </nav>

            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6" style={{ background: 'rgba(255,106,0,0.12)', border: '1px solid rgba(255,106,0,0.3)' }}>
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#FF6A00' }}></span>
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#FF6A00' }}>Myth Busters</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight font-plus-jakarta">
              Does Having a Wikipedia Page Help AI Find Your Business?
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              Wikipedia powers a significant portion of AI training data. But 99.9% of local businesses will never qualify for a page there — and chasing one is a distraction from the signals that actually drive AI recommendations for local businesses. Here is the truth.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>Published April 21, 2026</span>
              <span className="text-gray-700">|</span>
              <span>11 min read</span>
              <span className="text-gray-700">|</span>
              <span>The Answer Engine Team</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-12">

          {/* Stats Grid */}
          <section className="ae-stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-14" aria-label="Key statistics">
            <div className="ae-stat-card rounded-xl p-5 text-center" style={{ background: 'rgba(255,106,0,0.07)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <div className="text-3xl font-bold mb-1 font-plus-jakarta" style={{ color: '#FF6A00' }}>99.9%</div>
              <div className="text-xs text-gray-400 leading-snug">of local businesses that will never qualify for a Wikipedia page</div>
            </div>
            <div className="ae-stat-card rounded-xl p-5 text-center" style={{ background: 'rgba(255,106,0,0.07)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <div className="text-3xl font-bold mb-1 font-plus-jakarta" style={{ color: '#FF6A00' }}>1.2%</div>
              <div className="text-xs text-gray-400 leading-snug">of local businesses actually cited by ChatGPT in local search queries</div>
            </div>
            <div className="ae-stat-card rounded-xl p-5 text-center" style={{ background: 'rgba(255,106,0,0.07)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <div className="text-3xl font-bold mb-1 font-plus-jakarta" style={{ color: '#FF6A00' }}>45%</div>
              <div className="text-xs text-gray-400 leading-snug">of consumers now use AI to find local services near them</div>
            </div>
            <div className="ae-stat-card rounded-xl p-5 text-center" style={{ background: 'rgba(255,106,0,0.07)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <div className="text-3xl font-bold mb-1 font-plus-jakarta" style={{ color: '#FF6A00' }}>6.7M</div>
              <div className="text-xs text-gray-400 leading-snug">articles on English Wikipedia — almost none about local businesses</div>
            </div>
          </section>

          {/* Inline CTA 1 */}
          <div className="ae-cta-inline rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ background: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.25)' }}>
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Wondering how AI actually sees your business right now?</p>
              <p className="text-gray-400 text-sm">Find the exact signals AI platforms use to evaluate you — and what you're missing.</p>
            </div>
            <Link href="/blindspot" className="shrink-0 px-5 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105" style={{ background: '#FF6A00', color: '#fff' }}>
              Get Free Blind Spot Report
            </Link>
          </div>

          {/* Table of Contents */}
          <nav className="ae-toc rounded-xl p-6 mb-12" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }} aria-label="Table of contents">
            <h2 className="text-lg font-bold text-white mb-4 font-plus-jakarta">In This Article</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#wikipedia-as-ai-source" className="text-gray-400 hover:text-white transition-colors">1. Wikipedia as an AI Training Source: What It Actually Means</a></li>
              <li><a href="#notability-requirements" className="text-gray-400 hover:text-white transition-colors">2. Wikipedia's Notability Rules and Why Local Businesses Can't Get Pages</a></li>
              <li><a href="#what-wikipedia-signals" className="text-gray-400 hover:text-white transition-colors">3. What Wikipedia Actually Signals to AI Systems</a></li>
              <li><a href="#wikidata-connection" className="text-gray-400 hover:text-white transition-colors">4. The Wikidata Knowledge Graph Connection</a></li>
              <li><a href="#comparison-table" className="text-gray-400 hover:text-white transition-colors">5. Wikipedia's Role: Major Brands vs. Local Businesses</a></li>
              <li><a href="#accessible-signals" className="text-gray-400 hover:text-white transition-colors">6. The Entity Signals Local Businesses Can Actually Build</a></li>
              <li><a href="#entity-score" className="text-gray-400 hover:text-white transition-colors">7. The Entity Score Concept: AI Knows More Than Wikipedia</a></li>
              <li><a href="#press-and-directories" className="text-gray-400 hover:text-white transition-colors">8. Why Press Mentions and Directories Matter More</a></li>
              <li><a href="#decision-matrix" className="text-gray-400 hover:text-white transition-colors">9. Decision Matrix: Where to Invest Your Authority-Building Effort</a></li>
              <li><a href="#cheat-sheet" className="text-gray-400 hover:text-white transition-colors">10. Wikipedia Myth Cheat Sheet</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">11. Frequently Asked Questions</a></li>
            </ol>
          </nav>

          {/* Section 1: Wikipedia as an AI Training Source */}
          <section id="wikipedia-as-ai-source" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">Wikipedia as an AI Training Source: What It Actually Means</h2>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Wikipedia is one of the most cited sources in AI training datasets, and that is not an exaggeration. GPT-4's training corpus included substantial portions of Wikipedia. Google's knowledge systems have long used Wikipedia as a primary seed for the Knowledge Graph. Perplexity's retrieval systems frequently surface Wikipedia articles as top references. If you are trying to understand how AI learns about the world, Wikipedia is legitimately important.
            </p>
            <p className="text-gray-300 mb-5 leading-relaxed">
              But here is the critical distinction that most business owners miss: Wikipedia is important for teaching AI about entities, not about local businesses. The 6.7 million articles on English Wikipedia cover countries, historical figures, corporations, scientific concepts, cultural movements, and notable public institutions. They do not cover the HVAC company on Main Street in Pasadena.
            </p>
            <p className="text-gray-300 mb-5 leading-relaxed">
              When a customer asks ChatGPT "who is the best plumber in Burbank," the AI is not reaching into Wikipedia for that answer. It is drawing on structured local business data, review signals, directory listings, and the web-wide consensus of third-party mentions. Wikipedia has almost nothing to say about that query — because it was never designed to.
            </p>

            {/* Callout Warning */}
            <div className="ae-callout-warning rounded-xl p-6 mb-8" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)' }}>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">&#9888;</span>
                <div>
                  <p className="font-bold text-red-400 mb-2">The Wikipedia Distraction</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Business owners who chase Wikipedia visibility are solving the wrong problem. The time, money, and political capital required to get and maintain a Wikipedia article — assuming you even qualify — would generate far more AI visibility if redirected toward structured data, authoritative directories, and local press coverage. Wikipedia is not your lever. Stop treating it like it is.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-5 leading-relaxed">
              The businesses that dominate local AI recommendations have one thing in common: they have built a dense, consistent, multi-platform entity footprint that AI systems can confidently read and verify. Wikipedia is not part of that footprint for any of them.
            </p>
          </section>

          {/* Section 2: Notability Requirements */}
          <section id="notability-requirements" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">Wikipedia's Notability Rules and Why Local Businesses Can't Get Pages</h2>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Wikipedia operates under a strict notability policy. To earn a Wikipedia page, a subject must have received "significant coverage in reliable sources that are independent of the subject." In practice, this means major newspaper features, academic citations, or national-level coverage from outlets like the New York Times, Reuters, or equivalent publications.
            </p>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Local news coverage does not meet this bar. Being featured in the Pasadena Star-News or getting a mention in a local business roundup does not qualify a business for a Wikipedia article. Wikipedia's community of editors — numbering in the tens of thousands — actively monitors new pages and will delete any article about a local business within hours if it does not meet notability criteria.
            </p>

            {/* Notability Reality Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="rounded-xl p-5" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <div className="text-2xl mb-3">&#128683;</div>
                <h3 className="text-red-400 font-bold mb-2 font-plus-jakarta text-sm">What Doesn't Qualify</h3>
                <ul className="text-gray-400 text-xs space-y-1.5 leading-relaxed">
                  <li>Local service businesses</li>
                  <li>Regional restaurants or retailers</li>
                  <li>Professional practices (dental, legal, medical)</li>
                  <li>Home service companies</li>
                  <li>Boutique agencies or studios</li>
                </ul>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
                <div className="text-2xl mb-3">&#9888;</div>
                <h3 className="font-bold mb-2 font-plus-jakarta text-sm" style={{ color: '#FF6A00' }}>Gray Zone</h3>
                <ul className="text-gray-400 text-xs space-y-1.5 leading-relaxed">
                  <li>Regional chains with significant news coverage</li>
                  <li>Companies that have won national awards</li>
                  <li>Businesses subject to major litigation</li>
                  <li>Franchises with unusual origin stories</li>
                </ul>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)' }}>
                <div className="text-2xl mb-3">&#10003;</div>
                <h3 className="text-green-400 font-bold mb-2 font-plus-jakarta text-sm">What Actually Qualifies</h3>
                <ul className="text-gray-400 text-xs space-y-1.5 leading-relaxed">
                  <li>National brands with extensive press history</li>
                  <li>Companies publicly traded or acquired</li>
                  <li>Organizations featured in major national media</li>
                  <li>Historically significant institutions</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 mb-5 leading-relaxed">
              Even if a local business somehow navigated the notability hurdle, Wikipedia's neutral-point-of-view policy means the article cannot contain marketing language, service descriptions, pricing, or calls to action. A Wikipedia page for a business is a dry factual record, not a promotional tool. The idea that you could optimize a Wikipedia article to drive AI recommendations is a misunderstanding of what Wikipedia is for.
            </p>

            {/* Callout Info */}
            <div className="ae-callout-info rounded-xl p-6 mb-6" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.25)' }}>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">&#9432;</span>
                <div>
                  <p className="font-bold text-blue-400 mb-2">The Deletion Rate Reality</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Approximately 75% of new Wikipedia articles created about businesses are nominated for deletion within 30 days. For local businesses, the rate is effectively 100%. Wikipedia's editors are experienced at identifying promotional page creation and act quickly. The effort required to create and defend a Wikipedia page almost always exceeds any benefit gained.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: What Wikipedia Signals to AI */}
          <section id="what-wikipedia-signals" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">What Wikipedia Actually Signals to AI Systems</h2>
            <p className="text-gray-300 mb-5 leading-relaxed">
              For the entities that do appear on Wikipedia — large corporations, national chains, famous founders, major institutions — the platform provides three distinct types of value to AI systems.
            </p>

            {/* Signal Cards */}
            <div className="grid sm:grid-cols-3 gap-5 mb-8">
              <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-2xl mb-3">&#127760;</div>
                <h3 className="text-white font-bold mb-2 font-plus-jakarta">Entity Recognition</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wikipedia gives an entity a confirmed, named existence in AI training data. The model learns: "This company exists, it does this, it is located here." That unambiguous grounding affects how confidently AI will recommend it.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-2xl mb-3">&#128279;</div>
                <h3 className="text-white font-bold mb-2 font-plus-jakarta">Cross-Reference Verification</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wikipedia articles cite sources and link outward. This creates a web of cross-validated facts that AI systems use to confirm information accuracy. The more an entity is cited consistently across multiple Wikipedia articles, the higher its authority signal.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-2xl mb-3">&#128203;</div>
                <h3 className="text-white font-bold mb-2 font-plus-jakarta">Structured Fact Anchoring</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wikipedia's infoboxes provide clean, structured data: founding date, headquarters, industry, CEO, revenue. These structured facts feed directly into knowledge graph entries and give AI systems high-confidence data points to anchor answers around.
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-5 leading-relaxed">
              The key insight here is that none of these three signals require Wikipedia specifically. Entity recognition can come from a verified Google Business Profile and consistent NAP data. Cross-reference verification can come from press mentions and directory listings. Structured fact anchoring can come from schema markup on your own website and authoritative directory profiles.
            </p>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Wikipedia provides a convenient, AI-readable bundle of all three signals for major brands. Local businesses need to build each of those signals through channels that are actually accessible to them. The destination is the same; the path is different.
            </p>

            {/* Inline CTA 2 */}
            <div className="ae-cta-inline rounded-xl p-5 mb-4" style={{ background: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.25)' }}>
              <p className="text-white font-semibold mb-1">Not sure which entity signals your business is missing?</p>
              <p className="text-gray-400 text-sm mb-3">Your Blind Spot Report reveals exactly where the gaps are and how AI currently sees you.</p>
              <Link href="/blindspot" className="inline-block px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105" style={{ background: '#FF6A00', color: '#fff' }}>
                Get My Blind Spot Report
              </Link>
            </div>
          </section>

          {/* Section 4: Wikidata Connection */}
          <section id="wikidata-connection" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">The Wikidata Knowledge Graph Connection</h2>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Underneath Wikipedia sits Wikidata: a structured, machine-readable knowledge base that assigns unique identifiers called Q-numbers to every entity it recognizes. When AI systems and Google's Knowledge Graph need to unambiguously identify an entity, Wikidata Q-numbers serve as the canonical reference point.
            </p>
            <p className="text-gray-300 mb-5 leading-relaxed">
              For example, a company called "Apex Services" might have dozens of businesses with similar names across the country. Wikidata's Q-number for a specific Apex Services entity allows AI platforms to distinguish which one a user is asking about, without relying on context alone. This disambiguation is valuable for AI accuracy.
            </p>

            {/* Wikidata Reality Block */}
            <div className="rounded-xl p-6 mb-8" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-bold mb-4 font-plus-jakarta">Wikidata for Local Businesses: The Honest Assessment</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2" style={{ color: '#FF6A00' }}>The theoretical upside</p>
                  <p className="text-gray-400 leading-relaxed">A Wikidata entity entry could help AI unambiguously identify your business, associate verified attributes with it, and confidently include it in relevant responses.</p>
                </div>
                <div>
                  <p className="font-semibold text-red-400 mb-2">The practical reality</p>
                  <p className="text-gray-400 leading-relaxed">Wikidata entries for local businesses are subject to the same notability scrutiny as Wikipedia. Entries without Wikipedia articles as references are routinely deleted. This is not a viable path for most local businesses.</p>
                </div>
              </div>
              <div className="mt-5 pt-4 rounded-lg p-4" style={{ background: 'rgba(255,106,0,0.06)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#FF6A00' }}>The accessible alternative</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Google's Knowledge Graph — the same system that powers Knowledge Panels — is the Wikidata equivalent for local businesses. A verified, fully populated Google Business Profile feeds structured entity data into that graph. Consistent schema markup on your website reinforces it. These are the realistic paths to entity disambiguation that AI systems use when recommending local businesses.
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-5 leading-relaxed">
              The practical implication: stop thinking about Wikidata as a target. Think about Google's Knowledge Graph as your target instead, because that is the structured entity system that influences local AI recommendations and is accessible without notability requirements.
            </p>

            {/* Related Articles */}
            <div className="rounded-xl p-6 mb-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Related Reading</p>
              <div className="space-y-2">
                <Link href="/blog/what-is-an-ai-entity-score-and-why-it-controls-your-visibility" className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors text-sm font-medium group">
                  <span className="text-gray-600 group-hover:text-orange-400">&#8594;</span>
                  What Is an AI Entity Score and Why It Controls Your Visibility
                </Link>
                <Link href="/blog/directory-listings-that-help-ai-find-business" className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors text-sm font-medium group">
                  <span className="text-gray-600 group-hover:text-orange-400">&#8594;</span>
                  The Directory Listings That Actually Help AI Find Your Business
                </Link>
              </div>
            </div>
          </section>

          {/* Section 5: Comparison Table */}
          <section id="comparison-table" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">Wikipedia's Role: Major Brands vs. Local Businesses</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The contrast between how Wikipedia functions for large brands versus local businesses is stark. Understanding this contrast clarifies exactly why the conventional wisdom around Wikipedia and AI does not apply to the businesses most people own.
            </p>

            {/* Comparison Table */}
            <div className="ae-comparison-table overflow-x-auto mb-8 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'rgba(255,106,0,0.1)', borderBottom: '1px solid rgba(255,106,0,0.2)' }}>
                    <th className="text-left px-4 py-3 text-white font-semibold">Factor</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: '#4ade80' }}>Major Brands</th>
                    <th className="text-left px-4 py-3 text-red-400 font-semibold">Local Businesses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-gray-300 font-medium">Can get a Wikipedia page?</td>
                    <td className="px-4 py-3 text-green-400">Yes — often multiple articles</td>
                    <td className="px-4 py-3 text-red-400">Almost never — will be deleted</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td className="px-4 py-3 text-gray-300 font-medium">Wikipedia impact on AI training</td>
                    <td className="px-4 py-3 text-green-400">High — entity grounding, structured facts</td>
                    <td className="px-4 py-3 text-gray-500">None — no entry exists</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-gray-300 font-medium">Wikidata entity entry</td>
                    <td className="px-4 py-3 text-green-400">Yes — Q-number assigned</td>
                    <td className="px-4 py-3 text-red-400">Deleted without Wikipedia backing</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td className="px-4 py-3 text-gray-300 font-medium">Knowledge Panel source</td>
                    <td className="px-4 py-3 text-green-400">Wikipedia + Wikidata + News</td>
                    <td className="px-4 py-3" style={{ color: '#FF6A00' }}>Google Business Profile + Schema + Directories</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-gray-300 font-medium">Primary AI citation driver</td>
                    <td className="px-4 py-3 text-green-400">Training data presence + Wikipedia</td>
                    <td className="px-4 py-3" style={{ color: '#FF6A00' }}>Directories + Reviews + Schema + Press</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td className="px-4 py-3 text-gray-300 font-medium">Entity disambiguation method</td>
                    <td className="px-4 py-3 text-green-400">Wikidata Q-number</td>
                    <td className="px-4 py-3" style={{ color: '#FF6A00' }}>Google Place ID + consistent NAP</td>
                  </tr>
                  <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-gray-300 font-medium">Realistic optimization path</td>
                    <td className="px-4 py-3 text-green-400">Update Wikipedia + press relations</td>
                    <td className="px-4 py-3" style={{ color: '#FF6A00' }}>GBP + schema + directories + reviews</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 mb-5 leading-relaxed">
              This table makes the core argument visual. The right-hand column is not a consolation prize. For local businesses, the signals in that column are the actual game. They are what ChatGPT, Perplexity, Google AI Mode, and every other AI platform evaluates when a user asks for a recommendation near them.
            </p>

            {/* Callout Orange */}
            <div className="ae-callout-orange rounded-xl p-6 mb-4" style={{ background: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.3)' }}>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5" style={{ color: '#FF6A00' }}>&#9650;</span>
                <div>
                  <p className="font-bold mb-2" style={{ color: '#FF6A00' }}>The Real Competitive Insight</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Your competitors chasing Wikipedia are wasting time on a path that leads nowhere for local businesses. Every week they spend on that distraction is a week you could be building the entity signals that AI platforms actually use. The playing field is tilted toward businesses that understand where to play.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Accessible Signals */}
          <section id="accessible-signals" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">The Entity Signals Local Businesses Can Actually Build</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The good news is that the entity signals AI platforms use for local business recommendations are accessible to every business willing to do the work. Here is the landscape of what matters and why.
            </p>

            {/* Signal Blocks */}
            <div className="space-y-4 mb-8">
              <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-lg font-bold font-plus-jakarta" style={{ background: 'rgba(255,106,0,0.15)', color: '#FF6A00' }}>1</div>
                  <div>
                    <h3 className="text-white font-bold mb-2 font-plus-jakarta">Google Business Profile and Knowledge Panel</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      A fully verified and populated Google Business Profile is the single most important entity signal for local AI recommendations. It feeds the Knowledge Graph with confirmed location data, service categories, hours, and business attributes. When AI platforms look for structured entity data about local businesses, Google's Knowledge Graph is where they find it — and your GBP is the primary input.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-lg font-bold font-plus-jakarta" style={{ background: 'rgba(255,106,0,0.15)', color: '#FF6A00' }}>2</div>
                  <div>
                    <h3 className="text-white font-bold mb-2 font-plus-jakarta">Structured Schema Markup</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Schema.org markup on your website translates your content into machine-readable signals. LocalBusiness schema, Service schema, Review schema, and FAQ schema give AI systems the structured facts they need to confidently include your business in relevant responses. Pages with correct schema markup receive significantly more AI citations than unstructured pages covering the same content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-lg font-bold font-plus-jakarta" style={{ background: 'rgba(255,106,0,0.15)', color: '#FF6A00' }}>3</div>
                  <div>
                    <h3 className="text-white font-bold mb-2 font-plus-jakarta">Authoritative Directory Listings</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Consistent business information across authoritative directories — Yelp, BBB, Angi, Houzz, Healthgrades, Avvo, and industry-specific platforms — creates the cross-reference verification that Wikipedia provides for large brands. When AI systems see the same entity information confirmed across 50+ independent sources, confidence in that entity rises significantly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-lg font-bold font-plus-jakarta" style={{ background: 'rgba(255,106,0,0.15)', color: '#FF6A00' }}>4</div>
                  <div>
                    <h3 className="text-white font-bold mb-2 font-plus-jakarta">Press Mentions and Editorial Coverage</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Coverage in local news outlets, industry publications, and community websites functions like a scaled-down version of the independent source citations Wikipedia requires. Each mention from a credible, independent source adds to your entity's authority footprint. A business featured in five local press pieces has a measurably stronger AI authority signal than one with no press presence at all.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-lg font-bold font-plus-jakarta" style={{ background: 'rgba(255,106,0,0.15)', color: '#FF6A00' }}>5</div>
                  <div>
                    <h3 className="text-white font-bold mb-2 font-plus-jakarta">Review Platform Authority</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Review signals from Google, Yelp, and industry-specific platforms represent user-generated cross-reference validation at scale. A business with 200 reviews across four platforms has a far stronger consensus signal than one with 10 reviews on a single platform. AI systems treat high review volume as evidence of genuine market presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inline CTA 3 */}
            <div className="ae-cta-inline rounded-xl p-5" style={{ background: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.25)' }}>
              <p className="text-white font-semibold mb-1">Want to know which of these signals you're missing?</p>
              <p className="text-gray-400 text-sm mb-3">Our Blind Spot Report audits your complete entity footprint against what AI platforms expect to see.</p>
              <Link href="/blindspot" className="inline-block px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105 mr-3" style={{ background: '#FF6A00', color: '#fff' }}>
                Get My Free Blind Spot Report
              </Link>
              <a href="tel:+12134442229" className="inline-block px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}>
                Call (213) 444-2229
              </a>
            </div>
          </section>

          {/* Section 7: Entity Score */}
          <section id="entity-score" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">The Entity Score Concept: AI Knows More Than Wikipedia</h2>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Modern AI platforms do not rely solely on any single data source to evaluate business authority. They compute what researchers and practitioners call an entity score: a composite confidence rating based on how consistently and how widely a business appears across independent data points.
            </p>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Wikipedia is one input into that score for businesses that have a page. But it is one input among many. The entity score draws on training data breadth, real-time retrieval quality, structured data presence, review platform footprint, and cross-domain mention consistency. A business that scores well across all of those dimensions while lacking a Wikipedia entry will outperform a business with a thin Wikipedia page but weak presence everywhere else.
            </p>

            {/* Entity Score Visual */}
            <div className="rounded-2xl p-6 mb-8" style={{ background: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.2)' }}>
              <h3 className="text-white font-bold mb-5 font-plus-jakarta text-center">What Builds an AI Entity Score for Local Businesses</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 rounded-full" style={{ background: '#FF6A00', width: '90%' }}></div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">Verified GBP + Knowledge Panel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 rounded-full" style={{ background: '#FF6A00', width: '85%' }}></div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">50+ Consistent Directory Listings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 rounded-full" style={{ background: '#FF6A00', width: '80%' }}></div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">Schema Markup (LocalBusiness + FAQ)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 rounded-full" style={{ background: '#FF6A00', width: '75%' }}></div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">Review Volume Across Platforms</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 rounded-full" style={{ background: '#FF6A00', width: '65%' }}></div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">Local Press Mentions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 rounded-full" style={{ background: '#FF6A00', width: '55%' }}></div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">Industry Association Listings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 rounded-full" style={{ background: '#FF6A00', width: '45%' }}></div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">Fresh On-Site Content</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 rounded-full" style={{ background: 'rgba(255,106,0,0.3)', width: '10%' }}></div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">Wikipedia (inaccessible to 99.9%)</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-5 leading-relaxed">
              The visualization above is simplified, but the proportional logic is accurate. For local businesses, the entity score levers that matter are all accessible. Wikipedia sits at the bottom of the chart not because it is unimportant for those who qualify — it is genuinely valuable for major brands — but because it is irrelevant as an optimization target for local businesses.
            </p>

            <Link href="/blog/what-is-an-ai-entity-score-and-why-it-controls-your-visibility" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-orange-300" style={{ color: '#FF6A00' }}>
              <span>&#8594;</span>
              Deep dive: What Is an AI Entity Score and Why It Controls Your Visibility
            </Link>
          </section>

          {/* Section 8: Press and Directories */}
          <section id="press-and-directories" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">Why Press Mentions and Directories Matter More for Local Businesses</h2>
            <p className="text-gray-300 mb-5 leading-relaxed">
              If Wikipedia's authority comes from independent sources validating an entity's existence and importance, local businesses need to build their own version of that independent validation ecosystem. Press mentions and authoritative directory listings are the two most powerful tools for that goal.
            </p>

            {/* Press vs Directory Cards */}
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-4 font-plus-jakarta flex items-center gap-2">
                  <span className="text-xl">&#128240;</span> Press Mentions
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FF6A00' }} className="mt-0.5 font-bold">&#8226;</span>
                    Local news features establish your business as a real, notable entity in your market
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FF6A00' }} className="mt-0.5 font-bold">&#8226;</span>
                    Industry publication mentions signal category expertise to AI systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FF6A00' }} className="mt-0.5 font-bold">&#8226;</span>
                    Community blog features and roundups create the web-wide mention footprint AI looks for
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FF6A00' }} className="mt-0.5 font-bold">&#8226;</span>
                    Award announcements from local business organizations carry third-party credibility
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FF6A00' }} className="mt-0.5 font-bold">&#8226;</span>
                    Each mention is an independent source cross-validating your entity's existence
                  </li>
                </ul>
              </div>
              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-4 font-plus-jakarta flex items-center gap-2">
                  <span className="text-xl">&#128193;</span> Authoritative Directories
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FF6A00' }} className="mt-0.5 font-bold">&#8226;</span>
                    Each directory listing is an independent source confirming your NAP data
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FF6A00' }} className="mt-0.5 font-bold">&#8226;</span>
                    Industry-specific directories signal category authority to AI systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FF6A00' }} className="mt-0.5 font-bold">&#8226;</span>
                    Government and association registries carry the highest trust signals
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FF6A00' }} className="mt-0.5 font-bold">&#8226;</span>
                    50+ consistent listings create a web-wide consensus that AI treats as entity validation
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FF6A00' }} className="mt-0.5 font-bold">&#8226;</span>
                    Inconsistencies between listings actively degrade AI confidence in your entity
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 mb-5 leading-relaxed">
              The compounding effect of press mentions and directory listings mirrors what Wikipedia does for major brands, but through channels local businesses can actually access. A business with 8 press features and 60 consistent directory listings has a stronger local AI authority signal than a business with a thin Wikipedia page and nothing else.
            </p>

            {/* Internal Link */}
            <Link href="/blog/how-press-mentions-help-ai-recommend-you" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-orange-300 mb-4" style={{ color: '#FF6A00' }}>
              <span>&#8594;</span>
              How Press Mentions Help AI Recommend Your Business
            </Link>
          </section>

          {/* 3-Tier CTA Block */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Skip Wikipedia. Find the Signals That Actually Work for Your Business.</h3>
            <p className="text-gray-400 mb-6">Your Blind Spot Report shows the actual gaps between you and the businesses AI keeps recommending instead.</p>
            <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#FF6A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors">
              Get Your Free Blind Spot Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
              <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (213) 444-2229
              </a>
              <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                support@theanswerengine.ai
              </a>
            </div>
          </div>

          {/* Section 9: Decision Matrix */}
          <section id="decision-matrix" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">Decision Matrix: Where to Invest Your Authority-Building Effort</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Given everything above, the strategic question for local businesses is not "how do I get on Wikipedia" but "where should I invest time and resources to maximize my AI entity authority?" This matrix maps it out clearly.
            </p>

            <div className="ae-decision-matrix overflow-x-auto rounded-xl mb-8" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'rgba(255,106,0,0.1)', borderBottom: '1px solid rgba(255,106,0,0.2)' }}>
                    <th className="text-left px-4 py-3 text-white font-semibold">Signal</th>
                    <th className="text-left px-4 py-3 text-white font-semibold">Accessible to Local Biz?</th>
                    <th className="text-left px-4 py-3 text-white font-semibold">AI Impact</th>
                    <th className="text-left px-4 py-3 text-white font-semibold">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-white font-medium">Verified Google Business Profile</td>
                    <td className="px-4 py-3 text-green-400">Yes</td>
                    <td className="px-4 py-3 text-green-400">Very High</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: '#FF6A00' }}>Do First</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td className="px-4 py-3 text-white font-medium">LocalBusiness Schema Markup</td>
                    <td className="px-4 py-3 text-green-400">Yes</td>
                    <td className="px-4 py-3 text-green-400">High</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: '#FF6A00' }}>Do First</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-white font-medium">50+ Directory Listings (consistent NAP)</td>
                    <td className="px-4 py-3 text-green-400">Yes</td>
                    <td className="px-4 py-3 text-green-400">High</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: '#FF6A00' }}>Do First</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td className="px-4 py-3 text-white font-medium">Review Volume (Google + Yelp + niche)</td>
                    <td className="px-4 py-3 text-green-400">Yes</td>
                    <td className="px-4 py-3 text-green-400">High</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: '#FF6A00' }}>Do First</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-white font-medium">Local and Industry Press Mentions</td>
                    <td className="px-4 py-3 text-green-400">Yes — with effort</td>
                    <td className="px-4 py-3 text-green-400">Moderate-High</td>
                    <td className="px-4 py-3 text-yellow-400 font-semibold">Do Next</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td className="px-4 py-3 text-white font-medium">Authoritative Expert Content + FAQ Schema</td>
                    <td className="px-4 py-3 text-green-400">Yes</td>
                    <td className="px-4 py-3 text-green-400">Moderate-High</td>
                    <td className="px-4 py-3 text-yellow-400 font-semibold">Do Next</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-white font-medium">Wikidata Entity Entry</td>
                    <td className="px-4 py-3 text-red-400">Almost Never</td>
                    <td className="px-4 py-3 text-gray-500">Low (if deleted)</td>
                    <td className="px-4 py-3 text-gray-500 font-semibold">Skip</td>
                  </tr>
                  <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 text-white font-medium">Wikipedia Page</td>
                    <td className="px-4 py-3 text-red-400">No (will be deleted)</td>
                    <td className="px-4 py-3 text-gray-500">None</td>
                    <td className="px-4 py-3 text-gray-500 font-semibold">Skip</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed">
              The matrix tells a clear story. The top four rows are foundational — every local business should have all four in place before thinking about anything else. The next two rows are meaningful amplifiers once the foundation is solid. Wikipedia and Wikidata sit at the bottom not as insults to those platforms, but as an honest reflection of their accessibility and relevance for local businesses.
            </p>
          </section>

          {/* Pros/Cons: Wikipedia Pursuit vs Entity Building */}
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">Wikipedia Pursuit vs. Entity Signal Building: An Honest Comparison</h2>
            <div className="ae-pros-cons grid sm:grid-cols-2 gap-5 mb-6">
              <div className="rounded-xl p-5" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <h3 className="text-red-400 font-bold mb-4 font-plus-jakarta flex items-center gap-2">
                  <span>&#215;</span> Chasing Wikipedia
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Will almost certainly be deleted for local businesses</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Requires notability standards most businesses cannot meet</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Cannot contain marketing language or CTAs</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Consumes significant time with near-zero return</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> Gives competitors time advantage on the signals that actually work</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#8226;</span> May violate Wikipedia's conflict-of-interest policies</li>
                </ul>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)' }}>
                <h3 className="text-green-400 font-bold mb-4 font-plus-jakarta flex items-center gap-2">
                  <span>&#10003;</span> Building Entity Signals
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Fully accessible to every local business regardless of size</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Directly influences the AI platforms customers actually use</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Builds compounding authority over time</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Returns visible results within 60-90 days for most businesses</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Supports both AI visibility and traditional local SEO</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#8226;</span> Defensible competitive moat that is hard to replicate quickly</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 10: Cheat Sheet */}
          <section id="cheat-sheet" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-plus-jakarta">Wikipedia Myth Cheat Sheet</h2>

            <div className="ae-cheat-sheet rounded-2xl p-7" style={{ background: 'rgba(255,106,0,0.05)', border: '2px solid rgba(255,106,0,0.25)' }}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-4 font-plus-jakarta" style={{ color: '#FF6A00' }}>The Myths to Stop Believing</h3>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">&#215;</span>
                      "Getting on Wikipedia will help AI find my business"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">&#215;</span>
                      "If I create a Wikidata entry, AI will recognize me better"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">&#215;</span>
                      "AI needs Wikipedia to know my business is real"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">&#215;</span>
                      "Big brands dominate AI because of Wikipedia"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">&#215;</span>
                      "There's no alternative to Wikipedia-level authority for local businesses"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">&#215;</span>
                      "Paying someone to create a Wikipedia page is a legitimate service"
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-4 font-plus-jakarta" style={{ color: '#4ade80' }}>The Truths to Act On</h3>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      Verified GBP is your Knowledge Graph entry — use it fully
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      50+ consistent directory listings = cross-reference validation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      Schema markup translates your site into AI-readable structure
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      Press mentions build independent source validation at local scale
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      Review volume signals genuine market presence to AI systems
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold mt-0.5">&#10003;</span>
                      AI entity scores respond to accessible signals — not Wikipedia
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,106,0,0.2)' }}>
                <p className="text-sm font-semibold mb-3" style={{ color: '#FF6A00' }}>The Verdict by Business Type</p>
                <div className="grid sm:grid-cols-3 gap-3 text-xs text-gray-400">
                  <div className="rounded-lg p-3" style={{ background: 'rgba(0,0,0,0.3)' }}>
                    <p className="font-semibold text-white mb-1">Local Service Business</p>
                    <p>Wikipedia is irrelevant. Focus 100% on GBP, directories, schema, and reviews. These are where your AI citations come from.</p>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: 'rgba(0,0,0,0.3)' }}>
                    <p className="font-semibold text-white mb-1">Regional or Multi-Location</p>
                    <p>Still no Wikipedia path. Add press outreach and industry association listings to your entity-building strategy for amplified regional signals.</p>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: 'rgba(0,0,0,0.3)' }}>
                    <p className="font-semibold text-white mb-1">National Brand or Franchise</p>
                    <p>A Wikipedia page may be achievable and worth pursuing. But only as a complement to the entity signals above, never a replacement.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Reading Block */}
          <section className="rounded-xl p-6 mb-14" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 className="text-white font-bold mb-4 font-plus-jakarta">Keep Reading</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/blog/what-is-an-ai-entity-score-and-why-it-controls-your-visibility" className="block rounded-lg p-4 transition-all hover:scale-[1.02]" style={{ background: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
                <p className="text-white text-sm font-semibold leading-snug mb-1">What Is an AI Entity Score and Why It Controls Your Visibility</p>
                <p className="text-gray-500 text-xs">The composite authority signal AI platforms actually use</p>
              </Link>
              <Link href="/blog/directory-listings-that-help-ai-find-business" className="block rounded-lg p-4 transition-all hover:scale-[1.02]" style={{ background: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
                <p className="text-white text-sm font-semibold leading-snug mb-1">The Directory Listings That Actually Help AI Find Your Business</p>
                <p className="text-gray-500 text-xs">Which platforms carry real AI citation weight</p>
              </Link>
              <Link href="/blog/how-press-mentions-help-ai-recommend-you" className="block rounded-lg p-4 transition-all hover:scale-[1.02]" style={{ background: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.2)' }}>
                <p className="text-white text-sm font-semibold leading-snug mb-1">How Press Mentions Help AI Recommend Your Business</p>
                <p className="text-gray-500 text-xs">Building independent validation at local scale</p>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-plus-jakarta">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-3 font-plus-jakarta">Can a local business get a Wikipedia page to help AI search visibility?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Almost certainly not. Wikipedia's notability guidelines require significant coverage in reliable, independent published sources. A local business — no matter how excellent — will not meet this bar. Wikipedia editors actively delete pages created for local businesses, viewing them as promotional content. The realistic path is building entity signals that are actually accessible: knowledge panels, structured data, authoritative directory mentions, and press coverage.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-3 font-plus-jakarta">Does Wikipedia help AI like ChatGPT recommend businesses?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wikipedia is a significant training source for large language models and does influence AI entity recognition — but almost entirely for national brands and public figures with genuine notability. For local businesses, Wikipedia plays no meaningful role in AI recommendation engines. The signals that actually drive local business recommendations are structured data, consistent directory presence, authoritative third-party mentions, and review platform authority.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-3 font-plus-jakarta">If I can't get on Wikipedia, what gives me the same type of authority signal?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The entity signals accessible to local businesses include a verified Google Business Profile, consistent NAP data across 50+ authoritative directories, structured schema markup on your website, press mentions in local and regional publications, and professional association listings. Together, these build an entity footprint that AI platforms use to confidently recognize and recommend your business — without requiring Wikipedia.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-3 font-plus-jakarta">Why does AI seem to know a lot about big brands but little about my local business?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Large brands appear extensively in AI training data: news articles, Wikipedia entries, industry publications, financial filings, and millions of web pages referencing them. Local businesses generate a much smaller information footprint. AI systems see fewer consistent, cross-validated mentions and therefore have lower confidence when recommending them. The solution is systematically building that footprint through the channels available to local businesses.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-3 font-plus-jakarta">What is Wikidata and does it affect AI recommendations for local businesses?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wikidata is a structured knowledge base that underpins Wikipedia and feeds Google's Knowledge Graph. Entities in Wikidata get unique Q-number identifiers that AI platforms use for unambiguous entity resolution. However, Wikidata entries for local businesses carry essentially the same notability hurdles as Wikipedia. The practical alternative is ensuring your Google Business Profile and structured data are complete and consistent, which feeds the same Knowledge Graph through accessible channels.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-3 font-plus-jakarta">Does having a Google Knowledge Panel replace Wikipedia for AI visibility?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A verified Google Knowledge Panel is arguably more valuable than a Wikipedia page for local business AI visibility. It signals to Google's systems — and to Google AI Mode and Google-integrated AI tools — that your business is a confirmed, real-world entity with verified attributes. It feeds structured entity data into the same Knowledge Graph that Wikipedia entries contribute to. For local businesses, earning and optimizing a Knowledge Panel is a realistic, high-impact goal that Wikipedia simply is not.
                </p>
              </div>

              <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold mb-3 font-plus-jakarta">How much does a Wikipedia page actually help AI recommend a business?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For major brands and nationally recognized organizations, a Wikipedia page provides meaningful AI authority signals through entity recognition, cross-referenced facts, and training data presence. For the vast majority of local businesses — which will never qualify — the question is moot. The more productive question is what entity signals ARE accessible and how to maximize them. Structured data, authoritative directories, press mentions, and a verified Knowledge Panel together create an entity profile that moves the needle for local AI recommendations.
                </p>
              </div>
            </div>
          </section>

          {/* Author Card */}
          <div className="ae-author-card rounded-xl p-6 mb-14" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl shrink-0" style={{ background: 'rgba(255,106,0,0.15)', border: '2px solid rgba(255,106,0,0.3)' }}>
                &#128161;
              </div>
              <div>
                <p className="text-white font-bold font-plus-jakarta mb-1">The Answer Engine Team</p>
                <p className="text-xs mb-3" style={{ color: '#FF6A00' }}>AI Search Optimization Specialists</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The Answer Engine is a Los Angeles-based AEO agency helping businesses of all sizes achieve consistent visibility across ChatGPT, Perplexity, Google AI Mode, and every other AI search platform shaping how customers find services today.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <section className="ae-final-cta rounded-2xl p-10 text-center mb-8" style={{ background: 'linear-gradient(135deg, rgba(255,106,0,0.15) 0%, rgba(255,106,0,0.05) 100%)', border: '2px solid rgba(255,106,0,0.4)', boxShadow: '0 0 40px rgba(255,106,0,0.15), 0 0 80px rgba(255,106,0,0.05)' }}>
            <div className="ae-final-cta-pulse text-4xl mb-4">&#128269;</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-plus-jakarta">
              Stop Chasing Wikipedia. Start Building What AI Actually Looks For.
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              The businesses that win in AI search are not the ones who got lucky with a Wikipedia page. They are the ones who built a dense, consistent, multi-platform entity footprint — and your Blind Spot Report shows exactly what yours is missing right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/blindspot" className="px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105" style={{ background: '#FF6A00', color: '#fff', boxShadow: '0 0 20px rgba(255,106,0,0.4)' }}>
                Get My Free Blind Spot Report
              </Link>
              <a href="tel:+12134442229" className="px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105" style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}>
                Call (213) 444-2229
              </a>
            </div>
            <p className="text-gray-600 text-sm mt-6">
              Free assessment. No commitment. Just answers.{' '}
              <a href="mailto:support@theanswerengine.ai" className="hover:text-gray-400 transition-colors" style={{ color: '#FF6A00' }}>
                support@theanswerengine.ai
              </a>
            </p>
          </section>

        </article>
      </main>
    </>
  )
}
