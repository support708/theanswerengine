/**
 * Query-to-pillar clustering.
 *
 * For a client, pulls top GSC queries over the last 28 days, groups them
 * into topical clusters based on shared non-stopword tokens, then asks
 * Claude Haiku to (a) name each cluster as a pillar topic and (b) propose
 * a brief pillar outline (5-8 H2 bullets).
 *
 * Pillar content ranks for dozens of related queries — the ROI of one
 * well-structured pillar beats 10 narrowly-targeted posts.
 *
 * Clustering is deliberately lightweight (no embeddings, no model API for
 * the cluster step itself): shared-token connected components. Good
 * enough to surface the obvious topic families without the cost or
 * dependency weight of embeddings.
 */
import { getTopQueries, type GscQueryRow } from './gsc-api';

const STOPWORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'of', 'for', 'to', 'in', 'on', 'at',
  'is', 'are', 'am', 'was', 'were', 'be', 'been', 'being', 'do', 'does', 'did', 'done',
  'it', 'its', 'this', 'that', 'these', 'those', 'i', 'you', 'my', 'your', 'me', 'mine',
  'how', 'what', 'why', 'when', 'where', 'who', 'which', 'whom',
  'can', 'could', 'should', 'would', 'will', 'may', 'might', 'must', 'shall',
  'best', 'good', 'top', 'vs', 'or', 'with', 'without', 'about', 'from',
  'ca', 'tx', 'ny', 'us', 'usa', 'com', 'net', 'org',
]);

function tokenize(q: string): string[] {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length >= 3 && !STOPWORDS.has(t));
}

interface QueryNode {
  query: string;
  tokens: Set<string>;
  impressions: number;
  clicks: number;
  avgPosition: number;
}

function nodesFromRows(rows: GscQueryRow[]): QueryNode[] {
  return rows.map(r => ({
    query: r.query,
    tokens: new Set(tokenize(r.query)),
    impressions: r.impressions,
    clicks: r.clicks,
    avgPosition: r.position,
  }));
}

function sharedTokens(a: Set<string>, b: Set<string>): number {
  let n = 0;
  for (const t of a) if (b.has(t)) n++;
  return n;
}

/**
 * Union-find connected components over "shares >= minShared tokens".
 */
function clusterNodes(nodes: QueryNode[], minShared = 2): QueryNode[][] {
  const parent = new Array(nodes.length).fill(0).map((_, i) => i);
  const find = (x: number): number => (parent[x] === x ? x : (parent[x] = find(parent[x])));
  const union = (a: number, b: number) => {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent[ra] = rb;
  };

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (sharedTokens(nodes[i].tokens, nodes[j].tokens) >= minShared) {
        union(i, j);
      }
    }
  }

  const groups = new Map<number, QueryNode[]>();
  for (let i = 0; i < nodes.length; i++) {
    const r = find(i);
    const list = groups.get(r) || [];
    list.push(nodes[i]);
    groups.set(r, list);
  }

  return Array.from(groups.values())
    .filter(g => g.length >= 2) // solo queries aren't pillars
    .sort((a, b) => {
      const impA = a.reduce((s, n) => s + n.impressions, 0);
      const impB = b.reduce((s, n) => s + n.impressions, 0);
      return impB - impA;
    });
}

export interface PillarCluster {
  id: string;
  name?: string; // populated after LLM call
  outline?: string[]; // H2 bullets
  members: Array<{ query: string; impressions: number; clicks: number; avgPosition: number }>;
  totalImpressions: number;
  totalClicks: number;
  topTokens: string[];
}

function topTokensFromCluster(cluster: QueryNode[], limit = 5): string[] {
  const counts = new Map<string, number>();
  for (const n of cluster) for (const t of n.tokens) counts.set(t, (counts.get(t) || 0) + 1);
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([t]) => t);
}

function last28Window(now: Date = new Date()): { start: string; end: string } {
  const end = new Date(now.getTime() - 3 * 86400 * 1000);
  const start = new Date(end.getTime() - 27 * 86400 * 1000);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { start: fmt(start), end: fmt(end) };
}

export async function buildPillarClusters(input: {
  siteUrl: string;
  minImpressions?: number;
  minShared?: number;
  maxClusters?: number;
  now?: Date;
}): Promise<PillarCluster[]> {
  const { start, end } = last28Window(input.now);
  const minImpr = input.minImpressions ?? 5;
  const minShared = input.minShared ?? 2;
  const cap = input.maxClusters ?? 10;

  const rows = await getTopQueries(input.siteUrl, start, end, 500);
  const nodes = nodesFromRows(rows).filter(n => n.impressions >= minImpr && n.tokens.size >= 2);
  const groups = clusterNodes(nodes, minShared);

  return groups.slice(0, cap).map((g, i) => ({
    id: `cluster_${i + 1}`,
    members: g
      .map(n => ({ query: n.query, impressions: n.impressions, clicks: n.clicks, avgPosition: Number(n.avgPosition.toFixed(1)) }))
      .sort((a, b) => b.impressions - a.impressions),
    totalImpressions: g.reduce((s, n) => s + n.impressions, 0),
    totalClicks: g.reduce((s, n) => s + n.clicks, 0),
    topTokens: topTokensFromCluster(g, 5),
  }));
}

