interface SectionHeaderProps {
  badge?: string;
  badgeColor?: 'orange' | 'purple';
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const badgeColors = {
  orange: 'bg-white/[0.04] border-white/[0.08] text-black/40',
  purple: 'bg-white/[0.04] border-white/[0.08] text-black/40',
};

export default function SectionHeader({
  badge,
  badgeColor = 'purple',
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 border ${badgeColors[badgeColor]}`}>
          <div className={`w-2 h-2 rounded-full ${badgeColor === 'orange' ? 'bg-white/30' : 'bg-white/30'}`} />
          <span className="text-sm font-semibold tracking-widest uppercase">{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-heading leading-tight mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
