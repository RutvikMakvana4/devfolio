"use client";

import { useState } from "react";
import { clientProjects, personalProjects } from "@/lib/data";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

const tabs = [
  { key: "personal", label: "Personal", items: personalProjects },
  { key: "client", label: "Client Work", items: clientProjects },
];

export function ProjectTabs() {
  const [activeTab, setActiveTab] = useState("personal");

  const activeItems = tabs.find((tab) => tab.key === activeTab)?.items ?? personalProjects;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm transition-colors",
                active
                  ? "border-foreground/20 bg-foreground text-background"
                  : "border-border/60 bg-background/70 text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        {activeItems.map((project, i) => (
          <Reveal key={project.name} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
