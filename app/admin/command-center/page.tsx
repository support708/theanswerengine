'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import type { DashboardData, ProcessStatus, ProjectSummary, ScheduledTask } from '@/lib/command-center';

// ─── Utility Components ───────────────────────────────────────────────

function StatusDot({ status, size = 'sm' }: { status: string; size?: 'sm' | 'md' }) {
  const color =
    status === 'online' || status === 'healthy' || status === 'active'
      ? 'bg-emerald-400'
      : status === 'degraded' || status === 'paused' || status === 'planned'
        ? 'bg-amber-400'
        : status === 'unknown'
          ? 'bg-zinc-500'
          : 'bg-red-400';

  const dims = size === 'md' ? 'h-3 w-3' : 'h-2 w-2';

  return (
    <span className={`relative flex ${dims}`}>
      {(status === 'online' || status === 'healthy' || status === 'active') && (
        <span className={`absolute inline-flex h-full w-full rounded-full ${color} opacity-40 animate-ping`} />
      )}
      <span className={`relative inline-flex ${dims} rounded-full ${color}`} />
    </span>
  );
}

function LiveTimer({ date }: { date: string | null }) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!date) return <span className="text-zinc-600 tabular-nums">--:--</span>;

  const diff = Math.floor((now - new Date(date).getTime()) / 1000);
  const mins = Math.floor(diff / 60);
  const secs = diff % 60;

  if (diff < 0) return <span className="text-zinc-500 tabular-nums">just now</span>;
  if (diff < 3600) {
    return (
      <span className={`tabular-nums ${mins > 35 ? 'text-amber-400' : 'text-zinc-400'}`}>
        {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')} ago
      </span>
    );
  }
  if (diff < 86400) return <span className="text-zinc-400 tabular-nums">{Math.floor(diff / 3600)}h ago</span>;
  return <span className="text-zinc-500 tabular-nums">{Math.floor(diff / 86400)}d ago</span>;
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Glass Card ───────────────────────────────────────────────────────

function GlassCard({
  children,
  className = '',
  glow = false,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm ${
        glow ? 'shadow-[0_0_80px_-20px_rgba(16,185,129,0.15)]' : ''
      } ${className}`}
    >
      {/* Gradient border shimmer */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  sub,
  accent,
  delay,
}: {
  label: string;
  value: number | string;
  sub: string;
  accent?: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <GlassCard className="p-5">
        <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-500 mb-3">
          {label}
        </div>
        <div className={`text-3xl font-light tabular-nums ${accent || 'text-white'}`}>
          {value}
        </div>
        <div className="text-[11px] text-zinc-600 mt-1">{sub}</div>
      </GlassCard>
    </FadeIn>
  );
}

// ─── Memory Bar ───────────────────────────────────────────────────────

function MemoryBar({ memory }: { memory: string }) {
  const match = memory.match(/([\d.]+)\s*(MB|GB)/);
  if (!match) return null;
  const value = parseFloat(match[1]);
  const unit = match[2];
  const maxMB = unit === 'GB' ? value * 1024 : value;
  const pct = Math.min((maxMB / 512) * 100, 100);

  return (
    <div className="mt-3">
      <div className="flex justify-between text-[10px] mb-1">
        <span className="text-zinc-600">Memory</span>
        <span className="text-zinc-400 tabular-nums">{memory}</span>
      </div>
      <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500/60 to-emerald-400/40 transition-all duration-1000"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// ─── Process Card (Premium) ───────────────────────────────────────────

function ProcessCardPremium({ process, delay }: { process: ProcessStatus; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <GlassCard className="p-5" glow={process.status === 'online'}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <StatusDot status={process.status} size="md" />
            <h3 className="text-white font-medium text-sm tracking-tight">{process.name}</h3>
          </div>
          <span
            className={`text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 rounded-full ${
              process.status === 'online'
                ? 'bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20'
                : process.status === 'stopped'
                  ? 'bg-zinc-800/50 text-zinc-500 ring-1 ring-zinc-700/50'
                  : 'bg-red-500/10 text-red-400 ring-1 ring-red-500/20'
            }`}
          >
            {process.status}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'PID', value: process.pid ?? '—' },
            { label: 'CPU', value: process.cpu || '—' },
            { label: 'Uptime', value: process.uptime || '—' },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-[10px] text-zinc-600 tracking-wider uppercase">{item.label}</div>
              <div className="text-xs text-zinc-300 tabular-nums mt-0.5">{item.value}</div>
            </div>
          ))}
        </div>

        <MemoryBar memory={process.memory} />

        {process.restarts > 0 && (
          <div className="mt-3 flex items-center gap-1.5 text-amber-400/80">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <span className="text-[10px] tabular-nums">{process.restarts} restart{process.restarts !== 1 ? 's' : ''}</span>
          </div>
        )}
      </GlassCard>
    </FadeIn>
  );
}

// ─── Project Card (Premium) ──────────────────────────────────────────

function ProjectCardPremium({ project, delay }: { project: ProjectSummary; delay: number }) {
  const statusColors: Record<string, string> = {
    active: 'text-emerald-400',
    paused: 'text-amber-400',
    planned: 'text-zinc-500',
  };

  return (
    <FadeIn delay={delay}>
      <GlassCard className="p-5 group hover:border-white/[0.1] transition-colors duration-500">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <StatusDot status={project.status} />
            <h3 className="text-white font-medium text-sm tracking-tight">{project.name}</h3>
          </div>
          <span className={`text-[10px] tracking-[0.15em] uppercase ${statusColors[project.status] || 'text-zinc-500'}`}>
            {project.status}
          </span>
        </div>
        <p className="text-zinc-500 text-xs leading-relaxed">{project.description}</p>
      </GlassCard>
    </FadeIn>
  );
}

// ─── Daily Context (Markdown-ish renderer) ────────────────────────────

function DailyContextBlock({ content }: { content: string }) {
  const lines = content.split('\n');

  return (
    <div className="space-y-1.5">
      {lines.map((line, i) => {
        if (line.startsWith('# ')) {
          return (
            <h3 key={i} className="text-white/80 text-xs font-semibold tracking-wide uppercase mt-3 first:mt-0">
              {line.replace('# ', '')}
            </h3>
          );
        }
        if (line.startsWith('## ')) {
          return (
            <h4 key={i} className="text-zinc-400 text-[11px] font-medium tracking-wide uppercase mt-3">
              {line.replace('## ', '')}
            </h4>
          );
        }
        if (line.startsWith('- ')) {
          return (
            <div key={i} className="flex gap-2 text-xs text-zinc-400 leading-relaxed pl-1">
              <span className="text-zinc-600 mt-0.5 shrink-0">&bull;</span>
              <span>{line.replace('- ', '')}</span>
            </div>
          );
        }
        if (line.trim() === '') return <div key={i} className="h-1" />;
        return (
          <p key={i} className="text-xs text-zinc-400 leading-relaxed">
            {line}
          </p>
        );
      })}
    </div>
  );
}

// ─── Main Dashboard ──────────────────────────────────────────────────

export default function CommandCenterPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/api/command-center');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const dashboard = await res.json();
      setData(dashboard);
      setError(null);
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [fetchData]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#08090C] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-black/10 border-t-black/40 rounded-full animate-spin" />
          <span className="text-zinc-600 text-xs tracking-[0.3em] uppercase">Loading systems</span>
        </div>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="min-h-screen bg-[#08090C] flex items-center justify-center">
        <div className="text-red-400/80 text-sm font-mono">{error}</div>
      </div>
    );
  }

  if (!data) return null;

  const heartbeatAge = data.lastUpdated
    ? Math.floor((Date.now() - new Date(data.lastUpdated).getTime()) / 60000)
    : null;
  const heartbeatStale = heartbeatAge !== null && heartbeatAge > 35;
  const onlineCount = data.processes.filter((p) => p.status === 'online').length;
  const enabledTasks = data.scheduledTasks.filter((t) => t.enabled).length;

  return (
    <div className="min-h-screen bg-[#08090C]">
      {/* Sticky top status bar */}
      <div className="sticky top-0 z-50 bg-[#08090C]/80 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <StatusDot status={data.systemHealth} size="md" />
            <span className="text-white/90 text-sm font-medium tracking-tight">Command Center</span>
            <span className="text-zinc-700 text-xs">|</span>
            <span className="text-zinc-500 text-xs tabular-nums">
              <LiveTimer date={data.lastUpdated} />
            </span>
            {heartbeatStale && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20">
                STALE
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {data.machine && (
              <span className="text-zinc-600 text-[10px] tracking-wider uppercase mr-3 hidden md:block">
                {data.machine.hostname}
              </span>
            )}
            <Link
              href="/admin/pipeline"
              className="px-3 py-1.5 text-[11px] text-zinc-500 hover:text-white border border-white/[0.06] hover:border-white/[0.12] rounded-lg transition-all duration-300"
            >
              Pipeline
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="px-3 py-1.5 text-[11px] text-zinc-500 hover:text-white border border-white/[0.06] hover:border-white/[0.12] rounded-lg transition-all duration-300"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <FadeIn className="mb-10">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-zinc-600 mb-2">
                Three-Layer System
              </div>
              <h1 className="text-3xl font-light text-white tracking-tight">
                Systems Overview
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`h-2 w-2 rounded-full ${
                  data.systemHealth === 'healthy'
                    ? 'bg-emerald-400'
                    : data.systemHealth === 'degraded'
                      ? 'bg-amber-400'
                      : data.systemHealth === 'critical'
                        ? 'bg-red-400'
                        : 'bg-zinc-600'
                }`}
              />
              <span
                className={`text-xs font-medium ${
                  data.systemHealth === 'healthy'
                    ? 'text-emerald-400'
                    : data.systemHealth === 'degraded'
                      ? 'text-amber-400'
                      : data.systemHealth === 'critical'
                        ? 'text-red-400'
                        : 'text-zinc-500'
                }`}
              >
                {data.systemHealth === 'healthy'
                  ? 'All Systems Nominal'
                  : data.systemHealth === 'degraded'
                    ? 'Degraded Performance'
                    : data.systemHealth === 'critical'
                      ? 'Critical'
                      : 'Awaiting Heartbeat'}
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Stat Cards — Bento Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <StatCard label="Pipeline" value={data.answerEngine.totalLeads} sub={`${data.answerEngine.activeLeads} active leads`} delay={80} />
          <StatCard label="Won" value={data.answerEngine.closedWon} sub="clients signed" accent="text-emerald-400" delay={160} />
          <StatCard label="Processes" value={`${onlineCount}/${data.processes.length}`} sub="online" delay={240} />
          <StatCard label="Tasks" value={`${enabledTasks}/${data.scheduledTasks.length}`} sub="scheduled" delay={320} />
        </div>

        {/* Bento Grid — Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-8">
          {/* PM2 Processes — spans 1 col */}
          <div className="lg:col-span-1">
            <FadeIn delay={400}>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-600 mb-3">
                PM2 Processes
              </div>
            </FadeIn>
            <div className="space-y-3">
              {data.processes.length > 0 ? (
                data.processes.map((p, i) => (
                  <ProcessCardPremium key={p.name} process={p} delay={450 + i * 80} />
                ))
              ) : (
                <FadeIn delay={450}>
                  <GlassCard className="p-8 text-center">
                    <span className="text-zinc-600 text-xs tracking-wider">Awaiting first heartbeat</span>
                  </GlassCard>
                </FadeIn>
              )}
            </div>
          </div>

          {/* Daily Context — spans 2 cols */}
          <div className="lg:col-span-2">
            <FadeIn delay={400}>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-600 mb-3">
                Daily Context
              </div>
            </FadeIn>
            <FadeIn delay={480}>
              <GlassCard className="p-6 h-full">
                {data.dailyContext ? (
                  <DailyContextBlock content={data.dailyContext} />
                ) : (
                  <div className="flex items-center justify-center h-full min-h-[120px]">
                    <span className="text-zinc-600 text-xs tracking-wider">
                      Start a Claude Code session to populate
                    </span>
                  </div>
                )}
              </GlassCard>
            </FadeIn>
          </div>
        </div>

        {/* Scheduled Tasks */}
        {data.scheduledTasks.length > 0 && (
          <div className="mb-8">
            <FadeIn delay={560}>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-600 mb-3">
                Scheduled Tasks
              </div>
            </FadeIn>
            <FadeIn delay={620}>
              <GlassCard className="overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.04]">
                      <th className="text-left text-[10px] tracking-[0.15em] uppercase text-zinc-600 font-medium py-3 px-5">
                        Task
                      </th>
                      <th className="text-left text-[10px] tracking-[0.15em] uppercase text-zinc-600 font-medium py-3 px-5 hidden md:table-cell">
                        Description
                      </th>
                      <th className="text-left text-[10px] tracking-[0.15em] uppercase text-zinc-600 font-medium py-3 px-5">
                        Schedule
                      </th>
                      <th className="text-right text-[10px] tracking-[0.15em] uppercase text-zinc-600 font-medium py-3 px-5">
                        Last Run
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.scheduledTasks.map((task, i) => (
                      <tr
                        key={task.id}
                        className={`border-b border-white/[0.03] last:border-0 transition-colors hover:bg-white/[0.02] ${
                          i % 2 === 1 ? 'bg-white/[0.01]' : ''
                        }`}
                      >
                        <td className="py-3 px-5">
                          <div className="flex items-center gap-2.5">
                            <StatusDot status={task.enabled ? 'online' : 'stopped'} />
                            <span className="text-zinc-300 text-sm font-medium">{task.id}</span>
                          </div>
                        </td>
                        <td className="py-3 px-5 text-zinc-500 text-xs hidden md:table-cell">
                          {task.description}
                        </td>
                        <td className="py-3 px-5">
                          <span className="text-zinc-400 text-xs font-mono tabular-nums">{task.schedule}</span>
                        </td>
                        <td className="py-3 px-5 text-right text-xs">
                          <LiveTimer date={task.lastRun} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </GlassCard>
            </FadeIn>
          </div>
        )}

        {/* Projects Grid */}
        <div className="mb-12">
          <FadeIn delay={700}>
            <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-600 mb-3">
              Projects
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.projects.map((p, i) => (
              <ProjectCardPremium key={p.name} project={p} delay={750 + i * 60} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <FadeIn delay={1000}>
          <div className="border-t border-white/[0.04] pt-6 pb-4 flex items-center justify-between">
            <span className="text-zinc-700 text-[10px] tracking-[0.2em] uppercase">
              The Answer Engine
            </span>
            <span className="text-zinc-700 text-[10px] tabular-nums">
              Auto-refresh 30s
            </span>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
