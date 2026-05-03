'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Map routes to nav link labels
  const isActive = (paths: string[]) => paths.some(p =>
    p === '/' ? pathname === '/' : pathname.startsWith(p)
  );

  const navLinks = [
    { label: 'HOME', paths: ['/'], active: pathname === '/' },
    { label: 'ABOUT', paths: ['/about'], active: isActive(['/about']) },
    { label: 'SERVICES', paths: ['/services'], active: isActive(['/services']) },
    { label: 'INDUSTRIES', paths: ['/industries/real-estate'], active: isActive(['/industries']) },
    { label: 'CASE STUDY', paths: ['/case-studies'], active: isActive(['/case-studies']) },
    { label: 'BLOG', paths: ['/blog'], active: isActive(['/blog']) },
    { label: 'CONTACT', paths: ['/contact'], active: isActive(['/contact']) },
  ];

  return (
    <nav className="fixed top-0 w-full border-b border-black/10 bg-[#FAF8F2] z-50">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-none">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/TheAnswerEngine_white logo only.png"
            alt="The Answer Engine"
            width={32}
            height={32}
            className="h-7 w-auto opacity-90"
          />
          <span className="text-xl font-black tracking-tighter text-[#F27D24] uppercase font-headline">
            THE ANSWER ENGINE
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 font-headline uppercase tracking-tighter font-bold text-sm">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.paths[0]}
              className={
                link.active
                  ? 'text-[#F27D24] border-b-2 border-[#F27D24] pb-1'
                  : 'text-black/60 hover:text-white transition-colors'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="/#territory-check"
            className="hidden lg:block bg-[#F27D24] text-black font-black px-5 py-2 tracking-tighter hover:translate-y-[2px] transition-transform font-headline text-sm"
          >
            CHECK TERRITORY
          </a>

          {/* Mobile/tablet hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-black/60 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-black/10 bg-[#FAF8F2]">
          <div className="flex flex-col py-4">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.paths[0]}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-3 font-headline font-bold uppercase tracking-tighter ${
                  link.active
                    ? 'text-[#F27D24] border-l-4 border-[#F27D24]'
                    : 'text-black/60 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                } transition-colors`}
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 pt-4">
              <a
                href="/#territory-check"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-[#F27D24] text-black font-black px-6 py-3 tracking-tighter text-center font-headline"
              >
                CHECK TERRITORY
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
