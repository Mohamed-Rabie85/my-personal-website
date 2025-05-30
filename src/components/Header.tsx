'use client';
import Link from 'next/link';
import { use, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          {/* الشعار */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[rgb(var(--primary-dark))]">
              الاستشاري
            </Link>
          </div>

          {/* القائمة الرئيسية - للشاشات الكبيرة */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            <Link href="/" className="px-3 py-2 text-[rgb(var(--neutral-medium))] hover:text-[rgb(var(--primary-medium))]">
              الرئيسية
            </Link>
            <Link href="/about" className="px-3 py-2 text-[rgb(var(--neutral-medium))] hover:text-[rgb(var(--primary-medium))]">
              نبذة عني
            </Link>
            <Link href="/services" className="px-3 py-2 text-[rgb(var(--neutral-medium))] hover:text-[rgb(var(--primary-medium))]">
              الخدمات
            </Link>
            <Link href="/portfolio" className="px-3 py-2 text-[rgb(var(--neutral-medium))] hover:text-[rgb(var(--primary-medium))]">
              معرض الأعمال
            </Link>
            <Link href="/blog" className="px-3 py-2 text-[rgb(var(--neutral-medium))] hover:text-[rgb(var(--primary-medium))]">
              المدونة
            </Link>
            <Link href="/contact" className="px-3 py-2 text-[rgb(var(--neutral-medium))] hover:text-[rgb(var(--primary-medium))]">
              تواصل معنا
            </Link>
          </nav>

          {/* زر الاستشارة */}
          <div className="hidden md:block">
            <Link href="/consultation" className="btn-secondary">
              احجز استشارة
            </Link>
          </div>

          {/* زر القائمة للجوال */}
          <button
            className="md:hidden text-[rgb(var(--neutral-dark))]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* القائمة المنسدلة للجوال */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-3 py-2 text-[rgb(var(--neutral-medium))] hover:text-[rgb(var(--primary-medium))] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-[rgb(var(--neutral-medium))] hover:text-[rgb(var(--primary-medium))] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                نبذة عني
              </Link>
              <Link
                href="/services"
                className="px-3 py-2 text-[rgb(var(--neutral-medium))] hover:text-[rgb(var(--primary-medium))] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                الخدمات
              </Link>
              <Link
                href="/portfolio"
                className="px-3 py-2 text-[rgb(var(--neutral-medium))] hover:text-[rgb(var(--primary-medium))] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                معرض الأعمال
              </Link>
              <Link
                href="/blog"
                className="px-3 py-2 text-[rgb(var(--neutral-medium))] hover:text-[rgb(var(--primary-medium))] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                المدونة
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-[rgb(var(--neutral-medium))] hover:text-[rgb(var(--primary-medium))] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </Link>
              <Link
                href="/consultation"
                className="btn-secondary text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                احجز استشارة
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
