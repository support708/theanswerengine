import { NextRequest, NextResponse } from 'next/server';
import { writeHeartbeat, type HeartbeatData } from '@/lib/command-center';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-cron-secret') || request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data: HeartbeatData = await request.json();
    data.lastUpdated = new Date().toISOString();
    await writeHeartbeat(data);
    return NextResponse.json({ success: true, receivedAt: data.lastUpdated });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid heartbeat data', details: String(error) },
      { status: 400 }
    );
  }
}
