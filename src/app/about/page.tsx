
import type { Metadata } from "next";
import Image from "next/image";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "منهجيتي | Mohamed Rabie - الخبير صاحب النظام",
  description: "الخبرة مش بتيجي من قراءة الكتب.. 20 سنة من إدارة الأزمات وبناء الأنظمة. تعرف على رحلتي من موظف مبيعات لمؤسس شركات.",
};

export default function About() {
  const milestones = [
    {
      year: "2003",
      title: "مدرسة البيع (البداية من الأرض)",
      description: "بدأت رحلتي من أصعب نقطة: المبيعات (Sales). هنا تعلمت يعني إيه إقناع، يعني إيه رفض، ويعني إيه تقفل ديل (Deal) وش لوش مع العميل."
    },
    {
      year: "2009",
      title: "دخول عالم التسويق",
      description: "انتقلت من بيع السلعة لتسويق الفكرة. بدأت أطبق اللي اتعلمته في البيع على نطاق أوسع، وفهمت سيكولوجية السوق المصري."
    },
    {
      year: "2011",
      title: "الدرس الغالي (أول شركة.. وأول خسارة)",
      description: "أسست أول شركة خاصة بيا.. وخسرت. دي كانت 'الماجستير العملي' بتاعي. اتعلمت فيها إن الحماس لوحده مش كفاية، وإن الإدارة المالية والتشغيل أهم من الفكرة نفسها."
    },
    {
      year: "2012 - 2015",
      title: "الصقل الإداري (شريك ومدير)",
      description: "مايأستش. دخلت شريك في شركة (2012)، وبعدها مسكت إدارة التسويق في شركة تانية (2013). الفترة دي صقلت مهاراتي في قيادة الفرق وإدارة الميزانيات."
    },
    {
      year: "2015",
      title: "العودة القوية (تأسيس Rio Marketing)",
      description: "بخبرة السنين اللي فاتت، أسست 'ريو للحلول التسويقية - Rio Marketing Solutions'. المرة دي البداية كانت صح، بنظام ورؤية، وتحولت من 'مسوق' لـ 'رائد أعمال' حقيقي."
    },
    {
      year: "2018 - الآن",
      title: "التوسع وبناء الأنظمة",
      description: "بدأت مرحلة التوسع الرأسي والأفقي. أدرت وطورت شركات في قطاعات متنوعة، وأسست بنفسي 3 شركات تسويق و 2 أكاديمية تدريب وغيرها. هنا تأكدت إن 'السيستم' هو السر."
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* 1. Hero Section - The Hook */}
      <section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-medium)] text-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                الخبرة مش بتيجي من قراءة الكتب.. <br />
                <span className="text-[var(--secondary-medium)]">الخبرة بتيجي من إدارة الأزمات.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                اسمي محمد ربيع. على مدار 20 سنة، مشيت في نفس الطريق اللي أنت ماشي فيه دلوقتي. من موظف، لمسؤول، لمؤسس شركة (<span className="font-bold text-[var(--secondary-medium)]">ريو للحلول التسويقية - Rio Marketing Solutions</span>).
                <br /><br />
                أنا هنا عشان أنقلك الخلاصة، وأحول معاك الشطارة الفردية لـ <span className="font-bold text-[var(--secondary-medium)]">سيستم مؤسسي.</span>
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-[var(--secondary-medium)] rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <Image
                  src="/images/mohamed-profile.png"
                  alt="محمد ربيع"
                  fill
                  className="object-cover rounded-2xl shadow-2xl relative z-10 border-4 border-[var(--secondary-medium)]/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Timeline Section - The Journey */}
      <section className="py-24 bg-[var(--foreground)] relative">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)] mb-4">
              رحلة 20 سنة <span className="text-[var(--secondary-medium)]">من الأرض للقمة</span>
            </h2>
            <p className="text-[var(--neutral-medium)] max-w-2xl mx-auto">
              مظهرتش فجأة.. دي خطوات وتجارب وأخطاء دفعت تمنها عشان أوصل للي أنا فيه دلوقت.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute right-[50%] transform translate-x-1/2 h-full w-1 bg-[var(--primary-medium)] hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content Box */}
                  <div className="w-full md:w-1/2">
                    <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 border-[var(--secondary-medium)] hover:-translate-y-1 transition-transform duration-300 relative ${index % 2 === 0 ? 'text-right' : 'text-right'}`}>
                      {/* Arrow for desktop */}
                      <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 transform hidden md:block ${index % 2 === 0 ? '-left-2 border-l border-b border-gray-100' : '-right-2 border-r border-t border-gray-100'}`}></div>

                      <span className="inline-block py-1 px-3 bg-[var(--secondary-medium)] text-[var(--primary-dark)] rounded-full text-sm font-bold mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[var(--neutral-medium)] leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[var(--secondary-medium)] border-4 border-white shadow-lg shrink-0 hidden md:block"></div>

                  {/* Empty Space for alignment */}
                  <div className="w-full md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Execution Arm (Rio) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[var(--primary-dark)] rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                مش بشتغل لوحدي.. <span className="text-[var(--secondary-medium)]">معايا جيش.</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                ميزتي عن أي استشاري تاني إني مش بس بديك الخطة وأمشي.
                <br />
                بصفتي مؤسس لـ <span className="font-bold text-white">ريو للحلول التسويقية - Rio Marketing Solutions</span>، عندي فريق كامل جاهز يتدخل وينفذ الخطط التسويقية والتشغيلية اللي بنحطها.
                <br />
                ده بيضمنلك إن "الاستراتيجية" هتتحول لـ "واقع" بنفس الجودة اللي رسمناها.
              </p>
              <a
                href="https://rio-marketing-solutions.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--secondary-medium)] text-[var(--primary-dark)] px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors"
              >
                <span>زور موقع شركتي (Rio)</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            <div className="flex justify-center items-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-xs">
                <Image
                  src="/images/logo-rio.png"
                  alt="فريق ريو للتسويق"
                  width={400}
                  height={200}
                  className="w-full h-auto object-contain"
                />
                <div className="text-center mt-4 pt-4 border-t border-gray-100">
                  <p className="text-[var(--primary-medium)] font-bold">ذراعك التنفيذي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Philosophy Section */}
      <section className="py-20 bg-[var(--neutral-light)]">
        <div className="section-container text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-medium)] mb-8">
            ليه <span className="text-[var(--secondary-medium)]">"الأنظمة"</span> مش "الأبطال"؟
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[var(--secondary-medium)]"></div>
            <p className="text-xl md:text-2xl text-[var(--primary-dark)] font-bold leading-relaxed mb-6">
              الشركة اللي قايمة على أبطال هي شركة في خطر. لو البطل تعب أو مشي، الشركة بتقع.
            </p>
            <p className="text-[var(--neutral-medium)] text-lg leading-relaxed">
              مهمتي معاك هي إننا نبني <span className="font-bold text-[var(--primary-medium)]">"ماكينة" (System)</span>. ماكينة بتطلع نفس الجودة، ونفس النتيجة، بغض النظر مين اللي مشغلها. ده هو الطريق الوحيد للحرية المالية والذهنية.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-20 bg-white text-center">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-6">
            لو بتدور على <span className="text-[var(--secondary-medium)]">شريك استراتيجي تنفيذي</span> فاهم لغة السوق..
          </h2>
          <p className="text-xl text-[var(--neutral-medium)] mb-8">
            مش مجرد <span className="text-[var(--secondary-medium)] font-bold">استشاري</span> بينظّر عليك.
          </p>
          <Link href="/contact" className="btn-primary text-xl px-10 py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
            تواصل معي الآن
          </Link>
        </div>
      </section>

    </main>
  );
}
