'use client';

import { useEffect, useRef, useState } from 'react';

// Counter animation hook
function useCountAnimation(end: number, duration: number = 2000, shouldAnimate: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldAnimate]);

  return count;
}

// Intersection Observer hook
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isInView) {
        setIsInView(true);
      }
    }, { threshold: 0.3, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInView, options]);

  return { ref, isInView };
}

// Animated Stat Component - SLEEKER VERSION
function AnimatedStat({ 
  value, 
  suffix = '', 
  label, 
  gradient,
  isInView 
}: { 
  value: number; 
  suffix?: string; 
  label: string; 
  gradient: string;
  isInView: boolean;
}) {
  const count = useCountAnimation(value, 2000, isInView);
  
  return (
    <div className="text-center">
      <div className={`text-6xl sm:text-7xl font-extralight mb-4 text-transparent bg-clip-text bg-gradient-to-r ${gradient} tracking-tight`}>
        {count}{suffix}
      </div>
      <div className="text-gray-400 font-light text-sm tracking-wide uppercase">{label}</div>
    </div>
  );
}

export default function Home() {
  const { ref: statsRef, isInView: statsInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://formspree.io/f/xqagkqwl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          website: formData.website,
          _subject: 'New Answer Audit Request'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', website: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "The Answer Engine",
            "description": "Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like ChatGPT, Claude, and Google AI Overviews",
            "url": "https://theanswerengine.ai",
            "telephone": "+1-213-444-2229",
            "email": "support@theanswerengine.ai",
            "priceRange": "$$",
            "areaServed": "United States",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png"
          })
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "The Answer Engine - Answer Engine Optimization (AEO)",
            "description": "Get your business cited by AI platforms like ChatGPT, Claude, and Google AI Overviews. Stop competing for rankings. Start being THE answer.",
            "url": "https://theanswerengine.ai",
            "inLanguage": "en-US"
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Answer Engine Optimization",
            "description": "Professional Answer Engine Optimization service that gets local businesses cited by AI platforms instead of their competitors",
            "provider": {
              "@type": "Organization",
              "name": "The Answer Engine"
            },
            "serviceType": "Answer Engine Optimization",
            "areaServed": "United States"
          })
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Answer Engine Optimization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Answer Engine Optimization (AEO) is the practice of optimizing content to be cited by AI platforms like ChatGPT, Claude, Google AI Overviews, and Perplexity as the authoritative answer, rather than just ranking in traditional search results."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to see results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most businesses see their first AI citations within 60-90 days of implementation. Full AI citation dominance across multiple platforms typically takes 3-6 months."
                }
              },
              {
                "@type": "Question",
                "name": "What's included in the Answer Authority Foundation Package?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The package includes comprehensive content optimization, technical implementation, multi-platform AI citation testing, and a 90-day performance guarantee."
                }
              }
            ]
          })
        }}
      />

      <main className="min-h-screen bg-[#0A0A0F] relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-orange-950/10 pointer-events-none" />
        
        {/* Simple pixel accent - top corners */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500/40" />
        <div className="absolute top-0 left-2 w-2 h-2 bg-purple-500/40" />

        {/* Hero Section */}
        <section className="relative max-w-6xl mx-auto px-6 pt-20 sm:pt-32 pb-32 sm:pb-40">
          {/* Animated Logo */}
          <div className="flex justify-center mb-16">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="h-32 sm:h-40 w-auto opacity-90"
              poster="/TheAnswerEngine_Color_just_logo.png"
            >
              <source src="/Logo_Animation_Generation.mp4" type="video/mp4" />
              <img 
                src="/TheAnswerEngine_Color_just_logo.png" 
                alt="The Answer Engine" 
                className="h-32 sm:h-40 opacity-90"
              />
            </video>
          </div>

          {/* Simple pixel divider */}
          <div className="flex justify-center gap-2 mb-12">
            <div className="w-1.5 h-1.5 bg-orange-500" />
            <div className="w-1.5 h-1.5 bg-purple-500" />
            <div className="w-1.5 h-1.5 bg-orange-500" />
          </div>

          {/* Hero Content */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 leading-tight text-gray-100">
              Get Your Business<br />
              <span className="font-normal text-white">Cited by AI</span>
            </h1>
            
            <p className="text-2xl sm:text-3xl text-orange-400 mb-12 font-light">
              Stop Competing for Rankings. Start Being THE Answer.
            </p>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              While your competitors fight for page 1 rankings, you become the authoritative answer that AI recommends.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#audit-form"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
              >
                Get Your Free Answer Audit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              
              <a 
                href="/case-studies"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-white/[0.05] text-gray-300 hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all"
              >
                View Case Studies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section with Animation - SLEEKER VERSION */}
        <section ref={statsRef} className="max-w-6xl mx-auto px-6 pb-32">
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-12 sm:p-16">
            <div className="grid md:grid-cols-3 gap-12 sm:gap-16">
              <AnimatedStat 
                value={90}
                suffix=""
                label="Days to First AI Citations"
                gradient="from-orange-400 to-orange-500"
                isInView={statsInView}
              />
              
              <div className="text-center md:border-x border-white/[0.05] md:px-8">
                <AnimatedStat 
                  value={70}
                  suffix="%"
                  label="Lower Cost Per Lead"
                  gradient="from-purple-400 to-purple-500"
                  isInView={statsInView}
                />
              </div>
              
              <AnimatedStat 
                value={100}
                suffix="%"
                label="Client Success Rate"
                gradient="from-orange-400 to-orange-500"
                isInView={statsInView}
              />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-1 mb-32 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>
        </div>

        {/* Problem Section */}
        <section className="max-w-6xl mx-auto px-6 pb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span className="text-sm font-medium tracking-wider uppercase text-purple-400">The Problem</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight text-gray-100">
              The Search Landscape Has<br />
              <span className="font-normal text-white">Fundamentally Changed</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Google AI Overviews, ChatGPT, Claude, and Perplexity now answer questions directly—above all traditional rankings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Rankings Don't Matter",
                description: "Even #1 rankings get zero clicks when AI provides the answer first. Traditional SEO is no longer enough.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                gradient: "from-purple-500 to-purple-600"
              },
              {
                title: "AI Citations Win",
                description: "AI platforms cite 2-3 sources maximum. You're either the recommended answer or you're invisible.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                gradient: "from-orange-500 to-orange-600"
              },
              {
                title: "Early Advantage",
                description: "Most competitors haven't adapted yet. The businesses that move now dominate their markets.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                gradient: "from-purple-500 to-purple-600"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 hover:border-white/[0.08] transition-colors">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto bg-gradient-to-br ${item.gradient}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3 text-center">{item.title}</h3>
                <p className="text-gray-400 text-center leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-1 mb-32 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <section className="max-w-6xl mx-auto px-6 pb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wider uppercase text-orange-400">The Solution</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight text-gray-100">
              We Make AI Platforms<br />
              <span className="font-normal text-white">Trust You</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Through proven methodologies developed over two years of testing, we position your business as the authority AI platforms cite—not your competitors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Expertise Extraction",
                description: "We capture and structure your authentic expertise in formats AI platforms recognize and trust.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                gradient: "from-orange-500 to-orange-600"
              },
              {
                title: "Technical Implementation",
                description: "Specialized technical infrastructure that makes your content parseable and verifiable by AI systems.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                gradient: "from-purple-500 to-purple-600"
              },
              {
                title: "Multi-Platform Verification",
                description: "Systematic testing across ChatGPT, Claude, Google AI Overviews, and Perplexity until you dominate.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                gradient: "from-orange-500 to-orange-600"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 hover:border-white/[0.08] transition-colors">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto bg-gradient-to-br ${item.gradient} text-white`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3 text-center">{item.title}</h3>
                <p className="text-gray-400 text-center leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-1 mb-32 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>
        </div>

        {/* Package Section - No Price */}
        <section className="max-w-4xl mx-auto px-6 pb-32">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                <span className="text-sm font-medium tracking-wider uppercase text-orange-400">Our Package</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-gray-100 leading-tight">
                The <span className="font-normal text-white">Answer Authority Foundation</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
                Everything you need to dominate AI citations in your market.
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {[
                "Complete content optimization for AI platforms",
                "Technical implementation and schema markup",
                "Multi-platform AI citation verification",
                "90-day performance guarantee"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.03] hover:border-white/[0.06] transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/20 mt-0.5">
                    <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-base leading-relaxed">{text}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="#audit-form"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
              >
                Get Your Free Answer Audit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-1 mb-32 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-px h-px bg-gray-600" />
            ))}
          </div>
        </div>

        {/* Free Answer Audit Form Section */}
        <section id="audit-form" className="max-w-4xl mx-auto px-6 pb-32">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center gap-1.5 mb-8">
                <div className="w-1 h-1 bg-orange-500/60" />
                <div className="w-1 h-1 bg-purple-500/60" />
                <div className="w-1 h-1 bg-orange-500/60" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-gray-100 leading-tight">
                Get Your Free<br />
                <span className="font-normal text-white">Answer Audit</span>
              </h2>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Discover exactly where you rank against competitors when AI platforms answer questions about your services. See which competitors are getting cited instead of you.
              </p>
            </div>

            {/* Form */}
            {submitStatus === 'success' ? (
              <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-white mb-3">Thank You!</h3>
                <p className="text-gray-300 leading-relaxed">
                  We've received your request. Our team will analyze your AI citation performance and send you a detailed Answer Audit within 24-48 hours.
                </p>
              </div>
            ) : (
              <>
                {submitStatus === 'error' && (
                  <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-2xl p-4 mb-6 text-center">
                    <p className="text-red-400">There was an error submitting your form. Please try again.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Company Name Field */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  {/* Website Field */}
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                      Website URL *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all"
                      placeholder="https://www.example.com"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get My Free Answer Audit
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    We'll analyze your AI citation performance and show you exactly where competitors are winning.
                  </p>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}