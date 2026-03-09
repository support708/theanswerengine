/**
 * Lead Hunter Bot — Session Scheduler
 * Orchestrates the full hunt flow: rotation -> search -> score -> dedupe -> queue.
 *
 * On Vercel: all data reads come from GitHub API at session start,
 * all writes are batched into a single atomic GitHub commit at session end.
 */

import type { HuntSession, HuntTrigger, RawProspect } from './hunter-types';
import { readHuntState, writeHuntState, appendHuntLog, readHuntLog, readBacklog, writeBacklog, flushHuntDataToGitHub } from './hunter-data';
import { getRotationTarget, advanceRotation, runSearchPass1, runSearchPass2, runSearchPass3, scoreProspect, classifyPriority, checkOutreachReadiness } from './hunter';
import { isDuplicate } from './deduplicator';
import { readLeads, writeLeads, generateId, generateSlug } from './leads';
import { notifyHuntFailure } from './telegram';
import type { Lead } from './types';

const IS_VERCEL = !!process.env.VERCEL;

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
    outreachReadyCount: 0,
    errors: [],
  };

  try {
    // 1. Read all state upfront (from GitHub on Vercel, local fs otherwise)
    const state = await readHuntState();
    const existingLeads = await readLeads();
    const backlog = await readBacklog();
    const log = IS_VERCEL ? await readHuntLog() : [];

    const { vertical, metro } = getRotationTarget(state);
    session.vertical = vertical;
    session.metro = metro;

    // 2. Run 3 search passes (with rate-limit delays between passes)
    const RATE_LIMIT_DELAY_MS = 5_000;

    // Pass 1: Discover real businesses (simple web search, high reliability)
    let businessNames: string[] = [];
    try {
      businessNames = await runSearchPass1(vertical, metro);
    } catch (err) {
      session.errors.push(`Pass 1 failed: ${err instanceof Error ? err.message : String(err)}`);
    }

    // Pass 2: AI citation test + prospect profiles (always runs)
    let prospects: RawProspect[] = [];
    await new Promise(r => setTimeout(r, RATE_LIMIT_DELAY_MS));
    try {
      prospects = await runSearchPass2(businessNames, vertical, metro);
    } catch (err) {
      session.errors.push(`Pass 2 failed: ${err instanceof Error ? err.message : String(err)}`);
    }

    // Pass 3: Contact enrichment (runs if we have prospects)
    if (prospects.length > 0) {
      await new Promise(r => setTimeout(r, RATE_LIMIT_DELAY_MS));
      try {
        prospects = await runSearchPass3(prospects);
      } catch (err) {
        session.errors.push(`Pass 3 enrichment failed: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    session.prospectsFound = prospects.length;

    // 3. Score all prospects and check outreach readiness
    for (const prospect of prospects) {
      prospect.scoreBreakdown = scoreProspect(prospect);
      prospect.priority = classifyPriority(prospect.scoreBreakdown.total);
      prospect.outreachReady = checkOutreachReadiness(prospect);
    }

    // 4. Deduplicate (in-memory comparison)
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
      // No email = backlog, regardless of score (can't email = can't convert)
      if (!prospect.contactEmail) {
        newBacklog.push(prospect);
        session.p3Backlogged++;
        continue;
      }

      if (prospect.priority === 'P1' || prospect.priority === 'P2') {
        const lead = prospectToLead(prospect, sessionId);
        newLeads.push(lead);
        if (prospect.priority === 'P1') session.p1Queued++;
        else session.p2Queued++;
        if (prospect.outreachReady) session.outreachReadyCount++;
      } else if (prospect.priority === 'P3') {
        newBacklog.push(prospect);
        session.p3Backlogged++;
      }
    }

    // 6. Update state in memory
    const allLeads = [...existingLeads, ...newLeads];
    const allBacklog = [...backlog, ...newBacklog];

    const updatedState = advanceRotation(state);
    const now = new Date().toISOString();
    if (trigger === 'cron_daily' || trigger === 'manual') updatedState.lastDailyRun = now;
    if (trigger === 'cron_weekly') updatedState.lastWeeklyRun = now;
    if (trigger === 'cron_monthly') updatedState.lastMonthlyRun = now;
    updatedState.totalLeadsQueued += newLeads.length;
    updatedState.totalSessionsRun += 1;

    session.completedAt = new Date().toISOString();
    log.push(session);

    // 7. Persist all data
    if (IS_VERCEL) {
      // Single atomic GitHub commit with ALL updated data
      try {
        const summary = `${vertical} x ${metro} | +${newLeads.length} leads`;
        await flushHuntDataToGitHub({
          state: updatedState,
          log,
          backlog: allBacklog,
          leads: allLeads,
          sessionSummary: summary,
        });
      } catch (err) {
        session.errors.push(`GitHub flush failed: ${err instanceof Error ? err.message : String(err)}`);
      }
    } else {
      // Local filesystem writes
      if (newLeads.length > 0) await writeLeads(allLeads);
      if (newBacklog.length > 0) await writeBacklog(allBacklog);
      await writeHuntState(updatedState);
      await appendHuntLog(session);
    }

    // 8. Telegram notification — only on errors
    if (session.errors.length > 0) {
      try {
        await notifyHuntFailure(vertical, metro, session.errors.join('; '));
      } catch {
        // Silent — don't add to errors array for notification failures
      }
    }
  } catch (err) {
    session.errors.push(`Fatal: ${err instanceof Error ? err.message : String(err)}`);
    session.completedAt = new Date().toISOString();

    // Try to log the failed session
    if (!IS_VERCEL) {
      await appendHuntLog(session);
    }
  }

  return session;
}

function prospectToLead(prospect: RawProspect, sessionId: string): Lead {
  const now = new Date().toISOString();

  const topCompetitor = prospect.citationResults
    .flatMap(r => r.competitorsCited)
    .filter(Boolean)[0] || '';

  const citationSummary = prospect.citationResults.length > 0
    ? `AI citation: not cited on ${prospect.citationResults.filter(r => !r.cited).length}/${prospect.citationResults.length} platforms. ` +
      `Competitors cited: ${[...new Set(prospect.citationResults.flatMap(r => r.competitorsCited))].slice(0, 3).join(', ') || 'none found'}.`
    : `Pain signals: ${prospect.painSignals.slice(0, 2).join('; ')}`;

  const outreachNote = prospect.outreachReady
    ? 'Outreach-ready: YES (citation data + contact + differentiator verified).'
    : 'Outreach-ready: NO (missing data for SOP templates, needs manual enrichment).';

  return {
    id: generateId(),
    businessName: prospect.businessName,
    contactFirstName: prospect.contactName?.split(' ')[0] || '',
    contactEmail: prospect.contactEmail || '',
    websiteUrl: prospect.website || '',
    city: prospect.city,
    serviceNiche: prospect.serviceNiche,
    competitorName: topCompetitor,
    reviewCount: prospect.reviewCount ?? null,
    rating: prospect.rating ?? null,
    notes: `Auto-discovered by Lead Hunter. ${citationSummary} ${outreachNote}${prospect.differentiator ? ` Differentiator: ${prospect.differentiator}` : ''}`,
    status: 'queued',
    research: null,
    reportSlug: generateSlug(prospect.businessName),
    emailDraftId: null,
    fabricationFlags: [],
    emDashClean: false,
    actionLog: [{ action: `Queued by Lead Hunter (${prospect.priority}, score: ${prospect.scoreBreakdown.total}, outreach-ready: ${prospect.outreachReady})`, timestamp: now }],
    createdAt: now,
    updatedAt: now,
    huntSource: sessionId,
    huntScore: prospect.scoreBreakdown.total,
    huntPriority: prospect.priority,
    huntCitationResults: prospect.citationResults.length > 0 ? prospect.citationResults : undefined,
    huntDifferentiator: prospect.differentiator,
    huntOutreachReady: prospect.outreachReady,
  };
}

export async function getHuntStatus(): Promise<{
  state: import('./hunter-types').HuntState;
  lastSession?: HuntSession;
  nextTarget: { vertical: string; metro: string };
}> {
  const state = await readHuntState();
  const log = await readHuntLog();
  const lastSession = log.length > 0 ? log[log.length - 1] : undefined;
  const nextTarget = getRotationTarget(state);

  return { state, lastSession, nextTarget };
}
