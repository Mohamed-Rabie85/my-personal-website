// src/components/CtaSection.tsx
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full py-16 bg-[var(--primary-dark)] text-white">
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
  );
}