"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  {
    href: "https://www.npmjs.com/~rutvikmakvana",
    label: "Packages",
    external: true,
  },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true }),
    );
  };

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "border-b border-transparent bg-background/0",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-2xl items-center justify-between px-4 transition-all duration-300 sm:px-6",
            scrolled ? "py-2" : "py-3",
          )}
        >
          <Link
            href="/"
            className="group relative grid size-8 place-items-center rounded-lg font-semibold transition-colors"
          >
            <span className="text-foreground text-base">{profile.initials}</span>
            <span className="absolute inset-0 -z-10 rounded-lg bg-background transition-colors group-hover:bg-muted/40" />
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <div className="flex items-center rounded-full border border-border/60 bg-muted/30 p-0.5 text-sm">
              {links.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.external) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative rounded-full px-3 py-1 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3 py-1 transition-colors",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {active && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-background shadow-sm ring-1 ring-border/60" />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <button
              type="button"
              onClick={openPalette}
              aria-label="Open command palette"
              className="hidden items-center gap-1.5 rounded-lg border border-border/60 bg-muted/30 px-2 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              <kbd className="font-sans">⌘</kbd>
              <kbd className="font-sans">K</kbd>
            </button>

            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
