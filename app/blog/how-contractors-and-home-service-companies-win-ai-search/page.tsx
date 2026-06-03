import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const dynamicParams = true;

const title = 'How Contractors And Home Service Companies Win AI Search';
const description =
  'Plumbers, electricians, and HVAC pros are invisible to AI search. The AEO playbook for contractor citations on ChatGPT, Perplexity, Claude, and Google AI Overviews. Claim your AERO scan.';
const slug = 'how-contractors-and-home-service-companies-win-ai-search';
const publishDate = '2026-06-01';
const modifiedDate = '2026-06-01';

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords:
    'contractor AI search, home service AEO, plumber ChatGPT recommendation, HVAC AI citation, electrician AI search, answer engine optimization contractors, AEO for plumbers, contractor LLM visibility, home services AI marketing, local service AI discovery',
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
        alt: 'How contractors and home service companies win AI search',
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
      'AEO for Contractors',
      'AEO for Home Services',
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
    'contractor AI search, home service AEO, plumber AI citation, HVAC LLM visibility, electrician ChatGPT recommendation, AEO contractors, answer engine optimization home services',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are home service companies really losing leads to AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The consumer share using AI tools like ChatGPT and Google AI Overviews to find local services has climbed from roughly 6% to 45% inside one year, and home service queries carry the highest intent of any local category. AI platforms only recommend contractors they can verify across multiple data sources. Contractors that have not optimized for AI retrieval are invisible to a fast-growing acquisition channel, and the lost calls compound week over week (AE Field Audit, 2026).',
      },
    },
    {
      '@type': 'Question',
      name: 'Which AI platforms recommend contractors and home service companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT, Google AI Overviews, Perplexity, Claude, Apple Intelligence, and Microsoft Copilot all surface contractor recommendations on geo-loaded queries. Each platform pulls from a different mix of sources. ChatGPT relies on the Bing-backed live web pass and operator-published authority content. Google AI Overviews weights Business Profile signals and crawlable reviews. Perplexity cross-references three to five sources before naming a business. Contractors need parallel visibility across all four to capture the full discovery channel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do contractors struggle more than other industries with AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contractors face a compounding structural disadvantage. Most contractors route digital acquisition through HomeAdvisor, Angi, Thumbtack, and Bark, whose contractor profiles are rendered behind JavaScript and login walls that AI crawlers cannot read. Most contractor sites are single-page or template-built with minimal educational content. Most contractors publish zero authority articles per month. The combination leaves AI retrievers with almost nothing to extract, while consumer queries in the trade categories are among the most urgent and high-intent local searches in any vertical.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Google reviews help contractors show up on ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google reviews influence Google AI Overviews but do not enter the ChatGPT retrieval pass at meaningful density because most reviews render via JavaScript that the ChatGPT web tool does not execute. For broader AI visibility, contractors need reviews mirrored on crawlable surfaces like Yelp, BBB, and trade-specific directories, plus customer testimonials republished as plain HTML text on the operator domain. The reviews still build trust at the point of decision — they do not produce the citation slot on their own.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a small local contractor compete with large franchise operations in AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and the structural advantage favors the small operator. AI platforms reward relevance, definition-first content, attribution density, and verifiable local expertise over brand recognition. A solo plumber publishing 16 AEO-structured neighborhood pages per month outranks a national franchise on a generic template every time. The citation slot rewards the operator whose own domain carries the structural signals, and franchise corporate sites rarely carry city-level specificity.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take for a contractor to start appearing in AI results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First citations typically appear inside 30 to 60 days when the contractor publishes 16 AEO-structured articles per month with definition-first openings, bounded chunks, and inline attribution. By day 90, the Proof Ledger usually carries citations from all four major LLM platforms. The Answer Engine carries a 90-day citation guarantee tied to that cadence. Timelines compress when the contractor domain already carries clean NAP data across directories and a verified Google Business Profile.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is traditional SEO enough for contractors in the AI search era?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional SEO is no longer sufficient on its own. Google ranking still matters for the classic search surface, but AI retrievers use different evaluation criteria: chunk extraction, inline attribution, definition-first structure, and corpus cadence. A contractor ranking page-one on Google can still be invisible to ChatGPT and Perplexity because the same page may be a marketing block instead of an extractable chunk. AEO sits alongside SEO, not inside it, and both are required for full contractor visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the biggest mistake contractors make with their online presence for AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The biggest mistake is treating third-party lead generation platforms as the entire digital presence. HomeAdvisor, Angi, and Thumbtack keep the customer relationship, the data, and the citation surface. AI crawlers cannot access most contractor profiles on these platforms because the profile content sits behind authentication and dynamic rendering. When a homeowner asks ChatGPT for a plumber, the AI has no information about contractors who exist only inside lead-gen ecosystems, and the citation slot defaults to the operator whose own domain carries the structural signals.',
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
    'AEO for Contractors',
    'AEO for Home Services',
  ],
  sameAs: ['https://linkedin.com/company/theanswerengine'],
  description:
    'The Answer Engine is a GEO/AEO firm helping contractors and home service companies get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews through structured content, schema, and citation strategy.',
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
    measure: 'Plain-language definition of the trade procedure in every H3',
    lift: '+57% citation premium',
    source: 'Zhang et al. (2026)',
  },
  {
    num: '2',
    title: 'Inline Attribution Density',
    measure: 'Named code references (UPC, NEC, IRC) and trade-board citations per section',
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
    measure: 'Third-party trade tone vs. first-party brand claims',
    lift: '3–5x preference',
    source: 'Chen et al. (2025)',
  },
  {
    num: '5',
    title: 'Corpus Cadence',
    measure: 'Publication volume (16 articles per month minimum)',
    lift: 'City-level authority',
    source: 'AE Field Audit (2026)',
  },
];

