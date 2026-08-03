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
      { name: "Express.js", icon: TerminalSquare, color: "#FFFFFF" },
      { name: "NestJS", icon: TerminalSquare, color: "#E0234E" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
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
      { name: "WebSockets", icon: TerminalSquare, color: "#FFFFFF" },
      { name: "Socket.io", icon: TerminalSquare, color: "#FFFFFF" },
      { name: "Server-Sent Events", icon: TerminalSquare, color: "#FFFFFF" },
    ],
  },
  {
    title: "API Development",
    skills: [
      { name: "REST APIs", icon: TerminalSquare, color: "#FFFFFF" },
      { name: "Swagger / OpenAPI", icon: TerminalSquare, color: "#85EA2D" },
      { name: "JWT", icon: TerminalSquare, color: "#FFFFFF" },
      { name: "OAuth 2.0", icon: TerminalSquare, color: "#4285F4" },
      { name: "Webhooks", icon: TerminalSquare, color: "#FFFFFF" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Docker Compose", icon: SiDocker, color: "#2496ED" },
      { name: "AWS EC2", icon: FaAws, color: "#FF9900" },
      { name: "AWS S3", icon: FaAws, color: "#FF9900" },
      { name: "GitHub Actions", icon: SiGit, color: "#FFFFFF" },
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
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGit, color: "#FFFFFF" },
      { name: "GitLab", icon: SiGit, color: "#FC6D26" },
      { name: "Postman", icon: TerminalSquare, color: "#FF6C37" },
      { name: "VS Code", icon: TerminalSquare, color: "#007ACC" },
    ],
  },
];

function SkillPill({ name, icon: Icon, color }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:border-white/20 hover:bg-white/[0.06]">
      <Icon className="h-4 w-4 shrink-0" style={{ color }} />
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0d0d0d] p-8 text-white shadow-2xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <TerminalSquare className="h-5 w-5 text-white" />
        </div>

        <h2 className="text-xl font-bold tracking-tight">SKILLS</h2>
      </div>

      <p className="mb-8 text-white/50">
        The tools I rely on to build scalable, production-ready applications.
      </p>

      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
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
