"use client";

import { useState, useEffect, useRef } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Counts from 0 to `target` once the element scrolls into view.
// Returns [displayValue, ref]. Attach ref to the element to observe.
export function useCountUp(target, { duration = 1400 } = {}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        let raf;
        let start;
        const tick = (now) => {
          if (start === undefined) start = now;
          const progress = Math.min((now - start) / duration, 1);
          // easeOutExpo for a snappy, premium settle
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setValue(Math.round(eased * target));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return [value, ref];
}
