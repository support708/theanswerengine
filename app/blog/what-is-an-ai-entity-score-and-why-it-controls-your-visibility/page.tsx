import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'What Is an AI Entity Score and Why It Controls Your Visibility'
const description = 'AI platforms assign an invisible confidence score to every business before deciding whether to recommend it. Learn what drives that score and why most businesses fail this test without knowing it.'
const slug = 'what-is-an-ai-entity-score-and-why-it-controls-your-visibility'
const publishDate = '2026-04-20'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI entity score',
    'business AI visibility score',
    'entity authority AI search',
    'AI confidence score local business',
    'entity drift AI',
    'knowledge graph business visibility',
    'AI entity recognition local business',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://theanswerengine.ai/blog/${slug}`,
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
    title,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
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
      headline: title,
      description,
      image: {
        '@type': 'ImageObject',
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
      },
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
        knowsAbout: ['Answer Engine Optimization', 'AI Search', 'Content Strategy', 'Real Estate Marketing', 'Citation Surface'],
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
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://theanswerengine.ai/blog/${slug}`,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an AI entity score?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An AI entity score is the internal confidence rating that AI platforms assign to a business based on how consistently and authoritatively it appears across the web. It is not a formal published metric. It is the aggregate of how much an AI system trusts the information it has found about your business entity: name, location, services, expertise, and relationships to other known entities.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is entity drift and why does it hurt AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Entity drift occurs when your business information is inconsistent across different sources. If your website says your phone is one number but your Yelp listing says a different number, AI systems see a contradiction. That contradiction lowers their confidence in what they know about you, reducing both the likelihood and prominence of recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does schema markup improve an AI entity score?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, significantly. Pages with proper LocalBusiness schema markup are 3 times more likely to earn AI citations than pages without it. Schema markup translates your business information into a format that AI systems are designed to read and trust, reducing ambiguity and increasing confidence in your entity representation.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is an AI entity score different from an SEO ranking?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SEO ranking scores individual web pages based on keyword relevance, backlinks, and technical factors. An AI entity score rates the business itself as a real-world entity: how well-defined, consistent, and trustworthy is the overall picture of this business across all available sources. A business can rank well in SEO while having a weak entity score, and vice versa.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a new business build a strong AI entity score quickly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, sometimes faster than established businesses if the entity foundation is built correctly from the start. Consistency is more important than longevity for AI entity scores. A new business with perfect NAP consistency, clear schema markup, strong directory presence, and authoritative service content can achieve AI citations within 6 to 12 weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the relationship between knowledge graphs and entity scores?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms use knowledge graphs to map relationships between entities. Your business entity connects to location entities, category entities, review entities, and related service entities. A well-connected, consistent knowledge graph entry for your business increases the confidence with which AI systems can recommend you for specific queries.',
          },
        },
      ],
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
          name: title,
          item: `https://theanswerengine.ai/blog/${slug}`,
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

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8 pb-0">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li className="text-gray-600">/</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          <li className="text-gray-600">/</li>
          <li className="text-gray-400 truncate">What Is an AI Entity Score</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1f2e] to-[#0F1117] border border-white/5 p-10">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="entity-net-a197" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <circle cx="25" cy="25" r="8" fill="none" stroke="#F27D24" strokeWidth="0.5" />
                  <line x1="25" y1="0" x2="25" y2="17" stroke="#F27D24" strokeWidth="0.3" />
                  <line x1="0" y1="25" x2="17" y2="25" stroke="#F27D24" strokeWidth="0.3" />
                  <line x1="33" y1="25" x2="50" y2="25" stroke="#F27D24" strokeWidth="0.3" />
                  <line x1="25" y1="33" x2="25" y2="50" stroke="#F27D24" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#entity-net-a197)" />
            </svg>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="ae-section-label">AEO Education</span>
              <span className="ae-section-label" style={{ background: 'rgba(168,85,247,0.1)', color: '#c084fc', borderColor: 'rgba(168,85,247,0.2)' }}>Core Concept</span>
            </div>
            <h1 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What Is an AI Entity Score and Why It Controls Your Visibility
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Before ChatGPT or Perplexity recommends your business, it runs an invisible evaluation. It does not ask if your website looks good. It asks how confident it is in what it knows about you as an entity. That confidence score is what controls whether you get recommended or invisible.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>By Justin Borges</span>
              <span>12 min read</span>
              <span>April 20, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="ae-stats-grid">
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">3x</div>
            <div className="ae-stat-value">More Citations</div>
            <div className="ae-stat-label">Pages with proper schema markup earn 3x more AI citations than pages without it</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">50%+</div>
            <div className="ae-stat-value">Citation Lift</div>
            <div className="ae-stat-label">Content leveraging structured entity data improves AI citation probability by over 50%</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">20-35%</div>
            <div className="ae-stat-value">More Mentions</div>
            <div className="ae-stat-label">Optimized local citation profiles increase AI mentions by 20% to 35% across platforms</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">65</div>
            <div className="ae-stat-value">Known Factors</div>
            <div className="ae-stat-label">Research has identified 65 factors that influence whether a business appears in AI search answers</div>
          </div>
        </div>
      </section>

      {/* TOC */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="ae-toc">
          <div className="ae-toc-title">What You Will Learn</div>
          <ol>
            <li><a href="#what-is-it">What an AI entity score actually is</a></li>
            <li><a href="#how-it-works">How AI builds a confidence score for your business</a></li>
            <li><a href="#entity-drift">Entity drift: the silent killer of AI visibility</a></li>
            <li><a href="#knowledge-graph">How knowledge graphs connect to your entity score</a></li>
            <li><a href="#score-factors">The key factors that build or destroy entity confidence</a></li>
            <li><a href="#improvement">What improving your entity score actually looks like</a></li>
            <li><a href="#faq">Frequently asked questions</a></li>
          </ol>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6">

        <section id="what-is-it">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mt-12 mb-6">
            What an AI Entity Score Actually Is
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            There is no single published metric called an "AI entity score." What we are describing is the internal confidence calculation that every AI platform runs before it decides whether to recommend a business, what to say about it, and how prominently to feature it in responses.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Think of it this way: when you ask ChatGPT to recommend a plumber near you, the AI does not flip through a mental Rolodex. It evaluates every business entity it has information about and asks an implicit question: how confident am I in what I know about this entity? High confidence means the business gets recommended. Low confidence means the business gets skipped, regardless of how good it actually is.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            This confidence evaluation is not based on how popular your business is, how many years you have been open, or how beautiful your website looks. It is based on the clarity, consistency, and authority of the information AI systems can find about your business across the entire web.
          </p>

          <div className="ae-callout ae-callout-info">
            <div className="ae-callout-title">Why This Concept Matters More Than Any SEO Metric</div>
            <p>Traditional SEO optimizes individual pages for keyword rankings. Entity authority optimizes your business as a whole for AI confidence. A business with perfect SEO but low entity authority will not get recommended by AI. A business with modest SEO but strong entity authority will. This is the fundamental shift most businesses have not yet internalized.</p>
          </div>

          <div className="ae-cta-inline">
            <p>Want to know your current entity score across AI platforms? <Link href="/blindspot">Get your free Blind Spot Report</Link> and see exactly where your entity authority is strong and where it is costing you recommendations.</p>
          </div>
        </section>

        <section id="how-it-works">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mt-12 mb-6">
            How AI Builds a Confidence Score for Your Business
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            AI platforms build their understanding of your business through a process that resembles investigative research. They gather data from multiple sources, look for consistency, weigh the authority of each source, and synthesize a picture of who you are, what you do, where you are, and whether you can be trusted.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            The process is not linear and is not transparent to the business. You cannot check your entity score the way you check a Google Analytics dashboard. But you can understand the factors that build it and take actions that improve it systematically.
          </p>

          <div className="ae-timeline">
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">1</div>
              <div>
                <div className="ae-timeline-title">Entity Identification</div>
                <div className="ae-timeline-desc">The AI first tries to determine if your business is a distinct, real-world entity. Does it appear consistently enough across sources to be identified as a unique entity, separate from other businesses with similar names or in similar categories?</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">2</div>
              <div>
                <div className="ae-timeline-title">Attribute Verification</div>
                <div className="ae-timeline-desc">Once the entity is identified, the AI checks attributes: name, address, phone, website, services offered, operating hours, and service area. It compares these attributes across multiple sources looking for consistency. Disagreements lower confidence. Perfect consistency raises it.</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">3</div>
              <div>
                <div className="ae-timeline-title">Authority Weighting</div>
                <div className="ae-timeline-desc">Not all sources are weighted equally. Information from your official website, your Google Business Profile, and recognized industry directories carries more weight than information from an obscure listing site or a user-generated forum. The AI weights source authority heavily in its confidence calculation.</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">4</div>
              <div>
                <div className="ae-timeline-title">Confidence Score Assignment</div>
                <div className="ae-timeline-desc">All of this resolves into an implicit confidence score that determines recommendation likelihood. High confidence entities get recommended proactively. Medium confidence entities may appear in broader lists. Low confidence entities get skipped entirely because the AI is not sure enough about them to stake its credibility on a recommendation.</div>
              </div>
            </div>
          </div>

          <div className="ae-cta-inline">
            <p>Curious how AI is currently scoring your business entity? <Link href="/blindspot">Get your free Blind Spot Report</Link> and see your entity confidence across ChatGPT, Perplexity, and Google AI.</p>
          </div>
        </section>

        <section id="entity-drift">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mt-12 mb-6">
            Entity Drift: The Silent Killer of AI Visibility
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Entity drift is what happens when your business information diverges across different platforms over time. It happens to almost every business, often without anyone noticing, through a series of completely normal events.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Your business moves, but only some directories get updated. You change your phone number, but old listings still have the old number. You rebrand and change your business name slightly, but ten directory listings still have the old name. You expand your services, but most of your older content does not reflect the new offerings.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Each inconsistency is minor. Together they create entity drift, and entity drift lowers the AI confidence score that determines whether you get recommended. A business with significant entity drift may have excellent services and hundreds of happy customers but be nearly invisible to AI platforms because the information about it is contradictory.
          </p>

          <div className="ae-callout ae-callout-warning">
            <div className="ae-callout-title">The Drift Acceleration Problem</div>
            <p>Entity drift tends to get worse over time, not better. Every year that passes without active maintenance adds more inconsistencies across more platforms. Old directory listings do not disappear just because you stopped using them. Old blog posts with outdated information stay indexed. The cumulative effect compounds, and the AI confidence score continues to decline.</p>
          </div>

          <h3 className="font-plus-jakarta text-2xl font-bold text-white mt-10 mb-4">
            Common Sources of Entity Drift
          </h3>

          <table className="ae-comparison-table">
            <thead>
              <tr>
                <th>Trigger Event</th>
                <th>Entity Drift Created</th>
                <th>AI Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Business relocation</td>
                <td>Old address still in dozens of directories</td>
                <td>High: location is a primary entity attribute</td>
              </tr>
              <tr>
                <td>Phone number change</td>
                <td>Old number in citations, old number in reviews</td>
                <td>High: phone is a core NAP identifier</td>
              </tr>
              <tr>
                <td>Name change or rebrand</td>
                <td>Old name in old directories, new name on website</td>
                <td>Critical: name is the primary entity identifier</td>
              </tr>
              <tr>
                <td>Adding new services</td>
                <td>Old content does not mention new services</td>
                <td>Medium: limits AI understanding of service scope</td>
              </tr>
              <tr>
                <td>Price changes</td>
                <td>Old blog posts still mention previous rates</td>
                <td>Medium-High: creates factual conflict for AI</td>
              </tr>
              <tr>
                <td>Website redesign</td>
                <td>URLs change, schema may be removed or broken</td>
                <td>Medium: can break structured data signals</td>
              </tr>
            </tbody>
          </table>

          <div className="ae-cta-inline mt-6">
            <p>Concerned about entity drift in your business? <Link href="/blindspot">Get your free Blind Spot Report</Link> to see exactly where inconsistencies are lowering your AI entity confidence score.</p>
          </div>
        </section>

        <section id="knowledge-graph">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mt-12 mb-6">
            How Knowledge Graphs Connect to Your Entity Score
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Knowledge graphs are the underlying data structures that AI platforms use to map relationships between entities. Your business is a node in this graph. It connects to location nodes, category nodes, review nodes, service nodes, and related business nodes.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            A well-connected, consistent knowledge graph entry for your business increases the confidence with which AI systems can recommend you. It is not just about what AI knows about you directly. It is about how well your entity connects to other known, trusted entities in the graph.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            A plumber in Chicago who is connected to known plumbing contractors associations, mentioned in local news, listed in recognized trade directories, and consistent with the "plumber" category entity will have a richer, more trustworthy knowledge graph entry than a plumber with only a website and a Google Business Profile.
          </p>

          <div className="ae-callout ae-callout-success">
            <div className="ae-callout-title">The Connection Density Principle</div>
            <p>The more your business entity connects to other trusted entities in the knowledge graph, the higher its confidence score. This is why third-party mentions in authoritative publications, industry association listings, and category-specific directories matter so much for AI visibility. They are not just links. They are connections that increase your entity's credibility in the graph.</p>
          </div>

          <div className="ae-cta-inline">
            <p>Want to know how well-connected your entity is in the AI knowledge graph? <a href="tel:+12134442229">Call (213) 444-2229</a> for a knowledge graph analysis of your business.</p>
          </div>
        </section>

        <section id="score-factors">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mt-12 mb-6">
            The Key Factors That Build or Destroy Entity Confidence
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Research has identified 65 factors that influence whether a business appears in AI search answers. Not all are equally weighted, and the weights vary by platform and query type. But the factors that most consistently move the needle fall into recognizable patterns.
          </p>

          <div className="ae-bar-group">
            <div className="ae-bar-item">
              <span className="ae-bar-label">NAP consistency across 15+ directories</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '95%', background: '#22c55e' }}></div>
              </div>
              <span className="ae-bar-value" style={{ color: '#22c55e' }}>Highest impact</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Structured schema markup (LocalBusiness)</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '88%', background: '#22c55e' }}></div>
              </div>
              <span className="ae-bar-value" style={{ color: '#22c55e' }}>Very high impact</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Google Business Profile completeness</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '82%', background: '#22c55e' }}></div>
              </div>
              <span className="ae-bar-value" style={{ color: '#22c55e' }}>Very high impact</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Service-specific content depth</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '78%', background: '#F27D24' }}></div>
              </div>
              <span className="ae-bar-value" style={{ color: '#F27D24' }}>High impact</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Third-party authoritative mentions</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '72%', background: '#F27D24' }}></div>
              </div>
              <span className="ae-bar-value" style={{ color: '#F27D24' }}>High impact</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Review volume and specificity</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '65%', background: '#F27D24' }}></div>
              </div>
              <span className="ae-bar-value" style={{ color: '#F27D24' }}>High impact</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Industry directory presence</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '58%', background: '#eab308' }}></div>
              </div>
              <span className="ae-bar-value" style={{ color: '#eab308' }}>Medium-high impact</span>
            </div>
            <div className="ae-bar-item">
              <span className="ae-bar-label">Content freshness and recency</span>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '45%', background: '#eab308' }}></div>
              </div>
              <span className="ae-bar-value" style={{ color: '#eab308' }}>Medium impact</span>
            </div>
          </div>

          <div className="ae-pros-cons">
            <div className="ae-pros-box">
              <h4>What Raises Entity Confidence</h4>
              <ul>
                <li>Perfect NAP consistency across all sources</li>
                <li>Structured schema markup that clearly defines entity attributes</li>
                <li>Rich service-specific content demonstrating expertise</li>
                <li>Mentions in authoritative industry publications</li>
                <li>Strong, specific reviews that confirm entity attributes</li>
                <li>Presence in category-appropriate directories</li>
                <li>Regular content updates that maintain information freshness</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <h4>What Destroys Entity Confidence</h4>
              <ul>
                <li>NAP inconsistencies across directories</li>
                <li>Missing or broken schema markup</li>
                <li>Generic content with no service specificity</li>
                <li>Absence from industry-specific directories</li>
                <li>Stale content that contradicts current information</li>
                <li>No external third-party validation of entity attributes</li>
                <li>Contradictory information from multiple sources you control</li>
              </ul>
            </div>
          </div>

          <div className="ae-cta-inline">
            <p>Scoring low on any of these entity factors? <Link href="/blindspot">Get your free Blind Spot Report</Link> to see exactly which factors are holding back your AI recommendations.</p>
          </div>
        </section>

        <section id="improvement">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mt-12 mb-6">
            What Improving Your Entity Score Actually Looks Like
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Improving your AI entity score is not a single action. It is a coordinated program that addresses entity consistency, content authority, structured data, and external validation simultaneously. Doing one piece well while leaving the others weak produces limited results.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            The sequence matters. Starting with inconsistencies is essential because inconsistencies actively lower confidence and actively working against everything else you build. A beautifully structured website cannot overcome the entity drift created by 30 inconsistent directory listings that contradict it.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            The framework for prioritizing and executing entity improvement is what we build for clients. What we can tell you here is that <Link href="/blog/what-your-website-looks-like-to-an-ai-crawler" className="text-[#F27D24] hover:text-orange-400 transition-colors">how AI crawlers see your website</Link> is just one input into a much larger entity evaluation. Understanding the full picture is the starting point for any improvement program.
          </p>

          <div className="ae-callout ae-callout-orange">
            <div className="ae-callout-title">What We Tell You vs What We Build For You</div>
            <p>This article explains what entity scores are, how they work, and what factors influence them. What we do not publish is the specific framework, sequencing, and tooling we use to audit, repair, and build entity authority for clients. That methodology is what creates results. If you want the explanation, you have it. If you want the results, that is what The Answer Engine does.</p>
          </div>

          <div className="ae-takeaway">
            <div className="ae-takeaway-title">The Core Insight</div>
            <p>AI does not recommend businesses based on how good they are. It recommends businesses based on how confident it is in what it knows about them. That confidence is your entity score. Improving it is not about tricks or shortcuts. It is about building a web of consistent, authoritative, structured information that gives AI every reason to trust you completely.</p>
          </div>

          <div className="ae-cta-inline">
            <p>Ready to improve your entity score and get recommended by AI? <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai</a> to start your entity audit.</p>
          </div>
        </section>

        {/* Cheat Sheet */}
        <section>
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mt-12 mb-6">
            Entity Score Quick Audit
          </h2>
          <div className="ae-cheat-sheet">
            <div className="ae-cheat-sheet-title">Check These 8 Entity Signals Right Now</div>
            <table>
              <thead>
                <tr>
                  <th>Signal</th>
                  <th>What Consistent Looks Like</th>
                  <th>Impact on Entity Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Business Name</td>
                  <td>Identical spelling and formatting across all sources</td>
                  <td>Critical</td>
                </tr>
                <tr>
                  <td>Physical Address</td>
                  <td>Same format (Suite vs Ste, abbreviations) everywhere</td>
                  <td>Critical</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>Same number, same format, no old numbers active</td>
                  <td>Critical</td>
                </tr>
                <tr>
                  <td>Website URL</td>
                  <td>Same URL (with or without www, http vs https)</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Business Category</td>
                  <td>Same primary category on GBP and key directories</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Schema Markup</td>
                  <td>LocalBusiness schema on homepage and key pages</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>Service Descriptions</td>
                  <td>Consistent service names and descriptions across platforms</td>
                  <td>Medium-High</td>
                </tr>
                <tr>
                  <td>Operating Hours</td>
                  <td>Same hours on website, GBP, and major directories</td>
                  <td>Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-12">
          <div className="ae-quote">
            <p>"AI does not know your business is good. It only knows whether the information about your business is consistent, authoritative, and clear. Your entity score is not a measure of your business quality. It is a measure of your information quality."</p>
            <cite>Justin Borges</cite>
          </div>
        </section>

        {/* 3-Tier CTA Block */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">
            See Your AI Entity Score Right Now
          </h3>
          <p className="text-gray-400 mb-6">
            Our Blind Spot Report runs a full entity audit across ChatGPT, Perplexity, and Google AI. You will see exactly what signals are building your entity confidence and exactly what inconsistencies are tearing it down.
          </p>
          <Link
            href="/blindspot"
            className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors"
          >
            Get Your Free Blind Spot Report
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
            <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (213) 444-2229
            </a>
            <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@theanswerengine.ai
            </a>
          </div>
        </div>

        {/* Author Card */}
        <div className="ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div className="ae-author-name" style={{ fontWeight: 600 }}>Justin Borges</div>
                <div className="ae-author-role" style={{ fontWeight: 400 }}>Founder, The Answer Engine</div>
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini.</p>
              </div>
            </div>

        {/* FAQ Section */}
        <section id="faq" className="not-prose mt-16">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is an AI entity score?',
                a: 'An AI entity score is the internal confidence rating that AI platforms assign to a business based on how consistently and authoritatively it appears across the web. It is not a formal published metric. It is the aggregate of how much an AI system trusts the information it has found about your business entity: name, location, services, expertise, and relationships to other known entities.',
              },
              {
                q: 'What is entity drift and why does it hurt AI visibility?',
                a: 'Entity drift occurs when your business information is inconsistent across different sources. If your website says your phone is one number but your Yelp listing says a different number, AI systems see a contradiction. That contradiction lowers their confidence in what they know about you, reducing both the likelihood and prominence of recommendations.',
              },
              {
                q: 'Does schema markup improve an AI entity score?',
                a: 'Yes, significantly. Pages with proper LocalBusiness schema markup are 3 times more likely to earn AI citations than pages without it. Schema markup translates your business information into a format that AI systems are designed to read and trust, reducing ambiguity and increasing confidence in your entity representation.',
              },
              {
                q: 'How is an AI entity score different from an SEO ranking?',
                a: 'SEO ranking scores individual web pages based on keyword relevance, backlinks, and technical factors. An AI entity score rates the business itself as a real-world entity: how well-defined, consistent, and trustworthy is the overall picture of this business across all available sources. A business can rank well in SEO while having a weak entity score.',
              },
              {
                q: 'Can a new business build a strong AI entity score quickly?',
                a: 'Yes, sometimes faster than established businesses if the entity foundation is built correctly from the start. Consistency is more important than longevity for AI entity scores. A new business with perfect NAP consistency, clear schema markup, strong directory presence, and authoritative service content can achieve AI citations within 6 to 12 weeks.',
              },
              {
                q: 'What is the relationship between knowledge graphs and entity scores?',
                a: 'AI platforms use knowledge graphs to map relationships between entities. Your business entity connects to location entities, category entities, review entities, and related service entities. A well-connected, consistent knowledge graph entry for your business increases the confidence with which AI systems can recommend you for specific queries.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-black/10 rounded-xl p-6">
                <h3 className="font-plus-jakarta font-bold text-white mb-3">{q}</h3>
                <p className="text-gray-400 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="ae-final-cta not-prose mt-16">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            Build the Entity Authority That Makes AI Recommend You
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Every business has an entity score. Most do not know what theirs is or what is dragging it down. Get your Blind Spot Report and find out exactly what AI platforms currently think about your business entity.
          </p>
          <Link
            href="/blindspot"
            className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#D96416] transition-colors ae-pulse-glow"
          >
            Get Your Free Blind Spot Report
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            Free. No credit card. Results in 24 hours. <a href="tel:+12134442229" className="text-[#F27D24] hover:text-orange-400 transition-colors">(213) 444-2229</a>
          </p>
        </div>

      </article>
    </>
  )
}
