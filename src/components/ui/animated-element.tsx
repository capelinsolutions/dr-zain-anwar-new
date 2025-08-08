
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'slide-up';
  delay?: number;
  duration?: string;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedElement = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  duration = '0.6s',
  threshold = 0.1,
  as = 'div'
}: AnimatedElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useScrollAnimation({ threshold, elementRef });

  const componentProps = {
    ref: elementRef,
    className: cn(
      'transition-all duration-700 ease-out',
      isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : 'opacity-0',
      !isVisible && animation === 'fade-in' && 'translate-y-5',
      !isVisible && animation === 'fade-in-left' && '-translate-x-5',
      !isVisible && animation === 'fade-in-right' && 'translate-x-5',
      !isVisible && animation === 'scale-in' && 'scale-95',
      !isVisible && animation === 'slide-up' && 'translate-y-8',
      className
    ),
    style: {
      transitionDelay: `${delay}ms`,
      transitionDuration: duration,
    },
    children
  };

  // Use React.createElement to avoid complex union type issues
  return React.createElement(as, componentProps);
};

export default AnimatedElement;
