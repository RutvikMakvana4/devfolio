"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Wraps content and fades/slides it in the first time it enters the viewport.
// `delay` staggers siblings; `as` lets you change the wrapper element.
export function Reveal({ children, className, delay = 0, as = "div", once = true }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Comp = as;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Comp
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}
