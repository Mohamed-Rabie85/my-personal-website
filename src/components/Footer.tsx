import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSquareGithub, FaSquareFacebook, FaSquareWhatsapp } from "react-icons/fa6";
import { IoLogoLinkedin, IoMail, IoCall, IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-primary-medium text-white pt-12 pb-8 border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-between items-start">

          {/* العمود الأول: نبذة استراتيجية */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="شعار محمد ربيع"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-white">محمد ربيع</span>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm">
              استراتيجي تطوير أعمال وبناء أنظمة. مؤسس شركة ريو للحلول التسويقية - Rio Marketing Solutions. أساعد الشركات الناشئة على التحول من الفوضى إلى النظام لتحقيق نمو مستدام.
            </p>

            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex gap-4 pt-2">
              <a href="https://wa.me/+201503000790" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[var(--secondary-medium)] transition-colors transform hover:scale-110">
                <FaSquareWhatsapp size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mohamedrabie85" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[var(--secondary-medium)] transition-colors transform hover:scale-110">
                <IoLogoLinkedin size={24} />
              </a>
              <a href="https://www.facebook.com/MohamedRabieGrowth/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[var(--secondary-medium)] transition-colors transform hover:scale-110">
                <FaSquareFacebook size={24} />
              </a>
              <a href="https://github.com/Mohamed-Rabie85" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[var(--secondary-medium)] transition-colors transform hover:scale-110">
                <FaSquareGithub size={24} />
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="md:mx-auto">
            <h3 className="text-lg font-bold mb-6 text-[var(--secondary-medium)] relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:right-0 after:w-1/2 after:h-0.5 after:bg-[var(--secondary-medium)]">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[var(--secondary-medium)] hover:translate-x-[-5px] transition-all duration-300 inline-block">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[var(--secondary-medium)] hover:translate-x-[-5px] transition-all duration-300 inline-block">
                  منهجيتي
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[var(--secondary-medium)] hover:translate-x-[-5px] transition-all duration-300 inline-block">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[var(--secondary-medium)] hover:translate-x-[-5px] transition-all duration-300 inline-block">
                  مطبخ البيزنس
                </Link>
              </li>
              <li>
                <Link href="/diagnosis" className="text-[#F59E0B] font-semibold hover:text-[var(--secondary-medium)] hover:translate-x-[-5px] transition-all duration-300 inline-block">
                  التشخيص المجاني
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: معلومات التواصل */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[var(--secondary-medium)] relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:right-0 after:w-1/2 after:h-0.5 after:bg-[var(--secondary-medium)]">
              تواصل معي
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <IoMail className="text-[var(--secondary-medium)] mt-1 flex-shrink-0" size={18} />
                <Link href="/contact" className="hover:text-white transition-colors">
                  تواصل معنا
                </Link>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <IoCall className="text-[var(--secondary-medium)] mt-1 flex-shrink-0" size={18} />
                <a href="https://wa.me/+201503000790" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors dir-ltr">
                  +201503000790 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <IoLocationSharp className="text-[var(--secondary-medium)] mt-1 flex-shrink-0" size={18} />
                <Link href="/consultation" className="hover:text-white transition-colors">
                  احجز استشارة
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* حقوق الملكية */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 Mohamed Rabie. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-1">
            <Link
              href="https://rio-marketing-solutions.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--secondary-medium)] hover:underline font-semibold"
            >
              ريو للحلول التسويقية - Rio Marketing Solutions
            </Link>
            <span>Designed by</span>
          </div>
        </div>
      </div>
    </footer>
  );
}