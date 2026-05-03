import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Do I Get My HVAC Company on ChatGPT and AI Search'
const description = 'HVAC companies get skipped by AI search every day. Here are 4 concrete tactics to get your heating and cooling business cited by ChatGPT, Perplexity, and Google AI.'
const slug = 'how-do-i-get-my-hvac-company-on-chatgpt-and-ai-search'
const publishDate = '2026-04-18'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: [
    'HVAC ChatGPT visibility',
    'how to get HVAC on AI search',
    'HVAC AI recommendations',
    'ChatGPT HVAC company',
    'Perplexity HVAC listing',
    'AI search HVAC',
    'answer engine optimization HVAC',
    'HVAC local search AI',
  ],
  openGraph: {
    title,
    description: 'Most HVAC companies are invisible to ChatGPT and Perplexity. Here is exactly what to fix to start showing up in AI-generated recommendations.',
    type: 'article',
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.webp`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'HVAC companies get skipped by AI search. Here are 4 tactics that change that.',
  },
  alternates: {
    canonical: `https://theanswerengine.ai/blog/${slug}`,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `https://theanswerengine.ai/blog/${slug}#article`,
      "headline": title,
      "description": description,
      "image": `https://theanswerengine.ai/blog/${slug}.webp`,
      "datePublished": publishDate,
      "dateModified": publishDate,
      "author": {
          "@type": "Person",
          "@id": "https://theanswerengine.ai/about#justin-borges",
          "name": "Justin Borges",
          "jobTitle": "Founder, The Answer Engine",
          "worksFor": {
            "@type": "Organization",
            "name": "The Answer Engine",
            "url": "https://theanswerengine.ai"
          },
          "knowsAbout": ["Answer Engine Optimization", "AI Search", "Content Strategy", "Real Estate Marketing", "Citation Surface"],
          "url": "https://theanswerengine.ai/about",
          "image": "https://theanswerengine.ai/justin-borges.webp"
        },
      "publisher": {
        "@type": "Organization",
        "@id": "https://theanswerengine.ai/#organization"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://theanswerengine.ai/blog/${slug}`
      }
    },
    {
      "@type": "FAQPage",
      "@id": `https://theanswerengine.ai/blog/${slug}#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why does ChatGPT not recommend my HVAC company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChatGPT cannot recommend what it cannot find or verify. The most common reasons HVAC companies get skipped are: no dedicated service pages on the website, missing or inconsistent directory listings, Google reviews that AI cannot access because they require JavaScript to load, and no schema markup to help AI understand what the business does and where it operates. Fixing these four gaps is where to start."
          }
        },
        {
          "@type": "Question",
          "name": "Does having a Google Business Profile help with ChatGPT recommendations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your Google Business Profile helps with Google AI Overviews, but it has limited impact on ChatGPT and Perplexity. Those platforms rely on crawlable web content, not the Google Maps ecosystem. To show up on ChatGPT, you need well-structured content on your own website, consistent listings on directories ChatGPT can read (Yelp, Angi, BBB, HomeAdvisor), and plain-text reviews that do not require JavaScript to render."
          }
        },
        {
          "@type": "Question",
          "name": "What schema markup should an HVAC company use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HVAC companies should implement LocalBusiness schema (or the more specific HVACBusiness type), Service schema on each service page, and FAQPage schema on any page with question-and-answer content. At minimum, the LocalBusiness markup should include the business name, address, phone, service area, hours, and a description of services. This structured data is how AI platforms parse and trust your content without ambiguity."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for an HVAC company to show up in AI recommendations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most HVAC companies that implement a structured optimization plan start seeing AI mentions within 60 to 90 days. The timeline depends on how much content exists already, how consistent the directory listings are, and how quickly the website can be updated with proper schema and service page depth. There is no shortcut, but the work is straightforward and the results compound over time."
          }
        },
        {
          "@type": "Question",
          "name": "Can a small HVAC company compete with large national brands in AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AI platforms optimize for relevance, not brand size. A local HVAC company with detailed service pages, specific service area content, genuine customer testimonials on the website, and consistent directory listings will often outperform a national brand with a generic, templated site. The local specificity that large brands struggle to provide is exactly what AI rewards."
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
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
        { "@type": "ListItem", "position": 3, "name": title }
      ]
    }
  ]
}

function Breadcrumb() {
  return (
    <nav className="text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <span className="mx-2">&rsaquo;</span>
      <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
      <span className="mx-2">&rsaquo;</span>
      <span className="text-gray-400">HVAC &amp; AI Search</span>
    </nav>
  )
}

export default function HowDoIGetMyHvacCompanyOnChatGPTAndAISearch() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#FFF]">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F27D24]/10 via-transparent to-transparent" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
            <defs>
              <pattern id="hero-grid-hvac-ai" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-hvac-ai)" />
          </svg>
          <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
            <Breadcrumb />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#F27D24]/10 border border-[#F27D24]/30">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#F27D24]">Industry Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              How Do I Get My HVAC Company on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27D24] to-orange-400">ChatGPT and AI Search</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              When a homeowner asks ChatGPT for an HVAC recommendation, most local companies never appear. This guide explains exactly why, and the four things you can fix this week.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>April 18, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Justin Borges</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* STATS GRID */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">45%</div>
                <div className="ae-stat-label">of consumers now use AI to find local service recommendations (BrightLocal 2026)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">40.78%</div>
                <div className="ae-stat-label">of long-tail home service queries now trigger Google AI Overviews (WebFX 2026)</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">87.4%</div>
                <div className="ae-stat-label">of all AI referral traffic originates from ChatGPT alone</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">12%</div>
                <div className="ae-stat-label">of home service contractors have done anything for AI visibility (ServiceTitan 2026)</div>
              </div>
            </div>

            {/* TABLE OF CONTENTS */}
            <div className="ae-toc not-prose">
              <div className="ae-toc-title">In This Guide</div>
              <ol>
                <li><a href="#why-hvac-gets-missed">Why HVAC Companies Get Missed in AI Citations</a></li>
                <li><a href="#how-ai-sources-hvac">How ChatGPT and Perplexity Source HVAC Recommendations</a></li>
                <li><a href="#four-tactics">4 Tactics to Increase Your AI Visibility</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* SECTION 1: WHY HVAC GETS MISSED */}
            <span className="ae-section-label" id="why-hvac-gets-missed">The Problem</span>
            <h2>Why HVAC Companies Get Missed in AI Citations</h2>

            <p>A homeowner&apos;s AC goes out on a Friday afternoon. Instead of opening Google Maps, they open ChatGPT and type: &quot;Who is a reliable HVAC company near me in [city]?&quot; ChatGPT returns a handful of names with brief explanations of why each one is worth calling. Your company is not on the list.</p>

            <p>This is not random. AI platforms follow a logic when deciding which HVAC companies to surface, and most local operators are failing on two or three of the basic requirements without knowing it.</p>

            <div className="ae-quote not-prose">
              <p>AI does not browse Yelp and pick the highest-rated option. It cross-references multiple data sources and only cites businesses it can verify from at least two or three independent signals.</p>
            </div>

            <p>The four most common reasons HVAC companies get skipped:</p>

            <ul>
              <li><strong>Website content is too thin.</strong> A single Services page listing twelve procedures in a bulleted list gives AI nothing to cite. AI needs depth.</li>
              <li><strong>Directory listings are inconsistent or missing.</strong> If your company name, address, and phone number do not match across directories, AI loses confidence in your data and moves on.</li>
              <li><strong>Google reviews are invisible to most AI.</strong> Google renders reviews via JavaScript, which most AI crawlers cannot execute. Your 4.8-star rating may not be visible to ChatGPT at all.</li>
              <li><strong>No schema markup.</strong> Without structured data, AI has to guess what your business does, where it operates, and what it offers. Guessing leads to omissions.</li>
            </ul>

            <p>The good news: all four of these are fixable. None of them require a large budget. They require focused effort applied in the right places.</p>

            <div className="ae-cta-inline not-prose">
              <p>Not sure which gaps are hurting your HVAC company most? We will show you.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* SECTION 2: HOW AI SOURCES HVAC RECOMMENDATIONS */}
            <span className="ae-section-label" id="how-ai-sources-hvac">How AI Works</span>
            <h2>How ChatGPT and Perplexity Source HVAC Recommendations</h2>

            <p>Understanding where AI gets its information is the first step toward appearing in it. ChatGPT and Perplexity do not have real-time access to Google Maps or your Google Business Profile in the way most people assume. They build their knowledge from crawlable web content gathered during their training and, in the case of live-search features, from current web results they can actually read.</p>

            <h3>What ChatGPT Actually Reads</h3>

            <p>ChatGPT&apos;s crawlers read plain HTML. When they visit a page, they see whatever is in the source code at load time. Dynamic content rendered by JavaScript, including most embedded review widgets, Google Maps embeds, and many modern website builders&apos; content blocks, is simply not there from the crawler&apos;s perspective.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <p><strong>JavaScript-heavy sites are largely invisible.</strong> Research indicates that 87% of heavily JavaScript-rendered sites are not readable by ChatGPT crawlers. Many HVAC company websites built on popular templates fall into this category. The content looks great in a browser but registers as near-empty to an AI crawler.</p>
            </div>

            <p>What ChatGPT can read: static HTML content on your website, Yelp profiles, Angi and HomeAdvisor profiles, BBB listings, local news mentions, and any directory that serves content in plain HTML without requiring JavaScript to render the core information.</p>

            <h3>What Perplexity Reads</h3>

            <p>Perplexity uses real-time web search to build its answers. When someone asks Perplexity about an HVAC company, it runs a live search and reads the pages it finds. This means Perplexity is more sensitive to current content freshness than ChatGPT, and it heavily weights pages that directly answer the question being asked.</p>

            <p>A page titled &quot;AC Repair in [Your City]&quot; that answers specific questions like &quot;How much does AC repair cost?&quot; and &quot;How quickly can you respond?&quot; is exactly what Perplexity wants to surface. A generic homepage with a rotating hero image and a contact form is not.</p>

            <h3>What Google AI Overviews Read</h3>

            <p>Google AI Overviews pull from Google&apos;s own index, which means your Google Business Profile matters here. But the AI Overview is not just showing your GBP card. It synthesizes content from your website, your reviews, your structured data, and third-party mentions to generate a response. According to WebFX&apos;s analysis of over 237,000 home service queries, AI Overviews appear in 40.78% of long-tail home service searches, the kind where someone is ready to hire.</p>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>Long-tail queries are where the buying happens.</strong> Searches like &quot;HVAC company that does same-day service in [city]&quot; or &quot;how much does a new furnace installation cost in [city]&quot; trigger AI Overviews far more often than broad queries. These are also the searches from people who are ready to call. Showing up here is high-value.</p>
            </div>

            <p>For a broader look at how AI platforms decide what to recommend, see our guide on <Link href="/blog/how-ai-platforms-choose-businesses-to-cite">how AI platforms choose businesses to cite</Link>.</p>

            <div className="ae-cta-inline not-prose">
              <p>Want to know exactly what each AI platform says about your HVAC company right now?</p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free AI Visibility Check &rarr;</a>
            </div>

            {/* SECTION 3: FOUR TACTICS */}
            <span className="ae-section-label" id="four-tactics">The Tactics</span>
            <h2>4 Concrete Tactics to Increase Your HVAC Company&apos;s AI Visibility</h2>

            <p>These four tactics address the root causes of HVAC invisibility in AI search. They are ordered by impact relative to effort. Start at the top.</p>

            {/* TACTIC 1 */}
            <h3>Tactic 1: Build Dedicated Service Pages With Real Depth</h3>

            <p>The single highest-leverage change most HVAC companies can make is replacing a single catch-all Services page with individual pages for each service: AC repair, AC installation, furnace repair, furnace installation, heat pump service, air quality, duct cleaning, and so on.</p>

            <p>Each page should be substantive. That means at minimum: what the service involves, how long it takes, what it costs (even a range), when a homeowner needs it, your service area, and a FAQ section answering the real questions customers call about. AI platforms go from 16% to 54% accuracy when content is backed by structured data and depth, according to research highlighted by Digidop.</p>

            <div className="ae-cheat-sheet not-prose">
              <h3>What Each HVAC Service Page Should Include</h3>
              <ul>
                <li>Clear H1 stating the service and the city (e.g., &quot;AC Repair in Phoenix, AZ&quot;)</li>
                <li>What the service involves in plain language</li>
                <li>Common reasons a homeowner needs it</li>
                <li>Honest pricing range or cost factors</li>
                <li>How long the service typically takes</li>
                <li>Your service area and response time</li>
                <li>Certifications and licenses relevant to this service</li>
                <li>At least 3 FAQs with direct answers</li>
                <li>Plain-text customer testimonials mentioning this specific service</li>
                <li>LocalBusiness + Service schema markup</li>
              </ul>
            </div>

            <p>This level of detail is not just for AI. It is exactly what high-intent homeowners want to read before calling. The content serves both purposes simultaneously.</p>

            <div className="ae-cta-inline not-prose">
              <p>Not sure how to structure service pages for AI? Our guide covers the exact format.</p>
              <Link href="/blog/write-service-pages-ai-platforms-recommend">Read: How to Write Service Pages AI Recommends &rarr;</Link>
            </div>

            {/* TACTIC 2 */}
            <h3>Tactic 2: Lock Down Your Directory Listings</h3>

            <p>AI platforms build what researchers call &quot;entity authority.&quot; The more places AI finds consistent, matching information about your HVAC company, the more confident it becomes in recommending you. Inconsistency, even minor differences like &quot;Smith HVAC&quot; versus &quot;Smith Heating and Cooling,&quot; erodes that confidence.</p>

            <p>The directories that carry the most weight for HVAC companies in AI search are: Yelp, Angi, HomeAdvisor, BBB, your local Chamber of Commerce, and any HVAC-specific trade directories your state or region supports. These platforms serve their content in crawlable HTML, which means ChatGPT and Perplexity can actually read them.</p>

            <div className="ae-bar-group not-prose">
              <h3>HVAC Directory Priority for AI Visibility</h3>
              <div className="ae-bar-item" style={{ width: '95%' }}>
                <span>Angi / HomeAdvisor (crawlable profiles, high domain authority)</span>
                <strong>Tier 1</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '90%' }}>
                <span>Yelp (fully crawlable, review sentiment visible to AI)</span>
                <strong>Tier 1</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '85%' }}>
                <span>BBB (trust signal, AI frequently cites BBB ratings)</span>
                <strong>Tier 1</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '70%' }}>
                <span>Local Chamber of Commerce (local authority signal)</span>
                <strong>Tier 2</strong>
              </div>
              <div className="ae-bar-item" style={{ width: '55%' }}>
                <span>Google Business Profile (primary for Google AI Overviews)</span>
                <strong>Tier 2</strong>
              </div>
            </div>

            <p>Do a search for your company name and verify that every directory listing has identical: business name, address, phone number, hours, and service description. Fix anything that does not match. This audit takes a few hours and it significantly raises AI confidence in your data.</p>

            <p>For the full list of directories that matter most, read our guide on <Link href="/blog/directory-listings-that-help-ai-find-business">directory listings that help AI find your business</Link>.</p>

            <div className="ae-cta-inline not-prose">
              <p>We can identify every directory where your HVAC company is missing or inconsistent.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* TACTIC 3 */}
            <h3>Tactic 3: Move Your Reviews Where AI Can Read Them</h3>

            <p>This is the one that surprises most HVAC operators. Your Google reviews, regardless of how many you have or how high your rating is, are largely invisible to ChatGPT and Perplexity. Google renders review content via JavaScript. AI crawlers read raw HTML. They do not see the same page a human browser sees.</p>

            <p>According to BrightLocal&apos;s 2026 data, Google&apos;s share as the review platform HVAC customers use has dropped from 83% to 71% while Apple Maps nearly doubled. More importantly, for AI search purposes, reviews need to exist somewhere AI can actually read them.</p>

            <div className="ae-pros-cons not-prose">
              <div className="ae-pros">
                <h4>Review Platforms AI Can Read</h4>
                <ul>
                  <li>Your own website (plain HTML testimonials)</li>
                  <li>Yelp (fully crawlable)</li>
                  <li>BBB (visible review content)</li>
                  <li>Angi / HomeAdvisor profiles</li>
                  <li>Facebook reviews (partially accessible)</li>
                  <li>Industry trade directories with review features</li>
                </ul>
              </div>
              <div className="ae-cons">
                <h4>Review Platforms AI Cannot Read</h4>
                <ul>
                  <li>Google reviews (JavaScript-gated)</li>
                  <li>Embedded third-party review widgets</li>
                  <li>Screenshot testimonials (images only)</li>
                  <li>Reviews behind login walls</li>
                  <li>Video-only testimonials (no transcript)</li>
                  <li>Aggregator iframes</li>
                </ul>
              </div>
            </div>

            <p>The most reliable fix: copy five to ten of your best customer testimonials directly onto your website as plain HTML text. Include the customer&apos;s first name, the service they had done, and specific detail about the experience. Add Review schema markup to these testimonials. This puts review sentiment in a place AI can always read, regardless of which platform it is crawling.</p>

            <p>Ask customers who leave you a Google review to also post on Yelp or leave a review directly on your website via a simple form. Two platforms beats one. Three beats two.</p>

            <div className="ae-cta-inline not-prose">
              <p>Find out which of your reviews AI can actually see and which are invisible.</p>
              <Link href="/blog/do-google-reviews-affect-ai-recommendations">Read: Do Google Reviews Affect AI Recommendations? &rarr;</Link>
            </div>

            {/* TACTIC 4 */}
            <h3>Tactic 4: Add Schema Markup Across Your Site</h3>

            <p>Schema markup is structured data you add to your website&apos;s HTML that tells AI platforms exactly what your content means, not just what it says. Without it, AI has to interpret your website by reading text and guessing context. With it, AI knows with certainty that you are a licensed HVAC contractor, you serve specific ZIP codes, you offer emergency service, and your hours are Monday through Saturday.</p>

            <p>For HVAC companies, three schema types matter most: LocalBusiness (or more specifically HVACBusiness), Service, and FAQPage.</p>

            <table className="ae-comparison-table not-prose">
              <thead>
                <tr>
                  <th>Schema Type</th>
                  <th>What It Tells AI</th>
                  <th>Where to Add It</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LocalBusiness / HVACBusiness</td>
                  <td>Business name, address, phone, hours, service area, license</td>
                  <td>Homepage and contact page</td>
                </tr>
                <tr>
                  <td>Service</td>
                  <td>Service name, description, area served, price range</td>
                  <td>Each individual service page</td>
                </tr>
                <tr>
                  <td>FAQPage</td>
                  <td>Questions and answers relevant to each service or topic</td>
                  <td>Service pages and any FAQ content</td>
                </tr>
                <tr>
                  <td>Review</td>
                  <td>Customer name, rating, review text, date</td>
                  <td>Testimonials section</td>
                </tr>
                <tr>
                  <td>BreadcrumbList</td>
                  <td>Site structure and page hierarchy</td>
                  <td>All pages</td>
                </tr>
              </tbody>
            </table>

            <p>Adding schema markup does not change what your website looks like to human visitors. It adds a machine-readable layer that AI platforms use to understand and cite your content. Research from Digidop found that structured data increases AI accuracy from 16% to 54%. That jump translates directly into more citations and more recommendations.</p>

            <div className="ae-callout ae-callout-success not-prose">
              <p><strong>Where to start:</strong> If you only have time for one schema type, implement LocalBusiness on your homepage. Include your NAICS code for HVAC (811412), your service area as a list of cities or ZIP codes, your license number, and your hours. This single addition gives AI a verified, machine-readable identity for your business.</p>
            </div>

            <p>For a full guide on how schema markup affects AI visibility, read <Link href="/blog/does-schema-markup-help-ai-search">our breakdown of whether schema markup helps AI search</Link>.</p>

            <div className="ae-cta-inline not-prose">
              <p>Want to see exactly what schema gaps your HVAC site has? The audit is free.</p>
              <Link href="/blindspot">Get Your Free AI Visibility Audit &rarr;</Link>
            </div>

            {/* PUTTING IT TOGETHER */}
            <span className="ae-section-label">The Compound Effect</span>
            <h2>Why These Four Tactics Work Together</h2>

            <p>Each of these tactics works independently, but they compound. An HVAC company with deep service pages that has no consistent directory listings gets partial credit. A company with perfect directory listings but no schema markup is harder for AI to verify. A company with both, plus AI-readable reviews, starts to build what AI researchers call entity authority: the confidence an AI platform has that a specific business is real, reputable, and relevant to a specific query.</p>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>AI platforms are cautious by design. They only cite businesses they can verify from multiple independent sources. The four tactics above are the four most important verification signals for HVAC companies. Each one you complete raises the probability of being cited. All four together make your company a reliable AI recommendation in your market.</p>
            </div>

            <p>The window for doing this before your competitors is still open. ServiceTitan&apos;s 2026 survey of over 1,000 contractors found that only 12% have done anything meaningful for AI visibility. That means roughly 7 out of 8 HVAC companies in your market are not optimized. The first company in a given city to get all four signals right tends to own that AI citation for a long time.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <p><strong>The early-mover window is closing.</strong> AI platforms develop familiarity with sources they have cited repeatedly. The HVAC companies that build this foundation in 2026 will be structurally harder to displace in 2027. Waiting is not neutral. It is ceding ground to whoever acts first.</p>
            </div>

            <p>To understand how this plays out against larger national brands, read our guide on <Link href="/blog/how-home-service-companies-dominate-ai-search">how home service companies dominate AI search</Link>.</p>

            <div className="ae-cta-inline not-prose">
              <p>Ready to find out exactly where your HVAC company stands in AI search right now?</p>
              <Link href="/blindspot">Run Your Free AI Visibility Scan &rarr;</Link>
            </div>

          </div>

          {/* 3-TIER CTA BLOCK */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Is Your HVAC Company Invisible to AI Search?</h3>
            <p className="text-gray-400 mb-6">Get a free Blind Spot Report showing exactly how ChatGPT, Perplexity, and Google AI see your business right now.</p>
            <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">
              Get Your Free AI Visibility Audit
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

          {/* FAQ SECTION */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">
            <span className="ae-section-label" id="faq">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <h3>Why does ChatGPT not recommend my HVAC company?</h3>
            <p>ChatGPT cannot recommend what it cannot find or verify. The most common reasons HVAC companies get skipped are: no dedicated service pages on the website, missing or inconsistent directory listings, Google reviews that AI cannot access because they require JavaScript to load, and no schema markup to help AI understand what the business does and where it operates. Fixing these four gaps is where to start.</p>

            <h3>Does having a Google Business Profile help with ChatGPT recommendations?</h3>
            <p>Your Google Business Profile helps with Google AI Overviews, but it has limited impact on ChatGPT and Perplexity. Those platforms rely on crawlable web content, not the Google Maps ecosystem. To show up on ChatGPT, you need well-structured content on your own website, consistent listings on directories ChatGPT can read (Yelp, Angi, BBB, HomeAdvisor), and plain-text reviews that do not require JavaScript to render.</p>

            <h3>What schema markup should an HVAC company use?</h3>
            <p>HVAC companies should implement LocalBusiness schema (or the more specific HVACBusiness type), Service schema on each service page, and FAQPage schema on any page with question-and-answer content. At minimum, the LocalBusiness markup should include the business name, address, phone, service area, hours, and a description of services. This structured data is how AI platforms parse and trust your content without ambiguity.</p>

            <h3>How long does it take for an HVAC company to show up in AI recommendations?</h3>
            <p>Most HVAC companies that implement a structured optimization plan start seeing AI mentions within 60 to 90 days. The timeline depends on how much content exists already, how consistent the directory listings are, and how quickly the website can be updated with proper schema and service page depth. There is no shortcut, but the work is straightforward and the results compound over time.</p>

            <h3>Can a small HVAC company compete with large national brands in AI search?</h3>
            <p>Yes. AI platforms optimize for relevance, not brand size. A local HVAC company with detailed service pages, specific service area content, genuine customer testimonials on the website, and consistent directory listings will often outperform a national brand with a generic, templated site. The local specificity that large brands struggle to provide is exactly what AI rewards.</p>

            <div className="ae-cta-inline not-prose">
              <p>Still have questions about AI visibility for your HVAC company? We are happy to talk through it.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            <div className="ae-cta-inline not-prose">
              <p>Prefer email? We respond within 24 hours.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="ae-final-cta not-prose">
            <h2>Find Out If AI Is Sending Customers to Your Competitors</h2>
            <p>Get a free AI Visibility Audit showing exactly what ChatGPT, Perplexity, and Google AI say when a homeowner searches for an HVAC company in your area. No pitch, just the data.</p>
            <Link href="/blindspot" className="ae-final-cta-pulse">Get Your Free AI Visibility Audit &rarr;</Link>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-[#F27D24]/10">
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

          {/* AUTHOR CARD */}
          <div className="ae-author-card not-prose">
            <div className="w-12 h-12 rounded-full bg-[#F27D24] flex items-center justify-center text-white font-bold text-lg shrink-0">
              AE
            </div>
            <div>
              <p className="text-white font-semibold">Justin Borges</p>
              <p className="text-sm text-gray-400">
                We help local service businesses get found, cited, and recommended by AI platforms. Our team tracks AI search trends daily so you do not have to.
              </p>
            </div>
          </div>

        </article>
      </main>
    </>
  )
}
