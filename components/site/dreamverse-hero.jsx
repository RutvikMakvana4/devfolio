import { LuSparkles } from "react-icons/lu";

export function DreamverseHero({ onShareClick }) {
  return (
    <section className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blob left-[-10%] top-[-20%] size-56 bg-muted/40" />
        <div className="blob right-[-5%] top-[10%] size-48 bg-muted/20" />
      </div>

      <div className="mx-auto w-full max-w-2xl space-y-4 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium">
          <LuSparkles className="size-3" />
          DreamVerse
        </span>

        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Share your dream.
          <br />
          Inspire someone you&apos;ve never met.
        </h1>

        <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          Read dreams from people around the world, encourage them, and share
          your own.
        </p>

        <div className="flex justify-center pt-1">
          <button
            type="button"
            onClick={onShareClick}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Share Your Dream
          </button>
        </div>
      </div>
    </section>
  );
}
