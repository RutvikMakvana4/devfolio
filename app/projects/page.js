import { ProjectTabs } from "@/components/site/project-tabs";
import { Reveal } from "@/components/site/reveal";

export const metadata = {
  title: "Projects",
  description: "Backend, systems, and AI projects built by Rutvik Makvana.",
};

export default function Projects() {
  return (
    <div className="space-y-8">
      <Reveal className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wider text-foreground">
          Portfolio
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="text-sm text-muted-foreground">
          A selection of systems I&apos;ve designed and shipped.
        </p>
      </Reveal>

      <ProjectTabs />
    </div>
  );
}
