import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "المدونة | مستشار تطوير أعمال وتسويق استراتيجي",
  description: "مقالات ورؤى متخصصة في مجالات التسويق الاستراتيجي، تطوير الأعمال، علم النفس التسويقي، وأحدث اتجاهات السوق لمساعدتك في تنمية أعمالك.",
};

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي */}
      <section className="w-full bg-gradient-to-b from-[rgb(var(--primary-dark))] to-[rgb(var(--primary-medium))] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4">المدونة</h1>
          <p className="text-xl max-w-3xl mx-auto">
            مقالات ورؤى متخصصة لمساعدتك في تنمية أعمالك وتحقيق أهدافك
          </p>
        </div>
      </section>

      {/* قسم البحث والتصفية */}
      <section className="w-full py-8 bg-white dark:bg-slate-900">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-1/3">
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
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button className="px-4 py-2 bg-[rgb(var(--primary-light))] text-white rounded-md hover:bg-[rgb(var(--primary-medium))] transition-colors">
                جميع المقالات
              </button>
              <button className="px-4 py-2 bg-gray-200 text-[rgb(var(--neutral-dark))] rounded-md hover:bg-gray-300 transition-colors">
                التسويق الرقمي
              </button>
              <button className="px-4 py-2 bg-gray-200 text-[rgb(var(--neutral-dark))] rounded-md hover:bg-gray-300 transition-colors">
                تطوير الأعمال
              </button>
              <button className="px-4 py-2 bg-gray-200 text-[rgb(var(--neutral-dark))] rounded-md hover:bg-gray-300 transition-colors">
                علم النفس التسويقي
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* قسم المقالات المميزة */}
      <section className="w-full py-12 bg-white dark:bg-slate-900">
        <div className="section-container">
          <h2 className="text-[rgb(var(--primary-dark))] mb-8">المقالات المميزة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* المقال المميز الأول */}
            <div className="card hover:shadow-xl transition-all">
              <div className="bg-gray-200 h-64 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"></path>
                  </svg>
                  <p>صورة المقال</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[rgb(var(--secondary-light))] text-white text-xs px-3 py-1 rounded-full">علم النفس التسويقي</span>
                  <span className="text-[rgb(var(--neutral-medium))] text-sm">15 مايو 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">كيف تؤثر علم النفس التسويقي على قرارات الشراء؟</h3>
                <p className="text-[rgb(var(--neutral-medium))] mb-4">
                  استكشف كيف يمكن لفهم الدوافع النفسية للمستهلكين أن يساعدك في تصميم حملات تسويقية أكثر فعالية وتأثيرًا، وكيف يمكن استخدام هذه المعرفة بطريقة أخلاقية.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/blog/marketing-psychology-purchase-decisions" className="text-[rgb(var(--primary-medium))] hover:text-[rgb(var(--primary-dark))] font-medium">
                    قراءة المزيد &larr;
                  </Link>
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-[rgb(var(--neutral-medium))]">بقلم: أحمد محمد</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* المقال المميز الثاني */}
            <div className="card hover:shadow-xl transition-all">
              <div className="bg-gray-200 h-64 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"></path>
                  </svg>
                  <p>صورة المقال</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[rgb(var(--secondary-light))] text-white text-xs px-3 py-1 rounded-full">تطوير الأعمال</span>
                  <span className="text-[rgb(var(--neutral-medium))] text-sm">10 مايو 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">5 استراتيجيات للنمو المستدام للشركات الناشئة</h3>
                <p className="text-[rgb(var(--neutral-medium))] mb-4">
                  تعرف على أهم الاستراتيجيات التي يمكن للشركات الناشئة تبنيها لتحقيق نمو مستدام وطويل الأمد، مع أمثلة عملية ودروس مستفادة من تجارب ناجحة.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/blog/sustainable-growth-strategies-startups" className="text-[rgb(var(--primary-medium))] hover:text-[rgb(var(--primary-dark))] font-medium">
                    قراءة المزيد &larr;
                  </Link>
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-[rgb(var(--neutral-medium))]">بقلم: سارة خالد</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم جميع المقالات */}
      <section className="w-full py-12 bg-gray-50 dark:bg-slate-800">
        <div className="section-container">
          <h2 className="text-[rgb(var(--primary-dark))] mb-8">جميع المقالات</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* مقال 1 */}
            <div className="card hover:shadow-xl transition-all">
              <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"></path>
                  </svg>
                  <p>صورة المقال</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[rgb(var(--secondary-light))] text-white text-xs px-3 py-1 rounded-full">التسويق الرقمي</span>
                  <span className="text-[rgb(var(--neutral-medium))] text-sm">5 مايو 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">كيفية بناء استراتيجية تسويق محتوى فعالة</h3>
                <p className="text-[rgb(var(--neutral-medium))] mb-4">
                  دليل شامل لبناء استراتيجية تسويق محتوى تجذب العملاء المحتملين وتحولهم إلى عملاء دائمين.
                </p>
                <Link href="/blog/effective-content-marketing-strategy" className="text-[rgb(var(--primary-medium))] hover:text-[rgb(var(--primary-dark))] font-medium">
                  قراءة المزيد &larr;
                </Link>
              </div>
            </div>
            
            {/* مقال 2 */}
            <div className="card hover:shadow-xl transition-all">
              <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"></path>
                  </svg>
                  <p>صورة المقال</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[rgb(var(--secondary-light))] text-white text-xs px-3 py-1 rounded-full">تحليل البيانات</span>
                  <span className="text-[rgb(var(--neutral-medium))] text-sm">1 مايو 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">كيف تستخدم تحليل البيانات لاتخاذ قرارات تسويقية أفضل</h3>
                <p className="text-[rgb(var(--neutral-medium))] mb-4">
                  تعرف على كيفية استخدام البيانات والتحليلات لتحسين استراتيجيات التسويق واتخاذ قرارات مدروسة.
                </p>
                <Link href="/blog/data-analysis-marketing-decisions" className="text-[rgb(var(--primary-medium))] hover:text-[rgb(var(--primary-dark))] font-medium">
                  قراءة المزيد &larr;
                </Link>
              </div>
            </div>
            
            {/* مقال 3 */}
            <div className="card hover:shadow-xl transition-all">
              <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"></path>
                  </svg>
                  <p>صورة المقال</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[rgb(var(--secondary-light))] text-white text-xs px-3 py-1 rounded-full">بناء العلامة التجارية</span>
                  <span className="text-[rgb(var(--neutral-medium))] text-sm">25 أبريل 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">بناء علامة تجارية قوية في عصر وسائل التواصل الاجتماعي</h3>
                <p className="text-[rgb(var(--neutral-medium))] mb-4">
                  استراتيجيات وتكتيكات لبناء علامة تجارية قوية ومميزة في عصر وسائل التواصل الاجتماعي.
                </p>
                <Link href="/blog/building-strong-brand-social-media-era" className="text-[rgb(var(--primary-medium))] hover:text-[rgb(var(--primary-dark))] font-medium">
                  قراءة المزيد &larr;
                </Link>
              </div>
            </div>
            
            {/* مقال 4 */}
            <div className="card hover:shadow-xl transition-all">
              <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"></path>
                  </svg>
                  <p>صورة المقال</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[rgb(var(--secondary-light))] text-white text-xs px-3 py-1 rounded-full">التخطيط الاستراتيجي</span>
                  <span className="text-[rgb(var(--neutral-medium))] text-sm">20 أبريل 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">كيفية وضع خطة استراتيجية فعالة لعملك</h3>
                <p className="text-[rgb(var(--neutral-medium))] mb-4">
                  دليل خطوة بخطوة لوضع خطة استراتيجية فعالة تساعدك على تحقيق أهداف عملك وتجاوز التحديات.
                </p>
                <Link href="/blog/effective-strategic-planning-business" className="text-[rgb(var(--primary-medium))] hover:text-[rgb(var(--primary-dark))] font-medium">
                  قراءة المزيد &larr;
                </Link>
              </div>
            </div>
            
            {/* مقال 5 */}
            <div className="card hover:shadow-xl transition-all">
              <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"></path>
                  </svg>
                  <p>صورة المقال</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[rgb(var(--secondary-light))] text-white text-xs px-3 py-1 rounded-full">تجربة العملاء</span>
                  <span className="text-[rgb(var(--neutral-medium))] text-sm">15 أبريل 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">كيف تصمم تجربة عملاء استثنائية تعزز الولاء</h3>
                <p className="text-[rgb(var(--neutral-medium))] mb-4">
                  استراتيجيات وأفكار لتصميم تجربة عملاء استثنائية تعزز الولاء وتزيد من معدلات الاحتفاظ بالعملاء.
                </p>
                <Link href="/blog/exceptional-customer-experience-loyalty" className="text-[rgb(var(--primary-medium))] hover:text-[rgb(var(--primary-dark))] font-medium">
                  قراءة المزيد &larr;
                </Link>
              </div>
            </div>
            
            {/* مقال 6 */}
            <div className="card hover:shadow-xl transition-all">
              <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المقال */}
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"></path>
                  </svg>
                  <p>صورة المقال</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[rgb(var(--secondary-light))] text-white text-xs px-3 py-1 rounded-full">الإنتاج الإعلامي</span>
                  <span className="text-[rgb(var(--neutral-medium))] text-sm">10 أبريل 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">أهمية الإنتاج الإعلامي في بناء هوية العلامة التجارية</h3>
                <p className="text-[rgb(var(--neutral-medium))] mb-4">
                  كيف يمكن للإنتاج الإعلامي المتميز أن يساهم في بناء هوية قوية للعلامة التجارية وتعزيز تواجدها في السوق.
                </p>
                <Link href="/blog/media-production-brand-identity" className="text-[rgb(var(--primary-medium))] hover:text-[rgb(var(--primary-dark))] font-medium">
                  قراءة المزيد &larr;
                </Link>
              </div>
            </div>
          </div>
          
          {/* زر تحميل المزيد */}
          <div className="text-center mt-12">
            <button className="btn-primary">
              تحميل المزيد من المقالات
            </button>
          </div>
        </div>
      </section>

      {/* قسم الاشتراك في النشرة البريدية */}
      <section className="w-full py-16 bg-[rgb(var(--primary-dark))] text-white">
        <div className="section-container text-center">
          <h2 className="text-white mb-6">اشترك في نشرتنا البريدية</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            احصل على أحدث المقالات والرؤى في مجالات التسويق وتطوير الأعمال مباشرة إلى بريدك الإلكتروني.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-3 rounded-md focus:outline-none"
              />
              <button className="btn-secondary whitespace-nowrap">
                اشترك الآن
              </button>
            </div>
            <p className="text-sm mt-4 text-gray-300">
              لن نشارك بريدك الإلكتروني مع أي جهة أخرى. يمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
