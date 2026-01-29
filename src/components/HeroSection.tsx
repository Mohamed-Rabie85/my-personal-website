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
      {/* تراكب لضمان وضوح النص فوق الصورة */}
      <div className="absolute inset-0 bg-[var(--primary-dark)]/50 z-0"></div>

      {/* المحتوى الرئيسي */}
      <div className="section-container text-center relative z-10 flex flex-col items-center justify-center h-full">
        {/* شارة الخبرة (Badge) */}
        <div className="mb-6 inline-block px-6 py-2 bg-[var(--secondary-medium)]/20 border border-[var(--secondary-medium)] rounded-full font-semibold text-sm md:text-base animate-fadeIn">
          🏆 خبرة +20 عاماً في السوق المصري والعربي
        </div>

        {/* العنوان الرئيسي (H1) */}
        <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-5xl">
          حول شركتك من{" "}
          <span className="text-[var(--secondary-medium)]">مجهود فردي</span>{" "}
          مرهق..
          <br />
          إلى{" "}
          <span className="text-[var(--secondary-medium)]">كيان مؤسسي</span>{" "}
          ينمو ذاتياً
        </h1>

        {/* النص الفرعي (Sub-Headline) */}
        <p className="mb-8 text-base md:text-lg lg:text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
          بصفتي مؤسس لـ{" "}
          <span className="font-bold text-[var(--secondary-medium)]">ريو للحلول التسويقية</span>{" "}
          ومستشار لأكثر من <span className="font-bold">50+ شركة</span>، أساعدك
          في بناء <span className="text-[var(--secondary-medium)]">الأنظمة (Systems)</span> التي
          تخرجك من فخ التشغيل اليومي، وتضاعف أرباحك وعملائك.
        </p>

        {/* أزرار الـ CTA */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          {/* Primary CTA */}
          <Link
            href="/diagnosis"
            className="btn-secondary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            🔍 اكتشف صحة شركتك (مجاناً)
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/about"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md text-lg hover:bg-white hover:text-[var(--primary-dark)] transition-all duration-300 transform hover:-translate-y-1"
          >
            تعرف على خبراتي
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
