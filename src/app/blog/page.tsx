// src/app/blog/page.tsx
'use client'; // <--- مهم جداً لأننا سنستخدم useState

import { useState } from 'react'; // استيراد useState
// import Link from "next/link";
import ArticleCard from '@/components/ArticleCard';
import { getArticles, getFeaturedArticles } from '@/lib/articles';


export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>('جميع المقالات'); // حالة لتتبع التصنيف النشط

  // جلب المقالات بناءً على التصنيف النشط
  const featuredArticles = getFeaturedArticles();
  const allArticles = getArticles(undefined, activeCategory); // استخدام activeCategory للتصفية

  // تصفية المقالات لإزالة المميزة من قائمة "جميع المقالات"
  const nonFeaturedArticles = allArticles.filter(
    (article) => !featuredArticles.some((feat) => feat.id === article.id)
  );

  const categories = [ // تعريف التصنيفات والأزرار هنا
    { name: 'جميع المقالات', value: 'جميع المقالات' },
    { name: 'ابدأ صح', value: 'ابدأ صح' },
    { name: 'تسريع النمو', value: 'تسريع النمو' },
    { name: 'من مطبخ البيزنس', value: 'من مطبخ البيزنس' },
  ];

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

      {/* قسم البحث والتصفية */}
      <section className="w-full py-8 bg-white ">
        <div className="section-container">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`cursor-pointer px-4 py-2 font-bold rounded-md transition-colors duration-300
                  ${activeCategory === category.value
                    ? 'bg-[var(--secondary-medium)] text-white' // اللون عندما يكون نشطاً
                    : 'bg-gray-200 text-[var(--neutral-dark)] hover:bg-gray-300' // اللون عندما لا يكون نشطاً
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* قسم المقالات المميزة */}
      {/* عرض المقالات المميزة فقط إذا كان التصنيف "جميع المقالات" أو كان هناك مقالات مميزة في التصنيف المختار */}
      {activeCategory === 'جميع المقالات' && featuredArticles.length > 0 && (
        <section className="w-full py-12 bg-white ">
          <div className="section-container gap-8">
            <h2 className="text-[var(--primary-dark)] text-center mb-8">المقالات المميزة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} large={true} />
              ))}
            </div>
          </div>
        </section>
      )}
      {/* إذا كان هناك تصنيف محدد، اعرض المقالات المميزة لهذا التصنيف فقط ضمن قسم "جميع المقالات" */}
      {activeCategory !== 'جميع المقالات' && featuredArticles.filter(f => f.category === activeCategory).length > 0 && (
        <section className="w-full py-12 bg-white ">
          <div className="section-container">
            <h2 className="text-[var(--primary-dark)] text-center mb-8">المقالات المميزة في {activeCategory}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.filter(f => f.category === activeCategory).map((article) => (
                <ArticleCard key={article.id} article={article} large={true} />
              ))}
            </div>
          </div>
        </section>
      )}


      {/* قسم جميع المقالات / المقالات المصنفة */}
      <section className="w-full py-12 bg-[var(--neutral-light)]">
        <div className="section-container">
          <h2 className="text-[var(--primary-dark)] text-center mb-8">
            {activeCategory === 'جميع المقالات' ? 'جميع المقالات' : `مقالات ${activeCategory}`}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nonFeaturedArticles.length > 0 ? (
              nonFeaturedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            ) : (
              <p className="col-span-full text-center text-[var(--neutral-medium)]">
                لا توجد مقالات في هذا التصنيف بعد.
              </p>
            )}
          </div>

          {/* زر تحميل المزيد - يمكن إضافة منطق تحميل المزيد من المقالات هنا */}
          {/* سنناقش هذا في النقطة التالية */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              تحميل المزيد من المقالات
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}