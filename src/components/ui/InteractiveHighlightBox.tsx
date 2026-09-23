import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

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
  defaultOpen = false,
}) => {
  const [isActive, setIsActive] = useState(defaultOpen);

  return (
    <motion.button
      className={cn(
        "group w-full text-left p-8 md:p-10 border-2 transition-all duration-300 relative overflow-hidden",
        isActive 
          ? "border-yellow bg-offwhite shadow-sm" 
          : "border-border bg-white hover:border-yellow/50 hover:bg-offwhite/50 hover:shadow-sm",
        className
      )}
      onClick={() => setIsActive(!isActive)}
      layout
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4">
           <div>
             <h3 className="text-xl md:text-2xl font-display font-medium text-navy">{title}</h3>
             {subtitle && (
               <p className="text-muted text-sm mt-1 uppercase tracking-wider font-medium">{subtitle}</p>
             )}
           </div>
           
           <div className="flex items-center gap-4">
             {icon && (
               <div className={cn(
                 "transition-colors duration-300", 
                 isActive ? "text-yellow" : "text-navy group-hover:text-yellow/70"
               )}>
                 {icon}
               </div>
             )}
             
             {/* Indicator */}
             <div className={cn(
                "w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 flex-shrink-0",
                isActive 
                  ? "border-yellow bg-yellow text-charcoal" 
                  : "border-border bg-white text-navy group-hover:border-yellow/50 group-hover:bg-offwhite"
             )}>
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={cn("transition-transform duration-300", isActive && "rotate-45")}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
             </div>
           </div>
        </div>
        
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="text-muted leading-relaxed font-normal"
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};
