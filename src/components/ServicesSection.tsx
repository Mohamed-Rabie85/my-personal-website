// src/components/ServicesSection.tsx
import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="w-full py-16 bg-[var(--foreground)]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-medium)] mb-4">
            حلول عملية من <span className="text-[var(--secondary-medium)]">قلب المطبخ</span>، مش كلام كتب
          </h2>
          <p className="max-w-3xl mx-auto text-[var(--neutral-medium)] text-lg">
            خدمات مصممة عشان تحل المشاكل من جذورها، مش مجرد مسكنات مؤقتة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* بطاقة الخدمة 1 */}
          <div className="card group hover:border-[var(--secondary-medium)] transition-all duration-300 border-2 border-transparent p-6 text-center">
            <Link href="/services#startup-formation" className="block relative h-full">
              <div className="h-48 relative rounded-lg overflow-hidden w-full mb-6">
                <Image
                  src="/services/startup-formation.PNG"
                  alt="تأسيس الشركات بنظام"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-4 group-hover:text-[var(--secondary-medium)] transition-colors">
                تأسيس الشركات بنظام
              </h3>
              <p className="text-[var(--neutral-dark)] leading-relaxed px-2">
                عشان تبدأ صح ومتعيدش اختراع العجلة. بنبني الأساسات القانونية والمالية والتشغيلية اللي تشيل الشركة سنين قدام.
              </p>
            </Link>
          </div>

          {/* بطاقة الخدمة 2 */}
          <div className="card group hover:border-[var(--secondary-medium)] transition-all duration-300 border-2 border-transparent p-6 text-center">
            <Link href="/services#restructuring" className="block relative h-full">
              <div className="h-48 relative rounded-lg overflow-hidden w-full mb-6">
                <Image
                  src="/services/restructuring.PNG"
                  alt="إعادة الهيكلة والنمو"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-4 group-hover:text-[var(--secondary-medium)] transition-colors">
                إعادة الهيكلة والنمو
              </h3>
              <p className="text-[var(--neutral-dark)] leading-relaxed px-2">
                لفك الاشتباك وتنظيم العمليات للشركات القائمة. بنحدد أماكن النزيف والهدر، ونحط نظام يخلي الشركة تشتغل لوحدها.
              </p>
            </Link>
          </div>

          {/* بطاقة الخدمة 3 */}
          <div className="card group hover:border-[var(--secondary-medium)] transition-all duration-300 border-2 border-transparent p-6 text-center">
            <Link href="/services#executive-partner" className="block relative h-full">
              <div className="h-48 relative rounded-lg overflow-hidden w-full mb-6">
                <Image
                  src="/services/executive-partner.png"
                  alt="الشريك التنفيذي"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-4 group-hover:text-[var(--secondary-medium)] transition-colors">
                الشريك التنفيذي (Fractional COO)
              </h3>
              <p className="text-[var(--neutral-dark)] leading-relaxed px-2">
                مش مجرد استشارة.. دي إدارة وتنفيذ. أنا وفريق (ريو للحلول التسويقية - Rio Marketing Solutions) بنكون ذراعك اليمين، تنفيذ خطوة بخطوة لحد ما نوصل للهدف.
              </p>
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary px-8 py-3 text-lg shadow-md hover:shadow-lg">
            اكتشف كل الحلول
          </Link>
        </div>
      </div>
    </section>
  );
}
