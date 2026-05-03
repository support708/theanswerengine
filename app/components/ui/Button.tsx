import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  glow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-white text-[#0F1117] hover:bg-white/90',
  secondary:
    'bg-white/[0.05] text-gray-300 border border-white/[0.1] hover:bg-white/[0.08] hover:border-white/[0.2]',
  ghost:
    'text-black/60 hover:text-white hover:bg-white/[0.05]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm rounded-lg gap-2',
  md: 'px-6 py-3 text-base rounded-xl gap-2',
  lg: 'px-8 py-4 text-lg rounded-xl gap-3',
};

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', icon, iconPosition = 'right', glow, className = '', children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={`
          inline-flex items-center justify-center font-semibold
          transition-all duration-300
          hover:scale-[1.02] active:scale-[0.98]
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `.trim()}
        {...props}
      >
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </a>
    );
  }
);

Button.displayName = 'Button';

export default Button;
