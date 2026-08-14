"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  {
    href: "https://www.npmjs.com/~rutvikmakvana",
    label: "Packages",
    external: true,
  },
  { href: "/blog", label: "Blogs" },
  { href: "/dreamverse", label: "DreamVerse" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
            "mx-auto flex max-w-5xl items-center justify-between px-6 transition-all duration-300 sm:px-8",
            scrolled ? "py-2" : "py-3",
          )}
        >
          <Link
            href="/"
            className="group relative grid size-8 place-items-center rounded-lg font-semibold transition-colors"
          >
            <span className="text-foreground text-base">
              {profile.initials}
            </span>
            <span className="absolute inset-0 -z-10 rounded-lg bg-background transition-colors group-hover:bg-muted/40" />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 sm:flex sm:gap-2">
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

          {/* Mobile controls */}
          <div className="flex items-center gap-1 sm:hidden">
            <ThemeToggle />
            <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="grid size-9 place-items-center rounded-lg border border-border/60 bg-muted/30 text-foreground transition-colors hover:bg-muted/60"
                >
                  <Menu className="size-4.5" />
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-[70] flex h-dvh w-full max-w-xs flex-col border-l border-border bg-background p-5 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
                  <VisuallyHidden.Root asChild>
                    <Dialog.Title>Navigation menu</Dialog.Title>
                  </VisuallyHidden.Root>

                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-muted-foreground">
                      Menu
                    </span>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Close menu"
                        className="grid size-9 place-items-center rounded-lg border border-border/60 bg-muted/30 text-foreground transition-colors hover:bg-muted/60"
                      >
                        <X className="size-4.5" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <nav className="flex flex-col gap-1">
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
                            className="rounded-lg px-3 py-2.5 text-xl font-semibold text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
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
                            "rounded-lg px-3 py-2.5 text-xl font-semibold transition-colors hover:bg-muted/40",
                            active
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground",
                          )}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </nav>

                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      openPalette();
                    }}
                    className="mt-auto flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Command palette
                    <span className="flex items-center gap-1">
                      <kbd className="font-sans">⌘</kbd>
                      <kbd className="font-sans">K</kbd>
                    </span>
                  </button>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </nav>
    </header>
  );
}
