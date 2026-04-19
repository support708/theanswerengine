/**
 * Sitemap auto-submit — fire-and-forget helper called after any blog
 * publish so Google re-crawls the site faster than the default schedule.
 *
 * Always error-tolerant: if GSC isn't configured, or the sitemap isn't
 * reachable yet (Vercel mid-deploy), we log and move on. Never throws
 * into the publish path.
 *
 * Usage:
 *   await autoSubmitSitemap('sc-domain:theanswerengine.ai');
 *   await autoSubmitForClient('lovery-re');
 *   await autoSubmitTae(); // shorthand for the main TAE site
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { isGscConfigured, submitSitemap, type GscProperty } from './gsc-api';

export interface AutoSubmitResult {
  siteUrl: string;
  feedpath: string;
  submitted: boolean;
  reason?: string;
}

export function deriveSitemapUrl(siteUrl: string): string {
  if (siteUrl.startsWith('sc-domain:')) {
    const domain = siteUrl.slice('sc-domain:'.length);
    return `https://${domain}/sitemap.xml`;
  }
  return siteUrl.replace(/\/?$/, '/') + 'sitemap.xml';
}

async function sitemapReachable(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(8000),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function autoSubmitSitemap(siteUrl: string): Promise<AutoSubmitResult> {
  const feedpath = deriveSitemapUrl(siteUrl);

  if (!isGscConfigured()) {
    console.log(`[sitemap-auto-submit] GSC not configured; skipping ${siteUrl}`);
    return { siteUrl, feedpath, submitted: false, reason: 'GSC not configured' };
  }

  if (!(await sitemapReachable(feedpath))) {
    console.log(`[sitemap-auto-submit] sitemap unreachable at ${feedpath}`);
    return { siteUrl, feedpath, submitted: false, reason: 'sitemap unreachable' };
  }

  try {
    await submitSitemap(siteUrl, feedpath);
    console.log(`[sitemap-auto-submit] submitted ${feedpath} for ${siteUrl}`);
    return { siteUrl, feedpath, submitted: true };
  } catch (err) {
    const msg = (err as Error).message || 'unknown error';
    console.log(`[sitemap-auto-submit] submit failed for ${siteUrl}: ${msg}`);
    return { siteUrl, feedpath, submitted: false, reason: msg };
  }
}

/**
 * Resolve a client slug from data/gsc-client-map.json and submit its sitemap.
 * Returns null if the slug has no mapped GSC property.
 */
export async function autoSubmitForClient(slug: string): Promise<AutoSubmitResult | null> {
  let map: Record<string, string>;
  try {
    const path = join(process.cwd(), 'data', 'gsc-client-map.json');
    map = JSON.parse(readFileSync(path, 'utf-8')) as Record<string, string>;
  } catch (err) {
    console.log(`[sitemap-auto-submit] cannot read gsc-client-map.json: ${(err as Error).message}`);
    return null;
  }

  let siteUrl: string | null = null;
  for (const [k, v] of Object.entries(map)) {
    if (k.startsWith('_')) continue;
    if (v === slug) {
      siteUrl = k;
      break;
    }
  }

  if (!siteUrl) {
    console.log(`[sitemap-auto-submit] no GSC property mapped for slug "${slug}"`);
    return null;
  }

  return autoSubmitSitemap(siteUrl);
}

/**
 * Shorthand: submit the TAE agency site sitemap. Called after The Content
 * Engine publishes a batch of blog articles.
 */
export async function autoSubmitTae(): Promise<AutoSubmitResult> {
  return autoSubmitSitemap('sc-domain:theanswerengine.ai');
}

/**
 * Submit every property listed in data/gsc-client-map.json. Used by the
 * monthly cron or ad-hoc scripts when a cross-portfolio refresh is needed.
 */
export async function autoSubmitAll(): Promise<AutoSubmitResult[]> {
  const path = join(process.cwd(), 'data', 'gsc-client-map.json');
  const map = JSON.parse(readFileSync(path, 'utf-8')) as Record<string, string>;
  const siteUrls = Object.keys(map).filter(k => !k.startsWith('_') && map[k] !== 'CONFIGURE_ME');
  const results: AutoSubmitResult[] = [];
  for (const s of siteUrls) {
    results.push(await autoSubmitSitemap(s));
  }
  return results;
}

// Re-export for callers that only want the type
export type { GscProperty };
