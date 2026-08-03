"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  LuSearch,
  LuHouse,
  LuFolderGit2,
  LuNotebookPen,
  LuFileText,
  LuMail,
  LuGithub,
  LuLinkedin,
  LuSun,
  LuCornerDownLeft,
  LuPackage2,
} from "react-icons/lu";
import { profile, email, socialMedia } from "@/lib/data";
import { cn } from "@/lib/utils";

const isBrowser = typeof window !== "undefined";

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listRef = useRef(null);

  const commands = useMemo(() => {
    const social = Object.fromEntries(socialMedia.map((s) => [s.icon, s.href]));
    return [
      { group: "Navigate", label: "Home", icon: LuHouse, run: () => router.push("/") },
      { group: "Navigate", label: "Projects", icon: LuFolderGit2, run: () => router.push("/projects") },
      { group: "Navigate", label: "Packages", icon: LuPackage2, run: () => router.push("/packages") },
      { group: "Navigate", label: "Blog", icon: LuNotebookPen, run: () => router.push("/blog") },
      {
        group: "Actions",
        label: "View Resume",
        icon: LuFileText,
        run: () => window.open(profile.resumeUrl, "_blank", "noopener,noreferrer"),
      },
      {
        group: "Actions",
        label: "Copy Email",
        icon: LuMail,
        run: () => navigator.clipboard?.writeText(email),
      },
      {
        group: "Actions",
        label: "Toggle Theme",
        icon: LuSun,
        run: () => {
          const dark = document.documentElement.classList.toggle("dark");
          try {
            localStorage.setItem("theme", dark ? "dark" : "light");
          } catch {}
        },
      },
      {
        group: "Social",
        label: "GitHub",
        icon: LuGithub,
        run: () => window.open(social.github, "_blank", "noopener,noreferrer"),
      },
      {
        group: "Social",
        label: "LinkedIn",
        icon: LuLinkedin,
        run: () => window.open(social.linkedin, "_blank", "noopener,noreferrer"),
      },
    ];
  }, [router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [commands, query]);

  // Global ⌘K / Ctrl+K shortcut
  useEffect(() => {
    if (!isBrowser) return;
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Reset transient state when opening
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const runAt = (index) => {
    const cmd = filtered[index];
    if (!cmd) return;
    setOpen(false);
    // let the dialog close before navigating/acting
    requestAnimationFrame(() => cmd.run());
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runAt(active);
    }
  };

  let renderedGroup = null;

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
        <Dialog.Content
          onKeyDown={onKeyDown}
          className={cn(
            "fixed left-1/2 top-[18%] z-[101] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2",
            "overflow-hidden rounded-xl border border-border bg-background/95 text-foreground shadow-2xl backdrop-blur-xl",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=closed]:fade-out",
          )}
        >
          <VisuallyHidden.Root>
            <Dialog.Title>Command palette</Dialog.Title>
          </VisuallyHidden.Root>

          <div className="flex items-center gap-2 border-b border-border px-3">
            <LuSearch className="size-4 shrink-0 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search…"
              className="w-full bg-transparent py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground sm:block">
              ESC
            </kbd>
          </div>

          <div ref={listRef} className="max-h-[320px] overflow-y-auto p-1.5">
            {filtered.length === 0 && (
              <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                No results found.
              </p>
            )}
            {filtered.map((cmd, i) => {
              const showGroup = cmd.group !== renderedGroup;
              renderedGroup = cmd.group;
              const Icon = cmd.icon;
              return (
                <div key={cmd.label}>
                  {showGroup && (
                    <p className="px-2.5 pb-1 pt-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      {cmd.group}
                    </p>
                  )}
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => runAt(i)}
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-colors",
                      i === active
                        ? "bg-muted/40 text-foreground"
                        : "text-foreground/80 hover:text-foreground",
                    )}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span className="flex-1">{cmd.label}</span>
                    {i === active && (
                      <LuCornerDownLeft className="size-3.5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
