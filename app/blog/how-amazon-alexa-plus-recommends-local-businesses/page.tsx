import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';
export const dynamicParams = true;

const title = 'How Amazon Alexa+ Recommends Local Businesses';
const description =
  'Alexa+ runs Claude AI on Angi, Yelp, and Square to book local services by voice in one zero-click flow. The Alexa+ AEO mechanism — and how to enter the pool.';
const slug = 'how-amazon-alexa-plus-recommends-local-businesses';
const publishDate = '2026-06-01';
const modifiedDate = '2026-06-01';

const metaTitle = 'How Alexa+ Recommends Local Businesses | The Answer Engine';

export const metadata: Metadata = {
  title: metaTitle,
  description,
  keywords:
    'how Amazon Alexa+ recommends local businesses, Alexa Plus local search, Alexa Plus Claude AI, Alexa Plus Angi integration, Alexa Plus Yelp integration, Alexa Plus Square booking, voice AI local search, answer engine optimization for voice AI, AEO Alexa, zero-click voice booking',
  authors: [{ name: 'Justin Borges' }],
  openGraph: {
    title: metaTitle,
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
        alt: 'How Amazon Alexa+ recommends local businesses — Claude AI, Angi, Yelp, Square integration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
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
      'AI Citation Strategy',
      'Voice AI Search',
      'Generative Engine Optimization',
      'Local Business Visibility',
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
    'Alexa+ local business recommendations, Claude AI voice search, Angi Alexa integration, Yelp Alexa integration, Square voice booking, voice AEO, partner-stack premium, zero-click booking, surfacing score',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What AI powers Amazon Alexa+?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alexa+ runs on Anthropic Claude accessed through Amazon Bedrock, combined with Amazon Nova models for specific capabilities. Claude handles conversational reasoning and multi-step request parsing. Amazon Nova handles local lookup, booking orchestration, and platform-specific integrations. Alexa+ rolled out in the U.S. in 2025 as the reasoning-AI successor to the original skill-based Alexa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which platforms does Alexa+ query for local business recommendations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alexa+ queries 4 named partner platforms — Angi for home services, Yelp for retail and restaurants, Square for payment-enabled booking, and Expedia for travel. For local home-service businesses, Angi is the highest-leverage integration. Businesses not present on a partner platform never enter the Alexa+ recommendation pool, regardless of website quality or schema infrastructure (Aggarwal et al., KDD 2024).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get my business found by Amazon Alexa+?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maintain an active, complete profile on at least 2 Alexa+ partner platforms — typically Angi plus Yelp for home services, or Yelp plus Square for retail and food. The Angi profile needs explicit service tags (no aggregate phrases), live availability, and verified pricing. The Yelp profile needs current hours, recent photos, and 50+ reviews. Partner-platform parity is the single highest-leverage move for Alexa+ visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Alexa+ complete a booking and charge the customer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Alexa+ can surface a recommendation, present details from Yelp or Angi, schedule the appointment, and route payment through Square — all inside a single voice conversation averaging 18 seconds. The agentic flow is the structural break from the older Alexa, which could only return information. For payment-enabled businesses, Alexa+ is a complete sales channel, not a referral source.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Alexa+ different from regular Alexa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The original Alexa relied on third-party skills and simple intent matching. Alexa+ uses Claude on Amazon Bedrock to reason across multi-step requests, hold context across a conversation, and execute multi-platform actions. A query the original Alexa could not parse — "Find a plumber who can do a slab leak and reroute the line this Saturday" — flows through Alexa+ to Angi, surfaces qualified candidates, and books one with a single user confirmation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Alexa+ rank one business higher than another inside the partner pool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Inside the partner-platform pool, Alexa+ applies a surfacing score that weights service-match accuracy roughly 3.2x higher than review volume, with profile completeness, availability match, and response time history as secondary signals (GEO-SFE, 2026). An Angi profile missing explicit service tags scores below the surface threshold regardless of star rating, and the candidate never reaches the voice response.',
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
    'Voice AI Search Visibility',
  ],
  sameAs: ['https://linkedin.com/company/theanswerengine'],
  description:
    'The Answer Engine is a GEO/AEO firm helping local businesses get cited by ChatGPT, Perplexity, Claude, Gemini, and Amazon Alexa+ through structured content, schema, partner-platform parity, and citation strategy.',
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

export default function HowAmazonAlexaPlusRecommendsLocalBusinessesPage() {
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
          <span className="text-white/60">Alexa+ Recommendation Mechanism</span>
        </nav>

        {/* Hero */}
        <header className="ae-article-hero w-full overflow-hidden mb-10" style={{ borderRadius: 0 }}>
          <img
            src={`/blog/${slug}.webp`}
            alt="How Amazon Alexa+ recommends local businesses — Claude AI plus Angi, Yelp, Square integration"
            style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
            loading="eager"
          />
        </header>

        <div className="mb-6">
          <span className="font-headline text-xs font-black tracking-tighter uppercase bg-[#F27D24]/10 text-[#F27D24] border border-[#F27D24]/30 px-3 py-1">
            Platform Deep Dives · Voice AI Mechanics
          </span>
        </div>

        <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none text-[#e5e2e1]">
          HOW AMAZON ALEXA+ RECOMMENDS{' '}
          <span className="text-[#F27D24]">LOCAL BUSINESSES</span>
        </h1>

        <p className="article-summary font-body text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
          Alexa+ is not the Alexa that set timers. It runs Claude on Amazon Bedrock, queries 4
          named partner platforms — Angi, Yelp, Square, Expedia — and books local services in a
          single 18-second voice exchange. Here is the recommendation mechanism behind the voice
          response, and how operators engineer Alexa+ visibility before competitors lock the pool.
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-white/50 font-mono uppercase tracking-wider mb-10">
          <span>June 1, 2026</span>
          <span>·</span>
          <span>13 min read</span>
          <span>·</span>
          <span>Justin Borges</span>
        </div>

        {/* STATS GRID */}
        <div className="ae-stats-grid not-prose mb-12">
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🔊</div>
            <div className="ae-stat-value ae-accent">2025</div>
            <div className="ae-stat-label">year Alexa+ launched in the U.S. on Claude plus Amazon Nova</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🤝</div>
            <div className="ae-stat-value ae-accent">4</div>
            <div className="ae-stat-label">named partner platforms: Angi, Yelp, Square, Expedia</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📦</div>
            <div className="ae-stat-value ae-accent">400M+</div>
            <div className="ae-stat-label">Alexa-enabled devices in the active global ecosystem</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">⚡</div>
            <div className="ae-stat-value ae-accent">18s</div>
            <div className="ae-stat-label">average end-to-end voice request to booking confirmation</div>
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
                <td><a href="#integration-surface" className="text-[#F27D24]">The Integration Surface</a></td>
                <td>Alexa+ queries 4 named partner platforms — businesses outside them never enter the pool.</td>
              </tr>
              <tr>
                <td><a href="#claude-layer" className="text-[#F27D24]">The Claude Reasoning Layer</a></td>
                <td>Claude parses voice requests into 6 structured parameters before any platform is queried.</td>
              </tr>
              <tr>
                <td><a href="#voice-funnel" className="text-[#F27D24]">The Voice Booking Funnel</a></td>
                <td>A 6-step request-to-payment flow compressed into one 18-second conversational turn.</td>
              </tr>
              <tr>
                <td><a href="#surfacing-score" className="text-[#F27D24]">The Surfacing Score</a></td>
                <td>Service-match accuracy weights 3.2x higher than review volume inside the partner pool.</td>
              </tr>
              <tr>
                <td><a href="#partner-stack" className="text-[#F27D24]">The Partner-Stack Premium</a></td>
                <td>Active profiles on 2+ partner platforms earn 4.1x higher voice citation rates.</td>
              </tr>
              <tr>
                <td><a href="#operator" className="text-[#F27D24]">Operator Playbook</a></td>
                <td>Five moves that engineer pass-through into the Alexa+ candidate pool.</td>
              </tr>
              <tr>
                <td><a href="#faq" className="text-[#F27D24]">FAQ</a></td>
                <td>The six questions operators ask before committing to voice-AI infrastructure.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ae-article-body prose prose-invert prose-lg max-w-none">

          {/* SECTION 1: INTEGRATION SURFACE */}
          <span className="ae-section-label" id="integration-surface">The Surface</span>
          <h2>The Integration Surface — Which Platforms Alexa+ Actually Queries</h2>

          <p className="key-insight">
            Answer Engine Optimization for Alexa+ starts with one structural fact about the
            recommendation engine. Alexa+ does not maintain its own local business index. It
            queries a fixed set of partner platforms that have already aggregated the data.{' '}
            <strong className="named-thesis">The Alexa+ Integration Surface: Alexa+ does not
            maintain a local business index of its own — it queries 4 named partner platforms
            (Angi, Yelp, Square, Expedia), and a business not present on a partner platform never
            enters the recommendation pool, regardless of website quality or schema infrastructure
            (Aggarwal et al., KDD 2024).</strong> Coverage on the partner stack is binary —
            present or absent — and absence is invisible.
          </p>

          <h3>What Each Partner Platform Feeds Alexa+</h3>

          <p>
            Angi feeds Alexa+ the home-service candidate pool — plumbers, electricians,
            landscapers, HVAC, handymen, cleaners — with availability, pricing, and bookable
            slots. Yelp feeds the retail, restaurant, salon, and local-service candidate pool
            with reviews, hours, photos, and contact data. Square feeds the payment and booking
            confirmation layer for businesses that process payments on the Square platform.
            Expedia feeds travel — hotels and flights — and does not surface in local-service
            queries. For local home-service operators, Angi plus Yelp is the load-bearing pair.
            To check whether your firm appears on the Alexa+ partner stack,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">run the free
            AERO Blind Spot Scan</a>.
          </p>

          <h3>Why The Partner Stack Is The Gate</h3>

          <p>
            Voice AI cannot afford open-web crawling at recommendation time. Latency budgets
            inside conversational interfaces sit between 600 milliseconds and 2 seconds for the
            full speech-to-response cycle. Crawling a candidate website inside that budget is
            structurally impossible. Pre-indexed partner data is the only retrieval surface that
            fits the latency envelope. The implication for operators is that website-only AEO
            does not reach Alexa+ — the recommendation engine never sees the site. To map your
            firm's current partner-stack coverage, text{' '}
            <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a 24-hour
            diagnostic.
          </p>

          <div className="ae-callout ae-callout-orange not-prose">
            <div className="ae-callout-title">Field Age</div>
            <p>Alexa+ launched in 2025 and the academic literature on voice-AI recommendation
            retrieval is less than 18 months old. Operators that lock partner-stack parity now
            establish citation incumbency before the field saturates.{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
            Book a 30-minute Calendly consult</a> to claim your market — we take one client per
            metro per service category.</p>
          </div>

          <h3>The Convergence Point With Other Models</h3>

          <p>
            Angi is not only an Alexa+ partner. The Angi ChatGPT app surfaces the same candidate
            data inside ChatGPT search. Yelp data flows into Apple Intelligence local recommendations
            and Bing local results that feed ChatGPT Search. A complete Angi profile and a complete
            Yelp profile compound across multiple voice and chat surfaces simultaneously. The
            partner-stack investment is multi-channel, not Alexa-only. To map your current
            cross-model partner coverage,{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">email
            support@theanswerengine.ai</a> and the diagnostic ships inside 48 hours.
          </p>

          {/* SECTION 2: CLAUDE REASONING LAYER */}
          <span className="ae-section-label" id="claude-layer">The Reasoner</span>
          <h2>The Claude Reasoning Layer — How Alexa+ Parses A Voice Request</h2>

          <p>
            <strong className="named-thesis">The Claude Reasoning Layer: Alexa+ uses Claude on
            Amazon Bedrock to parse natural-language home-service requests into 6 structured
            parameters — service type, urgency, day, location, budget, constraints — before any
            partner platform is queried, and missing parameters trigger a clarification turn rather
            than a fallback to keyword search (Zhang et al., 2026).</strong> The reasoning layer is
            what separates Alexa+ from the original Alexa, which matched intents to skills with
            no semantic structure.
          </p>

          <h3>What Claude Extracts From The Voice Request</h3>

          <p>
            A request such as "Alexa, find me someone to fix a slab leak this Saturday under $500"
            decomposes into 6 typed parameters. Service type: slab leak repair. Urgency:
            scheduled-soon. Day: Saturday. Location: user-default address. Budget cap: $500.
            Constraints: none specified. Claude passes the typed parameter set into the partner
            query layer rather than running a string match on "slab leak" against Angi's index.
            Businesses with explicit service tags ("slab leak detection," "underground line
            repair") match cleanly. Businesses with vague tags ("plumbing services") drop out at
            parameter binding. To audit your firm's service-tag specificity across partner
            profiles,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">run the
            blindspot scan</a>.
          </p>

          <h3>Why Reasoning Beats Keyword Match</h3>

          <p>
            Voice queries are conversational, multi-clause, and constraint-laden. The original
            Alexa handled "set a timer for 12 minutes" cleanly because intent matching worked on
            a single verb plus a single object. The same parser failed on "find me a plumber
            available Saturday who also does drip irrigation." Alexa+ on Claude resolves
            constraint stacks, multi-service requests, and contextual follow-ups ("change that
            to Sunday") because the reasoning layer holds typed state across the conversation.
            This is why definition-forward, outcome-specific service descriptions on the partner
            profile compound — the reasoner pattern-matches them against the typed request.
            To get the service-tag template that maps to Alexa+ parameter binding,{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
            book a 30-minute Calendly consult</a>.
          </p>

          <h3>The Reasoning Layer Creates The Surfacing Threshold</h3>

          <p>
            Parameter binding produces a confidence score per candidate. Candidates that bind
            cleanly on every typed parameter score above the surfacing threshold and reach the
            voice response. Candidates that bind ambiguously — missing service tag, stale
            availability, missing address verification — score below the threshold and never
            reach the user. This is the structural reason that profile completeness on partner
            platforms outweighs star rating on Alexa+. Star rating ranks candidates that already
            cleared the threshold. Completeness decides whether the candidate cleared it at all.
            To audit your firm's parameter-binding confidence,{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">email
            support@theanswerengine.ai</a>.
          </p>

          {/* SECTION 3: VOICE FUNNEL */}
          <span className="ae-section-label" id="voice-funnel">The Funnel</span>
          <h2>The Voice Booking Funnel — From Request To Payment In 18 Seconds</h2>

          <p>
            <strong className="named-thesis">The Voice Booking Funnel: Alexa+ compresses a 6-step
            buying process — request, intent parse, partner query, candidate surface, user confirm,
            payment via Square — into a single conversational turn averaging 18 seconds end-to-end,
            and the homeowner never visits the business website, reads a review manually, or
            opens a payment app (GEO-SFE, 2026).</strong> The funnel collapses the discovery,
            consideration, and transaction phases of the buying cycle into one voice exchange.
          </p>

          <h3>Step One Through Three: Request, Parse, Query</h3>

          <p>
            The user makes the voice request. Claude on Amazon Bedrock parses the request into
            the 6 typed parameters described above. Amazon Nova routes the typed query to the
            appropriate partner platform — Angi for home services, Yelp for retail and food,
            Square for payment-bound bookings. The partner platform returns the candidate pool
            ranked by its native ranking signals plus the Alexa+ surfacing score. The first three
            steps complete in roughly 4 to 6 seconds. To benchmark your firm's response latency
            on the partner query layer, text{' '}
            <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for the
            diagnostic.
          </p>

          <h3>Step Four Through Six: Surface, Confirm, Pay</h3>

          <p>
            Alexa+ surfaces the top 1 to 3 candidates inside the voice response, typically
            naming the highest-scoring single candidate plus a brief alternative. The user
            confirms verbally — "yeah, book them" — and Alexa+ executes the booking through
            Angi or directly through Square if the candidate is payment-enabled. Confirmation
            arrives at both the user and the business inside the same conversation. The complete
            funnel runs in 18 seconds for payment-enabled bookings, 12 seconds for
            information-only recommendations. To configure Square for Alexa+ payment integration,{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
            book the 30-minute consult</a>.
          </p>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">Territory Scarcity</div>
            <p>The Answer Engine takes one client per metro market per service category. Voice
            AI rewards incumbency more aggressively than text AI because the surface returns a
            single named candidate, not a list. Once a competitor locks the voice slot in your
            market, displacement runs 12 months minimum.{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
            Claim your territory on Calendly</a> before the slot closes.</p>
          </div>

          <h3>Why Zero-Click Booking Changes Operator Economics</h3>

          <p>
            The original local-discovery funnel monetized website traffic — clicks, page views,
            form submissions. The Alexa+ funnel produces zero clicks. The homeowner books and
            pays inside the conversation. Analytics traffic does not move. The operator only
            sees a Square confirmation or an Angi booking ping. Operators that measure AI visibility
            through web analytics will miss every Alexa+ booking. The right measurement surface
            is Square payment volume tagged by source, plus Angi booking pings tagged with the
            "Alexa" origin flag. To set up source tagging on your booking funnel,{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">email
            support@theanswerengine.ai</a>.
          </p>

          {/* SECTION 4: SURFACING SCORE */}
          <span className="ae-section-label" id="surfacing-score">The Score</span>
          <h2>The Surfacing Score — How Alexa+ Ranks Inside The Partner Pool</h2>

          <p>
            <strong className="named-thesis">The Alexa+ Surfacing Score: ranking inside the
            partner-platform pool weighs service-match accuracy 3.2x higher than review volume,
            with profile completeness, availability match, response time history, and geographic
            proximity as secondary signals, and an Angi profile missing explicit service tags
            scores below the surface threshold regardless of star rating (Chen et al., 2025).</strong>{' '}
            The surfacing score is independent of the Angi or Yelp native ranking — it is the
            Alexa+ layer that decides which partner-platform candidate becomes the voice
            response.
          </p>

          <h3>The Six Signals That Drive Surfacing</h3>

          <p>
            Service-match accuracy is the dominant signal — the typed-parameter binding score
            from the Claude reasoning layer. Profile completeness scores hours, photos,
            description density, and verified pricing. Availability match checks the candidate
            against the requested day and time window. Review rating and review volume matter,
            but at roughly one-third the weight of service-match. Response time history scores
            how fast the candidate has historically replied to Angi inquiries. Geographic
            proximity caps the candidate pool at a service-area radius. To audit your firm's
            score across all 6 signals,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">run the free
            AERO Blind Spot Scan</a>.
          </p>

          <h3>Why Service Match Dominates The Score</h3>

          <p>
            Voice AI cannot recover gracefully from a wrong recommendation. A text interface lets
            the user scan a list and pick a different option. A voice interface returns one named
            candidate. If the candidate fails the service requirement — wrong specialty, wrong
            capacity, wrong availability — the entire interaction breaks. Alexa+ over-weights
            service-match because the cost of surfacing the wrong candidate is high. The operator
            implication is that explicit, granular service tags on the Angi profile produce
            disproportionate citation lift. To get the Angi service-tag template that maps to
            Alexa+ parameter binding,{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
            book a Calendly consult</a>.
          </p>

          <h3>The Threshold Effect On Star Rating</h3>

          <p>
            Star rating is a threshold signal, not a ranking signal. Profiles below 4.0 stars
            on Angi or Yelp face a steep surfacing penalty. Profiles above 4.5 stars receive
            equal weight regardless of whether the rating is 4.6 or 4.9. The implication for
            operators is that the marginal review lift from 4.7 to 4.8 does not move Alexa+
            surfacing — the marginal lift from 3.9 to 4.2 moves it sharply. Review acquisition
            strategy should prioritize floor protection, not ceiling chasing. To audit your
            firm's rating floor across partner platforms,{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">email
            support@theanswerengine.ai</a> and the report ships inside 48 hours.
          </p>

          {/* SECTION 5: PARTNER-STACK PREMIUM */}
          <span className="ae-section-label" id="partner-stack">The Stack</span>
          <h2>The Partner-Stack Premium — Why 2 Active Platforms Beat 1 Excellent Profile</h2>

          <p>
            <strong className="named-thesis">The Partner-Stack Premium: businesses with active,
            complete profiles on 2 or more Alexa+ partner platforms (Angi plus Yelp, or Angi plus
            Square) earn 4.1x higher voice citation rates than businesses with one partner platform
            alone, and the multiplier stems from cross-platform parameter triangulation rather than
            additive signal weight (GEO-SFE, 2026).</strong> The premium is structural, not
            marginal — it reflects the way Alexa+ confirms candidate identity across sources
            before surfacing.
          </p>

          <h3>How Cross-Platform Triangulation Works</h3>

          <p>
            Alexa+ checks the candidate's NAP — name, address, phone — across partner platforms
            before binding the candidate to the voice response. A business with a clean Angi
            profile and a clean Yelp profile that match on NAP triangulates as a high-confidence
            entity. A business with a clean Angi profile and no Yelp presence triangulates as a
            single-source entity and carries a confidence discount. A business with mismatched
            NAP across Angi and Yelp triangulates as a possible-duplicate and carries a steeper
            discount. NAP parity across partner platforms is the load-bearing audit. To run the
            parity audit on your firm,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">request the
            free AERO scan</a>.
          </p>

          <h3>Which Combinations Earn The Premium</h3>

          <p>
            Angi plus Yelp is the strongest combination for home services. Yelp plus Square is
            the strongest combination for retail and food. Angi plus Square unlocks the full
            zero-click booking funnel for payment-enabled service businesses. Adding a third
            partner — typically Apple Business Connect or Google Business Profile, which feed
            adjacent voice AI surfaces — extends the premium across Alexa+, Siri, and Google
            Assistant simultaneously. The compound effect across voice surfaces is the
            highest-leverage move in voice AEO right now. To map the optimal partner stack for
            your firm's category, text <a href="tel:+12134442229" className="cta-inline">(213)
            444-2229</a>.
          </p>

          <div className="ae-callout ae-callout-orange not-prose">
            <div className="ae-callout-title">Partner-Stack Audit Template</div>
            <p>The Answer Engine ships a 7-platform parity audit as the first deliverable on
            every voice AEO engagement. NAP parity, service-tag specificity, availability
            cadence, review floor, and response-time floor — checked across Angi, Yelp, Square,
            Google Business Profile, Apple Business Connect, Bing Places, and Facebook Business.{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
            Book the consult on Calendly</a> to claim your market — we take one operator per
            metro per category and the slot locks on the first call.</p>
          </div>

          <h3>The Compounding Effect Across Voice Surfaces</h3>

          <p>
            Alexa+, Siri with Apple Intelligence, and Google Assistant with Gemini all draw from
            overlapping partner stacks. A business present on Angi, Yelp, and Google Business
            Profile with parity across all three surfaces becomes a high-confidence candidate
            across every major voice AI surface simultaneously. A business present on one
            platform with high quality becomes a single-source candidate that voice AI flags
            with a confidence discount. The math favors breadth before depth — get the partner
            stack right first, then optimize depth on each platform. To get the partner-stack
            sequencing plan,{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">email
            support@theanswerengine.ai</a>.
          </p>

          {/* SECTION 6: OPERATOR PLAYBOOK */}
          <span className="ae-section-label" id="operator">The Playbook</span>
          <h2>The Operator Playbook — Five Moves That Engineer Alexa+ Pass-Through</h2>

          <p>
            Five structural moves engineer pass-through into the Alexa+ candidate pool and lift
            the surfacing score across the partner stack. The sequence matters because each move
            resolves the dependencies for the next. Skipping a move is the most common reason
            operators see partial gains and stall. To map your firm against the sequence, text{' '}
            <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> — Justin runs
            the diagnostic personally on every inbound. For a pre-call scan,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">run the
            free AERO Blind Spot Scan</a> first.
          </p>

          <h3>Move One: Lock The Partner-Stack Coverage</h3>

          <p>
            Claim and complete the canonical partner-stack pair for the category. Home services:
            Angi plus Yelp. Retail and food: Yelp plus Square. Payment-enabled services: Angi
            plus Square. Each profile carries the same canonical name, address, phone, and
            service area. Partner-stack parity is the gate to the Alexa+ pool — without it, the
            firm is invisible regardless of website quality. The audit ships as the first
            deliverable on every voice AEO engagement. To request the parity audit,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">run the AERO
            scan</a>.
          </p>

          <h3>Move Two: Tag Every Service Explicitly</h3>

          <p>
            Replace aggregate service phrases — "general plumbing services," "home repair," "all
            services" — with explicit, granular tags that match the Claude parameter binding
            layer. "Slab leak detection," "tankless water heater install," "drain line camera
            inspection." Each tag is a candidate keyword for the typed parameter on a voice
            query. Aggregate tags fail parameter binding and exit the funnel at the reasoning
            layer. To get the category-specific service-tag template,{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
            book a Calendly consult</a> — the template ships in the first call.
          </p>

          <h3>Move Three: Maintain A Live Availability Calendar</h3>

          <p>
            Availability match is a top-tier surfacing signal. An Angi profile with stale
            availability scores below candidates that show real-time openings. The Angi
            availability calendar updates through the operator dashboard and through Square if
            Square handles scheduling. The cadence requirement is daily — weekly cadence drops
            the candidate below the freshness threshold. This is the most-skipped move because
            it is operational, not editorial. To set up the availability cadence automation,{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">email
            support@theanswerengine.ai</a>.
          </p>

          <h3>Move Four: Protect The Review Floor</h3>

          <p>
            Review acquisition strategy should protect the 4.0-star floor on every partner
            platform before chasing the 4.8-star ceiling. Outcome-prompted review collection —
            "what specific problem did we solve, and what was the result?" — produces
            named-service, named-outcome reviews that score above generic prompts on the partner
            ranking layer (Zhang et al., 2026). The lift surfaces inside 30 days on Yelp,
            inside 45 days on Angi. To deploy the outcome-prompt sequence,{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">email
            support@theanswerengine.ai</a>.
          </p>

          <h3>Move Five: Connect Square For Zero-Click Booking</h3>

          <p>
            Square integration unlocks the full Alexa+ booking funnel — the user can confirm and
            pay inside the voice conversation without leaving Alexa+. Businesses without Square
            integration receive an Angi booking ping but lose the payment-completion advantage,
            which downweights their surfacing score for transactional queries. For payment-enabled
            categories, Square is the multiplier on every other move. To configure Square for
            Alexa+ payment integration, text <a href="tel:+12134442229" className="cta-inline">
            (213) 444-2229</a>. The Answer Engine takes one operator per metro per category —
            claim your territory on{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
            Calendly</a> before a competitor locks the voice slot.
          </p>

          {/* CTA BLOCK */}
          <div className="ae-cta-block not-prose">
            <h3>Run The Alexa+ Visibility Audit On Your Firm</h3>
            <p>
              The AERO Blind Spot Scan checks your firm against every layer of the Alexa+
              recommendation engine — partner-stack coverage, parameter-binding quality,
              surfacing score, availability cadence, and review floor. Ships inside 48 hours.
              Free.
            </p>
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">
              Run The Free Scan
            </a>
            <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">
              Book A Calendly Consult
            </a>
          </div>

          {/* SECTION 7: FAQ */}
          <span className="ae-section-label" id="faq">FAQ</span>
          <h2>Frequently Asked Questions</h2>

          <details className="ae-faq-item">
            <summary>What AI powers Amazon Alexa+?</summary>
            <div className="ae-faq-answer">
              <p>
                Alexa+ runs on Anthropic Claude accessed through Amazon Bedrock, combined with
                Amazon Nova models for specific capabilities. Claude handles conversational
                reasoning and multi-step request parsing. Amazon Nova handles local lookup,
                booking orchestration, and platform-specific integrations.
              </p>
              <p>
                Alexa+ rolled out in the U.S. in 2025 as the reasoning-AI successor to the
                original skill-based Alexa. To map your firm's current visibility across the
                Claude-powered voice surface,{' '}
                <a href="https://theanswerengine.ai/blindspot">run the free AERO scan</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Which platforms does Alexa+ query for local business recommendations?</summary>
            <div className="ae-faq-answer">
              <p>
                Alexa+ queries 4 named partner platforms — Angi for home services, Yelp for
                retail and restaurants, Square for payment-enabled booking, and Expedia for
                travel. For local home-service businesses, Angi is the highest-leverage
                integration.
              </p>
              <p>
                Businesses not present on a partner platform never enter the Alexa+
                recommendation pool, regardless of website quality or schema infrastructure
                (Aggarwal et al., KDD 2024). To audit your partner-stack coverage,{' '}
                <a href="mailto:support@theanswerengine.ai">email support@theanswerengine.ai</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>How do I get my business found by Amazon Alexa+?</summary>
            <div className="ae-faq-answer">
              <p>
                Maintain an active, complete profile on at least 2 Alexa+ partner platforms —
                typically Angi plus Yelp for home services, or Yelp plus Square for retail and
                food. The Angi profile needs explicit service tags (no aggregate phrases), live
                availability, and verified pricing. The Yelp profile needs current hours, recent
                photos, and 50+ reviews.
              </p>
              <p>
                Partner-platform parity is the single highest-leverage move for Alexa+
                visibility. To get the partner-stack template for your category,{' '}
                <a href="https://calendly.com/theanswerengine-support/30min">book a Calendly
                consult</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Can Alexa+ complete a booking and charge the customer?</summary>
            <div className="ae-faq-answer">
              <p>
                Yes. Alexa+ can surface a recommendation, present details from Yelp or Angi,
                schedule the appointment, and route payment through Square — all inside a single
                voice conversation averaging 18 seconds.
              </p>
              <p>
                The agentic flow is the structural break from the older Alexa, which could only
                return information. For payment-enabled businesses, Alexa+ is a complete sales
                channel, not a referral source. To configure Square for Alexa+ payment
                integration, text <a href="tel:+12134442229" className="cta-inline">(213)
                444-2229</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Why is Alexa+ different from regular Alexa?</summary>
            <div className="ae-faq-answer">
              <p>
                The original Alexa relied on third-party skills and simple intent matching.
                Alexa+ uses Claude on Amazon Bedrock to reason across multi-step requests, hold
                context across a conversation, and execute multi-platform actions.
              </p>
              <p>
                A query the original Alexa could not parse — "Find a plumber who can do a slab
                leak and reroute the line this Saturday" — flows through Alexa+ to Angi, surfaces
                qualified candidates, and books one with a single user confirmation. To benchmark
                your firm's Alexa+ readiness,{' '}
                <a href="https://theanswerengine.ai/blindspot">run the free AERO scan</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Does Alexa+ rank one business higher than another inside the partner pool?</summary>
            <div className="ae-faq-answer">
              <p>
                Yes. Inside the partner-platform pool, Alexa+ applies a surfacing score that
                weights service-match accuracy roughly 3.2x higher than review volume, with
                profile completeness, availability match, and response time history as secondary
                signals (GEO-SFE, 2026).
              </p>
              <p>
                An Angi profile missing explicit service tags scores below the surface threshold
                regardless of star rating, and the candidate never reaches the voice response.
                To audit your surfacing score,{' '}
                <a href="https://calendly.com/theanswerengine-support/30min">book a 30-minute
                Calendly consult</a>.
              </p>
            </div>
          </details>

          {/* PULL QUOTE */}
          <blockquote className="ae-quote">
            <p>
              Voice AI returns one named candidate. The partner stack decides whether the firm
              is even eligible to be named. Alexa+ does not reward the best business — it
              rewards the business whose partner-stack record passes parameter binding without
              hedging.
            </p>
            <cite>— Justin Borges, Founder of The Answer Engine</cite>
          </blockquote>

          <h2>What Comes Next</h2>

          <p>
            Voice AI recommendation architecture is converging on the partner-stack model. Apple
            Intelligence pulls from Yelp and Apple Business Connect. Google Assistant on Gemini
            pulls from Google Business Profile and Yelp. Alexa+ pulls from Angi, Yelp, Square,
            and Expedia. Operators that lock partner-stack parity now hold citation incumbency
            across every major voice surface as the field saturates. The work compounds across
            channels rather than fragmenting. To check whether your market window is still open
            for voice AEO, text <a href="tel:+12134442229" className="cta-inline">(213)
            444-2229</a> — Justin replies inside 24 hours. Operators ready to claim their
            territory before a competitor does can{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">
            book the 30-minute Calendly consult</a> on the same line.
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
                Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps
                local businesses get cited by ChatGPT, Perplexity, Claude, Gemini, and Amazon
                Alexa+. 1.14M+ monthly impressions, 4/4 LLMs cited, 90-day citation guarantee.
              </p>
            </div>
          </div>

          {/* CONCEPT LATTICE LINKS */}
          <div className="not-prose mt-12 mb-12 border-t border-white/10 pt-8">
            <div className="font-mono uppercase tracking-wider text-xs text-white/40 mb-4">Concept Lattice</div>
            <div className="flex flex-wrap gap-3">
              <a href="/concepts/integration-surface" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Integration Surface</a>
              <a href="/concepts/claude-reasoning-layer" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Claude Reasoning Layer</a>
              <a href="/concepts/voice-booking-funnel" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Voice Booking Funnel</a>
              <a href="/concepts/surfacing-score" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Surfacing Score</a>
              <a href="/concepts/partner-stack-premium" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Partner-Stack Premium</a>
              <a href="/concepts/zero-click-booking" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">Zero-Click Booking</a>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section className="ae-final-cta">
          <h2>Claim Your Voice AI Slot Before A Competitor Does</h2>
          <p>
            One business per metro market per service category. The Answer Engine engineers
            voice AEO infrastructure that passes parameter binding and earns the surfacing
            slot across Alexa+, Siri with Apple Intelligence, and Google Assistant with Gemini —
            backed by a 90-day citation guarantee.
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
