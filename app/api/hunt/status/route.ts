/**
 * Hunt status endpoint — admin-only (protected by NextAuth middleware).
 * GET /api/hunt/status — returns current rotation state and last session.
 */

import { NextResponse } from 'next/server';
import { getHuntStatus } from '@/lib/scheduler';
import { readBacklog } from '@/lib/hunter-data';

export async function GET() {
  try {
    const status = await getHuntStatus();
    const backlog = await readBacklog();

    return NextResponse.json({
      ...status,
      backlogCount: backlog.length,
      huntEnabled: process.env.HUNT_ENABLED === 'true',
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to get status' },
      { status: 500 },
    );
  }
}
