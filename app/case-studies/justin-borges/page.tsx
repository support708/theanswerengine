import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const title = "AEO Case Study: 4,100+ Monthly Clicks in LA Real Estate | The Answer Engine";
  const description = "How a Los Angeles real estate team achieved 4,100+ monthly clicks, 606K+ impressions, and 100% AI citation rates through Answer Engine Optimization. Verified GSC results.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: 'https://theanswerengine.ai/case-studies/justin-borges',
      images: [{ url: '/images/aeo-case-study-la-real-estate-4128-clicks.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: 'https://theanswerengine.ai/case-studies/justin-borges',
    },
  };
}

export default function JustinBorgesCaseStudy() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/case-studies/justin-borges#article",
        "headline": "AEO Case Study: 4,100+ Monthly Clicks in America's Most Competitive Real Estate Market",
        "description": "How a Los Angeles real estate team achieved 4,100+ monthly clicks, 606K+ impressions, and 100% AI citation rates through Answer Engine Optimization.",
        "image": "https://theanswerengine.ai/images/aeo-case-study-la-real-estate-4128-clicks.png",
        "datePublished": "2025-11-15",
        "dateModified": "2025-12-16",
        "author": {
          "@type": "Person",
          "name": "JB",
          "url": "https://theanswerengine.ai/about"
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
          "@id": "https://theanswerengine.ai/case-studies/justin-borges"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://theanswerengine.ai/case-studies/justin-borges#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What results can Answer Engine Optimization achieve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Results vary by market and competition. In this case study, a Los Angeles real estate team achieved 4,128 monthly clicks, 606,000+ monthly impressions, and 100% AI citation rates for their target expertise queries over a 4-month period."
            }
          },
          {
            "@type": "Question",
            "name": "How long does AEO take to show results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial rankings typically appear within 30-60 days. Significant traffic growth usually occurs between months 2-4. This case study achieved dominant market position within 4 months of implementation."
            }
          },
          {
            "@type": "Question",
            "name": "How does AEO differ from traditional SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional SEO focuses on ranking in search results. Answer Engine Optimization focuses on becoming the source AI platforms cite when answering questions. This requires expertise-focused content, proper schema markup, and authority signals that AI systems can verify."
            }
          },
          {
            "@type": "Question",
            "name": "Can AEO work in competitive markets like Los Angeles real estate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The key is identifying specific expertise areas where you have genuine authority rather than competing for generic searches. This case study succeeded in a market with 70,000+ competing agents by focusing on specialized transaction types competitors couldn't match."
            }
          },
          {
            "@type": "Question",
            "name": "What does 100% AI citation rate mean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI citation rate measures how often AI platforms (ChatGPT, Claude, Perplexity, Google AI Overview) cite your business when answering relevant queries. 100% means the client is cited every time for their target expertise queries—the queries where they have genuine authority."
            }
          },
          {
            "@type": "Question",
            "name": "Are these results verified?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All traffic and impression data comes directly from Google Search Console. AI citation rates are tested manually across multiple platforms using target expertise queries."
            }
          }
        ]
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
        },
        "sameAs": [
          "https://www.linkedin.com/company/the-answer-engine"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "1",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://theanswerengine.ai/#localbusiness",
        "name": "The Answer Engine",
        "description": "Answer Engine Optimization agency for local service businesses",
        "url": "https://theanswerengine.ai",
        "telephone": "+1-213-444-2229",
        "email": "support@theanswerengine.ai",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Los Angeles",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "priceRange": "$",
        "openingHours": "Mo-Fr 09:00-18:00"
      },
      {
        "@type": "Service",
        "@id": "https://theanswerengine.ai/#aeo-service",
        "name": "Answer Engine Optimization",
        "provider": {
          "@id": "https://theanswerengine.ai/#organization"
        },
        "description": "Answer Engine Optimization service for local service businesses to achieve AI citations from ChatGPT, Claude, Perplexity, and Google AI Overview.",
        "areaServed": "United States"
      },
      {
        "@type": "Review",
        "@id": "https://theanswerengine.ai/case-studies/justin-borges#review",
        "author": {
          "@type": "Person",
          "name": "Justin Borges",
          "jobTitle": "Founder & Lead Listing Strategist",
          "worksFor": {
            "@type": "RealEstateAgent",
            "name": "The Borges Real Estate Team"
          }
        },
        "itemReviewed": {
          "@id": "https://theanswerengine.ai/#aeo-service"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "The leads that come in now are completely different. They've already read my content, they trust my expertise, and they're ready to work with me specifically."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theanswerengine.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://theanswerengine.ai/case-studies" },
          { "@type": "ListItem", "position": 3, "name": "Justin Borges" }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="case-study-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-[#0A0A0F]">
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16 relative">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#f27d24] transition-colors">Home</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/case-studies" className="hover:text-[#f27d24] transition-colors">Case Studies</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-gray-400">Justin Borges</span>
          </nav>

          {/* Header */}
          <header className="mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-[#f27d24]/10 border border-[#f27d24]/20">
              <div className="w-2 h-2 bg-[#f27d24] rounded-full" />
              <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">Case Study</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight">
              4,100+ Monthly Clicks in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f]">America&apos;s Most Competitive Market</span>
            </h1>

            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden border border-white/[0.05]">
              <img
                src="/images/aeo-case-study-la-real-estate-4128-clicks.png"
                alt="AEO Case Study: 4,128 monthly clicks achieved through Answer Engine Optimization in Los Angeles real estate market"
                className="w-full"
              />
            </div>

            {/* FEATURED SNIPPET BLOCK */}
            <div className="bg-gradient-to-br from-[#f27d24]/5 to-[#d66d1f]/5 border border-[#f27d24]/20 rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>A Los Angeles real estate team achieved 4,128 monthly clicks and 100% AI citation rates through Answer Engine Optimization in 4 months.</strong> Starting from page 2+ invisibility in a market with 70,000 competing agents, they now dominate AI recommendations for their expertise areas—generating 606,000+ monthly impressions with zero ad spend.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Justin Borges</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>The Borges Real Estate Team</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Los Angeles, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>December 2025</span>
              </div>
            </div>
          </header>

          {/* Results Dashboard */}
          <section className="mb-16 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-[#f27d24] mb-2">Verified Results</h2>
              <p className="text-gray-400">Google Search Console - December 2025</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f] mb-2">4,128</div>
                <div className="text-sm text-gray-400 font-medium">Monthly Clicks</div>
                <div className="text-xs text-gray-500 mt-1">~147/day organic</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#362478] to-[#2a1a5f] mb-2">606K+</div>
                <div className="text-sm text-gray-400 font-medium">Monthly Impressions</div>
                <div className="text-xs text-gray-500 mt-1">21,700/day average</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f] mb-2">1,000+</div>
                <div className="text-sm text-gray-400 font-medium">Search Queries</div>
                <div className="text-xs text-gray-500 mt-1">High-intent local searches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#362478] to-[#2a1a5f] mb-2">100%</div>
                <div className="text-sm text-gray-400 font-medium">AI Citation Rate</div>
                <div className="text-xs text-gray-500 mt-1">For target queries</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/[0.05]">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/[0.02] rounded-lg">
                  <div className="text-2xl font-semibold text-white mb-1">$0</div>
                  <div className="text-sm text-gray-400">Ad Spend</div>
                </div>
                <div className="text-center p-4 bg-white/[0.02] rounded-lg">
                  <div className="text-2xl font-semibold text-white mb-1">648</div>
                  <div className="text-sm text-gray-400">Pages Indexed</div>
                </div>
              </div>
            </div>
          </section>

          {/* The Challenge */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">The Challenge</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                LA County real estate: <span className="text-white font-medium">70,000+ competing agents</span>. National brands with unlimited budgets. Zillow spending $2 billion annually on marketing.
              </p>

              <p>
                Justin Borges had 13+ years of experience, $200M+ in career sales, and genuine expertise in complex transactions most agents avoid. But online? Invisible.
              </p>

              <p>
                His website was buried on page 2+. Generic content written for search engines, not humans. No differentiation from thousands of competitors saying the exact same things.
              </p>
            </div>
          </section>

          {/* The Strategy */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">The Strategy</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Instead of competing for generic searches against Zillow&apos;s billions, we identified <span className="text-white font-medium">specific expertise areas where Justin had genuine authority</span>—complex transactions most agents avoid.
              </p>

              <p>
                We extracted 15 years of hard-won knowledge through our proprietary expertise capture process, then structured it into content AI platforms could recognize as authoritative.
              </p>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#f27d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-2">Why This Works</div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      AI platforms don&apos;t just cite whoever ranks highest. They look for content that demonstrates genuine expertise, answers specific questions completely, and comes from verifiable sources. Justin&apos;s real-world experience became his competitive advantage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Results */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">The Results</h2>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <div className="text-3xl sm:text-4xl font-semibold text-[#f27d24] mb-3">4,128</div>
                <div className="text-white font-medium mb-2">Monthly Clicks</div>
                <div className="text-gray-400 text-sm">~147 clicks per day, 100% organic</div>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <div className="text-3xl sm:text-4xl font-semibold text-[#362478] mb-3">606K+</div>
                <div className="text-white font-medium mb-2">Monthly Impressions</div>
                <div className="text-gray-400 text-sm">Dominating local search visibility</div>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <div className="text-3xl sm:text-4xl font-semibold text-[#f27d24] mb-3">100%</div>
                <div className="text-white font-medium mb-2">AI Citation Rate</div>
                <div className="text-gray-400 text-sm">For target expertise queries</div>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
                <div className="text-3xl sm:text-4xl font-semibold text-[#362478] mb-3">648</div>
                <div className="text-white font-medium mb-2">Pages Indexed</div>
                <div className="text-gray-400 text-sm">Content moat competitors can&apos;t replicate</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f27d24]/10 to-[#d66d1f]/10 border border-[#f27d24]/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#f27d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white mb-2">What These Numbers Mean</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Justin isn&apos;t competing for generic searches against Zillow&apos;s $2B marketing budget. He owns specific expertise areas where he has genuine authority—exactly where AI platforms look for sources to cite.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="mb-16">
            <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-2xl p-8 sm:p-10">
              <svg className="absolute top-6 left-6 w-12 h-12 text-[#f27d24]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="relative z-10">
                <p className="text-xl sm:text-2xl text-white leading-relaxed mb-6 pl-8 sm:pl-12">
                  The leads that come in now are completely different. <span className="text-[#f27d24]">They&apos;ve already read my content, they trust my expertise, and they&apos;re ready to work with me specifically.</span>
                </p>
                <footer className="pl-8 sm:pl-12">
                  <div className="text-white font-semibold">Justin Borges</div>
                  <div className="text-gray-400 text-sm">Founder, The Borges Real Estate Team</div>
                </footer>
              </blockquote>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-white">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What results can Answer Engine Optimization achieve?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Results vary by market and competition. In this case study, a Los Angeles real estate team achieved 4,128 monthly clicks, 606,000+ monthly impressions, and 100% AI citation rates for their target expertise queries over a 4-month period.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">How long does AEO take to show results?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Initial rankings typically appear within 30-60 days. Significant traffic growth usually occurs between months 2-4. This case study achieved dominant market position within 4 months of implementation.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">How does AEO differ from traditional SEO?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Traditional SEO focuses on ranking in search results. <Link href="/blog/what-is-answer-engine-optimization" className="text-[#f27d24] hover:underline">Answer Engine Optimization</Link> focuses on becoming the source AI platforms cite when answering questions. This requires expertise-focused content, proper schema markup, and authority signals that AI systems can verify.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Can AEO work in competitive markets?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. The key is identifying specific expertise areas where you have genuine authority rather than competing for generic searches. This case study succeeded in a market with 70,000+ competing agents by focusing on specialized transaction types competitors couldn&apos;t match.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What does 100% AI citation rate mean?</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI citation rate measures how often AI platforms (ChatGPT, Claude, Perplexity, Google AI Overview) cite your business when answering relevant queries. 100% means the client is cited every time for their target expertise queries—the specific questions where they have genuine authority.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Are these results verified?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. All traffic and impression data comes directly from Google Search Console. AI citation rates are tested manually across multiple platforms using target expertise queries. We follow a strict &quot;flag don&apos;t fabricate&quot; protocol—every claim is verified before publication.
                </p>
              </div>
            </div>
          </section>

          {/* Related Content - Internal Links */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Learn More About AEO</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/what-is-answer-engine-optimization" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-[#f27d24]/30 transition-colors group">
                <div className="text-[#f27d24] text-sm font-medium mb-2">AEO Fundamentals</div>
                <div className="text-white font-semibold group-hover:text-[#f27d24] transition-colors">What is Answer Engine Optimization?</div>
              </Link>
              <Link href="/blog/how-chatgpt-chooses-businesses-to-recommend" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-[#f27d24]/30 transition-colors group">
                <div className="text-[#f27d24] text-sm font-medium mb-2">AI Algorithm Series</div>
                <div className="text-white font-semibold group-hover:text-[#f27d24] transition-colors">How ChatGPT Chooses Businesses to Recommend</div>
              </Link>
              <Link href="/blog/complete-guide-answer-engine-optimization" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-[#f27d24]/30 transition-colors group">
                <div className="text-[#f27d24] text-sm font-medium mb-2">Complete Guide</div>
                <div className="text-white font-semibold group-hover:text-[#f27d24] transition-colors">The Complete Guide to AEO for Local Businesses</div>
              </Link>
              <Link href="/blog/answer-engine-solutions" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-[#f27d24]/30 transition-colors group">
                <div className="text-[#f27d24] text-sm font-medium mb-2">Solutions</div>
                <div className="text-white font-semibold group-hover:text-[#f27d24] transition-colors">Answer Engine Solutions for Local Businesses</div>
              </Link>
            </div>
          </section>

          {/* Results Disclaimer */}
          <div className="mb-12 p-4 bg-white/[0.02] border border-white/[0.05] rounded-lg">
            <p className="text-gray-500 text-sm">
              <strong className="text-gray-400">Results Disclaimer:</strong> Results vary based on market competition, existing content foundation, implementation timeline, and industry. This case study represents verified results for one client in the Los Angeles real estate market. Your results may differ.
            </p>
          </div>

          {/* CTA */}
          <section className="text-center py-12 border-t border-white/[0.05]">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">Ready to Become the Answer?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              See where you&apos;re losing to competitors in AI citations and discover the expertise areas you could own.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f27d24] to-[#d66d1f] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Get Your Free AEO Audit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}
