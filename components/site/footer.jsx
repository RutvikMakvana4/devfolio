"use client";

import { LuGithub, LuLinkedin, LuArrowUp } from "react-icons/lu";
import { PiXLogo } from "react-icons/pi";
import { socialMedia, profile } from "@/lib/data";

const iconMap = {
  github: LuGithub,
  linkedin: LuLinkedin,
  x: PiXLogo,
};

export function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="mt-8">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>

          <div className="flex items-center gap-1">
            {socialMedia.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.title}
                  className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
            <button
              type="button"
              onClick={scrollTop}
              aria-label="Back to top"
              className="ml-1 grid size-8 place-items-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-border/80 hover:text-foreground"
            >
              <LuArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
