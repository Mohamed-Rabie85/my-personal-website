// file: src/app/portfolio/next-academy/page.tsx

import type { Metadata } from 'next';
import NextAcademyDashboard from '@/components/NextAcademyDashboard'; // استيراد المكون من مكانه الجديد

export const metadata: Metadata = {
  title: "دراسة حالة: Next Academy | محمد ربيع",
  description: "تصور استراتيجي للوحة تحكم خاصة بـ Next Academy، تعرض شرائح الجمهور المستهدف، نمو الإيرادات، والشراكات.",
};

export default function NextAcademyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي */}
      <section className="w-full bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-medium)] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4">خدماتي الاستشارية</h1>
          <p className="text-xl max-w-3xl mx-auto">
            حلول متكاملة ومخصصة لتحقيق النمو المستدام وبناء علامات تجارية مؤثرة
          </p>
        </div>
        <NextAcademyDashboard />
      </section>
    </main>
  );
}