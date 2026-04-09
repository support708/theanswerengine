'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Zap, Shield } from 'lucide-react';

export default function ConceptA() {
  const [metrics, setMetrics] = useState({ citations: 0, visibility: 0, revenue: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Animate metric counters
  useEffect(() => {
    if (prefersReducedMotion) {
      setMetrics({ citations: 312, visibility: 89, revenue: 2400 });
      return;
    }

    let animationFrameId: NodeJS.Timeout;
    let frames = 0;
    const maxFrames = 60;

    const animateMetrics = () => {
      frames++;
      const progress = frames / maxFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setMetrics({
        citations: Math.round(312 * easeOut),
        visibility: Math.round(89 * easeOut),
        revenue: Math.round(2400 * easeOut),
      });

      if (frames < maxFrames) {
        animationFrameId = setTimeout(animateMetrics, 16);
      }
    };

    animateMetrics();
    return () => clearTimeout(animationFrameId);
  }, [prefersReducedMotion]);

  // Track scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] text-white overflow-hidden">
      {/* Background grid effect */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient orbs (subtle, not overwhelming) */}
      <div
        className="fixed top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 sm:px-12"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 right-0 w-80 h-80 border border-orange-500/10 rounded-full"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 mb-8 text-sm text-orange-300">
            <Zap size={16} />
            <span>AI Citation Engine Online</span>
          </div>

          {/* Main headline */}
          <h1 className="font-heading text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Get Cited by <span className="text-orange-400">AI</span> at Scale
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Answer Engine Optimization (AEO) gets your business in front of millions through ChatGPT, Claude, Google AI, and Perplexity. No ads. Pure authority.
          </p>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12 px-4">
            <MetricCard
              label="Citations Tracked"
              value={metrics.citations}
              unit="+"
              icon={<TrendingUp size={20} className="text-orange-400" />}
            />
            <MetricCard
              label="Avg Visibility"
              value={metrics.visibility}
              unit="%"
              icon={<Shield size={20} className="text-orange-400" />}
            />
            <MetricCard
              label="Revenue Impact"
              value={metrics.revenue}
              unit="K"
              icon={<TrendingUp size={20} className="text-orange-400" />}
            />
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded text-lg transition-all duration-300 flex items-center gap-2">
              Get Started Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-gray-700 hover:border-orange-500/50 text-white font-semibold rounded text-lg transition-colors duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-16">How AEO Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Audit',
                description: 'We analyze your online presence and create an AEO strategy tailored to your service area.'
              },
              {
                step: '02',
                title: 'Optimize',
                description: 'Strategic content and schema markup get your business ready for AI platform indexing.'
              },
              {
                step: '03',
                title: 'Monitor',
                description: 'Real-time dashboard tracks citations, visibility, and revenue impact across all AI platforms.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative p-8 rounded border border-gray-800 hover:border-orange-500/30 transition-colors duration-300 group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl font-bold text-orange-500/30 group-hover:text-orange-500/50 transition-colors mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="relative py-24 px-6 sm:px-12 bg-orange-500/5 border-y border-orange-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-4">Why AEO Wins</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            AI platforms cite authoritative sources. We make sure that's you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { metric: '89%', label: 'Avg visibility increase in 90 days' },
              { metric: '312%', label: 'Average citation increase YoY' },
              { metric: '4.2x', label: 'ROI within 6 months' },
              { metric: '24/7', label: 'AI platforms always working for you' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-gray-800 rounded hover:bg-orange-500/5 transition-colors">
                <div className="text-3xl font-bold text-orange-400 mb-2">{item.metric}</div>
                <p className="text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">Ready to Own Your AI Presence?</h2>
          <p className="text-gray-400 text-lg mb-12">
            Join 500+ local service businesses getting cited by AI every single day.
          </p>
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded text-lg transition-colors duration-300">
            Start Your AEO Journey
          </button>
        </div>
      </section>
    </div>
  );
}

function MetricCard({ label, value, unit, icon }: { label: string; value: number; unit: string; icon: React.ReactNode }) {
  return (
    <div className="p-4 sm:p-6 rounded border border-gray-800 hover:border-orange-500/30 transition-colors bg-orange-500/5 backdrop-blur">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500">{label}</span>
        {icon}
      </div>
      <div className="text-2xl sm:text-3xl font-bold">
        {value}{unit}
      </div>
    </div>
  );
}
