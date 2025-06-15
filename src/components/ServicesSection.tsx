// src/components/ServicesSection.tsx
import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="w-full py-16 bg-[var(--foreground)]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-[var(--primary-medium)]">خدماتي</h2>
          {/* <p className="max-w-3xl mx-auto text-[var(--neutral-medium)]">
            خبرة عملية تمتد لأكثر من 20 عاماً في طليعة التحولات التسويقية، تطوير الأعمال، والابتكار التشغيلي
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* بطاقة الخدمة 1 */}
          <div className="card">
            <Link href="/services#startup-formation" className="my-4 mx-2 inline-block text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
              <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المشروع */}
                <Image
                  src="/services/startup-formation.png"
                  alt="التخطيط الاستراتيجي"
                  width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                  height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                  className="object-cover w-full h-full"
                  quality={100}
                  priority
                />
              </div>
              <h3 className="text-[var(--primary-medium)] text-center text-xl font-semibold my-4 mx-2">تأسيس مشروعك من الصفر</h3>
              <p className="text-[var(--neutral-medium)] my-2 mx-2">
                عندك فكرة؟ سنحولها معًا إلى شركة حقيقية. ندرس السوق، نحدد نموذج الربح، ونضع خطة عمل واضحة لتبدأ بداية صحيحة وتتجنب أخطاء البدايات
              </p>
            </Link>
          </div>

          {/* بطاقة الخدمة 2 */}
          <div className="card">
            <Link href="/services#restructuring" className="my-4 mx-2 inline-block text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
              <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المشروع */}
                <Image
                  src="/services/restructuring.png"
                  alt="التسويق المتكامل"
                  width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                  height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                  className="object-cover w-full h-full"
                  quality={100}
                  priority
                />
              </div>
              <h3 className="text-[var(--primary-medium)] text-center text-xl font-semibold my-4 mx-2">إعادة هيكلة شركتك للنمو</h3>
              <p className="text-[var(--neutral-medium)] my-2 mx-2">
                هل شركتك متوقفة عن النمو أو تواجه صعوبات؟ نقوم بتقييم كامل للوضع، ونعيد هيكلة التسويق والعمليات لتعود الشركة إلى الربحية والنمو من جديد
              </p>
            </Link>
          </div>

          {/* بطاقة الخدمة 3 */}
          <div className="card">
            <Link href="/services#executive-partner" className="my-4 mx-2 inline-block text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
              <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المشروع */}
                <Image
                  src="/services/executive-partner.png"
                  alt="تحليل البيانات لدعم القرار"
                  width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                  height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                  className="object-cover w-full h-full"
                  quality={100}
                  priority
                />
              </div>
              <h3 className="text-[var(--primary-medium)] text-center text-xl font-semibold my-4 mx-2">شريكك التنفيذي</h3>
              <p className="text-[var(--neutral-medium)] my-2 mx-2">
                ليست مجرد استشارات. سأكون معك في الصورة بشكل كامل، أشرف على التنفيذ وأشارك في القرارات الصعبة، لأضمن وصولنا للأهداف التي خططنا لها
              </p>
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            خدماتي الكاملة
          </Link>
        </div>
      </div>
    </section>
  );
}