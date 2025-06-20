// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getArticleBySlug, getAllArticlesMeta } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from "next";

// استيراد المكونات المخصصة
import Callout from '@/components/Callout';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import Accordion from '@/components/Accordion';
import AccordionItem from '@/components/AccordionItem';

type PageProps = {
  params: {
    slug: string;
  };
};

// هذه الدالة يجب أن تكون متزامنة
export function generateStaticParams() {
  const articles = getAllArticlesMeta();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return { title: "المقال غير موجود" };
  }

  return {
    title: `${article.title} | المدونة | محمد ربيع`,
    description: article.excerpt,
    // ... باقي بيانات Metadata
  };
}

export default async function SingleArticlePage({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllArticlesMeta();
  const relatedArticles = allArticles
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  // ... (باقي كود الصفحة يبقى كما هو)

  return (
    <main>
      {/* ... محتوى الصفحة بالكامل ... */}
      <div className="content-container">
        <MDXRemote
          source={article.content}
          components={{ Callout, YouTubeEmbed, Accordion, AccordionItem }}
        />
      </div>
      {/* ... */}
    </main>
  );
}