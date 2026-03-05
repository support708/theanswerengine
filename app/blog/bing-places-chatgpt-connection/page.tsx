import { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Why Bing Places Matters More Than You Think (The ChatGPT Connection)",
  description: "ChatGPT pulls local business data from Bing, not Google. Learn why claiming your Bing Places listing is the hidden key to AI visibility most businesses ignore.",
  openGraph: {
    title: "Why Bing Places Matters More Than You Think (The ChatGPT Connection)",
    description: "ChatGPT pulls local business data from Bing, not Google. Learn why claiming your Bing Places listing is the hidden key to AI visibility most businesses ignore.",
    type: 'article',
    url: 'https://theanswerengine.ai/blog/bing-places-chatgpt-connection',
    images: [{ url: '/images/bing-places-chatgpt-connection.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Why Bing Places Matters More Than You Think (The ChatGPT Connection)",
    description: "ChatGPT pulls local business data from Bing, not Google. Learn why claiming your Bing Places listing is the hidden key to AI visibility most businesses ignore.",
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/bing-places-chatgpt-connection',
  },
};

function ComprehensiveSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://theanswerengine.ai/blog/bing-places-chatgpt-connection#article",
        "headline": "Why Bing Places Matters More Than You Think (The ChatGPT Connection)",
        "description": "ChatGPT pulls local business data from Bing, not Google. Learn why Bing Places is the hidden key to AI visibility.",
        "image": "https://theanswerengine.ai/images/bing-places-chatgpt-connection.png",
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
          "@id": "https://theanswerengine.ai/blog/bing-places-chatgpt-connection"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://theanswerengine.ai/blog/bing-places-chatgpt-connection#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does ChatGPT use Bing for local business information?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. ChatGPT's browsing functionality is powered by Bing's search index. When ChatGPT searches for local businesses, it retrieves information from Bing's index, which includes Bing Places business listings. This makes Bing Places a direct pathway to ChatGPT visibility."
            }
          },
          {
            "@type": "Question",
            "name": "How do I claim my Bing Places listing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Visit bingplaces.com and sign in with a Microsoft account. Search for your business to see if a listing already exists. If it does, claim it. If not, create a new listing. You'll need to verify ownership through phone, email, or postcard. Complete all profile fields including business hours, services, and photos."
            }
          },
          {
            "@type": "Question",
            "name": "Is Bing Places the same as Google Business Profile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bing Places is Microsoft's equivalent to Google Business Profile. Both are free business listing services that help your business appear in search results and maps. The key difference: Google Business Profile feeds Google Search and Maps, while Bing Places feeds Bing Search, Bing Maps, and importantly, ChatGPT."
            }
          },
          {
            "@type": "Question",
            "name": "Can I import my Google Business Profile to Bing Places?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Bing Places offers a direct import feature from Google Business Profile. During setup, you can authorize Bing to pull your business information from Google, saving time on data entry. However, you should still review and optimize the listing specifically for Bing."
            }
          },
          {
            "@type": "Question",
            "name": "Why doesn't ChatGPT show my business when I have a Google Business Profile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChatGPT cannot access Google's data directly. It uses Bing's search index for real-time information. If you only have a Google Business Profile and haven't claimed your Bing Places listing, ChatGPT may not have accurate or complete information about your business to include in recommendations."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take for Bing Places to affect ChatGPT results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "After claiming and optimizing your Bing Places listing, it typically takes 2-4 weeks for the information to be indexed and potentially surface in ChatGPT responses. Verification must be completed first, and more complete profiles are indexed faster and more thoroughly."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://theanswerengine.ai/blog/bing-places-chatgpt-connection#howto",
        "name": "How to Claim Your Bing Places Listing for ChatGPT Visibility",
        "description": "Step-by-step guide to claiming and optimizing your Bing Places listing to improve visibility in ChatGPT and other AI platforms.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Create or Sign Into Microsoft Account",
            "text": "Visit bingplaces.com and sign in with a Microsoft account. If you don't have one, create a free account first."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Search for Your Business",
            "text": "Search for your business name and address to see if a listing already exists. If it does, you'll claim it. If not, you'll create a new one."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Import from Google or Create New",
            "text": "Choose to import your Google Business Profile data or manually enter your business information. Importing saves time but review all details."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Complete All Profile Fields",
            "text": "Fill in business name, address, phone, website, hours, categories, services, and description. More complete profiles perform better."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Add Photos and Media",
            "text": "Upload your logo, storefront photo, team photos, and images of your work. Visual content helps both users and AI understand your business."
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Verify Ownership",
            "text": "Complete verification via phone call, text, email, or postcard. Verification is required for your listing to appear in search results."
          },
          {
            "@type": "HowToStep",
            "position": 7,
            "name": "Monitor and Update Regularly",
            "text": "Keep your listing current with seasonal hours, new services, and fresh photos. Active listings are favored in search results."
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
          { "@type": "ListItem", "position": 3, "name": "Bing Places & ChatGPT Connection" }
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

export default function BingPlacesChatGPTConnection() {
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
            <span className="text-gray-400">Bing Places & ChatGPT</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">
              <span className="text-sm font-semibold tracking-wider uppercase text-white">AI Visibility</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight">
              Why Bing Places Matters More Than You Think <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white">(The ChatGPT Connection)</span>
            </h1>

            {/* Featured Snippet Block */}
            <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6 mb-8">
              <p className="text-lg text-white leading-relaxed">
                <strong>ChatGPT uses Bing, not Google, for real-time local business information.</strong> When someone asks ChatGPT for a business recommendation in your area, it searches Bing's index—which includes Bing Places listings. If you've only optimized your Google Business Profile, you're invisible to the AI platform with over 400 million weekly users.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>10 min read</span>
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
              src="/images/bing-places-chatgpt-connection.png"
              alt="Bing Places and ChatGPT connection - how Microsoft's business listings power AI recommendations"
              className="w-full h-auto grayscale brightness-75"
            />
          </div>

          {/* The Problem */}
          <section className="mb-12">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                If you're like most local business owners, you've invested significant time in your Google Business Profile. You've added photos, collected reviews, posted updates, and optimized every field. Google shows you prominently in local search results.
              </p>
              <p>
                Then someone asks ChatGPT: <span className="text-white font-medium">"Who's the best plumber near me?"</span>
              </p>
              <p>
                Your competitor gets mentioned. You don't.
              </p>
              <p>
                The reason is simpler than you'd expect: <span className="text-white font-medium">ChatGPT doesn't use Google. It uses Bing.</span>
              </p>
            </div>
          </section>

          {/* The Microsoft-OpenAI Connection */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">The Microsoft-OpenAI Connection Explained</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Microsoft has invested billions of dollars in OpenAI, the company behind ChatGPT. As part of this partnership, ChatGPT's web browsing capability is powered by Bing's search infrastructure—not Google's.
              </p>
              <p>
                When ChatGPT needs current information—like local business recommendations—it queries Bing's search index. This means:
              </p>
            </div>

            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Data Source</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Google Uses</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">ChatGPT Uses</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Google Business Profile</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-red-400">✗ No</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Bing Places</td>
                    <td className="py-4 px-4 text-center text-red-400">✗ No</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Your Website</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">Yelp</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Google Reviews</td>
                    <td className="py-4 px-4 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-4 text-center text-red-400">✗ No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">The Data Gap</h4>
                  <p className="text-gray-300">
                    Your perfectly optimized Google Business Profile is invisible to ChatGPT. Meanwhile, your competitor who claimed their free Bing Places listing six months ago is getting recommended to hundreds of potential customers asking AI for help.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why This Matters Now */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Why Bing Places Matters More in 2025</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                For years, Bing Places was an afterthought. Google dominated search with over 90% market share, so most businesses reasonably focused their efforts there.
              </p>
              <p>
                But the rise of AI has changed the equation. ChatGPT now has over 200 million weekly active users. Many of those users ask questions like:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>"Find me a good contractor for kitchen remodeling"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>"Who's the best real estate agent in [neighborhood]?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>"Recommend an HVAC company that does same-day service"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>"What's the highest-rated dentist near downtown?"</span>
                </li>
              </ul>
              <p>
                When ChatGPT answers these questions, it's pulling from Bing's index. Your Bing Places listing directly influences whether you get mentioned.
              </p>
            </div>

            <div className="my-8 grid sm:grid-cols-3 gap-4">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-white mb-2">400M+</div>
                <div className="text-gray-400 text-sm">Weekly ChatGPT users</div>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-white mb-2">~5%</div>
                <div className="text-gray-400 text-sm">Local businesses with optimized Bing Places</div>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-white mb-2">$0</div>
                <div className="text-gray-400 text-sm">Cost to claim your listing</div>
              </div>
            </div>
          </section>

          {/* How to Claim Your Bing Places Listing */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">How to Claim Your Bing Places Listing (Step-by-Step)</h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Go to Bing Places for Business</h3>
                    <p className="text-gray-300 mb-4">
                      Visit <span className="text-white">bingplaces.com</span> and click "Get Started" or "Claim your business." You'll need to sign in with a Microsoft account—if you don't have one, you can create a free account in minutes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Search for Your Business</h3>
                    <p className="text-gray-300 mb-4">
                      Search your business name and address. Bing may already have a listing for you (pulled from various data sources). If so, you'll claim the existing listing. If not, you'll create a new one.
                    </p>
                    <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                      <p className="text-gray-400 text-sm"><strong className="text-gray-300">Pro tip:</strong> Even if Bing has your business info, it's often incomplete or outdated. Claiming your listing lets you control what information appears.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Import from Google (Optional)</h3>
                    <p className="text-gray-300 mb-4">
                      Bing offers a "Import from Google" option that pulls your Google Business Profile data automatically. This saves significant time on data entry. You'll authorize Bing to access your Google Business account, and it imports your business details, categories, hours, and photos.
                    </p>
                    <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                      <p className="text-gray-400 text-sm"><strong className="text-gray-300">Important:</strong> Even if you import from Google, review every field. Some data may not transfer correctly, and you'll want to optimize specifically for Bing's format.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Complete Every Field</h3>
                    <p className="text-gray-300 mb-4">
                      Fill in all available information. More complete profiles rank better in Bing results and provide richer data for ChatGPT to reference.
                    </p>
                    <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                      <p className="text-gray-400 text-sm mb-2"><strong className="text-gray-300">Essential fields:</strong></p>
                      <ul className="text-gray-400 text-sm space-y-1 ml-4">
                        <li>• Business name (exactly as it appears everywhere else)</li>
                        <li>• Complete address with suite/unit numbers</li>
                        <li>• Primary and secondary phone numbers</li>
                        <li>• Website URL</li>
                        <li>• Business hours (including holiday hours)</li>
                        <li>• Business categories (choose all that apply)</li>
                        <li>• Services offered (be specific)</li>
                        <li>• Business description (use keywords naturally)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-white font-bold text-lg">5</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Add Quality Photos</h3>
                    <p className="text-gray-300 mb-4">
                      Upload your logo, storefront photo (if applicable), team photos, and images showcasing your work. Photos help users recognize your business and provide context for AI systems analyzing your business.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-white font-bold text-lg">6</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Verify Your Listing</h3>
                    <p className="text-gray-300 mb-4">
                      Bing requires verification to confirm you're authorized to manage this business listing. Options typically include phone verification, email verification, or a postcard mailed to your business address. Complete this step—unverified listings have limited visibility.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-white font-bold text-lg">7</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Maintain and Update</h3>
                    <p className="text-gray-300 mb-4">
                      Set a quarterly reminder to review your listing. Update seasonal hours, add new services, refresh photos, and ensure all information stays current. Active, maintained listings perform better in search results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Optimization Tips */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Optimizing Your Bing Places Listing for AI</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Simply claiming your listing isn't enough. To maximize your chances of being recommended by ChatGPT, optimize these key elements:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <h3 className="font-semibold text-white mb-3">Business Description</h3>
                <p className="text-gray-400 text-sm mb-3">Write a natural, detailed description that includes:</p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• What services you provide</li>
                  <li>• Areas/neighborhoods you serve</li>
                  <li>• What makes you different</li>
                  <li>• Your experience/credentials</li>
                </ul>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <h3 className="font-semibold text-white mb-3">Business Categories</h3>
                <p className="text-gray-400 text-sm mb-3">Select all relevant categories:</p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Primary category: most specific match</li>
                  <li>• Secondary categories: related services</li>
                  <li>• Don't stretch—irrelevant categories hurt</li>
                  <li>• Review annually for new options</li>
                </ul>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <h3 className="font-semibold text-white mb-3">Service Areas</h3>
                <p className="text-gray-400 text-sm mb-3">Be specific about where you work:</p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• List neighborhoods by name</li>
                  <li>• Include suburbs/cities you serve</li>
                  <li>• Mention landmarks if relevant</li>
                  <li>• Set accurate service radius</li>
                </ul>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
                <h3 className="font-semibold text-white mb-3">Hours & Availability</h3>
                <p className="text-gray-400 text-sm mb-3">Keep this current:</p>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Regular business hours</li>
                  <li>• Holiday schedule</li>
                  <li>• Special hours (seasonal)</li>
                  <li>• Emergency/after-hours if offered</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What About Google? */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Should You Still Maintain Your Google Business Profile?</h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <span className="text-white font-medium">Absolutely yes.</span> Google still dominates traditional search. Your Google Business Profile directly impacts:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span><strong className="text-white">Google Search results</strong> — Still 90%+ of search traffic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span><strong className="text-white">Google Maps</strong> — Where most local searches end up</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span><strong className="text-white">Google AI Overview</strong> — Google's own AI can read your GBP</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span><strong className="text-white">Customer trust</strong> — Many people still check Google before contacting</span>
                </li>
              </ul>
              <p>
                The strategy is both, not either/or. Optimize Google Business Profile for Google visibility. Optimize Bing Places for ChatGPT and Microsoft Copilot visibility. Together, they cover the majority of how people discover local businesses in 2025.
              </p>
            </div>

            <div className="my-8 bg-gradient-to-br from-white/[0.02] to-white/[0.02] border border-white/[0.08] rounded-xl p-6">
              <h4 className="font-semibold text-white mb-3">The Visibility Stack for 2025</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-white">1.</span>
                  <span><strong className="text-white">Google Business Profile</strong> → Google Search, Maps, AI Overview</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white">2.</span>
                  <span><strong className="text-white">Bing Places</strong> → ChatGPT, Bing Search, Microsoft Copilot</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white">3.</span>
                  <span><strong className="text-white">Your Website</strong> → All AI platforms, traditional search, direct traffic</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white">4.</span>
                  <span><strong className="text-white">Third-party directories</strong> → Yelp, industry-specific platforms, Perplexity</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-white">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Does ChatGPT use Bing for local business information?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. ChatGPT's browsing functionality is powered by Bing's search index. When ChatGPT searches for local businesses, it retrieves information from Bing's index, which includes Bing Places business listings. This makes Bing Places a direct pathway to ChatGPT visibility.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">How do I claim my Bing Places listing?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Visit bingplaces.com and sign in with a Microsoft account. Search for your business to see if a listing already exists. If it does, claim it. If not, create a new listing. You'll need to verify ownership through phone, email, or postcard. Complete all profile fields including business hours, services, and photos.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Is Bing Places the same as Google Business Profile?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Bing Places is Microsoft's equivalent to Google Business Profile. Both are free business listing services that help your business appear in search results and maps. The key difference: Google Business Profile feeds Google Search and Maps, while Bing Places feeds Bing Search, Bing Maps, and importantly, ChatGPT.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Can I import my Google Business Profile to Bing Places?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. Bing Places offers a direct import feature from Google Business Profile. During setup, you can authorize Bing to pull your business information from Google, saving time on data entry. However, you should still review and optimize the listing specifically for Bing.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Why doesn't ChatGPT show my business when I have a Google Business Profile?</h3>
                <p className="text-gray-300 leading-relaxed">
                  ChatGPT cannot access Google's data directly. It uses Bing's search index for real-time information. If you only have a Google Business Profile and haven't claimed your Bing Places listing, ChatGPT may not have accurate or complete information about your business to include in recommendations.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">How long does it take for Bing Places to affect ChatGPT results?</h3>
                <p className="text-gray-300 leading-relaxed">
                  After claiming and optimizing your Bing Places listing, it typically takes 2-4 weeks for the information to be indexed and potentially surface in ChatGPT responses. Verification must be completed first, and more complete profiles are indexed faster and more thoroughly.
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
              <Link href="/blog/check-if-ai-recommends-your-business" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.08] transition-colors group">
                <div className="text-white text-sm font-medium mb-2">DIY Guide</div>
                <div className="text-white font-semibold group-hover:text-white transition-colors">How to Check If AI Recommends Your Business</div>
              </Link>
              <Link href="/blog/why-chatgpt-isnt-recommending-your-business" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.08] transition-colors group">
                <div className="text-white text-sm font-medium mb-2">Troubleshooting</div>
                <div className="text-white font-semibold group-hover:text-white transition-colors">Why ChatGPT Isn't Recommending Your Business</div>
              </Link>
              <Link href="/blog/aeo-vs-seo" className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-white/[0.08] transition-colors group">
                <div className="text-white text-sm font-medium mb-2">Comparison</div>
                <div className="text-white font-semibold group-hover:text-white transition-colors">AEO vs SEO: What's the Difference?</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12 border-t border-white/[0.05]">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">Not Sure If AI Can Find Your Business?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our free AEO audit checks your visibility across ChatGPT, Perplexity, Google AI Overview, and more. See exactly where you're being recommended—and where you're missing.
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
            <p className="text-gray-500 text-sm mt-4">Discover if ChatGPT is recommending your competitors instead of you.</p>
          </section>
        </article>
      </main>
    </>
  );
}
