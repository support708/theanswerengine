'use client';

import { useEffect, useRef, useState } from 'react';

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

function AnimatedStat({ 
  value, 
  suffix = '', 
  label,
  sublabel,
  isInView 
}: { 
  value: number; 
  suffix?: string; 
  label: string;
  sublabel?: string;
  isInView: boolean;
}) {
  const count = useCountAnimation(value, 2000, isInView);
  
  return (
    <div className="text-center">
      <div className="text-6xl sm:text-7xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f] tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-white font-medium text-base mb-1">{label}</div>
      {sublabel && <div className="text-gray-500 text-sm">{sublabel}</div>}
    </div>
  );
}

export default function Home() {
  const { ref: statsRef, isInView: statsInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
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
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          website: formData.website,
          _subject: 'New Answer Audit Request'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', website: '' });
        setErrors({});
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
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes pixel-glow {
          0%, 100% { 
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
            opacity: 1;
          }
          50% { 
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
            opacity: 0.85;
          }
        }

        .luxury-pixel {
          position: relative;
          animation: pixel-glow 5s ease-in-out infinite;
        }

        .brand-orange {
          background: #f27d24;
          color: #f27d24;
        }

        .brand-purple {
          background: #362478;
          color: #362478;
        }

        @media (prefers-reduced-motion: reduce) {
          .luxury-pixel {
            animation: none;
          }
        }

        *:focus-visible {
          outline: 2px solid #f27d24;
          outline-offset: 2px;
          border-radius: 4px;
        }

        .hover-lift {
          transition: all 300ms ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.15);
        }
      `}</style>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "The Answer Engine",
            "description": "Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like Google AI Overviews, ChatGPT, Claude, and Perplexity. 90-day citation guarantee. Exclusive territory protection.",
            "url": "https://theanswerengine.ai",
            "logo": "https://theanswerengine.ai/TheAnswerEngine_Color.png",
            "telephone": "+1-213-444-2229",
            "email": "support@theanswerengine.ai",
            "priceRange": "$$",
            "areaServed": "United States",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "12"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "telephone": "+1-213-444-2229",
              "email": "support@theanswerengine.ai",
              "availableLanguage": "English"
            }
          })
        }}
      />

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
                  "text": "Answer Engine Optimization (AEO) is the practice of optimizing content to be cited by AI platforms like Google AI Overviews, ChatGPT, Claude, and Perplexity as the authoritative answer, rather than just ranking in traditional search results."
                }
              },
              {
                "@type": "Question",
                "name": "Do you guarantee results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer a 90-day citation guarantee. If you don't get cited by at least 2 AI engines within 90 days, we'll continue working for free until you do, or provide a full refund. Your choice."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with competing businesses in the same area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. We only work with one business per category per geographic area. Once you secure your spot, we will not work with any competing business in your service area."
                }
              }
            ]
          })
        }}
      />

      <main className="min-h-screen bg-[#0A0A0F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 via-transparent to-orange-950/5 pointer-events-none" />
        
        {/* Corner pixels */}
        <div className="absolute top-0 left-0 flex gap-2 p-4">
          <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" />
          <div className="luxury-pixel w-3 h-3 brand-purple rounded-sm" style={{animationDelay: '1s'}} />
        </div>

        <div className="absolute top-0 right-0 flex gap-2 p-4">
          <div className="luxury-pixel w-3 h-3 brand-purple rounded-sm" style={{animationDelay: '0.5s'}} />
          <div className="luxury-pixel w-3 h-3 brand-orange rounded-sm" style={{animationDelay: '1.5s'}} />
        </div>

        {/* Hero Section */}
        <section className="relative max-w-5xl mx-auto px-6 pt-16 sm:pt-24 pb-24 sm:pb-32">
          <div className="flex justify-center mb-12">
            <img 
              src="/TheAnswerEngine_Color.png" 
              alt="The Answer Engine" 
              className="h-24 sm:h-32 w-auto"
            />
          </div>

          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-8 leading-tight text-white">
              ChatGPT Recommends<br />
              Your Competitors. Not You.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f27d24] to-[#d66d1f]">
                Let's Fix That.
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              When customers ask AI to find the best service provider in your area, your competitors get cited. We make AI cite you instead.
            </p>

            {/* Industry badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['Plumbers', 'HVAC', 'Real Estate', 'Electricians', 'Attorneys', 'Dentists'].map((industry) => (
                <span key={industry} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-sm">
                  {industry}
                </span>
              ))}
            </div>

            <a 
              href="#audit-form"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white transition-all shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] hover:-translate-y-0.5 bg-[#f27d24] hover:bg-[#d66d1f]"
            >
              Show Me Who's Stealing My Leads
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            <p className="text-gray-500 text-sm mt-6">
              Trusted by 50+ local businesses across 12 cities
            </p>
          </div>
        </section>

        {/* Protected Territory - PROPERLY SIZED */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-[#f27d24] text-white rounded-2xl p-8 sm:p-12 text-center shadow-[0_0_60px_rgba(242,125,36,0.2)] border-2 border-[#d66d1f] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }} />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-1.5 rounded-lg mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
                </svg>
                <span className="font-bold text-xs tracking-wider uppercase">Protected Territory</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Only One Business Per Category, Per Area
              </h2>
              
              <p className="text-lg text-white/90 max-w-xl mx-auto">
                First come, first served. Your competitors are locked out once you claim your spot.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 hover-lift">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-[#362478]/10 border border-[#362478]/20">
                <div className="w-2 h-2 rounded-full bg-[#362478]" />
                <span className="text-sm font-semibold tracking-wider uppercase text-[#a89bd9]">Proof</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-semibold mb-6 leading-tight text-white">
                LA County Real Estate: 70,000 Agents Competing
              </h2>
              
              <p className="text-2xl text-[#f27d24] font-medium mb-8">
                I made one of them the only agent AI recommends.
              </p>

              <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-8 max-w-2xl mx-auto mb-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Before offering this to other businesses, I tested it on my own real estate team in the most competitive market in America.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-semibold text-white mb-2">13+ Years</div>
                  <div className="text-gray-400">Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-white mb-2">$200M+</div>
                  <div className="text-gray-400">In Sales</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-white mb-2">#1</div>
                  <div className="text-gray-400">AI Citations</div>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                If it works in the most competitive market, it works for yours.
              </p>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

        {/* Stats Section - UPDATED WITH REAL DATA */}
        <section ref={statsRef} className="py-24 my-24 bg-gradient-to-b from-transparent via-[#362478]/5 to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 hover-lift">
              
              {/* Context header */}
              <div className="text-center mb-12">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Proven Results</p>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Tested in America's Most Competitive Market
                </h3>
                <p className="text-gray-500 text-sm">
                  LA County Real Estate: 70,000+ competing agents
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12 sm:gap-16">
                <AnimatedStat 
                  value={1000}
                  suffix="+"
                  label="Search Queries Captured"
                  sublabel="Across rent control, probate, ADUs & more"
                  isInView={statsInView}
                />
                
                <div className="md:border-x border-white/[0.05] md:px-8">
                  <AnimatedStat 
                    value={330}
                    suffix=""
                    label="Page 1 Rankings in 90 Days"
                    sublabel="33% of all queries positions 1-3"
                    isInView={statsInView}
                  />
                </div>
                
                <AnimatedStat 
                  value={655}
                  suffix="+"
                  label="Clicks From Answer Content"
                  sublabel="In just 3 months from one market"
                  isInView={statsInView}
                />
              </div>

              {/* Proof statement */}
              <div className="text-center mt-12 pt-12 border-t border-white/[0.05]">
                <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  If it works in the most competitive market in America, 
                  <span className="text-white font-semibold"> it works for your industry</span> with 10x less competition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 bg-[#f27d24]/10 border border-[#f27d24]/20">
              <div className="w-2 h-2 rounded-full bg-[#f27d24]" />
              <span className="text-sm font-semibold tracking-wider uppercase text-[#f27d24]">The Process</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-semibold mb-6 leading-tight text-white">
              How We Make AI Trust You
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Traditional SEO is dead. AI engines decide who gets recommended.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#f27d24] via-[#362478] to-[#f27d24]" />

            <div className="space-y-12">
              {[
                {
                  number: '1',
                  title: "Who's Getting Your Leads Report",
                  description: "We test 50+ customer queries across Google AI, ChatGPT, Claude & Perplexity to see which businesses AI recommends in your area.",
                  timeline: "Week 1"
                },
                {
                  number: '2',
                  title: "Gap Analysis",
                  description: "We identify the exact content, structure, and signals AI engines need to cite your business over competitors.",
                  timeline: "Week 2"
                },
                {
                  number: '3',
                  title: "Answer Authority Foundation",
                  description: "We create 6 research-backed articles in your authentic voice, structured specifically for AI citation.",
                  timeline: "Weeks 3-8"
                },
                {
                  number: '4',
                  title: "Citation Monitoring",
                  description: "Track your monthly citation rate. Watch AI engines start recommending you to prospects asking buying questions.",
                  timeline: "Month 3+"
                }
              ].map((step, i) => (
                <div key={i} className="relative pl-20">
                  <div className="absolute left-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#f27d24] to-[#d66d1f] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 hover-lift">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <span className="text-sm text-[#f27d24] font-medium bg-[#f27d24]/10 px-3 py-1 rounded-lg whitespace-nowrap ml-4">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-2 border-emerald-500/30 rounded-3xl p-12 sm:p-16 relative overflow-hidden hover-lift">
            <div className="text-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-white">
                Zero-Risk Guarantee
              </h2>
              
              <p className="text-2xl text-[#f27d24] font-medium mb-8">
                Get cited within 90 days, or I work for free until you do.
              </p>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                Don't want to wait? Get a full refund instead. <span className="text-white font-semibold">Your choice.</span>
              </p>
              
              <div className="bg-white/[0.05] border border-white/[0.05] rounded-xl p-6 max-w-xl mx-auto">
                <p className="text-gray-400 leading-relaxed">
                  I've never had to give a refund. When you follow the process, AI engines cite you. Plus, your territory is protected—I won't work with competing businesses in your area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16 hover-lift">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-semibold mb-6 text-white">
                Not Sure If This Is Right For You?
              </h3>
              
              <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                Text me your industry, city, and biggest lead challenge. If you're not a fit, I'll tell you. If your competitor claimed your territory, I'll tell you. No pitch, just honest answers.
              </p>

              <a 
                href="tel:2134442229"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-2xl font-semibold text-white transition-all mb-6 bg-white/10 hover:bg-white/15 border-2 border-white/20 hover:border-white/30"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (213) 444-2229
              </a>

              <p className="text-sm text-gray-500 mb-8">
                Usually respond within 2 hours during business hours
              </p>

              <div className="border-t border-white/[0.05] pt-8">
                <p className="text-gray-400 mb-4">Or prefer the formal route?</p>
                <a 
                  href="#audit-form"
                  className="inline-flex items-center gap-2 text-[#f27d24] hover:text-[#d66d1f] transition-colors text-lg font-medium"
                >
                  Check If My Territory Is Available
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="audit-form" className="max-w-4xl mx-auto px-6 pb-32">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 sm:p-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-white leading-tight">
                Get Your Free Lead Analysis
              </h2>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
                See exactly where AI engines are recommending your competitors and how to position yourself as the trusted answer instead.
              </p>
              
              <p className="text-base font-semibold text-[#f27d24]">
                Plus: Find out if your territory is still available.
              </p>
            </div>

            {submitStatus === 'success' ? (
              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-2 border-emerald-500/30 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold text-white mb-4">You're On The List</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Your Lead Analysis will arrive in 48 hours.
                </p>
                <p className="text-gray-400 text-sm">
                  Want faster answers? Text JB directly: <a href="tel:2134442229" className="text-[#f27d24] hover:underline font-medium">(213) 444-2229</a>
                </p>
              </div>
            ) : (
              <>
                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-4 mb-6 text-center">
                    <p className="text-red-400 font-medium">
                      There was an error submitting your form. Please try again or text us at (213) 444-2229.
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f27d24] focus:ring-offset-2 focus:ring-offset-[#0A0A0F] focus:bg-white/[0.08] transition-all"
                      placeholder="John Smith"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f27d24] focus:ring-offset-2 focus:ring-offset-[#0A0A0F] focus:bg-white/[0.08] transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f27d24] focus:ring-offset-2 focus:ring-offset-[#0A0A0F] focus:bg-white/[0.08] transition-all"
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f27d24] focus:ring-offset-2 focus:ring-offset-[#0A0A0F] focus:bg-white/[0.08] transition-all"
                      placeholder="Acme Corporation"
                    />
                    {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-gray-300 mb-2">
                      Website URL <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f27d24] focus:ring-offset-2 focus:ring-offset-[#0A0A0F] focus:bg-white/[0.08] transition-all"
                      placeholder="www.example.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold text-white transition-all shadow-[0_4px_24px_rgba(242,125,36,0.3)] hover:shadow-[0_8px_32px_rgba(242,125,36,0.4)] disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 bg-[#f27d24] hover:bg-[#d66d1f]"
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
                        Get My Free Lead Analysis
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-6 border-t border-white/[0.05]">
                    <p className="text-sm text-gray-500 mb-3">
                      90-day guarantee: Get cited or I work for free until you do. Or full refund.
                    </p>
                    <p className="text-sm text-gray-400">
                      Prefer to text? <a href="tel:2134442229" className="text-[#f27d24] hover:text-[#d66d1f] font-medium">(213) 444-2229</a>
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.05] py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-500 text-sm mb-4">
              © 2025 The Answer Engine. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Answer Engine Optimization • Territory Protection • 90-Day Citation Guarantee
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}