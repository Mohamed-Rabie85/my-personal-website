// src/app/blog/page.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
// import Link from "next/link";
import ArticleCard from '@/components/ArticleCard';
import { getArticles, getAllCategories } from '@/lib/articles';

const ARTICLES_PER_LOAD = 6; // عدد المقالات التي يتم تحميلها في كل مرة

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>('جميع المقالات');
  const [articlesToShow, setArticlesToShow] = useState(ARTICLES_PER_LOAD); // عدد المقالات المعروضة حالياً

  const availableCategories = useMemo(() => {
    const categories = getAllCategories();
    // تأكد من ترتيب التصنيفات الأبجدية، مع بقاء "جميع المقالات" أولاً
    const sortedCategories = categories.sort((a, b) => a.localeCompare(b, 'ar'));
    return [{ name: 'جميع المقالات', value: 'جميع المقالات' }, ...sortedCategories.map(cat => ({ name: cat, value: cat }))];
  }, []);

  // جلب المقالات المفلترة بناءً على التصنيف النشط
  const filteredArticles = useMemo(() => {
    // getArticles ترجع المقالات مرتبة حسب التاريخ افتراضياً
    return getArticles(undefined, activeCategory);
  }, [activeCategory]);

  // تحديد المقالات التي سيتم عرضها بناءً على articlesToShow
  const displayedArticles = useMemo(() => {
    return filteredArticles.slice(0, articlesToShow);
  }, [filteredArticles, articlesToShow]);

  // لتحديد ما إذا كان زر "تحميل المزيد" يجب أن يظهر
  const hasMoreArticles = displayedArticles.length < filteredArticles.length;

  const handleLoadMore = () => {
    setArticlesToShow(prevCount => prevCount + ARTICLES_PER_LOAD);
  };

  // إعادة تعيين عدد المقالات المعروضة عند تغيير التصنيف
  useEffect(() => {
    setArticlesToShow(ARTICLES_PER_LOAD);
  }, [activeCategory]);

  // لم نعد نحتاج لجلب المقالات المميزة بشكل منفصل هنا لأنها لن تُعرض في قسم خاص
  // const featuredArticles = getFeaturedArticles();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي */}
      <section className="w-full bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-medium)] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4">المدونة</h1>
          <p className="text-xl max-w-3xl mx-auto">
            مقالات ورؤى متخصصة لمساعدتك في تنمية أعمالك وتحقيق أهدافك
          </p>
        </div>
      </section>

      {/* قسم أزرار التصنيف الديناميكية */}
      <section className="w-full py-8 bg-white">
        <div className="section-container">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {availableCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`cursor-pointer px-4 py-2 font-bold rounded-md transition-colors duration-300
                  ${activeCategory === category.value
                    ? 'bg-[var(--secondary-medium)] text-white'
                    : 'bg-gray-200 text-[var(--neutral-dark)] hover:bg-gray-300'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* *** تم إزالة قسم المقالات المميزة من هنا *** */}

      {/* قسم جميع المقالات / المقالات المصنفة */}
      <section className="w-full py-12 bg-[var(--neutral-light)]">
        <div className="section-container">
          <h2 className="text-[var(--primary-dark)] text-center mb-8">
            {activeCategory === 'جميع المقالات' ? 'جميع المقالات' : `مقالات ${activeCategory}`}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedArticles.length > 0 ? (
              displayedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            ) : (
              <p className="col-span-full text-center text-[var(--neutral-medium)]">
                لا توجد مقالات في هذا التصنيف حاليًا.
              </p>
            )}
          </div>

          {/* زر تحميل المزيد */}
          {hasMoreArticles && (
            <div className="text-center mt-12">
              <button onClick={handleLoadMore} className="btn-secondary">
                تحميل المزيد من المقالات
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}