import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Personal Injury Lawyers Get Found on AI Search in 2026'
const description =
  'Personal injury is one of the most expensive legal verticals in paid search — and most PI firms are invisible on AI. Here is exactly what gets PI lawyers cited by ChatGPT, Perplexity, and Google AI Overviews.'
const slug = 'how-personal-injury-lawyers-get-found-on-ai-search'
const publishDate = '2026-05-01'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'personal injury lawyer AI search',
    'how PI lawyers get found on ChatGPT',
    'personal injury law firm AEO',
    'legal AI search visibility',
    'personal injury attorney marketing 2026',
    'ChatGPT lawyer recommendations',
    'law firm answer engine optimization',
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
  alternates: { canonical: `https://theanswerengine.ai/blog/${slug}` },
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
        knowsAbout: [
          'Answer Engine Optimization',
          'AI Search',
          'Legal Marketing',
          'Content Strategy',
          'Citation Surface',
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
          name: 'Do personal injury lawyers show up on ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Some do, but most do not. ChatGPT and other AI platforms recommend PI lawyers when a firm has structured content that directly answers legal questions, documented case outcomes, and a strong third-party mention profile across review platforms like Avvo, Google, and Martindale. Firms that rely solely on paid directories or traditional SEO are generally absent from AI-generated recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get my law firm recommended by AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Build content in four specific categories: case result summaries, FAQ and legal explainer content that answers common questions by case type, local jurisdiction knowledge tied to your specific courts and judges, and client outcome narratives that describe real results. Add FAQPage and LegalService schema, and actively build review volume on Avvo, Google, and Martindale. Consistency over 90 days produces measurable AI citation improvement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Avvo rating help with AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, but not through your Avvo rating score directly. Avvo content — specifically peer endorsements, client reviews, and published Q&A answers — is indexed and referenced by AI platforms as third-party evidence of expertise. A high Avvo rating alone adds little. What matters is whether your Avvo profile contains detailed, specific content that AI can parse and cite.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take for a PI firm to show up in AI results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most PI firms see their first meaningful AI citations within 60 to 90 days of a structured content program that targets AI retrieval specifically. Firms that already have strong domain authority and review volume can appear in 30 to 45 days. Building to consistent, recurring citations across multiple AI platforms typically takes 4 to 6 months.',
          },
        },
        {
          '@type': 'Question',
          name: 'What content do AI platforms cite most for personal injury lawyers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI platforms most frequently cite PI content that includes specific case type expertise (car accident, slip and fall, medical malpractice, workers compensation), geographic specificity naming the local courts and settlement landscape, documented outcome data even without client names, and FAQ-format content that directly answers the questions injury victims ask. Content covering a single case type in one specific city consistently outperforms broad general content.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
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

      {/* Hero */}
      <header className="ae-hero-section">
        <div className="ae-hero-badge">Industry Guides</div>
        <h1 className="ae-hero-title">{title}</h1>
        <p className="ae-hero-desc">
          Personal injury is one of the highest-cost legal verticals in paid search — and yet most
          PI firms are completely invisible when someone asks ChatGPT or Perplexity who to call
          after a car accident. Industry research suggests 67% of people now use AI before calling a
          lawyer. Here is exactly what changes that for your firm.
        </p>
        <div className="ae-hero-meta">
          <time dateTime={publishDate}>May 1, 2026</time>
          <span>·</span>
          <span>11 min read</span>
          <span>·</span>
          <span>The Answer Engine Team</span>
        </div>

        {/* Hero SVG — law scale with AI citation nodes */}
        <div className="ae-hero-visual" aria-hidden="true">
          <svg
            viewBox="0 0 480 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ae-hero-svg"
          >
            {/* Center pillar / scale beam */}
            <rect x="236" y="60" width="8" height="140" rx="4" fill="#334155" />
            {/* Scale crossbar */}
            <rect x="140" y="88" width="200" height="8" rx="4" fill="#475569" />
            {/* Left pan */}
            <ellipse cx="168" cy="148" rx="38" ry="10" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
            <line x1="140" y1="96" x2="168" y2="148" stroke="#6366f1" strokeWidth="1.5" opacity="0.7" />
            {/* Right pan */}
            <ellipse cx="312" cy="148" rx="38" ry="10" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
            <line x1="340" y1="96" x2="312" y2="148" stroke="#6366f1" strokeWidth="1.5" opacity="0.7" />
            {/* Gavel handle */}
            <rect x="220" y="210" width="80" height="12" rx="6" fill="#334155" transform="rotate(-25 220 210)" />
            {/* Gavel head */}
            <rect x="248" y="188" width="44" height="22" rx="6" fill="#475569" transform="rotate(-25 248 188)" />
            {/* AI node — top center — "cited" green */}
            <circle cx="240" cy="38" r="20" fill="#22c55e" opacity="0.9" />
            <text x="240" y="43" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">
              AI
            </text>
            {/* Citation beam from AI down to scale */}
            <line
              x1="240"
              y1="58"
              x2="240"
              y2="88"
              stroke="#22c55e"
              strokeWidth="1.5"
              opacity="0.6"
              strokeDasharray="4 3"
            />
            {/* Left outer node — dark, uncited */}
            <circle cx="72" cy="140" r="24" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="72" y="136" textAnchor="middle" fill="#64748b" fontSize="8">
              Firm A
            </text>
            <text x="72" y="149" textAnchor="middle" fill="#64748b" fontSize="7">
              not cited
            </text>
            {/* Right outer node — purple, cited */}
            <circle cx="408" cy="140" r="24" fill="#6366f1" opacity="0.9" />
            <text x="408" y="136" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">
              Your
            </text>
            <text x="408" y="149" textAnchor="middle" fill="#a5b4fc" fontSize="7">
              Firm
            </text>
            {/* Connection lines */}
            <line x1="96" y1="130" x2="130" y2="148" stroke="#334155" strokeWidth="1" opacity="0.5" />
            <line
              x1="384"
              y1="130"
              x2="350"
              y2="148"
              stroke="#6366f1"
              strokeWidth="1.5"
              opacity="0.6"
            />
            {/* "cited" label */}
            <text x="370" y="115" fill="#86efac" fontSize="9" fontWeight="600">
              cited
            </text>
            {/* Base */}
            <rect x="210" y="198" width="60" height="10" rx="5" fill="#334155" />
          </svg>
        </div>

        {/* Stats grid */}
        <div className="ae-stats-grid">
          <div className="ae-stat-card">
            <span className="ae-stat-value">$800B+</span>
            <span className="ae-stat-label">Annual US personal injury verdict value</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-value">67%</span>
            <span className="ae-stat-label">Now use AI before calling a lawyer</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-value">4x</span>
            <span className="ae-stat-label">More calls for AI-cited PI firms</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-value">90 days</span>
            <span className="ae-stat-label">To first meaningful AI citation</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 py-4 prose prose-invert prose-lg max-w-none">

        {/* TOC */}
        <div className="ae-toc not-prose">
          <div className="ae-toc-title">In This Guide</div>
          <ol>
            <li><a href="#why-pi-is-unique">Why PI Law Is Uniquely Competitive in AI Search</a></li>
            <li><a href="#what-ai-says">What AI Actually Says When Asked for a PI Lawyer</a></li>
            <li><a href="#four-content-types">The 4 Content Types That Get PI Firms Cited</a></li>
            <li><a href="#case-type-strategy">Why Each Case Type Needs Its Own Content Strategy</a></li>
            <li><a href="#review-platforms">How Avvo, Martindale, and Google Feed AI Differently</a></li>
            <li><a href="#entity-problem">The BERT Entity Problem: How AI Confuses Similar Firms</a></li>
            <li><a href="#90-day-plan">90-Day Action Plan for PI Firms with Zero AI Visibility</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </div>

        <div className="ae-cta-inline not-prose">
          <p>
            Want to see exactly which AI queries your PI competitors are winning right now?{' '}
            <Link href="/contact" className="text-[#F27D24] hover:underline font-semibold">
              Get a free legal AI visibility audit
            </Link>{' '}
            — we will show you where you appear and where you are invisible.
          </p>
        </div>

        <h2 id="why-pi-is-unique">Why Personal Injury Law Is Uniquely Competitive in AI Search</h2>
        <p>
          Personal injury is one of the most expensive legal verticals in paid search — cost per
          lead runs between $50 and $300 depending on case type and market. That economics reality
          means PI firms have spent decades engineering visibility in traditional search. But AI
          search plays by different rules, and the PI firms winning on Google Ads are often
          invisible on ChatGPT.
        </p>
        <p>
          Three factors make PI uniquely hard to crack in AI search. First, these are high-stakes,
          low-trust queries. Someone who just got hurt in a car accident does not want a list of
          options — they want the right answer delivered with confidence. AI platforms respond to
          that intent by being selective about who they recommend. Second, PI is intensely
          geographic. &ldquo;Best personal injury lawyer in Houston&rdquo; and &ldquo;best personal
          injury lawyer in San Antonio&rdquo; are completely different evidence pools for AI. A
          firm with city-agnostic content will get cited in neither. Third, PI covers a wide range
          of case types — car accidents, slip and fall, medical malpractice, workers compensation —
          each of which generates its own query pattern and requires its own content footprint.
        </p>
        <p>
          The result: most PI firms have strong traditional SEO footprints and effectively zero AI
          citation presence. That gap is the opportunity.
        </p>

        <div className="ae-callout ae-callout-info not-prose">
          <div className="ae-callout-title">The AI Credibility Filter for Legal Queries</div>
          <p>
            AI platforms apply a higher credibility bar to legal, medical, and financial queries
            than to most other categories. This is not a disadvantage for PI firms — it is a
            moat. Firms that build the right evidence base will be cited consistently while
            low-quality competitors get filtered out entirely.
          </p>
        </div>

        <h2 id="what-ai-says">What AI Actually Says When Asked for a PI Lawyer</h2>
        <p>
          When someone types &ldquo;best personal injury lawyer in [city]&rdquo; into ChatGPT or
          Perplexity, the response does one of three things: it names specific firms with citations,
          it gives a generic framework for finding a lawyer without naming anyone, or it defers to
          directories like Avvo and Martindale. Most PI firms fall into the second or third bucket.
        </p>
        <p>
          The firms that get named by AI share a consistent profile. They have published content
          that directly answers the questions injury victims ask. They have documented their case
          experience in specific, citable terms. They appear in multiple third-party sources —
          legal directories, local news, community mentions — not just their own website. And they
          have structured data in place that tells AI crawlers exactly what type of law they
          practice, where they practice it, and what outcomes they have achieved.
        </p>
        <p>
          The absence of any one of these creates a gap. A firm with deep content but no
          third-party mentions will not get cited. A firm with strong reviews but no structured
          content will be recommended only when a user asks about a review platform directly. AI
          requires the full signal stack to deliver a confident recommendation.
        </p>

        <div className="ae-bar-group not-prose">
          <div
            style={{
              fontWeight: 700,
              color: '#fff',
              marginBottom: '1rem',
              fontFamily: 'var(--font-plus-jakarta)',
            }}
          >
            What Drives AI Citations for PI Lawyers (Relative Weight)
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Case-type specific content by city</div>
            <div className="ae-bar-track">
              <div className="ae-bar-fill" style={{ width: '93%' }}></div>
            </div>
            <div className="ae-bar-value">Highest</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Third-party mentions (Avvo, Martindale, news)</div>
            <div className="ae-bar-track">
              <div className="ae-bar-fill" style={{ width: '85%' }}></div>
            </div>
            <div className="ae-bar-value">Very High</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">FAQ and legal explainer content</div>
            <div className="ae-bar-track">
              <div className="ae-bar-fill" style={{ width: '80%' }}></div>
            </div>
            <div className="ae-bar-value">High</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Documented case outcomes with specifics</div>
            <div className="ae-bar-track">
              <div className="ae-bar-fill" style={{ width: '77%' }}></div>
            </div>
            <div className="ae-bar-value">High</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">LegalService + FAQPage structured data</div>
            <div className="ae-bar-track">
              <div className="ae-bar-fill" style={{ width: '68%' }}></div>
            </div>
            <div className="ae-bar-value">Medium-High</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Google review volume and recency</div>
            <div className="ae-bar-track">
              <div className="ae-bar-fill" style={{ width: '60%' }}></div>
            </div>
            <div className="ae-bar-value">Medium</div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Based on AEO analysis across PI firm citation patterns in 15 US legal markets
        </p>

        <h2 id="four-content-types">The 4 Content Types That Get PI Firms Cited</h2>
        <p>
          Not all content drives AI citations. For personal injury specifically, four content
          formats consistently appear in the evidence base of firms that get recommended by AI
          platforms. These are not generic SEO content types — they reflect what injury victims
          actually ask and what AI systems need to make a confident recommendation.
        </p>

        <div className="ae-comparison-table not-prose">
          <table>
            <thead>
              <tr>
                <th>Content Type</th>
                <th>Why AI Cites It</th>
                <th>Example Query It Wins</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Case result content</td>
                <td>
                  Provides specific, citable outcomes that answer &ldquo;does this firm
                  win?&rdquo;
                </td>
                <td>&ldquo;car accident lawyer with proven results in [city]&rdquo;</td>
              </tr>
              <tr>
                <td>FAQ and legal explainers</td>
                <td>
                  Matches the exact format of AI responses — direct answers to direct questions
                </td>
                <td>
                  &ldquo;how long does a personal injury case take?&rdquo;
                </td>
              </tr>
              <tr>
                <td>Local jurisdiction knowledge</td>
                <td>
                  Establishes geographic specificity AI needs to make a city-level recommendation
                </td>
                <td>&ldquo;best slip and fall lawyer in [specific city]&rdquo;</td>
              </tr>
              <tr>
                <td>Client outcome narratives</td>
                <td>
                  Third-person evidence of real results that AI treats as peer validation
                </td>
                <td>
                  &ldquo;personal injury attorney who gets results for accident victims&rdquo;
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Case Result Content</h3>
        <p>
          The most powerful single content asset for a PI firm&apos;s AI visibility is a case
          results page with specific outcomes. Not &ldquo;we recovered millions for our clients&rdquo;
          — that tells AI nothing. Instead: case type, injury description, liability context,
          settlement or verdict amount, and timeline. Even without client names, this level of
          specificity gives AI platforms citable claims. A result like &ldquo;$1.2M settlement for
          a rear-end collision resulting in L4-L5 herniation, resolved in 14 months&rdquo; can be
          cited in response to a dozen different queries.
        </p>

        <h3>FAQ and Legal Explainer Content</h3>
        <p>
          Injury victims ask very predictable questions: how much is my case worth, what happens if
          the other driver is uninsured, how long do I have to file, will I have to go to court.
          PI firms that publish direct, specific answers to these questions in FAQ format — with
          proper FAQPage schema — become citation sources for those exact queries. The key is
          answering in plain language without excessive hedging. AI platforms pass over answers that
          are too vague to be useful.
        </p>

        <h3>Local Jurisdiction Knowledge</h3>
        <p>
          Geographic specificity is the competitive moat most PI firms leave on the table. Content
          that references specific local courts, judges, insurance companies active in the market,
          and local settlement norms gives AI the signal it needs to make a city-level
          recommendation with confidence. A generic PI page that could apply to any city in the
          country will not be cited for any city specifically.
        </p>

        <div className="ae-callout ae-callout-warning not-prose">
          <div className="ae-callout-title">What Makes Local Jurisdiction Content Citable</div>
          <ul>
            <li>Name the specific courts where cases go — county, district, or circuit court</li>
            <li>Reference local insurance carriers that are frequently involved in area claims</li>
            <li>Describe settlement trends specific to your market, not national averages</li>
            <li>Mention local statutes of limitations and procedural rules by state</li>
            <li>Include content about local mediation or arbitration norms</li>
          </ul>
        </div>

        <h3>Client Outcome Narratives</h3>
        <p>
          Client outcome narratives are the personal injury equivalent of B2B case studies. A
          narrative that walks through how an injury victim&apos;s case progressed — without
          identifying the client — gives AI platforms a story arc with specific details they can
          reference. These work best when they include the initial challenge, the complicating
          factor, and the resolution with a specific outcome. They are also the content type that
          generates the most trust signal from the human reader, which drives the review and
          referral activity that feeds further AI citations.
        </p>

        <h2 id="case-type-strategy">Why Each Case Type Needs Its Own Content Strategy</h2>
        <p>
          A PI firm that publishes one general personal injury page and expects to get cited across
          car accidents, slip and fall, medical malpractice, and workers compensation is making a
          fundamental AEO mistake. Each case type generates completely different queries, requires
          different expertise signals, and is evaluated by AI against a different evidence pool.
        </p>

        <div className="ae-pros-cons not-prose">
          <div className="ae-pros-box">
            <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#4ade80' }}>
              Case Types With Strong AI Citation Opportunity
            </div>
            <ul>
              <li>
                Car accident — highest query volume, most competitive, but winnable with city +
                outcome specificity
              </li>
              <li>
                Slip and fall — strong FAQ citation opportunity around premises liability and
                comparative fault questions
              </li>
              <li>
                Workers compensation — distinct query pattern from general PI; firms that know
                both get cited for both
              </li>
              <li>
                Medical malpractice — lower volume but very high intent; AI cites specialists
                almost exclusively
              </li>
            </ul>
          </div>
          <div className="ae-cons-box">
            <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#f87171' }}>
              Common Case-Type Content Mistakes
            </div>
            <ul>
              <li>
                One combined &ldquo;practice areas&rdquo; page that lists all case types without
                depth on any
              </li>
              <li>
                Car accident content that applies nationally — no city, no local court, no local
                settlement data
              </li>
              <li>
                Workers comp treated as a subset of PI rather than its own content cluster with
                its own queries
              </li>
              <li>
                Medical malpractice pages that read like general PI content — AI cannot distinguish
                specialization
              </li>
            </ul>
          </div>
        </div>

        <p>
          The right architecture is a hub-and-spoke content model: a main PI hub page with deep
          spoke pages for each case type, each spoke further broken down by city or region. A firm
          serving three markets and handling four primary case types needs at minimum 12 spoke
          pages — and each one should be treated as a standalone answer to a specific query, not as
          a thin variation of the same content.
        </p>

        <div className="ae-cta-inline not-prose">
          <p>
            Wondering what a proper PI content architecture looks like for your market?{' '}
            <Link href="/contact" className="text-[#F27D24] hover:underline font-semibold">
              Book a strategy session
            </Link>{' '}
            — we map your case types, cities, and query targets before building anything.
          </p>
        </div>

        <h2 id="review-platforms">How Avvo, Martindale, and Google Feed AI Differently</h2>
        <p>
          Most PI firms treat Avvo, Martindale, and Google as interchangeable review platforms.
          They are not. Each one feeds AI recommendations through a different mechanism, and
          optimizing all three the same way leaves significant citation surface unclaimed.
        </p>

        <div className="ae-timeline not-prose">
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">G</div>
            <div>
              <div className="ae-timeline-title">Google Reviews — Volume and Recency Signal</div>
              <div className="ae-timeline-desc">
                Google reviews feed into AI recommendations primarily through volume and recency.
                AI platforms use Google review data as a proxy for market validation — a firm with
                200+ reviews signals established practice. The review text content matters less
                than on other platforms. Firms should prioritize getting volume here before
                worrying about crafting responses.
              </div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">Av</div>
            <div>
              <div className="ae-timeline-title">Avvo — Content Depth Signal</div>
              <div className="ae-timeline-desc">
                Avvo feeds AI through indexed content — specifically Q&amp;A answers, peer
                endorsements, and case descriptions. An attorney who has answered 50 legal
                questions on Avvo has created 50 citable content assets. The rating score itself
                has minimal AI citation value. Focus on publishing substantive Q&amp;A content
                that demonstrates expertise in your specific case types and geography.
              </div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">M</div>
            <div>
              <div className="ae-timeline-title">Martindale — Authority and Peer Validation Signal</div>
              <div className="ae-timeline-desc">
                Martindale&apos;s AV Preeminent rating carries specific authority weight with AI
                platforms because it is peer-reviewed. AI treats Martindale citations as
                expert-validated credibility rather than consumer opinion. A Martindale listing
                with detailed practice descriptions and the AV rating gets cited in queries where
                the user is asking about a lawyer&apos;s credentials or expertise level specifically.
              </div>
            </div>
          </div>
        </div>

        <p>
          The compounding effect comes from having all three in place. A firm with strong Google
          review volume, active Avvo Q&amp;A content, and a detailed Martindale listing gives AI
          platforms multiple independent corroborating sources — which is the threshold that
          triggers confident recommendations rather than generic referrals to &ldquo;check
          directories.&rdquo;
        </p>

        <h2 id="entity-problem">The BERT Entity Problem: How AI Confuses Firms with Similar Names</h2>
        <p>
          This is the most underappreciated technical problem in PI law firm AI visibility. BERT
          and similar language models that power AI search recommendations build entity profiles
          for businesses. When two or more PI firms have similar names — or when a firm&apos;s
          name is a common phrase — AI systems can confuse them, attribute content and reviews
          incorrectly, or simply under-represent the firm due to entity ambiguity.
        </p>
        <p>
          Common examples: &ldquo;Smith Law Firm&rdquo; in Houston and &ldquo;Smith Law&rdquo; in
          Dallas create entity overlap that reduces citation confidence for both. A firm named
          &ldquo;Accident Attorneys&rdquo; is nearly impossible for AI to distinguish from the
          generic concept of accident attorneys. Firms whose names include only common nouns and
          no unique identifiers — personal names, city references, or distinctive modifiers — face
          the highest entity confusion risk.
        </p>

        <div className="ae-callout ae-callout-warning not-prose">
          <div className="ae-callout-title">How to Fix the Entity Problem</div>
          <ul>
            <li>
              Add Organization or LegalService schema with a globally unique &ldquo;@id&rdquo;
              URI — this anchors your entity identity for AI crawlers
            </li>
            <li>
              Use consistent Name-Address-Phone (NAP) data across every platform — Avvo,
              Martindale, Google, your website, and any press mentions
            </li>
            <li>
              Publish content that consistently co-mentions your firm name with your specific
              city, case types, and attorney names — repetition builds entity clarity
            </li>
            <li>
              Add sameAs links in your Organization schema pointing to Avvo, Martindale, Google
              Business Profile, and LinkedIn
            </li>
            <li>
              If your firm name is generic, build a secondary brand identifier — a named
              methodology, a trademarked approach, or a distinctive tagline that AI can
              disambiguate
            </li>
          </ul>
        </div>

        <p>
          The entity problem is solvable and the fix is durable. Once AI platforms build a clear,
          unambiguous entity profile for your firm, that clarity compounds — every new content
          asset and review reinforces the same entity rather than diluting it.
        </p>

        <h2 id="90-day-plan">90-Day Action Plan for PI Firms with Zero AI Visibility</h2>
        <p>
          A structured 90-day program moves a PI firm from complete AI invisibility to meaningful
          citation presence. This is not a shortcut — it is the minimum viable evidence base that
          AI platforms need to recommend a firm with confidence. Industry data suggests that PI
          firms in the top three AI citations receive approximately four times more inbound calls
          than those not cited at all.
        </p>

        <div className="ae-timeline not-prose">
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">1</div>
            <div>
              <div className="ae-timeline-title">Days 1–14: Technical Foundation</div>
              <div className="ae-timeline-desc">
                Implement LegalService schema on your homepage and main practice area pages.
                Add FAQPage schema to any existing Q&amp;A content. Audit NAP consistency across
                all platforms — one inconsistency in your address or phone number creates entity
                confusion. Add Organization schema with sameAs links to Avvo, Martindale, Google
                Business Profile, and LinkedIn. Claim and complete your Martindale profile if it
                is not already active.
              </div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">2</div>
            <div>
              <div className="ae-timeline-title">Days 15–30: Content Architecture</div>
              <div className="ae-timeline-desc">
                Map your primary case types and primary service cities. Build a hub-and-spoke
                content plan: one hub page per case type, spoke pages for each case type x city
                combination that matters to your practice. Write the first two spoke pages — your
                highest-volume case type in your primary city. Each page needs minimum 800 words
                of city-specific, case-type-specific content with FAQ format built in.
              </div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">3</div>
            <div>
              <div className="ae-timeline-title">Days 31–60: Content Velocity</div>
              <div className="ae-timeline-desc">
                Publish four to six spoke pages covering your remaining case types and secondary
                cities. Build a case results page with a minimum of five specific, anonymized
                outcomes. Publish three to five client outcome narratives. Answer 10 to 15
                questions on Avvo in your specific practice areas — focus on questions that match
                the queries your target clients are likely asking AI.
              </div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">4</div>
            <div>
              <div className="ae-timeline-title">Days 61–90: Third-Party Signal Building</div>
              <div className="ae-timeline-desc">
                Systematize review requests for Google — target 10+ new reviews during this
                period. Reach out to two to three local news outlets with a pitch related to a
                notable case type or legal development in your market (even unpublished outreach
                builds editorial relationships). Submit your firm to two to three additional
                legal directories beyond Avvo and Martindale. Run a manual audit: query your
                top 10 target queries in ChatGPT, Perplexity, and Google to baseline your
                citation presence.
              </div>
            </div>
          </div>
        </div>

        <div className="ae-cheat-sheet not-prose">
          <div className="ae-cheat-sheet-title">Quick Reference: PI AEO Priority Checklist</div>
          <table>
            <tbody>
              <tr>
                <td>LegalService schema</td>
                <td>
                  On homepage + all practice area pages. Include @id, areaServed, availableChannel
                </td>
              </tr>
              <tr>
                <td>FAQPage schema</td>
                <td>On every page with Q&amp;A content. Answers under 300 characters perform best</td>
              </tr>
              <tr>
                <td>NAP consistency</td>
                <td>Exact match across website, Google, Avvo, Martindale — zero variation</td>
              </tr>
              <tr>
                <td>Case results page</td>
                <td>
                  Minimum 5 outcomes with case type, injury, amount, timeline — no client names
                  required
                </td>
              </tr>
              <tr>
                <td>City x case type pages</td>
                <td>One page per combination. 800+ words, local court references, local data</td>
              </tr>
              <tr>
                <td>Avvo Q&amp;A content</td>
                <td>
                  10+ answered questions in your practice area. Treat each as a content asset
                </td>
              </tr>
              <tr>
                <td>Google reviews</td>
                <td>Minimum 50 for market validation signal. 100+ for high-competition markets</td>
              </tr>
              <tr>
                <td>sameAs links</td>
                <td>In Organization schema: Avvo, Martindale, GBP, LinkedIn, state bar profile</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ae-callout ae-callout-success not-prose">
          <div className="ae-callout-title">The Compounding Advantage of Early Movers</div>
          <p>
            The PI firms that establish AI citation presence in 2026 will be harder and harder to
            displace as AI platforms build stronger entity profiles over time. Unlike paid search
            where the highest bidder can leapfrog you overnight, AI citations compound. A firm
            that builds the right evidence base today creates a structural visibility advantage
            that competitors cannot buy their way past.
          </p>
        </div>

        {/* Mid-article CTA */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">
            Ready to Get Your Firm Cited by AI?
          </h3>
          <p className="text-gray-400 mb-6">
            The Answer Engine builds the content infrastructure that makes it happen. We map your
            case types and markets, build the content that gets cited, and implement the schema
            that tells AI exactly who you are and what you do.
          </p>
          <Link
            href="https://theanswerengine.ai"
            className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors"
          >
            Talk to The Answer Engine
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
            <a
              href="tel:+12134442229"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (213) 444-2229
            </a>
            <a
              href="mailto:support@theanswerengine.ai"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              support@theanswerengine.ai
            </a>
          </div>
        </div>

        {/* Author card */}
        <div className="not-prose ae-author-card">
          <img
            src="/justin-borges.webp"
            alt="Justin Borges, Founder of The Answer Engine"
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
          <div>
            <div className="ae-author-name" style={{ fontWeight: 600 }}>
              Justin Borges
            </div>
            <div className="ae-author-role" style={{ fontWeight: 400 }}>
              Founder, The Answer Engine
            </div>
            <p
              style={{
                marginTop: 8,
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.6,
              }}
            >
              Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate,
              $200M+ in production, and discovering that AI search rankings now decide who gets
              cited as the answer. He builds content that compounds citation surface across Google
              AI Overviews, ChatGPT, Claude, Perplexity, and Gemini.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div id="faq" className="not-prose mt-12">
          <h2 className="font-plus-jakarta text-2xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>

          <details className="ae-faq-item">
            <summary>Do personal injury lawyers show up on ChatGPT?</summary>
            <p>
              Some do, but most do not. ChatGPT and other AI platforms recommend PI lawyers when a
              firm has structured content that directly answers legal questions, documented case
              outcomes, and a strong third-party mention profile across Avvo, Google, and
              Martindale. Firms that rely solely on paid directories or traditional SEO are
              generally absent from AI-generated recommendations.
            </p>
          </details>

          <details className="ae-faq-item">
            <summary>How do I get my law firm recommended by AI search?</summary>
            <p>
              Build content in four specific categories: case result summaries, FAQ and legal
              explainer content by case type, local jurisdiction knowledge tied to your specific
              courts, and client outcome narratives with specific details. Add FAQPage and
              LegalService schema, and build review volume on Avvo, Google, and Martindale.
              Consistency over 90 days produces measurable AI citation improvement.
            </p>
          </details>

          <details className="ae-faq-item">
            <summary>Does Avvo rating help with AI search visibility?</summary>
            <p>
              Yes, but not through your Avvo rating score directly. Avvo content — specifically
              peer endorsements, client reviews, and published Q&amp;A answers — is indexed and
              referenced by AI platforms as third-party evidence of expertise. A high Avvo rating
              alone adds little. What matters is whether your Avvo profile contains detailed,
              specific content that AI can parse and cite.
            </p>
          </details>

          <details className="ae-faq-item">
            <summary>How long does it take for a PI firm to show up in AI results?</summary>
            <p>
              Most PI firms see their first meaningful AI citations within 60 to 90 days of a
              structured content program that targets AI retrieval specifically. Firms that already
              have strong domain authority and review volume can appear in 30 to 45 days. Building
              to consistent, recurring citations across multiple AI platforms typically takes 4 to 6
              months.
            </p>
          </details>

          <details className="ae-faq-item">
            <summary>What content do AI platforms cite most for personal injury lawyers?</summary>
            <p>
              AI platforms most frequently cite PI content that includes specific case type
              expertise by geography, documented outcome data even without client names, and
              FAQ-format content that directly answers the questions injury victims ask. Content
              covering a single case type in one specific city consistently outperforms broad
              general content in AI citation frequency.
            </p>
          </details>
        </div>

        {/* Final CTA */}
        <div className="not-prose mt-12 p-8 rounded-2xl border border-black/10 text-center">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">
            Ready to Get Your Firm Cited by AI?
          </h3>
          <p className="text-gray-400 mb-6">
            The Answer Engine builds the content infrastructure that makes it happen. We design
            the hub-and-spoke architecture, write the case-type content, implement the schema, and
            track your citation growth across every major AI platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://theanswerengine.ai"
              className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors"
            >
              Get Started with The Answer Engine
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-black/20 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-black/40 transition-colors"
            >
              Read More Industry Guides
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
