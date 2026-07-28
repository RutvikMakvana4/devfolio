import { packageProjects } from "@/lib/data";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";

export const metadata = {
  title: "Packages",
  description: "Developer tools and packages published by Rutvik Makvana.",
};

export default function PackagesPage() {
  return (
    <div className="space-y-8">
      <Reveal className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wider text-foreground">
          Library
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">Packages</h1>
        <p className="text-sm text-muted-foreground">
          CLI tools and packages I&apos;ve published for other developers.
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {packageProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
