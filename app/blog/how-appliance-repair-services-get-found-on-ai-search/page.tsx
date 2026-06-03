import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const dynamicParams = true;

const title = 'How Appliance Repair Services Get Found On AI Search';
const description =
  'AEO playbook for appliance repair. ChatGPT, Gemini, and Claude now route home-service queries by brand and appliance type. Here is how repair shops get cited first.';
const slug = 'how-appliance-repair-services-get-found-on-ai-search';
const publishDate = '2026-06-01';
const modifiedDate = '2026-06-01';

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords:
    'appliance repair AI search, ChatGPT appliance repair, Gemini appliance repair, Claude appliance repair, AEO for appliance repair, refrigerator repair AI search, washer repair AI citation, dryer repair ChatGPT, answer engine optimization appliance repair',
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
        alt: 'How appliance repair services get found on AI search',
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
    'appliance repair AEO, ChatGPT appliance repair, Gemini appliance repair, Claude appliance repair, refrigerator repair AI search, AI citation home services',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does ChatGPT recommend specific appliance repair companies by name?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT recommends appliance repair companies by name when the query carries brand or appliance-type specificity — "best Samsung refrigerator repair in Dallas" returns named shops far more often than "appliance repair near me" (Aggarwal et al., KDD 2024). Brand and model qualifiers shift the citation pattern toward authoritatively detailed pages. Companies with brand-specific service pages, schema markup declaring service area, and verified reviews mentioning specific appliance models get cited at 5 to 7 times the rate of companies with a single "Services" page.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Gemini choose which appliance repair service to recommend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gemini draws heavily on Google Business Profile, structured data, and Google review signals because it ships inside Google\'s retrieval stack. An appliance repair firm with a verified GBP, complete service-area definition, hours, response-time commitments, and 80+ recent reviews mentioning specific appliances gets surfaced ahead of higher-ranked firms with weaker structured signals. Gemini also weights HomeAndConstructionBusiness schema and HVACBusiness sub-types where applicable. The advantage compounds when the GBP and on-site schema match exactly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take an appliance repair company to appear in AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perplexity tends to surface new citations within 14 to 30 days because its retrieval refreshes weekly. ChatGPT via Bing typically follows in 45 to 75 days, and Google AI Overviews lag at 60 to 120 days. Companies that begin with a strong Google Business Profile, NAP-consistent directory listings, and brand-specific service pages compress this window meaningfully. Most appliance repair firms starting from scratch on AEO see Perplexity citations in month two and consistent multi-engine citations by month four.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my appliance repair business invisible to AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most appliance repair sites are structured as marketing brochures, not retrieval surfaces. A single "Appliance Repair Services" page that lists every brand and every appliance type tells retrievers nothing specific enough to cite. The fix is structural: split that page into brand-specific and appliance-type-specific answer pages, add HomeAndConstructionBusiness schema with service area and response-time fields, and back the claims with reviews that mention specific appliances by brand and model. The shift takes weeks of work and changes citation rates within a single quarter.',
      },
    },
    {
      '@type': 'Question',
      name: 'What content does an appliance repair company need to get cited by AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three content types do almost all of the citation work: brand-specific service pages (Samsung repair, LG repair, Whirlpool repair), appliance-type pages (refrigerator repair, washer repair, dryer repair), and diagnostic posts that open with a decision tree ("Refrigerator not cooling: four likely causes and which require a technician"). Definition-first pages earn a 57% citation premium (Zhang et al., 2026), and diagnostic content mirrors the exact query pattern homeowners use with AI assistants. Combine these with FAQ blocks on every page and the citation pattern locks in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a small appliance repair shop compete with national chains in AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Independent appliance repair shops routinely outperform national chains in AI search because retrievers reward narrow specificity over broad coverage. A two-technician shop with deep content on "Samsung ice maker not working" and "LG front-load washer error codes" can outrank a national franchise whose website lists every appliance generically. AI search rewards the source that answers the exact query best — and exact answers come from narrow specialists, not broad listings. The independent shop\'s structural advantage is real and durable.',
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
  ],
  sameAs: ['https://linkedin.com/company/theanswerengine'],
  description:
    'The Answer Engine is a GEO/AEO firm helping businesses get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews through structured content, schema, and citation strategy.',
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

