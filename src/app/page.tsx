// src/app/page.tsx
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from '@/components/ClientsSection';
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import AboutSnippet from "@/components/AboutSnippet";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export const metadata: Metadata = {
  title: "Mohamed Rabie | مستشار تطوير أعمال وبناء أنظمة",
  description: "حول شركتك من فوضى التشغيل اليومي إلى كيان مؤسسي ينمو ذاتياً. استشارات متخصصة للشركات الناشئة والصغيرة.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* 1. قسم الترحيب الرئيسي (Pain & Promise) */}
      <HeroSection />

      {/* 2. قسم الخدمات (Solution) */}
      <ServicesSection />

      {/* 3. نبذة عن المنهجية (Authority - Why Me?) */}
      <AboutSnippet />

      {/* 4. قسم المشاريع (Portfolio - Proof of Competence) */}
      {/* <PortfolioSection /> */}

      {/* 5. شهادات العملاء (Social Proof - Testimonials) */}
      <TestimonialsSection />

      {/* 6. النداء الأخير (Final Action) */}
      <FinalCtaSection />

      {/* 7. قسم العملاء (Social Proof - Logos) */}
      <ClientsSection />

      {/* 8. قسم المدونة (Education - Value) */}
      <BlogSection />

    </main>
  );
}