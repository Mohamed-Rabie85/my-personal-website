// src/lib/articles.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), '_articles');

export type ArticleMeta = { slug: string; title: string; excerpt: string; image: string; category: 'ابدأ صح' | 'تسريع النمو' | 'من مطبخ البيزنس'; date: string; readTime: string; isFeatured: boolean; };
export type Article = ArticleMeta & { content: string; };

export function getAllArticlesMeta(): ArticleMeta[] {
    try {
        const fileNames = fs.readdirSync(articlesDirectory);
        const allArticlesData = fileNames.filter(fileName => fileName.endsWith('.mdx')).map(fileName => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(articlesDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);
            return { slug, ...data } as ArticleMeta;
        });
        return allArticlesData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) { return []; }
}

// <<<--- التغيير الجوهري هنا: الدالة أصبحت متزامنة ---<<<
export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { ...(data as ArticleMeta), content };
  } catch (error) { return null; }
}

export function getArticles(limit?: number, category?: string): ArticleMeta[] {
    let allArticles = getAllArticlesMeta();
    if (category && category !== 'جميع المقالات') {
        allArticles = allArticles.filter(article => article.category === category);
    }
    return limit ? allArticles.slice(0, limit) : allArticles;
}

export function getAllCategories(): string[] {
    const categoriesSet = new Set<string>(getAllArticlesMeta().map(a => a.category));
    return Array.from(categoriesSet);
}