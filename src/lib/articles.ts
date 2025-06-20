// src/lib/articles.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
        
        if (!data.title || !data.date) {
            console.warn(`تحذير: المقال "${fileName}" يفتقد العنوان أو التاريخ.`);
            return null;
        }

        return { slug, ...data } as ArticleMeta;
      });

    const validArticles = allArticlesData.filter((article): article is ArticleMeta => article !== null);
    
    validArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return validArticles;

  } catch (error) {
    console.error("خطأ أثناء قراءة ملفات المقالات:", error);
    return [];
  }
}

// تعديل الدالة لتكون async بشكل صريح
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  try {
    if (!fs.existsSync(fullPath)) {
        console.warn(`لم يتم العثور على المقال بالـ slug: ${slug}`);
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...(data as Omit<ArticleMeta, 'slug'>),
      content,
    };
  } catch (error) {
    console.error(`خطأ أثناء قراءة المقال "${slug}":`, error);
    return null;
  }
}

// باقي الدوال تبقى كما هي
export function getArticles(limit?: number, category?: string): ArticleMeta[] {
  let allArticles = getAllArticlesMeta();
  if (category && category !== 'جميع المقالات') {
    allArticles = allArticles.filter(article => article.category === category);
  }
  return limit ? allArticles.slice(0, limit) : allArticles;
}

export function getFeaturedArticles(): ArticleMeta[] {
  const allArticles = getAllArticlesMeta();
  return allArticles.filter(article => article.isFeatured);
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