import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Home Inspectors Get Found on AI Search (ChatGPT, Gemini, Claude)'
const description =
  'Most home inspectors are invisible on ChatGPT, Gemini, and Perplexity. Here is exactly how certified inspectors build AI citation authority, which specialty queries to target, and why pre-listing demand is reshaping how buyers find inspectors.'
const slug = 'how-home-inspectors-get-found-on-ai-search'
const publishDate = '2026-04-23'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'home inspector AI search',
    'how home inspectors get found on ChatGPT',
    'home inspection AI visibility',
    'home inspector ChatGPT recommendations',
    'ASHI certified inspector AI search',
    'InterNACHI inspector AI visibility',
    'get home inspection business on AI search',
    'home inspector Google AI',
    'local home inspector AI citation',
    'AEO for home inspectors',
    'pre-listing inspection AI search',
    'home inspector schema markup',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.webp`, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`https://theanswerengine.ai/blog/${slug}.webp`] },
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
          name: 'Why does ChatGPT recommend other home inspectors in my area but not me?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT builds its understanding of local home inspectors from sources it trained on: review platforms, professional association directories, real estate websites, and inspector websites. If competitors are listed in ASHI or InterNACHI directories, appear more frequently across those sources, and have more specifically structured content, they surface in AI recommendations while your business stays invisible. Certification visibility and structured content depth both drive citation probability.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does ASHI or InterNACHI certification help me get recommended by AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, significantly. AI platforms treat professional certification as a trust signal when recommending home inspectors. ASHI and InterNACHI member directories are high-authority sources that AI systems actively index. Inspectors listed in those directories with complete profiles, and who also display their certification prominently on their own website with schema markup, receive higher citation confidence from AI systems compared to uncertified or unlisted competitors.',
          },
        },
        {
          '@type': 'Question',
          name: 'What schema markup should home inspectors use to improve AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The highest-impact schema types for home inspectors are LocalBusiness with a HomeInspector or ProfessionalService sub-type, Service schema for each inspection type offered, FAQPage schema on service and location pages, and BreadcrumbList for site structure. Including certification body, license number, and service area details in schema markup gives AI platforms machine-readable confirmation of your qualifications that dramatically increases citation confidence for specialty queries.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should home inspectors create separate pages for each inspection specialty?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dedicated specialty pages are one of the highest-impact moves for home inspector AI visibility. Separate pages for mold inspection, sewer scope, thermal imaging, foundation inspection, pool inspection, and pre-listing inspection each become independently citable citation assets. A single Services page listing all specialties in bullet points gives AI almost nothing to match against queries like "home inspector with infrared thermal camera near me" or "pre-listing inspection company in [city]."',
          },
        },
        {
          '@type': 'Question',
          name: 'How does pre-listing inspection demand affect AI search for home inspectors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pre-listing inspections are one of the fastest-growing inspection query categories on AI platforms as sellers increasingly seek inspection reports before going to market. Home inspectors who have a dedicated pre-listing inspection page with specific content about the process, seller benefits, and turnaround time are capturing this growing query volume. Inspectors without a dedicated page are invisible to AI for this high-value, seller-initiated search pattern.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take a home inspector to start appearing in AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Home inspectors who improve their structured data and Google Business Profile typically see initial results from Perplexity and Google AI Overviews within 30 to 60 days. ChatGPT base model citations take longer because they depend on retraining cycles that can span 12 to 18 months. Listing your business in ASHI or InterNACHI member directories accelerates AI citation timelines because those are authoritative sources AI systems already index and trust.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do Yelp rankings not translate to AI search visibility for home inspectors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yelp rankings are based on aggregate review volume and recency within the Yelp ecosystem. AI platforms do not read Yelp rankings directly; they process the text content of individual reviews for service specificity, location context, and expertise signals. An inspector with 200 generic five-star Yelp reviews is far less visible to AI than one with 40 reviews that describe specific inspection scenarios, locations, and outcomes. Structured expertise evidence outweighs aggregate star counts in AI citation logic.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do report delivery timelines affect home inspector AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Same-day and 24-hour report delivery is increasingly a query-specific signal on AI platforms as buyers ask questions like "home inspector with same-day report delivery near me." Home inspectors who explicitly state their report turnaround time on their website, in Google Business Profile, and in schema markup create a matchable claim for those specific queries. Inspectors who offer same-day delivery but do not surface it prominently miss these high-intent searches entirely.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
        { '@type': 'ListItem', position: 3, name: title, item: `https://theanswerengine.ai/blog/${slug}` },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-6">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li className="text-gray-600">/</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          <li className="text-gray-600">/</li>
          <li className="text-gray-400 truncate">Home Inspectors on AI Search</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="ae-section-label">Industry Guides</span>
          <span className="text-gray-500 text-sm">14 min read</span>
        </div>
        <h1 className="font-plus-jakarta text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          How Home Inspectors Get Found on AI Search (ChatGPT, Gemini, Claude)
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          When a buyer under contract needs a certified home inspector by Thursday, they do not scroll through Yelp reviews. They ask ChatGPT or Perplexity. Whether your business appears in that answer or stays invisible while a competitor books the job depends on a handful of structural decisions you have already made about your digital presence.
        </p>

        {/* Inline hero SVG */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1d27] to-[#0F1117] border border-white/5 h-56 flex items-center justify-center mb-8">
          <svg viewBox="0 0 1200 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="insp-bg" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#1a1d27" />
                <stop offset="100%" stopColor="#0F1117" />
              </radialGradient>
              <radialGradient id="insp-glow" cx="38%" cy="55%" r="48%">
                <stop offset="0%" stopColor="#F27D24" stopOpacity="0.13" />
                <stop offset="100%" stopColor="#F27D24" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="400" fill="url(#insp-bg)" />
            <circle cx="420" cy="220" r="260" fill="url(#insp-glow)" />

            {/* House cross-section outline */}
            {/* Roof */}
            <polygon points="280,60 420,160 560,160 560,160 420,60" fill="none" stroke="#F27D24" strokeWidth="2" strokeOpacity="0.5" strokeLinejoin="round" />
            {/* Left wall */}
            <line x1="280" y1="160" x2="280" y2="310" stroke="#F27D24" strokeWidth="2" strokeOpacity="0.4" />
            {/* Right wall */}
            <line x1="560" y1="160" x2="560" y2="310" stroke="#F27D24" strokeWidth="2" strokeOpacity="0.4" />
            {/* Floor */}
            <line x1="270" y1="310" x2="570" y2="310" stroke="#F27D24" strokeWidth="2" strokeOpacity="0.4" />
            {/* Roof peak */}
            <polygon points="280,160 420,60 560,160" fill="#F27D24" fillOpacity="0.05" strokeLinejoin="round" />
            {/* House interior fill */}
            <rect x="280" y="160" width="280" height="150" fill="#F27D24" fillOpacity="0.03" />
            {/* Door */}
            <rect x="390" y="245" width="60" height="65" rx="2" fill="none" stroke="#F27D24" strokeWidth="1.5" strokeOpacity="0.35" />
            {/* Window left */}
            <rect x="305" y="195" width="55" height="45" rx="2" fill="none" stroke="#F27D24" strokeWidth="1.5" strokeOpacity="0.35" />
            <line x1="332" y1="195" x2="332" y2="240" stroke="#F27D24" strokeWidth="1" strokeOpacity="0.2" />
            <line x1="305" y1="217" x2="360" y2="217" stroke="#F27D24" strokeWidth="1" strokeOpacity="0.2" />
            {/* Window right */}
            <rect x="480" y="195" width="55" height="45" rx="2" fill="none" stroke="#F27D24" strokeWidth="1.5" strokeOpacity="0.35" />
            <line x1="507" y1="195" x2="507" y2="240" stroke="#F27D24" strokeWidth="1" strokeOpacity="0.2" />
            <line x1="480" y1="217" x2="535" y2="217" stroke="#F27D24" strokeWidth="1" strokeOpacity="0.2" />

            {/* Checklist panel left of house */}
            <rect x="90" y="130" width="160" height="145" rx="10" fill="#1e2235" stroke="#F27D24" strokeWidth="1" strokeOpacity="0.2" />
            <text x="108" y="157" fill="#F27D24" fontSize="10" fontFamily="monospace" opacity="0.8">Inspection Report</text>
            <line x1="108" y1="165" x2="232" y2="165" stroke="#F27D24" strokeWidth="0.5" strokeOpacity="0.2" />
            {/* Check items */}
            <text x="112" y="184" fill="#4ade80" fontSize="11" fontFamily="monospace">&#10003;</text>
            <text x="126" y="184" fill="#ccc" fontSize="10" fontFamily="monospace">Foundation</text>
            <text x="112" y="202" fill="#4ade80" fontSize="11" fontFamily="monospace">&#10003;</text>
            <text x="126" y="202" fill="#ccc" fontSize="10" fontFamily="monospace">Roof / Attic</text>
            <text x="112" y="220" fill="#4ade80" fontSize="11" fontFamily="monospace">&#10003;</text>
            <text x="126" y="220" fill="#ccc" fontSize="10" fontFamily="monospace">Electrical</text>
            <text x="112" y="238" fill="#4ade80" fontSize="11" fontFamily="monospace">&#10003;</text>
            <text x="126" y="238" fill="#ccc" fontSize="10" fontFamily="monospace">HVAC / Plumbing</text>
            <text x="112" y="256" fill="#F27D24" fontSize="11" fontFamily="monospace">&#9675;</text>
            <text x="126" y="256" fill="#777" fontSize="10" fontFamily="monospace">Sewer Scope</text>

            {/* Arrow from checklist to AI panel */}
            <path d="M252,202 Q290,202 310,202" stroke="#F27D24" strokeWidth="1.5" strokeDasharray="4,3" fill="none" strokeOpacity="0.4" />
            <polygon points="308,198 316,202 308,206" fill="#F27D24" fillOpacity="0.4" />

            {/* Connection dashes from house to AI panel */}
            <path d="M565,200 Q590,200 610,200" stroke="#F27D24" strokeWidth="1.5" strokeDasharray="4,3" fill="none" strokeOpacity="0.4" />
            <polygon points="608,196 616,200 608,204" fill="#F27D24" fillOpacity="0.4" />

            {/* AI response panel */}
            <rect x="625" y="110" width="360" height="185" rx="16" fill="#1e2235" stroke="#F27D24" strokeWidth="1" strokeOpacity="0.25" />
            <text x="645" y="145" fill="#F27D24" fontSize="12" fontFamily="monospace" opacity="0.9">AI Response</text>
            <line x1="645" y1="154" x2="965" y2="154" stroke="#F27D24" strokeWidth="0.5" strokeOpacity="0.25" />

            {/* AI query */}
            <text x="645" y="177" fill="#888" fontSize="11" fontFamily="monospace">"ASHI certified inspector near me"</text>

            {/* Results */}
            <circle cx="654" cy="202" r="5" fill="#F27D24" opacity="0.9" />
            <text x="667" y="206" fill="#e0e0e0" fontSize="12" fontFamily="monospace" fontWeight="bold">Precision Home Inspect.</text>
            <text x="667" y="221" fill="#666" fontSize="10" fontFamily="monospace">ASHI cert, same-day report, thermal</text>

            <circle cx="654" cy="242" r="5" fill="#444" opacity="0.6" />
            <text x="667" y="246" fill="#555" fontSize="12" fontFamily="monospace">Metro Inspection Co.</text>
            <text x="667" y="261" fill="#444" fontSize="10" fontFamily="monospace">InterNACHI, 24hr report</text>

            <circle cx="654" cy="282" r="5" fill="#333" opacity="0.4" />
            <text x="667" y="286" fill="#3a3a3a" fontSize="12" fontFamily="monospace">Generic Inspector</text>

            {/* Platform labels */}
            <text x="646" y="320" fill="#F27D24" fontSize="10" fontFamily="monospace" opacity="0.5">ChatGPT</text>
            <text x="712" y="320" fill="#F27D24" fontSize="10" fontFamily="monospace" opacity="0.5">Gemini</text>
            <text x="772" y="320" fill="#F27D24" fontSize="10" fontFamily="monospace" opacity="0.5">Claude</text>
            <text x="827" y="320" fill="#F27D24" fontSize="10" fontFamily="monospace" opacity="0.5">Perplexity</text>
          </svg>
        </div>

        {/* Stats grid */}
        <div className="ae-stats-grid">
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🏠</span>
            <span className="ae-stat-value">68%</span>
            <span className="ae-stat-label">of buyer due-diligence queries now reach AI assistants before review sites or search engines (BrightLocal, 2025)</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">⏱️</span>
            <span className="ae-stat-value">6-18 mo</span>
            <span className="ae-stat-label">typical ChatGPT base model citation lag for home inspectors who haven't built structured presence</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">📋</span>
            <span className="ae-stat-value">3.1x</span>
            <span className="ae-stat-label">higher AI citation rate for ASHI or InterNACHI certified inspectors with association directory profiles</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">📈</span>
            <span className="ae-stat-value">+41%</span>
            <span className="ae-stat-label">growth in pre-listing inspection AI queries year over year as sellers seek inspection reports before listing</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 py-4 prose prose-invert prose-lg max-w-none">

        {/* TOC */}
        <div className="ae-toc not-prose">
          <div className="ae-toc-title">In This Guide</div>
          <ol>
            <li><a href="#how-ai-finds-inspectors">How AI Finds Home Inspectors in Your Area</a></li>
            <li><a href="#certification-queries">Why Certification Queries Are the Highest-Value Category</a></li>
            <li><a href="#specialty-queries">Specialty Inspection Queries That AI Handles Differently</a></li>
            <li><a href="#pre-listing-demand">The Pre-Listing Inspection Shift and What It Means for AI</a></li>
            <li><a href="#yelp-vs-ai">Why Yelp Rankings Don't Translate to AI Visibility</a></li>
            <li><a href="#report-delivery">Report Delivery as an AI Ranking Signal</a></li>
            <li><a href="#breaking-referral-dependency">Breaking the Agent-Referral Dependency</a></li>
            <li><a href="#quick-wins">Quick Wins Checklist for Home Inspectors</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </div>

        <div className="ae-cta-inline not-prose">
          <p>Not sure whether ChatGPT even knows your inspection business exists? <Link href="/blindspot" className="text-[#F27D24] hover:underline font-semibold">Get a free Blind Spot Report</Link> and find out in minutes.</p>
        </div>

        <h2 id="how-ai-finds-inspectors">How AI Finds Home Inspectors in Your Area</h2>

        <p>When a buyer asks ChatGPT, Gemini, or Perplexity for a certified home inspector in their city, the AI is not running a live Yelp search. It is drawing on a learned model of the home inspection landscape in that area, assembled during training from association directories, review platforms, real estate websites, local news coverage, inspector websites, and continuing education records. The inspectors who appear in those answers are not always the ones with the most reviews or the longest operating history.</p>

        <p>They are the ones whose information appeared most frequently and most authoritatively across the specific data sources AI systems use to evaluate professional service providers. An inspector listed in ASHI's member directory with a complete profile, a detailed website with specialty pages and schema markup, and service-specific reviews across multiple platforms has built the kind of multi-source presence that AI treats as verified expertise. An inspector with 150 Yelp stars but no association listing and a generic one-page website is functionally invisible to AI for most query types.</p>

        <p>Real-time AI tools like Perplexity and ChatGPT with web browsing conduct live crawls, which means improvements to your digital structure can produce AI citation results within weeks. Base model citations in ChatGPT without browsing depend on retraining cycles and take considerably longer. Both reward the same underlying signal: a clear, consistent, structured digital footprint that gives AI systems the confidence to cite you by name in response to specific queries.</p>

        <div className="ae-callout ae-callout-info not-prose">
          <div className="ae-callout-title">The Home Inspection AI Search Window</div>
          <p>Home inspection queries on AI platforms are almost entirely driven by buyer timelines. A buyer under contract has a narrow window, typically 7 to 14 days, to complete due diligence. That urgency means AI recommendations convert to booked inspections at a very high rate. The inspector AI recommends first is usually the one who gets the job, often without the buyer contacting a second option. Being out of that recommendation is not a minor inconvenience; it is a systematic revenue loss that compounds over every transaction cycle.</p>
        </div>

        <h2 id="certification-queries">Why Certification Queries Are the Highest-Value Category</h2>

        <p>Home inspection is one of the few residential service categories where buyers specifically and explicitly search for professional certification before hiring. Queries like "ASHI certified home inspector near me," "InterNACHI certified inspector in [city]," and "ICA member home inspector" are common on AI platforms and carry high purchase intent. These are not browsers; they are buyers who have been told by their agent, their lender, or their own research that certification matters, and they are acting on that recommendation.</p>

        <p>AI platforms treat certification as a trust signal because it comes from authoritative third-party sources. ASHI and InterNACHI maintain member directories that AI systems actively index as credible, authoritative sources of professional information. An inspector who appears in those directories with a complete profile, and who also surfaces that certification prominently on their own website with appropriate schema markup, receives a verification signal from multiple independent sources. That multi-source verification is exactly what AI systems look for before confidently recommending a service provider.</p>

        <div className="ae-timeline not-prose">
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">1</div>
            <div>
              <div className="ae-timeline-title">ASHI Directory Presence (American Society of Home Inspectors)</div>
              <div className="ae-timeline-desc">ASHI maintains a public inspector directory that AI platforms treat as a high-authority source. A complete ASHI member profile with your service area, specialties, years in practice, and contact information creates a citation asset that AI can reference independently of your website. Inspectors who are ASHI members but have not completed their directory profile are leaving a significant citation signal unclaimed. The directory is indexed; your profile needs to be populated to benefit from that indexing.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">2</div>
            <div>
              <div className="ae-timeline-title">InterNACHI Directory Presence (International Association of Certified Home Inspectors)</div>
              <div className="ae-timeline-desc">InterNACHI's "Find an Inspector" directory is another high-authority source that AI systems index when building their understanding of the inspection landscape. InterNACHI profiles that include your specialties, service area, certifications held, and continuing education credits create structured evidence of ongoing professional development. AI platforms interpret continuing education records as a signal that an inspector maintains current knowledge, which increases citation confidence for quality-specific queries.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">3</div>
            <div>
              <div className="ae-timeline-title">On-Site Certification Schema</div>
              <div className="ae-timeline-desc">Your own website displaying certification prominently, combined with schema markup that names your certifying body, certification number, and renewal status, creates a third independent verification signal. When AI sees ASHI directory listing, InterNACHI profile, and website schema all pointing to the same certification claim, the confidence level for citing you as "certified" in response to certification-specific queries reaches its highest possible level. Each of those three sources alone is insufficient; the combination is what drives reliable citation.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">4</div>
            <div>
              <div className="ae-timeline-title">Continuing Education as a Visibility Signal</div>
              <div className="ae-timeline-desc">Many buyers and agents who have done any research on home inspector quality know that continuing education matters. AI platforms reflect this by treating CE credits and specialty training as expertise signals. Inspectors who blog about or list specific training courses, specialty certifications like mold assessment or radon measurement, or advanced tools like infrared thermography training create content that AI can cite as expertise evidence for queries that go beyond basic "certified inspector near me" into more specific knowledge-based queries.</div>
            </div>
          </div>
        </div>

        <div className="ae-cta-inline not-prose">
          <p>Not sure if your certification appears correctly in AI search results? <Link href="/blindspot" className="text-[#F27D24] hover:underline font-semibold">Get your free Blind Spot Report</Link> and see exactly what AI sees when it looks up inspectors in your area.</p>
        </div>

        <h2 id="specialty-queries">Specialty Inspection Queries That AI Handles Differently</h2>

        <p>General home inspection queries are competitive because every inspector in your market appears as a candidate. Specialty inspection queries are often dramatically less competitive because most inspector websites bundle all specialties into a single Services page with no depth, no schema, and no dedicated content. AI cannot match a specialty query to a buried bullet point. It can match a specialty query to a dedicated, structured page that specifically addresses that inspection type.</p>

        <p>Each specialty inspection type generates its own distinct query pattern on AI platforms. Buyers and sellers ask for these by name, often with specific location qualifiers and context details that require a matching, specific page to answer. The inspectors who build dedicated specialty pages become the citation resource for each of those query streams; those who do not are absent from them entirely.</p>

        <div className="ae-comparison-table not-prose">
          <table>
            <thead>
              <tr>
                <th>Specialty Type</th>
                <th>Example AI Query</th>
                <th>Citation Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thermal Imaging / Infrared</td>
                <td>"home inspector with infrared thermal imaging near me"</td>
                <td>Dedicated page naming the equipment, what it detects (moisture, heat loss, electrical hotspots), and why it matters</td>
              </tr>
              <tr>
                <td>Sewer Scope</td>
                <td>"sewer scope inspection [city]" or "home inspector who does sewer scopes"</td>
                <td>Dedicated page or detailed section on what sewer scope finds, cost, how it integrates with the standard inspection</td>
              </tr>
              <tr>
                <td>Mold / Air Quality</td>
                <td>"home inspector for mold testing" or "mold inspection before buying a house"</td>
                <td>Content that distinguishes mold assessment from standard inspection, explains sampling process, clarifies certification requirements</td>
              </tr>
              <tr>
                <td>Pool / Spa</td>
                <td>"home inspector who inspects pools" or "pool inspection during home inspection"</td>
                <td>Clear statement of what pool inspection covers (equipment, shell, safety features), whether it's included or add-on, and certifications held</td>
              </tr>
              <tr>
                <td>Radon</td>
                <td>"radon testing home inspector" or "does home inspection include radon test"</td>
                <td>Explanation of radon testing process, EPA action levels, report delivery, and whether certification is required in your state</td>
              </tr>
              <tr>
                <td>Foundation / Structural</td>
                <td>"home inspector for foundation problems" or "foundation inspection before buying"</td>
                <td>Content on what a home inspector can and cannot determine about foundation issues, when to refer to a structural engineer, common foundation issues in your region</td>
              </tr>
              <tr>
                <td>Asbestos / Lead Paint</td>
                <td>"home inspector who tests for asbestos" or "lead paint inspection older homes"</td>
                <td>Clear explanation of what these tests involve, regulatory context (pre-1978 homes, disclosure requirements), and how you handle sample collection</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Each of these specialty types requires a page or substantive section with enough depth that AI can extract specific, accurate answers to specific queries. Generic descriptions like "we offer mold testing" give AI nothing. A 400-word page that explains what mold inspection involves, what you are looking for, what equipment you use, and what the report includes gives AI a citable resource for every mold-related query in your market. The content requirement is not high; the specificity requirement is.</p>

        <div className="ae-callout ae-callout-warning not-prose">
          <div className="ae-callout-title">The Specialty Bundling Trap</div>
          <p>Most inspection websites list specialties in a format like "We also offer: mold, radon, pool, sewer scope, asbestos testing" on a single Services page. That format is invisible to AI for specialty queries. AI cannot confidently cite a business for radon testing when radon appears as a two-word bullet on a general page with no surrounding context. Building one dedicated page per specialty you actively offer is the single highest-leverage content investment available to home inspectors for AI visibility.</p>
        </div>

        <h2 id="pre-listing-demand">The Pre-Listing Inspection Shift and What It Means for AI</h2>

        <p>Pre-listing inspections, where sellers hire a home inspector before putting their property on the market, have shifted from a niche strategy to a mainstream practice in competitive markets. Sellers use pre-listing inspections to identify issues before buyers do, set accurate list prices, and accelerate transaction timelines by reducing negotiation friction. That behavioral shift has created a new and rapidly growing query category on AI platforms that most inspector websites are completely unprepared to capture.</p>

        <p>Buyers searching for inspectors generate the majority of inspection queries, but sellers searching for pre-listing inspections represent a distinct and often higher-value client type. Pre-listing inspection clients schedule during regular business hours, do not face the same time pressure as buyers under contract, and often return for the listing-side inspection when they buy their next home. AI platforms are increasingly handling seller-initiated queries like "pre-listing home inspection to find issues before selling" and "home inspector for seller pre-inspection," and inspectors without dedicated content for these queries are absent from that conversation.</p>

        <div className="ae-pros-cons not-prose">
          <div className="ae-pros-box">
            <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#4ade80'}}>What a Pre-Listing Inspection Page Needs for AI</div>
            <ul>
              <li>Dedicated URL: /pre-listing-inspection or /seller-inspection</li>
              <li>H1 that includes "pre-listing" or "seller inspection" explicitly</li>
              <li>Content explaining why sellers benefit from pre-inspection</li>
              <li>Turnaround time for report delivery stated clearly</li>
              <li>FAQPage schema with seller-specific questions and answers</li>
              <li>Service schema naming the service type and price range</li>
              <li>Links from your main services page and GBP description</li>
            </ul>
          </div>
          <div className="ae-cons-box">
            <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#f87171'}}>What Makes Pre-Listing Content Invisible to AI</div>
            <ul>
              <li>A single paragraph buried under "Other Services"</li>
              <li>No dedicated URL or structured page for the service</li>
              <li>Language only about buyer inspections throughout the site</li>
              <li>No mention of seller benefits, timing, or process</li>
              <li>No schema markup distinguishing it from standard inspection</li>
              <li>GBP description that never mentions pre-listing or sellers</li>
            </ul>
          </div>
        </div>

        <p>Real estate agents who recommend pre-listing inspections to their seller clients frequently search AI for inspector recommendations on the seller's behalf, using language like "home inspector who does seller pre-listing inspections in [city]." Inspectors who appear in agent-facing content, who are listed in agent referral networks, and whose websites explicitly address the pre-listing use case are positioned to capture both the direct seller search and the agent intermediary search. Both require dedicated, specific content that general inspection pages do not provide.</p>

        <h2 id="yelp-vs-ai">Why Yelp Rankings Don't Translate to AI Visibility</h2>

        <p>Home inspection is a high-review-volume category on Yelp, and many inspectors have invested years and significant energy into building large review counts on the platform. That investment does not translate into AI search visibility in any direct way, and understanding why is important for setting your AI strategy correctly.</p>

        <p>Yelp rankings are determined by factors internal to the Yelp ecosystem: review recency, response rates, profile completeness, and Yelp's own relevance algorithm. AI platforms do not read Yelp rankings. They read the text content of individual reviews on Yelp and across other platforms, processing that text semantically to extract patterns about what services an inspector performs, where they operate, and what specific expertise they demonstrate. An inspector ranked number one on Yelp with 300 reviews that say "great inspector, very thorough" is far less visible to AI than an inspector ranked fifteenth with 60 reviews that describe specific findings, locations, property types, and outcomes.</p>

        <div className="ae-comparison-table not-prose">
          <table>
            <thead>
              <tr>
                <th>Review Type</th>
                <th>Example Text</th>
                <th>AI Citation Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Generic positive</td>
                <td>"Very professional, would hire again. Five stars."</td>
                <td>Near zero. No service type, location, or finding detail for AI to extract.</td>
              </tr>
              <tr>
                <td>Process-specific</td>
                <td>"Used thermal camera to find moisture behind the master bath wall. Saved us from a hidden mold problem."</td>
                <td>High. Specific tool, specific finding, specific room context. Citable for thermal imaging queries.</td>
              </tr>
              <tr>
                <td>Location + property type</td>
                <td>"Inspected our 1962 ranch-style home in Arcadia. Found original knob-and-tube wiring in the attic that had been missed before."</td>
                <td>Very high. City, decade, property type, specific finding. Matches multiple query patterns simultaneously.</td>
              </tr>
              <tr>
                <td>Specialty + outcome</td>
                <td>"Did the full inspection plus sewer scope on our purchase in Pasadena. Found root intrusion at the main clean-out. Negotiated $8,000 off the price because of the report."</td>
                <td>Maximum. Specialty service, location, specific finding, buyer outcome. AI cites this for sewer scope + location queries.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Generating better review content does not require incentivizing reviews or violating platform terms. A post-inspection follow-up message that asks "What did we find at your property that surprised you most?" naturally surfaces specific detail. Customers who were satisfied with the inspection will describe the findings; the question prompts them to include the content AI needs without scripting them toward generic praise. That distinction between a review count strategy and a review quality strategy is one of the most important shifts an inspection business can make for AI visibility.</p>

        <div className="ae-callout ae-callout-success not-prose">
          <div className="ae-callout-title">The Multi-Platform Review Signal</div>
          <p>AI platforms synthesize review signals across multiple platforms, not just Yelp. Google reviews carry the most direct weight because of their deep integration with Gemini and Google AI Overviews. Reviews on Angi, HomeAdvisor, and the Better Business Bureau add additional citation signals from independent sources. Home inspectors who concentrate all their review energy on Yelp while neglecting Google reviews are building on the platform with the least AI influence. A balanced strategy that generates specific, substantive reviews across Google, Yelp, Angi, and your professional association directory creates the multi-source validation AI systems need to confidently recommend your business.</p>
        </div>

        <h2 id="report-delivery">Report Delivery as an AI Ranking Signal</h2>

        <p>Same-day and 24-hour report delivery has shifted from a competitive differentiator to an expected baseline in many markets, driven in part by buyer timelines that leave almost no room for waiting. That shift has also created a specific query category on AI platforms that most inspectors are failing to capture, because their websites discuss inspection services without ever stating report delivery timelines explicitly.</p>

        <p>AI platforms process report delivery information as a factual claim when it is stated clearly and consistently. An inspector whose website says "we deliver your inspection report within 24 hours of the inspection" on the homepage, in the FAQ section, and in schema markup creates a matchable fact that AI can cite in response to queries like "home inspector with 24-hour report delivery near me" or "who delivers same-day inspection reports in [city]." An inspector who delivers reports the same day but never states that claim anywhere on their digital presence is invisible to AI for that query category entirely.</p>

        <div className="ae-decision-matrix not-prose">
          <div style={{fontWeight: 700, color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-plus-jakarta)'}}>Report Delivery Signal Checklist</div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">Website homepage</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">State your report delivery commitment in the hero section or above the fold. "Same-day reports delivered by 10pm" is a citable claim. "Reports delivered promptly" is not.</span>
          </div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">Google Business Profile</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">Include report turnaround in your GBP description. Gemini reads GBP descriptions closely. "24-hour digital report delivery" in your description signals report timeline to AI for every Google-adjacent query.</span>
          </div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">FAQ section and schema</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">"When will I receive my inspection report?" with a specific time answer, marked up with FAQPage schema, becomes a directly citable answer for report delivery queries on every AI platform.</span>
          </div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">Review content</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">Reviews that mention report delivery ("had the full report in my inbox by 8pm the same day") provide third-party verification of your delivery claim that AI treats as independent corroboration.</span>
          </div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">Service schema markup</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">Include report delivery timeline in the Service schema description field. Machine-readable delivery commitment creates a structured signal that purely prose-based pages cannot match.</span>
          </div>
        </div>

        <div className="ae-cta-inline not-prose">
          <p>Wondering how your report delivery timeline appears to AI platforms? <Link href="/blindspot" className="text-[#F27D24] hover:underline font-semibold">Get your free Blind Spot Report</Link> and see exactly what gaps are making you invisible.</p>
        </div>

        <h2 id="breaking-referral-dependency">Breaking the Agent-Referral Dependency</h2>

        <p>Most home inspection businesses were built on agent referrals. A small group of agents who trust your work send you a steady stream of clients, and that pipeline feels stable until one of those agents changes offices, retires, or starts recommending someone else. The agent-referral model concentrates business development risk in a handful of relationships that you do not fully control, and it creates almost no AI search presence because AI-visible digital investment was never required to maintain those relationships.</p>

        <p>AI-generated inspection leads are different in a structurally important way. They come from buyers who found you independently, which means they arrive with a level of purchase intent and self-selection that referrals do not always produce. A buyer who specifically searched for an ASHI certified inspector with thermal imaging and found you on ChatGPT has already decided they want exactly what you offer. That client type tends to be less price-sensitive, more receptive to add-on specialty services, and more likely to leave a detailed review describing the specific work you did, which feeds the AI citation cycle further.</p>

        <div className="ae-callout ae-callout-info not-prose">
          <div className="ae-callout-title">What Agent Referral Sources Cannot Do</div>
          <p>Agent referrals cannot scale beyond the number of active referral relationships you maintain. AI visibility scales across every buyer in your market who asks an AI assistant for an inspector, 24 hours a day, regardless of whether their agent has your card. An inspection business that builds AI visibility is building a lead channel that runs continuously in parallel with referrals, catching the substantial share of buyers who begin their due-diligence research independently before their agent has the chance to recommend anyone.</p>
        </div>

        <p>The content that builds AI visibility also builds credibility with agents. When an agent searches ChatGPT for inspectors to recommend to a client and your business appears by name with a detailed profile, that is a referral reinforcement, not just a direct lead. Agents who discover inspectors through AI searches often add them to their referral list, converting an AI citation into an ongoing referral relationship. The two channels are not competitive; AI visibility tends to compound agent referrals over time.</p>

        <div className="ae-bar-group not-prose">
          <div style={{fontWeight: 700, color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-plus-jakarta)'}}>Estimated AI Citation Rate by Home Inspector Profile Type</div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">ASHI/InterNACHI listed + specialty pages + schema markup + review specificity</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'91%'}}></div></div>
            <div className="ae-bar-value">91%</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Certified, complete GBP, consistent directories, no specialty pages</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'68%'}}></div></div>
            <div className="ae-bar-value">68%</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">High Yelp review volume, no association listing, no schema</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'34%'}}></div></div>
            <div className="ae-bar-value">34%</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">GBP only, basic website, no schema</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'22%'}}></div></div>
            <div className="ae-bar-value">22%</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Agent referral only, no digital presence</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'6%'}}></div></div>
            <div className="ae-bar-value">6%</div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-8">Estimated citation rates based on AEO analysis patterns. Actual rates vary by market and query type.</p>

        <h2 id="quick-wins">Quick Wins Checklist for Home Inspectors</h2>

        <p>Not every inspector can rebuild their website in a week. These structural moves produce meaningful AI citation improvement within 30 to 60 days and can be implemented without a full site overhaul. Each one closes a specific gap in the signal stack AI uses to evaluate whether to recommend your business.</p>

        <div className="ae-cheat-sheet not-prose">
          <div className="ae-cheat-sheet-title">AI Visibility Quick Wins for Home Inspectors</div>
          <table>
            <tbody>
              <tr>
                <td>Complete your ASHI and InterNACHI profiles</td>
                <td>Add service area, specialties, years in practice, and certifications. These directories are indexed by AI as authoritative sources. A thin profile is a missed citation signal.</td>
              </tr>
              <tr>
                <td>Add your certification to Google Business Profile</td>
                <td>Include ASHI or InterNACHI membership, license number, and state license in your GBP description. Gemini reads this directly and factors it into certification queries.</td>
              </tr>
              <tr>
                <td>Add LocalBusiness schema to your homepage</td>
                <td>Include certification body, license number, service areas, and report delivery timeline in schema. Machine-readable credentials dramatically improve AI confidence for certified inspector queries.</td>
              </tr>
              <tr>
                <td>Create one dedicated pre-listing inspection page</td>
                <td>Pre-listing inspection queries are growing 40%+ year over year. A dedicated page with seller-specific content and FAQPage schema captures this query stream; a bullet point on your main page does not.</td>
              </tr>
              <tr>
                <td>Create one specialty page for your strongest add-on</td>
                <td>Pick your most-booked specialty: thermal imaging, sewer scope, radon, or mold. Build a dedicated page with the specific equipment, process, and what you find. That page becomes a citation asset for every specialty query in your market.</td>
              </tr>
              <tr>
                <td>State your report delivery timeline explicitly everywhere</td>
                <td>Homepage, GBP description, FAQ schema, and review request messaging should all name a specific time. "Same-day report by 10pm" is citable. "Reports delivered quickly" is not.</td>
              </tr>
              <tr>
                <td>Update your review request message</td>
                <td>"What did we find that surprised you most about the property?" surfaces specific, location-rich, finding-specific detail that AI can extract and cite. Generic five-star requests produce generic reviews that are invisible to AI.</td>
              </tr>
              <tr>
                <td>Audit your NAP consistency across all directories</td>
                <td>Identical business name, address, and phone on GBP, Yelp, Angi, HomeAdvisor, BBB, ASHI, and InterNACHI. Inconsistencies reduce AI entity confidence and suppress recommendations.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>The pattern across every item on this checklist is the same: make it structurally clear to AI what you do, where you do it, how you are qualified to do it, and how you deliver results. Every vague phrase is a missed signal. Every specific, structured claim is a potential citation asset that can generate booked inspections while you are on a job site with your clipboard.</p>

        <div className="ae-callout ae-callout-info not-prose">
          <div className="ae-callout-title">Related Reading</div>
          <p>Home inspection is part of a broader pattern in professional service AI visibility. See <Link href="/blog/how-electricians-get-found-on-ai-search" className="text-[#F27D24] hover:underline">how electricians get found on AI search</Link> for cross-trade patterns, and <Link href="/blog/aeo-vs-seo" className="text-[#F27D24] hover:underline">AEO vs SEO: What is the difference</Link> for the foundational framework behind everything in this guide.</p>
        </div>

        {/* 3-tier CTA block */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Find Out Whether AI Is Recommending Other Inspectors Instead of You</h3>
          <p className="text-gray-400 mb-6">Our free Blind Spot Report shows exactly what ChatGPT, Gemini, and Claude know about your inspection business, which signals are missing, and what structural changes would move you into AI recommendations in your service area.</p>
          <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">
            Get Your Free Blind Spot Report
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
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

        {/* Author card */}
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

        {/* FAQ */}
        <h2 id="faq">Frequently Asked Questions</h2>

        <div className="not-prose space-y-6">
          {[
            {
              q: 'Why does ChatGPT recommend other home inspectors in my area but not me?',
              a: 'ChatGPT builds its understanding of local home inspectors from sources it trained on: review platforms, professional association directories, real estate websites, and inspector websites. If competitors appear in ASHI or InterNACHI directories with complete profiles, have more specifically structured website content, and generate more service-specific reviews, they surface in recommendations while your business stays invisible. Certification visibility and structured content depth both drive citation probability.',
            },
            {
              q: 'Does ASHI or InterNACHI certification help me get recommended by AI?',
              a: 'Yes, significantly. AI platforms treat professional certification as a trust signal when recommending home inspectors. ASHI and InterNACHI member directories are high-authority sources that AI systems actively index. Inspectors listed in those directories with complete profiles, who also display their certification prominently on their website with schema markup, receive higher citation confidence from AI compared to uncertified or unlisted competitors.',
            },
            {
              q: 'What schema markup should home inspectors use to improve AI visibility?',
              a: 'The highest-impact schema types for home inspectors are LocalBusiness or ProfessionalService with certification details, Service schema for each inspection type offered, FAQPage schema on service and location pages, and BreadcrumbList for site structure. Including your certification body, license number, service area, and report delivery timeline in schema markup gives AI machine-readable confirmation of your qualifications that dramatically increases citation confidence for specialty queries.',
            },
            {
              q: 'Should home inspectors create separate pages for each inspection specialty?',
              a: 'Dedicated specialty pages are one of the highest-impact moves for home inspector AI visibility. Separate pages for mold inspection, sewer scope, thermal imaging, foundation inspection, pool inspection, and pre-listing inspection each become independently citable citation assets. A single Services page listing all specialties in bullet points gives AI almost nothing to match against specific queries like "home inspector with infrared thermal camera near me."',
            },
            {
              q: 'How does pre-listing inspection demand affect AI search for home inspectors?',
              a: 'Pre-listing inspections are one of the fastest-growing inspection query categories on AI platforms. Home inspectors who have a dedicated pre-listing inspection page with specific content about the process, seller benefits, and turnaround time are capturing this growing query volume. Inspectors without a dedicated page are invisible to AI for this high-value, seller-initiated search pattern that is growing over 40% year over year.',
            },
            {
              q: 'How long does it take a home inspector to start appearing in AI recommendations?',
              a: 'Home inspectors who improve their structured data and Google Business Profile typically see initial results from Perplexity and Google AI Overviews within 30 to 60 days. ChatGPT base model citations take longer because they depend on retraining cycles that can span 12 to 18 months. Listing your business in ASHI or InterNACHI member directories accelerates AI citation timelines because those are authoritative sources AI systems already index and trust.',
            },
            {
              q: 'Why do Yelp rankings not translate to AI search visibility for home inspectors?',
              a: 'Yelp rankings are based on aggregate review volume and recency within the Yelp ecosystem. AI platforms do not read Yelp rankings directly; they process the text of individual reviews for service specificity, location context, and expertise signals. An inspector with 200 generic five-star Yelp reviews is far less visible to AI than one with 40 reviews describing specific inspection findings, locations, and outcomes. Structured expertise evidence outweighs aggregate star counts in AI citation logic.',
            },
            {
              q: 'How do report delivery timelines affect home inspector AI recommendations?',
              a: 'Same-day and 24-hour report delivery is an increasingly query-specific signal on AI platforms as buyers ask questions like "home inspector with same-day report delivery near me." Inspectors who explicitly state their report turnaround time on their website, in Google Business Profile, and in schema markup create a matchable claim for those specific queries. Inspectors who offer same-day delivery but never surface it prominently miss these high-intent searches entirely.',
            },
          ].map((item, i) => (
            <div key={i} className="border border-black/10 rounded-xl p-6 bg-white/[0.02]">
              <h3 className="font-plus-jakarta font-semibold text-white mb-3">{item.q}</h3>
              <p className="text-gray-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="ae-final-cta not-prose">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">The Next Booked Inspection Could Be Yours</h2>
          <p className="text-gray-300 mb-8 text-lg">Every AI-referred inspection job that goes to a competitor is a call you did not get. Our free Blind Spot Report shows exactly what ChatGPT, Gemini, and Claude see when someone searches for a home inspector in your area, which signals are missing, and what structural changes would put your business in the recommendation before the next buyer goes under contract.</p>
          <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D96416] transition-colors ae-pulse-glow">
            Get Your Free Blind Spot Report
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <p className="text-gray-500 mt-4 text-sm">Free. No credit card. Results in minutes.</p>
        </div>

      </article>
    </>
  )
}
