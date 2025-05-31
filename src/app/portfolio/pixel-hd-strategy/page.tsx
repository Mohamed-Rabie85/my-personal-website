import React from 'react';

// تعريف الواجهات (Interfaces) لتنظيم البيانات
interface SlidePoint {
  text: string;
  isBold?: boolean; // لجعل نقطة معينة بخط عريض
}

interface SubSection {
  heading: string;
  description?: string;
  points?: string[]; // لقائمة نقاط داخل قسم فرعي
}

interface KPIItem {
  label: string;
  description: string;
}

interface InvestmentDetail {
  label: string;
  amount: string;
  description: string;
}

// الواجهة الأساسية للشريحة
interface Slide {
  id: number;
  title: string;
  mainMessage: string;
  subPoints?: (string | SlidePoint)[]; // نقاط فرعية عامة للشريحة
  chartType?: string; // نوع الرسم البياني المقترح
  chartReason?: string; // لماذا هذا الرسم مناسب
  sections?: SubSection[]; // لأقسام المحاور (مثل المحور الأول، المحور الثاني)
  kpis?: KPIItem[]; // لمؤشرات الأداء الرئيسية
  investment?: InvestmentDetail[]; // للاستثمار المقترح
}

// البيانات المنظمة لاستراتيجية Pixel HD
const pixelHDStrategyData: Slide[] = [
  {
    id: 1,
    title: "صياغة النمو الاستراتيجي: نموذج عمل متكامل لخدمات الدعاية والفعاليات",
    mainMessage: "تقديم لمحة عن المشروع ودورك كمستشار استراتيجي.",
    subPoints: [
      "مقدمة إلى Mr- Esam Ishaq - Pixel HD.",
      "اسم المستشار: محمد ربيع - مستشار تطوير أعمال وتسويق استراتيجي.",
    ],
    chartType: "شعار Pixel HD وشعار الكيان الجديد المقترح (مثال: Elite Solutions)",
    chartReason: "لتحديد سياق العرض وتقديمي كخبير.",
  },
  {
    id: 2,
    title: "استثمار الميزة التنافسية: قاعدة عملاء Pixel HD",
    mainMessage: "إبراز استراتيجيتك في الاستفادة من الأصول القائمة.",
    subPoints: [
      "العمود الفقري للنمو: قاعدة عملاء Pixel HD القائمة.",
      { text: "القيمة المستهدفة:", isBold: true },
      "تقديم خدمات مكملة للعميل الحالي.",
      "تسويق الخدمات كحل شامل يوفر الوقت والجهد.",
      "عروض حصرية لتشجيع التجربة.",
    ],
    chartType: "Infographic / رسم بياني توضيحي",
    chartReason: "يُظهر بوضوح العلاقة السببية والمنطق الاستراتيجي، ويُبرز التفكير في تحقيق نتائج سريعة.",
  },
  {
    id: 3,
    title: "الأهداف الاستراتيجية الأولية للنمو",
    mainMessage: "عرض الأهداف الأساسية التي وضعتها لضمان بداية قوية ومركزة للشركة.",
    subPoints: [
      "بناء الكفاءة الداخلية: تشكيل فريق عمل مميز وكفء.",
      "توسيع الحصة السوقية: الوصول لعملاء جدد وتوسيع قاعدة العملاء.",
      "تحقيق الأثر المالي: تحقيق مبيعات مستهدفة.",
    ],
    chartType: "رسم بياني هرمي (Pyramid Chart) أو مخطط تدفق (Flowchart)",
    chartReason: "يُوضح تسلسل وتراكم الأهداف من بناء الفريق إلى تحقيق المبيعات. يمكن أن تكون الأهداف الثلاثة كطبقات في هرم أو خطوات متتالية.",
  },
  {
    id: 4,
    title: "محفظة الخدمات المتكاملة",
    mainMessage: "تفصيل الخدمات الأساسية التي يقدمها الكيان، مع التركيز على التكامل.",
    sections: [
      { heading: "تنظيم المناسبات والفعاليات", description: "(التخطيط، التنسيق، التنفيذ، إدارة، تصميم أجنحة)." },
      { heading: "خدمات التغليف والطباعة المتخصصة", description: "(تصميم عبوات مبتكرة، مطبوعات للحملات الكبيرة)." },
      { heading: "الهدايا الترويجية", description: "(تصميم وتغليف هدايا راقية للشركات)." },
      { heading: "خدمات التصميم المتنوعة", description: "" }, // يمكن ترك الوصف فارغاً إذا لا يوجد تفصيل
    ],
    chartType: "رسم بياني دائري (Donut Chart) أو مجموعة أيقونات مركزية مع وصف (Icon-based Diagram)",
    chartReason: "يُقدم نظرة عامة سريعة وجذابة على نطاق الخدمات وعمقها، ويبرز مفهوم الحل الشامل.",
  },
  {
    id: 5,
    title: "نموذج العمل (Business Model Canvas) - عرض القيمة ومصادر الإيرادات",
    mainMessage: "تسليط الضوء على جوهر عرض القيمة وكيف يتم تحويلها إلى إيرادات.",
    sections: [
      {
        heading: "عرض القيمة",
        points: [
          "تكامل الخدمات من التصميم للتنفيذ.",
          "مرونة واحترافية والتزام بالمواعيد.",
          "تصميمات إبداعية تعزز العلامة التجارية للعميل.",
        ],
      },
      {
        heading: "مصادر الإيرادات",
        points: [
          "عقود تنظيم الفعاليات والمؤتمرات.",
          "مبيعات خدمات التغليف والمطبوعات.",
          "مبيعات الهدايا الترويجية.",
          "شراكات استراتيجية لخدمات متكررة.",
        ],
      },
    ],
    chartType: "رسم بياني مزيج (Combination Chart)",
    chartReason: "يُظهر كيف تترجم القيمة المقدمة إلى عائد مالي، ويعكس فهماً عميقاً لديناميكيات العمل.",
  },
  {
    id: 6,
    title: "شرائح العملاء المستهدفة",
    mainMessage: "توضيح الفهم العميق للسوق واستهداف الشرائح الأكثر ربحية.",
    subPoints: [
      "شركات كبرى ومتوسطة: تبحث عن حلول متكاملة وراقية.",
      "صناعات محددة: شركات ومصانع الأدوية ومستحضرات التجميل، الشركات الغذائية، المطاعم.",
      "عملاء يبحثون عن الجودة: في التغليف، الطباعة، والهدايا الترويجية والفعاليات.",
    ],
    chartType: "رسم بياني فقاعي (Bubble Chart)",
    chartReason: "يُظهر تنوع وتحديد الشرائح المستهدفة بوضوح، ويعكس قدرة على تحليل السوق.",
    },
  {
    id: 7,
    title: "هيكل الموارد البشرية الأمثل للمرحلة التأسيسية",
    mainMessage: "إبراز نهجك في بناء الفريق بذكاء وتقليل تكاليف البدء.",
    subPoints: [
      "تصميم جرافيكي: 2 مصممين (تغليف، أجنحة معارض).",
      "إنتاج وتنفيذ + جودة: مشرف إنتاج.",
      "مبيعات وتسويق: 2 موظفين مبيعات (خبرة في التنظيم والدعاية والإعلان).",
      "إدارة عمليات: مدير إداري.",
      "دعم عملاء: سكرتارية + خدمة عملاء.",
    ],
    chartType: "هيكل تنظيمي مبسط (Organizational Chart) أو جدول بيانات بسيط",
    chartReason: "يُظهر التنظيم والتفكير في الكفاءة التشغيلية من البداية.",
  },
  {
    id: 8,
    title: "خارطة الطريق: الخطوات القادمة نحو الانطلاق",
    mainMessage: "توضيح رؤيتك للمراحل القادمة لضمان إطلاق ناجح.",
    subPoints: [
      "الهوية المستقلة: تحديد اسم وهوية بصرية، بناء الوعي بالعلامة التجارية.",
      "الهيكل الإداري والفريق: تشكيل فريق مرن مع خطة للتوسع.",
      "العمليات والتشغيل: التركيز على الخطوات الأساسية.",
      "استراتيجية التسويق: خطة واضحة، استخدام موارد Pixel HD.",
      "الفترة التأسيسية: خطة تشغيل لأول 6 أشهر.",
    ],
    chartType: "مخطط جانت (Gantt Chart) مبسط أو مخطط زمني (Timeline Chart)",
    chartReason: "يُقدم نظرة مستقبلية واضحة ومنظمة، ويُظهر التفكير التخطيطي.",
  },
];

