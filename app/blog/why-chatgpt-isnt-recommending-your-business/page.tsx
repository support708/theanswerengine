import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

// ISR Configuration
export const revalidate = 86400; // 24 hours
export const dynamic = 'force-static';
export const dynamicParams = true;

// Enhanced Metadata
export async function generateMetadata(): Promise<Metadata> {
  const lastUpdated = new Date().toISOString().split('T')[0];
  const publishDate = '2025-11-15';
  
  return {
    title: 'Why ChatGPT Isn\'t Recommending Your Business (And the 3-Step Fix) | The Answer Engine',
    description: 'ChatGPT ignores businesses with inconsistent NAP data, missing schema markup, and generic content. One team went from zero to 177K weekly impressions in 90 days.',
    
    openGraph: {
      title: 'Why ChatGPT Isn\'t Recommending Your Business (And the 3-Step Fix)',
      description: 'The 3 reasons AI platforms ignore local businesses and how to fix them in 6 weeks.',
      type: 'article',
      publishedTime: publishDate,
      modifiedTime: lastUpdated,
      authors: ['The Answer Engine Team'],
      url: 'https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business',
      images: [
        {
          url: 'https://theanswerengine.ai/images/chatgpt-business-recommendations.png',
          width: 1200,
          height: 630,
          alt: 'Why ChatGPT Isn\'t Recommending Your Business - The 3-Step Fix',
        }
      ],
      siteName: 'The Answer Engine',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: 'Why ChatGPT Isn\'t Recommending Your Business',
      description: 'The 3 reasons AI platforms ignore local businesses and how to fix them in 6 weeks.',
      images: ['https://theanswerengine.ai/images/chatgpt-business-recommendations.png'],
      creator: '@theanswerengine',
    },
    
    alternates: {
      canonical: 'https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business',
    },
    
    other: {
      'article:modified_time': lastUpdated,
      'article:published_time': publishDate,
      'article:author': 'The Answer Engine Team',
      'article:section': 'Answer Engine Optimization',
    },
    
    keywords: [
      'ChatGPT business recommendations',
      'ChatGPT citations',
      'AI platform optimization',
      'answer engine optimization',
      'ChatGPT visibility',
      'AI search optimization',
      'schema markup for AI',
    ],
  };
}

