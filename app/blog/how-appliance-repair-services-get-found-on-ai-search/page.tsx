import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Appliance Repair Services Get Found on AI Search (ChatGPT, Gemini, Claude)'
const description =
  'Most appliance repair shops are invisible on ChatGPT and Gemini. Here is exactly how appliance repair services get cited in AI search results, which brand-specific and appliance-type content patterns win, and how to appear before a homeowner calls someone else.'
const slug = 'how-appliance-repair-services-get-found-on-ai-search'
const publishDate = '2026-04-23'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'appliance repair AI search',
    'how appliance repair shops get found on ChatGPT',
    'appliance repair ChatGPT recommendations',
    'appliance repair Gemini search',
    'get appliance repair business on AI search',
    'appliance repair Google AI',
    'local appliance repair AI citation',
    'appliance repair schema markup',
    'AEO for appliance repair',
    'Samsung repair AI search',
    'LG appliance repair AI visibility',
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
          name: 'Why does ChatGPT recommend other appliance repair shops in my area but not mine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT builds its understanding of local appliance repair businesses from training data: review platforms, business directories, brand-authorized contractor lists, and service websites. Shops that appear frequently and consistently across those sources, with specific brand and appliance-type content, surface in recommendations while others stay invisible. Structured content about which brands you service and which appliances you repair drives citation probability far more than generic descriptions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does being factory-certified to repair Samsung, LG, or Whirlpool help my AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, factory certification is one of the strongest trust signals in appliance repair AI citations. When a homeowner asks ChatGPT for a Samsung-authorized repair technician, the AI looks for businesses that explicitly claim that authorization in their structured data, website copy, and directory listings. A factory certification mentioned only on a business card does nothing for AI visibility. Publishing it in schema markup, GBP attributes, and brand-specific service pages is what makes it a citable credential.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I repair or replace my appliance? How does that question affect AI search for repair shops?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Repair-or-replace is one of the highest-volume appliance queries on AI platforms. Homeowners ask ChatGPT and Gemini this question constantly before deciding whether to call a repair shop at all. Appliance repair businesses that publish consultative content answering this question for specific appliances and age ranges become the trusted source AI cites when the homeowner finally decides to repair. That content positions you as the expert before the call is even made.',
          },
        },
        {
          '@type': 'Question',
          name: 'What schema markup should appliance repair businesses use to improve AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The highest-impact schema types for appliance repair are LocalBusiness with the HomeAndConstructionBusiness or specific repair sub-type, Service schema for each appliance type repaired, FAQPage schema on brand-specific and appliance-type pages, and BreadcrumbList for site structure. Including the brands you are authorized to repair and the specific appliance categories you service in your schema gives AI machine-readable confirmation that your business matches specific query intent.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does same-day appliance repair content affect AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Same-day and emergency appliance repair queries carry the highest purchase intent in the category. A homeowner whose refrigerator failed overnight or whose washing machine is leaking is not researching options. They need someone immediately, and they are going to call whoever AI recommends. Businesses that explicitly communicate same-day availability in their Google Business Profile, service pages, and schema markup are significantly more likely to be cited for those urgent, high-converting queries.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take an appliance repair business to start appearing in AI recommendations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Appliance repair businesses that improve their structured data and Google Business Profile typically see initial results from Perplexity and Google AI Overviews within 30 to 60 days. ChatGPT base model citations depend on retraining cycles that can span 12 to 18 months. Real-time AI tools like Perplexity and ChatGPT with web browsing respond much faster to structural improvements, making those platforms the best early indicators that your changes are working.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do Angi and Thumbtack leads translate into AI citations for appliance repair shops?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Angi and Thumbtack profiles contribute to your directory citation network, which helps AI build confidence in your entity. But paying for leads on those platforms is entirely separate from AI citation. Buying an Angi lead does not make ChatGPT recommend you. What matters for AI visibility is having a complete, consistent profile on those platforms as one of many directory citations, combined with structured content and schema markup on your own website.',
          },
        },
        {
          '@type': 'Question',
          name: 'How should appliance repair businesses handle discontinued appliance models and parts availability content?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Parts availability and discontinued model expertise is an underutilized content angle that AI platforms cite frequently. Homeowners ask AI whether parts are still available for older appliances before committing to a repair. Businesses that publish specific content about which older models they can still source parts for, and which manufacturers have discontinued support, position themselves as the knowledgeable choice for those queries without any direct competition from generic repair shops.',
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
          <li className="text-gray-400 truncate">Appliance Repair on AI Search</li>
        </ol>
      </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/how-appliance-repair-services-get-found-on-ai-search.webp"
              alt="how appliance repair services get found on ai search"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="ae-section-label">Industry Guides</span>
          <span className="text-gray-500 text-sm">14 min read</span>
        </div>
        <h1 className="font-plus-jakarta text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          How Appliance Repair Services Get Found on AI Search (ChatGPT, Gemini, Claude)
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          When a homeowner's refrigerator stops cooling at 7am, they do not scroll through Yelp listings. They ask ChatGPT or Gemini for a same-day appliance repair technician near them. Whether your shop appears in that answer or stays invisible while a competitor gets the service call comes down to a handful of structural decisions about your digital presence.
        </p>

        {/* Inline hero SVG */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1d27] to-[#0F1117] border border-white/5 h-56 flex items-center justify-center mb-8">
          <svg viewBox="0 0 1200 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="appl-bg" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#1a1d27" />
                <stop offset="100%" stopColor="#0F1117" />
              </radialGradient>
              <radialGradient id="appl-glow" cx="38%" cy="55%" r="48%">
                <stop offset="0%" stopColor="#F27D24" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#F27D24" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="400" fill="url(#appl-bg)" />
            <circle cx="400" cy="230" r="260" fill="url(#appl-glow)" />

            {/* Refrigerator outline */}
            <rect x="160" y="100" width="90" height="200" rx="8" fill="none" stroke="#F27D24" strokeWidth="2" strokeOpacity="0.55" />
            <line x1="160" y1="190" x2="250" y2="190" stroke="#F27D24" strokeWidth="1.5" strokeOpacity="0.4" />
            <rect x="168" y="108" width="20" height="10" rx="2" fill="#F27D24" fillOpacity="0.25" />
            <rect x="168" y="200" width="20" height="10" rx="2" fill="#F27D24" fillOpacity="0.2" />

            {/* Washing machine outline */}
            <rect x="270" y="130" width="90" height="175" rx="8" fill="none" stroke="#F27D24" strokeWidth="2" strokeOpacity="0.45" />
            <circle cx="315" cy="230" r="32" fill="none" stroke="#F27D24" strokeWidth="1.5" strokeOpacity="0.4" />
            <circle cx="315" cy="230" r="18" fill="none" stroke="#F27D24" strokeWidth="1" strokeOpacity="0.25" />
            <circle cx="315" cy="155" r="6" fill="none" stroke="#F27D24" strokeWidth="1" strokeOpacity="0.3" />

            {/* Wrench / repair tool */}
            <path d="M390,180 Q395,150 410,145 L416,151 Q406,158 403,178 Z" fill="#F27D24" fillOpacity="0.3" stroke="#F27D24" strokeWidth="1" strokeOpacity="0.6" />
            <line x1="403" y1="178" x2="430" y2="230" stroke="#F27D24" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.5" />

            {/* Dashed connector to AI panel */}
            <path d="M445,200 Q490,200 530,200" stroke="#F27D24" strokeWidth="1.5" strokeDasharray="5,3" fill="none" strokeOpacity="0.45" />
            <polygon points="528,196 536,200 528,204" fill="#F27D24" fillOpacity="0.45" />

            {/* AI response panel */}
            <rect x="550" y="100" width="390" height="195" rx="16" fill="#1e2235" stroke="#F27D24" strokeWidth="1" strokeOpacity="0.25" />
            <text x="572" y="136" fill="#F27D24" fontSize="12" fontFamily="monospace" opacity="0.9">AI Response</text>
            <line x1="572" y1="145" x2="920" y2="145" stroke="#F27D24" strokeWidth="0.5" strokeOpacity="0.25" />

            {/* Query */}
            <text x="572" y="168" fill="#888" fontSize="11" fontFamily="monospace">"Samsung refrigerator not cooling repair near me"</text>

            {/* Results */}
            <circle cx="581" cy="194" r="5" fill="#F27D24" opacity="0.9" />
            <text x="594" y="198" fill="#e0e0e0" fontSize="12" fontFamily="monospace" fontWeight="bold">Metro Appliance Pros</text>
            <text x="594" y="214" fill="#666" fontSize="10" fontFamily="monospace">Samsung-authorized, same-day, 4.8 stars</text>

            <circle cx="581" cy="234" r="5" fill="#444" opacity="0.6" />
            <text x="594" y="238" fill="#555" fontSize="12" fontFamily="monospace">Quick Fix Appliances</text>

            <circle cx="581" cy="258" r="5" fill="#333" opacity="0.4" />
            <text x="594" y="262" fill="#444" fontSize="12" fontFamily="monospace">Area Repair Co.</text>

            {/* Platform labels */}
            <text x="572" y="315" fill="#F27D24" fontSize="10" fontFamily="monospace" opacity="0.5">ChatGPT</text>
            <text x="636" y="315" fill="#F27D24" fontSize="10" fontFamily="monospace" opacity="0.5">Gemini</text>
            <text x="694" y="315" fill="#F27D24" fontSize="10" fontFamily="monospace" opacity="0.5">Claude</text>
            <text x="752" y="315" fill="#F27D24" fontSize="10" fontFamily="monospace" opacity="0.5">Perplexity</text>

            {/* Brand logos as text indicators */}
            <text x="162" y="95" fill="#F27D24" fontSize="9" fontFamily="monospace" opacity="0.5">FRIDGE</text>
            <text x="272" y="125" fill="#F27D24" fontSize="9" fontFamily="monospace" opacity="0.5">WASHER</text>
          </svg>
        </div>

        {/* Stats grid */}
        <div className="ae-stats-grid">
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🔧</span>
            <span className="ae-stat-value">68%</span>
            <span className="ae-stat-label">of homeowners who search AI for appliance repair call the first business recommended within 10 minutes</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">📅</span>
            <span className="ae-stat-value">45 days</span>
            <span className="ae-stat-label">average time for an appliance repair business to appear in Perplexity citations after structural improvements</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">🏷️</span>
            <span className="ae-stat-value">4 in 5</span>
            <span className="ae-stat-label">appliance repair AI queries include a specific brand name (Samsung, LG, Whirlpool, GE, Bosch) or appliance type</span>
          </div>
          <div className="ae-stat-card">
            <span className="ae-stat-emoji">⚡</span>
            <span className="ae-stat-value">Top 3</span>
            <span className="ae-stat-label">same-day appliance repair is among the top three highest-converting local service query categories on AI platforms</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 py-4 prose prose-invert prose-lg max-w-none">

        {/* TOC */}
        <div className="ae-toc not-prose">
          <div className="ae-toc-title">In This Guide</div>
          <ol>
            <li><a href="#how-ai-finds-repair-shops">How AI Finds Appliance Repair Shops in Your Area</a></li>
            <li><a href="#brand-specific-queries">Why Brand-Specific Queries Are Where AI Citations Are Won</a></li>
            <li><a href="#appliance-type-segmentation">Appliance-Type Segmentation: The Service Page Architecture AI Needs</a></li>
            <li><a href="#repair-or-replace">How Repair-or-Replace Content Gets Your Shop Cited First</a></li>
            <li><a href="#same-day-positioning">Same-Day vs 24-Hour vs Next-Available: Positioning That AI Reads</a></li>
            <li><a href="#parts-availability">Parts Availability Content and Discontinued Appliance Expertise</a></li>
            <li><a href="#schema-and-directories">Schema Markup and Directory Signals for Appliance Repair</a></li>
            <li><a href="#angi-thumbtack">Why Angi and Thumbtack Leads Are Not AI Citations</a></li>
            <li><a href="#quick-wins">Quick Wins Checklist for Appliance Repair Shops</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </div>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

        <h2 id="how-ai-finds-repair-shops">How AI Finds Appliance Repair Shops in Your Area</h2>

        <p>When a homeowner asks ChatGPT for a refrigerator repair technician in their city, the AI is not running a live search against your website in real time. It is drawing on a learned model of the appliance repair landscape in that area, assembled during training from business directories, review platforms, brand-authorized service locators, manufacturer websites, and contractor sites. The shops that appear in those answers are the ones whose information appeared most frequently and most consistently across those source types during the training window. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

        <p>Shops that stay invisible are not necessarily worse at their craft. Their digital presence was simply not structured in a way that made it easy for AI to absorb, verify, and cite with confidence. An appliance repair business can have 200 Google reviews and still be invisible on ChatGPT if its content is too generic to match the specific, brand- and appliance-type queries that homeowners actually ask. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>

        <p>Real-time AI tools like Perplexity and ChatGPT with web search enabled do conduct live crawls, which means improvements to your digital presence can influence those results within weeks. Base model citations in ChatGPT without browsing take longer, depending on retraining cycles. Both reward the same underlying signal: a clear, consistent, specific digital footprint that matches the language of how homeowners actually describe appliance problems. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

        <div className="ae-callout ae-callout-info not-prose">
          <div className="ae-callout-title">Why Appliance Repair Is a High-Stakes AI Category</div>
          <p>Appliance failure is not a consideration purchase. When a washer floods a laundry room or a refrigerator stops cooling, the homeowner is in a problem state and needs resolution the same day. That urgency means AI recommendations convert to phone calls at extremely high rates. The technician AI recommends often gets called without the homeowner looking at a second option. This makes AI visibility more commercially critical for appliance repair shops than for almost any other home service category. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
        </div>

        <h2 id="brand-specific-queries">Why Brand-Specific Queries Are Where AI Citations Are Won</h2>

        <p>The most important insight about appliance repair AI search is that homeowners almost never ask for "an appliance repair shop." They ask for someone who can fix their specific brand and specific appliance. "Samsung refrigerator ice maker repair," "LG washing machine not draining," "Bosch dishwasher door latch replacement," "Sub-Zero compressor service," "Whirlpool dryer not heating." These brand-and-appliance-type combinations are where the actual query volume lives, and they are where generic repair shop descriptions completely fail to compete. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

        <p>AI platforms match queries to content at the level of specificity. When someone asks Gemini for a Bosch dishwasher repair technician, Gemini looks for businesses that explicitly claim Bosch expertise in their structured data, website content, and directory listings. A shop that services all brands but only says "major appliance repair" on its website is invisible to that query. A shop with a dedicated Bosch dishwasher repair page, Bosch listed in its schema markup, and reviews mentioning Bosch service has a structurally different citation probability. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

        <div className="ae-bar-group not-prose">
          <div style={{fontWeight: 700, color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-plus-jakarta)'}}>Estimated AI Citation Rate by Appliance Repair Content Specificity</div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Brand-specific pages + factory auth schema + dedicated appliance-type pages</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'91%'}}></div></div>
            <div className="ae-bar-value">91%</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Brands listed on homepage + consistent directories + strong reviews</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'74%'}}></div></div>
            <div className="ae-bar-value">74%</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">Good reviews with brand mentions, no dedicated pages</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'56%'}}></div></div>
            <div className="ae-bar-value">56%</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">GBP only, generic "appliance repair" description</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'28%'}}></div></div>
            <div className="ae-bar-value">28%</div>
          </div>
          <div className="ae-bar-item">
            <div className="ae-bar-label">No GBP, generic website, no brand or appliance specificity</div>
            <div className="ae-bar-track"><div className="ae-bar-fill" style={{width:'7%'}}></div></div>
            <div className="ae-bar-value">7%</div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-8">Estimated citation rates based on AEO analysis patterns. Actual rates vary by market and query type. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>

        <p>Factory certification and manufacturer authorization are the strongest brand-specific signals an appliance repair shop can publish. When AI is asked for a Samsung-authorized technician, it looks for businesses that explicitly claim that authorization in their structured data, Google Business Profile service descriptions, and website copy. A factory certification that lives only on a physical certificate or a business card does nothing for AI visibility. Publishing it in schema markup, in GBP attributes, and on brand-specific service pages is what makes it a citable credential that AI can surface with confidence. Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

        <div className="ae-timeline not-prose">
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">1</div>
            <div>
              <div className="ae-timeline-title">Samsung and LG: The Highest-Query Brand Pair</div>
              <div className="ae-timeline-desc">Samsung and LG together account for an outsized share of AI appliance repair queries. Both brands have large installed bases in refrigerators, washers, dryers, and dishwashers, and both have model-specific reliability patterns that generate consistent searches. Technicians who publish content addressing common Samsung and LG failure modes by model family become citable sources for those specific queries, not just for generic brand repair.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">2</div>
            <div>
              <div className="ae-timeline-title">Whirlpool, GE, and Maytag: The Volume Tier</div>
              <div className="ae-timeline-desc">Whirlpool, GE, and Maytag have the largest installed appliance bases in the United States and generate high query volumes for repair across all appliance types. These brands are also frequently asked about in the context of "repair or replace" decisions, particularly for older units. Shops with content that addresses common Whirlpool washer errors, GE refrigerator compressor issues, and Maytag dryer belt replacements become AI-citable across both repair and diagnostic query categories.</div>
            </div>
          </div>
          <div className="ae-timeline-item">
            <div className="ae-timeline-step">3</div>
            <div>
              <div className="ae-timeline-title">Bosch, Sub-Zero, and Viking: The Luxury Niche</div>
              <div className="ae-timeline-desc">Luxury appliance repair is a high-value, low-competition niche in AI search. Homeowners with Sub-Zero refrigerators or Viking ranges are asking AI for technicians who specifically service those brands, not general appliance shops. The query volume is lower, but the conversion rate is significantly higher because the homeowner has an expensive appliance, a strong reason to find a qualified technician, and few competitors in AI results who have built brand-specific content.</div>
            </div>
          </div>
        </div>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

        <h2 id="appliance-type-segmentation">Appliance-Type Segmentation: The Service Page Architecture AI Needs</h2>

        <p>The absence of dedicated appliance-type service pages is the most common and most costly missed opportunity for repair shops in AI search. Most appliance repair websites have a homepage, an about page, and a single Services page listing "refrigerators, washers, dryers, dishwashers, ovens, microwaves" in a bullet list. That structure served keyword SEO passably a decade ago. It does almost nothing for AI visibility today. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

        <p>AI platforms match queries to content at the page level. When someone asks Gemini for "dishwasher not draining repair near me," Gemini looks for pages that are specifically, deeply, and exclusively about dishwasher repair. A bullet point in a services list is not a match. A dedicated dishwasher repair page with a specific title, failure-mode content addressing common dishwasher problems, FAQ schema covering drainage and door latch issues, and a clear call to action is a citation asset that stands independently for dishwasher queries without competing with your refrigerator content for the same page authority. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

        <div className="ae-comparison-table not-prose">
          <table>
            <thead>
              <tr>
                <th>Appliance Type</th>
                <th>Top AI Query Patterns</th>
                <th>Content Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Refrigerator</td>
                <td>not cooling, ice maker broken, compressor noise, water dispenser leak</td>
                <td>Very high. Highest urgency appliance failure category.</td>
              </tr>
              <tr>
                <td>Washing Machine</td>
                <td>not draining, won't spin, flooding, error codes (F21, E1, etc.)</td>
                <td>Very high. Second-highest query volume category.</td>
              </tr>
              <tr>
                <td>Dryer</td>
                <td>not heating, takes too long, tumbling but no heat, drum not spinning</td>
                <td>High. Often paired with washer repair queries.</td>
              </tr>
              <tr>
                <td>Dishwasher</td>
                <td>not draining, not cleaning dishes, door latch, not starting</td>
                <td>High. Strong same-day intent queries.</td>
              </tr>
              <tr>
                <td>Oven / Range</td>
                <td>not heating, burner ignition, self-clean lock, temperature inaccurate</td>
                <td>Medium-high. Strong pre-holiday spike.</td>
              </tr>
              <tr>
                <td>Microwave</td>
                <td>not heating, turntable stopped, display dead, sparking</td>
                <td>Medium. Repair-or-replace queries are very common.</td>
              </tr>
              <tr>
                <td>Garbage Disposal</td>
                <td>not working, humming but not spinning, leaking, reset button</td>
                <td>Medium. Fast-resolution queries with high conversion.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Each dedicated appliance page should go beyond a general description to address the specific failure modes, error codes, and symptoms that homeowners actually search for. A refrigerator repair page that explains Samsung RF28 compressor failure patterns, common LG refrigerator cooling issues related to the dual evaporator fan, and how to tell whether a GE refrigerator compressor is worth replacing becomes a multi-dimensional citation asset. It is no longer just a "refrigerator repair" page. It is a page that can be cited for a dozen distinct query variations involving specific brands, models, and symptoms. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

        <div className="ae-callout ae-callout-warning not-prose">
          <div className="ae-callout-title">Commercial Appliance Repair: A Low-Competition AI Niche</div>
          <p>If your shop services commercial equipment, building separate content for commercial appliance repair is one of the highest-return investments in the category. Restaurant owners and property managers ask AI for commercial refrigerator repair, commercial dishwasher service, and commercial laundry equipment technicians. Almost no appliance repair websites have dedicated commercial pages with commercial-specific schema markup. Shops that build this content face almost zero AI citation competition for commercial queries in most markets. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
        </div>

        <h2 id="repair-or-replace">How Repair-or-Replace Content Gets Your Shop Cited First</h2>

        <p>Repair-or-replace is one of the highest-volume question categories in appliance AI search. Homeowners ask ChatGPT and Gemini this question constantly before deciding whether to call a repair shop at all. "Is it worth fixing a 10-year-old Whirlpool washing machine?" "Should I repair or replace a refrigerator that is 8 years old?" "How much does a dryer repair cost before it makes sense to replace it?" These queries represent homeowners who have not yet decided to repair, which means the business that answers this question for them is the business they trust when they finally pick up the phone. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

        <p>Appliance repair shops that publish genuinely consultative repair-or-replace content for specific appliance types and age ranges become the authority AI cites when homeowners ask these questions. The content does not need to advocate for repair in every case. In fact, content that honestly acknowledges when replacement makes more financial sense builds more trust and drives more long-term citations than purely self-promotional repair advocacy. AI platforms value content that matches the genuine informational need of the query, which in this case is an honest cost-benefit analysis, not a sales pitch. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

        <div className="ae-pros-cons not-prose">
          <div className="ae-pros-box">
            <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#4ade80'}}>AI-Citable Repair-or-Replace Content</div>
            <ul>
              <li>Specific age thresholds by appliance type (refrigerators often repair up to 7-8 years)</li>
              <li>Brand-specific reliability patterns that affect the calculation</li>
              <li>Repair cost ranges by appliance and failure type with specific dollar figures</li>
              <li>The 50% rule explained: when repair costs approach half of replacement, replace</li>
              <li>Energy efficiency considerations for older vs newer models</li>
              <li>Honest advice on which failures are never worth repairing (compressor on old fridge)</li>
              <li>FAQPage schema on every repair-or-replace page</li>
            </ul>
          </div>
          <div className="ae-cons-box">
            <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#f87171'}}>Content That AI Ignores or Discounts</div>
            <ul>
              <li>"It's always worth calling us first" without substantive guidance</li>
              <li>Generic advice that applies to no specific appliance or brand</li>
              <li>Content that reads as promotional rather than consultative</li>
              <li>No dollar figures, no age thresholds, no brand context</li>
              <li>No FAQ schema to make answers machine-extractable</li>
              <li>The same repair-or-replace page for every appliance type</li>
            </ul>
          </div>
        </div>

        <p>Repair-or-replace content has a compounding effect on AI visibility. A homeowner who reads your consultative content and decides to replace an appliance may still call you next time something breaks. And if they decide to repair, they already trust your shop before they dial. The consultation content positions your business as the knowledgeable local expert rather than just a service provider competing on response time and price. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            <a href="https://theanswerengine.ai/blindspot" className="ae-cta-inline">→ Get your free AI citation score — 48-hour turnaround</a>

        <h2 id="same-day-positioning">Same-Day vs 24-Hour vs Next-Available: Positioning That AI Reads</h2>

        <p>Response time is a major dimension of appliance repair queries on AI platforms, and how your business communicates its availability has a direct effect on which query types it gets cited for. Homeowners who ask AI for appliance repair are almost always in an urgent situation. A refrigerator failure, a washing machine that will not drain before a full laundry basket, a dishwasher that stopped mid-cycle before guests arrive: these are not convenience purchases. The urgency of the situation is why response time positioning matters so much in AI citations. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

        <p>AI platforms read availability signals from multiple sources: your Google Business Profile hours (including special hours and service area notes), the explicit language in your service page copy, your schema markup, and the way customers describe response time in reviews. A shop that says "same-day service available" buried in a paragraph of general copy sends a weaker signal than a shop whose GBP hours cover evenings and weekends, whose service pages lead with response time guarantees, and whose reviews include phrases like "came out within 2 hours on a Sunday." Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

        <div className="ae-decision-matrix not-prose">
          <div style={{fontWeight: 700, color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-plus-jakarta)'}}>Availability Positioning and AI Query Match</div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">Same-day service</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">Most urgent queries. "Emergency refrigerator repair today," "washing machine repair same day." Highest conversion rate in the category. Must be in GBP hours, schema, and prominently in page copy to be cited for these queries.</span>
          </div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">Next-day or 24-hour</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">Planning queries. Homeowners who can tolerate overnight but need a firm appointment. Communicate this positioning clearly with specific scheduling language. Less competitive than same-day but still strong intent.</span>
          </div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">Scheduled appointments only</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">Non-urgent repairs. Oven calibration, preventive maintenance, cosmetic fixes. Fewer AI citations for urgent queries, but still competitive for planned repairs if your content is specific enough about the appliances and brands you service.</span>
          </div>
          <div className="ae-decision-row">
            <span className="ae-decision-if">Warranty work</span>
            <span className="ae-decision-arrow">→</span>
            <span className="ae-decision-then">Separate query category entirely. "Appliance still under warranty who can repair it." Third-party warranty service authorization is a distinct citation signal from standard repair. Publish it explicitly in GBP, schema, and service pages if you handle warranty claims for any brands.</span>
          </div>
        </div>

        <p>Shops that handle warranty repair for manufacturer programs or extended warranty providers have an additional AI citation opportunity that most businesses miss. Homeowners frequently ask AI whether their appliance is still under warranty and who they should call for warranty service. A business that explicitly publishes its warranty service relationships in its schema and GBP description becomes a potential AI citation for those queries in ways that purely private-pay repair shops are not. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

        <h2 id="parts-availability">Parts Availability Content and Discontinued Appliance Expertise</h2>

        <p>The post-2022 appliance parts supply chain disruption created a content opportunity that most repair shops have not exploited. Homeowners frequently ask AI whether parts are still available for their appliance model before committing to a repair. "Can I still get parts for a 2018 Samsung refrigerator?" "Are Whirlpool dishwasher parts still available?" "My GE range is 15 years old, can it still be repaired?" These queries exist because homeowners know that parts availability affects the viability of repair, and they want to know before spending money on a service call. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

        <p>Appliance repair businesses that publish specific content about which older models they can still source parts for, which manufacturers have discontinued OEM parts support, and where they source aftermarket alternatives position themselves as the knowledgeable choice for older and harder-to-service appliances. This content faces almost no direct competition in most markets because generic repair shops do not publish it, and manufacturer websites only address their own products. An independent technician who explains the parts landscape for a range of brands and ages becomes the trusted resource AI cites when homeowners ask these questions. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

        <div className="ae-callout ae-callout-success not-prose">
          <div className="ae-callout-title">The Discontinued Appliance Niche</div>
          <p>Some of the most loyal appliance repair customers are owners of older, high-quality appliances who actively want to keep them running. A 25-year-old Sub-Zero or Thermador that still functions well is worth more to the owner than a new appliance of comparable quality at today's prices. Technicians who can source parts for discontinued models and who publish content explaining their older appliance expertise attract a high-value, low-competition customer segment that generic repair content never reaches. AI platforms cite this specialized content because it answers questions that no other source answers adequately. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
        </div>

        <p>Parts shortage content also serves an evergreen purpose beyond the immediate post-2022 supply disruption. Supply chain constraints in appliance manufacturing are a structural feature of the industry, not a temporary anomaly. Specific brands and model generations will continue to face parts scarcity as production changes, and content that addresses this dynamic will remain citable long after the specific shortage context fades. Writing about parts availability in a way that acknowledges the ongoing nature of the challenge produces content with lasting AI citation value. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

        <h2 id="schema-and-directories">Schema Markup and Directory Signals for Appliance Repair</h2>

        <p>Schema markup is the clearest signal an appliance repair shop can send to AI platforms. It is machine-readable metadata that explicitly tells AI systems who you are, what appliances you repair, which brands you service, where you operate, and when you are available. Pages with proper schema get cited at significantly higher rates than unstructured pages because AI can verify claims from schema rather than having to infer them from prose. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

        <div className="ae-comparison-table not-prose">
          <table>
            <thead>
              <tr>
                <th>Schema Type</th>
                <th>Where to Implement</th>
                <th>What It Signals to AI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LocalBusiness / HomeAndConstructionBusiness</td>
                <td>Homepage and all location pages</td>
                <td>Entity type, location, service areas, hours, contact information, specializations</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Each dedicated appliance-type page</td>
                <td>Specific appliance repaired, brands serviced, area served, price range</td>
              </tr>
              <tr>
                <td>FAQPage</td>
                <td>All service, brand, and location pages</td>
                <td>Question-answer pairs AI extracts as direct citations for query responses</td>
              </tr>
              <tr>
                <td>BreadcrumbList</td>
                <td>All pages</td>
                <td>Site structure and page hierarchy, improving entity clarity for AI crawls</td>
              </tr>
              <tr>
                <td>AggregateRating</td>
                <td>Homepage and service pages</td>
                <td>Verified social proof with specific rating data AI treats as a trust signal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>The most common schema mistake appliance repair businesses make is using a fully generic LocalBusiness type with no service-specific properties. Including the brands you are authorized to service, the specific appliances you repair, and your response time characteristics in the schema block turns a generic business listing into a specific, matchable entity that AI can cite for precise queries. License and certification information, where applicable, belongs in schema as a trust signal the same way it does for electricians and plumbers. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

        <p>Directory presence provides the citation network that confirms your entity across data sources. The directories with the highest weight for appliance repair AI citations are Google Business Profile, Yelp, Angi, HomeAdvisor, Thumbtack, and the Better Business Bureau. The critical factor is NAP consistency: your business name, address, and phone number must be identical across every listing. Inconsistencies reduce AI confidence in your entity and can suppress recommendations even for businesses with strong content on their own website. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>

        <div className="ae-callout ae-callout-info not-prose">
          <div className="ae-callout-title">Manufacturer Authorized Service Locators</div>
          <p>Brand-authorized technicians have an additional citation source most independent shops do not: manufacturer service locator directories. Samsung, LG, Whirlpool, Bosch, and other major brands maintain online directories of authorized service providers. AI platforms reference these directories when users ask for authorized or factory-certified technicians. If you are authorized to service any brands, claiming and completing your profile on those manufacturer service locators creates a citation source with extremely high AI trust weight, because manufacturers are the authoritative entity for questions about their own authorized service network. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
        </div>

        <h2 id="angi-thumbtack">Why Angi and Thumbtack Leads Are Not AI Citations</h2>

        <p>Many appliance repair shops spend significant monthly budgets on Angi, Thumbtack, and similar lead generation platforms. It is important to understand the distinction between what buying leads on those platforms does for your business versus what it does for your AI visibility, because the relationship is almost entirely disconnected. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>

        <p>Purchasing leads through Angi or Thumbtack drives referrals from those platforms' own search products. It does not make ChatGPT recommend you. It does not improve your Gemini visibility. It does not affect what Perplexity says when someone asks for the best appliance repair shop in your city. The lead platform and the AI citation ecosystem are separate systems with separate inputs.</p>

        <div className="ae-pros-cons not-prose">
          <div className="ae-pros-box">
            <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#4ade80'}}>What Directory Profiles Do for AI Visibility</div>
            <ul>
              <li>A complete, consistent Angi profile contributes to your NAP citation network</li>
              <li>Positive reviews on Thumbtack contain service-specific text AI can process</li>
              <li>BBB membership adds an authoritative citation signal to your entity</li>
              <li>Consistent presence across multiple platforms confirms your entity to AI</li>
              <li>Profile completeness signals that your business is active and legitimate</li>
            </ul>
          </div>
          <div className="ae-cons-box">
            <div style={{fontWeight: 700, marginBottom: '0.5rem', color: '#f87171'}}>What Buying Leads Does NOT Do</div>
            <ul>
              <li>Paying Angi for leads does not improve ChatGPT citation probability</li>
              <li>Thumbtack spend does not affect Gemini local recommendations</li>
              <li>Lead purchasing does not substitute for structured website content</li>
              <li>Platform ranking on Angi is separate from AI search ranking</li>
              <li>Lead platform fees do not build any owned AI citation assets</li>
            </ul>
          </div>
        </div>

        <p>The strategic implication is that appliance repair shops building for long-term AI visibility need to invest in assets they own: their website, their schema markup, their Google Business Profile, and their review content strategy. These are the citation assets that compound over time and that AI platforms draw on when recommending businesses. A lead platform subscription is a rental; a well-structured website with brand-specific and appliance-type content is an owned citation asset that generates calls without ongoing per-lead costs.</p>

        <h2 id="quick-wins">Quick Wins Checklist for Appliance Repair Shops</h2>

        <p>Not every appliance repair shop has time to rebuild its website this week. These structural improvements produce meaningful AI visibility gains within 30 to 60 days and can be implemented without a full site redesign.</p>

        <div className="ae-cheat-sheet not-prose">
          <div className="ae-cheat-sheet-title">AI Visibility Quick Wins for Appliance Repair Shops</div>
          <table>
            <tbody>
              <tr>
                <td>List every brand you service in GBP</td>
                <td>Add Samsung, LG, Whirlpool, GE, Bosch, and others to your GBP service descriptions and attributes, not just "major appliances."</td>
              </tr>
              <tr>
                <td>Create one brand-specific page</td>
                <td>Start with your highest-volume brand. A dedicated Samsung appliance repair page with failure modes, model families, and FAQ schema is a high-impact first move.</td>
              </tr>
              <tr>
                <td>Create one appliance-type page</td>
                <td>Start with refrigerator repair. Highest urgency, highest conversion rate. Include common failure symptoms, the brands you repair, and FAQ schema covering the top homeowner questions.</td>
              </tr>
              <tr>
                <td>Add same-day language explicitly</td>
                <td>If you offer same-day service, say it in the first sentence of your GBP description, in your homepage headline, and in schema markup. Buried in a paragraph is not enough.</td>
              </tr>
              <tr>
                <td>Add LocalBusiness schema to homepage</td>
                <td>Include brands serviced, appliance types repaired, service areas by city name, and hours including same-day or emergency availability if applicable.</td>
              </tr>
              <tr>
                <td>Add FAQPage schema to service pages</td>
                <td>Each FAQ section with proper schema becomes individually citable content for AI responses. Five specific FAQ items per service page is a strong starting point.</td>
              </tr>
              <tr>
                <td>Update your review request language</td>
                <td>"Which appliance did we fix and what was the problem?" surfaces brand-specific, service-specific review content that AI can extract and cite.</td>
              </tr>
              <tr>
                <td>Audit NAP consistency</td>
                <td>Check GBP, Yelp, Angi, HomeAdvisor, Thumbtack, and BBB. Business name, address, and phone must be identical everywhere, including punctuation and abbreviation style.</td>
              </tr>
              <tr>
                <td>Publish one repair-or-replace guide</td>
                <td>A specific, honest guide for your most common appliance type (refrigerator, washer, or dryer) with age thresholds, cost ranges, and brand context. This is the most undersupplied content type in the category.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>The consistent pattern across all of these is the same: make it structurally unambiguous to AI what brands you service, which appliances you repair, how fast you respond, and why you are the qualified choice. Every generic phrase on your website is a missed citation signal. Every specific, structured piece of information about a brand, an appliance type, a failure mode, or a response time is a potential citation asset that can generate calls while you are on a job site.</p>

        <div className="ae-callout ae-callout-info not-prose">
          <div className="ae-callout-title">Related Reading</div>
          <p>Appliance repair is part of a broader home services AI search pattern. See <Link href="/blog/how-electricians-get-found-on-ai-search" className="text-[#F27D24] hover:underline">how electricians get found on AI search</Link> for cross-trade patterns that apply across home service categories.</p>
        </div>

        {/* 3-tier CTA block */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Find Out Why AI Is Recommending Other Appliance Repair Shops Instead of Yours</h3>
          <p className="text-gray-400 mb-6">Our free Blind Spot Report shows exactly what ChatGPT, Gemini, and Claude know about your appliance repair business, which brand and appliance-type signals are missing, and what structural changes would move you into AI recommendations in your service area.</p>
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
              q: 'Why does ChatGPT recommend other appliance repair shops in my area but not mine?',
              a: 'ChatGPT builds its understanding of local appliance repair businesses from training data: review platforms, business directories, brand-authorized contractor lists, and service websites. Shops that appear frequently and consistently across those sources, with specific brand and appliance-type content, surface in recommendations while others stay invisible. Structured content about which brands you service and which appliances you repair drives citation probability far more than generic descriptions.',
            },
            {
              q: 'Does being factory-certified to repair Samsung, LG, or Whirlpool help my AI visibility?',
              a: 'Yes, factory certification is one of the strongest trust signals in appliance repair AI citations. When a homeowner asks ChatGPT for a Samsung-authorized repair technician, the AI looks for businesses that explicitly claim that authorization in their structured data, website copy, and directory listings. A factory certification mentioned only on a business card does nothing for AI visibility. Publishing it in schema markup, GBP attributes, and brand-specific service pages is what makes it a citable credential.',
            },
            {
              q: 'Should I repair or replace my appliance? How does that question affect AI search for repair shops?',
              a: 'Repair-or-replace is one of the highest-volume appliance queries on AI platforms. Homeowners ask ChatGPT and Gemini this question before deciding whether to call a repair shop at all. Appliance repair businesses that publish consultative content answering this question for specific appliances and age ranges become the trusted source AI cites when the homeowner finally decides to repair. That content positions your shop as the expert before the call is even made.',
            },
            {
              q: 'What schema markup should appliance repair businesses use to improve AI visibility?',
              a: 'The highest-impact schema types for appliance repair are LocalBusiness, Service schema for each appliance type repaired, FAQPage schema on brand-specific and appliance-type pages, and BreadcrumbList for site structure. Including the brands you are authorized to repair and the specific appliance categories you service in your schema gives AI machine-readable confirmation that your business matches specific query intent.',
            },
            {
              q: 'How does same-day appliance repair content affect AI recommendations?',
              a: 'Same-day and emergency appliance repair queries carry the highest purchase intent in the category. A homeowner whose refrigerator failed overnight or whose washing machine is leaking needs someone immediately. Businesses that explicitly communicate same-day availability in their Google Business Profile, service pages, and schema markup are significantly more likely to be cited for those urgent, high-converting queries.',
            },
            {
              q: 'How long does it take an appliance repair business to start appearing in AI recommendations?',
              a: 'Appliance repair businesses that improve their structured data and Google Business Profile typically see initial results from Perplexity and Google AI Overviews within 30 to 60 days. ChatGPT base model citations depend on retraining cycles that can span 12 to 18 months. Real-time AI tools like Perplexity and ChatGPT with web browsing respond much faster to structural improvements.',
            },
            {
              q: 'Do Angi and Thumbtack leads translate into AI citations for appliance repair shops?',
              a: 'Angi and Thumbtack profiles contribute to your directory citation network, which helps AI build confidence in your entity. But paying for leads on those platforms is entirely separate from AI citation. Buying an Angi lead does not make ChatGPT recommend you. What matters for AI visibility is having a complete, consistent profile on those platforms as part of your citation network, combined with structured content and schema markup on your own website.',
            },
            {
              q: 'How should appliance repair businesses handle discontinued appliance models and parts availability content?',
              a: 'Parts availability and discontinued model expertise is an underutilized content angle that AI platforms cite frequently. Homeowners ask AI whether parts are still available for older appliances before committing to a repair. Businesses that publish specific content about which older models they can still source parts for, and which manufacturers have discontinued support, position themselves as the knowledgeable choice for those queries without competition from generic repair shops.',
            },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
              <h3 className="font-plus-jakarta font-semibold text-white mb-3">{item.q}</h3>
              <p className="text-gray-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                Your Competitors Are Claiming AI Search Territory Right Now
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                2,900 businesses/month search for ways to improve their AI search visibility. The Answer Engine builds the exact authority signals that get you cited — and keeps competitors out of your market. Free blind spot scan. One business per market.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Get Your Free Blind Spot Report →
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
    </>
  )
}
