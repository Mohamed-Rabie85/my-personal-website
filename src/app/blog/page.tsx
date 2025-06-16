import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "المدونة | Mohamed Rabie مستشار تطوير أعمال وتسويق استراتيجي",
  description: "مقالات ورؤى متخصصة في مجالات التسويق الاستراتيجي، تطوير الأعمال، علم النفس التسويقي، وأحدث اتجاهات السوق لمساعدتك في تنمية أعمالك.",
};

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي */}
      <section className="w-full bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-medium)] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4">المدونة</h1>
          <p className="text-xl max-w-3xl mx-auto">
            مقالات ورؤى متخصصة لمساعدتك في تنمية أعمالك وتحقيق أهدافك
          </p>
        </div>
      </section>

      {/* قسم البحث والتصفية */}
      <section className="w-full py-8 bg-white ">
        <div className="section-container">
          {/* <div className="flex flex-col md:flex-row gap-4 justify-between items-center"> */}
          {/* <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="ابحث في المدونة..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-light))]"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"></path>
                </svg>
              </div>
            </div> */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <button className="cursor-pointer px-4 py-2 bg-[var(--secondary-medium)]  font-bold rounded-md hover:bg-[var(--secondary-dark)] transition-colors duration-300">
              جميع المقالات
            </button>
            <button className="cursor-pointer px-4 py-2 bg-[var(--secondary-medium)]  font-bold rounded-md hover:bg-[var(--secondary-dark)] transition-colors duration-300">
              التسويق الرقمي
            </button>
            <button className="cursor-pointer px-4 py-2 bg-[var(--secondary-medium)]  font-bold rounded-md hover:bg-[var(--secondary-dark)] transition-colors duration-300">
              تطوير الأعمال
            </button>
            <button className="cursor-pointer px-4 py-2 bg-[var(--secondary-medium)]  font-bold rounded-md hover:bg-[var(--secondary-dark)] transition-colors duration-300">
              علم النفس التسويقي
            </button>
          </div>
          {/* </div> */}
        </div>
      </section>

      {/* قسم المقالات المميزة */}
      <section className="w-full py-12 bg-white ">
        <div className="section-container">
          <h2 className="text-[var(--primary-dark)] text-center mb-8">المقالات المميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-26">
            {/* المقال المميز الأول */}
            <div className="card">
              <div className="bg-[var(--neutral-light)] h-64 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="bg-gray-200 relative rounded-lg overflow-hidden w-full h-full flex items-center justify-center">
                  {/* هنا يمكن إضافة صورة المشروع */}
                  <Image
                    src="/blog/1.png"
                    alt="الإنتاج الإعلامي"
                    width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                    height={600} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                    className="object-cover"
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-xs px-3 py-1 rounded-full">علم النفس التسويقي</span>
                  <span className="text-[var(--neutral-medium)] text-sm">15 مايو 2025</span>
                </div>
                <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2">كيف تؤثر علم النفس التسويقي على قرارات الشراء؟</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  استكشف كيف يمكن لفهم الدوافع النفسية للمستهلكين أن يساعدك في تصميم حملات تسويقية أكثر فعالية وتأثيرًا، وكيف يمكن استخدام هذه المعرفة بطريقة أخلاقية.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/blog/marketing-psychology-purchase-decisions" className="text-[var(--primary-medium)]">
                    قراءة المزيد &larr;
                  </Link>
                </div>
              </div>
            </div>

            {/* المقال المميز الثاني */}
            <div className="card">
              <div className="bg-[var(--neutral-light)] h-64 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="bg-gray-200 relative rounded-lg overflow-hidden w-full h-full flex items-center justify-center">
                  {/* هنا يمكن إضافة صورة المشروع */}
                  <Image
                    src="/blog/2.png"
                    alt="الإنتاج الإعلامي"
                    width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                    height={600} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                    className="object-cover"
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-xs px-3 py-1 rounded-full">تطوير الأعمال</span>
                  <span className="text-[var(--neutral-medium)] text-sm">10 مايو 2025</span>
                </div>
                <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2">5 استراتيجيات للنمو المستدام للشركات الناشئة</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  تعرف على أهم الاستراتيجيات التي يمكن للشركات الناشئة تبنيها لتحقيق نمو مستدام وطويل الأمد، مع أمثلة عملية ودروس مستفادة من تجارب ناجحة.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/blog/sustainable-growth-strategies-startups" className="text-[var(--primary-medium)]">
                    قراءة المزيد &larr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم جميع المقالات */}
      <section className="w-full py-12 bg-[var(--neutral-light)]">
        <div className="section-container">
          <h2 className="text-[var(--primary-dark)] text-center mb-8">جميع المقالات</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* مقال 1 */}
            <div className="card">
              <div className="bg-[var(--neutral-light)] h-48 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="bg-gray-200 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                  {/* هنا يمكن إضافة صورة المشروع */}
                  <Image
                    src="/blog/3.jpg"
                    alt="الإنتاج الإعلامي"
                    width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                    height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                    className="object-cover"
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-white text-xs px-3 py-1 rounded-full">التسويق الرقمي</span>
                  <span className="text-[var(--neutral-medium)] text-sm">5 مايو 2025</span>
                </div>
                <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2">كيفية بناء استراتيجية تسويق محتوى فعالة تحقق النتائج الملموسة</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  دليل شامل لبناء استراتيجية تسويق محتوى تجذب العملاء المحتملين وتحولهم إلى عملاء دائمين.
                </p>
                <Link href="/blog/effective-content-marketing-strategy" className="text-[var(--primary-medium)]">
                  قراءة المزيد &larr;
                </Link>
              </div>
            </div>

            {/* مقال 2 */}
            <div className="card">
              <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="bg-gray-200 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                  {/* هنا يمكن إضافة صورة المشروع */}
                  <Image
                    src="/blog/4.png"
                    alt="الإنتاج الإعلامي"
                    width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                    height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                    className="object-cover"
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-xs px-3 py-1 rounded-full">تحليل البيانات</span>
                  <span className="text-[var(--neutral-medium)] text-sm">1 مايو 2025</span>
                </div>
                <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2">كيف تستخدم تحليل البيانات لاتخاذ قرارات تسويقية أفضل</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  تعرف على كيفية استخدام البيانات والتحليلات لتحسين استراتيجيات التسويق واتخاذ قرارات مدروسة.
                </p>
                <Link href="/blog/data-analysis-marketing-decisions" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                  قراءة المزيد &larr;
                </Link>
              </div>
            </div>

            {/* مقال 3 */}
            <div className="card">
              <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="bg-gray-200 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                  {/* هنا يمكن إضافة صورة المشروع */}
                  <Image
                    src="/blog/5.jpg"
                    alt="الإنتاج الإعلامي"
                    width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                    height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                    className="object-cover"
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-xs px-3 py-1 rounded-full">بناء العلامة التجارية</span>
                  <span className="text-[var(--neutral-medium)] text-sm">25 أبريل 2025</span>
                </div>
                <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2">بناء علامة تجارية قوية في عصر وسائل التواصل الاجتماعي</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  استراتيجيات وتكتيكات لبناء علامة تجارية قوية ومميزة في عصر وسائل التواصل الاجتماعي.
                </p>
                <Link href="/blog/building-strong-brand-social-media-era" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                  قراءة المزيد &larr;
                </Link>
              </div>
            </div>

            {/* مقال 4 */}
            <div className="card">
              <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="bg-gray-200 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                  {/* هنا يمكن إضافة صورة المشروع */}
                  <Image
                    src="/blog/6.png"
                    alt="الإنتاج الإعلامي"
                    width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                    height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                    className="object-cover"
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-xs px-3 py-1 rounded-full">التخطيط الاستراتيجي</span>
                  <span className="text-[var(--neutral-medium)] text-sm">20 أبريل 2025</span>
                </div>
                <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2">كيفية وضع خطة استراتيجية فعالة لعملك</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  دليل خطوة بخطوة لوضع خطة استراتيجية فعالة تساعدك على تحقيق أهداف عملك وتجاوز التحديات.
                </p>
                <Link href="/blog/effective-strategic-planning-business" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                  قراءة المزيد &larr;
                </Link>
              </div>
            </div>

            {/* مقال 5 */}
            <div className="card">
              <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="bg-gray-200 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                  {/* هنا يمكن إضافة صورة المشروع */}
                  <Image
                    src="/blog/7.png"
                    alt="الإنتاج الإعلامي"
                    width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                    height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                    className="object-cover"
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-xs px-3 py-1 rounded-full">تجربة العملاء</span>
                  <span className="text-[var(--neutral-medium)] text-sm">15 أبريل 2025</span>
                </div>
                <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2">كيف تصمم تجربة عملاء استثنائية تعزز الولاء</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  استراتيجيات وأفكار لتصميم تجربة عملاء استثنائية تعزز الولاء وتزيد من معدلات الاحتفاظ بالعملاء.
                </p>
                <Link href="/blog/exceptional-customer-experience-loyalty" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                  قراءة المزيد &larr;
                </Link>
              </div>
            </div>

            {/* مقال 6 */}
            <div className="card">
              <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="bg-gray-200 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                  {/* هنا يمكن إضافة صورة المشروع */}
                  <Image
                    src="/blog/8.png"
                    alt="الإنتاج الإعلامي"
                    width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                    height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                    className="object-cover"
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-xs px-3 py-1 rounded-full">الإنتاج الإعلامي</span>
                  <span className="text-[var(--neutral-medium)] text-sm">10 أبريل 2025</span>
                </div>
                <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2">أهمية الإنتاج الإعلامي في بناء هوية العلامة التجارية</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  كيف يمكن للإنتاج الإعلامي المتميز أن يساهم في بناء هوية قوية للعلامة التجارية وتعزيز تواجدها في السوق.
                </p>
                <Link href="/blog/media-production-brand-identity" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                  قراءة المزيد &larr;
                </Link>
              </div>
            </div>
          </div>

          {/* زر تحميل المزيد */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              تحميل المزيد من المقالات
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
