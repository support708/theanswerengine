'use client';

/**
 * Generates a unique geometric SVG pattern overlay for blog cards.
 * Each card gets a distinct pattern based on its index, giving
 * a purpose-built monochromatic illustration feel.
 */
export default function BlogCardPattern({ index = 0, className = '' }: { index?: number; className?: string }) {
  // Deterministic pseudo-random based on index
  const seed = (index * 2654435761) >>> 0;
  const r = (n: number) => ((seed * (n + 1) * 16807) % 2147483647) / 2147483647;

  const patternType = index % 4;

  return (
    <svg
      className={className}
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Base subtle grid lines */}
      <defs>
        <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="200" fill={`url(#grid-${index})`} />

      {patternType === 0 && (
        <>
          {/* Concentric circles */}
          <circle cx={200 + r(1) * 80 - 40} cy={100 + r(2) * 40 - 20} r="80" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <circle cx={200 + r(1) * 80 - 40} cy={100 + r(2) * 40 - 20} r="55" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          <circle cx={200 + r(1) * 80 - 40} cy={100 + r(2) * 40 - 20} r="30" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          <circle cx={200 + r(1) * 80 - 40} cy={100 + r(2) * 40 - 20} r="4" fill="rgba(255,255,255,0.1)" />
          {/* Diagonal lines */}
          <line x1={r(3) * 100} y1="0" x2={r(3) * 100 + 120} y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          <line x1={r(4) * 100 + 200} y1="0" x2={r(4) * 100 + 320} y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        </>
      )}

      {patternType === 1 && (
        <>
          {/* Horizontal scan lines + accent nodes */}
          {[40, 80, 120, 160].map((y, i) => (
            <line key={i} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          ))}
          <rect x={r(1) * 300 + 30} y={r(2) * 140 + 20} width="60" height="60" rx="4" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" fill="none" />
          <rect x={r(3) * 200 + 100} y={r(4) * 100 + 40} width="30" height="30" rx="2" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" fill="rgba(255,255,255,0.02)" />
          <circle cx={r(5) * 200 + 100} cy={r(6) * 120 + 40} r="3" fill="rgba(255,255,255,0.08)" />
        </>
      )}

      {patternType === 2 && (
        <>
          {/* Diamond grid */}
          <line x1="0" y1="100" x2="200" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="400" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          <line x1="400" y1="100" x2="200" y2="200" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          <line x1="200" y1="200" x2="0" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          <circle cx="200" cy="100" r="40" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <circle cx="200" cy="100" r="3" fill="rgba(255,255,255,0.1)" />
          {/* Corner accents */}
          <rect x="20" y="20" width="12" height="12" rx="1" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" fill="none" />
          <rect x="368" y="168" width="12" height="12" rx="1" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" fill="none" />
        </>
      )}

      {patternType === 3 && (
        <>
          {/* Stacked arcs + dots */}
          <path d={`M ${r(1) * 100 + 50} 200 A 120 120 0 0 1 ${r(1) * 100 + 290} 200`} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" fill="none" />
          <path d={`M ${r(1) * 100 + 80} 200 A 90 90 0 0 1 ${r(1) * 100 + 260} 200`} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" fill="none" />
          <path d={`M ${r(1) * 100 + 110} 200 A 60 60 0 0 1 ${r(1) * 100 + 230} 200`} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" fill="none" />
          {/* Scattered dots */}
          {Array.from({ length: 5 }, (_, i) => (
            <circle key={i} cx={r(i + 2) * 360 + 20} cy={r(i + 7) * 160 + 20} r="1.5" fill="rgba(255,255,255,0.06)" />
          ))}
        </>
      )}
    </svg>
  );
}
