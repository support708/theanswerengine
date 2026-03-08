import { ImageResponse } from 'next/og';
import { readLeads } from '@/lib/leads';
import { getIndustryColors } from '@/lib/report-template';
import { promises as fs } from 'fs';
import path from 'path';

export const runtime = 'nodejs';

interface ReportMeta {
  businessName: string;
  serviceNiche: string;
  reviewCount: number;
  score: number | null;
  topCompetitor: string;
}

/** Read committed report-metadata.json (works on Vercel, unlike leads.json) */
async function getReportMetadata(slug: string): Promise<ReportMeta | null> {
  try {
    const metaPath = path.join(process.cwd(), 'data', 'report-metadata.json');
    const data = await fs.readFile(metaPath, 'utf-8');
    const metadata = JSON.parse(data) as Record<string, ReportMeta>;
    return metadata[slug] ?? null;
  } catch {
    return null;
  }
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Try leads.json first (local dev), fall back to committed report-metadata.json (production)
  let businessName = '';
  let serviceNiche = '';
  let score: number | null = null;
  let topCompetitor = 'Your competitors';
  let reviewCount = 0;

  const leads = await readLeads();
  const lead = leads.find(l => l.reportSlug === slug);

  if (lead) {
    businessName = lead.businessName;
    serviceNiche = lead.serviceNiche;
    score = lead.research?.aero7?.total ?? null;
    const competitors = lead.research?.topCompetitors ?? [];
    topCompetitor = competitors[0]?.name || 'Your competitors';
    reviewCount = lead.research?.reviewCount || lead.reviewCount || 0;
  } else {
    // Fallback: committed metadata file (available on Vercel)
    const meta = await getReportMetadata(slug);
    if (!meta) {
      return new Response('Not found', { status: 404 });
    }
    businessName = meta.businessName;
    serviceNiche = meta.serviceNiche;
    score = meta.score;
    topCompetitor = meta.topCompetitor;
    reviewCount = meta.reviewCount;
  }

  const colors = getIndustryColors(serviceNiche);

  return new ImageResponse(
    (
      <div
        style={{
          width: '600',
          height: '340',
          display: 'flex',
          flexDirection: 'column',
          background: `linear-gradient(135deg, ${colors.heroGradientFrom}, ${colors.heroGradientTo})`,
          fontFamily: 'system-ui, sans-serif',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4',
            background: colors.accent,
            display: 'flex',
          }}
        />

        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '24 32 0 32',
            gap: '12',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36',
              height: '36',
              borderRadius: '50%',
              background: colors.accent,
              fontSize: '16',
              fontWeight: 700,
            }}
          >
            AE
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '11', opacity: 0.7, letterSpacing: '1.5' }}>
              THE ANSWER ENGINE
            </span>
            <span style={{ fontSize: '10', opacity: 0.5 }}>
              AI VISIBILITY ANALYSIS
            </span>
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20 32 0 32',
            flex: 1,
          }}
        >
          <div style={{ fontSize: '13', opacity: 0.6, marginBottom: '6', display: 'flex' }}>
            BLIND SPOT REPORT
          </div>
          <div
            style={{
              fontSize: '26',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '16',
              display: 'flex',
            }}
          >
            {businessName}
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: '16',
              marginBottom: '16',
            }}
          >
            {/* AI Visibility */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '8',
                padding: '12 16',
                flex: 1,
              }}
            >
              <span style={{ fontSize: '10', opacity: 0.6, marginBottom: '4', display: 'flex' }}>
                AI VISIBILITY
              </span>
              <span style={{ fontSize: '22', fontWeight: 700, color: '#ff4444', display: 'flex' }}>
                NOT FOUND
              </span>
            </div>

            {/* Reviews */}
            {reviewCount > 0 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '8',
                  padding: '12 16',
                  flex: 1,
                }}
              >
                <span style={{ fontSize: '10', opacity: 0.6, marginBottom: '4', display: 'flex' }}>
                  REVIEWS
                </span>
                <span style={{ fontSize: '22', fontWeight: 700, color: colors.accent, display: 'flex' }}>
                  {reviewCount}+
                </span>
              </div>
            )}

            {/* Score */}
            {score !== null && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '8',
                  padding: '12 16',
                  flex: 1,
                }}
              >
                <span style={{ fontSize: '10', opacity: 0.6, marginBottom: '4', display: 'flex' }}>
                  READINESS
                </span>
                <span
                  style={{
                    fontSize: '22',
                    fontWeight: 700,
                    color: score >= 60 ? '#4ade80' : score >= 40 ? '#facc15' : '#ff4444',
                    display: 'flex',
                  }}
                >
                  {score}/100
                </span>
              </div>
            )}
          </div>

          {/* Bottom line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8',
              fontSize: '12',
              opacity: 0.7,
            }}
          >
            <span style={{ display: 'flex' }}>
              AI recommends {topCompetitor} instead
            </span>
          </div>
        </div>

        {/* CTA bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12',
            background: colors.accent,
            fontSize: '13',
            fontWeight: 600,
            letterSpacing: '0.5',
          }}
        >
          CLICK TO VIEW YOUR FULL AI VISIBILITY REPORT
        </div>
      </div>
    ),
    {
      width: 600,
      height: 340,
    }
  );
}
