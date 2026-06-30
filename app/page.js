"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LuGithub,
  LuLinkedin,
  LuTwitter,
  LuCopy,
  LuCheck,
} from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { experiences, socialMedia, skills, email } from "@/lib/data";

const iconMap = {
  github: LuGithub,
  linkedin: LuLinkedin,
  twitter: LuTwitter,
};

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Introduction */}
      <section>
        <p className="text-base leading-relaxed">
          I'm <span className="font-semibold">Rutvik Makvana</span>, a backend
          and AI engineer. I build scalable systems and integrate AI into
          production applications.
        </p>
      </section>

      {/* About */}
      <section>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I've spent years building distributed systems, optimizing databases,
          and designing microservices. Now I'm focused on making AI integration
          practical and performant.
        </p>
      </section>

      {/* Experience Section */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Work Experience</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Where I've worked, contributed, and shipped things that matter.
        </p>
        <div className="space-y-2">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{exp.title}</h3>
                  <p className="text-xs text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  {exp.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Skills</h2>
        <p className="text-sm text-muted-foreground">
          Tools and technologies I work with, and keep reaching for.
        </p>

        <div className="space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted text-foreground text-xs rounded-full border border-border hover:bg-muted/70 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connect Section */}
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

      {/* Email CTA */}
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

      {/* Projects & Blog Links */}
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
