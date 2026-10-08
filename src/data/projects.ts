export interface Project {
  id: string;
  number: string;
  slug: string;
  name: string;
  tagline?: string;
  category: "AI + Blockchain" | "Blockchain + Education" | "Mobile + Islamic Tech" | "IoT + Personal Safety";
  shortDescription: string;
  fullOverview: string;
  problem: string;
  solution: string;
  architecture: {
    description: string;
    layers: Array<{ title: string; tech: string; detail: string }>;
  };
  technologies: string[];
  features: string[];
  challenges: string[];
  futureImprovements: string[];
  status: "Prototype" | "In Active Development" | "Production Ready" | "Hackathon MVP";
  githubUrl: string;
  demoUrl?: string;
  image: string;
  featured: boolean;
  metrics?: Array<{ label: string; value: string }>;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "trustx",
    number: "01",
    slug: "trustx",
    name: "TRUSTX",
    category: "AI + Blockchain",
    shortDescription:
      "A trust and verification platform combining Generative AI and blockchain technology to authenticate digital claims, documents, and credentials with immutable cryptographic proofs.",
    fullOverview:
      "In an era flooded with synthetic media and deepfakes, TRUSTX tackles the authenticity crisis. It integrates multi-modal LLM reasoning with decentralized ledger anchoring to establish verifiable provenance for high-stakes documents, academic certificates, and digital claims.",
    problem:
      "Digital document tampering and AI-generated fraud cost institutions billions annually. Traditional verification workflows are slow, siloed, and vulnerable to centralized single points of failure.",
    solution:
      "TRUSTX computes perceptual hashes and extracts semantic entities using vision-language models, then commits cryptographic Merkle proofs onto an immutable smart contract ledger. Third parties can instantly verify authenticity without exposing underlying sensitive data via zero-knowledge proofs.",
    architecture: {
      description:
        "End-to-end decentralized trust pipeline marrying Python-based LangChain inference microservices with EVM smart contracts.",
      layers: [
        {
          title: "Inference & Extraction Layer",
          tech: "Python, FastAPI, LangChain, Vision-Language Models",
          detail: "Ingests PDF/image documents, parses cryptographic watermarks, and scores semantic authenticity.",
        },
        {
          title: "Cryptographic Anchor",
          tech: "Solidity, Ethereum / Polygon L2, Merkle Trees",
          detail: "Hashes batch roots and commits zero-knowledge verification proofs with minimal gas footprint.",
        },
        {
          title: "Verification Frontend",
          tech: "Next.js 15, TypeScript, Tailwind CSS, Ethers.js",
          detail: "Interactive auditor console with drag-and-drop document inspection and blockchain receipt generation.",
        },
      ],
    },
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "Generative AI",
      "Solidity",
      "Ethereum/Polygon",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "Multi-modal document anomaly detection using LLMs",
      "Instant cryptographic hash verification on blockchain",
      "Decentralized Merkle tree receipt generation",
      "Tamper-evident visual audit trail for compliance officers",
      "Public verification link generator requiring zero sign-in",
    ],
    challenges: [
      "Optimizing EVM gas costs when committing high-volume verification hashes",
      "Mitigating hallucinations in OCR extraction of low-resolution scanned documents",
      "Structuring asynchronous verification pipelines while keeping UI latency under 800ms",
    ],
    futureImprovements: [
      "Full zk-SNARK implementation to enable private credential verification without disclosing entity names",
      "Decentralized identity (DID) standard compliance (W3C Verifiable Credentials)",
      "Automated cross-chain proof bridging between Ethereum, Arbitrum, and Solana",
    ],
    status: "In Active Development",
    githubUrl: "https://github.com/mohammadabbas/trustx-verification",
    demoUrl: "https://trustx.demo.internal",
    image: "/images/projects/trustx.jpg",
    featured: true,
    metrics: [
      { label: "Verification Latency", value: "< 1.2s" },
      { label: "AI Confidence Score", value: "99.4%" },
      { label: "Gas Savings via Merkle", value: "87%" },
    ],
  },
  {
    id: "skillchain",
    number: "02",
    slug: "skillchain",
    name: "SkillChain",
    category: "Blockchain + Education",
    shortDescription:
      "A verifiable student achievement and credential system where academic milestones, skill mastery, and certifications are securely represented and verified on-chain.",
    fullOverview:
      "SkillChain replaces static paper degrees and easily forgeable PDF resumes with dynamic, tamper-proof on-chain skill passports. Universities and accredited platforms issue soulbound credentials directly to student decentralized identifiers (DIDs).",
    problem:
      "Resume fraud is pervasive in tech hiring, and university credential validation takes weeks of bureaucratic manual back-and-forth. Students lack a unified, portable digital passport of their verified competency.",
    solution:
      "SkillChain builds a decentralized credentialing framework using Soulbound Tokens (EIP-5114/EIP-4973). Recruiters can instantly verify a student's project submissions, hackathon badges, and university grade milestones with one-click cryptographic validation.",
    architecture: {
      description:
        "Modular Web3 application with IPFS decentralized metadata storage and role-based institutional minters.",
      layers: [
        {
          title: "Institutional Issuer Gateway",
          tech: "Node.js, Express, Web3.js, OpenZeppelin",
          detail: "Authorized university and hackathon accounts batch-issue tamper-proof credential tokens.",
        },
        {
          title: "Decentralized Storage",
          tech: "IPFS / Pinata, Filecoin",
          detail: "Stores student portfolio metadata, capstone commits, and verifiable project evidence.",
        },
        {
          title: "Student & Recruiter Portal",
          tech: "React, Next.js, Wagmi, Tailwind CSS",
          detail: "Interactive skill radar charts, real-time proof status, and one-click recruiter shareable profiles.",
        },
      ],
    },
    technologies: [
      "Solidity",
      "Ethereum",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "IPFS",
      "Wagmi/Viem",
      "Node.js",
      "Prisma",
    ],
    features: [
      "Soulbound non-transferable token (SBT) credential badges",
      "Interactive multi-dimensional student skill radar chart",
      "One-click recruiter verification badge embedding",
      "Decentralized IPFS artifact backup for project proof",
      "Multi-chain support across Ethereum testnets and Polygon",
    ],
    challenges: [
      "Preventing credential transfer while maintaining recovery mechanisms if a student loses wallet access",
      "Designing a clean Web2.5 onboarding experience for universities unfamiliar with crypto wallets",
      "Structuring verifiable schemas compatible with both academic institutions and online bootcamps",
    ],
    futureImprovements: [
      "Account Abstraction (ERC-4337) to eliminate gas fees for student credential claims",
      "Algorithmic job matching based on cryptographically confirmed skill trees",
      "Integration with GitHub API for automated proof-of-commit skill updates",
    ],
    status: "Hackathon MVP",
    githubUrl: "https://github.com/mohammadabbas/skillchain-credentials",
    demoUrl: "https://skillchain.demo.internal",
    image: "/images/projects/skillchain.jpg",
    featured: true,
    metrics: [
      { label: "Active Verified Proofs", value: "15+" },
      { label: "Issuance Time", value: "< 3s" },
      { label: "Verification Cost", value: "0 Gas (Read)" },
    ],
  },
  {
    id: "imaanup",
    number: "03",
    slug: "imaanup",
    name: "ImaanUp",
    tagline: "LEVEL UP YOUR IMAAN",
    category: "Mobile + Islamic Tech",
    shortDescription:
      "A modern spiritual lifestyle application combining daily Quran engagement, habit streaks, educational quizzes, digital Tasbeeh, and a halal-first community ecosystem.",
    fullOverview:
      "ImaanUp empowers youth to build consistent spiritual habits through positive behavioral gamification and high-craft design. It combines authentic resources, mindful progress analytics, and community reflection into an elegant, distraction-free mobile experience.",
    problem:
      "Modern youth face endless digital distractions and fragmented religious apps filled with invasive ads, poor UX, or lack of habit reinforcement and engagement loops.",
    solution:
      "ImaanUp brings world-class consumer app craftsmanship to Islamic technology: daily reading streaks, adaptive knowledge quizzes, clean haptic Tasbeeh counters, and prayer trackers wrapped in an ad-free, dark-mode first interface.",
    architecture: {
      description:
        "High-performance cross-platform Flutter client with an offline-first SQLite cache synchronized to Firebase Firestore cloud sync.",
      layers: [
        {
          title: "Cross-Platform Client",
          tech: "Flutter, Dart, Provider, Haptic Feedback Engine",
          detail: "Smooth 60fps animations, custom typography, dark palette, and fluid micro-interactions.",
        },
        {
          title: "Offline-First Data Engine",
          tech: "SQLite, LocalStorage, Audio Cache",
          detail: "Full offline Quran reading, ayah bookmarking, and local streak tracking without network connectivity.",
        },
        {
          title: "Cloud & Community Backend",
          tech: "Firebase Auth, Cloud Firestore, Cloud Functions",
          detail: "Syncs streaks across devices, manages weekly community leaderboards, and serves daily curated reflections.",
        },
      ],
    },
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloud Firestore",
      "SQLite",
      "Node.js",
      "Figma",
    ],
    features: [
      "Dynamic habit streak counter with recovery freezes",
      "Interactive audio-synced Quran reading companion",
      "Tactile digital Tasbeeh counter with custom vibrational haptics",
      "Daily bite-sized Islamic history and ethics quiz system",
      "Zero-ad, distraction-free respectful dark aesthetic",
    ],
    challenges: [
      "Building a flawless offline-first sync mechanism that prevents streak resets when traveling across time zones",
      "Optimizing local typography rendering for Arabic Uthmani script across diverse Android device DPIs",
      "Balancing gamification incentives without trivializing sacred practice",
    ],
    futureImprovements: [
      "On-device AI voice pronunciation scoring for Tajweed practice using quantized Whisper models",
      "Collaborative family streak circles and prayer accountability groups",
      "Wear OS and Apple Watch companion complications for quick Tasbeeh logging",
    ],
    status: "In Active Development",
    githubUrl: "https://github.com/mohammadabbas/imaanup-mobile",
    demoUrl: "https://imaanup.internal",
    image: "/images/projects/imaanup.jpg",
    featured: true,
    metrics: [
      { label: "Active Daily Streaks", value: "28 Days Max" },
      { label: "Offline Availability", value: "100%" },
      { label: "Target Ecosystem", value: "Halal-First" },
    ],
  },
  {
    id: "herguard",
    number: "04",
    slug: "herguard",
    name: "HERGUARD",
    category: "IoT + Personal Safety",
    shortDescription:
      "A hardware-based emergency safety system engineered with ESP32, GNSS/GPS, cellular connectivity, and instant multi-channel SOS distress dispatch.",
    fullOverview:
      "When personal safety is compromised, unlocking a phone and dialing is often impossible. HERGUARD is a standalone, compact wearable and discreet IoT safety device that detects panic gestures, sudden impacts, or covert triggers to broadcast real-time telemetry coordinates over cellular networks.",
    problem:
      "Smartphone-only safety apps require manual unlocking, active data plans, and conspicuous phone interaction—making them ineffective during sudden emergencies, assaults, or medical crises.",
    solution:
      "HERGUARD operates autonomously as an embedded device. Powered by an ESP32 microcontroller with a SIM800L GSM/GPRS module and NEO-6M GNSS receiver, it transmits emergency SMS, telephone alerts, and continuous GPS tracking directly to nominated emergency contacts and law enforcement dispatchers.",
    architecture: {
      description:
        "Embedded firmware architecture coupled with cloud-relayed emergency dispatch APIs and mobile guardian app.",
      layers: [
        {
          title: "Hardware Embedded Core",
          tech: "ESP32 (C++/Arduino), NEO-6M GPS, SIM800L GSM, Accelerometer",
          detail: "Monitors fall/impact thresholds, debounces tactile SOS triggers, and queries satellite coordinate fixes.",
        },
        {
          title: "Cellular & Cloud Telemetry Relay",
          tech: "GSM AT Commands, Twilio API, MQTT, AWS Lambda",
          detail: "Dispatches automated emergency SMS with live Google Maps links and initiates automated voice call alerts.",
        },
        {
          title: "Guardian Monitor Dashboard",
          tech: "Next.js, Tailwind CSS, Leaflet/Mapbox API, WebSockets",
          detail: "Displays live location trail, battery telemetry, and distress state for family and emergency guardians.",
        },
      ],
    },
    technologies: [
      "C++ / Embedded C",
      "ESP32",
      "SIM800L GSM",
      "NEO-6M GPS",
      "IoT",
      "Node.js",
      "Next.js",
      "WebSockets",
      "Tailwind CSS",
    ],
    features: [
      "One-touch discreet SOS tactile switch with anti-false-alarm debouncing",
      "Autonomous GNSS satellite positioning independent of smartphones",
      "Cellular SMS and automated IVR emergency call broadcast",
      "Real-time location trail web dashboard with battery telemetry",
      "Ultra-low-power sleep state lasting up to 72 hours on compact LiPo battery",
    ],
    challenges: [
      "Managing peak power surges of the SIM800L module during cellular handshakes using capacitor buffers",
      "Acquiring rapid GPS satellite lock indoors through assistive cellular positioning fallbacks",
      "Designing a miniaturized 3D-printable enclosure with ergonomic tactile safety guards",
    ],
    futureImprovements: [
      "Transition to NB-IoT / LTE-M modem for extended coverage and lower power draw",
      "BLE integration with smartphone for dual-mode transmission when phone is in range",
      "Micro-vibration haptic confirmation letting the wearer know silently that help has been dispatched",
    ],
    status: "Prototype",
    githubUrl: "https://github.com/mohammadabbas/herguard-iot-safety",
    demoUrl: "https://herguard.demo.internal",
    image: "/images/projects/herguard.jpg",
    featured: true,
    metrics: [
      { label: "SOS Dispatch Speed", value: "< 2.5s" },
      { label: "GPS Fix Accuracy", value: "± 2.5m" },
      { label: "Battery Standby", value: "72 Hours" },
    ],
  },
];
