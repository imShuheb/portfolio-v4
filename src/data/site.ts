// Personal details, experience and toolbox. Edit here; pages read from this file.

export const site = {
  name: "Mohammed Shuheb",
  role: "Full Stack Developer",
  location: "Bengaluru, India",
  url: "https://imshuheb.in",
  email: " mshuheb8@gmail.com",
  github: "https://github.com/imShuheb",
  linkedin: "https://www.linkedin.com/in/imshuheb",
  resume: "/Mohammed_Shuheb.pdf",
  // resume: "/Mohammed_Shuheb_Resume.docx",
  description:
    "Full stack developer in Bengaluru building multi-tenant SaaS: React and Next.js frontends, Node.js microservices, and the Kubernetes pipeline that ships them.",
  previous: [
    { label: "v3", href: "https://v3.imshuheb.in" },
    { label: "v2", href: "https://v2.imshuheb.in" },
    { label: "v1", href: "https://v1.imshuheb.in" },
  ],
};

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Kandra Digitals",
    place: "Bengaluru, India",
    dates: "October 2022 – Present",
    summary:
      "Building and maintaining SkillDeck, a multi-tenant SaaS platform, across frontend, backend and infrastructure. I also lead a small team of engineers.",
    href: "/work/skilldeck",
  },
  {
    role: "XML Formatter",
    company: "Dataactor e-Publisher",
    place: "India",
    dates: "2021 – 2022",
    summary:
      "XML formatting and transformation for digital publishing: preparing, validating and laying out content for e-magazines.",
  },
];

// Toolbox shown as icon tiles. `icon` is a Simple Icons slug (simpleicons.org);
// leave it out to show a text badge instead.
export const toolbox = [
  {
    area: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Redux Toolkit", icon: "redux" },
      { name: "React Query", icon: "reactquery" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    area: "Backend",
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Express", icon: "express" },
      { name: "Fastify", icon: "fastify" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "JWT", icon: "jsonwebtokens" },
    ],
  },
  {
    area: "Data",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "RabbitMQ", icon: "rabbitmq" },
    ],
  },
  {
    area: "Cloud & DevOps",
    items: [
      { name: "AWS" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Helm", icon: "helm" },
      { name: "OpenTelemetry", icon: "opentelemetry" },
      { name: "Github Actions", icon: "githubactions" },
    ],
  },
  {
    area: "AI & LLMs",
    items: [
      { name: "Gemini", icon: "googlegemini" },
      { name: "OpenAI", icon: "openai" },
      { name: "Mistral", icon: "mistralai" },
      { name: "Groq" },
    ],
  },
];
