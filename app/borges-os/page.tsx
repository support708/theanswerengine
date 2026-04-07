'use client';

import { useEffect, useState } from 'react';

export default function BorgesOS() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'system', label: 'Operating System', icon: '⚙️' },
    { id: 'business', label: 'Business Ecosystem', icon: '📊' },
    { id: 'goals', label: 'Goal Tracker', icon: '🎯' },
    { id: 'calendar', label: 'Calendar & Events', icon: '📅' },
    { id: 'brief', label: 'Daily Brief', icon: '📧' },
    { id: 'cadence', label: 'Meeting Cadence', icon: '🔄' },
  ];

  return (
    <div className="min-h-screen bg-[#faf5f0]">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-[#faf5f0] border-b border-[#d97757]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {sections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(idx);
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-all ${
                activeSection === idx
                  ? 'bg-[#d97757] text-white'
                  : 'text-[#5a4a42] hover:bg-[#f0e6df]'
              }`}
            >
              {section.icon} {section.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-16 space-y-24">
        {/* Section 1: Operating System */}
        <section id="system" className="scroll-mt-24">
          <h1 className="text-4xl font-serif text-[#5a4a42] mb-12 tracking-tight">
            The Operating System
          </h1>
          <div className="bg-white rounded-lg border border-[#d97757]/20 p-12 shadow-sm">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-serif font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#5a4a42] mb-1">Borges Daily Brief</h3>
                  <p className="text-[#8b6f63]">7:30 AM to Brandy • Weekly momentum pulse</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-serif font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#5a4a42] mb-1">Sunday Check-In</h3>
                  <p className="text-[#8b6f63]">30 min • Family + business review</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-serif font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#5a4a42] mb-1">Q2 Rocks</h3>
                  <p className="text-[#8b6f63]">3 per person • Progress tracked weekly</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-serif font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#5a4a42] mb-1">Monthly CEO Meeting</h3>
                  <p className="text-[#8b6f63]">Rotating hotels • Deep business review</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#d97757] rounded-full flex items-center justify-center text-white font-serif font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#5a4a42] mb-1">Accountability Loop</h3>
                  <p className="text-[#8b6f63]">Items flagged at 3+ appearances</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#fef0e8] rounded-lg border border-[#d97757]/10">
              <p className="text-[#5a4a42] font-medium mb-2">Decision Filter</p>
              <p className="text-[#8b6f63]">Before acting: Was this planned? Hell yes or no?</p>
            </div>
          </div>
        </section>

        {/* Section 2: Business Ecosystem */}
        <section id="business" className="scroll-mt-24">
          <h1 className="text-4xl font-serif text-[#5a4a42] mb-12 tracking-tight">
            Business Ecosystem
          </h1>
          <div className="grid grid-cols-3 gap-6 mb-12">
            {/* RE */}
            <div className="bg-white rounded-lg border border-[#d97757]/20 p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-[#5a4a42] mb-4">The Borges RE Team</h3>
              <div className="space-y-3 text-sm">
                <p className="text-[#8b6f63]">YTD Revenue: <span className="font-semibold text-[#5a4a42]">$55,967</span></p>
                <p className="text-[#8b6f63]">YTD Net: <span className="font-semibold text-[#5a4a42]">$30,076</span></p>
                <p className="text-[#8b6f63]">Target: <span className="font-semibold text-[#5a4a42]">$1.8M</span></p>
                <div className="mt-4 w-full bg-[#f0e6df] rounded-full h-2">
                  <div
                    className="bg-[#d97757] h-2 rounded-full"
                    style={{ width: '1.7%' }}
                  ></div>
                </div>
                <p className="text-xs text-[#8b6f63] pt-2">1.7% of annual goal</p>
              </div>
            </div>

            {/* AE */}
            <div className="bg-white rounded-lg border border-[#d97757]/20 p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-[#5a4a42] mb-4">The Answer Engine</h3>
              <div className="space-y-3 text-sm">
                <p className="text-[#8b6f63]">YTD Revenue: <span className="font-semibold text-[#5a4a42]">$7,997</span></p>
                <p className="text-[#8b6f63]">Active Clients: <span className="font-semibold text-[#5a4a42]">3</span></p>
                <p className="text-[#8b6f63]">Target: <span className="font-semibold text-[#5a4a42]">$120K</span></p>
                <div className="mt-4 w-full bg-[#f0e6df] rounded-full h-2">
                  <div
                    className="bg-[#d97757] h-2 rounded-full"
                    style={{ width: '6.7%' }}
                  ></div>
                </div>
                <p className="text-xs text-[#8b6f63] pt-2">6.7% of annual goal</p>
              </div>
            </div>

            {/* Her Legacy */}
            <div className="bg-white rounded-lg border border-[#d97757]/20 p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-[#5a4a42] mb-4">Her Legacy</h3>
              <div className="space-y-3 text-sm">
                <p className="text-[#8b6f63]">Status: <span className="font-semibold text-[#5a4a42]">Pre-Launch</span></p>
                <p className="text-[#8b6f63]">Launch: <span className="font-semibold text-[#5a4a42]">Q2 2026</span></p>
                <p className="text-[#8b6f63]">Target: <span className="font-semibold text-[#5a4a42]">$36K</span></p>
                <div className="mt-4 w-full bg-[#f0e6df] rounded-full h-2">
                  <div
                    className="bg-[#d97757] h-2 rounded-full"
                    style={{ width: '0%' }}
                  ></div>
                </div>
                <p className="text-xs text-[#8b6f63] pt-2">0% (pending launch)</p>
              </div>
            </div>
          </div>

          {/* Household Target */}
          <div className="bg-white rounded-lg border border-[#d97757]/20 p-8 shadow-sm">
            <h3 className="font-serif text-2xl text-[#5a4a42] mb-8">Household Target: $1.96M</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#8b6f63]">YTD Total</span>
                  <span className="font-semibold text-[#5a4a42]">$38,073 (1.9%)</span>
                </div>
                <div className="w-full bg-[#f0e6df] rounded-full h-3">
                  <div
                    className="bg-[#d97757] h-3 rounded-full"
                    style={{ width: '1.9%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Time Splits */}
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-lg border border-[#d97757]/20 p-8 shadow-sm">
              <h4 className="font-serif text-xl text-[#5a4a42] mb-6">JB Time Split</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#8b6f63]">RE (Real Estate)</span>
                  <span className="font-semibold text-[#5a4a42]">60%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8b6f63]">AE (The Answer Engine)</span>
                  <span className="font-semibold text-[#5a4a42]">25%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8b6f63]">Her Legacy (Advisory)</span>
                  <span className="font-semibold text-[#5a4a42]">15%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-[#d97757]/20 p-8 shadow-sm">
              <h4 className="font-serif text-xl text-[#5a4a42] mb-6">Brandy Time Split</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#8b6f63]">Her Legacy</span>
                  <span className="font-semibold text-[#5a4a42]">90%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8b6f63]">RE (Consulting)</span>
                  <span className="font-semibold text-[#5a4a42]">5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8b6f63]">AE (Advisory)</span>
                  <span className="font-semibold text-[#5a4a42]">5%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Goal Tracker */}
        <section id="goals" className="scroll-mt-24">
          <h1 className="text-4xl font-serif text-[#5a4a42] mb-12 tracking-tight">
            Goal Tracker
          </h1>

          <div className="grid grid-cols-2 gap-12 mb-12">
            {/* JB Q2 Rocks */}
            <div className="bg-white rounded-lg border border-[#d97757]/20 p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-[#5a4a42] mb-8">JB Q2 Rocks</h3>
              <div className="space-y-6">
                {[
                  { title: 'RE Team at $500K ARR', status: 'in-progress', pct: 45 },
                  { title: 'AE to 8 Active Clients', status: 'in-progress', pct: 35 },
                  { title: 'Clear to Close Launch', status: 'pending', pct: 20 },
                ].map((rock, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-[#5a4a42]">{rock.title}</span>
                      <span className="text-xs font-semibold text-[#d97757]">{rock.status}</span>
                    </div>
                    <div className="w-full bg-[#f0e6df] rounded-full h-2">
                      <div
                        className="bg-[#d97757] h-2 rounded-full transition-all"
                        style={{ width: `${rock.pct}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brandy Q2 Rocks */}
            <div className="bg-white rounded-lg border border-[#d97757]/20 p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-[#5a4a42] mb-8">Brandy Q2 Rocks</h3>
              <div className="space-y-6">
                {[
                  { title: 'Her Legacy: $12K MRR', status: 'in-progress', pct: 40 },
                  { title: 'Premium White Shirt Launch', status: 'in-progress', pct: 75 },
                  { title: 'Brand Story Documentary', status: 'planning', pct: 15 },
                ].map((rock, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-[#5a4a42]">{rock.title}</span>
                      <span className="text-xs font-semibold text-[#d97757]">{rock.status}</span>
                    </div>
                    <div className="w-full bg-[#f0e6df] rounded-full h-2">
                      <div
                        className="bg-[#d97757] h-2 rounded-full transition-all"
                        style={{ width: `${rock.pct}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Annual Goals */}
          <div className="bg-white rounded-lg border border-[#d97757]/20 p-8 shadow-sm">
            <h3 className="font-serif text-2xl text-[#5a4a42] mb-8">Annual Targets vs YTD</h3>
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'RE Sales', target: '$1.8M', ytd: '$55,967', pct: 3.1 },
                { label: 'AE Net', target: '$120K', ytd: '$7,997', pct: 6.7 },
                { label: 'Her Legacy', target: '$36K', ytd: '$0', pct: 0 },
              ].map((goal, idx) => (
                <div key={idx}>
                  <p className="text-[#8b6f63] text-sm mb-2">{goal.label}</p>
                  <p className="font-serif text-lg text-[#5a4a42] mb-1">{goal.target}</p>
                  <p className="text-xs text-[#8b6f63] mb-3">YTD: {goal.ytd}</p>
                  <div className="w-full bg-[#f0e6df] rounded-full h-2">
                    <div
                      className="bg-[#d97757] h-2 rounded-full"
                      style={{ width: `${Math.min(goal.pct, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-[#8b6f63] mt-2">{goal.pct.toFixed(1)}% of target</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Calendar & Events */}
        <section id="calendar" className="scroll-mt-24">
          <h1 className="text-4xl font-serif text-[#5a4a42] mb-12 tracking-tight">
            Calendar & Events
          </h1>
          <div className="bg-white rounded-lg border border-[#d97757]/20 p-12 shadow-sm">
            <h3 className="font-serif text-2xl text-[#5a4a42] mb-8">April 2026</h3>

            {/* Simple calendar grid */}
            <div className="grid grid-cols-7 gap-4 mb-12">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-[#8b6f63] font-medium text-sm py-2">
                  {day}
                </div>
              ))}
              {/* April 2026 starts on Wednesday */}
              {[...Array(3)].map((_, i) => (
                <div key={`empty-${i}`} className="p-3"></div>
              ))}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((date) => (
                <div
                  key={date}
                  className="p-3 border border-[#d97757]/10 rounded-lg bg-[#fef0e8] text-center"
                >
                  <div className="font-semibold text-[#5a4a42] text-sm mb-1">{date}</div>
                  {date === 7 && <div className="text-xs text-[#d97757]">CEO Meeting</div>}
                </div>
              ))}
            </div>

            {/* Upcoming Events */}
            <div className="mt-12">
              <h4 className="font-serif text-xl text-[#5a4a42] mb-6">Upcoming Events</h4>
              <div className="space-y-4">
                {[
                  { date: 'Apr 7', event: 'Monthly CEO Meeting', type: 'Business', location: 'Rotating Hotel' },
                  { date: 'Apr 15', event: 'Parent-Kid Date: Lilly', type: 'Family', location: 'Guitar Lesson + Dinner' },
                  { date: 'Apr 22', event: 'Parent-Kid Date: Camden', type: 'Family', location: 'Monster Jam' },
                  { date: 'Jun 4-7', event: 'Fishing Trip', type: 'Personal', location: 'Salt Springs Reservoir' },
                  { date: 'Sep', event: 'Golf Trip', type: 'Personal', location: 'TBD' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-[#fef0e8] rounded-lg border border-[#d97757]/10">
                    <div className="font-semibold text-[#d97757] min-w-20">{item.date}</div>
                    <div className="flex-1">
                      <p className="font-medium text-[#5a4a42] mb-1">{item.event}</p>
                      <p className="text-sm text-[#8b6f63]">{item.location}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'Business' ? 'bg-[#d97757]/20 text-[#d97757]' :
                      item.type === 'Family' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {item.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Daily Brief */}
        <section id="brief" className="scroll-mt-24">
          <h1 className="text-4xl font-serif text-[#5a4a42] mb-12 tracking-tight">
            Borges Daily Brief
          </h1>
          <div className="bg-white rounded-lg border border-[#d97757]/20 p-12 shadow-sm">
            <div className="font-mono text-sm text-[#8b6f63] mb-6">To: hbrandy441@gmail.com</div>

            <h2 className="font-serif text-3xl text-[#5a4a42] mb-8">Good Morning, Brandy ☀️</h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-lg text-[#5a4a42] mb-4">This Week at a Glance</h3>
                <div className="bg-[#fef0e8] rounded-lg p-6 space-y-3 text-sm">
                  <p className="text-[#8b6f63]">RE Team: Quiet week. 2 deals in contract, May following up.</p>
                  <p className="text-[#8b6f63]">AE: Ryan's onboarding on track. New Davis strategy call Wed.</p>
                  <p className="text-[#8b6f63]">Her Legacy: White shirt samples arriving. Review quality this week.</p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg text-[#5a4a42] mb-4">Rocks Pulse</h3>
                <div className="bg-[#fef0e8] rounded-lg p-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#8b6f63]">Her Legacy: $12K MRR</span>
                    <span className="font-semibold text-[#d97757]">40% ↗</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8b6f63]">White Shirt Launch</span>
                    <span className="font-semibold text-[#d97757]">75% ↗</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8b6f63]">Brand Documentary</span>
                    <span className="font-semibold text-[#5a4a42]">15%</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg text-[#5a4a42] mb-4">A Moment for You</h3>
                <div className="bg-[#fef0e8] rounded-lg p-6 text-sm text-[#8b6f63] italic">
                  "The most authentic version of yourself is waiting in a Wyoming morning. Keep building toward that moment."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Meeting Cadence */}
        <section id="cadence" className="scroll-mt-24 pb-24">
          <h1 className="text-4xl font-serif text-[#5a4a42] mb-12 tracking-tight">
            Meeting Cadence & Rocks
          </h1>

          <div className="space-y-12">
            {/* Cadence Timeline */}
            <div className="bg-white rounded-lg border border-[#d97757]/20 p-12 shadow-sm">
              <h3 className="font-serif text-2xl text-[#5a4a42] mb-8">Weekly to Quarterly Rhythm</h3>
              <div className="space-y-4">
                {[
                  { freq: 'Daily (7:30 AM)', name: 'Borges Daily Brief', owner: 'To Brandy', detail: 'Intelligence pulse' },
                  { freq: 'Weekly (Sunday)', name: 'Check-In', owner: 'JB & Brandy', detail: '30 min family + business' },
                  { freq: 'Monthly', name: 'CEO Meeting', owner: 'JB & Brandy', detail: 'Rotating hotel location' },
                  { freq: 'Quarterly', name: 'Q Review + Planning', owner: 'Full Team', detail: 'OKRs, rocks, strategy' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 p-4 border-l-4 border-[#d97757] bg-[#fef0e8]">
                    <div className="min-w-24">
                      <p className="font-semibold text-[#d97757] text-sm">{item.freq}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[#5a4a42]">{item.name}</p>
                      <p className="text-sm text-[#8b6f63]">{item.detail}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#5a4a42]">{item.owner}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accountability Items */}
            <div className="bg-white rounded-lg border border-[#d97757]/20 p-12 shadow-sm">
              <h3 className="font-serif text-2xl text-[#5a4a42] mb-8">Accountability Items</h3>
              <div className="space-y-4">
                {[
                  { item: 'May (RE Ops) — Annual Review', owner: 'JB', status: 'Scheduled April', flags: 2 },
                  { item: 'Her Legacy Shopify Shell', owner: 'Brandy', status: 'Design Phase', flags: 1 },
                  { item: 'AE Outreach Process (Top 20)', owner: 'JB', status: 'In Progress', flags: 3 },
                  { item: 'Brandon (C2C) — Partnership Agreement', owner: 'JB', status: 'Drafting', flags: 1 },
                  { item: 'Brandy Daily Brief Distribution', owner: 'JB', status: 'Active', flags: 0 },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 border border-[#d97757]/10 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-[#5a4a42] mb-1">{item.item}</p>
                      <p className="text-sm text-[#8b6f63]">{item.status}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-sm font-medium text-[#5a4a42]">{item.owner}</p>
                      {item.flags > 0 && (
                        <p className="text-xs font-semibold text-[#d97757]">🚩 {item.flags} flags</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
