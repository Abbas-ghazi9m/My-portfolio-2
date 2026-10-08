export interface JourneyMilestone {
  year: string;
  phase: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  status: "Completed" | "Current Focus" | "Upcoming";
}

export const JOURNEY_DATA: JourneyMilestone[] = [
  {
    year: "2024",
    phase: "01 — Foundation",
    title: "Started B.Tech Journey & Core Systems",
    tagline: "Laying deep computational foundations",
    description:
      "Embarked on B.Tech in Computer Science and Engineering. Immersed in algorithms, object-oriented software engineering, foundational mathematics, and early hardware IoT experimentation with microcontrollers.",
    highlights: [
      "Mastered Data Structures & Algorithms in Java and Python",
      "Prototyped first IoT hardware safety beacon (HERGUARD genesis)",
      "Built initial web applications with modern JavaScript",
    ],
    status: "Completed",
  },
  {
    year: "2025",
    phase: "02 — Expansion",
    title: "Expanded Full-Stack & Systems Architecture",
    tagline: "Transitioning from code writer to product builder",
    description:
      "Scaled up development capabilities into production web frameworks, cross-platform mobile with Flutter, backend microservices, and smart contract development.",
    highlights: [
      "Built full-stack platforms using Next.js, Node.js, and Prisma",
      "Designed ImaanUp: mobile lifestyle gamification with offline-first caching",
      "Delved into Web3 & Solidity: built verifiable credential prototypes",
    ],
    status: "Completed",
  },
  {
    year: "2026",
    phase: "03 — Acceleration",
    title: "AI Engineering, Applied LLMs & Hackathon Builds",
    tagline: "Current Active Frontier: Deep AI + Real-World Impact",
    description:
      "Integrating cutting-edge Generative AI, RAG architectures, and agentic workflows into tangible software products. Leading hackathon builds and developing TRUSTX verification engine.",
    highlights: [
      "Architecting TRUSTX: multimodal AI + blockchain fraud mitigation",
      "Building production RAG pipelines with LangChain & vector stores",
      "Active participant and finalist in national hackathons including SIH",
    ],
    status: "Current Focus",
  },
  {
    year: "2027",
    phase: "04 — Horizon",
    title: "Advanced Projects, Industry Internships & Competitions",
    tagline: "Scaling systems, industrial application & venture exploration",
    description:
      "Targeting high-impact engineering internships, advancing AI agent research, contributing to major open-source initiatives, and refining technology products for commercial launch.",
    highlights: [
      "High-impact software & AI engineering internships",
      "Deploying scalable cloud AI architectures serving real users",
      "Venture prototype pitching and startup incubation",
    ],
    status: "Upcoming",
  },
  {
    year: "2028",
    phase: "05 — Graduation",
    title: "B.Tech Graduation & Future Founder Trajectory",
    tagline: "Stepping into the frontier as an AI Engineer & Founder",
    description:
      "Culmination of undergraduate engineering. Ready to launch ambitious technology ventures, lead AI product development, and build enduring products that shape the future.",
    highlights: [
      "Completion of B.Tech in Computer Science and Engineering",
      "Production launch of venture-backed or open AI systems",
      "Leading cross-functional engineering teams at scale",
    ],
    status: "Upcoming",
  },
];
