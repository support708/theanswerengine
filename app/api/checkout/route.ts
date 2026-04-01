import { NextRequest, NextResponse } from 'next/server';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://theanswerengine.ai';

interface CheckoutRequest {
  clientSlug: string;
  businessName: string;
  contactEmail: string;
  tier?: 'foundation' | 'authority' | 'dominance';
}

const TIER_PRICES: Record<string, { amount: number; name: string }> = {
  foundation: { amount: 299700, name: 'Answer Authority Foundation' },
  authority: { amount: 499700, name: 'Answer Authority Pro' },
  dominance: { amount: 799700, name: 'Answer Authority Dominance' },
};

/**
 * POST /api/checkout — Create a Stripe Checkout Session
 *
 * Returns a checkout URL that the client can use to pay.
 * The client_reference_id ties the payment back to the client slug.
 */
export async function POST(req: NextRequest) {
  if (!STRIPE_SECRET_KEY) {
    return NextResponse.json({
      error: 'Stripe not configured',
      setup: {
        instructions: [
          '1. Create a Stripe account at stripe.com',
          '2. Get your secret key from Dashboard > Developers > API keys',
          '3. Add STRIPE_SECRET_KEY to .env.local',
          '4. Create a webhook endpoint in Stripe Dashboard pointing to /api/webhook/stripe',
          '5. Add STRIPE_WEBHOOK_SECRET to .env.local',
        ],
      },
    }, { status: 503 });
  }

  const body = (await req.json()) as CheckoutRequest;
  const { clientSlug, businessName, contactEmail, tier = 'foundation' } = body;

  if (!clientSlug || !businessName || !contactEmail) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const tierConfig = TIER_PRICES[tier];
  if (!tierConfig) {
    return NextResponse.json({ error: `Invalid tier: ${tier}` }, { status: 400 });
  }

  // Create Stripe Checkout Session via API (no SDK needed)
  const params = new URLSearchParams({
    'mode': 'subscription',
    'client_reference_id': clientSlug,
    'customer_email': contactEmail,
    'success_url': `${APP_URL}/admin/command-center?onboarded=${clientSlug}`,
    'cancel_url': `${APP_URL}/admin/pipeline`,
    'line_items[0][price_data][currency]': 'usd',
    'line_items[0][price_data][product_data][name]': tierConfig.name,
    'line_items[0][price_data][product_data][description]': `AEO service for ${businessName} — exclusive territory protection`,
    'line_items[0][price_data][unit_amount]': tierConfig.amount.toString(),
    'line_items[0][price_data][recurring][interval]': 'month',
    'line_items[0][quantity]': '1',
    'metadata[client_slug]': clientSlug,
    'metadata[business_name]': businessName,
    'metadata[tier]': tier,
    'subscription_data[metadata][client_slug]': clientSlug,
  });

  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  const session = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: session.error?.message || 'Stripe error' }, { status: 500 });
  }

  return NextResponse.json({
    checkoutUrl: session.url,
    sessionId: session.id,
    clientSlug,
    tier,
    amount: `$${(tierConfig.amount / 100).toFixed(2)}/mo`,
  });
}
