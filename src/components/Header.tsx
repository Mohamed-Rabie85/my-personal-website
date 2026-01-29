'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--background)] shadow-md sticky top-0 z-50 h-16">
      <div className="section-container">
        <div className="flex justify-between items-center py-2 h-full">
          {/* الشعار */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <Image
                src="/logo.png"
                alt="شعار محمد ربيع"
                width={40}
                height={40}
                className="object-contain"
              />
              محمد ربيع
            </Link>
          </div>

          {/* القائمة الرئيسية - للشاشات الكبيرة */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            <Link href="/" className="px-4 py-2 text-white hover:text-[var(--secondary-medium)] transition-colors duration-300 font-medium">
              الرئيسية
            </Link>
            <Link href="/about" className="px-4 py-2 text-white hover:text-[var(--secondary-medium)] transition-colors duration-300 font-medium">
              منهجيتي
            </Link>
            <Link href="/services" className="px-4 py-2 text-white hover:text-[var(--secondary-medium)] transition-colors duration-300 font-medium">
              الخدمات
            </Link>
            <Link href="/blog" className="px-4 py-2 text-white hover:text-[var(--secondary-medium)] transition-colors duration-300 font-medium">
              مطبخ البيزنس
            </Link>
          </nav>

          {/* زر التشخيص (CTA) */}
          <div className="hidden md:block">
            <Link href="/diagnosis" className="bg-[var(--primary-medium)] text-white px-6 py-2 rounded-md font-bold hover:bg-[var(--secondary-medium)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-transparent hover:border-white/20">
              ابدأ التشخيص المجاني
            </Link>
          </div>

          {/* زر القائمة للجوال */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="القائمة"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* القائمة المنسدلة للجوال */}
        {isMenuOpen && (
          <div className="md:hidden bg-[var(--background)] border-t border-white/10 py-4 absolute left-0 right-0 shadow-xl animate-fadeIn">
            <nav className="flex flex-col space-y-2 px-4">
              <Link
                href="/"
                className="px-4 py-3 text-white hover:bg-white/5 rounded-md transition-colors font-medium border-r-4 border-transparent hover:border-[var(--secondary-medium)]"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-white hover:bg-white/5 rounded-md transition-colors font-medium border-r-4 border-transparent hover:border-[var(--secondary-medium)]"
                onClick={() => setIsMenuOpen(false)}
              >
                منهجيتي
              </Link>
              <Link
                href="/services"
                className="px-4 py-3 text-white hover:bg-white/5 rounded-md transition-colors font-medium border-r-4 border-transparent hover:border-[var(--secondary-medium)]"
                onClick={() => setIsMenuOpen(false)}
              >
                الخدمات
              </Link>
              <Link
                href="/blog"
                className="px-4 py-3 text-white hover:bg-white/5 rounded-md transition-colors font-medium border-r-4 border-transparent hover:border-[var(--secondary-medium)]"
                onClick={() => setIsMenuOpen(false)}
              >
                مطبخ البيزنس
              </Link>
              <div className="pt-2 mt-2 border-t border-white/10">
                <Link
                  href="/diagnosis"
                  className="block w-full text-center bg-[var(--primary-medium)] text-white px-6 py-3 rounded-md font-bold shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ابدأ التشخيص المجاني
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
