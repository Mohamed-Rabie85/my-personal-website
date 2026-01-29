// src/components/HeroSection.tsx
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center text-white py-20 md:py-32 overflow-hidden">
      {/* صورة الخلفية */}
      <Image
        src="/images/hero-bg.png"
        alt="Mohamed Rabie - خبير تطوير الأعمال"
        fill
        priority
        className="object-cover -z-10"
      />
      {/* تراكب لضمان وضوح النص فوق الصورة - تم تغميق الطبقة لزيادة التباين */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/90 via-[var(--primary-dark)]/70 to-transparent z-0"></div>

      {/* المحتوى الرئيسي */}
      <div className="section-container relative z-10 flex flex-col items-start justify-center h-full text-right">
        {/* شارة الخبرة (Badge) */}
        <div className="mb-6 inline-block px-6 py-2 bg-[var(--secondary-medium)]/10 border border-[var(--secondary-medium)]/50 rounded-full font-semibold text-sm md:text-base animate-fadeIn backdrop-blur-sm">
          🏆 بخبرة +20 عاماً في السوق المصري والعربي
        </div>

        {/* العنوان الرئيسي (H1) */}
        <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl tracking-tight">
          حول شركتك من{" "}
          <span className="text-[var(--secondary-medium)] relative inline-block">
            مجهود فردي
            <svg className="absolute w-full h-3 -bottom-1 right-0 text-[var(--secondary-medium)] opacity-30" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M2.00025 5.50002C2.00025 5.50002 91.0003 4.50002 108.001 3.50002C125.001 2.50002 201.001 2.00002 201.001 2.00002C201.001 2.00002 153.001 6.50002 133.501 7.50002C114.001 8.50002 36.0003 10.5 36.0003 10.5C36.0003 10.5 73.0003 5.50002 73.0003 5.50002H2.00025Z" /></svg>
          </span>{" "}
          مرهق..
          <br className="hidden md:block" />
          إلى{" "}
          <span className="text-white bg-[var(--primary-medium)] px-2 rotate-1 inline-block transform">كيان مؤسسي</span>{" "}
          ينمو ذاتياً
        </h1>

        {/* النص الفرعي (Sub-Headline) */}
        <p className="mb-10 text-lg md:text-xl lg:text-2xl max-w-3xl text-gray-200 leading-relaxed font-light">
          بصفتي مؤسس لـ{" "}
          <strong className="text-white">ريو للحلول التسويقية</strong>{" "}
          ومستشار لأكثر من <strong>50+ شركة</strong>، أساعدك
          في بناء <span className="text-[var(--secondary-medium)] font-bold">الأنظمة (Systems)</span> التي
          تخرجك من فخ التشغيل اليومي، وتضاعف أرباحك.
        </p>

        {/* أزرار الـ CTA */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          {/* Primary CTA */}
          <Link
            href="/diagnosis"
            className="btn-secondary text-center sm:text-right text-lg px-10 py-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold rounded-lg flex items-center justify-center gap-2 group"
          >
            <span>🔍 اكتشف صحة شركتك مجاناً</span>
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/about"
            className="group flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[var(--primary-dark)] transition-all duration-300"
          >
            <span>تعرف على خبراتي</span>
          </Link>
        </div>

        {/* عنصر Social Proof اختياري */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm md:text-base text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span>+20 عاماً خبرة</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏭</span>
            <span>+50 مشروع ناجح</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span>مؤسس Rio Marketing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
