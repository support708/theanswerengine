import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = 'C:/Users/Justi/theanswerengine-nextjs/data';
const REVIEW_STATE_PATH = path.join(DATA_DIR, 'review-campaigns.json');

interface ReviewRequest {
  clientName: string;
  customerName: string;
  customerPhone?: string;
  customerEmail?: string;
  propertyAddress?: string;
  closingDate?: string;
  agentName?: string;
  platform: 'google' | 'yelp' | 'zillow' | 'realtor';
}

interface ReviewCampaign {
  id: string;
  clientSlug: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  propertyAddress: string;
  closingDate: string;
  agentName: string;
  platform: string;
  reviewUrl: string;
  status: 'pending' | 'sent_day0' | 'sent_day3' | 'sent_day7' | 'completed' | 'declined';
  createdAt: string;
  messages: { type: string; sentAt: string; content: string }[];
}

// Review URLs by client
const REVIEW_URLS: Record<string, Record<string, string>> = {
  'davis-agency': {
    google: 'https://g.page/r/davisagencytx/review',
    zillow: 'https://www.zillow.com/profile/Derrik-Davis/reviews/',
    yelp: 'https://www.yelp.com/writeareview/biz/davis-agency-austin',
    realtor: 'https://www.realtor.com/realestateagents/derrik-davis/reviews',
  },
  'lovery-real-estate': {
    google: 'https://g.page/r/loveryrealestate/review',
  },
};

// SMS/email templates
const TEMPLATES = {
  day0_sms: (name: string, agentName: string, reviewUrl: string) =>
    `Hi ${name}! Congratulations on your new home! 🎉 ${agentName} and the team loved working with you. If you had a great experience, would you mind leaving us a quick review? It really helps! ${reviewUrl}`,

  day3_sms: (name: string, reviewUrl: string) =>
    `Hi ${name}, hope you're settling in! Just a gentle reminder — if you haven't had a chance yet, we'd really appreciate a quick review. Takes less than 2 minutes: ${reviewUrl}`,

  day7_email_subject: (agentName: string) =>
    `A quick favor from ${agentName}`,

  day7_email_body: (name: string, agentName: string, propertyAddress: string, reviewUrl: string) =>
    `Hi ${name},

I hope you're loving your new home at ${propertyAddress}!

I wanted to personally reach out and say thank you for trusting us with such an important decision. Working with you was a genuine pleasure.

If you have 2 minutes, I'd be so grateful if you could share your experience with a quick review. It helps other families in a similar situation find the right agent.

${reviewUrl}

No pressure at all — either way, I'm here if you ever need anything real estate related.

Warmly,
${agentName}`,
};

