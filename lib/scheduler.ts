/**
 * Lead Hunter Bot — Session Scheduler
 * Orchestrates the full hunt flow: rotation → search → score → dedupe → queue.
 */

import type { HuntSession, HuntTrigger, RawProspect } from './hunter-types';
import { readHuntState, writeHuntState, appendHuntLog, readBacklog, writeBacklog } from './hunter-data';
import { getRotationTarget, advanceRotation, runSearchPass1, runSearchPass2, runSearchPass3, scoreProspect, classifyPriority } from './hunter';
import { isDuplicate } from './deduplicator';
import { readLeads, writeLeads, generateId, generateSlug } from './leads';
import { notifyHuntComplete } from './telegram';
import type { Lead } from './types';

export async function runHuntSession(trigger: HuntTrigger): Promise<HuntSession> {
  const sessionId = `hunt_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
  const startedAt = new Date().toISOString();

  const session: HuntSession = {
    id: sessionId,
    startedAt,
    trigger,
    vertical: '',
    metro: '',
    prospectsFound: 0,
    p1Queued: 0,
    p2Queued: 0,
    p3Backlogged: 0,
    duplicatesSkipped: 0,
    errors: [],
  };

  try {
    // 1. Read current state and determine rotation target
    const state = await readHuntState();
    const { vertical, metro } = getRotationTarget(state);
    session.vertical = vertical;
    session.metro = metro;

    // 2. Run 3 search passes (with rate-limit delays between passes)
    const RATE_LIMIT_DELAY_MS = 15_000; // 15s between API calls (Tier 1: 50K input tokens/min)

    let painSignals: string[] = [];
    try {
      painSignals = await runSearchPass1(vertical, metro);
    } catch (err) {
      session.errors.push(`Pass 1 failed: ${err instanceof Error ? err.message : String(err)}`);
    }

    let prospects: RawProspect[] = [];
    if (painSignals.length > 0) {
      await new Promise(r => setTimeout(r, RATE_LIMIT_DELAY_MS));
      try {
        prospects = await runSearchPass2(painSignals, vertical, metro);
      } catch (err) {
        session.errors.push(`Pass 2 failed: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    if (prospects.length > 0) {
      await new Promise(r => setTimeout(r, RATE_LIMIT_DELAY_MS));
      try {
        prospects = await runSearchPass3(prospects);
      } catch (err) {
        session.errors.push(`Pass 3 enrichment failed: ${err instanceof Error ? err.message : String(err)}`);
        // Non-fatal — keep prospects without enrichment
      }
    }

    session.prospectsFound = prospects.length;

    // 3. Score all prospects
    for (const prospect of prospects) {
      prospect.scoreBreakdown = scoreProspect(prospect);
      prospect.priority = classifyPriority(prospect.scoreBreakdown.total);
    }

    // 4. Deduplicate
    const existingLeads = await readLeads();
    const backlog = await readBacklog();
    const unique: RawProspect[] = [];
    for (const prospect of prospects) {
      if (isDuplicate(prospect, existingLeads, backlog)) {
        session.duplicatesSkipped++;
      } else {
        unique.push(prospect);
      }
    }

    // 5. Route by priority
    const newLeads: Lead[] = [];
    const newBacklog: RawProspect[] = [];

    for (const prospect of unique) {
      if (prospect.priority === 'P1' || prospect.priority === 'P2') {
        const lead = prospectToLead(prospect, sessionId);
        newLeads.push(lead);
        if (prospect.priority === 'P1') session.p1Queued++;
        else session.p2Queued++;
      } else if (prospect.priority === 'P3') {
        newBacklog.push(prospect);
        session.p3Backlogged++;
      }
      // Below P3 threshold: discard
    }

    // 6. Write queued leads
    if (newLeads.length > 0) {
      const allLeads = [...existingLeads, ...newLeads];
      await writeLeads(allLeads);
    }

    // 7. Write backlog
    if (newBacklog.length > 0) {
      const allBacklog = [...backlog, ...newBacklog];
      await writeBacklog(allBacklog);
    }

    // 8. Update state
    const updatedState = advanceRotation(state);
    const now = new Date().toISOString();
    if (trigger === 'cron_daily' || trigger === 'manual') updatedState.lastDailyRun = now;
    if (trigger === 'cron_weekly') updatedState.lastWeeklyRun = now;
    if (trigger === 'cron_monthly') updatedState.lastMonthlyRun = now;
    updatedState.totalLeadsQueued += newLeads.length;
    updatedState.totalSessionsRun += 1;
    await writeHuntState(updatedState);

    // 9. Finalize session
    session.completedAt = new Date().toISOString();
    await appendHuntLog(session);

    // 10. Telegram notification
    try {
      await notifyHuntComplete(session);
    } catch {
      session.errors.push('Telegram notification failed');
    }
  } catch (err) {
    session.errors.push(`Fatal: ${err instanceof Error ? err.message : String(err)}`);
    session.completedAt = new Date().toISOString();
    await appendHuntLog(session);
  }

  return session;
}

function prospectToLead(prospect: RawProspect, sessionId: string): Lead {
  const now = new Date().toISOString();
  return {
    id: generateId(),
    businessName: prospect.businessName,
    contactFirstName: prospect.contactName?.split(' ')[0] || '',
    contactEmail: prospect.contactEmail || '',
    websiteUrl: prospect.website || '',
    city: prospect.city,
    serviceNiche: prospect.serviceNiche,
    competitorName: '',
    reviewCount: prospect.reviewCount ?? null,
    rating: prospect.rating ?? null,
    notes: `Auto-discovered by Lead Hunter. Pain signals: ${prospect.painSignals.slice(0, 2).join('; ')}`,
    status: 'queued',
    research: null,
    reportSlug: generateSlug(prospect.businessName),
    emailDraftId: null,
    fabricationFlags: [],
    emDashClean: false,
    actionLog: [{ action: `Queued by Lead Hunter (${prospect.priority}, score: ${prospect.scoreBreakdown.total})`, timestamp: now }],
    createdAt: now,
    updatedAt: now,
    huntSource: sessionId,
    huntScore: prospect.scoreBreakdown.total,
    huntPriority: prospect.priority,
  };
}

export async function getHuntStatus(): Promise<{
  state: import('./hunter-types').HuntState;
  lastSession?: HuntSession;
  nextTarget: { vertical: string; metro: string };
}> {
  const state = await readHuntState();
  const log = await (await import('./hunter-data')).readHuntLog();
  const lastSession = log.length > 0 ? log[log.length - 1] : undefined;
  const nextTarget = getRotationTarget(state);

  return { state, lastSession, nextTarget };
}
