"use client";

import { useRef } from "react";
import { LuGithub, LuExternalLink, LuStar } from "react-icons/lu";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }) {
  const ref = useRef(null);

  // Cursor-following spotlight
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
        "group card-lift relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5 sm:p-6",
      )}
    >
      {/* Spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--x) var(--y), rgba(0, 0, 0, 0.14), transparent 70%)",
        }}
      />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{project.name}</h3>

            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-border/30 bg-muted/20 px-2 py-0.5 text-[10px] font-medium">
                <LuStar className="size-2.5" />
                Featured
              </span>
            )}
          </div>

          {project.status && (
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-foreground" />
              {project.status}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.tech?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(project.github || project.demo) && (
          <div className="flex items-center gap-4 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <LuGithub className="size-3.5" />
                Code
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <LuExternalLink className="size-3.5" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
