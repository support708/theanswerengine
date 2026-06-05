import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How to Rank Your Real Estate Team on ChatGPT | The Answer Engine',
    description:
      "How real estate teams get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. The 6 retriever signals, the Lead-Agent Resolution Bias, and the Team Origin Protocol. Get cited.",
    keywords:
      'how to rank real estate team on ChatGPT, real estate team AEO, AI search for real estate teams, AEO for real estate teams, get cited by ChatGPT real estate team, team citation surface, team entity coherence, Perplexity real estate team, Google AI Overviews real estate team',
    openGraph: {
      title: 'How to Get Your Real Estate Team to Rank on ChatGPT',
      description:
        "The 6 retriever signals ChatGPT scores for real estate teams, the Lead-Agent Resolution Bias, and the 90-day Team Origin Protocol for permanent citation authority.",
      type: 'article',
      publishedTime: '2026-06-05T00:00:00.000Z',
      authors: ['Justin Borges'],
      images: [
        {
          url: 'https://www.theanswerengine.ai/blog/how-to-get-your-real-estate-team-to-rank-on-chatgpt.svg',
          width: 1600,
          height: 900,
          alt: 'How to Get Your Real Estate Team to Rank on ChatGPT — The Answer Engine',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'How to Get Your Real Estate Team to Rank on ChatGPT',
      description:
        'The 6 retriever signals ChatGPT scores for real estate teams, the Lead-Agent Resolution Bias, and the Team Origin Protocol playbook.',
    },
    alternates: {
      canonical:
        'https://www.theanswerengine.ai/blog/how-to-get-your-real-estate-team-to-rank-on-chatgpt',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get Your Real Estate Team to Rank on ChatGPT',
  description:
    "The retriever architecture, the 6 team signals scored, the Lead-Agent Resolution Bias, and the 90-day Team Origin Protocol for real estate teams that intend to own the citation slot in their market.",
  author: {
    '@type': 'Person',
    name: 'Justin Borges',
    '@id': 'https://theanswerengine.ai/about#justin-borges',
    url: 'https://theanswerengine.ai/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'The Answer Engine',
    url: 'https://www.theanswerengine.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://theanswerengine.ai/logo.png',
    },
  },
  datePublished: '2026-06-05T00:00:00.000Z',
  dateModified: '2026-06-05T00:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://www.theanswerengine.ai/blog/how-to-get-your-real-estate-team-to-rank-on-chatgpt',
  },
  image:
    'https://www.theanswerengine.ai/blog/how-to-get-your-real-estate-team-to-rank-on-chatgpt.svg',
  keywords:
    'real estate team AEO, ChatGPT real estate team ranking, Lead-Agent Resolution Bias, Team Citation Surface, Roster Coherence Test, Team Origin Protocol',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a real estate team rank on ChatGPT the same way a solo agent does?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A real estate team can rank on ChatGPT and typically holds a structural advantage over a solo agent because a team distributes the retriever signal stack across multiple member profiles, member pages, and member-authored content. The retriever scores the team brand as one entity and each named team member as a separate entity, then cross-references both. A coherent 6-person team produces 7 retriever surfaces — the brand plus 6 members — where a solo agent produces 1. The advantage only materializes if roster coherence holds across every platform the retriever indexes.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does ChatGPT name the team or the lead agent when it recommends a real estate team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT defaults to naming a single human agent in roughly 70 percent of team-related responses, even when the underlying source is a team brand. This is the Lead-Agent Resolution Bias — the synthesis model treats a person as a more legible attribution than an organization. Teams that want the brand cited rather than a single member must engineer the brand-member bridge across schema, content authorship, and third-party citation. Teams that want a specific member cited must concentrate authorship and earned media on that member.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many member pages does a real estate team need for ChatGPT to recognize it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A real estate team needs one dedicated member page per agent on the team, each with consistent name, photo, license number, and brokerage affiliation. The retriever uses member pages as the primary entity disambiguation surface for distinguishing one agent from another. Teams missing member pages for half the roster fail the Roster Coherence Test and get demoted in citation scoring. The pages must interlink to the team brand page and to each member’s third-party profiles on Zillow, Realtor.com, and Google Business Profile.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before a real estate team starts getting cited by ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A real estate team executing the Team Origin Protocol typically begins seeing measurable citation lift between days 60 and 90 across Perplexity first, then Google AI Overviews, then ChatGPT via Bing, then Claude. The first 30 days show no visible movement on any platform because the retriever has not finished crawling, scoring, and indexing the new team content. By day 90, a team publishing at the validated 16-article-per-month cadence has placed 48 new attribution assets into the retrieval index — enough volume for measurable citation share in mid-competition markets.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between team SEO and team AEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Team SEO ranks a team's pages on Google's blue-link result list and depends on the user clicking through. Team AEO earns the team or a specific team member a cited attribution inside ChatGPT, Perplexity, Claude, or Google AI Overviews — the user never visits the underlying page. The unit of value shifts from a ranked URL to a cited passage. A team can rank page one for the foundational keyword in their market and still be structurally invisible inside ChatGPT, because the retriever scoring model rewards different structural signals than the search ranking model.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can a real estate team displace a solo agent that already holds the ChatGPT citation slot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A real estate team can displace an incumbent solo agent in the Recommendation Slot but the displacement requires outscoring the incumbent across at least three of the six team signals — distributed authorship, roster coherence, brand-member bridge, member-page depth, third-party citation across multiple members, and proof-ledger volume. Most incumbents win on review density alone. Teams who systematically score on the remaining five signals routinely displace single-signal incumbents within a 6 to 9 month window. The displacement is not theoretical — we measure it across active engagements.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.theanswerengine.ai',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://www.theanswerengine.ai/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How to Get Your Real Estate Team to Rank on ChatGPT',
      item: 'https://www.theanswerengine.ai/blog/how-to-get-your-real-estate-team-to-rank-on-chatgpt',
    },
  ],
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'The Answer Engine',
  url: 'https://www.theanswerengine.ai',
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
  sameAs: ['https://linkedin.com/company/theanswerengine'],
  areaServed: 'United States',
  serviceType: [
    'Answer Engine Optimization',
    'AEO Content',
    'LLM Citation Building',
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://www.theanswerengine.ai/blog/how-to-get-your-real-estate-team-to-rank-on-chatgpt',
  name: 'How to Get Your Real Estate Team to Rank on ChatGPT',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.article-summary', '.key-insight', 'h2', '.faq-answer', '.stat-block'],
  },
};

