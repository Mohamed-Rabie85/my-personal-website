// file: src/app/portfolio/next-academy-analysis/page.tsx

import type { Metadata } from 'next';
import SituationAnalysisDashboard from '@/components/SituationAnalysisDashboard'; // استيراد الداشبورد الجديدة

export const metadata: Metadata = {
  title: "تحليل استراتيجي: Next Academy | محمد ربيع",
  description: "لوحة تحكم تفاعلية تعرض التحليل الاستراتيجي الشامل (SWOT, PESTEL) لأكاديمية Next Academy.",
};

export default function AnalysisPage() {
  return (
    <SituationAnalysisDashboard />
  );
}



