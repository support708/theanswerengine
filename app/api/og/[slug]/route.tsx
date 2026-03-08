import { ImageResponse } from 'next/og';
import { getIndustryColors } from '@/lib/report-template';
import reportMetadata from '@/data/report-metadata.json';

export const runtime = 'edge';

interface BrandColors {
  primary: string;
  secondary: string;
  text: string;
  background: string;
}

interface ReportMeta {
  businessName: string;
  serviceNiche: string;
  reviewCount: number;
  score: number | null;
  topCompetitor: string;
  brandColors?: BrandColors;
}

const metadata = reportMetadata as Record<string, ReportMeta>;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const meta = metadata[slug];
  if (!meta) {
    return new Response('Not found', { status: 404 });
  }

  const { businessName, serviceNiche, score, topCompetitor, reviewCount, brandColors } = meta;
  const industryColors = getIndustryColors(serviceNiche);
  // Override accent with prospect's brand color when available
  const colors = brandColors
    ? { ...industryColors, accent: brandColors.primary }
    : industryColors;

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
            paddingTop: 24,
            paddingRight: 32,
            paddingBottom: 0,
            paddingLeft: 32,
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
            paddingTop: 20,
            paddingRight: 32,
            paddingBottom: 0,
            paddingLeft: 32,
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
                paddingTop: 12, paddingRight: 16, paddingBottom: 12, paddingLeft: 16,
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
                  paddingTop: 12, paddingRight: 16, paddingBottom: 12, paddingLeft: 16,
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
                  paddingTop: 12, paddingRight: 16, paddingBottom: 12, paddingLeft: 16,
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
