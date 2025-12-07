'use client';

import { useEffect, useRef, useState, RefObject } from 'react';

/**
 * Hook to detect if user prefers reduced motion
 * Used to disable animations for accessibility
 */
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
};

/**
 * Hook for scroll-triggered animations
 * Returns a ref to attach to the element and a boolean for visibility
 */
export const useScrollAnimation = (): { ref: RefObject<HTMLDivElement | null>; isVisible: boolean } => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return { ref, isVisible };
};

/**
 * Hook for in-view detection with customizable options
 */
export const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isInView) {
        setIsInView(true);
      }
    }, { threshold: 0.3, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInView, options]);

  return { ref, isInView };
};

/**
 * Hook for animated counting
 */
export const useCountAnimation = (end: number, duration: number = 2000, shouldAnimate: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldAnimate]);

  return count;
};
