import type { Metadata } from "next";
import Link from "next/link";
// import Image from "next/image";

export const metadata: Metadata = {
  title: "حجز استشارة | Mohamed Rabie مستشار تطوير أعمال وتسويق استراتيجي",
  description: "احجز استشارة مجانية لمناقشة احتياجات عملك وكيفية تحقيق النمو المستدام من خلال استراتيجيات تسويقية وتطويرية مبتكرة.",
};

export default function Consultation() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي */}
      <section className="w-full bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-medium)] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4">احجز استشارة مجانية</h1>
          <p className="text-xl max-w-3xl mx-auto">
            خطوة أولى نحو تحقيق أهدافك وتطوير أعمالك بشكل استراتيجي ومستدام
          </p>
        </div>
      </section>

      {/* قسم مميزات الاستشارة */}
      <section className="w-full py-16 bg-white ">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[var(--primary-dark)] mb-6">ماذا تتضمن الاستشارة المجانية؟</h2>
              <p className="mb-4 text-[var(--neutral-medium)]">
                الاستشارة المجانية هي فرصة لمناقشة احتياجات عملك وتحدياتك الحالية، وتحديد كيف يمكنني مساعدتك في تحقيق أهدافك. خلال الاستشارة، سنتحدث عن:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06L5.636 5.197a.75.75 0 0 1 0-1.06ZM17.95 4.322a.75.75 0 0 1 .183 1.04l-1.592 2.108a.75.75 0 0 1-1.224-.863l1.591-2.108a.75.75 0 0 1 1.042-.177ZM12 18a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 18ZM18.44 19.81a.75.75 0 0 1-1.06 0l-1.591-1.591a.75.75 0 0 1 1.06-1.061l1.591 1.592a.75.75 0 0 1 0 1.06ZM4.322 17.95a.75.75 0 0 1 .177-1.042l2.108-1.591a.75.75 0 0 1 .863 1.224l-2.108 1.591a.75.75 0 0 1-1.04-.182ZM1.5 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 1.5 12ZM21 12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 21 12ZM4.322 6.05a.75.75 0 0 1 1.042.177l1.591 2.108a.75.75 0 0 1-1.224.863L4.322 7.09a.75.75 0 0 1-.177-1.04Zm19.05 14.44a.75.75 0 0 1-1.42-.334l-.401-2.986a.75.75 0 0 1 1.486-.198l.4 2.986a.75.75 0 0 1-.064.532ZM8.672 20.192a.75.75 0 0 1-.177 1.043l-2.108 1.591a.75.75 0 1 1-.863-1.225l2.108-1.59a.75.75 0 0 1 1.04.181ZM12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">تحليل الوضع الحالي</h3>
                    <p className="text-[var(--neutral-medium)]">مناقشة وضع عملك الحالي، التحديات التي تواجهها، والفرص المتاحة للنمو.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06L5.636 5.197a.75.75 0 0 1 0-1.06ZM17.95 4.322a.75.75 0 0 1 .183 1.04l-1.592 2.108a.75.75 0 0 1-1.224-.863l1.591-2.108a.75.75 0 0 1 1.042-.177ZM12 18a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 18ZM18.44 19.81a.75.75 0 0 1-1.06 0l-1.591-1.591a.75.75 0 0 1 1.06-1.061l1.591 1.592a.75.75 0 0 1 0 1.06ZM4.322 17.95a.75.75 0 0 1 .177-1.042l2.108-1.591a.75.75 0 0 1 .863 1.224l-2.108 1.591a.75.75 0 0 1-1.04-.182ZM1.5 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 1.5 12ZM21 12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 21 12ZM4.322 6.05a.75.75 0 0 1 1.042.177l1.591 2.108a.75.75 0 0 1-1.224.863L4.322 7.09a.75.75 0 0 1-.177-1.04Zm19.05 14.44a.75.75 0 0 1-1.42-.334l-.401-2.986a.75.75 0 0 1 1.486-.198l.4 2.986a.75.75 0 0 1-.064.532ZM8.672 20.192a.75.75 0 0 1-.177 1.043l-2.108 1.591a.75.75 0 1 1-.863-1.225l2.108-1.59a.75.75 0 0 1 1.04.181ZM12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">تحديد الأهداف</h3>
                    <p className="text-[var(--neutral-medium)]">تحديد أهدافك قصيرة وطويلة المدى، وما الذي تطمح لتحقيقه في عملك.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06L5.636 5.197a.75.75 0 0 1 0-1.06ZM17.95 4.322a.75.75 0 0 1 .183 1.04l-1.592 2.108a.75.75 0 0 1-1.224-.863l1.591-2.108a.75.75 0 0 1 1.042-.177ZM12 18a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 18ZM18.44 19.81a.75.75 0 0 1-1.06 0l-1.591-1.591a.75.75 0 0 1 1.06-1.061l1.591 1.592a.75.75 0 0 1 0 1.06ZM4.322 17.95a.75.75 0 0 1 .177-1.042l2.108-1.591a.75.75 0 0 1 .863 1.224l-2.108 1.591a.75.75 0 0 1-1.04-.182ZM1.5 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 1.5 12ZM21 12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 21 12ZM4.322 6.05a.75.75 0 0 1 1.042.177l1.591 2.108a.75.75 0 0 1-1.224.863L4.322 7.09a.75.75 0 0 1-.177-1.04Zm19.05 14.44a.75.75 0 0 1-1.42-.334l-.401-2.986a.75.75 0 0 1 1.486-.198l.4 2.986a.75.75 0 0 1-.064.532ZM8.672 20.192a.75.75 0 0 1-.177 1.043l-2.108 1.591a.75.75 0 1 1-.863-1.225l2.108-1.59a.75.75 0 0 1 1.04.181ZM12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">استراتيجيات مقترحة</h3>
                    <p className="text-[var(--neutral-medium)]">تقديم أفكار واستراتيجيات أولية يمكن أن تساعدك في تحقيق أهدافك.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06L5.636 5.197a.75.75 0 0 1 0-1.06ZM17.95 4.322a.75.75 0 0 1 .183 1.04l-1.592 2.108a.75.75 0 0 1-1.224-.863l1.591-2.108a.75.75 0 0 1 1.042-.177ZM12 18a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 18ZM18.44 19.81a.75.75 0 0 1-1.06 0l-1.591-1.591a.75.75 0 0 1 1.06-1.061l1.591 1.592a.75.75 0 0 1 0 1.06ZM4.322 17.95a.75.75 0 0 1 .177-1.042l2.108-1.591a.75.75 0 0 1 .863 1.224l-2.108 1.591a.75.75 0 0 1-1.04-.182ZM1.5 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 1.5 12ZM21 12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 21 12ZM4.322 6.05a.75.75 0 0 1 1.042.177l1.591 2.108a.75.75 0 0 1-1.224.863L4.322 7.09a.75.75 0 0 1-.177-1.04Zm19.05 14.44a.75.75 0 0 1-1.42-.334l-.401-2.986a.75.75 0 0 1 1.486-.198l.4 2.986a.75.75 0 0 1-.064.532ZM8.672 20.192a.75.75 0 0 1-.177 1.043l-2.108 1.591a.75.75 0 1 1-.863-1.225l2.108-1.59a.75.75 0 0 1 1.04.181ZM12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">خطة عمل أولية</h3>
                    <p className="text-[var(--neutral-medium)]">مناقشة الخطوات التالية وكيف يمكننا العمل معًا لتحقيق أهدافك.</p>
                  </div>
                </li>
              </ul>
              <p className="text-[var(--neutral-medium)] italic mb-6">
                الاستشارة المجانية تستغرق حوالي 30 دقيقة، وتتم عبر مكالمة فيديو أو هاتفية حسب تفضيلك.
              </p>
            </div>
            {/* نموذج الحجز */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary-dark)]">احجز موعدك الآن</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">الاسم الكامل</label>
                  <input type="text" id="name" name="name" className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل اسمك الكامل" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">البريد الإلكتروني</label>
                  <input type="email" id="email" name="email" className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل بريدك الإلكتروني" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">رقم الهاتف</label>
                  <input type="tel" id="phone" name="phone" className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل رقم هاتفك" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">اسم الشركة</label>
                  <input type="text" id="company" name="company" className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل اسم شركتك" />
                </div>
                <div>
                  <label htmlFor="consultation_type" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">نوع الاستشارة</label>
                  <select id="consultation_type" name="consultation_type" className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]">
                    <option value="" className="text-[var(--neutral-medium)]">اختر نوع الاستشارة</option>
                    <option value="strategic_planning" className="text-[var(--neutral-medium)]">التخطيط الاستراتيجي</option>
                    <option value="digital_marketing" className="text-[var(--neutral-medium)]">التسويق</option>
                    <option value="marketing_psychology" className="text-[var(--neutral-medium)]">علم النفس التسويقي</option>
                    <option value="data_analysis" className="text-[var(--neutral-medium)]">تحليل البيانات</option>
                    <option value="media_production" className="text-[var(--neutral-medium)]">الإنتاج الإعلامي</option>
                    <option value="other" className="text-[var(--neutral-medium)]">أخرى</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">رسالتك</label>
                  <textarea id="message" name="message" rows={4} className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="اشرح باختصار ما هي احتياجاتك وأهدافك"></textarea>
                </div>
                <div>
                  <label htmlFor="preferred_date" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">التاريخ المفضل</label>
                  <input type="date" id="preferred_date" name="preferred_date" className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" />
                </div>
                <div>
                  <label htmlFor="preferred_time" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">الوقت المفضل</label>
                  <select id="preferred_time" name="preferred_time" className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]">
                    <option value="" className="text-[var(--neutral-medium)]">اختر الوقت المفضل</option>
                    <option value="morning" className="text-[var(--neutral-medium)]">صباحًا (11:00 - 12:00)</option>
                    <option value="afternoon" className="text-[var(--neutral-medium)]">ظهرًا (4:00 - 5:00)</option>
                    <option value="evening" className="text-[var(--neutral-medium)]">مساءً (6:00 - 7:00)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="communication_preference" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">طريقة التواصل المفضلة</label>
                  <select id="communication_preference" name="communication_preference" className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]">
                    <option value="" className="text-[var(--neutral-medium)]">اختر طريقة التواصل</option>
                    <option value="video_call" className="text-[var(--neutral-medium)]">مكالمة فيديو</option>
                    <option value="phone_call" className="text-[var(--neutral-medium)]">مكالمة هاتفية</option>
                  </select>
                </div>
                <button type="submit" className="w-full btn-secondary">
                  احجز الاستشارة
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الأسئلة الشائعة */}
      <section className="w-full py-16 bg-[var(--neutral-light)] ">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-medium)]">الأسئلة الشائعة</h2>
            <p className="text-[var(--neutral-medium)] max-w-3xl mx-auto">
              إجابات على الأسئلة الأكثر شيوعًا حول الاستشارات وكيفية العمل معي
            </p>
          </div>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="card">
              <h3 className="text-lg font-semibold m-3 text-[var(--primary-medium)]">هل الاستشارة المجانية ملزمة بالتعاقد؟</h3>
              <p className="text-[var(--neutral-medium)] m-3">
                لا، الاستشارة المجانية هي فرصة لنا للتعرف على بعضنا البعض ومناقشة احتياجاتك وكيف يمكنني مساعدتك. لا يوجد أي التزام بالتعاقد بعد الاستشارة.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold m-3 text-[var(--primary-medium)]">كيف تتم عملية العمل بعد الاستشارة المجانية؟</h3>
              <p className="text-[var(--neutral-medium)] m-3">
                بعد الاستشارة المجانية، وإذا قررنا العمل معًا، سأقوم بإعداد اقتراح مفصل يتضمن نطاق العمل، الجدول الزمني، والتكلفة. بمجرد الموافقة على الاقتراح، نبدأ العمل وفقًا للخطة المتفق عليها.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold m-3 text-[var(--primary-medium)]">ما هي مدة المشاريع الاستشارية؟</h3>
              <p className="text-[var(--neutral-medium)] m-3">
                تختلف مدة المشاريع الاستشارية حسب نوع المشروع واحتياجاتك. يمكن أن تتراوح من استشارات قصيرة المدى (بضعة أسابيع) إلى شراكات طويلة المدى (عدة أشهر أو سنوات). سنناقش المدة المناسبة لاحتياجاتك خلال الاستشارة المجانية.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold m-3 text-[var(--primary-medium)]">هل تقدم خدمات للشركات خارج المملكة العربية السعودية؟</h3>
              <p className="text-[var(--neutral-medium)] m-3">
                نعم، أقدم خدمات استشارية للشركات في جميع أنحاء العالم العربي وخارجه. يمكن إجراء الاجتماعات والاستشارات عبر الإنترنت، مما يتيح العمل مع عملاء من مختلف المناطق الجغرافية.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold m-3 text-[var(--primary-medium)]">كيف يمكنني قياس نجاح الاستشارة؟</h3>
              <p className="text-[var(--neutral-medium)] m-3">
                في بداية كل مشروع، نحدد معًا مؤشرات الأداء الرئيسية (KPIs) التي ستستخدم لقياس النجاح. هذه المؤشرات تختلف حسب نوع المشروع وأهدافك، وقد تشمل زيادة المبيعات، تحسين معدلات التحويل، زيادة الوعي بالعلامة التجارية، وغيرها.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الشهادات */}
      <section className="w-full py-16 bg-[var(--foreground)] ">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-medium)]">ماذا يقول العملاء</h2>
            <p className="text-[var(--neutral-medium)] max-w-3xl mx-auto">
              آراء وشهادات من عملاء سعدت بالعمل معهم وتحقيق نتائج استثنائية لأعمالهم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* شهادة 1 */}
            <div className="card">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--primary-medium)]">أحمد محمد</h3>
                      <p className="text-sm text-[var(--neutral-medium)]">المدير التنفيذي، شركة تكنولوجيا</p>
                    </div>
                  </div>
                  <div className="text-[var(--secondary-medium)]">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[var(--neutral-medium)] m-3">&quot; بدأت العلاقة باستشارة مجانية، وكانت هذه الاستشارة وحدها ذات قيمة كبيرة. الأفكار والرؤى التي قدمها خلال الاستشارة المجانية كانت كافية لإقناعي بالعمل معه. النتائج التي حققناها تجاوزت توقعاتنا بكثير. &quot;</p>
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* شهادة 2 */}
            <div className="card">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--primary-medium)]">سارة خالد</h3>
                      <p className="text-sm text-[var(--neutral-medium)]">مديرة التسويق، شركة أزياء</p>
                    </div>
                  </div>
                  <div className="text-[var(--secondary-medium)]">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[var(--neutral-medium)] m-3">&quot;كنت مترددة في البداية، لكن الاستشارة المجانية أزالت كل مخاوفي. الاحترافية والخبرة العميقة كانت واضحة منذ اللحظة الأولى. أنصح بشدة بحجز استشارة مجانية لمن يبحث عن شريك استراتيجي حقيقي لتطوير أعماله.&quot;</p>
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
