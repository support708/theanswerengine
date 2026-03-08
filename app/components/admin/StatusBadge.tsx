import type { LeadStatus } from '@/lib/types';

const STATUS_CONFIG: Record<LeadStatus, { label: string; color: string; bg: string }> = {
  queued: { label: 'Queued', color: 'text-zinc-300', bg: 'bg-zinc-700' },
  researching: { label: 'Researching', color: 'text-blue-300', bg: 'bg-blue-900/50' },
  research_complete: { label: 'Research Done', color: 'text-cyan-300', bg: 'bg-cyan-900/30' },
  generating_report: { label: 'Generating', color: 'text-indigo-300', bg: 'bg-indigo-900/30' },
  report_ready: { label: 'Report Ready', color: 'text-[#FF6A00]', bg: 'bg-orange-900/30' },
  email_drafted: { label: 'Email Drafted', color: 'text-purple-300', bg: 'bg-purple-900/30' },
  approved: { label: 'Approved', color: 'text-lime-300', bg: 'bg-lime-900/30' },
  sent: { label: 'Sent', color: 'text-green-300', bg: 'bg-green-900/30' },
  replied: { label: 'Replied', color: 'text-emerald-300', bg: 'bg-emerald-900/30' },
  follow_up_1: { label: 'Follow-up 1', color: 'text-amber-300', bg: 'bg-amber-900/30' },
  follow_up_2: { label: 'Follow-up 2', color: 'text-amber-400', bg: 'bg-amber-900/40' },
  follow_up_3: { label: 'Follow-up 3', color: 'text-amber-500', bg: 'bg-amber-900/50' },
  closed_won: { label: 'Won', color: 'text-green-400', bg: 'bg-green-800/40' },
  closed_lost: { label: 'Lost', color: 'text-red-400', bg: 'bg-red-900/30' },
  no_response: { label: 'No Response', color: 'text-yellow-300', bg: 'bg-yellow-900/30' },
};

export default function StatusBadge({ status }: { status: LeadStatus }) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.queued;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color} ${config.bg}`}>
      {config.label}
    </span>
  );
}
