import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';
export const dynamicParams = true;

export const metadata: Metadata = {
  title: "How Home Service Companies Are Dominating AI Search Right Now",
  description: "Learn the exact strategies plumbers, HVAC pros, roofers, and electricians are using to get recommended by ChatGPT, Google AI, and Perplexity. Real data, real results.",
  keywords: ["home service AI search", "HVAC AI optimization", "plumber ChatGPT", "home services AI marketing", "answer engine optimization home services", "local service AI visibility", "AI search home contractors"],
  openGraph: {
    title: "How Home Service Companies Are Dominating AI Search Right Now",
    description: "The playbook smart home service companies are using to get recommended by AI platforms. Real strategies, real data.",
    type: 'article',
    url: 'https://theanswerengine.ai/blog/how-home-service-companies-dominate-ai-search',
    images: [{ url: 'https://theanswerengine.ai/api/og/how-home-service-companies-dominate-ai-search', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "How Home Service Companies Are Dominating AI Search Right Now",
    description: "The playbook smart home service companies are using to get recommended by AI platforms.",
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/how-home-service-companies-dominate-ai-search',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://theanswerengine.ai/blog/how-home-service-companies-dominate-ai-search#article",
      "headline": "How Home Service Companies Are Dominating AI Search Right Now",
      "description": "Learn the exact strategies plumbers, HVAC pros, roofers, and electricians are using to get recommended by ChatGPT, Google AI, and Perplexity.",
      "image": "https://theanswerengine.ai/api/og/how-home-service-companies-dominate-ai-search",
      "datePublished": "2026-03-17",
      "dateModified": "2026-03-17",
      "author": {
        "@type": "Organization",
        "name": "The Answer Engine Team",
        "url": "https://theanswerengine.ai/about"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://theanswerengine.ai/#organization"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://theanswerengine.ai/blog/how-home-service-companies-dominate-ai-search"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://theanswerengine.ai/blog/how-home-service-companies-dominate-ai-search#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do home service companies really need to worry about AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. According to BrightLocal's 2026 research, 45% of consumers now use AI to find local business recommendations, up from just 6% in 2025. If your plumbing, HVAC, or roofing company is not visible to AI platforms, you are missing a rapidly growing segment of potential customers."
          }
        },
        {
          "@type": "Question",
          "name": "Which AI platforms recommend home service businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChatGPT, Google AI Overviews, Perplexity, Claude, and Gemini all surface local service recommendations. ChatGPT drives 87.4% of AI referral traffic, and Google AI Overviews now appear in over 25% of all searches. Each platform pulls data from different sources, so your business needs visibility across multiple channels."
          }
        },
        {
          "@type": "Question",
          "name": "What is the most important thing a home service company can do for AI visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Build a content-rich website with structured data markup. Research shows that AI platforms go from 16% to 54% accuracy when content uses structured data. Your website should clearly state what services you offer, which areas you serve, your hours, and your credentials, with nothing left implied."
          }
        },
        {
          "@type": "Question",
          "name": "How do reviews affect AI recommendations for home service companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviews matter, but only reviews AI can actually read. Google reviews are invisible to most AI platforms because they require JavaScript to load. You need reviews on your own website (as plain text), Yelp, BBB, and industry directories like Angi or HomeAdvisor for AI platforms to factor them into recommendations."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for a home service company to show up in AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most businesses start seeing AI mentions within 60 to 90 days of implementing a structured optimization strategy. This includes building out service pages, adding schema markup, getting listed in crawlable directories, and publishing helpful content. Consistency matters more than speed."
          }
        },
        {
          "@type": "Question",
          "name": "Can a small local service company compete with big franchises in AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. AI platforms prioritize relevance and authority over brand size. A local electrician with detailed service pages, genuine customer testimonials on their website, and consistent directory listings can outrank a national franchise that has a generic, templated website. AI rewards specificity and depth."
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
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theanswerengine.ai/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://theanswerengine.ai/blog" },
        { "@type": "ListItem", "position": 3, "name": "How Home Service Companies Are Dominating AI Search Right Now" }
      ]
    }
  ]
};

function Breadcrumb() {
  return (
    <nav className="text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <span className="mx-2">&rsaquo;</span>
      <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
      <span className="mx-2">&rsaquo;</span>
      <span className="text-gray-400">Home Service Companies & AI Search</span>
    </nav>
  );
}

