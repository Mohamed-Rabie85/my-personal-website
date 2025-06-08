// file: src/app/portfolio/verde-vertical/page.tsx

import type { Metadata } from 'next';
import ExsAgencyDashboard from '@/components/ExsAgencyDashboard'; // استيراد الداشبورد الجديدة

export const metadata: Metadata = {
  title: "دراسة حالة: Exs Agency | محمد ربيع",
  description: "لوحة تحكم تفاعلية تعرض استراتيجية التحول التسويقي لشركة Exs Agency، مع التركيز على النمو والميزانية والمحتوى.",
};

export default function ExsAgencyPage() {
  return (
    <ExsAgencyDashboard />
  );
}