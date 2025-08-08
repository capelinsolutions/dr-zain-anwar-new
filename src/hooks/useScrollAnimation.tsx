
import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  elementRef?: React.RefObject<HTMLElement>;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const internalRef = useRef<HTMLDivElement>(null);

  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true, elementRef } = options;
  
  const refToUse = elementRef || internalRef;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && refToUse.current) {
            observer.unobserve(refToUse.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (refToUse.current) {
      observer.observe(refToUse.current);
    }

    return () => {
      if (refToUse.current) {
        observer.unobserve(refToUse.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, refToUse]);

  return { elementRef: refToUse, isVisible };
};

export default useScrollAnimation;
