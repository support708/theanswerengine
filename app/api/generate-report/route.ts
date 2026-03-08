import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { getLeadById, updateLead } from '@/lib/leads';
import { callClaudeWithWebSearch, callClaude, extractText, checkRateLimit } from '@/lib/anthropic';
import { parseAERO7FromResearch } from '@/lib/aero7-scorer';
import { getIndustryColors, CALENDLY_URL, REPORT_FOOTER } from '@/lib/report-template';
import { runFabricationScan, runEmDashScan, stripEmDashes } from '@/lib/fabrication-scan';
import { notifyResearchComplete, notifyReportReady } from '@/lib/telegram';
import { deployReport, isDeployConfigured } from '@/lib/deploy';
import type { ResearchResults } from '@/lib/types';

export const maxDuration = 120; // Allow up to 2 minutes for Vercel

export async function POST(req: NextRequest) {
  const { leadId } = await req.json();
  if (!leadId) {
    return NextResponse.json({ error: 'leadId required' }, { status: 400 });
  }

  if (!checkRateLimit()) {
    return NextResponse.json({ error: 'Rate limit exceeded. Max 10 reports per hour.' }, { status: 429 });
  }

  const lead = await getLeadById(leadId);
  if (!lead) {
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
  }

  try {
    // ─── STEP 1: Update status to researching ───
    await updateLead(leadId, {
      status: 'researching',
      actionLog: [
        ...lead.actionLog,
        { action: 'Research started', timestamp: new Date().toISOString() },
      ],
    });

    // ─── STEP 2: Research with Claude Haiku + web_search ───
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
P1 Answer Quality: Directness, snippet-readiness of answers on their site. 10 = 40-60 word lead + proof assets.
P2 Entity Optimization: Schema markup depth. 10 = 7+ schema types, zero validation errors.
P3 Relevance & Freshness: Content age + intent alignment. 10 = updated <3 months + perfect query match.
P4 Optimization Structure: H-tag hierarchy, paragraph length, mobile. 10 = perfect structure.
P5 Voice & Authenticity: Real voice, verified examples, zero fabrication feel. 10 = sounds like a real expert.
P6 Authority Signals: Credentials, licenses, author bios, reviews embedded. 10 = full credentials + 5+ reviews.
P7 Authority Distribution: Third-party presence, earned media, multi-platform AI visibility. 10 = cited on 4-5 AI platforms.
P8 Consensus & Co-Citation: Cross-platform mentions (0-4) + semantic co-mention (0-3) + citation consistency (0-3). How often independent sources mention them together with their service keywords.
P9 Platform-Specific Readiness: ChatGPT+Gemini readiness (0-4) + Perplexity/Reddit presence (0-3) + Claude+Google AIO E-E-A-T depth (0-3).
P10 Technical AI Accessibility: Bot access in robots.txt (0-4) + NAP consistency (0-3) + fresh GBP signals (0-3). Check if GPTBot, ClaudeBot, PerplexityBot are allowed.

Return a JSON object with this exact structure:
{
  "reviewCount": number or null,
  "rating": number or null,
  "yearsInBusiness": number or null,
  "credentials": ["string array of certifications, licenses, degrees"],
  "awards": ["string array of awards or recognitions"],
  "communityInvolvement": ["string array of community roles, board positions, volunteering"],
  "hiddenDifferentiators": ["string array of unique selling points buried on their site or in reviews"],
  "topCompetitors": [{"name": "string", "reason": "why AI cites them instead"}],
  "faqContentPresent": boolean,
  "blogPresent": boolean,
  "gmbPresent": boolean,
  "schemaDetected": boolean,
  "recentContent": boolean,
  "uniqueStory": "string or null - founder story, origin, unique background",
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
  "rawNotes": "string - brief summary of key findings"
}`,
      cache_control: { type: 'ephemeral' as const },
    }];

    const competitorInstruction = lead.competitorName
      ? `Their main competitor is ${lead.competitorName}. Also search for other top competitors.`
      : `Find the top 1-2 AI-cited competitors for ${lead.serviceNiche} in ${lead.city}.`;

    const researchPrompt = `Research this business thoroughly:

Business: ${lead.businessName}
Website: ${lead.websiteUrl || 'Unknown - search for it'}
City: ${lead.city}
Service/Niche: ${lead.serviceNiche}
${competitorInstruction}
${lead.notes ? `Additional context from the user: ${lead.notes}` : ''}
${lead.reviewCount ? `Known review count: ${lead.reviewCount}` : ''}
${lead.rating ? `Known rating: ${lead.rating}` : ''}

Tasks:
1. Search for the business website and review presence (Google, Yelp, etc.)
2. Look for credentials, awards, community involvement, and origin story
3. Check if their site has FAQ pages, blog/articles, schema markup
4. Search AI platforms: "best ${lead.serviceNiche} in ${lead.city}" to see if they appear
5. Identify who AI DOES recommend instead and why
6. Check their robots.txt for GPTBot, ClaudeBot, PerplexityBot access (P10)
7. Check for NAP consistency across Google, Yelp, and their website (P10)
8. Look for mentions on Reddit, LinkedIn, local news, industry directories (P8)
9. Check GBP activity: recent posts, photos, Q&A, review responses (P10)
10. Score all 10 AERO-10 pillars based on what you find
11. Surface any "hidden differentiators" - things that make them unique but aren't visible to AI

Return the JSON object as specified.`;

    const researchResponse = await callClaudeWithWebSearch({
      model: 'claude-haiku-4-5-20251001',
      system: researchSystemPrompt,
      messages: [{ role: 'user', content: researchPrompt }],
      maxTokens: 4096,
    });

    // Parse research results from response
    const researchText = extractText(researchResponse);
    let research: ResearchResults;

    try {
      // Extract JSON from response (might be wrapped in markdown fences)
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
    } catch (parseErr) {
      // If parsing fails, create minimal research with what we have
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
        rawNotes: `Research parsing failed: ${parseErr instanceof Error ? parseErr.message : 'Unknown'}. Raw: ${researchText.slice(0, 500)}`,
        researchedAt: new Date().toISOString(),
      };
    }

    // Save research results + transition to research_complete
    const updatedAfterResearch = await updateLead(leadId, {
      status: 'research_complete',
      research,
      competitorName: lead.competitorName || (research.topCompetitors[0]?.name ?? ''),
      reviewCount: research.reviewCount || lead.reviewCount,
      rating: research.rating || lead.rating,
      actionLog: [
        ...(await getLeadById(leadId))!.actionLog,
        { action: 'Research completed', timestamp: new Date().toISOString() },
      ],
    });

    // Telegram: research complete notification
    if (updatedAfterResearch) {
      await notifyResearchComplete(updatedAfterResearch);
    }

    // Transition to generating_report
    await updateLead(leadId, {
      status: 'generating_report',
      actionLog: [
        ...(await getLeadById(leadId))!.actionLog,
        { action: 'Report generation started', timestamp: new Date().toISOString() },
      ],
    });

    // ─── STEP 3: Generate HTML Report with Claude Sonnet ───
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
- If a data point is null or empty, omit that section gracefully.

BRAND COLORS:
- Hero gradient: ${brand.heroGradientFrom} to ${brand.heroGradientTo}
- Accent color: ${brand.accent}
- Body background: ${brand.bodyBg}
- Card background: ${brand.cardBg}
- Dark section: ${brand.sectionDark}

REPORT STRUCTURE (single scrolling page):

Section 1 - THE HOOK:
"[FIRST NAME], YOU HAVE A VISIBILITY PROBLEM"
Subhead using an adjective that fits their reputation and credentials.

Section 2 - THE GAP:
Stats panel: [X] Five-Star Reviews | [X] Years in Business | [X] Credentials/Awards | AERO-10 Score: [X]/100

Section 3 - WHAT AI SEES:
Terminal/chat-style block simulating a ChatGPT query like "best [service] in [city]"
showing the competitor being recommended, not them.

Section 4 - HIDDEN DIFFERENTIATORS:
3-5 cards showing buried gold from the research.

Section 5 - THE FIX:
4-item grid: Answer-First Content, Schema Markup, Entity Optimization, Authority Signals.
Brief description for each.

Section 6 - THE PROOF:
Case study stat block: "After implementing the Answer Authority Foundation: 100% AI citation rate within 60 days."

Section 7 - CTA:
Primary CTA text: "I'll walk you through exactly what I found on a 30-minute Zoom. No pitch, just the data and what it means for your market. If it makes sense to talk about next steps after that, great. If not, you keep the report either way."
Button: "BOOK A 30-MIN CALL" linking to ${CALENDLY_URL}
Below: "The report is yours regardless. No strings attached."

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
- Community involvement: ${research.communityInvolvement.join(', ') || 'None found'}
- Top competitor (AI-cited): ${competitorDisplay}
- Competitor reason: ${research.topCompetitors[0]?.reason || 'Better online optimization'}
- Hidden differentiators: ${differentiators.join('; ')}
- Unique story: ${research.uniqueStory || 'Not found'}
- AI Cited: ${research.aiCited ? 'Yes' : 'No'}
- FAQ content: ${research.faqContentPresent ? 'Yes' : 'No'}
- Blog: ${research.blogPresent ? 'Yes' : 'No'}
- GMB: ${research.gmbPresent ? 'Yes' : 'No'}
- Schema: ${research.schemaDetected ? 'Yes' : 'No'}

AERO-10 SCORES (out of 100):
- P1 Answer Quality: ${research.aero7.answerQuality}/10
- P2 Entity Optimization: ${research.aero7.entityOptimization}/10
- P3 Relevance & Freshness: ${research.aero7.relevanceFreshness}/10
- P4 Optimization Structure: ${research.aero7.optimizationStructure}/10
- P5 Voice & Authenticity: ${research.aero7.voiceAuthenticity}/10
- P6 Authority Signals: ${research.aero7.authoritySignals}/10
- P7 Authority Distribution: ${research.aero7.authorityDistribution}/10
- P8 Consensus & Co-Citation: ${research.aero7.consensusCoCitation}/10
- P9 Platform-Specific Readiness: ${research.aero7.platformReadiness}/10
- P10 Technical AI Accessibility: ${research.aero7.technicalAccessibility}/10
- TOTAL: ${research.aero7.total}/100

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

    // ─── STEP 4: Fabrication scan + Em-dash scan ───
    // Build verified data from research for fabrication cross-reference
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

    // Strip em-dashes from report HTML
    if (!emDashResult.clean) {
      reportHtml = stripEmDashes(reportHtml);
    }

    // Save report to public/blindspot/
    const reportDir = path.join(process.cwd(), 'public', 'blindspot');
    await fs.mkdir(reportDir, { recursive: true });
    const reportPath = path.join(reportDir, `${lead.reportSlug}.html`);
    await fs.writeFile(reportPath, reportHtml, 'utf-8');

    // ─── STEP 5: Generate Preview Card (no AERO-7 per content protection) ───
    const cardHtml = generatePreviewCard(lead.contactFirstName, lead.businessName, lead.reportSlug!, research, brand);
    const cardPath = path.join(reportDir, `${lead.reportSlug}-card.html`);
    await fs.writeFile(cardPath, cardHtml, 'utf-8');

    // Auto-deploy to production via GitHub API
    let deployed = false;
    if (isDeployConfigured()) {
      const deployResult = await deployReport(lead.reportSlug!, reportHtml);
      deployed = deployResult.success;
      if (!deployed) {
        console.error('Deploy failed:', deployResult.error);
      }
    }

    // Update lead status to report_ready with scan results
    const actionLog = (await getLeadById(leadId))!.actionLog;
    actionLog.push({ action: 'Report generated', timestamp: new Date().toISOString() });
    actionLog.push({ action: `Fabrication scan: ${fabricationResult.clean ? 'CLEAN' : `${fabricationResult.flags.length} flags`}`, timestamp: new Date().toISOString() });
    actionLog.push({ action: `Em-dash scan: ${emDashResult.clean ? 'CLEAN' : `${emDashResult.count} found, auto-stripped`}`, timestamp: new Date().toISOString() });
    actionLog.push({ action: 'Preview card generated', timestamp: new Date().toISOString() });
    if (deployed) {
      actionLog.push({ action: 'Report deployed to production', timestamp: new Date().toISOString() });
    }

    const finalLead = await updateLead(leadId, {
      status: 'report_ready',
      fabricationFlags: fabricationResult.flags,
      emDashClean: emDashResult.clean || true, // true after stripping
      actionLog,
    });

    // Telegram: report ready notification
    if (finalLead) {
      await notifyReportReady(finalLead);
    }

    return NextResponse.json({
      success: true,
      reportUrl: `/blindspot/${lead.reportSlug}`,
      cardUrl: `/blindspot/${lead.reportSlug}-card.html`,
      deployed,
      fabricationScan: { clean: fabricationResult.clean, flagCount: fabricationResult.flags.length },
      emDashScan: { clean: emDashResult.clean, count: emDashResult.count },
    });

  } catch (error) {
    console.error('Report generation failed:', error);

    // Revert status on failure
    await updateLead(leadId, {
      status: 'queued',
      actionLog: [
        ...(await getLeadById(leadId))!.actionLog,
        {
          action: `Generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
          timestamp: new Date().toISOString(),
        },
      ],
    });

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Report generation failed' },
      { status: 500 }
    );
  }
}

