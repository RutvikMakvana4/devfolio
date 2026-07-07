export const profile = {
  name: "Rutvik Makvana",
  initials: "RM",
  role: "Backend & AI Engineer",
  // Rotating words shown in the hero headline
  roles: [
    "scalable backends",
    "AI integrations",
    "real-time systems",
    "RAG chatbots",
    "clean APIs",
  ],
  location: "Surat, India",
  available: true,
  availabilityLabel: "Available for work",
  // Swap this for your hosted resume link (Google Drive, Dropbox, etc.)
  resumeUrl: "https://drive.google.com/file/d/REPLACE_WITH_YOUR_RESUME_ID/view",
};

export const email = "rutvikmakvana432@gmail.com";

export const experiences = [
  {
    id: "1",
    company: "Dignizant Technologies LLP",
    logo: "https://dignizant.com/favicon.svg",
    location: "Surat, India",
    isRemote: false,
    positions: [
      {
        title: "Node.js Developer",
        icon: "code",
        type: "Full-time",
        duration: "Feb 2025 – Apr 2026 (1.2 yrs)",
        description: [
          "Migrated a property management platform from PHP to Node.js, reducing API latency by 30%.",
          "Built real-time features with WebSockets, SSE, RabbitMQ, and duplicate booking prevention.",
          "Developed a RAG chatbot using OpenAI APIs and vector search.",
        ],
        technologies: ["Node.js", "WebSockets", "RabbitMQ", "OpenAI", "PostgreSQL"],
      },
    ],
  },
  {
    id: "2",
    company: "iRoid Solutions",
    logo: "https://iroidsolutions.com/favicon.ico",
    location: "Surat, India",
    isRemote: false,
    positions: [
      {
        title: "Node.js Developer",
        icon: "code",
        type: "Full-time",
        duration: "Jul 2023 – Nov 2024 (1.3 yrs)",
        description: [
          "Built scalable REST APIs with JWT authentication and role-based access control.",
          "Integrated Stripe, SkipCash, Socket.io, WebSockets, and Firebase Cloud Messaging.",
          "Resolved production issues to improve API reliability and backend performance.",
        ],
        technologies: ["Node.js", "Express.js", "Stripe", "Socket.io", "Firebase"],
      },
    ],
  },
  {
    id: "3",
    company: "SolGuruz LLP",
    logo: "https://solguruz.com/favicon.png",
    location: "Ahmedabad, India",
    isRemote: false,
    positions: [
      {
        title: "Software Engineer",
        icon: "code",
        type: "Full-time",
        duration: "Oct 2022 – Jun 2023 (0.9 yrs)",
        description: [
          "Developed RESTful APIs using Node.js, Express.js, PostgreSQL, and Sequelize ORM.",
          "Transitioned from intern to full-time while building backend features and API integrations.",
        ],
        technologies: ["Node.js", "Express.js", "PostgreSQL", "Sequelize"],
      },
    ],
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "Node.js"],

  Frameworks: ["Express.js", "NestJS"],

  Databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma ORM"],

  Tools: [
    "Docker",
    "Docker Compose",
    "RabbitMQ",
    "AWS EC2",
    "AWS S3",
    "GitHub Actions",
    "GitLab CI/CD",
    "Swagger",
    "Postman",
  ],

  Backend: [
    "REST APIs",
    "Microservices",
    "JWT Authentication",
    "OAuth 2.0",
    "WebSockets",
    "Socket.io",
    "Server-Sent Events (SSE)",
    "Webhook Integrations",
  ],

  "AI & Tools": [
    "OpenAI API",
    "RAG Chatbots",
    "Embeddings",
    "Vector Search",
    "LLM Integrations",
    "Codex",
    "Cursor",
    "Claude AI",
  ],
};

// Short labels that orbit the hero. Kept intentionally small for a clean look.
export const orbitTech = [
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Docker",
  "OpenAI",
];

// Animated statistics. `value` counts up from 0; `suffix` is appended.
export const stats = [
  { label: "Years experience", value: 3, suffix: "+" },
  { label: "Projects shipped", value: 20, suffix: "+" },
  { label: "Technologies", value: 30, suffix: "+" },
  { label: "AI integrations", value: 6, suffix: "+" },
];

export const badges = [
  "Backend Specialist",
  "AI Enthusiast",
  "3+ Years Experience",
  "Immediate Joiner",
];

// Projects shown on /projects. `github`/`demo` render only when present.
export const projects = [
  {
    name: "Microservice Architecture",
    description:
      "Distributed system with service orchestration, message queues, and database sharding.",
    tech: ["Node.js", "RabbitMQ", "Docker", "PostgreSQL"],
    featured: true,
    status: "Production",
    github: "https://github.com/RutvikMakvana4",
    demo: "",
  },
  {
    name: "AI Integration Platform",
    description:
      "Real-time AI model integration with prompt optimization and response caching.",
    tech: ["OpenAI", "Redis", "Vector Search", "Node.js"],
    featured: true,
    status: "Production",
    github: "https://github.com/RutvikMakvana4",
    demo: "",
  },
  {
    name: "High-Performance API",
    description:
      "REST API with rate limiting, Redis caching, and database query optimization.",
    tech: ["Express.js", "Redis", "PostgreSQL", "JWT"],
    featured: false,
    status: "Live",
    github: "https://github.com/RutvikMakvana4",
    demo: "",
  },
  {
    name: "Real-time Data Pipeline",
    description:
      "WebSocket-based streaming with RabbitMQ processing and PostgreSQL persistence.",
    tech: ["WebSockets", "RabbitMQ", "PostgreSQL", "Node.js"],
    featured: false,
    status: "Live",
    github: "https://github.com/RutvikMakvana4",
    demo: "",
  },
];

export const socialMedia = [
  {
    title: "GitHub",
    href: "https://github.com/RutvikMakvana4",
    icon: "github",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/rutvik-makvana-b619b3214/",
    icon: "linkedin",
  },
  {
    title: "Twitter",
    href: "https://x.com/RutvikMakvana0",
    icon: "twitter",
  },
];
