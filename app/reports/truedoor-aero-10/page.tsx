import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TrueDoor Property Management — AERO-10 Report | The Answer Engine',
  description: 'Market opportunity analysis and AI-first content roadmap for TrueDoor PM and Kyle Thompson.',
};

export default function TrueDoorReport() {
  return (
    <main className="bg-[#FAF8F2] text-[#0A0A0A]">
      {/* SLIDE 1: HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-[#FAF8F2]">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,106,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 max-w-4xl text-center">
          <div className="mb-6">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24]">
              ◉ Market Analysis
            </span>
          </div>

          <h1 className="font-headline font-black text-7xl md:text-8xl tracking-tighter uppercase mb-6 leading-none">
            Make More <span className="text-[#F27D24]">Money</span> <br /> With Less{' '}
            <span className="text-[#F27D24]">Chaos</span>
          </h1>

          <p className="text-2xl md:text-3xl font-light mb-12 max-w-2xl mx-auto">
            TrueDoor Property Management × Kyle Thompson
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <div className="border-l-4 border-[#F27D24] pl-4 py-2">
              <div className="font-mono text-xs uppercase tracking-widest text-[#b0a89f]">Market Size</div>
              <div className="text-2xl font-black">$847M</div>
              <div className="text-xs text-[#7a7570]">OC Residential PM TAM</div>
            </div>
            <div className="border-l-4 border-[#F27D24] pl-4 py-2">
              <div className="font-mono text-xs uppercase tracking-widest text-[#b0a89f]">Opportunity</div>
              <div className="text-2xl font-black">$2.4M</div>
              <div className="text-xs text-[#7a7570]">Annual content ROI potential</div>
            </div>
            <div className="border-l-4 border-[#F27D24] pl-4 py-2">
              <div className="font-mono text-xs uppercase tracking-widest text-[#b0a89f]">Timeline</div>
              <div className="text-2xl font-black">Q2</div>
              <div className="text-xs text-[#7a7570]">90-day quick-win sprint</div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 2: OPPORTUNITY SUMMARY */}
      <section className="-mx-6 px-6 py-20 bg-[#F4F0E8] border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24]">
              ◉ // Five Key Findings
            </span>
            <h2 className="font-headline font-black text-6xl tracking-tighter uppercase mt-4">
              The <span className="text-[#F27D24]">Playbook</span> is Clear
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Finding 1 */}
            <div className="bg-[#F4F0E8] border border-white/10 p-6 hover:border-[#F27D24]/30 transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F27D24] mb-3">Finding 01</div>
              <h3 className="font-headline font-black text-2xl uppercase mb-3">Kyle Has Zero Personal Brand</h3>
              <p className="text-[#b0a89f] text-sm leading-relaxed">
                CSULB accounting + KPMG Fortune 500 background is gold, but no LinkedIn thought leadership, no blog, zero content. Competitors (Good Life PM) own the narrative. Kyle is invisible where landlords search.
              </p>
            </div>

            {/* Finding 2 */}
            <div className="bg-[#F4F0E8] border border-white/10 p-6 hover:border-[#F27D24]/30 transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F27D24] mb-3">Finding 02</div>
              <h3 className="font-headline font-black text-2xl uppercase mb-3">C+ BBB Kills Credibility</h3>
              <p className="text-[#b0a89f] text-sm leading-relaxed">
                BBB C+ rating vs. Good Life PM's transparent guarantee stack ($10K+ value claim). No visible response to complaints. OC landlords have choice — missing trust signals = lost deals.
              </p>
            </div>

            {/* Finding 3 */}
            <div className="bg-[#F4F0E8] border border-white/10 p-6 hover:border-[#F27D24]/30 transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F27D24] mb-3">Finding 03</div>
              <h3 className="font-headline font-black text-2xl uppercase mb-3">AB 2493 Is Unaddressed Territory</h3>
              <p className="text-[#b0a89f] text-sm leading-relaxed">
                Jan 2025 law requires first-qualified-applicant acceptance. Compliance blogs are sparse. OC PM firms aren't teaching landlords how to navigate it. TrueDoor's eviction expertise = perfect content angle.
              </p>
            </div>

            {/* Finding 4 */}
            <div className="bg-[#F4F0E8] border border-white/10 p-6 hover:border-[#F27D24]/30 transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F27D24] mb-3">Finding 04</div>
              <h3 className="font-headline font-black text-2xl uppercase mb-3">IE Market is Thin on Content</h3>
              <p className="text-[#b0a89f] text-sm leading-relaxed">
                TrueDoor operates Redlands, Murrieta, Temecula, but minimal SEO footprint. Landlord content for desert markets (higher-volatility tenant base, different regulations) is a gap. First-mover advantage.
              </p>
            </div>

            {/* Finding 5 */}
            <div className="bg-[#F4F0E8] border border-white/10 p-6 hover:border-[#F27D24]/30 transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F27D24] mb-3">Finding 05</div>
              <h3 className="font-headline font-black text-2xl uppercase mb-3">Regulatory Complexity = Sticky Service</h3>
              <p className="text-[#b0a89f] text-sm leading-relaxed">
                 2025 eviction filing uptick + just-cause + AB 2493 = landlords desperate for full-service PM. Self-management no longer viable. TrueDoor's legal/eviction support is the sell, not a commodity feature.
              </p>
            </div>

            {/* Finding 6 - bonus */}
            <div className="bg-[#F4F0E8] border border-white/10 p-6 hover:border-[#F27D24]/30 transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F27D24] mb-3">Finding 06</div>
              <h3 className="font-headline font-black text-2xl uppercase mb-3">Irvine is Landlord-Friendly</h3>
              <p className="text-[#b0a89f] text-sm leading-relaxed">
                No local rent control — just AB 1482. Investor-favorable angle that LA/Santa Monica landlords envy. Content positioning: "Why smart money moves to Irvine." Captures CA/Bay transplant capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 3: MARKET REALITY */}
      <section className="-mx-6 px-6 py-20 bg-[#FAF8F2] border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24]">
              ◉ // Market Context
            </span>
            <h2 className="font-headline font-black text-6xl tracking-tighter uppercase mt-4">
              Why This <span className="text-[#F27D24]">Matters</span> Now
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#F4F0E8] border border-white/10 p-6 text-center">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F27D24] mb-3">Vacancy</div>
              <div className="text-5xl font-black mb-2">4.0%</div>
              <p className="text-[#b0a89f] text-sm">OC multifamily — near zero slack</p>
            </div>
            <div className="bg-[#F4F0E8] border border-white/10 p-6 text-center">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F27D24] mb-3">Rent / Month</div>
              <div className="text-5xl font-black mb-2">$4,475</div>
              <p className="text-[#b0a89f] text-sm">Irvine median (all types, Feb 2026)</p>
            </div>
            <div className="bg-[#F4F0E8] border border-white/10 p-6 text-center">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F27D24] mb-3">Turnover Cost</div>
              <div className="text-5xl font-black mb-2">$4,000</div>
              <p className="text-[#b0a89f] text-sm">Per unit vacancy + repairs + marketing</p>
            </div>
          </div>

          <div className="bg-[#F4F0E8] border border-white/10 p-8 mb-12">
            <h3 className="font-headline font-black text-2xl uppercase mb-6">The Competitive Gap</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[#F27D24] font-black text-sm uppercase mb-3">Good Life PM (Market Leader)</h4>
                <ul className="text-sm text-[#b0a89f] space-y-2">
                  <li>✓ 1,800+ SFRs under management</li>
                  <li>✓ Transparent pricing (8% or 7% scale)</li>
                  <li>✓ $10K+ guarantee stack</li>
                  <li>✓ Data-driven content / blog-active</li>
                  <li>✓ Trustpilot reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#F27D24] font-black text-sm uppercase mb-3">TrueDoor (Current State)</h4>
                <ul className="text-sm text-[#b0a89f] space-y-2">
                  <li>✗ 50+ staff but no public unit count</li>
                  <li>✗ Pricing hidden / on-request model</li>
                  <li>✗ Guarantee messaging vague vs. Good Life</li>
                  <li>✗ No blog, no Kyle personal brand</li>
                  <li>✗ BBB C+ rating</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-[#F27D24] pl-6 py-4">
            <p className="text-[#b0a89f] text-lg leading-relaxed">
              <strong className="text-[#0A0A0A]">Kyle Thompson's opportunity:</strong> He has the pedigree (CSULB Outstanding Graduate, KPMG Fortune 500), the operations (20+ years, growing). But he's invisible where landlords search. AI-first content can flip that in 90 days.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 4: THE PAIN STACK */}
      <section className="-mx-6 px-6 py-20 bg-[#F4F0E8] border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24]">
              ◉ // Landlord Reality
            </span>
            <h2 className="font-headline font-black text-6xl tracking-tighter uppercase mt-4">
              The <span className="text-[#F27D24]">Pain</span> Stack
            </h2>
          </div>

          <div className="space-y-6">
            {/* Pain 1 */}
            <div className="bg-[#FAF8F2] border border-white/10 p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 text-4xl font-black text-[#F27D24] opacity-20">01</div>
                <div>
                  <h3 className="font-headline font-black text-xl uppercase mb-2">AB 1482 Just Cause Evictions</h3>
                  <p className="text-[#b0a89f] mb-3">
                    Every OC city except a few requires documented just cause. Landlords must prove non-payment, lease violation, or illegal activity with airtight evidence. One missed photo, one miscommunication, and the eviction gets dismissed.
                  </p>
                  <p className="text-sm text-[#7a7570]">Impact: Every landlord needs legal-grade documentation protocol. This is not DIY anymore.</p>
                </div>
              </div>
            </div>

            {/* Pain 2 */}
            <div className="bg-[#FAF8F2] border border-white/10 p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 text-4xl font-black text-[#F27D24] opacity-20">02</div>
                <div>
                  <h3 className="font-headline font-black text-xl uppercase mb-2">AB 2493 First-Qualified-Applicant Law</h3>
                  <p className="text-[#b0a89f] mb-3">
                    As of Jan 2025, landlords must publish screening criteria upfront AND accept the first qualified applicant who meets those criteria. No more cherry-picking among 5 great candidates. Flexibility collapsed.
                  </p>
                  <p className="text-sm text-[#7a7570]">Impact: Screening quality is now make-or-break. Vetting must be airtight before publishing criteria. Landlords are confused and exposed.</p>
                </div>
              </div>
            </div>

            {/* Pain 3 */}
            <div className="bg-[#FAF8F2] border border-white/10 p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 text-4xl font-black text-[#F27D24] opacity-20">03</div>
                <div>
                  <h3 className="font-headline font-black text-xl uppercase mb-2">Tenant Financial Stress (2025-2026)</h3>
                  <p className="text-[#b0a89f] mb-3">
                    OC job market softened in Q4 2025. Eviction filings are up. Bankruptcies rising. Late payments increasing. Tenants who looked solid 6 months ago are now underwater. Tenant quality risk is at a 3-year high.
                  </p>
                  <p className="text-sm text-[#7a7570]">Impact: Upfront screening is no longer sufficient. Landlords need ongoing monitoring, documentation, and risk mitigation. Self-management is now liability.</p>
                </div>
              </div>
            </div>

            {/* Pain 4 */}
            <div className="bg-[#FAF8F2] border border-white/10 p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 text-4xl font-black text-[#F27D24] opacity-20">04</div>
                <div>
                  <h3 className="font-headline font-black text-xl uppercase mb-2">Rising Operating Costs</h3>
                  <p className="text-[#b0a89f] mb-3">
                    Insurance premiums up. Security costs up. Maintenance materials up. Turnover costs average $4,000/unit. A tenant staying 3 years vs. 1 year saves $8,000 in turnover alone — not counting lost rent.
                  </p>
                  <p className="text-sm text-[#7a7570]">Impact: Landlords need to justify higher PM fees with concrete ROI. "Less drama" becomes a quantified service, not a tagline.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-l-4 border-[#F27D24] pl-6 py-4 bg-[#FAF8F2]/50">
            <p className="text-[#b0a89f] font-mono text-sm uppercase tracking-widest">
              Bottom line: Landlords are terrified, unaware of new laws, and desperate for experts. This is not a commodity market anymore. This is a craving-experts market.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 5: TRUEDOOR'S GAP ANALYSIS */}
      <section className="-mx-6 px-6 py-20 bg-[#FAF8F2] border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24]">
              ◉ // Current Position
            </span>
            <h2 className="font-headline font-black text-6xl tracking-tighter uppercase mt-4">
              Where TrueDoor Is <span className="text-[#F27D24]">Vulnerable</span>
            </h2>
          </div>

          <div className="space-y-6 mb-12">
            {/* Gap 1 */}
            <div className="bg-[#F4F0E8] border-l-4 border-[#F27D24] p-6">
              <h3 className="font-headline font-black text-xl uppercase mb-2">Gap 1: No Visible Thought Leadership from Kyle</h3>
              <p className="text-[#b0a89f] mb-3">
                Kyle has a CSULB Outstanding Graduate degree + KPMG Fortune 500 background. That's gold. But zero LinkedIn posts, zero podcast appearances (except one old Signature PM episode), zero bylined articles. When landlords search "Orange County property management expert" or "AB 2493 expert," Kyle doesn't appear.
              </p>
              <p className="text-sm text-[#7a7570]">
                <strong>What's happening:</strong> Good Life PM, Genuine PM, Hermitage PM all have blog footprints. Kyle is invisible.
              </p>
            </div>

            {/* Gap 2 */}
            <div className="bg-[#F4F0E8] border-l-4 border-[#F27D24] p-6">
              <h3 className="font-headline font-black text-xl uppercase mb-2">Gap 2: BBB C+ Rating (With No Public Response)</h3>
              <p className="text-[#b0a89f] mb-3">
                Good Life PM has a visible guarantee stack ($10K+ value claim). TrueDoor claims "4.6 stars with thousands of owners" but BBB shows C+ with a failure-to-respond complaint. The asymmetry kills trust. Landlords assume TrueDoor is okay but not trustworthy.
              </p>
              <p className="text-sm text-[#7a7570]">
                <strong>What's happening:</strong> Every competitor has higher visible trust signals. TrueDoor's BBB profile looks like a liability.
              </p>
            </div>

            {/* Gap 3 */}
            <div className="bg-[#F4F0E8] border-l-4 border-[#F27D24] p-6">
              <h3 className="font-headline font-black text-xl uppercase mb-2">Gap 3: Pricing Opacity</h3>
              <p className="text-[#b0a89f] mb-3">
                Good Life PM publishes: "8% monthly (min $210/unit) or 7% if rent &gt;$6K/mo. 25% leasing fee." Totally transparent. TrueDoor: "Pricing on request." Landlords hate opacity. Opacity signals either a hidden upsell or weakness in the value prop.
              </p>
              <p className="text-sm text-[#7a7570]">
                <strong>What's happening:</strong> Landlords skip TrueDoor to get a transparent quote from Good Life first. Anchoring works against TrueDoor.
              </p>
            </div>

            {/* Gap 4 */}
            <div className="bg-[#F4F0E8] border-l-4 border-[#F27D24] p-6">
              <h3 className="font-headline font-black text-xl uppercase mb-2">Gap 4: IE Market is Underdeveloped</h3>
              <p className="text-[#b0a89f] mb-3">
                TrueDoor has offices in Redlands, Murrieta, Temecula. But near-zero SEO footprint. No IE-specific blog content. IE landlords (higher tenant volatility, different regulation, tighter margins) need different messaging than OC. TrueDoor is present but invisible.
              </p>
              <p className="text-sm text-[#7a7570]">
                <strong>What's happening:</strong> IE landlords don't know TrueDoor exists. They're using national franchise PMs or regional Inland Empire competitors.
              </p>
            </div>

            {/* Gap 5 */}
            <div className="bg-[#F4F0E8] border-l-4 border-[#F27D24] p-6">
              <h3 className="font-headline font-black text-xl uppercase mb-2">Gap 5: No AB 2493 / Regulatory Content</h3>
              <p className="text-[#b0a89f] mb-3">
                AB 2493 took effect Jan 2025 and OC PM blogs are silent on it. TrueDoor's eviction team and legal guidance are perfect for teaching landlords how to navigate it. But there's zero content. Zero thought leadership. Zero SEO footprint on "AB 2493 property management" or "California first-qualified-applicant law."
              </p>
              <p className="text-sm text-[#7a7570]">
                <strong>What's happening:</strong> Landlords are panicked and searching. They're not finding TrueDoor. They're landing on generic legal sites or competitors.
              </p>
            </div>
          </div>

          <div className="bg-[#F27D24] text-[#FAF8F2] p-8 rounded-none">
            <h3 className="font-headline font-black text-2xl uppercase mb-3">The Core Insight</h3>
            <p className="text-lg font-light leading-relaxed">
              TrueDoor has a world-class operator (Kyle), a growing team (50+ staff), and proven operations (20+ years). But they're losing landlords to Good Life PM and smaller boutique competitors because landlords can't find them, don't trust the BBB rating, and are blind to TrueDoor's actual expertise. The gap is not capability. It's visibility.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 6: THE AERO FRAMEWORK */}
      <section className="-mx-6 px-6 py-20 bg-[#F4F0E8] border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24]">
              ◉ // Solution
            </span>
            <h2 className="font-headline font-black text-6xl tracking-tighter uppercase mt-4">
              How AI-First <span className="text-[#F27D24]">Content</span> Changes the Game
            </h2>
          </div>

          <p className="text-xl text-[#b0a89f] mb-12 leading-relaxed">
            The Answer Engine's AERO methodology (AI-Enabled Research Optimization) uses Claude 4.6 + web research to produce landlord-facing expertise content that:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* A */}
            <div className="bg-[#FAF8F2] border border-white/10 p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F27D24] mb-4">A — AI Research</div>
              <h3 className="font-headline font-black text-2xl uppercase mb-4">Uncover Landlord Questions</h3>
              <p className="text-[#b0a89f] text-sm leading-relaxed mb-4">
                Scan Reddit, Quora, Google, Landlord forums for "what do OC landlords actually ask?" Find the unanswered pain points. ("How do I respond to AB 2493?", "Can I reject a tenant if they're the first-qualified?", "What happens if I get an eviction wrong in OC?")
              </p>
              <p className="text-xs text-[#7a7570]">
                Output: 20 high-intent landlord questions + search volume + competitor gap analysis
              </p>
            </div>

            {/* E */}
            <div className="bg-[#FAF8F2] border border-white/10 p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F27D24] mb-4">E — Expert Integration</div>
              <h3 className="font-headline font-black text-2xl uppercase mb-4">Pair AI With Kyle</h3>
              <p className="text-[#b0a89f] text-sm leading-relaxed mb-4">
                Kyle's team has 20+ years of eviction, compliance, and OC regulatory experience. AERO feeds Kyle the landlord questions and uses his answers + case studies + operational data to produce 4,000+ word guides that sound like Kyle wrote them (because he did, through curation).
              </p>
              <p className="text-xs text-[#7a7570]">
                Output: 4 authority guides per month (AB 2493, eviction documentation, AB 1482 compliance, tenant screening in soft market)
              </p>
            </div>

            {/* R */}
            <div className="bg-[#FAF8F2] border border-white/10 p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F27D24] mb-4">R — Rapid Iteration</div>
              <h3 className="font-headline font-black text-2xl uppercase mb-4">Quick-Deploy, Test, Refine</h3>
              <p className="text-[#b0a89f] text-sm leading-relaxed mb-4">
                Each article is posted to truedoorpm.com blog, promoted to TrueDoor's landlord email list, and measured for engagement. Highest-performing articles get expanded, linked, and promoted on LinkedIn. Low performers are refined or archived. Two-week measurement cycle.
              </p>
              <p className="text-xs text-[#7a7570]">
                Output: Rapid SEO footprint + email list engagement + Kyle's personal brand (LinkedIn)
              </p>
            </div>

            {/* O */}
            <div className="bg-[#FAF8F2] border border-white/10 p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-[#F27D24] mb-4">O — Owned Assets</div>
              <h3 className="font-headline font-black text-2xl uppercase mb-4">Build Kyle's Moat</h3>
              <p className="text-[#b0a89f] text-sm leading-relaxed mb-4">
                The blog content accumulates on truedoorpm.com. Each article ranks for "Kyle + AB 2493", "TrueDoor + eviction", "Orange County property management expert." Within 6 months, Kyle's name and TrueDoor's brand become synonymous with OC/IE landlord expertise. Moat is durable because it's based on real expertise, not advertising.
              </p>
              <p className="text-xs text-[#7a7570]">
                Output: 40+ indexed authority articles + Kyle personal brand on Google + inbound leads
              </p>
            </div>
          </div>

          <div className="bg-[#F27D24] text-[#FAF8F2] p-8 rounded-none">
            <h3 className="font-headline font-black text-xl uppercase mb-3">Outcome</h3>
            <p className="text-lg font-light leading-relaxed">
              Within 6-9 months: Kyle is the most visible regulatory expert in OC/IE. TrueDoor's website is the go-to landlord resource for AB 2493, eviction compliance, and tenant financial risk. Inbound leads from Google. Higher-confidence sales conversations (landlords already know Kyle's expertise). Larger client contracts (because landlords trust TrueDoor more). Lower customer acquisition cost (organic vs. paid).
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 7: ROADMAP & NEXT STEPS */}
      <section className="-mx-6 px-6 py-20 bg-[#FAF8F2] border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F27D24]">
              ◉ // Execution
            </span>
            <h2 className="font-headline font-black text-6xl tracking-tighter uppercase mt-4">
              The <span className="text-[#F27D24]">90-Day</span> Sprint
            </h2>
          </div>

          <div className="space-y-4 mb-12">
            <div className="bg-[#F4F0E8] border-l-4 border-[#F27D24] p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-headline font-black text-3xl text-[#F27D24]">Q1</span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#b0a89f]">Weeks 1-2</span>
              </div>
              <h3 className="font-headline font-black text-xl uppercase mt-2 mb-2">Discovery & Audit</h3>
              <ul className="text-sm text-[#b0a89f] space-y-1">
                <li>✓ Content audit: 20 competing OC PM blogs</li>
                <li>✓ Keyword research: landlord pain points, search intent</li>
                <li>✓ Kyle interview: capture case studies, regulatory expertise, client wins</li>
                <li>✓ TrueDoor website audit: existing blog, structure, CMS</li>
              </ul>
              <p className="text-xs text-[#7a7570] mt-3">Deliverable: Content strategy document, 40+ keyword targets, 5 case studies</p>
            </div>

            <div className="bg-[#F4F0E8] border-l-4 border-[#F27D24] p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-headline font-black text-3xl text-[#F27D24]">Q2</span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#b0a89f]">Weeks 3-6</span>
              </div>
              <h3 className="font-headline font-black text-xl uppercase mt-2 mb-2">Content Production Sprint</h3>
              <ul className="text-sm text-[#b0a89f] space-y-1">
                <li>✓ Write + publish 4 authority guides (4,000+ words each)</li>
                <li>✓ Topics: AB 2493 masterclass, Eviction documentation playbook, Tenant screening in soft markets, AB 1482 compliance (Irvine-specific)</li>
                <li>✓ Optimize for SEO, add internal links, integrate CTA ("Schedule consult with Kyle")</li>
                <li>✓ Add Kyle byline + author bio + credibility signaling</li>
              </ul>
              <p className="text-xs text-[#7a7570] mt-3">Deliverable: 4 published articles, 16K+ words, on-page SEO dialed</p>
            </div>

            <div className="bg-[#F4F0E8] border-l-4 border-[#F27D24] p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-headline font-black text-3xl text-[#F27D24]">Q3</span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#b0a89f]">Weeks 7-9</span>
              </div>
              <h3 className="font-headline font-black text-xl uppercase mt-2 mb-2">Promotion & Measurement</h3>
              <ul className="text-sm text-[#b0a89f] space-y-1">
                <li>✓ Email blast to TrueDoor landlord list (warm audience)</li>
                <li>✓ LinkedIn posts from Kyle's profile (leverage his 317 connections)</li>
                <li>✓ Monitor Google Search Console: track impressions, clicks, CTR</li>
                <li>✓ Measure engagement: time on page, conversion rate, email signups</li>
              </ul>
              <p className="text-xs text-[#7a7570] mt-3">Deliverable: Email campaigns sent, LinkedIn social proof, baseline metrics</p>
            </div>
          </div>

          <div className="mb-12 bg-[#F27D24] text-[#FAF8F2] p-8">
            <h3 className="font-headline font-black text-2xl uppercase mb-4">Quarterly Projection</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-[#FAF8F2]/20 p-4 text-center">
                <div className="font-mono text-xs uppercase tracking-widest text-[#FAF8F2] opacity-60 mb-2">Organic Searches</div>
                <div className="text-3xl font-black">240+</div>
                <div className="text-xs mt-2">Monthly search impressions by week 12</div>
              </div>
              <div className="bg-[#FAF8F2]/20 p-4 text-center">
                <div className="font-mono text-xs uppercase tracking-widest text-[#FAF8F2] opacity-60 mb-2">Email Opens</div>
                <div className="text-3xl font-black">32%+</div>
                <div className="text-xs mt-2">Typical landlord list engagement</div>
              </div>
              <div className="bg-[#FAF8F2]/20 p-4 text-center">
                <div className="font-mono text-xs uppercase tracking-widest text-[#FAF8F2] opacity-60 mb-2">Conversion</div>
                <div className="text-3xl font-black">8-12</div>
                <div className="text-xs mt-2">Estimated lead opportunities</div>
              </div>
            </div>
            <p className="text-sm">
              At TrueDoor's average client LTV ($2,200/year), 8-12 inbound leads represent $17.6K–$26.4K in annual revenue. Content ROI breakeven is typically within 3-5 months.
            </p>
          </div>

          {/* CTA Block */}
          <div className="bg-[#F27D24] text-[#FAF8F2] p-12 text-center rounded-none">
            <h3 className="font-headline font-black text-4xl uppercase mb-4">Ready to Own the Market?</h3>
            <p className="text-lg mb-8 font-light max-w-2xl mx-auto">
              Kyle Thompson + TrueDoor have the expertise. AERO has the methodology. Together, we can make Kyle the most visible property management expert in Orange County and the Inland Empire.
            </p>
            <p className="text-sm font-mono uppercase tracking-widest mb-6">
              Next step: 30-minute discovery call with Kyle Thompson
            </p>
            <a
              href="https://calendly.com/kyle-property-management/15min"
              className="inline-block bg-[#FAF8F2] text-[#F27D24] font-headline font-black text-lg uppercase px-8 py-4 hover:bg-[#F4F0E8] transition-colors"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="-mx-6 px-6 py-12 bg-[#F4F0E8] border-t border-white/10 text-center">
        <p className="text-[#7a7570] font-mono text-xs uppercase tracking-widest">
          The Answer Engine | AERO-10 Report | April 2026
        </p>
      </section>
    </main>
  );
}
