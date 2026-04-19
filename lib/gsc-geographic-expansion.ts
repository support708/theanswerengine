/**
 * Geographic expansion alert.
 *
 * Detects queries containing city names that the client does NOT currently
 * serve (per profile.service_area.cities). Surfaces the total impressions
 * volume per unserved city as a territory-expansion upsell signal.
 *
 * Example: RPM Southland doesn't serve Compton, but GSC shows 40+
 * monthly impressions for "property management compton". That's a revenue
 * lever — either expand territory (paid) or decline the traffic to keep
 * capacity focused.
 */
import { getTopQueries, type GscQueryRow } from './gsc-api';

// Known US cities — keep lean and bias toward CA + TX where our clients are.
// Match is case-insensitive; multi-word cities matched as contiguous phrase.
export const KNOWN_CITIES: string[] = [
  // California — Southern
  'Los Angeles', 'Long Beach', 'Pasadena', 'Glendale', 'Burbank', 'Santa Monica', 'Beverly Hills',
  'Santa Clarita', 'Torrance', 'Downey', 'Lakewood', 'Cerritos', 'Anaheim', 'Irvine', 'Santa Ana',
  'Huntington Beach', 'Orange', 'Fullerton', 'Costa Mesa', 'Garden Grove', 'Riverside', 'Corona',
  'Rancho Cucamonga', 'Ontario', 'San Bernardino', 'Fontana', 'Moreno Valley', 'Redlands', 'Upland',
  'Chino', 'Chino Hills', 'Pomona', 'West Covina', 'Covina', 'El Monte', 'Alhambra', 'Arcadia',
  'Monrovia', 'Sierra Madre', 'Altadena', 'Temple City', 'Rosemead', 'South Pasadena',
  'La Canada Flintridge', 'San Marino', 'San Gabriel', 'Montebello', 'Whittier', 'Norwalk',
  'Bellflower', 'Paramount', 'South Gate', 'Lynwood', 'Compton', 'Inglewood', 'Hawthorne',
  'Gardena', 'Carson', 'Wilmington', 'San Pedro', 'Redondo Beach', 'Manhattan Beach',
  'Hermosa Beach', 'El Segundo', 'Culver City', 'West Hollywood', 'Calabasas', 'Malibu',
  // San Diego
  'San Diego', 'Chula Vista', 'Bonita', 'El Cajon', 'La Mesa', 'Spring Valley', 'National City',
  'Imperial Beach', 'Coronado', 'Del Mar', 'La Jolla', 'Encinitas', 'Carlsbad', 'Oceanside',
  'Vista', 'Escondido', 'Poway', 'Santee', 'Mission Valley', 'North Park', 'South Park',
  'University Heights', 'Normal Heights', 'Pacific Beach', 'Ocean Beach', 'Point Loma',
  'Hillcrest', 'Bankers Hill', 'Little Italy', 'Rancho Penasquitos', 'Mira Mesa',
  'Scripps Ranch', 'Rancho Santa Fe',
  // Northern CA (lighter)
  'San Francisco', 'Oakland', 'Berkeley', 'San Jose', 'Palo Alto', 'Mountain View', 'Santa Clara',
  'Sunnyvale', 'Sacramento',
  // Texas
  'Austin', 'Houston', 'Dallas', 'San Antonio', 'Fort Worth', 'Plano', 'Frisco', 'Round Rock',
  'Pflugerville', 'Cedar Park', 'Leander', 'Georgetown', 'Buda', 'Kyle', 'Lakeway', 'Bee Cave',
  'West Lake Hills', 'Rollingwood', 'Sunset Valley', 'Dripping Springs',
  // Inland Empire / Riverside County
  'Hemet', 'Menifee', 'Murrieta', 'Temecula', 'Lake Elsinore', 'Perris', 'Eastvale',
  'Mira Loma', 'Jurupa Valley', 'Norco',
];

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

/** Returns the canonical city name(s) found in a query (case-insensitive, phrase-match). */
export function citiesInQuery(query: string, cities: string[] = KNOWN_CITIES): string[] {
  const q = normalize(query);
  // Pad with spaces so word-boundary matches work via includes
  const padded = ' ' + q + ' ';
  const hits: string[] = [];
  for (const city of cities) {
    const needle = ' ' + normalize(city) + ' ';
    if (padded.includes(needle)) hits.push(city);
  }
  // If multiple hits, prefer the longest (e.g. "San Gabriel" over accidental substrings)
  hits.sort((a, b) => b.length - a.length);
  return Array.from(new Set(hits));
}

export interface GeoExpansionHit {
  city: string; // canonical
  query: string;
  impressions: number;
  clicks: number;
  position: number;
}

export interface GeoExpansionResult {
  slug: string;
  displayName: string;
  servedCities: string[];
  unservedHits: GeoExpansionHit[]; // queries mentioning cities client DOESN'T serve
  cityTotals: Array<{ city: string; impressions: number; clicks: number; queryCount: number }>;
}

function last28Window(now: Date = new Date()): { start: string; end: string } {
  const end = new Date(now.getTime() - 3 * 86400 * 1000);
  const start = new Date(end.getTime() - 27 * 86400 * 1000);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { start: fmt(start), end: fmt(end) };
}

