import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "الخدمات | مستشار تطوير أعمال وتسويق استراتيجي",
  description: "خدمات استشارية متخصصة في التخطيط الاستراتيجي، التسويق الرقمي، علم النفس التسويقي، تحليل البيانات، والإنتاج الإعلامي للشركات الناشئة والصغيرة والمتوسطة.",
};

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي */}
      <section className="w-full bg-gradient-to-b from-[rgb(var(--primary-dark))] to-[rgb(var(--primary-medium))] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4">خدماتي الاستشارية</h1>
          <p className="text-xl max-w-3xl mx-auto">
            حلول متكاملة ومخصصة لتحقيق النمو المستدام وبناء علامات تجارية مؤثرة
          </p>
        </div>
      </section>

      {/* قسم مقدمة الخدمات */}
      <section className="w-full py-16 bg-white dark:bg-slate-900">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[rgb(var(--primary-dark))]">منهجية شاملة لتحقيق النتائج</h2>
            <p className="text-[rgb(var(--neutral-medium))] max-w-3xl mx-auto">
              لا أقدم استشارات نظرية فقط، بل حلولاً قابلة للتطبيق على أرض الواقع. من خلال خبرتي المتنوعة، أقدم مجموعة متكاملة من الخدمات المصممة خصيصاً لتلبية احتياجات عملائي.
            </p>
          </div>
        </div>
      </section>

      {/* قسم التخطيط الاستراتيجي */}
      <section id="strategic-planning" className="w-full py-16 bg-gray-50 dark:bg-slate-800">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[rgb(var(--primary-dark))] mb-6">التخطيط الاستراتيجي</h2>
              <p className="mb-4 text-[rgb(var(--neutral-medium))]">
                أساعد الشركات على رسم مسار واضح للنمو من خلال تحليل دقيق للسوق والمنافسين، وتحديد الفرص الكامنة، وبناء استراتيجيات مبتكرة تحقق أهدافهم.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">تحليل السوق والمنافسين</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">بناء نماذج أعمال مبتكرة</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">وضع خرائط طريق واضحة للنمو</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">استراتيجيات دخول أسواق جديدة</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">إعادة هيكلة العمليات القائمة</p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation" className="btn-secondary">
                استشارة في التخطيط الاستراتيجي
              </Link>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              {/* هنا يمكن إضافة صورة توضيحية */}
              <div className="text-center text-gray-500">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"></path>
                </svg>
                <p>صورة توضيحية للتخطيط الاستراتيجي</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم التسويق الرقمي */}
      <section id="digital-marketing" className="w-full py-16 bg-white dark:bg-slate-900">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              {/* هنا يمكن إضافة صورة توضيحية */}
              <div className="text-center text-gray-500">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"></path>
                </svg>
                <p>صورة توضيحية للتسويق الرقمي</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-[rgb(var(--primary-dark))] mb-6">التسويق الرقمي المتكامل</h2>
              <p className="mb-4 text-[rgb(var(--neutral-medium))]">
                أقدم استراتيجيات تسويقية شاملة تجمع بين مختلف قنوات التسويق الرقمي لتحقيق أقصى تأثير وأفضل عائد على الاستثمار.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">إدارة وسائل التواصل الاجتماعي</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">تحسين محركات البحث (SEO)</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">التسويق بالمحتوى</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">إعلانات الدفع لكل نقرة (PPC)</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">التسويق عبر البريد الإلكتروني</p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation" className="btn-secondary">
                استشارة في التسويق الرقمي
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* قسم علم النفس التسويقي */}
      <section id="marketing-psychology" className="w-full py-16 bg-gray-50 dark:bg-slate-800">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[rgb(var(--primary-dark))] mb-6">علم النفس التسويقي التطبيقي</h2>
              <p className="mb-4 text-[rgb(var(--neutral-medium))]">
                أستخدم فهمي العميق لسلوك المستهلك ودوافعه لبناء حملات تسويقية أكثر تأثيراً وتصميم تجارب عملاء لا تُنسى، مع الالتزام الكامل بالمبادئ الأخلاقية والشفافية.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">فهم دوافع المستهلك وعمليات اتخاذ القرار</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">صياغة رسائل تخاطب العقل والقلب</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">تصميم تجارب عملاء لا تُنسى</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">بناء علاقات قوية مع العملاء</p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation" className="btn-secondary">
                استشارة في علم النفس التسويقي
              </Link>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              {/* هنا يمكن إضافة صورة توضيحية */}
              <div className="text-center text-gray-500">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
                </svg>
                <p>صورة توضيحية لعلم النفس التسويقي</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم تحليل البيانات */}
      <section id="data-analysis" className="w-full py-16 bg-white dark:bg-slate-900">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              {/* هنا يمكن إضافة صورة توضيحية */}
              <div className="text-center text-gray-500">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z"></path>
                </svg>
                <p>صورة توضيحية لتحليل البيانات</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-[rgb(var(--primary-dark))] mb-6">تحليل البيانات لدعم القرار</h2>
              <p className="mb-4 text-[rgb(var(--neutral-medium))]">
                أستفيد من مهارات تحليل البيانات لاستخلاص رؤى قيمة تدعم اتخاذ القرارات التسويقية والاستراتيجية وتحسين الأداء.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">تحليل أداء الحملات التسويقية</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">تحليل سلوك المستخدم وتجربة العملاء</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">تحليل اتجاهات السوق والمنافسين</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">إعداد تقارير أداء وتوصيات قابلة للتنفيذ</p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation" className="btn-secondary">
                استشارة في تحليل البيانات
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الإنتاج الإعلامي */}
      <section id="media-production" className="w-full py-16 bg-gray-50 dark:bg-slate-800">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[rgb(var(--primary-dark))] mb-6">الإنتاج الإعلامي والإعلاني</h2>
              <p className="mb-4 text-[rgb(var(--neutral-medium))]">
                أقدم خدمات إنتاج إعلامي وإعلاني متكاملة من خلال إدارة وكالات متخصصة في مختلف مجالات الإنتاج الإعلامي.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">تصميم وتصنيع الحروف البارزة والكلادينج</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">تصميم وتنفيذ أجنحة المعارض والمؤتمرات</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">خدمات الطباعة الرقمية والورقية</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">حلول التغليف المبتكرة</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[rgb(var(--secondary-medium))] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[rgb(var(--neutral-medium))]">إعداد وتطوير محتوى للبرامج التلفزيونية</p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation" className="btn-secondary">
                استشارة في الإنتاج الإعلامي
              </Link>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              {/* هنا يمكن إضافة صورة توضيحية */}
              <div className="text-center text-gray-500">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z"></path>
                </svg>
                <p>صورة توضيحية للإنتاج الإعلامي</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم دعوة للعمل */}
      <section className="w-full py-16 bg-[rgb(var(--primary-dark))] text-white">
        <div className="section-container text-center">
          <h2 className="text-white mb-6">هل أنت جاهز لتحويل رؤيتك إلى واقع؟</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            دعنا نتحدث عن كيفية مساعدتك في تحقيق أهدافك وتطوير أعمالك بشكل استراتيجي ومستدام.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/consultation" className="btn-secondary">
              احجز استشارة مجانية
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[rgb(var(--primary-dark))] transition-colors duration-300">
              تواصل معي
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
