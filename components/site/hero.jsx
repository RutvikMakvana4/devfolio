"use client";

import { useState, useEffect, useRef } from "react";
import { LuDownload } from "react-icons/lu";
import { profile } from "@/lib/data";

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const roles = profile.roles;

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      2600,
    );
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="inline-flex items-end gap-1">
      <span key={index} className="animate-word-in text-gradient whitespace-nowrap">
        {roles[index]}
      </span>
      <span className="caret ml-0.5 bg-foreground align-middle" style={{ height: "1em" }} />
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative">
      {/* animated background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="blob left-[-10%] top-[-20%] size-56 bg-muted/40" />
          <div
            className="blob right-[-5%] top-[10%] size-48 bg-muted/20"
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6 text-center md:text-left">
        {profile.available && (
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground/20 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-foreground" />
            </span>
            {profile.availabilityLabel}
          </span>
        )}

        <div className="space-y-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Hi, I&apos;m {profile.name}.
          </h1>
          <p className="text-xl font-semibold text-muted-foreground sm:text-2xl">
            I build <RotatingRole />
          </p>
        </div>
        <div className="animate-fade-in-up max-w-3xl" style={{ animationDelay: "0.15s" }}>
          <p className="text-base leading-relaxed text-muted-foreground">
            A backend and AI engineer focused on scalable systems, real-time
            APIs, and making AI integration practical and performant in
            production.
          </p>
        </div>

        <div className="flex justify-center pt-1 sm:justify-start">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            <LuDownload className="size-4" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}