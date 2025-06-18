// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getArticleBySlug, getAllArticleSlugs, getArticles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

// استيراد المكتبات لتحويل Markdown
import { remark } from 'remark';
import html from 'remark-html';

// استيراد Metadata من Next.js
import type { Metadata } from "next";

// تعريف نوع المعاملات (props) الخاص بهذه الصفحة
// هذا يحل مشكلة الـ Type Error التي تظهر
type ArticlePageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// دالة لتحويل Markdown إلى HTML
async function markdownToHtml(markdown: string) {
  const result = await remark().use(html, { sanitize: false }).process(markdown);
  return result.toString();
}

// هذه الدالة مهمة لـ Next.js لإنشاء صفحات ثابتة لكل مقال عند البناء (SSG)
export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs;
}

// دالة لجلب بيانات الـ Metadata في Next.js (Server Component)
// استخدام ArticlePageProps كنوع لـ params
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "المقال غير موجود",
      description: "الصفحة التي تبحث عنها غير موجودة.",
    };
  }

  return {
    title: `${article.title} | المدونة | محمد ربيع`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
      type: 'article',
      locale: 'ar_SA',
      siteName: 'الاستشاري',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      creator: '@consultant',
    },
  };
}

// مكون الصفحة
// استخدام ArticlePageProps كنوع لـ params
export default async function SingleArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const contentHtml = await markdownToHtml(article.content);

  const allArticles = getArticles();
  let relatedArticles = allArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  if (relatedArticles.length < 3) {
    const additionalArticles = allArticles
      .filter(a => a.id !== article.id && !relatedArticles.some(ra => ra.id === a.id))
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
              style={{ objectFit: 'cover' }}
              quality={80}
              priority
            />
          </div>

          <h1 className="text-[var(--primary-dark)] text-4xl md:text-5xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="flex items-center text-[var(--neutral-medium)] text-sm mb-8">
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

          <div
            className="prose prose-lg prose-custom max-w-none me-10 text-[var(--neutral-dark)] leading-relaxed "
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <div className="bg-[var(--neutral-light)] p-6 rounded-lg text-center mb-12">
            <h3 className="text-[var(--primary-medium)] mb-4">هل مشروعك يواجه تحديات؟</h3>
            <p className="text-[var(--neutral-medium)] mb-6">
              دعنا نكتشف كيف يمكنني مساعدتك في تجاوزها
            </p>
            <Link href="/consultation" className="btn-secondary">
              احجز جلستك الاستكشافية المجانية
            </Link>
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
              <p className="text-[var(--neutral-medium)] mb-3">
                مستشار تطوير أعمال وتسويق استراتيجي بخبرة تزيد عن 20 عاماً، متخصص في مساعدة رواد الأعمال وقادة الشركات على تحقيق النمو المستدام، تحسين العمليات، وتفعيل استراتيجيات التسويق.
              </p>
              <Link href="/about" className="text-[var(--primary-medium)] hover:border-b- border-[var(--secondary-medium)] transition-colors duration-300">
                تعرف على المزيد →
              </Link>
            </div>
          </div>

          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <h2 className="text-[var(--primary-dark)] text-center mb-8">مقالات قد تهمك</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}