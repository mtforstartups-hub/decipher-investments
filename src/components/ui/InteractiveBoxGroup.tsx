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
  const [isHovered, setIsHovered] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const childrenArray = Children.toArray(children).filter(isValidElement);

  useEffect(() => {
    if (!isInView || isHovered || childrenArray.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % childrenArray.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isInView, isHovered, childrenArray.length, autoPlayInterval]);

  return (
    <div 
      ref={ref} 
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        return cloneElement(child, {
          isActive: activeIndex === index,
          onMouseEnter: () => setActiveIndex(index),
          onClick: () => setActiveIndex(index),
        } as any);
      })}
    </div>
  );
};


