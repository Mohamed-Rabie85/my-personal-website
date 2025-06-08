import type { Metadata } from 'next';
import WinnerAdvertisingDashboard from '@/components/WinnerAdvertisingDashboard'; // استيراد الداشبورد الجديدة
export const metadata: Metadata = {
  title: "دراسة حالة: Winner Advertising | محمد ربيع",
  description: "لوحة تحكم تفاعلية تعرض استراتيجية التحول التسويقي لشركة Winner Advertising، مع التركيز على النمو والميزانية والمحتوى.",
};

export default function WinnerAdvertisingPage() {
  return (
    <WinnerAdvertisingDashboard />
  );
}