import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

export const metadata: Metadata = {
  title: 'How to Fix Wrong AI Answers About Your Business | The Answer Engine',
  description: 'AI platforms are spreading incorrect information about your business right now. Learn what types of errors occur, why they happen, and the framework to reclaim accurate AI representation.',
  keywords: [
    'fix wrong AI information business',
    'AI wrong business info fix',
    'correct AI hallucinations business',
    'ChatGPT wrong business details',
    'AI misinformation local business',
    'fix AI business listing errors',
    'answer engine optimization',
    'AI business accuracy',
  ],
  openGraph: {
    title: 'How to Fix Wrong AI Answers About Your Business',
    description: 'AI platforms are spreading incorrect information about your business right now. Here is the framework to diagnose, correct, and prevent AI misinformation.',
    type: 'article',
    url: 'https://www.theanswerengine.ai/blog/how-to-fix-wrong-ai-answers-about-your-business',
    images: [{ url: 'https://theanswerengine.ai/blog/how-to-fix-wrong-ai-answers-about-your-business.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Fix Wrong AI Answers About Your Business',
    description: 'AI is confidently telling your customers wrong things. Here is the complete framework to fix it.',
  },
  alternates: {
    canonical: 'https://www.theanswerengine.ai/blog/how-to-fix-wrong-ai-answers-about-your-business',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.theanswerengine.ai/blog/how-to-fix-wrong-ai-answers-about-your-business#article',
      headline: 'How to Fix Wrong AI Answers About Your Business',
      description: 'AI platforms are spreading incorrect information about your business right now. Learn what types of errors occur, why they happen, and the framework to reclaim accurate AI representation.',
      image: 'https://theanswerengine.ai/blog/how-to-fix-wrong-ai-answers-about-your-business.webp',
      datePublished: '2026-03-25',
      dateModified: '2026-03-25',
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
        '@id': 'https://theanswerengine.ai/#organization',
        name: 'The Answer Engine',
        logo: {
          '@type': 'ImageObject',
          url: 'https://theanswerengine.ai/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.theanswerengine.ai/blog/how-to-fix-wrong-ai-answers-about-your-business',
      },
      articleSection: 'How-To Guides',
      wordCount: 2800,
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.theanswerengine.ai/blog/how-to-fix-wrong-ai-answers-about-your-business#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I know if AI is giving wrong information about my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The only reliable way to know is to actively query AI platforms yourself. Open ChatGPT, Perplexity, Google AI Overviews, and Claude, then ask each one about your business by name, by category, and by location. Check every factual claim: hours, address, phone number, services, ownership, and pricing. Screenshot discrepancies. Many business owners never do this audit and remain unaware that AI has been steering customers away for months.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I directly submit corrections to ChatGPT or Perplexity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not in the way most business owners expect. These platforms do not offer a direct business portal for corrections. Instead, they pull from authoritative third-party sources. The correction path runs through the sources AI trusts: your website, structured data markup, business directories, and news or editorial mentions. Fix the sources and the AI eventually corrects itself, though timelines vary by platform and training cycle.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take for AI to show corrected business information?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There is no single answer because each AI platform has a different data refresh cycle. Google AI Overviews can update within days when your Google Business Profile is corrected. ChatGPT uses training data with longer cycles, though its browsing mode can surface recent changes faster. Perplexity updates more frequently since it relies heavily on live search results. The realistic window is anywhere from a few days to several months depending on the platform and the nature of the error.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of business information does AI get wrong most often?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most common errors are: incorrect phone numbers (research shows AI gives wrong phone numbers roughly 36% of the time), outdated business hours, wrong or missing service descriptions, incorrect ownership or leadership names, outdated pricing references, and confusion with similarly named competitors. Hours and contact details change frequently for businesses, making them especially prone to AI lag.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does fixing my Google Business Profile fix AI answers too?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Partially. Updating your Google Business Profile is a critical first step and directly influences Google AI Overviews and Google Maps AI features. However, ChatGPT, Perplexity, Claude, and other non-Google AI platforms do not pull from Google Business Profile. You need to address your website structured data, authoritative directory listings, and the broader web citation footprint to correct errors across all AI platforms.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does AI confidently state wrong facts about my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI language models generate the statistically most probable answer based on their training data. When your business information is sparse, inconsistent, or conflicting across sources, the model fills gaps with predictions rather than verified facts. Crucially, AI delivers these predictions with the same confident tone it uses for verified facts. There is no built-in uncertainty signal for business-specific hallucinations, which is what makes them so damaging.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.theanswerengine.ai/blog/how-to-fix-wrong-ai-answers-about-your-business#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.theanswerengine.ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://www.theanswerengine.ai/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How to Fix Wrong AI Answers About Your Business',
          item: 'https://www.theanswerengine.ai/blog/how-to-fix-wrong-ai-answers-about-your-business',
        },
      ],
    },
  ],
}

export default function HowToFixWrongAIAnswersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ backgroundColor: '#0F1117' }} className="min-h-screen text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#F27D24] transition-colors">Home</Link></li>
              <li className="text-gray-700">/</li>
              <li><Link href="/blog" className="hover:text-[#F27D24] transition-colors">Blog</Link></li>
              <li className="text-gray-700">/</li>
              <li className="text-gray-400">How to Fix Wrong AI Answers About Your Business</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-[#F27D24]/40 text-[#F27D24]">
                How-To Guides
              </span>
            </div>
            <h1 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              How to Fix Wrong AI Answers About Your Business
            </h1>
            <div className="ae-intro-box p-6 rounded-xl border border-gray-800 bg-gray-900/50 mb-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                AI platforms are giving your potential customers incorrect information right now. Wrong hours. Wrong phone numbers. Wrong services. And they are doing it with total confidence. This guide walks through exactly what is happening, why the standard fixes fall short, and what it actually takes to correct the record.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <span>By Justin Borges</span>
              <span>&#x2022;</span>
              <time dateTime="2026-03-25">March 25, 2026</time>
              <span>&#x2022;</span>
              <span>12 min read</span>
            </div>
          </header>

          {/* Inline CTA 1 */}
          <div className="ae-cta-inline my-8 p-5 rounded-xl bg-[#F27D24]/10 border border-[#F27D24]/20 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Not sure what AI is saying about you? Markets fill fast. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check your territory availability.</a></p>
              <p className="text-gray-400 text-sm">Our Blind Spot Report shows exactly what each AI platform has on file for your business. Your first step: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO Blind Spot Scan.</a></p>
            </div>
            <Link
              href="/blindspot"
              className="shrink-0 inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#D96416] transition-colors"
            >
              Get Free Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Prose content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">

            {/* TOC */}
            <div className="ae-toc not-prose my-10 p-6 rounded-xl border border-gray-800 bg-gray-900/60">
              <h2 className="font-plus-jakarta text-lg font-bold text-white mb-4">In This Guide</h2>
              <ol className="space-y-2 text-sm">
                {[
                  ['#the-scale-of-the-problem', 'The Scale of the Problem'],
                  ['#why-ai-gets-it-wrong', 'Why AI Gets Your Information Wrong'],
                  ['#what-types-of-errors-exist', 'What Types of Errors to Look For'],
                  ['#the-diagnosis-phase', 'Phase 1: Diagnosing Your AI Footprint'],
                  ['#the-correction-framework', 'Phase 2: The Correction Framework'],
                  ['#prevention-is-ongoing', 'Phase 3: Preventing Future Errors'],
                  ['#what-you-cannot-control', 'What You Cannot Control Directly'],
                  ['#faq', 'Frequently Asked Questions'],
                ].map(([href, label]) => (
                  <li key={href as string}>
                    <a href={href as string} className="text-[#F27D24] hover:underline">
                      {label as string}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Stats Grid */}
            <div id="the-scale-of-the-problem" className="not-prose my-12">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">The Scale of the Problem</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-6">AI Misinformation Is Not a Fringe Problem</h2>
              <p className="text-gray-300 text-lg mb-8">
                The numbers are difficult to look at if you own a local business. AI-powered search is now the first place millions of customers turn for business information, and the error rate is far higher than most people realize.
               <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your free call</a> before your market fills.</p>
              <div className="ae-stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { emoji: '📞', value: '36%', label: 'of AI-cited business phone numbers are incorrect' },
                  { emoji: '💸', value: '$67B', label: 'in global business losses attributed to AI hallucinations in 2024' },
                  { emoji: '😤', value: '47%', label: 'of enterprise users made a major decision from hallucinated AI content' },
                  { emoji: '🔄', value: '39%', label: 'of AI customer service bots were pulled due to hallucination errors in 2024' },
                ].map((stat) => (
                  <div key={stat.label} className="ae-stat-card p-5 rounded-xl border border-gray-800 bg-gray-900/60 text-center">
                    <div className="ae-stat-emoji text-3xl mb-2">{stat.emoji}</div>
                    <div className="ae-stat-value ae-accent font-plus-jakarta text-2xl font-bold text-[#F27D24] mb-1">{stat.value}</div>
                    <div className="ae-stat-label text-xs text-gray-400 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm italic">
                Sources: Seer Interactive research; Suprmind AI Hallucination Statistics Report 2026; Four Dots Business Impact of AI Hallucinations study.
               Reach out: <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            </div>

            <p>
              When a customer asks ChatGPT for the best plumber near them, or asks Perplexity for the hours of a local restaurant, they expect a reliable answer. The AI delivers one. The problem is that confidence and accuracy are not the same thing, and for small businesses especially, the AI often has stale, incomplete, or entirely fabricated details.
             Call us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> today.</p>

            <p>
              Most business owners discover the problem by accident: a customer calls to complain about being turned away at the wrong location, or someone mentions the AI told them the business was closed on a day it was open. By then, the damage is already done.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Lock in your exclusive territory now.</a></p>

            <div className="ae-callout ae-callout-warning not-prose my-8 p-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5">
              <div className="flex gap-3">
                <span className="text-2xl">&#9888;&#65039;</span>
                <div>
                  <p className="font-semibold text-white mb-1">The Silence Is the Worst Part <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Get your free AI readiness report.</a></p>
                  <p className="text-gray-300 text-sm">
                    Most customers who get wrong AI information do not call to complain. They just go to a competitor. You never find out. The AI keeps giving the same wrong answer. This is why a proactive audit is essential rather than waiting for complaints to surface.
                   Ready to act? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free strategy session.</a></p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="why-ai-gets-it-wrong" className="not-prose mt-14 mb-4">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">Root Causes</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">Why AI Gets Your Information Wrong</h2>
            </div>

            <p>
              Understanding why the errors happen is the prerequisite to fixing them. AI models do not consult a single authoritative business database. They generate answers by synthesizing patterns from vast training datasets that include directories, forums, news articles, old web pages, and user-generated content. Several failure modes produce errors specific to local businesses.
             Drop us a line at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p>
              <strong>Stale training data.</strong> Large language models have training cutoffs. Information from your website, press releases, or profiles that changed after that cutoff simply does not exist in the model yet. An AI trained on data from 18 months ago will confidently repeat hours, phone numbers, and addresses from 18 months ago even if you updated them last week.
             Speak to an AEO specialist: <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <p>
              <strong>NAP inconsistency as a signal problem.</strong> When AI encounters ten different versions of your phone number across ten directories, it cannot determine which is authoritative. It either picks the most common one (which may be old) or generates a statistical composite. The result is wrong either way.
             One client per city. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">See if your market is available.</a></p>

            <p>
              <strong>Competitor conflation.</strong> Businesses with similar names in the same city are a frequent source of hallucinations. AI models can inadvertently blend facts from two entities, assigning one business the location, phone number, or review profile of the other. <Link href="/blog/why-ai-says-wrong-things-about-business">See the full breakdown of why AI fabricates business details.</Link>
             Check where you stand: <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free Blind Spot Scan.</a></p>

            <p>
              <strong>Sparse structured data.</strong> AI prefers structured signals over unstructured prose. If your website lacks schema markup and your profiles are thin, the AI has less reliable input to work with and must make more inferences, which increases the error rate.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free 30-min call.</a></p>

            {/* Inline CTA 2 */}
            <div className="ae-cta-inline not-prose my-10 p-5 rounded-xl bg-[#F27D24]/10 border border-[#F27D24]/20 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold mb-1">Is AI conflating you with a competitor? Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> for a custom strategy.</p>
                <p className="text-gray-400 text-sm">Our audit identifies exactly which platforms have errors and what those errors are. No guesswork. Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
              </div>
              <a
                href="tel:+12134442229"
                className="shrink-0 inline-flex items-center gap-2 border border-[#F27D24] text-[#F27D24] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#F27D24]/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call (213) 444-2229
              </a>
            </div>

            {/* Section 3 */}
            <div id="what-types-of-errors-exist" className="not-prose mt-14 mb-4">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">Error Taxonomy</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">What Types of Errors to Look For</h2>
            </div>

            <p>
              Not all AI errors carry the same business cost. Before you can fix anything, you need to know what you are looking for. There are four categories of AI errors that affect local businesses.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>

            {/* Comparison Table */}
            <div className="ae-comparison-table not-prose my-8 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-[#F27D24] font-semibold">Error Type</th>
                    <th className="text-left py-3 px-4 text-[#F27D24] font-semibold">Examples</th>
                    <th className="text-left py-3 px-4 text-[#F27D24] font-semibold">Business Cost</th>
                    <th className="text-left py-3 px-4 text-[#F27D24] font-semibold">Fix Complexity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {[
                    {
                      type: 'Contact / NAP Errors',
                      examples: 'Wrong phone, old address, outdated hours',
                      cost: 'High: direct lost visits and calls',
                      fix: 'Moderate',
                    },
                    {
                      type: 'Service Errors',
                      examples: 'Discontinued offerings still listed, new services missing',
                      cost: 'Medium: wrong-fit customers, wasted sales time',
                      fix: 'Moderate',
                    },
                    {
                      type: 'Identity Errors',
                      examples: 'Confused with competitor, wrong ownership, wrong founding date',
                      cost: 'High: brand trust damage, competitor benefit',
                      fix: 'High',
                    },
                    {
                      type: 'Sentiment Errors',
                      examples: 'AI paraphrases negative reviews as representative, wrong rating cited',
                      cost: 'Very High: conversion suppression',
                      fix: 'High',
                    },
                  ].map((row) => (
                    <tr key={row.type} className="hover:bg-gray-900/40 transition-colors">
                      <td className="py-3 px-4 text-white font-medium">{row.type}</td>
                      <td className="py-3 px-4 text-gray-400">{row.examples}</td>
                      <td className="py-3 px-4 text-gray-400">{row.cost}</td>
                      <td className="py-3 px-4 text-gray-400">{row.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Identity errors are the hardest to fix because they often require building an authoritative citation footprint from scratch, outweighing the conflicting signal that caused the confusion in the first place. Sentiment errors are the most damaging because they directly suppress purchase intent at the moment a customer is deciding.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            {/* Section 4 */}
            <div id="the-diagnosis-phase" className="not-prose mt-14 mb-4">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">Phase 1</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">Diagnosing Your AI Footprint</h2>
            </div>

            <p>
              You cannot fix what you have not measured. The first phase is a systematic audit across every AI platform your customers are likely using. This is not a one-time Google search. It requires structured queries across multiple platforms, and the results need to be documented.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>

            {/* Timeline */}
            <div className="ae-timeline not-prose my-10 space-y-0">
              {[
                {
                  step: '01',
                  title: 'Query Each Platform Directly',
                  body: 'Ask ChatGPT, Perplexity, Google AI Overviews, Claude, and Bing Copilot about your business by name, by service type plus city, and by the questions customers typically ask. Record every factual claim returned.',
                },
                {
                  step: '02',
                  title: 'Document Every Discrepancy',
                  body: 'Compare AI responses against your verified ground truth: current address, current hours, current phone, current service list. Flag every deviation, no matter how minor. A single wrong digit in a phone number is a dead end for every customer who calls it.',
                },
                {
                  step: '03',
                  title: 'Identify the Source of the Error',
                  body: 'For each error, trace where the AI likely got the wrong data. Check major directories (Yelp, Apple Maps, Bing Places, Foursquare, YP.com, BBB) against your ground truth. The directory with the wrong data is usually the source feeding the AI error.',
                },
                {
                  step: '04',
                  title: 'Prioritize by Impact',
                  body: 'Not all errors need to be fixed simultaneously. Prioritize contact and hours errors first (highest direct customer impact), then service errors, then identity errors, then sentiment issues.',
                },
              ].map((item, i, arr) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#F27D24] text-white text-sm font-bold flex items-center justify-center shrink-0 z-10">
                      {item.step}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 bg-gray-700 mt-2 mb-0" style={{ minHeight: '2rem' }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-plus-jakarta text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.body} Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ae-callout ae-callout-info not-prose my-8 p-5 rounded-xl border border-blue-500/30 bg-blue-500/5">
              <div className="flex gap-3">
                <span className="text-2xl">&#128161;</span>
                <div>
                  <p className="font-semibold text-white mb-1">The Audit Takes Longer Than Expected Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
                  <p className="text-gray-300 text-sm">
                    A thorough AI footprint audit across six platforms with 10-15 query variations per platform, plus cross-referencing 20+ directory sources, typically takes 3-5 hours for a single-location business. Multi-location businesses should plan for a full day per market. This is why most business owners never complete one, and why the errors persist.
                    <span className="inline-block mt-2">
                      We do this as part of our{' '}
                      <Link href="/blindspot" className="text-[#F27D24] hover:underline">Blind Spot Report</Link>.
                      {' '}You get the completed audit, not just instructions on how to do one.
                    </span>
                   We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="the-correction-framework" className="not-prose mt-14 mb-4">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">Phase 2</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">The Correction Framework</h2>
            </div>

            <p>
              Once you know what is wrong and where the error originates, the correction work falls across four layers. These layers interact: weakness in one amplifies problems in the others.
             Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            {/* Pros/Cons - repurposed as What Works vs What Fails */}
            <div className="ae-pros-cons not-prose my-10 grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-green-500/30 bg-green-500/5">
                <h3 className="font-plus-jakarta font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-green-400">&#10003;</span> What Actually Moves the Needle
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {[
                    'Updating structured data (schema markup) directly on your website',
                    'Claiming and correcting every major directory listing',
                    'Publishing authoritative content that AI platforms cite directly',
                    'Building consistent NAP across 50+ directories simultaneously',
                    'Earning editorial mentions that reinforce correct business details',
                    'Structured FAQ content that AI can quote verbatim',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-green-400 shrink-0 mt-0.5">&#x2713;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
                <h3 className="font-plus-jakarta font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-red-400">&#x2717;</span> What Does Not Work
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {[
                    'Emailing ChatGPT or Perplexity asking them to update your info',
                    'Posting a correction on social media and hoping AI sees it',
                    'Updating only your Google Business Profile and calling it done',
                    'Waiting for AI to self-correct without fixing source data',
                    'Relying on customers to flag AI errors on your behalf',
                    'One-time fixes without an ongoing monitoring system',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-red-400 shrink-0 mt-0.5">&#x2717;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p>
              The correction framework works in layers, each one building on the previous. Most businesses that attempt this on their own stall at layer two because the directory correction process is manual and time-consuming. The ones who see results are the ones who systematically work through all four layers. Need help? Get a <Link href="/blindspot" className="text-orange-500 hover:underline">blind spot audit</Link> to understand where you stand.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <p>
              <strong>Layer 1: Your website as the authoritative source.</strong> Your own domain is the most credible signal you control entirely. This means adding or updating LocalBusiness schema markup with current, verified facts. It means ensuring your contact page, about page, and service pages all agree on every detail. AI that scrapes your site should find zero conflicts. <Link href="/blog/make-your-site-the-one-ai-trusts">How to make your website the source AI trusts most.</Link>
             Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>

            <p>
              <strong>Layer 2: Claim and correct directory listings.</strong> The major citation sources that feed AI training data include Yelp, Apple Maps, Bing Places, Foursquare, YP.com, BBB, Hotfrog, Manta, and dozens of vertical-specific directories. Each one needs to be claimed, verified, and corrected to match your ground truth exactly. This is the layer most businesses underinvest in.
             Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>

            <p>
              <strong>Layer 3: Publish AI-citable content.</strong> Static listings help, but AI platforms also weight editorial content. Blog posts, FAQ pages, and service pages that directly address common questions about your business give AI something quotable. A well-structured FAQ that answers "what are [Business Name]&apos;s hours?" and "what services does [Business Name] offer?" gives AI an explicit, citable source to pull from. <Link href="/blog/what-happens-when-ai-search-gets-business-wrong">See what happens when none of this is in place.</Link>
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>

            <p>
              <strong>Layer 4: Build a citation network.</strong> Third-party editorial mentions from local news, industry publications, and trusted blogs act as corroborating evidence for AI systems. When multiple independent sources agree on your business details, AI has higher confidence in those details and lower tendency to hallucinate alternatives.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>

            {/* Inline CTA 3 */}
            <div className="ae-cta-inline not-prose my-10 p-5 rounded-xl bg-[#F27D24]/10 border border-[#F27D24]/20 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold mb-1">Ready to fix your AI footprint? <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
                <p className="text-gray-400 text-sm">We handle all four correction layers. Start with a free audit to see what we are working with. Email <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a> to get started.</p>
              </div>
              <Link
                href="/blindspot"
                className="shrink-0 inline-flex items-center gap-2 bg-[#F27D24] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#D96416] transition-colors"
              >
                Get Free Blind Spot Report
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* Section 6 */}
            <div id="prevention-is-ongoing" className="not-prose mt-14 mb-4">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">Phase 3</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">Preventing Future Errors: This Is Not a One-Time Fix</h2>
            </div>

            <p>
              The businesses that stay accurately represented in AI are the ones that treat AI accuracy as a continuous process, not a project with a completion date. Several dynamics make ongoing maintenance essential.
             <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a></p>

            <p>
              AI platforms retrain, update their retrieval systems, and change which sources they weight. A correction that holds in ChatGPT today may need reinforcing after the next major model update. New directories launch and become AI data sources. Business changes, hours, service additions, and ownership transitions all need to be pushed through the correction pipeline each time they occur.
            </p>

            {/* ae-quote */}
            <div className="ae-quote not-prose my-10 pl-6 border-l-4 border-[#F27D24]">
              <blockquote className="text-xl text-white font-plus-jakarta font-semibold leading-relaxed mb-3">
                &ldquo;The average time to discover an AI-generated error in business context is 3.7 weeks. In that time, the AI has already answered hundreds of queries with the wrong information.&rdquo;
              </blockquote>
              <cite className="text-gray-500 text-sm not-italic">Four Dots Business Impact of AI Hallucinations Study</cite>
            </div>

            <p>
              The businesses most vulnerable to recurring AI errors are ones that make frequent operational changes: restaurants that update seasonal menus, service businesses that expand or contract their service list, and multi-location businesses where one location&apos;s details differ from another. <Link href="/blog/check-if-ai-recommends-your-business">Learn how to monitor whether AI is recommending your business correctly.</Link>
            </p>

            {/* ae-callout-orange */}
            <div className="ae-callout ae-callout-orange not-prose my-8 p-5 rounded-xl border border-[#F27D24]/30 bg-[#F27D24]/5">
              <div className="flex gap-3">
                <span className="text-2xl">&#128073;</span>
                <div>
                  <p className="font-semibold text-white mb-1">The Monitoring Requirement</p>
                  <p className="text-gray-300 text-sm">
                    Best practice is a full AI accuracy re-audit every 90 days, plus an immediate re-audit any time you make a significant business change. Most businesses do zero audits. That is why AI error rates stay stubbornly high.
                    {' '}Questions? Text or call us at{' '}
                    <a href="sms:+12134442229" className="text-[#F27D24] hover:underline">(213) 444-2229</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div id="what-you-cannot-control" className="not-prose mt-14 mb-4">
              <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">Honest Assessment</div>
              <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">What You Cannot Control Directly</h2>
            </div>

            <p>
              Transparency matters here. Some aspects of AI behavior are outside your direct control, no matter what you do.
            </p>

            <p>
              You cannot force a retraining cycle on ChatGPT or Claude. You cannot submit a direct correction to their knowledge bases. You cannot guarantee that a specific error will be fixed within a specific timeframe on a specific platform. These systems operate on their own schedules and their own source hierarchies.
            </p>

            <p>
              What you can control is the quality, consistency, and authority of every signal in your correction ecosystem. The goal is to make the correct information so dominant, so consistent, and so well-structured that AI systems have no credible alternative when generating answers about your business. You are not directly editing the AI. You are engineering the environment the AI learns from. Get a <Link href="/blindspot" className="text-orange-500 hover:underline">blind spot audit</Link> to see exactly what needs fixing in your correction ecosystem.
            </p>

            {/* Takeaway */}
            <div className="ae-takeaway not-prose my-8 p-6 rounded-xl border border-[#F27D24]/30 bg-gradient-to-br from-[#F27D24]/10 to-transparent">
              <h3 className="font-plus-jakarta font-bold text-white mb-3">The Key Takeaway</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Fixing wrong AI answers is an influence problem, not an access problem. You do not need backdoor access to AI training data. You need to make the correct data so authoritative and so ubiquitous that it crowds out everything else. That is what AEO (Answer Engine Optimization) does at a systematic level.
              </p>
            </div>

            {/* Cheat Sheet */}
            <div className="ae-cheat-sheet not-prose my-12 p-6 rounded-xl border border-gray-700 bg-gray-900/80">
              <h3 className="font-plus-jakarta text-xl font-bold text-[#F27D24] mb-5">Quick Reference: AI Error Fix Checklist</h3>
              <p className="text-gray-400 text-sm mb-4">Going through all 12 steps yourself? <a href="sms:+18004470003" className="text-orange-500 hover:underline">Text us</a> if you get stuck. We help businesses complete this audit all the time.</p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                {[
                  'Query ChatGPT, Perplexity, Google AI Overviews, Claude, and Bing Copilot',
                  'Document every factual error with screenshot evidence',
                  'Verify your Google Business Profile is current and claimed',
                  'Claim and correct Bing Places listing',
                  'Audit Yelp, Apple Maps, Foursquare, YP.com for accuracy',
                  'Add or update LocalBusiness schema markup on your website',
                  'Ensure contact page, about page, and service pages are consistent',
                  'Publish an FAQ page with explicit, quotable business details',
                  'Build citations through editorial mentions and press coverage',
                  'Set a 90-day calendar reminder for your next re-audit',
                  'Audit immediately after any business change (hours, services, location)',
                  'Track which AI platforms return your business in category searches',
                ].map((item) => (
                  <div key={item} className="flex gap-2 py-1.5 border-b border-gray-800 last:border-0">
                    <span className="text-[#F27D24] shrink-0 mt-0.5 text-sm">&#9744;</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inline CTA 4 */}
            <div className="ae-cta-inline not-prose my-10 p-5 rounded-xl bg-[#F27D24]/10 border border-[#F27D24]/20 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold mb-1">Want someone else to handle this checklist for you?</p>
                <p className="text-gray-400 text-sm">Email us and we will tell you what we find before asking for anything.</p>
              </div>
              <a
                href="mailto:support@theanswerengine.ai"
                className="shrink-0 inline-flex items-center gap-2 border border-[#F27D24] text-[#F27D24] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#F27D24]/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email Us
              </a>
            </div>

          </div>{/* end prose */}

          {/* Author Card */}
          <div className="ae-author-card my-12 p-6 rounded-xl border border-gray-800 bg-gray-900/60 flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-[#F27D24]/20 border border-[#F27D24]/40 flex items-center justify-center text-2xl shrink-0">
              &#128204;
            </div>
            <div className="flex-1">
              <p className="font-plus-jakarta font-bold text-white">Justin Borges</p>
              <p className="text-[#F27D24] text-sm mb-2">AI Visibility Specialists</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                We specialize in diagnosing and correcting how AI platforms represent local and regional businesses. Our Blind Spot Reports have uncovered AI errors for businesses in over 40 industries across the US.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <a href="tel:+18004470003" className="text-orange-500 hover:underline">Call 1-800-447-0003</a>
                <span className="text-gray-700">•</span>
                <a href="sms:+18004470003" className="text-orange-500 hover:underline">Text us</a>
              </div>
            </div>
          </div>

          {/* 3-Tier CTA Block */}
          <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
            <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Stop AI From Spreading Wrong Info About Your Business</h3>
            <p className="text-gray-400 mb-6">Our Blind Spot Report shows exactly what AI platforms are saying about you right now, and where the errors are.</p>
            <Link href="/blindspot" className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D96416] transition-colors">
              Get Your Free Blind Spot Report
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

          {/* FAQ Section */}
          <section id="faq" className="my-16">
            <div className="ae-section-label text-xs font-bold uppercase tracking-widest text-[#F27D24] mb-2">Common Questions</div>
            <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <p className="text-gray-400 mb-8">Have questions about fixing your AI footprint? We have answers. Or <a href="tel:+18004470003" className="text-orange-500 hover:underline">call us at 1-800-447-0003</a> to discuss your specific situation.</p>
            <div className="space-y-6">
              {[
                {
                  q: 'How do I know if AI is giving wrong information about my business?',
                  a: 'The only reliable way to know is to actively query AI platforms yourself. Open ChatGPT, Perplexity, Google AI Overviews, and Claude, then ask each one about your business by name, by category, and by location. Check every factual claim: hours, address, phone number, services, ownership, and pricing. Screenshot discrepancies. Many business owners never do this audit and remain unaware that AI has been steering customers away for months.',
                },
                {
                  q: 'Can I directly submit corrections to ChatGPT or Perplexity?',
                  a: 'Not in the way most business owners expect. These platforms do not offer a direct business portal for corrections. Instead, they pull from authoritative third-party sources. The correction path runs through the sources AI trusts: your website, structured data markup, business directories, and news or editorial mentions. Fix the sources and the AI eventually corrects itself, though timelines vary by platform and training cycle.',
                },
                {
                  q: 'How long does it take for AI to show corrected business information?',
                  a: 'There is no single answer because each AI platform has a different data refresh cycle. Google AI Overviews can update within days when your Google Business Profile is corrected. ChatGPT uses training data with longer cycles, though its browsing mode can surface recent changes faster. Perplexity updates more frequently since it relies heavily on live search results. The realistic window is anywhere from a few days to several months depending on the platform and the nature of the error.',
                },
                {
                  q: 'What types of business information does AI get wrong most often?',
                  a: 'The most common errors are: incorrect phone numbers (research shows AI gives wrong phone numbers roughly 36% of the time), outdated business hours, wrong or missing service descriptions, incorrect ownership or leadership names, outdated pricing references, and confusion with similarly named competitors. Hours and contact details change frequently for businesses, making them especially prone to AI lag.',
                },
                {
                  q: 'Does fixing my Google Business Profile fix AI answers too?',
                  a: 'Partially. Updating your Google Business Profile is a critical first step and directly influences Google AI Overviews and Google Maps AI features. However, ChatGPT, Perplexity, Claude, and other non-Google AI platforms do not pull from Google Business Profile. You need to address your website structured data, authoritative directory listings, and the broader web citation footprint to correct errors across all AI platforms.',
                },
                {
                  q: 'Why does AI confidently state wrong facts about my business?',
                  a: 'AI language models generate the statistically most probable answer based on their training data. When your business information is sparse, inconsistent, or conflicting across sources, the model fills gaps with predictions rather than verified facts. Crucially, AI delivers these predictions with the same confident tone it uses for verified facts. There is no built-in uncertainty signal for business-specific hallucinations, which is what makes them so damaging.',
                },
              ].map((item) => (
                <div key={item.q} className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                  <h3 className="font-plus-jakarta font-semibold text-white mb-3">{item.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="ae-final-cta my-16 text-center p-10 rounded-2xl border border-[#F27D24]/30 bg-gradient-to-b from-[#F27D24]/10 to-transparent relative overflow-hidden">
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 0%, rgba(255,106,0,0.15) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10">
              <p className="text-[#F27D24] text-sm font-semibold uppercase tracking-widest mb-3">Take Action Today</p>
              <h3 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
                Every Day You Wait, AI Keeps Sending<br className="hidden md:block" /> Customers the Wrong Way
              </h3>
              <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
                The Blind Spot Report is free and takes less than 24 hours. You get a complete picture of what every major AI platform is saying about your business right now.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/blindspot"
                  className="inline-flex items-center gap-2 bg-[#F27D24] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D96416] transition-colors"
                  style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                >
                  Get Your Free Blind Spot Report
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Or call (213) 444-2229
                </a>
              </div>
              <p className="text-gray-600 text-xs mt-6">No credit card. No commitment. Just clarity on what AI is saying about your business.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
