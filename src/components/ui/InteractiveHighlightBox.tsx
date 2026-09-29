import React from 'react';
import { cn } from '../../lib/utils';

interface InteractiveHighlightBoxProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export const InteractiveHighlightBox: React.FC<InteractiveHighlightBoxProps> = ({
  title,
  subtitle,
  content,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        "group w-full text-left p-8 md:p-10 border-2 border-border bg-white hover:border-yellow hover:bg-offwhite/50 hover:shadow-sm transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full",
        className
      )}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-display font-medium text-navy">{title}</h3>
            {subtitle && (
              <p className="text-muted text-sm mt-1 uppercase tracking-wider font-medium">{subtitle}</p>
            )}
          </div>
          
          {icon && (
            <div className="text-navy group-hover:text-yellow transition-colors duration-300 flex-shrink-0">
              {icon}
            </div>
          )}
        </div>
        
        <p className="text-muted leading-relaxed font-normal mt-4">
          {content}
        </p>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-yellow transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
    </div>
  );
};
