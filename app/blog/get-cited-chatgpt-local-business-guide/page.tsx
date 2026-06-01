import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

export const metadata: Metadata = {
  title: 'Get Cited by ChatGPT: Local Business Owner\'s AEO Guide | The Answer Engine',
  description: 'Learn how to get cited by ChatGPT and boost conversions 4.4x higher than Google. Proven tactics for local service businesses to dominate AI search.',
  keywords: [
    'AI visibility',
    'ChatGPT SEO',
    'local business marketing',
    'generative engine optimization',
    'GEO strategy',
    'answer capsules',
    'AEO marketing',
    'AI citations',
    'local search',
    'content optimization',
    'authority building',
    'AI discoverability'
  ],
  authors: [{ name: 'Justin Borges', url: 'https://theanswerengine.ai/about' }],
  openGraph: {
    title: 'Get Cited by ChatGPT: Local Business Owner\'s AEO Guide',
    description: 'Learn how to get cited by ChatGPT and boost conversions 4.4x higher than Google. Proven tactics for local service businesses to dominate AI search.',
    url: 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide',
    siteName: 'The Answer Engine',
    type: 'article',
    publishedTime: '2026-03-08',
    authors: ['https://theanswerengine.ai/about'],
    images: [
      {
        url: 'https://theanswerengine.ai/og/get-cited-chatgpt-local-business-guide.png',
        width: 1200,
        height: 630,
        alt: 'Get Cited by ChatGPT: Local Business Owner\'s AEO Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Cited by ChatGPT: Local Business Owner\'s AEO Guide',
    description: 'Learn how to get cited by ChatGPT and boost conversions 4.4x higher than Google. Proven tactics for local service businesses to dominate AI search.',
    images: ['https://theanswerengine.ai/og/get-cited-chatgpt-local-business-guide.png']
  },
  alternates: {
    canonical: 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide#article',
      headline: 'Get Cited by ChatGPT: Local Business Owner\'s AEO Guide',
      description: 'Learn how to get cited by ChatGPT and boost conversions 4.4x higher than Google. Proven tactics for local service businesses to dominate AI search.',
      datePublished: '2026-03-08',
      dateModified: '2026-03-08',
      author: {
        '@type': 'Person',
        '@id': 'https://theanswerengine.ai/about#justin-borges',
        name: 'Justin Borges',
        jobTitle: 'Founder, The Answer Engine',
        worksFor: {
          '@type': 'Organization',
          name: 'The Answer Engine',
          url: 'https://theanswerengine.ai',
        },
        knowsAbout: ['Answer Engine Optimization', 'AI Search', 'Content Strategy', 'Real Estate Marketing', 'Citation Surface'],
        url: 'https://theanswerengine.ai/about',
        image: 'https://theanswerengine.ai/justin-borges.webp',
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai'
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide'
      },
      keywords: 'AI visibility, ChatGPT SEO, local business marketing, generative engine optimization, AEO marketing, AI citations'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How is getting cited by ChatGPT different from ranking in Google?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI visitors convert at 4.4 times the rate of traditional organic search, and when someone asks ChatGPT for recommendations, they\'re ready to make a decision. Unlike Google\'s 10 blue links, LLMs typically cite only 2-7 domains per response. If you\'re not in that tight citation window, you\'re not in the conversation.'
          }
        },
        {
          '@type': 'Question',
          name: 'What\'s the single most important thing I can do to get cited by ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The single strongest commonality among cited pages is the presence of answer capsules: short, definitive statements that directly answer a specific question. Write 40-50 words that answer one question completely with no fluff, placed at the very top of your page. Specific data and original research dramatically increase your chances of being cited.'
          }
        },
        {
          '@type': 'Question',
          name: 'How often should I update my website content to stay visible in ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Update your key pages at least quarterly. ChatGPT\'s recency bias means outdated content gets ignored, even if it\'s otherwise excellent. Add a Last updated date at the top of your pages. Recent and clearly dated content has a better chance of getting cited or extracted.'
          }
        },
        {
          '@type': 'Question',
          name: 'Does local SEO still matter if I want to get cited by ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Your business name, address, and phone number must match exactly across all platforms. Inconsistencies can confuse AI models and data aggregators, potentially leading them to select incorrect information or overlook your business entirely. Domains with strong backlink profiles are also more likely to be cited by AI.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can I just optimize my own website, or do I need mentions from other sites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Third-party mentions are essential. ChatGPT doesn\'t trust what you say about yourself; it trusts what authoritative third parties say about you. Wikipedia, Wikidata, Google Business Profile, major news outlets, and popular review platforms like Yelp and TripAdvisor are primary sources. If your business appears in these places, your odds of being cited improve significantly.'
          }
        },
        {
          '@type': 'Question',
          name: 'What kind of business information is ChatGPT most likely to cite?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your website needs to clearly communicate business details using structured formats like headings, bullet points, and tables to present your business name, address, phone number, and services. ChatGPT cites local landing pages, homepages, business listings, Contact Us pages, and other pages with consistent crawlable info and clear local signals with geographic words and structured data.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do I track whether ChatGPT is actually citing my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Directly test ChatGPT by asking questions about your business and verifying whether you appear in the responses. Run identical prompts across AI platforms for your core category. Track which brands appear and calculate the percentage of mentions each receives. Aim to appear in 30% or more of AI responses for your core category queries.'
          }
        },
        {
          '@type': 'Question',
          name: 'What\'s more important for ChatGPT citations: traditional SEO ranking or something else?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ChatGPT and AI Mode tend to draw from a wider range of sources, often citing lower-ranking or even non-ranking pages if they provide contextually relevant information. While organic traffic correlates with AI Overview mentions, there\'s only a weak correlation with ChatGPT inclusion specifically. Content depth, structure, and freshness matter most for securing ChatGPT citations.'
          }
        }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://theanswerengine.ai'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://theanswerengine.ai/blog'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Get Cited by ChatGPT: Local Business Owner\'s AEO Guide',
          item: 'https://theanswerengine.ai/blog/get-cited-chatgpt-local-business-guide'
        }
      ]
    }
  ]
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-gray-400">
        <li>
          <Link href="/" className="hover:text-orange-400 transition-colors">
            Home
          </Link>
        </li>
        <li className="text-gray-600">/</li>
        <li>
          <Link href="/blog" className="hover:text-orange-400 transition-colors">
            Blog
          </Link>
        </li>
        <li className="text-gray-600">/</li>
        <li className="text-gray-300 truncate max-w-[200px] sm:max-w-none">
          Get Cited by ChatGPT
        </li>
      </ol>
    </nav>
  )
}

