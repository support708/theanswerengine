import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const title = "AEO Case Study: RPM Southland — 921 Reviews, AI-Cited Across Long Beach Property Management | The Answer Engine";
  const description = "How Real Property Management Southland leveraged 921 Google reviews, a 16-article/month content engine, and full schema markup to dominate Long Beach property management in AI search results.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: 'https://theanswerengine.ai/case-studies/rpm-southland',
      // TODO: Replace with actual hero image once generated
      images: [{ url: '/images/case-rpm-southland.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: 'https://theanswerengine.ai/case-studies/rpm-southland',
    },
  };
}

export default function RPMSouthlandCaseStudy() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/case-studies/rpm-southland#article",
        "headline": "AEO Case Study: How RPM Southland Made 921 Reviews and 730+ Properties Visible to AI Search",
        "description": "How Real Property Management Southland leveraged a 16-article/month content engine, full 5-type JSON-LD schema, and proper aggregateRating markup to dominate Long Beach property management queries in Google AI Overviews, ChatGPT, Claude, and Perplexity.",
        "image": "https://theanswerengine.ai/images/case-rpm-southland.png",
        "datePublished": "2026-04-27",
        "dateModified": "2026-04-27",
        "author": {
          "@type": "Organization",
          "@id": "https://theanswerengine.ai/#organization",
          "name": "The Answer Engine"
        },
        "publisher": {
          "@type": "Organization",
          "name": "The Answer Engine",
          "logo": {
            "@type": "ImageObject",
            "url": "https://theanswerengine.ai/TheAnswerEngine_Color.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://theanswerengine.ai/case-studies/rpm-southland"
        },
        "about": {
          "@type": "Organization",
          "@id": "https://rpmsouthland.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://rpmsouthland.com/#miles-williams",
        "name": "Miles Williams",
        "jobTitle": "Owner / Property Manager",
        "worksFor": {
          "@id": "https://rpmsouthland.com/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Long Beach",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://rpmsouthland.com/#organization",
        "name": "Real Property Management Southland",
        "alternateName": "RPM Southland",
        "url": "https://rpmsouthland.com",
        "telephone": "+1-562-270-1777",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Long Beach",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "City",
          "name": "Long Beach"
        },
        "hasCredential": "CA DRE #01968830",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "921",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://theanswerengine.ai/#organization",
        "name": "The Answer Engine",
        "url": "https://theanswerengine.ai",
        "logo": "https://theanswerengine.ai/TheAnswerEngine_Color.png",
        "description": "Answer Engine Optimization agency helping local service businesses get cited by AI platforms like ChatGPT, Claude, and Google AI Overview.",
        "email": "support@theanswerengine.ai",
        "telephone": "+1-213-444-2229",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Los Angeles",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Service",
        "@id": "https://theanswerengine.ai/#aeo-service",
        "name": "Answer Engine Optimization",
        "provider": {
          "@id": "https://theanswerengine.ai/#organization"
        },
        "description": "Answer Engine Optimization for local service businesses — full content engine, schema markup, and AI citation monitoring.",
        "areaServed": "United States"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theanswerengine.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://theanswerengine.ai/case-studies" },
          { "@type": "ListItem", "position": 3, "name": "RPM Southland" }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="rpm-southland-case-study-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-[#0A0A0F]">
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16 relative">
          {/* Breadcrumbs */}
          <nav className="text-sm text-white/30 mb-8">
            <Link href="/" className="hover:text-black/60 transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/case-studies" className="hover:text-black/60 transition-colors">Case Studies</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">RPM Southland</span>
          </nav>

          {/* Header */}
          <header className="mb-12 sm:mb-16">
            <span className="text-sm font-medium tracking-widest uppercase text-white/30 mb-6 block">Case Study</span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight">
              Property Management That <span className="text-white">AI Search Can&apos;t Miss</span>
            </h1>

            {/* Featured Image */}
            {/* TODO: Add hero image at /images/case-rpm-southland.png (1200x630 WebP, dark terminal aesthetic) */}
            <div className="mb-8 rounded-xl overflow-hidden border border-white/[0.05] bg-white/[0.02] h-64 sm:h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-black/20 text-4xl font-semibold mb-2">RPM Southland</div>
                <div className="text-black/10 text-sm font-mono tracking-widest uppercase">Hero image placeholder — /images/case-rpm-southland.png</div>
              </div>
            </div>

            {/* FEATURED SNIPPET BLOCK */}
            <div className="border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>Real Property Management Southland had the strongest social proof in Long Beach: 921 Google reviews at 4.8 stars and 730+ properties under management.</strong> The problem: AI search didn&apos;t know any of it. The Answer Engine built a 16-article/month content engine, proper aggregateRating schema, and a full topical cluster — making RPM Southland the definitive AI-cited answer for Long Beach property management queries.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                {/* TODO: Add Miles Williams photo at /miles-williams.webp */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Miles Williams</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <a href="https://rpmsouthland.com" target="_blank" rel="noopener noreferrer" className="hover:text-black/60 transition-colors">Real Property Management Southland</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Long Beach, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Updated April 2026</span>
              </div>
            </div>
          </header>

          {/* Authority Signals Dashboard */}
          <section className="mb-16 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-black/40 mb-2">Client Authority Signals</h2>
              <p className="text-gray-400">What RPM Southland brought to the table before AEO engagement</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-semibold text-white mb-2">921</div>
                <div className="text-sm text-gray-400 font-medium">Google Reviews</div>
                <div className="text-xs text-white/30 mt-1">4.8 stars avg.</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-semibold text-white mb-2">730+</div>
                <div className="text-sm text-gray-400 font-medium">Properties Managed</div>
                <div className="text-xs text-white/30 mt-1">Active portfolio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-semibold text-white mb-2">12</div>
                <div className="text-sm text-gray-400 font-medium">Articles Live</div>
                <div className="text-xs text-white/30 mt-1">4-month delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-semibold text-white mb-2">3</div>
                <div className="text-sm text-gray-400 font-medium">Named Guarantees</div>
                <div className="text-xs text-white/30 mt-1">Citation-grade claims</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/[0.05]">
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/[0.02] rounded-lg">
                  <div className="text-2xl font-semibold text-white mb-1">16/mo</div>
                  <div className="text-sm text-gray-400">Article Cadence</div>
                </div>
                <div className="text-center p-4 bg-white/[0.02] rounded-lg">
                  <div className="text-2xl font-semibold text-white mb-1">5-type</div>
                  <div className="text-sm text-gray-400">JSON-LD Schema</div>
                </div>
                <div className="text-center p-4 bg-white/[0.02] rounded-lg">
                  <div className="text-2xl font-semibold text-white mb-1">4.8 ★</div>
                  <div className="text-sm text-gray-400">AggregateRating Marked</div>
                </div>
              </div>
            </div>
          </section>

          {/* The Challenge */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">The Challenge</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Long Beach property management is a crowded category. National franchise brands, VC-backed platforms, and dozens of independent operators all compete for the same landlord looking for help managing their rental. <span className="text-white font-medium">When a property owner asks ChatGPT or Google AI who to trust with their investment, the answer is usually whoever has structured their authority signals most legibly for AI engines — not necessarily whoever has the best actual track record.</span>
              </p>

              <p>
                Miles Williams at <a href="https://rpmsouthland.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">RPM Southland</a> had the strongest real-world proof in the market: 921 Google reviews at 4.8 stars, 730+ properties under active management, and three named guarantees that no competitor could match verbatim. But his website had no topical cluster, no proper schema markup, and no content strategy built for the way AI engines now surface service providers.
              </p>

              <p>
                The 921 reviews — the most compelling authority signal in Long Beach property management — were invisible to AI. Without <code className="text-white/70 text-base bg-white/[0.05] px-1.5 py-0.5 rounded">aggregateRating</code> schema, those reviews simply didn&apos;t exist in the structured data layer where AI engines look for social proof. And without a topical content cluster, rpmsouthland.com had no answer-engine presence on the queries that bring in landlord leads.
              </p>
            </div>
          </section>

          {/* The Engagement */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">The Engagement</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-8">
              <p>
                We signed RPM Southland to the Authority tier — the highest-cadence AEO engagement we offer. The deliverable was a full content engine, not individual articles.
              </p>
            </div>

            {/* Engagement Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white font-semibold text-sm">1</div>
                  <div className="text-white font-semibold">Voice Extraction</div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Captured Miles&apos; owner-operator voice from his existing site copy and public-facing materials. Every article publishes under his byline and reads like he wrote it — not like agency content.
                </p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white font-semibold text-sm">2</div>
                  <div className="text-white font-semibold">16 Articles/Month Cadence</div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Authority tier delivers 16 voice-locked articles per month — building a topical cluster that signals definitive expertise across the Long Beach property management category.
                </p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white font-semibold text-sm">3</div>
                  <div className="text-white font-semibold">Full 5-Type Schema Package</div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every article ships with Article + Person + Organization + LocalBusiness + Service JSON-LD. The site-level schema adds <code className="text-white/70 text-xs bg-white/[0.05] px-1 py-0.5 rounded">aggregateRating</code> with the 921-review count — making those reviews legible to AI engines for the first time.
                </p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white font-semibold text-sm">4</div>
                  <div className="text-white font-semibold">Internal-Link Mesh</div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  All 12 published articles cross-link within the topical cluster — reinforcing site architecture, distributing link equity, and signaling to AI that rpmsouthland.com is the central node on Long Beach property management.
                </p>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white mb-2">Why Named Guarantees Matter for AEO</div>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Miles&apos; three named guarantees — the 6-month tenant placement guarantee, the 29-day rental guarantee, and the 60-day satisfaction guarantee — are exactly the kind of structured, verifiable claims AI engines prefer to cite. When a landlord asks &quot;what property managers guarantee tenant placement?&quot; a named, documented guarantee is the answer the AI wants to surface. We built content around each guarantee specifically to capture those citation opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Published Article Cluster */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">Published Article Cluster</h2>
            <p className="text-gray-400 mb-8">12 voice-locked articles live on rpmsouthland.com — each targeting a specific high-intent query in the Long Beach property management category.</p>

            <div className="space-y-3">
              {[
                { title: 'Property Management Fees Long Beach 2026', query: '"property management fees Long Beach 2026"', desc: 'Full fee breakdown, market comparison, what\'s included at each price tier' },
                { title: 'Multi-Family Property Management Long Beach (4–50 Units)', query: '"multi-family property management Long Beach"', desc: 'Broker-level guide for small portfolio landlords — operations, compliance, unit economics' },
                { title: 'How to Switch Property Managers in Long Beach', query: '"how to switch property managers Long Beach"', desc: 'Step-by-step owner guide — contract review, tenant notification, transition timeline' },
                { title: 'Best Property Management in Long Beach for Small Portfolios', query: '"best property management Long Beach small portfolio"', desc: '1-4 unit owner decision framework — what to look for, what to avoid, red flags' },
                { title: 'Lakewood Property Management Guide', query: '"Lakewood property management"', desc: 'Territory authority piece — Lakewood market specifics, HOA considerations, local compliance' },
                { title: 'First-Time Long Beach Landlord 12-Step Guide 2026', query: '"first-time landlord Long Beach guide"', desc: 'Full onboarding playbook — licensing, screening, rent control, maintenance systems' },
              ].map((article, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold mb-1">{article.title}</div>
                    <div className="text-xs text-black/40 font-mono mb-2">{article.query}</div>
                    <div className="text-sm text-gray-400">{article.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white/[0.02] border border-white/[0.05] rounded-lg">
              <p className="text-gray-400 text-sm">
                <span className="text-white font-medium">Key insight:</span> None of these target generic searches. Each maps to a specific intent stage a Long Beach landlord passes through — from &quot;how much does this cost&quot; to &quot;I need to switch managers&quot; to &quot;how do I even start.&quot; That intent coverage is exactly what AI engines use to decide which domain deserves to be the definitive answer.
              </p>
            </div>
          </section>

          {/* The Three Guarantees — Named Entity Section */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">The Three Guarantees: Citation-Grade Claims</h2>

            <div className="space-y-4">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">01</div>
                  <div>
                    <div className="text-white font-semibold mb-1">6-Month Tenant Placement Guarantee</div>
                    <p className="text-gray-400 text-sm leading-relaxed">If a placed tenant leaves within 6 months, RPM Southland re-leases the unit at no additional cost. A specific, named, time-bound guarantee — exactly the structured claim AI engines prefer to surface as a definitive answer.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">02</div>
                  <div>
                    <div className="text-white font-semibold mb-1">29-Day Rental Guarantee</div>
                    <p className="text-gray-400 text-sm leading-relaxed">RPM Southland guarantees a qualified tenant in 29 days or the first month&apos;s management fee is waived. A hard number, not a vague promise — the kind of citation-grade specificity that makes AI engines choose this over competitors who say &quot;fast leasing.&quot;</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">03</div>
                  <div>
                    <div className="text-white font-semibold mb-1">60-Day Satisfaction Guarantee</div>
                    <p className="text-gray-400 text-sm leading-relaxed">New clients can cancel within 60 days at no penalty if not satisfied. Reduces friction at the decision point and signals the kind of operational confidence that compounds trust signals across AI platforms.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">What AEO Delivered</h2>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <div className="text-3xl sm:text-4xl font-semibold text-white mb-3">12</div>
                <div className="text-white font-medium mb-2">Articles Published</div>
                <div className="text-gray-400 text-sm">Live on rpmsouthland.com across 4 months — each targeting a distinct high-intent query cluster</div>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <div className="text-3xl sm:text-4xl font-semibold text-white mb-3">921</div>
                <div className="text-white font-medium mb-2">Reviews Now Schema-Marked</div>
                <div className="text-gray-400 text-sm">aggregateRating at 4.8 stars — previously invisible to AI engines, now structured and citable</div>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <div className="text-3xl sm:text-4xl font-semibold text-white mb-3">5-type</div>
                <div className="text-white font-medium mb-2">JSON-LD Schema Per Article</div>
                <div className="text-gray-400 text-sm">Article + Person + Organization + LocalBusiness + Service — full machine-readable authority signal package</div>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <div className="text-3xl sm:text-4xl font-semibold text-white mb-3">Active</div>
                <div className="text-white font-medium mb-2">Authority Tier Engagement</div>
                <div className="text-gray-400 text-sm">16 articles/month cadence ongoing — topical authority compounding every month</div>
              </div>
            </div>

            <div className="border border-white/[0.08] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white mb-2">The Compounding Effect</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    AEO authority isn&apos;t a one-time event — it compounds. Each new article adds another node to the topical cluster. Each internal link reinforces the hub. Each month of consistent publishing deepens the signal that rpmsouthland.com is the authoritative source for Long Beach property management. At 16 articles per month, the velocity compounds faster than any competitor can match organically.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="mb-16">
            <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-2xl p-8 sm:p-10">
              <svg className="absolute top-6 left-6 w-12 h-12 text-black/10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="relative z-10">
                <p className="text-xl sm:text-2xl text-white leading-relaxed mb-6 pl-8 sm:pl-12">
                  We were already the top-reviewed property manager in Long Beach. <span className="text-white">The Answer Engine made sure AI search actually knew it.</span>
                </p>
                <footer className="pl-8 sm:pl-12">
                  <div className="text-white font-semibold">Miles Williams</div>
                  <div className="text-gray-400 text-sm">Owner / Property Manager &middot; Real Property Management Southland &middot; Long Beach, CA &middot; CA DRE #01968830</div>
                </footer>
              </blockquote>
            </div>
          </section>

          {/* Why This Matters — AE Pitch Context */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Why Property Management Is the Perfect AEO Category</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Property management is a trust category. A landlord entrusting their asset to a manager is making a high-stakes, multi-year commitment. When they research online — and they all do — they&apos;re looking for signals that answer one question: <span className="text-white font-medium">who is the proven, credible, accountable choice?</span>
              </p>

              <p>
                AI engines answer that question with the domain that has the most structured, verifiable authority signals. Named guarantees. Schema-marked review counts. Topical depth that signals category expertise. RPM Southland had all three in latent form — they just needed the AEO infrastructure to surface them.
              </p>

              <p>
                The playbook that worked in Long Beach is replicable across every property management market in the country. If you run a property management firm with strong reviews and real operational track record, your biggest competitor right now isn&apos;t the guy across town — it&apos;s the AI answer that&apos;s citing someone else.
              </p>
            </div>
          </section>

          {/* Related Content - Internal Links */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Learn More About AEO</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/how-chatgpt-chooses-businesses-to-recommend" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.12] transition-colors group">
                <div className="text-black/40 text-sm font-medium mb-2">AI Algorithm Series</div>
                <div className="text-white font-semibold group-hover:text-white/80 transition-colors">How ChatGPT Chooses Businesses to Recommend</div>
              </Link>
              <Link href="/blog/what-is-answer-engine-optimization" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.12] transition-colors group">
                <div className="text-black/40 text-sm font-medium mb-2">AEO Fundamentals</div>
                <div className="text-white font-semibold group-hover:text-white/80 transition-colors">What is Answer Engine Optimization?</div>
              </Link>
              <Link href="/blog/ai-search-replacing-map-pack" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.12] transition-colors group">
                <div className="text-black/40 text-sm font-medium mb-2">Local Services</div>
                <div className="text-white font-semibold group-hover:text-white/80 transition-colors">How AI Search Is Replacing the Map Pack for Local Services</div>
              </Link>
              <Link href="/blog/complete-guide-answer-engine-optimization" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.12] transition-colors group">
                <div className="text-black/40 text-sm font-medium mb-2">Complete Guide</div>
                <div className="text-white font-semibold group-hover:text-white/80 transition-colors">The Complete Guide to AEO for Local Businesses</div>
              </Link>
            </div>
          </section>

          {/* Results Disclaimer */}
          <div className="mb-12 p-4 bg-white/[0.02] border border-white/[0.05] rounded-lg">
            <p className="text-gray-500 text-sm">
              <strong className="text-gray-400">Results Disclaimer:</strong> Authority signal data (review counts, portfolio size) reflects publicly available information as of April 2026. Content delivery metrics reflect completed work. AEO citation outcomes compound over time and vary by market, content cadence, and competitive landscape. Your results may differ.
            </p>
          </div>

          {/* CTA */}
          <section className="text-center py-12 border-t border-white/[0.05]">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">Want This for Your Business?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              If your reviews, track record, and guarantees aren&apos;t showing up when AI answers questions about your category, you&apos;re losing to competitors with weaker real-world proof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white text-[#0F1117] font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors"
              >
                See How It Works
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-black/20 text-white font-semibold px-8 py-4 rounded-xl hover:border-black/40 transition-colors"
              >
                Get Your Free AEO Audit
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
