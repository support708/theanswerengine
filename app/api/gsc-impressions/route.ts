import { NextResponse } from 'next/server';

export const revalidate = 86400;

const SITES: Record<string, { siteUrl: string; label: string; months?: number }> = {
  lamh: {
    siteUrl: 'sc-domain:lametrohomefinder.com',
    label: 'lametrohomefinder.com',
  },
  rpm: {
    siteUrl: 'https://www.rpmsouthland.com/',
    label: 'rpmsouthland.com',
    months: 3,
  },
};

async function getAccessToken(): Promise<string> {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GMAIL_CLIENT_ID!,
      client_secret: process.env.GMAIL_CLIENT_SECRET!,
      refresh_token: process.env.GSC_REFRESH_TOKEN!,
      grant_type: 'refresh_token',
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error('Failed to get GSC access token');
  return data.access_token;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const siteKey = searchParams.get('site') ?? 'lamh';
  const site = SITES[siteKey];
  if (!site) {
    return NextResponse.json({ error: 'Unknown site' }, { status: 400 });
  }

  try {
    const accessToken = await getAccessToken();

    const startDate = site.months
      ? (() => {
          const d = new Date();
          d.setMonth(d.getMonth() - site.months);
          return d.toISOString().slice(0, 10);
        })()
      : '2024-01-01';

    const res = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site.siteUrl)}/searchAnalytics/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startDate,
          endDate: new Date().toISOString().slice(0, 10),
          dimensions: ['date'],
          rowLimit: 500,
          dataState: 'all',
        }),
        next: { revalidate: 86400 },
      }
    );

    const gscData = await res.json();
    if (!gscData.rows) {
      return NextResponse.json({ error: 'No GSC data' }, { status: 500 });
    }

    const byMonth: Record<string, number> = {};
    for (const row of gscData.rows) {
      const month = (row.keys[0] as string).slice(0, 7);
      byMonth[month] = (byMonth[month] ?? 0) + (row.impressions as number);
    }

    const currentMonth = new Date().toISOString().slice(0, 7);
    const months = Object.entries(byMonth)
      .sort(([a], [b]) => a.localeCompare(b))
      .filter(([month]) => month < currentMonth)
      .map(([month, impressions]) => ({ month, impressions: Math.round(impressions) }));

    return NextResponse.json(
      { months, label: site.label },
      { headers: { 'Cache-Control': 'public, s-maxage=86400' } }
    );
  } catch (err) {
    console.error('GSC fetch error:', err);
    return NextResponse.json({ error: 'GSC fetch failed' }, { status: 500 });
  }
}
