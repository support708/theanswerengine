/**
 * Weekly Learning Retrospective — Core Analytics Engine
 *
 * Analyzes all lead outcomes to identify winning patterns:
 * - Reply rates by niche and metro
 * - Follow-up stage effectiveness
 * - Pipeline velocity metrics
 * - AERO-10 score correlations
 * - Ranked hunt priorities for the bot
 */

import { readLeads } from './leads';
import { readSendLog } from './email-scheduler';
import { readLearningLog } from './learning-data';
import type { Lead } from './types';

// --- Types ---

export interface NicheMetric {
  niche: string;
  sent: number;
  replied: number;
  closedWon: number;
  closedLost: number;
  noResponse: number;
  inProgress: number;
  replyRate: number;
  conversionRate: number;
  avgAeroScore: number;
}

export interface MetroMetric {
  metro: string;
  sent: number;
  replied: number;
  closedWon: number;
  replyRate: number;
  conversionRate: number;
}

export interface FollowUpMetrics {
  repliedAtStage: Record<'initial' | 'follow_up_1' | 'follow_up_2' | 'follow_up_3', number>;
  totalByType: Record<'initial' | 'follow_up_1' | 'follow_up_2' | 'follow_up_3', number>;
  replyRateByStage: Record<'initial' | 'follow_up_1' | 'follow_up_2' | 'follow_up_3', number>;
}

export interface VelocityMetrics {
  avgQueuedToSentHours: number;
  avgSentToReplyHours: number;
  avgSentToCloseHours: number;
  fastestClose: string | null;
}

export interface AEROCorrelation {
  avgScoreReplied: number;
  avgScoreNoResponse: number;
  avgScoreClosedWon: number;
}

export interface HuntPriority {
  vertical: string;
  metro: string;
  score: number;
  reason: string;
  replyRate: number;
  sampleSize: number;
}

export interface TrendSummary {
  replyRateDelta: number;
  conversionRateDelta: number;
  volumeDelta: number;
  improving: string[];
  declining: string[];
}

export interface WeeklyRetrospective {
  id: string;
  weekEnding: string;
  generatedAt: string;
  totalLeads: number;
  leadsQueuedThisWeek: number;
  leadsSentThisWeek: number;
  nicheMetrics: NicheMetric[];
  metroMetrics: MetroMetric[];
  followUpMetrics: FollowUpMetrics;
  velocityMetrics: VelocityMetrics;
  aeroCorrelation: AEROCorrelation;
  huntPriorities: HuntPriority[];
  trends: TrendSummary;
}

// --- Main Entry ---

export async function generateWeeklyRetrospective(): Promise<WeeklyRetrospective> {
  const leads = await readLeads();
  const sendLog = await readSendLog();
  const learningLog = await readLearningLog();

  const now = new Date();
  const weekEnding = now.toISOString().split('T')[0];
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  // Leads that have been sent (outcome tracking applies to these)
  const sentStatuses = ['sent', 'replied', 'follow_up_1', 'follow_up_2', 'follow_up_3', 'closed_won', 'closed_lost', 'no_response'];
  const sentLeads = leads.filter(l => sentStatuses.includes(l.status));

  // Leads queued this week
  const leadsQueuedThisWeek = leads.filter(l => new Date(l.createdAt) >= oneWeekAgo).length;

  // Leads sent this week (check send log)
  const leadsSentThisWeek = sendLog.entries.filter(e =>
    e.type === 'initial' && new Date(e.sentAt) >= oneWeekAgo
  ).length;

  const nicheMetrics = calculateNicheMetrics(sentLeads);
  const metroMetrics = calculateMetroMetrics(sentLeads);
  const followUpMetrics = calculateFollowUpMetrics(leads, sendLog.entries);
  const velocityMetrics = calculateVelocityMetrics(leads);
  const aeroCorrelation = calculateAEROCorrelation(sentLeads);
  const huntPriorities = calculateHuntPriorities(nicheMetrics, metroMetrics);

  // Compare with previous retrospective
  const previous = learningLog.retrospectives.length > 0
    ? learningLog.retrospectives[learningLog.retrospectives.length - 1]
    : null;
  const trends = calculateTrends(nicheMetrics, leadsSentThisWeek, leadsQueuedThisWeek, previous);

  return {
    id: `retro_${weekEnding.replace(/-/g, '')}`,
    weekEnding,
    generatedAt: now.toISOString(),
    totalLeads: leads.length,
    leadsQueuedThisWeek,
    leadsSentThisWeek,
    nicheMetrics,
    metroMetrics,
    followUpMetrics,
    velocityMetrics,
    aeroCorrelation,
    huntPriorities,
    trends,
  };
}

