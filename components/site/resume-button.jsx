"use client";

import { useState } from "react";
import { Dialog, VisuallyHidden } from "radix-ui";
import { LuFileText, LuExternalLink, LuEye, LuX } from "react-icons/lu";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

// Turns a Google Drive "view" link into an embeddable "preview" link when possible.
function toEmbedUrl(url) {
  const match = url.match(/\/file\/d\/([^/]+)/);
  if (match) return `https://drive.google.com/file/d/${match[1]}/preview`;
  return url;
}

export function ResumeButton() {
  const [open, setOpen] = useState(false);
  const embedUrl = toEmbedUrl(profile.resumeUrl);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* Primary — opens the resume in a new tab */}
      <a
        href={profile.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-xl px-6",
          "text-sm font-semibold text-background shadow-lg shadow-black/20",
          "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
        style={{
          backgroundColor: "var(--foreground)",
        }}
      >
        {/* sheen sweep on hover */}
        <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
        <LuFileText className="size-4" />
        Resume
        <LuExternalLink className="size-3.5 opacity-70" />
      </a>

      {/* Secondary — inline preview modal */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <LuEye className="size-4" />
        Preview
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] flex h-[85vh] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <Dialog.Title className="text-sm font-semibold">
                Resume — {profile.name}
              </Dialog.Title>
              <div className="flex items-center gap-1">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Open in new tab"
                >
                  <LuExternalLink className="size-4" />
                </a>
                <Dialog.Close
                  className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Close"
                >
                  <LuX className="size-4" />
                </Dialog.Close>
              </div>
            </div>
            <div className="min-h-0 flex-1 bg-muted/30">
              <iframe
                src={embedUrl}
                title="Resume preview"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
            <VisuallyHidden.Root>
              <Dialog.Description>PDF preview of the resume</Dialog.Description>
            </VisuallyHidden.Root>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
