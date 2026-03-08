/**
 * Cron-accessible pipeline trigger.
 * Runs research + report + email draft on all queued leads.
 * Protected by CRON_SECRET.
 */
import { NextRequest, NextResponse } from 'next/server';
import { readLeads, getLeadById, updateLead } from '@/lib/leads';
import { callClaudeWithWebSearch, callClaude, extractText, checkRateLimit } from '@/lib/anthropic';
import { parseAERO7FromResearch } from '@/lib/aero7-scorer';
import { getIndustryColors, CALENDLY_URL, REPORT_FOOTER } from '@/lib/report-template';
import { runFabricationScan, runEmDashScan, stripEmDashes } from '@/lib/fabrication-scan';
import { buildEmailSubject, buildEmailBody } from '@/lib/gmail';
import { createGmailDraft, isGmailConfigured } from '@/lib/gmail-api';
import { notifyResearchComplete, notifyReportReady, notifyEmailDrafted } from '@/lib/telegram';
import { deployReport, isDeployConfigured } from '@/lib/deploy';
import type { ResearchResults } from '@/lib/types';
import { promises as fs } from 'fs';
import path from 'path';

export const maxDuration = 300; // 5 minutes for processing multiple leads

export async function POST(req: NextRequest) {
  // Auth check
  const authHeader = req.headers.get('authorization');
  const secret = process.env.CRON_SECRET;
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = new URL(req.url);
  const leadId = url.searchParams.get('leadId');
  const step = url.searchParams.get('step') || 'full'; // 'research', 'report', 'email', 'full'

  try {
    if (leadId) {
      // Process a single lead
      const result = await processLead(leadId, step);
      return NextResponse.json({ success: true, result });
    }

    // Process all queued leads (up to 3 to stay within timeout)
    const leads = await readLeads();
    const queued = leads.filter(l => l.status === 'queued').slice(0, 3);

    if (queued.length === 0) {
      return NextResponse.json({ success: true, message: 'No queued leads to process' });
    }

    const results = [];
    for (const lead of queued) {
      try {
        const result = await processLead(lead.id, step);
        results.push(result);
      } catch (err) {
        results.push({ leadId: lead.id, error: err instanceof Error ? err.message : String(err) });
      }
    }

    return NextResponse.json({ success: true, processed: results.length, results });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Pipeline failed' },
      { status: 500 }
    );
  }
}

