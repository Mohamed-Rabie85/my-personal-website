// src/components/Accordion.tsx
import { ReactNode } from 'react';

type AccordionProps = {
  children: ReactNode;
};

export default function Accordion({ children }: AccordionProps) {
  // هذا المكون هو مجرد حاوية لتجميع عناصر الأكورديون
  // ويوفر مساحة وفاصلاً بين كل عنصر والذي يليه
  return (
    <div className="space-y-4 my-8">
      {children}
    </div>
  );
}