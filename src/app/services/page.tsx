import type { Metadata } from "next";
import Link from "next/link";
import Image from 'next/image';
import CtaSection from "@/components/CtaSection";
import { GiAngelWings } from "react-icons/gi";


export const metadata: Metadata = {
  title: "الخدمات | Mohamed Rabie مستشار تطوير أعمال وبناء أنظمة",
  description: "حلول جذرية لشركتك: تأسيس بنظام، إعادة هيكلة للنمو، وشراكة تنفيذية مع Rio Marketing Solutions.",
};

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي - محدث */}
      <section className="w-full bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-medium)] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-6 text-3xl md:text-5xl font-bold leading-tight">
            مش مجرد استشارات.. دي <span className="text-[var(--secondary-medium)]">حلول جذرية</span> من قلب المطبخ
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            سواء كنت بتبدأ من الصفر، أو غرقان في مشاكل التشغيل، أو بتدور على شريك يكبر معاك.. عندي ليك النظام (System) اللي هيحول الفوضى لنمو مستدام. والمنفذ هو فريقي في <strong className="text-[var(--secondary-medium)]">Rio Marketing</strong>.
          </p>
        </div>
      </section>

      {/* الخدمة الأولى: تأسيس الشركات بنظام (Start Right) */}
      <section id="startup-formation" className="w-full py-16 bg-[var(--foreground)] ">
        <div className="section-container">
          <div className="text-center mb-12 mx-auto">
            <h2 className="text-[var(--primary-medium)] py-3 text-3xl font-bold">تأسيس الشركات بنظام (Start Right)</h2>
            <p className="text-[var(--primary-medium)] max-w-3xl mx-auto text-lg">
              عندك فكرة؟ متضيعش فلوسك في التجربة والخطأ. بنبني ليك "خارطة طريق" كاملة تضمن إنك تبدأ كبير من أول يوم.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6 mb-8 mx-auto max-w-xl">
                <li className="flex gap-4">
                  <div className="text-[var(--secondary-medium)] mt-1 flex-shrink-0">
                    <GiAngelWings size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--primary-medium)] mb-2">دراسة الجدوى الواقعية</h3>
                    <p className="text-[var(--neutral-medium)] text-lg">
                      مش أرقام في الهوا، دراسة مبنية على "سعر السوق النهاردة" عشان تعرف رأس المال المطلوب بدقة وتتوقع العائد.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-[var(--secondary-medium)] mt-1 flex-shrink-0">
                    <GiAngelWings size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--primary-medium)] mb-2">نموذج العمل (Business Model)</h3>
                    <p className="text-[var(--neutral-medium)] text-lg">
                      بنحدد "إزاي هتكسب فلوس" بأكتر من طريقة، وبنصمم هيكل التكاليف والإيرادات لضمان الربحية.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-[var(--secondary-medium)] mt-1 flex-shrink-0">
                    <GiAngelWings size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--primary-medium)] mb-2">خطة التشغيل (Operations Manual)</h3>
                    <p className="text-[var(--neutral-medium)] text-lg">
                      بنرسم دورة العمل والمهام الوظيفية من البداية، عشان متتعبش في الإدارة وتعيين الموظفين بعدين.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-[var(--secondary-medium)] mt-1 flex-shrink-0">
                    <GiAngelWings size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--primary-medium)] mb-2">استراتيجية الإطلاق (Go-to-Market)</h3>
                    <p className="text-[var(--neutral-medium)] text-lg">
                      بنقولك إزاي تدخل السوق بقوة وتجيب "أول عميل"، مع خطة تسويق تدريجية تناسب ميزانيتك.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation?type=startup_formation" className="btn-secondary text-lg px-8 py-3 inline-block shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
                ابنِ مشروعك على أساس سليم
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                <Image
                  src="/services/startup-formation.PNG"
                  alt="تأسيس الشركات بنظام Start Right"
                  fill
                  className="object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الخدمة الثانية: إعادة الهيكلة والنمو (Scale Up) */}
      <section id="restructuring" className="w-full py-16 bg-[var(--neutral-light)]">
        <div className="section-container">
          <div className="text-center mb-12 mx-auto">
            <h2 className="text-[var(--primary-medium)] py-3 text-3xl font-bold">إعادة الهيكلة والنمو (Scale Up)</h2>
            <p className="text-[var(--primary-medium)] max-w-3xl mx-auto text-lg">
              شركتك كبرت بس المشاكل كبرت معاها؟ الأرباح بتقل والمجهود بيزيد؟ ده وقت "صيانة الموتور" عشان تنطلق تاني.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center order-2 md:order-1">
              <div className="relative w-full aspect-video max-w-lg">
                <Image
                  src="/services/restructuring.PNG"
                  alt="إعادة الهيكلة والنمو Scale Up"
                  fill
                  className="object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <ul className="space-y-6 mb-8 mx-auto max-w-xl">
                <li className="flex gap-4">
                  <div className="text-[var(--secondary-medium)] mt-1 flex-shrink-0">
                    <GiAngelWings size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--primary-medium)] mb-2">تشخيص عنق الزجاجة</h3>
                    <p className="text-[var(--neutral-medium)] text-lg">
                      بنعرف فين المشكلة بالظبط اللي معطلة نموك (هل هي تسويق؟ مبيعات؟ ولا سوء إدارة؟) وبنحلها من جذورها.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-[var(--secondary-medium)] mt-1 flex-shrink-0">
                    <GiAngelWings size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--primary-medium)] mb-2">بناء الـ SOPs (إجراءات التشغيل)</h3>
                    <p className="text-[var(--neutral-medium)] text-lg">
                      بنحول "شطارة الموظفين" لـ "نظام مكتوب" وراسخ، عشان الجودة تثبت والشركة متقعش لو موظف مشي.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-[var(--secondary-medium)] mt-1 flex-shrink-0">
                    <GiAngelWings size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--primary-medium)] mb-2">إصلاح المسار المالي</h3>
                    <p className="text-[var(--neutral-medium)] text-lg">
                      بنوقف النزيف المالي، بنراجع التسعير، وبنعيد توزيع الميزانية عشان الربحية تزيد والكاش فلو يتحسن.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-[var(--secondary-medium)] mt-1 flex-shrink-0">
                    <GiAngelWings size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--primary-medium)] mb-2">تطوير التسويق (مع Rio)</h3>
                    <p className="text-[var(--neutral-medium)] text-lg">
                      فريق <strong className="text-[var(--primary-medium)]">Rio Marketing</strong> بيدخل يطبق استراتيجية تسويق حديثة تناسب حجمك الجديد وتجيب عملاء الـ Scale.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation?type=restructuring" className="btn-secondary text-lg px-8 py-3 inline-block shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
                أعد هيكلة شركتك للنمو
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* الخدمة الثالثة: الشريك التنفيذي (Fractional COO) */}
      <section id="executive-partner" className="w-full py-16 bg-[var(--foreground)] ">
        <div className="section-container">
          <div className="text-center mb-12 mx-auto">
            <h2 className="text-[var(--primary-medium)] py-3 text-3xl font-bold">الشريك التنفيذي (Fractional COO)</h2>
            <p className="text-[var(--primary-medium)] max-w-3xl mx-auto text-lg">
              مش محتاج "نصيحة" وتمشي؟ محتاج حد "يشيل" معاك المسؤولية؟ أنا وفريقي بنكون "الذراع الإداري والتسويقي" لشركتك.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6 mb-8 mx-auto max-w-xl">
                <li className="flex gap-4">
                  <div className="text-[var(--secondary-medium)] mt-1 flex-shrink-0">
                    <GiAngelWings size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--primary-medium)] mb-2">الإدارة بالإنابة</h3>
                    <p className="text-[var(--neutral-medium)] text-lg">
                      بشاركك في اتخاذ القرارات المصيرية واليومية كأني شريكك المؤسس، عشان تخفف الحمل من على كتافك.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-[var(--secondary-medium)] mt-1 flex-shrink-0">
                    <GiAngelWings size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--primary-medium)] mb-2">تنفيذ التسويق (Done-for-you)</h3>
                    <p className="text-[var(--neutral-medium)] text-lg">
                      مش بس خطط، فريق <strong className="text-[var(--primary-medium)]">Rio Marketing</strong> بيمسك ملف التسويق بالكامل (إعلانات، محتوى، تصميم) تحت إشرافي المباشر.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-[var(--secondary-medium)] mt-1 flex-shrink-0">
                    <GiAngelWings size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--primary-medium)] mb-2">التوظيف وبناء الفريق</h3>
                    <p className="text-[var(--neutral-medium)] text-lg">
                      بساعدك تختار وتعين المديرين والموظفين الصح في الأماكن الصح، وبنبني ثقافة عمل قوية.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-[var(--secondary-medium)] mt-1 flex-shrink-0">
                    <GiAngelWings size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--primary-medium)] mb-2">الرقابة والمتابعة</h3>
                    <p className="text-[var(--neutral-medium)] text-lg">
                      بضمنلك إن الخطط بتتنفذ مش بتتركن في الدرج، مع تقارير أداء دورية توضحلك احنا ماشيين فين.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation?type=marketing_strategy" className="btn-secondary text-lg px-8 py-3 inline-block shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
                احصل على شريك تنفيذي
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                <Image
                  src="/services/executive-partner.png"
                  alt="الشريك التنفيذي Fractional COO"
                  fill
                  className="object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* قسم دعوة للعمل */}
      {/* قسم دعوة للعمل مخصص */}
      <section className="w-full py-16 bg-[var(--primary-dark)] text-white">
        <div className="section-container text-center">
          <h2 className="text-white mb-6 text-3xl font-bold">مستعد تحول شركتك لمنظومة بتكبر لوحدها؟</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            كفاية تضيع وقت ومجهود في "إطفاء الحرايق" اليومية. احجز استشارتك دلوقتي وخلينا نبني مع بعض النظام اللي هيشيل عنك الشغل ويضاعف أرباحك.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/consultation" className="btn-secondary text-xl px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              احجز استشارتك المجانية
            </Link>
            <Link href="/diagnosis" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md text-lg hover:bg-white hover:text-[var(--primary-dark)] transition-colors duration-300">
              جرب أداة التشخيص
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
