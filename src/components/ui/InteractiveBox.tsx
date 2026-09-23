import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveBoxProps {
  title: string;
  subtitle?: string;
  content: string;
  icon?: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  isActive?: boolean;
  onToggle?: () => void;
}

export const InteractiveBox: React.FC<InteractiveBoxProps> = ({
  title,
  subtitle,
  content,
  icon,
  className,
  defaultOpen = false,
  isActive: controlledIsActive,
  onToggle,
}) => {
  const [localIsActive, setLocalIsActive] = useState(defaultOpen);

  const isControlled = controlledIsActive !== undefined;
  const isActive = isControlled ? controlledIsActive : localIsActive;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    }
    if (!isControlled) {
      setLocalIsActive(!localIsActive);
    }
  };

  return (
    <motion.button
      className={cn(
        "group w-full text-left p-8 md:p-10 border transition-all duration-300 relative overflow-hidden bg-white",
        isActive 
          ? "border-navy bg-offwhite shadow-sm" 
          : "border-border hover:border-navy hover:shadow-sm",
        className
      )}
      onClick={handleToggle}
      layout
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 mb-4">
           <div>
             <h3 className="text-xl md:text-2xl font-display font-medium text-navy">{title}</h3>
             {subtitle && (
               <p className="text-muted text-sm mt-1 uppercase tracking-wider font-medium">{subtitle}</p>
             )}
           </div>
           {icon && (
             <div className={cn("text-navy transition-transform duration-300", isActive && "text-yellow transform -translate-y-1")}>
               {icon}
             </div>
           )}
        </div>
        
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="text-muted leading-relaxed"
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Active accent line */}
      <div className={cn(
        "absolute top-0 left-0 w-full h-1 bg-yellow transform origin-left transition-transform duration-300 ease-out",
        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:opacity-50"
      )} />
    </motion.button>
  );
};
