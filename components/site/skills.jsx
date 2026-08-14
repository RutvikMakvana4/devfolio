"use client";

import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiClaude,
  SiOpenai,
  SiGooglegemini,
  SiGithubcopilot,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";
import { TerminalSquare, Bot } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: TerminalSquare },
      { name: "NestJS", icon: TerminalSquare, color: "#E0234E" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiMysql, color: "#336791" },
      { name: "MongoDB", icon: TerminalSquare, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: TerminalSquare, color: "#DC382D" },
    ],
  },
  {
    title: "Messaging & Real-Time",
    skills: [
      { name: "RabbitMQ", icon: TerminalSquare, color: "#FF6600" },
      { name: "WebSockets", icon: TerminalSquare },
      { name: "Socket.io", icon: TerminalSquare },
      { name: "Server-Sent Events", icon: TerminalSquare },
    ],
  },
  {
    title: "API Development",
    skills: [
      { name: "REST APIs", icon: TerminalSquare },
      { name: "Swagger / OpenAPI", icon: TerminalSquare, color: "#85EA2D" },
      { name: "JWT", icon: TerminalSquare },
      { name: "OAuth 2.0", icon: TerminalSquare, color: "#4285F4" },
      { name: "Webhooks", icon: TerminalSquare },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Docker Compose", icon: SiDocker, color: "#2496ED" },
      { name: "AWS EC2", icon: FaAws, color: "#FF9900" },
      { name: "AWS S3", icon: FaAws, color: "#FF9900" },
      { name: "GitHub Actions", icon: SiGit },
      { name: "GitLab CI/CD", icon: SiGit, color: "#FC6D26" },
    ],
  },
  {
    title: "AI Integrations",
    skills: [
      { name: "OpenAI API", icon: Bot, color: "#10A37F" },
      { name: "RAG", icon: Bot, color: "#10A37F" },
      { name: "Embeddings", icon: Bot, color: "#10A37F" },
      { name: "Vector Search", icon: Bot, color: "#10A37F" },
      { name: "AI Agent Development", icon: Bot, color: "#10A37F" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGit, color: "#181717" },
      { name: "GitLab", icon: SiGit, color: "#FC6D26" },
      { name: "Postman", icon: TerminalSquare, color: "#FF6C37" },
      { name: "VS Code", icon: TerminalSquare, color: "#007ACC" },
      { name: "Cursor", icon: TerminalSquare, color: "#000000" },
      { name: "Claude", icon: SiClaude, color: "#D97757" },
      { name: "ChatGPT", icon: SiOpenai, color: "#10A37F" },
      { name: "Gemini", icon: SiGooglegemini, color: "#4285F4" },
      { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#000000" },
    ],
  },
];

function SkillPill({ name, icon: Icon, color }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground/90 transition-colors hover:border-foreground/20 hover:bg-muted/70">
      <Icon
        className="h-3.5 w-3.5 shrink-0 text-foreground/70"
        style={color ? { color } : undefined}
      />
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section className="w-full max-w-2xl rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-sm sm:p-5">
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted/40">
          <TerminalSquare className="h-4 w-4 text-foreground" />
        </div>

        <h2 className="text-base font-bold tracking-tight">SKILLS</h2>
      </div>

      <p className="mb-4 text-xs text-muted-foreground sm:text-sm">
        The tools I rely on to build scalable, production-ready applications.
      </p>

      <div className="space-y-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <SkillPill key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
