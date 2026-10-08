import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mohammadabbas.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mohammad Abbas — AI Engineer & Full-Stack Developer",
    template: "%s | Mohammad Abbas",
  },
  description:
    "Portfolio of Mohammad Abbas — Computer Science student, AI enthusiast, full-stack developer and technology builder.",
  keywords: [
    "Mohammad Abbas",
    "AI Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "Generative AI",
    "TRUSTX",
    "SkillChain",
    "ImaanUp",
    "HERGUARD",
    "Hackathon Finalist",
    "Next.js",
    "TypeScript",
    "Solidity",
  ],
  authors: [{ name: "Mohammad Abbas", url: siteUrl }],
  creator: "Mohammad Abbas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Mohammad Abbas — AI Engineer & Full-Stack Developer",
    description:
      "Building intelligent products at the intersection of AI, software and real-world problems. Computer Science student passionate about AI, full-stack, and ambitious products.",
    siteName: "Mohammad Abbas Portfolio",
    images: [
      {
        url: "/images/projects/trustx.jpg",
        width: 1200,
        height: 675,
        alt: "Mohammad Abbas Portfolio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Abbas — AI Engineer & Full-Stack Developer",
    description:
      "Portfolio of Mohammad Abbas — Computer Science student, AI enthusiast, full-stack developer and technology builder.",
    creator: "@abbas_builder",
    images: ["/images/projects/trustx.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammad Abbas",
    url: siteUrl,
    jobTitle: "AI Engineer & Full-Stack Developer",
    knowsAbout: [
      "Artificial Intelligence",
      "Full-Stack Development",
      "Blockchain",
      "Internet of Things",
      "Generative AI",
      "Next.js",
      "Python",
    ],
    sameAs: [
      "https://github.com/mohammadabbas",
      "https://linkedin.com/in/mohammadabbas",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#05070B] text-slate-100 font-sans antialiased selection:bg-cyan-500/25 selection:text-white">
        <Preloader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
