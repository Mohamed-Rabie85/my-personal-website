import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSquareGithub, FaSquareFacebook, FaSquareWhatsapp } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";


export default function Footer() {
  return (
    <footer className="bg-primary-medium text-white pb-4 pt-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start text-center">
          {/* القسم الأول - معلومات الاتصال */}
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
                <Image
                  src="/logo.png"
                  alt="شعار الاستشاري"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                الاستشاري
              </Link>
            </div>
            <div className="flex gap-4 mb-6 justify-center">
              {/* WhatsApp Icon */}
              <a href="https://wa.me/+201503000790" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--secondary-medium)] transition-colors">
                <FaSquareWhatsapp size={30} />
              </a>

              {/* GitHub Icon */}
              <a href="https://github.com/Mohamed-Rabie85" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--secondary-medium)] transition-colors">
                <FaSquareGithub size={30} />
              </a>

              {/* Facebook Icon */}
              <a href="https://www.facebook.com/mohamedrabie85" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--secondary-medium)] transition-colors">
                <FaSquareFacebook size={30} />
              </a>

              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=mohamedrabie85" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--secondary-medium)] transition-colors">
                <IoLogoLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* القسم الثاني - روابط سريعة */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="border-2 border-transparent hover:border-[var(--secondary-medium)] rounded-md transition-colors duration-300 px-3 py-1">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="border-2 border-transparent hover:border-[var(--secondary-medium)] rounded-md transition-colors duration-300 px-3 py-1">
                  نبذة عني
                </Link>
              </li>
              <li>
                <Link href="/services" className="border-2 border-transparent hover:border-[var(--secondary-medium)] rounded-md transition-colors duration-300 px-3 py-1">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="border-2 border-transparent hover:border-[var(--secondary-medium)] rounded-md transition-colors duration-300 px-3 py-1">
                  معرض الأعمال
                </Link>
              </li>
              <li>
                <Link href="/blog" className="border-2 border-transparent hover:border-[var(--secondary-medium)] rounded-md transition-colors duration-300 px-3 py-1">
                  المدونة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="border-2 border-transparent hover:border-[var(--secondary-medium)] rounded-md transition-colors duration-300 px-3 py-1">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* القسم الثالث - الخدمات */}
          <div>
            <h3 className="text-xl font-bold mb-4">الخدمات</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#startup-formation" className="border-2 border-transparent hover:border-[var(--secondary-medium)] rounded-md transition-colors duration-300 px-3 py-1">
                  تأسيس الشركات
                </Link>
              </li>
              <li>
                <Link href="/services#restructuring" className="border-2 border-transparent hover:border-[var(--secondary-medium)] rounded-md transition-colors duration-300 px-3 py-1">
                  إعادة هيكلة الشركات
                </Link>
              </li>
              <li>
                <Link href="/services#executive-partner" className="border-2 border-transparent hover:border-[var(--secondary-medium)] rounded-md transition-colors duration-300 px-3 py-1">
                  شريك تنفيذي
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
          <p>Designd By Mohamed Rabie</p>
        </div>
      </div>
    </footer>
  );
}