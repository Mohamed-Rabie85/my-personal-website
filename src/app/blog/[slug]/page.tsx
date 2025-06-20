// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getArticleBySlug, getAllArticlesMeta } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from "next";
import Accordion from '@/components/Accordion';
import AccordionItem from '@/components/AccordionItem';

// استيراد المكونات المخصصة
import Callout from '@/components/Callout';
import YouTubeEmbed from '@/components/YouTubeEmbed';


export function generateStaticParams() {
  const articles = getAllArticlesMeta();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug); // استخدام await

  if (!article) {
    return { title: "المقال غير موجود" };
  }

  return {
    title: `${article.title} | المدونة | محمد ربيع`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function SingleArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug); // استخدام await

  if (!article) {
    notFound();
  }

  const allArticles = getAllArticlesMeta();
  let relatedArticles = allArticles
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  if (relatedArticles.length < 3) {
    const additionalArticles = allArticles
      .filter(a => a.slug !== article.slug && !relatedArticles.some(ra => ra.slug === a.slug))
      .slice(0, 3 - relatedArticles.length);
    relatedArticles = [...relatedArticles, ...additionalArticles];
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <nav className="text-sm mb-4 text-[var(--neutral-medium)]">
            <Link href="/" className="hover:underline">الرئيسية</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:underline">المدونة</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--primary-medium)]">{article.title}</span>
          </nav>

          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              style={{ objectFit: 'cover' }}
              quality={80}
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-dark)] mb-4">
            {article.title}
          </h1>
          <div className="flex items-center text-[var(--neutral-medium)] text-sm mb-8 flex-wrap">
            <span>بقلم: محمد ربيع</span>
            <span className="mx-2">|</span>
            <span>نشر في: {article.date}</span>
            <span className="mx-2">|</span>
            <span>وقت القراءة: {article.readTime}</span>
            <span className="mx-2">|</span>
            <span className="bg-[var(--secondary-medium)] text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
              {article.category}
            </span>
          </div>

          <div className="content-container text-[var(--neutral-dark)] leading-relaxed mb-12">
            <MDXRemote
              source={article.content}
              components={{ Callout, YouTubeEmbed, Accordion, AccordionItem }}
            />
          </div>

          {/* ... باقي الكود يبقى كما هو ... */}
          <div className="bg-[var(--neutral-light)] p-6 rounded-lg text-center my-12">
            <h3 className="text-[var(--primary-medium)] mb-4">هل مشروعك يواجه تحديات؟</h3>
            <p className="text-[var(--neutral-medium)] mb-6">دعنا نكتشف كيف يمكنني مساعدتك في تجاوزها</p>
            <Link href="/consultation" className="btn-secondary">احجز جلستك الاستكشافية المجانية</Link>
          </div>

          <div className="bg-[var(--neutral-light)] p-6 rounded-lg flex flex-col md:flex-row items-center gap-6 mb-12">
            <Image
              src="/images/mohamed-profile.jpg"
              alt="محمد ربيع"
              width={100}
              height={100}
              className="rounded-full object-cover border-2 border-[var(--secondary-medium)]"
            />
            <div>
              <h3 className="text-[var(--primary-dark)] font-bold mb-2">محمد ربيع</h3>
              <p className="text-[var(--neutral-medium)] mb-3">مستشار تطوير أعمال وتسويق استراتيجي بخبرة تزيد عن 20 عاماً، متخصص في مساعدة رواد الأعمال وقادة الشركات على تحقيق النمو المستدام، تحسين العمليات، وتفعيل استراتيجيات التسويق.</p>
              <Link href="/about" className="text-[var(--primary-medium)] hover:border-b- border-[var(--secondary-medium)] transition-colors duration-300">تعرف على المزيد →</Link>
            </div>
          </div>

          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <h2 className="text-[var(--primary-dark)] text-center mb-8">مقالات قد تهمك</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}