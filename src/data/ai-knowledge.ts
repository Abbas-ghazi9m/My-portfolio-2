import { PROFILE_DATA } from "./profile";

export interface KnowledgeItem {
  keywords: string[];
  intent: string;
  answer: string;
  suggestedFollowUps?: string[];
}

export const KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    keywords: ["who", "abbas", "mohammad", "about", "bio", "background", "intro"],
    intent: "about_abbas",
    answer:
      `Mohammad Abbas is a B.Tech Computer Science student, AI/full-stack developer, hackathon builder, and aspiring technology founder based in India. His guiding philosophy is: "${PROFILE_DATA.statement}" He focuses on building intelligent products at the intersection of AI, software engineering, blockchain, and IoT.`,
    suggestedFollowUps: ["What is TRUSTX?", "What is his tech stack?", "Tell me about his hackathons"],
  },
  {
    keywords: ["trustx", "trust", "verification", "claims", "zk", "merkle", "fraud"],
    intent: "project_trustx",
    answer:
      "TRUSTX is an AI + Blockchain verification platform engineered to authenticate digital claims, credentials, and documents with immutable cryptographic proofs. It uses multi-modal Generative AI/LLMs to detect tampering and commits zero-knowledge Merkle proofs on Ethereum/Polygon, cutting verification latency to under 1.2s.",
    suggestedFollowUps: ["What tech stack does TRUSTX use?", "Tell me about SkillChain", "View project details"],
  },
  {
    keywords: ["skillchain", "credentials", "student", "sbt", "soulbound", "education"],
    intent: "project_skillchain",
    answer:
      "SkillChain is a decentralized student achievement and credential ledger. It leverages Soulbound non-transferable tokens (SBTs) on EVM chains and IPFS to grant students immutable academic passports, allowing recruiters to verify real project commits and certifications with zero gas fees on reads.",
    suggestedFollowUps: ["What is TRUSTX?", "What is ImaanUp?", "How does he use Blockchain?"],
  },
  {
    keywords: ["imaanup", "imaan", "islamic", "quran", "streak", "tasbeeh", "mobile", "flutter"],
    intent: "project_imaanup",
    answer:
      "ImaanUp ('LEVEL UP YOUR IMAAN') is a modern spiritual lifestyle mobile application built with Flutter and Firebase. It features daily Quran engagement with audio sync, mindful habit streaks, tactile haptic Tasbeeh counters, and interactive knowledge quizzes within an ad-free, halal-first ecosystem.",
    suggestedFollowUps: ["What tech stack does ImaanUp use?", "What is HERGUARD?", "Explore all projects"],
  },
  {
    keywords: ["herguard", "iot", "safety", "emergency", "esp32", "gps", "sos", "cellular"],
    intent: "project_herguard",
    answer:
      "HERGUARD is a standalone hardware-based IoT emergency safety system powered by an ESP32 microcontroller, NEO-6M GNSS GPS, and SIM800L cellular module. Designed for distress scenarios where smartphones are inaccessible, it dispatches emergency SMS, live coordinates, and automated calls in under 2.5 seconds.",
    suggestedFollowUps: ["How was HERGUARD built?", "What are his hardware skills?", "Tell me about SIH"],
  },
  {
    keywords: ["skill", "skills", "tech", "technologies", "stack", "languages", "python", "nextjs", "tools"],
    intent: "skills_overview",
    answer:
      "Mohammad's stack spans: \n• **AI/ML**: Generative AI, LLM apps (LangChain), RAG architectures, AI agents, Computer Vision\n• **Frontend**: React, Next.js 15, Tailwind CSS, Flutter\n• **Backend**: Node.js, REST/WebSockets, Firebase, Prisma\n• **Languages**: Python, TypeScript, JavaScript, Java, Dart, SQL\n• **Systems**: Git, Solidity/Web3, ESP32 IoT, Three.js.",
    suggestedFollowUps: ["What is his experience with AI?", "What are his projects?", "Where does he host code?"],
  },
  {
    keywords: ["hackathon", "hackathons", "sih", "competition", "experiments", "prizes", "awards"],
    intent: "hackathons",
    answer:
      "Mohammad is an active hackathon builder with 4+ major competitive sprints, including being a Finalist in the Smart India Hackathon (SIH) Initiative with an AI Document Verifier. He also built prototypes for TRUSTX (Decentralized Web & AI Hackathon) and SkillChain (EduTech Challenge).",
    suggestedFollowUps: ["Tell me about the SIH project", "What is TRUSTX?", "View his journey"],
  },
  {
    keywords: ["journey", "timeline", "education", "college", "degree", "btech", "graduation", "2024", "2028"],
    intent: "journey_education",
    answer:
      "Mohammad began his B.Tech in Computer Science in 2024 and is scheduled to graduate in 2028. His trajectory: 2024 (Foundations & Systems) → 2025 (Full-Stack & Web3) → 2026 (AI Engineering, LLMs & Hackathons) → 2027 (Industry Internships & Advanced AI) → 2028 (Graduation & Technology Founder).",
    suggestedFollowUps: ["What is he working on right now?", "How can I contact him?", "Download his resume"],
  },
  {
    keywords: ["contact", "hire", "email", "reach", "opportunity", "internship", "collaborate", "message"],
    intent: "contact_hire",
    answer:
      `Mohammad Abbas is currently open to opportunities! You can reach him directly at ${PROFILE_DATA.contact.email}, connect on LinkedIn (${PROFILE_DATA.contact.linkedin}), check his GitHub (${PROFILE_DATA.contact.github}), or use the interactive Contact section on this page.`,
    suggestedFollowUps: ["Download his resume", "What is his location?", "What projects has he built?"],
  },
  {
    keywords: ["resume", "cv", "download", "pdf"],
    intent: "resume",
    answer:
      "You can download or inspect Mohammad's resume directly via the 'DOWNLOAD RESUME' button in the Hero or Resume sections, or at `/resume.pdf`.",
    suggestedFollowUps: ["What are his top skills?", "Who is Mohammad Abbas?", "Contact him"],
  },
];

