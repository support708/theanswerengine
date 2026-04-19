/**
 * Gut-check the Branded Search Tracker against every client's GSC data.
 * Does NOT send or draft anything. Just prints 4-week trend to stdout so
 * we can decide whether to wire the client-facing cron.
 *
 * Usage: npx tsx scripts/test-branded-search.ts [slug]
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { buildBrandedTrend, renderTrendTelegram, BRAND_TOKENS } from '../lib/gsc-branded-search';

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
  const trends = [];

  for (const slug of slugs) {
    const siteUrl = slugToSite[slug];
    if (!siteUrl) continue;
    const profile = loadProfile(slug);
    const displayName = profile?.business?.dba || profile?.business?.legal_name || slug;
    const tokens = BRAND_TOKENS[slug] || [];

    console.log(`\n=== ${displayName} (${slug}) ===`);
    console.log(`  Tokens: ${tokens.join(', ') || '(none configured)'}`);

    try {
      const trend = await buildBrandedTrend({ slug, displayName, siteUrl });
      trends.push(trend);

      console.log(`  Verdict: ${trend.verdict}`);
      console.log(`  Total branded impr (4 wks): ${trend.totalBrandedImpressions4w}`);
      console.log(`  Week-over-week: ${trend.weekOverWeekPct > 0 ? '+' : ''}${trend.weekOverWeekPct}%`);
      console.log(`  4-week trend: ${trend.fourWeekTrendPct > 0 ? '+' : ''}${trend.fourWeekTrendPct}%`);
      console.log(`  Weekly breakdown:`);
      for (const w of trend.weeks) {
        console.log(`    ${w.start} to ${w.end}: ${w.brandedImpressions.toString().padStart(4)} branded impr · ${w.matchedQueries.length} distinct queries`);
      }
      const last = trend.weeks[trend.weeks.length - 1];
      if (last.matchedQueries.length > 0) {
        console.log(`  Top branded queries this week:`);
        for (const q of last.matchedQueries.slice(0, 5)) {
          console.log(`    "${q.query}" — ${q.impressions} impr, ${q.clicks} clicks`);
        }
      }
    } catch (err) {
      console.log(`  ERROR: ${(err as Error).message}`);
    }
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`Clients scanned: ${trends.length}`);
  const rising = trends.filter(t => t.verdict === 'rising');
  const stable = trends.filter(t => t.verdict === 'stable');
  const falling = trends.filter(t => t.verdict === 'falling');
  const noData = trends.filter(t => t.verdict === 'no-data');
  console.log(`  Rising: ${rising.length} (${rising.map(t => t.slug).join(', ')})`);
  console.log(`  Stable: ${stable.length} (${stable.map(t => t.slug).join(', ')})`);
  console.log(`  Falling: ${falling.length} (${falling.map(t => t.slug).join(', ')})`);
  console.log(`  No data: ${noData.length} (${noData.map(t => t.slug).join(', ')})`);

  console.log(`\n--- Telegram preview ---`);
  console.log(renderTrendTelegram(trends).replace(/<[^>]+>/g, ''));
}

main().catch(err => {
  console.error('Fatal:', err instanceof Error ? err.message : err);
  process.exit(1);
});
