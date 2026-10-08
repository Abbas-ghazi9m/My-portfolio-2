"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Loader2, Send, X } from "lucide-react";

let messageCounter = 0;
function getNextMsgId() {
  messageCounter += 1;
  return `msg_${messageCounter}`;
}

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  suggestedFollowUps?: string[];
}

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export function AiAssistant({ isOpen, onClose, onOpen }: AiAssistantProps) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hello! I am Abbas AI, Mohammad's portfolio assistant. Ask me anything about his projects (TRUSTX, SkillChain, ImaanUp, HERGUARD), tech stack, hackathon achievements, or educational journey!",
      suggestedFollowUps: [
        "What is TRUSTX?",
        "What is his tech stack?",
        "Tell me about his hackathons",
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: getNextMsgId(),
      sender: "user",
      text: textToSend,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: textToSend }),
      });

      const data = await res.json();
      const assistantMsg: Message = {
        id: getNextMsgId(),
        sender: "assistant",
        text: data.answer || "I could not retrieve that detail at the moment.",
        suggestedFollowUps: data.suggestedFollowUps,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const fallbackMsg: Message = {
        id: getNextMsgId(),
        sender: "assistant",
        text: "I am having trouble reaching the inference route right now, but feel free to browse Mohammad's projects and skills directly on this page!",
        suggestedFollowUps: ["What is TRUSTX?", "What is his tech stack?"],
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button at Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={isOpen ? onClose : onOpen}
          aria-label="Open AI Portfolio Assistant"
          className="group relative flex items-center gap-2.5 rounded-full border border-cyan-400/50 bg-[#090D15]/90 px-4 py-3 text-white backdrop-blur-xl shadow-[0_0_25px_rgba(0,242,254,0.25)] transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,242,254,0.45)] active:scale-95"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
          </div>
          <Bot className="h-4 w-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
            ASK ABBAS AI
          </span>
        </button>
      </div>

      {/* Floating AI Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-[94vw] sm:w-[420px] max-h-[600px] flex flex-col rounded-3xl border border-white/15 bg-[#090D15]/95 backdrop-blur-2xl text-white shadow-2xl overflow-hidden"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    ABBAS AI ASSISTANT
                  </div>
                  <div className="font-mono text-[9px] text-cyan-400/80 tracking-widest uppercase">
                    PORTFOLIO GROUNDED • LOCAL ENGINE
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close assistant"
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[380px] text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${
                    m.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed font-light ${
                      m.sender === "user"
                        ? "bg-cyan-500 text-black font-medium rounded-br-sm"
                        : "bg-white/5 border border-white/10 text-neutral-200 rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>

                  {/* Suggested Quick Prompts */}
                  {m.suggestedFollowUps && m.suggestedFollowUps.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                      {m.suggestedFollowUps.map((prompt, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => handleSend(prompt)}
                          className="rounded-full border border-cyan-500/30 bg-cyan-500/5 px-2.5 py-1 font-mono text-[10px] text-cyan-300 hover:bg-cyan-500/15 hover:border-cyan-400 transition-colors"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span>Synthesizing portfolio answer...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-white/10 bg-[#05070B]"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about TRUSTX, tech stack, hackathons..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 pr-10 text-xs text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  aria-label="Send message"
                  className="absolute right-2 flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500 text-black disabled:opacity-30 disabled:pointer-events-none hover:bg-cyan-400 transition-colors"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
