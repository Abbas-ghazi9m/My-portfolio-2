export type HackathonBadge =
  | "Finalist"
  | "Participant"
  | "Winner"
  | "Prototype"
  | "Under Development";

export interface HackathonEntry {
  id: string;
  hackathonName: string;
  year: string;
  project: string;
  technologies: string[];
  problemSolved: string;
  role: string;
  result: HackathonBadge;
  description: string;
  links?: {
    repo?: string;
    demo?: string;
  };
}

export const HACKATHONS_DATA: HackathonEntry[] = [
  {
    id: "sih-ai-initiative",
    hackathonName: "Smart India Hackathon (SIH) Initiative",
    year: "2025-2026",
    project: "Intelligent Public Document Verifier",
    technologies: ["Python", "FastAPI", "Vision LLM", "LangChain", "Vector DB"],
    problemSolved:
      "Automating anomaly detection and verification for high-volume government and academic credential submissions to prevent identity spoofing.",
    role: "Lead AI & Backend Architecture",
    result: "Finalist",
    description:
      "Engineered an automated document integrity pipeline combining OCR visual extraction and LLM semantic consistency checking, reducing manual verification time by 85%.",
    links: {
      repo: "https://github.com/mohammadabbas",
    },
  },
  {
    id: "hack-web3-trustx",
    hackathonName: "Decentralized Web & AI Hackathon",
    year: "2025",
    project: "TRUSTX",
    technologies: ["Generative AI", "Solidity", "Polygon", "Next.js", "TypeScript"],
    problemSolved:
      "Bridging generative AI fraud detection with immutable on-chain audit logs to solve trust verification in decentralized credentials.",
    role: "Full-Stack & Smart Contract Developer",
    result: "Participant",
    description:
      "Architected the initial MVP during a 36-hour sprint. Created zero-knowledge receipt verification hooks and connected Next.js frontend with EVM testnet.",
    links: {
      repo: "https://github.com/mohammadabbas/trustx-verification",
    },
  },
  {
    id: "edu-hack-skillchain",
    hackathonName: "EduTech Innovation Challenge",
    year: "2025",
    project: "SkillChain",
    technologies: ["Solidity", "IPFS", "React", "Node.js", "Tailwind CSS"],
    problemSolved:
      "Mitigating student credential counterfeiting by providing colleges with instant cryptographic Soulbound token issuance.",
    role: "Core Developer & Pitch Presenter",
    result: "Prototype",
    description:
      "Implemented prototype smart contracts for non-transferable achievement badges and built an interactive student skill radar showcase.",
    links: {
      repo: "https://github.com/mohammadabbas/skillchain-credentials",
    },
  },
  {
    id: "iot-safety-sprint",
    hackathonName: "Hardware & IoT Social Impact Sprint",
    year: "2024",
    project: "HERGUARD",
    technologies: ["ESP32", "C++", "GPS (NEO-6M)", "SIM800L", "Twilio API"],
    problemSolved:
      "Lack of standalone emergency distress triggers during rapid personal safety emergencies when smartphones are inaccessible.",
    role: "Firmware Developer & Hardware Prototyping",
    result: "Under Development",
    description:
      "Prototyped a physical panic beacon integrating microswitch debouncing with autonomous satellite coordinate extraction and cellular SMS broadcast.",
    links: {
      repo: "https://github.com/mohammadabbas/herguard-iot-safety",
    },
  },
];