// --- Niche Metrics ---

function calculateNicheMetrics(sentLeads: Lead[]): NicheMetric[] {
  const byNiche = new Map<string, Lead[]>();
  for (const lead of sentLeads) {
    const niche = lead.serviceNiche || 'Unknown';
    if (!byNiche.has(niche)) byNiche.set(niche, []);
    byNiche.get(niche)!.push(lead);
  }

  const metrics: NicheMetric[] = [];
  for (const [niche, leads] of byNiche) {
    const sent = leads.length;
    const replied = leads.filter(l => l.status === 'replied' || l.status === 'closed_won').length;
    const closedWon = leads.filter(l => l.status === 'closed_won').length;
    const closedLost = leads.filter(l => l.status === 'closed_lost').length;
    const noResponse = leads.filter(l => l.status === 'no_response').length;
    const inProgress = leads.filter(l =>
      ['sent', 'follow_up_1', 'follow_up_2', 'follow_up_3'].includes(l.status)
    ).length;

    const aeroScores = leads
      .filter(l => l.research?.aero7?.total != null)
      .map(l => l.research!.aero7.total);
    const avgAeroScore = aeroScores.length > 0
      ? Math.round(aeroScores.reduce((a, b) => a + b, 0) / aeroScores.length)
      : 0;

    metrics.push({
      niche,
      sent,
      replied,
      closedWon,
      closedLost,
      noResponse,
      inProgress,
      replyRate: sent > 0 ? replied / sent : 0,
      conversionRate: sent > 0 ? closedWon / sent : 0,
      avgAeroScore,
    });
  }

  return metrics.sort((a, b) => b.replyRate - a.replyRate);
}

// --- Metro Metrics ---

function calculateMetroMetrics(sentLeads: Lead[]): MetroMetric[] {
  const byMetro = new Map<string, Lead[]>();
  for (const lead of sentLeads) {
    const metro = lead.city || 'Unknown';
    if (!byMetro.has(metro)) byMetro.set(metro, []);
    byMetro.get(metro)!.push(lead);
  }

  const metrics: MetroMetric[] = [];
  for (const [metro, leads] of byMetro) {
    const sent = leads.length;
    const replied = leads.filter(l => l.status === 'replied' || l.status === 'closed_won').length;
    const closedWon = leads.filter(l => l.status === 'closed_won').length;

    metrics.push({
      metro,
      sent,
      replied,
      closedWon,
      replyRate: sent > 0 ? replied / sent : 0,
      conversionRate: sent > 0 ? closedWon / sent : 0,
    });
  }

  return metrics.sort((a, b) => b.replyRate - a.replyRate);
}

// --- Follow-Up Effectiveness ---

interface SendLogEntry {
  leadId: string;
  email: string;
  type: 'initial' | 'follow_up_1' | 'follow_up_2' | 'follow_up_3';
  sentAt: string;
}

function calculateFollowUpMetrics(leads: Lead[], entries: SendLogEntry[]): FollowUpMetrics {
  const stages = ['initial', 'follow_up_1', 'follow_up_2', 'follow_up_3'] as const;

  const totalByType: Record<string, number> = { initial: 0, follow_up_1: 0, follow_up_2: 0, follow_up_3: 0 };
  for (const entry of entries) {
    if (entry.type in totalByType) totalByType[entry.type]++;
  }

  const repliedAtStage: Record<string, number> = { initial: 0, follow_up_1: 0, follow_up_2: 0, follow_up_3: 0 };
  for (const lead of leads) {
    const stage = getReplyStage(lead);
    if (stage) repliedAtStage[stage]++;
  }

  const replyRateByStage: Record<string, number> = {};
  for (const stage of stages) {
    replyRateByStage[stage] = totalByType[stage] > 0 ? repliedAtStage[stage] / totalByType[stage] : 0;
  }

  return {
    repliedAtStage: repliedAtStage as FollowUpMetrics['repliedAtStage'],
    totalByType: totalByType as FollowUpMetrics['totalByType'],
    replyRateByStage: replyRateByStage as FollowUpMetrics['replyRateByStage'],
  };
}

