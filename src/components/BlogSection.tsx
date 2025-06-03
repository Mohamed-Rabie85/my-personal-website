// src/components/BlogSection.tsx
import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="w-full py-16 bg-[var(--foreground)]"> {/* خلفية بيضاء */}
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-[var(--primary-dark)]">أحدث المقالات والرؤى</h2>
          <p className="max-w-3xl mx-auto text-[var(--neutral-medium)]">
            أشارك خبراتي ومعرفتي في مجالات التخطيط الاستراتيجي، تطوير الأعمال، التسويق، والتقنية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* مقال 1 (Placeholder) */}
          <div className="card hover:shadow-xl transition-all">
            <div className="bg-gray-200 h-50 rounded-t-lg flex items-center justify-center">
              {/* هنا يمكن إضافة صورة المقال */}
              <div className="text-center text-[var(--neutral-medium)]">
                <Image
                  src="/images/article1.png" // المسار إلى ملف PNG في مجلد public
                  alt="صورة المقال"
                  width={400}  // العرض الفعلي للصورة
                  height={400} // الارتفاع الفعلي للصورة
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="bg-[rgb(var(--secondary-light))] text-[var(--neutral-medium)] text-xs px-3 py-1 rounded-full">علم النفس التسويقي</span>
                <span className="text-[var(--neutral-medium)] text-sm">15 مايو 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-medium)]">كيف يؤثر علم النفس التسويقي على قرارات الشراء؟</h3>
              <p className="text-[var(--neutral-medium)] mb-4">
                استكشف كيف يمكن لفهم الدوافع النفسية للمستهلكين أن يساعدك في تصميم حملات تسويقية أكثر فعالية وتأثيرًا، وكيف يمكن استخدام هذه المعرفة بطريقة أخلاقية.
              </p>
              <div className="flex justify-between items-center">
                <Link href="/blog/article-1" className="text-[var(--neutral-medium)] hover:text-[var(--secondary-medium)] font-medium">
                  اقرأ المزيد ←
                </Link>
              </div>
            </div>
          </div>
          {/* مقال 2 (Placeholder) */}
          <div className="card hover:shadow-xl transition-all">
            <div className="bg-gray-200 h-50 rounded-t-lg flex items-center justify-center">
              {/* هنا يمكن إضافة صورة المقال */}
              <div className="text-center text-[var(--neutral-medium)]">
                <Image
                  src="/images/article2.png" // المسار إلى ملف PNG في مجلد public
                  alt="صورة المقال"
                  width={400}  // العرض الفعلي للصورة
                  height={400} // الارتفاع الفعلي للصورة
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="bg-[rgb(var(--secondary-light))] text-[var(--neutral-medium)] text-xs px-3 py-1 rounded-full">تطوير الأعمال</span>
                <span className="text-[var(--neutral-medium)] text-sm">10 مايو 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-medium)]">5 استراتيجيات للنمو المستدام للشركات الناشئة</h3>
              <p className="text-[var(--neutral-medium)] mb-4">
                تعرف على أهم الاستراتيجيات التي يمكن للشركات الناشئة تبنيها لتحقيق نمو مستدام وطويل الأمد، مع أمثلة عملية ودروس مستفادة من تجارب ناجحة.
              </p>
              <div className="flex justify-between items-center">
                <Link href="/blog/article-2" className="text-[var(--neutral-medium)] hover:text-[var(--secondary-medium)] font-medium">
                  اقرأ المزيد ←
                </Link>
              </div>
            </div>
          </div>
          {/* مقال 3 (Placeholder) */}
          <div className="card hover:shadow-xl transition-all">
            <div className="bg-gray-200 h-50 rounded-t-lg flex items-center justify-center">
              {/* هنا يمكن إضافة صورة المقال */}
              <div className="text-center text-[var(--neutral-medium)]">
                <Image
                  src="/images/article3.jpg" // المسار إلى ملف PNG في مجلد public
                  alt="صورة المقال"
                  width={400}  // العرض الفعلي للصورة
                  height={400} // الارتفاع الفعلي للصورة
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="bg-[rgb(var(--secondary-light))] text-[var(--neutral-medium)] text-xs px-3 py-1 rounded-full">التسويق الرقمي</span>
                <span className="text-[var(--neutral-medium)] text-sm">5 مايو 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-medium)]">كيفية بناء استراتيجية تسويق محتوى فعالة</h3>
              <p className="text-[var(--neutral-medium)] mb-4">
                دليل شامل لبناء استراتيجية تسويق محتوى تجذب العملاء المحتملين وتحولهم إلى عملاء دائمين.
              </p>
              <div className="flex justify-between items-center">
                <Link href="/blog/article-3" className="text-[var(--neutral-medium)] hover:text-[var(--secondary-medium)] font-medium">
                  اقرأ المزيد ←
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 ">
          <Link href="/blog" className="btn-primary ">
            تصفح المدونة
          </Link>
        </div>
      </div>
    </section>
  );
}