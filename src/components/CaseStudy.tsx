// src/components/CaseStudy.tsx
import { ReactNode } from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

type CaseStudyProps = {
  client: string;    // اسم العميل أو المشروع
  challenge: ReactNode; // وصف التحدي
  solution: ReactNode;  // وصف الحل
  result: ReactNode;    // وصف النتيجة
};

const Section = ({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 mt-1 text-[var(--secondary-medium)]">{icon}</div>
    <div>
      <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-2">{title}</h4>
      <div className="text-gray-600 prose prose-custom max-w-none">{children}</div>
    </div>
  </div>
);

export default function CaseStudy({ client, challenge, solution, result }: CaseStudyProps) {
  return (
    <div className="my-10 p-6 border-2 border-[var(--secondary-medium)] rounded-xl bg-gray-50 shadow-lg">
      <h3 className="text-3xl font-bold text-center text-[var(--primary-medium)] mb-2">
        دراسة حالة: {client}
      </h3>
      <hr className="my-6" />
      <div className="space-y-8">
        <Section title="التحدي" icon={<Target size={28} />}>
          {challenge}
        </Section>
        <Section title="الحل المقترح" icon={<Lightbulb size={28} />}>
          {solution}
        </Section>
        <Section title="النتائج المحققة" icon={<TrendingUp size={28} />}>
          {result}
        </Section>
      </div>
    </div>
  );
}