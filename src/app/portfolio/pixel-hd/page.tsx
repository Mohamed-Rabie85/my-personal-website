import type { Metadata } from 'next';
import PixelHDServicesDashboard from '@/components/PixelHDServicesDashboard'; // استيراد الداشبورد الجديدة
export const metadata: Metadata = {
  title: "دراسة حالة: Pixel HD Services | محمد ربيع",
  description: "لوحة تحكم تفاعلية تعرض استراتيجية التحول التسويقي لشركة Pixel HD Services، مع التركيز على النمو والميزانية والمحتوى.",
};

export default function PixelHDServicesPage() {
  return (
    <PixelHDServicesDashboard />
  );
}