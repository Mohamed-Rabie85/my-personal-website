// src/components/HeroSection.tsx
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center text-white py-20 md:py-32 overflow-hidden">
      {/* صورة الخلفية */}
      <Image
        src="/images/hero-bg.png" // **تأكد أن هذا المسار صحيح لصورتك في مجلد public**
        alt="Mohamed Rabie Background"
        fill
        priority
        className="object-cover -z-10"
      />
      {/* تراكب لضمان وضوح النص فوق الصورة */}
      <div className="absolute inset-0 bg-[var(--primary-dark)]/50 z-0"></div>

      {/* التعديل الرئيسي هنا: إزالة محاذاة md:text-right و md:mx-0 لترك كل شيء في المنتصف */}
      {/* وتوسيط المحتوى بالكامل داخل section-container */}
      <div className="section-container text-center relative z-10 flex flex-col items-center justify-center h-full"> {/* أضفنا flex-col, items-center, justify-center, h-full */}
        <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          وضوح في الخطة .<span className="text-[var(--secondary-medium)]">. قوة في التنفيذ</span>
        </h1>
        <p className="mb-8 text-xl md:text-2xl max-w-3xl mx-auto"> {/* حافظنا على mx-auto للتوسيط الأفقي للنص */}
          بخبرة عملية في تأسيس وإعادة هيكلة الشركات، مهمتي هي تحقيق نتائج ملموسة لمشروعك على أرض الواقع
        </p>
        <p className="mb-8 text-xl md:text-2xl max-w-3xl mx-auto"> {/* حافظنا على mx-auto للتوسيط الأفقي للنص */}
          أنا محمد ربيع .. بخلاصة خبرة 20 عامًا في تأسيس وبناء الشركات، شريكك التنفيذي الذي يحول رؤيتك إلى أرقام حقيقية
        </p>
        {/* تعديل هنا: لجعل الأزرار تتوسط أفقياً في جميع الأحجام */}
        <div className="flex flex-col md:flex-row gap-4 justify-center"> {/* غيرنا md:justify-start إلى justify-center */}
          <Link href="/consultation" className="btn-secondary">
            لنتحدث عن مشروعك
          </Link>
          <Link href="/about" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[var(--primary-dark)] transition-colors duration-300">
            تعرف علي أكثر
          </Link>
        </div>
      </div>
    </section>
  );
}