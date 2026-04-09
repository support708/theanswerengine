import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 86400
export const dynamic = 'force-static'
export const dynamicParams = true

const title = 'How Chiropractors Get Found on AI Search'
const description =
  'Patients are asking ChatGPT and Perplexity to recommend chiropractors near them. Here is what AI looks for and why most chiropractic practices are invisible to this growing channel.'
const slug = 'how-chiropractors-get-found-on-ai-search'
const publishDate = '2026-04-09'

export const metadata: Metadata = {
  title: `${title} | The Answer Engine`,
  description,
  keywords: [
    'chiropractor AI search',
    'how chiropractors get found ChatGPT',
    'chiropractic practice AI visibility',
    'Perplexity chiropractor recommendation',
    'ChatGPT chiropractor near me',
    'chiropractic marketing AI',
    'answer engine optimization healthcare',
    'local chiropractor AI search',
    'chiropractic SEO 2026',
    'AI recommendations healthcare',
    'chiropractor online visibility',
    'how to get patients from AI search',
  ],
  authors: [{ name: 'The Answer Engine Team' }],
  openGraph: {
    title: `${title} | The Answer Engine`,
    description,
    type: 'article',
    publishedTime: publishDate,
    authors: ['The Answer Engine Team'],
    url: `https://theanswerengine.ai/blog/${slug}`,
    images: [
      {
        url: `https://theanswerengine.ai/blog/${slug}.webp`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | The Answer Engine`,
    description,
    images: [`https://theanswerengine.ai/blog/${slug}.webp`],
  },
  alternates: {
    canonical: `https://theanswerengine.ai/blog/${slug}`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `https://theanswerengine.ai/blog/${slug}#article`,
      headline: title,
      description,
      datePublished: publishDate + 'T00:00:00Z',
      dateModified: publishDate + 'T00:00:00Z',
      author: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Answer Engine',
        url: 'https://theanswerengine.ai',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://theanswerengine.ai/blog/${slug}`,
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `https://theanswerengine.ai/blog/${slug}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does ChatGPT recommend chiropractors for local searches?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. When patients ask ChatGPT Search or Perplexity for chiropractor recommendations, these platforms retrieve real-time web information including directory listings, Google Business Profile data, reviews, and website content. Chiropractors with strong, consistent signals across these sources appear in AI recommendations. Those without them are invisible, regardless of how long they have been in practice.',
          },
        },
        {
          '@type': 'Question',
          name: 'What directories should chiropractors list on for AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The highest-priority directories for chiropractic AI visibility are: Google Business Profile, Yelp, Healthgrades, Zocdoc (if you accept online bookings), WebMD Provider Directory, US News Health, and your state chiropractic board directory. The American Chiropractic Association provider directory also carries meaningful weight. The goal is consistent, accurate listings across sources that AI platforms trust as authoritative.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do patient reviews affect whether AI recommends my chiropractic practice?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Reviews are one of the most powerful signals for healthcare AI recommendations. AI platforms evaluate review volume, recency, average rating, and content quality. For chiropractic specifically, reviews that mention the conditions treated (back pain, sciatica, sports injuries, pregnancy care) are particularly valuable because they help AI match your practice to relevant patient queries. Google and Healthgrades reviews carry the most weight for chiropractic visibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does having specializations like sports chiropractic or pediatric care help AI visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, specializations are a significant advantage for AI recommendations. When a patient asks "chiropractor for sports injuries near me" or "chiropractor for pregnancy," AI platforms look for practices where that specialization is clearly documented across website content, schema markup, and reviews. Generalist chiropractors appear for broad queries but often miss the higher-value specialized searches. Documenting your specific techniques and patient populations in clear, crawlable content builds this specialization signal.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is getting found on AI search different from traditional SEO for chiropractors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional SEO for chiropractors focuses on ranking in Google for terms like "chiropractor near me" in the blue link results. AI search optimization means building the kind of documented, authoritative, consistent web presence that AI platforms use to name specific practices in their recommendations. The core signals overlap, but AI search weights structured data, review content quality, and cross-platform consistency more heavily than keyword density. A practice that does well in traditional SEO but lacks structured data and diverse review presence often underperforms in AI recommendations.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `https://theanswerengine.ai/blog/${slug}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://theanswerengine.ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://theanswerengine.ai/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: `https://theanswerengine.ai/blog/${slug}`,
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8 pb-2" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blog" className="hover:text-[#FF6A00] transition-colors">Blog</Link>
          </li>
          <li>/</li>
          <li className="text-gray-300 truncate max-w-[200px]">{title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="relative max-w-4xl mx-auto px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridchiro" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF6A00" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridchiro)" />
          </svg>
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="ae-section-label">Industry Guides</span>
            <span className="text-gray-500 text-sm">April 9, 2026</span>
            <span className="text-gray-500 text-sm">9 min read</span>
          </div>
          <h1 className="font-plus-jakarta text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            How Chiropractors Get Found{' '}
            <span className="text-[#FF6A00]">on AI Search</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Patients dealing with back pain, sciatica, or sports injuries are increasingly
            asking ChatGPT and Perplexity to recommend a chiropractor instead of opening
            Google. Most chiropractic practices are not showing up in those answers. Here
            is what separates the ones that do.
          </p>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="ae-stats-grid">
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">🔍</div>
            <div className="ae-stat-value">165x</div>
            <div className="ae-stat-label">Faster growth rate of AI search vs traditional search</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">⭐</div>
            <div className="ae-stat-value">92%</div>
            <div className="ae-stat-label">Of patients require minimum 4-star rating before booking</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📍</div>
            <div className="ae-stat-value">3-4</div>
            <div className="ae-stat-label">Practices named per AI local recommendation response</div>
          </div>
          <div className="ae-stat-card">
            <div className="ae-stat-emoji">📱</div>
            <div className="ae-stat-value">40%</div>
            <div className="ae-stat-label">Of users under 35 now start local searches with AI</div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-6 pb-20">

        {/* TOC */}
        <div className="ae-toc mb-12">
          <div className="ae-toc-title">In This Article</div>
          <ol>
            <li><a href="#how-patients-find-chiros">How Patients Are Finding Chiropractors Now</a></li>
            <li><a href="#what-ai-reads">What AI Evaluates for Chiropractic Recommendations</a></li>
            <li><a href="#reviews-for-chiro">Reviews: The Healthcare AI Signal</a></li>
            <li><a href="#specialization-advantage">The Specialization Advantage</a></li>
            <li><a href="#key-directories">Essential Directories for Chiropractic AI Visibility</a></li>
            <li><a href="#website-signals">Website Signals That Matter</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="how-patients-find-chiros" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            How Patients Are Finding Chiropractors Now
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The patient acquisition funnel for chiropractic has shifted significantly in the
            last two years. Word of mouth still matters. But the fastest-growing discovery
            channel is AI assistants. A patient wakes up with acute lower back pain, reaches
            for their phone, and types "chiropractor for lower back pain near me" into ChatGPT
            or Perplexity instead of Google.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            That patient receives a response naming two or three specific practices. They
            read a brief description of each and contact one of them. The entire discovery
            process happened without a single Google search result click. Practices not named
            in that AI response did not exist for that patient in that moment.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            This is not a hypothetical future state. It is happening now, and the rate is
            accelerating. Forty percent of users under thirty-five start local service
            searches with AI rather than traditional search engines. That percentage grows
            every month. For chiropractic practices that serve younger patients, sports
            injuries, or pregnancy care, this demographic shift is especially significant.
          </p>

          <div className="ae-callout ae-callout-info mb-6">
            <div className="ae-callout-title">The Healthcare AI Trust Premium</div>
            <p>
              AI platforms apply extra scrutiny to healthcare recommendations. When someone
              asks for a chiropractor, the platform is not just looking for a business that
              seems popular. It is looking for a licensed, credentialed professional with
              documented positive patient outcomes. This scrutiny benefits practices that
              have built authoritative, verified web presences, and filters out practices
              that have thin online documentation.
            </p>
          </div>

          <div className="ae-cta-inline mb-6">
            <p>
              Want to know if ChatGPT is recommending your practice right now?{' '}
              <Link href="/blindspot">
                Get your free AI Blind Spot Report in minutes.
              </Link>
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="what-ai-reads" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            What AI Evaluates for Chiropractic Recommendations
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            AI platforms evaluating a chiropractic practice look for convergent evidence
            from multiple independent sources. The more sources agree on who you are, what
            you do, where you are located, and that patients have positive experiences, the
            more confidently AI will recommend you.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            For healthcare practices specifically, licensure verification matters. If your
            state chiropractic board maintains a public directory of licensed practitioners
            and you appear there with consistent information, that is a strong independent
            trust signal. AI platforms that evaluate healthcare providers give significant
            weight to regulatory and professional body verification.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Beyond licensure, AI looks at your review profile across healthcare-specific
            platforms like Healthgrades and Zocdoc alongside general platforms like Google
            and Yelp. It reads your website to understand what conditions you treat, what
            techniques you use, and who your ideal patients are. And it checks whether your
            name, address, and phone are consistent everywhere you appear online.
          </p>

          <div className="ae-bar-group mb-8">
            <div className="ae-bar-item">
              <div className="ae-bar-label">Google Business Profile (reviews + info)</div>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '95%' }}></div>
              </div>
              <div className="ae-bar-value">Highest</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Healthgrades profile + reviews</div>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '85%' }}></div>
              </div>
              <div className="ae-bar-value">Very High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">State chiropractic board directory</div>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '80%' }}></div>
              </div>
              <div className="ae-bar-value">High (licensure trust)</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Yelp reviews</div>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '70%' }}></div>
              </div>
              <div className="ae-bar-value">High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">Website content (conditions + techniques)</div>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '65%' }}></div>
              </div>
              <div className="ae-bar-value">Medium-High</div>
            </div>
            <div className="ae-bar-item">
              <div className="ae-bar-label">American Chiropractic Association directory</div>
              <div className="ae-bar-track">
                <div className="ae-bar-fill" style={{ width: '55%' }}></div>
              </div>
              <div className="ae-bar-value">Medium</div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="reviews-for-chiro" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            Reviews: The Healthcare AI Signal
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For chiropractic practices, reviews function differently than for a restaurant
            or a home service company. Patients choosing a chiropractor are making a
            health decision. AI platforms weight healthcare reviews accordingly, looking
            for evidence that a practice delivers real clinical results for real patients.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The most valuable reviews for chiropractic AI visibility are the ones that
            mention specific conditions: "My sciatica went from debilitating to manageable
            after four sessions," or "Dr. Smith is the only chiropractor who has ever helped
            my chronic neck pain." These reviews tell AI two things: the practice treats
            specific conditions, and they produce specific outcomes. Both are data points AI
            uses to match practices to patient queries.
          </p>

          <div className="ae-callout ae-callout-success mb-6">
            <div className="ae-callout-title">The Condition-Specific Review Strategy</div>
            <p>
              After each successful treatment, ask patients to leave a review and gently
              suggest they mention what brought them in and how they feel now. You are not
              scripting reviews. You are helping patients write accurate accounts of their
              experience. The result is a review corpus that tells AI exactly what conditions
              your practice excels at treating, which dramatically improves your match
              probability for condition-specific queries.
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            Recency also matters. A practice with 80 reviews from 2022 and none from the
            last six months sends a signal that the practice may have changed. AI platforms
            weight recent reviews more heavily because they reflect current quality. Building
            review collection into your standard post-visit workflow is the best way to
            maintain a fresh, relevant review profile.
          </p>

          <div className="ae-cta-inline mb-6">
            <p>
              Want to see what your current review signals look like to AI platforms?{' '}
              <Link href="/blindspot">
                Your free Blind Spot Report includes a full review analysis.
              </Link>
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="specialization-advantage" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            The Specialization Advantage
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Generalist chiropractic practices face the most competitive AI landscape. Every
            "chiropractor near me" query puts them in direct competition with every other
            practice in the area. Specialized practices have a significant structural advantage:
            they appear for both general queries and specialized ones.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            A practice that documents its expertise in sports chiropractic, pregnancy care,
            pediatric chiropractic, or specific techniques like Active Release Technique or
            Graston will appear in those specific patient queries where generalist practices
            do not. "Chiropractor for marathon runners near me" or "pediatric chiropractor
            for colic" are searches where specialization is not just helpful, it is necessary.
          </p>

          <div className="ae-pros-cons mb-8">
            <div className="ae-pros-box">
              <h3>High-Value Specialization Queries</h3>
              <ul>
                <li>Sports chiropractic and athletic injury</li>
                <li>Pregnancy and prenatal care (Webster Technique)</li>
                <li>Pediatric chiropractic</li>
                <li>Auto accident and whiplash injury</li>
                <li>Sciatica and disc herniation</li>
                <li>Headache and migraine management</li>
              </ul>
            </div>
            <div className="ae-cons-box">
              <h3>What Blocks AI from Seeing Your Specializations</h3>
              <ul>
                <li>Generic "we treat all conditions" homepage copy</li>
                <li>No dedicated pages for specific conditions or techniques</li>
                <li>Missing schema markup for MedicalSpecialty</li>
                <li>Reviews that do not mention specific conditions</li>
                <li>No mention of certifications or advanced techniques</li>
                <li>Conditions list buried or in PDFs AI cannot parse</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            The practical solution is to create dedicated content for each specialization
            or condition type your practice treats. These do not need to be long pages.
            They need to be clear and specific: what you treat, how you treat it, what
            outcomes patients typically experience, and who is a good candidate. AI can
            extract that information and use it to match your practice to relevant queries.
          </p>
        </section>

        {/* Section 5 */}
        <section id="key-directories" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            Essential Directories for Chiropractic AI Visibility
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            AI platforms cross-reference multiple directories to build a composite picture
            of your practice. These are the directories that carry the most weight for
            chiropractic AI recommendations:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="ae-comparison-table">
              <thead>
                <tr>
                  <th>Directory</th>
                  <th>Why It Matters</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Business Profile</td>
                  <td>Foundation for all AI local recommendations</td>
                  <td><span className="ae-tier-badge ae-tier-premium">Critical</span></td>
                </tr>
                <tr>
                  <td>Healthgrades</td>
                  <td>Primary healthcare review platform, heavily AI-indexed</td>
                  <td><span className="ae-tier-badge ae-tier-premium">Critical</span></td>
                </tr>
                <tr>
                  <td>State Chiropractic Board</td>
                  <td>Licensure verification, high AI trust signal</td>
                  <td><span className="ae-tier-badge ae-tier-premium">Critical</span></td>
                </tr>
                <tr>
                  <td>Yelp</td>
                  <td>Second highest review platform for local AI recommendations</td>
                  <td><span className="ae-tier-badge" style={{backgroundColor:'#2563eb'}}>High</span></td>
                </tr>
                <tr>
                  <td>WebMD Provider Directory</td>
                  <td>Authoritative health platform, strong AI credibility</td>
                  <td><span className="ae-tier-badge" style={{backgroundColor:'#2563eb'}}>High</span></td>
                </tr>
                <tr>
                  <td>American Chiropractic Association</td>
                  <td>Professional body verification signal</td>
                  <td><span className="ae-tier-badge" style={{backgroundColor:'#6b7280'}}>Medium</span></td>
                </tr>
                <tr>
                  <td>Zocdoc</td>
                  <td>Patient booking platform, indexed by AI for local healthcare</td>
                  <td><span className="ae-tier-badge" style={{backgroundColor:'#6b7280'}}>Medium</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            NAP consistency across all of these directories is non-negotiable. If your
            practice name appears slightly differently across listings, your city or zip
            differs, or your phone number is outdated on any platform, AI reduces confidence
            in your listing. Auditing and correcting these inconsistencies is foundational
            work before any other optimization.
          </p>
        </section>

        {/* Section 6 */}
        <section id="website-signals" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            Website Signals That Matter for Chiropractic AI
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Your website is where AI learns the most detailed information about your practice.
            Directories tell AI you exist and where you are. Your website tells AI what you
            do, who you serve, and why you are qualified. For that information to register,
            it needs to be in clear, crawlable HTML, not PDFs, images, or JavaScript widgets.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The most impactful website changes for chiropractic AI visibility are schema
            markup additions. Adding MedicalBusiness or Physician schema with your
            specializations, license number, and accepted conditions tells AI platforms
            your key facts in structured, machine-readable format. Adding MedicalSpecialty
            properties lets AI match your practice to specific condition queries.
          </p>

          <div className="ae-cheat-sheet mb-8">
            <div className="ae-cheat-sheet-title">Chiropractic AI Visibility Checklist</div>
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Action Item</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Directories</td>
                  <td>Claim and complete Google Business Profile</td>
                  <td><span className="ae-tier-badge ae-tier-premium">Critical</span></td>
                </tr>
                <tr>
                  <td>Directories</td>
                  <td>Claim and complete Healthgrades profile</td>
                  <td><span className="ae-tier-badge ae-tier-premium">Critical</span></td>
                </tr>
                <tr>
                  <td>Reviews</td>
                  <td>Build post-visit Google review request workflow</td>
                  <td><span className="ae-tier-badge ae-tier-premium">Critical</span></td>
                </tr>
                <tr>
                  <td>Schema</td>
                  <td>Add MedicalBusiness schema with specialties and license</td>
                  <td><span className="ae-tier-badge" style={{backgroundColor:'#2563eb'}}>High</span></td>
                </tr>
                <tr>
                  <td>Content</td>
                  <td>Create dedicated pages for each condition you treat</td>
                  <td><span className="ae-tier-badge" style={{backgroundColor:'#2563eb'}}>High</span></td>
                </tr>
                <tr>
                  <td>Content</td>
                  <td>Add technique pages (Active Release, Graston, etc.)</td>
                  <td><span className="ae-tier-badge" style={{backgroundColor:'#6b7280'}}>Medium</span></td>
                </tr>
                <tr>
                  <td>NAP</td>
                  <td>Audit and fix inconsistencies across all directory listings</td>
                  <td><span className="ae-tier-badge ae-tier-premium">Critical</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            For a broader understanding of how healthcare practices build AI authority, our
            guide on{' '}
            <Link href="/blog/how-dentists-show-up-ai-search" className="text-[#FF6A00] hover:underline">
              how dentists get found on AI search
            </Link>{' '}
            covers many parallel signals that apply across all healthcare specialties.
          </p>

          <div className="ae-takeaway mb-8">
            <div className="ae-takeaway-title">The Bottom Line</div>
            <p>
              Chiropractic practices that appear in AI recommendations have not gotten there
              through luck or longevity. They have built the kind of documented, consistent,
              credentialed web presence that AI platforms trust for healthcare recommendations.
              That means verified directory listings, condition-specific review content,
              structured data that communicates your specializations, and NAP consistency
              across every platform where your practice appears. The practices building these
              signals now will have a durable competitive advantage as AI continues to take
              market share from traditional search.
            </p>
          </div>
        </section>

        {/* 3-tier CTA Block */}
        <div className="not-prose my-16 p-8 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-transparent border border-[#FF6A00]/20">
          <h3 className="font-plus-jakarta text-2xl font-bold text-white mb-3">
            Find Out If AI Is Sending Patients to Your Competitors
          </h3>
          <p className="text-gray-400 mb-6">
            Our free Blind Spot Report analyzes what ChatGPT, Perplexity, and Google AI
            Overviews currently say when someone searches for a chiropractor in your area.
            Find out where you stand before a competitor locks up the top recommendations.
          </p>
          <Link
            href="/blindspot"
            className="inline-flex items-center gap-2 bg-[#FF6A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors"
          >
            Get Your Free Blind Spot Report
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#FF6A00]/10">
            <a
              href="tel:+12134442229"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (213) 444-2229
            </a>
            <a
              href="mailto:support@theanswerengine.ai"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@theanswerengine.ai
            </a>
          </div>
        </div>

        {/* Author Card */}
        <div className="ae-author-card mb-12">
          <div className="ae-author-avatar">AE</div>
          <div>
            <div className="font-semibold text-white">The Answer Engine Team</div>
            <div className="text-gray-400 text-sm">
              AI search optimization specialists helping local businesses get found by ChatGPT,
              Perplexity, and Google AI. Based in Los Angeles.
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Does ChatGPT recommend chiropractors for local searches?',
                a: 'Yes. When patients ask ChatGPT Search or Perplexity for chiropractor recommendations, these platforms retrieve real-time web information including directory listings, Google Business Profile data, reviews, and website content. Chiropractors with strong, consistent signals across these sources appear in AI recommendations. Those without them are invisible, regardless of how long they have been in practice.',
              },
              {
                q: 'What directories should chiropractors list on for AI visibility?',
                a: 'The highest-priority directories for chiropractic AI visibility are: Google Business Profile, Yelp, Healthgrades, Zocdoc (if you accept online bookings), WebMD Provider Directory, and your state chiropractic board directory. The American Chiropractic Association provider directory also carries meaningful weight. The goal is consistent, accurate listings across sources that AI platforms treat as authoritative.',
              },
              {
                q: 'How do patient reviews affect whether AI recommends my chiropractic practice?',
                a: 'Reviews are one of the most powerful signals for healthcare AI recommendations. AI platforms evaluate review volume, recency, average rating, and content quality. For chiropractic specifically, reviews that mention the conditions treated (back pain, sciatica, sports injuries, pregnancy care) are particularly valuable because they help AI match your practice to relevant patient queries. Google and Healthgrades reviews carry the most weight.',
              },
              {
                q: 'Does having specializations like sports chiropractic or pediatric care help AI visibility?',
                a: 'Yes, specializations are a significant advantage for AI recommendations. When a patient asks "chiropractor for sports injuries near me," AI platforms look for practices where that specialization is clearly documented across website content, schema markup, and reviews. Generalist chiropractors appear for broad queries but often miss the higher-value specialized searches.',
              },
              {
                q: 'How is getting found on AI search different from traditional SEO for chiropractors?',
                a: 'Traditional SEO focuses on ranking in Google for terms like "chiropractor near me" in the blue link results. AI search optimization means building the kind of documented, authoritative, consistent web presence that AI platforms use to name specific practices in their recommendations. AI search weights structured data, review content quality, and cross-platform consistency more heavily than keyword density.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-white/10 rounded-xl p-6">
                <h3 className="font-plus-jakarta font-semibold text-white mb-3">{q}</h3>
                <p className="text-gray-400 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="ae-final-cta">
          <h2 className="font-plus-jakarta text-3xl font-bold text-white mb-4">
            Your Next Patient Is Asking an AI Right Now
          </h2>
          <p className="text-gray-400 mb-8">
            Every day that passes without AI visibility is a day your competitors get those
            recommendations instead. Find out exactly where you stand with a free Blind
            Spot Report.
          </p>
          <Link
            href="/blindspot"
            className="ae-cta-primary inline-flex items-center gap-2"
          >
            Get My Free Blind Spot Report
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </article>
    </>
  )
}
