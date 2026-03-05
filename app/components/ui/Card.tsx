interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'featured' | 'glass';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  className?: string;
}

const paddingStyles = {
  sm: 'p-4 sm:p-5',
  md: 'p-6 sm:p-8',
  lg: 'p-8 sm:p-12',
  xl: 'p-12 sm:p-16',
};

const variantStyles = {
  default:
    'bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl',
  featured:
    'bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl hover:border-white/[0.15]',
  glass:
    'bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl',
};

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  className = '',
}: CardProps) {
  return (
    <div
      className={`
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${hover ? 'hover-lift' : ''}
        transition-all
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}
