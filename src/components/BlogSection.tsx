// src/components/BlogSection.tsx
import Link from "next/link";
import { getAllArticlesMeta } from '@/lib/articles'; // <--- استيراد الدالة الجديدة
import ArticleCard from './ArticleCard';

// تحويل المكون إلى async component
export default async function BlogSection() {
  // جلب البيانات يتم الآن داخل المكون نفسه وبشكل غير متزامن
  const latestArticles = getAllArticlesMeta().slice(0, 3); // جلب كل المقالات ثم أخذ أول 3

  return (
    <section className="w-full py-16 bg-white dark:bg-gray-900"> {/* تعديل بسيط للألوان لتكون متوافقة مع الوضع الداكن لو وجد */}
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">أحدث المقالات والرؤى</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            أشارك خبراتي ومعرفتي في مجالات التخطيط الاستراتيجي، تطوير الأعمال، التسويق، والتقنية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.length > 0 ? (
            latestArticles.map((article) => (
              // استخدام slug كمفتاح فريد بدلاً من id
              <ArticleCard key={article.slug} article={article} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
              لا توجد مقالات لعرضها حاليًا.
            </p>
          )}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn-secondary">
            تصفح كل المقالات
          </Link>
        </div>
      </div>
    </section>
  );
}