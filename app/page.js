export default function Home() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-base leading-relaxed">
          I'm <span className="font-semibold">Rutvik Makvana</span>, a backend and AI engineer. 
          I build scalable systems and integrate AI into production applications.
        </p>
      </section>

      <section>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I've spent years building distributed systems, optimizing databases, and designing 
          microservices. Now I'm focused on making AI integration practical and performant.
        </p>
      </section>

      <section className="text-sm">
        <p className="text-muted-foreground mb-2">
          <span className="font-semibold">Expertise:</span> Node.js, Express.js, TypeScript, 
          Microservices, PostgreSQL, MongoDB, Prisma ORM, Redis, RabbitMQ, Docker, AWS, 
          WebSockets, AI Integrations
        </p>
      </section>

      <section className="text-sm pt-2">
        <p>
          Check out my <a href="/projects" className="underline hover:opacity-60 transition">projects</a> and 
          read my <a href="/blog" className="underline hover:opacity-60 transition">writing</a>.
        </p>
      </section>
    </div>
  );
}