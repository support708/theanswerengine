import type { Metadata } from "next";
import { Archivo_Black, Inter_Tight } from "next/font/google";
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Nav from './components/Nav';
import MetaPixel from './components/MetaPixel';
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: 'The Answer Engine | AEO for Local Businesses — ChatGPT, Claude, Google AI, Perplexity',
    template: '%s | The Answer Engine'
  },
  description: 'Answer Engine Optimization for local service businesses. We built the playbook on our own site — 1.14M+ monthly impressions with citations across 4 AI platforms. One client per market, 90-day guarantee.',
  alternates: {
    canonical: 'https://www.theanswerengine.ai'
  },
  openGraph: {
    siteName: 'The Answer Engine',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.theanswerengine.ai',
    title: 'The Answer Engine | AEO for Local Businesses',
    description: 'Answer Engine Optimization for local service businesses. 1.14M+ monthly impressions, citations across 4 AI platforms. One client per market, 90-day guarantee.',
    images: [
      {
        url: 'https://www.theanswerengine.ai/og-default.png',
        width: 1200,
        height: 630,
        alt: 'The Answer Engine — AEO for Local Businesses',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@theanswerengine',
    title: 'The Answer Engine | AEO for Local Businesses',
    description: 'Answer Engine Optimization for local service businesses. 1.14M+ monthly impressions, citations across 4 AI platforms. 90-day guarantee.',
    images: ['https://www.theanswerengine.ai/og-default.png'],
  },
};

const archivoBlack = Archivo_Black({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400"],
});

const interTight = Inter_Tight({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links for all platforms */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FAF8F2" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://www.theanswerengine.ai/#organization",
              "name": "The Answer Engine",
              "legalName": "The Answer Engine LLC",
              "description": "Answer Engine Optimization specialists helping local service businesses get cited by AI platforms like ChatGPT, Claude, Google AI Overviews, and Perplexity. Founded 2025. One client per market, 90-day citation guarantee.",
              "url": "https://www.theanswerengine.ai",
              "foundingDate": "2025",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png",
                "width": 400,
                "height": 400
              },
              "image": "https://www.theanswerengine.ai/og-default.png",
              "telephone": "+1-213-444-2229",
              "email": "support@theanswerengine.ai",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "areaServed": "US",
              "serviceType": "Answer Engine Optimization",
              "priceRange": "$$$$",
              "founder": {
                "@type": "Person",
                "@id": "https://www.theanswerengine.ai/about#justin-borges",
                "name": "Justin Borges",
                "jobTitle": "Founder & AEO Strategist",
                "url": "https://www.theanswerengine.ai/about",
                "image": "https://www.theanswerengine.ai/justin-borges.webp",
                "sameAs": [
                  "https://www.linkedin.com/in/justinborges",
                  "https://lametrohomefinder.com"
                ],
                "knowsAbout": ["Answer Engine Optimization", "AI Search", "Content Strategy", "Real Estate", "Citation Surface", "AEO"]
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-213-444-2229",
                  "contactType": "sales",
                  "email": "support@theanswerengine.ai",
                  "availableLanguage": "English",
                  "hoursAvailable": "Mo-Fr 09:00-18:00"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/theanswerengine",
                "https://instagram.com/theanswerengine"
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "The Answer Engine",
              "url": "https://www.theanswerengine.ai",
              "description": "Get your business cited by AI platforms like ChatGPT, Claude, Google AI Overviews, and Perplexity. Answer Engine Optimization for local service businesses.",
              "publisher": {
                "@type": "Organization",
                "name": "The Answer Engine",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.theanswerengine.ai/TheAnswerEngine_white%20logo%20only.png",
                  "width": 400,
                  "height": 400
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.theanswerengine.ai/blog?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${archivoBlack.variable} ${interTight.variable} antialiased bg-[#FAF8F2]`}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#0F1117] focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <Nav />

        <main id="main-content">
          {children}
        </main>

        <section id="contact" className="bg-[#FFF] py-32 px-6 lg:px-24 border-t border-[#0A0A0A]/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mb-4">Get in Touch // Let&apos;s Talk</span>
              <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-[#0A0A0A]">
                GET IN <span className="text-[#F27D24]">TOUCH</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-0 border border-[#0A0A0A]/10 mb-16">
              <div className="p-8 border-b md:border-b-0 md:border-r border-[#0A0A0A]/10 bg-[#F4F0E8] border-l-4 border-l-[#F27D24]">
                <span className="font-mono text-[10px] text-[#0A0A0A]/40 tracking-widest uppercase block mb-3">CALL US</span>
                <a href="tel:+12134442229" className="text-2xl font-headline font-bold text-[#0A0A0A] hover:text-[#F27D24] transition-colors">
                  (213) 444-2229
                </a>
              </div>
              <div className="p-8 border-b md:border-b-0 md:border-r border-[#0A0A0A]/10 bg-[#F4F0E8]">
                <span className="font-mono text-[10px] text-[#0A0A0A]/40 tracking-widest uppercase block mb-3">EMAIL</span>
                <a href="mailto:support@theanswerengine.ai" className="text-lg font-headline font-bold text-[#0A0A0A] hover:text-[#F27D24] transition-colors break-all">
                  support@theanswerengine.ai
                </a>
              </div>
              <div className="p-8 bg-[#F4F0E8]">
                <span className="font-mono text-[10px] text-[#0A0A0A]/40 tracking-widest uppercase block mb-3">BUSINESS HOURS</span>
                <span className="text-lg font-headline font-bold text-[#0A0A0A]">MON-FRI 0900-1800 PT</span>
                <span className="font-mono text-[10px] text-[#F27D24] tracking-widest uppercase block mt-2">AVG RESPONSE: 2.4 HOURS</span>
              </div>
            </div>

            <div className="bg-[#F4F0E8] border border-[#0A0A0A]/10 border-l-4 border-l-[#F27D24] p-12 sm:p-16">
              <h3 className="font-headline font-black text-2xl sm:text-3xl tracking-tighter uppercase text-[#0A0A0A] mb-6">
                FREE 30-MINUTE STRATEGY CALL
              </h3>
              <div className="space-y-4 mb-10 max-w-lg">
                {[
                  "Identify which competitor owns your AI territory",
                  "Map your citation blind spots across all platforms",
                  "Receive a 90-day dominance roadmap"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[#F27D24] text-sm">&#10003;</span>
                    <span className="text-[#0A0A0A]/60 text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+12134442229"
                  className="inline-flex items-center justify-center bg-[#F27D24] text-white font-black px-10 py-4 tracking-tighter transform -translate-x-1 -translate-y-1 hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[4px_4px_0_rgba(10,10,10,0.2)] hover:shadow-[3px_3px_0_rgba(10,10,10,0.15)] transition-all font-headline uppercase"
                >
                  SCHEDULE A CALL
                </a>
                <a
                  href="mailto:support@theanswerengine.ai"
                  className="inline-flex items-center justify-center border-2 border-[#0A0A0A]/20 text-[#0A0A0A]/60 font-bold px-10 py-4 tracking-tighter transform -translate-x-1 -translate-y-1 shadow-[4px_4px_0_rgba(10,10,10,0.1)] hover:shadow-[3px_3px_0_rgba(10,10,10,0.15)] hover:bg-white transition-all font-headline uppercase"
                >
                  EMAIL US
                </a>
              </div>
              <span className="font-mono text-[10px] text-[#0A0A0A]/20 tracking-widest uppercase block mt-6">NOW ACCEPTING NEW CLIENTS</span>
            </div>
          </div>
        </section>

        <footer className="w-full border-t border-[#0A0A0A]/10 bg-[#FFF] relative overflow-hidden">
          {/* Top section — nav columns + brand */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand column */}
            <div className="md:col-span-1">
              <div className="font-headline font-black text-3xl tracking-tighter uppercase leading-none text-[#0A0A0A] mb-4">
                THE<br />ANSWER<br /><span className="text-[#F27D24]">ENGINE.</span>
              </div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#0A0A0A]/40 leading-relaxed space-y-1">
                <div>Los Angeles, CA</div>
                <div>(213) 444-2229</div>
                <div className="break-all">support@theanswerengine.ai</div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#F27D24]">
                <span className="w-1.5 h-1.5 bg-[#F27D24] animate-pulse" />
                Accepting new operators
              </div>
            </div>

            {/* The System */}
            <div>
              <h4 className="font-headline font-black text-xs tracking-widest uppercase text-[#0A0A0A] mb-5">The System</h4>
              <ul className="space-y-3">
                <li><a href="/services" className="font-mono text-[11px] tracking-widest uppercase text-[#0A0A0A]/50 hover:text-[#F27D24] transition-colors">Services</a></li>
                <li><a href="/services/answer-engine-audit" className="font-mono text-[11px] tracking-widest uppercase text-[#0A0A0A]/50 hover:text-[#F27D24] transition-colors">Free Audit</a></li>
                <li><a href="/case-studies" className="font-mono text-[11px] tracking-widest uppercase text-[#0A0A0A]/50 hover:text-[#F27D24] transition-colors">Case Studies</a></li>
                <li><a href="/territory-check" className="font-mono text-[11px] tracking-widest uppercase text-[#0A0A0A]/50 hover:text-[#F27D24] transition-colors">Territory Check</a></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-headline font-black text-xs tracking-widest uppercase text-[#0A0A0A] mb-5">Industries</h4>
              <ul className="space-y-3">
                <li><a href="/industries/real-estate" className="font-mono text-[11px] tracking-widest uppercase text-[#0A0A0A]/50 hover:text-[#F27D24] transition-colors">Real Estate</a></li>
                <li><span className="font-mono text-[11px] tracking-widest uppercase text-[#0A0A0A]/30">Property Mgmt</span></li>
                <li><span className="font-mono text-[11px] tracking-widest uppercase text-[#0A0A0A]/30">Builder Financial</span></li>
                <li><a href="/territory-check" className="font-mono text-[11px] tracking-widest uppercase text-[#0A0A0A]/50 hover:text-[#F27D24] transition-colors">Other · by Territory</a></li>
              </ul>
            </div>

            {/* Intel */}
            <div>
              <h4 className="font-headline font-black text-xs tracking-widest uppercase text-[#0A0A0A] mb-5">Intel</h4>
              <ul className="space-y-3">
                <li><a href="/blog" className="font-mono text-[11px] tracking-widest uppercase text-[#0A0A0A]/50 hover:text-[#F27D24] transition-colors">Blog</a></li>
                <li><a href="/blindspot" className="font-mono text-[11px] tracking-widest uppercase text-[#0A0A0A]/50 hover:text-[#F27D24] transition-colors">Blind Spot Report</a></li>
                <li><a href="/about" className="font-mono text-[11px] tracking-widest uppercase text-[#0A0A0A]/50 hover:text-[#F27D24] transition-colors">About</a></li>
                <li><a href="/contact" className="font-mono text-[11px] tracking-widest uppercase text-[#0A0A0A]/50 hover:text-[#F27D24] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#0A0A0A]/5 px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#0A0A0A]/40">
              &copy;{new Date().getFullYear()} THE ANSWER ENGINE // AEO
            </div>
            <div className="flex gap-6">
              <a className="font-mono text-[10px] uppercase tracking-widest text-[#0A0A0A]/40 hover:text-[#F27D24] transition-colors" href="/privacy">Privacy</a>
              <a className="font-mono text-[10px] uppercase tracking-widest text-[#0A0A0A]/40 hover:text-[#F27D24] transition-colors" href="/terms">Terms</a>
              <a className="font-mono text-[10px] uppercase tracking-widest text-[#0A0A0A]/40 hover:text-[#F27D24] transition-colors" href="/llms.txt">llms.txt</a>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 h-1 w-32 bg-[#F27D24]" />
        </footer>
        
        <MetaPixel />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}