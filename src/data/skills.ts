export type SkillCategory =
  | "AI / ML"
  | "Frontend"
  | "Backend"
  | "Languages"
  | "Other & Systems";

export type ProficiencyLevel =
  | "Core & Building"
  | "Proficient"
  | "Actively Exploring"
  | "Foundational";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: ProficiencyLevel;
  highlight?: string;
  iconName?: string;
  featured?: boolean;
}

export const SKILLS_DATA: SkillItem[] = [
  // AI / ML
  {
    name: "Generative AI",
    category: "AI / ML",
    level: "Core & Building",
    highlight: "Prompt chaining, multimodal vision-text pipelines & synthetic data",
    featured: true,
  },
  {
    name: "LLM Applications",
    category: "AI / ML",
    level: "Core & Building",
    highlight: "LangChain, function calling, evaluation benchmarks & prompt engineering",
    featured: true,
  },
  {
    name: "RAG Architectures",
    category: "AI / ML",
    level: "Core & Building",
    highlight: "Vector embeddings, hybrid retrieval, chunking strategies & semantic search",
    featured: true,
  },
  {
    name: "AI Agents",
    category: "AI / ML",
    level: "Actively Exploring",
    highlight: "Autonomous tool execution, ReAct loops & multi-agent orchestration",
    featured: true,
  },
  {
    name: "Computer Vision",
    category: "AI / ML",
    level: "Actively Exploring",
    highlight: "Document anomaly detection, OpenCV, image classification & OCR parsing",
    featured: false,
  },

  // Frontend
  {
    name: "React",
    category: "Frontend",
    level: "Core & Building",
    highlight: "Component lifecycle, state primitives, custom hooks & performance tuning",
    featured: true,
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Core & Building",
    highlight: "App Router, SSR/SSG, Turbopack, Server Actions & edge caching",
    featured: true,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Core & Building",
    highlight: "Responsive layouts, dark themes, design tokens & custom utility systems",
    featured: true,
  },
  {
    name: "Flutter",
    category: "Frontend",
    level: "Proficient",
    highlight: "Cross-platform mobile UI, state management, offline caches & haptics",
    featured: true,
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    level: "Core & Building",
    highlight: "Asynchronous runtime, Express microservices & REST APIs",
    featured: true,
  },
  {
    name: "APIs & Webhooks",
    category: "Backend",
    level: "Core & Building",
    highlight: "RESTful architecture, WebSockets, rate limiting & error boundaries",
    featured: true,
  },
  {
    name: "Firebase",
    category: "Backend",
    level: "Proficient",
    highlight: "Firestore real-time sync, Authentication, Cloud Functions & Security Rules",
    featured: false,
  },
  {
    name: "Prisma",
    category: "Backend",
    level: "Proficient",
    highlight: "Type-safe database ORM, schema migrations & PostgreSQL relations",
    featured: false,
  },

  // Languages
  {
    name: "Python",
    category: "Languages",
    level: "Core & Building",
    highlight: "FastAPI, PyTorch, LangChain, scripting & data manipulation",
    featured: true,
  },
  {
    name: "TypeScript",
    category: "Languages",
    level: "Core & Building",
    highlight: "Strict type systems, generics, interface modeling & modern ESNext",
    featured: true,
  },
  {
    name: "JavaScript",
    category: "Languages",
    level: "Core & Building",
    highlight: "Modern ES6+, async patterns, DOM manipulation & web APIs",
    featured: false,
  },
  {
    name: "Java",
    category: "Languages",
    level: "Foundational",
    highlight: "OOP principles, academic data structures & algorithms",
    featured: false,
  },
  {
    name: "Dart",
    category: "Languages",
    level: "Proficient",
    highlight: "Mobile application development, asynchronous streams & null safety",
    featured: false,
  },
  {
    name: "SQL",
    category: "Languages",
    level: "Proficient",
    highlight: "Relational queries, indexing, schema design & ACID transactions",
    featured: false,
  },

  // Other & Systems
  {
    name: "Git & GitHub",
    category: "Other & Systems",
    level: "Core & Building",
    highlight: "Version control, branching workflows, GitHub Actions CI/CD & collaboration",
    featured: true,
  },
  {
    name: "Blockchain",
    category: "Other & Systems",
    level: "Actively Exploring",
    highlight: "Solidity smart contracts, EVM mechanics, Ethers.js & token standards",
    featured: true,
  },
  {
    name: "IoT & Hardware",
    category: "Other & Systems",
    level: "Actively Exploring",
    highlight: "ESP32, microcontroller firmware, GPS/GSM cellular modules & sensors",
    featured: true,
  },
  {
    name: "Three.js",
    category: "Other & Systems",
    level: "Actively Exploring",
    highlight: "Interactive 3D viewports, shaders, particle systems & scene animation",
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  "AI / ML",
  "Frontend",
  "Backend",
  "Languages",
  "Other & Systems",
];
