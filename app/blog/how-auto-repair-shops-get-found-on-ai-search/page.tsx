import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Auto Repair Shops Get Found on AI Search'
const titleWithSuffix = `${title} | The Answer Engine`
const description = 'AI platforms now drive auto repair shop discovery. Learn which signals ChatGPT, Perplexity, and Google AI evaluate before recommending mechanics.'
const slug = 'how-auto-repair-shops-get-found-on-ai-search'
const publishDate = '2026-04-05'

export const metadata: Metadata = {
  title: titleWithSuffix,
  description,
  keywords: ['auto repair shop AI search', 'mechanic ChatGPT', 'auto shop AI visibility', 'car repair AI recommendations', 'mechanic AI search', 'auto repair answer engine optimization'],
  openGraph: {
    title,
    description: 'AI platforms now drive auto repair shop discovery. Learn which signals ChatGPT, Perplexity, and Google AI evaluate before recommending mechanics.',
    type: 'article',
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.svg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'AI platforms now drive auto repair shop discovery. Learn which signals drive mechanic visibility on AI platforms.',
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
      "headline": "How Auto Repair Shops Get Found on AI Search",
      "description": description,
      "image": `https://theanswerengine.ai/blog/${slug}.svg`,
      "datePublished": publishDate,
      "dateModified": publishDate,
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
        "@id": `https://theanswerengine.ai/blog/${slug}`
      }
    },
    {
      "@type": "FAQPage",
      "@id": `https://theanswerengine.ai/blog/${slug}#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do auto repair shops really need to worry about AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AI-driven search tools like ChatGPT, Google AI Overviews, and Perplexity are rapidly becoming a primary way car owners find mechanics. ChatGPT alone is projected to handle 30% of local search queries by late 2026. These platforms only recommend 3 to 5 businesses per query, so shops that are not optimized for AI discovery lose a growing share of new customers to competitors who are."
          }
        },
        {
          "@type": "Question",
          "name": "Why does my auto shop not show up on ChatGPT when people search for mechanics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChatGPT can only recommend businesses it can verify through crawlable web content. If your shop relies primarily on Google Maps, social media, or directory listings behind JavaScript rendering, ChatGPT has limited data to evaluate. Only about 1.2% of local businesses currently get recommended by ChatGPT. The shops that do appear have structured, crawlable websites with clear service descriptions, verifiable reviews, and consistent business information across multiple sources."
          }
        },
        {
          "@type": "Question",
          "name": "What star rating do auto shops need to get recommended by AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Businesses that AI platforms recommend tend to average between 4.1 and 4.3 stars across review platforms. However, the rating alone is not enough. AI evaluates the volume of reviews, recency, response patterns from the business owner, and whether reviews appear on multiple crawlable platforms. A shop with 4.2 stars and 200 reviews across Yelp, Google, and its own website will outperform a 4.8 star shop with only 15 Google reviews."
          }
        },
        {
          "@type": "Question",
          "name": "Which AI platforms do car owners use to find auto repair shops?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Car owners discover mechanics through Google AI Overviews, ChatGPT, Perplexity, Apple Intelligence (on iPhones), Microsoft Copilot, and Gemini. They also use traditional channels like Google Maps, Yelp, and automotive forums. Each AI platform evaluates different data sources, so auto shops need a presence that is verifiable and consistent across multiple platforms to maximize discovery."
          }
        },
        {
          "@type": "Question",
          "name": "Can a small independent mechanic compete with franchise chains in AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AI platforms do not favor chain operations over independent shops by default. They evaluate relevance, verifiable expertise, content depth, and trust signals. An independent mechanic with detailed service pages for each specialty, genuine customer testimonials on the website, consistent directory listings, and educational content about common vehicle issues can rank ahead of a national chain that uses a generic corporate template with minimal local detail."
          }
        },
        {
          "@type": "Question",
          "name": "How is AI search different from traditional Google search for auto repair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional Google search returns a list of links and map results. AI search returns direct recommendations with reasoning. Instead of showing 10 options, AI names 3 to 5 specific shops and explains why it chose them. AI also cross-references multiple data sources before making a recommendation, evaluating trustworthiness, relevance, and authority in ways that differ from traditional ranking algorithms. The bar for getting included is significantly higher."
          }
        },
        {
          "@type": "Question",
          "name": "Does having a website help my auto shop get found on AI search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Having a website is necessary but not sufficient. A basic one-page site with just your phone number and address gives AI very little to evaluate. The shops that AI recommends have structured websites with individual service pages, clear descriptions of specialties, customer testimonials in crawlable HTML, schema markup that helps AI understand the business, and consistent NAP information that matches their directory listings."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for an auto repair shop to start appearing in AI results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most auto repair shops that implement a structured AI visibility approach begin seeing mentions within 60 to 90 days. The timeline depends on your starting point. Shops with existing websites, decent reviews, and active directory listings can see faster results. Shops starting from scratch may need 90 to 120 days. High-intent queries like emergency repairs and specific vehicle services tend to show results sooner than general queries."
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
      "description": "Answer Engine Optimization agency helping businesses get cited by AI platforms."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theanswerengine.ai/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://theanswerengine.ai/blog" },
        { "@type": "ListItem", "position": 3, "name": "Auto Repair Shops & AI Search" }
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
      <span className="text-gray-400">Auto Repair Shops &amp; AI Search</span>
    </nav>
  )
}

export default function HowAutoRepairShopsGetFoundOnAISearch() {
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
              <pattern id="hero-grid-ar1" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-ar1)" />
          </svg>
          <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
            <Breadcrumb />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#FF6A00]/10 border border-[#FF6A00]/30">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#FF6A00]">Industry Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight font-plus-jakarta">
              How Auto Repair Shops Get Found on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-400">AI Search</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Car owners no longer scroll through search results to pick a mechanic. They ask AI for a name. If your shop is not in the answer, the bay stays empty.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>April 5, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>18 min read</span>
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
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#FF6A00] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* STATS GRID */}
            <div className="ae-stats-grid not-prose">
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">87.3%</div>
                <div className="ae-stat-label">of auto shops underperform in search despite investing in SEO</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">1.2%</div>
                <div className="ae-stat-label">of local businesses currently get recommended by ChatGPT</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">3 to 5</div>
                <div className="ae-stat-label">businesses AI returns per query, replacing the full results page</div>
              </div>
              <div className="ae-stat-card">
                <div className="ae-stat-value ae-accent">30%</div>
                <div className="ae-stat-label">projected ChatGPT search share by late 2026, up from near zero</div>
              </div>
            </div>

            {/* TABLE OF CONTENTS */}
            <div className="ae-toc not-prose">
              <div className="ae-toc-title">Table of Contents</div>
              <ol>
                <li><a href="#discovery-shift">How Car Owners Find Mechanics in 2026</a></li>
                <li><a href="#why-invisible">Why Most Auto Shops Are Invisible to AI</a></li>
                <li><a href="#ai-evaluates">What AI Evaluates Before Naming Your Shop</a></li>
                <li><a href="#reviews-matter">The Review Signals That Actually Move the Needle</a></li>
                <li><a href="#independent-vs-chain">Independent Shops vs. National Chains in AI</a></li>
                <li><a href="#content-signals">Content Signals AI Uses to Judge Expertise</a></li>
                <li><a href="#discovery-channels">Discovery Channel Comparison for Auto Repair</a></li>
                <li><a href="#common-mistakes">The Mistakes Keeping Your Shop Out of AI Results</a></li>
                <li><a href="#cheat-sheet">AI Visibility Cheat Sheet for Auto Repair Shops</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* SECTION 1: DISCOVERY SHIFT */}
            <span className="ae-section-label" id="discovery-shift">The Shift</span>
            <h2>How Car Owners Find Mechanics in 2026</h2>

            <p>Picture this: a car owner hears a grinding sound every time they brake. Five years ago, they would have opened Google, typed &quot;brake repair near me,&quot; and picked one of the shops in the map pack. The process involved scanning reviews, comparing distances, maybe clicking through to a website or two.</p>

            <p>That behavior is changing fast. Today, a growing number of drivers open ChatGPT, Perplexity, or Google AI and ask something more specific: &quot;Which mechanic near downtown [city] is best for brake rotor replacement on a 2019 Honda Civic?&quot; The AI does not show a list of ten blue links. It names three to five shops, explains its reasoning, and often includes details about specialties, average ratings, and what past customers have said.</p>

            <p>The car owner reads the recommendation, checks the top-named shop, and calls. What used to be a 30-minute research session now takes under two minutes. The shop AI names gets the call. Everyone else gets silence.</p>

            <div className="ae-quote not-prose">
              <p>Nearly nine out of ten auto repair shops are underperforming in search visibility despite ongoing SEO investments. The shops pouring money into traditional tactics are often the same ones completely absent from AI results, where the real growth is happening.</p>
            </div>

            <p>This is not a theoretical problem. ChatGPT&apos;s share of local search queries is projected to reach 30% by late 2026, a trajectory that went from essentially zero to a third of all local discovery in just two years. For an industry where walk-ins and phone calls are the lifeblood of revenue, this shift is existential.</p>

            <p>To understand the broader mechanics of how this works across all industries, see our deep dive on <Link href="/blog/what-happens-when-customer-asks-ai-find-business">what happens when a customer asks AI to find a business</Link>.</p>

            {/* CTA 1 */}
            <div className="ae-cta-inline not-prose">
              <p>Wondering what AI says when someone asks for a mechanic in your area? The answer might surprise you.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* SECTION 2: WHY INVISIBLE */}
            <span className="ae-section-label" id="why-invisible">The Problem</span>
            <h2>Why Most Auto Shops Are Invisible to AI</h2>

            <p>The auto repair industry has a visibility problem that goes deeper than weak SEO. The real issue is that most shops have built their entire digital presence around channels that AI cannot access, cannot verify, or cannot trust enough to recommend.</p>

            <p>Consider how AI platforms evaluate a business before recommending it. They crawl your website, cross-reference your information across directories, read reviews on platforms they can access, and look for signals of trustworthiness, relevance, and authority. These are the same core signals Google uses, applied through a different lens. The AI needs to be confident enough in its answer to name your shop by name.</p>

            <p>Here is where auto repair shops fall short. Most rely on a combination of Google Maps, a basic one-page website (or no website at all), word-of-mouth referrals, and maybe a Yelp listing they set up years ago. The shop might have 200 five-star Google reviews, but ChatGPT cannot read those reviews because they are rendered via JavaScript behind Google&apos;s infrastructure. The shop might have an incredible reputation in the neighborhood, but AI has no way to verify reputation that exists only in conversations.</p>

            <div className="ae-callout ae-callout-warning not-prose">
              <p><strong>The visibility gap is real:</strong> Only 1.2% of local businesses currently get recommended by ChatGPT. For auto repair shops, the percentage is likely even lower because the industry historically underinvests in web content and relies heavily on platforms AI cannot crawl. If your shop is not in that 1.2%, every AI query for a mechanic in your area is sending customers somewhere else.</p>
            </div>

            <p>The shops that do appear in AI results share common traits. They have structured websites with dedicated pages for each service they offer. They maintain consistent business information across every directory where they appear. They have reviews on multiple crawlable platforms. And they provide enough verifiable detail that AI can confidently stake its reputation on recommending them.</p>

            {/* CTA 2 */}
            <div className="ae-cta-inline not-prose">
              <p>Most shop owners have no idea what AI platforms say about their business. Find out in 60 seconds.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 for a Free AI Visibility Check &rarr;</a>
            </div>

            {/* SECTION 3: WHAT AI EVALUATES */}
            <span className="ae-section-label" id="ai-evaluates">The Criteria</span>
            <h2>What AI Evaluates Before Naming Your Shop</h2>

            <p>AI platforms are not random. They follow a consistent evaluation framework when deciding which businesses to recommend. Understanding what they look for is the first step toward becoming the shop they name.</p>

            <p>Every major AI platform, including ChatGPT, Google AI Overviews, Perplexity, and Apple Intelligence, evaluates three core dimensions before making a local business recommendation.</p>

            {/* BAR CHART: AI Evaluation Signals */}
            <div className="not-prose my-10">
              <h3 className="font-plus-jakarta text-lg font-semibold text-white mb-4">AI Evaluation Signal Weight (Relative Importance)</h3>
              <div className="ae-bar-group">
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Trustworthiness (reviews, consistency, verification)</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '95%' }} /></div>
                  <div className="ae-bar-value">95%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Relevance (service match, location, specialization)</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '90%' }} /></div>
                  <div className="ae-bar-value">90%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Authority (content depth, expertise signals, citations)</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '85%' }} /></div>
                  <div className="ae-bar-value">85%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Crawlability (structured data, HTML content, schema)</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '80%' }} /></div>
                  <div className="ae-bar-value">80%</div>
                </div>
                <div className="ae-bar-item">
                  <div className="ae-bar-label">Freshness (recent reviews, updated content, activity)</div>
                  <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '70%' }} /></div>
                  <div className="ae-bar-value">70%</div>
                </div>
              </div>
            </div>

            <p><strong>Trustworthiness</strong> is the single most important factor. AI needs to verify that your business is real, operational, and well-regarded before it will attach its credibility to your name. This means consistent NAP (name, address, phone) data across every platform, reviews on multiple crawlable sources, and a website that looks and functions like a legitimate business.</p>

            <p><strong>Relevance</strong> determines whether your shop matches what the searcher is actually looking for. A query about &quot;European auto specialist for BMW timing chain&quot; requires the AI to verify that your shop actually works on European vehicles and has experience with that specific repair. Generic &quot;we fix everything&quot; messaging gives AI nothing specific to match against.</p>

            <p><strong>Authority</strong> is where content depth comes in. AI platforms favor businesses that demonstrate genuine expertise through detailed service descriptions, educational content, and verifiable credentials. A shop that publishes a thorough explanation of what causes timing belt failure and when different vehicle makes typically need replacement signals expertise that AI can evaluate and trust.</p>

            <p>For a deeper look at how wrong information can actually hurt your AI visibility, read our guide on <Link href="/blog/how-to-fix-wrong-ai-answers-about-your-business">how to fix wrong AI answers about your business</Link>.</p>

            {/* CTA 3 */}
            <div className="ae-cta-inline not-prose">
              <p>AI is evaluating your shop right now. Is it finding what it needs to recommend you?</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* SECTION 4: REVIEWS */}
            <span className="ae-section-label" id="reviews-matter">Reviews</span>
            <h2>The Review Signals That Actually Move the Needle</h2>

            <p>Auto repair is a trust-intensive industry. Nobody hands their car to a stranger without checking what other people have experienced. AI platforms understand this, which is why review signals carry enormous weight in their recommendation decisions.</p>

            <p>But here is what most shop owners miss: not all reviews are equal in the eyes of AI. The businesses that AI recommends tend to average between 4.1 and 4.3 stars. Not 5.0. Not 4.9. The sweet spot is slightly below perfect because AI platforms interpret perfect scores with suspicion, especially when the review count is low.</p>

            {/* TIMELINE: Review Signal Priorities */}
            <div className="ae-timeline not-prose">
              <div className="ae-timeline-item">
                <h4>Review Volume Across Platforms</h4>
                <p>AI cross-references reviews on Yelp, Google, your website, BBB, and automotive directories. A shop with reviews on four platforms is more verifiable than one with reviews on a single platform, regardless of the star rating.</p>
              </div>
              <div className="ae-timeline-item">
                <h4>Review Recency</h4>
                <p>A flood of reviews from 2022 followed by silence tells AI the business may have changed hands, declined in quality, or stopped operating at the same level. Consistent, recent reviews signal an active, reliable operation.</p>
              </div>
              <div className="ae-timeline-item">
                <h4>Owner Response Patterns</h4>
                <p>Shops that respond to reviews, especially negative ones, demonstrate engagement and accountability. AI can read these responses on crawlable platforms and factors them into trust scores.</p>
              </div>
              <div className="ae-timeline-item">
                <h4>Review Content Depth</h4>
                <p>Reviews that mention specific services (&quot;replaced my alternator quickly&quot;), vehicle types, and employee names give AI additional data points to match against future queries. Generic &quot;great service&quot; reviews carry less signal.</p>
              </div>
              <div className="ae-timeline-item">
                <h4>Testimonials on Your Own Website</h4>
                <p>Customer quotes published as plain HTML on your website are directly crawlable by every AI platform. This is the one review channel you fully control and that every AI can read.</p>
              </div>
            </div>

            <div className="ae-callout ae-callout-info not-prose">
              <p><strong>The Google review blind spot:</strong> Your 300 Google reviews are valuable for Google Maps and Google AI Overviews, but ChatGPT, Perplexity, Claude, and Apple Intelligence cannot access them. If Google reviews are your only social proof, you are invisible to every AI platform except Google&apos;s own. Diversifying where your reviews live is not optional anymore.</p>
            </div>

            {/* CTA 4 */}
            <div className="ae-cta-inline not-prose">
              <p>Your reviews might be locked behind walls AI cannot see. We can show you exactly where.</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai for a Free Review Audit &rarr;</a>
            </div>

            {/* SECTION 5: INDEPENDENT VS CHAIN */}
            <span className="ae-section-label" id="independent-vs-chain">The Matchup</span>
            <h2>Independent Shops vs. National Chains in AI Search</h2>

            <p>One of the most common fears independent shop owners have is that big chains like Midas, Pep Boys, Firestone, and Jiffy Lube will dominate AI search the same way they dominate traditional advertising. The reality is more nuanced, and in many cases, favors the independent shop.</p>

            {/* PROS/CONS */}
            <div className="ae-pros-cons not-prose">
              <div className="ae-pros-box">
                <h4>Where Independent Shops Win</h4>
                <ul>
                  <li>Specialized expertise AI can verify (e.g., &quot;European auto specialist&quot;)</li>
                  <li>Authentic, detailed customer testimonials with specific repair stories</li>
                  <li>Flexible to create deep, service-specific content quickly</li>
                  <li>Local community mentions, forum posts, and neighborhood credibility</li>
                  <li>Owner-operator engagement signals (personal review responses)</li>
                  <li>Unique value propositions AI can differentiate from competitors</li>
                </ul>
              </div>
              <div className="ae-cons-box">
                <h4>Where Chains Have the Edge</h4>
                <ul>
                  <li>Established domain authority and brand recognition across the web</li>
                  <li>Massive review volume across hundreds of locations</li>
                  <li>Structured data and schema markup on corporate websites</li>
                  <li>Consistent NAP data managed by corporate marketing teams</li>
                  <li>National press mentions and media citations AI can find</li>
                  <li>Larger marketing budgets for content production</li>
                </ul>
              </div>
            </div>

            <p>AI does not automatically favor size. It favors verifiability, specificity, and trust. When a car owner asks &quot;Who is the best independent mechanic for Honda repair in [neighborhood]?&quot; the AI is looking for a business that specifically matches that query. A chain shop with a generic corporate page cannot compete with an independent specialist who has detailed Honda service pages, Honda-specific customer testimonials, and verifiable certifications.</p>

            <p>The key insight: independent shops win AI search by being <strong>more specific</strong>, not more general. Every specialization, every certification, every vehicle make you call out on your website becomes a signal that AI can match against a specific customer query. Chains cannot do this at scale because they serve everyone generically.</p>

            {/* CTA 5 */}
            <div className="ae-cta-inline not-prose">
              <p>Independent shops are beating chains in AI results every day. See where your shop stands.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* SECTION 6: CONTENT SIGNALS */}
            <span className="ae-section-label" id="content-signals">Content</span>
            <h2>Content Signals AI Uses to Judge Expertise</h2>

            <p>The auto repair industry has a content problem. Most shop websites are either a single page with a phone number and address, or a template site with generic descriptions copied from the website builder. AI platforms evaluate this content and draw conclusions about expertise, and generic content signals generic expertise.</p>

            <p>The shops that AI recommends have invested in content that demonstrates deep, specific knowledge. This does not mean blogging about every car topic imaginable. It means creating structured, detailed pages about the services you actually perform, the vehicles you specialize in, and the problems you solve.</p>

            {/* DECISION MATRIX */}
            <div className="not-prose my-10">
              <h3 className="font-plus-jakarta text-lg font-semibold text-white mb-4">Content Signal Decision Matrix</h3>
              <div className="ae-decision-matrix">
                <div className="ae-decision-row">
                  <div className="ae-decision-if">Your site says &quot;We do brake repair&quot;</div>
                  <div className="ae-decision-arrow">&rarr;</div>
                  <div className="ae-decision-then">AI sees a generic listing identical to 10,000 other shops</div>
                </div>
                <div className="ae-decision-row">
                  <div className="ae-decision-if">Your site explains brake pad vs. rotor replacement by vehicle type</div>
                  <div className="ae-decision-arrow">&rarr;</div>
                  <div className="ae-decision-then">AI sees verifiable expertise it can cite in specific queries</div>
                </div>
                <div className="ae-decision-row">
                  <div className="ae-decision-if">Your site lists &quot;Oil Changes&quot; as a service</div>
                  <div className="ae-decision-arrow">&rarr;</div>
                  <div className="ae-decision-then">AI has nothing to differentiate you from the shop next door</div>
                </div>
                <div className="ae-decision-row">
                  <div className="ae-decision-if">Your site covers synthetic vs. conventional oil by make and mileage</div>
                  <div className="ae-decision-arrow">&rarr;</div>
                  <div className="ae-decision-then">AI sees a knowledgeable source worth recommending</div>
                </div>
                <div className="ae-decision-row">
                  <div className="ae-decision-if">Your About page says &quot;20 years experience&quot;</div>
                  <div className="ae-decision-arrow">&rarr;</div>
                  <div className="ae-decision-then">AI has an unverifiable claim it cannot use</div>
                </div>
                <div className="ae-decision-row">
                  <div className="ae-decision-if">Your site lists ASE certifications, training history, and specializations</div>
                  <div className="ae-decision-arrow">&rarr;</div>
                  <div className="ae-decision-then">AI has verifiable credentials it can cross-reference</div>
                </div>
              </div>
            </div>

            <p>The pattern is clear. Specificity wins. AI platforms are pattern-matching machines that reward detailed, verifiable information and punish vague, generic claims. This is actually great news for independent shops because the barrier to creating this content is effort, not money. A shop owner who knows their craft can create more authoritative content than a chain&apos;s marketing department ever could.</p>

            <p>Home service companies face a similar content challenge. For a parallel look at how contractors approach this, see <Link href="/blog/how-contractors-and-home-service-companies-win-ai-search">how contractors and home service companies win AI search</Link>.</p>

            {/* CTA 6 */}
            <div className="ae-cta-inline not-prose">
              <p>Not sure what content signals AI is looking for from your shop? We map it out for you.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

            {/* SECTION 7: DISCOVERY CHANNELS */}
            <span className="ae-section-label" id="discovery-channels">Channels</span>
            <h2>Discovery Channel Comparison for Auto Repair</h2>

            <p>Car owners today use a fragmented mix of discovery channels, and each one plays a different role in the path to your phone ringing. Understanding how these channels compare helps you prioritize where your shop needs to be visible.</p>

            {/* COMPARISON TABLE */}
            <div className="ae-comparison-table not-prose">
              <table>
                <thead>
                  <tr>
                    <th>Channel</th>
                    <th>How It Works</th>
                    <th>AI Crawlable?</th>
                    <th>Your Control</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google Maps</td>
                    <td>Map pack results for local queries</td>
                    <td>Google AI only</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Google AI Overviews</td>
                    <td>AI-generated summary above organic results</td>
                    <td>Google AI only</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>ChatGPT</td>
                    <td>Direct business recommendations with reasoning</td>
                    <td>Yes (web crawl)</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Perplexity</td>
                    <td>Cited recommendations with source links</td>
                    <td>Yes (multi-source)</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Apple Intelligence</td>
                    <td>Siri and device-level recommendations for iPhone users</td>
                    <td>Yes (Apple crawl)</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>Yelp</td>
                    <td>Review-based discovery, AI platforms can crawl</td>
                    <td>Yes</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Automotive Forums</td>
                    <td>Community recommendations on Reddit, car forums</td>
                    <td>Yes</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>Your Website</td>
                    <td>Direct organic traffic and AI crawling</td>
                    <td>Yes (all platforms)</td>
                    <td>Full</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Notice the pattern: your own website is the only channel where you have full control <strong>and</strong> every AI platform can crawl it. This makes your website the single most important asset in your AI visibility strategy. Not your Google listing. Not your Yelp profile. Your website.</p>

            <div className="ae-takeaway not-prose">
              <div className="ae-takeaway-title">Key Takeaway</div>
              <p>Every AI platform can read your website. No other single channel offers that reach. Your website is not a digital brochure anymore. It is the foundation of your AI visibility across ChatGPT, Perplexity, Google AI, Apple Intelligence, and every platform that follows.</p>
            </div>

            {/* CTA 7 */}
            <div className="ae-cta-inline not-prose">
              <p>Is your website working for you across all AI platforms, or just Google?</p>
              <Link href="/blindspot">Find Out Free &rarr;</Link>
            </div>

            {/* SECTION 8: COMMON MISTAKES */}
            <span className="ae-section-label" id="common-mistakes">Mistakes</span>
            <h2>The Mistakes Keeping Your Shop Out of AI Results</h2>

            <p>After analyzing how AI platforms evaluate auto repair businesses, clear patterns emerge around why shops fail to get recommended. These are not obscure technical issues. They are fundamental gaps that most shop owners do not realize exist.</p>

            {/* NUMBERED MISTAKES WITH CALLOUTS */}
            <div className="not-prose my-8 space-y-6">
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <h4 className="text-white font-semibold font-plus-jakarta mb-2">No Website or a One-Page Template</h4>
                    <p className="text-gray-400">AI needs content to evaluate. A single page with your phone number and a stock photo of a wrench gives it nothing. The shops AI recommends have 10 or more pages of structured, specific content.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <h4 className="text-white font-semibold font-plus-jakarta mb-2">Inconsistent Business Information</h4>
                    <p className="text-gray-400">Your Google listing says one address, Yelp says another, and your website shows a phone number you changed two years ago. AI sees inconsistency and interprets it as unreliability.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <h4 className="text-white font-semibold font-plus-jakarta mb-2">Reviews Concentrated on One Platform</h4>
                    <p className="text-gray-400">Having 500 Google reviews and zero everywhere else means only Google AI can verify your reputation. ChatGPT, Perplexity, and Apple Intelligence have nothing to work with.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <h4 className="text-white font-semibold font-plus-jakarta mb-2">Generic Service Descriptions</h4>
                    <p className="text-gray-400">&quot;We offer oil changes, brake repair, and engine diagnostics&quot; is identical to every other shop. AI cannot differentiate you. Specific service pages with detailed explanations create unique signals.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center font-bold text-sm">5</span>
                  <div>
                    <h4 className="text-white font-semibold font-plus-jakarta mb-2">No Schema Markup</h4>
                    <p className="text-gray-400">Schema markup is structured data that tells AI exactly what your business does, where it is, and what services you offer. Without it, AI has to guess. Most auto repair websites have zero schema implementation.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center font-bold text-sm">6</span>
                  <div>
                    <h4 className="text-white font-semibold font-plus-jakarta mb-2">Ignoring Automotive Directories and Forums</h4>
                    <p className="text-gray-400">Platforms like RepairPal, Mechanics Files (Car Talk), and automotive subreddits are crawlable by AI. Shops mentioned positively in these sources gain third-party validation that AI weighs heavily.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center font-bold text-sm">7</span>
                  <div>
                    <h4 className="text-white font-semibold font-plus-jakarta mb-2">Never Updating Content</h4>
                    <p className="text-gray-400">A website that has not been updated since 2021 tells AI the business may not be active or current. Fresh content, even quarterly updates to service pages, signals an engaged, operating business.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA 8 */}
            <div className="ae-cta-inline not-prose">
              <p>How many of these mistakes is your shop making? Most owners discover 4 or more.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 to Find Out &rarr;</a>
            </div>

            {/* CTA BLOCK: Dollar Comparison */}
            <div className="not-prose my-10">
              <h3 className="font-plus-jakarta text-lg font-semibold text-white mb-4">Cost of Customer Acquisition: Traditional vs. AI Discovery</h3>
              <div className="ae-dollar-compare">
                <div className="ae-dollar-item">
                  <div className="ae-dollar-label">Google Ads (per lead)</div>
                  <div className="ae-dollar-price">$45 to $120</div>
                </div>
                <div className="ae-dollar-item">
                  <div className="ae-dollar-label">Yelp Advertising (per lead)</div>
                  <div className="ae-dollar-price">$30 to $80</div>
                </div>
                <div className="ae-dollar-item">
                  <div className="ae-dollar-label">Direct Mail (per response)</div>
                  <div className="ae-dollar-price">$25 to $60</div>
                </div>
                <div className="ae-dollar-item">
                  <div className="ae-dollar-label">AI Recommendation (per lead)</div>
                  <div className="ae-dollar-price">$0 (organic)</div>
                </div>
              </div>
            </div>

            <p>The economics are straightforward. Every customer who finds your shop through an AI recommendation costs you nothing in per-lead advertising. The investment goes into building a digital presence that AI trusts, and that investment compounds over time rather than disappearing the moment you stop paying.</p>

            {/* CTA 9 */}
            <div className="ae-cta-inline not-prose">
              <p>Ready to stop paying per lead and start getting recommended for free?</p>
              <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
            </div>

            {/* SECTION 9: CHEAT SHEET */}
            <span className="ae-section-label" id="cheat-sheet">Quick Reference</span>
            <h2>AI Visibility Cheat Sheet for Auto Repair Shops</h2>

            <div className="ae-cheat-sheet not-prose">
              <div className="ae-cheat-sheet-title">What AI Platforms Need From Your Auto Repair Shop</div>
              <ul>
                <li><strong>Website Structure:</strong> Individual pages for each service (brakes, transmission, oil change, diagnostics, etc.) with detailed, specific content on each page.</li>
                <li><strong>NAP Consistency:</strong> Your business name, address, and phone number must be identical across your website, Google Business Profile, Yelp, BBB, and every directory where you appear.</li>
                <li><strong>Review Distribution:</strong> Active reviews on at least 3 crawlable platforms (Yelp, BBB, your website). Do not rely solely on Google reviews.</li>
                <li><strong>Schema Markup:</strong> LocalBusiness and AutoRepair schema on your website so AI can parse your services, location, hours, and specialties programmatically.</li>
                <li><strong>Verifiable Credentials:</strong> ASE certifications, manufacturer training, years in operation, and any specializations listed clearly in crawlable HTML.</li>
                <li><strong>Customer Testimonials:</strong> Real customer quotes published on your website as plain text (not images, not PDFs, not embedded widgets).</li>
                <li><strong>Content Freshness:</strong> Update service pages at least quarterly. Add seasonal content (winterization, AC checks) to show ongoing activity.</li>
                <li><strong>Vehicle Specialization Signals:</strong> If you specialize in certain makes (Honda, Toyota, BMW, etc.), create dedicated pages for each. AI matches these against specific queries.</li>
                <li><strong>Directory Presence:</strong> Claim and optimize profiles on RepairPal, Mechanics Files, BBB, Yelp, and relevant local directories.</li>
                <li><strong>Response to Reviews:</strong> Respond to all reviews on crawlable platforms, especially negative ones. AI reads your responses.</li>
              </ul>
            </div>

            {/* CTA 10 */}
            <div className="ae-cta-inline not-prose">
              <p>This checklist is the starting point. Want a personalized roadmap? We build those for free.</p>
              <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* CTA 11 */}
            <div className="ae-cta-block not-prose">
              <h3>Your Shop Has the Reputation. AI Just Cannot See It Yet.</h3>
              <p>You have spent years building trust with your community. AI platforms do not know that unless you give them the signals they need. We help auto repair shops become the name AI recommends.</p>
              <Link href="/blindspot" className="ae-cta-primary">Get Your Free Blind Spot Report &rarr;</Link>
            </div>

            {/* 3-TIER CTA BLOCK */}
            <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20">
              <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Your Shop Deserves to Be the One AI Recommends</h3>
              <p className="text-gray-400 mb-6">Most auto repair shops have no idea what AI says about them. Our free Blind Spot Report reveals exactly where you stand and what needs to change.</p>
              <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#FF6A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors">
                Get Your Free Blind Spot Report
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
            </div>

            {/* AUTHOR CARD */}
            <div className="ae-author-card not-prose">
              <div className="ae-author-avatar">AE</div>
              <div>
                <div className="text-white font-semibold">The Answer Engine Team</div>
                <div className="text-gray-400 text-sm">AI visibility strategists helping local businesses get cited by ChatGPT, Perplexity, Google AI, and every major AI platform.</div>
              </div>
            </div>

            {/* FAQ SECTION */}
            <span className="ae-section-label" id="faq">FAQ</span>
            <h2>Frequently Asked Questions</h2>

            <div className="ae-faq not-prose">
              <div className="ae-faq-item">
                <h3>Do auto repair shops really need to worry about AI search?</h3>
                <p>Yes. AI-driven search tools like ChatGPT, Google AI Overviews, and Perplexity are rapidly becoming a primary way car owners find mechanics. ChatGPT alone is projected to handle 30% of local search queries by late 2026. These platforms only recommend 3 to 5 businesses per query, so shops that are not optimized for AI discovery lose a growing share of new customers to competitors who are.</p>
              </div>

              <div className="ae-faq-item">
                <h3>Why does my auto shop not show up on ChatGPT when people search for mechanics?</h3>
                <p>ChatGPT can only recommend businesses it can verify through crawlable web content. If your shop relies primarily on Google Maps, social media, or directory listings behind JavaScript rendering, ChatGPT has limited data to evaluate. Only about 1.2% of local businesses currently get recommended by ChatGPT. The shops that do appear have structured, crawlable websites with clear service descriptions, verifiable reviews, and consistent business information across multiple sources.</p>
              </div>

              <div className="ae-faq-item">
                <h3>What star rating do auto shops need to get recommended by AI?</h3>
                <p>Businesses that AI platforms recommend tend to average between 4.1 and 4.3 stars across review platforms. However, the rating alone is not enough. AI evaluates the volume of reviews, recency, response patterns from the business owner, and whether reviews appear on multiple crawlable platforms. A shop with 4.2 stars and 200 reviews across Yelp, Google, and its own website will outperform a 4.8 star shop with only 15 Google reviews.</p>
              </div>

              <div className="ae-faq-item">
                <h3>Which AI platforms do car owners use to find auto repair shops?</h3>
                <p>Car owners discover mechanics through Google AI Overviews, ChatGPT, Perplexity, Apple Intelligence (on iPhones), Microsoft Copilot, and Gemini. They also use traditional channels like Google Maps, Yelp, and automotive forums. Each AI platform evaluates different data sources, so auto shops need a presence that is verifiable and consistent across multiple platforms to maximize discovery.</p>
              </div>

              <div className="ae-faq-item">
                <h3>Can a small independent mechanic compete with franchise chains in AI search?</h3>
                <p>Yes. AI platforms do not favor chain operations over independent shops by default. They evaluate relevance, verifiable expertise, content depth, and trust signals. An independent mechanic with detailed service pages for each specialty, genuine customer testimonials on the website, consistent directory listings, and educational content about common vehicle issues can rank ahead of a national chain that uses a generic corporate template with minimal local detail.</p>
              </div>

              <div className="ae-faq-item">
                <h3>How is AI search different from traditional Google search for auto repair?</h3>
                <p>Traditional Google search returns a list of links and map results. AI search returns direct recommendations with reasoning. Instead of showing 10 options, AI names 3 to 5 specific shops and explains why it chose them. AI also cross-references multiple data sources before making a recommendation, evaluating trustworthiness, relevance, and authority in ways that differ from traditional ranking algorithms. The bar for getting included is significantly higher.</p>
              </div>

              <div className="ae-faq-item">
                <h3>Does having a website help my auto shop get found on AI search?</h3>
                <p>Having a website is necessary but not sufficient. A basic one-page site with just your phone number and address gives AI very little to evaluate. The shops that AI recommends have structured websites with individual service pages, clear descriptions of specialties, customer testimonials in crawlable HTML, schema markup that helps AI understand the business, and consistent NAP information that matches their directory listings.</p>
              </div>

              <div className="ae-faq-item">
                <h3>How long does it take for an auto repair shop to start appearing in AI results?</h3>
                <p>Most auto repair shops that implement a structured AI visibility approach begin seeing mentions within 60 to 90 days. The timeline depends on your starting point. Shops with existing websites, decent reviews, and active directory listings can see faster results. Shops starting from scratch may need 90 to 120 days. High-intent queries like emergency repairs and specific vehicle services tend to show results sooner than general queries.</p>
              </div>
            </div>

            {/* CTA 12 */}
            <div className="ae-cta-inline not-prose">
              <p>Still have questions about your shop&apos;s AI visibility? We answer them for free. No pitch, no pressure.</p>
              <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
            </div>

          </div>
        </article>

        {/* FINAL CTA */}
        <section className="ae-final-cta">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <div className="ae-pulse-glow" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white font-plus-jakarta">
              Stop Losing Customers to the Shop{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-400">AI Recommends Instead</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Your competitors are getting cited. Your bay should be full. Find out exactly what AI says about your shop and what it takes to change the answer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#FF6A00] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e55f00] transition-colors">
                Get Your Free Blind Spot Report
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="tel:+12134442229" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (213) 444-2229
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
