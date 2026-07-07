import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { Hero } from "@/components/site/hero";
import { Experience } from "@/components/site/experience";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { CopyEmail } from "@/components/site/copy-email";

export default function Home() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <Hero />

      <section className="space-y-4">
        <SectionHeading
          id="experience"
          eyebrow="Career"
          title="Work Experience"
          subtitle="Where I've worked, contributed, and shipped things that matter."
        />
        <Experience />
      </section>

      <section id="contact" className="scroll-mt-24 space-y-4">
        <Reveal className="card-lift relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-muted/40 blur-3xl"
          />
          <div className="relative space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold tracking-tight">
                Let&apos;s work together
              </h2>
              <p className="max-w-md text-sm text-muted-foreground">
                Have a project in mind or a role to fill? I&apos;m open to new
                opportunities and always happy to talk.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <CopyEmail className="rounded-full bg-foreground px-5 py-2.5 text-background hover:bg-muted/70" />
            </div>
            <p className="pt-1 text-sm text-muted-foreground">
              Or explore my{" "}
              <Link
                href="/projects"
                className="inline-flex items-center gap-0.5 font-medium text-foreground underline-offset-4 hover:underline"
              >
                projects
                <LuArrowRight className="size-3.5" />
              </Link>{" "}
              and{" "}
              <Link
                href="/blog"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                writing
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}