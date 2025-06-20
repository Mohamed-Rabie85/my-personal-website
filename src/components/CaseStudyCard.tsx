// src/components/CaseStudyCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { CaseStudyMeta } from '@/lib/caseStudies';

type CaseStudyCardProps = {
  study: CaseStudyMeta;
};

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${study.slug}`} className="group block card">
      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-[var(--primary-medium)] text-xl font-bold mb-2 group-hover:underline">
          {study.title}
        </h3>
        <p className="text-[var(--neutral-medium)] text-sm mb-4">
          <strong>العميل:</strong> {study.client}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {study.services.map(service => (
            <span key={service} className="bg-[var(--secondary-light)] text-[var(--secondary-dark)] text-xs font-semibold px-2.5 py-1 rounded-full">
              {service}
            </span>
          ))}
        </div>
        <p className="text-[var(--neutral-dark)] mb-4 line-clamp-3">
          {study.excerpt}
        </p>
        <span className="font-bold text-[var(--primary-medium)] flex items-center gap-2">
          اقرأ دراسة الحالة
          <span className="transform transition-transform duration-300 group-hover:translate-x-[-4px] rtl:group-hover:translate-x-[4px]">→</span>
        </span>
      </div>
    </Link>
  );
}