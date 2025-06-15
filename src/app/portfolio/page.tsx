import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";
import NextAcademyDashboard from "@/components/NextAcademyDashboard";
import { FaStar } from "react-icons/fa";
import { BsPersonHeart } from "react-icons/bs";



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
          <p className="text-xl max-w-3xl mx-auto">أؤمن بأن النجاح الحقيقي يقاس بالنتائج الملموسة.
            فيما يلي مجموعة مختارة من المشاريع التي ساهمت في تحقيق نمو استثنائي للعملاء في مختلف القطاعات.
            من تطوير استراتيجيات النمو إلى بناء العلامات التجارية، كل مشروع يمثل قصة نجاح فريدة</p>
        </div>
      </section>

      {/* قسم مقدمة المعرض */}
      <section className="w-full py-12 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="section-container">
          <NextAcademyDashboard />
        </div>
      </section>

      {/* قسم المشاريع */}
      <section className="w-full pb-20 bg-[var(--foreground)] ">
        <div className="section-container ">
          <div className="text-center my-12">
            <h2 className="text-[var(--primary-medium)] p-4">بعض المشاريع </h2>
            <p className="text-[var(--neutral-medium)] max-w-3xl mx-auto">
              استعرض مجموعة من المشاريع التي قمت بتأسيسها وتنفيذها في مجالات التسويق الاستراتيجي وتطوير الأعمال وبناء العلامات التجارية.
              كل مشروع يمثل قصة نجاح فريدة ونتائج ملموسة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* exs-agency مشروع 1 */}
            <div className="card">
              <Link href="/portfolio/exs-agency" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
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
                  <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">Exs Agency</h3>
                  <p className="text-[var(--neutral-medium)] mb-4">
                    صممت وأشرفت على تنفيذ استراتيجية اختراق السوق السعودي،  لوكالة Exs، مما ساعدها على التميز في السوق وزيادة الوعي بالعلامة التجارية
                  </p>
                </div>
              </Link>
            </div>

            {/*next-academy مشروع 2 */}
            <div className="card">
              <Link href="/portfolio/next-academy" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium cursor-pointer">
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
                  <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">Next Academy</h3>
                  <p className="text-[var(--neutral-medium)] mb-4">
                    أنشاء وتاسيس أكاديمية تعليمية متخصصة في مجال ريادة الاعمال والتسويق حيث قمت بتطوير استراتيجية شاملة للنمو والتوسع.
                    من خلال تحليل السوق وتحديد الفرص، تمكنا من تحقيق نتائج ملموسة في زيادة وتوسيع قاعدة العملاء
                  </p>
                </div>
              </Link>
            </div>

            {/*next-academy-analysis مشروع 3 */}
            <div className="card">
              <Link href="/portfolio/next-academy-analysis" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
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
                  <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2"> Next: Situation Analysis</h3>
                  <p className="text-[var(--neutral-medium)] mb-4">
                    تحليل استراتيجي شامل (SWOT, PESTEL) لأكاديمية Next Academy، يهدف إلى فهم البيئة التنافسية وتحديد الفرص والتحديات.
                    يوفر هذا التحليل أساسًا قويًا لتطوير استراتيجيات نمو فعالة
                  </p>
                </div>
              </Link>
            </div>

            {/*verde-vertical مشروع 4 */}
            <div className="card">
              <Link href="/portfolio/verde-vertical" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
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
                  <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">Verde Vertical</h3>
                  <p className="text-[var(--neutral-medium)] mb-4">
                    بناء علامة تجارية قوية وموثوقة، لا مجرد مبيعات
                    صممت وأعددت خطة تسويق رقمي متكاملة لعلامة تجارية في قطاع اللاند سكيب، لزيادة الظهور الرقمي والمبيعات عبر الإنترنت
                  </p>
                </div>
              </Link>
            </div>

            {/*almarsam-alawal مشروع 5 */}
            <div className="card">
              <Link href="/portfolio/almarsam-alawal" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
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
                  <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">المرسم الأول</h3>
                  <p className="text-[var(--neutral-medium)] mb-4">
                    صممت وأشرفت على تنفيذ حملة تسويق رقمي متكاملة لعلامة تجارية في قطاع الخدمات مما أدى إلى زيادة المبيعات عبر الإنترنت بنسبة 25%
                  </p>
                </div>
              </Link>
            </div>

            {/*top-guide مشروع 6 */}
            <div className="card">
              <Link href="/portfolio/top-guide" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
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
                  <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">Top Guide</h3>
                  <p className="text-[var(--neutral-medium)] mb-4">
                    صممت وأشرفت على تنفيذ استراتيجية تسويق رقمي متكاملة لعلامة تجارية في قطاع السياحة التعليمية، مما أدى إلى زيادة الظهور الرقمي والمبيعات عبر الإنترنت بنسبة 30%
                  </p>
                </div>
              </Link>
            </div>

            {/*impact-interiors مشروع 7 */}
            <div className="card">
              <Link href="/portfolio/impact-interiors" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
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
                  <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">Impact Interiors</h3>
                  <p className="text-[var(--neutral-medium)] mb-4">
                    صممت خطة تسويقية شاملة للنمو المستدام لعلامة تجارية في قطاع التصميم الداخلي، بهدف التميز في السوق وزيادة الوعي بالعلامة التجارية
                  </p>
                </div>
              </Link>
            </div>

            {/*winner-advertising مشروع 8 */}
            <div className="card">
              <Link href="/portfolio/winner-advertising" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
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
                  <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">Winner Advertising</h3>
                  <p className="text-[var(--neutral-medium)] mb-4">
                    صياغة النمو الاستراتيجي لخدمات الدعاية والفعاليات
                    صممت وأعددت خطة تسويق ,نموذج عمل متكامل لخدمات الدعاية والفعاليات لعلامة تجارية في قطاع الدعاية والاعلان، لزيادة الظهور الرقمي والمبيعات
                  </p>
                </div>
              </Link>
            </div>

            {/*ajyal-academy مشروع 9 */}
            <div className="card">
              <Link href="/portfolio/ajyal-academy" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
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
                  <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">أجيال أكاديمي</h3>
                  <p className="text-[var(--neutral-medium)] mb-4">
                    صممت وأشرفت على تنفيذ دراسة جدوى وخطة تسويقية للنمو المستدام لعلامة تجارية في قطاع التعليم، بهدف التميز في السوق وزيادة الوعي بالعلامة التجارية
                  </p>
                </div>
              </Link>
            </div>

            {/*pixel-hd مشروع 10 */}
            <div className="card">
              <Link href="/portfolio/pixel-hd" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
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
                  <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">Pixel HD</h3>
                  <p className="text-[var(--neutral-medium)] mb-4">
                    صممت وأشرفت على تنفيذ دراسة جدوى وخطة تسويقية للنمو المستدام لعلامة تجارية في قطاع التعليم، بهدف التميز في السوق وزيادة الوعي بالعلامة التجارية
                  </p>
                </div>
              </Link>
            </div>

            {/*Next Academy: The Operational Blueprint مشروع 11 */}
            <div className="card">
              <Link href="/portfolio/next-academy-operations" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
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
                  <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">The Operational Blueprint</h3>
                  <p className="text-[var(--neutral-medium)] mb-4">
                    تصميم خطة تشغيلية لأكاديمية Next Academy، تتضمن هيكل الفريق والأدوات اللازمة لتحقيق الكفاءة والفعالية في العمليات.
                    يهدف هذا الداشبورد إلى تحسين الأداء التشغيلي وضمان تحقيق الأهداف الاستراتيجية
                  </p>
                </div>
              </Link>
            </div>

            {/*Dor.com: The Financial Blueprint مشروع 12 */}
            <div className="card">
              <Link href="/portfolio/dor-com-financial" className="text-[var(--primary-medium)] hover:text-[var(--primary-dark)] font-medium">
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
                  <h3 className="text-xl font-semibold text-[var(--primary-medium)] mb-2">دور دوت كوم: من الفكرة إلى الجدوى المالية </h3>
                  <p className="text-[var(--neutral-medium)] mb-4">
                    دراسة جدوى مشروع (SWOT, PESTEL)  دور دوت كوم، يهدف إلى فهم البيئة التنافسية وتحديد الفرص والتحديات.
                    يوفر هذا التحليل أساسًا قويًا لتطوير استراتيجيات نمو فعالة
                  </p>
                </div>
              </Link>
            </div>

            {/* زر تحميل المزيد */}
            {/* <div className="text-center mt-12">
            <button className="btn-primary">
              تحميل المزيد من المشاريع
            </button>
          </div> */}
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
                    <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center ">
                      <BsPersonHeart size={24} className="text-[var(--secondary-medium)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--primary-medium)]">أحمد محمد</h3>
                      <p className="text-sm text-[var(--neutral-medium)]">المدير التنفيذي، شركة تكنولوجيا</p>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--neutral-medium)] mb-4">ساعدنا في تطوير استراتيجية نمو شاملة غيرت مسار شركتنا بالكامل. النهج الاستراتيجي المدروس والفهم العميق لاحتياجات السوق كان له أثر كبير في نجاحنا. نتائج ملموسة وتعاون مثمر</p>
                <div className="flex text-yellow-400">
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                </div>

              </div>
            </div>

            {/* شهادة 2 */}
            <div className="card">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                      <BsPersonHeart size={24} className="text-[var(--secondary-medium)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--primary-medium)]">سارة خالد</h3>
                      <p className="text-sm text-[var(--neutral-medium)]">مديرة التسويق، شركة أزياء</p>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--neutral-medium)] mb-4">الفهم العميق لسلوك المستهلك وعلم النفس التسويقي كان له أثر كبير في نجاح حملاتنا التسويقية. استطعنا تحقيق نتائج تفوق توقعاتنا بفضل الاستراتيجيات المبتكرة والتنفيذ الدقيق</p>
                <div className="flex text-yellow-400">
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                </div>
              </div>
            </div>

            {/* شهادة 3 */}
            <div className="card">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                      <BsPersonHeart size={24} className="text-[var(--secondary-medium)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--primary-medium)]">د. محمود عبدالله</h3>
                      <p className="text-sm text-[var(--neutral-medium)]">مدير عيادة طبية</p>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--neutral-medium)] mb-4">
                  إعادة هيكلة العمليات وتحسين تجربة العملاء كان له أثر كبير في نجاح عيادتنا. النهج الاستراتيجي المدروس والفهم العميق لاحتياجات السوق كان له أثر كبير في نجاحنا
                </p>
                <div className="flex text-yellow-400">
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
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
