/**
 * Google Search Console API wrapper.
 *
 * Requires OAuth2 credentials in environment variables:
 *   GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET  (shared with Gmail API — same OAuth client)
 *   GSC_REFRESH_TOKEN                     (dedicated to GSC scope)
 *
 * To obtain GSC_REFRESH_TOKEN, run: node scripts/get-gsc-token.js
 */

import { google, searchconsole_v1 } from 'googleapis';

function getGscClient(): searchconsole_v1.Searchconsole | null {
  const clientId = process.env.GMAIL_CLIENT_ID;
  const clientSecret = process.env.GMAIL_CLIENT_SECRET;
  const refreshToken = process.env.GSC_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return null;

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  return google.searchconsole({ version: 'v1', auth: oauth2Client });
}

export function isGscConfigured(): boolean {
  return !!(
    process.env.GMAIL_CLIENT_ID &&
    process.env.GMAIL_CLIENT_SECRET &&
    process.env.GSC_REFRESH_TOKEN
  );
}

export interface GscProperty {
  siteUrl: string;
  permissionLevel: string;
}

/**
 * List every Search Console property (site) the authenticated account has access to.
 */
export async function listProperties(): Promise<GscProperty[]> {
  const gsc = getGscClient();
  if (!gsc) throw new Error('GSC not configured (missing credentials)');

  const res = await gsc.sites.list({});
  const sites = res.data.siteEntry || [];
  return sites.map(s => ({
    siteUrl: s.siteUrl || '',
    permissionLevel: s.permissionLevel || '',
  }));
}

export interface GscQueryRow {
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

/**
 * Pull top-query Search Analytics data for a site over a date range.
 * Dates in YYYY-MM-DD. Use a ~28-day window for stable data (GSC lags 2-3 days).
 */
export async function getTopQueries(
  siteUrl: string,
  startDate: string,
  endDate: string,
  rowLimit = 50,
): Promise<GscQueryRow[]> {
  const gsc = getGscClient();
  if (!gsc) throw new Error('GSC not configured (missing credentials)');

  const res = await gsc.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['query'],
      rowLimit,
    },
  });

  const rows = res.data.rows || [];
  return rows.map(r => ({
    query: (r.keys && r.keys[0]) || '',
    clicks: r.clicks || 0,
    impressions: r.impressions || 0,
    ctr: r.ctr || 0,
    position: r.position || 0,
  }));
}

export interface GscPageRow {
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

/**
 * Top pages for a site over a date range.
 */
export async function getTopPages(
  siteUrl: string,
  startDate: string,
  endDate: string,
  rowLimit = 50,
): Promise<GscPageRow[]> {
  const gsc = getGscClient();
  if (!gsc) throw new Error('GSC not configured (missing credentials)');

  const res = await gsc.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['page'],
      rowLimit,
    },
  });

  const rows = res.data.rows || [];
  return rows.map(r => ({
    page: (r.keys && r.keys[0]) || '',
    clicks: r.clicks || 0,
    impressions: r.impressions || 0,
    ctr: r.ctr || 0,
    position: r.position || 0,
  }));
}

/**
 * Submit (or resubmit) a sitemap so Google re-crawls it.
 * siteUrl: the GSC property URL (e.g. "https://example.com/" or "sc-domain:example.com")
 * feedpath: absolute URL to the sitemap (e.g. "https://example.com/sitemap.xml")
 */
export async function submitSitemap(siteUrl: string, feedpath: string): Promise<void> {
  const gsc = getGscClient();
  if (!gsc) throw new Error('GSC not configured (missing credentials)');

  await gsc.sitemaps.submit({ siteUrl, feedpath });
}

/**
 * List all sitemaps registered for a site.
 */
export async function listSitemaps(siteUrl: string) {
  const gsc = getGscClient();
  if (!gsc) throw new Error('GSC not configured (missing credentials)');

  const res = await gsc.sitemaps.list({ siteUrl });
  return res.data.sitemap || [];
}
