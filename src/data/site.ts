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

export const toolbox = [
  {
    area: "Frontend",
    items: "React, Next.js, TypeScript, JavaScript, Redux Toolkit, React Query, Tailwind CSS",
  },
  {
    area: "Backend",
    items: "Node.js, NestJS, Express, Fastify, Python, FastAPI, REST APIs, JWT auth, RBAC",
  },
  {
    area: "AI & LLMs",
    items: "LLM API integration (Gemini, Mistral, Groq), prompt design, structured output, provider fallback and rate limiting",
  },
  {
    area: "Data",
    items: "PostgreSQL, MongoDB, Redis, RabbitMQ",
  },
  {
    area: "Cloud & DevOps",
    items: "AWS, Docker, Kubernetes, Helm, GitHub Actions, Jenkins, OpenTelemetry",
  },
];