/**
 * Intelligent local intent resolution engine.
 * Matches keywords and context with fallback to concise synthesized portfolio summary.
 */
export function queryLocalKnowledgeBase(query: string): {
  answer: string;
  suggestedFollowUps: string[];
} {
  const clean = query.toLowerCase().trim();
  if (!clean) {
    return {
      answer: "Hello! I am Abbas AI, Mohammad's portfolio assistant. Ask me anything about his projects (TRUSTX, SkillChain, ImaanUp, HERGUARD), tech stack, hackathons, or how to collaborate!",
      suggestedFollowUps: ["What is TRUSTX?", "What is his tech stack?", "Tell me about his hackathons"],
    };
  }

  // Score knowledge items
  let bestMatch: KnowledgeItem | null = null;
  let highestScore = 0;

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (clean.includes(keyword)) {
        score += keyword.length >= 5 ? 3 : 2;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore >= 2) {
    return {
      answer: bestMatch.answer,
      suggestedFollowUps: bestMatch.suggestedFollowUps || ["What is TRUSTX?", "What is his tech stack?", "How can I contact him?"],
    };
  }

  // Smart fallback using known profile metadata
  return {
    answer:
      `Mohammad Abbas is an AI Engineer and Full-Stack Developer specializing in Generative AI, RAG, and Web3/IoT solutions. His featured builds include TRUSTX (AI+Blockchain verification), SkillChain (decentralized credentials), ImaanUp (gamified Islamic mobile app), and HERGUARD (IoT emergency hardware). You can explore any of these sections directly on this page or ask me for details!`,
    suggestedFollowUps: ["What is TRUSTX?", "What are his skills?", "Tell me about his hackathons"],
  };
}