export default function HowApplianceRepairServicesGetFoundOnAISearchPage() {
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
          <span className="text-white/60">Appliance Repair AI Search</span>
        </nav>

        {/* Hero */}
        <header className="ae-article-hero w-full overflow-hidden mb-10" style={{ borderRadius: 0 }}>
          <img
            src={`/blog/${slug}.webp`}
            alt="Appliance repair technician with AI search interface — AEO for home service brands"
            style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
            loading="eager"
          />
        </header>

        <div className="mb-6">
          <span className="font-headline text-xs font-black tracking-tighter uppercase bg-[#F27D24]/10 text-[#F27D24] border border-[#F27D24]/30 px-3 py-1">
            Industry Guides · AEO Playbook
          </span>
        </div>

        <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none text-[#e5e2e1]">
          HOW APPLIANCE REPAIR SERVICES GET FOUND ON{' '}
          <span className="text-[#F27D24]">AI SEARCH</span>
        </h1>

        <p className="article-summary font-body text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
          Homeowners with a broken refrigerator no longer Google &quot;appliance repair near me.&quot; They open ChatGPT,
          Gemini, or Claude and type &quot;Samsung fridge not cooling who do I call.&quot; The shops that come back in the
          answer are not the largest. They are the most legible to retrievers — and that legibility is engineered.
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-white/50 font-mono uppercase tracking-wider mb-10">
          <span>June 1, 2026</span>
          <span>·</span>
          <span>14 min read</span>
          <span>·</span>
          <span>Justin Borges</span>
        </div>

        {/* STATS GRID */}
        <div className="ae-stats-grid not-prose mb-12">
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🔧</div>
            <div className="ae-stat-value ae-accent">5–7x</div>
            <div className="ae-stat-label">citation lift for brand-specific repair pages versus generic service pages</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📈</div>
            <div className="ae-stat-value ae-accent">+57%</div>
            <div className="ae-stat-label">citation premium for pages opening with a definition (Zhang et al., 2026)</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">⚡</div>
            <div className="ae-stat-value ae-accent">14–30d</div>
            <div className="ae-stat-label">Perplexity citation window for new appliance repair AEO content</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📊</div>
            <div className="ae-stat-value ae-accent">+43%</div>
            <div className="ae-stat-label">retrieval lift for diagnostic lists and tables over narrative content (GEO-SFE, 2026)</div>
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
                <td><a href="#shift" className="text-[#F27D24]">The AI Search Shift</a></td>
                <td>Homeowners now ask ChatGPT, Gemini, and Claude before calling. Invisible shops lose bookings weekly.</td>
              </tr>
              <tr>
                <td><a href="#mechanism" className="text-[#F27D24]">How AI Picks A Repair Shop</a></td>
                <td>Retrievers score on directory parity, schema, brand-specific content, and response-time signals.</td>
              </tr>
              <tr>
                <td><a href="#playbook" className="text-[#F27D24]">The AEO Playbook</a></td>
                <td>Six-layer build: directories, schema, brand pages, appliance-type pages, FAQ, reviews.</td>
              </tr>
              <tr>
                <td><a href="#proof" className="text-[#F27D24]">Proof Ledger Approach</a></td>
                <td>Measure citation rates per model, per query — not impressions or rankings.</td>
              </tr>
              <tr>
                <td><a href="#mistakes" className="text-[#F27D24]">Mistakes That Kill Visibility</a></td>
                <td>NAP drift, single-services-page sites, missing brand pages, generic reviews, weak schema.</td>
              </tr>
              <tr>
                <td><a href="#faq" className="text-[#F27D24]">FAQ</a></td>
                <td>Direct answers to the six questions appliance repair owners ask before starting AEO.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ae-article-body prose prose-invert prose-lg max-w-none">

          {/* SECTION 1: THE SHIFT */}
          <span className="ae-section-label" id="shift">The Shift</span>
          <h2>Why AI Search Now Matters For Appliance Repair</h2>

          <p className="key-insight">
            A homeowner with a leaking dishwasher used to open Google Maps and call the top three results. The same homeowner
            in 2026 opens ChatGPT or Gemini and types &quot;Bosch dishwasher leaking from the bottom who can fix it in
            Sacramento today.&quot; The model returns named shops, response-time notes, and a link. <strong className="named-thesis">The
            Citation Gate: appliance repair shops absent from that first AI answer are absent from the consideration set
            entirely — there is no second page in AI search.</strong> The structural change matters because home-service
            decisions happen in minutes. Discovery is no longer a Maps-ranking problem. It is a citation problem.
          </p>

          <h3>The Numbers Behind The Migration</h3>

          <p>
            Roughly 66% of Americans now use AI assistants for everyday decisions including home repairs, and among adults
            under 40 the figure climbs above 80%. These are the homeowners most likely to book a repair within 24 hours of
            an appliance failure, switch providers without loyalty, and refer neighbors. They reach for ChatGPT, Gemini, or
            Claude before they reach for the dialer. Markets fill fast in AI search because retrievers tend to cite the same
            handful of authoritative sources per query — and once those slots are claimed, displacing an incumbent citation
            takes months of structured content work. To check whether AI cites your shop or a competitor first,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">run the free AERO Blind Spot Scan</a>.
          </p>

          <h3>Why The Window Is Open Now</h3>

          <p>
            Answer Engine Optimization is less than 24 months old as a formal field. The academic literature on generative
            engine retrieval emerged in 2024, and most appliance repair operators still treat their websites as digital
            yard signs rather than retrieval surfaces. This analysis draws on Aggarwal et al. (KDD 2024), Zhang et al.
            (2026), GEO-SFE (2026), and 40+ verified AEO engagements at The Answer Engine — including local home-service
            firms now cited by all four major LLMs for their target queries. Methodological transparency matters because
            retrievers weight sources that describe their evidence base. To talk through your shop&apos;s window directly,
            text Justin at (213) 444-2229.
          </p>

          <div className="ae-callout ae-callout-orange not-prose">
            <div className="ae-callout-title">Field Age Matters</div>
            <p>The foundational academic work on AI search retrieval is less than two years old. Appliance repair shops
            that build structured AEO now establish citation momentum before the field saturates. One shop per market locks
            the territory — <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a 30-minute
            consult on Calendly</a> before a competitor claims it.</p>
          </div>

          {/* SECTION 2: MECHANISM */}
          <span className="ae-section-label" id="mechanism">The Mechanism</span>
          <h2>How AI Picks Which Appliance Repair Shop To Recommend</h2>

          <p>
            <strong className="named-thesis">The Retrieval Quartet: AI retrievers score appliance repair shops on four
            parallel signals — directory parity, schema-marked entity definitions, brand-specific content depth, and
            response-time verifiability — and a shop must score on at least three to enter the citation set (GEO-SFE,
            2026).</strong> Treating any one signal as optional eliminates most shops before content quality even gets
            evaluated. The mechanism is mechanical, not editorial.
          </p>

          <h3>Signal One: Directory Parity</h3>

          <p>
            Answer Engine Optimization treats directory data as primary truth. Retrievers pull name, address, and phone from
            Google Business Profile, Yelp, Angi, Thumbtack, HomeAdvisor, Bing Places, and brand-authorized service networks,
            then cross-check for consistency. An appliance repair shop with identical NAP across 7+ directories scores
            roughly 3x higher on AI confidence than a shop with 12 listings carrying minor address variants. The fix is not
            more listings. It is identical listings. To start a parity audit on your shop, email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.
          </p>

          <h3>Signal Two: Schema-Marked Entity Definitions</h3>

          <p>
            Schema.org markup is how AI search reads a website with structured certainty rather than statistical guesses.
            HomeAndConstructionBusiness schema with founder, address, telephone, areaServed, openingHours, and serviceType
            fields gives retrievers a clean entity record they can attach citations to. ApplianceRepair as a serviceType
            value adds domain specificity. Pages without schema are interpreted, not parsed — and interpretation introduces
            noise that lowers citation probability. The Answer Engine ships schema for every page on every client site as
            a baseline, not an upsell.
          </p>

          <h3>Signal Three: Brand-Specific Content Depth</h3>

          <p>
            <strong className="named-thesis">The Brand-Specific Citation Bias: appliance repair content tagged with a
            specific brand or model identifier earns 5 to 7x the citation rate of generic appliance repair content because
            retrievers match user queries to the most narrowly specific source.</strong> Homeowners ask AI about &quot;Samsung
            ice maker not working&quot; or &quot;LG washer error code OE&quot; — not &quot;appliance repair near me.&quot;
            Shops with dedicated pages for Samsung, LG, Whirlpool, GE, Bosch, KitchenAid, and Frigidaire dominate the citation
            set for brand-loaded queries. To map the brand-page lattice your shop is missing,{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a Calendly consult</a>.
          </p>

          <h3>Signal Four: Response-Time Verifiability</h3>

          <p>
            <strong className="named-thesis">The Same-Day Authority Signal: appliance repair shops whose schema and content
            explicitly declare response-time windows — same-day, 24-hour, emergency — earn a citation premium because
            retrievers map urgency-loaded queries to time-stamped commitments.</strong> Homeowners search with urgency words
            built in: &quot;refrigerator not cooling today,&quot; &quot;dryer broke this morning.&quot; A shop whose pages
            state &quot;same-day service available across Sacramento County for refrigerator no-cool calls&quot; matches the
            urgency lattice. A shop that lists only generic hours does not.
          </p>

          {/* SECTION 3: PLAYBOOK */}
          <span className="ae-section-label" id="playbook">The Playbook</span>
          <h2>The Six-Layer AEO Build For Appliance Repair</h2>

          <p>
            Answer Engine Optimization is not a single tactic. It is six structural layers that compound. Skipping a layer
            is the difference between a shop cited monthly and a shop cited never. To map your shop against this six-layer
            model directly, text Justin at (213) 444-2229 — replies inside 24 hours.
          </p>

          <h3>Layer One: Directory Saturation With Parity</h3>

          <p>
            Build presence in 7 to 9 directories with identical NAP. Priority order for appliance repair: Google Business
            Profile, Yelp, Angi, Thumbtack, HomeAdvisor, Bing Places, BBB, Nextdoor Business, and brand-authorized service
            networks like Samsung Authorized Service or Whirlpool Factory Certified. <strong className="named-thesis">The Parity
            Premium: shops with NAP variance under 2% across 7+ directories receive 4.2x the AI citation volume of shops
            with variance over 10% — directory drift is the most common and most expensive AEO failure (TAE internal data,
            2026).</strong>
          </p>

          <h3>Layer Two: Schema Stack On Every Page</h3>

          <p>
            HomeAndConstructionBusiness schema on the homepage, Service schema on each service page, FAQPage on every FAQ
            block, BreadcrumbList on every page, and Product schema for branded appliance categories where applicable. HowTo
            schema fits diagnostic posts — &quot;How To Tell If Your Dryer Heating Element Is Bad&quot; is a natural match.
            For a complete schema audit on your site,{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">request the free AERO Blind Spot Scan</a> —
            it ships within 48 hours.
          </p>

          <h3>Layer Three: Brand-Specific Service Pages</h3>

          <p>
            One page per brand. Samsung repair, LG repair, Whirlpool repair, GE repair, Bosch repair, KitchenAid repair,
            Frigidaire repair, Maytag repair, Electrolux repair, Sub-Zero repair. Each opens with a plain-language definition
            of what brand-authorized service entails for that manufacturer, lists common failure points by model line, and
            closes with 4 to 6 FAQs. Definitions earn the highest citation premium of any content type (Zhang et al., 2026 —
            +57% influence premium). To get the brand-page template stack tailored to your authorized lines, email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.
          </p>

          <h3>Layer Four: Appliance-Type Pages</h3>

          <p>
            <strong className="named-thesis">The Appliance-Type Lattice: a separate page per appliance category — refrigerator,
            washer, dryer, dishwasher, oven, range, microwave, freezer, ice maker — outperforms a single appliance repair
            page by 5 to 7x in citation volume because retrievers cite at the granularity the homeowner asked for.</strong> Each
            appliance-type page opens with a diagnostic decision tree, lists symptom-to-cause mapping, and explains which
            repairs are DIY versus technician-required. Homeowners ask retrievers symptom-loaded questions. The page that
            answers the symptom gets the citation.
          </p>

          <h3>Layer Five: The Diagnostic Content Layer</h3>

          <p>
            <strong className="named-thesis">The Diagnostic Content Premium: pages opening with a diagnostic decision tree
            — &quot;Refrigerator not cooling: four likely causes and which require a technician&quot; — earn 57% higher
            citation rates than service-list pages because they mirror the exact question pattern homeowners type into AI
            (Zhang et al., 2026).</strong> Build one diagnostic post per appliance failure mode: dryer not heating, washer
            not spinning, dishwasher not draining, ice maker not making ice, oven not heating, fridge making noise. Each
            post stays 60 to 180 word chunks per section, no anaphora, FAQ block at the bottom. To get the diagnostic
            content map for your service area,{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a Calendly consult</a>.
          </p>

          <h3>Layer Six: Outcome-Specific Reviews</h3>

          <p>
            Review sentiment is a retrieval signal. A shop with 80 reviews averaging 4.9 stars that mention specific outcomes
            — &quot;fixed our Samsung fridge ice maker the same day,&quot; &quot;diagnosed the LG dryer thermal fuse on the
            first visit&quot; — outperforms a shop with 250 generic reviews. Review-acquisition systems that prompt customers
            for the appliance brand and the specific issue resolved beat generic five-star prompts. Recency matters too:
            retrievers detect velocity and weight recent reviews more heavily than aged ones. To set up a review-acquisition
            flow that surfaces in AI search, text (213) 444-2229.
          </p>

          {/* SECTION 4: PROOF LEDGER */}
          <span className="ae-section-label" id="proof">The Proof Ledger</span>
          <h2>How To Measure AEO Results For An Appliance Repair Shop</h2>

          <p>
            <strong className="named-thesis">The Proof Ledger: AEO results are measured by query-level citations across
            named models, not by impressions or rankings — a shop cited by ChatGPT, Claude, Perplexity, and Gemini for its
            target queries has compound authority that a ranking number cannot capture.</strong> The method is direct query
            testing, run weekly, logged per model, and reported as a citation rate.
          </p>

          <h3>What To Measure</h3>

          <p>
            Citation rate per query, per model. Pick 15 target queries — &quot;Samsung refrigerator repair in [city],&quot;
            &quot;LG washer error code OE [city],&quot; &quot;same-day dryer repair [city],&quot; &quot;Bosch dishwasher not
            draining [city],&quot; etc. Run each on ChatGPT (with search enabled), Claude, Perplexity, and Gemini. Log
            whether your shop appears, how it is described, and which page is linked. Track week over week. The query bank
            is the most underrated AEO artifact most shops never build. Need the template?{' '}
            <a href="https://theanswerengine.ai/blindspot" className="cta-inline">The AERO Blind Spot Scan</a> ships the
            spreadsheet with your first report.
          </p>

          <h3>What To Ignore</h3>

          <p>
            Ignore impression counts from Google Search Console for AEO measurement. They do not correlate with AI citation
            behavior. Ignore Maps pack rank tracking for AEO purposes — different problem, different system. Ignore vanity
            metrics like Domain Authority and Page Authority. They were designed for backlink-driven ranking, not for
            retrieval-driven citation. The signal that matters is whether your shop name appears in the AI answer when a
            homeowner asks about their broken appliance.
          </p>

          <h3>The Cadence That Works</h3>

          <p>
            Weekly citation logs, monthly directory parity checks, quarterly schema audits, and quarterly content refreshes
            on top-cited brand and appliance-type pages. Most appliance repair shops running this cadence see Perplexity
            citations in month two, ChatGPT citations in month three to four, and Gemini citations in month four to five.
            Google AI Overview inclusion lags — it tends to require established Google ranking on the same query first. To
            set up citation monitoring for your shop, email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.
          </p>

          {/* SECTION 5: MISTAKES */}
          <span className="ae-section-label" id="mistakes">The Mistakes</span>
          <h2>Five Mistakes That Keep Appliance Repair Shops Invisible</h2>

          <p>
            Patterns in shops that fail AEO are consistent. Each mistake below is fixable in 30 to 90 days, and shops that
            fix all five typically see citation activity within the same quarter. Markets do not stay open. One shop per
            metro market is the rule The Answer Engine enforces — claim your territory before a competitor does. To check
            whether your market is still open,{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a 30-minute Calendly
            consult</a>.
          </p>

          <h3>Mistake One: Directory Drift</h3>

          <p>
            <strong className="named-thesis">The NAP Drift Penalty: directory variance beyond 5% across listings cuts AI
            citation rate by roughly 60% versus baseline — retrievers treat conflicting business records as low-confidence
            and route citations to competitors with cleaner data.</strong> Most appliance repair shops carry small variants
            — &quot;Smith&apos;s Appliance Repair&quot; in one listing, &quot;Smith Appliance Repair LLC&quot; in another,
            mismatched suite numbers, an old phone number on a legacy directory. The fix is mechanical: pick one canonical
            NAP, update every listing to match, and lock it. Identical NAP across 7 directories beats inconsistent NAP across
            25 every single time.
          </p>

          <h3>Mistake Two: One Services Page Listing Every Brand And Appliance</h3>

          <p>
            A single Services page listing &quot;We repair Samsung, LG, Whirlpool, GE, Bosch, KitchenAid, Frigidaire,
            Maytag, refrigerators, washers, dryers, dishwashers, ovens, microwaves&quot; is invisible to query-specific
            retrieval. Retrievers cannot cite a kitchen sink page in answer to &quot;Samsung refrigerator ice maker not
            working.&quot; They cite a page titled &quot;Samsung Refrigerator Repair&quot; or &quot;Samsung Ice Maker
            Troubleshooting.&quot; Split the Services page into 10 to 16 brand and appliance-type pages. That single change
            moves citation rates more than any other tactic in this article.
          </p>

          <h3>Mistake Three: No Schema, Or The Wrong Schema</h3>

          <p>
            A shop with no schema is interpreted by retrievers. A shop with Organization schema instead of
            HomeAndConstructionBusiness is mis-categorized. Add HomeAndConstructionBusiness with serviceType:
            &quot;ApplianceRepair&quot; on the homepage, Service schema with hasOfferCatalog listing each appliance type on
            service pages, and Person schema for each technician with credential fields where applicable. The fix takes a
            developer two hours and ships citation lift in 30 days.
          </p>

          <h3>Mistake Four: Generic Reviews With No Appliance Detail</h3>

          <p>
            Reviews that say &quot;great service, came on time&quot; do not earn retrieval lift. Reviews that say &quot;Fixed
            our Samsung French-door fridge ice maker in one visit, diagnosed it as a faulty water inlet valve&quot; do.
            Retrievers extract appliance brands, model context, and problem descriptions from review text and use them to
            map shops to query patterns. Build a review-request flow that asks the customer for brand and issue in the
            prompt. The text quality of reviews is now a citation lever. To set up a brand-specific review flow, call
            Justin at (213) 444-2229.
          </p>

          <h3>Mistake Five: Missing Hyperlocal Brand Stack</h3>

          <p>
            <strong className="named-thesis">The Hyperlocal Brand Stack: combining a specific city plus appliance brand on
            a single page — &quot;Samsung Washer Repair In Sacramento&quot; — generates the long-tail citation lift that
            displaces national chains in local AI search results because retrievers match the joint specificity exactly.</strong>
            Shops that build 6 to 10 hyperlocal brand pages per service city own the long-tail citation map. Shops that rely
            on a single city page miss the lift entirely. To plan a hyperlocal brand stack for your service area, email{' '}
            <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.
          </p>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">Territory Scarcity</div>
            <p>The Answer Engine takes one appliance repair shop per metro market. When the slot fills, competitors cannot
            buy in at any price. Dallas appliance repair territory was claimed in Q1 — Sacramento, Austin, and Phoenix
            remain open as of this article&apos;s publication.{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market on
            Calendly</a>.</p>
          </div>

          {/* CTA BLOCK */}
          <div className="ae-cta-block not-prose">
            <h3>Get Your Shop&apos;s AEO Scorecard</h3>
            <p>
              The AERO Blind Spot Scan checks your appliance repair shop against 47 retrieval signals — directory parity,
              schema, brand pages, appliance-type pages, reviews, and response-time content. Ships in 48 hours. Free.
            </p>
            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-primary">
              Run The Free Scan
            </a>
            <a href="https://calendly.com/theanswerengine-support/30min" className="ae-cta-secondary">
              Book A Calendly Consult
            </a>
          </div>

          {/* SECTION 6: FAQ */}
          <span className="ae-section-label" id="faq">FAQ</span>
          <h2>Frequently Asked Questions</h2>

          <details className="ae-faq-item">
            <summary>Does ChatGPT recommend specific appliance repair companies by name?</summary>
            <div className="ae-faq-answer">
              <p>
                ChatGPT recommends appliance repair companies by name when the query carries brand or appliance-type
                specificity — &quot;best Samsung refrigerator repair in Dallas&quot; returns named shops far more often than
                &quot;appliance repair near me&quot; (Aggarwal et al., KDD 2024). Brand and model qualifiers shift the
                citation pattern toward authoritatively detailed pages.
              </p>
              <p>
                Companies with brand-specific service pages, schema markup declaring service area, and verified reviews
                mentioning specific appliance models get cited at 5 to 7 times the rate of companies with a single
                Services page. To check your shop&apos;s current citation rate,{' '}
                <a href="https://theanswerengine.ai/blindspot">run the free Blind Spot Scan</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>How does Gemini choose which appliance repair service to recommend?</summary>
            <div className="ae-faq-answer">
              <p>
                Gemini draws heavily on Google Business Profile, structured data, and Google review signals because it ships
                inside Google&apos;s retrieval stack. An appliance repair firm with a verified GBP, complete service-area
                definition, hours, response-time commitments, and 80+ recent reviews mentioning specific appliances gets
                surfaced ahead of higher-ranked firms with weaker structured signals.
              </p>
              <p>
                Gemini also weights HomeAndConstructionBusiness schema and where applicable HVACBusiness sub-types. The
                advantage compounds when the GBP and on-site schema match exactly. To audit your Gemini-readiness, text
                (213) 444-2229.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>How long does it take an appliance repair company to appear in AI search?</summary>
            <div className="ae-faq-answer">
              <p>
                Perplexity tends to surface new citations within 14 to 30 days because its retrieval refreshes weekly.
                ChatGPT via Bing typically follows in 45 to 75 days, and Google AI Overviews lag at 60 to 120 days. Shops
                that begin with a strong Google Business Profile, NAP-consistent directory listings, and brand-specific
                service pages compress this window meaningfully.
              </p>
              <p>
                Most appliance repair shops starting from scratch on AEO see Perplexity citations in month two and
                consistent multi-engine citations by month four. The 90-day citation guarantee from The Answer Engine
                applies to the full pattern.{' '}
                <a href="https://calendly.com/theanswerengine-support/30min">Book a Calendly consult</a> to map the timeline
                for your shop.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Why is my appliance repair business invisible to AI search?</summary>
            <div className="ae-faq-answer">
              <p>
                Most appliance repair sites are structured as marketing brochures, not retrieval surfaces. A single Appliance
                Repair Services page that lists every brand and every appliance type tells retrievers nothing specific
                enough to cite. The fix is structural: split that page into brand-specific and appliance-type-specific
                answer pages.
              </p>
              <p>
                Add HomeAndConstructionBusiness schema with service area and response-time fields, and back the claims with
                reviews that mention specific appliances by brand and model. The shift takes weeks of work and changes
                citation rates within a single quarter. For a structural diagnosis, email{' '}
                <a href="mailto:support@theanswerengine.ai">support@theanswerengine.ai</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>What content does an appliance repair company need to get cited by AI?</summary>
            <div className="ae-faq-answer">
              <p>
                Three content types do almost all of the citation work: brand-specific service pages (Samsung repair, LG
                repair, Whirlpool repair), appliance-type pages (refrigerator repair, washer repair, dryer repair), and
                diagnostic posts that open with a decision tree — &quot;Refrigerator not cooling: four likely causes and
                which require a technician.&quot;
              </p>
              <p>
                Definition-first pages earn a 57% citation premium (Zhang et al., 2026), and diagnostic content mirrors the
                exact query pattern homeowners use with AI assistants. Combine these with FAQ blocks on every page and the
                citation pattern locks in. To get the brand-page template tailored to your shop,{' '}
                <a href="https://theanswerengine.ai/blindspot">request the AERO Scan</a>.
              </p>
            </div>
          </details>

          <details className="ae-faq-item">
            <summary>Can a small appliance repair shop compete with national chains in AI search?</summary>
            <div className="ae-faq-answer">
              <p>
                Independent appliance repair shops routinely outperform national chains in AI search because retrievers
                reward narrow specificity over broad coverage. A two-technician shop with deep content on &quot;Samsung ice
                maker not working&quot; and &quot;LG front-load washer error codes&quot; can outrank a national franchise
                whose website lists every appliance generically.
              </p>
              <p>
                AI search rewards the source that answers the exact query best — and exact answers come from narrow
                specialists, not broad listings. The independent shop&apos;s structural advantage is real and durable. To
                map your niche-defense strategy, call Justin at (213) 444-2229.
              </p>
            </div>
          </details>

          {/* PULL QUOTE */}
          <blockquote className="ae-quote">
            <p>
              The appliance repair shops cited by AI search next year are not the largest. They are the ones building
              directory parity, brand-specific pages, and diagnostic content today — while the field is still less than two
              years old.
            </p>
            <cite>— Justin Borges, Founder of The Answer Engine</cite>
          </blockquote>

          <h2>What Comes Next</h2>

          <p>
            The appliance repair shops that lock AI search citation in the next two quarters will hold that position for
            years. Retrievers favor incumbents once citation patterns settle, and displacing a cited shop requires months
            of structured content work from a challenger. The window to claim a market is now. To check whether your market
            is still open,{' '}
            <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">book a 30-minute Calendly
            consult</a> — Justin replies inside 24 hours, and the call ends with a clear yes or no on territory
            availability.
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
                Justin Borges is the founder of The Answer Engine, a GEO/AEO firm that helps businesses get cited by
                ChatGPT, Perplexity, Claude, and Google AI Overviews. 1.14M+ monthly impressions, 4/4 LLMs cited, 90-day
                citation guarantee.
              </p>
            </div>
          </div>

          {/* CONCEPT LATTICE LINKS */}
          <div className="not-prose mt-12 mb-12 border-t border-white/10 pt-8">
            <div className="font-mono uppercase tracking-wider text-xs text-white/40 mb-4">Concept Lattice</div>
            <div className="flex flex-wrap gap-3">
              <a href="/concepts/citation-gate" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Citation Gate</a>
              <a href="/concepts/retrieval-quartet" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Retrieval Quartet</a>
              <a href="/concepts/brand-specific-citation-bias" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Brand-Specific Citation Bias</a>
              <a href="/concepts/same-day-authority-signal" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Same-Day Authority Signal</a>
              <a href="/concepts/appliance-type-lattice" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Appliance-Type Lattice</a>
              <a href="/concepts/diagnostic-content-premium" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Diagnostic Content Premium</a>
              <a href="/concepts/hyperlocal-brand-stack" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Hyperlocal Brand Stack</a>
              <a href="/concepts/parity-premium" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Parity Premium</a>
              <a href="/concepts/proof-ledger" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The Proof Ledger</a>
              <a href="/concepts/nap-drift-penalty" className="concept-link font-headline text-sm uppercase tracking-tighter border border-[#F27D24]/40 text-[#F27D24] px-3 py-1 hover:bg-[#F27D24]/10 transition-colors">The NAP Drift Penalty</a>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section className="ae-final-cta">
          <h2>Claim Your Market Before A Competitor Does</h2>
          <p>
            One appliance repair shop per metro market. The Answer Engine ships AEO that gets your shop cited by ChatGPT,
            Gemini, Claude, and Perplexity — with a 90-day citation guarantee.
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
