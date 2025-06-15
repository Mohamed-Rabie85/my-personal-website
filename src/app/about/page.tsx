import type { Metadata } from "next";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";
import { GiAngelWings } from "react-icons/gi";
import React from "react";

export const metadata: Metadata = {
  title: "نبذة عني | Mohamed Rabie مستشار تطوير أعمال وتسويق استراتيجي",
  description: "تعرف على خبرتي الممتدة لأكثر من 20 عاماً في مجالات التسويق وتطوير الأعمال، ومنهجيتي الفريدة التي تجمع بين الاستراتيجية، علم النفس التسويقي، والأخلاقيات.",
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي */}
      <section className="w-full bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-medium)]  py-16">
        <div className="section-container text-center">
          <h1 className="mb-4">بين التأسيس والنمو: قصة خبرة من قلب السوق</h1>
        </div>
      </section>

      {/* قسم المقدمة الشخصية */}
      <section className="w-full py-16 bg-[var(--foreground)]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-medium)] mb-6">خبرة 20 عامًا في بناء وتنمية الشركات الناجحة</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="mx-auto">
              <p className="text-[var(--neutral-dark)] text-lg max-w-3xl mx-auto pb-2">
                أنا مؤمن أن أي مشروع ناجح يبدأ بفكرة ورؤية. لكن ما يميز الشركات التي تستمر وتنمو عن تلك التي تتعثر، هو القدرة على تحويل هذه الرؤية إلى خطوات تنفيذية على أرض الواقع. هذا هو المكان الذي أجد فيه شغفي، وهذا هو جوهر الخبرة التي أقدمها لك
              </p>
              <p className="text-[var(--neutral-dark)] text-lg max-w-3xl mx-auto py-2">
                رحلتي في عالم الأعمال لم تبدأ من الكتب أو قاعات المحاضرات، بل بدأت من قلب السوق، من التحديات اليومية لكوني رائد أعمال مثلك تمامًا. لقد أسست وأدرت شركات، واجهت التحديات، وتعلمت من الأخطاء. هذه التجارب العملية هي التي تشكل أساس منهجيتي في تقديم الاستشارات
              </p>
              <p className="mb-4 text-[var(--neutral-dark)] text-lg max-w-3xl mx-auto py-2">
                أنا لست مستشارًا نظريًا، بل شريكك التنفيذي. أقدم لك خلاصة خبرتي العملية في تأسيس الشركات من الصفر، وإعادة هيكلة الشركات المتعثرة، وتحويلها لتحقيق أقصى درجات النمو والنجاح
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center"> {/* يمكن إزالة text-gray-500 من هنا لأنه لا يؤثر على الصورة */}
                <Image
                  src="/images/mohamed-profile.jpg" // *مسار الصورة الفعلي داخل مجلد public*
                  alt="صورة شخصية لمحمد ربيع mohamed rabie" // نص وصفي للصورة (مهم جداً للوصول و SEO)
                  width={900}
                  height={900}
                  className="w-70 h-80 rounded-lg object-cover mx-auto mb-4" // فئات Tailwind للتحكم في الحجم والشكل
                />
                <p className="text-[var(--primary-medium)]">محمد ربيع - استشاري تطوير أعمال</p> {/* نص وصفي تحت الصورة، باستخدام لون يتناسب مع الثيم الداكن */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم  رحلتي */}
      <section className="w-full py-16 bg-[var(--neutral-light)]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-medium)] pb-4">رحلتي.. من التأسيس إلى إعادة الهيكلة</h2>
            <p className="text-[var(--neutral-medium)] max-w-3xl mx-auto">
              على مر السنين، واجهت العديد من التحديات في عالم الأعمال، بدءًا من تأسيس الشركات الناشئة وصولاً إلى إعادة هيكلة الشركات الصغيرة والمتوسطة. كل تجربة كانت درسًا، وكل تحدٍ كان فرصة للنمو
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center">
              <div className="text-center"> {/* يمكن إزالة text-gray-500 من هنا لأنه لا يؤثر على الصورة */}
                <Image
                  src="/images/hero-bg.png" // *مسار الصورة الفعلي داخل مجلد public*
                  alt="صورة تعبيرية عن الرحلة" // نص وصفي للصورة (مهم جداً للوصول و SEO)
                  width={900}
                  height={900}
                  className="object-cover w-full h-full rounded-lg " // فئات Tailwind للتحكم في الحجم والشكل
                />
              </div>
            </div>
            <div className="mx-4">
              <h3 className="text-[var(--primary-medium)]">تأسيس وإدارة ريو للحلول التسويقية</h3>
              <p className="mb-4 text-[var(--neutral-medium)]">
                قمت بتأسيس شركة حلول متكاملة، وأطلقت تحت إدارتها 3 منصات إعلامية ناجحة، مما أعطاني خبرة مباشرة في التحديات التشغيلية والتسويقية
              </p>
              <h3 className="text-[var(--primary-medium)]">إعادة هيكلة مراكز طبية</h3>
              <p className="mb-4 text-[var(--neutral-medium)]">
                عملت على إعادة هيكلة عمليات وتسويق مراكز طبية، مما أدى إلى تحقيق نمو كبير في قاعدة المرضى وفتح فروع جديدة بنجاح مثل هليوبوليس لتجميل وزراعة الأسنان
              </p>
              <h3 className="text-[var(--primary-medium)]">تأسيس شركات ناشئة</h3>
              <p className="mb-4 text-[var(--neutral-medium)]">
                ساعدت العديد من رواد الأعمال على تحويل أفكارهم إلى شركات حقيقية، من خلال وضع الرؤى والخطط الاستراتيجية والتشغيلية والتسويقية وصولاً إلى التنفيذ الفعلي لكيانات مثل أجيال اكاديمي و Next Academy
              </p>
              <h3 className="text-[var(--primary-medium)]">تطوير وتنفيذ استراتيجيات تسويقية تحقق نتائج</h3>
              <p className="mb-4 text-[var(--neutral-medium)]">
                قدمت استشارات للعديد من الشركات الناشئة والصغيرة والمتوسطة، حيث عملت على تطوير استراتيجيات تسويقية مبتكرة تعتمد على تحليل السوق وفهم الجمهور المستهدف
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* قسم المنهجية */}
      <section className="w-full py-16 bg-[var(--foreground)] ">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-medium)] py-3">شراكة حقيقية، وليس مجرد استشارة</h2>
            <p className="text-[var(--neutral-medium)] max-w-3xl mx-auto">
              خبرتي المتنوعة كوّنت لدي منهج عمل واضح ومباشر. عندما نعمل معًا، يمكنك أن تتوقع الآتي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* المنهجية 1 */}
            <div className="card">
              <div className="mb-4 mr-4 text-[var(--secondary-dark)]">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"></path>
                </svg>
              </div>
              <div className="pb-6 mr-4">
                <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2 mx-2">التركيز على التنفيذ</h3>
                <p className="text-[var(--neutral-medium)] mx-2">
                  نضع خططًا عملية وواضحة، وأشرف معك على تنفيذها خطوة بخطوة لضمان تحقيق النتائج
                </p>
              </div>
            </div>

            {/* المنهجية 2 */}
            <div className="card">
              <div className="mb-4 mr-4 text-[var(--secondary-dark)]">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 7.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.129 56.129 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"></path>
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 0 1-.46.71 47.878 47.878 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.877 47.877 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 0 1 6 13.18v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 0 0 .551-1.608 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.668 2.25 2.25 0 0 0 2.12 0Z"></path>
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 0 1-1.286 1.794.75.75 0 1 1-1.06-1.06Z"></path>
                </svg>
              </div>
              <div className="pb-6 mr-4">
                <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2 mx-2">وضوح وأمانة مطلقة</h3>
                <p className="text-[var(--neutral-medium)] mx-2">
                  سأكون صريحًا وشفافًا معك دائمًا. نواجه الحقائق بالأرقام والتحليل الموضوعي لاتخاذ أفضل القرارات
                </p>
              </div>
            </div>
            {/* المنهجية 3 */}
            <div className="card">
              <div className="mb-4 mr-4 text-[var(--secondary-dark)]">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
                </svg>
              </div>
              <div className="pb-6 mr-4">
                <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2 mx-2">رؤية شاملة</h3>
                <p className="text-[var(--neutral-medium)] mx-2">
                  خبرتي في التسويق والتشغيل والإنتاج تمنحك رؤية 360 درجة لربط كل جوانب عملك وتحقيق النمو المتكامل
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* قسم الرؤية والقيم */}
      <section className="w-full py-16 bg-[var(--neutral-light)] ">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-medium)] py-3">رؤيتي المهنية</h2>
            <p className="text-[var(--neutral-medium)] max-w-3xl mx-auto">
              ما أقدمه لك ليس مجرد 20 عامًا من الخبرة، بل خلاصة هذه الرحلة في شكل حلول عملية لتجنب الأخطاء المكلفة واختصار طريقك للنجاح. وهذا يعتمد على أربعة قيم أساسية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[var(--primary-medium)] mb-6">قيمي الأساسية</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">الشفافية والأخلاق</h3>
                    <p className="text-[var(--neutral-medium)]">الالتزام بأعلى معايير الأخلاق المهنية والشفافية في جميع التعاملات</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">التعلم المستمر</h3>
                    <p className="text-[var(--neutral-medium)]">الشغف بالمعرفة وتطوير الذات باستمرار لتقديم أحدث الاستراتيجيات والممارسات</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">النتائج الملموسة</h3>
                    <p className="text-[var(--neutral-medium)]">التركيز على تحقيق نتائج قابلة للقياس وتحويل الاستراتيجيات إلى واقع ملموس</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">الشراكة الحقيقية</h3>
                    <p className="text-[var(--neutral-medium)]">العمل كامتداد لفريقك، ومشاركتك التحديات والنجاحات</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center"> {/* يمكن إزالة text-gray-500 من هنا لأنه لا يؤثر على الصورة */}
                <Image
                  src="/images/vision.jpg" // *مسار الصورة الفعلي داخل مجلد public*
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
