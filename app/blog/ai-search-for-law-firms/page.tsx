import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const revalidate = 86400;
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How to Get Your Law Firm Recommended by ChatGPT and AI Search | The Answer Engine',
    description:
      'Attorneys: learn how to get your law firm cited by ChatGPT, Perplexity, and Google AI. The AEO strategy that puts your firm in AI recommendations — not just Google.',
    keywords: [
      'how to get law firm on ChatGPT',
      'AI search for lawyers',
      'law firm ChatGPT recommendations',
      'attorney AEO strategy',
      'how to appear in AI search results law firm',
      'ChatGPT local business law firm',
      'law firm AI visibility',
      'answer engine optimization for attorneys',
    ],
    openGraph: {
      title: 'How to Get Your Law Firm Recommended by ChatGPT and AI Search',
      description:
        'The step-by-step AEO playbook for law firms. Get cited when people ask "best personal injury attorney near me" — in ChatGPT, not just Google.',
      type: 'article',
      publishedTime: '2026-05-13T00:00:00.000Z',
      authors: ['The Answer Engine'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'How to Get Your Law Firm Recommended by ChatGPT and AI Search',
      description:
        'The AEO playbook for attorneys. Get your firm cited by ChatGPT, Perplexity, and Google AI — before your competitors figure this out.',
    },
    alternates: {
      canonical: 'https://www.theanswerengine.ai/blog/ai-search-for-law-firms',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get Your Law Firm Recommended by ChatGPT and AI Search',
  description:
    'A complete AEO guide for law firms: how to appear in ChatGPT recommendations, Perplexity citations, and Google AI Overviews when potential clients search for attorneys.',
  author: { '@type': 'Organization', name: 'The Answer Engine' },
  publisher: {
    '@type': 'Organization',
    name: 'The Answer Engine',
    url: 'https://www.theanswerengine.ai',
  },
  datePublished: '2026-05-13T00:00:00.000Z',
  dateModified: '2026-05-13T00:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.theanswerengine.ai/blog/ai-search-for-law-firms',
  },
  keywords:
    'law firm ChatGPT, attorney AEO, AI search for lawyers, how to get law firm on ChatGPT',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does ChatGPT recommend local law firms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ChatGPT, Perplexity, and Google AI all recommend specific law firms when users ask questions like "best personal injury lawyer near me" or "who handles DUI cases in [city]." Firms that have built AEO signals — structured citations, authoritative Q&A content, and consistent reviews — appear in these recommendations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take for a law firm to appear in AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most law firms see first AI citations within 60–90 days of implementing a focused AEO strategy. High-authority practices with strong review profiles and existing web presence can appear within 30 days. Perplexity tends to index new citations fastest; ChatGPT via Bing typically takes 45–75 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What practice areas get the most AI recommendations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Personal injury, criminal defense (especially DUI), family law (divorce, custody), immigration, and estate planning see the highest AI recommendation volume. These are high-stakes, emotionally urgent queries where users trust AI to give a qualified referral rather than a generic list.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AEO for law firms different from regular SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — significantly. SEO gets you ranked on a results page. AEO gets your firm spoken aloud or cited as the answer. AI models synthesize authority signals differently than Google: they weight conversational Q&A content, citation mentions in trusted publications, and review sentiment over raw backlink counts. A mid-sized firm with strong AEO signals can outrank BigLaw in AI search.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do reviews matter for AI search recommendations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extremely. AI models treat review sentiment as a trust signal for local recommendations. A law firm with 150 Google reviews averaging 4.8 stars that mention specific outcomes ("he got my DUI dismissed," "she won my custody case") is far more likely to be recommended than a firm with 20 generic reviews. Recency matters too — AI models detect review velocity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can any law firm compete in AI search, or just large firms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Smaller and mid-size firms often outperform large firms in AI search precisely because they're more likely to have specific, outcome-oriented content and personalized reviews. AI models prefer specificity over size. A solo practitioner who has published detailed answers to common client questions in their practice area can absolutely outrank a 50-attorney firm that publishes only press releases.",
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.theanswerengine.ai' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://www.theanswerengine.ai/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How to Get Your Law Firm on ChatGPT',
      item: 'https://www.theanswerengine.ai/blog/ai-search-for-law-firms',
    },
  ],
};

