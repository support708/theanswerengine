import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { readHeartbeat, getProjects, type DashboardData } from '@/lib/command-center';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const heartbeat = await readHeartbeat();

    // Read Answer Engine lead stats
    let answerEngine = {
      totalLeads: 0,
      activeLeads: 0,
      closedWon: 0,
      closedLost: 0,
      huntEnabled: process.env.HUNT_ENABLED === 'true',
    };

    try {
      const leadsRaw = await readFile(join(process.cwd(), 'data', 'leads.json'), 'utf-8');
      const leads = JSON.parse(leadsRaw);
      answerEngine.totalLeads = leads.length;
      answerEngine.activeLeads = leads.filter(
        (l: { status: string }) => !['closed_won', 'closed_lost', 'no_response', 'failed'].includes(l.status)
      ).length;
      answerEngine.closedWon = leads.filter((l: { status: string }) => l.status === 'closed_won').length;
      answerEngine.closedLost = leads.filter((l: { status: string }) => l.status === 'closed_lost').length;
    } catch {
      // leads.json not available
    }

    const dashboard: DashboardData = {
      ...heartbeat,
      answerEngine,
      projects: getProjects(),
    };

    return NextResponse.json(dashboard);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load dashboard data', details: String(error) },
      { status: 500 }
    );
  }
}
