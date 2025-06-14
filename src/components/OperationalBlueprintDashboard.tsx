'use client';
import React, { useState } from 'react';
import { ChevronDown, Check, AlertTriangle, Lightbulb, User, Users, Calendar, Video, Book, CreditCard, GraduationCap, Settings } from 'lucide-react';

const OperationalBlueprintDashboard = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [openStage, setOpenStage] = useState<number | null>(0);

  const studentJourney = [
    { id: 0, stage: 'الاكتشاف (Awareness)', icon: Lightbulb, problem: 'ضعف الوصول للجمهور ومحتوى غير واضح.', solution: 'استخدام محتوى توعوي (Reels, SEO) وحملات مستهدفة.' },
    { id: 1, stage: 'الاهتمام (Interest)', icon: Users, problem: 'عدم وضوح الفرق بين الأكاديمية والمنافسين.', solution: 'عرض حالات نجاح، جلسات تعريفية مجانية، وفيديو توضيحي للرحلة.' },
    { id: 2, stage: 'القرار (Decision)', icon: Check, problem: 'تردد في الدفع وعدم الثقة.', solution: 'ضمان استرداد المال، خيارات دفع مرنة، وشهادات اجتماعية.' },
    { id: 3, stage: 'الشراء (Purchase)', icon: CreditCard, problem: 'تعقيد في عمليات الدفع والتأكيد.', solution: 'منصة دفع موحدة (Stripe) وتأكيد تلقائي عبر WhatsApp.' },
    { id: 4, stage: 'التجربة (Experience)', icon: GraduationCap, problem: 'مشاكل تقنية وفقدان للمتابعة.', solution: 'لوحة تحكم شخصية، تذكيرات آلية، ونظام نقاط تحفيزي.' },
    { id: 5, stage: 'ما بعد الشراء (Retention)', icon: User, problem: 'فقدان العلاقة وضعف التفاعل المجتمعي.', solution: 'بناء مجتمع مغلق (Discord) وبرنامج إحالة (Referral).' },
  ];

  const teamStructure = [
    { role: 'مدير تشغيل', color: 'bg-blue-500' }, { role: 'منسق أكاديمي', color: 'bg-green-500' },
    { role: 'مسؤول دعم الطلاب', color: 'bg-purple-500' }, { role: 'مسؤول تسويق', color: 'bg-orange-500' },
    { role: 'مشرف مجتمعي', color: 'bg-red-500' }, { role: 'مصمم محتوى/فيديو', color: 'bg-yellow-500' },
  ];

  const toolsStack = [
    { task: 'إدارة الفريق والمهام', tool: 'Trello / ClickUp', icon: Settings },
    { task: 'إدارة المحتوى والدورات', tool: 'Notion / Teachable', icon: Book },
    { task: 'جدولة الجلسات', tool: 'Calendly', icon: Calendar },
    { task: 'البث المباشر', tool: 'Zoom / Google Meet', icon: Video },
    { task: 'إدارة المدفوعات', tool: 'Paymob / Stripe', icon: CreditCard },
    { task: 'بناء المجتمع', tool: 'Circle.so / Discord', icon: Users },
  ];

  const opProblems = [
    { challenge: 'تنظيم الجلسات والتسجيلات', solution: 'إدارة مواعيد الجلسات والتسجيل الأوتوماتيكي', tool: 'Calendly + Zoom' },
    { challenge: 'توزيع المواد التعليمية', solution: 'الوصول السهل والمنظم للمحتوى', tool: 'Google Drive + Notion' },
    { challenge: 'متابعة تقدم الطالب', solution: 'تتبع الحضور والواجبات والمشاركات', tool: 'Airtable / Notion DB' },
    { challenge: 'التواصل والدعم', solution: 'دعم فوري + مجتمعي + استشارات', tool: 'WhatsApp + Discord' },
    { challenge: 'إدارة المدفوعات', solution: 'بوابة دفع موحدة + تقارير مالية', tool: 'Stripe + Google Sheets' },
    { challenge: 'تقييم الدورات والمدربين', solution: 'جمع ملاحظات دورية وتحسين مستمر', tool: 'Typeform / Google Forms' },
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
    <section className="w-full bg-[var(--foreground)] pt-12 md:pt-16">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="section-container text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Next Academy: المخطط التشغيلي
            </h1>
            <p className="text-sm md:text-xl text-gray-600 mt-1 md:mt-2">تصميم رحلة الطالب والعمليات الداخلية لتحقيق تجربة تعليمية استثنائية</p>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 p-2 md:p-6 rounded-lg" dir="rtl">
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm">
          <TabButton id="operations" label="الهيكل التشغيلي" active={activeTab === 'operations'} onClick={setActiveTab} />
          <TabButton id="journey" label="رحلة الطالب" active={activeTab === 'journey'} onClick={setActiveTab} />
          <TabButton id="solutions" label="مصفوفة المشاكل والحلول" active={activeTab === 'solutions'} onClick={setActiveTab} />
        </div>

        {activeTab === 'journey' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 text-center mb-4">مراحل رحلة الطالب: من الاكتشاف إلى الولاء</h3>
            {studentJourney.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button onClick={() => setOpenStage(openStage === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between p-4 text-right">
                  <div className="flex items-center">
                    <item.icon className="w-6 h-6 text-indigo-600 ml-3" />
                    <span className="font-semibold text-lg">{item.stage}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openStage === item.id ? 'rotate-180' : ''}`} />
                </button>
                {openStage === item.id && (
                  <div className="p-4 bg-gray-50 text-blue-900 border-t">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div><strong className="text-red-600">المشكلة:</strong> {item.problem}</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div><strong className="text-green-600">الحل المقترح:</strong> {item.solution}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'operations' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الفريق الأساسي المطلوب</h3>
              <div className="flex flex-wrap gap-4">
                {teamStructure.map((member, i) => <span key={i} className={`text-white px-3 py-1 rounded-full text-sm ${member.color}`}>{member.role}</span>)}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الأدوات المقترحة للعمليات الداخلية</h3>
              <div className="text-blue-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {toolsStack.map((tool, i) => <div key={i} className="flex items-center p-3 bg-gray-50 rounded-md">
                  <tool.icon className="w-6 h-6 text-indigo-500 ml-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{tool.task}</div>
                    <div className="text-sm text-gray-500">{tool.tool}</div>
                  </div>
                </div>)}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'solutions' && (
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <h3 className="text-xl font-bold text-gray-800 text-center p-4">المشاكل التشغيلية وحلولها</h3>
            <table className="w-full text-sm text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">التحدي التشغيلي</th>
                  <th scope="col" className="px-6 py-3">الحل المقترح</th>
                  <th scope="col" className="px-6 py-3">الأداة المناسبة</th>
                </tr>
              </thead>
              <tbody>
                {opProblems.map((p, i) => (
                  <tr key={i} className="bg-white border-b hover:bg-gray-50">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{p.challenge}</th>
                    <td className="px-6 py-4">{p.solution}</td>
                    <td className="px-6 py-4 font-mono text-indigo-600">{p.tool}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="mt-12 text-center text-gray-500">
          <p>2025 Next Academy: المخطط التشغيلي</p>
          <p>Mohamed Rabie - Business Strategy Consultant</p>
        </div>
      </div>
    </section>
  );
};

export default OperationalBlueprintDashboard;