export default function Page() {
  return (
    <div style={{ background: '#0F1117', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <Breadcrumb />

        {/* Hero */}
        <div className="relative overflow-hidden rounded-2xl mb-12" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 400" fill="none" aria-hidden="true">
            <circle cx="650" cy="80" r="200" stroke="#F27D24" strokeWidth="0.5" />
            <circle cx="650" cy="80" r="140" stroke="#F27D24" strokeWidth="0.5" />
            <circle cx="650" cy="80" r="80" stroke="#F27D24" strokeWidth="0.5" />
            <circle cx="150" cy="320" r="120" stroke="#F27D24" strokeWidth="0.4" />
            <circle cx="150" cy="320" r="70" stroke="#F27D24" strokeWidth="0.4" />
            <line x1="0" y1="0" x2="800" y2="400" stroke="#F27D24" strokeWidth="0.3" />
            <line x1="800" y1="0" x2="0" y2="400" stroke="#F27D24" strokeWidth="0.3" />
            <line x1="400" y1="0" x2="400" y2="400" stroke="#F27D24" strokeWidth="0.2" />
            <line x1="0" y1="200" x2="800" y2="200" stroke="#F27D24" strokeWidth="0.2" />
            <rect x="300" y="100" width="200" height="200" stroke="#F27D24" strokeWidth="0.3" />
            <polygon points="400,50 500,200 300,200" stroke="#F27D24" strokeWidth="0.3" fill="none" />
          </svg>
          <div className="relative px-8 py-16 sm:px-12 sm:py-20">
            <p className="text-sm font-medium text-orange-400 mb-4">How-To Guides</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">
              Get Cited by ChatGPT: Local Business Owner&apos;s AEO Guide
            </h1>
            {/* Championship Cover Image */}
            <div className="ae-article-hero w-full rounded-xl overflow-hidden my-8" style={{ maxHeight: 440 }}>
              <img
                src="/blog/get-cited-chatgpt-local-business-guide.webp"
                alt="get cited chatgpt local business guide"
                style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>March 8, 2026</span>
              <span>-</span>
              <span>12 min read</span>
              <span>-</span>
              <span>Justin Borges</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

          {/* ── STATS GRID ── */}
          <div className="ae-stats-grid not-prose">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🤖</div>
              <div className="ae-stat-value ae-accent">800M</div>
              <div className="ae-stat-label">weekly active ChatGPT users as of 2026</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📊</div>
              <div className="ae-stat-value ae-accent">4.4x</div>
              <div className="ae-stat-label">higher conversion rate from AI referrals vs Google organic</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🎯</div>
              <div className="ae-stat-value ae-accent">1.2%</div>
              <div className="ae-stat-label">of local businesses currently recommended by ChatGPT</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🏆</div>
              <div className="ae-stat-value ae-accent">2-7</div>
              <div className="ae-stat-label">domains cited per AI response vs 10 blue links in Google</div>
            </div>
          </div>

          {/* ── INTRODUCTION ── */}
          <span className="ae-section-label not-prose">The Opportunity</span>
          <h2>Your Customers Are Asking ChatGPT. Are You the Answer?</h2>

          <p>ChatGPT now has 800 million weekly active users and 5.7 billion monthly visits, making it the 4th most visited website on the planet. Your potential customers are asking it which plumber to call, which dentist to book, and which contractor to trust. Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>

          <p>The question is: does your business show up in the answer? Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>

          <div className="ae-quote not-prose">
            <p>Only 1.2% of local business locations get recommended by ChatGPT, compared to 35.9% that appear in Google&apos;s local 3-pack. That gap is your opportunity. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
          </div>

          <p>Right now, most local businesses are invisible to AI search. If you act before your competitors figure this out, you gain a massive first-mover advantage. This guide walks you through exactly what it takes to get your local service business cited by ChatGPT. Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

          {/* ── CTA 1 ── */}
          <div className="ae-cta-inline not-prose">
            <p>Not sure if ChatGPT can see your business? Find out in 60 seconds. Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>
            <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
          </div>

          {/* ── SECTION 1: WHY CITATIONS MATTER ── */}
          <span className="ae-section-label not-prose">The Business Case</span>
          <h2>Why ChatGPT Citations Matter More Than Google Rankings</h2>

          <p>If you have been pouring budget into Google SEO, that foundation still matters. But the business case for ChatGPT visibility is compelling on its own terms. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

          {/* Comparison: Google vs ChatGPT */}
          <div className="ae-comparison-table not-prose">
            <table>
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Google Search</th>
                  <th>ChatGPT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sources shown</td>
                  <td>10 blue links</td>
                  <td>2 to 7 cited domains</td>
                </tr>
                <tr>
                  <td>User intent</td>
                  <td>Browsing and comparing</td>
                  <td>Ready to act on the answer</td>
                </tr>
                <tr>
                  <td>Conversion rate</td>
                  <td>Baseline</td>
                  <td>4.4x higher than organic</td>
                </tr>
                <tr>
                  <td>Likelihood to convert</td>
                  <td>Standard</td>
                  <td>7x more likely than Google users</td>
                </tr>
                <tr>
                  <td>Local business coverage</td>
                  <td>35.9% in local 3-pack</td>
                  <td>Only 1.2% recommended</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>When someone types a question into ChatGPT, they are not browsing. They want an answer and they are ready to act on it. If ChatGPT tells them your HVAC company is the best option in their city, they are not clicking through to compare five other results. They are calling you. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">The Tight Citation Window</div>
            <p>LLMs typically cite only 2 to 7 domains per response, compared to Google&apos;s 10 blue links. If you are not in that citation window, you do not exist in that conversation. There is no page two in AI search. Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
          </div>

          {/* ── CTA 2 ── */}
          <div className="ae-cta-inline not-prose">
            <p>AI visitors convert 4.4x higher. Are they finding your competitors instead? Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            <Link href="/blindspot">Check Your AI Visibility Now &rarr;</Link>
          </div>

          {/* ── SECTION 2: HOW CHATGPT SELECTS SOURCES ── */}
          <span className="ae-section-label not-prose">How It Works</span>
          <h2>How ChatGPT Actually Selects Sources to Cite</h2>

          <p>Before you optimize anything, you need to understand what ChatGPT is looking for. It is not simply rewarding the highest-ranked Google pages. Research shows a weak correlation between high organic traffic and ChatGPT inclusion specifically. Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          <p>ChatGPT draws from a wider range of sources, often citing lower-ranking or even non-ranking pages if they provide contextually relevant information. One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

          {/* Decision Matrix: Citation Selection Factors */}
          <div className="ae-decision-matrix not-prose">
            <table>
              <thead>
                <tr>
                  <th>Citation Factor</th>
                  <th>Weight</th>
                  <th>What It Means</th>
                  <th>Your Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Third-party authority</td>
                  <td>Very High</td>
                  <td>Wikipedia = 12.1% of all citations</td>
                  <td>Get mentioned on authoritative sites</td>
                </tr>
                <tr>
                  <td>Answer capsules</td>
                  <td>High</td>
                  <td>Strongest structural commonality</td>
                  <td>Add 40-50 word direct answers</td>
                </tr>
                <tr>
                  <td>Original data</td>
                  <td>High</td>
                  <td>Second-strongest differentiator</td>
                  <td>Publish your own numbers</td>
                </tr>
                <tr>
                  <td>Content recency</td>
                  <td>Medium-High</td>
                  <td>60.5% of cited pages are under 2 years old</td>
                  <td>Update pages quarterly</td>
                </tr>
                <tr>
                  <td>Backlink profile</td>
                  <td>Medium</td>
                  <td>32K+ referring domains = 3.5x more likely</td>
                  <td>Build quality local links</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bar Chart: Citation Source Distribution */}
          <h3>Where ChatGPT Pulls Its Citations From</h3>
          <div className="ae-bar-group not-prose">
            <div className="ae-bar-item">
              <div className="ae-bar-label">Wikipedia</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '60%' }}></div></div>
              <div className="ae-bar-value">12.1%</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">News outlets</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '45%' }}></div></div>
              <div className="ae-bar-value">~9%</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Business directories</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '35%' }}></div></div>
              <div className="ae-bar-value">~7%</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Review platforms</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '30%' }}></div></div>
              <div className="ae-bar-value">~6%</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Reddit</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '20%' }}></div></div>
              <div className="ae-bar-value">2.2%</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Business websites</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '15%' }}></div></div>
              <div className="ae-bar-value">~3%</div>
            </div>
          </div>

          <div className="ae-takeaway not-prose">
            <p><strong>Key takeaway:</strong> ChatGPT trusts third parties more than your own website. What others say about you matters more than what you say about yourself. Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>
          </div>

          {/* ── CTA 3 ── */}
          <div className="ae-cta-inline not-prose">
            <p>Wondering what third parties are saying about your business to AI? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>
            <Link href="/blindspot">Run a Free AI Authority Audit &rarr;</Link>
          </div>

          {/* ── SECTION 3: 7 CONTENT TACTICS ── */}
          <span className="ae-section-label not-prose">The Playbook</span>
          <h2>7 Content Tactics That Get Local Businesses Cited</h2>

          {/* Cheat Sheet */}
          <div className="ae-cheat-sheet not-prose">
            <div className="ae-cheat-sheet-title">Quick-Reference Cheat Sheet: 7 Citation Tactics</div>
            <ol>
              <li><strong>Lead with an answer capsule</strong> (40-50 words, top of page)</li>
              <li><strong>Front-load your best content</strong> (44.2% of citations from first 30%)</li>
              <li><strong>Optimize for questions, not keywords</strong> (200-300% more citations)</li>
              <li><strong>Include original data or specific numbers</strong> (second-strongest differentiator)</li>
              <li><strong>Structure pages for extraction</strong> (headings, bullets, short paragraphs)</li>
              <li><strong>Add schema markup</strong> (LocalBusiness, FAQ, Service)</li>
              <li><strong>Update content quarterly</strong> (60.5% of cited pages are under 2 years old)</li>
            </ol>
          </div>

          <h3>1. Lead With an Answer Capsule</h3>

          <p>The single strongest commonality among cited pages is the presence of answer capsules: short, definitive statements that directly answer a specific question. The format is straightforward. Write 40 to 50 words that answer one question completely, with no fluff, placed at the very top of your page. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>

          {/* Pros/Cons: Answer Capsule Before/After */}
          <div className="ae-pros-cons not-prose">
            <div className="ae-cons-box">
              <div className="ae-cons-title">Before (Generic, Not Citable)</div>
              <ul>
                <li>Vague marketing language with no specifics</li>
                <li>No local signals or geographic context</li>
                <li>No concrete data ChatGPT can extract</li>
                <li>Reads like a brochure, not an answer</li>
              </ul>
            </div>
            <div className="ae-pros-box">
              <div className="ae-pros-title">After (Answer Capsule Format)</div>
              <ul>
                <li>Answers a real question in 40-50 words</li>
                <li>Includes specific local signals (city, area)</li>
                <li>Contains concrete numbers and timeframes</li>
                <li>Gives ChatGPT something extractable to cite</li>
              </ul>
            </div>
          </div>

          <div className="ae-callout ae-callout-info not-prose">
            <div className="ae-callout-title">Example Transformation</div>
            <p><strong>Before:</strong> &quot;Our plumbing company has been serving homeowners in Austin for over 20 years with quality work and great customer service.&quot; Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            <p><strong>After:</strong> &quot;Austin homeowners dealing with a burst pipe need emergency repair within 2 hours to avoid structural damage. Our licensed plumbers respond to Austin emergency calls in under 45 minutes, 24/7, with no after-hours upcharge.&quot; <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
          </div>

          <p>Notice what the second version does: it answers a real question, includes specific information, uses local signals, and gives ChatGPT something concrete to extract and cite. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

          <h3>2. Front-Load Your Best Content</h3>

          <p>44.2% of all LLM citations come from the first 30% of text, making your opening section critical. Do not bury your most important claims, local credentials, or service specifics halfway down the page. Put your most citable content first. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">Common Mistake</div>
            <p>Most businesses put a generic company overview at the top and hide the specific, valuable information further down. AI crawlers weight the beginning of your page heavily. Flip your content hierarchy. Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
          </div>

          <h3>3. Optimize for Questions, Not Keywords</h3>

          <p>Question-optimized content receives 200 to 300% more ChatGPT citations than generic content. For every service page, identify the three to five questions a real customer would ask before booking. Then answer those questions directly on the page, using the actual question as a heading. Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

          <div className="ae-pros-cons not-prose">
            <div className="ae-cons-box">
              <div className="ae-cons-title">Keyword-Focused Heading</div>
              <ul>
                <li>&quot;Denver Roof Replacement Services&quot;</li>
                <li>Generic, no question format</li>
                <li>Optimized for Google crawlers</li>
                <li>Low AI citation potential</li>
              </ul>
            </div>
            <div className="ae-pros-box">
              <div className="ae-pros-title">Question-Focused Heading</div>
              <ul>
                <li>&quot;How much does a roof replacement cost in Denver?&quot;</li>
                <li>Matches real user queries to AI</li>
                <li>Optimized for AI extraction</li>
                <li>200-300% more citations</li>
              </ul>
            </div>
          </div>

          <h3>4. Include Original Data or Specific Numbers</h3>

          <p>Original data ranks as the second-strongest differentiator for cited pages after answer capsules. You do not need a research team. Track your own business numbers: average response time, number of jobs completed in your area, customer satisfaction rates from reviews. Specific claims are citable. Vague marketing language is not. We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>

          {/* ── CTA 4 ── */}
          <div className="ae-cta-inline not-prose">
            <p>We analyze your data and build the citation profile AI needs to see. Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>
            <Link href="/blindspot">See What AI Knows About You &rarr;</Link>
          </div>

          <h3>5. Structure Your Pages for Extraction</h3>

          <p>Use clear headings, bullet points, and short paragraphs. ChatGPT needs to extract information efficiently. Dense walls of text are harder to parse and cite. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

          <div className="ae-cheat-sheet not-prose">
            <div className="ae-cheat-sheet-title">Page Structure Checklist for AI Extraction</div>
            <ul>
              <li>Service area with specific cities or neighborhoods</li>
              <li>Services offered with descriptions</li>
              <li>Pricing ranges where possible</li>
              <li>License numbers and certifications</li>
              <li>Typical timeline or availability</li>
              <li>Clear headings using question format</li>
              <li>Bullet points for scannable data</li>
              <li>Short paragraphs (3-4 sentences max)</li>
            </ul>
          </div>

          <h3>6. Add Schema Markup</h3>

          <p>LocalBusiness schema, FAQ schema, and Service schema give AI models structured signals about what your page contains. ChatGPT cites local landing pages, homepages, business listings, Contact Us pages, and other pages with consistent crawlable information: name, address, phone, hours, website, and clear local signals with geographic words and structured data. Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

          <div className="ae-callout ae-callout-success not-prose">
            <div className="ae-callout-title">Schema Types That Matter Most</div>
            <p><strong>LocalBusiness:</strong> NAP, hours, service area. <strong>FAQ:</strong> Question-answer pairs on every page. <strong>Service:</strong> What you offer, pricing, availability. These three schema types cover the signals AI models look for when deciding which businesses to cite. Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
          </div>

          <h3>7. Update Content on a Regular Cadence</h3>

          <p>Given that 60.5% of cited pages were published within the last two years, you should update your key pages at least quarterly. Add a &quot;Last updated&quot; date at the top of your pages. Even small updates signal recency to AI crawlers. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

          {/* Bar Chart: Content Age Impact */}
          <div className="ae-bar-group not-prose">
            <div className="ae-bar-item">
              <div className="ae-bar-label">Under 6 months</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '90%' }}></div></div>
              <div className="ae-bar-value">Highest citation rate</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">6-12 months</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '70%' }}></div></div>
              <div className="ae-bar-value">Strong</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">1-2 years</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '45%' }}></div></div>
              <div className="ae-bar-value">Declining</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">2+ years</div>
              <div className="ae-bar-track"><div className="ae-bar-fill" style={{ width: '15%' }}></div></div>
              <div className="ae-bar-value">Rarely cited</div>
            </div>
          </div>

          {/* ── CTA 5 ── */}
          <div className="ae-cta-inline not-prose">
            <p>Not sure which pages need updating first? We will prioritize them for you. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
            <Link href="/blindspot">Get Your Content Audit &rarr;</Link>
          </div>

          {/* ── SECTION 4: BUILD AUTHORITY ── */}
          <span className="ae-section-label not-prose">Authority Building</span>
          <h2>Build Authority: Getting Mentioned by Third Parties</h2>

          <p>This is the hardest part and the most important. ChatGPT does not trust what you say about yourself. It trusts what authoritative third parties say about you. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>

          <div className="ae-quote not-prose">
            <p>ChatGPT does not trust what you say about yourself. It trusts what authoritative third parties say about you. If Wikipedia accounts for 12.1% of all ChatGPT citations, you need to be where the citations are. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
          </div>

          {/* Decision Matrix: Third-Party Platforms */}
          <div className="ae-decision-matrix not-prose">
            <table>
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Priority</th>
                  <th>AI Citation Weight</th>
                  <th>Action Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Business Profile</td>
                  <td>Critical</td>
                  <td>Very High</td>
                  <td>Complete, accurate, regularly updated with posts and photos</td>
                </tr>
                <tr>
                  <td>Yelp / TripAdvisor</td>
                  <td>Critical</td>
                  <td>High</td>
                  <td>Claim listing, actively manage reviews</td>
                </tr>
                <tr>
                  <td>Better Business Bureau</td>
                  <td>High</td>
                  <td>Medium-High</td>
                  <td>Get a BBB listing for institutional credibility</td>
                </tr>
                <tr>
                  <td>Industry directories</td>
                  <td>High</td>
                  <td>Medium</td>
                  <td>Angi, HomeAdvisor, Houzz, Avvo, Healthgrades</td>
                </tr>
                <tr>
                  <td>Local news / community sites</td>
                  <td>Medium</td>
                  <td>High</td>
                  <td>Earn mentions through story pitches</td>
                </tr>
                <tr>
                  <td>Reddit</td>
                  <td>Medium</td>
                  <td>Medium</td>
                  <td>Participate helpfully in local subreddits (2.2% of AI Overview citations)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ae-callout ae-callout-info not-prose">
            <div className="ae-callout-title">Review Ratings and AI Citations</div>
            <p>ChatGPT strongly favors businesses with ratings above 4.2 stars. Locations cited by ChatGPT averaged 4.3 stars versus 3.9 on other platforms. A systematic review request process after every completed job is not optional. It is infrastructure. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
          </div>

          {/* ── CTA 6 ── */}
          <div className="ae-cta-inline not-prose">
            <p>Want to know exactly where your third-party authority gaps are?</p>
            <Link href="/blindspot">Get Your Authority Gap Analysis &rarr;</Link>
          </div>

          {/* ── CTA 7 (phone) ── */}
          <div className="ae-cta-inline not-prose">
            <p>Have questions about building your AI citation profile? Talk to a specialist.</p>
            <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
          </div>

          {/* ── SECTION 5: LOCAL SEO FUNDAMENTALS ── */}
          <span className="ae-section-label not-prose">Foundations</span>
          <h2>Local SEO Fundamentals That Feed ChatGPT</h2>

          <p>Traditional local SEO still matters because it feeds the data ecosystem ChatGPT draws from. The most critical foundation: NAP consistency. Your business name, address, and phone number must match exactly across all platforms.</p>

          {/* Stats Grid: NAP Impact */}
          <div className="ae-stats-grid not-prose">
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">📋</div>
              <div className="ae-stat-value ae-accent">40-60%</div>
              <div className="ae-stat-label">increase in citation reliability with consistent NAP</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">🔗</div>
              <div className="ae-stat-value ae-accent">3.5x</div>
              <div className="ae-stat-label">more likely to be cited with 32K+ referring domains</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-emoji">⭐</div>
              <div className="ae-stat-value ae-accent">4.3</div>
              <div className="ae-stat-label">average star rating of ChatGPT-cited businesses</div>
            </div>
          </div>

          <p>Inconsistencies can confuse AI models and data aggregators, potentially leading them to select incorrect information or overlook your business entirely. Run a citation audit using a tool like BrightLocal or Whitespark, fix every mismatch you find, and maintain consistency going forward.</p>

          <div className="ae-callout ae-callout-warning not-prose">
            <div className="ae-callout-title">Domain Authority Still Matters</div>
            <p>Domains with 32,000 or more referring domains are 3.5x more likely to be cited by ChatGPT than sites with fewer than 200. You will not close that gap overnight, but every quality local link from a chamber of commerce, a local business association, or a community organization moves you in the right direction.</p>
          </div>

          {/* ── CTA 8 ── */}
          <div className="ae-cta-inline not-prose">
            <p>We check your NAP consistency across 50+ platforms automatically.</p>
            <Link href="/blindspot">Run Your Free NAP Audit &rarr;</Link>
          </div>

          {/* ── SECTION 6: MEASURING SUCCESS ── */}
          <span className="ae-section-label not-prose">Measurement</span>
          <h2>Measuring Your ChatGPT Citation Success</h2>

          <p>You cannot manage what you do not measure. Here is a simple framework built around what is actually trackable.</p>

          {/* Timeline: Measurement Steps */}
          <div className="ae-timeline not-prose">
            <div className="ae-timeline-item">
              <h4>Step 1: Build Your Query List</h4>
              <p>Write down the 10 to 15 questions a customer would ask ChatGPT before hiring a business like yours. Include your service type plus your city, your service plus &quot;near me,&quot; and comparison queries like &quot;best [service] in [city].&quot;</p>
            </div>
            <div className="ae-timeline-item">
              <h4>Step 2: Run Weekly Tests</h4>
              <p>Ask those exact questions in ChatGPT and document which businesses appear in the responses. Note whether your business is cited, whether a competitor is cited instead, and what sources ChatGPT references.</p>
            </div>
            <div className="ae-timeline-item">
              <h4>Step 3: Track Your Citation Rate</h4>
              <p>Aim to appear in 30% or more of AI responses for your core category queries. Calculate this by dividing the number of queries where you appear by the total queries tested.</p>
            </div>
            <div className="ae-timeline-item">
              <h4>Step 4: Monitor Across Platforms</h4>
              <p>Run identical prompts across ChatGPT, Perplexity, and Google AI Mode. Track which brands appear and calculate the percentage of mentions each receives. Different platforms draw from different sources.</p>
            </div>
          </div>

          <div className="ae-takeaway not-prose">
            <p><strong>Target metric:</strong> Appear in 30% or more of AI responses for your core category queries. If you are below that threshold, your competitors are capturing the leads AI sends.</p>
          </div>

          {/* ── CTA 9 ── */}
          <div className="ae-cta-inline not-prose">
            <p>We run these tests for you across every major AI platform.</p>
            <Link href="/blindspot">Get Your AI Visibility Score &rarr;</Link>
          </div>

          {/* ── SECTION 7: COMMON MISTAKES ── */}
          <span className="ae-section-label not-prose">Pitfalls</span>
          <h2>Common Mistakes Local Businesses Make</h2>

          {/* Pros/Cons: Mistakes vs Fixes */}
          <div className="ae-pros-cons not-prose">
            <div className="ae-cons-box">
              <div className="ae-cons-title">What Businesses Get Wrong</div>
              <ul>
                <li>Focusing only on on-page optimization while ignoring third-party mentions</li>
                <li>Writing generic service descriptions with no specific or citable claims</li>
                <li>Having a 3.8-star average with only 12 reviews</li>
                <li>Setting content and forgetting it for a year or more</li>
                <li>Treating AI visibility as separate from local SEO</li>
              </ul>
            </div>
            <div className="ae-pros-box">
              <div className="ae-pros-title">What Top-Cited Businesses Do</div>
              <ul>
                <li>Actively pursue mentions on authoritative third-party platforms</li>
                <li>Use specific numbers, timeframes, and local details in every claim</li>
                <li>Maintain 4.3+ star ratings with systematic review requests</li>
                <li>Update key pages quarterly with fresh data and dates</li>
                <li>Run a unified strategy where local SEO feeds AI visibility</li>
              </ul>
            </div>
          </div>

          {/* ── CTA 10 (email) ── */}
          <div className="ae-cta-inline not-prose">
            <p>Not sure which mistakes are costing you AI visibility? Ask us.</p>
            <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
          </div>

          {/* ── SECTION 8: 90-DAY ACTION PLAN ── */}
          <span className="ae-section-label not-prose">Action Plan</span>
          <h2>Your 90-Day Action Plan for AI Visibility</h2>

          {/* Timeline: 90-Day Plan */}
          <div className="ae-timeline not-prose">
            <div className="ae-timeline-item">
              <h4>Days 1 to 30: Foundation</h4>
              <ul>
                <li>Run a NAP audit and fix every inconsistency across Google Business Profile, Yelp, and your top 20 directory listings</li>
                <li>Rewrite your homepage and top service pages to lead with answer capsules. Put your most important, specific, locally relevant information in the first 30% of each page</li>
                <li>Add &quot;Last updated&quot; dates to your key pages</li>
                <li>Add LocalBusiness and FAQ schema markup to your site</li>
                <li>Build your 15-query test list and run your first ChatGPT baseline audit</li>
              </ul>
            </div>
            <div className="ae-timeline-item">
              <h4>Days 31 to 60: Authority Building</h4>
              <ul>
                <li>Claim and fully complete your listings on Yelp, BBB, Angi, and any industry-specific directories relevant to your service type</li>
                <li>Launch a systematic review request process. Text or email every customer within 24 hours of job completion</li>
                <li>Write one question-optimized blog post or FAQ page targeting a high-intent local query</li>
                <li>Identify one local media outlet or community site where you could earn a mention, and reach out with a relevant story angle</li>
              </ul>
            </div>
            <div className="ae-timeline-item">
              <h4>Days 61 to 90: Measurement and Iteration</h4>
              <ul>
                <li>Run your 15-query ChatGPT test again and compare results to your baseline</li>
                <li>Identify which queries show competitors being cited and analyze their pages for structural differences</li>
                <li>Update any service pages that have not been refreshed in the last 90 days</li>
                <li>Write a second question-optimized piece targeting a different high-intent query</li>
                <li>Document your citation rate and set a 90-day target of appearing in at least 30% of your core category queries</li>
              </ul>
            </div>
          </div>

          {/* ── CTA 11 ── */}
          <div className="ae-cta-inline not-prose">
            <p>Skip the guesswork. We build your 90-day AI visibility roadmap for you.</p>
            <Link href="/blindspot">Start With Your Free Blind Spot Report &rarr;</Link>
          </div>

          <div className="ae-callout ae-callout-success not-prose">
            <div className="ae-callout-title">First-Mover Advantage</div>
            <p>The local businesses that establish ChatGPT visibility now are building a durable competitive advantage. The gap between appearing in 1.2% of AI recommendations versus becoming a consistently cited source in your market is almost entirely determined by whether you take a structured approach before your competitors do.</p>
          </div>

          {/* ── CTA 12 (phone) ── */}
          <div className="ae-cta-inline not-prose">
            <p>Ready to start your 90-day plan? Let us walk you through it.</p>
            <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
          </div>

          {/* ── FAQ SECTION ── */}
          <span className="ae-section-label not-prose">FAQ</span>
          <h2>Frequently Asked Questions</h2>

          <div className="space-y-6 mb-12 not-prose">
            {[
              {
                q: 'How is getting cited by ChatGPT different from ranking in Google?',
                a: 'AI visitors convert at 4.4 times the rate of traditional organic search, and when someone asks ChatGPT for recommendations, they are ready to make a decision. Unlike Google\'s 10 blue links, LLMs typically cite only 2 to 7 domains per response. If you are not in that tight citation window, you are not in the conversation.'
              },
              {
                q: "What's the single most important thing I can do to get cited by ChatGPT?",
                a: "The single strongest commonality among cited pages is the presence of answer capsules: short, definitive statements that directly answer a specific question. The format is 40 to 50 words that answer one question completely with no fluff, placed at the very top of your page. Specific data and original research dramatically increase your chances of being cited."
              },
              {
                q: 'How often should I update my website content to stay visible in ChatGPT?',
                a: "Update your key pages at least quarterly. ChatGPT's recency bias means outdated content gets ignored, even if it is otherwise excellent. Add a 'Last updated' date at the top of your pages. Recent and clearly dated content has a better chance of getting cited or extracted, especially in fast-moving service categories."
              },
              {
                q: 'Does local SEO still matter if I want to get cited by ChatGPT?',
                a: "Yes, significantly. Your business name, address, and phone number must match exactly across all platforms. Inconsistencies can confuse AI models and data aggregators, potentially leading them to select incorrect information or overlook your business entirely. Domains with strong backlink profiles are also more likely to be cited by AI."
              },
              {
                q: 'Can I just optimize my own website, or do I need mentions from other sites?',
                a: "Third-party mentions are essential. ChatGPT does not trust what you say about yourself; it trusts what authoritative third parties say about you. Wikipedia, Wikidata, Google Business Profile, major news outlets, and popular review platforms like Yelp and TripAdvisor are primary sources. If your business appears in these places, your odds of being cited improve significantly."
              },
              {
                q: 'What kind of business information is ChatGPT most likely to cite?',
                a: "Your website needs to clearly communicate your business details using structured formats like headings, bullet points, and tables to present your business name, address, phone number, and services. ChatGPT cites local landing pages, homepages, business listings, Contact Us pages, and other pages with consistent crawlable information and clear local signals with geographic words and structured data."
              },
              {
                q: "How do I track whether ChatGPT is actually citing my business?",
                a: "Directly test ChatGPT by asking questions about your business and verifying whether you appear in the responses. Run identical prompts across AI platforms for your core category, such as 'best HVAC company in [city]'. Track which brands appear and calculate the percentage of mentions each receives. Aim to appear in 30% or more of AI responses for your core category queries."
              },
              {
                q: "What's more important for ChatGPT citations: traditional SEO ranking or something else?",
                a: "ChatGPT and AI Mode tend to draw from a wider range of sources, often citing lower-ranking or even non-ranking pages if they provide contextually relevant information. While websites with more organic traffic tend to get more mentions in AI Overviews, there is a weak correlation between high organic traffic and ChatGPT inclusion specifically. Content depth, structure, and freshness matter most for securing ChatGPT citations."
              }
            ].map((item, i) => (
              <div key={i} className="border border-gray-800 rounded-xl p-6 bg-gray-900">
                <h3 className="text-white font-semibold mb-3 leading-snug">{item.q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* ── CTA 13 ── */}
          <div className="ae-cta-inline not-prose">
            <p>Still have questions? Our team specializes in AI visibility for local businesses.</p>
            <a href="mailto:support@theanswerengine.ai">Email Us Your Question &rarr;</a>
          </div>

          {/* ── AUTHOR CARD ── */}
          <div className="ae-author-card not-prose">
            <div>
              <p><strong>Justin Borges</strong></p>
              <p>We help local service businesses get cited by ChatGPT, Google AI, Perplexity, and Claude. Our Blind Spot Reports reveal exactly where your AI visibility gaps are and what to do about them.</p>
            </div>
          </div>

          {/* ── CTA 14 (phone) ── */}
          <div className="ae-cta-inline not-prose">
            <p>Talk to a real person about your AI visibility strategy.</p>
            <a href="tel:+12134442229">Call (213) 444-2229 &rarr;</a>
          </div>

          {/* ── CTA BLOCK ── */}
          <div className="ae-cta-block not-prose">
            <h3>Stop Being Invisible to AI Search</h3>
            <p>800 million people use ChatGPT every week. Your competitors are already working to get cited. The businesses that move first capture the AI recommendation advantage while the window is still open.</p>
            <Link href="/blindspot">Get Your Free Blind Spot Report &rarr;</Link>
          </div>

          {/* ── FINAL CTA ── */}
          <div className="ae-final-cta not-prose">
            <h3>Find Out If AI Platforms Can See Your Business</h3>
            <p>Run 5 high-intent queries in your service area on ChatGPT right now and see if your business appears. If it does not, you have a blind spot. Get a free AI visibility check and find out exactly where you stand.</p>
            <Link href="/blindspot" className="ae-final-cta-pulse">Get Your Free Blind Spot Report &rarr;</Link>
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
          </div>

          {/* ── CTA 15 (email) ── */}
          <div className="ae-cta-inline not-prose">
            <p>Prefer email? Send us your website URL and we will tell you what AI sees.</p>
            <a href="mailto:support@theanswerengine.ai">Email support@theanswerengine.ai &rarr;</a>
          </div>

        </article>
      </main>
    </div>
  )
}
