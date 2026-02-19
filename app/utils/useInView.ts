"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, inView].
 * inView becomes true once the element enters the viewport and stays true.
 * @param threshold – 0–1, how much of the element must be visible (default 0.15)
 */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el); // fire only once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}
