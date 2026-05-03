interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'orange' | 'purple' | 'emerald';
  pulse?: boolean;
  className?: string;
}

const variantStyles = {
  default: 'bg-white/[0.03] border-white/[0.08] text-black/60',
  orange: 'bg-white/[0.04] border-white/[0.08] text-black/40',
  purple: 'bg-white/[0.04] border-white/[0.08] text-black/40',
  emerald: 'bg-white/[0.04] border-white/[0.08] text-black/40',
};

const pulseColors = {
  default: 'bg-black/60',
  orange: 'bg-white/30',
  purple: 'bg-white/30',
  emerald: 'bg-white/30',
};

export default function Badge({
  children,
  variant = 'default',
  pulse = false,
  className = '',
}: BadgeProps) {
  return (
    <div
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full border
        text-sm font-semibold tracking-wide
        ${variantStyles[variant]}
        ${className}
      `.trim()}
    >
      {pulse && (
        <div className={`w-2 h-2 rounded-full animate-pulse ${pulseColors[variant]}`} />
      )}
      {children}
    </div>
  );
}
