import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

// Consistent section header + anchor target used across the home page.
export function SectionHeading({ id, eyebrow, title, subtitle, className }) {
  return (
    <Reveal className={cn("space-y-1", className)}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-wider text-foreground">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="scroll-mt-24 text-xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      )}
    </Reveal>
  );
}
