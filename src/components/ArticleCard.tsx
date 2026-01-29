// src/components/ArticleCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleMeta } from '@/lib/articles'; // استيراد نوع ArticleMeta

type ArticleCardProps = {
  article: ArticleMeta; // التأكد من استخدام ArticleMeta هنا
  large?: boolean;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article, large = false }) => {
  const imageWidth = large ? 700 : 600;
  const imageHeight = large ? 500 : 400;
  const imageClasses = large ? 'h-50 md:h-80' : 'h-48';

  return (
    <div className="card">
      <div className={`bg-gray-200 relative rounded-t-lg overflow-hidden w-full ${imageClasses} flex items-center justify-center`}>
        <Image
          src={article.image}
          alt={article.title}
          width={imageWidth}
          height={imageHeight}
          className="object-cover w-full h-full"
          quality={100}
          priority={large} // اجعل الصور المميزة ذات أولوية تحميل أعلى
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-[var(--secondary-medium)] text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
            {article.category}
          </span>
          {/* <span className="text-[var(--neutral-medium)] text-sm whitespace-nowrap">
            {article.date}
          </span> */}
        </div>
        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-[var(--primary-medium)] text-xl font-semibold mb-2 hover:underline">
            {article.title}
          </h3>
        </Link>
        <p className="text-[var(--neutral-medium)] mb-4 line-clamp-3"> {/* line-clamp للحد من عدد الأسطر */}
          {article.excerpt}
        </p>
        <div className="flex justify-between items-center">
          <Link href={`/blog/${article.slug}`} className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium flex items-center gap-1">
            قراءة المزيد
            <span className="rtl:rotate-180 transition-transform duration-200">→
            </span> {/* سهم يشير لليسار في RTL */}
          </Link>
          <span className="text-[var(--neutral-medium)] text-sm">
            {article.readTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;