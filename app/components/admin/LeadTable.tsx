'use client';

import Link from 'next/link';
import type { Lead } from '@/lib/types';
import StatusBadge from './StatusBadge';

interface LeadTableProps {
  leads: Lead[];
  onAction: (id: string, action: string, data?: Record<string, unknown>) => void;
}

export default function LeadTable({ leads, onAction }: LeadTableProps) {
  if (leads.length === 0) {
    return (
      <div className="text-zinc-500 text-center py-20 border border-dashed border-zinc-700 rounded-lg">
        No leads yet. Add your first lead to get started.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-zinc-400 uppercase border-b border-zinc-700">
          <tr>
            <th className="px-4 py-3">Business</th>
            <th className="px-4 py-3">Contact</th>
            <th className="px-4 py-3">City</th>
            <th className="px-4 py-3">Niche</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">AERO-7</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {leads.map((lead) => (
            <tr key={lead.id} className="hover:bg-zinc-900/50 transition-colors">
              <td className="px-4 py-3">
                <Link
                  href={`/admin/pipeline/${lead.id}`}
                  className="text-white font-medium hover:text-[#FF6A00] transition-colors"
                >
                  {lead.businessName}
                </Link>
                {lead.websiteUrl && (
                  <div className="text-zinc-500 text-xs truncate max-w-48">
                    {lead.websiteUrl.replace(/^https?:\/\//, '')}
                  </div>
                )}
              </td>
              <td className="px-4 py-3">
                <div className="text-white">{lead.contactFirstName}</div>
                <div className="text-zinc-500 text-xs">{lead.contactEmail}</div>
              </td>
              <td className="px-4 py-3 text-zinc-300">{lead.city}</td>
              <td className="px-4 py-3 text-zinc-300">{lead.serviceNiche}</td>
              <td className="px-4 py-3">
                <StatusBadge status={lead.status} />
              </td>
              <td className="px-4 py-3 text-zinc-300">
                {lead.research?.aero7?.total != null ? (
                  <span className="font-mono">{lead.research.aero7.total}/70</span>
                ) : (
                  <span className="text-zinc-600">--</span>
                )}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  {lead.status === 'queued' && (
                    <button
                      onClick={() => onAction(lead.id, 'research')}
                      className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-500 text-white rounded transition-colors"
                    >
                      Research
                    </button>
                  )}
                  {lead.status === 'report_ready' && (
                    <Link
                      href={`/admin/pipeline/${lead.id}`}
                      className="px-3 py-1 text-xs bg-[#FF6A00] hover:bg-[#e55f00] text-white rounded transition-colors"
                    >
                      Review
                    </Link>
                  )}
                  {lead.status === 'email_drafted' && (
                    <Link
                      href={`/admin/pipeline/${lead.id}`}
                      className="px-3 py-1 text-xs bg-purple-600 hover:bg-purple-500 text-white rounded transition-colors"
                    >
                      Send
                    </Link>
                  )}
                  <button
                    onClick={() => onAction(lead.id, 'delete')}
                    className="px-3 py-1 text-xs text-zinc-500 hover:text-red-400 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
