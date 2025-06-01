// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; // <--- تم إضافة هذا السطر

export const metadata: Metadata = {
  title: "Mohamed Rabie | مستشار تطوير أعمال وتسويق استراتيجي",
  description: "خبرة أكثر من 20 عاماً في تطوير الأعمال والتسويق الاستراتيجي وبناء العلامات التجارية. استشارات متخصصة للشركات الناشئة والصغيرة والمتوسطة.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم الترحيب الرئيسي (Hero Section) */}
      <section className="relative w-full h-[600px] flex items-center justify-center text-white py-20 md:py-32 overflow-hidden"> {/* تم تعديل الكلاسات */}
        {/* صورة الخلفية */}
        <Image
          src="/hero-bg.png" // <--- **هام: قم بتغيير المسار ليتناسب مع صورتك**
          alt="Mohamed Rabie Background"
          fill // لجعل الصورة تملأ القسم بالكامل
          priority // لتحميل الصورة بسرعة لأنها في الجزء العلوي من الصفحة
          className="object-cover -z-10" // لجعل الصورة تغطي المساحة بالكامل وللتأكد أنها خلف المحتوى
        />
        {/* تراكب لضمان وضوح النص فوق الصورة */}
        <div className="absolute inset-0 bg-black/60 z-0"></div> {/* تم إضافة هذا السطر */}

        <div className="section-container text-center md:text-right relative z-10"> {/* تم إضافة relative z-10 */}
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            تحويل الرؤى إلى <span className="text-[var(--secondary-medium)]">نجاحات استثنائية</span>
          </h1>
          <p className="mb-8 text-xl md:text-2xl max-w-3xl mx-auto md:mx-0">
            مستشار تطوير أعمال وتسويق استراتيجي متخصص في بناء علامات تجارية مؤثرة وتحقيق نمو مستدام للشركات الناشئة والصغيرة والمتوسطة.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link href="/consultation" className="btn-secondary">
              احجز استشارة مجانية
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[var(--primary-dark)] transition-colors duration-300"> {/* تم تعديل hover:text */}
              تعرف علي أكثر
            </Link>
          </div>
        </div>
      </section>

      {/* قسم الخدمات المميزة */}
      <section className="w-full py-16 bg-[var(--foreground)]"> {/* تم تعديل اللون ليتناسق مع body */}
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--secondary-medium)]">خدمات استشارية متخصصة</h2>
            <p className="max-w-3xl mx-auto text-[var(--neutral-medium)]"> {/* تم إضافة لون نص */}
              خبرة عملية تمتد لأكثر من 20 عاماً في طليعة التحولات التسويقية، تطوير الأعمال، والابتكار التشغيلي
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* بطاقة الخدمة 1 */}
            <div className="card hover:border-r-4 hover:border-r-[var(--secondary-medium)]"> {/* تم تعديل اللون */}
              <div className="mb-4 text-[var(--secondary-dark)]"> {/* تم تعديل اللون */}
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547 9.005 9.005 0 0 1 5.9 8.18.75.75 0 0 1-1.5.045 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.499-.044 9.005 9.005 0 0 1 5.9-8.181A5.496 5.496 0 0 1 3.5 8ZM9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8.29 4c-.148 0-.292.01-.434.03a.75.75 0 1 1-.212-1.484 6.53 6.53 0 0 1 3.349 9.436 6.5 6.5 0 0 1-5.5 3.044.75.75 0 0 1 0-1.5 5 5 0 0 0 5-5c0-2.484-1.808-4.526-4.203-4.526Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">التخطيط الاستراتيجي</h3>
              <p className="text-[var(--neutral-medium)]">
                تحليل الأسواق المعقدة، تحديد الفرص الكامنة، بناء نماذج أعمال مبتكرة، ووضع خرائط طريق واضحة لتحقيق النمو.
              </p>
              <Link href="/services#strategic-planning" className="mt-4 inline-block text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium"> {/* تم تعديل اللون */}
                اكتشف المزيد ←
              </Link>
            </div>
            
            {/* بطاقة الخدمة 2 */}
            <div className="card hover:border-r-4 hover:border-r-[var(--secondary-medium)]">
              <div className="mb-4 text-[var(--secondary-dark)]">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">التسويق الرقمي المتكامل</h3>
              <p className="text-[var(--neutral-medium)]">
                استراتيجيات تسويقية شاملة تجمع بين وسائل التواصل الاجتماعي، تحسين محركات البحث، التسويق بالمحتوى، والتسويق عبر البريد الإلكتروني.
              </p>
              <Link href="/services#digital-marketing" className="mt-4 inline-block text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                اكتشف المزيد ←
              </Link>
            </div>
            
            {/* بطاقة الخدمة 3 */}
            <div className="card hover:border-r-4 hover:border-r-[var(--secondary-medium)]">
              <div className="mb-4 text-[var(--secondary-dark)]">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">تحليل البيانات لدعم القرار</h3>
              <p className="text-[var(--neutral-medium))]">
                الاستفادة من مهارات تحليل البيانات لاستخلاص رؤى قيمة تدعم اتخاذ القرارات التسويقية والاستراتيجية وتحسين الأداء.
              </p>
              <Link href="/services#data-analysis" className="mt-4 inline-block text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                اكتشف المزيد ←
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              استعرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* قسم شعارات العملاء (Logo Clouds) - جديد */}
      <section className="w-full py-16 bg-[var(--neutral-light)]"> {/* خلفية رمادية فاتحة لتمييز القسم */}
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-dark)]">عملاؤنا وشركاؤنا</h2>
            <p className="max-w-3xl mx-auto text-[var(--neutral-medium)]">
              فخورون بالعمل مع نخبة من الشركات الرائدة في قطاعات متنوعة.
            </p>
          </div>
          {/* هنا سيتم إضافة الـ Infinite Carousel */}
          <div className="relative w-full overflow-hidden py-4">
            <div className="flex animate-marquee group-hover:paused"> {/* هذا سيتم تخصيصه لاحقاً للـ infinite carousel */}
              {/*Placeholder for logos - قم بتكرار هذا div لكل شعار */}
              <div className="flex-shrink-0 w-48 mx-8">
                <Image src="/logos/logo-1.svg" alt="Client Logo 1" width={192} height={48} className="object-contain" />
              </div>
              <div className="flex-shrink-0 w-48 mx-8">
                <Image src="/logos/logo-2.svg" alt="Client Logo 2" width={192} height={48} className="object-contain" />
              </div>
              <div className="flex-shrink-0 w-48 mx-8">
                <Image src="/logos/logo-3.svg" alt="Client Logo 3" width={192} height={48} className="object-contain" />
              </div>
              <div className="flex-shrink-0 w-48 mx-8">
                <Image src="/logos/logo-4.svg" alt="Client Logo 4" width={192} height={48} className="object-contain" />
              </div>
              <div className="flex-shrink-0 w-48 mx-8">
                <Image src="/logos/logo-5.svg" alt="Client Logo 5" width={192} height={48} className="object-contain" />
              </div>
              {/* كرر الشعارات هنا لإنشاء التأثير اللانهائي - نفس الشعارات مجدداً */}
              <div className="flex-shrink-0 w-48 mx-8">
                <Image src="/logos/logo-1.svg" alt="Client Logo 1" width={192} height={48} className="object-contain" />
              </div>
              <div className="flex-shrink-0 w-48 mx-8">
                <Image src="/logos/logo-2.svg" alt="Client Logo 2" width={192} height={48} className="object-contain" />
              </div>
              <div className="flex-shrink-0 w-48 mx-8">
                <Image src="/logos/logo-3.svg" alt="Client Logo 3" width={192} height={48} className="object-contain" />
              </div>
              <div className="flex-shrink-0 w-48 mx-8">
                <Image src="/logos/logo-4.svg" alt="Client Logo 4" width={192} height={48} className="object-contain" />
              </div>
              <div className="flex-shrink-0 w-48 mx-8">
                <Image src="/logos/logo-5.svg" alt="Client Logo 5" width={192} height={48} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم شهادات العملاء (Testimonials) - جديد */}
      <section className="w-full py-16 bg-[var(--foreground)]"> {/* خلفية بيضاء لتناسق الألوان */}
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-dark)]">ماذا يقول عملاؤنا؟</h2>
            <p className="max-w-3xl mx-auto text-[var(--neutral-medium)]">
              قصص نجاح من شركاء أعمالنا تعكس القيمة الحقيقية لخدماتنا.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* شهادة العميل 1 */}
            <div className="card p-6">
              <p className="mb-4 text-[var(--neutral-dark)] text-lg italic">
                محمد هو استشاري استثنائي يجمع بين الفهم العميق للسوق والقدرة على تحويل التحديات إلى فرص نمو ملموسة. خبرته الواسعة أحدثت فرقًا حقيقيًا في أعمالنا.
              </p>
              <div className="flex items-center gap-4">
                {/* <Image src="/path/to/client-avatar1.jpg" alt="Client Name" width={50} height={50} className="rounded-full" /> */}
                <div>
                  <h3 className="font-semibold text-[var(--primary-medium)]">اسم العميل الأول</h3>
                  <p className="text-sm text-[var(--neutral-medium)]">المنصب، اسم الشركة</p>
                </div>
              </div>
            </div>
            
            {/* شهادة العميل 2 */}
            <div className="card p-6">
              <p className="mb-4 text-[var(--neutral-dark)] text-lg italic">
                لم نكن نتوقع هذا المستوى من التحليل الاستراتيجي والدعم التقني. محمد يمتلك رؤية فريدة وقدرة على تبسيط الأمور المعقدة، مما ساعدنا على تحقيق أهدافنا بسرعة وكفاءة.
              </p>
              <div className="flex items-center gap-4">
                {/* <Image src="/path/to/client-avatar2.jpg" alt="Client Name" width={50} height={50} className="rounded-full" /> */}
                <div>
                  <h3 className="font-semibold text-[var(--primary-medium)]">اسم العميل الثاني</h3>
                  <p className="text-sm text-[var(--neutral-medium)]">المنصب، اسم الشركة</p>
                </div>
              </div>
            </div>
            {/* يمكن إضافة المزيد من الشهادات هنا */}
          </div>
        </div>
      </section>

      {/* قسم لماذا تختارني */}
      <section className="w-full py-16 bg-[var(--neutral-light)] text-[var(--primary-dark)]"> {/* تم تعديل اللون */}
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-dark)]">لماذا تختارني؟</h2> {/* النص أبيض للخلفية الداكنة */}
            <p className="text-xl max-w-3xl mx-auto text-[var(--primary-dark)]"> {/* النص أبيض للخلفية الداكنة */}
              منهجية فريدة وشاملة تجمع بين الخبرة العملية، المعرفة التقنية، والفهم العميق للدوافع الإنسانية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              {/* ميزة 1 */}
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--secondary-light)] text-[var(--primary-dark)] p-3 rounded-full"> {/* تم تعديل لون الأيقونة */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z"></path>
                    <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z"></path>
                    <path d="m3.265 15.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-dark)]">خبرة متعددة المجالات</h3> {/* نص أبيض */}
                  <p className="text-[var(--neutral-medium)]"> {/* نص فاتح للخلفية الداكنة */}
                    أكثر من 20 عاماً من الخبرة في مجالات التسويق، تطوير الأعمال، الإدارة، ريادة الأعمال، الإنتاج الإعلامي، والجوانب التقنية.
                  </p>
                </div>
              </div>
              
              {/* ميزة 2 */}
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--secondary-light)] text-[var(--primary-dark)] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-dark)]">فهم عميق للدوافع الإنسانية</h3>
                  <p className="text-[var(--neutral-medium)]">
                    استخدام علم النفس التسويقي التطبيقي (بمسؤولية وأخلاق) لبناء حملات تسويقية أكثر تأثيراً وتصميم تجارب عملاء لا تُنسى.
                  </p>
                </div>
              </div>
              
              {/* ميزة 3 */}
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--secondary-light)] text-[var(--primary-dark)] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-dark)]">التزام بالقيم الأخلاقية</h3>
                  <p className="text-[var(--neutral-medium)]">
                    الإيمان بأن النجاح الحقيقي والمستدام يرتكز على الالتزام الراسخ بالقيم الأخلاقية والشفافية في جميع الممارسات التسويقية والاستشارية.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* ميزة 4 */}
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--secondary-light)] text-[var(--primary-dark)] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 0 1.5 10.5h21a3 3 0 0 0-2.566-2.843A4.505 4.505 0 0 0 18.75 7.5H5.25Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-dark)]">سجل حافل في ريادة الأعمال</h3>
                  <p className="text-[var(--neutral-medium)]">
                    تأسيس وإدارة شركات متعددة (Rio Marketing Solutions، Exs Agency، Next Academy) يعكس القدرة على بناء المشاريع من الصفر وفهم تحديات رواد الأعمال.
                  </p>
                </div>
              </div>
              
              {/* ميزة 5 */}
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--secondary-light)] text-[var(--primary-dark)] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z"></path>
                    <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-dark)]">مهارات تقنية متقدمة</h3>
                  <p className="text-[var(--neutral-medium)]">
                    الإلمام بلغات البرمجة (Python، React، Next.js) وتحليل البيانات يضيف بعداً تقنياً نادراً في ملفات مستشاري التسويق وتطوير الأعمال التقليديين.
                  </p>
                </div>
              </div>
              
              {/* ميزة 6 */}
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--secondary-light)] text-[var(--primary-dark)] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z"></path>
                    <path d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-dark)]">التزام بالتعلم المستمر</h3>
                  <p className="text-[var(--neutral-medium)]">
                    حاصل على شهادات متعددة ومتنوعة تعكس شغفاً بالمعرفة وتطوير الذات، مما يضمن تقديم أحدث الاستراتيجيات والممارسات في مجال التسويق وتطوير الأعمال.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/about" className="btn-primary">
              تعرف على المزيد عني
            </Link>
          </div>
        </div>
      </section>

      {/* قسم المدونة (Blog Sections) - جديد */}
      <section className="w-full py-16 bg-[var(--foreground)]"> {/* خلفية بيضاء */}
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-dark)]">أحدث المقالات والرؤى</h2>
            <p className="max-w-3xl mx-auto text-[var(--neutral-medium)]">
              شارك خبراتي ومعرفتي في مجالات تطوير الأعمال، التسويق، والتقنية.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* مقال 1 (Placeholder) */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-medium)]">عنوان المقال الأول</h3>
              <p className="text-[var(--neutral-medium)] mb-4">
                نبذة مختصرة عن المقال الأول، تتضمن أهم النقاط التي سيتم تناولها.
              </p>
              <Link href="/blog/article-1" className="text-[var(--secondary-medium)] hover:text-[var(--secondary-dark)] font-medium">
                اقرأ المزيد ←
              </Link>
            </div>
            {/* مقال 2 (Placeholder) */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-medium)]">عنوان المقال الثاني</h3>
              <p className="text-[var(--neutral-medium)] mb-4">
                نبذة مختصرة عن المقال الثاني، تتضمن أهم النقاط التي سيتم تناولها.
              </p>
              <Link href="/blog/article-2" className="text-[var(--secondary-medium)] hover:text-[var(--secondary-dark)] font-medium">
                اقرأ المزيد ←
              </Link>
            </div>
            {/* مقال 3 (Placeholder) */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-medium)]">عنوان المقال الثالث</h3>
              <p className="text-[var(--neutral-medium)] mb-4">
                نبذة مختصرة عن المقال الثالث، تتضمن أهم النقاط التي سيتم تناولها.
              </p>
              <Link href="/blog/article-3" className="text-[var(--secondary-medium)] hover:text-[var(--secondary-dark)] font-medium">
                اقرأ المزيد ←
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-primary">
              تصفح المدونة
            </Link>
          </div>
        </div>
      </section>

      {/* قسم دعوة للعمل */}
      <section className="w-full py-16 bg-[var(--primary-dark)] text-white"> {/* تم تعديل اللون */}
        <div className="section-container text-center">
          <h2 className="text-white mb-6">هل أنت جاهز لتحويل رؤيتك إلى واقع؟</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            دعنا نتحدث عن كيفية مساعدتك في تحقيق أهدافك وتطوير أعمالك بشكل استراتيجي ومستدام.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/consultation" className="btn-secondary">
              احجز استشارة مجانية
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[var(--primary-dark)] transition-colors duration-300">
              تواصل معي
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}