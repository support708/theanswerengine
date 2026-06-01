import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Urgent Care Clinics Get Found on AI Search in 2026'
const description = 'Urgent care patients are now using ChatGPT and Perplexity to find nearby clinics with available appointments. Here is exactly what gets urgent care clinics cited and recommended by AI platforms.'
const slug = 'how-urgent-care-clinics-get-found-on-ai-search'
const publishDate = '2026-05-01'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'urgent care AI search',
    'how urgent care clinics get found on ChatGPT',
    'urgent care AEO',
    'urgent care marketing 2026',
  ],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.webp`, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
  },
  alternates: { canonical: `https://theanswerengine.ai/blog/${slug}` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: title,
      description,
      image: { '@type': 'ImageObject', url: `https://theanswerengine.ai/blog/${slug}.webp`, width: 1200, height: 630 },
      datePublished: publishDate,
      dateModified: publishDate,
      author: {
        '@type': 'Person',
        name: 'Justin Borges',
        url: 'https://theanswerengine.ai/about',
      },
      publisher: { '@type': 'Organization', name: 'The Answer Engine', url: 'https://theanswerengine.ai' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://theanswerengine.ai/blog/${slug}` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do urgent care clinics show up on ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Some do, but most are invisible. Clinics that appear have detailed content about services, current wait times, accepted insurance, and appointment availability.',
          },
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="ae-hero-section">
        <div className="ae-hero-badge">Healthcare Marketing</div>
        <h1 className="ae-hero-title">{title}</h1>
        <p className="ae-hero-desc">
          Most urgent care clinics rely on walk-in traffic. But patients now use ChatGPT and Perplexity to find clinics with short wait times and immediate appointments.
        </p>
        <div className="ae-hero-meta">
          <time dateTime={publishDate}>May 1, 2026</time>
          <span>·</span>
          <span>10 min read</span>
          <span>·</span>
          <span>The Answer Engine Team</span>
        </div>
        <div className="ae-hero-visual" aria-hidden="true">
          <svg viewBox="0 0 480 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="ae-hero-svg">
            <circle cx="240" cy="38" r="20" fill="#22c55e" opacity="0.9" />
            <text x="240" y="43" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">AI</text>
            <rect x="200" y="80" width="80" height="100" rx="4" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
            <text x="240" y="140" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="600">Clinic</text>
          </svg>
        </div>
        <div className="ae-stats-grid">
          <div className="ae-stat-card"><span className="ae-stat-value">143M</span><span className="ae-stat-label">Annual urgent care visits in US</span></div>
          <div className="ae-stat-card"><span className="ae-stat-value">62%</span><span className="ae-stat-label">Of patients search for clinics online first</span></div>
          <div className="ae-stat-card"><span className="ae-stat-value">3.2x</span><span className="ae-stat-label">More appointments from AI-cited clinics</span></div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-4 prose prose-invert prose-lg max-w-none">
        <h2>Why Urgent Care Is Missing From AI Search</h2>
        <p>
          Urgent care clinics operate on walk-in traffic and Google Ads. But patients now ask ChatGPT and Perplexity "where can I find urgent care near me with short wait times?" Most urgent care clinics are completely invisible in those conversations.
         Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
        <p>AI platforms cannot discover them because wait time data is not published, appointment availability is not accessible, service scope is vague, and insurance information is buried. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

        <div className="ae-cta-block not-prose">
          <h3>Ready to Get Found on AI?</h3>
          <p>Most urgent care clinics are invisible to ChatGPT and Perplexity. Clinics that optimize for AI visibility acquire new patients continuously. <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
          <p><Link href="/contact" className="ae-cta-button">Start Your Urgent Care AEO Program</Link> <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
        </div>

        <h2>Frequently Asked Questions</h2>
        <h3>How long does it take to see results?</h3>
        <p>Most urgent care clinics see their first AI mentions within 30 to 60 days of updating their GBP and publishing structured content. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>

        <h3>Will AEO help get more appointments?</h3>
        <p>Yes. Clinics cited on ChatGPT and Perplexity report 2-4x more patient inquiries from AI sources with 40-60% higher conversion rates. <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>
      </article>
    </>
  )
}
