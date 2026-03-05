interface GlowContainerProps {
  children: React.ReactNode;
  color?: 'orange' | 'purple' | 'mixed';
  intensity?: 'subtle' | 'medium' | 'strong';
  className?: string;
}

const glowStyles = {
  orange: {
    subtle: 'rgba(242,125,36,0.06)',
    medium: 'rgba(242,125,36,0.12)',
    strong: 'rgba(242,125,36,0.20)',
  },
  purple: {
    subtle: 'rgba(54,36,120,0.06)',
    medium: 'rgba(54,36,120,0.12)',
    strong: 'rgba(54,36,120,0.20)',
  },
  mixed: {
    subtle: 'rgba(242,125,36,0.06)',
    medium: 'rgba(242,125,36,0.12)',
    strong: 'rgba(242,125,36,0.20)',
  },
};

export default function GlowContainer({
  children,
  color = 'orange',
  intensity = 'subtle',
  className = '',
}: GlowContainerProps) {
  const glowColor = glowStyles[color][intensity];

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
          style={{
            background: `radial-gradient(ellipse at center, ${glowColor}, transparent 70%)`,
          }}
        />
        {color === 'mixed' && (
          <div
            className="absolute top-1/3 right-1/4 w-[300px] h-[300px]"
            style={{
              background: `radial-gradient(ellipse at center, ${glowStyles.purple[intensity]}, transparent 70%)`,
            }}
          />
        )}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
