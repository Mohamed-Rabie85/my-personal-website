// src/components/WhyChooseMeSection.tsx
import Link from "next/link"; // للتأكد من وجود Link إذا تم استخدامه

export default function WhyChooseMeSection() {
  return (
    <section className="w-full py-16 bg-[var(--neutral-light)] text-[var(--primary-dark)]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-[var(--primary-dark)]">لماذا تختارني؟</h2>
          <p className="text-xl max-w-3xl mx-auto text-[var(--primary-dark)]">
            منهجية فريدة وشاملة تجمع بين الخبرة العملية، المعرفة التقنية، والفهم العميق للدوافع الإنسانية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            {/* ميزة 1 */}
            <div className="flex gap-4 items-start">
              <div className="bg-[var(--secondary-light)] text-[var(--primary-dark)] p-3 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z"></path>
                  <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z"></path>
                  <path d="m3.265 15.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--primary-dark)]">خبرة متعددة المجالات</h3>
                <p className="text-[var(--neutral-medium)]">
                  أكثر من 20 عاماً من الخبرة في مجالات التسويق، تطوير الأعمال، الإدارة، ريادة الأعمال، الإنتاج الإعلامي، والجوانب التقنية.
                </p>
              </div>
            </div>

            {/* ميزة 2 */}
            <div className="flex gap-4 items-start">
              <div className="bg-[var(--secondary-light)] text-[var(--primary-dark)] p-3 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--primary-dark)]">فهم عميق للدوافع الإنسانية</h3>
                <p className="text-[var(--neutral-medium)]">
                  استخدام علم النفس التسويقي التطبيقي (بمسؤولية وأخلاق) لبناء حملات تسويقية أكثر تأثيراً وتصميم تجارب عملاء لا تُنسى.
                </p>
              </div>
            </div>

            {/* ميزة 3 */}
            <div className="flex gap-4 items-start">
              <div className="bg-[var(--secondary-light)] text-[var(--primary-dark)] p-3 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--primary-dark)]">التزام بالقيم الأخلاقية</h3>
                <p className="text-[var(--neutral-medium)]">
                  الإيمان بأن النجاح الحقيقي والمستدام يرتكز على الالتزام الراسخ بالقيم الأخلاقية والشفافية في جميع الممارسات التسويقية والاستشارية.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* ميزة 4 */}
            <div className="flex gap-4 items-start">
              <div className="bg-[var(--secondary-light)] text-[var(--primary-dark)] p-3 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 0 1.5 10.5h21a3 3 0 0 0-2.566-2.843A4.505 4.505 0 0 0 18.75 7.5H5.25Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--primary-dark)]">سجل حافل في ريادة الأعمال</h3>
                <p className="text-[var(--neutral-medium)]">
                  تأسيس وإدارة شركات متعددة (Rio Marketing Solutions، Exs Agency، Next Academy) يعكس القدرة على بناء المشاريع من الصفر وفهم تحديات رواد الأعمال.
                </p>
              </div>
            </div>

            {/* ميزة 5 */}
            <div className="flex gap-4 items-start">
              <div className="bg-[var(--secondary-light)] text-[var(--primary-dark)] p-3 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z"></path>
                  <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--primary-dark)]">مهارات تقنية متقدمة</h3>
                <p className="text-[var(--neutral-medium)]">
                  الإلمام بلغات البرمجة (Python، React، Next.js) وتحليل البيانات يضيف بعداً تقنياً نادراً في ملفات مستشاري التسويق وتطوير الأعمال التقليديين.
                </p>
              </div>
            </div>

            {/* ميزة 6 */}
            <div className="flex gap-4 items-start">
              <div className="bg-[var(--secondary-light)] text-[var(--primary-dark)] p-3 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z"></path>
                  <path d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--primary-dark)]">التزام بالتعلم المستمر</h3>
                <p className="text-[var(--neutral-medium)]">
                  حاصل على شهادات متعددة ومتنوعة تعكس شغفاً بالمعرفة وتطوير الذات، مما يضمن تقديم أحدث الاستراتيجيات والممارسات في مجال التسويق وتطوير الأعمال.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/about" className="btn-primary">
            تعرف على المزيد عني
          </Link>
      </div>
    </div>
  </section>
);
}