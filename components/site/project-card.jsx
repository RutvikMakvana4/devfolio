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
        "group card-lift relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card/80 via-card/70 to-background/90 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-foreground/10 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]",
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

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {project.image && (
          <div className="flex-shrink-0 overflow-hidden rounded-2xl border border-border/50 bg-muted/20 sm:w-64">
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        )}

        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              {project.label && (
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {project.label}
                </p>
              )}

              <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
            </div>

            {project.featured && (
              <span className="hidden items-center gap-1 rounded-full border border-border/40 bg-muted/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:inline-flex">
                <LuStar className="size-2.5" />
                Featured
              </span>
            )}
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {((project.websiteLink || project.website) || (project.github || project.githubLink || project.repoLink)) && (
              <>
                {(project.websiteLink || project.website) && (
                  <a
                    href={project.websiteLink || project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-sm text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-foreground hover:text-background"
                  >
                    <FaGlobe className="size-3" />
                    <span>{project.websiteLabel || "Website"}</span>
                  </a>
                )}

                {(project.github || project.githubLink || project.repoLink) && (() => {
                  const href = project.github || project.githubLink || project.repoLink;
                  const extractRepo = (url) => {
                    try {
                      const u = new URL(url);
                      const parts = u.pathname.split("/").filter(Boolean);
                      if (parts.length >= 2) return `${parts[0]}/${parts[1]}`;
                      return project.repoLabel || project.githubLabel || "Source";
                    } catch (e) {
                      return project.repoLabel || project.githubLabel || "Source";
                    }
                  };

                  const repoLabel = extractRepo(href);

                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-sm text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-foreground hover:text-background"
                    >
                      <LuGithub className="size-3" />
                      <span className="flex items-center gap-2">
                        <span>{project.repoLabel || repoLabel}</span>
                        {typeof project.githubStars === "number" && (
                          <span className="inline-flex items-center gap-1 rounded-md bg-muted/20 px-2 py-0.5 text-xs">{project.githubStars} <LuStar className="size-3" /></span>
                        )}
                      </span>
                    </a>
                  );
                })()}
              </>
            )}

            {(project.appStoreLink || project.appStore) && (
              <a
                href={project.appStoreLink || project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-sm text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-foreground hover:text-background"
              >
                <FaApple className="size-3" />
                <span>App Store</span>
              </a>
            )}

            {(project.playStoreLink || project.playStore) && (
              <a
                href={project.playStoreLink || project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-sm text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-foreground hover:text-background"
              >
                <FaGooglePlay className="size-3" />
                <span>Google Play</span>
              </a>
            )}

            {(project.demo || project.demoLink) && (
              <a
                href={project.demo || project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-sm text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-foreground hover:text-background"
              >
                <LuExternalLink className="size-3" />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
