import type { Metadata } from 'next';
import OperationalBlueprintDashboard from '@/components/OperationalBlueprintDashboard'; // استيراد الداشبورد الجديدة
export const metadata: Metadata = {
  title: "دراسة حالة: Next Academy Operations | محمد ربيع",
  description: "لوحة تحكم تفاعلية تعرض استراتيجية التحول التسويقي لشركة Next Academy، مع التركيز على النمو والميزانية والمحتوى.",
};

export default function operationsPage() {
  return (
    <OperationalBlueprintDashboard />
  );
}