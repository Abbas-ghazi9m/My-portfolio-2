import { NextResponse } from "next/server";
import { queryLocalKnowledgeBase } from "@/data/ai-knowledge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { query } = body;

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }

    const provider = process.env.AI_PROVIDER || "local";
    const geminiKey = process.env.GEMINI_API_KEY;

    // Optional remote API proxy if user configures a live key
    if (provider === "gemini" && geminiKey) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `You are Abbas AI, the official personal portfolio assistant for Mohammad Abbas (B.Tech Computer Science student, AI Engineer, Full-Stack Developer, Hackathon Finalist). Answer the user's question concisely, professionally, and strictly using factual information about his projects (TRUSTX, SkillChain, ImaanUp, HERGUARD) and skills. User query: "${query}"`,
                    },
                  ],
                },
              ],
            }),
          }
        );
        if (res.ok) {
          const data = await res.json();
          const candidateText =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidateText) {
            return NextResponse.json({
              answer: candidateText,
              provider: "gemini",
              suggestedFollowUps: ["What is TRUSTX?", "What is his tech stack?", "How can I contact him?"],
            });
          }
        }
      } catch (err) {
        console.warn("External AI call failed, falling back to local KB", err);
      }
    }

    // Default fast & resilient local knowledge-base fallback
    const result = queryLocalKnowledgeBase(query);
    return NextResponse.json({
      answer: result.answer,
      provider: "local-knowledge-base",
      suggestedFollowUps: result.suggestedFollowUps,
    });
  } catch (error) {
    console.error("AI Assistant error:", error);
    return NextResponse.json(
      {
        answer:
          "I encountered a temporary hiccup, but you can explore Mohammad's featured work (TRUSTX, SkillChain, ImaanUp, HERGUARD) directly below!",
        provider: "local-fallback",
        suggestedFollowUps: ["What is TRUSTX?", "What is his tech stack?"],
      },
      { status: 200 }
    );
  }
}