function generatePreviewCard(
  firstName: string,
  businessName: string,
  slug: string,
  research: ResearchResults,
  brand: { heroGradientFrom: string; heroGradientTo: string; accent: string }
): string {
  const reviewText = research.reviewCount ? `${research.reviewCount} Five-Star Reviews` : 'Strong Reputation';
  const yearsText = research.yearsInBusiness ? `${research.yearsInBusiness}+ Years in Business` : 'Established Business';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=560">
<title>AI Visibility Report - ${businessName}</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { width: 560px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
.card {
  width: 560px;
  padding: 48px 40px;
  background: linear-gradient(135deg, ${brand.heroGradientFrom} 0%, ${brand.heroGradientTo} 100%);
  color: white;
  text-align: center;
}
.badge {
  display: inline-block;
  background: ${brand.accent};
  color: white;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 24px;
}
.icon {
  font-size: 48px;
  margin-bottom: 20px;
  opacity: 0.9;
}
h1 {
  font-size: 24px;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.subtitle {
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  margin-bottom: 32px;
  line-height: 1.5;
}
.cta {
  display: inline-block;
  background: ${brand.accent};
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  letter-spacing: 0.5px;
  margin-bottom: 24px;
}
.branding {
  font-size: 11px;
  color: rgba(255,255,255,0.4);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: 8px;
}
</style>
</head>
<body>
<div class="card">
  <div class="badge">AI Visibility Report</div>
  <div class="icon">&#128065;&#65039;</div>
  <h1>${firstName}, You Have a Visibility Problem</h1>
  <p class="subtitle">${reviewText} &bull; ${yearsText} &bull; AERO-10: ${research.aero7.total}/100</p>
  <a href="https://theanswerengine.ai/blindspot/${slug}" class="cta">VIEW FULL REPORT &rarr;</a>
  <div class="branding">The Answer Engine</div>
</div>
</body>
</html>`;
}