async function loadCampaigns(): Promise<ReviewCampaign[]> {
  try {
    const content = await fs.readFile(REVIEW_STATE_PATH, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function saveCampaigns(campaigns: ReviewCampaign[]) {
  await fs.writeFile(REVIEW_STATE_PATH, JSON.stringify(campaigns, null, 2), 'utf-8');
}

/**
 * POST /api/review-engine — Create a new review request campaign
 */
export async function POST(req: NextRequest) {
  const body = (await req.json()) as ReviewRequest;

  if (!body.clientName || !body.customerName) {
    return NextResponse.json({ error: 'Missing clientName or customerName' }, { status: 400 });
  }

  const clientSlug = body.clientName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const clientUrls = REVIEW_URLS[clientSlug];
  const platform = body.platform || 'google';
  const reviewUrl = clientUrls?.[platform] || '';

  if (!reviewUrl) {
    return NextResponse.json({
      error: `No review URL configured for ${clientSlug} on ${platform}`,
      availablePlatforms: clientUrls ? Object.keys(clientUrls) : [],
    }, { status: 400 });
  }

  const campaigns = await loadCampaigns();

  // Check for duplicate
  const existing = campaigns.find(
    c => c.customerName === body.customerName && c.clientSlug === clientSlug && c.status !== 'completed'
  );
  if (existing) {
    return NextResponse.json({ error: 'Campaign already exists', campaign: existing }, { status: 409 });
  }

  const campaign: ReviewCampaign = {
    id: `rev_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    clientSlug,
    customerName: body.customerName,
    customerPhone: body.customerPhone || '',
    customerEmail: body.customerEmail || '',
    propertyAddress: body.propertyAddress || '',
    closingDate: body.closingDate || new Date().toISOString().split('T')[0],
    agentName: body.agentName || '',
    platform,
    reviewUrl,
    status: 'pending',
    createdAt: new Date().toISOString(),
    messages: [],
  };

  // Generate the 3-touch sequence
  const day0Sms = TEMPLATES.day0_sms(body.customerName.split(' ')[0], campaign.agentName || 'our team', reviewUrl);
  const day3Sms = TEMPLATES.day3_sms(body.customerName.split(' ')[0], reviewUrl);
  const day7Subject = TEMPLATES.day7_email_subject(campaign.agentName || 'Your Agent');
  const day7Body = TEMPLATES.day7_email_body(
    body.customerName.split(' ')[0],
    campaign.agentName || 'Your Agent',
    campaign.propertyAddress || 'your new home',
    reviewUrl
  );

  campaigns.push(campaign);
  await saveCampaigns(campaigns);

  return NextResponse.json({
    success: true,
    campaign,
    sequence: {
      day0: { type: 'sms', content: day0Sms, sendAt: 'closing day' },
      day3: { type: 'sms', content: day3Sms, sendAt: '3 days after closing' },
      day7: { type: 'email', subject: day7Subject, body: day7Body, sendAt: '7 days after closing' },
    },
    instructions: [
      'Day 0: Send the closing-day SMS manually or via Twilio',
      'Day 3: Send the follow-up SMS',
      'Day 7: Send the email via Gmail',
      'Track status at GET /api/review-engine?client=davis-agency',
    ],
  });
}

/**
 * GET /api/review-engine — List campaigns for a client
 */
export async function GET(req: NextRequest) {
  const client = req.nextUrl.searchParams.get('client');
  const campaigns = await loadCampaigns();

  if (client) {
    const clientSlug = client.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const filtered = campaigns.filter(c => c.clientSlug === clientSlug);
    return NextResponse.json({
      client: clientSlug,
      total: filtered.length,
      byStatus: filtered.reduce((acc: Record<string, number>, c) => {
        acc[c.status] = (acc[c.status] || 0) + 1;
        return acc;
      }, {}),
      campaigns: filtered,
    });
  }

  // Summary across all clients
  const summary = campaigns.reduce((acc: Record<string, { total: number; pending: number; completed: number }>, c) => {
    if (!acc[c.clientSlug]) acc[c.clientSlug] = { total: 0, pending: 0, completed: 0 };
    acc[c.clientSlug].total++;
    if (c.status === 'completed') acc[c.clientSlug].completed++;
    else acc[c.clientSlug].pending++;
    return acc;
  }, {});

  return NextResponse.json({ summary, totalCampaigns: campaigns.length });
}

/**
 * PATCH /api/review-engine — Update campaign status
 */
export async function PATCH(req: NextRequest) {
  const { campaignId, status, note } = await req.json();

  if (!campaignId || !status) {
    return NextResponse.json({ error: 'Missing campaignId or status' }, { status: 400 });
  }

  const campaigns = await loadCampaigns();
  const campaign = campaigns.find(c => c.id === campaignId);

  if (!campaign) {
    return NextResponse.json({ error: 'Campaign not found' }, { status: 404 });
  }

  campaign.status = status;
  if (note) {
    campaign.messages.push({
      type: status,
      sentAt: new Date().toISOString(),
      content: note,
    });
  }

  await saveCampaigns(campaigns);
  return NextResponse.json({ success: true, campaign });
}
