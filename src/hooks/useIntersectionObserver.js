import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for Intersection Observer API
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Threshold for intersection (0-1)
 * @param {string} options.rootMargin - Root margin for intersection
 * @returns {Array} [ref, isIntersecting]
 */
export const useIntersectionObserver = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        if (isElementIntersecting && !hasIntersected) {
          setIsIntersecting(true);
          if (triggerOnce) {
            setHasIntersected(true);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(isElementIntersecting);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasIntersected]);

  return [elementRef, isIntersecting];
};

export default useIntersectionObserver;
