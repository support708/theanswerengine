import { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Do Google Reviews Affect AI Recommendations? (The Surprising Truth)",
  description: "ChatGPT can't read your Google reviews. Learn which reviews AI platforms actually see, why your 5-star rating might be invisible, and how to fix it.",
  openGraph: {
    title: "Do Google Reviews Affect AI Recommendations? (The Surprising Truth)",
    description: "ChatGPT can't read your Google reviews. Learn which reviews AI platforms actually see and how to fix your visibility.",
    type: 'article',
    url: 'https://theanswerengine.ai/blog/do-google-reviews-affect-ai-recommendations',
    images: [{ url: 'https://theanswerengine.ai/images/google-reviews-ai-recommendations.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Do Google Reviews Affect AI Recommendations?",
    description: "ChatGPT can't read your Google reviews. Learn which reviews AI platforms actually see.",
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/do-google-reviews-affect-ai-recommendations',
  },
};

function ComprehensiveSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/blog/do-google-reviews-affect-ai-recommendations#article",
        "headline": "Do Google Reviews Affect AI Recommendations? (The Surprising Truth)",
        "description": "ChatGPT can't read your Google reviews. Learn which reviews AI platforms actually see and how to fix your visibility.",
        "image": "https://theanswerengine.ai/images/google-reviews-ai-recommendations.png",
        "datePublished": "2025-12-17",
        "dateModified": "2025-12-17",
        "author": {
          "@type": "Person",
          "name": "JB",
          "url": "https://theanswerengine.ai/about"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://theanswerengine.ai/#organization"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://theanswerengine.ai/blog/do-google-reviews-affect-ai-recommendations"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://theanswerengine.ai/blog/do-google-reviews-affect-ai-recommendations#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can ChatGPT see my Google reviews?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. ChatGPT cannot directly access Google reviews because Google's review pages require JavaScript to load, which AI crawlers can't execute. ChatGPT only sees reviews that are published on your own website or on third-party sites it can crawl."
            }
          },
          {
            "@type": "Question",
            "name": "Which review platforms can AI actually read?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI platforms can read reviews from Yelp, Facebook, Better Business Bureau, industry-specific directories, and reviews you've embedded on your own website. The key is whether the reviews are accessible without JavaScript rendering."
            }
          },
          {
            "@type": "Question",
            "name": "Should I still collect Google reviews?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. Google reviews still matter for Google Search rankings, Google Maps visibility, and customer trust. But for AI visibility specifically, you need to diversify where your reviews appear and display them on your own website."
            }
          },
          {
            "@type": "Question",
            "name": "How do I make my reviews visible to AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Display your best reviews directly on your website as text (not embedded widgets that require JavaScript). Use Review schema markup to help AI understand they're testimonials. Encourage customers to also leave reviews on Yelp, Facebook, and industry directories."
            }
          },
          {
            "@type": "Question",
            "name": "Do reviews affect what ChatGPT recommends?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but only reviews ChatGPT can see. Research shows AI platforms reference 'highly rated' and 'top-reviewed' businesses in their recommendations. The reviews must be on crawlable platforms or your own website for AI to factor them into recommendations."
            }
          },
          {
            "@type": "Question",
            "name": "Why does ChatGPT recommend competitors with fewer Google reviews than me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your competitors likely have reviews visible on platforms ChatGPT can access—their website, Yelp, or Bing-indexed directories. Even with fewer total reviews, if those reviews are visible to AI, they have an advantage over your invisible Google reviews."
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
          { "@type": "ListItem", "position": 3, "name": "Do Google Reviews Affect AI Recommendations?" }
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

export default function GoogleReviewsAIRecommendations() {
  return (
    <>
      <ComprehensiveSchema />

      <main className="min-h-screen bg-[#0A0A0F]">
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#f27d24] transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-[#f27d24] transition-colors">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-400">Google Reviews & AI</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-[#f27d24]/10 border border-[#f27d24]/20">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">AI Visibility</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight">
              Do Google Reviews Affect AI Recommendations? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f]">(The Surprising Truth)</span>
            </h1>

            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden border border-white/10">
              <img
                src="/images/google-reviews-ai-recommendations.png"
                alt="Do Google Reviews Affect AI Recommendations - The Surprising Truth"
                className="w-full"
              />
            </div>

            {/* Featured Snippet Block */}
            <div className="bg-gradient-to-br from-[#f27d24]/5 to-[#d66d1f]/5 border border-[#f27d24]/20 rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>No, ChatGPT cannot see your Google reviews.</strong> Google's review pages require JavaScript to load, which AI crawlers can't execute. Your 200+ five-star reviews are invisible to ChatGPT, Claude, and Perplexity. To get AI recommendations, you need reviews on platforms AI can actually read—your website, Yelp, and Bing-indexed directories.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Updated December 2025</span>
              </div>
            </div>
          </header>

          {/* The Problem */}
          <section className="mb-12">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                You've spent years building your Google reviews. Maybe you have 150, 200, or even 500+ reviews with a stellar 4.8-star average. Customers mention you're "the best in town." Your Google Business Profile looks incredible.
              </p>
              <p>
                Then someone asks ChatGPT: <span className="text-white font-medium">"Who's the best plumber in [your city]?"</span>
              </p>
              <p>
                And you're not mentioned. Your competitor with half your reviews gets the recommendation instead.
              </p>
              <p>
                What's going on?
              </p>
              <p className="text-white font-medium">
                Here's the uncomfortable truth: ChatGPT can't see your Google reviews at all.
              </p>
            </div>
          </section>

          {/* Why ChatGPT Can't See Google Reviews */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Why ChatGPT Can't Read Your Google Reviews</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Google reviews exist behind a JavaScript wall. When you visit a Google Business Profile, your browser executes JavaScript code that loads the reviews dynamically. You see them because your browser runs that code.
              </p>
              <p>
                AI crawlers don't work that way. They read raw HTML—the underlying code of a webpage before JavaScript runs. When ChatGPT or other AI platforms try to access Google review pages, they see something like this:
              </p>

              <div className="bg-black/40 rounded-xl p-6 border border-white/10 font-mono text-sm text-gray-400">
                <p>"We're sorry, but this page requires JavaScript to function properly."</p>
              </div>

              <p>
                That's it. No reviews. No ratings. No customer testimonials. Just an error message.
              </p>
              <p>
                This isn't a bug—it's how Google protects its data. And it means <span className="text-white font-medium">every Google review you've collected is invisible to AI platforms</span> that might otherwise recommend your business.
              </p>
            </div>
          </section>

          {/* The Visibility Gap */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">The AI Visibility Gap: What This Means for Your Business</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                When ChatGPT provides local recommendations, it often mentions "highly rated" or "top-reviewed" businesses. But it's only referencing reviews it can actually see.
              </p>
              <p>
                This creates a significant gap:
              </p>
            </div>

            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Platform</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Google Sees</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">ChatGPT Sees</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Perplexity Sees</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Google Reviews</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-red-400">✗ No</td>
                    <td className="py-4 px-4 text-center text-red-400">✗ No</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Yelp Reviews</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Facebook Reviews</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Your Website (text)</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">BBB / Industry Directories</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Website Widgets (JS)</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-red-400">✗ No</td>
                    <td className="py-4 px-4 text-center text-red-400">✗ No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#f27d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">The Widget Trap</h4>
                  <p className="text-gray-300">
                    Many businesses embed Google review widgets on their website thinking it helps. But those widgets also use JavaScript—so AI still can't read them. The reviews need to be actual text on your page, not dynamically loaded content.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What AI Can See */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">What Review Sources AI Actually Uses</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                AI platforms aren't completely blind to your reputation. They can access reviews from sources that don't require JavaScript:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-400 font-bold">Y</span>
                  </div>
                  <h3 className="font-semibold text-white">Yelp</h3>
                </div>
                <p className="text-gray-400 text-sm">ChatGPT frequently cites Yelp ratings and review snippets. Yelp's pages are largely crawlable without JavaScript.</p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 font-bold">f</span>
                  </div>
                  <h3 className="font-semibold text-white">Facebook</h3>
                </div>
                <p className="text-gray-400 text-sm">Public Facebook pages and reviews are accessible to AI. Community recommendations in groups can also surface.</p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 font-bold">BBB</span>
                  </div>
                  <h3 className="font-semibold text-white">Better Business Bureau</h3>
                </div>
                <p className="text-gray-400 text-sm">BBB ratings and complaint histories are crawlable. AI uses this as a trust signal for business recommendations.</p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f27d24]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[#f27d24] font-bold">W</span>
                  </div>
                  <h3 className="font-semibold text-white">Your Website</h3>
                </div>
                <p className="text-gray-400 text-sm">Reviews displayed as plain text on your website are fully visible to AI. This is the most controllable option.</p>
              </div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Industry-specific directories also matter. If you're a contractor, reviews on HomeAdvisor or Angi can influence AI recommendations. For healthcare providers, Healthgrades and Zocdoc reviews are crawlable. Real estate agents benefit from Zillow and Realtor.com reviews.
              </p>
            </div>
          </section>

          {/* How to Fix It */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">How to Make Your Reviews Visible to AI</h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f27d24] rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Display Reviews as Text on Your Website</h3>
                    <p className="text-gray-300 mb-4">
                      Don't use JavaScript widgets. Manually add your best reviews as actual text content on your site. Create a dedicated testimonials page or add them to service pages.
                    </p>
                    <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                      <p className="text-gray-400 text-sm"><strong className="text-gray-300">Pro tip:</strong> Include the reviewer's first name and service type: "John S. - Emergency Plumbing Repair" This helps AI understand the context of the review.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f27d24] rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Add Review Schema Markup</h3>
                    <p className="text-gray-300 mb-4">
                      Use structured data to explicitly tell AI platforms "these are customer reviews." Review schema helps AI understand what it's reading and increases citation likelihood.
                    </p>
                    <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                      <p className="text-gray-400 text-sm"><strong className="text-gray-300">Key schema types:</strong> Review, AggregateRating, and Testimonial. Your web developer can implement these, or use plugins like RankMath or Yoast SEO.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f27d24] rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Diversify Your Review Platforms</h3>
                    <p className="text-gray-300 mb-4">
                      Don't put all your eggs in the Google basket. Actively request reviews on Yelp, Facebook, and industry-specific directories that AI can crawl.
                    </p>
                    <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                      <p className="text-gray-400 text-sm"><strong className="text-gray-300">Rotation strategy:</strong> Ask every third customer to leave a Yelp review instead of Google. Build presence across multiple platforms over time.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f27d24] rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Link to Original Reviews</h3>
                    <p className="text-gray-300 mb-4">
                      When displaying reviews on your site, include a "See original review" link to the source. This adds credibility for human visitors and helps AI verify authenticity.
                    </p>
                    <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                      <p className="text-gray-400 text-sm"><strong className="text-gray-300">Example:</strong> "Fixed our AC on the hottest day of the year. Lifesaver!" - Maria T. <span className="text-[#f27d24]">[See review on Yelp]</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Should You Still Collect Google Reviews */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Should You Still Collect Google Reviews?</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <span className="text-white font-medium">Absolutely yes.</span> Google reviews still matter enormously—just not for AI recommendations specifically.
              </p>
              <p>
                Google reviews directly impact:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#f27d24] mt-1">•</span>
                  <span><strong className="text-white">Google Search rankings</strong> — Reviews are a major local SEO factor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f27d24] mt-1">•</span>
                  <span><strong className="text-white">Google Maps visibility</strong> — More reviews = more prominent map placement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f27d24] mt-1">•</span>
                  <span><strong className="text-white">Google AI Overviews</strong> — Google's own AI can read Google reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f27d24] mt-1">•</span>
                  <span><strong className="text-white">Customer trust</strong> — People still check Google reviews before calling</span>
                </li>
              </ul>
              <p>
                The strategy isn't either/or—it's both. Continue building Google reviews for Google visibility, while also creating review presence on AI-accessible platforms.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-white">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Can ChatGPT see my Google reviews?</h3>
                <p className="text-gray-300 leading-relaxed">
                  No. ChatGPT cannot directly access Google reviews because Google's review pages require JavaScript to load, which AI crawlers can't execute. ChatGPT only sees reviews that are published on your own website or on third-party sites it can crawl.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Which review platforms can AI actually read?</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI platforms can read reviews from Yelp, Facebook, Better Business Bureau, industry-specific directories, and reviews you've embedded on your own website. The key is whether the reviews are accessible without JavaScript rendering.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Why does ChatGPT recommend competitors with fewer reviews than me?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your competitors likely have reviews visible on platforms ChatGPT can access—their website, Yelp, or Bing-indexed directories. Even with fewer total reviews, if those reviews are visible to AI, they have an advantage over your invisible Google reviews.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">How do I make my reviews visible to AI?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Display your best reviews directly on your website as text (not embedded widgets that require JavaScript). Use Review schema markup to help AI understand they're testimonials. Encourage customers to also leave reviews on Yelp, Facebook, and industry directories.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Do reviews affect what ChatGPT recommends?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes, but only reviews ChatGPT can see. Research shows AI platforms reference "highly rated" and "top-reviewed" businesses in their recommendations. The reviews must be on crawlable platforms or your own website for AI to factor them into recommendations.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Should I still collect Google reviews?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes, absolutely. Google reviews still matter for Google Search rankings, Google Maps visibility, and customer trust. But for AI visibility specifically, you need to diversify where your reviews appear and display them on your own website.
                </p>
              </div>
            </div>
          </section>

          {/* Related Content */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/check-if-ai-recommends-your-business" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-[#f27d24]/30 transition-colors group">
                <div className="text-[#f27d24] text-sm font-medium mb-2">DIY Guide</div>
                <div className="text-white font-semibold group-hover:text-[#f27d24] transition-colors">How to Check If AI Recommends Your Business</div>
              </Link>
              <Link href="/blog/how-chatgpt-chooses-businesses-to-recommend" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-[#f27d24]/30 transition-colors group">
                <div className="text-[#f27d24] text-sm font-medium mb-2">AI Algorithm</div>
                <div className="text-white font-semibold group-hover:text-[#f27d24] transition-colors">How ChatGPT Chooses Businesses to Recommend</div>
              </Link>
              <Link href="/blog/why-chatgpt-recommends-competitors" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-[#f27d24]/30 transition-colors group">
                <div className="text-[#f27d24] text-sm font-medium mb-2">Problem Solving</div>
                <div className="text-white font-semibold group-hover:text-[#f27d24] transition-colors">Why ChatGPT Recommends Your Competitors</div>
              </Link>
              <Link href="/blog/aeo-vs-seo" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-[#f27d24]/30 transition-colors group">
                <div className="text-[#f27d24] text-sm font-medium mb-2">Comparison</div>
                <div className="text-white font-semibold group-hover:text-[#f27d24] transition-colors">AEO vs SEO: What's the Difference?</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12 border-t border-white/[0.05]">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">Want to Know What AI Actually Sees About Your Business?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our free AEO audit shows you exactly which platforms are recommending you, which are recommending competitors, and what's missing from your AI visibility strategy.
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
            <p className="text-gray-500 text-sm mt-4">See the gap between your Google reputation and your AI visibility.</p>
          </section>
        </article>
      </main>
    </>
  );
}
