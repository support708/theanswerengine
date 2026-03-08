'use client';

import { useState, useEffect, useCallback } from 'react';
import { signOut } from 'next-auth/react';
import type { Lead, LeadStatus } from '@/lib/types';
import LeadForm from '@/app/components/admin/LeadForm';
import LeadTable from '@/app/components/admin/LeadTable';
import StatusBadge from '@/app/components/admin/StatusBadge';

const STATUS_ORDER: LeadStatus[] = [
  'queued', 'researching', 'research_complete', 'generating_report',
  'report_ready', 'email_drafted', 'approved', 'sent',
  'replied', 'follow_up_1', 'follow_up_2', 'follow_up_3',
  'closed_won', 'closed_lost', 'no_response',
];

interface HuntStatus {
  state: {
    currentWeek: number;
    currentVerticalIndex: number;
    currentMetroIndex: number;
    totalLeadsQueued: number;
    totalSessionsRun: number;
    lastDailyRun?: string;
  };
  lastSession?: {
    id: string;
    trigger: string;
    vertical: string;
    metro: string;
    prospectsFound: number;
    p1Queued: number;
    p2Queued: number;
    p3Backlogged: number;
    duplicatesSkipped: number;
    errors: string[];
    completedAt?: string;
  };
  nextTarget: { vertical: string; metro: string };
  backlogCount: number;
  huntEnabled: boolean;
}

