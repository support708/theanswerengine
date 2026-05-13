/**
 * Cohort Benchmark Aggregator — TAE's proprietary "You vs. Industry" data.
 *
 * For each vertical cohort (real estate, property management, etc.), compute
 * aggregate statistics across all clients in that cohort: median Authority
 * Index, median GSC impressions/clicks, median content velocity, median
 * review signal. Used in Monthly Reports and the Dashboard as "Your score
 * vs. the cohort median" framing.
 *
 * With N=1 in some cohorts today, "median" is just that client's own number
 * — so the aggregator exposes cohort_size so downstream consumers can
 * suppress the benchmark when N < 3.
 *
 * Snapshots are monthly (keyed YYYY-MM) in data/cohort-benchmarks.json.
 * Each run appends — historical snapshots power trend-of-cohort lines in
 * future QBR decks.
 */

import * as fs from 'fs';
import * as path from 'path';
import { computeAuthorityIndex, type AuthorityIndexEntry } from './aeo-authority-index';
import { publishToGitHub } from './github-publish';

const IS_VERCEL = !!process.env.VERCEL;
const GH_SNAPSHOT = 'data/cohort-benchmarks.json';

export interface CohortBenchmark {
  cohort: string;                  // "real-estate" | "property-management" | ...
  cohortDisplayName: string;       // "Real Estate" | ...
  cohortSize: number;              // number of clients
  median: {
    authority_index: number;
    impressions_28d: number;
    clicks_28d: number;
    avg_position: number;
    avg_ctr: number;
    unique_queries: number;
    new_ranking_pages_28d: number;
    review_count: number;
    review_rating: number;
  };
  sampleSlugs: string[];           // which clients contributed (anonymized publicly, exposed internally)
  computedAt: string;              // ISO
}

export interface CohortSnapshotFile {
  [yyyyMm: string]: CohortBenchmark[];
}

const SNAPSHOT_PATH = path.join(process.cwd(), 'data', 'cohort-benchmarks.json');
const MAX_MONTHS_RETAINED = 24;

/**
 * Client slug → cohort label. Edit this when new clients onboard. If a
 * client isn't listed here, they're excluded from benchmarking (prevents
 * an unmapped client from polluting the cohort median).
 */
const COHORT_ASSIGNMENT: Record<string, { cohort: string; display: string }> = {
  'borges-team':        { cohort: 'real-estate',            display: 'Real Estate' },
  'lovery-re':          { cohort: 'real-estate',            display: 'Real Estate' },
  'davis-agency':       { cohort: 'real-estate',            display: 'Real Estate' },
  'lamh':               { cohort: 'real-estate',            display: 'Real Estate' },
  'rpm-southland':      { cohort: 'property-management',    display: 'Property Management' },
  'clearclose':         { cohort: 'builder-services',       display: 'Builder Services' },
  'the-answer-engine':  { cohort: 'aeo-agency',             display: 'AEO Agency' },
};

