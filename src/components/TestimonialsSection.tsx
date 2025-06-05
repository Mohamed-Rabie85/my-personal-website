// src/components/TestimonialsSection.tsx
import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "استشاري استثنائي يجمع بين الفهم العميق للسوق والقدرة على تحويل التحديات إلى فرص نمو ملموسة.",
      name: "أحمد السيد",
      position: "مدير عام، شركة التقنية المتطورة"
    },
    {
      id: 2,
      quote: " محمد يمتلك رؤية فريدة، مما ساعدنا على تحقيق أهدافنا بسرعة وكفاءة.",
      name: "نورا الفهد",
      position: "رئيسة قسم التطوير، مجموعة الأعمال الدولية"
    },
    {
      id: 3,
      quote: "تجربة العمل مع محمد كانت استثنائية، حيث قدم حلولاً مبتكرة ساعدت في نمو أعمالنا بشكل ملحوظ.",
      name: "خالد أمين",
      position: "المدير التنفيذي، شركة البناء الحديث"
    },
    {
      id: 4,
      quote: "الاستشارات المقدمة كانت دقيقة وفعالة، وساعدتنا في اتخاذ قرارات استراتيجية مهمة لشركتنا.",
      name: "لمى عبدالله",
      position: "مديرة التسويق، علامة الأزياء الراقية"
    },
    {
      id: 5,
      quote: "بفضل استشارات محمد، استطعنا دخول أسواق جديدة وزيادة حصتنا السوقية بنسبة 40% في أقل من عام.",
      name: "ياسر ناصر",
      position: "رئيس مجلس الإدارة، مجموعة الصناعات الغذائية"
    },
    {
      id: 6,
      quote: "النهج العلمي الذي يتبعه محمد في تحليل البيانات ووضع الاستراتيجيات أعطانا رؤية واضحة لمستقبل أعمالنا.",
      name: "سارة الكواري",
      position: "المديرة المالية، شركة التقنية المالية"
    },
    {
      id: 7,
      quote: "محمد ليس فقط خبيراً في مجاله، بل يتمتع بمهارات اتصال ممتازة تجعل التعاون معه تجربة ممتعة ومثمرة.",
      name: "عمر الشريف",
      position: "مدير العمليات، سلسلة المتاجر الكبرى"
    },
    {
      id: 8,
      quote: "التوصيات التي قدمها محمد كانت واقعية وقابلة للتنفيذ، وقد حققنا عائد استثمار ممتاز من خلال تطبيقها.",
      name: "هديل فاروق",
      position: "المديرة التنفيذية، وكالة الإعلانات الرقمية"
    },
    {
      id: 9,
      quote: "وجدنا في محمد الشريك الاستراتيجي الذي كنا نبحث عنه.",
      name: "رامي عطية",
      position: "مؤسس ورئيس، شركة التكنولوجيا الخضراء"
    },
    {
      id: 10,
      quote: "التحول الذي شهدته شركتنا بعد استشارات محمد كان مذهلاً، من حيث التنظيم والإيرادات والكفاءة التشغيلية.",
      name: "نادين صباح",
      position: "نائب الرئيس، مجموعة الخدمات اللوجستية"
    },
  ];

  // نكرر الشهادات لإنشاء تأثير التمرير اللانهائي
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full py-16 bg-[var(--foreground)]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-[var(--primary-medium)]">ماذا يقول عملاؤنا؟</h2>
          <p className="max-w-3xl mx-auto text-[var(--neutral-medium)]">
            أراء شركاء الأعمال.. تعكس القيمة الحقيقية لخدماتي.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="logos group relative overflow-hidden whitespace-nowrap py-4 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            <div className="animate-slide-right-infinite group-hover:animation-pause inline-flex gap-30 w-max">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`first-${testimonial.id}-${index}`}
                  // التعديلات هنا لجعل عرض البطاقة يستجيب:
                  // w-[calc(100vw-48px)] يضمن أن البطاقة لا تتجاوز عرض الشاشة على الجوال
                  // sm:w-[350px] md:w-[400px] تعيد تحديد عرض ثابت للشاشات الأكبر
                  // mx-4 لإضافة مسافة أفقية بين البطاقات
                  className="card p-4 flex-shrink-0 w-[calc(100vw-130px)] sm:w-[350px] md:w-[400px] mx-4 h-auto min-h-[250px] flex flex-col justify-between bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
                >
                  <p className="mb-4 text-[var(--neutral-dark)] text-lg italic whitespace-normal break-words text-justify leading-relaxed max-h-[120px] overflow-y-auto">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  {/* خط فاصل */}
                  <div className="border-t border-[var(--primary-light)] border-opacity-30 my-4 w-3/4 mx-auto">
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-semibold text-[var(--primary-medium)]">{testimonial.name}</h3>
                      <p className="text-sm text-[var(--neutral-medium)]">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-slide-right-infinite group-hover:animation-pause inline-flex gap-30 w-max">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`second-${testimonial.id}-${index}`}
                  className="card p-4 flex-shrink-0 w-[calc(100vw-130px)] sm:w-[350px] md:w-[400px] mx-4 h-auto min-h-[250px] flex flex-col justify-between bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                >
                  <p className="mb-4 text-[var(--neutral-dark)] text-lg italic whitespace-normal break-words text-justify leading-relaxed max-h-[120px] overflow-y-auto">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  {/* خط فاصل */}
                  <div className="border-t border-[var(--primary-light)] border-opacity-30 my-4 w-3/4 mx-auto">
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-semibold text-[var(--primary-medium)]">{testimonial.name}</h3>
                      <p className="text-sm text-[var(--neutral-medium)]">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}