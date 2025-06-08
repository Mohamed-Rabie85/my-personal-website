// file: src/app/portfolio/next-academy/page.tsx

import type { Metadata } from 'next';
import NextAcademyDashboard from '@/components/NextAcademyDashboard'; // استيراد المكون من مكانه الجديد

export const metadata: Metadata = {
  title: "دراسة حالة: Next Academy | محمد ربيع",
  description: "تصور استراتيجي للوحة تحكم خاصة بـ Next Academy، تعرض شرائح الجمهور المستهدف، نمو الإيرادات، والشراكات.",
};

export default function NextAcademyPage() {
  return (
    <NextAcademyDashboard />
  );
}





