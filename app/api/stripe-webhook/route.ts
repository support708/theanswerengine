/**
 * Stripe webhook receiver for The Answer Engine LLC
 *
 * Verifies signature, persists event, returns 200.
 * Required env: STRIPE_WEBHOOK_SECRET (set in Vercel env from Infisical)
 *
 * Stripe dashboard endpoint URL: https://www.theanswerengine.ai/api/stripe-webhook
 */

import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import os from 'os';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Verify Stripe webhook signature
 * Stripe-Signature header format: t=<unix_ts>,v1=<sig>[,v0=<old_sig>]
 */
function verifyStripeSignature(
  payload: string,
  signatureHeader: string | null,
  secret: string,
  toleranceSec = 300
): { valid: boolean; reason?: string } {
  if (!signatureHeader) return { valid: false, reason: 'missing_signature_header' };

  const parts = Object.fromEntries(
    signatureHeader.split(',').map((kv) => {
      const [k, v] = kv.split('=');
      return [k.trim(), v.trim()];
    })
  );

  const ts = parts.t;
  const sig = parts.v1;

  if (!ts || !sig) return { valid: false, reason: 'malformed_signature_header' };

  // Replay protection
  const tsNum = parseInt(ts, 10);
  const nowSec = Math.floor(Date.now() / 1000);
  if (Math.abs(nowSec - tsNum) > toleranceSec) {
    return { valid: false, reason: 'timestamp_outside_tolerance' };
  }

  const signedPayload = `${ts}.${payload}`;
  const expectedSig = crypto.createHmac('sha256', secret).update(signedPayload, 'utf8').digest('hex');

  // Constant-time comparison
  if (sig.length !== expectedSig.length) return { valid: false, reason: 'signature_length_mismatch' };
  const sigBuf = Buffer.from(sig, 'hex');
  const expBuf = Buffer.from(expectedSig, 'hex');
  if (!crypto.timingSafeEqual(sigBuf, expBuf)) return { valid: false, reason: 'signature_mismatch' };

  return { valid: true };
}

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error('[stripe-webhook] STRIPE_WEBHOOK_SECRET missing in env');
    return NextResponse.json({ error: 'webhook_not_configured' }, { status: 500 });
  }

  const rawBody = await req.text();
  const sigHeader = req.headers.get('stripe-signature');

  const { valid, reason } = verifyStripeSignature(rawBody, sigHeader, secret);
  if (!valid) {
    console.warn(`[stripe-webhook] signature verification failed: ${reason}`);
    return NextResponse.json({ error: 'signature_invalid', reason }, { status: 400 });
  }

  let event: { id: string; type: string; data?: { object?: Record<string, unknown> } };
  try {
    event = JSON.parse(rawBody);
  } catch (err) {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  // Persist to disk for the Cortex fleet to consume
  // In production on Vercel, /tmp is the only writable path; in dev, use ~/.claude/tasks/stripe-events
  const isVercel = !!process.env.VERCEL;
  const outDir = isVercel
    ? path.join('/tmp', 'stripe-events')
    : path.join(os.homedir(), '.claude', 'tasks', 'stripe-events');

  try {
    fs.mkdirSync(outDir, { recursive: true });
    const filename = `${event.id}-${event.type.replace(/[^a-z0-9_-]/gi, '_')}.json`;
    fs.writeFileSync(path.join(outDir, filename), JSON.stringify(event, null, 2));
  } catch (err) {
    // Non-fatal: log but still return 200 so Stripe doesn't retry
    console.error('[stripe-webhook] failed to persist event', err);
  }

  // Inline processing for high-priority event types
  switch (event.type) {
    case 'invoice.payment_succeeded':
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
    case 'invoice.payment_failed':
      // The Cortex daily MRR ledger picks these up; nothing to do here besides persist
      console.log(`[stripe-webhook] event ${event.id} (${event.type}) persisted`);
      break;
    default:
      console.log(`[stripe-webhook] event ${event.id} (${event.type}) — no inline handler`);
  }

  return NextResponse.json({ received: true, eventId: event.id }, { status: 200 });
}

// Reject other methods explicitly
export async function GET() {
  return NextResponse.json(
    { error: 'method_not_allowed', message: 'Stripe sends POST. Configure your webhook endpoint to use POST.' },
    { status: 405 }
  );
}
