"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { sendDiagnosisReport } from '../actions';

// --- DATA: Questions & Pillars ---
type Category = 'Leadership' | 'Marketing' | 'Sales' | 'Operations' | 'Finance';

interface Question {
    id: number;
    category: Category;
    categoryLabel: string;
    text: string;
}

const questions: Question[] = [
    // 1. Leadership
    { id: 1, category: 'Leadership', categoryLabel: 'القيادة والفريق', text: 'هل يوجد "وصف وظيفي" (Job Description) مكتوب وواضح لكل موظف في شركتك؟' },
    { id: 2, category: 'Leadership', categoryLabel: 'القيادة والفريق', text: 'هل لديك رؤية واضحة للشركة وهدف سنوي محدد يعرفه جميع الموظفين؟' },
    { id: 3, category: 'Leadership', categoryLabel: 'القيادة والفريق', text: 'هل يمكنك الاعتماد على مديرين أكفاء لاتخاذ قرارات يومية دون الرجوع إليك؟' },

    // 2. Strategic Marketing (The Rio Touch)
    { id: 4, category: 'Marketing', categoryLabel: 'التسويق الاستراتيجي', text: 'هل تمتلك "ميزة تنافسية" (USP) واضحة ومكتوبة تميزك عن المنافسين، ولا بتعتمد على "حرق الأسعار"؟' },
    { id: 5, category: 'Marketing', categoryLabel: 'التسويق الاستراتيجي', text: 'هل لديك قنوات تسويق متنوعة (Omni-channel) تجلب عملاء محتملين (Leads) بشكل يومي، ولا معتمد على "توصيات المعارف" فقط؟' },
    { id: 6, category: 'Marketing', categoryLabel: 'التسويق الاستراتيجي', text: 'هل لديك نظام لـ "الحفاظ على العملاء" (Retention) وإعادة استهدافهم، ولا علاقتك بالعميل بتنتهي بمجرد البيع؟' },

    // 3. Sales
    { id: 7, category: 'Sales', categoryLabel: 'المبيعات', text: 'هل لديك "عملية بيع" (Sales Process) مكتوبة ومراحل واضحة يتبعها فريق المبيعات؟' },
    { id: 8, category: 'Sales', categoryLabel: 'المبيعات', text: 'هل تستخدم نظام CRM لتسجيل ومتابعة تفاعلات العملاء بدقة؟' },
    { id: 9, category: 'Sales', categoryLabel: 'المبيعات', text: 'هل فريق المبيعات يحقق المستهدف (Target) بشكل منتظم وتعرف سبب النجاح أو الفشل؟' },

    // 4. Operations
    { id: 10, category: 'Operations', categoryLabel: 'العمليات والتشغيل', text: 'هل يمكنك الغياب عن الشركة لمدة أسبوعين دون أن تتأثر العمليات أو تنخفض الجودة؟' },
    { id: 11, category: 'Operations', categoryLabel: 'العمليات والتشغيل', text: 'هل إجراءات العمل القياسية (SOPs) مكتوبة وموثقة لأي شخص جديد ينضم للفريق؟' },
    { id: 12, category: 'Operations', categoryLabel: 'العمليات والتشغيل', text: 'هل يتم تسليم المنتجات/الخدمات في الوقت المحدد بنسبة تتجاوز 95%؟' },

    // 5. Finance
    { id: 13, category: 'Finance', categoryLabel: 'المالية', text: 'هل تعرف بدقة "هامش الربح الإجمالي" والصافي لكل منتج/خدمة تبيعها؟' },
    { id: 14, category: 'Finance', categoryLabel: 'المالية', text: 'هل لديك تقارير مالية شهرية (قائمة دخل، تدفقات نقدية) تراجعها بانتظام؟' },
    { id: 15, category: 'Finance', categoryLabel: 'المالية', text: 'هل تفصل تماماً بين الذمة المالية للشركة وبين أموالك الشخصية؟' },
];