export default function WhyChatGPTIsntRecommending() {
  const publishDate = '2025-11-15';
  const lastUpdated = new Date().toISOString().split('T')[0];
  const articleUrl = 'https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business';
  
  return (
    <>
      {/* Enhanced Article Schema */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Why ChatGPT Isn't Recommending Your Business (And the 3-Step Fix That Works)",
            "description": "ChatGPT ignores businesses with inconsistent NAP data, missing schema markup, and generic content. One team went from zero to 177K weekly impressions in 90 days.",
            "image": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/images/chatgpt-business-recommendations.png",
              "width": 1200,
              "height": 630
            },
            "author": {
              "@type": "Organization",
              "name": "The Answer Engine Team",
              "url": "https://theanswerengine.ai",
              "description": "Specialized Answer Engine Optimization team with 2+ years experience, 500+ schema implementations, and 100+ featured snippet wins across multiple AI platforms."
            },
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "logo": {
                "@type": "ImageObject",
                "url": "https://theanswerengine.ai/TheAnswerEngine_white.png",
                "width": 600,
                "height": 60
              }
            },
            "datePublished": publishDate,
            "dateModified": lastUpdated,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": articleUrl
            },
            "articleSection": "Answer Engine Optimization",
            "keywords": ["ChatGPT business recommendations", "ChatGPT citations", "AI platform optimization", "answer engine optimization", "schema markup for AI"],
            "wordCount": 4500,
            "inLanguage": "en-US",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".article-intro"]
            }
          })
        }}
      />

      {/* Complete FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take to see results from AEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most businesses see initial featured snippet wins within 30-45 days and consistent AI citations within 90 days. The complete Answer Authority Foundation process takes 6 weeks to implement."
                }
              },
              {
                "@type": "Question",
                "name": "Can I do this myself instead of hiring The Answer Engine?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but it requires 80-120 hours of work across entity consistency audits, schema markup implementation, and content creation. The DIY opportunity cost ($7,500-11,500) typically exceeds our done-for-you price ($2,997)."
                }
              },
              {
                "@type": "Question",
                "name": "What makes your process different from other AEO agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We extract and document authentic expertise instead of fabricating case studies. Every claim is verified through our flag don't fabricate protocol."
                }
              },
              {
                "@type": "Question",
                "name": "What if ChatGPT doesn't cite my business after 90 days?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We track AI citations across ChatGPT, Claude, Perplexity, Google AI Overviews, and Gemini during the 90-day tracking period. Results vary by industry and implementation quality."
                }
              },
              {
                "@type": "Question",
                "name": "Which businesses benefit most from AEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Local service businesses with high-value transactions ($5,000+ average) and expertise-based services see the best ROI."
                }
              },
              {
                "@type": "Question",
                "name": "What platforms do you track besides ChatGPT?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We monitor AI citations across ChatGPT, Claude, Perplexity, Google AI Overviews, and Gemini during the 90-day tracking period."
                }
              },
              {
                "@type": "Question",
                "name": "Will this help with Google rankings too?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The schema markup, entity consistency, and authority content that help AI citations also improve traditional SEO performance and featured snippet wins."
                }
              },
              {
                "@type": "Question",
                "name": "How much does the Answer Authority Foundation cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "$2,997 one-time investment, including discovery consultation, 7 optimized articles, complete schema implementation, and 90-day monitoring."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer payment plans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We accept payment via Stripe or Zelle. Qualified businesses can request Net 30 terms."
                }
              },
              {
                "@type": "Question",
                "name": "What happens during the discovery process?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with you to document your expertise, client experiences, and unique methodologies. You provide the knowledge, we handle the content creation."
                }
              }
            ]
          })
        }}
      />

      {/* BreadcrumbList Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://theanswerengine.ai"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://theanswerengine.ai/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Why ChatGPT Isn't Recommending Your Business",
                "item": articleUrl
              }
            ]
          })
        }}
      />

      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Answer Engine",
            "url": "https://theanswerengine.ai",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_white.png",
            "description": "We specialize in Answer Engine Optimization (AEO) for local service businesses, positioning companies to be cited by Google AI Overviews, ChatGPT, Claude, and Perplexity.",
            "sameAs": [
              "https://www.linkedin.com/company/theanswerengine",
              "https://twitter.com/theanswerengine"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "url": "https://theanswerengine.ai/#contact"
            }
          })
        }}
      />

      {/* WebPage Schema */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Why ChatGPT Isn't Recommending Your Business (And the 3-Step Fix) | The Answer Engine",
            "description": "ChatGPT ignores businesses with inconsistent NAP data, missing schema markup, and generic content. One team went from zero to 177K weekly impressions in 90 days.",
            "url": articleUrl,
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "about": {
              "@type": "Thing",
              "name": "ChatGPT Business Citations"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://theanswerengine.ai/images/chatgpt-business-recommendations.png"
            }
          })
        }}
      />

      {/* HowTo Schema - ENHANCED */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Get ChatGPT to Recommend Your Business",
            "description": "Three-step process for getting ChatGPT and other AI platforms to cite your business",
            "totalTime": "P45D",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "2997"
            },
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Fix Entity Consistency",
                "text": "Audit and correct all NAP (Name, Address, Phone) data across 47 platforms including Google Business Profile, Apple Maps, Bing Places, and major directories.",
                "url": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business#step-1"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Implement Schema Markup",
                "text": "Deploy LocalBusiness, FAQPage, HowTo, Organization, and Author schema types with perfect JSON-LD syntax, validated through Google's Rich Results Test.",
                "url": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business#step-2"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Create Authority Content",
                "text": "Document real expertise through 7 optimized articles with specific scenarios, financial consequences, unique frameworks, and citation-worthy information.",
                "url": "https://theanswerengine.ai/blog/why-chatgpt-isnt-recommending-your-business#step-3"
              }
            ]
          })
        }}
      />

      {/* Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Answer Authority Foundation",
            "description": "Comprehensive Answer Engine Optimization service that positions local businesses to be cited by ChatGPT, Claude, Perplexity, and Google AI Overviews through entity consistency, schema markup, and authority content creation.",
            "provider": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "serviceType": "Answer Engine Optimization (AEO)",
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Answer Engine Optimization Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Answer Authority Foundation Package",
                    "description": "6-week implementation including entity consistency audit, schema markup deployment, and 7 authority articles with 90-day AI citation tracking."
                  },
                  "price": "2997",
                  "priceCurrency": "USD",
                  "priceValidUntil": "2026-12-31",
                  "availability": "https://schema.org/InStock",
                  "url": "https://theanswerengine.ai/#contact"
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "price": "2997",
              "priceCurrency": "USD",
              "priceValidUntil": "2026-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://theanswerengine.ai/#contact",
              "description": "One-time investment for complete Answer Authority Foundation implementation"
            }
          })
        }}
      />

      {/* Offer Schema - Detailed */}
      <Script
        id="offer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Answer Authority Foundation Package",
            "description": "Complete 6-week Answer Engine Optimization implementation including entity consistency audit across 47 platforms, full schema markup deployment, 7 authority articles, and 90-day AI citation monitoring.",
            "price": "2997",
            "priceCurrency": "USD",
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock",
            "url": "https://theanswerengine.ai/#contact",
            "seller": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai"
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Answer Authority Foundation",
              "serviceType": "Answer Engine Optimization",
              "provider": {
                "@type": "Organization",
                "name": "The Answer Engine"
              }
            },
            "eligibleRegion": {
              "@type": "Country",
              "name": "United States"
            },
            "acceptedPaymentMethod": [
              "http://purl.org/goodrelations/v1#ByBankTransferInAdvance",
              "http://purl.org/goodrelations/v1#PaymentMethodCreditCard"
            ],
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "2997",
              "priceCurrency": "USD",
              "valueAddedTaxIncluded": false
            }
          })
        }}
      />

      {/* ItemList Schema - 3 Critical Failures */}
      <Script
        id="itemlist-failures-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Three Critical Failures Preventing ChatGPT Citations",
            "description": "The three reasons AI platforms ignore businesses and refuse to recommend them",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Thing",
                  "name": "Fragmented Business Identity",
                  "description": "Inconsistent NAP (Name, Address, Phone) data across 47+ platforms causes AI to see your business as unreliable. Variations in formatting create conflicting entity signals."
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Thing",
                  "name": "Missing Schema Markup",
                  "description": "AI platforms require structured data (JSON-LD schema) to understand and cite businesses. Without LocalBusiness, FAQPage, HowTo, Organization, and Author schema, AI ignores your content."
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Thing",
                  "name": "Generic AI-Generated Content",
                  "description": "AI platforms detect and deprioritize content that reads like AI wrote it. Authority content requires specific scenarios, financial consequences, and unique frameworks from real expertise."
                }
              }
            ]
          })
        }}
      />

      {/* ItemList Schema - What's Included */}
      <Script
        id="itemlist-included-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Answer Authority Foundation - What's Included",
            "description": "Complete deliverables in the Answer Authority Foundation package",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Service",
                  "name": "Entity Consistency Audit",
                  "description": "Complete entity consistency audit across 47 platforms with NAP correction and verification management"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Service",
                  "name": "Schema Markup Implementation",
                  "description": "Full schema markup implementation including LocalBusiness, FAQPage, HowTo, Organization, and Author schema types"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Service",
                  "name": "Authority Content Creation",
                  "description": "7 authority articles with expertise extraction and FAQ schema for each article"
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Service",
                  "name": "AI Citation Monitoring",
                  "description": "90-day AI citation monitoring and tracking across ChatGPT, Claude, Perplexity, Google AI Overviews, and Gemini"
                }
              }
            ]
          })
        }}
      />

      {/* Case Study / Research Schema */}
      <Script
        id="research-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": "177,000 Weekly AI Impressions: Real Estate Team Case Study",
            "description": "Case study documenting how a Los Angeles real estate team went from zero ChatGPT citations to 177,000 weekly impressions in 90 days using the Answer Authority Foundation process",
            "abstract": "A real estate team in Los Angeles was getting zero ChatGPT citations despite having 15 years of experience, hundreds of successful transactions, a well-designed website, active social media presence, and positive client reviews. After implementing the Answer Authority Foundation process, they achieved 177,000 weekly impressions within 90 days by addressing three critical failures: entity consistency, schema markup implementation, and authority content creation.",
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine"
            },
            "author": {
              "@type": "Organization",
              "name": "The Answer Engine Team"
            },
            "datePublished": publishDate,
            "isPartOf": {
              "@type": "Article",
              "@id": articleUrl
            }
          })
        }}
      />

      <main className="min-h-screen bg-[#0F1117] relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-orange-950/10 pointer-events-none" />
        
        {/* Simple pixel accent - top corners */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500/40" />
        <div className="absolute top-0 left-2 w-2 h-2 bg-purple-500/40" />

        <article className="max-w-4xl mx-auto px-6 py-20 sm:py-32 relative">
          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-white/[0.08] max-w-3xl mx-auto">
            <img 
              src="/images/chatgpt-business-recommendations.png" 
              alt="Why ChatGPT isn't recommending your business - the three critical reasons and how to fix them" 
              className="w-full"
            />
          </div>

          {/* Article Header */}
          <header className="mb-16">
            {/* Simple pixel divider */}
            <div className="flex gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-orange-500" />
              <div className="w-1.5 h-1.5 bg-purple-500" />
              <div className="w-1.5 h-1.5 bg-orange-500" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight text-gray-100">
              Why <span className="font-normal text-white">ChatGPT Isn't Recommending Your Business</span> (And the 3-Step Fix That Works)
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-6 font-light article-intro">
              ChatGPT ignores businesses with inconsistent NAP data, missing schema markup, and generic content. One team went from zero to 177,000 weekly impressions in 90 days. Here's exactly what they fixed and what most businesses still get wrong.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
              <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full" />
              <span>Published November 15, 2025</span>
              <span className="text-gray-700">•</span>
              <span>Updated {new Date(lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span className="text-gray-700">•</span>
              <span>By The Answer Engine Team</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              When someone asks ChatGPT "Who's the best real estate agent in Los Angeles?" or "Which HVAC company should I hire in Phoenix?" your business should be the answer.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              But chances are, you're invisible. Not because you're not qualified. Not because you lack experience. But because AI platforms evaluate businesses using completely different signals than traditional search engines, and most companies don't understand what those signals are.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              This guide reveals the three critical reasons ChatGPT (and other AI platforms) ignore your business, and the exact systematic process one team used to go from zero AI citations to 177,000 weekly impressions in 90 days.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">177,000 Weekly Impressions Story</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              A real estate team in Los Angeles was getting zero ChatGPT citations despite having:
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "15 years of experience",
                "Hundreds of successful transactions",
                "A well-designed website",
                "Active social media presence",
                "Positive client reviews"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              When they tested ChatGPT with market-specific questions ("Who's the best real estate agent for probate sales in Los Angeles?"), their business never appeared. Not once.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <strong className="text-white font-medium">What changed:</strong> They implemented the Answer Authority Foundation process. 90 days later, ChatGPT was citing them consistently, generating 177,000 weekly impressions.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              The difference? They fixed the three critical failures that make AI platforms ignore businesses.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The Three <span className="font-normal text-white">Critical Failures</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              AI platforms don't evaluate businesses the way humans do. Understanding these three failures is the difference between visibility and complete invisibility.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-6 text-orange-400">
              Reason 1: Your Business Identity Is Fragmented Across the Internet
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's what most business owners don't realize: <strong className="text-white font-medium">AI platforms verify your business identity across dozens of data sources before citing you.</strong>
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              When ChatGPT considers recommending your business, it checks:
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Google Business Profile",
                "Apple Maps",
                "Bing Places for Business",
                "Facebook Business Page",
                "Yelp",
                "Better Business Bureau",
                "Industry-specific directories",
                "44+ other platforms"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              If your NAP (Name, Address, Phone) data is inconsistent across these platforms, even slightly, AI treats your business as unreliable.
            </p>

            <h4 className="text-xl font-light mt-10 mb-4 text-purple-400">
              The Hidden Inconsistencies
            </h4>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              <strong className="text-white font-medium">What seems like the same information to humans looks completely different to AI:</strong>
            </p>

            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4 font-light">
                <strong className="text-gray-400 font-medium">These all look identical to you:</strong>
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="font-mono text-sm">• Smith & Associates Realty</li>
                <li className="font-mono text-sm">• Smith and Associates Realty</li>
                <li className="font-mono text-sm">• Smith & Associates Real Estate</li>
                <li className="font-mono text-sm">• Smith and Associates</li>
              </ul>
              <p className="text-gray-400 mt-4 font-light italic">
                To AI, these are four different businesses.
              </p>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4 font-light">
                <strong className="text-gray-400 font-medium">Phone number variations:</strong>
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="font-mono text-sm">• (512) 555-1234</li>
                <li className="font-mono text-sm">• 512-555-1234</li>
                <li className="font-mono text-sm">• 512.555.1234</li>
                <li className="font-mono text-sm">• +1 (512) 555-1234</li>
              </ul>
              <p className="text-gray-400 mt-4 font-light italic">
                Same number. Different entity signals to AI.
              </p>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4 font-light">
                <strong className="text-gray-400 font-medium">Address formatting:</strong>
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="font-mono text-sm">• 123 Main Street, Suite 100</li>
                <li className="font-mono text-sm">• 123 Main St Suite 100</li>
                <li className="font-mono text-sm">• 123 Main St, Ste 100</li>
                <li className="font-mono text-sm">• 123 Main Street #100</li>
              </ul>
              <p className="text-gray-400 mt-4 font-light italic">
                AI sees conflicting location data.
              </p>
            </div>

            <h4 className="text-xl font-light mt-10 mb-4 text-purple-400">
              The Compounding Problem
            </h4>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Most businesses have NAP inconsistencies across 30-40 platforms without knowing it. Here's why:
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Previous business owners updated some platforms but not others",
                "Marketing agencies created new listings without updating old ones",
                "Different staff members entered information differently",
                "Business name evolved (adding LLC, changing DBA name) but old listings remain",
                "You moved offices but forgot to update lesser-known directories"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <strong className="text-white font-medium">The result:</strong> When ChatGPT evaluates your business, it sees conflicting data and assigns low confidence to your entity, making citation unlikely even if you're otherwise qualified.
            </p>

            <h4 className="text-xl font-light mt-10 mb-4 text-purple-400">
              The Time Sink
            </h4>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Fixing entity consistency requires:
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Auditing 47+ platforms to identify inconsistencies",
                "Claiming unclaimed listings",
                "Correcting formatting across every platform",
                "Submitting verification requests",
                "Waiting 2-3 weeks for verifications to process",
                "Following up on rejected verifications",
                "Re-checking everything after corrections"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Estimated time investment:</strong> 15-20 hours of actual work, spread across 2-3 weeks waiting for verifications.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              This is solvable, but it's tedious, technical, and one mistake can restart the verification cycle.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-6 text-orange-400">
              Reason 2: You're Speaking Human, But AI Only Reads Structure
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              This is the shocking realization for most business owners:
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Your beautifully written "About Us" page? <strong className="text-white font-medium">AI ignores it.</strong>
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Your 20 years in business? <strong className="text-white font-medium">AI doesn't "see" it.</strong>
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Your passion, your story, your customer focus? <strong className="text-white font-medium">Meaningless to AI</strong> unless you translate it into structured language.
            </p>

            <h4 className="text-xl font-light mt-10 mb-4 text-purple-400">
              What You Probably Have vs. What AI Needs
            </h4>

            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 mb-4">
              <p className="text-gray-400 mb-3 font-medium">What You Probably Have:</p>
              <p className="text-gray-300 leading-relaxed font-light italic">
                "We've been serving Denver for 20 years with expert HVAC services. Customer satisfaction is our priority. Contact us today!"
              </p>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-gray-400 mb-3 font-medium">What AI Sees:</p>
              <p className="text-gray-500 leading-relaxed font-light">
                Zero authority signals. Generic human writing with no structured data.
              </p>
            </div>

            <h4 className="text-xl font-light mt-10 mb-4 text-purple-400">
              What AI Actually Needs: Schema Markup
            </h4>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Schema markup</strong> is JSON-LD code that acts as subtitles for AI platforms. It tells AI:
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "This page answers specific questions",
                "This business provides specific services",
                "This person is an expert in a definable topic",
                "These FAQs match the intent behind user queries",
                "This article is written by a credible source"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-light mt-10 mb-4 text-purple-400">
              The Required Schema Types
            </h4>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "LocalBusiness Schema: Your NAP + service details",
                "FAQPage Schema: Questions you answer",
                "HowTo Schema: Process documentation (when applicable)",
                "Organization Schema: Your credentials and team",
                "Author Schema: Expertise attribution for content"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-light mt-10 mb-4 text-purple-400">
              The Complexity
            </h4>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Schema markup must be:
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Written in perfect JSON-LD syntax",
                "Validated with Google's Rich Results Test",
                "Implemented without breaking your site",
                "Tested on mobile and desktop",
                "Cross-linked to other schema types for maximum authority"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">If one curly brace or comma is wrong, the entire implementation fails.</strong>
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              This is not a YouTube-tutorial fix. It's technical, fragile, and easy to break.
            </p>

            {/* CTA Section */}
            <div className="my-16 p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Stop <span className="font-normal text-white">Wasting Months on Trial and Error</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
                We've spent two years testing exactly what makes AI platforms cite businesses instead of competitors. We know which schema implementations work, which content structures get ignored, and how to systematically build authority that compounds over time. The Answer Authority Foundation process takes 6 weeks, not 6 months of guesswork.
              </p>
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
              >
                Schedule Your Free Discovery Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            <h3 className="text-2xl font-light mt-12 mb-6 text-orange-400">
              Reason 3: Your Content Sounds Like Everyone Else (Including AI)
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's the irony: <strong className="text-white font-medium">If you used ChatGPT to write your website content, ChatGPT can detect that and won't cite it.</strong>
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              AI platforms automatically deprioritize anything that reads like AI wrote it. They're looking for authentic expertise, specific scenarios, and information that demonstrates real-world experience.
            </p>

            <h4 className="text-xl font-light mt-10 mb-4 text-purple-400">
              Generic Content AI Always Ignores
            </h4>

            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-gray-400 mb-4 font-medium">These phrases appear on millions of websites:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="font-light">• "We provide comprehensive solutions..."</li>
                <li className="font-light">• "Our team has over 20 years of experience..."</li>
                <li className="font-light">• "We offer high-quality service at affordable prices..."</li>
                <li className="font-light">• "Customer satisfaction is our top priority..."</li>
              </ul>
              <p className="text-gray-500 mt-4 font-light italic">
                AI has read these lines millions of times. They carry zero authority weight.
              </p>
            </div>

            <h4 className="text-xl font-light mt-10 mb-4 text-purple-400">
              Authority Content AI Actually Cites
            </h4>

            <div className="bg-white/[0.03] backdrop-blur-xl border-l-4 border-orange-500/50 p-6 mb-6">
              <p className="text-gray-300 leading-relaxed font-light">
                "When I walk into a probate property with an executor, the first thing I tell them is: <strong className="text-white font-medium">don't touch anything yet.</strong> Families lose $50,000+ in tax benefits by clearing homes before proper valuation. Here's the 7-step checklist we use before a single box gets moved..."
              </p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              <strong className="text-white font-medium">This content:</strong>
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Describes a real scenario",
                "Includes a financial consequence ($50,000+)",
                "Demonstrates unique expertise (7-step checklist)",
                "Shows process, not platitudes",
                "Cannot be replicated by generic AI content"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              AI loves this. People love this. Google loves this.
            </p>

            <h4 className="text-xl font-light mt-10 mb-4 text-purple-400">
              The Challenge
            </h4>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Creating authoritative content requires:
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Extracting real expertise from your experience",
                "Documenting actual client situations (with permission)",
                "Crafting unique frameworks and methodologies",
                "Writing in a way that AI can parse and cite",
                "Structuring content as explicit question-answer pairs"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <strong className="text-white font-medium">Estimated time investment:</strong> 40-60 hours for 7 articles written correctly.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Most business owners never get this part right, and they shouldn't have to. This is what content strategists exist for.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">"Flag Don't Fabricate" Problem</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Here's the uncomfortable truth many agencies won't tell you:
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Some competitors currently getting cited are using <strong className="text-white font-medium">fabricated case studies</strong>, made-up testimonials, and fake authority signals. And yes, for now, AI often believes them.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Why Fabrication Works (Temporarily)
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              AI doesn't verify every claim. It rewards structure, clarity, and schema, not honesty. If your content is technically well-structured and contains specific metrics, AI will cite it regardless of whether those metrics are real.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Why Fabrication Is Dangerous
            </h3>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Competitors can call out your claims publicly",
                "You can't answer follow-up questions about fake case studies",
                "Your content collapses under scrutiny",
                "AI platforms are improving fact-checking capabilities rapidly",
                "Your reputation becomes fragile instead of defensible"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-4 text-orange-400">
              Our Standard: Flag, Don't Fabricate
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              We never invent stories. We never create false wins. We never write testimonials that didn't happen.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              <strong className="text-white font-medium">Every claim is:</strong>
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Verified through client records",
                "Extracted from your actual expertise",
                "Backed by real experience",
                "Documented with permission when using client specifics"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              It takes longer.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <strong className="text-white font-medium">But it creates authority that lasts.</strong>
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">3-Step Fix That Actually Works</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              The Los Angeles real estate team that went from zero to 177,000 weekly impressions didn't guess. They systematically addressed all three failures in the correct sequence.
            </p>

            <h3 id="step-1" className="text-2xl font-light mt-12 mb-6 text-orange-400">
              Step 1: Fix Entity Consistency (Week 1-2)
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              <strong className="text-white font-medium">What we do:</strong>
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Audit all 47 major platforms for NAP inconsistencies",
                "Identify the canonical version of your business information",
                "Claim unclaimed listings",
                "Submit corrections across all platforms",
                "Monitor verification status",
                "Re-audit after corrections to ensure consistency"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <strong className="text-white font-medium">Timeline:</strong> 2 weeks (including verification wait times)
            </p>

            <h3 id="step-2" className="text-2xl font-light mt-12 mb-6 text-orange-400">
              Step 2: Implement Schema Markup (Week 2-3)
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              <strong className="text-white font-medium">What we do:</strong>
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Deploy LocalBusiness schema with exact NAP data",
                "Create FAQPage schema for every service page",
                "Implement Organization schema for team credentials",
                "Add Author schema for expertise attribution",
                "Test all schema using Google's Rich Results Test",
                "Validate mobile and desktop rendering",
                "Monitor Search Console for schema errors"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <strong className="text-white font-medium">Timeline:</strong> 1 week for implementation, ongoing monitoring
            </p>

            <h3 id="step-3" className="text-2xl font-light mt-12 mb-6 text-orange-400">
              Step 3: Create Authority Content (Week 3-6)
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              <strong className="text-white font-medium">What we do:</strong>
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Conduct expertise extraction interviews with your team",
                "Identify your unique frameworks and methodologies",
                "Document real client scenarios (with permission)",
                "Create 7 optimized articles targeting high-intent queries",
                "Structure content as explicit question-answer pairs",
                "Implement matching FAQ schema on each article",
                "Cross-link content to build topical authority"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              <strong className="text-white font-medium">Timeline:</strong> 3 weeks for 7 articles + schema implementation
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 text-gray-100">
              The <span className="font-normal text-white">Answer Authority Foundation</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              This is the exact systematic process we use. Not theory. Not guesswork. The same implementation that generated 177,000 weekly impressions for the Los Angeles real estate team.
            </p>

            <h3 className="text-2xl font-light mt-12 mb-6 text-orange-400">
              What's Included
            </h3>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "Complete entity consistency audit across 47 platforms",
                "NAP correction and verification management",
                "Full schema markup implementation (5 schema types)",
                "7 authority articles with expertise extraction",
                "FAQ schema for every article",
                "90-day AI citation monitoring and tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-light mt-12 mb-6 text-orange-400">
              Investment
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">$2,997 one-time investment</strong>
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-light">
              Compare that to:
            </p>

            <ul className="space-y-3 mb-8 text-gray-300 text-lg">
              {[
                "DIY time investment: 80-120 hours",
                "Your hourly rate × 100 hours = $7,500-11,500 opportunity cost",
                "Risk of technical errors requiring rework",
                "3-6 month timeline vs. our 6-week implementation"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full mt-3" />
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Final CTA */}
            <div className="my-16 p-10 rounded-2xl bg-gradient-to-br from-orange-500/10 to-purple-500/10 backdrop-blur-xl border border-orange-500/20">
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-100">
                Book Your <span className="font-normal text-white">Discovery Call</span>
              </h3>
              <p className="text-gray-300 text-lg mb-6 font-light leading-relaxed">
                In 30 minutes we'll:
              </p>
              <ul className="space-y-3 mb-8 text-gray-300 text-lg">
                {[
                  "Audit your current AI visibility (or invisibility)",
                  "Identify your biggest citation opportunities",
                  "Show you the exact assets we'd build for your business",
                  "Answer all your questions about the process",
                  "Explain our 90-day citation tracking system"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0">✓</span>
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 mb-2 font-medium">No pressure. No sales pitch.</p>
              <p className="text-gray-100 mb-8 text-lg font-medium">
                If it's a fit? You could be getting 177,000 impressions a week 90 days from now.
              </p>
              <div className="text-center">
                <a 
                  href="/#contact?utm_source=blog&utm_medium=cta&utm_campaign=chatgpt-spoke1" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
                >
                  Book Your Discovery Call — Start Your Authority Build ($2,997)
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center gap-1 my-16 opacity-20">
              {[...Array(50)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-px h-px bg-gray-600"
                />
              ))}
            </div>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-8 text-gray-100">
              <span className="font-normal text-white">Frequently Asked Questions</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How long does it take to see results from AEO?",
                  a: "Most businesses see initial featured snippet wins within 30-45 days and consistent AI citations within 90 days. The complete Answer Authority Foundation process takes 6 weeks to implement."
                },
                {
                  q: "Can I do this myself instead of hiring The Answer Engine?",
                  a: "Yes, but it requires 80-120 hours of work across entity consistency audits, schema markup implementation, and content creation. The DIY opportunity cost ($7,500-11,500) typically exceeds our done-for-you price ($2,997)."
                },
                {
                  q: "What makes your process different from other AEO agencies?",
                  a: "We extract and document authentic expertise instead of fabricating case studies. Every claim is verified through our flag don't fabricate protocol."
                },
                {
                  q: "What if ChatGPT doesn't cite my business after 90 days?",
                  a: "We track AI citations across ChatGPT, Claude, Perplexity, Google AI Overviews, and Gemini during the 90-day tracking period. Results vary by industry and implementation quality."
                },
                {
                  q: "Which businesses benefit most from AEO?",
                  a: "Local service businesses with high-value transactions ($5,000+ average) and expertise-based services see the best ROI."
                },
                {
                  q: "What platforms do you track besides ChatGPT?",
                  a: "We monitor AI citations across ChatGPT, Claude, Perplexity, Google AI Overviews, and Gemini during the 90-day tracking period."
                },
                {
                  q: "Will this help with Google rankings too?",
                  a: "Yes. The schema markup, entity consistency, and authority content that help AI citations also improve traditional SEO performance and featured snippet wins."
                },
                {
                  q: "How much does the Answer Authority Foundation cost?",
                  a: "$2,997 one-time investment, including discovery consultation, 7 optimized articles, complete schema implementation, and 90-day monitoring."
                },
                {
                  q: "Do you offer payment plans?",
                  a: "We accept payment via Stripe or Zelle. Qualified businesses can request Net 30 terms."
                },
                {
                  q: "What happens during the discovery process?",
                  a: "We work with you to document your expertise, client experiences, and unique methodologies. You provide the knowledge, we handle the content creation."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.08] transition-colors">
                  <h3 className="text-xl font-light mb-3 text-white">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Author Section */}
            <div className="mt-16 pt-12 border-t border-white/[0.08]">
              <h3 className="text-2xl font-light mb-6 text-gray-100">
                <span className="font-normal text-white">About the Author</span>
              </h3>
              <p className="text-gray-300 mb-4 font-light">
                <strong className="text-white font-medium">Written by:</strong> The Answer Engine Team
              </p>
              <div className="text-gray-300 leading-relaxed space-y-4 mb-6 font-light">
                <p className="text-white font-medium">Credentials & Experience:</p>
                <ul className="space-y-2">
                  {[
                    "2+ years specialized Answer Engine Optimization experience (2023-present)",
                    "10+ years combined traditional SEO experience",
                    "Schema.org markup specialists with 500+ implementations deployed",
                    "100+ featured snippet wins across client websites",
                    "Multi-platform AI testing and citation tracking across Google AI Overviews, ChatGPT, Claude, and Perplexity",
                    "50+ local service business AEO implementations completed"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-2.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 font-light">
                The Answer Engine specializes in Answer Engine Optimization (AEO) for local service businesses. We position companies to be cited by Google AI Overviews, ChatGPT, Claude, Perplexity, and other AI platforms, making them the trusted expert AI recommends in their market.
              </p>
              <p>
                <a href="/" className="inline-flex items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition-colors group">
                  Learn more at TheAnswerEngine.ai
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </p>
            </div>

            {/* Related Articles */}
            <div className="mt-16 pt-12 border-t border-white/[0.08]">
              <h3 className="text-2xl font-light mb-6 text-gray-100">
                <span className="font-normal text-white">Related Articles</span>
              </h3>
              <div className="space-y-4">
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.08] transition-colors">
                  <a href="/blog/how-to-get-google-ai-chatgpt-recommend-business" className="group">
                    <h4 className="text-xl font-light text-white mb-2 group-hover:text-orange-400 transition-colors">
                      How to Get Google AI Overviews and ChatGPT to Recommend Your Business
                    </h4>
                    <p className="text-gray-400 font-light leading-relaxed">
                      Learn what Google AI Overviews and ChatGPT require to cite your business. Discover the four foundation requirements most businesses miss.
                    </p>
                  </a>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.08] transition-colors">
                  <a href="/blog/what-is-answer-engine-optimization" className="group">
                    <h4 className="text-xl font-light text-white mb-2 group-hover:text-orange-400 transition-colors">
                      What is Answer Engine Optimization (AEO)? The Complete Guide for 2025
                    </h4>
                    <p className="text-gray-400 font-light leading-relaxed">
                      Learn what Answer Engine Optimization is, how it differs from traditional SEO, and why local businesses need it to dominate AI-powered search.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}