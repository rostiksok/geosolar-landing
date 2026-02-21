"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, inView].
 * inView becomes true once the element enters the viewport and stays true.
 * Uses rootMargin and an immediate rect check to fix Safari iOS issues.
 */
export function useInView(threshold = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Immediately check if element is already visible (fixes first-render on mobile)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el); // fire only once
        }
      },
      { threshold, rootMargin: "0px 0px -30px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}
