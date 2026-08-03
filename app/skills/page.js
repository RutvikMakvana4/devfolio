import { SectionHeading } from "@/components/site/section-heading";
import Skills from "@/components/site/skills";

export default function SkillsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="space-y-4">
        <SectionHeading
          id="skills"
          eyebrow="Technical"
          title="Skills"
          subtitle="My core technology stack for backend and AI development."
        />
        <Skills />
      </section>
    </div>
  );
}
