"use client";

import { useState } from "react";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionItemProps extends AccordionItem {
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionEntry({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="px-6">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 active:opacity-80"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base font-semibold text-foreground sm:text-lg">
          {question}
        </span>
        <span
          className={`mt-1 flex-shrink-0 text-forest transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-5 text-base leading-relaxed text-earth">{answer}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="divide-y divide-stone-darker rounded-2xl bg-cream shadow-sm">
      {items.map((item, index) => (
        <AccordionEntry
          key={index}
          {...item}
          isOpen={openIndices.has(index)}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}
