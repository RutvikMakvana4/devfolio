"use client";

import { useCountUp } from "@/hooks/use-count-up";
import { stats, badges } from "@/lib/data";
import { Reveal } from "./reveal";

function Stat({ value, suffix, label }) {
  const [count, ref] = useCountUp(value);
  return (
    <div
      ref={ref}
      className="card-lift rounded-xl border border-border bg-card/50 p-4 text-center"
    >
      <p className="text-2xl font-bold tabular-nums sm:text-3xl">
        <span className="text-foreground">{count}</span>
        <span className="text-foreground">{suffix}</span>
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <Stat {...s} />
          </Reveal>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {badges.map((badge, i) => (
          <Reveal key={badge} delay={i * 60} as="span">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-foreground" />
              {badge}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
