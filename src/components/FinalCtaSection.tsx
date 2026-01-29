import Link from 'next/link';

const FinalCtaSection = () => {
    return (
        <section className="w-full py-20 bg-[var(--primary-dark)] pattern-grid text-center relative overflow-hidden">
            {/* خلفية زخرفية */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        جاهز تبطل <span className="text-[var(--secondary-medium)]">"تطفية حرايق"</span> وتبدأ تبني بيزنس حقيقي؟
                    </h2>

                    <p className="text-xl text-gray-300">
                        التغيير بيبدأ بقرار. والقرار بيبدأ بمعرفة الحقيقة.
                    </p>

                    <div className="pt-4">
                        <Link
                            href="/diagnosis"
                            className="inline-block bg-[var(--secondary-medium)] text-white text-xl font-bold px-10 py-5 rounded-lg shadow-2xl hover:bg-white hover:text-[var(--primary-dark)] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            احجز جلسة التشخيص الاستراتيجي المجانية
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCtaSection;
