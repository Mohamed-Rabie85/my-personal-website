// src/lib/caseStudies.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

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

export function getAllCaseStudiesMeta(): CaseStudyMeta[] {
  try {
    const fileNames = fs.readdirSync(caseStudiesDirectory);
    const allStudiesData = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => {
        const fullPath = path.join(caseStudiesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        return data as CaseStudyMeta;
      });

    return allStudiesData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("خطأ أثناء قراءة ملفات دراسات الحالة:", error);
    return [];
  }
}

export const getCaseStudyBySlug = cache((slug: string): CaseStudy | null => {
  console.log(`Reading case study: ${slug}`);
  const fullPath = path.join(caseStudiesDirectory, `${slug}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { ...(data as CaseStudyMeta), content };
  } catch (error) { return null; }
});