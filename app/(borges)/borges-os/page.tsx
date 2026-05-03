'use client';

import { useEffect, useState, useCallback } from 'react';
import { Playfair_Display, JetBrains_Mono } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
});

// ─── Types ───────────────────────────────────────────────────────────────────

interface StripePayment {
  id: string;
  amount: number;
  amountFormatted: string;
  name: string;
  email: string;
  date: string;
  status: string;
}

interface StripeData {
  payments: StripePayment[];
  totalCollected: number;
  totalFormatted: string;
  count: number;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const PASSWORD = 'JustinBrandy2222020';
const SESSION_KEY = 'borges-os-auth';

const FALLBACK_PAYMENTS: StripePayment[] = [
  {
    id: 'fallback-1',
    amount: 2500,
    amountFormatted: '$2,500',
    name: 'Miles Williams',
    email: '',
    date: 'Nov 30, 2025',
    status: 'succeeded',
  },
  {
    id: 'fallback-2',
    amount: 2500,
    amountFormatted: '$2,500',
    name: 'Davis Agency',
    email: '',
    date: 'Dec 16, 2025',
    status: 'succeeded',
  },
  {
    id: 'fallback-3',
    amount: 2997,
    amountFormatted: '$2,997',
    name: 'Ryan Fisher',
    email: '',
    date: 'Mar 4, 2026',
    status: 'succeeded',
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function ProgressBar({
  pct,
  className = '',
}: {
  pct: number;
  className?: string;
}) {
  return (
    <div className={`w-full bg-[#ede8e2] rounded-full h-1.5 ${className}`}>
      <div
        className="bg-[#d97757] h-1.5 rounded-full transition-all duration-700"
        style={{ width: `${Math.min(Math.max(pct, 0), 100)}%` }}
      />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[3px] uppercase text-[#d97757] mb-3">
      {children}
    </p>
  );
}

function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-2xl border border-black/5 p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function StatusBadge({
  status,
  pct,
}: {
  status: string;
  pct: number;
}) {
  const colors: Record<string, string> = {
    'In Progress': 'bg-blue-50 text-blue-700',
    Pending: 'bg-amber-50 text-amber-700',
    Ongoing: 'bg-emerald-50 text-emerald-700',
    Research: 'bg-purple-50 text-purple-700',
    Done: 'bg-gray-100 text-gray-500',
  };
  return (
    <span
      className={`text-xs font-mono px-2 py-0.5 rounded-full ${colors[status] ?? 'bg-gray-100 text-gray-600'}`}
    >
      {status} · {pct}%
    </span>
  );
}

// ─── Login Screen ─────────────────────────────────────────────────────────────

function LoginScreen({ onAuth }: { onAuth: () => void }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1');
      onAuth();
    } else {
      setError(true);
      setShake(true);
      setValue('');
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div
      className={`${playfair.variable} ${jetbrains.variable} min-h-screen bg-[#f8f5f0] flex items-center justify-center px-6`}
    >
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <p className="font-mono text-xs tracking-[4px] uppercase text-[#d97757] mb-4">
            Private
          </p>
          <h1 className="font-serif text-4xl text-[#2c1810] mb-2 leading-tight">
            Borges OS
          </h1>
          <p className="text-[#8b7368] text-sm">Family Operating System · 2026</p>
        </div>

        <form onSubmit={handleSubmit} className={shake ? 'animate-pulse' : ''}>
          <div className="mb-4">
            <input
              type="password"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              placeholder="Enter passphrase"
              autoFocus
              className={`w-full px-5 py-4 rounded-xl border text-[#2c1810] placeholder-[#c4b5ab] font-mono text-sm outline-none transition-all bg-white ${
                error
                  ? 'border-red-300 ring-2 ring-red-100'
                  : 'border-black/10 focus:border-[#d97757] focus:ring-2 focus:ring-[#d97757]/10'
              }`}
            />
            {error && (
              <p className="mt-2 text-xs text-red-500 font-mono text-center">
                Incorrect passphrase
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-[#d97757] text-white font-mono text-sm tracking-wider hover:bg-[#c96a47] transition-colors"
          >
            Enter
          </button>
        </form>

        <p className="text-center mt-8 text-[#c4b5ab] text-xs font-mono">
          JB · Brandy · 2026
        </p>
      </div>
    </div>
  );
}

// ─── Section 1: Operating System ─────────────────────────────────────────────

function SectionSystem() {
  const flow = [
    {
      label: 'Borges Daily',
      detail: '7:30 AM to Brandy',
      sub: 'Intelligence pulse, automated',
    },
    {
      label: 'Sunday Check-In',
      detail: 'Weekly · 30 min',
      sub: 'Family + business review',
    },
    {
      label: 'Rocks Review',
      detail: 'Q2 Rocks tracked',
      sub: '3 per person, weekly pulse',
    },
    {
      label: 'CEO Meeting',
      detail: 'Monthly · Rotating hotel',
      sub: 'Deep strategy & financials',
    },
    {
      label: 'Accountability',
      detail: '3+ appearances = flag',
      sub: 'Items escalate automatically',
    },
  ];

  const decisions = [
    'Was this planned?',
    'Hell yes or no?',
    'Does it move a Rock?',
    'Who owns it?',
  ];

  return (
    <section id="system" className="scroll-mt-24 py-20">
      <SectionLabel>Section 01</SectionLabel>
      <h2 className="font-serif text-4xl text-[#2c1810] mb-10">
        The Operating System
      </h2>

      {/* Flow diagram */}
      <Card className="mb-6">
        <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-6">
          Weekly Rhythm
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-0">
          {flow.map((step, i) => (
            <div key={step.label} className="flex sm:flex-col items-center flex-1">
              <div className="flex sm:flex-col items-center w-full">
                <div className="flex flex-col items-center sm:items-center w-full">
                  <div className="w-10 h-10 rounded-full bg-[#d97757] text-white flex items-center justify-center font-mono text-sm font-semibold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="sm:text-center mt-2 sm:mt-3 px-2">
                    <p className="font-semibold text-[#2c1810] text-sm leading-snug">
                      {step.label}
                    </p>
                    <p className="text-[#d97757] font-mono text-xs mt-0.5">
                      {step.detail}
                    </p>
                    <p className="text-[#8b7368] text-xs mt-0.5 hidden sm:block">
                      {step.sub}
                    </p>
                  </div>
                </div>
              </div>
              {i < flow.length - 1 && (
                <div className="hidden sm:block w-px sm:w-8 h-8 sm:h-px bg-[#d97757]/30 flex-shrink-0 mx-1 self-start mt-5" />
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Decision filters */}
      <div className="flex flex-wrap gap-3">
        {decisions.map((d) => (
          <div
            key={d}
            className="px-4 py-2 rounded-full border border-[#d97757]/20 bg-[#d97757]/5 text-[#d97757] font-mono text-xs tracking-wide"
          >
            {d}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Section 2: Business Ecosystem ───────────────────────────────────────────

function SectionBusiness() {
  const [stripeData, setStripeData] = useState<StripeData | null>(null);
  const [stripeLoading, setStripeLoading] = useState(true);
  const [stripeError, setStripeError] = useState(false);

  useEffect(() => {
    async function fetchStripe() {
      try {
        const res = await fetch('/api/borges-os/stripe');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: StripeData = await res.json();
        setStripeData(data);
      } catch (err) {
        console.error('[Borges OS] Stripe fetch failed:', err);
        setStripeError(true);
      } finally {
        setStripeLoading(false);
      }
    }
    fetchStripe();
  }, []);

  const revenues = [
    { label: 'Real Estate', pct: 92, target: '$1.8M', color: 'bg-[#d97757]' },
    { label: 'The Answer Engine', pct: 6, target: '$120K', color: 'bg-[#e8956f]' },
    { label: 'Her Legacy', pct: 2, target: '$36K', color: 'bg-[#f0b99a]' },
  ];

  const pnl = [
    {
      month: 'Jan 2026',
      revenue: 35076,
      expenses: 15154,
      net: 21472,
      margin: 61,
      note: null,
    },
    {
      month: 'Feb 2026',
      revenue: 19340,
      expenses: null,
      net: 2525,
      margin: null,
      note: 'Removed $32,208 Select Portfolio (owner draw). Reported −$29,683.',
    },
    {
      month: 'Mar 2026',
      revenue: 13510,
      expenses: 12158,
      net: 1352,
      margin: null,
      note: 'HAHA Innovation ~$1,347 under investigation.',
    },
  ];

  const displayPayments =
    !stripeError && stripeData ? stripeData.payments : FALLBACK_PAYMENTS;

  const displayTotal =
    !stripeError && stripeData
      ? stripeData.totalFormatted
      : `$${FALLBACK_PAYMENTS.reduce((s, p) => s + p.amount, 0).toLocaleString()}`;

  return (
    <section id="business" className="scroll-mt-24 py-20">
      <SectionLabel>Section 02</SectionLabel>
      <h2 className="font-serif text-4xl text-[#2c1810] mb-10">
        Business Ecosystem
      </h2>

      {/* Revenue allocation bars */}
      <Card className="mb-6">
        <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-6">
          Revenue Allocation · $1,956,000 Household Target
        </p>
        <div className="space-y-5">
          {revenues.map((r) => (
            <div key={r.label}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-[#2c1810]">{r.label}</span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#8b7368]">{r.target}</span>
                  <span className="font-mono text-sm font-semibold text-[#d97757]">
                    {r.pct}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#ede8e2] rounded-full h-3">
                <div
                  className={`${r.color} h-3 rounded-full transition-all duration-700`}
                  style={{ width: `${r.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Time splits */}
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <Card>
          <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-5">
            JB Time Split
          </p>
          {[
            { label: 'Real Estate', pct: 60 },
            { label: 'The Answer Engine', pct: 25 },
            { label: 'Her Legacy (Advisory)', pct: 15 },
          ].map((t) => (
            <div key={t.label} className="mb-4">
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-[#5a4a42]">{t.label}</span>
                <span className="font-mono text-[#d97757] font-semibold">{t.pct}%</span>
              </div>
              <ProgressBar pct={t.pct} />
            </div>
          ))}
        </Card>
        <Card>
          <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-5">
            Brandy Time Split
          </p>
          {[
            { label: 'Her Legacy', pct: 90 },
            { label: 'RE (Consulting)', pct: 5 },
            { label: 'AE (Advisory)', pct: 5 },
          ].map((t) => (
            <div key={t.label} className="mb-4">
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-[#5a4a42]">{t.label}</span>
                <span className="font-mono text-[#d97757] font-semibold">{t.pct}%</span>
              </div>
              <ProgressBar pct={t.pct} />
            </div>
          ))}
        </Card>
      </div>

      {/* P&L cards */}
      <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-4">
        Real P&L · 2026
      </p>
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {pnl.map((m) => (
          <Card key={m.month} className="relative">
            <p className="font-mono text-xs tracking-[2px] uppercase text-[#d97757] mb-4">
              {m.month}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#8b7368]">Revenue</span>
                <span className="font-mono font-semibold text-[#2c1810]">
                  ${m.revenue.toLocaleString()}
                </span>
              </div>
              {m.expenses !== null && (
                <div className="flex justify-between">
                  <span className="text-[#8b7368]">Expenses</span>
                  <span className="font-mono font-semibold text-[#2c1810]">
                    ${m.expenses.toLocaleString()}
                  </span>
                </div>
              )}
              <div className="pt-2 border-t border-black/5 flex justify-between">
                <span className="text-[#8b7368]">Net</span>
                <span className="font-mono font-bold text-emerald-600">
                  ${m.net.toLocaleString()}
                  {m.margin !== null && (
                    <span className="text-xs ml-1 text-[#8b7368]">({m.margin}%)</span>
                  )}
                </span>
              </div>
            </div>
            {m.note && (
              <p className="mt-3 text-xs text-[#8b7368] italic leading-relaxed border-t border-black/5 pt-3">
                {m.note}
              </p>
            )}
          </Card>
        ))}
      </div>

      {/* Stripe / AE Revenue */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-1">
              AE · Stripe Payments
            </p>
            <p className="font-serif text-2xl text-[#2c1810]">
              {stripeLoading ? '—' : displayTotal}{' '}
              <span className="text-sm font-sans font-normal text-[#8b7368]">
                collected
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            {stripeLoading && (
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            )}
            {!stripeLoading && !stripeError && (
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
            )}
            {stripeError && (
              <div className="w-2 h-2 rounded-full bg-red-300" />
            )}
            <span className="font-mono text-xs text-[#8b7368]">
              {stripeLoading ? 'Loading...' : stripeError ? 'Fallback data' : 'Live'}
            </span>
          </div>
        </div>
        <div className="space-y-3">
          {stripeLoading ? (
            [...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-14 rounded-xl bg-[#f8f5f0] animate-pulse"
              />
            ))
          ) : (
            displayPayments.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between p-4 rounded-xl bg-[#f8f5f0] border border-black/4"
              >
                <div>
                  <p className="font-medium text-[#2c1810] text-sm">{p.name}</p>
                  <p className="font-mono text-xs text-[#8b7368] mt-0.5">{p.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-semibold text-[#d97757]">
                    {p.amountFormatted}
                  </p>
                  <p className="font-mono text-xs text-emerald-600 capitalize mt-0.5">
                    {p.status}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </Card>
    </section>
  );
}

// ─── Section 3: Goals ─────────────────────────────────────────────────────────

function SectionGoals() {
  const jbRocks = [
    { title: 'AI bot infrastructure for AE', status: 'In Progress', pct: 35 },
    { title: 'Tax strategy execution', status: 'Pending', pct: 15 },
    { title: 'Family presence', status: 'Ongoing', pct: 60 },
  ];

  const brandyRocks = [
    { title: 'Social media rhythms', status: 'In Progress', pct: 25 },
    { title: 'Summer remote work trip', status: 'Research', pct: 10 },
    { title: 'Morning movement', status: 'Ongoing', pct: 70 },
  ];

  const annualTargets = [
    { label: 'RE', ytd: 25349, target: 1800000, note: null },
    { label: 'AE', ytd: 2997, target: 120000, note: '2026 only' },
    { label: 'Her Legacy', ytd: 0, target: 36000, note: 'Pre-launch' },
  ];

  const householdYTD = 28346;
  const householdTarget = 1956000;
  const householdPct = (householdYTD / householdTarget) * 100;

  return (
    <section id="goals" className="scroll-mt-24 py-20">
      <SectionLabel>Section 03</SectionLabel>
      <h2 className="font-serif text-4xl text-[#2c1810] mb-10">Goal Tracker</h2>

      {/* Q2 Rocks */}
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <Card>
          <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-5">
            JB · Q2 Rocks
          </p>
          <div className="space-y-5">
            {jbRocks.map((r, i) => (
              <div key={i}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-sm font-medium text-[#2c1810] leading-snug">
                    {r.title}
                  </p>
                  <StatusBadge status={r.status} pct={r.pct} />
                </div>
                <ProgressBar pct={r.pct} />
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-5">
            Brandy · Q2 Rocks
          </p>
          <div className="space-y-5">
            {brandyRocks.map((r, i) => (
              <div key={i}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-sm font-medium text-[#2c1810] leading-snug">
                    {r.title}
                  </p>
                  <StatusBadge status={r.status} pct={r.pct} />
                </div>
                <ProgressBar pct={r.pct} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Annual targets */}
      <Card className="mb-6">
        <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-6">
          Annual Targets · 2026
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {annualTargets.map((t) => {
            const pct = (t.ytd / t.target) * 100;
            return (
              <div key={t.label}>
                <div className="flex justify-between items-center mb-1">
                  <p className="font-semibold text-[#2c1810]">{t.label}</p>
                  {t.note && (
                    <span className="font-mono text-xs text-[#8b7368]">{t.note}</span>
                  )}
                </div>
                <p className="font-mono text-2xl font-semibold text-[#d97757] mb-1">
                  ${t.ytd.toLocaleString()}
                </p>
                <p className="text-xs text-[#8b7368] mb-3">
                  of ${(t.target / 1000).toFixed(0)}K target
                </p>
                <ProgressBar pct={pct} />
                <p className="font-mono text-xs text-[#8b7368] mt-1.5">
                  {pct.toFixed(1)}%
                </p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Household YTD */}
      <Card className="bg-[#2c1810] text-white border-0">
        <p className="font-mono text-xs tracking-[2px] uppercase text-[#d97757] mb-3">
          Household YTD
        </p>
        <div className="flex items-end justify-between gap-4 mb-4">
          <div>
            <p className="font-serif text-4xl font-semibold mb-1">
              ${householdYTD.toLocaleString()}
            </p>
            <p className="text-black/50 text-sm">
              of ${householdTarget.toLocaleString()} target
            </p>
          </div>
          <p className="font-mono text-3xl font-bold text-[#d97757]">
            {householdPct.toFixed(1)}%
          </p>
        </div>
        <div className="w-full bg-black/10 rounded-full h-2">
          <div
            className="bg-[#d97757] h-2 rounded-full transition-all duration-700"
            style={{ width: `${Math.max(householdPct, 0.5)}%` }}
          />
        </div>
        <p className="text-white/30 text-xs font-mono mt-3">Apr 7, 2026</p>
      </Card>
    </section>
  );
}

// ─── Section 4: Calendar ──────────────────────────────────────────────────────

function SectionCalendar() {
  // April 2026 starts on Wednesday (index 3)
  const startDay = 3;
  const daysInMonth = 30;

  const events: Record<
    number,
    { label: string; type: 'family' | 'business' | 'personal'; done?: boolean }[]
  > = {
    4: [{ label: 'Brandy+Camden', type: 'family', done: true }],
    25: [{ label: 'JB+Lilly', type: 'family' }],
  };

  const typeColors = {
    family: 'bg-purple-400',
    business: 'bg-emerald-400',
    personal: 'bg-amber-400',
  };

  const typeBadge = {
    family: 'bg-purple-50 text-purple-700 border-purple-100',
    business: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    personal: 'bg-amber-50 text-amber-700 border-amber-100',
  };

  const upcomingEvents = [
    {
      date: 'Apr 4',
      label: 'Brandy + Camden date',
      type: 'family' as const,
      done: true,
    },
    { date: 'Apr 25', label: 'JB + Lilly date', type: 'family' as const },
    {
      date: 'May 4',
      label: 'CEO Meeting @ The Garland',
      type: 'business' as const,
    },
    {
      date: 'Jun 1',
      label: 'Q2 Review @ Sheraton',
      type: 'business' as const,
    },
    {
      date: 'Jun 4–7',
      label: 'Fishing Trip',
      type: 'personal' as const,
    },
    { date: 'Jun 6', label: 'JB + Camden date', type: 'family' as const },
    { date: 'Jun 27', label: 'Brandy + Lilly date', type: 'family' as const },
  ];

  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section id="calendar" className="scroll-mt-24 py-20">
      <SectionLabel>Section 04</SectionLabel>
      <h2 className="font-serif text-4xl text-[#2c1810] mb-10">
        Calendar &amp; Events
      </h2>

      <Card className="mb-6">
        <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-6">
          April 2026
        </p>
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {dayLabels.map((d) => (
            <div
              key={d}
              className="text-center font-mono text-xs text-[#8b7368] py-2"
            >
              {d}
            </div>
          ))}
        </div>
        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {[...Array(startDay)].map((_, i) => (
            <div key={`e-${i}`} />
          ))}
          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const dayEvents = events[day] ?? [];
            const isToday = day === 7;
            return (
              <div
                key={day}
                className={`min-h-[52px] rounded-lg p-1.5 border text-center ${
                  isToday
                    ? 'bg-[#d97757] border-[#d97757] text-white'
                    : 'border-black/5 bg-[#f8f5f0]'
                }`}
              >
                <p
                  className={`font-mono text-xs font-semibold mb-1 ${
                    isToday ? 'text-white' : 'text-[#2c1810]'
                  }`}
                >
                  {day}
                </p>
                <div className="flex flex-wrap justify-center gap-0.5">
                  {dayEvents.map((ev, ei) => (
                    <div
                      key={ei}
                      className={`w-1.5 h-1.5 rounded-full ${typeColors[ev.type]}`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-black/5">
          {(Object.keys(typeColors) as (keyof typeof typeColors)[]).map((t) => (
            <div key={t} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${typeColors[t]}`} />
              <span className="font-mono text-xs text-[#8b7368] capitalize">{t}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Events list */}
      <Card>
        <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-5">
          Upcoming Events
        </p>
        <div className="space-y-3">
          {upcomingEvents.map((ev, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-3 rounded-xl ${
                ev.done ? 'opacity-50' : 'bg-[#f8f5f0]'
              }`}
            >
              <span
                className={`font-mono text-sm font-semibold min-w-[60px] ${
                  ev.done ? 'text-[#8b7368] line-through' : 'text-[#d97757]'
                }`}
              >
                {ev.date}
              </span>
              <span
                className={`flex-1 text-sm ${
                  ev.done ? 'text-[#8b7368] line-through' : 'text-[#2c1810]'
                }`}
              >
                {ev.label}
              </span>
              <span
                className={`text-xs font-mono px-2.5 py-0.5 rounded-full border capitalize ${typeBadge[ev.type]}`}
              >
                {ev.type}
              </span>
              {ev.done && (
                <span className="font-mono text-xs text-[#8b7368]">done</span>
              )}
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

// ─── Section 5: Daily Brief ───────────────────────────────────────────────────

function SectionBrief() {
  const briefSections = [
    {
      icon: '📅',
      label: 'This Week',
      body: 'RE quiet week. AE onboarding Ryan on track — strategy call with Davis Wed. Her Legacy white shirt samples arriving for review.',
    },
    {
      icon: '👦',
      label: 'Family Spotlight · Camden',
      body: "Camden's energy is contagious right now. He's been asking about the fishing trip — mark Jun 6 for your date with him.",
    },
    {
      icon: '🪨',
      label: 'Rocks Pulse',
      body: 'JB: AI bot 35% ↗ · Tax strategy 15% → · Family presence 60% ↗. Brandy: Social rhythms 25% ↗ · Summer trip research 10% → · Morning movement 70% ↗',
    },
    {
      icon: '📈',
      label: 'Business Momentum',
      body: 'Household YTD: $28,346 (1.4%). AE has 3 paying clients. RE: 2 deals in contract. Her Legacy pre-launch phase holds.',
    },
    {
      icon: '✈️',
      label: 'Flight Watch · Hawaii',
      body: 'Target: $2,400 round trip for two. Current rates running high — set alert for sub-$1,200/person. Aim late Aug or early Sep.',
    },
    {
      icon: '🏡',
      label: 'Deal Picks',
      body: '2 active contracts in RE pipeline. Next priority: convert AE prospects Miles & Davis to retainer growth. Ryan contract signature still pending.',
    },
    {
      icon: '🌸',
      label: 'A Moment for You',
      body: '"The most authentic version of yourself is waiting in a Wyoming morning. Keep building toward that moment — one rock at a time."',
    },
  ];

  return (
    <section id="daily" className="scroll-mt-24 py-20">
      <SectionLabel>Section 05</SectionLabel>
      <h2 className="font-serif text-4xl text-[#2c1810] mb-10">
        Borges Daily Brief
      </h2>

      <Card>
        {/* Email header mockup */}
        <div className="border-b border-black/5 pb-5 mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-[#8b7368] mb-1">
                To: hbrandy441@gmail.com
              </p>
              <p className="font-mono text-xs text-[#8b7368]">
                From: Borges OS · Daily Brief
              </p>
            </div>
            <span className="font-mono text-xs text-[#8b7368] bg-[#f8f5f0] px-3 py-1 rounded-full">
              Apr 7, 2026
            </span>
          </div>
        </div>

        <h3 className="font-serif text-3xl text-[#2c1810] mb-8">
          Good Morning, Brandy
        </h3>

        <div className="space-y-5">
          {briefSections.map((s, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-[#f8f5f0] border border-black/4"
            >
              <p className="font-mono text-xs tracking-[2px] uppercase text-[#d97757] mb-2">
                {s.icon} {s.label}
              </p>
              <p className="text-sm text-[#5a4a42] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

// ─── Section 6: Cadence ───────────────────────────────────────────────────────

function SectionCadence() {
  const cadence = [
    {
      freq: 'Daily',
      name: 'Borges Daily Brief',
      detail: '7:30 AM → Brandy',
      sub: 'Intelligence pulse, automated',
    },
    {
      freq: 'Weekly',
      name: 'Sunday Check-In',
      detail: 'JB & Brandy · 30 min',
      sub: 'Family + business review',
    },
    {
      freq: 'Monthly',
      name: 'CEO Meeting',
      detail: 'Rotating hotel',
      sub: 'Deep strategy & financials',
    },
    {
      freq: 'Quarterly',
      name: 'Q Review + Planning',
      detail: 'Full session',
      sub: 'OKRs, rocks, strategy reset',
    },
  ];

  const accountability = [
    {
      label: 'Ryan Fisher contract signature',
      tier: 'urgent' as const,
      owner: 'JB',
      flags: 3,
    },
    {
      label: 'AI bot infrastructure for AE',
      tier: 'urgent' as const,
      owner: 'JB',
      flags: 3,
    },
    {
      label: 'Her Legacy Shopify shell',
      tier: 'urgent' as const,
      owner: 'Brandy',
      flags: 3,
    },
    {
      label: 'Session with Molly (3+ meetings flag)',
      tier: 'urgent' as const,
      owner: 'Both',
      flags: 4,
    },
    {
      label: 'Tax strategy execution',
      tier: 'pending' as const,
      owner: 'JB',
      flags: 2,
    },
    {
      label: 'Community database build',
      tier: 'pending' as const,
      owner: 'JB',
      flags: 1,
    },
    {
      label: 'Hawaii flight watch',
      tier: 'watching' as const,
      owner: 'Both',
      flags: 0,
    },
    {
      label: 'Disneyland date planning',
      tier: 'watching' as const,
      owner: 'Both',
      flags: 0,
    },
  ];

  const tierDot: Record<'urgent' | 'pending' | 'watching', string> = {
    urgent: 'bg-[#d97757]',
    pending: 'bg-amber-400',
    watching: 'bg-blue-400',
  };

  const tierLabel: Record<'urgent' | 'pending' | 'watching', string> = {
    urgent: 'Urgent',
    pending: 'Pending',
    watching: 'Watching',
  };

  const hotels = [
    { month: 'Jan', name: 'Hotel Bel-Air', done: true },
    { month: 'Feb', name: 'NoMad LA', done: true },
    { month: 'Mar', name: 'Proper Hotel', done: true },
    { month: 'Apr', name: 'Pendry', done: true },
    { month: 'May', name: 'The Garland', done: false, active: true },
    { month: 'Jun', name: 'Sheraton', done: false },
    { month: 'Jul', name: 'TBD', done: false },
    { month: 'Aug', name: 'TBD', done: false },
    { month: 'Sep', name: 'TBD', done: false },
    { month: 'Oct', name: 'TBD', done: false },
    { month: 'Nov', name: 'TBD', done: false },
    { month: 'Dec', name: 'TBD', done: false },
  ];

  return (
    <section id="cadence" className="scroll-mt-24 py-20">
      <SectionLabel>Section 06</SectionLabel>
      <h2 className="font-serif text-4xl text-[#2c1810] mb-10">
        Meeting Cadence &amp; Accountability
      </h2>

      {/* Timeline */}
      <Card className="mb-6">
        <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-6">
          Meeting Timeline
        </p>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#ede8e2]" />
          <div className="space-y-6 pl-12">
            {cadence.map((c, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[2.05rem] top-1 w-3 h-3 rounded-full bg-[#d97757] border-2 border-white" />
                <div className="flex items-start gap-6">
                  <div className="min-w-[72px]">
                    <span className="font-mono text-xs font-semibold text-[#d97757] uppercase tracking-wider">
                      {c.freq}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2c1810] text-sm">{c.name}</p>
                    <p className="text-[#8b7368] text-xs mt-0.5">{c.detail}</p>
                    <p className="text-[#8b7368] text-xs mt-0.5">{c.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Accountability items */}
      <Card className="mb-6">
        <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-5">
          Accountability Items
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {accountability.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f5f0] border border-black/4"
            >
              <div
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${tierDot[item.tier]}`}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#2c1810] leading-snug">{item.label}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-mono text-xs text-[#8b7368]">
                    {item.owner}
                  </span>
                  <span className="font-mono text-xs text-[#8b7368]">·</span>
                  <span className="font-mono text-xs text-[#8b7368]">
                    {tierLabel[item.tier]}
                  </span>
                  {item.flags >= 3 && (
                    <span className="font-mono text-xs text-[#d97757]">
                      · {item.flags} flags
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* CEO Hotel rotation */}
      <Card>
        <p className="font-mono text-xs tracking-[2px] uppercase text-[#8b7368] mb-5">
          CEO Meeting · Hotel Rotation 2026
        </p>
        <div className="flex flex-wrap gap-2">
          {hotels.map((h) => (
            <div
              key={h.month}
              className={`px-3 py-2 rounded-lg text-center min-w-[72px] border transition-all ${
                h.active
                  ? 'bg-[#d97757] border-[#d97757] text-white'
                  : h.done
                  ? 'bg-[#f8f5f0] border-black/5 opacity-50'
                  : 'bg-[#f8f5f0] border-black/5'
              }`}
            >
              <p
                className={`font-mono text-xs font-semibold ${
                  h.active ? 'text-white' : h.done ? 'line-through text-[#8b7368]' : 'text-[#2c1810]'
                }`}
              >
                {h.month}
              </p>
              <p
                className={`text-xs mt-0.5 ${
                  h.active ? 'text-white/80' : h.done ? 'text-[#8b7368] line-through' : 'text-[#8b7368]'
                }`}
              >
                {h.name}
              </p>
            </div>
          ))}
        </div>
        <p className="font-mono text-xs text-[#8b7368] mt-4">
          · May 4 @ The Garland is the next confirmed session
        </p>
      </Card>
    </section>
  );
}

// ─── Sticky Nav ───────────────────────────────────────────────────────────────

function StickyNav({ active }: { active: string }) {
  const links = [
    { id: 'system', label: 'System' },
    { id: 'business', label: 'Business' },
    { id: 'goals', label: 'Goals' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'daily', label: 'Daily' },
    { id: 'cadence', label: 'Cadence' },
  ];

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="sticky top-0 z-40 bg-[#f8f5f0]/95 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <span className="font-serif text-lg text-[#2c1810] font-semibold tracking-tight">
          Borges OS
        </span>
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs tracking-wide transition-all whitespace-nowrap ${
                active === l.id
                  ? 'bg-[#d97757] text-white'
                  : 'text-[#8b7368] hover:text-[#2c1810] hover:bg-black/5'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

function Dashboard() {
  const [activeSection, setActiveSection] = useState('system');

  const handleScroll = useCallback(() => {
    const sections = ['system', 'business', 'goals', 'calendar', 'daily', 'cadence'];
    const scrollY = window.scrollY + 120;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div
      className={`${playfair.variable} ${jetbrains.variable} min-h-screen bg-[#f8f5f0]`}
      style={
        {
          '--font-serif': 'var(--font-playfair)',
          '--font-mono': 'var(--font-jetbrains)',
        } as React.CSSProperties
      }
    >
      <StickyNav active={activeSection} />
      <main className="max-w-5xl mx-auto px-6">
        <SectionSystem />
        <div className="h-px bg-black/5" />
        <SectionBusiness />
        <div className="h-px bg-black/5" />
        <SectionGoals />
        <div className="h-px bg-black/5" />
        <SectionCalendar />
        <div className="h-px bg-black/5" />
        <SectionBrief />
        <div className="h-px bg-black/5" />
        <SectionCadence />
      </main>

      <footer className="border-t border-black/5 py-8 mt-10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-xs text-[#8b7368] text-center">
            The Borges Operating System · 2026 · Data synced Apr 7
          </p>
        </div>
      </footer>
    </div>
  );
}

// ─── Root Page ────────────────────────────────────────────────────────────────

export default function BorgesOSPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    setAuthed(stored === '1');
  }, []);

  // Avoid flash during hydration
  if (authed === null) {
    return (
      <div
        className={`${playfair.variable} ${jetbrains.variable} min-h-screen bg-[#f8f5f0]`}
      />
    );
  }

  if (!authed) {
    return <LoginScreen onAuth={() => setAuthed(true)} />;
  }

  return <Dashboard />;
}
