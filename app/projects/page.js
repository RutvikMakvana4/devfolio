export default function Projects() {
  const projects = [
    {
      name: "Microservice Architecture",
      description: "Distributed system with service orchestration, message queues, and database sharding.",
    },
    {
      name: "AI Integration Platform",
      description: "Real-time AI model integration with prompt optimization and response caching.",
    },
    {
      name: "High-Performance API",
      description: "REST API with rate limiting, Redis caching, and database query optimization.",
    },
    {
      name: "Real-time Data Pipeline",
      description: "WebSocket-based streaming with RabbitMQ processing and PostgreSQL persistence.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Projects</h1>
        <p className="text-sm text-muted-foreground">Things I've built</p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.name} className="border-b border-border pb-6 last:border-0">
            <h3 className="font-semibold text-base mb-1">{project.name}</h3>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}