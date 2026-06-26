export default function Blog() {
  const posts = [
    "Building Scalable Microservices with Node.js",
    "PostgreSQL Query Optimization Techniques",
    "Integrating AI Models in Production Systems",
    "Real-time Communication with WebSockets",
    "Docker & Kubernetes for Backend Engineers",
    "Designing for Scale: Database Sharding Strategies",
    "Message Queues and Event-Driven Architecture",
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Writing</h1>
        <p className="text-sm text-muted-foreground">My thoughts on backend, systems, and AI</p>
      </div>

      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post} className="text-sm border-b border-border pb-3 last:border-0">
            <a href="#" className="hover:opacity-60 transition">
              {post}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}