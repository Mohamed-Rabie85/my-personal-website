import type { Metadata } from "next";
import Link from "next/link";
// import Image from "next/image";

export const metadata: Metadata = {
  title: "تواصل معنا | Mohamed Rabie مستشار تطوير أعمال وتسويق استراتيجي",
  description: "تواصل معنا للاستفسارات والمعلومات حول خدماتنا الاستشارية في مجالات التسويق الاستراتيجي وتطوير الأعمال وبناء العلامات التجارية.",
};

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي */}
      <section className="w-full bg-gradient-to-b from-[rgb(var(--primary-dark))] to-[rgb(var(--primary-medium))] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4">تواصل معنا</h1>
          <p className="text-xl max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك
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
                يمكنك التواصل معنا من خلال أي من وسائل الاتصال التالية، أو يمكنك ملء نموذج التواصل وسنرد عليك في أقرب وقت ممكن.
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
                    <p className="text-[var(--neutral-medium)]">mohamedrabie85@gmail.com
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
                    <p className="text-[var(--neutral-medium)]">05200 011 011 2+</p>
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
                  <a href="#" className="text-[var(--neutral-medium)] hover:text-[var(--primary-medium)] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-[var(--neutral-medium)] hover:text-[var(--primary-medium)] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-[var(--neutral-medium)] hover:text-[var(--primary-medium)] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-[var(--neutral-medium)] hover:text-[var(--primary-medium)] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* نموذج التواصل */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary-dark)]">أرسل لنا رسالة</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1">الاسم الكامل</label>
                  <input type="text" id="name" name="name" className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل اسمك الكامل" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1">البريد الإلكتروني</label>
                  <input type="email" id="email" name="email" className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل بريدك الإلكتروني" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1">رقم الهاتف</label>
                  <input type="tel" id="phone" name="phone" className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل رقم هاتفك" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1">الموضوع</label>
                  <input type="text" id="subject" name="subject" className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="أدخل موضوع رسالتك" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--neutral-dark)] mb-1">الرسالة</label>
                  <textarea id="message" name="message" rows={6} className="text-[var(--neutral-medium)] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-dark)]" placeholder="اكتب رسالتك هنا..."></textarea>
                </div>
                <button type="submit" className="w-full btn-secondary">
                  إرسال الرسالة
                </button>
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
