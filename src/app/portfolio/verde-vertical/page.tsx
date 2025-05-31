import Link from 'next/link';
import React from 'react';

// تعريف الواجهات للبيانات المنظمة
interface KPIItem {
  label: string;
  description: string;
}

interface InvestmentDetail {
  label: string;
  amount: string;
  description: string;
}

interface StrategySection {
  id: number;
  title: string;
  intro?: string; // لفقرة مقدمة اختيارية
  subSections?: Array<{
    heading: string;
    description?: string;
    points?: string[];
  }>;
  kpis?: KPIItem[];
  investment?: InvestmentDetail[];
  rawContent?: React.ReactNode; // لاستيعاب أي محتوى غير منظم بشكل خاص
}

// البيانات المنظمة لاستراتيجية Verde Vertical
const verdeVerticalStrategyData: StrategySection[] = [
  {
    id: 1,
    title: 'رؤيتنا المشتركة للنمو',
    subSections: [
      {
        heading: 'Verde Vertical',
        description: 'بناء علامة تجارية قوية وموثوقة، لا مجرد مبيعات.',
      },
      {
        heading: 'أهداف متكاملة',
        description: 'علامة قوية تؤدي لثقة ومبيعات مستدامة.',
      },
      {
        heading: 'تحدي الميزانية',
        description: 'فهم تحدي الميزانية المحدودة.',
      },
      {
        heading: 'الهدف',
        description: 'خطة انطلاق عملية ومرحلية (3 أشهر) لنتائج ملموسة.',
      },
    ],
  },
  {
    id: 2,
    title: 'استراتيجيتنا الأولية: تأسيس وتفعيل',
    subSections: [
      { heading: 'تأسيس هوية رقمية', description: 'متسقة وجذابة.' },
      { heading: 'تحسين التحويل', description: 'خاصة على أمازون.' },
      { heading: 'تفعيل المبيعات', description: 'بحملات مستهدفة.' },
      { heading: 'بناء مجتمع', description: 'وتفاعل اجتماعي.' },
    ],
  },
  {
    id: 3,
    title: 'المحور الأول: بناء الأساس الرقمي الموحد وتعزيز الجاذبية',
    subSections: [
      { heading: 'فيسبوك/انستغرام', description: 'تحديث الملفات، Bio، الروابط، الـ Highlights.' },
      { heading: 'لينكدإن', description: 'استكمال الصفحة، وصف B2B، مواد مرئية.' },
      { heading: 'تيك توك', description: 'ملف جذاب، Bio مختصر، هاشتاجات، رابط.' },
      { heading: 'أمازون', description: 'تحسينات (كلمات مفتاحية، عناوين، وصف، محتوى A+، مراجعات).' },
    ],
  },
  {
    id: 4,
    title: 'المحور الثاني: استراتيجية المحتوى متعدد المنصات وتفعيل النمو',
    subSections: [
      { heading: 'جماليات الحياة الخضراء', description: 'في المساحات المحدودة.' },
      { heading: 'حلول مستدامة', description: 'وعملية للمنزل والمكتب.' },
      { heading: 'نصائح سهلة', description: 'للعناية بالنباتات وتنسيقها.' },
      { heading: 'انستغرام/تيك توك', description: 'جاذبية بصرية، Reels، محتوى مستخدمين، قصص.' },
      { heading: 'فيسبوك', description: 'بناء مجتمع، معلومات أعمق، شهادات.' },
    ],
  },
  {
    id: 5,
    title: 'إطلاق حملة إعلانية مركزة',
    subSections: [
      {
        heading: 'خيار (أ) - B2C (Meta Ads)',
        points: [
          'الهدف: وعي ومبيعات أولية (توجيه لأمازون).',
          'الرسالة: بيع الفكرة والقصة والشعور.',
          'الميزانية: صغيرة، تركيز على الجمهور المناسب.',
        ],
      },
      {
        heading: 'خيار (ب) - B2B (LinkedIn)',
        points: [
          'الهدف: مصداقية وعملاء محتملين نوعيين.',
          'الرسالة: قيادة فكرية بسيطة، تواصل مباشر.',
          'الميزانية: لا إعلانات مدفوعة مبدئيًا.',
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'منهجية التنفيذ',
    subSections: [
      { heading: 'تحسين الملفات', description: 'ومنصة أمازون.' },
      { heading: 'خطة محتوى شهرية', description: 'تحديد مسؤوليات الإنتاج.' },
      { heading: 'إدارة حملة Meta', description: 'تركيز على الاستهداف و ROAS.' },
      { heading: 'مراقبة التفاعل', description: 'وتقديم توصيات.' },
      { heading: 'اعتماد على البيانات', description: 'والتحليل المستمر.' },
    ],
  },
  {
    id: 7,
    title: 'مؤشرات الأداء الرئيسية (KPIs) للمرحلة الأولى',
    kpis: [
      { label: 'نمو', description: 'المتابعين النوعيين لنمو العلامة التجارية.' },
      { label: 'مدى', description: 'الوصول والانطباعات للتفاعل.' },
      { label: 'معدل', description: 'التفاعل.' },
      { label: 'مؤشرات', description: 'أمازون: زيارات، تحويل، مبيعات.' },
    ],
  },
  {
    id: 8,
    title: 'الاستثمار المقترح للمرحلة الأولى (3 أشهر)',
    investment: [
      { label: 'رسوم إدارة Exs Agency', amount: '15,000 شهريًا', description: '(تحسين الهوية، المنصات، المحتوى).' },
      { label: 'ميزانية إعلانية مقترحة (Meta Ads)', amount: '10,000 - 20,000 شهريًا', description: '(مبيعات أمازون، دعم المحتوى).' },
    ],
  },
];

const VerdeVerticalStrategy: React.FC = () => {
    return (
    <div className="section-container py-12 lg:py-16 bg-background text-foreground">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary-light mb-10 md:mb-12">
        استراتيجية متكاملة لترسيخ الهوية الرقمية وزيادة النمو لـ Verde Vertical
        </h1>

        <div className="space-y-12">
            {verdeVerticalStrategyData.map((section) => (
                <div key={section.id} className="card p-6 md:p-8">
                    <div className="flex items-start mb-4">
                        <span className="text-xl md:text-2xl font-bold text-secondary-medium ml-3">
                            {section.id}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-light">
                            {section.title}
                        </h2>
                    </div>

                    {section.intro && <p className="mb-6 text-neutral-light">{section.intro}</p>}

                    {section.subSections && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {section.subSections.map((item, itemIndex) => (
                                <div key={itemIndex} className="bg-neutral-dark p-4 rounded-md border border-slate-700">
                                    <h3 className="text-xl font-semibold text-primary-light mb-2">{item.heading}</h3>
                                    {item.description && <p className="text-neutral-light text-sm">{item.description}</p>}
                                    {item.points && (
                                        <ul className="list-disc list-inside text-neutral-light text-sm space-y-1 mt-2">
                                            {item.points.map((point, pointIndex) => (
                                                <li key={pointIndex}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {section.kpis && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            {section.kpis.map((kpi, kpiIndex) => (
                                <div key={kpiIndex} className="bg-neutral-dark p-4 rounded-md border border-slate-700 text-center">
                                    <h3 className="text-xl font-bold text-secondary-light mb-1">{kpi.label}</h3>
                                    <p className="text-neutral-light text-sm">{kpi.description}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {section.investment && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {section.investment.map((inv, invIndex) => (
                                <div key={invIndex} className="bg-neutral-dark p-4 rounded-md border border-slate-700">
                                    <h3 className="text-xl font-semibold text-primary-light mb-2">{inv.label}</h3>
                                    <p className="text-secondary-medium text-lg font-bold mb-1">{inv.amount}</p>
                                    <p className="text-neutral-light text-sm">{inv.description}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {section.rawContent && <div className="mt-6 text-neutral-light">{section.rawContent}</div>}
                </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-secondary">
            معرض الأعمال 
            </Link>
        </div>
    </div>
    );
};

export default VerdeVerticalStrategy;