export async function findGeoExpansionForClient(input: {
  slug: string;
  displayName: string;
  siteUrl: string;
  servedCities: string[]; // from profile.service_area.cities
  minImpressions?: number;
  now?: Date;
}): Promise<GeoExpansionResult> {
  // Guard: if the profile doesn't declare served cities, we can't meaningfully
  // determine "unserved". Returning empty prevents the tool from flagging
  // every query with a city name as an expansion opportunity (false positive).
  if (!input.servedCities || input.servedCities.length === 0) {
    return {
      slug: input.slug,
      displayName: input.displayName,
      servedCities: input.servedCities || [],
      unservedHits: [],
      cityTotals: [],
    };
  }

  const { start, end } = last28Window(input.now);
  const minImpr = input.minImpressions ?? 10;

  const rows = await getTopQueries(input.siteUrl, start, end, 1000);
  const servedSet = new Set(input.servedCities.map(c => c.toLowerCase()));

  const hits: GeoExpansionHit[] = [];
  for (const r of rows as GscQueryRow[]) {
    if (r.impressions < minImpr) continue;
    const cities = citiesInQuery(r.query);
    if (cities.length === 0) continue;
    for (const c of cities) {
      if (servedSet.has(c.toLowerCase())) continue; // already serves it
      hits.push({ city: c, query: r.query, impressions: r.impressions, clicks: r.clicks, position: r.position });
    }
  }

  // Aggregate by city
  const cityMap = new Map<string, { impressions: number; clicks: number; queryCount: number }>();
  for (const h of hits) {
    const cur = cityMap.get(h.city) || { impressions: 0, clicks: 0, queryCount: 0 };
    cur.impressions += h.impressions;
    cur.clicks += h.clicks;
    cur.queryCount += 1;
    cityMap.set(h.city, cur);
  }
  const cityTotals = Array.from(cityMap.entries())
    .map(([city, v]) => ({ city, ...v }))
    .sort((a, b) => b.impressions - a.impressions);

  hits.sort((a, b) => b.impressions - a.impressions);

  return {
    slug: input.slug,
    displayName: input.displayName,
    servedCities: input.servedCities,
    unservedHits: hits,
    cityTotals,
  };
}

// ---- rendering ----

const MONO = `'JetBrains Mono',Consolas,Menlo,'Courier New',monospace`;

function escapeHtml(s: string | null | undefined): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function renderGeoInner(r: GeoExpansionResult): string {
  if (r.cityTotals.length === 0) {
    return `
<h2 style="margin:0 0 6px 0;font-size:22px;color:#1a1a1a;font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;">Geographic Expansion</h2>
<p style="margin:0 0 16px 0;color:#555;font-size:13px;">${escapeHtml(r.displayName)} &mdash; no unserved-city queries detected in the last 28 days.</p>`;
  }

  const cityRows = r.cityTotals
    .slice(0, 10)
    .map((c, i) => `
    <tr>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-family:${MONO};font-size:11px;color:#999;width:22px;">${(i + 1).toString().padStart(2, '0')}</td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#1a1a1a;font-weight:700;">${escapeHtml(c.city)}</td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#333;text-align:right;">${c.impressions} impr</td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#333;text-align:right;">${c.clicks} clicks</td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#333;text-align:right;">${c.queryCount} queries</td>
    </tr>`)
    .join('');

  const topQueries = r.unservedHits
    .slice(0, 10)
    .map(h => `
    <tr>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#1a1a1a;">${escapeHtml(h.query)}</td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:11px;color:#888;font-family:${MONO};">${escapeHtml(h.city)}</td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#333;text-align:right;">${h.impressions}</td>
      <td style="padding:6px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#333;text-align:right;">${h.position.toFixed(1)}</td>
    </tr>`)
    .join('');

  const totalImpr = r.cityTotals.reduce((s, c) => s + c.impressions, 0);

  return `
<h2 style="margin:0 0 6px 0;font-size:22px;color:#1a1a1a;font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;">Geographic Expansion</h2>
<p style="margin:0 0 10px 0;color:#555;font-size:13px;">${escapeHtml(r.displayName)} &mdash; ${r.cityTotals.length} cities outside current service area with search demand.</p>
<p style="margin:0 0 18px 0;color:#1a1a1a;font-size:14px;">Total unserved-city impressions last 28 days: <b style="color:#FF6A00;">${totalImpr.toLocaleString()}</b></p>

<h3 style="margin:0 0 8px 0;font-size:13px;color:#1a1a1a;font-weight:800;text-transform:uppercase;">Cities by impressions</h3>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 20px 0;">
  <tbody>${cityRows}</tbody>
</table>

<h3 style="margin:0 0 8px 0;font-size:13px;color:#1a1a1a;font-weight:800;text-transform:uppercase;">Top unserved queries</h3>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 8px 0;">
  <thead><tr>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Query</th>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:left;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">City</th>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Impr</th>
    <th style="padding:6px;border-bottom:2px solid #e5e7eb;text-align:right;font-family:${MONO};font-size:10px;color:#888;text-transform:uppercase;">Pos</th>
  </tr></thead>
  <tbody>${topQueries}</tbody>
</table>`;
}
