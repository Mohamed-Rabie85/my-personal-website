import React from 'react';

const PainSection = () => {
    const pains = [
        {
            icon: "🛑",
            title: "فخ البطل",
            description: "الشغل كله بيقف لو أنت مش موجود أو مسافر. أنت الترس اللي محرك كل حاجة، وده مخليك عبد لشركتك مش صاحبها."
        },
        {
            icon: "💸",
            title: "عمى الأرقام",
            description: "بتبيع كتير وفي حركة شغل، بس مش عارف الكاش بيروح فين. بتكتشف فجأة إن مفيش سيولة تدفع مرتبات أو موردين."
        },
        {
            icon: "🚪",
            title: "حرقة التوظيف",
            description: "بتعين ناس وتمشيهم، ومفيش حد بيشيل مسؤولية. بتقضي وقتك تعلم وتدرب، وفي الآخر يمشوا، وترجع تعيد الكرة."
        }
    ];

    return (
        <section className="w-full py-20 bg-gray-50">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)] mb-4">
                        هل شركتك بتعاني من <span className="text-red-500">"أعراض الفوضى"</span>؟
                    </h2>
                    <p className="text-[var(--neutral-medium)] text-xl max-w-3xl mx-auto">
                        لو هزيت راسك بـ <span className="font-bold text-[var(--secondary-medium)]">"أه"</span> على واحدة من دول.. يبقى أنت محتاج نظام، مش موظفين جداد.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pains.map((pain, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-red-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="text-5xl mb-6">{pain.icon}</div>
                            <h3 className="text-2xl font-bold text-[var(--primary-medium)] mb-4">
                                {pain.title}
                            </h3>
                            <p className="text-[var(--neutral-dark)] leading-relaxed">
                                {pain.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainSection;
