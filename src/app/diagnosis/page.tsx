// src/app/diagnosis/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "اكتشف صحة شركتك",
    description: "أداة تشخيص مجانية لتقييم صحة شركتك في 5 دقائق فقط. اكتشف نقاط القوة والضعف واحصل على توصيات مخصصة من محمد ربيع.",
};

export default function DiagnosisPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] text-white">
            {/* Hero Section */}
            <section className="section-container py-20 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* شارة */}
                    <div className="mb-6 inline-block px-6 py-2 bg-[var(--secondary-medium)]/20 border border-[var(--secondary-medium)] rounded-full text-[var(--secondary-medium)] font-semibold text-sm">
                        🎯 تقييم مجاني - 5 دقائق فقط
                    </div>

                    {/* العنوان الرئيسي */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        اكتشف <span className="text-[var(--secondary-medium)]">صحة شركتك</span> في 5 دقائق
                    </h1>

                    {/* الوصف */}
                    <p className="text-lg md:text-xl mb-8 text-white/80 leading-relaxed">
                        أداة تشخيص مجانية تساعدك على تقييم شركتك في{" "}
                        <span className="font-bold text-white">5 محاور أساسية</span>:
                        الاستراتيجية، العمليات، التسويق، المبيعات، والفريق.
                    </p>

                    {/* معلومة إضافية */}
                    <div className="bg-[var(--primary-medium)]/30 border border-[var(--secondary-medium)]/50 rounded-lg p-6 mb-10 text-right">
                        <p className="text-base md:text-lg">
                            💡 <strong>لماذا هذا التقييم؟</strong>
                            <br />
                            معظم أصحاب الشركات يعانون من الانشغال اليومي دون معرفة المشاكل الحقيقية.
                            هذا التقييم يكشف لك أين تقف، وما الذي يحتاج إصلاح فوراً.
                        </p>
                    </div>
                </div>
            </section>

            {/* قسم النموذج (سيتم تطويره لاحقاً) */}
            <section className="section-container pb-20">
                <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-lg p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                        قريباً: أداة التشخيص التفاعلية
                    </h2>

                    <p className="text-center text-white/70 mb-8">
                        نحن نعمل على تطوير أداة تشخيص تفاعلية شاملة.
                        <br />
                        في الوقت الحالي، يمكنك حجز استشارة مجانية مباشرة لتقييم شركتك.
                    </p>

                    {/* CTA مؤقت */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/consultation"
                            className="btn-secondary text-lg px-8 py-4 w-full md:w-auto text-center"
                        >
                            📅 احجز استشارة مجانية (30 دقيقة)
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md text-lg hover:bg-white hover:text-[var(--primary-dark)] transition-all duration-300 w-full md:w-auto text-center"
                        >
                            💬 تواصل معنا مباشرة
                        </Link>
                    </div>
                </div>
            </section>

            {/* قسم الفوائد */}
            <section className="section-container pb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    ماذا ستحصل من هذا التقييم؟
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* فائدة 1 */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-4">🔍</div>
                        <h3 className="text-xl font-bold mb-3 text-[var(--secondary-medium)]">
                            تشخيص دقيق
                        </h3>
                        <p className="text-white/70">
                            معرفة نقاط القوة والضعف في شركتك بدقة، بناءً على معايير مجربة
                        </p>
                    </div>

                    {/* فائدة 2 */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="text-xl font-bold mb-3 text-[var(--secondary-medium)]">
                            تقرير مفصل
                        </h3>
                        <p className="text-white/70">
                            تقرير PDF يشمل تقييمك الكامل مع توصيات عملية لكل محور
                        </p>
                    </div>

                    {/* فائدة 3 */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-bold mb-3 text-[var(--secondary-medium)]">
                            خطة عمل
                        </h3>
                        <p className="text-white/70">
                            خطوات واضحة للبدء في إصلاح المشاكل وتحسين الأداء فوراً
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
