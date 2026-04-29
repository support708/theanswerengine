/**
 * Meta Marketing API client for The Answer Engine ad automation.
 *
 * Reads META_ACCESS_TOKEN + META_AD_ACCOUNT_ID from .env.local.
 * All functions return parsed JSON on success, throw on error.
 *
 * Docs: https://developers.facebook.com/docs/marketing-api
 * Rate limits: 200 calls/hour per user on cold accounts, scales with spend.
 */

const API_VERSION = 'v21.0';
const BASE = `https://graph.facebook.com/${API_VERSION}`;

function token(): string {
  const t = process.env.META_ACCESS_TOKEN;
  if (!t) throw new Error('META_ACCESS_TOKEN not set in .env.local');
  return t;
}

function adAccountId(): string {
  const id = process.env.META_AD_ACCOUNT_ID ?? '1394316602317704';
  return id.startsWith('act_') ? id : `act_${id}`;
}

async function graphGet<T>(path: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`${BASE}${path}`);
  url.searchParams.set('access_token', token());
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Meta API ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}

async function graphPost<T>(path: string, body: Record<string, unknown>): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...body, access_token: token() }),
  });
  if (!res.ok) throw new Error(`Meta API ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}

// ─── Account info ──────────────────────────────────────────────────────────

export async function getAccount() {
  return graphGet<{ id: string; name: string; account_status: number; currency: string; balance: string }>(
    `/${adAccountId()}`,
    { fields: 'id,name,account_status,currency,balance,amount_spent' }
  );
}

// ─── Ads & campaigns ───────────────────────────────────────────────────────

export async function listCampaigns() {
  return graphGet<{ data: Array<{ id: string; name: string; status: string; objective: string; daily_budget: string }> }>(
    `/${adAccountId()}/campaigns`,
    { fields: 'id,name,status,objective,daily_budget,effective_status,created_time' }
  );
}

export async function listAds(opts: { since?: string; until?: string } = {}) {
  const params: Record<string, string> = {
    fields: 'id,name,status,effective_status,creative{id,name,thumbnail_url},adset_id,campaign_id',
    limit: '100',
  };
  if (opts.since && opts.until) {
    params['time_range'] = JSON.stringify({ since: opts.since, until: opts.until });
  }
  return graphGet<{ data: Array<{ id: string; name: string; status: string; effective_status: string }> }>(
    `/${adAccountId()}/ads`,
    params
  );
}

// ─── Insights (performance metrics) ────────────────────────────────────────

export async function getAdInsights(adId: string, datePreset: 'today' | 'yesterday' | 'last_7d' | 'last_30d' = 'last_7d') {
  return graphGet<{
    data: Array<{
      impressions: string;
      clicks: string;
      spend: string;
      ctr: string;
      cpc: string;
      cpm: string;
      actions?: Array<{ action_type: string; value: string }>;
    }>;
  }>(`/${adId}/insights`, {
    fields: 'impressions,clicks,spend,ctr,cpc,cpm,actions,cost_per_action_type',
    date_preset: datePreset,
  });
}

export async function getAccountInsights(datePreset: 'today' | 'yesterday' | 'last_7d' | 'last_30d' = 'last_7d') {
  return graphGet<{
    data: Array<{ impressions: string; clicks: string; spend: string; ctr: string; cpc: string; actions?: Array<{ action_type: string; value: string }> }>;
  }>(`/${adAccountId()}/insights`, {
    fields: 'impressions,clicks,spend,ctr,cpc,cpm,actions,cost_per_action_type',
    date_preset: datePreset,
    level: 'account',
  });
}

// ─── Ad controls ───────────────────────────────────────────────────────────

export async function pauseAd(adId: string) {
  return graphPost(`/${adId}`, { status: 'PAUSED' });
}

export async function enableAd(adId: string) {
  return graphPost(`/${adId}`, { status: 'ACTIVE' });
}

export async function setAdDailyBudget(adSetId: string, dollars: number) {
  const cents = Math.round(dollars * 100);
  return graphPost(`/${adSetId}`, { daily_budget: String(cents) });
}

// ─── Lead retrieval (Instant Forms) ────────────────────────────────────────

export async function listForms(pageId: string) {
  return graphGet<{ data: Array<{ id: string; name: string; status: string; leads_count: number }> }>(
    `/${pageId}/leadgen_forms`,
    { fields: 'id,name,status,leads_count' }
  );
}

export async function getFormLeads(formId: string, sinceDaysAgo = 1) {
  const since = Math.floor(Date.now() / 1000) - sinceDaysAgo * 86400;
  return graphGet<{
    data: Array<{
      id: string;
      created_time: string;
      field_data: Array<{ name: string; values: string[] }>;
    }>;
  }>(`/${formId}/leads`, {
    filtering: JSON.stringify([{ field: 'time_created', operator: 'GREATER_THAN', value: String(since) }]),
  });
}

// ─── Creative upload ───────────────────────────────────────────────────────

export async function uploadImage(imagePath: string) {
  // For ad creative images. Returns image hash used in ad creation.
  const fs = await import('fs');
  const FormData = (await import('form-data')).default;
  const form = new FormData();
  form.append('access_token', token());
  form.append('filename', fs.createReadStream(imagePath));

  const res = await fetch(`${BASE}/${adAccountId()}/adimages`, {
    method: 'POST',
    // form-data sets its own content-type boundary
    body: form as unknown as BodyInit,
  });
  if (!res.ok) throw new Error(`Image upload ${res.status}: ${await res.text()}`);
  return res.json() as Promise<{ images: Record<string, { hash: string; url: string }> }>;
}
