// src/components/ServicesSection.tsx
import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="w-full py-16 bg-[var(--foreground)]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-[var(--primary-medium)]">خدمات استشارية متخصصة</h2>
          <p className="max-w-3xl mx-auto text-[var(--neutral-medium)]">
            خبرة عملية تمتد لأكثر من 20 عاماً في طليعة التحولات التسويقية، تطوير الأعمال، والابتكار التشغيلي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* بطاقة الخدمة 1 */}
          <div className="card">
            <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
              {/* هنا يمكن إضافة صورة المشروع */}
              <Image
                src="/services/strategic-planning.png"
                alt="التخطيط الاستراتيجي"
                width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                className="object-cover w-full h-full"
                quality={100}
                priority
              />
            </div>
            <h3 className="text-[var(--primary-medium)] text-xl font-semibold my-2 mx-2">التخطيط الاستراتيجي</h3>
            <p className="text-[var(--neutral-medium)] my-2 mx-2">
              تحليل الأسواق المعقدة، تحديد الفرص الكامنة، بناء نماذج أعمال مبتكرة، ووضع خرائط طريق واضحة لتحقيق النمو.
            </p>
            <Link href="/services#strategic-planning" className="my-4 mx-2 inline-block text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
              اكتشف المزيد ←
            </Link>
          </div>

          {/* بطاقة الخدمة 2 */}
          <div className="card">
            <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
              {/* هنا يمكن إضافة صورة المشروع */}
              <Image
                src="/services/marketing-psychology.png"
                alt="التسويق المتكامل"
                width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                className="object-cover w-full h-full"
                quality={100}
                priority
              />
            </div>
            <h3 className="text-[var(--primary-medium)] text-xl font-semibold my-2 mx-2">التسويق الرقمي المتكامل</h3>
            <p className="text-[var(--neutral-medium)] my-2 mx-2">
              استراتيجيات تسويقية شاملة تجمع بين وسائل التواصل الاجتماعي، تحسين محركات البحث، التسويق بالمحتوى، والتسويق عبر البريد الإلكتروني.
            </p>
            <Link href="/services#marketing" className="my-4 mx-2 inline-block text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
              اكتشف المزيد ←
            </Link>
          </div>

          {/* بطاقة الخدمة 3 */}
          <div className="card">
            <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
              {/* هنا يمكن إضافة صورة المشروع */}
              <Image
                src="/services/data-analysis.png"
                alt="تحليل البيانات لدعم القرار"
                width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                className="object-cover w-full h-full"
                quality={100}
                priority
              />
            </div>
            <h3 className="text-[var(--primary-medium)] text-xl font-semibold my-2 mx-2">تحليل البيانات لدعم القرار</h3>
            <p className="text-[var(--neutral-medium)] my-2 mx-2">
              الاستفادة من مهارات تحليل البيانات لاستخلاص رؤى قيمة تدعم اتخاذ القرارات التسويقية والاستراتيجية وتحسين الأداء.
            </p>
            <Link href="/services#data-analysis" className="my-4 mx-2 inline-block text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
              اكتشف المزيد ←
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary ">
            استعرض جميع الخدمات
          </Link>
        </div>
      </div>
    </section>
  );
}