import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Mohamed Rabie مستشار تطوير أعمال وتسويق استراتيجي',
    // content: 'مستشار تطوير أعمال وتسويق استراتيجي | خبرة أكثر من 20 عاماً',
    // يمكن استخدام template لتحديد تنسيق العنوان
    // حيث يتم استبدال %s بمحتوى العنوان الرئيسي
    // مثال: title: { template: '%s | مستشار تطوير أعمال وتسويق استراتيجي' },
    // إذا كنت تريد استخدام عنوان ثابت يمكنك استخدام content فقط
    // مثال: title: { content: 'مستشار تطوير أعمال وتسويق استراتيجي | خبرة أكثر من 20 عاماً' },
    // إذا كنت تريد استخدام عنوان ديناميكي يمكنك استخدام template
    // مثال: title: { template: '%s | مستشار تطوير أعمال وتسويق استراتيجي', content: 'عنوان ديناميكي' },
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
    url: 'https://www.example.com',
    siteName: 'الاستشاري',
    locale: 'ar_SA',
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
    creator: '@consultant',
  },
  // تم نقل viewport من هنا
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'business',
};

// هنا يتم تعريف Viewport بشكل منفصل
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
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
