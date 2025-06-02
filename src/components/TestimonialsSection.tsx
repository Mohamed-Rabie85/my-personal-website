// src/components/TestimonialsSection.tsx
// import Image from "next/image"; // إذا كنت تخطط لاستخدام صور العملاء، ألغِ تفعيل هذا السطر

export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 bg-[var(--foreground)]"> {/* خلفية بيضاء لتناسق الألوان */}
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-[var(--primary-dark)]">ماذا يقول عملاؤنا؟</h2>
          <p className="max-w-3xl mx-auto text-[var(--neutral-medium)]">
            قصص نجاح من شركاء أعمالنا تعكس القيمة الحقيقية لخدماتنا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* شهادة العميل 1 */}
          <div className="card p-6">
            <p className="mb-4 text-[var(--neutral-dark)] text-lg italic">&quot;
              محمد هو استشاري استثنائي يجمع بين الفهم العميق للسوق والقدرة على تحويل التحديات إلى فرص نمو ملموسة. خبرته الواسعة أحدثت فرقًا حقيقيًا في أعمالنا.
              &quot;
            </p>
            <div className="flex items-center gap-4">
              {/* <Image src="/path/to/client-avatar1.jpg" alt="Client Name" width={50} height={50} className="rounded-full" /> */}
              <div>
                <h3 className="font-semibold text-[var(--primary-medium)]">اسم العميل الأول</h3>
                <p className="text-sm text-[var(--neutral-medium)]">المنصب، اسم الشركة</p>
              </div>
            </div>
          </div>

          {/* شهادة العميل 2 */}
          <div className="card p-6">
            <p className="mb-4 text-[var(--neutral-dark)] text-lg italic">&quot;
              لم نكن نتوقع هذا المستوى من التحليل الاستراتيجي والدعم التقني. محمد يمتلك رؤية فريدة وقدرة على تبسيط الأمور المعقدة، مما ساعدنا على تحقيق أهدافنا بسرعة وكفاءة.
              &quot;
            </p>
            <div className="flex items-center gap-4">
              {/* <Image src="/path/to/client-avatar2.jpg" alt="Client Name" width={50} height={50} className="rounded-full" /> */}
              <div>
                <h3 className="font-semibold text-[var(--primary-medium)]">اسم العميل الثاني</h3>
                <p className="text-sm text-[var(--neutral-medium)]">المنصب، اسم الشركة</p>
              </div>
            </div>
          </div>
          {/* يمكن إضافة المزيد من الشهادات هنا */}
        </div>
      </div>
    </section>
  );
}