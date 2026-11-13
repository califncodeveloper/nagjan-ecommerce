"use client";

import React, { useState, useEffect } from "react";
import { Bot, Sparkles, X } from "lucide-react";
import { AIChatbotModal } from "./AIChatbotModal";
import { COMPANY_CONTACT } from "@/data/navigation";

// Authentic WhatsApp SVG icon
function WhatsAppIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="0"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.21 8.21 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3z" />
    </svg>
  );
}

export function FloatingActionButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [welcomeFading, setWelcomeFading] = useState(false);

  // Auto fade out welcome message after 3 seconds
  useEffect(() => {
    // Start fading at 3 seconds
    const timer = setTimeout(() => {
      setWelcomeFading(true);
      // Remove from DOM after fade transition completes (400ms)
      const cleanupTimer = setTimeout(() => {
        setShowWelcome(false);
      }, 500);
      return () => clearTimeout(cleanupTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // WhatsApp connection details
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    COMPANY_CONTACT.phones.sales.tel.replace(/[^0-9]/g, "") ||
    "919445566288";

  const whatsappMessage = encodeURIComponent(
    "Hello NAGJAN team, I am interested in your corrugated packaging machinery and spare parts."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* ── AI Chatbot Modal ── */}
      <AIChatbotModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* ── Floating Buttons Container (Fixed Bottom-Right) ── */}
      <div
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none select-none"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        {/* ── 1. AI Chatbot Floating Stack (ALWAYS ABOVE WHATSAPP) ── */}
        <div className="relative flex items-center gap-2.5 pointer-events-auto">
          {/* Floating Welcome Message: "👋 Hi! How can we help you!" */}
          {showWelcome && !isChatOpen && (
            <div
              onClick={() => {
                setIsChatOpen(true);
                setShowWelcome(false);
              }}
              className={`cursor-pointer bg-white text-slate-800 text-xs sm:text-[13px] font-medium py-1.5 sm:py-2 px-3 sm:px-3.5 max-w-[calc(100vw-80px)] sm:max-w-xs rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-1.5 sm:gap-2 transition-all duration-500 ease-out transform ${
                welcomeFading
                  ? "opacity-0 translate-y-1 scale-95 pointer-events-none"
                  : "opacity-100 translate-y-0 scale-100 animate-in fade-in slide-in-from-right-4"
              }`}
              style={{ filter: "drop-shadow(0 4px 12px rgba(1, 48, 116, 0.15))" }}
              role="status"
              aria-live="polite"
            >
              <span className="shrink-0 font-normal">👋 Hi! How can we help you!</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowWelcome(false);
                }}
                className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Dismiss welcome message"
              >
                <X className="size-3" />
              </button>
              {/* Speech bubble pointer arrow */}
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-slate-200/90 rotate-45 pointer-events-none" />
            </div>
          )}

          {/* Chatbot Trigger Button */}
          <button
            type="button"
            onClick={() => {
              setIsChatOpen((prev) => !prev);
              setShowWelcome(false);
            }}
            aria-label={isChatOpen ? "Close AI Chatbot" : "Open NAGJAN AI Chatbot"}
            className="group relative size-12 sm:size-14 rounded-full bg-[#013074] hover:bg-[#023d94] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#FEA81D]/40 cursor-pointer border-2 border-[#FEA81D]/30"
          >
            {isChatOpen ? (
              <X className="size-6 text-white transition-transform duration-200 group-hover:rotate-90" />
            ) : (
              <>
                <Bot className="size-6 sm:size-7 text-white transition-transform duration-200 group-hover:scale-110" />
                <span className="absolute -top-1 -left-1 flex size-4 items-center justify-center rounded-full bg-[#FEA81D] text-[#013074] shadow-xs">
                  <Sparkles className="size-2.5" />
                </span>
              </>
            )}

            {/* Hover Tooltip (Desktop) */}
            <span className="hidden sm:group-hover:block absolute right-full mr-3 px-2.5 py-1 text-xs font-semibold text-white bg-slate-900/90 rounded-md whitespace-nowrap shadow-md pointer-events-none transition-opacity">
              {isChatOpen ? "Close AI Chat" : "Chat with AI"}
            </span>
          </button>
        </div>

        {/* ── 2. WhatsApp Floating Button (ALWAYS BELOW CHATBOT) ── */}
        <div className="relative pointer-events-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative size-12 sm:size-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa51] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
          >
            {/* WhatsApp Icon */}
            <WhatsAppIcon className="size-6 sm:size-7 fill-white transition-transform duration-200 group-hover:scale-110" />

            {/* Red Notification Dot on Border */}
            <span
              className="absolute top-0 right-0 -translate-x-0.5 -translate-y-0.5 size-3.5 bg-red-500 border-2 border-white rounded-full shadow-xs flex items-center justify-center"
              aria-label="New notification"
            >
              <span className="size-1.5 bg-white rounded-full animate-ping opacity-75" />
            </span>

            {/* Hover Tooltip (Desktop) */}
            <span className="hidden sm:group-hover:block absolute right-full mr-3 px-2.5 py-1 text-xs font-semibold text-white bg-slate-900/90 rounded-md whitespace-nowrap shadow-md pointer-events-none transition-opacity">
              Chat on WhatsApp
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
