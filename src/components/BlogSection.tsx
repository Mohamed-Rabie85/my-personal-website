// src/components/BlogSection.tsx
import Link from "next/link";
// import Image from "next/image"; // لم نعد نحتاج إلى Image هنا إذا كان ArticleCard يستخدمها
import { getArticles } from '@/lib/articles'; // <--- استيراد دالة جلب المقالات
import ArticleCard from './ArticleCard'; // <--- استيراد مكون ArticleCard

export default function BlogSection() {
  // جلب أحدث 3 مقالات. يمكن تغيير العدد حسب الرغبة.
  // يمكننا أيضاً جلب المقالات المميزة فقط إذا أردت، باستخدام getFeaturedArticles()
  const latestArticles = getArticles(3); // جلب أحدث 3 مقالات (أو أي عدد تريده)

  return (
    <section className="w-full py-16 bg-[var(--foreground)]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-[var(--primary-dark)]">أحدث المقالات والرؤى</h2>
          <p className="max-w-3xl mx-auto text-[var(--neutral-medium)]">
            أشارك خبراتي ومعرفتي في مجالات التخطيط الاستراتيجي، تطوير الأعمال، التسويق، والتقنية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.length > 0 ? (
            latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} /> // <--- استخدام ArticleCard هنا
            ))
          ) : (
            <p className="col-span-full text-center text-[var(--neutral-medium)]">
              لا توجد مقالات لعرضها حاليًا.
            </p>
          )}
        </div>

        <div className="text-center mt-12 ">
          <Link href="/blog" className="btn-secondary">
            تصفح المدونة
          </Link>
        </div>
      </div>
    </section>
  );
}