export default function HowContractorsWinAISearchPage() {
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
          <span className="text-white/60">Contractors &amp; AI Search</span>
        </nav>

        {/* Hero */}
        <header className="ae-article-hero w-full overflow-hidden mb-10" style={{ borderRadius: 0 }}>
          <img
            src={`/blog/${slug}.webp`}
            alt="How contractors and home service companies win AI search — the AEO playbook for plumbers, electricians, and HVAC pros"
            style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
            loading="eager"
          />
        </header>

        <div className="mb-6">
          <span className="font-headline text-xs font-black tracking-tighter uppercase bg-[#F27D24]/10 text-[#F27D24] border border-[#F27D24]/30 px-3 py-1">
            Field Report · Home Services AEO
          </span>
        </div>

        <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none text-[#e5e2e1]">
          HOW CONTRACTORS AND HOME SERVICE COMPANIES WIN{' '}
          <span className="text-[#F27D24]">AI SEARCH</span>
        </h1>

        <p className="article-summary font-body text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
          Plumbers, electricians, and HVAC operators are invisible to AI search while the homeowners
          who used to call them are now asking ChatGPT, Perplexity, and Google AI for a recommendation.
          This is the structural playbook for contractor citations — the four AEO signals retrievers
          score, the lead-gen trap, and the Proof Ledger that measures the outcome.
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-white/50 font-mono uppercase tracking-wider mb-10">
          <span>June 1, 2026</span>
          <span>·</span>
          <span>17 min read</span>
          <span>·</span>
          <span>Justin Borges</span>
        </div>

        {/* STATS GRID */}
        <div className="ae-stats-grid not-prose mb-12">
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🔧</div>
            <div className="ae-stat-value ae-accent">45%</div>
            <div className="ae-stat-label">of consumers now use AI to find local services, up from 6% one year ago</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📞</div>
            <div className="ae-stat-value ae-accent">10–15x</div>
            <div className="ae-stat-label">more revenue per phone call than per web lead in home services</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📅</div>
            <div className="ae-stat-value ae-accent">16/mo</div>
            <div className="ae-stat-label">AEO articles per month to win city-level contractor authority</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">⚠️</div>
            <div className="ae-stat-value ae-accent">&lt;4%</div>
            <div className="ae-stat-label">US contractor domains carrying any of the four core AEO signals (AE Field Audit, 2026)</div>
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
                <td><a href="#discovery-shift" className="text-[#F27D24]">The Homeowner Discovery Shift</a></td>
                <td>The 11 PM burst-pipe call now starts inside ChatGPT, not Google Maps — and the answer names contractors.</td>
              </tr>
              <tr>
                <td><a href="#lead-gen-trap" className="text-[#F27D24]">The Lead Gen Platform Trap</a></td>
                <td>HomeAdvisor, Angi, and Thumbtack profiles are invisible to AI retrievers because they render behind logins.</td>
              </tr>
              <tr>
                <td><a href="#ai-evaluation" className="text-[#F27D24]">What AI Evaluates First</a></td>
                <td>NAP parity, licensing in plain HTML, service-area specificity, and response patterns build the trust score.</td>
              </tr>
              <tr>
                <td><a href="#signals" className="text-[#F27D24]">The Five Citation Signals</a></td>
                <td>Definition-first, attribution density, bounded chunks, journalistic tone, and corpus cadence — in that order.</td>
              </tr>
              <tr>
                <td><a href="#proof" className="text-[#F27D24]">The Proof Ledger</a></td>
                <td>Measure citation rate per query per model — not impressions, not Map Pack rank, not directory stars.</td>
              </tr>
              <tr>
                <td><a href="#faq" className="text-[#F27D24]">FAQ</a></td>
                <td>The eight questions every contractor asks before starting AEO, answered direct.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ae-article-body prose prose-invert prose-lg max-w-none">

          {/* SECTION 1: THE DISCOVERY SHIFT */}
          <span className="ae-section-label" id="discovery-shift">The Shift</span>
          <h2>The Homeowner Discovery Shift</h2>

          <p className="key-insight">
            A homeowner with a burst pipe at 11 PM used to open Google, type &quot;emergency plumber
            near me,&quot; and call the first number in the Map Pack. That behavior is collapsing.{' '}
            <strong className="named-thesis">The Discovery Compression: roughly 45% of consumer
            local-service searches now begin inside ChatGPT, Google AI Overviews, or Perplexity rather
            than the classic Google search results — up from approximately 6% one year ago, with home
            services showing the fastest migration of any local category (AE Field Audit, 2026).</strong>{' '}
            The AI does not return ten blue links. It names two to five specific companies, explains why
            it chose them, and folds in licensing, service areas, and review sentiment. The homeowner
            reads the recommendation, checks the website, and calls. The contractor that was named gets
            the call. Everyone else gets silence.
          </p>

          <h3>Why The Compression Matters For Home Services</h3>

          <p>
            Phone calls convert to 10 to 15 times more revenue than web leads in home services, and
            callers convert roughly 30% faster on emergency queries. The contractors AI names get the
            phone calls. The companies AI ignores get nothing — no impression, no click, no chance to
            compete. The compression also rewards specificity: a homeowner does not ask &quot;plumbers
            near me&quot; on ChatGPT. They ask &quot;the best licensed slab-leak plumber in [city]&quot;
            or &quot;an HVAC company near [neighborhood] with same-day AC repair.&quot; Retrievers reward
            contractors whose domains answer the specific question, with named credentials and clear
            service-area copy. To map the queries your shop should target,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">run the free AERO Blind
            Spot Scan</a> — it ships within 48 hours.
          </p>

          <h3>Why The Field Is Wide Open Right Now</h3>

          <p>
            The foundational academic work in AI citation optimization is less than two years old, and
            the contractor category carries the lowest practitioner adoption of any local-service
            vertical The Answer Engine measures. Fewer than four percent of US contractor domains
            currently carry any of the four core AEO signals at meaningful density. That gap is closing
            quarter over quarter, and the operators who claim a city first hold the citation slot for
            years because retrievers favor incumbents once citation patterns settle. One contractor per
            metro is the rule The Answer Engine enforces. Markets fill fast — text Justin direct at{' '}
            <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> to check whether your
            territory remains open.
          </p>

          <h3>What Changes When The Phone Stops Ringing</h3>

          <p>
            Most contractors describe the transition the same way: lead-gen platform volume holds steady
            on paper, but conversion rates degrade because the leads that used to arrive through organic
            web search and direct calls now arrive through AI-mediated discovery — and the AI is naming
            competitors. The contractor sees the lead-gen invoice unchanged, the website traffic flat,
            and the revenue down. The forward-leading indicator is AI citation rate, which most
            contractors never measure. To set up citation monitoring on your domain, email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>{' '}
            with the URL.
          </p>

          <div className="ae-callout ae-callout-orange not-prose">
            <div className="ae-callout-title">Territory Scarcity</div>
            <p>
              The Answer Engine takes one contractor per trade per metro. When a city fills, competitors
              cannot buy the slot at any price. Several major US metros remain open as of this article&apos;s
              publication.{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check
              your territory availability on Calendly</a> before a competitor claims it.
            </p>
          </div>

          {/* SECTION 2: LEAD GEN TRAP */}
          <span className="ae-section-label" id="lead-gen-trap">The Trap</span>
          <h2>The Lead Gen Platform Trap</h2>

          <p>
            <strong className="named-thesis">The Lead-Gen Capture Trap: contractors who route 70% or
            more of digital acquisition through HomeAdvisor, Angi, Thumbtack, and Bark are invisible to
            AI retrievers because platform-locked contractor profiles render behind JavaScript and login
            walls that AI crawlers cannot execute (AE Field Audit, 2026).</strong> Most home service
            companies built their entire customer acquisition strategy around these platforms for a
            decade. The model worked: pay per lead, call fast, close jobs. But the dependency has
            become a liability in the AI era because the citation surface lives on the operator domain,
            not on a HomeAdvisor profile. To diagnose your current acquisition mix and the share at
            risk,{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">email
            support@theanswerengine.ai</a> with your domain.
          </p>

          <h3>Why AI Crawlers Cannot Read Lead-Gen Profiles</h3>

          <p>
            HomeAdvisor, Angi, Thumbtack, and Bark render contractor profiles via client-side
            JavaScript, authentication walls, and proprietary data structures that the major LLM
            retrievers do not execute. Reviews, service descriptions, response times, and licensing
            information sit behind a login or load through API calls the crawler skips. When ChatGPT
            runs a local plumber pull, the live-web pass returns the platform&apos;s public marketing
            pages — not the contractor profiles. The retriever sees the platform&apos;s SEO content, not
            your shop. Result: the contractor pays for the lead and remains invisible to the citation
            channel that increasingly drives the next decade of acquisition.
          </p>

          <h3>The Customer Relationship Goes To The Platform</h3>

          <p>
            Even when lead-gen platforms produce volume, the platform owns the customer data,
            communication history, and review surface. The contractor cannot republish customer reviews
            on the operator domain in a way retrievers can extract because the review content lives
            inside the platform&apos;s ecosystem. The contractor cannot build named entity reinforcement
            because the brand mention sits inside a directory page rather than on a domain the operator
            controls. The downstream effect is that retrievers find no operator-published authority
            content to cite, even when the platform itself ranks well on Google. To start a parity audit
            on your current digital footprint,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">request the free AERO
            scan</a>.
          </p>

          <h3>The Compounding Cost Of Platform Dependency</h3>

          <p>
            Cost per acquisition on HomeAdvisor and Angi has climbed roughly 60% since 2020 while lead
            sharing across three to five competitors has stayed standard. Meanwhile, AI-mediated
            discovery produces exclusive, named recommendations at zero per-lead cost once the citation
            surface is built. The economics invert inside a 90-day cadence: an operator-owned authority
            corpus that earns AI citations carries a marginal cost per lead approaching zero, while the
            platform dependency carries a cost per lead that climbs every quarter. Markets fill fast —{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a
            Calendly consult on territory availability</a> before a competitor in your city claims the
            slot.
          </p>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">The Dependency Trap</div>
            <p>
              A contractor whose only online presence is a HomeAdvisor profile and a basic Google
              Business Profile gives AI retrievers almost nothing to evaluate. The citation slot goes to
              the operator whose own domain publishes the structurally correct chunks. To check your
              shop&apos;s current exposure, text the domain URL to{' '}
              <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> — replies arrive
              inside 24 hours.
            </p>
          </div>

          {/* SECTION 3: AI EVALUATION */}
          <span className="ae-section-label" id="ai-evaluation">AI Evaluation</span>
          <h2>What AI Evaluates Before Recommending A Contractor</h2>

          <p>
            AI platforms do not guess which contractor to recommend. They cross-reference business
            information across dozens of data sources before naming a shop in a homeowner answer.
            Understanding the evaluation criteria is the difference between getting recommended and
            getting ignored. The four checks below run in parallel on every local home-service query,
            and contractor domains that pass three out of four enter the citation set. To audit your
            current trust score against the four checks,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">run the free AERO
            Blind Spot Scan</a>.
          </p>

          <h3>Check One: Cross-Platform NAP Verification</h3>

          <p>
            When a homeowner asks AI for a plumber, electrician, or HVAC technician, the retriever
            checks Name, Address, and Phone consistency across Google Business Profile, Yelp, BBB,
            Facebook, Nextdoor, and trade-specific directories like Plumber Magazine&apos;s directory
            or the EPA 608 certification index. Inconsistencies in NAP data signal unreliability.{' '}
            <strong className="named-thesis">The NAP Drift Penalty: variance beyond 5% across seven or
            more directories reduces AI citation rate roughly 60% versus baseline because retrievers
            treat conflicting business records as low-confidence and default the citation to
            competitors with cleaner data (AE Field Audit, 2026).</strong> The fix is mechanical: lock
            one canonical NAP, update every listing to match, and audit quarterly. To start a parity
            audit, email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>{' '}
            with the domain.
          </p>

          <h3>Check Two: Licensing And Credential Verification In Plain HTML</h3>

          <p>
            Home services carry consequence-of-failure weighting elevated above most local categories.
            A bad plumber floods a house. A bad electrician sparks a fire. Retrievers take the risk
            seriously and look for verifiable credentials: state contractor license numbers, bonding
            and insurance carrier names, trade certifications (EPA 608, NATE, master plumber
            designations, C-36 in California), and association memberships. The mechanism is binary —
            the credentials must render as plain HTML text the crawler can read, not as image badges,
            not as PDFs, not as widget-rendered overlays. Aggarwal et al. (KDD 2024) measured a +37%
            citation lift on passages carrying named inline attribution, and trade credentials are the
            highest-density attribution available to a contractor. To audit your current licensing
            surface for AI legibility,{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a
            free 30-minute Calendly consult</a>.
          </p>

          <h3>Check Three: Service Area Depth And Specificity</h3>

          <p>
            <strong className="named-thesis">The Service Area Specificity Effect: contractor sites with
            individual neighborhood-level service-area pages — each naming zip codes, landmarks, and
            local code references — earn 4 to 7x higher citation rates on geo-loaded queries than sites
            carrying a single generic &quot;service area&quot; map (GEO-SFE, 2026).</strong> When a
            homeowner asks &quot;Who is the best electrician in [specific neighborhood]?&quot; the
            retriever needs content that addresses that neighborhood. A page titled &quot;We serve the
            greater metro area&quot; gives the retriever no geographic specificity to match. A page
            titled &quot;Licensed Electrician — [Neighborhood], [City] [Zip]&quot; with paragraphs
            naming local code amendments, common housing stock, and named landmarks wins the citation
            on the neighborhood query.
          </p>

          <h3>Check Four: Response Pattern Signals</h3>

          <p>
            Retrievers evaluate response behavior as a proxy for reliability on urgent queries. How
            quickly does the contractor respond to inquiries? Is 24/7 availability declared on the
            domain in plain text? Is there a clear emergency call-to-action above the fold on every
            service page? These behavioral signals, combined with review sentiment specifically about
            responsiveness, influence whether AI trusts the contractor enough for urgent recommendations.
            Emergency queries (&quot;burst pipe near me,&quot; &quot;no AC in heat wave,&quot; &quot;no
            power tonight&quot;) carry the highest citation reward for contractors with explicit
            response-time language. To map your response-pattern surface,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">request the AERO scan</a>{' '}
            and the report ships in 48 hours.
          </p>

          {/* SECTION 4: FIVE SIGNALS */}
          <span className="ae-section-label" id="signals">The Citation Signals</span>
          <h2>The Five Structural Signals That Earn The Contractor Citation</h2>

          <p>
            <strong className="named-thesis">The Definition Premium: contractor service pages that
            open every H3 with a plain-language definition of the trade procedure earn 57% higher
            citation probability than pages that bury the definition mid-article (Zhang et al.,
            2026).</strong> The five signals below are the structural levers retrievers measure on
            every home-service query. Contractor content that hits three or more signals enters the
            citation set. Content that hits all five owns the citation slot inside the city. Markets
            fill fast — one contractor per trade per metro is the rule.{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure
            your territory on Calendly</a> before a competitor does.
          </p>

          <h3>Signal One: Definition-First Openings On Every Service Page</h3>

          <p>
            Every H3 on a contractor service page opens with a plain-language definition of the trade
            procedure. &quot;A slab leak is a water line break inside or beneath the concrete
            foundation of a home, typically detected by a sudden hot spot on the floor, an unexplained
            spike in the water bill, or running-water sound with no fixture in use.&quot; That sentence
            is a complete answer the retriever extracts and cites without surrounding context. The
            +57% premium documented by Zhang et al. (2026) is the highest documented lift of any
            structural lever in AEO. Rewrite every H3 opener on the operator domain — the fix is
            mechanical and ships inside a week per service page. For the H3 rewrite template, email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>{' '}
            with the URL.
          </p>

          <h3>Signal Two: Inline Attribution To Codes And Trade Bodies</h3>

          <p>
            Aggarwal et al. (KDD 2024) measured a +37% citation lift on passages carrying inline
            quotations from named sources and +22% on passages carrying inline statistics with named
            attribution. Contractor content has the densest attribution surface available in any local
            category: building codes (UPC 2024 for plumbing, NEC 2023 for electrical, IRC 2024 for
            residential, IECC for energy), state licensing boards (CSLB in California, TDLR in Texas),
            trade certifications (EPA 608 for refrigerants, NATE for HVAC, master plumber
            designations), and named manufacturers (Bradford White, Trane, Square D). Every citation
            anchors the chunk and increases retriever trust. The attribution does not need to be exotic
            — it needs to be named.
          </p>

          <h3>Signal Three: Bounded Chunk Discipline Across The Domain</h3>

          <p>
            Every H3 holds between 80 and 180 tokens — roughly 60 to 130 words of dense prose. GEO-SFE
            (2026) measured a +43% extraction lift on bounded chunks versus long-form blocks, and a
            corresponding 31% degradation on chunks exceeding 300 words. RAG retrievers embed at the
            passage level, and over-long passages get split mid-thought during retrieval, fragmenting
            the answer. Contractor pages written as one long block of marketing prose lose the
            citation to contractor pages written in tight, definition-led chunks. The fix is structural:
            split long sections into multiple H3s, each self-contained, each bounded. To audit your
            chunk discipline,{' '}
            <a href="tel:+12134442229" className="cta-inline">text (213) 444-2229</a> with the domain.
          </p>

          <h3>Signal Four: Journalistic Tone Over Marketing Voice</h3>

          <p>
            <strong className="named-thesis">The Journalism Differential: contractor content written
            as third-party trade explanation rather than first-party marketing earns 3 to 5x preference
            inside major LLM retrievers (Chen et al., 2025).</strong> The cause is systematic
            downweighting of promotional language because promotional language correlates with low
            information density. Replace &quot;our award-winning team of master plumbers&quot; with
            &quot;the standard procedure for slab leak detection in California requires a licensed
            C-36 plumbing contractor and typically takes 4 to 8 hours of locating, isolating, and
            repairing the affected line.&quot; The reader still understands what the shop does. The
            retriever scores the second version higher because the second version reads as journalism.
            Booking and service-area pages can remain promotional. Educational pages cannot.
          </p>

          <h3>Signal Five: Corpus Cadence At Sixteen Articles Per Month</h3>

          <p>
            <strong className="named-thesis">The Cadence Crossover: contractor domains publishing 16
            AEO-structured articles per month cross the citation threshold inside 30 to 60 days, while
            domains publishing fewer than 8 articles per month almost never appear in AI answers (AE
            Field Audit, 2026).</strong> Retrievers compare a domain&apos;s corpus to competing domains
            at the city level, and breadth scoring rewards source variety. A 60-article contractor site
            outranks a 6-article contractor site even when the individual articles are weaker, because
            the larger corpus matches more query patterns and signals sustained authority. Sixteen
            articles per month is the field-tested minimum across The Answer Engine&apos;s contractor
            engagements. To plan a 16-per-month cadence for your operation,{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a
            Calendly consult</a> — the call ends with a clear yes or no on territory availability.
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

          {/* CTA BLOCK MIDWAY */}
          <div className="ae-cta-block not-prose">
            <h3>Get Your Contractor Domain&apos;s AEO Scorecard</h3>
            <p>
              The AERO Blind Spot Scan checks your contractor domain against 47 retrieval signals — NAP
              parity, licensing surface, service-area specificity, definition-first openings,
              attribution density, chunk discipline, journalistic voice, and corpus cadence. Ships in
              48 hours. Free, no obligation. One contractor per trade per metro — once a city fills, a
              competitor holds the citation slot for years.
            </p>
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">
              Run The Free Scan
            </a>
            <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">
              Book A Calendly Consult
            </a>
          </div>

          {/* SECTION 5: PROOF LEDGER */}
          <span className="ae-section-label" id="proof">The Proof Ledger</span>
          <h2>How To Measure Whether AI Cites Your Contractor Business</h2>

          <p>
            <strong className="named-thesis">The Proof Ledger: AEO results for contractors are
            measured by query-level citations across named models — not by impressions, Map Pack rank,
            or directory star counts — and a contractor cited by ChatGPT, Claude, Perplexity, and
            Gemini for the target queries has compound authority that classic SEO metrics cannot
            capture.</strong> The method is direct query testing, run weekly, logged per model, and
            reported as a citation rate. The Answer Engine ships a Proof Ledger spreadsheet with every
            engagement so the contractor owns the evidence — never a vendor-owned dashboard.{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">The AERO Blind Spot
            Scan</a> ships the spreadsheet with the first report.
          </p>

          <h3>What To Measure: Citation Rate Per Query Per Model</h3>

          <p>
            Pick 15 target queries — &quot;best plumber in [neighborhood], slab leak detection [city],
            emergency electrician [city], panel upgrade [city], tankless water heater installation
            [city], AC repair [city], 24 hour HVAC [city]&quot; — and run each on ChatGPT with search
            enabled, Claude, Perplexity, and Gemini. Log whether the operator domain appears, how the
            citation describes the contractor, and which page is linked. Track week over week. The
            query bank is the single most underrated AEO artifact, and most contractors never build it.
            For the Proof Ledger workbook template, email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>{' '}
            with the domain and target city.
          </p>

          <h3>What To Ignore: The Vanity Metric Stack</h3>

          <p>
            Impression counts from Google Search Console do not correlate with AI citation behavior on
            home-service queries because Search Console measures the classic SERP, not the LLM
            retrieval pass. Map Pack rank tracking measures a separate Google surface. Social-media
            follower counts drive emergency-call volume on existing customers but do not move
            retriever decisions. Domain Authority and Page Authority scores were designed for
            backlink-driven ranking, not retrieval-driven citation. The signal that matters is whether
            the contractor&apos;s name appears in the AI answer when a homeowner asks about their slab
            leak, panel upgrade, or no-AC emergency.
          </p>

          <h3>The Cadence That Builds Permanent Authority</h3>

          <p>
            Weekly citation logs, monthly directory parity checks, quarterly schema audits, and
            quarterly content refreshes on top-cited service pages. Contractors running this cadence
            typically see Perplexity citations in month two, ChatGPT citations in month three to four,
            and Gemini citations in month four to five. Google AI Overview inclusion lags because it
            tends to require established Google ranking on the same query first. The compounding effect
            stacks — once retrievers begin citing a contractor on a city, the citation pattern
            self-reinforces because retrievers favor incumbents. To set up citation monitoring on your
            operation, text{' '}
            <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> with the domain URL.
          </p>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">Territory Lock Window Is Closing</div>
            <p>
              The contractors that lock AI citation in the next two quarters will hold the slot for
              years. Displacing a cited contractor requires months of structured content work from a
              challenger. The window to claim a city is now —{' '}
              <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a
              Calendly consult on your trade and metro</a> to confirm the slot is open.
            </p>
          </div>

          {/* SECTION 6: FAQ */}
          <span className="ae-section-label" id="faq">FAQ</span>
          <h2>Frequently Asked Questions</h2>

          <details className="ae-faq-item">
            <summary>Are home service companies really losing leads to AI search?</summary>
            <div className="ae-faq-answer">
              <p>
                Yes. Consumer share using AI tools like ChatGPT and Google AI Overviews to find local
                services has climbed from roughly 6% to 45% inside one year, and home service queries
                carry the highest intent of any local category. AI platforms only recommend contractors
                they can verify across multiple data sources, and contractors who have not optimized
                for AI retrieval are invisible to a fast-growing acquisition channel.
              </p>
              <p>
                The lost calls compound week over week, and the lost revenue rarely shows up on the
                lead-gen invoice. To run a citation-rate baseline on your domain,{' '}
                <a href="https://theanswerengine.ai/blindspot">request the AERO scan</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Which AI platforms recommend contractors and home service companies?</summary>
            <div className="ae-faq-answer">
              <p>
                ChatGPT, Google AI Overviews, Perplexity, Claude, Apple Intelligence, and Microsoft
                Copilot all surface contractor recommendations on geo-loaded queries. Each platform
                pulls from a different mix of sources. ChatGPT relies on the Bing-backed live web pass
                plus operator-published authority content. Google AI Overviews weights Business
                Profile signals and crawlable reviews. Perplexity cross-references three to five
                sources before naming a business.
              </p>
              <p>
                Contractors need parallel visibility across all four to capture the full discovery
                channel. To map your current cross-platform footprint, email{' '}
                <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Why do contractors struggle more than other industries with AI search?</summary>
            <div className="ae-faq-answer">
              <p>
                Contractors face a compounding structural disadvantage. Most contractors route digital
                acquisition through HomeAdvisor, Angi, Thumbtack, and Bark, whose contractor profiles
                render behind JavaScript and login walls that AI crawlers cannot read. Most contractor
                sites are single-page or template-built with minimal educational content. Most
                contractors publish zero authority articles per month.
              </p>
              <p>
                The combination leaves AI retrievers with almost nothing to extract, while consumer
                queries in the trade categories are among the most urgent and high-intent local
                searches in any vertical. The structural gap is reversible inside a 90-day cadence —{' '}
                <a href="https://calendly.com/theanswerengine-support/30min">book a Calendly consult</a>{' '}
                to plan it.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Do Google reviews help contractors show up on ChatGPT?</summary>
            <div className="ae-faq-answer">
              <p>
                Google reviews influence Google AI Overviews but do not enter the ChatGPT retrieval
                pass at meaningful density because most reviews render via JavaScript that the ChatGPT
                web tool does not execute. For broader AI visibility, contractors need reviews mirrored
                on crawlable surfaces like Yelp, BBB, and trade-specific directories, plus customer
                testimonials republished as plain HTML text on the operator domain.
              </p>
              <p>
                Reviews still build trust at the point of decision. They do not produce the citation
                slot on their own. To audit your review surface for AI legibility, text the domain to{' '}
                (213) 444-2229.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Can a small local contractor compete with large franchise operations in AI search?</summary>
            <div className="ae-faq-answer">
              <p>
                Yes, and the structural advantage favors the small operator. AI platforms reward
                relevance, definition-first content, attribution density, and verifiable local
                expertise over brand recognition alone. A solo plumber publishing 16 AEO-structured
                neighborhood pages per month outranks a national franchise on a generic template every
                time.
              </p>
              <p>
                The citation slot rewards the operator whose own domain carries the structural
                signals, and franchise corporate sites rarely carry city-level specificity. To plan
                your AEO content lattice, email{' '}
                <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>How long does it take for a contractor to start appearing in AI results?</summary>
            <div className="ae-faq-answer">
              <p>
                First citations typically appear inside 30 to 60 days when the contractor publishes 16
                AEO-structured articles per month with definition-first openings, bounded chunks, and
                inline attribution. By day 90, the Proof Ledger usually carries citations from all four
                major LLM platforms. The Answer Engine carries a 90-day citation guarantee tied to that
                cadence.
              </p>
              <p>
                Timelines compress when the contractor domain already carries clean NAP data across
                directories and a verified Google Business Profile. To map the timeline for your
                operation,{' '}
                <a href="https://calendly.com/theanswerengine-support/30min">book a Calendly consult</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Is traditional SEO enough for contractors in the AI search era?</summary>
            <div className="ae-faq-answer">
              <p>
                Traditional SEO is no longer sufficient on its own. Google ranking still matters for
                the classic search surface, but AI retrievers use different evaluation criteria: chunk
                extraction, inline attribution, definition-first structure, and corpus cadence. A
                contractor ranking page-one on Google can still be invisible to ChatGPT and Perplexity
                because the same page may be a marketing block instead of an extractable chunk.
              </p>
              <p>
                AEO sits alongside SEO, not inside it, and both are required for full contractor
                visibility. To audit your current parity between Google rank and AI citation,{' '}
                <a href="https://theanswerengine.ai/blindspot">run the AERO scan</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>What is the biggest mistake contractors make with their online presence for AI?</summary>
            <div className="ae-faq-answer">
              <p>
                The biggest mistake is treating third-party lead generation platforms as the entire
                digital presence. HomeAdvisor, Angi, and Thumbtack keep the customer relationship, the
                data, and the citation surface. AI crawlers cannot access most contractor profiles on
                these platforms because the profile content sits behind authentication and dynamic
                rendering.
              </p>
              <p>
                When a homeowner asks ChatGPT for a plumber, the AI has no information about
                contractors who exist only inside lead-gen ecosystems, and the citation slot defaults
                to the operator whose own domain carries the structural signals. To plan an
                operator-owned AEO lattice, text Justin at (213) 444-2229 with the domain URL.
              </p>
            </div>
          </details>

          {/* PULL QUOTE */}
          <blockquote className="ae-quote">
            <p>
              The contractors cited by AI search next year are not the largest, not the loudest, and
              not the ones spending the most on HomeAdvisor leads. They are the operators publishing
              definition-first, attribution-anchored, bounded-chunk content at sixteen per month today
              — while the contractor category remains the lowest-adopted AEO vertical in any local
              service market.
            </p>
            <cite>— Justin Borges, Founder of The Answer Engine</cite>
          </blockquote>

          <h2>What Comes Next For Contractor AEO</h2>

          <p>
            The contractors that lock AI search citation in the next two quarters will hold the slot
            for years. Retrievers favor incumbents once citation patterns settle, and displacing a
            cited contractor requires months of structured content work from a challenger. The window
            to claim a city is now — one operator per trade per metro is the rule The Answer Engine
            enforces, and several major US markets remain open as of this article&apos;s publication.{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a
            free 30-minute strategy session on Calendly</a> — the call ends with a clear yes or no on
            territory availability.
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
                Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps local
                service operators get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews.
                1.14M+ monthly impressions across the client portfolio, 4/4 LLMs cited, 90-day
                citation guarantee.
              </p>
            </div>
          </div>

          {/* CONCEPT LATTICE LINKS */}
          <div className="not-prose mt-12 mb-12 border-t border-white/10 pt-8">
            <div className="font-mono uppercase tracking-wider text-xs text-white/40 mb-4">Concept Lattice</div>
            <div className="flex flex-wrap gap-3">
              <a href="/concepts/discovery-compression" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Discovery Compression</a>
              <a href="/concepts/lead-gen-capture-trap" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Lead-Gen Capture Trap</a>
              <a href="/concepts/nap-drift-penalty" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The NAP Drift Penalty</a>
              <a href="/concepts/service-area-specificity-effect" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Service Area Specificity Effect</a>
              <a href="/concepts/definition-premium" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Definition Premium</a>
              <a href="/concepts/journalism-differential" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Journalism Differential</a>
              <a href="/concepts/cadence-crossover" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Cadence Crossover</a>
              <a href="/concepts/proof-ledger" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Proof Ledger</a>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section className="ae-final-cta">
          <h2>Claim Your City Before A Competitor Does</h2>
          <p>
            One contractor per trade per metro. The Answer Engine ships AEO that gets your shop cited
            by ChatGPT, Gemini, Claude, and Perplexity — backed by a 90-day citation guarantee.
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
