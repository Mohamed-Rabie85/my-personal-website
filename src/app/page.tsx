// src/app/page.tsx
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from '@/components/ClientsSection';
import PortfolioSection from "@/components/PortfolioSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Mohamed Rabie مستشار تطوير أعمال وتسويق استراتيجي",
  description: "خبرة أكثر من 20 عاماً في تطوير الأعمال والتسويق الاستراتيجي وبناء العلامات التجارية. استشارات متخصصة للشركات الناشئة والصغيرة والمتوسطة.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم الترحيب الرئيسي (Hero Section) */}
      <HeroSection />

      {/* قسم من أنا (About Section) */}
      <AboutSection />

      {/* قسم الخدمات المميزة */}
      <ServicesSection />

      {/* قسم المشاريع (Portfolio Section) */}
      <PortfolioSection />

      {/* قسم شعارات العملاء (Logo Clouds) - جديد */}
      <ClientsSection />

      {/* قسم شهادات العملاء (Testimonials) - جديد */}
      {/* <TestimonialsSection /> */}

      {/* قسم المدونة (Blog Sections) - جديد */}
      <BlogSection />

      {/* قسم دعوة للعمل */}
      <CtaSection />
    </main>
  );
}