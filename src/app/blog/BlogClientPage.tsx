// src/app/blog/BlogClientPage.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import ArticleCard from '@/components/ArticleCard';
import { ArticleMeta } from '@/lib/articles'; // استيراد النوع ArticleMeta

const ARTICLES_PER_LOAD = 6;

// تعديل Props لتلقي المقالات والتصنيفات من مكون الخادم
type BlogClientPageProps = {
  initialArticles: ArticleMeta[];
  allCategories: string[];
};

export default function BlogClientPage({ initialArticles, allCategories }: BlogClientPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('جميع المقالات');
  const [articlesToShow, setArticlesToShow] = useState(ARTICLES_PER_LOAD);

  const availableCategories = useMemo(() => {
    const sortedCategories = allCategories.sort((a, b) => a.localeCompare(b, 'ar'));
    return [{ name: 'جميع المقالات', value: 'جميع المقالات' }, ...sortedCategories.map(cat => ({ name: cat, value: cat }))];
  }, [allCategories]);

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'جميع المقالات') {
      return initialArticles;
    }
    return initialArticles.filter(article => article.category === activeCategory);
  }, [activeCategory, initialArticles]);

  const displayedArticles = useMemo(() => {
    return filteredArticles.slice(0, articlesToShow);
  }, [filteredArticles, articlesToShow]);

  const hasMoreArticles = displayedArticles.length < filteredArticles.length;

  const handleLoadMore = () => {
    setArticlesToShow(prevCount => prevCount + ARTICLES_PER_LOAD);
  };

  useEffect(() => {
    setArticlesToShow(ARTICLES_PER_LOAD);
  }, [activeCategory]);

  return (
    <>
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

      {/* قسم جميع المقالات / المقالات المصنفة */}
      <section className="w-full py-12 bg-[var(--neutral-light)]">
        <div className="section-container">
          <h2 className="text-[var(--primary-dark)] text-center mb-8">
            {activeCategory === 'جميع المقالات' ? 'جميع المقالات' : `مقالات في تصنيف "${activeCategory}"`}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedArticles.length > 0 ? (
              displayedArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))
            ) : (
              <p className="col-span-full text-center text-[var(--neutral-medium)]">
                لا توجد مقالات في هذا التصنيف حاليًا.
              </p>
            )}
          </div>

          {hasMoreArticles && (
            <div className="text-center mt-12">
              <button onClick={handleLoadMore} className="btn-secondary">
                تحميل المزيد من المقالات
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}