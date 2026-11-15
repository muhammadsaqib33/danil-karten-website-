'use client';

import { useState } from 'react';

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
    <div className="divide-y divide-[#eadfd8] border-y border-[#eadfd8]">
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
              className="group flex min-h-[64px] w-full items-center justify-between gap-4 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a15a]"
            >
              <span className={`font-serif text-[1.28rem] font-medium leading-snug transition-colors sm:text-[1.38rem] ${
                isOpen ? 'text-[#966d24]' : 'text-[#1b191f] group-hover:text-[#966d24]'
              }`}>
                {item.question}
              </span>
              <span
                className={`font-sans font-light text-2xl transition-transform duration-350 shrink-0 ${
                  isOpen
                    ? 'rotate-45 text-[#c45f78]'
                    : 'text-[#c45f78] group-hover:text-[#966d24]'
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-350 ease-out motion-reduce:transition-none ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pr-6 text-[15.5px] font-normal leading-[1.85] text-[#3e383b]">
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
