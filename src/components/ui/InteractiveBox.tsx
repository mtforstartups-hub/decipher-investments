import React from 'react';
import { cn } from '../../lib/utils';

interface InteractiveBoxProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  isActive?: boolean;
  onToggle?: () => void;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

export const InteractiveBox: React.FC<InteractiveBoxProps> = ({
  title,
  subtitle,
  content,
  icon,
  className,
  isActive = false,
  onToggle,
  onClick,
  onMouseEnter,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (onToggle) onToggle();
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      className={cn(
        "group w-full text-left p-8 md:p-10 border transition-all duration-500 relative overflow-hidden cursor-pointer",
        isActive
          ? "border-navy bg-offwhite shadow-sm"
          : "border-border bg-white hover:border-navy hover:shadow-sm",
        className
      )}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-display font-medium text-navy">
              {title}
            </h3>
            {subtitle && (
              <p className="text-muted text-sm mt-1 uppercase tracking-wider font-medium">
                {subtitle}
              </p>
            )}
          </div>
          {icon && (
            <div
              className={cn(
                "transition-all duration-300 flex-shrink-0",
                isActive
                  ? "text-yellow -translate-y-1"
                  : "text-navy group-hover:text-yellow group-hover:-translate-y-1"
              )}
            >
              {icon}
            </div>
          )}
        </div>

        {/* Content always visible across all cards */}
        <div className="text-muted leading-relaxed mt-4 font-normal">
          {content}
        </div>
      </div>

      {/* Top accent highlight line */}
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-1 bg-yellow transform origin-left transition-transform duration-500 ease-out",
          isActive
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100 group-hover:opacity-50"
        )}
      />
    </div>
  );
};
