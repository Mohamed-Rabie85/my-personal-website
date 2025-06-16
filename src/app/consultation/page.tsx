'use client';

import React, { useState, FormEvent } from 'react';
import { GiAngelWings } from "react-icons/gi";

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
              <p className="text-[var(--neutral-medium)] italic mb-6">
                الاستشارة المجانية تستغرق حوالي 30 دقيقة، وتتم عبر مكالمة فيديو أو هاتفية حسب تفضيلك.
              </p>
            </div>
            {/* نموذج الحجز */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary-dark)]">احجز موعدك الآن</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* كل حقل الآن مربوط بـ value و onChange */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">الاسم الكامل</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل اسمك الكامل" autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">البريد الإلكتروني</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل بريدك الإلكتروني" autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">رقم الهاتف</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل رقم هاتفك" autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">اسم الشركة</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل اسم شركتك (اختياري)" autoComplete="organization" />
                </div>
                <div>
                  <label htmlFor="consultation_type" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">نوع الاستشارة</label>
                  <select id="consultation_type" name="consultation_type" value={formData.consultation_type} onChange={handleChange} required className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" autoComplete="off">
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
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="اشرح ما هي احتياجاتك وأهدافك" autoComplete="off"></textarea>
                </div>
                <div>
                  <label htmlFor="preferred_date" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">التاريخ المفضل</label>
                  <input type="date" id="preferred_date" name="preferred_date" value={formData.preferred_date} onChange={handleChange} className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" autoComplete="off" />
                </div>
                <div>
                  <label htmlFor="preferred_time" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">الوقت المفضل</label>
                  <select id="preferred_time" name="preferred_time" value={formData.preferred_time} onChange={handleChange} className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" autoComplete="off">
                    <option value="">اختر الوقت المفضل</option>
                    <option value="afternoon">ظهرًا (12:00 - 2:00)</option>
                    <option value="evening">مساءً (6:00 - 8:00)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="communication_preference" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">طريقة التواصل المفضلة</label>
                  <select id="communication_preference" name="communication_preference" value={formData.communication_preference} onChange={handleChange} className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" autoComplete="off">
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
                  <p className="text-green-600 mt-2 text-center">
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
      <section className="w-full py-16 bg-[var(--neutral-light)] " >
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
    </main>
  );
}