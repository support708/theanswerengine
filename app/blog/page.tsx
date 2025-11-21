import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import blogPosts from './blogPosts.json';

// Static Metadata
export const metadata: Metadata = {
  title: 'Answer Engine Optimization Blog - Expert AEO Insights & Strategies | The Answer Engine',
  description: 'Expert insights on Answer Engine Optimization, AI citations, and how to get your business recommended by ChatGPT, Claude, Google AI Overviews, and Perplexity.',
  
  openGraph: {
    title: 'Answer Engine Optimization Blog - Expert AEO Insights',
    description: 'Learn how to get AI platforms to cite your business instead of competitors.',
    type: 'website',
    url: 'https://theanswerengine.ai/blog',
    images: [
      {
        url: 'https://theanswerengine.ai/images/blog-featured.png',
        width: 1200,
        height: 630,
        alt: 'Answer Engine Optimization Blog',
      }
    ],
    siteName: 'The Answer Engine',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Answer Engine Optimization Blog',
    description: 'Expert insights on AEO and AI citations.',
    images: ['https://theanswerengine.ai/images/blog-featured.png'],
    creator: '@theanswerengine',
  },
  
  alternates: {
    canonical: 'https://theanswerengine.ai/blog',
  },
  
  keywords: [
    'answer engine optimization',
    'AEO blog',
    'AI citations',
    'ChatGPT optimization',
    'Google AI Overviews',
    'AI search optimization',
  ],
};

export default function Blog() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  // Featured posts (top 3 featured)
  const featuredPosts = sortedPosts.filter(post => post.featured).slice(0, 3);
  const allPosts = sortedPosts;

  return (
    <>
      {/* Enhanced CollectionPage Schema */}
      <Script
        id="collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Answer Engine Optimization Blog - AEO Insights & Strategies",
            "description": "Expert insights on Answer Engine Optimization, AI citations, and how to get your business recommended by ChatGPT, Claude, and Google AI Overviews.",
            "url": "https://theanswerengine.ai/blog",
            "inLanguage": "en-US",
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "url": "https://theanswerengine.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://theanswerengine.ai/TheAnswerEngine_Color.png",
                "width": 600,
                "height": 60
              }
            },
            "author": {
              "@type": "Organization",
              "name": "The Answer Engine Team",
              "url": "https://theanswerengine.ai"
            }
          })
        }}
      />

      {/* ItemList Schema for Blog Posts */}
      <Script
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": sortedPosts.map((post, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://theanswerengine.ai/blog/${post.slug}`,
              "name": post.title
            }))
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://theanswerengine.ai"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://theanswerengine.ai/blog"
              }
            ]
          })
        }}
      />

      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Answer Engine",
            "url": "https://theanswerengine.ai",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_Color.png",
            "description": "We specialize in Answer Engine Optimization (AEO) for local service businesses, positioning companies to be cited by Google AI Overviews, ChatGPT, Claude, and Perplexity.",
            "sameAs": [
              "https://www.linkedin.com/company/theanswerengine",
              "https://twitter.com/theanswerengine"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "url": "https://theanswerengine.ai/#contact"
            }
          })
        }}
      />

      {/* WebSite Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "The Answer Engine",
            "url": "https://theanswerengine.ai",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://theanswerengine.ai/blog?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      <main className="min-h-screen bg-[#0A0A0F] relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 via-transparent to-orange-950/5 pointer-events-none" />
        
        {/* Corner pixels */}
        <div className="absolute top-0 left-0 flex gap-2 p-4">
          <div className="w-3 h-3 bg-orange-500 rounded-sm opacity-40" />
          <div className="w-3 h-3 bg-purple-500 rounded-sm opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-32 relative">
          {/* Header */}
          <header className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-[#f27d24]/10 border border-[#f27d24]/20">
              <div className="w-2 h-2 rounded-full bg-[#f27d24]" />
              <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">AEO Insights</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-8 leading-tight text-white">
              Answer Engine Optimization Blog
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Expert insights on getting your business cited by AI platforms like ChatGPT, Claude, Google AI Overviews, and Perplexity.
            </p>
          </header>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

          {/* Featured Posts Section */}
          {featuredPosts.length > 0 && (
            <>
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-4 bg-[#362478]/10 border border-[#362478]/20">
                  <div className="w-2 h-2 rounded-full bg-[#362478]" />
                  <span className="text-sm font-semibold tracking-wider uppercase text-[#a89bd9]">Featured</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
                  Essential Reading
                </h2>
                <p className="text-gray-400 text-lg">Core insights for Answer Engine Optimization mastery</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-24">
                {featuredPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-white/[0.02] backdrop-blur-xl border border-[#f27d24]/20 rounded-2xl overflow-hidden hover:border-[#f27d24]/40 transition-all hover:-translate-y-1 group"
                  >
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="relative h-48 bg-gradient-to-br from-[#362478]/20 to-[#f27d24]/20 flex items-center justify-center overflow-hidden">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#f27d24] text-white text-xs font-semibold rounded-lg shadow-lg">
                          Featured
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                          <span className="text-[#f27d24]">{post.category}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f27d24] transition-colors leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-2 text-[#f27d24] font-semibold text-sm">
                          Read Article
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Separator */}
              <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />
            </>
          )}

          {/* All Posts Section */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
              All Articles
            </h2>
            <p className="text-gray-400 text-lg">Complete library of AEO insights and strategies</p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {allPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl overflow-hidden hover:border-white/[0.15] transition-all hover:-translate-y-1 group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 bg-gradient-to-br from-[#362478]/20 to-[#f27d24]/20 flex items-center justify-center overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="text-[#f27d24]">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f27d24] transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-[#f27d24] font-semibold text-sm">
                      Read Article
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#f27d24]/10 to-[#d66d1f]/10 border-2 border-[#f27d24]/30 rounded-3xl p-12 sm:p-16 text-center hover:-translate-y-1 transition-all">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-white leading-tight">
              Ready to Get Cited by AI?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule your free 30-minute AEO strategy call and discover where you're losing to competitors in AI citations.
            </p>
            
            <a 
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white transition-all shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] hover:-translate-y-0.5 bg-[#f27d24] hover:bg-[#d66d1f]"
            >
              Schedule Free Strategy Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}