'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Lightbulb, BarChart3, Zap } from 'lucide-react';

export default function ConceptC() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduce-motion: reduce)').matches;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large asymmetric shapes */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 border-2 border-orange-600/20 rotate-45 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(45deg)` }}
        />
        <div
          className="absolute top-1/2 -left-20 w-80 h-80 border border-orange-500/10"
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
        />
      </div>

      {/* Hero: Split-Screen Concept */}
      <section className="relative min-h-screen flex items-center px-0 pt-20 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0 w-full items-center">
          {/* Left: The Problem (dark, serious) */}
          <div className="px-6 sm:px-12 py-12 sm:py-24 order-2 md:order-1">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">The Problem</p>
            <h2 className="font-heading text-5xl sm:text-6xl font-bold leading-tight mb-8">
              Invisible to <span className="text-orange-400">AI</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Your competitors are getting cited by ChatGPT, Claude, and Google AI. Your business? Nowhere to be found.
            </p>
            <div className="space-y-4">
              {['Zero AI citations', 'Losing leads to AI searches', 'Competitors claiming your territory'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-orange-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Solution (bright, optimistic) */}
          <div className="px-6 sm:px-12 py-12 sm:py-24 bg-gradient-to-br from-orange-950/40 via-transparent to-transparent order-1 md:order-2 border-l border-orange-500/20">
            <p className="text-sm text-orange-300 uppercase tracking-widest mb-6">The Solution</p>
            <h2 className="font-heading text-5xl sm:text-6xl font-bold leading-tight mb-8">
              AI Authority <span className="text-orange-400">Status</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Answer Engine Optimization gets your business cited in every AI platform. More visibility. More leads. Real revenue.
            </p>
            <div className="space-y-4">
              {['312+ monthly citations', 'Authority across AI platforms', 'Qualified local leads'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-200">
                  <div className="w-2 h-2 bg-orange-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagonal separator */}
        <div
          className="absolute left-0 md:left-1/2 top-0 h-full w-full md:w-1/2 border-l border-orange-500/20 pointer-events-none"
          style={{ clipPath: 'polygon(100% 0%, 0% 15%, 0% 100%, 100% 85%)' }}
        />
      </section>

      {/* Diagonal divider */}
      <div className="relative h-32 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 200">
          <path
            d="M0,50 Q300,0 600,100 T1200,50 L1200,200 L0,200"
            fill="rgba(255, 107, 53, 0.05)"
            stroke="rgba(255, 107, 53, 0.1)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Why It Works: Three Pillars (Asymmetric layout) */}
      <section className="relative py-32 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Pillar 1: Spans 4 columns, larger */}
            <div className="md:col-span-4 p-12 rounded-lg border-2 border-orange-500/30 bg-orange-500/5 hover:border-orange-500/50 transition-colors">
              <Lightbulb size={40} className="text-orange-400 mb-6" />
              <h3 className="font-heading text-3xl font-bold mb-4">Authority First</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                AI platforms cite sources they trust. We build your authority, not your ads.
              </p>
            </div>

            {/* Pillar 2: Offset, spans 4 columns */}
            <div className="md:col-span-4 md:col-start-5 md:mt-12 p-12 rounded-lg border border-gray-800 hover:border-orange-500/30 transition-colors">
              <BarChart3 size={40} className="text-orange-400 mb-6" />
              <h3 className="font-heading text-3xl font-bold mb-4">Data-Driven</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Every decision backed by real citation data, platform analytics, and ROI metrics.
              </p>
            </div>

            {/* Pillar 3: Right-aligned, spans 4 columns */}
            <div className="md:col-span-4 md:col-start-9 p-12 rounded-lg border border-gray-800 hover:border-orange-500/30 transition-colors">
              <Zap size={40} className="text-orange-400 mb-6" />
              <h3 className="font-heading text-3xl font-bold mb-4">Results Fast</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                First citations within 30 days. Revenue impact by day 90. Guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics with Asymmetric Design */}
      <section className="relative py-32 px-6 sm:px-12 bg-gradient-to-r from-orange-950/20 via-transparent to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Large stat on the left */}
            <div className="md:col-span-2 p-12 rounded-lg border-2 border-orange-500/40 bg-gradient-to-br from-orange-950/40 to-transparent">
              <p className="text-sm text-orange-300 uppercase tracking-widest mb-4">Average Client Growth</p>
              <div className="text-7xl font-bold text-white mb-4">312%</div>
              <p className="text-2xl text-gray-300 mb-6">Increase in AI citations</p>
              <p className="text-gray-400">Within the first year of optimization</p>
            </div>

            {/* Smaller stats on the right */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-gray-800 hover:border-orange-500/30 transition-colors">
                <div className="text-4xl font-bold text-orange-400 mb-2">89%</div>
                <p className="text-sm text-gray-400">Report increased visibility</p>
              </div>
              <div className="p-6 rounded-lg border border-gray-800 hover:border-orange-500/30 transition-colors">
                <div className="text-4xl font-bold text-orange-400 mb-2">4.2x</div>
                <p className="text-sm text-gray-400">Average ROI in 6 months</p>
              </div>
              <div className="p-6 rounded-lg border border-gray-800 hover:border-orange-500/30 transition-colors">
                <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
                <p className="text-sm text-gray-400">Active clients nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid: Offset layout */}
      <section className="relative py-32 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-5xl font-bold mb-6 max-w-3xl">
            Everything You Need to Dominate AI Search
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mb-16">
            From discovery to scaling, we've built the complete platform.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Platform Audits', desc: 'Where you rank in ChatGPT, Claude, Google AI, Perplexity' },
              { title: 'Citation Tracking', desc: 'Real-time monitoring across 50+ AI platforms' },
              { title: 'Content Strategy', desc: 'AI-optimized content that gets cited' },
              { title: 'Authority Building', desc: 'Schema, backlinks, and trust signals' },
              { title: 'Revenue Tracking', desc: 'Actual lead attribution and ROI measurement' },
              { title: 'Competitive Intel', desc: 'See exactly where competitors are winning' }
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-lg border border-gray-800 hover:border-orange-500/30 transition-colors ${
                  idx % 2 === 0 ? '' : 'md:ml-8'
                }`}
              >
                <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA: Large, asymmetric */}
      <section className="relative py-32 px-6 sm:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            {/* Text on left */}
            <div>
              <h2 className="font-heading text-5xl sm:text-6xl font-bold leading-tight mb-8">
                Your AI <span className="text-orange-400">Authority</span> Starts Now
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Join 500+ businesses getting cited by AI. Schedule a 20-minute strategy call to see exactly where your competitors are getting cited—and how to beat them.
              </p>
              <button className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded transition-all duration-300 flex items-center gap-3">
                Get Your AI Authority Audit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Decorative element on right */}
            <div className="hidden md:block relative h-96">
              <div className="absolute inset-0 border-2 border-orange-500/20 rounded-lg" />
              <div className="absolute top-6 left-6 w-24 h-24 border-2 border-orange-500/40" />
              <div className="absolute bottom-6 right-6 w-32 h-32 border border-orange-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Zap size={64} className="text-orange-500/40 mx-auto mb-4" />
                  <p className="text-gray-600 font-semibold">Your AI Breakthrough Awaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-12" />
    </div>
  );
}
