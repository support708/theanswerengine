/**
 * Capture an onboarding baseline snapshot for a client (or all clients).
 *
 * Writes to data/gsc-baselines.json locally. When run from a workstation
 * with a Git checkout, commit + push manually.
 *
 * Usage:
 *   npx tsx scripts/capture-baseline.ts all          # every client that lacks a baseline
 *   npx tsx scripts/capture-baseline.ts <slug>       # one client (first capture wins)
 *   npx tsx scripts/capture-baseline.ts <slug> --force  # archive old baseline, install new
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import {
  captureSnapshot,
  mergeSnapshot,
  emptyBaselinesFile,
  deltaVsBaseline,
  type BaselinesFile,
} from '../lib/gsc-onboarding-baseline';

function loadEnv() {
  try {
    const txt = readFileSync(join(process.cwd(), '.env.local'), 'utf-8');
    for (const line of txt.split('\n')) {
      const t = line.trim();
      if (!t || t.startsWith('#')) continue;
      const eq = t.indexOf('=');
      if (eq === -1) continue;
      const k = t.slice(0, eq).trim();
      const v = t.slice(eq + 1).trim();
      if (!process.env[k]) process.env[k] = v;
    }
  } catch { /* noop */ }
}
loadEnv();

const BASELINES_PATH = join(process.cwd(), 'data', 'gsc-baselines.json');

function readFile(): BaselinesFile {
  if (!existsSync(BASELINES_PATH)) return emptyBaselinesFile();
  try {
    return JSON.parse(readFileSync(BASELINES_PATH, 'utf-8')) as BaselinesFile;
  } catch {
    return emptyBaselinesFile();
  }
}

function writeFile(file: BaselinesFile): void {
  writeFileSync(BASELINES_PATH, JSON.stringify(file, null, 2) + '\n', 'utf-8');
}

function loadMap(): Record<string, string> {
  const raw = JSON.parse(readFileSync(join(process.cwd(), 'data', 'gsc-client-map.json'), 'utf-8')) as Record<string, string>;
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) if (!k.startsWith('_') && v && v !== 'CONFIGURE_ME') out[k] = v;
  return out;
}

interface ClientProfileJson {
  business?: { legal_name?: string; dba?: string };
}
function loadProfile(slug: string): ClientProfileJson | null {
  try {
    return JSON.parse(readFileSync(join(process.cwd(), 'data', 'client-profiles', `${slug}.json`), 'utf-8')) as ClientProfileJson;
  } catch { return null; }
}

async function runFor(slug: string, siteUrl: string, file: BaselinesFile, force: boolean): Promise<BaselinesFile> {
  const profile = loadProfile(slug);
  const displayName = profile?.business?.dba || profile?.business?.legal_name || slug;

  const existing = file.byClient[slug];
  if (existing && !force) {
    // Append a fresh snapshot for trend lines
    console.log(`[${slug}] baseline exists (${existing.baseline.capturedAt.slice(0,10)}); capturing additional snapshot for trend line`);
  } else if (existing && force) {
    console.log(`[${slug}] --force: archiving current baseline, installing new`);
  } else {
    console.log(`[${slug}] no baseline yet — capturing day-0 snapshot`);
  }

  const snap = await captureSnapshot({
    slug,
    displayName,
    siteUrl,
    capturedBy: process.env.CAPTURED_BY || 'cli',
    note: existing ? 'additional-snapshot' : 'day-0-baseline',
  });

  const { file: next, action } = mergeSnapshot(file, snap, { force });
  console.log(`  ${action}`);
  console.log(`  ${snap.totalImpressions.toLocaleString()} impr / ${snap.totalClicks.toLocaleString()} clicks / CTR ${(snap.avgCtr*100).toFixed(2)}% / pos ${snap.avgPosition.toFixed(1)}`);

  if (existing) {
    const delta = deltaVsBaseline(existing.baseline, snap);
    console.log(`  vs day-0 baseline (${delta.daysSinceBaseline}d ago): impr ${delta.impressionsPct > 0 ? '+' : ''}${delta.impressionsPct}%, clicks ${delta.clicksPct > 0 ? '+' : ''}${delta.clicksPct}%, pos ${delta.positionDelta > 0 ? '+' : ''}${delta.positionDelta}`);
  }
  return next;
}

async function main() {
  const arg = process.argv[2];
  const force = process.argv.includes('--force');
  const map = loadMap();
  const slugToSite: Record<string, string> = {};
  for (const [site, slug] of Object.entries(map)) slugToSite[slug] = site;

  let file = readFile();

  if (arg === 'all' || !arg) {
    for (const [slug, site] of Object.entries(slugToSite)) {
      try {
        file = await runFor(slug, site, file, force);
      } catch (err) {
        console.log(`[${slug}] ERROR: ${(err as Error).message}`);
      }
    }
  } else {
    const site = slugToSite[arg];
    if (!site) {
      console.error(`Unknown slug "${arg}". Valid: ${Object.keys(slugToSite).join(', ')}`);
      process.exit(1);
    }
    file = await runFor(arg, site, file, force);
  }

  writeFile(file);
  console.log(`\n✓ wrote ${BASELINES_PATH}`);
  const total = Object.keys(file.byClient).length;
  const addl = Object.values(file.byClient).reduce((s, e) => s + e.additional_snapshots.length, 0);
  console.log(`  ${total} baselines, ${addl} additional snapshots`);
}

main().catch(err => {
  console.error('Fatal:', err instanceof Error ? err.message : err);
  process.exit(1);
});
