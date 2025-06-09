'use client';
import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, TrendingDown, Lightbulb, ShieldAlert, CheckCircle, XCircle, Users, Briefcase } from 'lucide-react';

const SituationAnalysisDashboard = () => {
  const [activeTab, setActiveTab] = useState('internal');

  // ** البيانات المكيفة من ملف التحليل **
  const strengths = [
    { title: 'تدريب عملي تفاعلي', description: 'تقديم تدريب على مشاريع حقيقية وجلسات استشارية فردية.' },
    { title: 'خبرة المدربين', description: 'خبرة عملية تتجاوز 5 سنوات في التسويق وإدارة المشاريع الناشئة.' },
    { title: 'أسلوب تدريب فريد', description: 'تطبيقات عملية، تقييمات تفاعلية، وجلسات مباشرة أسبوعية.' },
  ];
  const weaknesses = [
    { title: 'تحديات إنتاج المحتوى', description: 'إعداد الدورات يستغرق وقتًا طويلًا مع نقص في فريق الإنتاج.' },
    { title: 'نقص في الموارد', description: 'الحاجة إلى مصمم ومسوق رقمي، والاعتماد على أدوات خارجية بدلاً من منصة خاصة.' },
    { title: 'مشكلات تشغيلية', description: 'عمليات التسجيل والمتابعة يدوية وغير مؤتمتة، مما يستهلك الوقت.' },
  ];
  const audienceNeeds = [
    { name: 'تدريب عملي', value: 50, color: '#3B82F6' },
    { name: 'شهادة معتمدة', value: 30, color: '#10B981' },
    { name: 'محتوى قصير ومباشر', value: 20, color: '#F59E0B' },
  ];
  const revenueSources = [
    { name: 'دورات مدفوعة', value: 60, color: '#3B82F6' },
    { name: 'خدمات استشارية', value: 25, color: '#8B5CF6' },
    { name: 'اشتراكات شهرية', value: 15, color: '#10B981' },
  ];
  const pestelFactors = [
    { title: 'سياسية', description: 'الحاجة لتسجيل الكيان رسميًا للحصول على تراخيص الشهادات المعتمدة.', icon: Briefcase },
    { title: 'اقتصادية', description: 'التضخم قد يؤثر على قدرة العملاء على الدفع، مما يستدعي تقديم خيارات مرنة.', icon: TrendingDown },
    { title: 'اجتماعية', description: 'قبول متزايد للتعلم عن بعد، مع ضرورة تعزيز التفاعل للتغلب على تفضيل الدورات التقليدية.', icon: Users },
    { title: 'تكنولوجية', description: 'فرصة لاستخدام منصات متخصصة مثل Teachable أو Kajabi وتطوير روبوتات دردشة.', icon: Lightbulb },
  ];

  interface TabButtonProps { id: string; label: string; active: boolean; onClick: (id: string) => void; }

  const TabButton = ({ id, label, active, onClick }: TabButtonProps) => (
    <button onClick={() => onClick(id)} className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base transition-all ${active
      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
      : 'bg-white text-gray-600 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <section className="w-full bg-[var(--foreground)] py-12 md:py-16">
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-2 md:p-6 rounded-lg" dir="rtl">
        {/* Header */}
        <header className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="section-container text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Next Academy: Situation Analysis
              </h1>
              <p className="text-sm md:text-xl text-gray-600 mt-1 md:mt-2">تحليل شامل لوضع الأكاديمية لوضع استراتيجيات نمو فعالة</p>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm">
          <TabButton id="internal" label="التحليل الداخلي" active={activeTab === 'internal'} onClick={setActiveTab} />
          <TabButton id="external" label="التحليل الخارجي" active={activeTab === 'external'} onClick={setActiveTab} />
          <TabButton id="pestel" label="البيئي والمالي" active={activeTab === 'pestel'} onClick={setActiveTab} />
          <TabButton id="swot" label="مصفوفة SWOT" active={activeTab === 'swot'} onClick={setActiveTab} />
        </div>

        {/* Internal Analysis Tab */}
        {activeTab === 'internal' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="flex items-center text-xl font-bold text-green-600 mb-4"><CheckCircle className="ml-2" /> نقاط القوة (Strengths)</h3>
              <div className="space-y-4">
                {strengths.map((item, i) => <div key={i} className="p-3 bg-green-50 rounded-md border-l-4 border-green-500">
                  <h4 className="font-semibold text-blue-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>)}
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="flex items-center text-xl font-bold text-red-600 mb-4"><XCircle className="ml-2" /> نقاط الضعف (Weaknesses)</h3>
              <div className="space-y-4">
                {weaknesses.map((item, i) => <div key={i} className="p-3 bg-red-50 rounded-md border-l-4 border-red-500">
                  <h4 className="font-semibold text-blue-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>)}
              </div>
            </div>
          </div>
        )}

        {/* External Analysis Tab */}
        {activeTab === 'external' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">السوق والجمهور المستهدف</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">العملاء المستهدفون بدقة:</h4>
                  <p className="text-gray-600">الشباب (18-30 سنة) في مصر والدول العربية، خاصة رواد الأعمال الجدد وأصحاب المشاريع الصغيرة.</p>
                  <h4 className="font-semibold text-blue-900 mt-4 mb-2">تحليل المنافسين:</h4>
                  <p className="text-gray-600">منصات عالمية (Udemy, Coursera) وأكاديميات محلية. نقطة ضعفهم الرئيسية هي التركيز على النظريات بدلاً من التطبيق العملي.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 text-center mb-4">أهم احتياجات الجمهور</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie data={audienceNeeds} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                        {audienceNeeds.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PESTEL & Financial Tab */}
        {activeTab === 'pestel' && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">التحليل البيئي (PESTEL)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pestelFactors.map((factor, i) => <div key={i} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center font-semibold text-blue-900 mb-2"><factor.icon className="w-5 h-5 ml-2 text-blue-600" />{factor.title}</div>
                  <p className="text-sm text-gray-600">{factor.description}</p>
                </div>)}
              </div>
            </div>
            <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">مصادر الإيرادات المتوقعة</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={revenueSources} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                    {revenueSources.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* SWOT Tab */}
        {activeTab === 'swot' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow space-y-4">
              <h3 className="flex items-center text-xl font-bold text-green-600"><TrendingUp className="ml-2" /> نقاط القوة</h3>
              <ul className="list-disc pr-5 space-y-1 text-gray-700"><li>تقديم تدريب عملي تفاعلي</li><li>دعم مباشر من المدربين</li><li>استهداف سوق كبير غير مشبع بالدورات العملية</li></ul>
              <h3 className="flex items-center text-xl font-bold text-red-600 pt-4"><ShieldAlert className="ml-2" /> التهديدات</h3>
              <ul className="list-disc pr-5 space-y-1 text-gray-700"><li>المنافسة القوية من المنصات العالمية</li><li>التغيرات الاقتصادية التي تؤثر على قدرة العملاء على الدفع</li><li>تحديات التسويق وبناء العلامة التجارية في سوق مزدحم</li></ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow space-y-4">
              <h3 className="flex items-center text-xl font-bold text-yellow-500"><TrendingDown className="ml-2" /> نقاط الضعف</h3>
              <ul className="list-disc pr-5 space-y-1 text-gray-700"><li>نقص الموارد البشرية في التسويق والتصميم</li><li>عدم وجود منصة تعليمية خاصة</li><li>الحاجة إلى تحسين عمليات التسجيل والتواصل</li></ul>
              <h3 className="flex items-center text-xl font-bold text-blue-600 pt-4"><Lightbulb className="ml-2" /> الفرص</h3>
              <ul className="list-disc pr-5 space-y-1 text-gray-700"><li>ازدياد الطلب على التعلم عن بُعد</li><li>قلة المنافسة في الدورات التطبيقية التفاعلية</li><li>إمكانية التعاون مع حاضنات الأعمال والمؤسسات</li></ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default SituationAnalysisDashboard;