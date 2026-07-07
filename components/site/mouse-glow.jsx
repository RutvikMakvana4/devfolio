"use client";

import { useState, useEffect, useRef } from "react";

// Soft brand-tinted glow that follows the cursor. Desktop / fine-pointer only,
// disabled for reduced-motion users. Deliberately low-opacity to stay subtle.
export function MouseGlow() {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;
    setEnabled(true);

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          if (ref.current) {
            ref.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
          }
        });
      }
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden size-[600px] rounded-full opacity-[0.06] blur-[100px] md:block"
      style={{ background: "radial-gradient(circle, var(--brand), transparent 60%)" }}
    />
  );
}
