import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

// SEO Metadata
export const metadata: Metadata = {
  title: 'Why ChatGPT Recommends Your Competitors (And Not You) | The Answer Engine',
  description: 'Learn why ChatGPT recommends your competitors and how to shift AI recommendations toward your business with real authority, clarity, and answer engine optimization.',
  keywords: 'why ChatGPT recommends competitors, ChatGPT business recommendations, AEO competitor advantages, appear in ChatGPT, authority signals, AI visibility, local business AEO',
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  creator: 'The Answer Engine',
  publisher: 'The Answer Engine',
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://theanswerengine.ai/blog/why-chatgpt-recommends-competitors',
    title: 'Why ChatGPT Recommends Your Competitors (And Not You)',
    description: 'Learn why ChatGPT recommends your competitors and how to shift AI recommendations toward your business with real authority, clarity, and answer engine optimization.',
    siteName: 'The Answer Engine',
    images: [
      {
        url: 'https://theanswerengine.ai/images/chatgpt-competitors-featured.png',
        width: 1200,
        height: 630,
        alt: 'Why ChatGPT Recommends Your Competitors',
      },
    ],
    publishedTime: '2025-11-17T08:00:00-08:00',
    modifiedTime: '2025-11-17T08:00:00-08:00',
    authors: ['Justin Borges'],
    section: 'Answer Engine Optimization',
    tags: ['AEO', 'ChatGPT', 'AI Citations', 'Local Business', 'Authority Building'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why ChatGPT Recommends Your Competitors (And Not You)',
    description: 'Learn why ChatGPT recommends your competitors and how to shift AI recommendations toward your business.',
    images: ['https://theanswerengine.ai/images/chatgpt-competitors-featured.png'],
    creator: '@theanswerengine',
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/why-chatgpt-recommends-competitors',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// JSON-LD Schema Component
function ComprehensiveSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/blog/why-chatgpt-recommends-competitors#article",
        "headline": "Why ChatGPT Recommends Your Competitors (And Not You)",
        "alternativeHeadline": "How to Shift ChatGPT Citations From Competitors to Your Business",
        "description": "Learn why ChatGPT recommends your competitors and how to shift AI recommendations toward your business with real authority, clarity, and answer engine optimization.",
        "image": {
          "@type": "ImageObject",
          "url": "https://theanswerengine.ai/images/chatgpt-competitors-featured.png",
          "width": 1200,
          "height": 630
        },
        "datePublished": "2025-11-17T08:00:00-08:00",
        "dateModified": "2025-11-17T08:00:00-08:00",
        "author": {
          "@type": "Person",
          "@id": "https://theanswerengine.ai/about#founder"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://theanswerengine.ai/#organization"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://theanswerengine.ai/blog/why-chatgpt-recommends-competitors"
        },
        "articleSection": "Answer Engine Optimization",
        "keywords": "why ChatGPT recommends competitors, ChatGPT business recommendations, AEO competitor advantages, appear in ChatGPT, authority signals, AI visibility, local business AEO",
        "wordCount": 2847
      },
      {
        "@type": "FAQPage",
        "@id": "https://theanswerengine.ai/blog/why-chatgpt-recommends-competitors#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is my competitor showing up when I have better reviews?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChatGPT can't see reviews the way humans do. It prioritizes structured expertise, not popularity. If your competitor explains their services more clearly, they'll get picked."
            }
          },
          {
            "@type": "Question",
            "name": "Can small businesses really appear in ChatGPT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We've seen small service providers surface when they have strong authority content, clear niches, and consistent online information."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to shift ChatGPT's recommendations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically around 90 days. Sometimes faster if your foundation is strong, sometimes longer if comprehensive optimization is needed."
            }
          },
          {
            "@type": "Question",
            "name": "Is this worth it for a local business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Considering ChatGPT has over 100M weekly users and usually gives only 3-5 recommendations, the visibility upside is significant."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://theanswerengine.ai/blog/why-chatgpt-recommends-competitors#breadcrumb",
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
            "name": "Why ChatGPT Recommends Competitors"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://theanswerengine.ai/blog/why-chatgpt-recommends-competitors",
        "url": "https://theanswerengine.ai/blog/why-chatgpt-recommends-competitors",
        "name": "Why ChatGPT Recommends Your Competitors (And Not You)",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://theanswerengine.ai/#website",
          "url": "https://theanswerengine.ai",
          "name": "The Answer Engine"
        },
        "breadcrumb": {
          "@id": "https://theanswerengine.ai/blog/why-chatgpt-recommends-competitors#breadcrumb"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

// Breadcrumb Component
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-gray-400">
        <li>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
        </li>
        <li>→</li>
        <li>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        </li>
        <li>→</li>
        <li className="text-gray-500">Why ChatGPT Recommends Competitors</li>
      </ol>
    </nav>
  )
}

