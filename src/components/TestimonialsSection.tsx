// src/components/TestimonialsSection.tsx
import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "محمد ربيع مش بس ساعدنا نعمل خطة تسويق، هو عاد هيكلة الشركة بالكامل. انتقلنا من شركة معتمدة عليا بنسبة 100% لشركة شغالة بنظام.",
      name: "مؤسس شركة تقنية ناشئة",
      position: "Founder, Tech Startup"
    },
    {
      id: 2,
      quote: "كنت ببيع كتير بس مفيش سيولة. بعد استشارة محمد، اكتشفنا 'النزيف' فين، وفي خلال 3 شهور الوضع المالي اختلف تماماً.",
      name: "رئيس تنفيذي لعلامة تجارية",
      position: "CEO, Retail Brand"
    },
    {
      id: 3,
      quote: "أكتر حد فاهم يعني إيه Startups في مصر. كلامه من القلب ومباشر وموفرش علينا أي معلومة.",
      name: "مدير تسويق",
      position: "Marketing Manager"
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-medium)] mb-4">
            قصص نجاح <span className="text-[var(--secondary-medium)]">حقيقية</span>
          </h2>
          <p className="max-w-3xl mx-auto text-[var(--neutral-medium)] text-lg">
            شركات تحولت من الفوضى إلى النظام.. وبدأت في النمو المستدام.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative border border-gray-100"
            >
              <div className="text-[var(--secondary-medium)] text-6xl absolute top-4 right-6 opacity-20 font-serif">
                &quot;
              </div>

              <p className="mb-8 text-[var(--neutral-dark)] text-lg leading-relaxed relative z-10 min-h-[100px]">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 bg-[var(--primary-medium)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--primary-dark)]">{testimonial.name}</h3>
                  <p className="text-sm text-[var(--neutral-medium)]">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
