"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { LuX, LuCheck } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { MAX_DREAM_LENGTH } from "@/lib/dreamverse";

const initialForm = {
  displayName: "",
  anonymous: false,
  country: "",
  dream: "",
  wantToBecome: "",
  dreamDestination: "",
};

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/30";

export function ShareDreamModal({ open, onOpenChange, onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleOpenChange = (next) => {
    onOpenChange(next);
    if (!next) {
      // Reset shortly after close animation so the form doesn't visibly
      // flash back to empty while the dialog is still fading out.
      setTimeout(() => {
        setForm(initialForm);
        setError("");
        setSuccess(false);
      }, 200);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    try {
      onSubmit(form);
      setSuccess(true);
      setTimeout(() => handleOpenChange(false), 900);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  const remaining = MAX_DREAM_LENGTH - form.dream.length;

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2",
            "max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-background p-5 shadow-2xl sm:p-6",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=closed]:fade-out",
          )}
        >
          <div className="mb-4 flex items-center justify-between">
            <Dialog.Title className="text-lg font-semibold tracking-tight">
              Share Your Dream
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

          {success ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <span className="grid size-12 place-items-center rounded-full bg-foreground text-background">
                <LuCheck className="size-6" />
              </span>
              <p className="font-semibold">Your dream is out there now 🌙</p>
              <p className="text-sm text-muted-foreground">
                Thanks for sharing — someone out there needed to read this.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 sm:col-span-1">
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={form.displayName}
                    onChange={update("displayName")}
                    disabled={form.anonymous}
                    placeholder="Optional"
                    maxLength={40}
                    className={cn(inputClass, form.anonymous && "opacity-50")}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">
                    Country
                  </label>
                  <input
                    type="text"
                    value={form.country}
                    onChange={update("country")}
                    placeholder="Optional"
                    maxLength={56}
                    className={inputClass}
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 text-sm text-foreground">
                <input
                  type="checkbox"
                  checked={form.anonymous}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, anonymous: e.target.checked }))
                  }
                  className="size-4 rounded border-border accent-foreground"
                />
                Post anonymously
              </label>

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label className="block text-xs font-medium text-muted-foreground">
                    My Dream *
                  </label>
                  <span
                    className={cn(
                      "text-xs",
                      remaining < 0 ? "text-destructive" : "text-muted-foreground",
                    )}
                  >
                    {remaining}
                  </span>
                </div>
                <textarea
                  value={form.dream}
                  onChange={update("dream")}
                  placeholder="What is your biggest dream?"
                  rows={4}
                  className={cn(inputClass, "resize-none")}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 sm:col-span-1">
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">
                    Want to Become
                  </label>
                  <input
                    type="text"
                    value={form.wantToBecome}
                    onChange={update("wantToBecome")}
                    placeholder="Entrepreneur, Doctor, Artist..."
                    maxLength={60}
                    className={inputClass}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">
                    Dream Destination
                  </label>
                  <input
                    type="text"
                    value={form.dreamDestination}
                    onChange={update("dreamDestination")}
                    placeholder="Japan"
                    maxLength={56}
                    className={inputClass}
                  />
                </div>
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <button
                type="submit"
                className="w-full rounded-full bg-foreground py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Share Dream
              </button>
            </form>
          )}

          <VisuallyHidden.Root>
            <Dialog.Description>
              Share your dream anonymously or publicly with the DreamVerse community.
            </Dialog.Description>
          </VisuallyHidden.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