// Main Page Component
export default function WhyChatGPTRecommendsCompetitors() {
  return (
    <>
      <ComprehensiveSchema />
      
      <article className="min-h-screen bg-[#0F1117] relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 via-transparent to-orange-950/5 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 py-20 sm:py-32 relative">
          <Breadcrumb />
          
          {/* Featured Image */}
          <div className="mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/chatgpt-competitors-featured.png"
              alt="Why ChatGPT Recommends Your Competitors"
              width={1200}
              height={630}
              priority
              className="w-full"
            />
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-[#f27d24]/10 border border-[#f27d24]/20">
              <div className="w-2 h-2 rounded-full bg-[#f27d24]" />
              <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">ChatGPT Citation Series</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight text-white">
              Why ChatGPT Recommends Your Competitors (And Not You)
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
              <time dateTime="2025-11-17">November 17, 2025</time>
              <span>•</span>
              <span>By <Link href="/about" className="text-[#f27d24] hover:text-[#d66d1f] transition-colors">Justin Borges</Link></span>
              <span>•</span>
              <span>12 min read</span>
            </div>

            {/* Featured Snippet */}
            <div className="bg-[#f27d24]/10 border-l-4 border-[#f27d24] p-6 rounded-r-xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                ChatGPT recommends your competitors when they appear to be the safest, clearest experts in your category. It looks for well-structured expertise, consistent information, niche authority, and content that answers real user questions. If your competitors have deeper, clearer, or more organized authority signals, ChatGPT will choose them over you.
              </p>
            </div>
          </header>

          {/* Introduction */}
          <section className="mb-16 text-gray-300 space-y-4 text-lg leading-relaxed">
            <p>Right now, customers are asking ChatGPT questions like:</p>
            
            <ul className="space-y-2 pl-6 border-l-2 border-[#362478]/30">
              <li>"Who's the best HVAC company near me?"</li>
              <li>"Which attorney specializes in probate in Los Angeles?"</li>
              <li>"What real estate team knows inherited property sales?"</li>
              <li>"Who should I hire for fire damage restoration?"</li>
            </ul>

            <p>
              ChatGPT gives them direct recommendations — usually only three to five businesses. If you're not showing up, it's because ChatGPT sees your competitors' expertise more clearly, not because they're actually better.
            </p>

            <p>
              AI systems don't "rank" you like Google. They assess your expertise, your clarity, your consistency, and your depth. If your competitors show up and you don't, that means ChatGPT has more confident, structured, trustworthy information about them.
            </p>

            <p>
              This guide explains exactly why your competitors appear, how ChatGPT decides who to trust, and what you can do over the next 60–90 days to shift the balance.
            </p>
          </section>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* Section 1: How ChatGPT Chooses */}
          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-white">
              How Does ChatGPT Actually Choose Which Businesses to Recommend?
            </h2>

            <div className="bg-white/[0.03] border-l-4 border-[#362478]/50 p-6 rounded-r-xl mb-8">
              <p className="text-[#a89bd9] font-semibold mb-2">Direct Answer:</p>
              <p className="text-gray-300 leading-relaxed">
                ChatGPT recommends businesses that demonstrate clear expertise, consistent information, and strong topical authority. It analyzes not just websites, but the entire digital footprint around your business. The companies it recommends usually have detailed explanations, niche clarity, strong service descriptions, and content that matches real user questions.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl overflow-hidden">
                <thead className="bg-white/[0.05]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Factor</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">What It Looks For</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Your Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#f27d24]">Expert Clarity</td>
                    <td className="px-6 py-4 text-gray-300">Depth of knowledge demonstration</td>
                    <td className="px-6 py-4 text-gray-300">Document processes, not just services</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#f27d24]">Consistency</td>
                    <td className="px-6 py-4 text-gray-300">Matching info across platforms</td>
                    <td className="px-6 py-4 text-gray-300">Audit all online profiles</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#f27d24]">Structure</td>
                    <td className="px-6 py-4 text-gray-300">Organized, scannable content</td>
                    <td className="px-6 py-4 text-gray-300">Use headings, FAQs, step-by-step guides</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#f27d24]">Safety</td>
                    <td className="px-6 py-4 text-gray-300">Verified credentials & realistic claims</td>
                    <td className="px-6 py-4 text-gray-300">Include licenses, avoid exaggeration</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#f27d24]">Depth</td>
                    <td className="px-6 py-4 text-gray-300">Explanations beyond surface marketing</td>
                    <td className="px-6 py-4 text-gray-300">Answer the "how" and "why" questions</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-gray-300 space-y-4 leading-relaxed">
              <h3 className="text-2xl font-semibold text-white mb-4">Explanation Layer</h3>
              <p>ChatGPT isn't scanning for keywords, backlinks, or website age.</p>
              <p>It looks for:</p>
              <ul className="space-y-2 pl-6 list-disc">
                <li><strong className="text-white">Expert clarity</strong> ("this business clearly specializes in X")</li>
                <li><strong className="text-white">Depth</strong> (your explanations go beyond surface-level marketing)</li>
                <li><strong className="text-white">Consistency</strong> (Google Business, website, bios all match)</li>
                <li><strong className="text-white">Safety</strong> (models avoid businesses lacking evidence of expertise)</li>
                <li><strong className="text-white">Structure</strong> (headings, FAQs, step-by-step content)</li>
              </ul>

              <div className="bg-[#f27d24]/10 border-l-4 border-[#f27d24] p-6 rounded-r-xl mt-6">
                <p className="font-semibold text-white mb-2">Practical Takeaway:</p>
                <p>If a human reading your website wouldn't immediately say, "Wow, this person knows exactly what they're doing," ChatGPT won't say it either.</p>
              </div>
            </div>
          </section>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* Section 2: 7 Biggest Reasons */}
          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-white">
              What Are the 7 Biggest Reasons ChatGPT Recommends Your Competitors?
            </h2>

            <div className="bg-white/[0.03] border-l-4 border-[#362478]/50 p-6 rounded-r-xl mb-8">
              <p className="text-[#a89bd9] font-semibold mb-2">Direct Answer:</p>
              <p className="text-gray-300 leading-relaxed">
                The main reasons competitors appear instead of you include: missing expertise content, unclear service pages, weak niche positioning, inconsistent online information, outdated websites, thin authority signals, and lack of structured FAQs. These gaps make ChatGPT view competitors as more trustworthy options.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  number: "1",
                  title: "Your Expertise Lives In Your Head, Not Online",
                  description: "Most business owners explain things brilliantly in person but vaguely online. Your competitors documented what you keep in conversations."
                },
                {
                  number: "2",
                  title: "Your Website Reads Like Marketing, Not Expertise",
                  description: "ChatGPT ignores buzzwords like 'best,' 'top,' 'trusted,' or 'affordable.' It wants process explanations, not sales pitches."
                },
                {
                  number: "3",
                  title: "You Don't Have a Clear Niche",
                  description: "AI struggles when you appear to 'do everything.' Your competitor narrowed their positioning to one specialty."
                },
                {
                  number: "4",
                  title: "Your Competitor Has One Strong Asset",
                  description: "One deep guide, comprehensive hub page, or detailed process breakdown can tip the scale in their favor."
                },
                {
                  number: "5",
                  title: "Your Online Footprint Is Inconsistent",
                  description: "Different phone numbers? Different bios? Outdated service area pages? ChatGPT flags these as 'unsafe.'"
                },
                {
                  number: "6",
                  title: "You Don't Answer Real User Questions",
                  description: "Content that doesn't map to actual customer queries gets ignored. Your competitor addressed the questions people actually ask."
                },
                {
                  number: "7",
                  title: "You Have No Structured FAQs or Schema",
                  description: "AI prefers pages with clear structure—FAQs, headings, and proper markup that make content easy to extract and verify."
                }
              ].map((reason) => (
                <div 
                  key={reason.number}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.15] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#f27d24]/20 border border-[#f27d24]/30 flex items-center justify-center">
                      <span className="text-[#f27d24] font-bold">{reason.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Why is my competitor showing up when I have better reviews?",
                  answer: "ChatGPT can't see reviews the way humans do. It prioritizes structured expertise, not popularity. If your competitor explains their services more clearly, they'll get picked."
                },
                {
                  question: "Can small businesses really appear in ChatGPT?",
                  answer: "Yes. We've seen small service providers surface when they have strong authority content, clear niches, and consistent online information."
                },
                {
                  question: "How long does it take to shift ChatGPT's recommendations?",
                  answer: "Typically around 90 days. Sometimes faster if your foundation is strong, sometimes longer if comprehensive optimization is needed."
                },
                {
                  question: "Is this worth it for a local business?",
                  answer: "Considering ChatGPT has over 100M weekly users and usually gives only 3-5 recommendations, the visibility upside is significant."
                },
                {
                  question: "Do I need to rewrite my entire website?",
                  answer: "No. Most businesses need strategic authority content that demonstrates niche expertise. Your existing site can stay—you're adding authority layers, not rebuilding from scratch."
                },
                {
                  question: "What if my competitor is already showing up?",
                  answer: "That's actually valuable intelligence. It means ChatGPT sees your category as credible and is willing to cite businesses. Your goal is to demonstrate clearer, deeper expertise so you appear alongside or instead of them."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.15] transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* CTA Section */}
          <section className="mb-16 bg-gradient-to-br from-[#f27d24]/10 to-[#d66d1f]/10 border-2 border-[#f27d24]/30 rounded-3xl p-12 text-center hover:-translate-y-1 transition-all">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-white">
              Ready to Shift AI Citations to Your Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule your free 30-minute AEO strategy call and discover exactly where you're losing to competitors in AI citations.
            </p>
            
            <a 
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white transition-all shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] hover:-translate-y-0.5 bg-[#f27d24] hover:bg-[#d66d1f]"
            >
              Schedule Free Strategy Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </section>

          {/* Platform Disclaimer */}
          <section className="text-sm text-gray-500 italic border-t border-white/[0.08] pt-8">
            <p>
              <strong>Platform Disclaimer:</strong> ChatGPT recommendations are determined by OpenAI's algorithms and subject to change. The Answer Engine optimizes expertise documentation but cannot guarantee specific AI platform placements.
            </p>
          </section>
        </div>
      </article>
    </>
  )
}