function median(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

function loadSnapshotFile(): CohortSnapshotFile {
  if (!fs.existsSync(SNAPSHOT_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(SNAPSHOT_PATH, 'utf-8'));
  } catch {
    return {};
  }
}

async function saveSnapshotFile(data: CohortSnapshotFile): Promise<void> {
  const keys = Object.keys(data).sort();
  const trimmed: CohortSnapshotFile = {};
  for (const k of keys.slice(-MAX_MONTHS_RETAINED)) {
    trimmed[k] = data[k];
  }
  const content = JSON.stringify(trimmed, null, 2);
  if (IS_VERCEL) {
    await publishToGitHub([{ path: GH_SNAPSHOT, content }], 'cohort: monthly benchmark snapshot');
    return;
  }
  fs.writeFileSync(SNAPSHOT_PATH, content);
}

function currentYyyyMm(): string {
  const d = new Date();
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
}

interface ClientData {
  slug: string;
  cohort: string;
  display: string;
  entry: AuthorityIndexEntry;
}

/**
 * Run aggregation across all cohorts. Each client's current Authority Index
 * + GSC signals are pulled fresh; persist=false on the compute call so the
 * per-client history isn't duplicated by the nightly aggregator.
 */
export async function aggregateCohorts(opts: {
  slugs?: string[];              // if supplied, limit to these clients
  persist?: boolean;             // write to data/cohort-benchmarks.json
  yyyyMm?: string;               // month key for snapshot
} = {}): Promise<CohortBenchmark[]> {
  const yyyyMm = opts.yyyyMm || currentYyyyMm();
  const slugs = opts.slugs || Object.keys(COHORT_ASSIGNMENT);

  const clientData: ClientData[] = [];
  for (const slug of slugs) {
    const assignment = COHORT_ASSIGNMENT[slug];
    if (!assignment) continue;
    try {
      const result = await computeAuthorityIndex(slug, { persist: false });
      clientData.push({
        slug,
        cohort: assignment.cohort,
        display: assignment.display,
        entry: {
          timestamp: result.timestamp,
          score: result.score,
          breakdown: result.breakdown,
          signals: result.signals,
        },
      });
    } catch {
      // Client failed to compute — skip (don't kill the aggregator).
    }
  }

  const byCohort = new Map<string, ClientData[]>();
  for (const c of clientData) {
    const list = byCohort.get(c.cohort) || [];
    list.push(c);
    byCohort.set(c.cohort, list);
  }

  const benchmarks: CohortBenchmark[] = [];
  for (const [cohort, members] of byCohort) {
    benchmarks.push({
      cohort,
      cohortDisplayName: members[0].display,
      cohortSize: members.length,
      median: {
        authority_index: Math.round(median(members.map(m => m.entry.score))),
        impressions_28d: Math.round(median(members.map(m => m.entry.signals.impressions_28d))),
        clicks_28d: Math.round(median(members.map(m => m.entry.signals.clicks_28d))),
        avg_position: Math.round(median(members.map(m => m.entry.signals.avg_position)) * 10) / 10,
        avg_ctr: Math.round(median(members.map(m => m.entry.signals.avg_ctr)) * 10000) / 10000,
        unique_queries: Math.round(median(members.map(m => m.entry.signals.unique_queries))),
        new_ranking_pages_28d: Math.round(median(members.map(m => m.entry.signals.new_ranking_pages))),
        review_count: Math.round(median(members.map(m => m.entry.signals.review_count))),
        review_rating: Math.round(median(members.map(m => m.entry.signals.review_rating)) * 10) / 10,
      },
      sampleSlugs: members.map(m => m.slug).sort(),
      computedAt: new Date().toISOString(),
    });
  }

  if (opts.persist) {
    const file = loadSnapshotFile();
    file[yyyyMm] = benchmarks;
    await saveSnapshotFile(file);
  }

  return benchmarks;
}

/**
 * Look up the most recent benchmark for one client's cohort. Returns null
 * when cohort_size < 3 (benchmark suppressed to avoid leaking a single
 * competitor's metrics).
 */
export function getBenchmarkForClient(clientSlug: string): CohortBenchmark | null {
  const assignment = COHORT_ASSIGNMENT[clientSlug];
  if (!assignment) return null;

  const file = loadSnapshotFile();
  const keys = Object.keys(file).sort().reverse();
  for (const k of keys) {
    const b = file[k].find(b => b.cohort === assignment.cohort);
    if (b && b.cohortSize >= 3) return b;
  }
  return null;
}

/**
 * For a client, compute their value vs. cohort median for each signal.
 * Returns null when cohort data is suppressed.
 */
export interface ClientVsCohort {
  clientSlug: string;
  cohort: string;
  cohortDisplayName: string;
  cohortSize: number;
  comparisons: Array<{
    signal: string;
    client: number;
    cohortMedian: number;
    pctVsMedian: number;     // (client - median) / median * 100
    directionGood: 'up' | 'down';  // which direction is favorable
  }>;
}

/**
 * Render the "You vs. Industry" section as inline HTML. Returns empty
 * string when input is null (cohort suppressed or client unmapped) — safe
 * to inject unconditionally into the Monthly Report layout.
 */
export function renderCohortSectionHtml(vs: ClientVsCohort | null): string {
  if (!vs || vs.comparisons.length === 0) return '';

  const DISPLAY = `'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif`;
  const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;
  const BRAND = '#F27D24';

  const rows = vs.comparisons.map(c => {
    const isAbove = c.directionGood === 'up' ? c.client > c.cohortMedian : c.client < c.cohortMedian;
    const color = isAbove ? '#0d8a3e' : '#888';
    const formatValue = (n: number) => {
      if (c.signal === 'Avg Position') return n.toFixed(1);
      return n >= 1000 ? n.toLocaleString() : String(n);
    };
    return `
    <tr>
      <td style="padding:10px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#1a1a1a;">${escapeHtmlLocal(c.signal)}</td>
      <td style="padding:10px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:${color};font-weight:700;text-align:right;">${formatValue(c.client)}</td>
      <td style="padding:10px 6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#777;text-align:right;">${formatValue(c.cohortMedian)}</td>
    </tr>`;
  }).join('');

  return `
<h3 style="margin:0 0 6px 0;font-size:15px;color:#1a1a1a;font-family:${DISPLAY};font-weight:800;text-transform:uppercase;letter-spacing:0.02em;">You vs. Industry</h3>
<p style="margin:0 0 12px 0;font-size:12px;color:#777;">Median across ${vs.cohortSize} ${escapeHtmlLocal(vs.cohortDisplayName.toLowerCase())} clients in our portfolio.</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 28px 0;">
  <thead>
    <tr>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Signal</th>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:${BRAND};text-transform:uppercase;">You</th>
      <th style="padding:8px 6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;letter-spacing:0.12em;color:#888;text-transform:uppercase;">Cohort Median</th>
    </tr>
  </thead>
  <tbody>${rows}</tbody>
</table>`;
}

export function renderCohortSectionPlain(vs: ClientVsCohort | null): string {
  if (!vs || vs.comparisons.length === 0) return '';
  const lines: string[] = [`YOU VS. INDUSTRY (median of ${vs.cohortSize} ${vs.cohortDisplayName.toLowerCase()} clients):`];
  for (const c of vs.comparisons) {
    const fmt = (n: number) => c.signal === 'Avg Position' ? n.toFixed(1) : String(n);
    lines.push(`  ${c.signal}: you ${fmt(c.client)} vs cohort ${fmt(c.cohortMedian)}`);
  }
  return lines.join('\n') + '\n';
}

function escapeHtmlLocal(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function buildClientVsCohort(clientSlug: string): Promise<ClientVsCohort | null> {
  const benchmark = getBenchmarkForClient(clientSlug);
  if (!benchmark) return null;

  const client = await computeAuthorityIndex(clientSlug, { persist: false });
  const pct = (client: number, cohort: number) =>
    cohort === 0 ? (client > 0 ? 100 : 0) : Math.round(((client - cohort) / cohort) * 100);

  return {
    clientSlug,
    cohort: benchmark.cohort,
    cohortDisplayName: benchmark.cohortDisplayName,
    cohortSize: benchmark.cohortSize,
    comparisons: [
      { signal: 'AEO Authority Index', client: client.score, cohortMedian: benchmark.median.authority_index, pctVsMedian: pct(client.score, benchmark.median.authority_index), directionGood: 'up' },
      { signal: 'Impressions (28d)', client: client.signals.impressions_28d, cohortMedian: benchmark.median.impressions_28d, pctVsMedian: pct(client.signals.impressions_28d, benchmark.median.impressions_28d), directionGood: 'up' },
      { signal: 'Clicks (28d)', client: client.signals.clicks_28d, cohortMedian: benchmark.median.clicks_28d, pctVsMedian: pct(client.signals.clicks_28d, benchmark.median.clicks_28d), directionGood: 'up' },
      { signal: 'Avg Position', client: client.signals.avg_position, cohortMedian: benchmark.median.avg_position, pctVsMedian: pct(client.signals.avg_position, benchmark.median.avg_position), directionGood: 'down' },
      { signal: 'New Ranking Pages', client: client.signals.new_ranking_pages, cohortMedian: benchmark.median.new_ranking_pages_28d, pctVsMedian: pct(client.signals.new_ranking_pages, benchmark.median.new_ranking_pages_28d), directionGood: 'up' },
    ],
  };
}
