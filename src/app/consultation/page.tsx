'use client';

import React, { useState, FormEvent } from 'react';
import { GiAngelWings } from "react-icons/gi";
import { FaSquareGithub, FaSquareFacebook, FaSquareWhatsapp } from "react-icons/fa6";
import { IoLogoLinkedin, IoMail } from "react-icons/io5";
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
      {/* قسم العنوان الرئيسي - محدث */}
      <section className="w-full bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-medium)] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4 text-3xl font-bold">طلب استشارة / تواصل</h1>
          <p className="text-xl max-w-3xl mx-auto">
            سواء كنت تبحث عن حل جذري لمشاكل شركتك، أو لديك استفسار عام، املأ النموذج وسنحدد الخطوة التالية المناسبة لك.
          </p>
        </div>
      </section>

      {/* قسم المحتوى والفورم */}
      <section className="w-full py-16 bg-white ">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* الجزء الأيمن (معلوماتي) */}
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
              </ul>
              <p className="text-[var(--primary-medium)] italic mb-10">
                الاستشارة المجانية تستغرق حوالي 30 دقيقة، وتتم عبر مكالمة فيديو أو هاتفية حسب تفضيلك.
              </p>

              {/* قسم بيانات التواصل المباشر - الجديد */}
              <div className="bg-[var(--neutral-light)]/50 p-6 rounded-lg border border-[var(--neutral-medium)]/20">
                <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-4 border-b border-[var(--secondary-medium)] pb-2 inline-block">
                  بيانات التواصل المباشر (للاستفسارات السريعة والشراكات)
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <IoMail className="text-[var(--secondary-medium)]" size={20} />
                    <a href="mailto:mohamedrabie.consultant@gmail.com" className="text-[var(--neutral-dark)] hover:text-[var(--primary-medium)] transition-colors dir-ltr font-medium">
                      mohamedrabie.consultant@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaSquareWhatsapp className="text-[var(--secondary-medium)]" size={20} />
                    <a href="https://wa.me/+201503000790" target="_blank" rel="noopener noreferrer" className="text-[var(--neutral-dark)] hover:text-[var(--primary-medium)] transition-colors dir-ltr font-medium">
                      +20 150 300 0790
                    </a>
                  </li>
                </ul>

                <div className="flex gap-4 mt-6">
                  <a href="https://www.linkedin.com/in/mohamedrabie85" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-medium)] hover:text-[var(--secondary-medium)] transition-colors transform hover:scale-110">
                    <IoLogoLinkedin size={28} />
                  </a>
                  <a href="https://www.facebook.com/MohamedRabieGrowth/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-medium)] hover:text-[var(--secondary-medium)] transition-colors transform hover:scale-110">
                    <FaSquareFacebook size={28} />
                  </a>
                  <a href="https://wa.me/+201503000790" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-medium)] hover:text-[var(--secondary-medium)] transition-colors transform hover:scale-110">
                    <FaSquareWhatsapp size={28} />
                  </a>
                </div>
              </div>

            </div>

            {/* نموذج الحجز */}
            <div className="bg-[var(--neutral-light)] p-8 rounded-lg shadow-md h-fit sticky top-24">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary-dark)]">املأ النموذج وسأتواصل معك</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <label htmlFor="consultation_type" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">نوع الاستشارة / التواصل</label>
                  <select id="consultation_type" name="consultation_type" value={formData.consultation_type} onChange={handleChange} required className="text-[var(--neutral-medium)] bg-white w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" autoComplete="off">
                    <option value="">اختر السبب...</option>
                    <option value="startup_formation">تأسيس مشروع جديد</option>
                    <option value="restructuring">إعادة هيكلة ونمو الأعمال</option>
                    <option value="marketing_strategy">شراكة تنفيذية (دعم مستمر)</option>
                    <option value="business_development">تطوير الأعمال</option>
                    <option value="operations_optimization">تحسين العمليات</option>
                    <option value="strategy_planning">تخطيط استراتيجي</option>
                    <option value="general_inquiry">استفسار عام / شراكة أعمال</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1 mr-1">رسالتك / تفاصيل إضافية</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="text-[var(--neutral-medium)] bg-white w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="اشرح ما هي احتياجاتك أو استفسارك" autoComplete="off"></textarea>
                </div>

                {/* تم تبسيط الفورم بإزالة تفضيلات التاريخ والوقت في المرحلة الأولية لزيادة نسبة التحويل */}

                <button type="submit" disabled={status === 'sending'} className="w-full btn-secondary disabled:opacity-50 disabled:cursor-not-allowed text-lg font-bold py-3 mt-4">
                  {status === 'sending' ? 'جار الإرسال...' : 'إرسال الطلب'}
                </button>

                {/* رسائل الحالة للمستخدم */}
                {status === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
                    <strong className="font-bold">تم الإرسال بنجاح! </strong>
                    <span className="block sm:inline">سأتواصل معك قريبًا.</span>
                  </div>
                )}
                {status === 'error' && (
                  <p className="text-red-600 mt-2 text-center">
                    حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معي مباشرة عبر واتساب.
                  </p>
                )}
              </form>
            </div >
          </div >
        </div >
      </section>

      {/* قسم الأسئلة الشائعة - محدث استراتيجياً */}
      <section className="w-full py-16 bg-[var(--neutral-light)]">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-medium)] text-3xl font-bold">الأسئلة الشائعة</h2>
            <p className="text-[var(--neutral-medium)] max-w-3xl mx-auto">
              إجابات على أهم تساؤلاتك قبل البدء
            </p>
          </div>
          <Accordion>
            {/* 1. حول الاستشارة المجانية */}
            <AccordionItem title="ماذا أتوقع من الاستشارة المجانية؟">
              الاستشارة هي جلسة تشخيصية مدتها 30 دقيقة لنفهم تحدياتك ونحدد هل نحن الشريك المناسب لك. سنقوم بتحليل أولي للوضع وتقديم توصيات مبدئية. لا يوجد أي التزام بالتعاقد بعدها.
            </AccordionItem>

            {/* 2. حول التنفيذ وريو */}
            <AccordionItem title="هل التنفيذ يتم عن طريقكم؟">
              نعم، بصفتي مؤسس لـ <strong>Rio Marketing Solutions</strong>، نمتلك ذراعاً تنفيذياً كاملاً ومتخصصاً لتطبيق الاستراتيجيات التي نضعها، مما يضمن لك وحدة الرؤية ودقة التنفيذ دون الحاجة للتعامل مع جهات متعددة.
            </AccordionItem>

            {/* 3. الجغرافيا */}
            <AccordionItem title="هل تقدمون خدمات خارج مصر؟">
              نعم، نقدم خدماتنا لعملاء في السعودية، الإمارات، وكل الدول العربية عبر اجتماعات أونلاين فعالة ومنظمة، ولنا سابقة أعمال ناجحة في أسواق متعددة.
            </AccordionItem>

            {/* 4. السرية */}
            <AccordionItem title="كيف تضمنون سرية معلوماتي؟">
              نحن نأخذ السرية بجدية تامة. نوقع اتفاقية عدم إفشاء (NDA) عند الطلب، ونعامل بياناتك واستراتيجياتك كأسرار تجارية مقدسة لا يتم مشاركتها مع أي طرف ثالث.
            </AccordionItem>

            {/* 5. الخطوة التالية */}
            <AccordionItem title="ما هي الخطوة التالية بعد ملء النموذج؟">
              سأقوم بمراجعة طلبك شخصياً لتحليله، وسيتواصل معك فريقي خلال 24 ساعة لتحديد الموعد المناسب للاجتماع أو للرد على استفسارك.
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}