// =========================
// Claude pillar naming + outline
// =========================

const PILLAR_SYSTEM = `You are a content strategist for a local AEO agency.
Given a cluster of related search queries plus the client's business goal, name the cluster as a content pillar and propose a pillar outline.

Output STRICT JSON inside a \`\`\`json code block matching:
{
  "name": "4-10 word pillar title (question form when natural)",
  "outline": ["H2 heading 1", "H2 heading 2", ... 5-8 items]
}

Rules:
- Name MUST reflect the common intent of the queries, not just keyword soup.
- Outline headings should answer the implied question a searcher is asking.
- No em-dashes. No banned jargon (synergy, leverage, ecosystem, blind spot blitz).
- Keep outline tight — each heading 4-10 words.`;

interface ClaudeResponse {
  content: Array<{ type: string; text?: string }>;
}

export async function nameAndOutlineCluster(input: {
  cluster: PillarCluster;
  goalPrimaryOutcome: string;
  displayName: string;
  apiKey: string;
  model?: string;
}): Promise<{ name: string; outline: string[] }> {
  const userPayload = {
    client_display_name: input.displayName,
    client_goal: input.goalPrimaryOutcome,
    cluster: {
      top_tokens: input.cluster.topTokens,
      total_impressions: input.cluster.totalImpressions,
      queries: input.cluster.members.slice(0, 15).map(m => ({
        q: m.query,
        impr: m.impressions,
        pos: m.avgPosition,
      })),
    },
  };

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': input.apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: input.model || 'claude-haiku-4-5-20251001',
      max_tokens: 600,
      system: PILLAR_SYSTEM,
      messages: [{ role: 'user', content: JSON.stringify(userPayload) }],
    }),
  });

  if (!res.ok) throw new Error(`Claude API ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const data = (await res.json()) as ClaudeResponse;
  const text = data.content.find(b => b.type === 'text')?.text || '';
  const jsonMatch = text.match(/```json\s*([\s\S]*?)```/) || text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Claude returned no JSON');
  const parsed = JSON.parse((jsonMatch[1] || jsonMatch[0]).trim()) as { name?: string; outline?: string[] };
  return {
    name: String(parsed.name || '').trim(),
    outline: Array.isArray(parsed.outline) ? parsed.outline.filter(Boolean).map(String) : [],
  };
}

// ---- rendering ----

const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;

function escapeHtml(s: string | null | undefined): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function renderPillarsInner(displayName: string, clusters: PillarCluster[]): string {
  if (clusters.length === 0) {
    return `
<h2 style="margin:0 0 6px 0;font-size:22px;color:#1a1a1a;font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;">Pillar Clusters</h2>
<p style="margin:0 0 16px 0;color:#555;font-size:13px;">${escapeHtml(displayName)} &mdash; query volume too sparse for meaningful clustering.</p>`;
  }

  const blocks = clusters
    .map((c, i) => {
      const outline = (c.outline || [])
        .map(h => `<li style="margin:0 0 4px 0;font-size:13px;color:#1a1a1a;line-height:1.5;">${escapeHtml(h)}</li>`)
        .join('');
      const memberRows = c.members
        .slice(0, 8)
        .map(m => `
        <tr>
          <td style="padding:4px 6px;font-size:12px;color:#333;">${escapeHtml(m.query)}</td>
          <td style="padding:4px 6px;font-size:12px;color:#333;text-align:right;">${m.impressions} impr</td>
          <td style="padding:4px 6px;font-size:12px;color:#333;text-align:right;">pos ${m.avgPosition.toFixed(1)}</td>
        </tr>`)
        .join('');
      return `
<div style="margin-bottom:20px;padding:14px;background:#fafafa;border-left:3px solid #F27D24;">
  <div style="margin-bottom:8px;">
    <span style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;">Cluster ${i + 1}</span>
    <h3 style="margin:4px 0 2px 0;font-size:17px;color:#1a1a1a;font-weight:900;letter-spacing:-0.01em;">${escapeHtml(c.name || c.topTokens.slice(0, 3).join(' / '))}</h3>
    <div style="font-size:11px;color:#888;">${c.members.length} queries · ${c.totalImpressions} impr · top tokens: ${c.topTokens.join(', ')}</div>
  </div>
  ${outline ? `<div style="margin-top:10px;"><div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">Suggested pillar outline</div><ul style="margin:0;padding-left:18px;">${outline}</ul></div>` : ''}
  <div style="margin-top:10px;"><div style="font-family:${MONO};font-size:10px;color:#888;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">Top member queries</div><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;"><tbody>${memberRows}</tbody></table></div>
</div>`;
    })
    .join('');

  return `
<h2 style="margin:0 0 6px 0;font-size:22px;color:#1a1a1a;font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;">Pillar Clusters</h2>
<p style="margin:0 0 18px 0;color:#555;font-size:13px;">${escapeHtml(displayName)} &mdash; ${clusters.length} topic pillars detected. Each one is a chance to rank for the whole cluster with a single deep page.</p>
${blocks}`;
}
