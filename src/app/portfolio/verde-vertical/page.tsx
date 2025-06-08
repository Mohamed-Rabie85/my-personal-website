// file: src/app/portfolio/verde-vertical/page.tsx

import type { Metadata } from 'next';
import VerdeVerticalDashboard from '@/components/VerdeVerticalDashboard'; // استيراد الداشبورد الجديدة

export const metadata: Metadata = {
  title: "دراسة حالة: Verde Vertical | محمد ربيع",
  description: "لوحة تحكم تفاعلية تعرض استراتيجية التحول التسويقي لشركة Verde Vertical، مع التركيز على النمو والميزانية والمحتوى.",
};

export default function VerdeVerticalPage() {
  return (
    <VerdeVerticalDashboard />
  );
}