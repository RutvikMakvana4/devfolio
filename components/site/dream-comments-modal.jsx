"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { LuX, LuSend } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { formatDreamDate } from "@/lib/dreamverse";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/30";

export function DreamCommentsModal({ dream, open, onOpenChange, onAddComment }) {
  const [displayName, setDisplayName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleOpenChange = (next) => {
    onOpenChange(next);
    if (!next) {
      setTimeout(() => {
        setDisplayName("");
        setComment("");
        setError("");
      }, 200);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    try {
      onAddComment(dream.id, { displayName, comment });
      setDisplayName("");
      setComment("");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  const comments = dream?.comments || [];

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2",
            "flex max-h-[85vh] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=closed]:fade-out",
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Dialog.Title className="text-base font-semibold tracking-tight">
              Comments
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close"
                className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
              >
                <LuX className="size-4" />
              </button>
            </Dialog.Close>
          </div>

          {dream && (
            <p className="border-b border-border/60 bg-muted/20 px-5 py-3 text-sm italic leading-relaxed text-muted-foreground">
              &ldquo;{dream.dream}&rdquo;
            </p>
          )}

          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
            {comments.length === 0 ? (
              <p className="py-6 text-center text-sm text-muted-foreground">
                No comments yet. Be the first to encourage this dream.
              </p>
            ) : (
              comments.map((c) => (
                <div key={c.id} className="space-y-0.5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">
                      {c.displayName || "Anonymous"}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {formatDreamDate(c.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {c.comment}
                  </p>
                </div>
              ))
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-2 border-t border-border p-4"
          >
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Name (optional)"
              maxLength={40}
              className={inputClass}
            />
            <div className="flex items-end gap-2">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Leave an encouraging comment..."
                rows={1}
                className={cn(inputClass, "resize-none")}
              />
              <button
                type="submit"
                aria-label="Post comment"
                className="grid size-9 shrink-0 place-items-center rounded-lg bg-foreground text-background transition-opacity hover:opacity-90"
              >
                <LuSend className="size-4" />
              </button>
            </div>
            {error && <p className="text-xs text-destructive">{error}</p>}
          </form>

          <VisuallyHidden.Root>
            <Dialog.Description>
              View and add encouraging comments for this dream.
            </Dialog.Description>
          </VisuallyHidden.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
