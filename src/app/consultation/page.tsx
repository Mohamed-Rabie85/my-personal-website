'use client';

import React, { useState, FormEvent } from 'react';
import { GiAngelWings } from "react-icons/gi";
import Accordion from '@/components/Accordion';
import AccordionItem from '@/components/AccordionItem';

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    consultation_type: '',
    message: '',
    preferred_date: '',
    preferred_time: '',
    communication_preference: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '', email: '', phone: '', company: '',
          consultation_type: '', message: '', preferred_date: '',
          preferred_time: '', communication_preference: '',
        });
      } else {
        setStatus('error');
        const errorData = response.headers.get('content-type')?.includes('application/json')
          ? await response.json()
          : await response.text();
        console.error('Failed to send booking request:', errorData);
      }
    } catch (error) {
      setStatus('error');
      console.error('An error occurred:', error);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي */}
      <section className="w-full bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-medium)] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4 text-3xl font-bold">احجز استشارة مجانية</h1>
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
              <h2 className="text-[var(--primary-dark)] text-3xl font-bold mb-6">ماذا تتضمن الاستشارة المجانية؟</h2>
              <p className="mb-4 text-[var(--neutral-medium)]">
                الاستشارة المجانية هي فرصة لمناقشة احتياجات عملك وتحدياتك الحالية، وتحديد كيف يمكنني مساعدتك في تحقيق أهدافك. خلال الاستشارة، سنتحدث عن:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">تحليل الوضع الحالي</h3>
                    <p className="text-[var(--neutral-medium)]">مناقشة وضع عملك الحالي، التحديات التي تواجهها، والفرص المتاحة للنمو.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">تحديد الأهداف</h3>
                    <p className="text-[var(--neutral-medium)]">تحديد أهدافك قصيرة وطويلة المدى، وما الذي تطمح لتحقيقه في عملك.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">استراتيجيات مقترحة</h3>
                    <p className="text-[var(--neutral-medium)]">تقديم أفكار واستراتيجيات أولية يمكن أن تساعدك في تحقيق أهدافك.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-[var(--secondary-medium)]">
                    <GiAngelWings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--primary-medium)]">خطة عمل أولية</h3>
                    <p className="text-[var(--neutral-medium)]">مناقشة الخطوات التالية وكيف يمكننا العمل معًا لتحقيق أهدافك.</p>
                  </div>
                </li>
              </ul>
              <p className="text-[var(--primary-medium)] italic mb-6">
                الاستشارة المجانية تستغرق حوالي 30 دقيقة، وتتم عبر مكالمة فيديو أو هاتفية حسب تفضيلك.
              </p>
            </div>
            {/* نموذج الحجز */}
            <div className="bg-[var(--neutral-light)] p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary-dark)]">احجز موعدك الآن</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* كل حقل الآن مربوط بـ value و onChange */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">الاسم الكامل</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="text-[var(--neutral-medium)] bg-white w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-medium)]" placeholder="أدخل اسمك الكامل" autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">البريد الإلكتروني</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="text-[var(--neutral-medium)] bg-white w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-medium)]" placeholder="أدخل بريدك الإلكتروني" autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">رقم الهاتف</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="text-[var(--neutral-medium)] bg-white w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل رقم هاتفك" autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">اسم الشركة</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="text-[var(--neutral-medium)] bg-white w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل اسم شركتك (اختياري)" autoComplete="organization" />
                </div>
                <div>
                  <label htmlFor="consultation_type" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">نوع الاستشارة</label>
                  <select id="consultation_type" name="consultation_type" value={formData.consultation_type} onChange={handleChange} required className="text-[var(--neutral-medium)] bg-white w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" autoComplete="off">
                    <option value="">اختر نوع الاستشارة</option>
                    <option value="startup_formation">تأسيس مشروع جديد</option>
                    <option value="restructuring">إعادة هيكلة ونمو الأعمال</option>
                    <option value="marketing_strategy">شراكة تنفيذية (دعم مستمر)</option>
                    <option value="business_development">تطوير الأعمال</option>
                    <option value="operations_optimization">تحسين العمليات</option>
                    <option value="strategy_planning">تخطيط استراتيجي</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">رسالتك</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="text-[var(--neutral-medium)] bg-white w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="اشرح ما هي احتياجاتك وأهدافك" autoComplete="off"></textarea>
                </div>
                <div>
                  <label htmlFor="preferred_date" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">التاريخ المفضل</label>
                  <input type="date" id="preferred_date" name="preferred_date" value={formData.preferred_date} onChange={handleChange} className="text-[var(--neutral-medium)] bg-white w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" autoComplete="off" />
                </div>
                <div>
                  <label htmlFor="preferred_time" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">الوقت المفضل</label>
                  <select id="preferred_time" name="preferred_time" value={formData.preferred_time} onChange={handleChange} className="text-[var(--neutral-medium)] bg-white w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" autoComplete="off">
                    <option value="">اختر الوقت المفضل</option>
                    <option value="afternoon">ظهرًا (12:00 - 2:00)</option>
                    <option value="evening">مساءً (6:00 - 8:00)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="communication_preference" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">طريقة التواصل المفضلة</label>
                  <select id="communication_preference" name="communication_preference" value={formData.communication_preference} onChange={handleChange} className="text-[var(--neutral-medium)] bg-white w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" autoComplete="off">
                    <option value="">اختر طريقة التواصل</option>
                    <option value="video_call">مكالمة فيديو</option>
                    <option value="phone_call">مكالمة هاتفية</option>
                  </select>
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full btn-secondary disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'sending' ? 'جار الحجز...' : 'احجز الاستشارة'}
                </button>

                {/* رسائل الحالة للمستخدم */}
                {status === 'success' && (
                  <p className="text-[var(--secondary-medium)] mt-2 text-center text-2xl">
                    تم إرسال طلبك بنجاح! سأتواصل معك قريبًا لتأكيد الموعد.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 mt-2 text-center">
                    حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معي مباشرة.
                  </p>
                )}
              </form>
            </div >
          </div >
        </div >
      </section>

      {/* قسم الأسئلة الشائعة */}
      <section className="w-full py-16 bg-[var(--neutral-light)]"> 
        <div className="section-container max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-[var(--primary-medium)] text-3xl font-bold">الأسئلة الشائعة</h2>
            <p className="text-[var(--neutral-medium)] max-w-3xl mx-auto">
              إجابات على الأسئلة الأكثر شيوعًا حول الاستشارات وكيفية العمل معي
            </p>
          </div>
          <Accordion>
            {/* 1. حول الاستشارة المجانية وأهدافها */}
            <AccordionItem title="ماذا أتوقع من الاستشارة المجانية الأولية؟">
              الاستشارة المجانية هي فرصة لنا لنتعارف، نفهم تحديات عملك الحالية، ونستكشف الأهداف التي تسعى لتحقيقها. سأقدم لك رؤى أولية حول كيفية مقاربتنا لهذه التحديات والفرص المحتملة للنمو. لا يوجد أي التزام بالتعاقد بعدها.
            </AccordionItem>

            {/* 2. عملية العمل والتعاقد */}
            <AccordionItem title="كيف تتم عملية العمل بعد الاستشارة المجانية؟">
              بعد الاستشارة المجانية، إذا رأينا أن هناك توافقًا وإمكانية للعمل معًا، سأقوم بإعداد مقترح مفصل. سيتضمن هذا المقترح نطاق العمل، الأهداف المحددة، المنهجية المقترحة، الجدول الزمني المتوقع، والتكلفة. بمجرد موافقتك، نبدأ رحلتنا لتحقيق أهدافك.
            </AccordionItem>

            {/* 3. قياس النجاح والعائد على الاستثمار (ROI) */}
            <AccordionItem title="كيف يمكنني قياس نجاح المشاريع الاستشارية معكم؟">
              في بداية كل مشروع، نحدد معًا مؤشرات الأداء الرئيسية (KPIs) والمعايير التي ستستخدم لقياس النجاح والعائد على الاستثمار (ROI). هذه المؤشرات قابلة للقياس وتتفق مع أهداف عملك، مثل زيادة المبيعات، تحسين كفاءة العمليات، توسيع قاعدة العملاء، تعزيز الوعي بالعلامة التجارية، أو تحسين تجربة المستخدم.
            </AccordionItem>

            {/* 4. أنواع الخدمات التي تقدمونها */}
            <AccordionItem title="ما هي أنواع الشركات والخدمات التي تقدمون لها الاستشارات؟">
              أقدم خدمات استشارية متكاملة لرواد الأعمال وقادة الشركات الناشئة والصغيرة في قطاعات متنوعة. تشمل خبراتي التخطيط الاستراتيجي، تطوير الأعمال، التسويق الرقمي وبناء العلامات التجارية، إدارة العمليات، والتحول الرقمي، بالإضافة إلى الإرشاد والتوجيه.
            </AccordionItem>

            {/* 5. الجغرافيا والتواجد */}
            <AccordionItem title="هل تقدمون خدمات استشارية للشركات خارج مصر؟">
              نعم بالتأكيد، أقدم خدمات استشارية للشركات في جميع أنحاء العالم العربي وخارجه. يتم إجراء الاجتماعات والاستشارات بكفاءة وفعالية عبر الإنترنت، مما يتيح لنا العمل مع عملاء من مختلف المناطق الجغرافية والثقافات.
            </AccordionItem>

            {/* 6. المدة الزمنية للمشاريع */}
            <AccordionItem title="ما هي المدة المتوقعة للمشاريع الاستشارية؟">
              تختلف مدة المشاريع الاستشارية بناءً على حجم المشروع، تعقيد التحديات، والأهداف المحددة. يمكن أن تتراوح من استشارات قصيرة المدى (بضعة أسابيع للتركيز على نقطة معينة) إلى شراكات طويلة الأمد (عدة أشهر أو حتى سنوات لتحقيق نمو مستدام وتحول شامل). نحدد المدة المناسبة خلال مرحلة التخطيط الأولي.
            </AccordionItem>

            {/* 7. الجانب التقني / دمج التكنولوجيا */}
            <AccordionItem title="كيف يمكن للتكنولوجيا والحلول الرقمية أن تساهم في نمو أعمالنا؟">
              أعمل على دمج أحدث التقنيات والحلول الرقمية، بما في ذلك الذكاء الاصطناعي والأتمتة، في الاستراتيجيات التي نقدمها. سواء كان ذلك بتحسين تواجدكم الرقمي (المواقع والتطبيقات)، أتمتة العمليات لزيادة الكفاءة، أو تحليل البيانات لدعم اتخاذ القرارات، فإن التكنولوجيا هي حجر الزاوية لتحقيق التحول والنمو في العصر الرقمي.
            </AccordionItem>

            {/* 8. القيمة المضافة / ما يميزكم */}
            <AccordionItem title="ما الذي يميز خدماتكم الاستشارية عن غيركم؟">
              أجمع بين خبرة عملية تزيد عن 20 عامًا في قطاعات متنوعة، وفهم عميق للتحليل الاستراتيجي والتسويق، مع إلمام قوي بالجانب التقني. أركز على تقديم حلول عملية قابلة للتنفيذ تحقق نتائج ملموسة ومستدامة، مع الالتزام بالقيم الأخلاقية والشفافية التامة، وبناء علاقات شراكة حقيقية مع عملائي.
            </AccordionItem>

            {/* 9. سرية المعلومات والبيانات */}
            <AccordionItem title="كيف تضمنون سرية معلومات وبيانات شركتي؟">
              نحن نولي أقصى درجات الأهمية لسرية معلومات عملائنا. يتم التعامل مع جميع البيانات والمعلومات بسرية تامة ووفقًا لأعلى معايير الأمن السيبراني. نوقع اتفاقيات عدم إفشاء (NDAs) عند الضرورة لضمان حماية بياناتكم بشكل كامل.
            </AccordionItem>

            {/* 10. كيفية البدء / الخطوة التالية */}
            <AccordionItem title="ما هي الخطوة التالية لحجز استشارة؟">
              الخطوة التالية بسيطة! قم بملء النموذج الموجود في هذه الصفحة لطلب استشارتك المجانية. سأقوم بمراجعة طلبك والتواصل معك لتحديد موعد مناسب يناسب جدولك.
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}