/**
 * Determine which follow-up stage was active when the lead replied.
 * Walks backward through actionLog from the reply event.
 */
function getReplyStage(lead: Lead): 'initial' | 'follow_up_1' | 'follow_up_2' | 'follow_up_3' | null {
  if (lead.status !== 'replied' && lead.status !== 'closed_won') return null;

  // Walk backward through actionLog to find the last send/follow-up before reply
  const replyIdx = lead.actionLog.findIndex(a =>
    a.action.toLowerCase().includes('replied') || a.action.toLowerCase().includes('closed_won')
  );

  if (replyIdx === -1) {
    // No explicit reply marker — check status progression
    // If they replied, check what the previous status was
    for (let i = lead.actionLog.length - 1; i >= 0; i--) {
      const action = lead.actionLog[i].action.toLowerCase();
      if (action.includes('follow-up 3') || action.includes('follow_up_3')) return 'follow_up_3';
      if (action.includes('follow-up 2') || action.includes('follow_up_2')) return 'follow_up_2';
      if (action.includes('follow-up 1') || action.includes('follow_up_1')) return 'follow_up_1';
      if (action.includes('sent') || action.includes('initial')) return 'initial';
    }
    return 'initial';
  }

  for (let i = replyIdx - 1; i >= 0; i--) {
    const action = lead.actionLog[i].action.toLowerCase();
    if (action.includes('follow-up 3') || action.includes('follow_up_3')) return 'follow_up_3';
    if (action.includes('follow-up 2') || action.includes('follow_up_2')) return 'follow_up_2';
    if (action.includes('follow-up 1') || action.includes('follow_up_1')) return 'follow_up_1';
    if (action.includes('sent') || action.includes('initial')) return 'initial';
  }

  return 'initial';
}

// --- Pipeline Velocity ---

function calculateVelocityMetrics(leads: Lead[]): VelocityMetrics {
  const queuedToSent: number[] = [];
  const sentToReply: number[] = [];
  const sentToClose: number[] = [];
  let fastestClose: string | null = null;
  let fastestCloseHours = Infinity;

  for (const lead of leads) {
    const queuedTime = new Date(lead.createdAt).getTime();

    // Find sent timestamp
    const sentEntry = lead.actionLog.find(a =>
      a.action.toLowerCase().includes('sent') && !a.action.toLowerCase().includes('follow')
    );
    if (sentEntry) {
      const sentTime = new Date(sentEntry.timestamp).getTime();
      const hours = (sentTime - queuedTime) / (1000 * 60 * 60);
      if (hours > 0 && hours < 168) queuedToSent.push(hours); // cap at 1 week

      // Find reply timestamp
      const replyEntry = lead.actionLog.find(a =>
        a.action.toLowerCase().includes('replied')
      );
      if (replyEntry) {
        const replyTime = new Date(replyEntry.timestamp).getTime();
        const replyHours = (replyTime - sentTime) / (1000 * 60 * 60);
        if (replyHours > 0) sentToReply.push(replyHours);
      }

      // Find close timestamp
      const closeEntry = lead.actionLog.find(a =>
        a.action.toLowerCase().includes('closed_won')
      );
      if (closeEntry) {
        const closeTime = new Date(closeEntry.timestamp).getTime();
        const closeHours = (closeTime - sentTime) / (1000 * 60 * 60);
        if (closeHours > 0) {
          sentToClose.push(closeHours);
          if (closeHours < fastestCloseHours) {
            fastestCloseHours = closeHours;
            fastestClose = lead.businessName;
          }
        }
      }
    }
  }

  const avg = (arr: number[]) => arr.length > 0
    ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length * 10) / 10
    : 0;

  return {
    avgQueuedToSentHours: avg(queuedToSent),
    avgSentToReplyHours: avg(sentToReply),
    avgSentToCloseHours: avg(sentToClose),
    fastestClose,
  };
}

// --- AERO-10 Correlation ---

function calculateAEROCorrelation(sentLeads: Lead[]): AEROCorrelation {
  const withScores = sentLeads.filter(l => l.research?.aero7?.total != null);

  const repliedLeads = withScores.filter(l => l.status === 'replied' || l.status === 'closed_won');
  const noResponseLeads = withScores.filter(l => l.status === 'no_response');
  const closedWonLeads = withScores.filter(l => l.status === 'closed_won');

  const avg = (arr: Lead[]) => arr.length > 0
    ? Math.round(arr.reduce((sum, l) => sum + l.research!.aero7.total, 0) / arr.length)
    : 0;

  return {
    avgScoreReplied: avg(repliedLeads),
    avgScoreNoResponse: avg(noResponseLeads),
    avgScoreClosedWon: avg(closedWonLeads),
  };
}

