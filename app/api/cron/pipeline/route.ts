/**
 * Cron-accessible pipeline trigger.
 * Runs research + report + email on all queued leads.
 * 100% autonomous: 3-attempt retry per lead, Telegram only on failure.
 * Protected by CRON_SECRET.
 *
 * BATCH COMMIT STRATEGY:
 * Instead of 7+ separate GitHub commits per lead, this uses 2 atomic flushes:
 *   Flush 1: After report generation (leads.json + report HTML)
 *   Flush 2: After email send (leads.json + send-log.json)
 * This eliminates race conditions and cuts GitHub API usage by ~80%.
 */
import { NextRequest, NextResponse } from 'next/server';
import { readLeads, flushLeadsWithFiles } from '@/lib/leads';
import { callClaudeWithWebSearch, callClaude, extractText, checkRateLimit } from '@/lib/anthropic';
import { parseAERO7FromResearch } from '@/lib/aero7-scorer';
import { getIndustryColors, CALENDLY_URL, REPORT_FOOTER } from '@/lib/report-template';
import { runFabricationScan, runEmDashScan, stripEmDashes } from '@/lib/fabrication-scan';
import { buildEmailSubject, buildEmailBody, buildHtmlEmailBody } from '@/lib/gmail';
import { sendGmailMessage, isGmailConfigured } from '@/lib/gmail-api';
import { canSendToday, prepareSendLogFile } from '@/lib/email-scheduler';
import { notifyPipelineFailure, sendMessage } from '@/lib/telegram';
import { isDeployConfigured } from '@/lib/deploy';
import type { Lead, ResearchResults } from '@/lib/types';
import { promises as fs } from 'fs';
import path from 'path';

export const maxDuration = 300; // 5 minutes — processes 1 lead per run (full pipeline ~120-180s)

const MAX_RETRIES = 3;

// Vercel cron sends GET requests
export async function GET(req: NextRequest) {
  return handleRequest(req);
}

export async function POST(req: NextRequest) {
  return handleRequest(req);
}

async function handleRequest(req: NextRequest) {
  // Auth check
  const authHeader = req.headers.get('authorization');
  const secret = process.env.CRON_SECRET;
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = new URL(req.url);
  const leadId = url.searchParams.get('leadId');
  const step = url.searchParams.get('step') || 'full';

  try {
    // Read all leads once — used for recovery, filtering, and processing
    const leads = await readLeads();

    // Idempotency guard: if a lead is actively being processed (< 5 min old), skip
    const ACTIVE_THRESHOLD = 5 * 60 * 1000;
    const activeStatuses = ['researching', 'generating_report'];
    const activelyProcessing = leads.some(l => {
      if (!activeStatuses.includes(l.status)) return false;
      const lastAction = l.actionLog[l.actionLog.length - 1];
      if (!lastAction) return false;
      return (Date.now() - new Date(lastAction.timestamp).getTime()) < ACTIVE_THRESHOLD;
    });

    if (activelyProcessing && !leadId) {
      return NextResponse.json({ success: true, message: 'Another invocation is actively processing, skipping' });
    }

    if (leadId) {
      const result = await processLeadWithRetry(leadId, step, leads);
      return NextResponse.json({ success: true, result });
    }

    // Recovery: unstick leads stuck in intermediate statuses for > 10 minutes
    const STALE_THRESHOLD = 10 * 60 * 1000;
    let needsRecoveryFlush = false;
    for (const lead of leads) {
      if (activeStatuses.includes(lead.status)) {
        const lastAction = lead.actionLog[lead.actionLog.length - 1];
        if (lastAction) {
          const elapsed = Date.now() - new Date(lastAction.timestamp).getTime();
          if (elapsed > STALE_THRESHOLD) {
            const oldStatus = lead.status;
            lead.status = 'queued';
            lead.actionLog.push({
              action: `Auto-recovered from stuck "${oldStatus}" status (${Math.round(elapsed / 60000)}m stale)`,
              timestamp: new Date().toISOString(),
            });
            lead.updatedAt = new Date().toISOString();
            needsRecoveryFlush = true;
          }
        }
      }
    }

    if (needsRecoveryFlush) {
      await flushLeadsWithFiles(leads, [], 'pipeline: recover stuck leads');
    }

    // Pick 1 lead per run — full pipeline (research+report+email) takes ~120-180s
    // Includes email_drafted (Gmail retry) and report_ready (deploy retry)
    const pickable = ['queued', 'report_ready', 'email_drafted'];
    const toPick = leads.filter(l => pickable.includes(l.status) && l.contactEmail).slice(0, 1);

    if (toPick.length === 0) {
      return NextResponse.json({ success: true, message: 'No leads to process' });
    }

    const results = [];
    for (const lead of toPick) {
      // report_ready and email_drafted leads skip straight to email step
      const pickStep = (lead.status === 'report_ready' || lead.status === 'email_drafted') ? 'email' : step;
      const result = await processLeadWithRetry(lead.id, pickStep, leads);
      results.push(result);
    }

    return NextResponse.json({ success: true, processed: results.length, results });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Pipeline failed' },
      { status: 500 }
    );
  }
}

