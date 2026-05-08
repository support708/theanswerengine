'use client';

import { useEffect, useRef, useState, RefObject } from 'react';
import Image from 'next/image';
import FocusTrap from 'focus-trap-react';
import CitationProof from './components/CitationProof';
import GSCChart from './components/GSCChart';

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

// ─── Count-up hook ──────────────────────────────────────────────────────────
const useCountUp = (target: number, duration = 1800, trigger = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target, duration]);
  return value;
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

// ─── Territory data — real client roster + real RE markets ──────────────────
const territories = [
  // LOCKED — signed clients
  { city: 'Los Angeles, CA', category: 'Real Estate', status: 'claimed' as const },
  { city: 'Pasadena, CA', category: 'Real Estate', status: 'claimed' as const },
  { city: 'San Diego, CA', category: 'Real Estate', status: 'claimed' as const },
  { city: 'Inland Empire, CA', category: 'Real Estate', status: 'claimed' as const },
  { city: 'Austin, TX', category: 'Real Estate', status: 'claimed' as const },
  { city: 'Long Beach, CA', category: 'Property Management', status: 'claimed' as const },
  // OPEN — real-estate-first expansion markets
  { city: 'Chicago, IL', category: 'Real Estate', status: 'available' as const },
  { city: 'Miami, FL', category: 'Real Estate', status: 'available' as const },
  { city: 'Seattle, WA', category: 'Real Estate', status: 'available' as const },
  { city: 'Atlanta, GA', category: 'Real Estate', status: 'available' as const },
  { city: 'Nashville, TN', category: 'Real Estate', status: 'available' as const },
  { city: 'Denver, CO', category: 'Real Estate', status: 'available' as const },
  { city: 'Portland, OR', category: 'Real Estate', status: 'available' as const },
  { city: 'Phoenix, AZ', category: 'Real Estate', status: 'available' as const },
  { city: 'Dallas, TX', category: 'Real Estate', status: 'available' as const },
];

// ─── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What exactly is Answer Engine Optimization?',
    a: 'AEO is the practice of structuring your business information so AI platforms like ChatGPT, Claude, Perplexity, and Google AI Overviews cite you as the trusted answer. It\'s not about ranking on Google anymore. It\'s about being the business AI recommends when someone asks a buying question.'
  },
  {
    q: 'How is this different from regular SEO?',
    a: 'Traditional SEO gets you on page 1. AEO gets you cited as THE answer. When someone asks AI "who\'s the best plumber in Phoenix," we make sure AI says your name — not a list of 10 competitors. The search paradigm has shifted. We operate at the new frontier.'
  },
  {
    q: 'How long does Answer Engine Optimization take to work?',
    a: 'Foundation builds over 90 days. Most clients see their first AI citations between weeks 6 and 10. The full citation pattern — where AI consistently recommends you for your category — typically stabilizes in months 3–6. That\'s why we back foundation with a 90-day citation guarantee and keep working beyond that via the Monthly Program.'
  },
  {
    q: 'What if my competitor already signed up?',
    a: 'We only work with one business per category per geographic area. One client per territory. If your territory is claimed, we\'ll tell you upfront — no pitch, no pressure. Check your territory now before a competitor does.'
  },
  {
    q: "What's the investment?",
    a: 'Two parts: a one-time foundation fee (scoped to your industry and market size) and a monthly program fee that covers ongoing citation work and a Monthly Intelligence Report. We quote live on the strategy call — no surprise pricing. Book a call at (213) 444-2229.'
  },
  {
    q: 'What if AI is giving wrong information about my business?',
    a: 'We scan what ChatGPT, Claude, Perplexity, and Google AI are saying about you today, identify the misattributed sources feeding bad data into AI training, and publish authoritative corrections across the surfaces AI actually reads. This is part of the foundation and stays on as an ongoing watch in the Monthly Program.'
  },
  {
    q: 'How do I get my business recommended on Google Gemini or AI Mode?',
    a: 'Google AI pulls from a mix of Knowledge Graph data, schema-marked content, and authoritative third-party mentions. Our foundation covers all three: structured data on every page of your site, an authority-content hub that Google\'s crawlers treat as canonical, and a distribution layer that seeds references AI engines cross-check.'
  },
  {
    q: 'Do daily automated blog posts help with AI visibility?',
    a: 'Frequency alone doesn\'t. AI platforms weight depth, structure, and source trust more than velocity. A small cluster of deeply researched, schema-rich pages outperforms a large volume of thin content. We publish at the cadence your category rewards — never mass-produced.'
  },
  {
    q: 'Can I just buy a one-time Answer Engine audit?',
    a: 'Yes — the Blind Spot Report is a free version of the same scan we run before onboarding. You get your current visibility across ChatGPT, Claude, Perplexity, and Google AI, a citation gap list, and the three highest-impact fixes. Most buyers use it to decide whether the full foundation makes sense.'
  },
  {
    q: 'Do you have proof this actually works?',
    a: 'Our own real estate site (lametrohomefinder.com) reached 1.14M+ monthly impressions with AI citations across ChatGPT, Claude, Perplexity, and Google AI — 4 out of 4 major platforms. Justin built the AERO-10 framework there first, tested every tactic against live market conditions in LA, then packaged it for clients.'
  },
];

