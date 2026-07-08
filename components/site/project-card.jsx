"use client";

import { useRef } from "react";
import { FaApple, FaGlobe, FaGooglePlay } from "react-icons/fa";
import { LuExternalLink, LuGithub, LuStar } from "react-icons/lu";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group card-lift relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card/80 via-card/70 to-background/90 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-foreground/10 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] sm:p-6",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--x) var(--y), rgba(0,0,0,0.12), transparent 72%)",
        }}
      />

      <div className="relative space-y-4">
        {project.image && (
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-muted/20">
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        )}

        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold tracking-tight">{project.name}</h3>

              {project.featured && (
                <span className="inline-flex items-center gap-1 rounded-full border border-border/40 bg-muted/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  <LuStar className="size-2.5" />
                  Featured
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {(project.websiteLink ||
          project.website ||
          project.appStoreLink ||
          project.appStore ||
          project.playStoreLink ||
          project.playStore ||
          project.github ||
          project.githubLink ||
          project.demo ||
          project.demoLink) && (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {(project.websiteLink || project.website) && (
              <a
                href={project.websiteLink || project.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} website`}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/70 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-foreground hover:text-background"
              >
                <FaGlobe className="size-3.5" />
              </a>
            )}

            {(project.appStoreLink || project.appStore) && (
              <a
                href={project.appStoreLink || project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} on the App Store`}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/70 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-foreground hover:text-background"
              >
                <FaApple className="size-3.5" />
              </a>
            )}

            {(project.playStoreLink || project.playStore) && (
              <a
                href={project.playStoreLink || project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} on Google Play`}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/70 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-foreground hover:text-background"
              >
                <FaGooglePlay className="size-3.5" />
              </a>
            )}

            {(project.github || project.githubLink) && (
              <a
                href={project.github || project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} source code`}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/70 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-foreground hover:text-background"
              >
                <LuGithub className="size-3.5" />
              </a>
            )}

            {(project.demo || project.demoLink) && (
              <a
                href={project.demo || project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} live demo`}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/70 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-foreground hover:text-background"
              >
                <LuExternalLink className="size-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
