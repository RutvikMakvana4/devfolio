import { skills } from "@/lib/data";
import { Reveal } from "./reveal";

export function Skills() {
  return (
    <div className="space-y-4">
      {Object.entries(skills).map(([category, items], ci) => (
        <Reveal
          key={category}
          delay={ci * 70}
          className="flex flex-col gap-2 border-b border-border/60 pb-4 last:border-0 last:pb-0 sm:flex-row sm:gap-6"
        >
          <p className="shrink-0 pt-1 text-sm font-semibold sm:w-28">
            {category}
          </p>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-transparent bg-muted/60 px-3 py-1 text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-border/40 hover:bg-muted/30 hover:text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
