// src/components/ServicesSection.tsx
import Link from "next/link";

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
          <div className="card hover:border-r-4 hover:border-r-[var(--secondary-medium)]">
            <div className="mb-4 text-[var(--secondary-dark)]">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547 9.005 9.005 0 0 1 5.9 8.18.75.75 0 0 1-1.5.045 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.499-.044 9.005 9.005 0 0 1 5.9-8.181A5.496 5.496 0 0 1 3.5 8ZM9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8.29 4c-.148 0-.292.01-.434.03a.75.75 0 1 1-.212-1.484 6.53 6.53 0 0 1 3.349 9.436 6.5 6.5 0 0 1-5.5 3.044.75.75 0 0 1 0-1.5 5 5 0 0 0 5-5c0-2.484-1.808-4.526-4.203-4.526Z"></path>
              </svg>
            </div>
            <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2">التخطيط الاستراتيجي</h3>
            <p className="text-[var(--neutral-medium)]">
              تحليل الأسواق المعقدة، تحديد الفرص الكامنة، بناء نماذج أعمال مبتكرة، ووضع خرائط طريق واضحة لتحقيق النمو.
            </p>
            <Link href="/services#strategic-planning" className="mt-4 inline-block text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
              اكتشف المزيد ←
            </Link>
          </div>

          {/* بطاقة الخدمة 2 */}
          <div className="card hover:border-r-4 hover:border-r-[var(--secondary-medium)]">
            <div className="mb-4 text-[var(--secondary-dark)]">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"></path>
              </svg>
            </div>
            <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2">التسويق الرقمي المتكامل</h3>
            <p className="text-[var(--neutral-medium)]">
              استراتيجيات تسويقية شاملة تجمع بين وسائل التواصل الاجتماعي، تحسين محركات البحث، التسويق بالمحتوى، والتسويق عبر البريد الإلكتروني.
            </p>
            <Link href="/services#digital-marketing" className="mt-4 inline-block text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
              اكتشف المزيد ←
            </Link>
          </div>

          {/* بطاقة الخدمة 3 */}
          <div className="card hover:border-r-4 hover:border-r-[var(--secondary-medium)]">
            <div className="mb-4 text-[var(--secondary-dark)]">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z"></path>
              </svg>
            </div>
            <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2">تحليل البيانات لدعم القرار</h3>
            <p className="text-[var(--neutral-medium)]">
              الاستفادة من مهارات تحليل البيانات لاستخلاص رؤى قيمة تدعم اتخاذ القرارات التسويقية والاستراتيجية وتحسين الأداء.
            </p>
            <Link href="/services#data-analysis" className="mt-4 inline-block text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
              اكتشف المزيد ←
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            استعرض جميع الخدمات
          </Link>
        </div>
      </div>
    </section>
  );
}