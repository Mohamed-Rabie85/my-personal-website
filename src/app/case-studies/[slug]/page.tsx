// src/app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getCaseStudyBySlug, getAllCaseStudiesMeta } from '@/lib/caseStudies';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import Callout from '@/components/Callout';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import Accordion from '@/components/Accordion';
import AccordionItem from '@/components/AccordionItem';

// دالة لإنشاء الصفحات بشكل ثابت عند البناء
export function generateStaticParams() {
  const studies = getAllCaseStudiesMeta();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

// <<<--- استخدام any هنا كما في الكود الأصلي الناجح ---<<<
export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return { title: 'دراسة حالة غير موجودة' };

  return {
    title: study.title,
    description: study.excerpt,
    openGraph: { title: study.title, description: study.excerpt, images: [study.image] },
  };
}

// <<<--- استخدام any هنا كما في الكود الأصلي الناجح ---<<<
export default function CaseStudyDetailPage({ params }: { params: any }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  return (
    <main>
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <nav className="text-sm mb-4 text-[var(--neutral-medium)]">
            <Link href="/" className="hover:underline">الرئيسية</Link> / <Link href="/case-studies" className="hover:underline">دراسات الحالة</Link> / <span className="text-[var(--primary-medium)]">{study.title}</span>
          </nav>
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image src={study.image} alt={study.title} fill sizes="(max-width: 768px) 100vw, 896px" style={{ objectFit: 'cover' }} quality={80} priority />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)] mb-4">{study.title}</h1>
          <div className="flex items-start text-[var(--neutral-medium)] text-sm mb-8 border-y py-4 flex-wrap">
            <div className="mr-6"><span className="font-bold text-gray-700">العميل: </span><span>{study.client}</span></div>
            <div className="mr-6"><span className="font-bold text-gray-700">الخدمات المقدمة: </span><span>{study.services.join(', ')}</span></div>
          </div>
          <div className="content-container">
            <MDXRemote source={study.content} components={{ Callout, YouTubeEmbed, Accordion, AccordionItem }}/>
          </div>
          <div className="bg-[var(--neutral-light)] p-6 rounded-lg text-center my-12">
            <h3 className="text-xl font-bold text-[var(--primary-medium)] mb-4">هل مشروعك يواجه تحديات؟</h3>
            <p className="text-[var(--neutral-medium)] mb-6">دعنا نكتشف كيف يمكنني مساعدتك في تجاوزها</p>
            <Link href="/consultation" className="btn-secondary">احجز جلستك الاستكشافية المجانية</Link>
          </div>
          <div className="bg-[var(--neutral-light)] p-6 rounded-lg flex flex-col md:flex-row items-center gap-6 mb-12">
            <Image src="/images/mohamed-profile.jpg" alt="محمد ربيع" width={100} height={100} className="rounded-full object-cover border-2 border-[var(--secondary-medium)]" />
            <div>
              <h3 className="text-lg font-bold text-[var(--primary-dark)] mb-2">محمد ربيع</h3>
              <p className="text-[var(--neutral-medium)] mb-3">مستشار تطوير أعمال وتسويق استراتيجي بخبرة تزيد عن 20 عاماً، متخصص في مساعدة رواد الأعمال وقادة الشركات على تحقيق النمو المستدام.</p>
              <Link href="/about" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] transition-colors duration-300">تعرف على المزيد →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}