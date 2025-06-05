import type { Metadata } from "next";
import Link from "next/link";
import Image from 'next/image';
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "الخدمات |  Mohamed Rabie مستشار تطوير أعمال وتسويق استراتيجي   ",
  description: "خدمات استشارية متخصصة في التخطيط الاستراتيجي، التسويق الرقمي، علم النفس التسويقي، تحليل البيانات، والإنتاج الإعلامي للشركات الناشئة والصغيرة والمتوسطة.",
};

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي */}
      <section className="w-full bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-medium)] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4">خدماتي الاستشارية</h1>
          <p className="text-xl max-w-3xl mx-auto">
            حلول متكاملة ومخصصة لتحقيق النمو المستدام وبناء علامات تجارية مؤثرة
          </p>
        </div>
      </section>

      {/* قسم مقدمة الخدمات */}
      <section className="w-full py-16 bg-[var(--foreground)] text-[var(--background)]">
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
      <section id="strategic-planning" className="w-full py-16 bg-[var(--neutral-light)] text-[var(--background)]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[var(--primary-dark)] mb-6">التخطيط الاستراتيجي</h2>
              <p className="mb-4 text-[var(--neutral-medium)]">
                أساعد الشركات على رسم مسار واضح للنمو من خلال تحليل دقيق للسوق والمنافسين، وتحديد الفرص الكامنة، وبناء استراتيجيات مبتكرة تحقق أهدافهم.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>تحليل السوق والمنافسين</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>بناء نماذج أعمال مبتكرة</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>وضع خرائط طريق واضحة للنمو</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>استراتيجيات دخول أسواق جديدة</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>إعادة هيكلة العمليات القائمة</p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation" className="btn-secondary">
                استشارة في التخطيط الاستراتيجي
              </Link>
            </div>
            <div className="bg-gray-200 h-80 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
              {/* هنا يمكن إضافة صورة توضيحية */}
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
          </div>
        </div>
      </section>

      {/* قسم التسويق  */}
      <section id="marketing" className="w-full py-16 bg-[var(--foreground)]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-200 h-80 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
              {/* هنا يمكن إضافة صورة توضيحية */}
              <Image
                src="/services/marketing.png"
                alt="التسويق "
                width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                className="object-cover w-full h-full"
                quality={100}
                priority
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-[var(--primary-medium)] mb-6">التسويق المتكامل</h2>
              <p className="mb-4 text-[var(--neutral-medium)]">
                أقدم استراتيجيات تسويقية شاملة تجمع بين مختلف قنوات التسويق الرقمي لتحقيق أقصى تأثير وأفضل عائد على الاستثمار.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>إدارة وسائل التواصل الاجتماعي</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>تحسين محركات البحث (SEO)</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>التسويق بالمحتوى</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>إعلانات الدفع لكل نقرة (PPC)</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>التسويق عبر البريد الإلكتروني</p>
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
      <section id="marketing-psychology" className="w-full py-16 bg-[var(--neutral-light)]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[var(--primary-medium)] mb-6">علم النفس التسويقي التطبيقي</h2>
              <p className="mb-4 text-[var(--neutral-medium)]">
                أستخدم فهمي العميق لسلوك المستهلك ودوافعه لبناء حملات تسويقية أكثر تأثيراً وتصميم تجارب عملاء لا تُنسى، مع الالتزام الكامل بالمبادئ الأخلاقية والشفافية.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>فهم دوافع المستهلك وعمليات اتخاذ القرار</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>صياغة رسائل تخاطب العقل والقلب</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>تصميم تجارب عملاء لا تُنسى</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>بناء علاقات قوية مع العملاء</p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation" className="btn-secondary">
                استشارة في علم النفس التسويقي
              </Link>
            </div>
            <div className="bg-gray-200 h-80 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
              {/* هنا يمكن إضافة صورة توضيحية */}
              <Image
                src="/services/marketing-psychology.png"
                alt="علم النفس التسويقي"
                width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                height={300} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                className="object-cover w-full"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* قسم تحليل البيانات */}
      <section id="data-analysis" className="w-full py-16 bg-[var(--foreground)]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-200 h-80 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
              {/* هنا يمكن إضافة صورة توضيحية */}
              <Image
                src="/services/data-analysis.png"
                alt="تحليل البيانات"
                width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                className="object-cover w-full h-full"
                quality={100}
                priority
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-[var(--primary-medium)] mb-6">تحليل البيانات لدعم القرار</h2>
              <p className="mb-4 text-[var(--neutral-medium)]">
                أستفيد من مهارات تحليل البيانات لاستخلاص رؤى قيمة تدعم اتخاذ القرارات التسويقية والاستراتيجية وتحسين الأداء.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>تحليل أداء الحملات التسويقية</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>تحليل سلوك المستخدم وتجربة العملاء</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>تحليل اتجاهات السوق والمنافسين</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>إعداد تقارير أداء وتوصيات قابلة للتنفيذ</p>
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
      <section id="media-production" className="w-full py-16 bg-[var(--neutral-light)]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[var(--primary-medium)] mb-6">الإنتاج الإعلامي والإعلاني</h2>
              <p className="mb-4 text-[var(--neutral-medium)]">
                أقدم خدمات إنتاج إعلامي وإعلاني متكاملة من خلال إدارة وكالات متخصصة في مختلف مجالات الإنتاج الإعلامي.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>تصميم وتصنيع الحروف البارزة والكلادينج</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>تصميم وتنفيذ أجنحة المعارض والمؤتمرات</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>خدمات الطباعة الرقمية والورقية</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>حلول التغليف المبتكرة</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.97 4.7a.75.75 0 0 1 .993.455l4.5 11.5a.75.75 0 0 1-1.385.577L9.575 5.732A.75.75 0 0 1 9.97 4.7ZM14.47 7.03a.75.75 0 0 1 0 1.06L11.53 11l2.94 2.91a.75.75 0 0 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.44a.75.75 0 0 1 1.06 0ZM4.5 5.25c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75ZM5.25 11a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5h-5ZM4.5 16.75c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0-.75.75Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>إعداد وتطوير محتوى للبرامج التلفزيونية</p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation" className="btn-secondary">
                استشارة في الإنتاج الإعلامي
              </Link>
            </div>
            <div className="bg-gray-200 h-80 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
              {/* هنا يمكن إضافة صورة توضيحية */}
              <Image
                src="/services/media.png"
                alt="الإنتاج الإعلامي"
                width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                className="object-cover w-full h-full"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* قسم دعوة للعمل */}
      <CtaSection />
    </main>
  );
}
