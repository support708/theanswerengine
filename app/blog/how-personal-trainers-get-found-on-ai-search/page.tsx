import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Personal Trainers Get Found on AI Search'
const description = 'Potential clients are asking ChatGPT and Google AI to find personal trainers near them. Here is what determines whether AI recommends you or someone else.'
const slug = 'how-personal-trainers-get-found-on-ai-search'
const publishDate = '2026-04-15'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['personal trainer AI search', 'how personal trainers get found online', 'ChatGPT personal trainer', 'fitness trainer AI recommendations', 'personal trainer local search'],
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['https://theanswerengine.ai/about'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [{ url: `https://theanswerengine.ai/blog/${slug}.webp`, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`https://theanswerengine.ai/blog/${slug}.webp`] },
  alternates: { canonical: `https://theanswerengine.ai/blog/${slug}` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: title,
      description,
      image: {
        '@type': 'ImageObject',
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
      },
      datePublished: publishDate,
      dateModified: publishDate,
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
        url: 'https://theanswerengine.ai',
        logo: {
          '@type': 'ImageObject',
          url: 'https://theanswerengine.ai/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://theanswerengine.ai/blog/${slug}`,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I get ChatGPT to recommend me as a personal trainer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Getting recommended by ChatGPT requires building a digital footprint AI can draw on: a professional website with clear specialization content, consistent directory presence across fitness platforms and local directories, client testimonials with specific results, and ideally some third-party coverage such as local press or fitness publications. AI recommends trainers it has enough consistent information about to do so confidently.',
          },
        },
        {
          '@type': 'Question',
          name: 'What queries do potential clients use to find personal trainers on AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common queries include: "personal trainer near me for weight loss," "best personal trainer for beginners in [city]," "personal trainer who specializes in seniors," "online personal trainer for women," and "personal trainer for marathon prep near me." Specialization-specific queries are especially common, clients looking for expertise, not just proximity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does having a website help personal trainers get found on AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, significantly. Your website is the primary surface AI reads about you. A professional website with clear specialty pages, client testimonials, certification details, and FAQ content gives AI the vocabulary to confidently describe what you do and who you serve. A minimal or absent website leaves AI with very little to work with.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should personal trainers be on Yelp for AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Perplexity AI, one of the fastest-growing AI search platforms, pulls heavily from Yelp. Having an active, complete Yelp profile with client reviews that mention your specializations and training style can contribute meaningfully to your AI visibility, especially for users searching on Perplexity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does my NASM or ACE certification show up in AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Only if you list it clearly on your website, profiles, and directory listings. AI learns about your certifications from the text it can access. If your credentials are buried or absent from your digital presence, AI cannot represent them accurately. Listing certifications prominently and consistently across your web presence helps AI describe you with specificity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can personal trainers who only train online get found on AI search?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Online personal trainers can appear in AI recommendations for queries like "online personal trainer for weight loss" or "virtual personal trainer for women over 40." The key is building a digital presence that clearly communicates your online delivery model, your specializations, and the types of clients you serve best.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the biggest mistake personal trainers make with AI search visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most common mistake is having a generic online presence with no clear specialization. AI systems recommend trainers they can describe specifically. A trainer whose website says "I help clients reach their fitness goals" gives AI almost nothing to match against specific client queries. Trainers who specialize clearly, whether in weight loss, seniors, athletes, pre/post-natal, or specific sports, give AI the specificity it needs to make confident recommendations.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theanswerengine.ai' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://theanswerengine.ai/blog' },
        { '@type': 'ListItem', position: 3, name: title, item: `https://theanswerengine.ai/blog/${slug}` },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li className="text-gray-600">/</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          <li className="text-gray-600">/</li>
          <li className="text-gray-400 truncate">How Personal Trainers Get Found on AI Search</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-12 pb-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="ae-section-label">Industry Guides</span>
          <span className="text-gray-500 text-sm">April 15, 2026</span>
          <span className="text-gray-500 text-sm">8 min read</span>
        </div>
        <h1 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          How Personal Trainers Get Found on AI Search
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          People looking for personal trainers are no longer just searching Google. They are asking ChatGPT, Perplexity, and Google AI: "Who is the best personal trainer for weight loss near me?" Here is what determines whether that question ends with your name.
        </p>

        {/* Stats Grid */}
        <div className="ae-stats-grid">
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">45%</div>
            <div className="ae-stat-value">of consumers</div>
            <div className="ae-stat-label">now use AI tools to find local services including personal trainers</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">$59B</div>
            <div className="ae-stat-value">fitness industry</div>
            <div className="ae-stat-label">personal training market size, growing as AI reshapes how clients find trainers</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">7x</div>
            <div className="ae-stat-value">growth in AI search</div>
            <div className="ae-stat-label">consumer use of AI to find local businesses over the past year</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">Specialize</div>
            <div className="ae-stat-value">to get cited</div>
            <div className="ae-stat-label">AI recommends trainers with clear niches far more reliably than generalists</div>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-8">

        {/* TOC */}
        <div className="ae-toc">
          <div className="ae-toc-title">What We Cover</div>
          <ol>
            <li><a href="#how-clients-find">How Clients Are Finding Personal Trainers on AI</a></li>
            <li><a href="#what-ai-looks-for">What AI Looks for in a Personal Trainer</a></li>
            <li><a href="#specialization">Why Specialization Is Your Biggest Lever</a></li>
            <li><a href="#digital-presence">Building the AI-Ready Digital Presence</a></li>
            <li><a href="#platforms">Which Platforms Matter Most</a></li>
            <li><a href="#mistakes">Common Mistakes Personal Trainers Make</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="how-clients-find" className="mt-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">How Clients Are Finding Personal Trainers on AI</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The search journey for a new personal training client looks different than it did two years ago. Yes, Google is still part of the picture. But a growing share of potential clients skip the list of blue links entirely and go straight to an AI assistant.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            They type something like: "Who is a good personal trainer near me for someone over 50?" or "Best personal trainer in [city] for weight loss." The AI gives them a direct answer with a name, sometimes with a brief description of why that trainer was recommended.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            If your name is in that answer, you have a qualified lead who already has a recommendation from the AI they trust. If it is not, that lead may never find you at all.
          </p>

          <div className="ae-callout ae-callout-info">
            <div className="ae-callout-title">The AI Recommendation Dynamic</div>
            <p>When AI recommends a personal trainer, it is often answering a question with significant personal context: weight loss goals, age-specific needs, injury recovery, athletic performance. These nuanced queries favor trainers whose online presence communicates clear specializations, not generic fitness marketing.</p>
          </div>
        </section>

        {/* Inline CTA 1 */}
        <div className="ae-cta-inline">
          <p>Not sure how AI currently sees your personal training business? <Link href="/blindspot">Get a free Blind Spot Report</Link> and find out what is missing.</p>
        </div>

        {/* Section 2 */}
        <section id="what-ai-looks-for" className="mt-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">What AI Looks for in a Personal Trainer</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            AI does not evaluate your fitness knowledge or your actual results with clients. It evaluates the information available about you across the internet. Here are the signals it weighs most heavily.
          </p>

          <div className="ae-timeline">
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">1</div>
              <div>
                <div className="ae-timeline-title">Clear Specialization on Your Website</div>
                <div className="ae-timeline-desc">AI needs to know what kind of trainer you are. "Personal trainer" is too generic to generate confident, specific recommendations. AI recommends trainers it can describe specifically: "specializes in weight loss for women over 40," "HIIT training for athletes," "pre/postnatal fitness." If your website does not say it clearly, AI cannot say it either.</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">2</div>
              <div>
                <div className="ae-timeline-title">Certifications and Credentials</div>
                <div className="ae-timeline-desc">NASM, ACE, NSCA, ISSA, ACSM: these certifications are trust signals. They need to be visible on your website, your Google Business Profile, and your directory listings. If your credentials are not findable, AI either omits them or guesses, neither of which helps you.</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">3</div>
              <div>
                <div className="ae-timeline-title">Client Results Language</div>
                <div className="ae-timeline-desc">Testimonials and case studies that describe specific outcomes, "lost 35 lbs over 4 months," "ran first marathon at 52," "recovered from knee surgery, back to hiking", give AI the outcome language that matches what potential clients are searching for.</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">4</div>
              <div>
                <div className="ae-timeline-title">Geographic Signals</div>
                <div className="ae-timeline-desc">For in-person trainers: clear location information including city, neighborhood, and facility name. For online trainers: clear description of virtual delivery. Both need consistency across your website and all directory listings.</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">5</div>
              <div>
                <div className="ae-timeline-title">FAQ Content That Matches AI Queries</div>
                <div className="ae-timeline-desc">AI loves content that directly answers questions. FAQ sections on your website that address what clients actually ask ("How often should I train?", "Do you offer online sessions?", "What equipment do I need?") align your content with the patterns of questions AI systems answer.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="specialization" className="mt-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">Why Specialization Is Your Biggest Lever</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Of all the factors that determine whether AI recommends you, specialization is the most powerful lever most personal trainers are not pulling.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Here is why: when a potential client asks AI for a personal trainer, they almost always add a qualifier. "For weight loss." "For seniors." "For athletes." "After a back injury." "For beginners." AI matches these qualifiers against what it knows about trainers in the area. Trainers whose digital presence clearly communicates a specialization get matched to specific queries. Generalists get skipped.
          </p>

          <div className="ae-decision-matrix">
            <div className="ae-decision-row">
              <span className="ae-decision-if">"Personal trainer in Dallas"</span>
              <span className="ae-decision-arrow">Generic query</span>
              <span className="ae-decision-then">AI picks the best-documented trainer overall. Competitive.</span>
            </div>
            <div className="ae-decision-row">
              <span className="ae-decision-if">"Personal trainer for seniors Dallas"</span>
              <span className="ae-decision-arrow">Specialty query</span>
              <span className="ae-decision-then">AI picks the trainer most clearly associated with senior fitness. Highly winnable with the right content.</span>
            </div>
            <div className="ae-decision-row">
              <span className="ae-decision-if">"Female personal trainer for postpartum fitness near me"</span>
              <span className="ae-decision-arrow">Highly specific</span>
              <span className="ae-decision-then">AI recommends the first trainer whose digital presence matches all three specifics. A niche page wins this.</span>
            </div>
            <div className="ae-decision-row">
              <span className="ae-decision-if">"Online personal trainer for marathon training"</span>
              <span className="ae-decision-arrow">Virtual + niche</span>
              <span className="ae-decision-then">No geography limit. The best-documented marathon training specialist online wins regardless of location.</span>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mt-6">
            Most trainers try to be everything to everyone. In the AI era, that strategy becomes invisible. The trainers who own their niche on paper (in their digital presence) are the ones AI recommends for the highest-intent queries.
          </p>

          <div className="ae-callout ae-callout-success mt-6">
            <div className="ae-callout-title">Specialization Does Not Mean Turning Away Clients</div>
            <p>You can still train all kinds of clients. Specialization is about what AI can say about you, not a commitment to refuse other business. Having a clear specialty niche on your website dramatically increases AI recommendation frequency without limiting who walks through your door.</p>
          </div>
        </section>

        {/* Inline CTA 2 */}
        <div className="ae-cta-inline">
          <p>Wondering which specialty angle is most likely to get you AI citations in your market? <Link href="/blindspot">Get a Blind Spot Report</Link> or call <a href="tel:+12134442229">(213) 444-2229</a>.</p>
        </div>

        {/* Section 4 */}
        <section id="digital-presence" className="mt-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">Building the AI-Ready Digital Presence</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            For personal trainers, an AI-ready digital presence has specific components. Here is how it breaks down, from most to least impactful.
          </p>

          <table className="ae-comparison-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>What to Include</th>
                <th>AI Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">Website Specialty Pages</td>
                <td>One page per specialization: weight loss, athletic performance, seniors, online training. Each page answers: who is this for, what does training involve, what results can clients expect.</td>
                <td><span className="ae-tier-badge ae-tier-premium">Critical</span></td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Google Business Profile</td>
                <td>Complete profile with certifications listed, services detailed, photos of training, and consistent contact info. Updated regularly.</td>
                <td><span className="ae-tier-badge ae-tier-premium">Critical</span></td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Client Testimonials</td>
                <td>Outcome-specific testimonials on your website and review platforms. "Lost 30 lbs in 5 months" beats "great trainer" every time for AI signal.</td>
                <td><span className="ae-tier-badge" style={{background:'rgba(255,106,0,0.15)', color:'#F27D24', border:'1px solid rgba(255,106,0,0.3)', borderRadius:'4px', padding:'2px 8px', fontSize:'0.75rem', fontWeight:600}}>Very High</span></td>
              </tr>
              <tr>
                <td className="font-semibold text-white">FAQ Section</td>
                <td>Answers to what clients actually ask before hiring a trainer. Mirrors the questions clients type into AI assistants.</td>
                <td><span className="ae-tier-badge" style={{background:'rgba(255,106,0,0.15)', color:'#F27D24', border:'1px solid rgba(255,106,0,0.3)', borderRadius:'4px', padding:'2px 8px', fontSize:'0.75rem', fontWeight:600}}>Very High</span></td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Directory Listings</td>
                <td>Yelp, Mindbody, ClassPass, IDEA FitnessConnect, NASM trainer finder, local business directories. Consistent name/address/phone across all.</td>
                <td><span className="ae-tier-badge" style={{background:'rgba(255,106,0,0.15)', color:'#F27D24', border:'1px solid rgba(255,106,0,0.3)', borderRadius:'4px', padding:'2px 8px', fontSize:'0.75rem', fontWeight:600}}>High</span></td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Blog / Content</td>
                <td>Articles that answer fitness questions in your specialty. Builds topical authority and gives AI more vocabulary to use when describing you.</td>
                <td><span className="ae-tier-badge" style={{background:'rgba(100,100,100,0.15)', color:'#aaa', border:'1px solid rgba(10,10,10,0.1)', borderRadius:'4px', padding:'2px 8px', fontSize:'0.75rem', fontWeight:600}}>Medium</span></td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Social Profiles</td>
                <td>LinkedIn with specializations listed. Instagram with consistent bio. These are supplementary signals, not primary ones for AI.</td>
                <td><span className="ae-tier-badge" style={{background:'rgba(100,100,100,0.15)', color:'#aaa', border:'1px solid rgba(10,10,10,0.1)', borderRadius:'4px', padding:'2px 8px', fontSize:'0.75rem', fontWeight:600}}>Supplementary</span></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Section 5 */}
        <section id="platforms" className="mt-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">Which Platforms Matter Most for Personal Trainers</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Different AI platforms pull from different sources. Here is what that means for where to focus your personal trainer directory strategy.
          </p>

          <div className="ae-pros-cons">
            <div className="ae-pros-box">
              <h3>High-Priority Platforms</h3>
              <ul>
                <li>Google Business Profile (Google AI Overviews)</li>
                <li>Yelp (Perplexity, ChatGPT search)</li>
                <li>NASM / ACE trainer finder directories</li>
                <li>Mindbody / ClassPass (fitness-specific AI queries)</li>
                <li>LinkedIn (professional credibility for Claude/Copilot)</li>
                <li>Your own website (all AI platforms)</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <h3>Lower Priority (But Do Not Ignore)</h3>
              <ul>
                <li>Facebook Business Page (weak AI signal)</li>
                <li>Instagram alone (no text for AI to parse)</li>
                <li>Generic directories (local-only listings)</li>
                <li>TikTok profile (content platform, not discovery)</li>
                <li>Nextdoor (neighborhood-level only)</li>
                <li>Yellow Pages (diminishing returns)</li>
              </ul>
            </div>
          </div>

          <div className="ae-callout ae-callout-info mt-8">
            <div className="ae-callout-title">The Mindbody and ClassPass Angle</div>
            <p>Fitness-specific booking platforms like Mindbody and ClassPass are increasingly indexed by AI systems for fitness-related queries. If you offer sessions through these platforms, having a complete, specific profile with your certifications and training style can surface you in AI recommendations for queries about booking fitness sessions online.</p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="mistakes" className="mt-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">Common Mistakes Personal Trainers Make</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Most personal trainers are doing three or four things right and leaving a significant AI visibility gap on the table. Here are the patterns we see most often.
          </p>

          <div className="ae-timeline">
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">✗</div>
              <div>
                <div className="ae-timeline-title">Generic "I help clients reach their goals" website copy</div>
                <div className="ae-timeline-desc">This is meaningless to AI. It has no specificity AI can match against actual client queries. Trainers who replace this with specialization language see AI citation rates rise significantly.</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">✗</div>
              <div>
                <div className="ae-timeline-title">Certifications listed only on a resume, not on web properties</div>
                <div className="ae-timeline-desc">If your NASM or ACE certification is not on your website, your GBP, and your directory profiles, AI does not know about it. Credentials that are not findable might as well not exist from AI's perspective.</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">✗</div>
              <div>
                <div className="ae-timeline-title">All reviews on one platform, usually Google</div>
                <div className="ae-timeline-desc">Perplexity pulls heavily from Yelp. Other AI platforms look for multi-source corroboration. A trainer with 80 Google reviews and nothing elsewhere has a fragile AI presence compared to one with 30 reviews spread across Google, Yelp, and a fitness directory.</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">✗</div>
              <div>
                <div className="ae-timeline-title">No FAQ content on the website</div>
                <div className="ae-timeline-desc">Potential clients ask AI the same questions they used to ask in a first phone call: How often do we train? What happens in the first session? Do you offer nutrition guidance? Building FAQ content that answers these questions directly is one of the highest-ROI AI visibility investments a trainer can make.</div>
              </div>
            </div>
            <div className="ae-timeline-item">
              <div className="ae-timeline-step">✗</div>
              <div>
                <div className="ae-timeline-title">Inconsistent contact information across profiles</div>
                <div className="ae-timeline-desc">If your phone number or business name varies across your website, GBP, Yelp, and directories, AI sees a fragmented entity. This reduces confidence and reduces citation frequency. Consistency is the most basic and often most overlooked foundation of AI visibility.</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <div className="ae-cta-block">
          <h3>Find Out What AI Is Missing About Your Training Business</h3>
          <p>Our Blind Spot Report shows exactly how AI currently sees your personal training business and what gaps are preventing citations. Know your score before a competitor does.</p>
          <Link href="/blindspot" className="ae-cta-primary">
            Get Your Free Blind Spot Report
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

        {/* Key takeaways */}
        <div className="ae-cheat-sheet mt-12">
          <div className="ae-cheat-sheet-title">Personal Trainer AI Visibility Checklist</div>
          <table>
            <tbody>
              <tr>
                <td>Website</td>
                <td>Specialty pages for each niche you serve. FAQ section. Outcome-specific client testimonials.</td>
              </tr>
              <tr>
                <td>Credentials</td>
                <td>Certifications listed on website, GBP, and all directory profiles.</td>
              </tr>
              <tr>
                <td>Directories</td>
                <td>Google, Yelp, Mindbody/ClassPass, NASM finder, local directories. Consistent NAP across all.</td>
              </tr>
              <tr>
                <td>Reviews</td>
                <td>Spread across at least 2-3 platforms with specific outcome language in review text.</td>
              </tr>
              <tr>
                <td>Specialization</td>
                <td>At least one clear niche communicated prominently. AI recommends specialists over generalists.</td>
              </tr>
              <tr>
                <td>Content</td>
                <td>FAQ content that answers questions clients ask AI before hiring a trainer.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Related Articles */}
        <section className="mt-12">
          <h3 className="font-plus-jakarta text-xl font-bold text-white mb-4">Related Reading</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/blog/how-gyms-and-fitness-studios-get-found-on-ai" className="block p-4 rounded-xl border border-black/10 bg-white/5 hover:border-[#F27D24]/30 transition-colors">
              <p className="text-sm text-[#F27D24] mb-1">Industry Guides</p>
              <p className="text-white font-medium">How Gyms and Fitness Studios Get Found on AI</p>
            </Link>
            <Link href="/blog/does-schema-markup-help-ai-search" className="block p-4 rounded-xl border border-black/10 bg-white/5 hover:border-[#F27D24]/30 transition-colors">
              <p className="text-sm text-[#F27D24] mb-1">How-To Guides</p>
              <p className="text-white font-medium">Does Schema Markup Help You Show Up on AI Search?</p>
            </Link>
          </div>
        </section>

        {/* 3-Tier CTA Block */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#F27D24]/10 to-transparent border border-[#F27D24]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">Are Potential Clients Finding You on AI?</h3>
          <p className="text-gray-400 mb-6">Your Blind Spot Report shows how AI currently describes your training business, what is missing, and exactly what to build to start appearing in recommendations for the clients you most want to serve.</p>
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

        {/* Author Card */}
        <div className="not-prose">
            <div className="ae-author-card">
              <img
                src="/justin-borges.webp"
                alt="Justin Borges, Founder of The Answer Engine"
                style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div className="ae-author-name" style={{ fontWeight: 600 }}>Justin Borges</div>
                <div className="ae-author-role" style={{ fontWeight: 400 }}>Founder, The Answer Engine</div>
                <p style={{ marginTop: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Justin Borges founded The Answer Engine in 2025 after 13+ years in real estate, $200M+ in production, and discovering that AI search rankings now decide who gets cited as the answer. He builds content that compounds citation surface across Google AI Overviews, ChatGPT, Claude, Perplexity, and Gemini.</p>
              </div>
            </div>
          </div>

        {/* FAQ Section */}
        <section id="faq" className="mt-16">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I get ChatGPT to recommend me as a personal trainer?',
                a: 'Getting recommended by ChatGPT requires building a digital footprint AI can draw on: a professional website with clear specialization content, consistent directory presence across fitness platforms and local directories, client testimonials with specific results, and ideally some third-party coverage such as local press or fitness publications.'
              },
              {
                q: 'What queries do potential clients use to find personal trainers on AI?',
                a: 'Common queries include: "personal trainer near me for weight loss," "best personal trainer for beginners in [city]," "personal trainer who specializes in seniors," "online personal trainer for women," and "personal trainer for marathon prep near me." Specialization-specific queries are especially common.'
              },
              {
                q: 'Does having a website help personal trainers get found on AI?',
                a: 'Yes, significantly. Your website is the primary surface AI reads about you. A professional website with clear specialty pages, client testimonials, certification details, and FAQ content gives AI the vocabulary to confidently describe what you do and who you serve.'
              },
              {
                q: 'Should personal trainers be on Yelp for AI search visibility?',
                a: 'Yes. Perplexity AI, one of the fastest-growing AI search platforms, pulls heavily from Yelp. Having an active, complete Yelp profile with client reviews that mention your specializations and training style can contribute meaningfully to your AI visibility.'
              },
              {
                q: 'Does my NASM or ACE certification show up in AI search?',
                a: 'Only if you list it clearly on your website, profiles, and directory listings. AI learns about your certifications from the text it can access. If your credentials are buried or absent, AI cannot represent them accurately.'
              },
              {
                q: 'Can personal trainers who only train online get found on AI search?',
                a: 'Yes. Online personal trainers can appear in AI recommendations for queries like "online personal trainer for weight loss" or "virtual personal trainer for women over 40." The key is building a digital presence that clearly communicates your online delivery model and your specializations.'
              },
              {
                q: 'What is the biggest mistake personal trainers make with AI search visibility?',
                a: 'The most common mistake is having a generic online presence with no clear specialization. AI recommends trainers it can describe specifically. A trainer whose website says "I help clients reach their fitness goals" gives AI almost nothing to match against specific client queries.'
              },
            ].map((item, i) => (
              <div key={i} className="border border-black/10 rounded-xl p-6 bg-white/5">
                <h3 className="font-plus-jakarta font-semibold text-white mb-3">{item.q}</h3>
                <p className="text-gray-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="ae-final-cta mt-16">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">Your Next Client Is Asking AI Right Now</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">The question is whether AI answers with your name. Our Blind Spot Report shows you exactly what AI sees when someone searches for a trainer like you and what gaps are keeping your name out of that answer.</p>
          <Link href="/blindspot" className="ae-cta-primary text-lg px-8 py-4">
            Get Your Free Blind Spot Report
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <p className="text-gray-500 text-sm mt-4">Free analysis. No credit card. Know your gaps in minutes.</p>
        </div>

      </article>
    </>
  )
}
