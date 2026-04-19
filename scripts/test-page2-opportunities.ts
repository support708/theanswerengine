/**
 * Dry-run the Page-2 Opportunity finder against every client's GSC data.
 * Does NOT persist to GitHub. Prints to stdout for inspection.
 *
 * Usage: npx tsx scripts/test-page2-opportunities.ts [slug]
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import {
  findOpportunitiesForClient,
  summarizeStore,
  emptyStore,
  mergeStore,
  type OpportunityStore,
} from '../lib/gsc-page2-opportunities';

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

function loadMap(): Record<string, string> {
  const raw = JSON.parse(readFileSync(join(process.cwd(), 'data', 'gsc-client-map.json'), 'utf-8')) as Record<string, string>;
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) if (!k.startsWith('_') && v && v !== 'CONFIGURE_ME') out[k] = v;
  return out;
}

interface ClientProfileJson {
  business?: { legal_name?: string; dba?: string };
  goals?: { primary_outcome?: string };
}

function loadProfile(slug: string): ClientProfileJson | null {
  try {
    return JSON.parse(readFileSync(join(process.cwd(), 'data', 'client-profiles', `${slug}.json`), 'utf-8')) as ClientProfileJson;
  } catch {
    return null;
  }
}

async function main() {
  const arg = process.argv[2];
  const map = loadMap();
  const slugToSite: Record<string, string> = {};
  for (const [site, slug] of Object.entries(map)) slugToSite[slug] = site;

  const slugs = arg ? [arg] : Object.keys(slugToSite);
  const store: OpportunityStore = emptyStore();
  const byClient: Record<string, Awaited<ReturnType<typeof findOpportunitiesForClient>>> = {};

  for (const slug of slugs) {
    const siteUrl = slugToSite[slug];
    if (!siteUrl) {
      console.log(`[${slug}] no siteUrl mapped, skipping`);
      continue;
    }
    const profile = loadProfile(slug);
    const displayName = profile?.business?.dba || profile?.business?.legal_name || slug;
    console.log(`\n=== ${displayName} (${slug}) ===`);
    try {
      const opps = await findOpportunitiesForClient({
        slug,
        displayName,
        siteUrl,
        goalPrimaryOutcome: profile?.goals?.primary_outcome,
        existingForSlug: [],
        minImpressions: 10,
        maxPerClient: 15,
      });
      byClient[slug] = opps;
      if (opps.length === 0) {
        console.log('  (no page-2 queries with >= 10 impressions)');
      } else {
        for (const o of opps) {
          console.log(`  "${o.query}" — ${o.impressions} impr, pos ${o.position.toFixed(1)}`);
        }
      }
    } catch (err) {
      console.log(`  ERROR: ${(err as Error).message}`);
    }
  }

  const merged = mergeStore(store, byClient);
  merged.byClient = byClient;
  const summary = summarizeStore(merged);

  console.log(`\n=== SUMMARY ===`);
  console.log(`Total opportunities: ${summary.totalOpportunities}`);
  for (const row of summary.byClient) {
    console.log(`  ${row.slug.padEnd(22)} ${row.count.toString().padStart(3)} queries · ${row.totalImpressions.toLocaleString()} impr`);
  }
}

main().catch(err => {
  console.error('Fatal:', err instanceof Error ? err.message : err);
  process.exit(1);
});
