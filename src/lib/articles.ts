// src/lib/articles.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

const articlesDirectory = path.join(process.cwd(), '_articles');

export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: 'ابدأ صح' | 'تسريع النمو' | 'من مطبخ البيزنس';
  date: string;
  readTime: string;
  isFeatured: boolean;
};

export type Article = ArticleMeta & {
  content: string;
};

export function getAllArticlesMeta(): ArticleMeta[] {
  try {
    const fileNames = fs.readdirSync(articlesDirectory);
    const allArticlesData = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        
        return { slug, ...data } as ArticleMeta;
      });

    return allArticlesData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("خطأ أثناء قراءة ملفات المقالات:", error);
    return [];
  }
}

export const getArticleBySlug = cache((slug: string): Article | null => {
  console.log(`Reading article: ${slug}`); // سنضيف هذا السطر لنرى في الطرفية أنها تُستدعى مرة واحدة
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { slug, ...(data as Omit<ArticleMeta, 'slug'>), content };
  } catch (error) { return null; }
});


export function getArticles(limit?: number, category?: string): ArticleMeta[] {
  let allArticles = getAllArticlesMeta();
  if (category && category !== 'جميع المقالات') {
    allArticles = allArticles.filter(article => article.category === category);
  }
  return limit ? allArticles.slice(0, limit) : allArticles;
}

export function getAllArticleSlugs(): { slug: string }[] {
    const allArticles = getAllArticlesMeta();
    return allArticles.map(article => ({ slug: article.slug }));
}

export function getAllCategories(): string[] {
    const allArticles = getAllArticlesMeta();
    const categoriesSet = new Set<string>();
    allArticles.forEach(article => {
        categoriesSet.add(article.category);
    });
    return Array.from(categoriesSet);
}