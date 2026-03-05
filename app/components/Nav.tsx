'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0F1117]/80 backdrop-blur-xl border-b border-white/[0.08] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <Image
              src="/TheAnswerEngine_white logo only.png"
              alt="The Answer Engine"
              width={160}
              height={48}
              className="h-8 sm:h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span className="text-[15px] font-semibold text-white/90 tracking-tight hidden sm:block">
              The Answer Engine
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              About
            </a>
            <a
              href="/blog"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Blog
            </a>
            <a
              href="/case-studies"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="bg-white text-[#0F1117] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-white/90 transition-all"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/[0.05] pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white font-medium transition-colors px-2 py-2 rounded-lg hover:bg-white/[0.05]"
              >
                Home
              </a>
              <a
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white font-medium transition-colors px-2 py-2 rounded-lg hover:bg-white/[0.05]"
              >
                About
              </a>
              <a
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white font-medium transition-colors px-2 py-2 rounded-lg hover:bg-white/[0.05]"
              >
                Blog
              </a>
              <a
                href="/case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white font-medium transition-colors px-2 py-2 rounded-lg hover:bg-white/[0.05]"
              >
                Case Studies
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white font-medium transition-colors px-2 py-2 rounded-lg hover:bg-white/[0.05]"
              >
                Contact
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-white text-[#0F1117] px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/90 transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
