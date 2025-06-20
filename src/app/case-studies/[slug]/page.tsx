// src/app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getCaseStudyBySlug, getAllCaseStudiesMeta } from '@/lib/caseStudies';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';

type PageProps = {
  params: {
    slug: string;
  };
};

// هذه الدالة يجب أن تكون متزامنة
export function generateStaticParams() {
  const studies = getAllCaseStudiesMeta();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const study = await getCaseStudyBySlug(params.slug);

  if (!study) {
    return { title: 'دراسة حالة غير موجودة' };
  }

  return {
    title: study.title,
    description: study.excerpt,
    // ... باقي بيانات Metadata
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const study = await getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  // ... (باقي كود الصفحة يبقى كما هو)

  return (
    <main>
      {/* ... محتوى الصفحة بالكامل ... */}
      <div className="content-container">
        <MDXRemote source={study.content} />
      </div>
      {/* ... */}
    </main>
  );
}