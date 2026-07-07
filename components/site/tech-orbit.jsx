import { profile, orbitTech } from "@/lib/data";
import { cn } from "@/lib/utils";

// Decorative orbit of tech labels around the initials. Each chip counter-rotates
// about its own center so the text stays upright while the system spins.
// Structure per chip (kept as 3 elements so `transform` is never overloaded):
//   positioner  → rotate(angle) translateY(-radius)   (places the anchor point)
//   centerer    → translate(-50%, -50%)               (centers chip on the point)
//   counter     → animation: spin reverse             (keeps the label upright)
export function TechOrbit({ className }) {
  const rings = [
    { items: orbitTech.slice(0, 3), radius: 96, duration: 26, reverse: false },
    { items: orbitTech.slice(3), radius: 140, duration: 38, reverse: true },
  ];

  return (
    <div
      aria-hidden
      className={cn(
        "relative mx-auto aspect-square w-[300px] max-w-full select-none",
        className,
      )}
    >
      <div className="absolute inset-8 rounded-full bg-muted/40 blur-2xl" />

      {rings.map((ring, i) => (
        <div
          key={`guide-${i}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border/60"
          style={{ width: ring.radius * 2, height: ring.radius * 2 }}
        />
      ))}

      <div className="absolute left-1/2 top-1/2 z-10 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-border bg-card shadow-lg">
        <span className="text-gradient text-2xl font-bold">
          {profile.initials}
        </span>
      </div>

      {rings.map((ring, ri) => (
        <div
          key={`ring-${ri}`}
          className="absolute inset-0"
          style={{
            animation: `spin-orbit ${ring.duration}s linear infinite`,
            animationDirection: ring.reverse ? "reverse" : "normal",
          }}
        >
          {ring.items.map((tech, i) => {
            // Position via trig (no static rotation) so the counter-spin alone
            // keeps the label upright. Center of the 300px box is 150,150.
            const theta = (2 * Math.PI * i) / ring.items.length - Math.PI / 2;
            const left = 150 + ring.radius * Math.cos(theta);
            const top = 150 + ring.radius * Math.sin(theta);
            return (
              <div
                key={tech}
                className="absolute"
                style={{ left: `${left}px`, top: `${top}px` }}
              >
                <div style={{ transform: "translate(-50%, -50%)" }}>
                  <div
                    style={{
                      animation: `spin-orbit ${ring.duration}s linear infinite`,
                      animationDirection: ring.reverse ? "normal" : "reverse",
                    }}
                  >
                    <span className="block whitespace-nowrap rounded-full border border-border bg-card/90 px-2.5 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
                      {tech}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
