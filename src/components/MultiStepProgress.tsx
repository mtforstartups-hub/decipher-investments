import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface MultiStepProgressProps {
  currentStep: number;
  steps: { label: string }[];
}

export function MultiStepProgress({ currentStep, steps }: MultiStepProgressProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between relative">
        {/* Background Track */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 z-0"></div>
        
        {/* Active Track */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-[var(--color-decipher-yellow)] z-0 transition-all duration-500 ease-in-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div key={index} className="relative z-10 flex flex-col items-center">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: isActive || isCompleted ? '#d97706' : '#ffffff',
                  borderColor: isActive || isCompleted ? '#d97706' : '#e2e8f0',
                  color: isActive || isCompleted ? '#ffffff' : '#64748b',
                }}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-colors duration-300 shadow-2xs`}
              >
                {isCompleted ? <Check size={16} className="text-white" /> : stepNumber}
              </motion.div>
              <div className="absolute top-10 w-24 text-center">
                <span className={`text-xs font-semibold ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                  {step.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-8"></div> {/* Spacer for the absolute positioned labels */}
    </div>
  );
}
