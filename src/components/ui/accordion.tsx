'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  idPrefix?: string;
}

export function Accordion({ items, idPrefix = 'faq' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-border/80 border-y border-border/80">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `${idPrefix}-trigger-${item.id}`;
        const panelId = `${idPrefix}-panel-${item.id}`;

        return (
          <div key={item.id} className="transition-colors duration-200">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="group flex min-h-[58px] w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <span className={`font-serif text-xl font-medium leading-snug transition-colors sm:text-2xl ${
                isOpen ? 'text-brand' : 'text-ink group-hover:text-brand'
              }`}>
                {item.question}
              </span>
              <span
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? 'rotate-45 border-brand bg-brand/10 text-brand'
                    : 'border-border text-muted group-hover:border-brand/40 group-hover:text-brand'
                }`}
              >
                <Plus className="h-4 w-4 transition-transform duration-300" aria-hidden="true" />
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-5 pr-8 text-sm leading-relaxed text-muted sm:text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
