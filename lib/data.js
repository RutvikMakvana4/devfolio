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
  // Local resume file for Download CV and resume preview.
  resumeUrl: "/Rutvik_Makvana_Resume.pdf",
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
        technologies: [
          "Node.js",
          "WebSockets",
          "RabbitMQ",
          "OpenAI",
          "PostgreSQL",
        ],
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
        technologies: [
          "Node.js",
          "Express.js",
          "Stripe",
          "Socket.io",
          "Firebase",
        ],
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

// Projects shown on /projects. Using the portfolio data supplied for the project cards.
export const personalProjects = [
  {
    name: "AI Agent Kit",
    description:
      "A polished starter kit for building and demoing AI agents with a modern frontend experience.",
    websiteLink: "https://agentkit-frontend.vercel.app/",
    image: "/projects/agentkit.png",
  },
  {
    name: "Result Management System",
    description: "Web app for managing college results.",
    image: "/projects/result.png",
    websiteLink: "https://college-results.onrender.com/",
  },
];

export const clientProjects = [
  {
    name: "iKonic - Be a College Celeb",
    description: "The premier social networking app for college students.",
    image: "/projects/ikonic.png",
    appStoreLink:
      "https://apps.apple.com/us/app/ikonic-be-a-college-celeb/id6476899868",
  },
  {
    name: "Unlimited NOW",
    description:
      "Action-focused companion for mindfulness, affirmations, daily inspiration, and goal tracking.",
    image: "/projects/unlimitedNow.png",
    appStoreLink:
      "https://play.google.com/store/apps/details?id=com.mobile.kick_fear_in_the_butt&hl=en&pli=1",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.mobile.kick_fear_in_the_butt&hl=en",
  },
  {
    name: "Harage - Refurbished App",
    description:
      "A dynamic eCommerce platform where users can seamlessly buy and sell items.",
    image: "/projects/harage.png",
  },
  {
    name: "Towy - Car Service App",
    description:
      "Comprehensive Car Service App with Customer and Admin Management.",
    image: "/projects/towy.png",
  },
  {
    name: "Celleey",
    description:
      "An E-commerce app for electronics, Celleey offers unlimited cash back rewards on every purchase.",
    image: "/projects/celleey.png",
    appStoreLink:
      "https://apps.apple.com/us/app/celleey-get-cash-back-rewards/id6468869821",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.mobile.kick_fear_in_the_butt&hl=en&pli=1",
  },
];

export const packageProjects = [
  {
    name: "backend-launcher CLI",
    description:
      "An npm package for rapidly scaffolding and launching backend projects from the terminal.",
    websiteLink:
      "https://www.npmjs.com/package/@rutvikmakvana/backend-launcher",
    featured: true,
  },
];

export const projects = [...personalProjects, ...clientProjects];

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
    title: "X",
    href: "https://x.com/rutvikmakvana",
    icon: "x",
  },
];
