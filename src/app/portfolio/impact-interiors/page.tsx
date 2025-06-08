import type { Metadata } from 'next';
import ImpactInteriorsDashboard from '@/components/ImpactInteriorsDashboard'; // استيراد الداشبورد الجديدة
export const metadata: Metadata = {
  title: "دراسة حالة: Impact Interiors | محمد ربيع",
  description: "لوحة تحكم تفاعلية تعرض استراتيجية التحول التسويقي لشركة Impact Interiors، مع التركيز على النمو والميزانية والمحتوى.",
};

export default function ImpactInteriorsPage() {
  return (
    <ImpactInteriorsDashboard />
  );
}