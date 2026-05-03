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
          box-shadow: 0 0 0 2px #FAF8F2, 0 0 0 4px rgba(255,106,0,0.4);
          transition: box-shadow 200ms var(--ease-out-quart);
        }

        button:focus-visible, a:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #FAF8F2, 0 0 0 4px rgba(255,106,0,0.4);
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
            "url": "https://www.theanswerengine.ai/blog",
            "inLanguage": "en-US",
            "publisher": {
              "@type": "Organization",
              "name": "The Answer Engine",
              "url": "https://www.theanswerengine.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png",
                "width": 600,
                "height": 60
              }
            },
            "author": {
              "@type": "Organization",
              "name": "The Answer Engine Team",
              "url": "https://www.theanswerengine.ai"
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
              "url": post.customUrl ? `https://www.theanswerengine.ai${post.customUrl}` : `https://www.theanswerengine.ai/blog/${post.slug}`,
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
                "item": "https://www.theanswerengine.ai"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.theanswerengine.ai/blog"
              }
            ]
          })
        }}
      />


      <main className="min-h-screen bg-[#FAF8F2] relative overflow-hidden">
        {/* Scanline Overlay */}
        <div className="scanline-overlay fixed inset-0 z-[100] opacity-[0.03] pointer-events-none" />

        {/* Hero */}
        <section className="py-32 px-6 lg:px-24 grid-bg">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mb-4">AEO Blog // Free Resources</span>
            <h1 className="font-headline font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase text-[#0A0A0A] mb-6">
              AEO <span className="text-[#F27D24]">Insights & Guides</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              {sortedPosts.length}+ field-tested strategies for dominating AI search results.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-24 py-16 relative">

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
                  <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mb-3">Featured Articles</span>
                  <h2 className="font-headline font-black text-3xl tracking-tighter uppercase text-[#0A0A0A]">
                    ESSENTIAL READING
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16 sm:mb-20">
                  {featuredPosts.map((post, i) => (
                    <article
                      key={post.id}
                      className={`bg-[#FAF8F2] border border-white/10 overflow-hidden hover:bg-[#F4F0E8] group transition-all duration-500 ${
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
                          ) : post.image.endsWith('.webp') ? (
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={1200}
                              height={630}
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
                          {!post.image.endsWith('.svg') && !post.image.endsWith('.webp') && (
                            <BlogCardPattern index={i} className="absolute inset-0 w-full h-full pointer-events-none z-[1]" />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F2] via-transparent to-[#FAF8F2]/40 pointer-events-none z-[2]" />
                          <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#F27D24] text-black text-xs font-black uppercase tracking-tight z-[3]">
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

                          <h3 className="text-lg font-headline font-bold uppercase tracking-tight text-[#0A0A0A] mb-3 group-hover:text-[#F27D24] transition-colors leading-tight line-clamp-2">
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
              <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mb-3">All Articles // {filteredPosts.length} articles</span>
              <h2 className="font-headline font-black text-3xl tracking-tighter uppercase text-[#0A0A0A] mb-6">
                ALL ARTICLES
              </h2>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-sm font-bold uppercase tracking-tight transition-all duration-200 font-headline ${
                      activeCategory === cat
                        ? 'bg-[#F27D24] text-black'
                        : 'bg-transparent text-white/60 border border-white/10 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {cat}
                    {cat !== 'All' && (
                      <span className={`ml-1.5 text-xs ${activeCategory === cat ? 'text-black/60' : 'text-white/30'}`}>
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
                  className={`bg-[#FAF8F2] border border-white/10 overflow-hidden hover:bg-[#F4F0E8] group transition-all duration-500 ${
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
                      ) : post.image.endsWith('.webp') ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={1200}
                          height={630}
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
                      {!post.image.endsWith('.svg') && !post.image.endsWith('.webp') && (
                        <BlogCardPattern index={i + 10} className="absolute inset-0 w-full h-full pointer-events-none z-[1]" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F2] via-transparent to-[#FAF8F2]/40 pointer-events-none z-[2]" />
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

                      <h3 className="text-lg font-headline font-bold uppercase tracking-tight text-[#0A0A0A] mb-3 group-hover:text-[#F27D24] transition-colors leading-tight line-clamp-2">
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

          {/* CTA Section */}
          <div className="border border-white/10 border-l-4 border-l-[#F27D24] p-8 sm:p-12 lg:p-16">
            <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mb-4">Start Your AEO Journey</span>
            <h2 className="font-headline font-black text-3xl sm:text-4xl tracking-tighter uppercase text-[#0A0A0A] mb-4">
              READY TO GET CITED BY AI?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl leading-relaxed">
              Check if your territory is available and discover where you&apos;re losing to competitors in AI citations.
            </p>
            <Link
              href="/#territory-check"
              className="inline-flex items-center gap-3 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
            >
              CHECK YOUR TERRITORY
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
