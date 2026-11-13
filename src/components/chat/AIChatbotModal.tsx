"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  RotateCcw,
  Sparkles,
  Bot,
  User,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { ChatMessageContent } from "./ChatMessageContent";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

interface AIChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUICK_PROMPTS = [
  "Tell me about the WJ-100-1800 2PLY plant",
  "What spare parts are in stock in Chennai?",
  "Where is your Madhavaram godown located?",
  "How can I request a customized quotation?",
];

const INITIAL_MESSAGE: Message = {
  id: "initial-welcome",
  role: "assistant",
  content: `👋 Hello! Welcome to **NAGJAN (Mount Kailash Printpack Machines)**.

I am your **Industrial AI Technical Assistant**, powered by Groq. I can assist you with:
- **Corrugation Machinery:** 2PLY lines, SF-10 Single Facers, Rotary Die Cutters & Laminators
- **400+ Spare Parts:** Ready stock at our Chennai depot (corrugating rolls, knives, belts, siphons)
- **Technical Guidance & Quotations:** Specifications, speeds, and direct contact with our sales engineers

How can we assist your plant operations today?`,
  timestamp: "Just now",
};

export function AIChatbotModal({ isOpen, onClose }: AIChatbotModalProps) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend ?? input).trim();
    if (!text || isLoading) return;

    setError(null);
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: now,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.content || "Thank you for reaching out. How else can we assist you?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("[Chatbot UI Error]:", err);
      setError("Unable to connect to AI server. Please retry or contact sales at +91-94455 66288.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
    setError(null);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="NAGJAN AI Industrial Assistant"
      className="fixed z-50 bottom-20 sm:bottom-24 right-3 sm:right-6 left-3 sm:left-auto w-auto sm:w-[430px] h-[580px] max-h-[calc(100dvh-95px)] sm:max-h-[calc(100vh-120px)] bg-white rounded-2xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* ── Chat Header ── */}
      <div className="bg-[#013074] text-white px-4 py-3.5 flex items-center justify-between border-b border-[#013074]/60 shadow-xs relative">
        <div className="flex items-center gap-3">
          <div className="relative size-10 rounded-xl bg-gradient-to-br from-[#FEA81D] to-[#e6930f] p-0.5 shadow-md flex items-center justify-center">
            <div className="size-full bg-[#013074] rounded-[10px] flex items-center justify-center">
              <Bot className="size-5 text-[#FEA81D]" />
            </div>
            <span
              className="absolute -bottom-0.5 -right-0.5 size-3 bg-emerald-400 border-2 border-[#013074] rounded-full"
              title="Online"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-heading font-bold text-sm text-white tracking-wide">
                NAGJAN AI Assistant
              </h3>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-semibold bg-[#FEA81D]/20 text-[#FEA81D] border border-[#FEA81D]/30 rounded">
                <Sparkles className="size-2.5" /> Groq
              </span>
            </div>
            <p className="text-[11px] text-slate-300 font-sans flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              Mount Kailash Industrial Support
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleReset}
            title="Reset conversation"
            aria-label="Reset conversation"
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <RotateCcw className="size-4" />
          </button>
          <button
            onClick={onClose}
            title="Close chatbot"
            aria-label="Close chatbot"
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>

      {/* ── Messages List ── */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/60">
        {messages.map((message) => {
          const isUser = message.role === "user";
          return (
            <div
              key={message.id}
              className={`flex gap-2.5 items-start ${isUser ? "flex-row-reverse" : "flex-row"}`}
            >
              {/* Avatar */}
              <div
                className={`size-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-xs ${
                  isUser
                    ? "bg-[#0F172A] text-white"
                    : "bg-[#013074] text-[#FEA81D] border border-[#FEA81D]/40"
                }`}
              >
                {isUser ? <User className="size-4" /> : <Bot className="size-4" />}
              </div>

              {/* Message Bubble */}
              <div className={`max-w-[85%] flex flex-col ${isUser ? "items-end" : "items-start"}`}>
                <div
                  className={`p-3.5 rounded-2xl shadow-xs text-sm ${
                    isUser
                      ? "bg-[#013074] text-white rounded-tr-xs"
                      : "bg-white text-slate-900 border border-slate-200/90 rounded-tl-xs"
                  }`}
                >
                  {isUser ? (
                    <p className="whitespace-pre-wrap leading-relaxed text-[13.5px]">
                      {message.content}
                    </p>
                  ) : (
                    <ChatMessageContent content={message.content} />
                  )}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {message.timestamp}
                </span>
              </div>
            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-2.5 items-start">
            <div className="size-7 rounded-lg bg-[#013074] text-[#FEA81D] border border-[#FEA81D]/40 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <Bot className="size-4" />
            </div>
            <div className="bg-white border border-slate-200/90 p-3.5 rounded-2xl rounded-tl-xs shadow-xs max-w-[80%]">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="flex gap-1 items-center">
                  <span className="size-2 bg-[#013074] rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="size-2 bg-[#FEA81D] rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="size-2 bg-[#013074] rounded-full animate-bounce" />
                </span>
                <span>Consulting NAGJAN engineering knowledge...</span>
              </div>
            </div>
          </div>
        )}

        {/* Error notification */}
        {error && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2 shadow-xs">
            <AlertCircle className="size-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium">{error}</p>
              <button
                onClick={() => handleSendMessage()}
                className="mt-1.5 text-xs text-[#013074] font-semibold underline hover:text-[#FEA81D]"
              >
                Retry Query
              </button>
            </div>
          </div>
        )}

        {/* Quick prompt suggestions (shown when only initial message exists) */}
        {messages.length === 1 && !isLoading && (
          <div className="pt-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
              <HelpCircle className="size-3.5 text-[#FEA81D]" />
              <span>Suggested Technical Queries</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="w-full text-left p-2.5 bg-white hover:bg-slate-100/90 border border-slate-200 rounded-xl text-xs text-slate-700 hover:text-[#013074] transition-all flex items-center justify-between group shadow-xs cursor-pointer"
                >
                  <span className="font-medium">{prompt}</span>
                  <ChevronRight className="size-3.5 text-slate-400 group-hover:text-[#FEA81D] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* ── Input Box ── */}
      <div className="p-3 bg-white border-t border-slate-200">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about machinery, spares, or specs..."
              disabled={isLoading}
              className="w-full resize-none py-2.5 pl-3.5 pr-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#013074] focus:bg-white text-slate-900 placeholder:text-slate-400 transition-all disabled:opacity-50"
              style={{ maxHeight: "100px" }}
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
            className="size-10 rounded-xl bg-[#013074] hover:bg-[#02419c] active:bg-[#012255] text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm shrink-0 cursor-pointer"
          >
            <Send className="size-4 text-[#FEA81D]" />
          </button>
        </form>

        {/* Security & Disclaimer Footer */}
        <div className="mt-2 flex items-center justify-between text-[10.5px] text-slate-400 px-1">
          <span className="flex items-center gap-1">
            <ShieldCheck className="size-3 text-emerald-600" />
            Official NAGJAN AI
          </span>
          <span>Groq Powered • Fast LLaMA 3.3</span>
        </div>
      </div>
    </div>
  );
}
