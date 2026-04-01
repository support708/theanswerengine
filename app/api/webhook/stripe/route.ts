import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';

const AEO_CLIENTS_DIR = 'C:/Users/Justi/aeo-clients';
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN || 'xoxb-2576678307591-10683680262370-kdbNgno3qSRJwastgICQ2zRU';
const AE_ONBOARDING_CHANNEL = 'C0ANU7G6LGZ'; // #deal-finder (reuse until #ae-onboarding created)

interface StripeEvent {
  id: string;
  type: string;
  data: {
    object: {
      id: string;
      customer_email?: string;
      client_reference_id?: string; // client slug
      metadata?: Record<string, string>;
      amount_total?: number;
      currency?: string;
      payment_status?: string;
      subscription?: string;
    };
  };
}

function verifyStripeSignature(payload: string, signature: string, secret: string): boolean {
  if (!secret) return true; // Skip verification if no secret configured (dev mode)
  const parts = signature.split(',').reduce((acc: Record<string, string>, part) => {
    const [key, val] = part.split('=');
    acc[key] = val;
    return acc;
  }, {});
  const timestamp = parts['t'];
  const sig = parts['v1'];
  if (!timestamp || !sig) return false;
  const signedPayload = `${timestamp}.${payload}`;
  const expected = crypto.createHmac('sha256', secret).update(signedPayload).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
}

async function postToSlack(text: string, blocks?: unknown[]) {
  const payload = JSON.stringify({ channel: AE_ONBOARDING_CHANNEL, text, blocks });
  await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${SLACK_BOT_TOKEN}`,
    },
    body: payload,
  });
}

async function updateClientStatus(slug: string, status: string, extra?: Record<string, unknown>) {
  const configPath = path.join(AEO_CLIENTS_DIR, `${slug}.json`);
  try {
    const content = await fs.readFile(configPath, 'utf-8');
    const config = JSON.parse(content);
    if (config.onboarding) {
      config.onboarding.status = status;
      if (extra) Object.assign(config.onboarding, extra);
    }
    await fs.writeFile(configPath, JSON.stringify(config, null, 2), 'utf-8');
    return config;
  } catch {
    return null;
  }
}

/**
 * POST /api/webhook/stripe — Handle Stripe webhook events
 *
 * Events handled:
 * - checkout.session.completed: Payment received, advance onboarding
 * - customer.subscription.deleted: Subscription cancelled
 */
export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature') || '';

  // Verify webhook signature
  if (STRIPE_WEBHOOK_SECRET && !verifyStripeSignature(body, signature, STRIPE_WEBHOOK_SECRET)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  let event: StripeEvent;
  try {
    event = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const slug = session.client_reference_id || session.metadata?.client_slug || '';
      const email = session.customer_email || '';
      const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : '0';

      if (!slug) {
        console.error('Stripe webhook: no client_reference_id in checkout session');
        await postToSlack(`Payment received ($${amount}) but no client slug found — manual intervention needed. Email: ${email}`);
        break;
      }

      // Update client status to pending_interview
      const config = await updateClientStatus(slug, 'pending_interview', {
        paidAt: new Date().toISOString(),
        stripeSessionId: session.id,
        subscriptionId: session.subscription || null,
      });

      const businessName = config?.business?.name || slug;

      // Post to Slack
      await postToSlack(`Payment received for ${businessName}`, [
        { type: 'header', text: { type: 'plain_text', text: `💰 Payment Received — ${businessName}` } },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Amount:* $${amount}\n*Email:* ${email}\n*Client Slug:* ${slug}\n*Status:* pending_interview\n\n*Next Steps:*\n1. Interview questions auto-generated — check client email\n2. Wait for client to return answers\n3. Run \`/aeo-client-setup ${slug}\` to finalize\n4. Run \`/aeo-batch ${slug} all\` to generate content`,
          },
        },
      ]);

      console.log(`Stripe: checkout.session.completed for ${slug} ($${amount})`);
      break;
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object;
      const slug = sub.metadata?.client_slug || '';
      if (slug) {
        await updateClientStatus(slug, 'paused', { cancelledAt: new Date().toISOString() });
        await postToSlack(`Subscription cancelled for ${slug} — client status set to paused`);
      }
      break;
    }

    default:
      // Acknowledge but don't process other event types
      break;
  }

  return NextResponse.json({ received: true });
}
