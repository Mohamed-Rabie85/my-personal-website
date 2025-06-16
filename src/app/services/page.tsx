import type { Metadata } from "next";
import Link from "next/link";
import Image from 'next/image';
import CtaSection from "@/components/CtaSection";
import { GiAngelWings } from "react-icons/gi";


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
          <h1 className="mb-8">حلول عملية لمشروعك: من الفكرة إلى النمو</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            أقدم لك خططًا قابلة للتنفيذ مبنية على 20 عامًا من الخبرة في بناء الشركات وإعادة هيكلتها. مهمتي هي مساعدتك في تحويل تحدياتك إلى نجاح حقيقي
          </p>
          <p className="text-xl max-w-3xl mx-auto">
            أنا لا أقدم استشارات نظرية، بل أشاركك في التنفيذ لتحويل أهدافك إلى واقع. كل شركة تمر بمراحل مختلفة، لذلك صممت حلولي لتناسب التحدي الذي تواجهه الآن بالضبط
          </p>
        </div>
      </section>

      {/* قسم  تاسيس الشركات الناشئة */}
      <section id="startup-formation" className="w-full py-16 bg-[var(--foreground)] ">
        <div className="section-container">
          <div className="text-center mb-12 mx-auto">
            <h2 className="text-[var(--primary-medium)] py-3">تأسيس الشركات من الصفر</h2>
            <p className="text-[var(--primary-medium)] max-w-3xl mx-auto">
              عندك فكرة عظيمة، لكنك مشتت ومش عارف تبدأ منين صح؟ أو محتاج خريطة طريق واضحة لخطوات إطلاق مشروعك؟
            </p>
            <p className="text-[var(--primary-medium)] max-w-3xl mx-auto">
              أنا هنا لأساعدك في تحويل فكرتك الواعدة إلى خطة عمل متكاملة وقابلة للتنفيذ. من تحليل السوق وتحديد نموذج الربح، إلى صياغة الاستراتيجيات الأساسية للانطلاق بثقة، أضمن لك بداية قوية تتجنب الأخطاء المكلفة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-4 mb-6 mx-auto max-w-xl">
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">دراسات جدوى شاملة</h3>
                    <p className="text-[var(--neutral-medium)]">عشان تتأكد إن فكرتك هتنجح وتعرف فرصها وتحدياتها</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">بناء نموذج عمل مربح</h3>
                    <p className="text-[var(--neutral-medium)]">تحديد مصادر الإيرادات وتكاليف التشغيل لضمان استدامة المشروع. نحدد مع بعض أفضل طريقة شركتك هتكسب بيها</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">صياغة الخطة الاستراتيجية والتشغيلية</h3>
                    <p className="text-[var(--neutral-medium)]">تحديد الأهداف، وتوزيع المهام، ووضع جداول زمنية واضحة لضمان التنفيذ الفعال. عشان تعرف كل خطوة هتعملها إزاي بالظبط</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">تحديد السوق المستهدف والمنتجات/الخدمات</h3>
                    <p className="text-[var(--neutral-medium)]">تحليل السوق لفهم احتياجات العملاء وتحديد المنتجات أو الخدمات المناسبة. عشان توصل للعملاء الصح بأفضل طريقة</p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation" className="btn-secondary text-lg ">
                لنرسم خريطة طريق مشروعك
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center"> {/* يمكن إزالة text-gray-500 من هنا لأنه لا يؤثر على الصورة */}
                <Image
                  src="/services/startup-formation.PNG" // *مسار الصورة الفعلي داخل مجلد public*
                  alt="صورة شخصية لمحمد ربيع mohamed rabie" // نص وصفي للصورة (مهم جداً للوصول و SEO)
                  width={900}
                  height={900}
                  className="object-cover w-full h-full rounded-lg " // فئات Tailwind للتحكم في الحجم والشكل
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم إعادة الهيكلة  */}
      <section id="restructuring" className="w-full py-16 bg-[var(--neutral-light)] text-[var(--background)]">
        <div className="section-container">
          <div className="text-center mb-12 mx-auto">
            <h2 className="text-[var(--primary-medium)] py-3">إعادة الهيكلة</h2>
            <p className="text-[var(--primary-medium)] max-w-3xl mx-auto">
              هل شركتك قائمة لكنها بتواجه تحديات في النمو، أو الكفاءة، أو محتاجة دفعة جديدة؟
            </p>
            <p className="text-[var(--primary-medium)] max-w-3xl mx-auto">
              أقدم لك خبرتي في تحليل الوضع الحالي لشركتك وإعادة هيكلة العمليات الداخلية واستراتيجيات التسويق. نهدف إلى تحديد المشاكل الخفية، وتحويلها إلى فرص حقيقية لزيادة الربحية وتحقيق نمو مستدام
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-center justify-center">
              <Image
                src="/services/restructuring.PNG" // *مسار الصورة الفعلي داخل مجلد public*
                alt="إعادة الهيكلة"
                width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                className="object-cover w-full h-full rounded-lg"
                quality={100}
                priority
              />
            </div>
            <div>
              <ul className="space-y-4 mb-6 mx-auto max-w-xl">
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">تحليل وتقييم شامل</h3>
                    <p className="text-[var(--neutral-medium)]">تقييم الوضع الحالي لشركتك وتحديد نقاط القوة والضعف. عشان نعرف بالظبط إيه اللي محتاج يتظبط</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">إعادة هيكلة العمليات التشغيلية</h3>
                    <p className="text-[var(--neutral-medium)]">
                      تحليل العمليات الحالية وتحديد نقاط التحسين. لزيادة الكفاءة وتقليل التكاليف
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">تطوير وتنفيذ استراتيجيات تسويقية جديدة</h3>
                    <p className="text-[var(--neutral-medium)]">
                      تحليل السوق وتحديد الفرص الجديدة.
                      عشان تجذب عملاء أكتر وتزود مبيعاتك
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">تحسين الأداء المالي</h3>
                    <p className="text-[var(--neutral-medium)]">
                      نعمل على وضع استراتيجيات لزيادة الإيرادات وتقليل التكاليف. عشان تضمن ربحية واستدامة مشروعك
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation" className="btn-secondary text-lg ">
                لنعيد شركتك لمسار النمو
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* قسم شريكك التنفيذي  */}
      <section id="executive-partner" className="w-full py-16 bg-[var(--foreground)] ">
        <div className="section-container">
          <div className="text-center mb-12 mx-auto">
            <h2 className="text-[var(--primary-medium)] py-3">شريكك التنفيذي</h2>
            <p className="text-[var(--primary-medium)] max-w-3xl mx-auto">
              أنت كرائد أعمال، بتحتاج أحيانا عقل استراتيجي وخبرة تنفيذية بجانبك بشكل مستمر، للمساعدة في القرارات الكبيرة أو الإشراف على المشاريع المهمة
            </p>
            <p className="text-[var(--primary-medium)] max-w-3xl mx-auto">
              أنا هنا لأكون شريكك التنفيذي، أقدم لك الدعم الاستراتيجي والتنفيذي اللي تحتاجه. سواء كنت بتخطط لإطلاق منتج جديد، أو إعادة هيكلة فريقك، أو حتى توسيع نطاق عملك، هكون معاك في كل خطوة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-4 mb-6 mx-auto max-w-xl">
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">استشارات وتوجيه مستمر</h3>
                    <p className="text-[var(--neutral-medium)]">
                      أنا هنا لأقدم لك الدعم والتوجيه المستمر، عشان تقدر تتخذ قرارات استراتيجية صحيحة وتواجه التحديات بثقة.
                      بكون معاك خطوة بخطوة في رحلة شركتك
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">المشاركة في التخطيط والتنفيذ</h3>
                    <p className="text-[var(--neutral-medium)]">
                      أشاركك في وضع الخطط الاستراتيجية والتشغيلية، وأساعدك في تنفيذها بشكل فعال. عشان تضمن إن كل شيء بيتنفذ على أكمل وجه
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">الإشراف على المشاريع</h3>
                    <p className="text-[var(--neutral-medium)]">
                      أتابع تنفيذ المشاريع بشكل دوري، وأضمن إن كل شيء ماشي حسب الخطة. لو ظهرت أي تحديات، هكون معاك لحلها بسرعة وفعالية
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">تحديد فرص النمو الجديدة</h3>
                    <p className="text-[var(--neutral-medium)]">
                      أساعدك في اكتشاف فرص جديدة للنمو والتوسع، سواء من خلال دخول أسواق جديدة أو تطوير منتجات مبتكرة. عشان تضمن إن شركتك دايمًا في المقدمة.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/consultation" className="btn-secondary text-lg ">
                لنتحدث عن استراتيجيات النمو
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center"> {/* يمكن إزالة text-gray-500 من هنا لأنه لا يؤثر على الصورة */}
                <Image
                  src="/services/executive-partner.png" // *مسار الصورة الفعلي داخل مجلد public*
                  alt="صورة شخصية لمحمد ربيع mohamed rabie" // نص وصفي للصورة (مهم جداً للوصول و SEO)
                  width={900}
                  height={900}
                  className="object-cover w-full h-full rounded-lg " // فئات Tailwind للتحكم في الحجم والشكل
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* قسم دعوة للعمل */}
      <CtaSection />
    </main>
  );
}
