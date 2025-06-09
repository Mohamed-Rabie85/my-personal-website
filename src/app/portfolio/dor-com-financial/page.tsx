// file: src/app/portfolio/next-academy-analysis/page.tsx

import type { Metadata } from 'next';
import DorComFinancialDashboard from '@/components/DorComFinancialDashboard'; // استيراد الداشبورد الجديدة

export const metadata: Metadata = {
  title: "تحليل استراتيجي: dor.com | محمد ربيع",
  description: "لوحة تحكم تفاعلية تعرض التحليل الاستراتيجي الشامل (SWOT, PESTEL) لأكاديمية dor.com.",
};

export default function AnalysisPage() {
  return (
    <DorComFinancialDashboard />
  );
}