async function processLead(leadId: string, step: string) {
  const lead = await getLeadById(leadId);
  if (!lead) throw new Error(`Lead ${leadId} not found`);

  const result: Record<string, unknown> = { leadId, businessName: lead.businessName };

  // STEP 1: Research
  if (step === 'full' || step === 'research') {
    if (lead.status !== 'queued' && step !== 'full') {
      result.research = 'skipped (not in queued status)';
    } else {
      if (!checkRateLimit()) throw new Error('Rate limit exceeded');

      await updateLead(leadId, {
        status: 'researching',
        actionLog: [...lead.actionLog, { action: 'Research started (auto-pipeline)', timestamp: new Date().toISOString() }],
      });

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
        model: 'claude-haiku-4-5-20251001',
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

      const updatedAfterResearch = await updateLead(leadId, {
        status: 'research_complete',
        research,
        competitorName: lead.competitorName || (research.topCompetitors[0]?.name ?? ''),
        reviewCount: research.reviewCount || lead.reviewCount,
        rating: research.rating || lead.rating,
        actionLog: [
          ...(await getLeadById(leadId))!.actionLog,
          { action: `Research completed (AERO-10: ${research.aero7.total}/100)`, timestamp: new Date().toISOString() },
        ],
      });

      if (updatedAfterResearch) await notifyResearchComplete(updatedAfterResearch);
      result.research = { aero10: research.aero7.total, competitors: research.topCompetitors.length };
    }
  }

  // STEP 2: Report Generation
  if (step === 'full' || step === 'report') {
    const currentLead = (await getLeadById(leadId))!;
    if (!currentLead.research) {
      result.report = 'skipped (no research data)';
    } else {
      await updateLead(leadId, {
        status: 'generating_report',
        actionLog: [...currentLead.actionLog, { action: 'Report generation started', timestamp: new Date().toISOString() }],
      });

      const research = currentLead.research;
      const brand = getIndustryColors(currentLead.serviceNiche);
      const competitorDisplay = currentLead.competitorName || research.topCompetitors[0]?.name || 'competitors';

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
Section 6 - THE PROOF: Case study stats
Section 7 - CTA: "BOOK A 30-MIN CALL" linking to ${CALENDLY_URL}
FOOTER: "${REPORT_FOOTER}"`,
        cache_control: { type: 'ephemeral' as const },
      }];

      const differentiators = research.hiddenDifferentiators.length > 0
        ? research.hiddenDifferentiators
        : ['Strong local reputation', 'Established client base', 'Quality service delivery'];

      const reportPrompt = `Generate the Blind Spot Report HTML for:

Business: ${currentLead.businessName}
First Name: ${currentLead.contactFirstName}
City: ${currentLead.city}
Service: ${currentLead.serviceNiche}
Website: ${currentLead.websiteUrl || 'Not found'}

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

      // Save report locally
      const reportDir = path.join(process.cwd(), 'public', 'blindspot');
      await fs.mkdir(reportDir, { recursive: true });
      await fs.writeFile(path.join(reportDir, `${currentLead.reportSlug}.html`), reportHtml, 'utf-8');

      // Auto-deploy to production via GitHub API
      let deployed = false;
      if (isDeployConfigured() && currentLead.reportSlug) {
        const deployResult = await deployReport(currentLead.reportSlug, reportHtml);
        deployed = deployResult.success;
        if (!deployed) {
          console.error('Deploy failed:', deployResult.error);
        }
      }

      const actionLog = (await getLeadById(leadId))!.actionLog;
      actionLog.push({ action: 'Report generated', timestamp: new Date().toISOString() });
      actionLog.push({ action: `Fabrication scan: ${fabricationResult.clean ? 'CLEAN' : `${fabricationResult.flags.length} flags`}`, timestamp: new Date().toISOString() });
      actionLog.push({ action: `Em-dash scan: ${emDashResult.clean ? 'CLEAN' : `${emDashResult.count} found, auto-stripped`}`, timestamp: new Date().toISOString() });
      if (deployed) {
        actionLog.push({ action: 'Report deployed to production', timestamp: new Date().toISOString() });
      }

      const finalLead = await updateLead(leadId, {
        status: 'report_ready',
        fabricationFlags: fabricationResult.flags,
        emDashClean: emDashResult.clean || true,
        actionLog,
      });

      if (finalLead) await notifyReportReady(finalLead);
      result.report = {
        url: `/blindspot/${currentLead.reportSlug}`,
        deployed,
        fabrication: { clean: fabricationResult.clean, flags: fabricationResult.flags.length },
        emDash: { clean: emDashResult.clean, count: emDashResult.count },
      };
    }
  }

  // STEP 3: Email Draft
  if (step === 'full' || step === 'email') {
    const currentLead = (await getLeadById(leadId))!;
    if (currentLead.status !== 'report_ready') {
      result.email = 'skipped (report not ready)';
    } else if (!currentLead.contactEmail) {
      result.email = 'skipped (no email address)';
    } else {
      const subject = buildEmailSubject(currentLead);
      const body = buildEmailBody(currentLead);

      let draftId: string | null = null;
      let gmailUsed = false;

      if (isGmailConfigured()) {
        try {
          const gmailResult = await createGmailDraft({
            to: currentLead.contactEmail,
            subject,
            body,
          });
          if (gmailResult) {
            draftId = gmailResult.draftId;
            gmailUsed = true;
          }
        } catch (error) {
          console.error('Gmail draft creation failed:', error);
        }
      }

      const updated = await updateLead(leadId, {
        status: 'email_drafted',
        emailDraftId: draftId,
        actionLog: [
          ...currentLead.actionLog,
          {
            action: gmailUsed
              ? `Gmail draft created (${draftId})`
              : 'Email draft prepared (auto-pipeline)',
            timestamp: new Date().toISOString(),
          },
        ],
      });

      if (updated) await notifyEmailDrafted(updated);
      result.email = { to: currentLead.contactEmail, subject, gmailDraft: gmailUsed };
    }
  }

  return result;
}
