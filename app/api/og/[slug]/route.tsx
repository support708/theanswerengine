import { ImageResponse } from 'next/og';
import { readLeads } from '@/lib/leads';
import { getIndustryColors } from '@/lib/report-template';

export const runtime = 'nodejs';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Find lead by reportSlug
  const leads = await readLeads();
  const lead = leads.find(l => l.reportSlug === slug);

  if (!lead) {
    return new Response('Not found', { status: 404 });
  }

  const colors = getIndustryColors(lead.serviceNiche);
  const score = lead.research?.aero7?.total ?? null;
  const competitors = lead.research?.topCompetitors ?? [];
  const topCompetitor = competitors[0]?.name || 'Your competitors';
  const reviewCount = lead.research?.reviewCount || lead.reviewCount || 0;

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
            {lead.businessName}
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
