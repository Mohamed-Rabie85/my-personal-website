import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "معرض الأعمال | Mohamed Rabie مستشار تطوير أعمال وتسويق استراتيجي",
  description: "استعرض نماذج من المشاريع الناجحة ودراسات الحالة التي قمت بتنفيذها في مجالات التسويق الاستراتيجي وتطوير الأعمال وبناء العلامات التجارية.",
};

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* قسم العنوان الرئيسي */}
      <section className="w-full bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-medium)] text-white py-16">
        <div className="section-container text-center">
          <h1 className="mb-4">معرض الأعمال</h1>
          <p className="text-xl max-w-3xl mx-auto">
            نماذج من المشاريع الناجحة ودراسات الحالة التي تعكس منهجيتي في تحقيق نتائج ملموسة
          </p>
        </div>
      </section>

      {/* قسم مقدمة المعرض */}
      <section className="w-full py-16 bg-[var(--foreground)]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-dark)]">نتائج ملموسة وقصص نجاح حقيقية</h2>
            <p className="text-[var(--neutral-medium)] max-w-3xl mx-auto">
              أؤمن بأن النجاح الحقيقي يقاس بالنتائج الملموسة. فيما يلي مجموعة مختارة من المشاريع التي ساهمت في تحقيق نمو استثنائي للعملاء في مختلف القطاعات.
            </p>
          </div>
          
          {/* فلتر المشاريع */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="cursor-pointer px-4 py-2 bg-[var(--secondary-medium)]  font-bold rounded-md hover:bg-[var(--secondary-dark)] transition-colors duration-300">
              جميع المشاريع
            </button>
            <button className="cursor-pointer px-4 py-2 bg-[var(--secondary-medium)]  font-bold rounded-md hover:bg-[var(--secondary-dark)] transition-colors duration-300">
              التسويق 
            </button>
            <button className="cursor-pointer px-4 py-2 bg-[var(--secondary-medium)]  font-bold rounded-md hover:bg-[var(--secondary-dark)] transition-colors duration-300">
              تطوير الأعمال
            </button>
            <button className="cursor-pointer px-4 py-2 bg-[var(--secondary-medium)]  font-bold rounded-md hover:bg-[var(--secondary-dark)] transition-colors duration-300">
              بناء العلامات التجارية
            </button>
            <button className="cursor-pointer px-4 py-2 bg-[var(--secondary-medium)]  font-bold rounded-md hover:bg-[var(--secondary-dark)] transition-colors duration-300">
              الإنتاج الإعلامي
            </button>
          </div>
        </div>
      </section>

      {/* قسم المشاريع */}
      <section className="w-full py-8 bg-[var(--foreground)]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* مشروع 1 */}
            <div className="card">
              <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المشروع */}
                <Image
                  src="/portfolio/1.jpg"
                  alt="الإنتاج الإعلامي"
                  width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                  height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                  className="object-cover w-full h-full"
                  quality={100}
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-white text-xs px-3 py-1 rounded-full">تطوير أعمال</span>
                  <span className="text-[var(--neutral-medium)] text-sm">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">تطوير استراتيجية نمو لشركة ناشئة في مجال التكنولوجيا</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  ساعدت شركة ناشئة في مجال التكنولوجيا على تطوير استراتيجية نمو شاملة أدت إلى زيادة قاعدة العملاء بنسبة 150% خلال 6 أشهر.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/portfolio/tech-startup" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                    عرض دراسة الحالة &larr;
                  </Link>
                  <div className="flex gap-2">
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">استراتيجية</span>
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">تسويق</span>
                  </div>
                </div>
              </div>
            </div>
            {/* مشروع 2 */}
            <div className="card">
            <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المشروع */}
                <Image
                  src="/portfolio/2.png"
                  alt="الإنتاج الإعلامي"
                  width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                  height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                  className="object-cover w-full h-full"
                  quality={100}
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-white text-xs px-3 py-1 rounded-full">التسويق الرقمي</span>
                  <span className="text-[var(--neutral-medium)] text-sm">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">Verde Vertical بناء علامة تجارية قوية وموثوقة، لا مجرد مبيعات</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  صممت وأعددت خطة تسويق رقمي متكاملة لعلامة تجارية في قطاع اللاند سكيب، لزيادة الظهور الرقمي والمبيعات عبر الإنترنت.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/portfolio/verde-vertical" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                    عرض دراسة الحالة &larr;
                  </Link>
                  <div className="flex gap-2">
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">تسويق رقمي</span>
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">وسائل التواصل</span>
                  </div>
                </div>
              </div>
            </div>

            {/* مشروع 3 */}
            <div className="card">
            <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المشروع */}
                <Image
                  src="/portfolio/3.png"
                  alt="الإنتاج الإعلامي"
                  width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                  height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                  className="object-cover w-full h-full"
                  quality={100}
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-white text-xs px-3 py-1 rounded-full">التسويق </span>
                  <span className="text-[var(--neutral-medium)] text-sm">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">صياغة النمو الاستراتيجي لخدمات الدعاية والفعاليات</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  صممت وأعددت خطة تسويق ,نموذج عمل متكامل لخدمات الدعاية والفعاليات لعلامة تجارية في قطاع الدعاية والاعلان، لزيادة الظهور الرقمي والمبيعات.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/portfolio/pixel-hd-strategy" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                    عرض دراسة الحالة &larr;
                  </Link>
                  <div className="flex gap-2">
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">تسويق </span>
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">وسائل التواصل</span>
                  </div>
                </div>
              </div>
            </div>


            {/* مشروع 4 */}
            <div className="card">
            <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المشروع */}
                <Image
                  src="/portfolio/4.png"
                  alt="الإنتاج الإعلامي"
                  width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                  height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                  className="object-cover w-full h-full"
                  quality={100}
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-white text-xs px-3 py-1 rounded-full">التسويق الرقمي</span>
                  <span className="text-[var(--neutral-medium)] text-sm">2023</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">حملة تسويق رقمي متكاملة لعلامة تجارية في قطاع الأزياء</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  صممت وأشرفت على تنفيذ حملة تسويق رقمي متكاملة لعلامة تجارية في قطاع الأزياء، مما أدى إلى زيادة المبيعات عبر الإنترنت بنسبة 200%.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/portfolio/fashion-brand" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                    عرض دراسة الحالة &larr;
                  </Link>
                  <div className="flex gap-2">
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">تسويق رقمي</span>
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">وسائل التواصل</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* مشروع 5 */}
            <div className="card">
            <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المشروع */}
                <Image
                  src="/portfolio/5.jpg"
                  alt="الإنتاج الإعلامي"
                  width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                  height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                  className="object-cover w-full h-full"
                  quality={100}
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-white text-xs px-3 py-1 rounded-full">بناء علامة تجارية</span>
                  <span className="text-[var(--neutral-medium)] text-sm">2023</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">إعادة تصميم هوية بصرية لعيادة طبية</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  قمت بإعادة تصميم الهوية البصرية لعيادة طبية وتطوير استراتيجية تسويقية متكاملة، مما أدى إلى زيادة عدد المرضى الجدد بنسبة 80%.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/portfolio/medical-clinic" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                    عرض دراسة الحالة &larr;
                  </Link>
                  <div className="flex gap-2">
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">هوية بصرية</span>
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">تسويق</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* مشروع 6 */}
            <div className="card">
            <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المشروع */}
                <Image
                  src="/portfolio/6.png"
                  alt="الإنتاج الإعلامي"
                  width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                  height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                  className="object-cover w-full h-full"
                  quality={100}
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-white text-xs px-3 py-1 rounded-full">الإنتاج الإعلامي</span>
                  <span className="text-[var(--neutral-medium)] text-sm">2022</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">تصميم وتنفيذ جناح معرض لشركة عقارية</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  صممت وأشرفت على تنفيذ جناح معرض متميز لشركة عقارية، مما ساهم في جذب أكثر من 500 عميل محتمل خلال فترة المعرض.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/portfolio/real-estate-exhibition" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                    عرض دراسة الحالة &larr;
                  </Link>
                  <div className="flex gap-2">
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">معارض</span>
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">تصميم</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* مشروع 7 */}
            <div className="card">
            <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المشروع */}
                <Image
                  src="/portfolio/7.png"
                  alt="الإنتاج الإعلامي"
                  width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                  height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                  className="object-cover w-full h-full"
                  quality={100}
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-white text-xs px-3 py-1 rounded-full">تطوير أعمال</span>
                  <span className="text-[var(--neutral-medium)] text-sm">2022</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">استراتيجية توسع لشركة في قطاع الأغذية</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  طورت استراتيجية توسع لشركة في قطاع الأغذية، مما ساعدها على فتح فرعين جديدين وزيادة الإيرادات بنسبة 120% خلال عام واحد.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/portfolio/food-company-expansion" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                    عرض دراسة الحالة &larr;
                  </Link>
                  <div className="flex gap-2">
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">توسع</span>
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">استراتيجية</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* مشروع 8 */}
            <div className="card">
            <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المشروع */}
                <Image
                  src="/portfolio/8.png"
                  alt="الإنتاج الإعلامي"
                  width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                  height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                  className="object-cover w-full h-full"
                  quality={100}
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-white text-xs px-3 py-1 rounded-full">التسويق الرقمي</span>
                  <span className="text-[var(--neutral-medium)] text-sm">2021</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">استراتيجية تسويق  لشركة خدمات </h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  طورت استراتيجية تسويق  لشركة خدمات، مما أدى إلى زيادة حركة المبيعات بنسبة 25% وتحسين الوعي بالعلامة التجارية بنسبة 20%.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/portfolio/financial-services-content" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                    عرض دراسة الحالة &larr;
                  </Link>
                  <div className="flex gap-2">
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">تسويق</span>
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">استراتيجية</span>
                  </div>
                </div>
              </div>
            </div>
            {/* مشروع 9 */}
            <div className="card">
            <div className="bg-gray-200 h-48 relative rounded-lg overflow-hidden w-full flex items-center justify-center">
                {/* هنا يمكن إضافة صورة المشروع */}
                <Image
                  src="/portfolio/9.jpg"
                  alt="الإنتاج الإعلامي"
                  width={600} // عرض الصورة الأصلي (اضبطه حسب الحاجة)
                  height={400} // ارتفاع الصورة الأصلي (اضبطه حسب الحاجة)
                  className="object-cover w-full h-full"
                  quality={100}
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[var(--secondary-medium)] text-white text-xs px-3 py-1 rounded-full">التسويق الرقمي</span>
                  <span className="text-[var(--neutral-medium)] text-sm">2021</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">استراتيجية تسويق محتوى لشركة خدمات مالية</h3>
                <p className="text-[var(--neutral-medium)] mb-4">
                  طورت استراتيجية تسويق محتوى لشركة خدمات مالية، مما أدى إلى زيادة حركة الموقع الإلكتروني بنسبة 250% وتحسين معدل تحويل العملاء بنسبة 40%.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/portfolio/financial-services-content" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
                    عرض دراسة الحالة &larr;
                  </Link>
                  <div className="flex gap-2">
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">محتوى</span>
                    <span className="bg-gray-200 text-[var(--neutral-dark)] text-xs px-2 py-1 rounded">SEO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* زر تحميل المزيد */}
          <div className="text-center mt-12">
            <button className="btn-primary">
              تحميل المزيد من المشاريع
            </button>
          </div>
        </div>
      </section>

      {/* قسم شهادات العملاء */}
      <section className="w-full py-16 bg-[var(--neutral-light)] ">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-[var(--primary-dark)]">ماذا يقول العملاء</h2>
            <p className="text-[var(--neutral-medium)] max-w-3xl mx-auto">
              آراء وشهادات من عملاء سعدت بالعمل معهم وتحقيق نتائج استثنائية لأعمالهم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* شهادة 1 */}
            <div className="card">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--primary-medium)]">أحمد محمد</h3>
                      <p className="text-sm text-[var(--neutral-medium)]">المدير التنفيذي، شركة تكنولوجيا</p>
                    </div>
                  </div>
                  <div className="text-[var(--secondary-medium)]">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[var(--neutral-medium)] mb-4">&quot;ساعدنا في تطوير استراتيجية نمو شاملة غيرت مسار شركتنا بالكامل. النهج الاستراتيجي المدروس والفهم العميق لاحتياجات السوق كان له أثر كبير في نجاحنا. نتائج ملموسة وتعاون مثمر.&quot;</p>
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* شهادة 2 */}
            <div className="card">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--primary-medium)]">سارة خالد</h3>
                      <p className="text-sm text-[var(--neutral-medium)]">مديرة التسويق، شركة أزياء</p>
                    </div>
                  </div>
                  <div className="text-[var(--secondary-medium)]">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[var(--neutral-medium)] mb-4">&quot;الفهم العميق لسلوك المستهلك وعلم النفس التسويقي كان له أثر كبير في نجاح حملاتنا التسويقية. استطعنا تحقيق نتائج تفوق توقعاتنا بفضل الاستراتيجيات المبتكرة والتنفيذ الدقيق.&quot;</p>
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* شهادة 3 */}
            <div className="card">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--primary-medium)]">د. محمود عبدالله</h3>
                      <p className="text-sm text-[var(--neutral-medium)]">مدير عيادة طبية</p>
                    </div>
                  </div>
                  <div className="text-[var(--secondary-medium)]">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[var(--neutral-medium)] mb-4">&quot;إعادة تصميم الهوية البصرية للعيادة وتطوير استراتيجية تسويقية متكاملة كان له أثر كبير في نمو أعمالنا. الاحترافية والالتزام بالمواعيد والنتائج الملموسة جعلت التعاون تجربة ممتازة.&quot;</p>
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم دعوة للعمل */}
      <CtaSection />
    </main>
  );
}
