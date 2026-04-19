/**
 * Agency Activity log — "What We Did For You" section for the Monthly Report.
 *
 * Derives per-client activity from existing state files (Reddit, Authority
 * Index history, blog posts) plus an optional manual-override log at
 * data/agency-activity-log.json. Justin uses the manual log to record
 * things Claude can't infer (strategy calls, stakeholder meetings, audits
 * run by hand, etc.).
 *
 * Kept as a lib (not wired into a cron) so the Monthly Report renderer can
 * call it at render time with the target YYYY-MM. No writes except via the
 * optional log file.
 */

import * as fs from 'fs';
import * as path from 'path';
import { readOpportunities } from './reddit-state';
import { loadAuthorityIndexHistory } from './aeo-authority-index';

export interface ActivityItem {
  date: string;              // YYYY-MM-DD
  category: 'content' | 'reddit' | 'monitoring' | 'review' | 'audit' | 'strategy' | 'other';
  description: string;
  /** Internal only — Justin sees, client does not. */
  internalNote?: string;
}

interface ManualLog {
  [clientSlug: string]: ActivityItem[];
}

function loadManualLog(): ManualLog {
  const filepath = path.join(process.cwd(), 'data', 'agency-activity-log.json');
  if (!fs.existsSync(filepath)) return {};
  try {
    return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  } catch {
    return {};
  }
}

function monthBounds(yyyyMm: string): { startIso: string; endIso: string } {
  const [y, m] = yyyyMm.split('-').map(Number);
  const start = new Date(Date.UTC(y, m - 1, 1, 0, 0, 0));
  const end = new Date(Date.UTC(y, m, 0, 23, 59, 59));
  return { startIso: start.toISOString(), endIso: end.toISOString() };
}

function inMonth(iso: string, bounds: { startIso: string; endIso: string }): boolean {
  if (!iso) return false;
  return iso >= bounds.startIso && iso <= bounds.endIso;
}

function dateOnly(iso: string): string {
  return iso.slice(0, 10);
}

/**
 * Read all activity for one client in a given month, assembled from all
 * available sources. Returns items sorted chronologically.
 */
export async function readActivityForMonth(
  clientSlug: string,
  yyyyMm: string,
): Promise<ActivityItem[]> {
  const items: ActivityItem[] = [];
  const bounds = monthBounds(yyyyMm);

  // --- Reddit: digests sent + opportunities detected this month ---
  try {
    const store = await readOpportunities();
    const clientOpps = store.opportunities.filter(o => o.clientSlug === clientSlug);
    const digestDates = new Set<string>();
    let detectedThisMonth = 0;

    for (const opp of clientOpps) {
      if (opp.discoveredAt && inMonth(opp.discoveredAt, bounds)) {
        detectedThisMonth++;
      }
      if (opp.digestSentAt && inMonth(opp.digestSentAt, bounds)) {
        digestDates.add(dateOnly(opp.digestSentAt));
      }
    }

    if (detectedThisMonth > 0) {
      items.push({
        date: yyyyMm + '-01',
        category: 'monitoring',
        description: `Monitored Reddit for ${detectedThisMonth} conversation${detectedThisMonth === 1 ? '' : 's'} relevant to your practice area.`,
      });
    }

    for (const d of Array.from(digestDates).sort()) {
      items.push({
        date: d,
        category: 'reddit',
        description: `Delivered Reddit opportunity digest with vetted response drafts.`,
      });
    }
  } catch {
    // Reddit state unavailable — skip silently.
  }

  // --- Authority Index readings ---
  try {
    const history = loadAuthorityIndexHistory(clientSlug);
    const monthEntries = history.filter(h => inMonth(h.timestamp, bounds));
    if (monthEntries.length > 0) {
      items.push({
        date: dateOnly(monthEntries[0].timestamp),
        category: 'monitoring',
        description: `Captured ${monthEntries.length} AEO Authority Index reading${monthEntries.length === 1 ? '' : 's'} this month.`,
      });
    }
  } catch {
    // History not readable — skip.
  }

  // --- Blog posts (TAE only — we don't track client-hosted blogs here) ---
  if (clientSlug === 'the-answer-engine') {
    try {
      const posts = loadBlogPosts();
      const monthPosts = posts.filter(p => p.date && inMonth(new Date(p.date).toISOString(), bounds));
      if (monthPosts.length > 0) {
        items.push({
          date: yyyyMm + '-15',
          category: 'content',
          description: `Published ${monthPosts.length} article${monthPosts.length === 1 ? '' : 's'}: ${monthPosts.slice(0, 3).map(p => `"${p.title}"`).join(', ')}${monthPosts.length > 3 ? `, +${monthPosts.length - 3} more` : ''}.`,
        });
      }
    } catch {
      // Blog posts file missing — skip.
    }
  }

  // --- Manual log overrides ---
  const manual = loadManualLog();
  const manualEntries = (manual[clientSlug] || []).filter(e => e.date >= yyyyMm + '-01' && e.date <= yyyyMm + '-31');
  items.push(...manualEntries);

  // Sort by date ascending.
  items.sort((a, b) => a.date.localeCompare(b.date));

  return items;
}

interface BlogPostStub {
  title: string;
  date?: string;
  slug?: string;
}

function loadBlogPosts(): BlogPostStub[] {
  const candidates = [
    path.join(process.cwd(), 'data', 'blog', 'blogPosts.json'),
    path.join(process.cwd(), 'data', 'blogPosts.json'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) {
      try {
        const data = JSON.parse(fs.readFileSync(c, 'utf-8'));
        if (Array.isArray(data)) return data;
        if (data.posts && Array.isArray(data.posts)) return data.posts;
      } catch { /* try next */ }
    }
  }
  return [];
}

/**
 * Render "What We Did For You" section as inline HTML suitable for
 * embedding in the Monthly Report. Empty items → returns empty string
 * (section is optional when nothing meaningful to report).
 */
export function renderActivitySectionHtml(items: ActivityItem[]): string {
  if (items.length === 0) return '';

  const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
  const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;
  const BRAND = '#FF6A00';

  const iconByCategory: Record<ActivityItem['category'], string> = {
    content: '✎',
    reddit: '💬',
    monitoring: '◉',
    review: '★',
    audit: '⚙',
    strategy: '▲',
    other: '•',
  };

  const rows = items.map(item => `
    <tr>
      <td valign="top" style="padding:8px 12px 8px 0;font-family:${MONO};font-size:11px;color:#888;letter-spacing:0.04em;white-space:nowrap;">
        ${escapeHtml(item.date)}
      </td>
      <td valign="top" style="padding:8px 12px 8px 0;font-family:${DISPLAY};font-size:14px;color:${BRAND};width:20px;">
        ${iconByCategory[item.category] || '•'}
      </td>
      <td valign="top" style="padding:8px 0;font-size:13px;color:#333;line-height:1.5;">
        ${escapeHtml(item.description)}
      </td>
    </tr>`).join('');

  return `
<h3 style="margin:0 0 6px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">What We Did For You</h3>
<p style="margin:0 0 14px 0;font-size:12px;color:#777;">Agency activity this month — monitoring, content, and strategic work.</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 28px 0;">
  <tbody>${rows}</tbody>
</table>`;
}

/**
 * Render as plain text (for renderMonthlyReportPlain).
 */
export function renderActivitySectionPlain(items: ActivityItem[]): string {
  if (items.length === 0) return '';
  const lines = items.map(i => `  • ${i.date} — ${i.description}`);
  return `WHAT WE DID FOR YOU:\n${lines.join('\n')}\n`;
}

function escapeHtml(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
