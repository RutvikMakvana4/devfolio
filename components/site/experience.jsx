"use client";

import { useState } from "react";
import Image from "next/image";
import { LuChevronDown } from "react-icons/lu";
import { experiences } from "@/lib/data";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function Experience() {
  const [expandedId, setExpandedId] = useState("1-0"); // first item open by default

  const toggle = (id) => setExpandedId((cur) => (cur === id ? "" : id));

  return (
    <div className="relative space-y-6">
      {/* timeline rail */}
      <div className="absolute bottom-2 left-[15px] top-2 w-px bg-gradient-to-b from-foreground/30 via-border to-transparent" />

      {experiences.map((exp, ei) => (
        <Reveal key={exp.id} delay={ei * 90} className="relative pl-16 sm:pl-20">
          {/* node dot */}
          <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-border bg-white shadow-sm">
            <Image
              src={exp.logo}
              alt={exp.company}
              width={24}
              height={24}
              unoptimized
              className="h-6 w-6 rounded-sm object-contain"
            />
          </span>

          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <p className="font-semibold text-base sm:text-lg">{exp.company}</p>
            <span className="whitespace-nowrap text-xs text-muted-foreground">
              {exp.location}
              {exp.isRemote && <span className="ml-1 text-foreground">• Remote</span>}
            </span>
          </div>

          <div className="mt-3 space-y-2">
            {exp.positions.map((pos, idx) => {
              const posId = `${exp.id}-${idx}`;
              const isExpanded = expandedId === posId;
              return (
                <div
                  key={idx}
                  className={cn(
                    "card-lift overflow-hidden rounded-xl border border-border bg-card/50",
                    isExpanded && "border-border/60",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggle(posId)}
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                  >
                    <div>
                      <p className="text-sm font-semibold">{pos.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {pos.type} · {pos.duration}
                      </p>
                    </div>
                    <LuChevronDown
                      className={cn(
                        "size-4 shrink-0 text-muted-foreground transition-transform duration-300",
                        isExpanded && "rotate-180 text-foreground",
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-3 px-4 pb-4">
                        <ul className="space-y-2">
                          {pos.description.map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-foreground" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        {pos.technologies?.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {pos.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
