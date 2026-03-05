interface DividerProps {
  variant?: 'gradient' | 'dots' | 'diamonds';
  maxWidth?: string;
  className?: string;
}

export default function Divider({
  variant = 'gradient',
  maxWidth = 'max-w-4xl',
  className = '',
}: DividerProps) {
  if (variant === 'dots') {
    return (
      <div className={`flex justify-center gap-2 ${className}`}>
        <div className="w-1.5 h-1.5 bg-white/30" />
        <div className="w-1.5 h-1.5 bg-white/30" />
        <div className="w-1.5 h-1.5 bg-white/30" />
      </div>
    );
  }

  if (variant === 'diamonds') {
    return (
      <div className={`flex justify-center gap-1.5 ${className}`}>
        <div className="w-1 h-1 bg-white/30/60 rotate-45" />
        <div className="w-1 h-1 bg-white/30/60 rotate-45" />
        <div className="w-1 h-1 bg-white/30/60 rotate-45" />
      </div>
    );
  }

  return (
    <div className={`relative h-px w-full ${maxWidth} mx-auto ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
