export interface ProfileConfig {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  roleBadge: string;
  roles: string[];
  headline: string;
  subheadline: string;
  statement: string;
  aboutText: string[];
  status: {
    available: boolean;
    text: string;
  };
  metadata: {
    buildingSince: string;
    location: string;
    statusNote: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    twitter?: string;
  };
  resumeUrl: string;
  stats: Array<{
    value: string;
    label: string;
    helper?: string;
  }>;
}

export const PROFILE_DATA: ProfileConfig = {
  name: "Mohammad Abbas",
  firstName: "Mohammad",
  lastName: "Abbas",
  initials: "AB",
  roleBadge: "AI ENGINEER • FULL-STACK DEVELOPER • BUILDER",
  roles: [
    "AI Engineer",
    "Full-Stack Developer",
    "Applied ML Builder",
    "Creative Technologist",
  ],
  headline: "Building intelligent products at the intersection of AI, software and real-world problems.",
  subheadline:
    "Computer Science student passionate about artificial intelligence, full-stack development, emerging technologies and ambitious products.",
  statement: "I don't just learn technology. I build products with it.",
  aboutText: [
    "I'm Mohammad Abbas, a Computer Science student focused on turning ideas into working products.",
    "My interests span artificial intelligence, full-stack development, blockchain, IoT, and creative technology.",
    "I enjoy participating in hackathons, experimenting with emerging technologies, and building projects that solve practical problems with measurable impact.",
  ],
  status: {
    available: true,
    text: "OPEN TO OPPORTUNITIES",
  },
  metadata: {
    buildingSince: "2024",
    location: "India",
    statusNote: "Exploring internships, collaborative research & product building",
  },
  contact: {
    email: "contact.mohammadabbas@gmail.com",
    github: "https://github.com/Abbas-ghazi9m",
    linkedin: "https://www.linkedin.com/in/abbasmohammad01",
    twitter: "https://x.com/abbas_builder",
  },
  resumeUrl: "/resume.pdf",
  stats: [
    {
      value: "03+",
      label: "Years Exploring Tech",
      helper: "From foundational CS to deep AI models",
    },
    {
      value: "10+",
      label: "Technologies Mastered & Explored",
      helper: "Full-stack, ML frameworks, smart contracts & IoT",
    },
    {
      value: "12+",
      label: "Projects & Prototypes",
      helper: "From production apps to rapid hackathon MVPs",
    },
    {
      value: "04+",
      label: "Hackathons Participated",
      helper: "National challenges, SIH & collegiate builds",
    },
  ],
};
