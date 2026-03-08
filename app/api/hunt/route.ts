/**
 * Manual hunt trigger — admin-only (protected by NextAuth middleware).
 * POST /api/hunt — triggers a hunt session with 'manual' trigger type.
 */

import { NextResponse } from 'next/server';
import { runHuntSession } from '@/lib/scheduler';

export const maxDuration = 120;

export async function POST() {
  if (process.env.HUNT_ENABLED !== 'true') {
    return NextResponse.json(
      { error: 'Hunt is disabled. Set HUNT_ENABLED=true in environment variables.' },
      { status: 400 },
    );
  }

  try {
    const session = await runHuntSession('manual');
    return NextResponse.json({ success: true, session });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Hunt failed' },
      { status: 500 },
    );
  }
}
