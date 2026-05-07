/**
 * One-shot script: apply AE brand treatment to 3 blog articles.
 * Run: node scripts/fix-blog-branding.js
 */
const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..');

// ─── helpers ────────────────────────────────────────────────────────────────

function patch(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = 0;
  for (const [from, to] of replacements) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed++;
    } else {
      console.warn(`  MISS: "${from.substring(0, 60)}..."`);
    }
  }
  fs.writeFileSync(filePath, content);
  console.log(`✓ ${path.relative(base, filePath)} — ${changed}/${replacements.length} replacements`);
}

// ─── Article 2: what-is-an-ai-citation ──────────────────────────────────────

patch(path.join(base, 'app/blog/what-is-an-ai-citation/page.tsx'), [
  // Fix background
  [
    `      <main\n        className="min-h-screen"\n        style={{ backgroundColor: '#0F1117', color: 'white' }}\n      >`,
    `      <main className="bg-[#131313] min-h-screen">`,
  ],
  // Fix H1
  [
    `className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-plus-jakarta">\n                What Is an AI Citation?`,
    `className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter text-[#e5e2e1] leading-none mb-6">\n                What Is an AI Citation?`,
  ],
  // Fix category label (pill style → Courier mono)
  [
    `<p className="inline-block text-sm font-medium text-orange-400 mb-4 border border-orange-500/30 rounded-full px-4 py-1">\n                AEO Education\n              </p>`,
    `<p className="font-mono text-[11px] tracking-widest uppercase text-[#F27D24] mb-4">AEO Fundamentals · The Answer Engine</p>`,
  ],
  // Fix meta row
  [
    `              <div className="flex items-center gap-4 text-sm text-gray-400">\n                <time dateTime={publishDate}>May 7, 2026</time>\n                <span>-</span>\n                <span>11 min read</span>\n                <span>-</span>\n                <span>Justin Borges</span>\n              </div>`,
    `              <div className="ae-article-meta">\n                <time dateTime={publishDate}>May 7, 2026</time>\n                <span>·</span>\n                <span>11 min read</span>\n                <span>·</span>\n                <span>Justin Borges</span>\n              </div>`,
  ],
  // Replace gradient hero wrapper with AE dark hero
  [
    `          <div\n            className="relative overflow-hidden rounded-2xl mb-12"\n            style={{\n              background:\n                'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',\n            }}\n          >`,
    `          <div className="ae-article-hero rounded-xl mb-8 overflow-hidden">`,
  ],
  // Add ae-article-body to article wrapper (replace all occurrences of prose wrapper)
  [
    `className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">`,
    `className="ae-article-body prose prose-invert prose-lg max-w-none prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">`,
  ],
]);

// ─── Article 3: how-topical-authority-works-ai-search ───────────────────────

patch(path.join(base, 'app/blog/how-topical-authority-works-ai-search/page.tsx'), [
  // Fix H1
  [
    `className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight">\n              How Does Topical Authority Work in AI Search?`,
    `className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter text-[#e5e2e1] leading-none mb-6">\n              How Does Topical Authority Work in AI Search?`,
  ],
  // Fix category label
  [
    `<span className="text-sm font-semibold tracking-wider uppercase text-[#F27D24]">AEO Education</span>\n              <span className="text-gray-600">|</span>\n              <span className="text-sm text-gray-400">The Answer Engine</span>`,
    `<span className="font-mono text-[11px] tracking-widest uppercase text-[#F27D24]">AEO Strategy · The Answer Engine</span>`,
  ],
  // Fix the wrapper div around the category label
  [
    `<div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">`,
    `<div className="mb-4">`,
  ],
  // Add ae-article-hero to header
  [
    `          <header className="mb-12">`,
    `          <header className="ae-article-hero mb-12 p-8 rounded-xl">`,
  ],
  // Fix meta row (SVG icons → Courier mono)
  [
    `            {/* Meta row */}\n            <div className="flex flex-wrap gap-4 text-sm text-gray-400">`,
    `            {/* Meta row */}\n            <div className="ae-article-meta">`,
  ],
  // Remove SVG icon divs, replace with plain text spans (will remove the divs with SVG)
  [
    `              <div className="flex items-center gap-2">\n                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>\n                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />\n                </svg>\n                <time dateTime={publishDate}>May 7, 2026</time>\n              </div>\n              <div className="flex items-center gap-2">\n                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>\n                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />\n                </svg>\n                <span>12 min read</span>\n              </div>\n              <div className="flex items-center gap-2">\n                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>\n                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />\n                </svg>\n                <span>Justin Borges</span>\n              </div>`,
    `              <time dateTime={publishDate}>May 7, 2026</time>\n              <span>·</span>\n              <span>12 min read</span>\n              <span>·</span>\n              <span>Justin Borges</span>`,
  ],
  // Add ae-article-body to content div
  [
    `          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">`,
    `          <div className="ae-article-body prose prose-invert prose-lg max-w-none prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">`,
  ],
]);

// ─── Article 4: how-many-articles-needed-ai-citations ───────────────────────

patch(path.join(base, 'app/blog/how-many-articles-needed-ai-citations/page.tsx'), [
  // Fix H1
  [
    `className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight font-plus-jakarta">\n              How Many Articles Do You Need to Get Cited on AI Search?`,
    `className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter text-[#e5e2e1] leading-none mb-6">\n              How Many Articles Do You Need to Get Cited on AI Search?`,
  ],
  // Fix category label wrapper
  [
    `<div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 bg-white/[0.04] border border-white/[0.08]">\n              <span className="text-sm font-semibold tracking-wider uppercase text-white">How-To Guide</span>\n            </div>`,
    `<div className="mb-4"><span className="font-mono text-[11px] tracking-widest uppercase text-[#F27D24]">AEO Strategy · The Answer Engine</span></div>`,
  ],
  // Add ae-article-hero to header
  [
    `          <header className="mb-12">`,
    `          <header className="ae-article-hero mb-12 p-8 rounded-xl">`,
  ],
  // Fix meta row
  [
    `            <div className="flex flex-wrap gap-4 text-sm text-gray-400">`,
    `            <div className="ae-article-meta">`,
  ],
  // Remove SVG icon meta items (read time first, then date, then author)
  [
    `              <div className="flex items-center gap-2">\n                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>\n                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />\n                </svg>\n                <span>11 min read</span>\n              </div>\n              <div className="flex items-center gap-2">\n                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>\n                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />\n                </svg>\n                <span>May 7, 2026</span>\n              </div>\n              <div className="flex items-center gap-2">\n                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>\n                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />\n                </svg>\n                <span>Justin Borges</span>\n              </div>`,
    `              <time dateTime={publishDate}>May 7, 2026</time>\n              <span>·</span>\n              <span>13 min read</span>\n              <span>·</span>\n              <span>Justin Borges</span>`,
  ],
  // Add ae-article-body to content div
  [
    `          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-plus-jakarta prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">`,
    `          <div className="ae-article-body prose prose-invert prose-lg max-w-none prose-p:text-gray-300 prose-a:text-[#F27D24] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">`,
  ],
]);

console.log('\nAll done. Run: npx tsc --noEmit');
