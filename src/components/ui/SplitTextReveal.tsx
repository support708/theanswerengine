"use client";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SplitTextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "chars" | "words" | "lines";
  duration?: number;
  stagger?: number;
  className?: string;
}

export default function SplitTextReveal({
  text,
  as: Tag = "p",
  splitBy = "words",
  duration = 0.6,
  stagger = 0.03,
  className = "",
}: SplitTextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let parts: string[];

    if (splitBy === "chars") {
      parts = text.split("");
    } else if (splitBy === "words") {
      parts = text.split(" ");
    } else {
      parts = text.split("\n");
    }

    element.innerHTML = parts
      .map((part) => {
        const display = splitBy === "words" ? part + " " : part;
        return `<span style="display:inline-block;overflow:hidden"><span class="split-item" style="display:inline-block">${display}</span></span>`;
      })
      .join("");

    const items = element.querySelectorAll(".split-item");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ctx.revert();
      element.textContent = text;
    };
  }, [text, splitBy, duration, stagger]);

  return <Tag ref={ref as any} className={className}>{text}</Tag>;
}
