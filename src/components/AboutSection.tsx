// src/components/CtaSection.tsx
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full py-16 bg-[var(--neutral-light)] text-white">
      <div className="section-container text-center">
        <h2 className="text-[var(--primary-medium)] mb-6">نبذة عني</h2>
        <p className="text-[var(--primary-medium)] text-xl max-w-3xl mx-auto mb-8">
          استشارات وبنفذ معاك بنفسي. قمت بتأسيس شركات من الصفر، وساعدت شركات متعثرة على الوقوف مرة أخرى بفضل الله. أضع كل هذه الخبرة العملية معك في كل خطوة، لنتأكد أن الخطة تتحول إلى نتيجة ملموسة
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/about" className="btn-secondary">
            تعرف علي أكثر
          </Link>
        </div>
      </div>
    </section>
  );
}