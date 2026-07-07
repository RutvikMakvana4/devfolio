import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="relative space-y-5 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/40 blur-3xl"
        />
        <h1 className="text-foreground text-7xl font-bold tracking-tight">404</h1>
        <div className="space-y-1">
          <p className="text-lg font-medium">Page not found</p>
          <p className="text-sm text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex h-10 items-center rounded-xl border border-border bg-background px-5 text-sm font-medium transition-colors hover:bg-muted"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