/**
 * Retry wrapper: attempts processLead up to MAX_RETRIES times.
 * Only sends Telegram notification after all retries are exhausted.
 */
async function processLeadWithRetry(leadId: string, step: string, leads: Lead[]) {
  let lastError = '';

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const result = await processLead(leadId, step, leads);
      return result;
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
      console.error(`Pipeline attempt ${attempt}/${MAX_RETRIES} failed for ${leadId}: ${lastError}`);

      if (attempt < MAX_RETRIES) {
        await new Promise(r => setTimeout(r, attempt * 5000));
      }
    }
  }

  // All retries exhausted — mark as failed (dead letter) to prevent infinite retry loops
  const lead = leads.find(l => l.id === leadId);
  if (lead) {
    lead.status = 'failed';
    lead.actionLog.push({
      action: `Dead-lettered after ${MAX_RETRIES} failed attempts: ${lastError}`,
      timestamp: new Date().toISOString(),
    });
    lead.updatedAt = new Date().toISOString();

    try {
      await flushLeadsWithFiles(leads, [], `pipeline: ${lead.businessName} — dead-lettered`);
    } catch {
      console.error('Failed to flush dead-letter status');
    }
  }

  // Notify Telegram
  try {
    await notifyPipelineFailure(
      leadId,
      lead?.businessName || 'Unknown',
      step,
      lastError,
      MAX_RETRIES,
    );
  } catch {
    console.error('Failed to send Telegram failure notification');
  }

  return { leadId, error: `Dead-lettered after ${MAX_RETRIES} attempts: ${lastError}` };
}

/**
 * Process a single lead through the full pipeline.
 * Works in-memory on the leads array, flushing to GitHub in batched commits.
 * Flush 1: After report generation (leads + report HTML)
 * Flush 2: After email send (leads + send-log)
 */
