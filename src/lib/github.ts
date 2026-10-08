export interface GitHubRepo {
  id: string;
  name: string;
  fullName: string;
  description: string;
  url: string;
  homepage?: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  updatedAt: string;
  topics: string[];
}

export interface GitHubStats {
  username: string;
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  contributionsThisYear: number;
  streakDays: number;
  topLanguages: Array<{ name: string; percentage: number; color: string }>;
  featuredRepos: GitHubRepo[];
}

export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: "trustx-verification",
    name: "trustx-verification",
    fullName: "mohammadabbas/trustx-verification",
    description: "Multimodal AI anomaly detection + EVM Merkle anchor for digital claims & certificate verification.",
    url: "https://github.com/mohammadabbas/trustx-verification",
    language: "Python",
    languageColor: "#3572A5",
    stars: 34,
    forks: 8,
    updatedAt: "2026-10-04T12:00:00Z",
    topics: ["artificial-intelligence", "blockchain", "solidity", "fastapi", "langchain"],
  },
  {
    id: "skillchain-credentials",
    name: "skillchain-credentials",
    fullName: "mohammadabbas/skillchain-credentials",
    description: "Decentralized verifiable student credential and skill passport system using Soulbound tokens & IPFS.",
    url: "https://github.com/mohammadabbas/skillchain-credentials",
    language: "TypeScript",
    languageColor: "#3178C6",
    stars: 28,
    forks: 5,
    updatedAt: "2026-09-28T16:30:00Z",
    topics: ["web3", "soulbound-tokens", "nextjs", "ethereum", "ipfs"],
  },
  {
    id: "imaanup-mobile",
    name: "imaanup-mobile",
    fullName: "mohammadabbas/imaanup-mobile",
    description: "Modern Islamic lifestyle app with habit streaks, audio-synced Quran, haptic Tasbeeh and offline-first cache.",
    url: "https://github.com/mohammadabbas/imaanup-mobile",
    language: "Dart",
    languageColor: "#00B4AB",
    stars: 42,
    forks: 11,
    updatedAt: "2026-10-02T09:15:00Z",
    topics: ["flutter", "mobile", "firebase", "gamification", "dart"],
  },
  {
    id: "herguard-iot-safety",
    name: "herguard-iot-safety",
    fullName: "mohammadabbas/herguard-iot-safety",
    description: "Autonomous ESP32 hardware emergency distress beacon with GNSS satellite fix and cellular SMS telemetry.",
    url: "https://github.com/mohammadabbas/herguard-iot-safety",
    language: "C++",
    languageColor: "#F34B7D",
    stars: 19,
    forks: 4,
    updatedAt: "2026-08-15T11:45:00Z",
    topics: ["esp32", "iot", "gps", "emergency-response", "cellular"],
  },
  {
    id: "sih-ai-document-audit",
    name: "sih-ai-document-audit",
    fullName: "mohammadabbas/sih-ai-document-audit",
    description: "Smart India Hackathon project: Vision-LLM automated integrity verifier for government records.",
    url: "https://github.com/mohammadabbas/sih-ai-document-audit",
    language: "Python",
    languageColor: "#3572A5",
    stars: 23,
    forks: 6,
    updatedAt: "2026-09-12T14:20:00Z",
    topics: ["llm", "rag", "computer-vision", "sih-2025", "fastapi"],
  },
];

export const FALLBACK_GITHUB_STATS: GitHubStats = {
  username: "mohammadabbas",
  publicRepos: 24,
  followers: 86,
  following: 42,
  totalStars: 146,
  contributionsThisYear: 842,
  streakDays: 48,
  topLanguages: [
    { name: "Python", percentage: 38, color: "#3572A5" },
    { name: "TypeScript", percentage: 32, color: "#3178C6" },
    { name: "Dart", percentage: 16, color: "#00B4AB" },
    { name: "C++", percentage: 8, color: "#F34B7D" },
    { name: "Solidity", percentage: 6, color: "#AA6746" },
  ],
  featuredRepos: FALLBACK_REPOS,
};

/**
 * Fetch GitHub stats safely with graceful fallback.
 */
export async function getGitHubData(): Promise<{
  data: GitHubStats;
  isLive: boolean;
  message?: string;
}> {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME || "mohammadabbas";

  if (!token) {
    return {
      data: FALLBACK_GITHUB_STATS,
      isLive: false,
      message: "Showing curated showcase data. Add GITHUB_TOKEN to .env.local for live sync.",
    };
  }

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    });

    if (!userRes.ok) {
      return {
        data: FALLBACK_GITHUB_STATS,
        isLive: false,
        message: "GitHub rate limit or credentials error. Using curated data fallback.",
      };
    }

    const userData = await userRes.json();

    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      }
    );

    let repos = FALLBACK_REPOS;
    if (reposRes.ok) {
      const rawRepos = await reposRes.json();
        interface RawRepoItem {
          name: string;
          full_name: string;
          description?: string;
          html_url: string;
          homepage?: string;
          language?: string;
          stargazers_count: number;
          forks_count: number;
          updated_at: string;
          topics?: string[];
        }
        repos = (rawRepos as RawRepoItem[]).map((r) => ({
          id: r.name,
          name: r.name,
          fullName: r.full_name,
          description: r.description || "Open source project by Mohammad Abbas",
          url: r.html_url,
          homepage: r.homepage,
          language: r.language || "TypeScript",
          languageColor: r.language === "Python" ? "#3572A5" : r.language === "Dart" ? "#00B4AB" : "#3178C6",
          stars: r.stargazers_count,
          forks: r.forks_count,
          updatedAt: r.updated_at,
          topics: r.topics || [],
        }));
    }

    return {
      data: {
        ...FALLBACK_GITHUB_STATS,
        publicRepos: userData.public_repos || FALLBACK_GITHUB_STATS.publicRepos,
        followers: userData.followers || FALLBACK_GITHUB_STATS.followers,
        following: userData.following || FALLBACK_GITHUB_STATS.following,
        featuredRepos: repos,
      },
      isLive: true,
    };
  } catch {
    return {
      data: FALLBACK_GITHUB_STATS,
      isLive: false,
      message: "Network error contacting GitHub API. Showing curated fallback.",
    };
  }
}