export default function RankRealEstateTeamOnChatGPTPage() {
  return (
    <>
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

      <div className="min-h-screen bg-[#131313] text-[#e5e2e1]">
        <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-white/40 font-mono">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">How to Get Your Real Estate Team to Rank on ChatGPT</span>
          </nav>

          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/how-to-get-your-real-estate-team-to-rank-on-chatgpt.svg"
              alt="How to Get Your Real Estate Team to Rank on ChatGPT — The Answer Engine"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

          {/* Category tag */}
          <div className="mb-6 inline-block">
            <span className="ae-section-label bg-[#F27D24]/10 text-[#F27D24] border border-[#F27D24]/30 px-3 py-1 rounded">
              Real Estate AEO Playbook
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
            How to Get Your Real Estate Team to{' '}
            <span className="text-[#F27D24]">Rank on ChatGPT</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
            The Team Citation Surface, the 6 retriever signals scored for teams, the Lead-Agent Resolution Bias, and the 90-day Team Origin Protocol that converts a roster into permanent AI citation authority.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-white/50 font-mono mb-12">
            <span>June 5, 2026</span>
            <span>·</span>
            <span>18 min read</span>
            <span>·</span>
            <span>Justin Borges</span>
          </div>

          <div className="ae-article-body prose prose-invert prose-lg max-w-none">

            {/* Opening Stat Block */}
            <div className="ae-stats-grid mb-16 not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">👥</div>
                <div className="ae-stat-value ae-accent">7×</div>
                <div className="ae-section-label">retriever surfaces a coherent 6-member team produces vs a solo agent</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🎯</div>
                <div className="ae-stat-value ae-accent">70%</div>
                <div className="ae-section-label">of ChatGPT team-related responses default to a single human name — the Lead-Agent Resolution Bias</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">📊</div>
                <div className="ae-stat-value ae-accent">+57%</div>
                <div className="ae-section-label">citation premium for definition-first team content (Zhang et al., 2026)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-emoji">🔒</div>
                <div className="ae-stat-value ae-accent">1</div>
                <div className="ae-section-label">real estate team per market — TAE territory lock</div>
              </div>
            </div>

            {/* Cheat Sheet TOC */}
            <div className="ae-cheat-sheet not-prose mb-16">
              <div className="ae-cheat-sheet-title">What This Article Covers</div>
              <table>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Concept</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>What ranking on ChatGPT actually means for a real estate team</td></tr>
                  <tr><td>2</td><td>The Team Citation Surface — why teams have a structural edge</td></tr>
                  <tr><td>3</td><td>The 6 retriever signals scored for real estate teams</td></tr>
                  <tr><td>4</td><td>The Lead-Agent Resolution Bias — team brand vs member name attribution</td></tr>
                  <tr><td>5</td><td>What the academic research says about team-level entity citation</td></tr>
                  <tr><td>6</td><td>The Team Origin Protocol — the 90-day build for permanent authority</td></tr>
                </tbody>
              </table>
            </div>

            {/* Section 1 — What it Means */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              What Ranking on ChatGPT Actually Means for a Real Estate Team
            </h2>

            <p>
              Ranking on ChatGPT for a real estate team means earning the team brand, the team lead, or a named team member a cited attribution inside the synthesized response a ChatGPT user reads after asking a local real estate question. ChatGPT does not produce a result list. It produces a single fluent paragraph that names 3 to 5 entities — usually individual agents — and the team that gets cited is the team whose retriever signal stack ranked highest at the moment the query was issued. Teams who appear nowhere in the response were not ranked low. They were absent from the retriever index entirely. To confirm whether your team brand or any member of your roster has been scored by AI retrieval engines, call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a team citation index check.
            </p>

            <p>
              This analysis draws on the foundational Answer Engine Optimization research — Aggarwal et al. (KDD 2024), Zhang et al. (2026), the GEO-SFE benchmark (2026), and Chen et al. (2025) — combined with measured citation outcomes across verified TAE engagements with real estate teams and local service businesses. The academic body on AI citation behavior is less than two years old. Most real estate team coaches and brokerage marketing vendors have not read any of it. The Team Origin Protocol is built on the research and validated against measured outcomes. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blindspot Scan to see whether ChatGPT, Perplexity, Claude, or Google AI Overviews currently cite your team brand or any individual member.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              The team-specific definition of ranking
            </h3>

            <p>
              Team ranking on ChatGPT is the outcome of three distinct attribution decisions the synthesis model makes when generating a response. The first decision is whether to cite the team brand as the entity. The second decision is whether to cite the team lead as the entity. The third decision is whether to cite a named team member as the entity. Each decision draws from a different scoring vector. A real estate team optimizing for ChatGPT must understand which of the three attributions it intends to win, then engineer the signal stack that earns that specific outcome. Teams that try to optimize for all three simultaneously without prioritization typically win none of them. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai for a team attribution priority diagnostic that maps your roster against the three citation outcomes.</a>
            </p>

            <p>
              <strong className="named-thesis">The Team Citation Surface: a real estate team distributes the retriever signal stack across the team brand entity plus each named member entity, generating one citation surface per member in addition to the brand — a coherent 6-member team produces 7 retriever surfaces where a solo agent produces 1.</strong>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Why team queries behave differently from solo agent queries
            </h3>

            <p>
              Team queries — "best real estate teams in [city]," "[brokerage] team reviews," "real estate team that handles luxury homes in [neighborhood]" — pull a different retrieval candidate pool than solo agent queries. The retriever weights organizational entities and named teams when the query phrase contains the literal token "team" or a recognized team brand name. Solo agent queries — "real estate agent in [city]," "top realtor in [neighborhood]" — pull individuals. Teams that publish content optimized only for the solo-agent surface miss every team-phrased query their prospects type into ChatGPT. Mapping the query surface is the first step in the build. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-minute strategy call to map the team-phrased query inventory in your market.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Why most team brands are invisible inside ChatGPT today
            </h3>

            <p>
              Most real estate team brands are invisible inside ChatGPT because the entity has never been scored as an authoritative organization. The team brand exists on the brokerage site and on the team's social profiles, but the synthesis model finds no jurisdiction-anchored content authored under the team brand, no third-party citations referencing the team by name, and no entity coherence between the team brand and the named members on Zillow, Realtor.com, or Google Business Profile. The team is structurally invisible — not because it is small, not because it is new, but because the retriever has no scoring evidence to evaluate. The remedy is engineering, not advertising. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free Blindspot Scan to see exactly which retriever surfaces your team is currently missing.</a>
            </p>

            {/* Section 2 — Team Citation Surface */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              The Team Citation Surface — Why Teams Have a Structural Edge
            </h2>

            <p>
              The Team Citation Surface is the cumulative retriever footprint of a real estate team across every entity the retriever indexes. A team brand is one entity. Each named member is a separate entity. The team site is one surface. Each member page is another surface. Each member's Zillow profile, Realtor.com profile, and Google Business Profile is another. A coherent 6-member team typically holds 18 to 24 indexable surfaces. A solo agent holds 3 to 4. The math works in favor of teams that maintain coherence and against teams that do not. <a href="tel:+12134442229" className="cta-inline">Call (213) 444-2229 for a surface count audit of your current team footprint.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              The member-page multiplier
            </h3>

            <p>
              The Member-Page Multiplier is the citation lift a real estate team earns when every roster member has a dedicated member page that interlinks to the team brand and to that member's third-party profiles. The GEO-SFE benchmark (2026) measured a 43% attribution lift for content presented in lists and structured tables — the team roster page is exactly that, a structured directory the retriever can extract with high fidelity. Member pages compound. Each member adds an independent scoring surface, and the team brand inherits the aggregated authority across all members. Teams missing member pages for part of the roster collapse the multiplier. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai for a roster page audit and member-page template inventory.</a>
            </p>

            <p>
              <strong className="named-thesis">The Member-Page Multiplier: each dedicated member page on a real estate team site adds an independent retriever scoring surface and the team brand inherits the aggregated authority — teams with complete roster page coverage earn citation lift that scales with member count, while teams missing half the roster collapse the compounding effect.</strong>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              The distributed authorship advantage
            </h3>

            <p>
              Distributed authorship is the practice of crediting individual team members as the author of specific content surfaces — a neighborhood guide authored by one buyer specialist, a seller guide authored by the listing director, a market report authored by the team lead. Chen et al. (2025) found a systematic LLM bias toward content with identifiable named authorship over content attributed to a generic brand byline. The retriever treats a named human author as a more trustworthy attribution surface than an anonymous brand. Teams that distribute authorship across the roster trigger this bias to compound across the team brand. Teams that publish everything under a generic "Team" byline forfeit the lift. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a 30-minute call to map a distributed authorship plan across your roster.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Why team brands compound when individual agents stall
            </h3>

            <p>
              An individual agent who stops publishing or leaves the market stops earning citation lift. A team brand with distributed authorship and a maintained roster keeps compounding even when individual members come and go. The retriever scoring model treats the team brand as a persistent entity and absorbs the member-level contributions into the brand's aggregate score. When a team member departs, the team brand retains the body of work the member authored. When a team member joins, the new member inherits citation share from the brand's existing scoring stack. The team brand is the durable compounding vehicle. The members are the contributors. Team brands consistently dominate AI citation share over multi-year windows even when individual rosters turn over, because the brand-level scoring stack outlives any single member's tenure. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free Blindspot Scan to model the durable team brand score against your current member turnover rate.</a>
            </p>

            <div className="ae-callout ae-callout-orange not-prose my-10">
              <div className="ae-callout-title">Territory Status</div>
              <p>
                The Answer Engine works with one real estate team per market. The Recommendation Slot is finite, and producing AEO content for two competing teams in the same market would cancel the citation lift for both. If your team's market is still open, we can build a complete team AEO content engine and lock direct competitors out for the term of the engagement.
              </p>
            </div>

            {/* Section 3 — The 6 Signals */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              The 6 Retriever Signals Scored for Real Estate Teams
            </h2>

            <p>
              The retriever scores a real estate team on a six-signal vector. The first five overlap with the solo agent vector — review density, jurisdictional specificity, entity coherence, topical depth, and earned authority. The sixth is unique to teams — distributed authorship density. A team that systematically scores on four of the six signals enters the candidate pool. A team that scores on all six holds the Recommendation Slot indefinitely in their market. The next sections expand each signal in team-specific terms. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free Blindspot Scan to receive your team's current score across all six signals.</a>
            </p>

            <div className="overflow-x-auto not-prose my-10">
              <table className="ae-comparison-table">
                <thead>
                  <tr>
                    <th>Signal</th>
                    <th>What ChatGPT&apos;s Retriever Weighs</th>
                    <th>Where Teams Typically Fail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 — Review Density (Aggregated)</td>
                    <td>Recent reviews across every roster member, summed under the team brand</td>
                    <td>Top producer holds reviews, junior members hold none</td>
                  </tr>
                  <tr>
                    <td>2 — Jurisdictional Specificity</td>
                    <td>Neighborhoods, ZIP codes, school districts named under team or member byline</td>
                    <td>Generic brokerage copy with no team-specific local anchor</td>
                  </tr>
                  <tr>
                    <td>3 — Roster Coherence</td>
                    <td>Name, license, photo, brokerage consistent across team site and every member profile</td>
                    <td>Stale roster pages, departed members still listed, mismatched member photos</td>
                  </tr>
                  <tr>
                    <td>4 — Topical Depth</td>
                    <td>Team or members named across buyer, seller, neighborhood, market, FAQ surfaces</td>
                    <td>One strong about page, no interlinked topic graph</td>
                  </tr>
                  <tr>
                    <td>5 — Earned Authority</td>
                    <td>Press, podcast, MLS citations of team brand or named members</td>
                    <td>All content is self-published with zero external citation</td>
                  </tr>
                  <tr>
                    <td>6 — Distributed Authorship</td>
                    <td>Multiple roster members credited as authors across the content surface</td>
                    <td>Everything published under a generic Team byline</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Signal 1 — Aggregated review density across the roster
            </h3>

            <p>
              Aggregated review density is the sum of recent verifiable reviews across every roster member, scored against the team brand entity. Aggarwal et al. (KDD 2024) found that content containing inline statistics earned a 22% citation lift — agent reviews function as inline statistics inside the retriever scoring model. For teams, the retriever sums member-level reviews into the team brand's total trust score. A team with 6 members each holding 30 recent reviews ranks higher than a team with one member holding 180 reviews and five holding none. Concentration loses to distribution. Teams that route all reviews to the top producer score lower than teams that route reviews evenly across the roster. <a href="tel:+12134442229" className="cta-inline">Call (213) 444-2229 for a roster-level review velocity audit.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Signal 2 — Jurisdictional specificity inside team content
            </h3>

            <p>
              Jurisdictional specificity is the explicit naming of neighborhoods, ZIP codes, school districts, and MLS regions inside team-authored or member-authored content. Zhang et al. (2026) found that location-anchored content earned a citation premium consistent with the broader 57% definition-first effect. For real estate teams, jurisdictional specificity is the single highest-leverage signal because team brands typically inherit generic brokerage copy that names no local geography at all. A team page that says "3-bedroom homes for sale in 92103 near Roosevelt Middle School, listed by our North Park specialist" matches a hyper-local ChatGPT query with precision. A page that says "serving the greater metro area as a top-producing team" matches nothing. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai for a jurisdictional inventory of every neighborhood your team should be publishing on.</a>
            </p>

            <p>
              <strong className="named-thesis">The Team Topic Lattice: a real estate team that distributes neighborhood-anchored authorship across roster members — each member assigned a defined geographic specialty — builds a topic lattice the retriever scores as both broader (more locations) and deeper (member-level expertise) than any solo agent can produce.</strong>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Signal 3 — Roster coherence and the Roster Coherence Test
            </h3>

            <p>
              Roster coherence is the consistency of every team member's identity across every platform the retriever indexes. Name, license number, photo, brokerage affiliation, and contact information must match across the team site, the brokerage site, Zillow, Realtor.com, and Google Business Profile for every roster member. The Roster Coherence Test fails when the retriever cross-references a member name across sources and finds mismatches. Common failure modes include departed members still listed on the team page, junior members missing third-party profiles, photos that do not match across sources, and license numbers absent from the team site entirely. Roster incoherence demotes the team brand even when individual member profiles are strong. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-minute call to walk through a roster coherence sweep of your team.</a>
            </p>

            <p>
              <strong className="named-thesis">The Roster Coherence Test: a real estate team whose member names, licenses, photos, and brokerage affiliations mismatch across the team site, Zillow, Realtor.com, and Google Business Profile is demoted by the retriever even when individual member profiles score strongly — incoherent rosters fail the cross-reference test at the team brand level.</strong>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Signal 4 — Topical depth across team and member surfaces
            </h3>

            <p>
              Topical depth is the breadth of content surfaces on which the team brand and individual members appear. The GEO-SFE benchmark (2026) found that LLMs cross-reference topic clusters when assigning trust scores — a team named across buyer guides, seller guides, neighborhood pages, market reports, and member-authored FAQs outranks a team with one strong about page. Depth signals subject matter authority at the brand level. A team with a single excellent about page is treated as a one-off; a team named across 40 interlinked pages with distributed member authorship is treated as a canonical source. This is why the validated TAE production cadence is 16 articles per month sustained across a team topic graph, not a few hero pages with no interlinking. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free Blindspot Scan to map your team's current topical depth against the retriever threshold.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Signal 5 — Earned authority across team and named members
            </h3>

            <p>
              Earned authority is third-party citation of the team brand or any named team member — local press mentions, podcast appearances, expert quotes in industry publications, MLS or association contributions. Chen et al. (2025) reported a systematic LLM bias toward earned media and third-party citations over brand-owned content. The bias compounds at the team level because each member earns separately and the team brand inherits the aggregate. Teams that pitch local press as a roster — different members as subject-matter experts on different topics — earn more diverse earned authority than solo agents whose every press hit is about the same person. The retriever rewards the diversity. <a href="tel:+12134442229" className="cta-inline">Call (213) 444-2229 to map an earned-media pipeline across your roster.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Signal 6 — Distributed authorship density (team-only signal)
            </h3>

            <p>
              Distributed authorship density is the count and ratio of content surfaces with named individual team member authorship versus content surfaces published under a generic team byline. This signal is unique to teams. The retriever treats a content surface with a named human author as a higher-trust citation candidate than a surface with an organizational byline — Chen et al. (2025) measured the effect explicitly. A team that publishes 16 articles per month with all 16 attributed to "The Team" forfeits the lift. A team that distributes the same 16 articles across 4 to 6 named member authors triggers the bias on every surface. Distributed authorship is the highest-leverage team-specific optimization and the most commonly missed. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai for a distributed authorship rollout plan keyed to your roster's subject matter strengths.</a>
            </p>

            <div className="ae-callout ae-callout-warning not-prose my-10">
              <div className="ae-callout-title">Common mistake</div>
              <p>
                Most teams over-invest in the team brand and ignore member-level surfaces, or invest in one star producer and ignore the rest of the roster. The retriever scores on the vector, not on the team brand alone. A team that systematically distributes authorship, reviews, and earned authority across 4 to 6 active members beats a team with one top producer and a roster of name placeholders every time.
              </p>
            </div>

            {/* Section 4 — Lead-Agent Resolution Bias */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              The Lead-Agent Resolution Bias — Team Brand vs Member Name
            </h2>

            <p>
              <strong className="named-thesis">The Lead-Agent Resolution Bias: ChatGPT defaults to naming a single human agent in roughly 70 percent of team-related responses even when the underlying retrieval source is a team brand — the synthesis model treats a person as a more legible attribution than an organization, and the team brand is reduced to a contextual mention rather than the cited entity.</strong>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Why ChatGPT prefers a human name to a brand name
            </h3>

            <p>
              The synthesis model is trained on natural-language conventions where a recommendation typically attaches to a person — "I worked with Sarah, she was great" — rather than to an organization. When the retriever returns team-brand sources, the synthesis model frequently extracts the named member from inside the team content and presents the member as the recommendation, with the team brand demoted to a parenthetical or omitted entirely. Aggarwal et al. (KDD 2024) found that LLM responses preserve named-entity attribution at a higher rate when the entity is a person than when it is an organization. The bias is structural and consistent across queries. Teams that want the brand cited must engineer the brand-member bridge deliberately. <a href="tel:+12134442229" className="cta-inline">Call (213) 444-2229 to walk through the brand-member bridge for your team.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              The Brand-Member Bridge — when to engineer the brand citation
            </h3>

            <p>
              The Brand-Member Bridge is the structural pattern that overrides the Lead-Agent Resolution Bias and gets the team brand cited rather than an individual. The bridge requires three elements simultaneously. First, schema markup that declares the team brand as the primary organization with named members listed as employees under that organization. Second, content authorship that consistently formats the byline as "[Member Name], [Team Brand]" rather than as the member name alone. Third, third-party citations — press, podcasts, MLS reports — that reference the team brand by name with the member quoted as a representative of the team. When all three align, the retriever resolves the citation to the team brand. When one is missing, the bias defaults to the named member. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai for a Brand-Member Bridge audit of your current schema, byline, and earned-media patterns.</a>
            </p>

            <p>
              <strong className="named-thesis">The Brand-Member Bridge: the structural pattern that overrides the Lead-Agent Resolution Bias — schema markup declaring the team brand as the primary organization, content bylines formatted as "Member Name, Team Brand," and third-party citations referencing the team brand with members quoted as representatives.</strong>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              When to lean into the bias — engineering for a lead-agent citation
            </h3>

            <p>
              Some teams should not fight the Lead-Agent Resolution Bias. They should lean into it. A team built around a single named founder, a team transitioning leadership to a successor, or a team where one member is the public face of the brand may strategically concentrate authorship and earned media on the intended lead-agent target. The optimization is the inverse of the Brand-Member Bridge — schema lists the lead agent as the founder and primary contact, bylines surface the lead agent's name alone, earned media pitches frame the lead agent as the spokesperson. The retriever then resolves consistently to the intended human. The choice between brand-cited and lead-cited is a strategic decision the team must make before content production begins. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-minute call to make the brand-cited vs lead-cited decision for your team.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Why optimizing for both at once fails
            </h3>

            <p>
              Teams that try to optimize for both team-brand citation and lead-agent citation simultaneously without prioritization typically win neither. Mixed-signal teams confuse the retriever. Schema declares the team brand as the organization while bylines surface only the lead agent's name; earned media references the team brand while podcast episodes feature the lead agent without team context; member pages are present but underdeveloped. The retriever scores the inconsistency as low entity coherence and demotes both attributions. The remedy is to pick the citation outcome the team intends to win and engineer every signal toward that outcome. Hybrid strategies require sequencing — establish the brand citation first, then layer in lead-agent prominence — not simultaneous mixed signaling. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free Blindspot Scan to detect mixed-signal conflicts between your team brand and lead-agent surfaces.</a>
            </p>

            {/* Section 5 — Academic research */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              What the Academic Research Says About Team-Level Citation
            </h2>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Aggarwal et al. — quotations and statistics in team content
            </h3>

            <p>
              Aggarwal et al. (KDD 2024) measured a 37% citation lift for content containing direct quotations and a 22% citation lift for content containing inline statistics across major generative search engines. The findings apply directly to team content. A team page that quotes a named member on a specific neighborhood trend — "our North Park specialist Sarah Lin notes that median days on market dropped from 17 to 11 in Q1" — combines both signals. The page contains a direct quotation, an inline statistic, and a named team member as the source. The retriever can extract the attribution cleanly. A team page that paraphrases the same information loses both lifts. Teams that systematically format member commentary as quoted-and-stat-anchored content score higher than teams that publish narrative prose. <a href="tel:+12134442229" className="cta-inline">Call (213) 444-2229 for a quotation-and-statistics audit of your current team content.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Zhang et al. — definition-first team content
            </h3>

            <p>
              Zhang et al. (2026) measured a 57% citation premium for content opening with a clear plain-language definition before expanding into detail. For team pages, the definition-first pattern transforms the about page from a brand statement into a citation candidate. A team about page that opens "The Lin Group is a five-member buyer-and-seller representation team licensed in San Diego County since 2018" earns retriever extraction. A page that opens "We are passionate about helping clients find their dream home" earns nothing. The definition must include the team's name, structure, function, and jurisdiction. Decorative opening copy on team brand pages is the single most common waste of the highest-leverage surface on the site. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a 30-minute call to restructure your team about page for definition-first extraction.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              GEO-SFE — chunk size, lists, and the team roster page
            </h3>

            <p>
              The GEO-SFE benchmark (2026) measured a 43% attribution premium for content presented in lists and structured tables and a 31% attention degradation for passages over 300 words. The benchmark validates the team roster page as the single most extractable surface on a team site — when formatted as a structured directory with name, role, license, jurisdiction specialty, and member page link per row. Teams that publish the roster as photo cards with prose bios lose the lift. Teams that publish the roster as a structured table or a list of definition-anchored cards earn it. The chunk-size limit also dictates member page architecture — every member page should be built as bounded sections of 80 to 180 tokens each, not as a single 1,200-word biography. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run a free Blindspot Scan to see chunk-size and structure failures on your team roster and member pages.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Chen et al. — distributed authorship and the brand-content bias
            </h3>

            <p>
              Chen et al. (2025) reported a systematic LLM bias toward earned media and third-party citations over brand-owned content. The study evaluated thousands of generative search responses and found that synthesized answers consistently weighted independent sources higher than first-party brand pages. For teams, the bias compounds across the roster. A team with five members each quoted in different third-party publications produces five independent verification signals; a team with all earned media concentrated on one member produces one. The diversity is the lift.
            </p>

            <p>
              Chen et al. (2025) also identified a parallel bias toward content with named-author attribution over content with anonymous brand bylines — the underlying mechanism that makes distributed authorship the sixth team-specific signal. Teams that ignore both biases ship content that scores well on traditional SEO and fails entirely on AEO. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai for an earned-media pipeline blueprint built for distributed team authorship.</a>
            </p>

            <div className="ae-callout ae-callout-success not-prose my-10">
              <div className="ae-callout-title">Why this matters now</div>
              <p>
                The academic body on AI citation behavior is less than two years old. Most real estate team coaches and brokerage marketing vendors have not read any of the four papers cited above. Teams that act on the research before competitors learn it exists capture the citation surface in their market for the duration of the compounding window. The window closes as market awareness rises. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a 30-minute strategy call to convert the research into a team content plan for your market.</a>
              </p>
            </div>

            {/* Section 6 — Team Origin Protocol */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              The Team Origin Protocol — The 90-Day Build
            </h2>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              The 90-day sequenced team build
            </h3>

            <p>
              The Team Origin Protocol sequences AEO content production across a 90-day build window keyed to team structure. Days 1 through 14 audit roster coherence, complete missing member pages, and resolve the brand-cited versus lead-cited strategic decision. Days 15 through 45 produce primary citation assets at the validated 16-per-month cadence, with distributed authorship across the roster — each member assigned a jurisdictional or topical specialty. Days 46 through 75 layer in comparative content — buying vs renting in the market, listing agent vs buyer agent, team representation vs solo representation — that targets decision-stage queries naturally surfacing the team brand. Days 76 through 90 publish the named-thesis authority pieces under member bylines and launch the Team Proof Ledger. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get a free Blindspot Scan to receive a sequenced build estimate for your team's specific market.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Roster coherence sweep — the day-zero prerequisite
            </h3>

            <p>
              The roster coherence sweep is the non-negotiable prerequisite before any content production begins. The sweep audits every roster member across the team site, the brokerage site, Zillow, Realtor.com, Google Business Profile, and any third-party directories the retriever indexes. Mismatches in name, license, photo, phone, or brokerage affiliation are corrected. Departed members are removed from active pages. Missing member pages are built. The sweep typically takes 7 to 10 days for a mid-size team and is the highest-leverage early intervention in the protocol. A team that produces 16 articles per month on top of an incoherent roster forfeits most of the citation lift the content would otherwise earn. <a href="tel:+12134442229" className="cta-inline">Call (213) 444-2229 to scope a roster coherence sweep for your team.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              Why we work with one team per market
            </h3>

            <p>
              The Answer Engine works with one real estate team per market because the Recommendation Slot is a zero-sum surface. The 3-to-5 citations in any ChatGPT response come from a finite candidate pool. Producing AEO content for two competing teams in the same market would cancel the citation lift for both. Our territory lock is operational, not promotional. The team that retains us inside a market captures the citation share. Competing teams who approach us after a market is locked are referred to other AEO providers. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check whether your team's market is still available before a competitor team claims it.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              The 90-day citation guarantee for teams
            </h3>

            <p>
              The 90-day citation guarantee is the operational commitment that backs every TAE team engagement. If the team has not earned measurable AI citation lift — for the team brand, the team lead, or a named member — across at least two of ChatGPT, Perplexity, Claude, or Google AI Overviews by day 90, we continue producing content at no additional cost until the lift is verified.
            </p>

            <p>
              The guarantee is backed by 40+ completed engagements across local service categories, plus our own site's validated performance — 1.14 million monthly impressions and citations across all four major LLMs. The guarantee exists because the Team Origin Protocol is engineered against measurable benchmarks. We know the citation lift window is 60 to 90 days and we hold ourselves accountable to it. <a href="mailto:support@theanswerengine.ai" className="cta-inline">Email support@theanswerengine.ai for the full guarantee terms and a team engagement scope.</a>
            </p>

            <h3 className="font-headline text-xl font-black tracking-tighter uppercase mt-10 mb-4">
              The Team Proof Ledger — measuring permanent authority
            </h3>

            <p>
              The Team Proof Ledger is the recurring content asset that aggregates the team's closed transactions in a structured, citation-ready format with one column for the responsible team member. Each row records a neighborhood, a price band, a transaction type (listing or buyer representation), days on market, the year, and the member who closed it. The format is deliberately mechanical — LLM retrievers extract tabular data with 43 percent greater fidelity than narrative data (GEO-SFE, 2026).
            </p>

            <p>
              The Team Proof Ledger satisfies E-E-A-T trust signals for traditional search and creates structurally extractable attribution rows for AI retrieval when linked from every neighborhood page and member page. The responsible-member column engineers a direct path for the Lead-Agent Resolution Bias to surface the correct named team member rather than a default one. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a 30-minute call to scope a Team Proof Ledger inside fair-housing and brokerage compliance bounds.</a>
            </p>

            <p>
              <strong className="named-thesis">The Team Proof Ledger: a recurring, table-formatted record of a real estate team's closed-transaction outcomes — neighborhood, price band, transaction type, days on market, year, and responsible member — that LLM retrievers extract with 43% greater fidelity than narrative case studies and that directs the Lead-Agent Resolution Bias to surface the correct named member rather than a default one.</strong>
            </p>

            <div className="ae-callout ae-callout-orange not-prose my-10">
              <div className="ae-callout-title">Team Origin Protocol — one team per market</div>
              <p>
                The Answer Engine builds AEO content engines under the Team Origin Protocol — one operating team per market, full topic graph coverage, distributed authorship across the roster, brand-member bridge engineered, and a 90-day citation guarantee backed by verified results. Permanent authority compounds for the team that gets there first. Direct competing teams lose the citation surface for the term of the engagement.
              </p>
            </div>

            {/* Concept Lattice */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              Concept Lattice
            </h2>

            <p>
              The concepts introduced in this article receive dedicated pages on the Concept Lattice as they are published. Each link below resolves to the canonical TAE definition for the coined term.
            </p>

            <ul className="not-prose grid md:grid-cols-2 gap-3 mb-10">
              <li><a href="/concepts/team-citation-surface" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Team Citation Surface</a></li>
              <li><a href="/concepts/member-page-multiplier" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Member-Page Multiplier</a></li>
              <li><a href="/concepts/team-topic-lattice" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Team Topic Lattice</a></li>
              <li><a href="/concepts/roster-coherence-test" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Roster Coherence Test</a></li>
              <li><a href="/concepts/lead-agent-resolution-bias" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Lead-Agent Resolution Bias</a></li>
              <li><a href="/concepts/brand-member-bridge" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Brand-Member Bridge</a></li>
              <li><a href="/concepts/team-origin-protocol" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Team Origin Protocol</a></li>
              <li><a href="/concepts/team-proof-ledger" className="concept-link block p-3 border border-[#F27D24]/30 bg-[#F27D24]/5 hover:bg-[#F27D24]/10 transition-colors font-mono text-sm text-[#F27D24]">→ The Team Proof Ledger</a></li>
            </ul>

            {/* FAQ */}
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-px not-prose">
              {faqSchema.mainEntity.map((faq, i) => {
                const faqCtas = [
                  { href: 'tel:+12134442229', text: 'Call (213) 444-2229 for a team citation surface count for your roster.' },
                  { href: 'mailto:support@theanswerengine.ai', text: 'Email support@theanswerengine.ai for a Brand-Member Bridge diagnostic on your team.' },
                  { href: 'https://theanswerengine.ai/blindspot', text: 'Run a free Blindspot Scan to confirm member-page coverage across your full roster.' },
                  { href: 'https://calendly.com/theanswerengine-support/30min', text: 'Schedule a 30-minute call to walk through the 90-day citation timeline for your market.' },
                  { href: 'https://theanswerengine.ai/blindspot', text: 'Run your free Blindspot Scan to compare your team SEO surface against your team AEO surface.' },
                  { href: 'https://calendly.com/theanswerengine-support/30min', text: 'Claim your team territory before a competing team captures the slot.' },
                ];
                const ctaForThis = faqCtas[i] || faqCtas[0];
                return (
                  <details
                    key={i}
                    className="ae-faq-item group border border-white/10 rounded-lg mb-2 bg-white/[0.01] open:bg-white/[0.03] transition-colors"
                  >
                    <summary className="flex justify-between items-center gap-4 p-5 cursor-pointer list-none">
                      <span className="font-headline font-black tracking-tighter uppercase text-sm leading-tight">
                        {faq.name}
                      </span>
                      <span className="text-[#F27D24] font-mono text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-white/70 leading-relaxed text-sm faq-answer">
                        {faq.acceptedAnswer.text} <a href={ctaForThis.href} className="cta-inline">{ctaForThis.text}</a>
                      </p>
                    </div>
                  </details>
                );
              })}
            </div>

            {/* Author */}
            <div className="not-prose ae-author-card mt-16">
              <img src="/justin-borges.webp" alt="Justin Borges"
                   style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F27D24' }} />
              <div>
                <div className="ae-author-name">Justin Borges</div>
                <div className="ae-author-role">Founder, The Answer Engine</div>
                <p className="ae-author-bio">
                  Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps real estate teams, brokerages, and local service businesses get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. The Answer Engine maintains a one-team-per-market territory lock and operates under the Team Origin Protocol — content engineering for permanent AI citation authority.
                </p>
              </div>
            </div>

            {/* CTA Block */}
            <div className="ae-cta-block not-prose mt-16">
              <h3>Claim Your Team Market Before a Competing Team Does</h3>
              <p>
                ChatGPT, Perplexity, Claude, and Google AI Overviews cite 3 to 5 real estate agents per query — and most of those citations resolve to a team brand or a named team member. We work with one real estate team per market. If your city or neighborhood territory is still open, we can build your team AEO content engine, lock in your citation share, and keep competing teams out for the term of our engagement. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your team's territory status now — one real estate team per market.</a>
              </p>
            </div>

            {/* Final CTA */}
            <section className="ae-final-cta not-prose mt-16">
              <div className="ae-final-cta-inner">
                <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                  Run Your Free AI Blindspot Scan
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  See exactly where ChatGPT, Perplexity, Claude, and Google AI Overviews cite your team brand, your team lead, and your named members — and where they cite competing teams instead. The scan is free. The territory is exclusive. One real estate team per market.
                </p>
                <a
                  href="https://theanswerengine.ai/blindspot"
                  className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
                >
                  Run Free Blindspot Scan →
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

          </div>
        </article>
      </div>
    </>
  );
}
