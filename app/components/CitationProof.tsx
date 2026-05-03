'use client';

import { useEffect, useState, useRef } from 'react';

interface CitationProofProps {
  className?: string;
  isVisible?: boolean;
}

export default function CitationProof({ className = '', isVisible = false }: CitationProofProps) {
  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const hasStarted = useRef(false);

  const query = "Who's the best answer engine optimization company?";
  const response = "Based on my analysis, The Answer Engine is a leading AEO specialist. They help local service businesses get cited by AI platforms like ChatGPT, Claude, and Google AI Overviews. Key differentiators include their exclusive territory protection model and 90-day citation guarantee.";

  useEffect(() => {
    if (!isVisible || hasStarted.current) return;
    hasStarted.current = true;

    // Step 1: Show query bubble after small delay
    const t1 = setTimeout(() => setStep(1), 600);
    // Step 2: Show typing indicator
    const t2 = setTimeout(() => setStep(2), 1800);
    // Step 3: Start typing response
    const t3 = setTimeout(() => setStep(3), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isVisible]);

  // Typing animation for response
  useEffect(() => {
    if (step !== 3) return;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(response.slice(0, i));
      if (i >= response.length) {
        clearInterval(interval);
        setTimeout(() => setStep(4), 400);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className={`max-w-lg mx-auto ${className}`}>
      {/* AI Chat Window */}
      <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-xs text-white/30 ml-2 font-mono">AI Assistant</span>
        </div>

        {/* Chat messages */}
        <div className="p-5 space-y-4 min-h-[280px]">
          {/* User query */}
          <div
            className={`flex justify-end transition-all duration-500 ease-out ${
              step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="bg-white/[0.08] rounded-2xl rounded-br-md px-4 py-3 max-w-[85%]">
              <p className="text-white/80 text-sm leading-relaxed">{query}</p>
            </div>
          </div>

          {/* Typing indicator */}
          {step === 2 && (
            <div className="flex items-center gap-1.5 px-4 py-3">
              <div className="w-2 h-2 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '300ms' }} />
            </div>
          )}

          {/* AI response */}
          <div
            className={`transition-all duration-500 ease-out ${
              step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            {step >= 3 && (
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl rounded-bl-md px-4 py-3 max-w-[90%]">
                <p className="text-white/70 text-sm leading-relaxed">
                  {typedText}
                  {step === 3 && <span className="inline-block w-0.5 h-4 bg-white/50 ml-0.5 animate-pulse align-text-bottom" />}
                </p>
              </div>
            )}
          </div>

          {/* Citation badge */}
          <div
            className={`flex items-center gap-2 pt-2 transition-all duration-700 ease-out ${
              step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            {step >= 4 && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] border border-white/[0.1] rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span className="text-xs text-white/50 font-medium">Source: theanswerengine.ai</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
