'use client';

import { useEffect, useRef, useState, RefObject } from 'react';
import Image from 'next/image';
import FocusTrap from 'focus-trap-react';
import CitationProof from './components/CitationProof';

// ─── Accessibility: respect reduced-motion preference ───────────────────────
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return prefersReducedMotion;
};

// ─── Scroll-triggered animation hook ────────────────────────────────────────
const useScrollAnimation = (): { ref: RefObject<HTMLDivElement | null>; isVisible: boolean } => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) { setIsVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1, rootMargin: '100px 0px 0px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return { ref, isVisible };
};

// ─── Territory data ──────────────────────────────────────────────────────────
const territories = [
  { city: 'Los Angeles, CA', category: 'Real Estate', status: 'claimed' as const },
  { city: 'Phoenix, AZ', category: 'HVAC', status: 'claimed' as const },
  { city: 'Denver, CO', category: 'Plumbing', status: 'available' as const },
  { city: 'Austin, TX', category: 'Real Estate', status: 'available' as const },
  { city: 'San Diego, CA', category: 'Attorney', status: 'available' as const },
  { city: 'Seattle, WA', category: 'Dentist', status: 'claimed' as const },
  { city: 'Nashville, TN', category: 'Electrical', status: 'available' as const },
  { city: 'Miami, FL', category: 'Real Estate', status: 'available' as const },
  { city: 'Portland, OR', category: 'HVAC', status: 'available' as const },
];