export default function PipelinePage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<LeadStatus | 'all'>('all');
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'hunter'>('pipeline');
  const [huntStatus, setHuntStatus] = useState<HuntStatus | null>(null);
  const [huntLoading, setHuntLoading] = useState(false);
  const [huntRunning, setHuntRunning] = useState(false);

  const fetchLeads = useCallback(async () => {
    try {
      const res = await fetch('/api/leads');
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchHuntStatus = useCallback(async () => {
    try {
      setHuntLoading(true);
      const res = await fetch('/api/hunt/status');
      if (res.ok) {
        const data = await res.json();
        setHuntStatus(data);
      }
    } finally {
      setHuntLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeads();
    const interval = setInterval(fetchLeads, 30000);
    return () => clearInterval(interval);
  }, [fetchLeads]);

  useEffect(() => {
    if (activeTab === 'hunter') {
      fetchHuntStatus();
    }
  }, [activeTab, fetchHuntStatus]);

  async function handleAction(id: string, action: string) {
    if (action === 'delete') {
      if (!confirm('Delete this lead? This cannot be undone.')) return;
      await fetch(`/api/leads/${id}`, { method: 'DELETE' });
      fetchLeads();
      return;
    }

    if (action === 'research') {
      setActionLoading(id);
      try {
        await fetch(`/api/leads/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            status: 'researching',
            action: 'Research started',
          }),
        });
        fetchLeads();

        const res = await fetch('/api/generate-report', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ leadId: id }),
        });

        if (!res.ok) {
          const err = await res.json();
          alert(`Research failed: ${err.error || 'Unknown error'}`);
          await fetch(`/api/leads/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              status: 'queued',
              action: 'Research failed - reverted to queued',
            }),
          });
        }

        fetchLeads();
      } finally {
        setActionLoading(null);
      }
    }
  }

  async function handleRunHunt() {
    if (!confirm('Run a manual hunt now? This will search for new leads.')) return;
    setHuntRunning(true);
    try {
      const res = await fetch('/api/hunt', { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        alert(`Hunt complete! Found ${data.session.prospectsFound} prospects. P1: ${data.session.p1Queued}, P2: ${data.session.p2Queued} queued.`);
        fetchLeads();
        fetchHuntStatus();
      } else {
        alert(`Hunt failed: ${data.error}`);
      }
    } catch {
      alert('Hunt request failed');
    } finally {
      setHuntRunning(false);
    }
  }

  const filtered = filter === 'all' ? leads : leads.filter(l => l.status === filter);
  const counts = STATUS_ORDER.reduce((acc, s) => {
    acc[s] = leads.filter(l => l.status === s).length;
    return acc;
  }, {} as Record<string, number>);

  const huntLeadsCount = leads.filter(l => l.huntSource).length;

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Blind Spot Pipeline</h1>
          <p className="text-zinc-400 text-sm mt-1">
            {leads.length} lead{leads.length !== 1 ? 's' : ''} total
            {huntLeadsCount > 0 && ` (${huntLeadsCount} from hunter)`}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <LeadForm onLeadCreated={fetchLeads} />
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="px-4 py-2 text-sm text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-lg transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-1 mb-6 bg-zinc-900 rounded-lg p-1 w-fit">
        <button
          onClick={() => setActiveTab('pipeline')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            activeTab === 'pipeline'
              ? 'bg-zinc-700 text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Pipeline
        </button>
        <button
          onClick={() => setActiveTab('hunter')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            activeTab === 'hunter'
              ? 'bg-zinc-700 text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Lead Hunter
        </button>
      </div>

      {activeTab === 'pipeline' ? (
        <>
          {/* Status filter pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-zinc-600 text-white'
                  : 'bg-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              All ({leads.length})
            </button>
            {STATUS_ORDER.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  filter === s
                    ? 'bg-zinc-600 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                <StatusBadge status={s} />
                <span>({counts[s] || 0})</span>
              </button>
            ))}
          </div>

          {actionLoading && (
            <div className="mb-4 p-4 bg-blue-900/20 border border-blue-800 rounded-lg flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
              <span className="text-blue-300 text-sm">
                Researching and generating report... This may take 30-60 seconds.
              </span>
            </div>
          )}

          {loading ? (
            <div className="text-zinc-500 text-center py-20">Loading leads...</div>
          ) : (
            <LeadTable leads={filtered} onAction={handleAction} />
          )}
        </>
      ) : (
        /* Lead Hunter Tab */
        <div className="space-y-6">
          {/* Hunt controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleRunHunt}
              disabled={huntRunning}
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 disabled:bg-zinc-700 disabled:text-zinc-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              {huntRunning ? 'Hunting...' : 'Run Hunt Now'}
            </button>
            <button
              onClick={fetchHuntStatus}
              disabled={huntLoading}
              className="px-4 py-2.5 text-sm text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-lg transition-colors"
            >
              Refresh
            </button>
          </div>

          {huntRunning && (
            <div className="p-4 bg-orange-900/20 border border-orange-800 rounded-lg flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-orange-400 border-t-transparent rounded-full animate-spin" />
              <span className="text-orange-300 text-sm">
                Hunting for leads... This may take 30-60 seconds.
              </span>
            </div>
          )}

          {huntLoading && !huntStatus ? (
            <div className="text-zinc-500 text-center py-10">Loading hunt status...</div>
          ) : huntStatus ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Status card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                <h3 className="text-sm font-medium text-zinc-400 mb-3">Hunt Status</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-zinc-500 text-sm">Enabled</span>
                    <span className={`text-sm font-medium ${huntStatus.huntEnabled ? 'text-green-400' : 'text-red-400'}`}>
                      {huntStatus.huntEnabled ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 text-sm">Sessions Run</span>
                    <span className="text-white text-sm">{huntStatus.state.totalSessionsRun}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 text-sm">Total Queued</span>
                    <span className="text-white text-sm">{huntStatus.state.totalLeadsQueued}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 text-sm">Backlog</span>
                    <span className="text-zinc-300 text-sm">{huntStatus.backlogCount} P3s</span>
                  </div>
                </div>
              </div>

              {/* Rotation card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                <h3 className="text-sm font-medium text-zinc-400 mb-3">Next Hunt Target</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-zinc-500 text-sm">Week</span>
                    <span className="text-white text-sm">{huntStatus.state.currentWeek} of 8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 text-sm">Vertical</span>
                    <span className="text-orange-400 text-sm font-medium">{huntStatus.nextTarget.vertical}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 text-sm">Metro</span>
                    <span className="text-orange-400 text-sm font-medium">{huntStatus.nextTarget.metro}</span>
                  </div>
                  {huntStatus.state.lastDailyRun && (
                    <div className="flex justify-between">
                      <span className="text-zinc-500 text-sm">Last Run</span>
                      <span className="text-zinc-300 text-sm">
                        {new Date(huntStatus.state.lastDailyRun).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Last session card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                <h3 className="text-sm font-medium text-zinc-400 mb-3">Last Session</h3>
                {huntStatus.lastSession ? (
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-zinc-500 text-sm">Target</span>
                      <span className="text-white text-sm">
                        {huntStatus.lastSession.vertical} x {huntStatus.lastSession.metro.split(',')[0]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 text-sm">Found</span>
                      <span className="text-white text-sm">{huntStatus.lastSession.prospectsFound}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 text-sm">P1 Queued</span>
                      <span className="text-green-400 text-sm font-medium">{huntStatus.lastSession.p1Queued}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 text-sm">P2 Queued</span>
                      <span className="text-blue-400 text-sm font-medium">{huntStatus.lastSession.p2Queued}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 text-sm">Dupes Skipped</span>
                      <span className="text-zinc-300 text-sm">{huntStatus.lastSession.duplicatesSkipped}</span>
                    </div>
                    {huntStatus.lastSession.errors.length > 0 && (
                      <div className="mt-2 p-2 bg-red-900/20 border border-red-800/50 rounded text-red-400 text-xs">
                        {huntStatus.lastSession.errors[0]}
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-zinc-600 text-sm">No sessions yet. Run your first hunt!</p>
                )}
              </div>
            </div>
          ) : (
            <div className="text-zinc-500 text-center py-10">
              Could not load hunt status. Make sure HUNT_ENABLED=true is set.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
