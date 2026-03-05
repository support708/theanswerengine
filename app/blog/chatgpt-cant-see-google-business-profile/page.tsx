import { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "ChatGPT Can't See Your Google Business Profile — Here's What It CAN See",
  description: "Your Google Business Profile is invisible to ChatGPT. Learn exactly what information sources ChatGPT can access about your business and how to optimize them.",
  openGraph: {
    title: "ChatGPT Can't See Your Google Business Profile — Here's What It CAN See",
    description: "Your Google Business Profile is invisible to ChatGPT. Learn exactly what information sources ChatGPT can access about your business and how to optimize them.",
    type: 'article',
    url: 'https://theanswerengine.ai/blog/chatgpt-cant-see-google-business-profile',
    images: [{ url: '/images/chatgpt-cant-see-gbp.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ChatGPT Can't See Your Google Business Profile — Here's What It CAN See",
    description: "Your Google Business Profile is invisible to ChatGPT. Learn exactly what information sources ChatGPT can access about your business and how to optimize them.",
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/chatgpt-cant-see-google-business-profile',
  },
};

function ComprehensiveSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/blog/chatgpt-cant-see-google-business-profile#article",
        "headline": "ChatGPT Can't See Your Google Business Profile — Here's What It CAN See",
        "description": "Your Google Business Profile is invisible to ChatGPT. Learn what information sources ChatGPT can access about your business.",
        "image": "https://theanswerengine.ai/images/chatgpt-cant-see-gbp.png",
        "datePublished": "2025-12-17",
        "dateModified": "2025-12-17",
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
          "@id": "https://theanswerengine.ai/blog/chatgpt-cant-see-google-business-profile"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://theanswerengine.ai/blog/chatgpt-cant-see-google-business-profile#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why can't ChatGPT see my Google Business Profile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChatGPT uses Bing's search infrastructure, not Google's. Google Business Profile data is proprietary to Google and not accessible through Bing. Additionally, many Google pages require JavaScript to render, which AI crawlers cannot execute."
            }
          },
          {
            "@type": "Question",
            "name": "What information can ChatGPT see about my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChatGPT can access your website content, Bing Places listing, Yelp profile, Facebook page, Better Business Bureau listing, industry directories, news articles mentioning your business, and any other publicly accessible web pages that don't require JavaScript to load."
            }
          },
          {
            "@type": "Question",
            "name": "Does my website affect ChatGPT recommendations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, significantly. Your website is one of the primary sources ChatGPT uses to understand your business. The content, structure, and information on your website directly influences whether ChatGPT recommends you and how it describes your services."
            }
          },
          {
            "@type": "Question",
            "name": "Can ChatGPT see my Google reviews?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Google reviews are part of Google Business Profile and require JavaScript to load. ChatGPT cannot access them. To have reviews visible to ChatGPT, display them as text on your website or build presence on platforms like Yelp that ChatGPT can read."
            }
          },
          {
            "@type": "Question",
            "name": "How do I make my business visible to ChatGPT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Focus on: 1) Optimizing your website with clear information about your services and service areas, 2) Claiming and completing your Bing Places listing, 3) Building presence on Yelp and industry directories, 4) Displaying testimonials as text on your website with schema markup."
            }
          },
          {
            "@type": "Question",
            "name": "What about Google AI Overview? Can it see my Google Business Profile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Google AI Overview is Google's own AI and can fully access your Google Business Profile, Google reviews, and all Google data. This is why you need different optimization strategies for different AI platforms—Google AI uses Google data, ChatGPT uses Bing data."
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
        "description": "Answer Engine Optimization agency helping local service businesses get cited by AI platforms."
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
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theanswerengine.ai/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://theanswerengine.ai/blog" },
          { "@type": "ListItem", "position": 3, "name": "What ChatGPT Can See" }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

export default function ChatGPTCantSeeGBP() {
  return (
    <>
      <ComprehensiveSchema />

      <main className="min-h-screen bg-[#0A0A0F]">
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-400">What ChatGPT Can See</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">AI Visibility</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight">
              ChatGPT Can't See Your Google Business Profile — <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white">Here's What It CAN See</span>
            </h1>

            {/* Featured Snippet Block */}
            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>ChatGPT cannot access your Google Business Profile, Google reviews, or Google Maps data.</strong> It uses Bing's search index instead. To be visible to ChatGPT, optimize your website, claim your Bing Places listing, and build presence on platforms like Yelp and Facebook that ChatGPT can actually crawl.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>9 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Updated December 2025</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src="/images/chatgpt-cant-see-gbp.png"
              alt="ChatGPT cannot see Google Business Profile - what AI can and cannot access about your business"
              className="w-full h-auto grayscale brightness-75"
            />
          </div>

          {/* The Assumption */}
          <section className="mb-12">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                You've done everything right with your Google Business Profile. Photos uploaded. Hours updated. Reviews collected. Services listed. Your profile is complete, verified, and ranking well in Google Maps.
              </p>
              <p>
                So when someone asks ChatGPT <span className="text-white font-medium">"Who's the best electrician in [your city]?"</span> you expect to be mentioned.
              </p>
              <p>
                But you're not. A competitor with a worse Google presence gets recommended instead.
              </p>
              <p className="text-white font-medium">
                Here's what's happening: ChatGPT literally cannot see your Google Business Profile. It's completely blind to it.
              </p>
            </div>
          </section>

          {/* Why ChatGPT Can't See GBP */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Why ChatGPT Is Blind to Google Business Profiles</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                There are two reasons ChatGPT can't access your Google Business Profile:
              </p>
            </div>

            <div className="my-8 space-y-4">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">ChatGPT Uses Bing, Not Google</h3>
                    <p className="text-gray-300">
                      Microsoft has invested billions in OpenAI. As part of that partnership, ChatGPT's web browsing feature uses Bing's search infrastructure. When ChatGPT needs current information about local businesses, it queries Bing—not Google. Your Google Business Profile data simply isn't in the database ChatGPT searches.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Google Pages Require JavaScript</h3>
                    <p className="text-gray-300">
                      Even if ChatGPT tried to access Google Business Profiles directly, it would fail. Google's business pages load content dynamically using JavaScript. AI crawlers read raw HTML—they can't execute JavaScript. So when they hit a Google Business Profile, they see an error message instead of your business information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">The Bottom Line</h4>
                  <p className="text-gray-300">
                    All the time you've invested in Google Business Profile optimization has zero direct impact on ChatGPT recommendations. It's still valuable for Google Search and Maps—but for AI platforms like ChatGPT, you need a different strategy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What ChatGPT CAN See */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">What ChatGPT CAN See About Your Business</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                The good news: ChatGPT isn't completely blind to your business. It can access several important information sources. Here's the complete breakdown:
              </p>
            </div>

            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Source</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Visible to ChatGPT?</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">What ChatGPT Gets From It</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium text-white">Your Website</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4">Services, areas served, about info, testimonials, contact details</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium text-white">Bing Places</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4">Business name, address, phone, hours, categories, description</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium text-white">Yelp</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4">Reviews, ratings, business info, photos</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium text-white">Facebook</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4">Page info, reviews, posts (public only)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium text-white">BBB</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4">Rating, accreditation, complaint history</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium text-white">Industry Directories</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Mostly</td>
                    <td className="py-4 px-4">Listings, reviews, credentials (varies by directory)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium text-white">News/PR Mentions</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4">Media coverage, press releases, awards</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-red-500/5">
                    <td className="py-4 px-4 font-medium text-white">Google Business Profile</td>
                    <td className="py-4 px-4 text-center text-red-400">✗ No</td>
                    <td className="py-4 px-4">None - completely inaccessible</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-red-500/5">
                    <td className="py-4 px-4 font-medium text-white">Google Reviews</td>
                    <td className="py-4 px-4 text-center text-red-400">✗ No</td>
                    <td className="py-4 px-4">None - requires JavaScript</td>
                  </tr>
                  <tr className="bg-red-500/5">
                    <td className="py-4 px-4 font-medium text-white">Google Maps</td>
                    <td className="py-4 px-4 text-center text-red-400">✗ No</td>
                    <td className="py-4 px-4">None - Google's proprietary data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Optimizing What ChatGPT CAN See */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">How to Optimize What ChatGPT CAN See</h2>

            <div className="space-y-8">
              {/* Website */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Your Website (Most Important)</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Your website is the primary source ChatGPT uses to understand your business. Make sure it clearly communicates:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Must Have</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Explicit service descriptions</li>
                      <li>• Service areas (neighborhood names)</li>
                      <li>• Contact information on every page</li>
                      <li>• About page with credentials</li>
                      <li>• Testimonials as actual text</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Technical Elements</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• LocalBusiness schema markup</li>
                      <li>• FAQ schema on relevant pages</li>
                      <li>• Clear H1/H2 structure</li>
                      <li>• Mobile-friendly design</li>
                      <li>• Fast loading (no heavy JS)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bing Places */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Bing Places Listing</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  This is essentially your "Google Business Profile for ChatGPT." Visit <span className="text-white">bingplaces.com</span> to claim or create your listing.
                </p>
                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Optimization Checklist</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>✓ Claim and verify your listing</li>
                    <li>✓ Complete every available field</li>
                    <li>✓ Write a keyword-rich description</li>
                    <li>✓ Select all relevant categories</li>
                    <li>✓ Add photos (logo, team, work)</li>
                    <li>✓ Keep hours and info current</li>
                    <li>✓ Import from Google (then customize)</li>
                  </ul>
                </div>
              </div>

              {/* Yelp */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Yelp Profile</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  ChatGPT frequently cites Yelp for local business recommendations. Even if you've deprioritized Yelp for years, it's worth building presence there for AI visibility.
                </p>
                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Key Actions</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>✓ Claim your Yelp business page</li>
                    <li>✓ Complete all profile information</li>
                    <li>✓ Add high-quality photos</li>
                    <li>✓ Respond to reviews (shows engagement)</li>
                    <li>✓ Encourage satisfied customers to review on Yelp</li>
                  </ul>
                </div>
              </div>

              {/* Reviews on Website */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Testimonials on Your Website</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Since ChatGPT can't see your Google reviews, the only way for it to know about your customer feedback is to display reviews directly on your website.
                </p>
                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">How to Do It Right</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>✓ Add reviews as plain text (not JavaScript widgets)</li>
                    <li>✓ Include reviewer first name and service type</li>
                    <li>✓ Add Review schema markup</li>
                    <li>✓ Link to original source when possible</li>
                    <li>✓ Create a dedicated testimonials page</li>
                    <li>✓ Add relevant testimonials to service pages</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* What About Other AI Platforms? */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">What About Other AI Platforms?</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Different AI platforms have access to different data sources. Here's how the major ones compare:
              </p>
            </div>

            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">AI Platform</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Google Data</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Bing Data</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Your Website</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium text-white">ChatGPT</td>
                    <td className="py-4 px-4 text-center text-red-400">✗</td>
                    <td className="py-4 px-4 text-center text-green-400">✓</td>
                    <td className="py-4 px-4 text-center text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium text-white">Google AI Overview</td>
                    <td className="py-4 px-4 text-center text-green-400">✓</td>
                    <td className="py-4 px-4 text-center text-red-400">✗</td>
                    <td className="py-4 px-4 text-center text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium text-white">Perplexity</td>
                    <td className="py-4 px-4 text-center text-yellow-400">Limited</td>
                    <td className="py-4 px-4 text-center text-green-400">✓</td>
                    <td className="py-4 px-4 text-center text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium text-white">Claude</td>
                    <td className="py-4 px-4 text-center text-yellow-400">Via search</td>
                    <td className="py-4 px-4 text-center text-yellow-400">Via search</td>
                    <td className="py-4 px-4 text-center text-green-400">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-white">Microsoft Copilot</td>
                    <td className="py-4 px-4 text-center text-red-400">✗</td>
                    <td className="py-4 px-4 text-center text-green-400">✓</td>
                    <td className="py-4 px-4 text-center text-green-400">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6">
              <h4 className="font-semibold text-white mb-3">The Common Denominator</h4>
              <p className="text-gray-300">
                Notice what every AI platform can access: <span className="text-white font-medium">your website</span>. While the platforms differ in what other sources they use, your website is universally visible. This makes your website the single most important asset for AI visibility across all platforms.
              </p>
            </div>
          </section>

          {/* Priority Action Plan */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Your AI Visibility Action Plan</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Based on what ChatGPT and other AI platforms can access, here's the priority order for optimization:
              </p>
            </div>

            <div className="my-8 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-white">Optimize Your Website</h4>
                  <p className="text-gray-400 text-sm">Visible to all AI platforms. Clear services, locations, testimonials as text, proper schema markup.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-white">Claim Bing Places</h4>
                  <p className="text-gray-400 text-sm">Direct pathway to ChatGPT and Microsoft Copilot. Free, takes 15 minutes, import from Google.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-white">Build Yelp Presence</h4>
                  <p className="text-gray-400 text-sm">Frequently cited by ChatGPT. Complete profile, encourage reviews, respond to feedback.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-white">Display Reviews on Website</h4>
                  <p className="text-gray-400 text-sm">Makes your Google reviews visible to AI. Add as text, include schema, link to sources.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h4 className="font-semibold text-white">Keep Google Business Profile Updated</h4>
                  <p className="text-gray-400 text-sm">Still essential for Google Search, Maps, and Google AI Overview. Don't neglect it.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-white">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Why can't ChatGPT see my Google Business Profile?</h3>
                <p className="text-gray-300 leading-relaxed">
                  ChatGPT uses Bing's search infrastructure, not Google's. Google Business Profile data is proprietary to Google and not accessible through Bing. Additionally, many Google pages require JavaScript to render, which AI crawlers cannot execute.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What information can ChatGPT see about my business?</h3>
                <p className="text-gray-300 leading-relaxed">
                  ChatGPT can access your website content, Bing Places listing, Yelp profile, Facebook page, Better Business Bureau listing, industry directories, news articles mentioning your business, and any other publicly accessible web pages that don't require JavaScript to load.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Does my website affect ChatGPT recommendations?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes, significantly. Your website is one of the primary sources ChatGPT uses to understand your business. The content, structure, and information on your website directly influences whether ChatGPT recommends you and how it describes your services.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Can ChatGPT see my Google reviews?</h3>
                <p className="text-gray-300 leading-relaxed">
                  No. Google reviews are part of Google Business Profile and require JavaScript to load. ChatGPT cannot access them. To have reviews visible to ChatGPT, display them as text on your website or build presence on platforms like Yelp that ChatGPT can read.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">How do I make my business visible to ChatGPT?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Focus on: 1) Optimizing your website with clear information about your services and service areas, 2) Claiming and completing your Bing Places listing, 3) Building presence on Yelp and industry directories, 4) Displaying testimonials as text on your website with schema markup.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What about Google AI Overview? Can it see my Google Business Profile?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Google AI Overview is Google's own AI and can fully access your Google Business Profile, Google reviews, and all Google data. This is why you need different optimization strategies for different AI platforms—Google AI uses Google data, ChatGPT uses Bing data.
                </p>
              </div>
            </div>
          </section>

          {/* Related Content */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/do-google-reviews-affect-ai-recommendations" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.08] transition-colors group">
                <div className="text-white text-sm font-medium mb-2">Reviews & AI</div>
                <div className="text-white font-semibold group-hover:text-white transition-colors">Do Google Reviews Affect AI Recommendations?</div>
              </Link>
              <Link href="/blog/bing-places-chatgpt-connection" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.08] transition-colors group">
                <div className="text-white text-sm font-medium mb-2">Hidden Connection</div>
                <div className="text-white font-semibold group-hover:text-white transition-colors">Why Bing Places Matters (The ChatGPT Connection)</div>
              </Link>
              <Link href="/blog/check-if-ai-recommends-your-business" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.08] transition-colors group">
                <div className="text-white text-sm font-medium mb-2">DIY Guide</div>
                <div className="text-white font-semibold group-hover:text-white transition-colors">How to Check If AI Recommends Your Business</div>
              </Link>
              <Link href="/blog/why-chatgpt-recommends-competitors" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.08] transition-colors group">
                <div className="text-white text-sm font-medium mb-2">Problem Solving</div>
                <div className="text-white font-semibold group-hover:text-white transition-colors">Why ChatGPT Recommends Your Competitors</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12 border-t border-white/[0.05]">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">Curious What ChatGPT Actually Sees About Your Business?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our free AEO audit tests your visibility across ChatGPT, Perplexity, Google AI Overview, and more. Find out exactly what information AI has access to—and what's missing.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-white to-white text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Get Your Free AEO Audit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-gray-500 text-sm mt-4">See the gap between what you think AI knows and what it actually sees.</p>
          </section>
        </article>
      </main>
    </>
  );
}
