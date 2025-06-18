'use client'; // <-- خطوة مهمة جدًا لجعل المكون تفاعليًا

import { useState, FormEvent } from 'react';
import { FaSquareGithub, FaSquareFacebook, FaSquareWhatsapp } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

// لم نعد بحاجة لـ Metadata هنا لأن هذا المكون أصبح 'use client'
// من الأفضل نقل الـ Metadata إلى ملف layout.tsx الخاص بالصفحة إذا أردت ذلك

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // لتتبع حالة الإرسال (sending, success, error)

  // دالة لتحديث حالة البيانات عند تغيير المستخدم للمدخلات
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // دالة لمعالجة إرسال الفورم
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // منع التحديث التلقائي للصفحة
    setStatus('sending'); // تحديث الحالة إلى "جار الإرسال"

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success'); // تم الإرسال بنجاح
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // تفريغ حقول الفورم
      } else {
        setStatus('error'); // حدث خطأ من الخادم
        console.error('Failed to send email:', await response.json());
      }
    } catch (error) {
      setStatus('error'); // حدث خطأ في الشبكة أو الاتصال
      console.error('An error occurred:', error);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي */}
      <section className="w-full bg-gradient-to-b from-[rgb(var(--primary-dark))] to-[rgb(var(--primary-medium))] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4">تواصل معي</h1>
          <p className="text-xl max-w-3xl mx-auto">
            أنا هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك
          </p>
        </div>
      </section>

      {/* قسم معلومات الاتصال ونموذج التواصل */}
      <section className="w-full py-16 bg-[var(--foreground)]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* معلومات الاتصال */}
            <div>
              <h2 className="text-2xl text-[var(--primary-dark)] mb-6">معلومات الاتصال</h2>
              <p className="mb-8 text-[var(--neutral-medium)]">
                يمكنك التواصل معني من خلال أي من وسائل الاتصال التالية، أو يمكنك ملء نموذج التواصل وسأرد عليك في أقرب وقت ممكن.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path>
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-[var(--primary-medium)]">البريد الإلكتروني</h3>
                    <p className="text-[var(--neutral-medium)]">mohamedrabie.consultant@gmail.com

                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"></path>
                      <path d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM8.25 9.75a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-1.5 0v3.75ZM15.75 9.75a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-1.5 0v3.75ZM16.125 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM13.125 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM12.75 9.75a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-1.5 0v3.75ZM18.75 10.5a.75.75 0 0 0-.75.75v7.5c0 .414-.336.75-.75.75h-10.5a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 0-1.5 0v7.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a.75.75 0 0 0-.75-.75ZM7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h4.5a3 3 0 0 0 2.599-1.5h-9.698Z"></path>
                      <path d="M7.5 3h9a2.25 2.25 0 0 1 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-4.5A2.25 2.25 0 0 1 7.5 3Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-[var(--primary-medium)]">رقم الهاتف</h3>
                    <p className="text-[var(--neutral-medium)]">01503000790 2+</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.06l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 0 0 1.061 1.06l8.69-8.69Z"></path>
                      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.43Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-[var(--primary-medium)]">العنوان</h3>
                    <p className="text-[var(--neutral-medium)]">القاهرة، مصر</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-[var(--secondary-medium)] mt-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
                      <path d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-[var(--primary-medium)]">ساعات العمل</h3>
                    <p className="text-[var(--neutral-medium)]">الأحد - الخميس: 11:00 صباحًا - 7:00 مساءً</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-xl text-[var(--primary-medium)] mb-4">تابعنا على وسائل التواصل الاجتماعي</h3>
                <div className="flex gap-4">
                  {/* WhatsApp Icon */}
                  <a href="https://wa.me/+201503000790" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-medium)] hover:text-[var(--secondary-medium)] transition-colors">
                    <FaSquareWhatsapp size={30} />
                  </a>
                  {/* GitHub Icon */}
                  <a href="https://github.com/Mohamed-Rabie85" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-medium)] hover:text-[var(--secondary-medium)] transition-colors">
                    <FaSquareGithub size={30} />
                  </a>

                  {/* Facebook Icon */}
                  <a href="https://www.facebook.com/mohamedrabie85" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-medium)] hover:text-[var(--secondary-medium)] transition-colors">
                    <FaSquareFacebook size={30} />
                  </a>

                  {/* LinkedIn Icon */}
                  <a href="https://www.linkedin.com/in/mohamedrabie85" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-medium)] hover:text-[var(--secondary-medium)] transition-colors">
                    <IoLogoLinkedin size={30} />
                  </a>
                </div>
              </div>
            </div>

            {/* نموذج التواصل */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary-dark)]">أرسل لنا رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1">الاسم الكامل</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل اسمك الكامل" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1">البريد الإلكتروني</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل بريدك الإلكتروني" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1">رقم الهاتف</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل رقم هاتفك (اختياري)" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1">الموضوع</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل موضوع رسالتك" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1">الرسالة</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="اكتب رسالتك هنا..."></textarea>
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full btn-secondary disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'sending' ? 'جار الإرسال...' : 'إرسال الرسالة'}
                </button>

                {/* رسائل الحالة للمستخدم */}
                {status === 'success' && (
                  <p className="text-green-600 mt-2 text-center">
                    تم إرسال رسالتك بنجاح! شكرًا لتواصلك.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 mt-2 text-center">
                    حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل عبر البريد المباشر.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الخريطة */}
      {/* <section className="w-full py-16 bg-g-[var(--neutral-light)]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[rgb(var(--primary-dark))]">موقعنا</h2>
            <p className="text-[rgb(var(--neutral-medium))] max-w-3xl mx-auto">
              يمكنك زيارتنا في مكتبنا في الرياض، المملكة العربية السعودية
            </p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">

            <div className="text-center text-gray-500">
              <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.06l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 0 0 1.061 1.06l8.69-8.69Z"></path>
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.43Z"></path>
              </svg>
              <p>خريطة جوجل ستظهر هنا</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* قسم الأسئلة الشائعة */}
      <section className="w-full py-16 bg-[var(--neutral-light)]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-medium)]">الأسئلة الشائعة</h2>
            <p className="text-[var(--neutral-medium)] max-w-3xl mx-auto">
              إجابات على الأسئلة الأكثر شيوعًا حول خدماتنا وكيفية التواصل معنا
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="card">
              <h3 className="text-lg font-semibold m-3 text-[var(--primary-medium)]">ما هي أوقات الرد على الاستفسارات؟</h3>
              <p className="text-[var(--neutral-medium)] m-3">&quot;نحن نسعى للرد على جميع الاستفسارات خلال 24 ساعة من استلامها. في حالات الطوارئ، يمكنك الاتصال بنا مباشرة على رقم الهاتف المذكور.&quot;</p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold m-3 text-[var(--primary-medium)]">هل يمكنني حجز موعد لزيارة مكتبكم؟</h3>
              <p className="text-[var(--neutral-medium)] m-3">&quot;نعم، يمكنك حجز موعد لزيارة مكتبنا من خلال الاتصال بنا أو إرسال بريد إلكتروني. نرحب بالزيارات خلال ساعات العمل الرسمية من الأحد إلى الخميس.&quot;</p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold m-3 text-[var(--primary-medium)]">هل تقدمون خدمات استشارية عن بعد؟</h3>
              <p className="text-[var(--neutral-medium)] m-3">&quot;نعم، نقدم خدمات استشارية عن بعد من خلال مكالمات الفيديو أو الهاتف. يمكنك حجز استشارة مجانية من خلال صفحة حجز استشارة على موقعنا.&quot;</p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold m-3 text-[var(--primary-medium)]">كيف يمكنني معرفة المزيد عن خدماتكم؟</h3>
              <p className="text-[var(--neutral-medium)] m-3">&quot;يمكنك معرفة المزيد عن خدماتنا من خلال تصفح موقعنا الإلكتروني، وخاصة صفحة خدماتنا. كما يمكنك التواصل معنا مباشرة للحصول على معلومات مخصصة حسب احتياجاتك.&quot;</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