export default function AISearchForLawFirmsPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="min-h-screen bg-[#0A0A0F] text-white">
        {/* Hero */}
        <header className="border-b border-white/10 px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <nav className="mb-8 text-sm text-white/40">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-white/60">AI Search for Law Firms</span>
            </nav>
          {/* Championship Cover Image */}
          <div className="ae-article-hero w-full rounded-xl overflow-hidden mb-10" style={{ maxHeight: 420 }}>
            <img
              src="/blog/ai-search-for-law-firms.webp"
              alt="ai search for law firms"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              loading="eager"
            />
          </div>

            <div className="mb-6 inline-block">
              <span className="font-headline text-xs font-black tracking-tighter uppercase bg-[#F27D24]/10 text-[#F27D24] border border-[#F27D24]/30 px-3 py-1 rounded">
                Industry Verticals
              </span>
            </div>

            <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
              How to Get Your Law Firm{' '}
              <span className="text-[#F27D24]">Recommended</span> by ChatGPT and AI Search
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
              Potential clients are asking AI "who's the best personal injury lawyer near me" —
              and getting specific firm names back. Here's how to make sure yours is one of them.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-white/50">
              <span>May 13, 2026</span>
              <span>·</span>
              <span>11 min read</span>
              <span>·</span>
              <span>The Answer Engine</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 py-12">
          {/* Opening stat block */}
          <div className="ae-stats-grid mb-16">
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">68%</div>
              <div className="ae-section-label">of legal queries on AI platforms include location intent</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">3–5</div>
              <div className="ae-section-label">firms cited per AI response — not 10 blue links</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">90 days</div>
              <div className="ae-section-label">to first AI citation with focused AEO strategy</div>
            </div>
            <div className="ae-stat-card">
              <div className="ae-stat-value ae-accent">$0</div>
              <div className="ae-section-label">per click — AI citations are organic, not paid</div>
            </div>
          </div>

          {/* Why AI search matters for law firms */}
          <section className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              Why AI Search Is the New Legal Referral Engine
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Legal has always been a referral business. Someone gets in a car accident, they call a
              friend who says "talk to Mike, he handled mine." That same behavior now happens in
              ChatGPT: "who's a good personal injury lawyer in Phoenix?"
             Questions? Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>
            <p className="text-white/80 leading-relaxed mb-4">
              The difference: AI doesn't recommend based on who you know. It recommends based on who
              the web says is authoritative, trusted, and relevant. That's a level playing field — and
              for law firms willing to build the right signals, it's a massive opportunity.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Secure your territory before a competitor does.</a></p>
            <p className="text-white/80 leading-relaxed mb-6">
              ChatGPT, Perplexity, Claude, and Google AI Overviews collectively now field millions of
              legal queries per month. When those platforms answer "best DUI attorney in [city]," they
              cite 3–5 firms, not 3,000. The race to be in those 3–5 is already underway. Most law
              firms don't know it's happening.
             <a href="https://theanswerengine.ai/blindspot" className="cta-inline">See your AI visibility score — free.</a></p>

            <div className="border border-[#F27D24]/30 rounded-lg p-6 bg-[#F27D24]/5">
              <p className="font-headline text-sm font-black tracking-tighter uppercase text-[#F27D24] mb-2">
                The shift in how clients find attorneys
               <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book your free consultation here.</a></p>
              <p className="text-white/70 text-sm leading-relaxed">
                Traditional: Google "personal injury lawyer Phoenix" → click 4 websites → call 2 firms
                → pick one. <strong className="text-white">New:</strong> Ask ChatGPT "who's a good
                personal injury lawyer in Phoenix" → get 3 named firms with context → call the one
                that sounds most authoritative. The AI already did the shortlist work.
               Contact us at <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
            </div>
          </section>

          {/* How AI picks which law firms to recommend */}
          <section className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              How AI Decides Which Law Firms to Recommend
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              AI models don't crawl your website in real time. They synthesize signals from across
              the web — training data, live search results, review platforms, and citation patterns —
              to determine which firms are the most authoritative answer to a given legal query.
              Here's what they're looking for:
             Reach us at <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a>.</p>

            <div className="space-y-6">
              {[
                {
                  number: '01',
                  title: 'Citation Mentions in Authoritative Sources',
                  body: 'Has your firm been mentioned in local news, legal directories (Avvo, Martindale, FindLaw), bar association publications, or regional business coverage? AI models treat these citations as authority signals — similar to how Google treats backlinks, but weighted for recency and relevance to specific practice areas.',
                },
                {
                  number: '02',
                  title: 'Conversational Q&A Content',
                  body: 'AI models prefer content that directly answers questions. A page titled "Can I Sue After a Car Accident If I Wasn\'t Wearing a Seatbelt?" with a clear, authoritative answer is far more valuable than a generic "Personal Injury" practice area page. Think like a client asking a question, not a firm listing credentials.',
                },
                {
                  number: '03',
                  title: 'Review Volume, Recency, and Sentiment',
                  body: 'AI models read your reviews. Not just the star average — the actual text. Reviews that mention specific outcomes ("he got the charges dismissed"), specific attorneys by name, and specific practice areas teach AI what your firm is best at. Velocity matters too: 10 reviews in the last month signals an active practice.',
                },
                {
                  number: '04',
                  title: 'Geographic Specificity',
                  body: 'AI returns local recommendations for local queries. Your firm needs to be clearly associated with specific cities, neighborhoods, and counties — not just your home market. If you serve clients across a metro area, your web presence needs to reflect that geographic breadth explicitly.',
                },
                {
                  number: '05',
                  title: 'Practice Area Clarity',
                  body: 'Generalist signals get diluted. A firm that is clearly the answer for "DUI attorney in Scottsdale" will outperform a full-service firm where DUI is buried under 12 other practice areas. The more specifically AI can map your firm to a query, the more often you appear.',
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex gap-6 p-6 border border-white/10 rounded-lg bg-white/[0.02] hover:border-white/20 transition-colors"
                >
                  <div className="font-headline text-4xl font-black tracking-tighter text-[#F27D24]/30 leading-none shrink-0 w-12">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-black tracking-tighter uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm">{item.body} We work with one business per market. <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Check if yours is still open.</a></p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Practice areas by AI recommendation volume */}
          <section className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              Which Practice Areas Get the Most AI Recommendations
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Not all legal queries are created equal in AI search. These practice areas generate the
              highest AI recommendation volume — typically because the queries are emotionally urgent
              and users want a trusted recommendation, not a directory.
             Find your gaps with a <a href="https://theanswerengine.ai/blindspot" className="cta-inline">free AERO scan.</a></p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 pr-6 font-headline font-black tracking-tighter uppercase text-[#F27D24] text-xs">
                      Practice Area
                    </th>
                    <th className="text-left py-3 pr-6 font-headline font-black tracking-tighter uppercase text-white/50 text-xs">
                      AI Query Volume
                    </th>
                    <th className="text-left py-3 font-headline font-black tracking-tighter uppercase text-white/50 text-xs">
                      Sample AI Query
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    {
                      area: 'Personal Injury',
                      volume: 'Very High',
                      query: '"best car accident lawyer near me"',
                    },
                    {
                      area: 'Criminal Defense / DUI',
                      volume: 'Very High',
                      query: '"DUI attorney in [city] who wins cases"',
                    },
                    {
                      area: 'Family Law / Divorce',
                      volume: 'High',
                      query: '"divorce lawyer who handles custody in [city]"',
                    },
                    {
                      area: 'Immigration',
                      volume: 'High',
                      query: '"immigration attorney near me for green card"',
                    },
                    {
                      area: 'Estate Planning',
                      volume: 'High',
                      query: '"trust and will attorney in [city]"',
                    },
                    {
                      area: 'Employment Law',
                      volume: 'Medium',
                      query: '"wrongful termination lawyer [city]"',
                    },
                    {
                      area: 'Real Estate Law',
                      volume: 'Medium',
                      query: '"real estate attorney for closing [city]"',
                    },
                  ].map((row) => (
                    <tr key={row.area} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 pr-6 font-medium">{row.area}</td>
                      <td className="py-3 pr-6 text-white/60">{row.volume}</td>
                      <td className="py-3 text-white/50 italic">{row.query}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* The 6-step AEO playbook */}
          <section className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-4">
              The 6-Step AEO Playbook for Law Firms
            </h2>
            <p className="text-white/70 text-sm mb-10">
              These steps build the citation signals AI models use to recommend your firm. Execute
              them in order — each one compounds the next.
             <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Schedule a free call</a> to see where you stand.</p>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Audit Your Current AI Visibility',
                  time: 'Week 1',
                  body: 'Before building, know where you stand. Open ChatGPT, Perplexity, and Google and ask "best [your practice area] attorney in [your city]." Note who appears — and what those firms have that you don\'t. This is your competitive baseline. You\'re looking for citation sources, review profiles, and content patterns in the firms that AI recommends.',
                  action:
                    'Run 10 queries across your top practice areas and primary markets. Document which competitors appear and on which platforms.',
                },
                {
                  step: '2',
                  title: 'Build Your Q&A Content Library',
                  time: 'Weeks 2–4',
                  body: 'Create dedicated pages that answer specific legal questions your clients ask. Not "Personal Injury Law" — but "What Happens If I\'m Partially at Fault in a Car Accident in Arizona?" Each page should give a complete, authoritative answer in plain language, then explain how your firm handles it. AI models pull from this content directly.',
                  action:
                    'Write 15–20 Q&A pages targeting the questions your intake team hears most. Each page: 600–900 words, direct answer in first paragraph, your jurisdiction\'s specific law, FAQ schema markup.',
                },
                {
                  step: '3',
                  title: 'Claim and Optimize Every Legal Directory',
                  time: 'Week 2',
                  body: 'Avvo, Martindale-Hubbell, FindLaw, Justia, Lawyers.com, and Super Lawyers are primary sources AI models use to establish law firm authority. A verified, complete profile on all six creates citation signals that AI crawlers index. Make sure your practice areas, jurisdictions, bar admissions, and client reviews are all current.',
                  action:
                    'Claim and fully complete profiles on all six major directories. NAP consistency (Name, Address, Phone) must be identical across all.',
                },
                {
                  step: '4',
                  title: 'Engineer Your Review Profile',
                  time: 'Ongoing',
                  body: 'Set up a systematic review request process for every closed matter where the outcome was positive. The goal is reviews that contain: the client\'s situation (without violating confidentiality), the outcome, the specific attorney\'s name, and the practice area. These outcome-specific reviews teach AI models what your firm wins at.',
                  action:
                    'Build an automated post-close email sequence that requests reviews. Target: 2+ new Google reviews per week per attorney. Respond to every review publicly.',
                },
                {
                  step: '5',
                  title: 'Get Cited in Local Media and Legal Publications',
                  time: 'Ongoing',
                  body: 'AI models treat news citations as strong authority signals. Pitch attorneys as expert sources to local business journals, regional news outlets, and legal publications when relevant stories break. A quote in the Phoenix Business Journal about "what the new DUI law means for drivers" creates a citation that AI indexes as evidence your firm is the local expert on DUI.',
                  action:
                    'Identify 5 local journalists covering courts, business, and consumer law. Set up Google Alerts for stories where your attorneys have relevant expertise. Pitch one comment per week.',
                },
                {
                  step: '6',
                  title: 'Add FAQ and Legal Schema Markup',
                  time: 'Week 3',
                  body: 'Schema markup tells AI models how to read your pages. For law firms: LegalService schema (specifying practice areas, jurisdictions, fee structure), FAQPage schema on all Q&A pages, and LocalBusiness schema with complete geographic coverage. This is structural signal — AI doesn\'t have to guess what your firm does and where.',
                  action:
                    'Implement LegalService + FAQPage schema on all practice area pages. Use LocalBusiness schema with areaServed listing every city and county you serve.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="border border-white/10 rounded-lg overflow-hidden bg-white/[0.01]"
                >
                  <div className="flex items-center gap-4 p-5 border-b border-white/10 bg-white/[0.03]">
                    <div className="w-10 h-10 rounded-full bg-[#F27D24] flex items-center justify-center font-headline font-black text-black text-lg shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-headline font-black tracking-tighter uppercase text-lg leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-xs text-white/40 font-mono">{item.time}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-white/75 leading-relaxed mb-4 text-sm">{item.body} Send your questions to <a href="mailto:support@theanswerengine.ai" className="cta-inline">support@theanswerengine.ai</a>.</p>
                    <div className="flex gap-2 items-start">
                      <span className="font-headline text-xs font-black tracking-tighter uppercase text-[#F27D24] shrink-0 mt-0.5">
                        Action:
                      </span>
                      <p className="text-white/60 text-sm leading-relaxed">{item.action} Call <a href="tel:+12134442229" className="cta-inline">(213) 444-2229</a> for a free consultation.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Platform breakdown */}
          <section className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              Platform-by-Platform: How Each AI Recommends Law Firms
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  platform: 'ChatGPT',
                  source: 'Bing + training data',
                  focus: 'Web citations + reviews',
                  lag: '45–75 days',
                  tip: 'Ensure Bing Webmaster Tools is set up and your site is indexed. Bing powers ChatGPT\'s real-time web results — firms invisible on Bing are invisible to ChatGPT.',
                },
                {
                  platform: 'Perplexity',
                  source: 'Real-time web crawl',
                  focus: 'Q&A content + recency',
                  lag: '2–4 weeks',
                  tip: 'Perplexity is the fastest to index new content. Publish a detailed Q&A page on any topic and it can appear in Perplexity recommendations within days. Best first-mover advantage.',
                },
                {
                  platform: 'Google AI',
                  source: 'Google index + Knowledge Graph',
                  focus: 'E-E-A-T + local signals',
                  lag: '30–60 days',
                  tip: 'Google AI Overviews weight your Google Business Profile heavily. A fully completed GBP with Q&A, posts, and photos significantly boosts AI Overview inclusion for local legal queries.',
                },
                {
                  platform: 'Claude',
                  source: 'Training data (no live web)',
                  focus: 'Long-tail authority signals',
                  lag: 'Training cycle',
                  tip: 'Claude recommendations are baked into training data. Long-term citation building in authoritative publications and directories is the compounding strategy here — there\'s no shortcut.',
                },
              ].map((p) => (
                <div
                  key={p.platform}
                  className="p-5 border border-white/10 rounded-lg bg-white/[0.02]"
                >
                  <div className="font-headline text-xl font-black tracking-tighter uppercase mb-3 text-[#F27D24]">
                    {p.platform}
                  </div>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex gap-2">
                      <span className="text-white/40 w-20 shrink-0">Source</span>
                      <span className="text-white/80">{p.source}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-white/40 w-20 shrink-0">Weights</span>
                      <span className="text-white/80">{p.focus}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-white/40 w-20 shrink-0">Time to cite</span>
                      <span className="text-white/80">{p.lag}</span>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <p className="text-white/60 text-xs leading-relaxed">{p.tip} <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Claim your market territory — one client per area.</a></p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-6">
              5 Mistakes Law Firms Make With AI Search
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: 'Treating AEO like SEO',
                  detail:
                    'SEO is about ranking. AEO is about being cited as the answer. A firm that ranks #2 on Google for "DUI lawyer Phoenix" but has no Q&A content and thin reviews will not appear in ChatGPT recommendations. Different signals, different strategy.',
                },
                {
                  mistake: 'Generic practice area pages',
                  detail:
                    '"We handle personal injury cases" does not give AI anything to work with. AI needs specificity: what kind of personal injury, in what jurisdiction, with what typical outcomes, handled by who. Generic content is invisible to AI recommendation engines.',
                },
                {
                  mistake: 'Ignoring secondary directories',
                  detail:
                    'Most firms are on Avvo but skip Justia, Lawyers.com, and Super Lawyers. Each unclaimed or incomplete directory is a missing citation signal. AI models use citation density — how many authoritative sources reference your firm — as a core trust indicator.',
                },
                {
                  mistake: 'Not responding to reviews',
                  detail:
                    'AI models read firm responses as part of the trust signal. A firm that responds to every review (positive and negative) with specific, professional language signals an active, professional practice. Non-response is a negative signal.',
                },
                {
                  mistake: 'Waiting for the first AI citation before starting',
                  detail:
                    'The best time to start building AEO signals was 6 months ago. The second best time is today. The law firms that dominate AI search in your market in 2027 are building those signals right now — most of their competitors haven\'t started yet.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 border border-red-500/20 rounded-lg bg-red-500/[0.03]"
                >
                  <div className="text-red-400 font-headline font-black text-lg leading-none shrink-0 mt-0.5">
                    ✕
                  </div>
                  <div>
                    <h3 className="font-headline font-black tracking-tighter uppercase text-sm mb-1 text-red-400">
                      {item.mistake}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed">{item.detail} <a href="https://theanswerengine.ai/blindspot" className="cta-inline">Run your free AI Blind Spot Scan.</a></p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tighter uppercase mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-px">
              {faqSchema.mainEntity.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-white/10 rounded-lg mb-2 bg-white/[0.01] open:bg-white/[0.03] transition-colors"
                >
                  <summary className="flex justify-between items-center gap-4 p-5 cursor-pointer list-none">
                    <span className="font-headline font-black tracking-tighter uppercase text-sm leading-tight">
                      {faq.name}
                    </span>
                    <span className="text-[#F27D24] font-mono text-lg shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-white/70 leading-relaxed text-sm">
                      {faq.acceptedAnswer.text}
                     <a href="https://calendly.com/theanswerengine-support/30min" className="cta-inline">Book a free 30-minute strategy call.</a></p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="ae-final-cta not-prose">
            <div className="ae-final-cta-inner">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white font-headline uppercase tracking-tighter">
                The PI Firm That Gets Cited by AI Gets the Case
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                ChatGPT recommends specific lawyers. Perplexity cites specific firms. Google AI Overviews name names. The Answer Engine puts your PI firm in those citations — and keeps competitors out. Free citation audit. One firm per market.
              </p>
              <a
                href="https://theanswerengine.ai/blindspot"
                className="inline-flex items-center justify-center gap-2 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
              >
                Run Free PI Citation Audit →
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <a href="tel:+12134442229" className="hover:text-orange-400 transition-colors">(213) 444-2229</a>
                <a href="https://calendly.com/theanswerengine-support/30min" className="hover:text-orange-400 transition-colors">Book Free Call</a>
                <a href="mailto:support@theanswerengine.ai" className="hover:text-orange-400 transition-colors">support@theanswerengine.ai</a>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
