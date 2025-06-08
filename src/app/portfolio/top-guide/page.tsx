import type { Metadata } from 'next';
import TopGuideDashboard from '@/components/TopGuideDashboard'; // استيراد الداشبورد الجديدة
export const metadata: Metadata = {
  title: "دراسة حالة: Top Guide | محمد ربيع",
  description: "لوحة تحكم تفاعلية تعرض استراتيجية التحول التسويقي لشركة Top Guide، مع التركيز على النمو والميزانية والمحتوى.",
};

export default function TopGuidePage() {
  return (
    <TopGuideDashboard />
  );
}