// --- Hunt Priorities ---

/**
 * Wilson score interval for fair ranking with small sample sizes.
 * Prevents 1/1 (100%) from outranking 8/10 (80%).
 */
function wilsonScore(successes: number, total: number, z = 1.96): number {
  if (total === 0) return 0;
  const p = successes / total;
  const denominator = 1 + z * z / total;
  const centre = p + z * z / (2 * total);
  const adjustment = z * Math.sqrt((p * (1 - p) + z * z / (4 * total)) / total);
  return (centre - adjustment) / denominator;
}

function calculateHuntPriorities(nicheMetrics: NicheMetric[], metroMetrics: MetroMetric[]): HuntPriority[] {
  const priorities: HuntPriority[] = [];

  // Cross-product niche x metro, scored by Wilson-adjusted reply rate
  for (const niche of nicheMetrics) {
    for (const metro of metroMetrics) {
      // Combined sample: use the smaller of the two samples
      const sampleSize = Math.min(niche.sent, metro.sent);
      if (sampleSize < 1) continue;

      // Blend niche and metro reply rates (60% niche, 40% metro)
      const blendedReplyRate = niche.replyRate * 0.6 + metro.replyRate * 0.4;
      const blendedReplies = Math.round(blendedReplyRate * sampleSize);
      const score = Math.round(wilsonScore(blendedReplies, sampleSize) * 100);

      const reason = `${niche.niche}: ${(niche.replyRate * 100).toFixed(0)}% reply (${niche.replied}/${niche.sent}), ` +
        `${metro.metro}: ${(metro.replyRate * 100).toFixed(0)}% reply (${metro.replied}/${metro.sent})`;

      priorities.push({
        vertical: niche.niche,
        metro: metro.metro,
        score,
        reason,
        replyRate: blendedReplyRate,
        sampleSize,
      });
    }
  }

  return priorities.sort((a, b) => b.score - a.score).slice(0, 20); // Top 20 combos
}

// --- Trends ---

function calculateTrends(
  nicheMetrics: NicheMetric[],
  leadsSentThisWeek: number,
  leadsQueuedThisWeek: number,
  previous: WeeklyRetrospective | null,
): TrendSummary {
  if (!previous) {
    return {
      replyRateDelta: 0,
      conversionRateDelta: 0,
      volumeDelta: 0,
      improving: [],
      declining: [],
    };
  }

  // Overall reply rate (weighted average)
  const totalSent = nicheMetrics.reduce((s, n) => s + n.sent, 0);
  const totalReplied = nicheMetrics.reduce((s, n) => s + n.replied, 0);
  const currentReplyRate = totalSent > 0 ? totalReplied / totalSent : 0;

  const prevTotalSent = previous.nicheMetrics.reduce((s, n) => s + n.sent, 0);
  const prevTotalReplied = previous.nicheMetrics.reduce((s, n) => s + n.replied, 0);
  const prevReplyRate = prevTotalSent > 0 ? prevTotalReplied / prevTotalSent : 0;

  const totalWon = nicheMetrics.reduce((s, n) => s + n.closedWon, 0);
  const currentConvRate = totalSent > 0 ? totalWon / totalSent : 0;
  const prevTotalWon = previous.nicheMetrics.reduce((s, n) => s + n.closedWon, 0);
  const prevConvRate = prevTotalSent > 0 ? prevTotalWon / prevTotalSent : 0;

  // Find improving/declining niches
  const improving: string[] = [];
  const declining: string[] = [];

  for (const current of nicheMetrics) {
    const prev = previous.nicheMetrics.find(n => n.niche === current.niche);
    if (!prev) continue;
    if (current.replyRate > prev.replyRate + 0.05) improving.push(current.niche);
    if (current.replyRate < prev.replyRate - 0.05) declining.push(current.niche);
  }

  return {
    replyRateDelta: currentReplyRate - prevReplyRate,
    conversionRateDelta: currentConvRate - prevConvRate,
    volumeDelta: leadsQueuedThisWeek - previous.leadsQueuedThisWeek,
    improving,
    declining,
  };
}
