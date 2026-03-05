'use client';

import { useEffect, useState } from 'react';

export default function HeroDotGrid({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={className}>
      {/* Animated gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background: mounted
            ? `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(255,255,255,0.05), transparent),
              radial-gradient(ellipse 60% 80% at 80% 20%, rgba(255,255,255,0.04), transparent),
              radial-gradient(ellipse 50% 60% at 50% 80%, rgba(255,255,255,0.045), transparent)
            `
            : 'transparent',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1.5s ease',
        }}
      />

      {/* Slowly moving orb 1 */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: '600px',
          height: '400px',
          left: '10%',
          top: '20%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.045), transparent 70%)',
          animation: mounted ? 'meshFloat1 20s ease-in-out infinite' : 'none',
        }}
      />

      {/* Slowly moving orb 2 */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: '500px',
          height: '500px',
          right: '10%',
          top: '10%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)',
          animation: mounted ? 'meshFloat2 25s ease-in-out infinite' : 'none',
        }}
      />

      {/* Slowly moving orb 3 */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: '400px',
          height: '300px',
          left: '40%',
          bottom: '10%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)',
          animation: mounted ? 'meshFloat3 18s ease-in-out infinite' : 'none',
        }}
      />

      {/* Fine dot grid overlay for texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.5,
        }}
      />

      <style jsx>{`
        @keyframes meshFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.95); }
        }
        @keyframes meshFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, 20px) scale(0.95); }
          66% { transform: translate(20px, -25px) scale(1.05); }
        }
        @keyframes meshFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, -15px) scale(1.03); }
        }
        @media (prefers-reduced-motion: reduce) {
          div {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