// ─── Live Demo scan lines ────────────────────────────────────────────────────
const SCAN_LINES: { t: string; d: number }[] = [
  { t: 'Scanning ChatGPT · your category / your city', d: 900 },
  { t: 'Scanning Claude · your category / your city', d: 700 },
  { t: 'Scanning Perplexity · your category / your city', d: 700 },
  { t: 'Scanning Google AI Overview · your category / your city', d: 900 },
  { t: 'Building citation graph...', d: 1100 },
  { t: 'Complete.', d: 1000 },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [scanStep, setScanStep] = useState(0);

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
  const liveDemoAnim = useScrollAnimation();

  // Animated counters — triggered when citations section enters view
  const impressionsCount = useCountUp(114, 1800, citationsAnim.isVisible);
  const platformCount = useCountUp(4, 900, citationsAnim.isVisible);

  // Live demo scan animation — progresses through SCAN_LINES when section enters viewport
  useEffect(() => {
    if (!liveDemoAnim.isVisible) return;
    if (scanStep >= SCAN_LINES.length) return;
    const t = setTimeout(() => setScanStep((s) => s + 1), SCAN_LINES[scanStep].d);
    return () => clearTimeout(t);
  }, [scanStep, liveDemoAnim.isVisible]);

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
        "@id": "https://www.theanswerengine.ai/#organization",
        "name": "The Answer Engine",
        "description": "Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like Google AI Overviews, ChatGPT, Claude, and Perplexity. 90-day citation guarantee. Exclusive territory protection.",
        "url": "https://www.theanswerengine.ai",
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
        "description": "The Answer Engine's 3-step process to get your local business cited as the authoritative answer across ChatGPT, Claude, Perplexity, and Google AI Overviews.",
        "totalTime": "P90D",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "AI Visibility Audit", "text": "We test 50+ queries across ChatGPT, Google AI, Claude and Perplexity to map exactly where your category prospects are being sent today — and where you're missing.", "url": "https://www.theanswerengine.ai/#how-it-works" },
          { "@type": "HowToStep", "position": 2, "name": "Authority Content Build", "text": "We build a hub of research-backed, schema-rich pages structured specifically for AI citation — the same pattern we used on our own real estate site to reach 1.14M+ monthly impressions.", "url": "https://www.theanswerengine.ai/#how-it-works" },
          { "@type": "HowToStep", "position": 3, "name": "Citation Monitoring", "text": "Live tracking across ChatGPT, Perplexity, Claude, and Google AI Overviews. Monthly Intelligence Report so you can see it compounding.", "url": "https://www.theanswerengine.ai/#how-it-works" },
        ],
      })}} />

      {/* ── Schema: WebPage with Speakable ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.theanswerengine.ai/",
        "name": "The Answer Engine - Answer Engine Optimization for Local Businesses",
        "description": "Get your business cited by ChatGPT, Claude, Google AI Overviews, and Perplexity. Answer Engine Optimization with 90-day citation guarantee and exclusive territory protection.",
        "url": "https://www.theanswerengine.ai",
        "isPartOf": { "@type": "WebSite", "name": "The Answer Engine", "url": "https://www.theanswerengine.ai" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".hero-description", "#faq-section"] },
        "mainEntity": { "@type": "Service", "name": "Answer Engine Optimization", "provider": { "@id": "https://www.theanswerengine.ai/#organization" } },
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
            <div className="inline-block bg-[#F27D24] text-black px-3 py-1 font-mono text-[10px] mb-6 tracking-widest uppercase font-bold">
              Answer Engine Optimization // AI Citations
            </div>

            <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter uppercase mb-6 text-[#e5e2e1]">
              ANSWER ENGINE{' '}
              <span className="text-[#F27D24]">OPTIMIZATION</span> FOR LOCAL BUSINESSES
            </h1>

            <p className="hero-description text-white/50 text-lg leading-relaxed mb-10 max-w-xl">
              We built the AEO playbook on our own real estate site — from invisible to 1.14M+ monthly impressions with citations on ChatGPT, Claude, Perplexity, and Google AI Overviews. Now one business per category, per city gets the same system. 90-day citation guarantee.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#territory-check"
                className="bg-[#F27D24] text-black font-black px-10 py-5 text-xl tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase inline-flex items-center gap-3"
              >
                CHECK TERRITORY
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="https://calendly.com/theanswerengine-support/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#F27D24] text-[#F27D24] font-black px-10 py-5 text-xl tracking-tighter hover:bg-[#F27D24] hover:text-black transition-all font-headline uppercase"
              >
                BOOK 30-MIN CALL
              </a>
            </div>

            {/* Inline metrics strip */}
            <div className="flex items-center gap-8 mt-10 border-t border-white/10 pt-8">
              <div>
                <div className="font-headline font-black text-2xl text-[#e5e2e1]">1.14M+</div>
                <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase mt-1">Monthly Impressions (Our Site)</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="font-headline font-black text-2xl text-[#e5e2e1]">4 / 4</div>
                <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase mt-1">Platforms Citing Us</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="font-headline font-black text-2xl text-[#F27D24]">90-Day</div>
                <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase mt-1">Citation Guarantee</div>
              </div>
            </div>
          </div>

          {/* Right column — 4-platform citation proof */}
          <div className="lg:col-span-4">
            <div
              className="bg-[#2a2a2a] p-8 border-l-4 border-[#F27D24] relative hover-lift"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="absolute top-4 right-4 font-mono text-[10px] text-white/20 tracking-widest">LIVE // Our Site</div>
              <h3 className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase mb-4">4-Platform Citation Proof</h3>
              <p className="text-white/60 text-xs leading-relaxed mb-6">
                We built the playbook on our own real estate site. Every platform that matters cites us — and we replicate this for your business.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { platform: 'ChatGPT', status: 'CITED' },
                  { platform: 'Claude', status: 'CITED' },
                  { platform: 'Perplexity', status: 'CITED' },
                  { platform: 'Google AI Overview', status: 'CITED' },
                ].map(({ platform, status }) => (
                  <div key={platform} className="flex items-center justify-between bg-[#0e0e0e] px-4 py-3 border border-white/5">
                    <span className="font-mono text-[11px] text-[#e5e2e1] tracking-wide">{platform}</span>
                    <span className="font-mono text-[10px] text-green-400 tracking-widest font-bold">✓ {status}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">Impressions</div>
                  <div className="text-sm font-headline font-bold text-[#F27D24]">1.14M+/mo</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">Guarantee</div>
                  <div className="text-sm font-headline font-bold text-[#e5e2e1]">90-Day</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <div className="w-px h-12 bg-gradient-to-b from-[#F27D24] to-transparent" />
          <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Scroll to Access</span>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TICKER BAR
      ════════════════════════════════════════════════════════ */}
      <div
        className="bg-black overflow-hidden py-4 border-t border-b border-[#F27D24]"
        aria-hidden="true"
      >
        <style>{`@keyframes tae-tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        <div
          className="inline-flex whitespace-nowrap"
          style={{ animation: 'tae-tick 42s linear infinite', gap: 48 }}
        >
          {Array.from({ length: 6 }).map((_, loop) => (
            <span key={loop} className="inline-flex items-center gap-12">
              {[
                'CITED · CHATGPT',
                'CITED · CLAUDE',
                'CITED · PERPLEXITY',
                'CITED · GOOGLE AI OVERVIEW',
                'ONE OPERATOR PER CITY',
                '90-DAY CITATION GUARANTEE',
                'AUDIT · OPTIMIZE · DOMINATE',
              ].map((t, j) => (
                <span
                  key={j}
                  className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-white"
                >
                  <span className="text-[#F27D24]">◉</span>
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          FOUR-PHASE METHOD
      ════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-32 px-6 lg:px-24 bg-[#1c1b1b] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-24 gap-8">
            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase leading-none max-w-xl text-[#e5e2e1]">
              HOW WE GET YOU CITED{' '}
              <span className="text-[#F27D24]">BY AI</span>
            </h2>
            <div className="hidden md:block w-48 h-px bg-white/10 mb-4" aria-hidden="true" />
          </div>

          <div
            ref={stepsAnim.ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 transition-all duration-700 ease-out ${
              stepsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              {
                num: '01',
                kicker: 'WEEK 1',
                title: 'Audit',
                desc: 'We scan ChatGPT, Claude, Perplexity, and Google AI Overviews for every query that matters to your category. Citations, misattribution, competitor footprint.',
                status: 'Delivered · Day 7',
                delay: 0,
              },
              {
                num: '02',
                kicker: 'WEEK 2–6',
                title: 'Foundation',
                desc: 'We rebuild your authority surface. Schema on every page, an authority content cluster AI engines read as canonical, entity consolidation across 50+ citations.',
                status: 'Delivered · Day 8–45',
                delay: 150,
              },
              {
                num: '03',
                kicker: 'WEEK 4+',
                title: 'Signal',
                desc: 'We seed the sources AI engines actually read — Reddit threads, industry press, trusted directories. Your name, in the places that train the answer.',
                status: 'Ongoing',
                delay: 300,
              },
              {
                num: '04',
                kicker: 'DAY 1 → FOREVER',
                title: 'Monitor',
                desc: 'Real-time citation tracking across all 4 platforms. Monthly Intelligence Report. Ongoing authority compounding.',
                status: 'Live 24/7',
                delay: 450,
              },
            ].map((step, i, arr) => (
              <div
                key={step.num}
                className={`p-10 ${i < arr.length - 1 ? 'border-b lg:border-b-0 lg:border-r' : ''} ${i === 1 ? 'md:border-r lg:border-r' : ''} border-white/10 bg-[#131313] hover:bg-[#2a2a2a] transition-colors group`}
                style={{ transitionDelay: stepsAnim.isVisible ? `${step.delay}ms` : '0ms' }}
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-5xl font-headline font-black text-white/10 group-hover:text-[#F27D24] transition-colors">
                    {step.num}
                  </span>
                  <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase mt-3">
                    {step.kicker}
                  </span>
                </div>
                <h4 className="font-headline font-bold text-2xl uppercase mb-4 text-[#e5e2e1]">{step.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-8">{step.desc}</p>
                <div className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase">{step.status}</div>
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
        className={`relative py-12 md:py-16 flex items-center justify-center overflow-hidden transition-all duration-700 ease-out ${
          interstitialAnim.isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        {/* Dark gradient background with grid */}
        <div className="absolute inset-0 bg-[#0e0e0e] grid-bg" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60" />

        <div className="relative z-10 text-center px-6">
          <div className="font-headline font-black text-3xl md:text-5xl lg:text-6xl tracking-[0.15em] uppercase leading-none">
            <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-center justify-center">
              <span className="text-[#e5e2e1]">AUDIT.</span>
              <span className="text-[#F27D24]">OPTIMIZE.</span>
              <span className="text-[#e5e2e1]">DOMINATE.</span>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#F27D24]" />
            <div className="w-1.5 h-1.5 bg-[#F27D24]/40" />
            <div className="w-1.5 h-1.5 bg-[#F27D24]/20" />
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
            <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mb-4">Proof // We Eat Our Own Dog Food</span>
            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase leading-none text-[#e5e2e1]">
              WE PROVED IT ON OUR{' '}
              <span className="text-[#F27D24]">OWN SITE FIRST.</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mt-6 max-w-xl">
              The AERO-10 framework was built and tested on our own real estate site in LA before a single client paid for it. Today it reaches 1.14M+ monthly impressions and sits as the recommended agent across all four major AI platforms for rent control, probate, and ADU questions.
            </p>
          </div>

          {/* Stat strip — animated counters */}
          <div className="grid grid-cols-3 gap-0 border border-white/10 mb-8">
            <div className="p-8 border-r border-white/10 bg-[#131313]">
              <div className="font-headline font-black text-4xl md:text-5xl text-[#e5e2e1] mb-2 tabular-nums">
                {citationsAnim.isVisible ? `${(impressionsCount / 100).toFixed(impressionsCount >= 100 ? 2 : 2)}M+` : '0M+'}
              </div>
              <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Monthly Impressions</div>
              <div className="font-mono text-[10px] text-[#F27D24] uppercase tracking-widest mt-2">verified — last 28d</div>
            </div>
            <div className="p-8 border-r border-white/10 bg-[#131313]">
              <div className="font-headline font-black text-4xl md:text-5xl text-[#e5e2e1] mb-2 tabular-nums">
                {citationsAnim.isVisible ? `${platformCount} / 4` : '0 / 4'}
              </div>
              <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">AI Platforms Citing Us</div>
              <div className="font-mono text-[10px] text-[#F27D24] uppercase tracking-widest mt-2">tracked live</div>
            </div>
            <div className="p-8 bg-[#131313]">
              <div className="font-headline font-black text-4xl md:text-5xl text-[#e5e2e1] mb-2">$0</div>
              <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Ad Spend</div>
              <div className="font-mono text-[10px] text-[#F27D24] uppercase tracking-widest mt-2">organic only</div>
            </div>
          </div>

          {/* Client logo strip */}
          <div className="border border-white/10 bg-[#0e0e0e] px-8 py-8 mb-16">
            <div className="font-mono text-[9px] text-white/20 tracking-widest uppercase mb-7">Current Operators // Active Clients</div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
              {[
                { src: '/clients/lamh.png', alt: 'LA Metro Home Finder', sub: 'Real Estate · LA', w: 110, h: 36, whiteBg: false },
                { src: '/clients/rpm-southland.png', alt: 'RPM Southland', sub: 'Property Mgmt · Long Beach', w: 110, h: 36, whiteBg: true },
                { src: '/clients/davis-agency.png', alt: 'Davis Agency', sub: 'Real Estate · Austin', w: 110, h: 36, whiteBg: false },
                { src: '/clients/truedoor.png', alt: 'TrueDoor Property Management', sub: 'Property Mgmt · Irvine', w: 110, h: 36, whiteBg: true },
                { src: '/clients/lovery.png', alt: 'Lovery Real Estate', sub: 'Real Estate · San Diego', w: 110, h: 36, whiteBg: false },
              ].map((client) => (
                <div key={client.alt} className="flex flex-col items-center gap-2">
                  {/* White-bg logos: invert→black bg, mix-blend-screen→transparent. Transparent-bg logos: brightness-0 invert→white marks */}
                  <div className={`h-9 flex items-center justify-center transition-opacity duration-300 ${client.whiteBg ? 'mix-blend-screen opacity-55 hover:opacity-90' : 'opacity-35 hover:opacity-70'}`}>
                    <Image
                      src={client.src}
                      alt={client.alt}
                      width={client.w}
                      height={client.h}
                      className={`max-h-9 w-auto object-contain ${client.whiteBg ? 'invert grayscale' : 'brightness-0 invert'}`}
                    />
                  </div>
                  <div className="font-mono text-[7px] text-white/20 tracking-widest uppercase text-center">{client.sub}</div>
                </div>
              ))}
              {/* ClearClose — inline SVG mark */}
              <div className="flex flex-col items-center gap-2">
                <div className="h-9 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300">
                  <svg viewBox="0 0 54 54" width="36" height="36" fill="white" xmlns="http://www.w3.org/2000/svg" aria-label="ClearClose logo">
                    <path d="M 9 3 A 24 24 0 1 1 9 51 L 43 27 Z M 9 11 A 16 16 0 1 1 9 43 L 33 27 Z" fillRule="evenodd"/>
                  </svg>
                </div>
                <div className="font-mono text-[7px] text-white/20 tracking-widest uppercase text-center">Builder Financial</div>
              </div>
            </div>
          </div>

          {/* GSC Growth Chart */}
          <div className="border border-white/10 bg-[#131313] p-8 mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mb-1">Google Search Console // Live Data</span>
                <span className="font-headline font-black text-xl uppercase tracking-tighter text-[#e5e2e1]">Monthly Impressions — lametrohomefinder.com</span>
              </div>
              <div className="font-mono text-[10px] text-white/20 tracking-widest uppercase text-right hidden sm:block">
                Organic only · No ad spend
              </div>
            </div>
            <GSCChart />
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
                  <div className="relative overflow-hidden p-4 pb-0">
                    {/* Terminal-style header bar */}
                    <div className="flex items-center gap-2 mb-2 px-1">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/10" />
                        <div className="w-2 h-2 rounded-full bg-white/10" />
                        <div className="w-2 h-2 rounded-full bg-[#F27D24]/40" />
                      </div>
                      <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest ml-2">{citation.platform}</span>
                    </div>
                    {/* Image with uniform frame */}
                    <div className="relative rounded-sm overflow-hidden border border-white/[0.06]">
                      <Image
                        src={citation.image}
                        alt={citation.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover object-top aspect-[3/2] group-hover:scale-[1.02] transition-transform duration-500 brightness-90 group-hover:brightness-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/60 via-transparent to-transparent" />
                    </div>
                  </div>
                </button>
                <div className="p-5 pt-3">
                  <div className="font-mono text-[10px] text-[#F27D24] uppercase tracking-widest mb-1">{citation.platform}</div>
                  <p className="text-white/40 text-sm italic">&ldquo;{citation.query}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive CitationProof demo */}
          <div className="border border-white/10 bg-[#131313] p-8">
            <div className="font-mono text-[10px] text-[#F27D24] uppercase tracking-widest mb-6">Live Demo // See It In Action</div>
            <CitationProof isVisible={citationsAnim.isVisible} />
          </div>

          {/* Founder quote + operator profiles */}
          <div className="mt-12">
            <div className="border border-white/10 border-l-4 border-l-[#F27D24] bg-[#0e0e0e] p-10 mb-0">
              <blockquote className="text-2xl sm:text-3xl font-light text-white/80 leading-[1.35] mb-8 font-headline tracking-tight">
                &ldquo;I built this around one insight: AI doesn&apos;t rank pages, it recommends authorities. That distinction changes everything about how you invest in content.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F27D24] flex-shrink-0">
                  <Image
                    src="/justin-borges-headshot.jpg"
                    alt="Justin Borges — Founder, The Answer Engine"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#e5e2e1] font-headline uppercase tracking-tight">Justin Borges</p>
                  <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-0.5">Founder, The Answer Engine // Pasadena, CA</p>
                </div>
              </div>
            </div>

            {/* Operator profile row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border border-t-0 border-white/10">
              {[
                { name: 'Miles Williams', role: 'Broker / Owner', company: 'RPM Southland', territory: 'Long Beach, CA', img: '/clients/rpm-southland.png', isLogo: true, whiteBg: true },
                { name: 'Bryant Hull', role: 'Co-Founder', company: 'TrueDoor PM', territory: 'Irvine, CA', img: '/clients/truedoor.png', isLogo: true, whiteBg: true },
                { name: 'Ryan Fisher', role: 'Principal Agent', company: 'Lovery RE', territory: 'San Diego, CA', img: '/clients/ryan-fisher.png' },
                { name: 'Derrik Davis', role: 'Principal Agent', company: 'Davis Agency', territory: 'Austin, TX', img: '/clients/davis-agency.png', isLogo: true, whiteBg: false },
              ].map((person, i) => (
                <div key={i} className={`p-6 flex flex-col items-center text-center ${i < 3 ? 'border-r border-white/10' : ''}`}>
                  {person.isLogo ? (
                    /* Logo: white-bg logos use invert+screen; transparent-bg logos use brightness-0+invert */
                    <div className={`w-14 h-10 flex items-center justify-center mb-3 ${person.whiteBg ? 'mix-blend-screen opacity-55' : 'opacity-40'}`}>
                      <Image
                        src={person.img}
                        alt={person.name}
                        width={56}
                        height={40}
                        className={`w-full h-full object-contain ${person.whiteBg ? 'invert grayscale' : 'brightness-0 invert'}`}
                        unoptimized={person.img.endsWith('.svg')}
                      />
                    </div>
                  ) : (
                    /* Headshot: circular frame, normal photo rendering */
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-white/15 mb-3 flex-shrink-0">
                      <Image
                        src={person.img}
                        alt={person.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  )}
                  <p className="font-headline font-black text-[11px] text-[#e5e2e1] uppercase tracking-tight leading-tight">{person.name}</p>
                  <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-1">{person.role}</p>
                  <p className="font-mono text-[8px] text-[#F27D24]/60 uppercase tracking-widest">{person.company}</p>
                  <p className="font-mono text-[7px] text-white/20 uppercase tracking-widest mt-0.5">{person.territory}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          LIVE DEMO — FIELD SCAN TERMINAL
      ════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 lg:px-24 bg-[#131313]">
        <div
          ref={liveDemoAnim.ref}
          className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
            liveDemoAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-16">
            <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mb-4">Live Demo // See It In Action</span>
            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase leading-none text-[#e5e2e1]">
              ASK AN AI.<br />
              WATCH THE SYSTEM <span className="text-[#F27D24]">MOVE.</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mt-6 max-w-xl">
              This is the field scan we run on every new client before day one. Four platforms, live, in order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
            {/* Left — terminal */}
            <div className="bg-black text-white/90 border-b md:border-b-0 md:border-r border-white/10 min-h-[480px] flex flex-col">
              <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center">
                <span className="font-mono text-[10px] tracking-widest text-[#F27D24] uppercase">◉ Field Scan · Live</span>
                <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">Your City / Your Category</span>
              </div>
              <div className="p-6 flex-1 font-mono text-[12px] leading-[1.9]">
                <div className="text-white/70">&gt; initiate scan --territory=&quot;your-city&quot; --category=&quot;your-category&quot;</div>
                <div className="text-[#F27D24] mt-1">SCAN 001 OPEN</div>
                <div className="mt-4">
                  {SCAN_LINES.slice(0, scanStep).map((l, i) => (
                    <div key={i} className="mb-1">
                      <span className="text-[#F27D24]">[{String(i + 1).padStart(2, '0')}]</span>{' '}
                      <span className={i === scanStep - 1 ? 'text-[#F27D24]' : 'text-white/80'}>{l.t}</span>
                      {i < scanStep - 1 && <span className="text-white/40 ml-2">· ok</span>}
                    </div>
                  ))}
                  {scanStep < SCAN_LINES.length && (
                    <span className="text-[#F27D24] animate-pulse">█</span>
                  )}
                </div>
                {scanStep >= SCAN_LINES.length && (
                  <button
                    onClick={() => setScanStep(0)}
                    className="mt-6 bg-[#F27D24] text-black font-headline font-black px-4 py-2 text-[11px] tracking-widest uppercase hover:translate-y-[1px] transition-transform"
                  >
                    Replay scan →
                  </button>
                )}
              </div>
            </div>

            {/* Right — citation map */}
            <div className="bg-[#131313] flex flex-col">
              <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center">
                <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">Current Citation Map</span>
                <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">Before Us</span>
              </div>
              <div className="p-6 flex-1">
                {[
                  ['ChatGPT', 'Competitor · generic recommendation'],
                  ['Claude', 'No clear recommendation'],
                  ['Perplexity', 'Generic list · 8+ results'],
                  ['Google AI', 'Directory listing · no name'],
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`py-4 flex justify-between items-center ${i < 3 ? 'border-b border-white/5' : ''}`}
                  >
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase mb-1">{row[0]}</div>
                      <div className="text-[#e5e2e1] text-[15px] font-semibold">{row[1]}</div>
                    </div>
                    <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white/50 text-sm">
                      ✗
                    </div>
                  </div>
                ))}

                <div className="mt-6 p-5 bg-black border-l-4 border-[#F27D24]">
                  <div className="font-mono text-[10px] tracking-widest text-[#F27D24] uppercase mb-1">— Projected · Day 90</div>
                  <div className="text-[#e5e2e1] text-base font-bold">
                    4 / 4 platforms citing <span className="text-[#F27D24]">you</span>.
                  </div>
                </div>
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
            <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mb-4">Territory Map // Live Availability</span>
            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase leading-none text-[#e5e2e1]">
              EXCLUSIVE <span className="text-[#F27D24]">TERRITORY</span> GRID
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mt-4 max-w-xl">
              One client per category, per city. Once claimed, no competitor gets access. Check your territory before they do.
            </p>
          </div>

          <div className="border border-white/10">
            {/* Table header — hidden on mobile (card view takes over) */}
            <div className="hidden sm:grid grid-cols-[2fr_1.3fr_1fr_120px] bg-black text-white px-6 py-4 border-b border-white/10">
              <div className="font-mono text-[10px] tracking-widest uppercase text-white/60">Territory</div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-white/60">Category</div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-white/60">Status</div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-white/60 text-right">Action</div>
            </div>
            {/* Rows — table on desktop, card on mobile */}
            {territories.map((t, i) => {
              const isClaimed = t.status === 'claimed';
              return (
                <div
                  key={i}
                  className={`flex flex-col gap-3 sm:grid sm:grid-cols-[2fr_1.3fr_1fr_120px] sm:items-center px-5 sm:px-6 py-4 sm:py-5 ${i < territories.length - 1 ? 'border-b border-white/5' : ''} ${i % 2 === 0 ? 'bg-[#131313]' : 'bg-[#1c1b1b]'} hover:bg-[#2a2a2a] transition-colors`}
                >
                  <div className="font-headline font-bold text-base md:text-lg uppercase text-[#e5e2e1]">{t.city}</div>
                  <div className="font-mono text-[11px] tracking-widest uppercase text-white/50">{t.category}</div>
                  <div>
                    {isClaimed ? (
                      <span className="font-mono text-[10px] tracking-widest uppercase bg-white/10 text-white/60 px-2.5 py-1 inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-white/40" />
                        LOCKED · CLAIMED
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] tracking-widest uppercase bg-[#F27D24] text-black font-bold px-2.5 py-1 inline-flex items-center gap-1.5">
                        <span>◉</span>
                        OPEN
                      </span>
                    )}
                  </div>
                  <div className="sm:text-right">
                    {!isClaimed && (
                      <a
                        href="#territory-check"
                        className="font-headline font-black text-[11px] tracking-widest uppercase underline underline-offset-4 text-[#F27D24] hover:text-white transition-colors"
                      >
                        CLAIM →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
              {territories.filter((t) => t.status === 'claimed').length} LOCKED · {territories.filter((t) => t.status === 'available').length} OPEN · UPDATED LIVE
            </div>
            <a
              href="#territory-check"
              className="inline-flex items-center gap-3 bg-[#F27D24] text-black font-black px-10 py-4 tracking-tighter hover:translate-y-[2px] transition-transform font-headline uppercase"
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
          WHO WE SERVE — real-estate-forward positioning
      ════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 lg:px-24 bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mb-4">Who We Serve // Primary Verticals</span>
            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase leading-none text-[#e5e2e1]">
              BUILT ON{' '}
              <span className="text-[#F27D24]">REAL ESTATE.</span><br />
              READY FOR THE REST.
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mt-6 max-w-2xl">
              We built the AEO playbook on real estate because that&apos;s where AI-driven buying decisions moved first. Today our client roster is real estate and real-estate-adjacent. Adjacent local service is open by territory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {[
              {
                num: '01',
                tag: 'PRIMARY',
                title: 'Real Estate Agents & Teams',
                body: 'Solo agents, teams, and brokerages ranking for high-intent buyer, seller, and investor queries. The AERO-10 framework was built here.',
                clients: 'LAMH · Borges · Lovery · Brandon Thompson · Davis Agency',
              },
              {
                num: '02',
                tag: 'PRIMARY',
                title: 'Property Management',
                body: 'SFR and multi-family operators with owner-acquisition and tenant-placement funnels. Same framework, different query set.',
                clients: 'RPM Southland',
              },
              {
                num: '03',
                tag: 'PRIMARY',
                title: 'Builder Financial Services',
                body: 'Contingent-offer conversion, builder financing, and ancillary real-estate services. Positioned alongside agents in AI responses.',
                clients: 'ClearClose Builder Services',
              },
              {
                num: '04',
                tag: 'BY TERRITORY',
                title: 'Adjacent Local Service',
                body: 'Legal, dental, HVAC, roofing, and other high-intent local-service categories. Taken selectively when territory is open and the category rewards AEO.',
                clients: 'Select verticals',
              },
            ].map((v, i, arr) => (
              <div
                key={v.num}
                className={`p-8 bg-[#1c1b1b] hover:bg-[#2a2a2a] transition-colors ${i < arr.length - 1 ? 'border-b lg:border-b-0 lg:border-r' : ''} ${i === 1 ? 'md:border-r' : ''} ${i < 2 ? 'md:border-b lg:border-b-0' : ''} border-white/10`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-headline font-black text-white/10">{v.num}</span>
                  <span className={`font-mono text-[10px] tracking-widest uppercase ${v.tag === 'PRIMARY' ? 'text-[#F27D24]' : 'text-white/40'}`}>
                    {v.tag}
                  </span>
                </div>
                <h4 className="font-headline font-bold text-xl uppercase mb-4 text-[#e5e2e1] leading-tight">{v.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{v.body}</p>
                <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase pt-4 border-t border-white/10">
                  {v.clients}
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-xs mt-6 font-mono tracking-widest uppercase">
            Real estate is where we have the deepest playbook. Other verticals are taken one territory at a time.
          </p>
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
            className="border border-[#F27D24]/40 border-l-4 border-l-[#F27D24] bg-[#131313] p-12 sm:p-16 relative overflow-hidden hover-lift"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
          >
            {/* Glow accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,rgba(255,106,0,0.08),transparent_70%)] pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mb-6">Our Guarantee // Zero Risk</span>

              <h2 className="font-headline font-black text-5xl md:text-7xl tracking-tighter uppercase leading-none text-[#e5e2e1] mb-8">
                90-DAY CITATION<br />
                <span className="text-[#F27D24]">GUARANTEE</span>
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
                    <span className="text-[#F27D24] font-bold text-sm flex-shrink-0">&#10003;</span>
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
                Risk: Zero // Your investment is protected
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
            <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mb-4">Common Questions // FAQ</span>
            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase leading-none text-[#e5e2e1]">
              FREQUENTLY ASKED <span className="text-[#F27D24]">QUESTIONS</span>
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
                  className={`w-full px-8 py-6 text-left flex items-center justify-between gap-4 ${expandedFaq === i ? 'border-l-4 border-[#F27D24]' : 'border-l-4 border-transparent'} transition-all`}
                  aria-expanded={expandedFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-headline font-bold text-lg uppercase tracking-tight text-[#e5e2e1]">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-[#F27D24] flex-shrink-0 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`}
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
                    <p className="px-8 pb-6 text-white/50 text-sm leading-relaxed border-l-4 border-[#F27D24]">{faq.a}</p>
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
      <section className="bg-[#F27D24] py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] font-black mb-6 text-black/60">
            Ready to Get Started?
          </div>
          <h2 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase mb-12 max-w-4xl leading-none text-black">
            SEE IF YOUR TERRITORY IS OPEN
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#territory-check"
              className="bg-black text-[#F27D24] font-black px-16 py-6 text-2xl tracking-tighter hover:translate-y-[2px] transition-transform font-headline inline-flex items-center gap-4"
            >
              CHECK TERRITORY
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
            <a
              href="https://calendly.com/theanswerengine-support/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black text-black font-black px-16 py-6 text-2xl tracking-tighter hover:bg-black hover:text-[#F27D24] transition-all font-headline"
            >
              BOOK 30-MIN CALL
            </a>
          </div>
          <div className="mt-12 font-mono text-xs font-bold tracking-widest flex flex-wrap justify-center items-center gap-6 text-black/50">
            <span>Call us: (213) 444-2229</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TERRITORY CHECK FORM
      ════════════════════════════════════════════════════════ */}
      <section id="territory-check" className="py-32 px-6 lg:px-24 bg-[#1c1b1b]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mb-4">Check Your Territory // Free Scan</span>
            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase leading-none text-[#e5e2e1]">
              CHECK YOUR <span className="text-[#F27D24]">TERRITORY</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mt-4">
              One business per category, per area. We&apos;ll check availability and respond within 24 hours.
            </p>
          </div>

          <div className="border border-white/10 bg-[#131313] p-10 sm:p-12">
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#F27D24] flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase mb-4">Request received — we'll be in touch</div>
                <h3 className="font-headline font-black text-3xl uppercase tracking-tighter text-[#e5e2e1] mb-3">
                  Territory Check Started
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
                    className="w-full px-4 py-4 bg-[#1c1b1b] border border-white/10 text-[#e5e2e1] font-headline font-bold focus:outline-none focus:border-[#F27D24] transition-colors disabled:opacity-50 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23F27D24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '20px',
                    }}
                  >
                    <option value="">Select your industry</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="property-management">Property Management</option>
                    <option value="builder-financial">Builder / Financial Services</option>
                    <option value="attorney">Legal Services</option>
                    <option value="dentist">Dental / Medical</option>
                    <option value="hvac">HVAC / Plumbing</option>
                    <option value="roofing">Roofing</option>
                    <option value="other">Other Local Service</option>
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
                    className="w-full px-4 py-4 bg-[#1c1b1b] border border-white/10 text-[#e5e2e1] font-headline font-bold placeholder-white/20 focus:outline-none focus:border-[#F27D24] transition-colors disabled:opacity-50"
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
                    className="w-full px-4 py-4 bg-[#1c1b1b] border border-white/10 text-[#e5e2e1] font-headline font-bold placeholder-white/20 focus:outline-none focus:border-[#F27D24] transition-colors disabled:opacity-50"
                  />
                </div>

                <input type="hidden" name="_subject" value="Territory Check Request" />

                {formStatus === 'error' && (
                  <div className="p-4 border border-white/20 bg-white/5 font-mono text-[10px] text-white/50 uppercase tracking-widest text-center">
                    Something went wrong. Try again or email support@theanswerengine.ai
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-5 bg-[#F27D24] text-black font-headline font-black text-xl uppercase tracking-tighter hover:translate-y-[2px] transition-transform disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Checking...
                    </>
                  ) : (
                    'CHECK AVAILABILITY'
                  )}
                </button>

                <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest text-center">
                  Response time: 24 hours // No spam, ever
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
          className="flex items-center justify-center gap-2 w-full py-4 bg-[#F27D24] text-black font-headline font-black text-lg uppercase tracking-tighter shadow-[0_4px_24px_rgba(255,106,0,0.3)]"
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
