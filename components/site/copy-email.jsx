"use client";

import { useState } from "react";
import { LuCopy, LuCheck } from "react-icons/lu";
import { email } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CopyEmail({ className, variant = "outline" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy email ${email}`}
      className={cn(
        "group inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium transition-all",
        variant === "outline" &&
          "border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground",
        variant === "ghost" && "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      <span className="relative grid size-4 place-items-center">
        <LuCheck
          className={cn(
            "absolute size-4 text-foreground transition-all duration-300",
            copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
          )}
        />
        <LuCopy
          className={cn(
            "absolute size-4 transition-all duration-300",
            copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
          )}
        />
      </span>
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
