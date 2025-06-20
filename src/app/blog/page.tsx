// src/app/blog/page.tsx

// هذا الآن مكون خادم (Server Component)
import { getAllArticlesMeta, getAllCategories } from '@/lib/articles';
import BlogClientPage from './BlogClientPage'; // استيراد مكون العميل

export default function BlogPage() {
  // جلب البيانات يتم هنا في الخادم
  const allArticles = getAllArticlesMeta();
  const allCategories = getAllCategories();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي (يبقى في مكون الخادم) */}
      <section className="w-full bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-medium)] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4">المدونة</h1>
          <p className="text-xl max-w-3xl mx-auto">
            مقالات ورؤى متخصصة لمساعدتك في تنمية أعمالك وتحقيق أهدافك
          </p>
        </div>
      </section>

      {/* تمرير البيانات كمـ props إلى مكون العميل */}
      <BlogClientPage initialArticles={allArticles} allCategories={allCategories} />
    </main>
  );
}