// ─── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What exactly is Answer Engine Optimization?',
    a: 'AEO is the practice of structuring your content so AI platforms like ChatGPT, Claude, Perplexity, and Google AI Overviews cite your business as the trusted answer. It\'s not about ranking on Google anymore. It\'s about being the business AI recommends when someone asks a buying question.'
  },
  {
    q: 'How is this different from regular SEO?',
    a: 'Traditional SEO gets you on page 1. AEO gets you cited as THE answer. When someone asks AI "who\'s the best plumber in Phoenix," we make sure AI says your name — not a list of 10 competitors. The search paradigm has shifted. We operate at the new frontier.'
  },
  {
    q: 'How long until I see results?',
    a: 'Most clients see their first AI citations within 60-90 days. That\'s why we offer a 90-day guarantee. If you\'re not getting cited, we keep working for free until you are. Zero refunds issued to date — when you follow the protocol, AI cites you.'
  },
  {
    q: 'What if my competitor already signed up?',
    a: 'We only work with one business per category per geographic area. One operator per territory. If your territory is claimed, we\'ll tell you upfront — no pitch, no pressure. Check your territory now before a competitor does.'
  },
  {
    q: "What's the investment?",
    a: 'Our AEO implementation is delivered over 6 weeks and includes your competitive audit, AI-optimized content, schema implementation, and citation monitoring. Book a strategy call at (213) 444-2229 to discuss pricing for your market and category.'
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  // Scroll animation refs
  const stepsAnim = useScrollAnimation();
  const interstitialAnim = useScrollAnimation();
  const territoryAnim = useScrollAnimation();
  const guaranteeAnim = useScrollAnimation();
  const faqAnim = useScrollAnimation();
  const citationsAnim = useScrollAnimation();

  // Mobile CTA scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const territorySection = document.getElementById('territory-check');
      if (territorySection) {
        const rect = territorySection.getBoundingClientRect();
        setShowMobileCta(window.scrollY > 400 && rect.top > window.innerHeight);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lightbox escape key + body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveImage(null); };
    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  // Formspree submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/xqagkqwl', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });
      if (response.ok) { setFormStatus('success'); form.reset(); }
      else setFormStatus('error');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <>
      {/* ── Schema: ProfessionalService ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://theanswerengine.ai/#organization",
        "name": "The Answer Engine",
        "description": "Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like Google AI Overviews, ChatGPT, Claude, and Perplexity. 90-day citation guarantee. Exclusive territory protection.",
        "url": "https://theanswerengine.ai",
        "telephone": "+1-213-444-2229",
        "email": "support@theanswerengine.ai",
        "priceRange": "$$",
        "areaServed": { "@type": "Country", "name": "United States" },
        "address": { "@type": "PostalAddress", "addressLocality": "Pasadena", "addressRegion": "CA", "addressCountry": "US" },
        "founder": { "@type": "Person", "name": "Justin Borges", "jobTitle": "Founder & AEO Strategist" },
        "foundingDate": "2025",
        "contactPoint": { "@type": "ContactPoint", "contactType": "Sales", "telephone": "+1-213-444-2229", "email": "support@theanswerengine.ai", "availableLanguage": "English", "areaServed": "US" },
        "sameAs": ["https://www.linkedin.com/company/theanswerengine", "https://instagram.com/theanswerengine"],
        "knowsAbout": ["Answer Engine Optimization", "AI Citations", "ChatGPT Optimization", "Google AI Overviews", "Perplexity SEO", "Claude AI Optimization", "Local Business Marketing"],
      })}} />

      {/* ── Schema: FAQPage ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#faq-section"] },
      })}} />

      {/* ── Schema: HowTo ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Get Cited by AI Platforms Like ChatGPT and Google AI",
        "description": "The Answer Engine's 3-step process to make AI platforms trust and cite your business as the authoritative answer.",
        "totalTime": "P90D",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Neural Audit", "text": "Deep-layer analysis of semantic relevance. We test 50+ queries across ChatGPT, Google AI, Claude & Perplexity to map exactly where you're losing.", "url": "https://theanswerengine.ai/#how-it-works" },
          { "@type": "HowToStep", "position": 2, "name": "Velocity Build", "text": "6 research-backed articles in your voice, structured specifically for AI citation with proper schema markup.", "url": "https://theanswerengine.ai/#how-it-works" },
          { "@type": "HowToStep", "position": 3, "name": "Kinetic Monitor", "text": "Real-time citation tracking. Watch AI engines start recommending you to prospects asking buying questions.", "url": "https://theanswerengine.ai/#how-it-works" },
        ],
      })}} />

      {/* ── Schema: WebPage with Speakable ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://theanswerengine.ai/",
        "name": "The Answer Engine - Answer Engine Optimization for Local Businesses",
        "description": "Get your business cited by ChatGPT, Claude, Google AI Overviews, and Perplexity. Answer Engine Optimization with 90-day citation guarantee and exclusive territory protection.",
        "url": "https://theanswerengine.ai",
        "isPartOf": { "@type": "WebSite", "name": "The Answer Engine", "url": "https://theanswerengine.ai" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".hero-description", "#faq-section"] },
        "mainEntity": { "@type": "Service", "name": "Answer Engine Optimization", "provider": { "@id": "https://theanswerengine.ai/#organization" } },
      })}} />

      {/* ── Global scanline overlay ── */}
      <div className="scanline-overlay fixed inset-0 z-[100] opacity-[0.03] pointer-events-none" aria-hidden="true" />

      {/* ════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-24 grid-bg pt-16"
        aria-label="Hero"
      >
        {/* Ambient radial glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.04),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left column — headline + CTAs */}
          <div className="lg:col-span-8">
            <div className="inline-block bg-[#FF6A00] text-black px-3 py-1 font-mono text-[10px] mb-6 tracking-widest uppercase font-bold">
              PROTOCOL_INITIATED // SYSTEM_READY
            </div>

            <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter uppercase mb-6 text-[#e5e2e1]">
              THE END OF{' '}
              <span className="text-[#FF6A00]">TRADITIONAL</span> SEO
            </h1>

            <p className="hero-description text-white/50 text-lg leading-relaxed mb-10 max-w-xl">
              We optimize local businesses to be cited by ChatGPT, Google AI, Claude, and Perplexity.
              One business per category, per city. 90-day citation guarantee.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#territory-check"
                className="bg-[#FF6A00] text-black font-black px-10 py-5 text-xl tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase inline-flex items-center gap-3"
              >
                DEPLOY PROTOCOL
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#citations"
                className="border-2 border-white/20 text-[#e5e2e1] font-bold px-10 py-5 text-xl tracking-tighter hover:bg-white/5 hover:border-white/30 transition-all font-headline uppercase"
              >
                VIEW METRICS
              </a>
            </div>

            {/* Inline metrics strip */}
            <div className="flex items-center gap-8 mt-10 border-t border-white/10 pt-8">
              <div>
                <div className="font-headline font-black text-2xl text-[#e5e2e1]">8,400+</div>
                <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase mt-1">Monthly Clicks</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="font-headline font-black text-2xl text-[#e5e2e1]">100%</div>
                <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase mt-1">AI Citation Rate</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="font-headline font-black text-2xl text-[#FF6A00]">90-Day</div>
                <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase mt-1">Guarantee</div>
              </div>
            </div>
          </div>

          {/* Right column — Authority Velocity card */}
          <div className="lg:col-span-4">
            <div
              className="bg-[#2a2a2a] p-8 border-l-4 border-[#FF6A00] relative hover-lift"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="absolute top-4 right-4 font-mono text-[10px] text-white/20 tracking-widest">SEC_01 // LIVE_STREAM</div>
              <h3 className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-4">Authority Velocity</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-7xl font-headline font-black text-[#FF6A00] leading-none">98%</span>
                <span className="text-white/60 font-headline font-bold uppercase text-sm">Authority</span>
              </div>
              <div className="h-1.5 bg-[#0e0e0e] w-full mb-8 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#FF6A00] to-[#ffb694] w-[98%]" />
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">Index_rate</div>
                  <div className="text-xl font-headline font-bold text-[#e5e2e1]">+244%</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">Latency</div>
                  <div className="text-xl font-headline font-bold text-[#e5e2e1]">14ms</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <div className="w-px h-12 bg-gradient-to-b from-[#FF6A00] to-transparent" />
          <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Scroll to Access</span>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          THREE STEPS
      ════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-32 px-6 lg:px-24 bg-[#1c1b1b] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-24 gap-8">
            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase leading-none max-w-xl text-[#e5e2e1]">
              THE THREE STEPS TO{' '}
              <span className="text-[#FF6A00]">DOMINANCE</span>
            </h2>
            <div className="hidden md:block w-48 h-px bg-white/10 mb-4" aria-hidden="true" />
          </div>

          <div
            ref={stepsAnim.ref}
            className={`grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 transition-all duration-700 ease-out ${
              stepsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              {
                num: '01',
                icon: (
                  <svg className="w-8 h-8 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.170.659 1.591L19.8 15m-6.75-11.896c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.607L5 14.5m14.8.5-2.46 2.46A8.25 8.25 0 0112 19.5a8.25 8.25 0 01-5.84-2.54L5 14.5" />
                  </svg>
                ),
                title: 'Neural Audit',
                desc: 'Deep-layer analysis of semantic relevance across global intelligence clusters. We test 50+ queries to map exactly where you\'re losing to competitors.',
                status: 'Status: analyzing_data_nodes',
                delay: 0,
              },
              {
                num: '02',
                icon: (
                  <svg className="w-8 h-8 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: 'Velocity Build',
                desc: 'Massive-scale injection of high-authority knowledge nodes. 6 research-backed articles structured for AI citation with proper schema markup.',
                status: 'Status: protocol_deployed',
                delay: 150,
              },
              {
                num: '03',
                icon: (
                  <svg className="w-8 h-8 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
                title: 'Kinetic Monitor',
                desc: 'Real-time defensive positioning and adaptive scaling. Track your citation rate. Watch AI start recommending you to prospects with buying intent.',
                status: 'Status: active_surveillance',
                delay: 300,
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className={`p-10 ${i < 2 ? 'border-b md:border-b-0 md:border-r' : ''} border-white/10 bg-[#131313] hover:bg-[#2a2a2a] transition-colors group`}
                style={{ transitionDelay: stepsAnim.isVisible ? `${step.delay}ms` : '0ms' }}
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="text-5xl font-headline font-black text-white/10 group-hover:text-[#FF6A00] transition-colors">
                    {step.num}
                  </span>
                  {step.icon}
                </div>
                <h4 className="font-headline font-bold text-2xl uppercase mb-4 text-[#e5e2e1]">{step.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-8">{step.desc}</p>
                <div className="font-mono text-[10px] text-[#FF6A00] tracking-widest uppercase">{step.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          INTERSTITIAL — PRECISION. POWER. PROTOCOL.
      ════════════════════════════════════════════════════════ */}
      <section
        ref={interstitialAnim.ref}
        className={`relative h-[480px] flex items-center justify-center overflow-hidden transition-all duration-700 ease-out ${
          interstitialAnim.isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        {/* Dark gradient background with grid */}
        <div className="absolute inset-0 bg-[#0e0e0e] grid-bg" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60" />

        <div className="relative z-10 text-center px-6">
          <div className="font-headline font-black text-5xl md:text-8xl lg:text-9xl tracking-[0.15em] uppercase leading-none">
            <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center">
              <span className="text-[#e5e2e1]">PRECISION.</span>
              <span className="text-[#FF6A00]">POWER.</span>
              <span className="text-[#e5e2e1]">PROTOCOL.</span>
            </div>
          </div>
          <div className="mt-10 flex justify-center gap-2">
            <div className="w-2 h-2 bg-[#FF6A00]" />
            <div className="w-2 h-2 bg-[#FF6A00]/40" />
            <div className="w-2 h-2 bg-[#FF6A00]/20" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          AI CITATION PROOF
      ════════════════════════════════════════════════════════ */}
      <section id="citations" className="py-32 px-6 lg:px-24 bg-[#1c1b1b]">
        <div
          ref={citationsAnim.ref}
          className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
            citationsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-16">
            <span className="font-mono text-[10px] text-[#FF6A00] tracking-widest uppercase block mb-4">FIELD_INTEL // VERIFIED_RESULTS</span>
            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase leading-none text-[#e5e2e1]">
              70,000 AGENTS COMPETING.<br />
              <span className="text-[#FF6A00]">ONE GETS CITED.</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mt-6 max-w-xl">
              Justin Borges went from invisible to being the only agent AI platforms cite for rent control, probate, and ADU questions across LA County.
            </p>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-3 gap-0 border border-white/10 mb-16">
            {[
              { value: '1,000+', label: 'Queries Ranked', status: 'target_acquired' },
              { value: '70,000+', label: 'Competing Agents', status: 'all_monitored' },
              { value: '#1', label: 'AI Citation Position', status: 'dominance_achieved' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-8 ${i < 2 ? 'border-r' : ''} border-white/10 bg-[#131313]`}
              >
                <div className="font-headline font-black text-4xl md:text-5xl text-[#e5e2e1] mb-2">{stat.value}</div>
                <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{stat.label}</div>
                <div className="font-mono text-[10px] text-[#FF6A00] uppercase tracking-widest mt-2">{stat.status}</div>
              </div>
            ))}
          </div>

          {/* Citation screenshot grid */}
          <div className="grid md:grid-cols-2 gap-0 border border-white/10 mb-12">
            {[
              {
                platform: 'ChatGPT',
                query: 'Which realtor can help with my rent controlled property?',
                image: '/citations/chat-rent-control.png',
                alt: 'ChatGPT recommending Justin Borges for rent controlled properties in Los Angeles',
              },
              {
                platform: 'Google AI Overview',
                query: 'Who is the best agent for RSO properties in LA?',
                image: '/citations/google-rso.png',
                alt: 'Google AI Overview citing Justin Borges for RSO rent stabilized properties',
              },
              {
                platform: 'ChatGPT',
                query: 'Who is the best agent for probate sales in LA?',
                image: '/citations/chat-probate.png',
                alt: 'ChatGPT recommending Justin Borges for probate real estate sales',
              },
              {
                platform: 'Google AI Overview',
                query: 'Realtor specializing in inherited property Los Angeles',
                image: '/citations/google-inherited.png',
                alt: 'Google AI Overview citing Justin Borges for inherited property sales',
              },
            ].map((citation, i) => (
              <div
                key={i}
                className={`bg-[#131313] group ${i % 2 === 0 ? 'border-r border-white/10' : ''} ${i < 2 ? 'border-b border-white/10' : ''}`}
              >
                <button
                  onClick={() => setActiveImage(citation.image)}
                  className="w-full cursor-zoom-in"
                  aria-label={`Enlarge screenshot: ${citation.alt}`}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={citation.image}
                      alt={citation.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover aspect-[3/2] group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#131313] to-transparent" />
                  </div>
                </button>
                <div className="p-5 border-t border-white/10">
                  <div className="font-mono text-[10px] text-[#FF6A00] uppercase tracking-widest mb-1">{citation.platform}</div>
                  <p className="text-white/40 text-sm italic">&ldquo;{citation.query}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive CitationProof demo */}
          <div className="border border-white/10 bg-[#131313] p-8">
            <div className="font-mono text-[10px] text-[#FF6A00] uppercase tracking-widest mb-6">INTERACTIVE_DEMO // LIVE_SIMULATION</div>
            <CitationProof isVisible={citationsAnim.isVisible} />
          </div>

          {/* Testimonial */}
          <div className="mt-12 border border-white/10 border-l-4 border-l-[#FF6A00] bg-[#2a2a2a] p-10">
            <blockquote className="text-2xl sm:text-3xl font-light text-white/80 leading-[1.35] mb-8 font-headline tracking-tight">
              &ldquo;He understands how AI actually decides who to recommend. That&apos;s a completely different skill set, and it&apos;s working.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FF6A00] flex items-center justify-center text-black text-sm font-black font-headline">JB</div>
              <div>
                <p className="text-sm font-bold text-[#e5e2e1] font-headline uppercase tracking-tight">Justin Borges</p>
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-0.5">Borges Real Estate Team // Pasadena, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TERRITORY MAP
      ════════════════════════════════════════════════════════ */}
      <section id="territory-map" className="py-32 px-6 lg:px-24 bg-[#131313]">
        <div
          ref={territoryAnim.ref}
          className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
            territoryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-16">
            <span className="font-mono text-[10px] text-[#FF6A00] tracking-widest uppercase block mb-4">TERRITORY_STATUS // LIVE_MAP</span>
            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase leading-none text-[#e5e2e1]">
              EXCLUSIVE <span className="text-[#FF6A00]">TERRITORY</span> GRID
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mt-4 max-w-xl">
              One operator per category, per city. Once claimed, no competitor gets access. Check your territory before they do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {territories.map((t, i) => {
              const isClaimed = t.status === 'claimed';
              const isLast = i === territories.length - 1;
              const isLastRow3 = i >= territories.length - (territories.length % 3 || 3);
              const isRightEdge = (i + 1) % 3 === 0;
              return (
                <div
                  key={i}
                  className={`p-8 bg-[#131313] hover:bg-[#1c1b1b] transition-colors relative group
                    ${!isRightEdge ? 'border-r border-white/10' : ''}
                    ${!isLastRow3 ? 'border-b border-white/10' : ''}
                    ${!isClaimed ? 'animate-orange-pulse' : ''}
                  `}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="font-headline font-bold text-lg uppercase text-[#e5e2e1] mb-1">{t.city}</div>
                      <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{t.category}</div>
                    </div>
                    {isClaimed ? (
                      <span className="font-mono text-[10px] bg-white/10 text-white/50 px-2 py-1 uppercase tracking-widest flex-shrink-0">
                        LOCKED
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] bg-[#FF6A00] text-black font-bold px-2 py-1 uppercase tracking-widest flex-shrink-0">
                        OPEN
                      </span>
                    )}
                  </div>
                  <div className={`h-px w-full ${isClaimed ? 'bg-white/10' : 'bg-[#FF6A00]/40'}`} />
                  <div className={`font-mono text-[10px] tracking-widest uppercase mt-4 ${isClaimed ? 'text-white/30' : 'text-[#FF6A00]'}`}>
                    {isClaimed ? 'operator_assigned' : 'territory_available'}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#territory-check"
              className="inline-flex items-center gap-3 bg-[#FF6A00] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
            >
              CHECK YOUR TERRITORY
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          90-DAY GUARANTEE
      ════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 lg:px-24 bg-[#1c1b1b]">
        <div
          ref={guaranteeAnim.ref}
          className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
            guaranteeAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className="border border-[#FF6A00]/40 border-l-4 border-l-[#FF6A00] bg-[#131313] p-12 sm:p-16 relative overflow-hidden hover-lift"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
          >
            {/* Glow accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,rgba(255,106,0,0.08),transparent_70%)] pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <span className="font-mono text-[10px] text-[#FF6A00] tracking-widest uppercase block mb-6">GUARANTEE_PROTOCOL // ZERO_RISK</span>

              <h2 className="font-headline font-black text-5xl md:text-7xl tracking-tighter uppercase leading-none text-[#e5e2e1] mb-8">
                90-DAY CITATION<br />
                <span className="text-[#FF6A00]">GUARANTEE</span>
              </h2>

              <p className="text-white/50 text-sm leading-relaxed max-w-lg mb-10">
                If you don&apos;t get cited by at least 2 AI engines within 90 days, we keep working for free until you do — or we issue a full refund. Your choice. Zero refunds issued to date.
              </p>

              <div className="space-y-4 mb-10 max-w-md">
                {[
                  'AI citations within 90 days, guaranteed',
                  'Full refund option — your choice, not ours',
                  'Exclusive territory — zero competitors served',
                  'Continued work at no charge if target missed',
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 transition-all duration-500 ease-out ${
                      guaranteeAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: guaranteeAnim.isVisible ? `${200 + i * 100}ms` : '0ms' }}
                  >
                    <span className="text-[#FF6A00] font-bold text-sm flex-shrink-0">&#10003;</span>
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
                RISK_LEVEL: ZERO // OPERATOR_PROTECTION: MAXIMUM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════════════ */}
      <section id="faq-section" className="py-32 px-6 lg:px-24 bg-[#131313]">
        <div
          ref={faqAnim.ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
            faqAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-16">
            <span className="font-mono text-[10px] text-[#FF6A00] tracking-widest uppercase block mb-4">INTEL_BRIEF // CLASSIFIED_FAQ</span>
            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase leading-none text-[#e5e2e1]">
              COMMON <span className="text-[#FF6A00]">QUERIES</span>
            </h2>
          </div>

          <div className="border border-white/10">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border-b border-white/10 last:border-b-0 transition-all duration-500 ease-out ${
                  faqAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${expandedFaq === i ? 'bg-[#1c1b1b]' : 'bg-[#131313] hover:bg-[#1a1a1a]'}`}
                style={{ transitionDelay: faqAnim.isVisible ? `${i * 80}ms` : '0ms' }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className={`w-full px-8 py-6 text-left flex items-center justify-between gap-4 ${expandedFaq === i ? 'border-l-4 border-[#FF6A00]' : 'border-l-4 border-transparent'} transition-all`}
                  aria-expanded={expandedFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-headline font-bold text-lg uppercase tracking-tight text-[#e5e2e1]">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-[#FF6A00] flex-shrink-0 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: expandedFaq === i ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden min-h-0">
                    <p className="px-8 pb-6 text-white/50 text-sm leading-relaxed border-l-4 border-[#FF6A00]">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          ORANGE CTA SECTION
      ════════════════════════════════════════════════════════ */}
      <section className="bg-[#FF6A00] py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] font-black mb-6 text-black/60">
            Terminal_Acknowledge_Required
          </div>
          <h2 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase mb-12 max-w-4xl leading-none text-black">
            READY TO OVERTAKE THE ALGORITHM?
          </h2>
          <a
            href="#territory-check"
            className="bg-black text-[#FF6A00] font-black px-16 py-6 text-2xl tracking-tighter hover:translate-y-[2px] transition-transform font-headline inline-flex items-center gap-4"
          >
            COMMENCE OPERATIONS
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
          <div className="mt-12 font-mono text-xs font-bold tracking-widest flex flex-wrap justify-center items-center gap-6 text-black/50">
            <span>IP: 192.168.1.101</span>
            <span className="opacity-40">|</span>
            <span>LATENCY: 24MS</span>
            <span className="opacity-40">|</span>
            <span>ENCRYPTION: AES-256</span>
            <span className="opacity-40">|</span>
            <span>PHONE: (213) 444-2229</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TERRITORY CHECK FORM
      ════════════════════════════════════════════════════════ */}
      <section id="territory-check" className="py-32 px-6 lg:px-24 bg-[#1c1b1b]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] text-[#FF6A00] tracking-widest uppercase block mb-4">ACCESS_REQUEST // TERRITORY_SCAN</span>
            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase leading-none text-[#e5e2e1]">
              CHECK YOUR <span className="text-[#FF6A00]">TERRITORY</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              One business per category, per area. We&apos;ll check availability and respond within 24 hours.
            </p>
          </div>

          <div className="border border-white/10 bg-[#131313] p-10 sm:p-12">
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#FF6A00] flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="font-mono text-[10px] text-[#FF6A00] tracking-widest uppercase mb-4">REQUEST_RECEIVED // PROCESSING</div>
                <h3 className="font-headline font-black text-3xl uppercase tracking-tighter text-[#e5e2e1] mb-3">
                  Territory Scan Initiated
                </h3>
                <p className="text-white/50 text-sm mb-8">
                  We&apos;ll check your territory and respond within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="font-mono text-[10px] text-white/40 hover:text-white/70 transition-colors tracking-widest uppercase"
                >
                  SUBMIT ANOTHER REQUEST
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleFormSubmit} noValidate>
                <div>
                  <label htmlFor="industry" className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-4 bg-[#1c1b1b] border border-white/10 text-[#e5e2e1] font-headline font-bold focus:outline-none focus:border-[#FF6A00] transition-colors disabled:opacity-50 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23FF6A00'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '20px',
                    }}
                  >
                    <option value="">Select your industry</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="hvac">HVAC</option>
                    <option value="electrical">Electrical</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="attorney">Attorney</option>
                    <option value="dentist">Dentist</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="city" className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-2">
                    City / Area *
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    required
                    disabled={formStatus === 'submitting'}
                    placeholder="e.g., Phoenix, AZ"
                    className="w-full px-4 py-4 bg-[#1c1b1b] border border-white/10 text-[#e5e2e1] font-headline font-bold placeholder-white/20 focus:outline-none focus:border-[#FF6A00] transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    disabled={formStatus === 'submitting'}
                    placeholder="you@company.com"
                    className="w-full px-4 py-4 bg-[#1c1b1b] border border-white/10 text-[#e5e2e1] font-headline font-bold placeholder-white/20 focus:outline-none focus:border-[#FF6A00] transition-colors disabled:opacity-50"
                  />
                </div>

                <input type="hidden" name="_subject" value="Territory Check Request" />

                {formStatus === 'error' && (
                  <div className="p-4 border border-white/20 bg-white/5 font-mono text-[10px] text-white/50 uppercase tracking-widest text-center">
                    TRANSMISSION_FAILED // Try again or email support@theanswerengine.ai
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-5 bg-[#FF6A00] text-black font-headline font-black text-xl uppercase tracking-tighter hover:translate-y-[2px] transition-transform disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      SCANNING...
                    </>
                  ) : (
                    'CHECK AVAILABILITY'
                  )}
                </button>

                <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest text-center">
                  RESPONSE_TIME: 24HRS // NO_SPAM_PROTOCOL: ACTIVE
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          MOBILE FLOATING CTA
      ════════════════════════════════════════════════════════ */}
      <div
        className={`fixed bottom-6 left-4 right-4 z-50 sm:hidden transition-all duration-300 ${
          showMobileCta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
        }`}
      >
        <a
          href="#territory-check"
          className="flex items-center justify-center gap-2 w-full py-4 bg-[#FF6A00] text-black font-headline font-black text-lg uppercase tracking-tighter shadow-[0_4px_24px_rgba(255,106,0,0.3)]"
        >
          CHECK YOUR TERRITORY
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* ════════════════════════════════════════════════════════
          IMAGE LIGHTBOX
      ════════════════════════════════════════════════════════ */}
      {activeImage && (
        <FocusTrap>
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged screenshot view"
          >
            <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <Image
                src={activeImage}
                alt="Enlarged AI citation screenshot"
                width={1400}
                height={1000}
                className="w-full h-auto shadow-2xl"
                unoptimized
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute -top-12 right-0 font-mono text-[10px] text-white/40 hover:text-white transition-colors tracking-widest uppercase flex items-center gap-2"
                autoFocus
              >
                ESC TO CLOSE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </FocusTrap>
      )}
    </>
  );
}
