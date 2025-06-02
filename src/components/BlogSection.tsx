// src/components/BlogSection.tsx
import Link from "next/link";

export default function BlogSection() {
  return (
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
  );
}