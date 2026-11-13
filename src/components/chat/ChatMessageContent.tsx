"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ChatMessageContentProps {
  content: string;
}

/**
 * Robust markdown renderer for AI responses:
 * Supports headings, bullet points, numbered lists, bold, italics, code, and links.
 */
export function ChatMessageContent({ content }: ChatMessageContentProps) {
  // Split into lines/blocks
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];

  let currentList: { type: "ul" | "ol"; items: string[] } | null = null;
  let codeBlockBuffer: string[] | null = null;
  let codeBlockLang = "";

  const flushList = (keyPrefix: string) => {
    if (!currentList) return;
    const items = currentList.items;
    const isUl = currentList.type === "ul";
    currentList = null;

    if (isUl) {
      elements.push(
        <ul key={`${keyPrefix}-ul`} className="my-2 space-y-1.5 pl-5 list-disc marker:text-[#FEA81D]">
          {items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderInlineText(item)}
            </li>
          ))}
        </ul>
      );
    } else {
      elements.push(
        <ol key={`${keyPrefix}-ol`} className="my-2 space-y-1.5 pl-5 list-decimal marker:text-[#013074] font-medium">
          {items.map((item, idx) => (
            <li key={idx} className="leading-relaxed font-normal">
              {renderInlineText(item)}
            </li>
          ))}
        </ol>
      );
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // Check code blocks
    if (trimmed.startsWith("```")) {
      if (codeBlockBuffer === null) {
        flushList(`before-code-${i}`);
        codeBlockLang = trimmed.slice(3).trim();
        codeBlockBuffer = [];
      } else {
        const codeText = codeBlockBuffer.join("\n");
        elements.push(
          <div key={`code-${i}`} className="my-2.5 rounded-lg overflow-hidden bg-slate-900 border border-slate-700/80">
            {codeBlockLang && (
              <div className="bg-slate-800/80 px-3 py-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider border-b border-slate-700/60">
                {codeBlockLang}
              </div>
            )}
            <pre className="p-3 text-xs font-mono text-slate-100 overflow-x-auto whitespace-pre leading-relaxed">
              <code>{codeText}</code>
            </pre>
          </div>
        );
        codeBlockBuffer = null;
        codeBlockLang = "";
      }
      continue;
    }

    if (codeBlockBuffer !== null) {
      codeBlockBuffer.push(rawLine);
      continue;
    }

    // Blank line
    if (!trimmed) {
      flushList(`blank-${i}`);
      continue;
    }

    // Headings
    if (trimmed.startsWith("### ")) {
      flushList(`h3-${i}`);
      elements.push(
        <h4 key={`h3-${i}`} className="font-heading font-bold text-sm text-slate-900 mt-3 mb-1.5 flex items-center gap-1.5">
          <span className="w-1.5 h-3.5 bg-[#FEA81D] rounded-full inline-block" />
          {renderInlineText(trimmed.replace(/^###\s+/, ""))}
        </h4>
      );
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushList(`h2-${i}`);
      elements.push(
        <h3 key={`h2-${i}`} className="font-heading font-bold text-base text-slate-900 mt-3.5 mb-2 border-b border-slate-200 pb-1">
          {renderInlineText(trimmed.replace(/^##\s+/, ""))}
        </h3>
      );
      continue;
    }

    if (trimmed.startsWith("# ")) {
      flushList(`h1-${i}`);
      elements.push(
        <h2 key={`h1-${i}`} className="font-heading font-extrabold text-lg text-[#013074] mt-4 mb-2">
          {renderInlineText(trimmed.replace(/^#\s+/, ""))}
        </h2>
      );
      continue;
    }

    // Bullet points (* or -)
    const bulletMatch = trimmed.match(/^[-*]\s+(.*)$/);
    if (bulletMatch) {
      if (currentList && currentList.type !== "ul") {
        flushList(`switch-ul-${i}`);
      }
      if (!currentList) {
        currentList = { type: "ul", items: [] };
      }
      currentList.items.push(bulletMatch[1]);
      continue;
    }

    // Numbered lists (1. 2. etc.)
    const numberMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (numberMatch) {
      if (currentList && currentList.type !== "ol") {
        flushList(`switch-ol-${i}`);
      }
      if (!currentList) {
        currentList = { type: "ol", items: [] };
      }
      currentList.items.push(numberMatch[1]);
      continue;
    }

    // Regular paragraph
    flushList(`p-${i}`);
    elements.push(
      <p key={`p-${i}`} className="my-1.5 leading-relaxed text-slate-800">
        {renderInlineText(trimmed)}
      </p>
    );
  }

  // Flush remaining list if any
  flushList("end");

  return <div className="space-y-1 text-[13.5px] leading-relaxed text-slate-800">{elements}</div>;
}

/**
 * Parses inline Markdown tokens:
 * - Links: [Text](url)
 * - Bold: **text** or __text__
 * - Italic: *text* or _text_
 * - Inline Code: `code`
 */
function renderInlineText(text: string): React.ReactNode {
  // Regex to split markdown tokens: links, bold, code, italic
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Link: [label](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, rawUrl] = linkMatch;
      const isInternal = rawUrl.startsWith("/") || rawUrl.startsWith("#");
      if (isInternal) {
        return (
          <Link
            key={index}
            href={rawUrl}
            className="text-[#013074] hover:text-[#FEA81D] font-semibold underline underline-offset-2 decoration-[#FEA81D]/60 hover:decoration-[#FEA81D] transition-colors"
          >
            {label}
          </Link>
        );
      }
      return (
        <a
          key={index}
          href={rawUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 text-[#013074] hover:text-[#FEA81D] font-semibold underline underline-offset-2 decoration-[#FEA81D]/60 hover:decoration-[#FEA81D] transition-colors"
        >
          {label}
          <ExternalLink className="size-3 inline-block ml-0.5 opacity-70" />
        </a>
      );
    }

    // Bold: **text**
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return (
        <strong key={index} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Inline code: `code`
    if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
      return (
        <code
          key={index}
          className="bg-slate-100 text-[#013074] px-1.5 py-0.5 rounded text-[12px] font-mono border border-slate-200/80"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    // Italic: *text*
    if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
      return (
        <em key={index} className="italic text-slate-700">
          {part.slice(1, -1)}
        </em>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}
