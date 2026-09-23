import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  bg?: 'white' | 'offwhite' | 'navy';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  delay = 0,
  bg = 'white',
  ...props 
}) => {
  const bgColors = {
    white: 'bg-white',
    offwhite: 'bg-[var(--color-offwhite)]',
    navy: 'bg-navy text-white'
  };

  return (
    <section 
      className={cn("py-20 md:py-32 relative", bgColors[bg], className)} 
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
        className="w-full max-w-7xl mx-auto px-6 md:px-12"
      >
        {children}
      </motion.div>
    </section>
  );
};
