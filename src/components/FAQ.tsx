import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section } from './ui/Section';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  bg?: 'white' | 'offwhite' | 'navy';
}

export function FAQ({ items, title = "Frequently Asked Questions", bg = 'offwhite' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isDark = bg === 'navy';
  const textColor = isDark ? 'text-white' : 'text-navy';
  const mutedTextColor = isDark ? 'text-white/70' : 'text-muted';
  const borderColor = isDark ? 'border-white/10' : 'border-border';
  const activeIconColor = isDark ? 'text-yellow' : 'text-navy';

  return (
    <Section bg={bg}>
        <div className="max-w-4xl mx-auto">
          {title && (
            <h2 className={cn("text-3xl md:text-5xl font-display font-medium tracking-tight mb-16 text-center", textColor)}>
              {title}
            </h2>
          )}
          
          <div className="space-y-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={cn(
                    "border transition-all duration-300", 
                    borderColor,
                    isDark ? "bg-[#111c40]" : "bg-white",
                    isOpen && (isDark ? "border-yellow/30" : "border-navy shadow-sm")
                  )}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full py-6 px-8 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className={cn("text-lg md:text-xl font-medium pr-8", textColor)}>
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={cn("flex-shrink-0", isOpen ? activeIconColor : mutedTextColor)}
                    >
                      <ChevronDown className="w-6 h-6" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className={cn("pb-8 px-8 text-base md:text-lg leading-relaxed", mutedTextColor)}>
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
    </Section>
  );
}
