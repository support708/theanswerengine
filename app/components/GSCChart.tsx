'use client';

import { useState, useEffect } from 'react';

interface MonthData {
  month: string;
  impressions: number;
}

function formatLabel(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1_000) return Math.round(n / 1_000) + 'K';
  return n.toString();
}

function formatMonth(m: string): string {
  const [y, mo] = m.split('-');
  const d = new Date(Number(y), Number(mo) - 1);
  return d.toLocaleString('en-US', { month: 'short', year: '2-digit' });
}

const W = 800;
const H = 300;
const PAD = { top: 24, right: 24, bottom: 48, left: 64 };

function buildPath(points: [number, number][]): string {
  if (points.length < 2) return '';
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpx = (prev[0] + curr[0]) / 2;
    d += ` C ${cpx} ${prev[1]}, ${cpx} ${curr[1]}, ${curr[0]} ${curr[1]}`;
  }
  return d;
}

export default function GSCChart() {
  const [data, setData] = useState<MonthData[] | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/gsc-impressions')
      .then(r => r.json())
      .then(d => {
        if (d.months?.length) setData(d.months);
        else setError(true);
      })
      .catch(() => setError(true));
  }, []);

  if (error) return null;
  if (!data) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <span className="font-mono text-[10px] tracking-widest uppercase text-white/20 animate-pulse">
          Loading citation data...
        </span>
      </div>
    );
  }

  const maxVal = Math.max(...data.map(d => d.impressions));
  const minVal = 0;
  const range = maxVal - minVal;

  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;

  const points: [number, number][] = data.map((d, i) => [
    PAD.left + (i / (data.length - 1)) * chartW,
    PAD.top + chartH - ((d.impressions - minVal) / range) * chartH,
  ]);

  const linePath = buildPath(points);

  // Area fill path
  const areaPath = linePath +
    ` L ${points[points.length - 1][0]} ${PAD.top + chartH}` +
    ` L ${points[0][0]} ${PAD.top + chartH} Z`;

  // Y axis gridlines
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map(t => ({
    y: PAD.top + chartH - t * chartH,
    label: formatLabel(Math.round(minVal + t * range)),
  }));

  return (
    <div className="w-full relative" style={{ maxWidth: W }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full overflow-visible"
        onMouseLeave={() => setHovered(null)}
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F27D24" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#F27D24" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {yTicks.map((t, i) => (
          <g key={i}>
            <line
              x1={PAD.left} y1={t.y}
              x2={W - PAD.right} y2={t.y}
              stroke="rgba(255,255,255,0.06)" strokeWidth="1"
            />
            <text
              x={PAD.left - 10} y={t.y + 4}
              textAnchor="end"
              fill="rgba(255,255,255,0.3)"
              fontSize="10"
              fontFamily="'Courier New', monospace"
            >
              {t.label}
            </text>
          </g>
        ))}

        {/* Area fill */}
        <path d={areaPath} fill="url(#areaGrad)" />

        {/* Line */}
        <path d={linePath} fill="none" stroke="#F27D24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* X axis labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={points[i][0]}
            y={H - 10}
            textAnchor="middle"
            fill="rgba(255,255,255,0.3)"
            fontSize="10"
            fontFamily="'Courier New', monospace"
          >
            {formatMonth(d.month)}
          </text>
        ))}

        {/* Hover hit areas + dots */}
        {data.map((d, i) => (
          <g key={i}>
            {/* Wide invisible hit area */}
            <rect
              x={i === 0 ? points[i][0] - 20 : (points[i][0] + points[i - 1][0]) / 2}
              y={PAD.top}
              width={
                i === 0
                  ? (points[1][0] - points[0][0]) / 2 + 20
                  : i === data.length - 1
                  ? (points[i][0] - points[i - 1][0]) / 2 + 20
                  : (points[i + 1][0] - points[i - 1][0]) / 2
              }
              height={chartH}
              fill="transparent"
              onMouseEnter={() => setHovered(i)}
            />
            {/* Dot */}
            <circle
              cx={points[i][0]}
              cy={points[i][1]}
              r={hovered === i ? 6 : 4}
              fill={hovered === i ? '#F27D24' : '#131313'}
              stroke="#F27D24"
              strokeWidth="2"
              style={{ transition: 'r 0.15s' }}
            />
          </g>
        ))}

        {/* Tooltip */}
        {hovered !== null && (() => {
          const px = points[hovered][0];
          const py = points[hovered][1];
          const flip = px > W * 0.65;
          const tx = flip ? px - 12 : px + 12;
          const tw = 110;
          return (
            <g>
              <line x1={px} y1={PAD.top} x2={px} y2={PAD.top + chartH} stroke="#F27D24" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              <rect
                x={flip ? tx - tw : tx}
                y={py - 32}
                width={tw}
                height={40}
                rx="4"
                fill="#1c1b1b"
                stroke="rgba(242,125,36,0.3)"
                strokeWidth="1"
              />
              <text
                x={flip ? tx - tw / 2 : tx + tw / 2}
                y={py - 16}
                textAnchor="middle"
                fill="#F27D24"
                fontSize="13"
                fontFamily="'Courier New', monospace"
                fontWeight="bold"
              >
                {formatLabel(data[hovered].impressions)}
              </text>
              <text
                x={flip ? tx - tw / 2 : tx + tw / 2}
                y={py - 3}
                textAnchor="middle"
                fill="rgba(255,255,255,0.4)"
                fontSize="9"
                fontFamily="'Courier New', monospace"
              >
                {formatMonth(data[hovered].month)} impressions
              </text>
            </g>
          );
        })()}
      </svg>
    </div>
  );
}
