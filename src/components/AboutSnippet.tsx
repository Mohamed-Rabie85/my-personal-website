import Link from 'next/link';
import Image from 'next/image';

const AboutSnippet = () => {
    return (
        <section className="w-full py-20 bg-white">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* الصورة */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--secondary-medium)]/10 rounded-full z-0 hidden md:block"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--primary-medium)]/5 rounded-full z-0 hidden md:block"></div>
                        <Image
                            src="/images/mohamed-profile.png"
                            alt="محمد ربيع - استشاري تطوير أعمال"
                            width={600}
                            height={600}
                            className="relative z-10 w-full max-w-[500px] h-auto object-contain rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>

                    {/* المحتوى النصي */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)] leading-tight">
                            ليه تسمع <span className="text-[var(--secondary-medium)]">نصيحتي؟</span>
                        </h2>

                        <h3 className="text-xl text-[var(--neutral-dark)] font-semibold border-r-4 border-[var(--secondary-medium)] pr-4">
                            لأني مش مجرد "منظر" قرأ كتابين إدارة.. أنا "صنايعي" في السوق زيك.
                        </h3>

                        <p className="text-[var(--neutral-medium)] text-lg leading-relaxed">
                            على مدار 20 سنة، أسست وأدرت شركات على أرض الواقع (بما فيها <span className="font-bold text-[var(--primary-medium)]">Rio Marketing Solutions</span>). عشت كل المشاكل اللي بتمر بيها: أزمات السيولة، مشاكل التوظيف، وفوضى التشغيل.
                        </p>

                        <p className="text-[var(--neutral-medium)] text-lg leading-relaxed">
                            لذلك، استشاراتي مش "نظريات أكاديمية"، دي <span className="font-bold text-[var(--secondary-medium)]">"خلاصة تجارب عملية"</span> وحلول جربتها بنفسي ونجحت.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-[var(--primary-medium)] font-bold hover:text-[var(--secondary-medium)] transition-colors group"
                            >
                                <span>اعرف قصتي الكاملة</span>
                                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSnippet;