export default function HowHomeServiceCompaniesDominateAISearch() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0F1117]">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 via-transparent to-transparent" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
          <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
            <Breadcrumb />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#FF6A00]/10 border border-[#FF6A00]/30">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#FF6A00]">Industry Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              How Home Service Companies Are Dominating AI Search{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-400">Right Now</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              The contractors getting calls from ChatGPT and Google AI are not lucky. They are doing specific things that most competitors are not. Here is the playbook.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>March 17, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>11 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>The Answer Engine Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          <div className="prose prose-invert prose-lg max-w-none">

            {/* Introduction */}
            <section className="mb-12">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Something big is happening in the home services industry, and most contractors are completely unaware of it.
                </p>
                <p>
                  When a homeowner asks ChatGPT &quot;Who is the best plumber near me?&quot; or Google AI serves up a recommendation for an HVAC company, certain businesses keep showing up. Not by accident. Not by luck. These companies have figured out how AI search works, and they are capturing leads that their competitors never even see.
                </p>
                <p>
                  Meanwhile, the rest of the industry is still pouring money into the same old strategies: pay-per-click ads, SEO tactics from 2019, and Angi leads that cost $80 each. Those channels still work, but a new one is growing faster than anything we have seen in local marketing since Google Maps launched.
                </p>
                <p>
                  Here is what the winning companies are doing differently, backed by real data from 2025 and 2026.
                </p>
              </div>
            </section>

            {/* The AI Search Shift */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">The AI Search Shift Is Not Coming. It Is Already Here.</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Let us start with the numbers, because they tell a story that is impossible to ignore.
                </p>
              </div>

              {/* Stat Callout Box 1 */}
              <div className="my-8 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-[#FF6A00]">45%</p>
                    <p className="text-sm text-gray-400 mt-1">of consumers now use AI to find local business recommendations, up from just 6% in 2025</p>
                    <p className="text-xs text-gray-500 mt-2">Source: BrightLocal 2026 Local Consumer Review Survey</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#FF6A00]">25%+</p>
                    <p className="text-sm text-gray-400 mt-1">of Google searches now include AI Overviews, up from 13% in early 2025</p>
                    <p className="text-xs text-gray-500 mt-2">Source: Superlines AI Search Statistics 2026</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  That 45% number from BrightLocal deserves a second look. In a single year, the percentage of consumers asking AI for local recommendations jumped from 6% to 45%. That is not gradual growth. That is an explosion.
                </p>
                <p>
                  And it is not just ChatGPT. Google AI Overviews now appear in over a quarter of all searches. According to WebFX&apos;s analysis of 237,000+ home service queries, AI Overviews show up in 8.2% of home service searches overall, and that number jumps to 40.78% for longer, more specific questions like &quot;how much does it cost to replace a furnace in Denver.&quot;
                </p>
                <p>
                  Those longer questions are exactly the type that lead to booked jobs. When someone types a detailed query, they are not browsing. They are ready to hire.
                </p>
                <p>
                  The home service companies that show up in those AI answers are getting calls. The ones that do not are invisible to a growing slice of their market.
                </p>
              </div>
            </section>

            {/* Why Home Services is Different */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Home Services Is the Perfect Industry for AI Search</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Here is something most marketers will not tell you: local home services is actually one of the best-positioned industries for AI search, even though it currently has lower AI traffic share (3 to 7%) compared to tech or finance (18 to 25%), according to upGrowth&apos;s 2026 AI Traffic Share Report.
                </p>
                <p>
                  Why? Because the gap is the opportunity.
                </p>
                <p>
                  In tech and finance, thousands of companies are already optimizing for AI. In home services, almost nobody is. ServiceTitan&apos;s 2026 State of AI in the Trades report surveyed over 1,000 contractors and found that while 72% of businesses broadly have adopted AI, only 12% of contractors have embedded AI into their actual processes. Another 35% have not used AI in their business at all.
                </p>
                <p>
                  That means the contractors who move now have a wide-open field. There is very little competition for AI visibility in most local markets, and the businesses that establish themselves early will be incredibly difficult to displace.
                </p>
                <p>
                  Think about it this way: remember when Google Maps and local SEO first became important? The companies that got on board early dominated their markets for years. AI search is following the same pattern, but the window is closing faster.
                </p>
              </div>
            </section>

            {/* What Winning Companies Do */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">5 Things Home Service Companies Dominating AI Search Actually Do</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  After analyzing what separates the businesses that AI recommends from those it ignores, we have identified five consistent patterns. None of them require a massive budget. All of them require intentional effort.
                </p>
              </div>

              {/* Strategy 1 */}
              <h3 className="text-xl font-bold text-white mt-10 mb-4">1. They Build Content That AI Can Parse and Trust</h3>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  The single biggest difference between home service companies that get AI recommendations and those that do not is the quality of their website content.
                </p>
                <p>
                  AI platforms need clear, direct, factual information. A study highlighted by Digidop found that GPT-4&apos;s accuracy jumped from 16% to 54% when content was backed by structured data. That is a 3x improvement in how well AI understands and trusts your content.
                </p>
                <p>
                  What does this look like in practice? The winning companies have:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  <li>Dedicated pages for every service they offer (not one generic &quot;Services&quot; page)</li>
                  <li>City and neighborhood-specific landing pages with real local details</li>
                  <li>Clear pricing ranges and transparent explanations of their process</li>
                  <li>FAQ sections that directly answer the questions homeowners actually ask</li>
                  <li>Schema markup (LocalBusiness, Service, FAQPage) that helps AI parse the content correctly</li>
                </ul>
                <p>
                  As the team at Brandon Growth Lab puts it in their 2025 marketing trends report: AI assistants rely on structured information pulled from your Google Business Profile, service descriptions, pricing details, reviews, hours, and directory data. Direct statements about what you do, where you operate, and your hours, with nothing implied and everything explicit, allow AI systems to parse pages quickly.
                </p>
                <p>
                  If you want to learn more about how AI decides what to cite, check out our guide on{' '}
                  <Link href="/blog/how-ai-platforms-choose-businesses-to-cite" className="text-[#FF6A00] hover:underline">
                    how AI platforms choose businesses to cite
                  </Link>.
                </p>
              </div>

              {/* Strategy 2 */}
              <h3 className="text-xl font-bold text-white mt-10 mb-4">2. They Diversify Reviews Beyond Google</h3>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  This is the one that surprises most contractors. Your Google reviews, no matter how many you have, are invisible to ChatGPT and most AI platforms. Google reviews require JavaScript to load, and AI crawlers read raw HTML.
                </p>
                <p>
                  The companies winning in AI search have reviews spread across platforms that AI can actually read: Yelp, BBB, HomeAdvisor, Angi, Facebook, and most importantly, their own website.
                </p>
                <p>
                  BrightLocal&apos;s 2026 data backs this up. Google&apos;s share as a review platform has dipped from 83% in 2025 to 71%, while Apple Maps usage nearly doubled from 14% to 27%. Video review platforms like YouTube, Instagram, and TikTok are also gaining traction.
                </p>
                <p>
                  The smart play? Display your best customer testimonials directly on your website as plain text (not embedded widgets). Add Review schema markup. And actively encourage customers to leave reviews on at least two platforms beyond Google.
                </p>
                <p>
                  We cover this in detail in our article about{' '}
                  <Link href="/blog/do-google-reviews-affect-ai-recommendations" className="text-[#FF6A00] hover:underline">
                    whether Google reviews affect AI recommendations
                  </Link>.
                </p>
              </div>

              {/* Strategy 3 */}
              <h3 className="text-xl font-bold text-white mt-10 mb-4">3. They Claim and Optimize Every Directory Listing</h3>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  AI platforms build what researchers call &quot;entity authority.&quot; The more places AI finds consistent information about your business, the more confident it becomes in recommending you.
                </p>
                <p>
                  According to Revved Digital&apos;s research on AI search ranking factors for 2026, citations from BBB, HomeAdvisor, Angi, your local Chamber of Commerce, and local news outlets all build this entity authority. When AI sees your business name, address, phone number, and services listed consistently across 20+ directories, it treats you as a verified, established business worth recommending.
                </p>
                <p>
                  The contractors who dominate AI search treat directory management like infrastructure, not a one-time task. They audit their listings quarterly, fix inconsistencies, and expand to new directories as they emerge.
                </p>
              </div>

              {/* Strategy 4 */}
              <h3 className="text-xl font-bold text-white mt-10 mb-4">4. They Create Genuinely Helpful Content (Not Keyword Stuffing)</h3>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  According to Taradel&apos;s 2026 Home Services Marketing Trends report, the top-performing content in home services right now is authentic, educational material. Think day-in-the-life footage of technicians on the job, time-lapses of repairs, and honest explanations of why certain parts fail.
                </p>
                <p>
                  AI platforms are far more likely to cite content that provides unique, verifiable insights. A roofing company that publishes a detailed guide on &quot;5 Signs Your Roof Needs Replacement in Florida&quot; with real photos and specific cost ranges is exactly the type of content AI loves to reference.
                </p>
                <p>
                  This is not about writing for robots. It is about writing genuinely useful content that happens to be exactly what AI looks for: clear, factual, specific, and trustworthy.
                </p>
              </div>

              {/* Strategy 5 */}
              <h3 className="text-xl font-bold text-white mt-10 mb-4">5. They Treat AI Visibility as a Separate Channel</h3>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  The most successful home service companies do not treat AI search as an add-on to their SEO strategy. They treat it as its own channel with its own requirements.
                </p>
                <p>
                  Traditional SEO is about ranking on a results page. AI optimization is about being the answer. Different goal, different tactics.
                </p>
                <p>
                  AI search traffic is growing at 130 to 150% year over year according to upGrowth&apos;s Q1 2026 data. ChatGPT alone drives 87.4% of all AI referral traffic. These are not small numbers, and they are growing every month.
                </p>
                <p>
                  The winning contractors have someone (whether in-house or through an agency) who specifically monitors their AI visibility, tracks which platforms mention them, and adjusts their strategy based on what is working.
                </p>
                <p>
                  For a complete walkthrough of how this works, see our{' '}
                  <Link href="/blog/complete-guide-answer-engine-optimization" className="text-[#FF6A00] hover:underline">
                    complete guide to Answer Engine Optimization
                  </Link>.
                </p>
              </div>
            </section>

            {/* Real Results */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">The Numbers Do Not Lie: What Early Movers Are Seeing</h2>

              {/* Stat Callout Box 2 */}
              <div className="my-8 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-[#FF6A00]">74%</p>
                    <p className="text-sm text-gray-400 mt-1">of contractors who adopted AI report increased efficiency and productivity</p>
                    <p className="text-xs text-gray-500 mt-2">Source: ServiceTitan 2026 State of AI in the Trades</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#FF6A00]">30%</p>
                    <p className="text-sm text-gray-400 mt-1">higher conversion rate from AI-driven recommendations vs. traditional search</p>
                    <p className="text-xs text-gray-500 mt-2">Source: upGrowth AI Traffic Share Report 2026</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#FF6A00]">31%</p>
                    <p className="text-sm text-gray-400 mt-1">of consumers will only use a business with 4.5 stars or higher, up from 17% last year</p>
                    <p className="text-xs text-gray-500 mt-2">Source: BrightLocal LCRS 2026</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  The data from ServiceTitan&apos;s survey of 1,000+ contractors shows something interesting: 54% are very or somewhat willing to invest in AI in the next one to three years, with another 18% on the fence. But only 12% have actually done it.
                </p>
                <p>
                  That means right now, fewer than 1 in 8 contractors in your market are actively working on AI visibility. The other 7 are either unaware, undecided, or waiting.
                </p>
                <p>
                  When you combine that with the fact that AI recommendations convert 30% better than traditional search results, the math becomes very clear. The contractors who act first will capture a disproportionate share of this growing channel.
                </p>
                <p>
                  Southern Home Services made headlines in January 2026 by becoming the first enterprise-size home service business to fully adopt ServiceTitan&apos;s AI-powered Max Program. Their approach? End-to-end automation powered by a full suite of AI solutions. That level of integration is not necessary for a local company, but it signals where the industry is heading.
                </p>
              </div>
            </section>

            {/* The Opportunity Window */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">The Window Is Open, But It Will Not Stay Open Forever</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Here is the reality of AI search in home services right now: the map pack still dominates. WebFX&apos;s data shows it appears in 31.7% of home service searches. Google is not going anywhere.
                </p>
                <p>
                  But every month, more consumers are asking AI for recommendations before they ever open Google Maps. Every month, AI Overviews appear on more searches. Every month, the companies that invested early become harder to displace.
                </p>
                <p>
                  If you are a plumber, HVAC tech, roofer, electrician, or landscaper, the question is not whether AI search will affect your business. The question is whether you will be positioned to benefit from it or whether you will be the one wondering where all the leads went.
                </p>
                <p>
                  The good news? You do not need to overhaul everything overnight. Start with the fundamentals:
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                  <li><span className="text-white font-medium">Audit your website.</span> Does every service have its own page? Is your NAP (Name, Address, Phone) consistent? Do you have schema markup?</li>
                  <li><span className="text-white font-medium">Check your AI visibility.</span> Ask ChatGPT and Perplexity to recommend a business like yours in your area. See if you show up.</li>
                  <li><span className="text-white font-medium">Diversify your reviews.</span> Get testimonials on your website, Yelp, and BBB. Do not rely solely on Google.</li>
                  <li><span className="text-white font-medium">Claim your directories.</span> Consistent listings across 20+ platforms build the entity authority AI needs to trust your business.</li>
                  <li><span className="text-white font-medium">Publish helpful content.</span> Answer the questions your customers actually ask, with real details and real expertise.</li>
                </ol>
                <p>
                  If you want to see exactly where you stand right now, we can show you. Our Blind Spot Report scans your business across every major AI platform and tells you exactly what AI sees (and what it does not) when someone asks about businesses like yours.
                </p>
                <p>
                  To learn more about how ChatGPT specifically decides which businesses to recommend, read our deep dive on{' '}
                  <Link href="/blog/how-chatgpt-chooses-businesses-to-recommend" className="text-[#FF6A00] hover:underline">
                    how ChatGPT chooses businesses to recommend
                  </Link>.
                </p>
              </div>
            </section>

          </div>

          {/* FAQ Section */}
          <section className="mt-16 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              {[
                {
                  q: "Do home service companies really need to worry about AI search?",
                  a: "Yes. According to BrightLocal's 2026 research, 45% of consumers now use AI to find local business recommendations, up from just 6% in 2025. If your plumbing, HVAC, or roofing company is not visible to AI platforms, you are missing a rapidly growing segment of potential customers."
                },
                {
                  q: "Which AI platforms recommend home service businesses?",
                  a: "ChatGPT, Google AI Overviews, Perplexity, Claude, and Gemini all surface local service recommendations. ChatGPT drives 87.4% of AI referral traffic, and Google AI Overviews now appear in over 25% of all searches. Each platform pulls data from different sources, so your business needs visibility across multiple channels."
                },
                {
                  q: "What is the most important thing a home service company can do for AI visibility?",
                  a: "Build a content-rich website with structured data markup. Research shows that AI platforms go from 16% to 54% accuracy when content uses structured data. Your website should clearly state what services you offer, which areas you serve, your hours, and your credentials, with nothing left implied."
                },
                {
                  q: "How do reviews affect AI recommendations for home service companies?",
                  a: "Reviews matter, but only reviews AI can actually read. Google reviews are invisible to most AI platforms because they require JavaScript to load. You need reviews on your own website (as plain text), Yelp, BBB, and industry directories like Angi or HomeAdvisor for AI platforms to factor them into recommendations."
                },
                {
                  q: "How long does it take for a home service company to show up in AI search?",
                  a: "Most businesses start seeing AI mentions within 60 to 90 days of implementing a structured optimization strategy. This includes building out service pages, adding schema markup, getting listed in crawlable directories, and publishing helpful content. Consistency matters more than speed."
                },
                {
                  q: "Can a small local service company compete with big franchises in AI search?",
                  a: "Absolutely. AI platforms prioritize relevance and authority over brand size. A local electrician with detailed service pages, genuine customer testimonials on their website, and consistent directory listings can outrank a national franchise that has a generic, templated website. AI rewards specificity and depth."
                }
              ].map((faq, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 mb-12">
            <div className="rounded-2xl border border-[#FF6A00]/30 bg-gradient-to-br from-[#FF6A00]/10 to-transparent p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Is Your Home Service Company Visible to AI?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Find out exactly what ChatGPT, Google AI, and Perplexity say when someone asks about businesses like yours. Our free Blind Spot Report shows you the gaps, and the opportunities, in your AI visibility.
              </p>
              <Link
                href="/blindspot"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF6A00] text-white font-semibold text-lg hover:bg-[#FF6A00]/90 transition-colors"
              >
                Get Your Free Blind Spot Report
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
    <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
      <a href="tel:+12134442229" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        (213) 444-2229
      </a>
      <a href="mailto:support@theanswerengine.ai" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        support@theanswerengine.ai
      </a>
    </div>
              <p className="text-sm text-gray-500 mt-4">No pitch, just the data. See what AI sees.</p>
            </div>
          </section>

          {/* Author Attribution */}
          <section className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center text-white font-bold text-lg shrink-0">
                AE
              </div>
              <div>
                <p className="text-white font-semibold">The Answer Engine Team</p>
                <p className="text-sm text-gray-400">
                  We help local service businesses get found, cited, and recommended by AI platforms. Our team tracks AI search trends daily so you do not have to.
                </p>
              </div>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}
