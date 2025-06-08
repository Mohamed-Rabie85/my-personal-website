// file: src/app/portfolio/next-academy/page.tsx

import type { Metadata } from 'next';
import AlMarsamAlAwalDashboard from '@/components/AlMarsamAlAwalDashboard';

export const metadata: Metadata = {
  title: "دراسة حالة: المرسم الأول | محمد ربيع",
  description: "تصور استراتيجي للوحة تحكم خاصة بـ المرسم الأول(AlMarsamAlAwal)، تعرض شرائح الجمهور المستهدف، نمو الإيرادات، والشراكات.",
};

export default function AlMarsamAlAwalPage() {
  return (
    <AlMarsamAlAwalDashboard />
  );
}