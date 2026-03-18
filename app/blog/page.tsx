'use client';

import { useEffect, useRef, useState, RefObject } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogPosts from './blogPosts.json';
import BlogCardPattern from '../components/BlogCardPattern';

// Hook to respect reduced motion preferences
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
};

// Hook for scroll-triggered animations
// Content starts VISIBLE (true) so it always shows even before JS hydrates
const useScrollAnimation = (): { ref: RefObject<HTMLDivElement | null>; isVisible: boolean } => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  return { ref, isVisible };
};

export default function Blog() {
  const featuredAnim = useScrollAnimation();
  const allPostsAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Mouse glow handlers for hover-lift cards
  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  };
  const handleCardMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty('--mouse-x', '50%');
    e.currentTarget.style.setProperty('--mouse-y', '50%');
  };

  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(sortedPosts.map(p => p.category)))];

  // Featured posts (top 3 featured)
  const featuredPosts = sortedPosts.filter(post => post.featured).slice(0, 3);
  const filteredPosts = activeCategory === 'All'
    ? sortedPosts
    : sortedPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <style jsx global>{`
        :root {
          --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
          --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
        }

        *:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #0F1117, 0 0 0 4px rgba(255,255,255,0.4);
          border-radius: 8px;
          transition: box-shadow 200ms var(--ease-out-quart);
        }

        button:focus-visible, a:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #0F1117, 0 0 0 4px rgba(255,255,255,0.4);
        }

        .font-heading {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .hover-lift {
          transition: all 500ms var(--ease-out-expo);
        }

        .hover-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.12);
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          .hover-lift:hover {
            transform: none;
          }
        }
      `}</style>

      {/* Enhanced CollectionPage Schema */}
      <script
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
                "url": "https://theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": sortedPosts.map((post, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": post.customUrl ? `https://theanswerengine.ai${post.customUrl}` : `https://theanswerengine.ai/blog/${post.slug}`,
              "name": post.title
            }))
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Answer Engine",
            "url": "https://theanswerengine.ai",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png",
            "description": "We specialize in Answer Engine Optimization (AEO) for local service businesses, positioning companies to be cited by Google AI Overviews, ChatGPT, Claude, and Perplexity.",
            "sameAs": [
              "https://www.linkedin.com/company/theanswerengine",
              "https://instagram.com/theanswerengine"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "url": "https://theanswerengine.ai/#territory-check"
            }
          })
        }}
      />

      {/* WebSite Schema */}
      <script
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

      <main className="min-h-screen bg-[#0F1117] relative overflow-hidden">
        {/* Gradient overlay */}

        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 relative">
          {/* Back to Home */}
          <div className="flex justify-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <header className="text-center mb-16 sm:mb-20">
            <div className="flex justify-center mb-10">
              <Link href="/">
                <Image
                  src="/TheAnswerEngine_white logo only.png"
                  alt="The Answer Engine"
                  width={384}
                  height={128}
                  priority
                  className="h-20 sm:h-28 w-auto"
                />
              </Link>
            </div>

            <span className="text-sm font-medium tracking-widest uppercase text-white/30 mb-6 block">AEO Insights</span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight text-white font-heading">
              Answer Engine Optimization Blog
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Expert insights on getting your business cited by AI platforms like ChatGPT, Claude, Google AI Overviews, and Perplexity.
            </p>
          </header>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-16 sm:mb-20" />

          {/* Featured Posts Section */}
          {featuredPosts.length > 0 && (
            <>
              <div
                ref={featuredAnim.ref}
                className={`transition-all duration-700 ease-out ${
                  featuredAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="mb-10">
                  <span className="text-sm font-medium tracking-widest uppercase text-white/30 mb-4 block">Featured</span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2 font-heading">
                    Essential Reading
                  </h2>
                  <p className="text-gray-400 text-base sm:text-lg">Core insights for Answer Engine Optimization mastery</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16 sm:mb-20">
                  {featuredPosts.map((post, i) => (
                    <article
                      key={post.id}
                      className={`hover-lift bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.15] group transition-all duration-500 ${
                        featuredAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      }`}
                      style={{ transitionDelay: featuredAnim.isVisible ? `${100 + i * 100}ms` : '0ms' }}
                      onMouseMove={handleCardMouseMove}
                      onMouseLeave={handleCardMouseLeave}
                    >
                      <Link href={post.customUrl || `/blog/${post.slug}`} className="block">
                        <div className="relative h-44 sm:h-48 bg-gradient-to-br from-white/[0.02] to-white/[0.04] flex items-center justify-center overflow-hidden ring-1 ring-inset ring-white/[0.06]">
                          {post.image.endsWith('.svg') ? (
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={400}
                              height={200}
                              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500 grayscale brightness-75"
                            />
                          )}
                          {!post.image.endsWith('.svg') && (
                            <BlogCardPattern index={i} className="absolute inset-0 w-full h-full pointer-events-none z-[1]" />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-[#0F1117]/40 pointer-events-none z-[2]" />
                          <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/[0.1] text-white/60 backdrop-blur-sm border border-white/[0.1] text-xs font-semibold rounded-lg shadow-lg z-[3]">
                            Featured
                          </div>
                        </div>

                        <div className="p-5 sm:p-6">
                          <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-500 mb-3">
                            <span className="text-white/40">{post.category}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                            <span>•</span>
                            <time dateTime={post.publishDate}>
                              {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </time>
                          </div>

                          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-white/80 transition-colors leading-tight font-heading line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-gray-400 leading-relaxed mb-4 text-sm line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center gap-2 text-white/50 font-semibold text-sm">
                            Read Article
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

              {/* Separator */}
              <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-16 sm:mb-20" />
            </>
          )}

          {/* All Posts Section */}
          <div
            ref={allPostsAnim.ref}
            className={`transition-all duration-700 ease-out ${
              allPostsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2 font-heading">
                All Articles
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mb-6">Complete library of AEO insights and strategies</p>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeCategory === cat
                        ? 'bg-white text-[#0F1117]'
                        : 'bg-white/[0.05] text-gray-400 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    {cat}
                    {cat !== 'All' && (
                      <span className={`ml-1.5 text-xs ${activeCategory === cat ? 'text-white/70' : 'text-gray-600'}`}>
                        {sortedPosts.filter(p => p.category === cat).length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
              {filteredPosts.map((post, i) => (
                <article
                  key={post.id}
                  className={`hover-lift bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.15] group transition-all duration-500 ${
                    allPostsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: allPostsAnim.isVisible ? `${(i % 6) * 50}ms` : '0ms' }}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <Link href={post.customUrl || `/blog/${post.slug}`} className="block">
                    <div className="relative h-44 sm:h-48 bg-gradient-to-br from-white/[0.02] to-white/[0.04] flex items-center justify-center overflow-hidden ring-1 ring-inset ring-white/[0.06]">
                      {post.image.endsWith('.svg') ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500 grayscale brightness-75"
                        />
                      )}
                      {!post.image.endsWith('.svg') && (
                        <BlogCardPattern index={i + 10} className="absolute inset-0 w-full h-full pointer-events-none z-[1]" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-[#0F1117]/40 pointer-events-none z-[2]" />
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-500 mb-3">
                        <span className="text-white/40">{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <time dateTime={post.publishDate}>
                          {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </time>
                      </div>

                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-white/80 transition-colors leading-tight font-heading line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed mb-4 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-white/50 font-semibold text-sm">
                        Read Article
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Separator */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-16 sm:mb-20" />

          {/* CTA Section */}
          <div
            ref={ctaAnim.ref}
            className={`border border-white/[0.08] rounded-2xl p-8 sm:p-12 lg:p-16 text-center hover-lift transition-all duration-700 ease-out ${
              ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-white leading-tight font-heading">
              Ready to Get Cited by AI?
            </h2>

            <p className="text-lg sm:text-xl text-white/50 mb-8 max-w-2xl mx-auto leading-relaxed">
              Check if your territory is available and discover where you're losing to competitors in AI citations.
            </p>

            <Link
              href="/#territory-check"
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-white text-[#0F1117] rounded-xl font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 active:scale-[0.98]"
            >
              Check Your Territory
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
