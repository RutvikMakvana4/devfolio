"use client";

import { useState, useEffect } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }) {
  const [theme, setTheme] = useState(null); // null until mounted → avoids mismatch

  useEffect(() => {
    const current = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      disabled={theme === null}
      className={cn(
        "relative grid size-8 place-items-center rounded-lg text-muted-foreground",
        "transition-colors hover:bg-muted hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50",
        "cursor-pointer disabled:cursor-default",
        className,
      )}
    >
      <LuSun
        className={cn(
          "absolute size-4 transition-all duration-300",
          theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0",
        )}
      />
      <LuMoon
        className={cn(
          "absolute size-4 transition-all duration-300",
          theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0",
        )}
      />
    </button>
  );
}
