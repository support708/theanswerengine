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

    const t1 = setTimeout(() => setStep(1), 600);
    const t2 = setTimeout(() => setStep(2), 1800);
    const t3 = setTimeout(() => setStep(3), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isVisible]);

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
      <div className="bg-white border border-black/10 rounded-2xl overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-black/10 bg-[#F4F0E8]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-black/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-black/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-black/20" />
          </div>
          <span className="text-xs text-black/30 ml-2 font-mono">AI Assistant</span>
        </div>

        {/* Chat messages */}
        <div className="p-5 space-y-4 min-h-[280px]">
          {/* User query */}
          <div
            className={`flex justify-end transition-all duration-500 ease-out ${
              step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="bg-[#F27D24]/15 border border-[#F27D24]/25 rounded-2xl rounded-br-md px-4 py-3 max-w-[85%]">
              <p className="text-[#0A0A0A] text-sm leading-relaxed">{query}</p>
            </div>
          </div>

          {/* Typing indicator */}
          {step === 2 && (
            <div className="flex items-center gap-1.5 px-4 py-3">
              <div className="w-2 h-2 rounded-full bg-black/25 animate-pulse" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 rounded-full bg-black/25 animate-pulse" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 rounded-full bg-black/25 animate-pulse" style={{ animationDelay: '300ms' }} />
            </div>
          )}

          {/* AI response */}
          <div
            className={`transition-all duration-500 ease-out ${
              step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            {step >= 3 && (
              <div className="bg-[#FAF8F2] border border-black/10 rounded-2xl rounded-bl-md px-4 py-3 max-w-[90%]">
                <p className="text-black/70 text-sm leading-relaxed">
                  {typedText}
                  {step === 3 && <span className="inline-block w-0.5 h-4 bg-[#F27D24] ml-0.5 animate-pulse align-text-bottom" />}
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F4F0E8] border border-black/10 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F27D24]" />
                <span className="text-xs text-black/50 font-medium">Source: theanswerengine.ai</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
