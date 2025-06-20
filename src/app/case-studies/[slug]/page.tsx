// src/app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getCaseStudyBySlug, getAllCaseStudiesMeta } from '@/lib/caseStudies';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';

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
          <div className="flex items-center text-[var(--neutral-medium)] text-sm mb-8 border-y py-4 flex-wrap">
            <div className="mr-6"><span className="font-bold text-gray-700">العميل: </span><span>{study.client}</span></div>
            <div><span className="font-bold text-gray-700">الخدمات المقدمة: </span><span>{study.services.join(', ')}</span></div>
          </div>
          <div className="content-container">
            <MDXRemote source={study.content} />
          </div>
        </div>
      </section>
    </main>
  );
}