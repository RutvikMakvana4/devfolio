"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LuGithub,
  LuLinkedin,
  LuTwitter,
  LuCopy,
  LuCheck,
  LuChevronDown,
  LuCode,
  LuLightbulb,
} from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { experiences, socialMedia, skills, email } from "@/lib/data";

const iconMap = {
  github: LuGithub,
  linkedin: LuLinkedin,
  twitter: LuTwitter,
  code: LuCode,
  lightbulb: LuLightbulb,
};

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [expandedId, setExpandedId] = useState("");

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <div className="space-y-5 sm:space-y-6">
      <section>
        <p className="text-base leading-relaxed">
          I'm <span className="font-semibold">Rutvik Makvana</span>, a backend
          and AI engineer. I build scalable systems and integrate AI into
          production applications.
        </p>
      </section>

      <section>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I've spent years building distributed systems, optimizing databases,
          and designing microservices. Now I'm focused on making AI integration
          practical and performant.
        </p>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Work Experience</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Where I've worked, contributed, and shipped things that matter.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="space-y-3">
              {/* Company Header */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-muted flex items-center justify-center text-xs font-semibold">
                    {exp.company[0]}
                  </div>
                  <p className="font-semibold text-base">{exp.company}</p>
                </div>
                <div className="text-sm text-muted-foreground text-right">
                  {exp.location}{" "}
                  {exp.isRemote && <span className="text-blue-500">•</span>}
                </div>
              </div>

              {/* Positions */}
              <div className="space-y-3 ml-9">
                {exp.positions.map((pos, idx) => {
                  const posId = `${exp.id}-${idx}`;
                  const isExpanded = expandedId === posId;
                  const Icon = iconMap[pos.icon];

                  return (
                    <div key={idx} className="space-y-2">
                      {/* Position Header */}
                      <button
                        onClick={() => toggleExpand(posId)}
                        className="w-full text-left flex items-start justify-between hover:opacity-70 transition-opacity"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-8 h-8 rounded border border-muted-foreground/30 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-sm">{pos.title}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {pos.type} · {pos.duration}
                            </p>
                          </div>
                        </div>
                        <LuChevronDown
                          className={`w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="space-y-3 ml-11 animate-in fade-in duration-200">
                          {/* Description */}
                          {pos.description.length > 0 && (
                            <ul className="space-y-2">
                              {pos.description.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                                >
                                  <span className="text-muted-foreground mt-1">
                                    •
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Technologies */}
                          {pos.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2">
                              {pos.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1.5 bg-muted/50 text-foreground text-xs rounded-full font-mono"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Skills</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Tools and technologies I work with, and keep reaching for.
          </p>
        </div>

        <div className="space-y-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex gap-6">
              <div className="min-w-28">
                <p className="text-sm font-semibold">{category}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted/50 text-foreground text-xs rounded-full hover:bg-muted transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Connect</h2>
        <div className="flex gap-3 flex-wrap">
          {socialMedia.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.title}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
                className="px-3 py-2 bg-muted rounded-lg text-sm hover:bg-muted/70 transition-colors inline-flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {social.title}
              </a>
            );
          })}
        </div>
      </section>

      <section className="border border-border rounded-lg p-4 sm:p-5 bg-muted/30">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div>
            <p className="text-sm font-medium">Let's work together</p>
            <p className="text-xs text-muted-foreground mt-1">
              Have a project in mind? Let's talk.
            </p>
          </div>
          <Button
            onClick={copyEmail}
            className="w-full sm:w-auto bg-foreground text-background hover:opacity-80"
          >
            {copied ? (
              <>
                <LuCheck className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <LuCopy className="w-4 h-4 mr-2" />
                Copy Email
              </>
            )}
          </Button>
        </div>
      </section>

      <section className="text-sm pt-2">
        <p>
          Check out my{" "}
          <Link
            href="/projects"
            className="underline hover:opacity-60 transition"
          >
            projects
          </Link>{" "}
          and read my{" "}
          <Link href="/blog" className="underline hover:opacity-60 transition">
            writing
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