export default function DiagnosisPage() {
    const [step, setStep] = useState<'welcome' | 'quiz' | 'email-capture' | 'result'>('welcome');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // --- LOGIC: Scoring ---
    const calculateScore = () => {
        const totalPossible = questions.length;
        const currentScore = Object.values(answers).reduce((a, b) => a + b, 0);
        const percentage = Math.round((currentScore / totalPossible) * 100);
        return percentage;
    };

    const handleAnswer = (choice: 'yes' | 'no') => {
        // Prevent rapid clicks
        if (isTransitioning) return;
        setIsTransitioning(true);

        const points = choice === 'yes' ? 1 : 0;
        const newAnswers = { ...answers, [questions[currentQuestionIndex].id]: points };
        setAnswers(newAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(prev => prev + 1);
                setIsTransitioning(false);
            }, 250);
        } else {
            // Finish Quiz -> Go to Email Capture
            setStep('email-capture');
            setIsTransitioning(false);
        }
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const score = calculateScore();

        // Send Email via Server Action
        await sendDiagnosisReport({
            ...formData,
            score,
            answers
        });

        setIsSubmitting(false);
        setStep('result');
    };

    const score = calculateScore();

    // --- RENDER ---

    // 1. Welcome Screen
    if (step === 'welcome') {
        return (
            <main className="min-h-screen bg-[var(--neutral-medium)] flex items-center justify-center p-4">
                <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10 flex flex-col justify-center space-y-6">
                            <span className="inline-block px-4 py-1 bg-[var(--secondary-medium)] text-[var(--primary-dark)] rounded-full text-sm font-bold w-fit">
                                أداة تشخيص مجانية 📊
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)] leading-tight">
                                هل شركتك "صحية" وقابلة للنمو؟ أم تعاني من <span className="text-[var(--secondary-medium)]">أمراض خفية؟</span>
                            </h1>
                            <p className="text-[var(--neutral-medium)] text-lg leading-relaxed">
                                في دقيقتين فقط، جاوب على 15 سؤال لتعرف "مؤشر صحة البيزنس" الخاص بك، وتكتشف نقاط الضعف التي تعطل نموك.
                            </p>
                            <button
                                onClick={() => setStep('quiz')}
                                className="btn-primary w-full py-4 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                            >
                                ابدأ الفحص الآن 🚀
                            </button>
                        </div>
                        <div className="bg-[var(--primary-dark)] relative hidden md:block">
                            <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] opacity-20 bg-cover bg-center"></div>
                            <div className="relative h-full flex items-center justify-center p-8">
                                <div className="relative w-64 h-64">
                                    <svg viewBox="0 0 200 200" className="w-full h-full text-[var(--secondary-medium)] animate-pulse">
                                        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="300" strokeDashoffset="100" />
                                        <path d="M70 100 L90 120 L130 80" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    // 2. Quiz Screen
    if (step === 'quiz') {
        const currentQuestion = questions[currentQuestionIndex];
        const progress = ((currentQuestionIndex) / questions.length) * 100;

        // SAFEGUARD
        if (!currentQuestion) return null;

        return (
            <main className="min-h-screen bg-[var(--neutral-medium)] flex items-center justify-center p-4">
                <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="h-2 bg-gray-100 w-full">
                        <div className="h-full bg-[var(--secondary-medium)] transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="p-8 md:p-12">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-sm font-bold text-[var(--neutral-medium)]">
                                سؤال {currentQuestionIndex + 1} من {questions.length}
                            </span>
                            <span className="px-3 py-1 bg-[var(--secondary-medium)] text-[var(--primary-dark)] rounded-md text-sm font-bold">
                                {currentQuestion.categoryLabel}
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--primary-dark)] mb-10 leading-relaxed min-h-[120px]">
                            {currentQuestion.text}
                        </h2>
                        <div className="grid grid-cols-2 gap-6">
                            <button
                                onClick={() => handleAnswer('yes')}
                                disabled={isTransitioning}
                                className={`flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-xl transition-all text-[var(--primary-dark)] group ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:border-[var(--secondary-medium)] hover:bg-[var(--secondary-medium)]/5'}`}
                            >
                                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">👍</span>
                                <span className="font-bold text-lg">نعم</span>
                            </button>
                            <button
                                onClick={() => handleAnswer('no')}
                                disabled={isTransitioning}
                                className={`flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-xl transition-all text-[var(--primary-dark)] group ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:border-red-400 hover:bg-red-50'}`}
                            >
                                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">👎</span>
                                <span className="font-bold text-lg">لا / غير متأكد</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    // 3. Email Capture Screen
    if (step === 'email-capture') {
        return (
            <main className="min-h-screen bg-[var(--neutral-medium)] flex items-center justify-center p-4">
                <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-fadeIn">
                    <div className="text-center mb-8">
                        <span className="text-5xl mb-4 block">🎉</span>
                        <h2 className="text-2xl font-bold text-[var(--primary-dark)] mb-2">
                            تم الانتهاء من التشخيص!
                        </h2>
                        <p className="text-[var(--neutral-medium)]">
                            أدخل بياناتك لنرسل لك التقرير المفصل مع أهم النصائح لحالة شركتك.
                        </p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">الاسم</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:border-[var(--secondary-medium)] focus:ring-2 focus:ring-[var(--secondary-medium)]/20 outline-none transition-all "
                                placeholder="اسمك الكريم"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:border-[var(--secondary-medium)] focus:ring-2 focus:ring-[var(--secondary-medium)]/20 outline-none transition-all"
                                placeholder="name@company.com"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">رقم الهاتف (اختياري)</label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:border-[var(--secondary-medium)] focus:ring-2 focus:ring-[var(--secondary-medium)]/20 outline-none transition-all"
                                placeholder="01xxxxxxxxx"
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary w-full py-4 text-lg font-bold shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed mt-6"
                        >
                            {isSubmitting ? 'جاري تحليل النتائج...' : 'عرض النتيجة وإرسال التقرير 📩'}
                        </button>
                    </form>
                </div>
            </main>
        );
    }

    // 4. Result Screen
    if (step === 'result') {
        let resultTitle = "";
        let resultMessage = "";
        let resultColor = "";
        let ctaText = "";
        let ctaLink = "";

        if (score <= 40) {
            resultTitle = "مرحلة الخطر (الفوضى) ⚠️";
            resultMessage = "شركتك تعتمد عليك كلياً. أنت تملك 'وظيفة مرهقة' وليست شركة. تحتاج لبناء الأساسات فوراً قبل الانهيار.";
            resultColor = "text-red-500";
            ctaText = "احجز استشارة طارئة";
            ctaLink = "/contact";
        } else if (score <= 70) {
            resultTitle = "مرحلة النجاة (عنق الزجاجة) 🚧";
            resultMessage = "لديك مبيعات وفريق، ولكنك تفتقد 'النظام'. النمو متوقف بسبب مشاكل التشغيل والاعتماد على الأفراد. تحتاج لهيكلة.";
            resultColor = "text-yellow-600";
            ctaText = "ابدأ خطة الهيكلة";
            ctaLink = "/services";
        } else {
            resultTitle = "مرحلة القوة (جاهز للتوسع) 🚀";
            resultMessage = "أساساتك قوية، وشركتك تعمل بنظام جيد. أنت جاهز الآن لمضاعفة النمو، فتح أسواق جديدة، أو حتى الفرنشايز.";
            resultColor = "text-[var(--secondary-medium)]";
            ctaText = "تواصل معنا للتوسع";
            ctaLink = "/contact";
        }

        return (
            <main className="min-h-screen bg-[var(--neutral-medium)] flex items-center justify-center p-4">
                <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-scaleIn">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold text-sm">
                            ✅ تم إرسال التقرير إلى بريدك الإلكتروني
                        </span>
                    </div>

                    <h2 className="text-2xl text-[var(--neutral-medium)] mb-6 font-semibold">نتيجة فحص شركتك</h2>

                    <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
                        <svg viewBox="0 0 36 36" className="w-full h-full">
                            <path
                                className="text-gray-200"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <path
                                className={score <= 40 ? "text-red-500" : score <= 70 ? "text-yellow-500" : "text-[var(--secondary-medium)]"}
                                strokeDasharray={`${score}, 100`}
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className={`text-5xl font-bold ${resultColor}`}>{score}%</span>
                            <span className="text-sm text-gray-400">مؤشر الصحة</span>
                        </div>
                    </div>

                    <h3 className={`text-3xl font-bold mb-4 ${resultColor}`}>
                        {resultTitle}
                    </h3>
                    <p className="text-[var(--neutral-dark)] text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                        {resultMessage}
                    </p>

                    <Link href={ctaLink} className="btn-secondary w-full py-4 text-xl shadow-lg block">
                        {ctaText} ⬅️
                    </Link>

                    <button
                        onClick={() => { setStep('welcome'); setAnswers({}); setCurrentQuestionIndex(0); setFormData({ name: '', email: '', phone: '' }); }}
                        className="mt-6 text-sm text-[var(--neutral-medium)] hover:text-[var(--primary-medium)] underline"
                    >
                        إعادة الفحص
                    </button>
                </div>
            </main>
        );
    }

    return null;
}
