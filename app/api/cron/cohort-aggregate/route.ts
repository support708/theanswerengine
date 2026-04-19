/**
 * Cohort Benchmark aggregator cron.
 *
 * Runs nightly at 08:00 UTC. Computes the current cohort benchmarks across
 * every client in lib/cohort-aggregator.ts COHORT_ASSIGNMENT and writes
 * one snapshot per YYYY-MM key to data/cohort-benchmarks.json. Later runs
 * in the same month overwrite that month's key.
 *
 * No emails sent — this is pure data infrastructure that feeds the Monthly
 * Report "You vs. Industry" section and the Client Dashboard. Cohort
 * medians are suppressed for cohort_size < 3, so thin cohorts (today:
 * property-mgmt, builder-services, aeo-agency with N=1) simply render no
 * benchmark block.
 */
import { NextRequest, NextResponse } from 'next/server';
import { aggregateCohorts } from '@/lib/cohort-aggregator';
import { sendMessage as sendTelegram } from '@/lib/telegram';

export const maxDuration = 300;

export async function GET(req: NextRequest) { return handle(req); }
export async function POST(req: NextRequest) { return handle(req); }

async function handle(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const secret = process.env.CRON_SECRET;
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const benchmarks = await aggregateCohorts({ persist: true });

    const lines: string[] = [`<b>Cohort Benchmark aggregate</b>`];
    for (const b of benchmarks) {
      lines.push(
        `  • ${b.cohortDisplayName} (N=${b.cohortSize})` +
        `${b.cohortSize < 3 ? ' — suppressed' : ''}` +
        ` · AI ${b.median.authority_index}/100` +
        ` · ${b.median.impressions_28d.toLocaleString()} impr`,
      );
    }
    try { await sendTelegram(lines.join('\n')); } catch { /* non-blocking */ }

    return NextResponse.json({ success: true, count: benchmarks.length, benchmarks });
  } catch (err) {
    const msg = (err as Error).message?.slice(0, 300) || 'unknown error';
    try { await sendTelegram(`<b>Cohort Benchmark aggregator FAILED</b>\n${msg}`); } catch { /* non-blocking */ }
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
