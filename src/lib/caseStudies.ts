// src/lib/caseStudies.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const caseStudiesDirectory = path.join(process.cwd(), '_case-studies');

export type CaseStudyMeta = {
  slug: string;
  title: string;
  client: string;
  services: string[];
  excerpt: string;
  image: string;
  date: string;
};

export type CaseStudy = CaseStudyMeta & {
  content: string;
};

// دالة لجلب البيانات الوصفية لجميع دراسات الحالة
export function getAllCaseStudiesMeta(): CaseStudyMeta[] {
  try {
    const fileNames = fs.readdirSync(caseStudiesDirectory);
    const allStudiesData = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(caseStudiesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        
        return { slug, ...data } as CaseStudyMeta;
      });

    return allStudiesData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("خطأ أثناء قراءة ملفات دراسات الحالة:", error);
    return [];
  }
}

// دالة لجلب دراسة حالة كاملة بناءً على الـ slug
export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const fullPath = path.join(caseStudiesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const { slug: _slug, ...restOfData } = data as CaseStudyMeta;
  return { slug, ...restOfData, content };
}