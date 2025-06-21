// src/components/AccordionItem.tsx
'use client'; // <-- هذا السطر ضروري لأننا نستخدم حالة (State)

import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

export default function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-4 text-right bg-gray-50 hover:bg-gray-200 focus:outline-none"
      >
        <span className="font-semibold text-[var(--primary-dark)]">{title}</span>
        <ChevronDown
          className={`h-6 w-6 text-[var(--secondary-medium)] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-t border-[var(--secondary-medium)] ">
          <div className="prose max-w-none text-gray-700">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}