const PixelHDStrategy: React.FC = () => {
  return (
    <div className="section-container py-12 lg:py-16 bg-background text-foreground">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-primary-light mb-10 md:mb-12">
        نموذج عمل متكامل لخدمات الدعاية والفعاليات (Pixel HD)
      </h1>

      <div className="space-y-16"> {/* زيادة المسافة بين الشرائح */}
        {pixelHDStrategyData.map((slide) => (
          <div key={slide.id} className="card p-6 md:p-10">
            <div className="flex items-start mb-6">
              <span className="text-3xl md:text-4xl font-bold text-secondary-medium ml-4">
                {slide.id}.
              </span>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-light mb-2">
                  {slide.title}
                </h2>
                <p className="text-neutral-light text-lg">{slide.mainMessage}</p>
              </div>
            </div>

            {/* عرض النقاط الفرعية العامة للشريحة */}
            {slide.subPoints && (
              <ul className="list-disc list-inside text-neutral-light text-md mb-6 space-y-2 pr-6">
                {slide.subPoints.map((point, idx) => (
                  <li key={idx}>
                    {typeof point === 'string' ? point : (
                      <span className={point.isBold ? 'font-semibold' : ''}>
                        {point.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* عرض الأقسام الفرعية (مثل محاور الاستراتيجية) */}
            {slide.sections && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {slide.sections.map((sectionItem, secIdx) => (
                  <div key={secIdx} className="bg-neutral-dark p-5 rounded-lg border border-slate-700">
                    <h3 className="text-xl font-semibold text-primary-light mb-2">{sectionItem.heading}</h3>
                    {sectionItem.description && <p className="text-neutral-light text-sm">{sectionItem.description}</p>}
                    {sectionItem.points && (
                      <ul className="list-disc list-inside text-neutral-light text-sm space-y-1 mt-2 pr-4">
                        {sectionItem.points.map((point, pointIdx) => (
                          <li key={pointIdx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* عرض مؤشرات الأداء الرئيسية (KPIs) */}
            {slide.kpis && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {slide.kpis.map((kpi, kpiIdx) => (
                  <div key={kpiIdx} className="bg-neutral-dark p-5 rounded-lg border border-slate-700 text-center">
                    <h3 className="text-xl font-bold text-secondary-light mb-1">{kpi.label}</h3>
                    <p className="text-neutral-light text-sm">{kpi.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* عرض تفاصيل الاستثمار المقترح */}
            {slide.investment && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {slide.investment.map((inv, invIdx) => (
                  <div key={invIdx} className="bg-neutral-dark p-5 rounded-lg border border-slate-700">
                    <h3 className="text-xl font-semibold text-primary-light mb-2">{inv.label}</h3>
                    <p className="text-secondary-medium text-lg font-bold mb-1">{inv.amount}</p>
                    <p className="text-neutral-light text-sm">{inv.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* مساحة للرسم البياني أو الصورة */}
            {slide.chartType && (
              <div className="mt-8 mb-6 p-6 bg-neutral-dark rounded-lg border border-slate-700">
                <h3 className="text-xl font-semibold text-primary-light mb-3">
                  نوع العنصر المرئي المقترح: {slide.chartType}
                </h3>
                <p className="text-neutral-light text-sm mb-4">
                  **لماذا مناسب:** {slide.chartReason}
                </p>
                <div className="bg-gray-800 h-64 flex items-center justify-center text-neutral-light text-sm italic rounded-md">
                  {/*
                    هنا مكان لإضافة الرسم البياني الفعلي أو صورة له.
                    يمكنك استخدام وسم <img> هنا إذا كان لديك صورة جاهزة،
                    أو مكون خاص بالرسوم البيانية إذا كنت تستخدم مكتبة مثل Chart.js أو D3.js.
                    مثال لإضافة صورة:
                    <img
                      src={`/images/charts/slide-${slide.id}-chart.png`} // افترض مسار الصورة
                      alt={`رسم بياني لـ ${slide.title}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  */}
                  <span className="text-center">
                    [مكان للرسم البياني أو الصورة ذات الصلة بالشريحة رقم {slide.id}]
                    <br />
                    (النوع المقترح: {slide.chartType})
                  </span>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default PixelHDStrategy;