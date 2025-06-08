// file: src/app/portfolio/verde-vertical/page.tsx

import type { Metadata } from 'next';
import AjyalAcademyDashboard from '@/components/AjyalAcademyDashboard'; // استيراد الداشبورد الجديدة

export const metadata: Metadata = {
  title: "دراسة حالة: أكاديمية أجيال | محمد ربيع",
  description: "لوحة تحكم تفاعلية تعرض استراتيجية التحول التسويقي لشركة أكاديمية أجيال، مع التركيز على النمو والميزانية والمحتوى.",
};

export default function AjyalAcademyPage() {
  return (
    <AjyalAcademyDashboard />
  );
}