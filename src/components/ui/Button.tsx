import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', to, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group';
    
    const variants = {
      primary: 'bg-[var(--color-yellow)] text-charcoal hover:bg-[#e3b429]',
      secondary: 'bg-[var(--color-offwhite)] text-navy hover:bg-[#ebebe8]',
      outline: 'border border-[var(--color-border)] bg-transparent text-navy hover:border-navy',
      ghost: 'bg-transparent text-muted hover:text-navy hover:bg-[var(--color-offwhite)]',
      navy: 'bg-[var(--color-navy)] text-white hover:bg-[#080f26]',
    };

    const sizes = {
      sm: 'h-10 px-5 text-sm',
      md: 'h-12 px-8 text-sm',
      lg: 'h-14 px-10 text-base',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    const innerContent = (
      <>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === 'outline' && (
           <span className="absolute inset-0 bg-[var(--color-offwhite)] transform scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100 z-0" />
        )}
      </>
    );

    if (to) {
      return (
        <Link to={to} className={classes}>
          {innerContent}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {innerContent}
      </button>
    );
  }
);

Button.displayName = 'Button';
