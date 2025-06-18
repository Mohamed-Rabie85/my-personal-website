// src/app/layout.tsx
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from 'next';
// استيراد خط Cairo بدلاً من Inter
import { Cairo } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// تهيئة خط Cairo
const cairo = Cairo({
  subsets: ['arabic', 'latin'], // تحميل الحروف العربية واللاتينية
  display: 'swap', // يسمح للمتصفح باستخدام خط احتياطي حتى يتم تحميل الخط الرئيسي
  weight: ['400', '500', '700', '900'], // يمكنك تحديد الأوزان التي تحتاجها لتقليل حجم الخط المحمل
  variable: '--font-cairo', // اسم لمتغير CSS سنستخدمه في Tailwind
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mohamedrabie.vercel.app/'),
  title: {
    template: '%s | Mohamed Rabie مستشار تطوير أعمال وتسويق استراتيجي',
    default: 'Mohamed Rabie | مستشار تطوير أعمال وتسويق استراتيجي | خبرة أكثر من 20 عاماً',
  },
  description: 'خدمات استشارية متخصصة في التخطيط الاستراتيجي، التسويق الرقمي، علم النفس التسويقي، تحليل البيانات، والإنتاج الإعلامي للشركات الناشئة والصغيرة والمتوسطة.',
  keywords: ['استشارات تسويقية', 'تطوير أعمال', 'تسويق استراتيجي', 'علم النفس التسويقي', 'تحليل البيانات', 'الإنتاج الإعلامي'],
  authors: [{ name: 'الاستشاري' }],
  creator: 'الاستشاري',
  publisher: 'الاستشاري',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'مستشار تطوير أعمال وتسويق استراتيجي | خبرة أكثر من 20 عاماً',
    description: 'خدمات استشارية متخصصة في التخطيط الاستراتيجي، التسويق الرقمي، علم النفس التسويقي، تحليل البيانات، والإنتاج الإعلامي للشركات الناشئة والصغيرة والمتوسطة.',
    url: 'https://www.example.com', // يرجى تحديث هذا URL عند النشر
    siteName: 'الاستشاري',
    locale: 'ar_SA', // تحديد المنطقة الجغرافية للغة العربية
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مستشار تطوير أعمال وتسويق استراتيجي | خبرة أكثر من 20 عاماً',
    description: 'خدمات استشارية متخصصة في التخطيط الاستراتيجي، التسويق الرقمي، علم النفس التسويقي، تحليل البيانات، والإنتاج الإعلامي.',
    creator: '@consultant', // تأكد من تحديث هذا لاسم حسابك على تويتر
  },
  verification: {
    google: 'google-site-verification-code', // استبدل هذا بكود التحقق الخاص بك من Google Search Console
  },
  category: 'business',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // تطبيق الخط Cairo ومتغيره على عنصر <html>
    <html lang="ar" dir="rtl" className={`${cairo.className} ${cairo.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}