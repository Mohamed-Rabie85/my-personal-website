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
  weight: ['400', '500', '700'], // يمكنك تحديد الأوزان التي تحتاجها لتقليل حجم الخط المحمل
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mohamedrabie.vercel.app/'),
  title: {
    default: 'محمد ربيع | استراتيجي تطوير أعمال وبناء أنظمة للشركات',
    template: '%s | محمد ربيع',
  },
  description: 'أساعد أصحاب الشركات على الخروج من فخ التشغيل اليومي وبناء أنظمة نمو مستدامة. خبرة +20 عاماً، ومؤسس شركة Rio للحلول التسويقية.',
  keywords: [
    'تطوير أعمال',
    'استشارات إدارية',
    'بناء أنظمة',
    'محمد ربيع',
    'ريو للحلول التسويقية',
    'Rio Marketing',
    'إدارة عمليات',
    'مطبخ البيزنس',
    'Scale Up',
    'تسويق استراتيجي',
    'Mohamed Rabie',
  ],
  authors: [{ name: 'محمد ربيع' }],
  creator: 'محمد ربيع',
  publisher: 'محمد ربيع',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'محمد ربيع | من الفوضى إلى النظام المؤسسي',
    description: 'خبرة 20 عاماً في السوق. أشاركك خلاصة تجاربي في إدارة الشركات والتسويق (من 2009) وتأسيس ريو (من 2015) لمساعدتك في بناء بيزنس حقيقي.',
    url: 'https://mohamedrabie.vercel.app',
    siteName: 'Mohamed Rabie',
    locale: 'ar_EG', // تحديد المنطقة الجغرافية: مصر
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
    title: 'محمد ربيع | من الفوضى إلى النظام المؤسسي',
    description: 'خبرة 20 عاماً في السوق المصري والعربي. أساعدك في بناء أنظمة تخرجك من فخ التشغيل اليومي وتضاعف أرباحك.',
    creator: '@mohamedrabie85',
  },
  verification: {
    google: 'google-site-verification-code', // سيتم تحديثه بعد التحقق من Google Search Console
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