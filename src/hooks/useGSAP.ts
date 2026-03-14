"use client";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useFadeInUp(options?: { delay?: number; duration?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { delay = 0, duration = 0.8, y = 40 } = options || {};

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => ctx.revert();
  }, [delay, duration, y]);

  return ref;
}

export function useStaggerIn(options?: { stagger?: number; duration?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { stagger = 0.1, duration = 0.6, y = 30 } = options || {};

  useEffect(() => {
    if (!ref.current) return;
    const children = ref.current.children;
    if (!children.length) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => ctx.revert();
  }, [stagger, duration, y]);

  return ref;
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, [speed]);

  return ref;
}
