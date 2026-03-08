'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import type { Lead } from '@/lib/types';
import StatusBadge from '@/app/components/admin/StatusBadge';

export default function LeadReviewPage() {
  const params = useParams();
  const router = useRouter();
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState('');
  const [emailData, setEmailData] = useState<{ to: string; subject: string; body: string } | null>(null);
  const [editedBody, setEditedBody] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchLead();
  }, [params.id]);

  async function fetchLead() {
    const res = await fetch(`/api/leads/${params.id}`);
    if (res.ok) {
      const data = await res.json();
      setLead(data);
    }
    setLoading(false);
  }

  async function handleCreateDraft() {
    setActionLoading('draft');
    try {
      const res = await fetch('/api/create-draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId: params.id }),
      });
      if (res.ok) {
        const data = await res.json();
        setEmailData(data.email);
        setEditedBody(data.email.body);
        fetchLead();
      }
    } finally {
      setActionLoading('');
    }
  }

  async function handleApprove() {
    setActionLoading('approve');
    try {
      await fetch(`/api/leads/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'approved', action: 'Email approved for sending' }),
      });
      fetchLead();
    } finally {
      setActionLoading('');
    }
  }

  async function handleMarkSent() {
    setActionLoading('sent');
    try {
      await fetch(`/api/leads/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'sent', action: 'Email sent manually' }),
      });
      fetchLead();
    } finally {
      setActionLoading('');
    }
  }

  async function handleStatusUpdate(status: string, action: string) {
    setActionLoading(status);
    try {
      await fetch(`/api/leads/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, action }),
      });
      fetchLead();
    } finally {
      setActionLoading('');
    }
  }

  async function handleReject() {
    if (!confirm('Reject this lead?')) return;
    await fetch(`/api/leads/${params.id}`, { method: 'DELETE' });
    router.push('/admin/pipeline');
  }

  function copyReportUrl() {
    if (lead?.reportSlug) {
      navigator.clipboard.writeText(`https://theanswerengine.ai/blindspot/${lead.reportSlug}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  if (loading) return <div className="p-8 text-zinc-500">Loading...</div>;
  if (!lead) return <div className="p-8 text-red-400">Lead not found</div>;

  const reportUrl = `/blindspot/${lead.reportSlug}.html`;

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/pipeline" className="text-zinc-400 hover:text-white text-sm">&larr; Pipeline</Link>
          <h1 className="text-xl font-bold text-white">{lead.businessName}</h1>
          <StatusBadge status={lead.status} />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copyReportUrl}
            className="px-3 py-1.5 text-xs border border-zinc-600 text-zinc-300 hover:text-white rounded transition-colors"
          >
            {copied ? 'Copied!' : 'Copy Report URL'}
          </button>
          <button
            onClick={handleReject}
            className="px-3 py-1.5 text-xs text-red-400 hover:text-red-300 border border-red-800 rounded transition-colors"
          >
            Reject Lead
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: Lead info + Research */}
        <div className="space-y-6">
          {/* Lead Details */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Lead Details</h2>
            <dl className="space-y-2 text-sm">
              <InfoRow label="Contact" value={`${lead.contactFirstName} (${lead.contactEmail})`} />
              <InfoRow label="City" value={lead.city} />
              <InfoRow label="Niche" value={lead.serviceNiche} />
              <InfoRow label="Website" value={lead.websiteUrl} link />
              <InfoRow label="Competitor" value={lead.competitorName || 'TBD'} />
              <InfoRow label="Reviews" value={lead.reviewCount ? `${lead.reviewCount} (${lead.rating}/5)` : 'Unknown'} />
            </dl>
          </div>

          {/* AERO-10 Score */}
          {lead.research?.aero7 && (
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
              <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                AERO-10 Score: <span className="text-[#FF6A00]">{lead.research.aero7.total}/100</span>
              </h2>
              <div className="space-y-2">
                <ScoreBar label="P1: Answer Quality" score={lead.research.aero7.answerQuality} />
                <ScoreBar label="P2: Entity Optimization" score={lead.research.aero7.entityOptimization} />
                <ScoreBar label="P3: Relevance & Freshness" score={lead.research.aero7.relevanceFreshness} />
                <ScoreBar label="P4: Optimization Structure" score={lead.research.aero7.optimizationStructure} />
                <ScoreBar label="P5: Voice & Authenticity" score={lead.research.aero7.voiceAuthenticity} />
                <ScoreBar label="P6: Authority Signals" score={lead.research.aero7.authoritySignals} />
                <ScoreBar label="P7: Authority Distribution" score={lead.research.aero7.authorityDistribution} />
                <ScoreBar label="P8: Consensus & Co-Citation" score={lead.research.aero7.consensusCoCitation} />
                <ScoreBar label="P9: Platform Readiness" score={lead.research.aero7.platformReadiness} />
                <ScoreBar label="P10: Technical Accessibility" score={lead.research.aero7.technicalAccessibility} />
              </div>
            </div>
          )}

          {/* Research Notes */}
          {lead.research?.rawNotes && (
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
              <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Research Notes</h2>
              <p className="text-zinc-300 text-sm whitespace-pre-wrap">{lead.research.rawNotes}</p>
            </div>
          )}

          {/* Action Log */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Activity Log</h2>
            <div className="space-y-1.5">
              {lead.actionLog.map((log, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  <span className="text-zinc-600 shrink-0">
                    {new Date(log.timestamp).toLocaleDateString()} {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  <span className="text-zinc-400">{log.action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle column: Report preview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Report Preview */}
          {lead.reportSlug && (lead.status === 'report_ready' || lead.status === 'email_drafted' || lead.status === 'sent') && (
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-700">
                <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Report Preview</h2>
                <a
                  href={reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FF6A00] hover:underline"
                >
                  Open in new tab
                </a>
              </div>
              <iframe
                src={reportUrl}
                className="w-full h-[600px] bg-white"
                title="Blind Spot Report Preview"
              />
            </div>
          )}

          {/* Email Draft */}
          {(lead.status === 'report_ready' || lead.status === 'email_drafted' || lead.status === 'approved') && (
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Email Draft</h2>
                {!emailData && lead.status === 'report_ready' && (
                  <button
                    onClick={handleCreateDraft}
                    disabled={!!actionLoading}
                    className="px-4 py-1.5 text-xs bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white rounded transition-colors"
                  >
                    {actionLoading === 'draft' ? 'Preparing...' : 'Prepare Email Draft'}
                  </button>
                )}
              </div>

              {emailData ? (
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="text-zinc-500">To:</span>{' '}
                    <span className="text-white">{emailData.to}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-zinc-500">Subject:</span>{' '}
                    <span className="text-white">{emailData.subject}</span>
                  </div>
                  <textarea
                    value={editedBody}
                    onChange={(e) => setEditedBody(e.target.value)}
                    rows={18}
                    className="w-full bg-zinc-800 border border-zinc-600 rounded-lg p-3 text-sm text-white font-mono resize-y focus:outline-none focus:border-[#FF6A00]"
                  />
                  <div className="flex items-center gap-3">
                    {lead.status === 'email_drafted' && (
                      <button
                        onClick={handleApprove}
                        disabled={!!actionLoading}
                        className="px-4 py-2 text-sm bg-lime-600 hover:bg-lime-500 disabled:opacity-50 text-white rounded-lg font-semibold transition-colors"
                      >
                        {actionLoading === 'approve' ? 'Approving...' : 'Approve Email'}
                      </button>
                    )}
                    {lead.status === 'approved' && (
                      <button
                        onClick={handleMarkSent}
                        disabled={!!actionLoading}
                        className="px-4 py-2 text-sm bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white rounded-lg font-semibold transition-colors"
                      >
                        {actionLoading === 'sent' ? 'Updating...' : 'Mark as Sent'}
                      </button>
                    )}
                    <p className="text-xs text-zinc-500">
                      {lead.status === 'email_drafted'
                        ? 'Review the email, then click "Approve Email" to authorize sending.'
                        : lead.status === 'approved'
                        ? 'Copy the email and send via Gmail. Then click "Mark as Sent".'
                        : 'Click "Prepare Email Draft" to generate the outreach email.'}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-zinc-500 text-sm">
                  Click "Prepare Email Draft" to generate the outreach email for this lead.
                </p>
              )}
            </div>
          )}

          {/* Post-Send Actions */}
          {(lead.status === 'sent' || lead.status === 'follow_up_1' || lead.status === 'follow_up_2' || lead.status === 'follow_up_3' || lead.status === 'replied') && (
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
              <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Lead Actions</h2>
              <div className="flex flex-wrap gap-2">
                {lead.status !== 'replied' && (
                  <button
                    onClick={() => handleStatusUpdate('replied', 'Lead replied')}
                    disabled={!!actionLoading}
                    className="px-3 py-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded transition-colors"
                  >
                    Mark Replied
                  </button>
                )}
                {lead.status === 'sent' && (
                  <button
                    onClick={() => handleStatusUpdate('follow_up_1', 'Follow-up #1 sent')}
                    disabled={!!actionLoading}
                    className="px-3 py-1.5 text-xs bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white rounded transition-colors"
                  >
                    Follow-up 1
                  </button>
                )}
                {lead.status === 'follow_up_1' && (
                  <button
                    onClick={() => handleStatusUpdate('follow_up_2', 'Follow-up #2 sent')}
                    disabled={!!actionLoading}
                    className="px-3 py-1.5 text-xs bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white rounded transition-colors"
                  >
                    Follow-up 2
                  </button>
                )}
                {lead.status === 'follow_up_2' && (
                  <button
                    onClick={() => handleStatusUpdate('follow_up_3', 'Follow-up #3 sent')}
                    disabled={!!actionLoading}
                    className="px-3 py-1.5 text-xs bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white rounded transition-colors"
                  >
                    Follow-up 3
                  </button>
                )}
                <button
                  onClick={() => handleStatusUpdate('closed_won', 'Lead closed - won')}
                  disabled={!!actionLoading}
                  className="px-3 py-1.5 text-xs bg-green-700 hover:bg-green-600 disabled:opacity-50 text-white rounded transition-colors"
                >
                  Close Won
                </button>
                <button
                  onClick={() => handleStatusUpdate('closed_lost', 'Lead closed - lost')}
                  disabled={!!actionLoading}
                  className="px-3 py-1.5 text-xs bg-red-700 hover:bg-red-600 disabled:opacity-50 text-white rounded transition-colors"
                >
                  Close Lost
                </button>
                <button
                  onClick={() => handleStatusUpdate('no_response', 'No response received')}
                  disabled={!!actionLoading}
                  className="px-3 py-1.5 text-xs bg-yellow-700 hover:bg-yellow-600 disabled:opacity-50 text-white rounded transition-colors"
                >
                  No Response
                </button>
              </div>
            </div>
          )}

          {/* Fabrication Scan Results */}
          {lead.fabricationFlags && lead.fabricationFlags.length > 0 && (
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
              <h2 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
                Fabrication Flags ({lead.fabricationFlags.length})
              </h2>
              <ul className="space-y-1">
                {lead.fabricationFlags.map((flag, i) => (
                  <li key={i} className="text-xs text-red-300">{flag}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value, link }: { label: string; value: string; link?: boolean }) {
  return (
    <div className="flex items-start gap-2">
      <dt className="text-zinc-500 w-20 shrink-0">{label}</dt>
      <dd className="text-white">
        {link && value ? (
          <a href={value} target="_blank" rel="noopener noreferrer" className="text-[#FF6A00] hover:underline truncate block max-w-64">
            {value.replace(/^https?:\/\//, '')}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

function ScoreBar({ label, score }: { label: string; score: number }) {
  const pct = (score / 10) * 100;
  const color = score >= 7 ? 'bg-green-500' : score >= 4 ? 'bg-yellow-500' : 'bg-red-500';
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-zinc-400 w-40 shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-zinc-700 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-zinc-300 font-mono w-6 text-right">{score}</span>
    </div>
  );
}
