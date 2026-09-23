import React, { useState, useEffect, Children, cloneElement, isValidElement } from 'react';
import { useInView } from 'motion/react';

interface InteractiveBoxGroupProps {
  children: React.ReactNode;
  className?: string;
  autoPlayInterval?: number;
}

export const InteractiveBoxGroup: React.FC<InteractiveBoxGroupProps> = ({
  children,
  className = "",
  autoPlayInterval = 3000,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const childrenArray = Children.toArray(children).filter(isValidElement);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop || !isInView || isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % childrenArray.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isDesktop, isInView, isHovered, childrenArray.length, autoPlayInterval]);

  return (
    <div 
      ref={ref} 
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        // On desktop, we control the active state.
        // On mobile, we let the children manage their own state if we wanted, 
        // but it's cleaner to just control it entirely or let it fallback.
        // Wait, if it's mobile, we want them to act like normal accordions (multiple can be open).
        // If we force `isActive` on mobile, only one can be open. Actually, that's fine (accordion style).
        // Or we can only pass `isActive` if `isDesktop` is true.
        
        const childProps = isDesktop 
          ? {
              isActive: activeIndex === index,
              onToggle: () => setActiveIndex(index),
            }
          : {};

        return cloneElement(child, childProps as any);
      })}
    </div>
  );
};