async function processLead(leadId: string, step: string, leads: Lead[]) {
  const lead = leads.find(l => l.id === leadId);
  if (!lead) throw new Error(`Lead ${leadId} not found`);

  const result: Record<string, unknown> = { leadId, businessName: lead.businessName };

  // STEP 1: Research
  if (step === 'full' || step === 'research') {
    if (lead.status !== 'queued' && step !== 'full') {
      result.research = 'skipped (not in queued status)';
    } else {
      if (!checkRateLimit()) throw new Error('Rate limit exceeded');

      // Update in memory
      lead.status = 'researching';
      lead.actionLog.push({ action: 'Research started (auto-pipeline)', timestamp: new Date().toISOString() });
      lead.updatedAt = new Date().toISOString();
      // No flush here — status is transient, will be overwritten by research_complete

      const researchSystemPrompt = [{
        type: 'text' as const,
        text: `You are a business intelligence researcher for The Answer Engine, an Answer Engine Optimization agency.
Your job is to research a local service business and return structured data using the AERO-10 framework (10 pillars, 100 points).

CRITICAL RULES:
- Only report facts you can verify through web search. Never fabricate.
- If you cannot find a piece of information, set it to null or empty.
- No em-dashes in any output. Use commas or "to" instead.
- Return ONLY valid JSON, no markdown fences, no commentary.

AERO-10 SCORING GUIDE (score each 0-10):
P1 Answer Quality: Directness, snippet-readiness of answers on their site.
P2 Entity Optimization: Schema markup depth. 7+ schema types = 10.
P3 Relevance & Freshness: Content age + intent alignment.
P4 Optimization Structure: H-tag hierarchy, paragraph length, mobile.
P5 Voice & Authenticity: Real voice, verified examples, zero fabrication feel.
P6 Authority Signals: Credentials, licenses, author bios, reviews embedded.
P7 Authority Distribution: Third-party presence, earned media, multi-platform AI visibility.
P8 Consensus & Co-Citation: Cross-platform mentions (0-4) + semantic co-mention (0-3) + citation consistency (0-3).
P9 Platform-Specific Readiness: ChatGPT+Gemini (0-4) + Perplexity/Reddit (0-3) + Claude+Google AIO (0-3).
P10 Technical AI Accessibility: Bot access in robots.txt (0-4) + NAP consistency (0-3) + fresh GBP signals (0-3).

Return a JSON object with this exact structure:
{
  "reviewCount": number or null,
  "rating": number or null,
  "yearsInBusiness": number or null,
  "credentials": ["string array"],
  "awards": ["string array"],
  "communityInvolvement": ["string array"],
  "hiddenDifferentiators": ["string array"],
  "topCompetitors": [{"name": "string", "reason": "string"}],
  "faqContentPresent": boolean,
  "blogPresent": boolean,
  "gmbPresent": boolean,
  "schemaDetected": boolean,
  "recentContent": boolean,
  "uniqueStory": "string or null",
  "aiCited": boolean,
  "aero7": {
    "answerQuality": 0-10,
    "entityOptimization": 0-10,
    "relevanceFreshness": 0-10,
    "optimizationStructure": 0-10,
    "voiceAuthenticity": 0-10,
    "authoritySignals": 0-10,
    "authorityDistribution": 0-10,
    "consensusCoCitation": 0-10,
    "platformReadiness": 0-10,
    "technicalAccessibility": 0-10
  },
  "rawNotes": "string"
}`,
        cache_control: { type: 'ephemeral' as const },
      }];

      const competitorInstruction = lead.competitorName
        ? `Their main competitor is ${lead.competitorName}.`
        : `Find the top 1-2 AI-cited competitors for ${lead.serviceNiche} in ${lead.city}.`;

      const researchPrompt = `Research this business thoroughly:

Business: ${lead.businessName}
Website: ${lead.websiteUrl || 'Unknown - search for it'}
City: ${lead.city}
Service/Niche: ${lead.serviceNiche}
${competitorInstruction}
${lead.notes ? `Context: ${lead.notes}` : ''}
${lead.reviewCount ? `Known review count: ${lead.reviewCount}` : ''}
${lead.rating ? `Known rating: ${lead.rating}` : ''}

Tasks:
1. Search for the business website and review presence
2. Look for credentials, awards, community involvement, origin story
3. Check if their site has FAQ pages, blog/articles, schema markup
4. Search AI platforms: "best ${lead.serviceNiche} in ${lead.city}" to see if they appear
5. Identify who AI DOES recommend instead and why
6. Check their robots.txt for GPTBot, ClaudeBot, PerplexityBot access
7. Check for NAP consistency across Google, Yelp, and their website
8. Look for mentions on Reddit, LinkedIn, local news
9. Score all 10 AERO-10 pillars based on what you find

Return the JSON object as specified.`;

      const researchResponse = await callClaudeWithWebSearch({
        model: 'claude-haiku-4-5',
        system: researchSystemPrompt,
        messages: [{ role: 'user', content: researchPrompt }],
        maxTokens: 4096,
      });

      const researchText = extractText(researchResponse);
      let research: ResearchResults;

      try {
        const jsonMatch = researchText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error('No JSON found in research response');
        const parsed = JSON.parse(jsonMatch[0]);

        research = {
          reviewCount: parsed.reviewCount ?? lead.reviewCount ?? 0,
          rating: parsed.rating ?? lead.rating ?? 0,
          yearsInBusiness: parsed.yearsInBusiness ?? null,
          credentials: parsed.credentials ?? [],
          awards: parsed.awards ?? [],
          communityInvolvement: parsed.communityInvolvement ?? [],
          hiddenDifferentiators: parsed.hiddenDifferentiators ?? [],
          topCompetitors: parsed.topCompetitors ?? [],
          faqContentPresent: parsed.faqContentPresent ?? false,
          blogPresent: parsed.blogPresent ?? false,
          gmbPresent: parsed.gmbPresent ?? false,
          schemaDetected: parsed.schemaDetected ?? false,
          recentContent: parsed.recentContent ?? false,
          uniqueStory: parsed.uniqueStory ?? null,
          aiCited: parsed.aiCited ?? false,
          aero7: parseAERO7FromResearch(parsed.aero7 ?? {}),
          rawNotes: parsed.rawNotes ?? '',
          researchedAt: new Date().toISOString(),
        };
      } catch {
        research = {
          reviewCount: lead.reviewCount ?? 0,
          rating: lead.rating ?? 0,
          yearsInBusiness: null,
          credentials: [],
          awards: [],
          communityInvolvement: [],
          hiddenDifferentiators: [],
          topCompetitors: [],
          faqContentPresent: false,
          blogPresent: false,
          gmbPresent: false,
          schemaDetected: false,
          recentContent: false,
          uniqueStory: null,
          aiCited: false,
          aero7: parseAERO7FromResearch({}),
          rawNotes: `Research parsing failed. Raw: ${researchText.slice(0, 500)}`,
          researchedAt: new Date().toISOString(),
        };
      }

      // Update in memory
      lead.status = 'research_complete';
      lead.research = research;
      lead.competitorName = lead.competitorName || (research.topCompetitors[0]?.name ?? '');
      lead.reviewCount = research.reviewCount || lead.reviewCount;
      lead.rating = research.rating || lead.rating;
      lead.actionLog.push({ action: `Research completed (AERO-10: ${research.aero7.total}/100)`, timestamp: new Date().toISOString() });
      lead.updatedAt = new Date().toISOString();
      // No flush yet — will batch with report

      result.research = { aero10: research.aero7.total, competitors: research.topCompetitors.length };
    }
  }

  // STEP 2: Report Generation
  if (step === 'full' || step === 'report') {
    if (!lead.research) {
      result.report = 'skipped (no research data)';
    } else if (lead.research.aero7.total === 0) {
      // Research returned stub/zero data — re-queue for another attempt
      lead.status = 'queued';
      lead.research = null;
      lead.actionLog.push({
        action: 'Research returned stub data (AERO-10: 0/100), re-queued for retry',
        timestamp: new Date().toISOString(),
      });
      lead.updatedAt = new Date().toISOString();
      await flushLeadsWithFiles(leads, [], `pipeline: ${lead.businessName} — re-queued (stub research)`);
      result.report = 'skipped (stub research data, re-queued)';
    } else {
      // Update in memory
      lead.status = 'generating_report';
      lead.actionLog.push({ action: 'Report generation started', timestamp: new Date().toISOString() });
      lead.updatedAt = new Date().toISOString();

      const research = lead.research;
      const brand = getIndustryColors(lead.serviceNiche);
      const competitorDisplay = lead.competitorName || research.topCompetitors[0]?.name || 'competitors';

      const reportSystemPrompt = [{
        type: 'text' as const,
        text: `You are an expert HTML report designer for The Answer Engine, an Answer Engine Optimization agency.
Generate a complete, self-contained HTML file for a Blind Spot Report.

CRITICAL RULES:
- Output ONLY the complete HTML document. No markdown, no commentary.
- NO em-dashes anywhere. Use commas, periods, or "to" instead.
- Mobile responsive design required.
- All styles must be inline or in a <style> tag in <head>.
- Use system fonts: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif.
- Every claim must come from the research data provided. Never fabricate.
- NEVER include fake case studies, fabricated statistics, or invented testimonials.
- Do NOT create any "proof" or "results" sections with made-up numbers.
- If a data point is null or empty, omit that section gracefully.

BRAND COLORS:
- Hero gradient: ${brand.heroGradientFrom} to ${brand.heroGradientTo}
- Accent color: ${brand.accent}
- Body background: ${brand.bodyBg}
- Card background: ${brand.cardBg}
- Dark section: ${brand.sectionDark}

REPORT STRUCTURE (single scrolling page):
Section 1 - THE HOOK: "[FIRST NAME], YOU HAVE A VISIBILITY PROBLEM"
Section 2 - THE GAP: Stats panel with reviews, years, credentials, AERO-10 score
Section 3 - WHAT AI SEES: Terminal/chat simulation showing competitor cited instead
Section 4 - HIDDEN DIFFERENTIATORS: 3-5 cards from research
Section 5 - THE FIX: 4-item grid (Answer-First, Schema, Entity, Authority)
Section 6 - CTA: "BOOK A 30-MIN CALL" linking to ${CALENDLY_URL}
FOOTER: "${REPORT_FOOTER}"`,
        cache_control: { type: 'ephemeral' as const },
      }];

      const differentiators = research.hiddenDifferentiators.length > 0
        ? research.hiddenDifferentiators
        : ['Strong local reputation', 'Established client base', 'Quality service delivery'];

      const reportPrompt = `Generate the Blind Spot Report HTML for:

Business: ${lead.businessName}
First Name: ${lead.contactFirstName}
City: ${lead.city}
Service: ${lead.serviceNiche}
Website: ${lead.websiteUrl || 'Not found'}

RESEARCH DATA:
- Reviews: ${research.reviewCount || 'Unknown'}
- Rating: ${research.rating || 'Unknown'}
- Years in business: ${research.yearsInBusiness || 'Unknown'}
- Credentials: ${research.credentials.join(', ') || 'None found'}
- Awards: ${research.awards.join(', ') || 'None found'}
- Community: ${research.communityInvolvement.join(', ') || 'None found'}
- Top competitor: ${competitorDisplay}
- Hidden differentiators: ${differentiators.join('; ')}
- Unique story: ${research.uniqueStory || 'Not found'}
- AI Cited: ${research.aiCited ? 'Yes' : 'No'}
- AERO-10 Total: ${research.aero7.total}/100

Generate the complete HTML now.`;

      const reportResponse = await callClaude({
        model: 'claude-sonnet-4-6',
        system: reportSystemPrompt,
        messages: [{ role: 'user', content: reportPrompt }],
        maxTokens: 16000,
      });

      let reportHtml = extractText(reportResponse)
        .replace(/```html\n?/g, '')
        .replace(/```\n?/g, '')
        .trim();

      // Fabrication + em-dash scans
      const verifiedData: string[] = [
        ...(research.credentials ?? []),
        ...(research.awards ?? []),
        ...(research.communityInvolvement ?? []),
        ...(research.hiddenDifferentiators ?? []),
        research.rawNotes ?? '',
        research.uniqueStory ?? '',
        research.reviewCount ? `${research.reviewCount}` : '',
        research.rating ? `${research.rating}` : '',
        research.yearsInBusiness ? `${research.yearsInBusiness}` : '',
        `${research.aero7.total} out of 100`,
        `${research.aero7.total}/100`,
      ].filter(Boolean);

      const fabricationResult = runFabricationScan(reportHtml, verifiedData);
      const emDashResult = runEmDashScan(reportHtml);
      if (!emDashResult.clean) reportHtml = stripEmDashes(reportHtml);

      // Save report locally (dev only)
      if (!process.env.VERCEL) {
        const reportDir = path.join(process.cwd(), 'public', 'blindspot');
        await fs.mkdir(reportDir, { recursive: true });
        await fs.writeFile(path.join(reportDir, `${lead.reportSlug}.html`), reportHtml, 'utf-8');
      }

      // Update lead in memory
      lead.status = 'report_ready';
      lead.fabricationFlags = fabricationResult.flags;
      lead.emDashClean = emDashResult.clean;
      lead.actionLog.push({ action: 'Report generated', timestamp: new Date().toISOString() });
      lead.actionLog.push({ action: `Fabrication scan: ${fabricationResult.clean ? 'CLEAN' : `${fabricationResult.flags.length} flags`}`, timestamp: new Date().toISOString() });
      lead.actionLog.push({ action: `Em-dash scan: ${emDashResult.clean ? 'CLEAN' : `${emDashResult.count} found, auto-stripped`}`, timestamp: new Date().toISOString() });
      lead.updatedAt = new Date().toISOString();

      // === FLUSH 1: Atomic commit — leads.json + report HTML ===
      // This replaces both updateLead() and deployReport() in a single commit,
      // eliminating the race condition between the two different commit mechanisms.
      const extraFiles: { path: string; content: string }[] = [];
      if (isDeployConfigured() && lead.reportSlug) {
        extraFiles.push({
          path: `public/blindspot/${lead.reportSlug}.html`,
          content: reportHtml,
        });
        lead.actionLog.push({ action: 'Report deployed to production', timestamp: new Date().toISOString() });
      }

      await flushLeadsWithFiles(
        leads,
        extraFiles,
        `pipeline: ${lead.businessName} — research + report`,
      );

      result.report = {
        url: `/blindspot/${lead.reportSlug}`,
        deployed: extraFiles.length > 0,
        fabrication: { clean: fabricationResult.clean, flags: fabricationResult.flags.length },
        emDash: { clean: emDashResult.clean, count: emDashResult.count },
      };
    }
  }

  // STEP 3: Auto-Send Email (100% autonomous, no approval gate)
  if (step === 'full' || step === 'email') {
    if (lead.status !== 'report_ready') {
      result.email = 'skipped (report not ready)';
    } else if (!lead.contactEmail) {
      result.email = 'skipped (no email address)';
    } else {
      // Check domain warmup rate limit
      const sendStatus = await canSendToday();
      if (!sendStatus.allowed) {
        result.email = `rate_limited (${sendStatus.sent}/${sendStatus.limit} today)`;
      } else {
        // Verify report is live before sending email (prevents 404 links)
        if (!lead.reportSlug) {
          result.email = 'skipped (no report slug)';
          return result;
        }
        const reportUrl = `https://theanswerengine.ai/blindspot/${lead.reportSlug}`;
        const reportLive = await waitForReportLive(lead.reportSlug);
        if (!reportLive) {
          result.email = 'skipped (report not live yet, will retry next cron)';
        } else {
          const subject = buildEmailSubject(lead);
          const body = buildEmailBody(lead);
          const htmlBody = buildHtmlEmailBody(lead);

          // Prepare send log entry for batching (no separate commit)
          const sendLogFile = await prepareSendLogFile(lead.id, lead.contactEmail, 'initial');

          let sent = false;
          let messageId = '';

          if (isGmailConfigured()) {
            try {
              const gmailResult = await sendGmailMessage({
                to: lead.contactEmail,
                subject,
                body,
                htmlBody,
              });
              if (gmailResult) {
                sent = true;
                messageId = gmailResult.messageId;
              }
            } catch (error) {
              console.error('Gmail send failed:', error);
            }
          }

          // Update lead in memory
          lead.status = sent ? 'sent' : 'email_drafted';
          lead.actionLog.push({
            action: sent
              ? `Initial email auto-sent via Gmail (${messageId})`
              : 'Email send failed, saved as draft',
            timestamp: new Date().toISOString(),
          });
          lead.updatedAt = new Date().toISOString();

          // === FLUSH 2: Atomic commit — leads.json + send-log.json ===
          await flushLeadsWithFiles(
            leads,
            [sendLogFile],
            `pipeline: ${lead.businessName} — ${sent ? 'email sent' : 'email draft'}`,
          );

          if (sent) {
            try {
              await sendMessage(
                `<b>Email Sent</b>\n` +
                `${lead.businessName} (${lead.contactFirstName})\n` +
                `To: ${lead.contactEmail}\n` +
                `Report: ${reportUrl}`,
              );
            } catch {
              // Silent — email was sent, notification is secondary
            }
          }

          result.email = { to: lead.contactEmail, subject, sent };
        }
      }
    }
  }

  return result;
}

/**
 * Wait for the report page to be live on production.
 * Checks every 15s for up to 30s (2 attempts) after deploy.
 * Only checks report page — OG image is optional (not all reports have metadata).
 */
async function waitForReportLive(slug: string): Promise<boolean> {
  const reportUrl = `https://www.theanswerengine.ai/blindspot/${slug}`;
  const MAX_CHECKS = 2;
  const INTERVAL = 15_000;

  for (let i = 0; i < MAX_CHECKS; i++) {
    try {
      const reportRes = await fetch(reportUrl, { method: 'HEAD', redirect: 'follow' });
      if (reportRes.ok) {
        return true;
      }
    } catch {
      // Network error — keep trying
    }

    if (i < MAX_CHECKS - 1) {
      await new Promise(r => setTimeout(r, INTERVAL));
    }
  }

  return false;
}
