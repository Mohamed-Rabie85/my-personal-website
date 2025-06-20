// src/app/case-studies/page.tsx
import { getAllCaseStudiesMeta } from '@/lib/caseStudies';
import CaseStudyCard from '@/components/CaseStudyCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'دراسات الحالة',
  description: 'اكتشف كيف ساعدنا الشركات على تحقيق نتائج ملموسة من خلال استراتيجياتنا في تطوير الأعمال والتسويق.',
};

export default function CaseStudiesPage() {
  const allStudies = getAllCaseStudiesMeta();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-medium)] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4">دراسات الحالة</h1>
          <p className="text-xl max-w-3xl mx-auto">
            قصص نجاح حقيقية ونتائج ملموسة. شاهد كيف نترجم الاستراتيجيات إلى نمو لأعمال عملائنا.
          </p>
        </div>
      </section>

      <section className="w-full py-16 bg-[var(--neutral-light)]">
        <div className="section-container">
          {allStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allStudies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-[var(--neutral-medium)]">
              يتم العمل على إضافة دراسات الحالة حاليًا. يرجى العودة قريبًا!
            </p>
          )}
        </div>
      </section>
    </main>
  );
}