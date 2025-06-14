'use client';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { Target, TrendingUp, Users, DollarSign, Brain, ShieldCheck, Linkedin, Briefcase, FileText, Settings } from 'lucide-react';

const ExsAgencyDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Data for charts adapted for Exs Agency KSA Expansion
  const mrrProjection = [
    { month: 'البداية', mrr: 0 },
    { month: '6 أشهر', mrr: 25000 },
    { month: '12 شهر', mrr: 60000 },
    { month: '18 شهر', mrr: 90000 },
  ];

  const mqlProjection = [
    { month: 'الشهر 1-3', mql: 30 },
    { month: 'الشهر 4-6', mql: 60 },
    { month: 'الشهر 7-12', mql: 80 },
    { month: 'الشهر 12+', mql: 100 },
  ];

  const clientAcquisition = [
    { name: 'الهدف', count: 25, color: '#10b981' },
    { name: 'دراسات حالة', count: 8, color: '#3b82f6' },
  ];

  const valueProposition = [
    { name: 'التسويق الأخلاقي', value: 40, color: '#14532d' },
    { name: 'علم النفس التسويقي', value: 35, color: '#0f766e' },
    { name: 'نتائج ملموسة (ROI)', value: 25, color: '#f59e0b' },
  ];

  const kpiMetrics = [
    { title: 'الإيرادات الشهرية (MRR)', value: '75-100 ألف ر.س', change: 'خلال 18 شهرًا', icon: DollarSign, color: 'bg-green-500' },
    { title: 'العملاء الجدد (KSA)', value: '15-25 عميل', change: 'مستهدف', icon: Users, color: 'bg-blue-500' },
    { title: 'العملاء المحتملون (MQL)', value: '60-100 شهريًا', change: 'مستهدف', icon: TrendingUp, color: 'bg-purple-500' },
    { title: 'التموضع الاستراتيجي', value: 'الوكالة الأخلاقية', change: 'بناء السمعة', icon: ShieldCheck, color: 'bg-gray-700' },
  ];

  const executionPhases = [
    { phase: 'المرحلة 1: التأسيس وإثبات التميز', duration: '6 أشهر', focus: 'إطلاق المحتوى، بناء السمعة، اكتساب أول عملاء.' },
    { phase: 'المرحلة 2: التوسع واكتساب العملاء', duration: '6 أشهر', focus: 'تكثيف الإعلانات، بناء دراسات حالة، توسيع الفريق.' },
    { phase: 'المرحلة 3: النمو وترسيخ المكانة', duration: '6 أشهر', focus: 'الاستحواذ على عقود كبيرة، قيادة فكرية، تحقيق الاستدامة.' },
  ];

  const TabButton = ({ id, label, active, onClick }: { id: string; label: string; active: boolean; onClick: (id: string) => void }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base transition-all ${active
        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
        : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-slate-200 p-4 md:p-6" dir="rtl">
      <div className="section-container">
        {/* Header */}
        <header className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="section-container text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Exs Agency
              </h1>
              <p className="text-sm md:text-xl text-gray-600 mt-1 md:mt-2"> استراتيجية اختراق السوق السعودي، نمو أخلاقي، نتائج حقيقية</p>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm">
          <TabButton id="overview" label="نظرة عامة" active={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="strategy" label="الاستراتيجية والتموضع" active={activeTab === 'strategy'} onClick={setActiveTab} />
          <TabButton id="execution" label="خطة التنفيذ والتشغيل" active={activeTab === 'execution'} onClick={setActiveTab} />
          <TabButton id="kpis" label="الأهداف ومؤشرات الأداء" active={activeTab === 'kpis'} onClick={setActiveTab} />
        </nav>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpiMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">{metric.title}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{metric.value}</p>
                      <p className="text-teal-600 text-sm mt-1">{metric.change}</p>
                    </div>
                    <div className={`${metric.color} p-3 rounded-lg`}>
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge & Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">التحدي الرئيسي</h3>
                <div className="space-y-4 text-gray-700">
                  <p>دخول سوق المملكة العربية السعودية التنافسي، والذي يتطلب فهماً عميقاً للثقافة المحلية ومواجهة وكالات راسخة، مع الحاجة لتموضع فريد وموارد محدودة في البداية. </p>
                  <ul className="space-y-2 mr-4">
                    <li>• التغلب على المنافسة الشرسة. </li>
                    <li>• بناء تموضع موثوق يتماشى مع قيم السوق. </li>
                    <li>• العمل عن بعد وبموارد أولية محدودة. </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">النهج الاستراتيجي المتكامل</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center mb-3">
                    <ShieldCheck className="w-5 h-5 text-green-700 ml-3" />
                    <span className="font-medium">التموضع القيمي والأخلاقي المتوافق مع الثقافة السعودية. </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Brain className="w-5 h-5 text-teal-600 ml-3" />
                    <span className="font-medium">استخدام علم النفس التسويقي المسؤول لتصميم حملات مؤثرة. </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-amber-500 ml-3" />
                    <span className="font-medium">التركيز على تحقيق عائد استثمار واضح ومستدام (ROI). </span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 text-gray-700 ml-3" />
                    <span className="font-medium">تقديم حل متكامل (تسويق، إنتاج، استشارات). </span>
                  </div>
                </div>
              </div>
            </div>

            {/* MRR Growth Projection */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">الإيرادات الشهرية المتكررة المتوقعة (MRR) من السوق السعودي </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mrrProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis unit=" ر.س" />
                  <Tooltip formatter={(value) => `${value.toLocaleString()} ر.س`} />
                  <Line type="monotone" dataKey="mrr" stroke="#16a34a" strokeWidth={3} name="الإيرادات الشهرية المتكررة" dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Strategy Tab */}
        {activeTab === 'strategy' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">التموضع الاستراتيجي الفريد</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">تعتمد الاستراتيجية على تموضع فريد يدمج الأخلاق وعلم النفس لتحقيق نتائج ملموسة، مما يخلق فجوة تنافسية ويؤسس لعلامة تجارية موثوقة في السوق السعودي. </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">ركائز عرض القيمة </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={valueProposition} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={5} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                      {valueProposition.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">استراتيجية الترويج المتكاملة </h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <FileText className="w-8 h-8 text-blue-800 ml-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800">التسويق بالمحتوى (قيادة فكرية)</h4>
                      <p className="text-gray-600 text-sm">إنتاج محتوى عميق ومؤثر على LinkedIn و Instagram يرسخ Exs Agency كقائد فكري في التسويق الأخلاقي. </p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <Target className="w-8 h-8 text-teal-600 ml-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800">الإعلانات المدفوعة (توليد عملاء)</h4>
                      <p className="text-gray-600 text-sm">استخدام LinkedIn Ads و Google Ads باستهداف دقيق لتوليد العملاء المحتملين المؤهلين (MQLs). </p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <Linkedin className="w-8 h-8 text-blue-600 ml-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800">بناء العلاقات (تواصل مباشر)</h4>
                      <p className="text-gray-600 text-sm">استخدام LinkedIn Sales Navigator، استضافة ويبينارات، وبناء شراكات استراتيجية. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Execution Plan Tab */}
        {activeTab === 'execution' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">خطة التنفيذ المرحلية (18 شهرًا) </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {executionPhases.map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gradient-to-br from-gray-200 to-gray-50 rounded-lg p-6 border-2 border-gray-300 h-full">
                      <div className="absolute -top-3 -right-3 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">{phase.phase}</h4>
                      <p className="text-sm text-teal-600 font-semibold mb-3">{phase.duration}</p>
                      <p className="text-gray-700">{phase.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">الخطة التشغيلية ودعم السوق </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center"><Settings className="w-5 h-5 ml-3 text-gray-600" /><span>تخصيص الموارد وإدارة المشاريع عن بعد.</span></li>
                  <li className="flex items-center"><Users className="w-5 h-5 ml-3 text-gray-600" /><span>سد فجوة الخبرة بتوظيف كاتب محتوى سعودي. </span></li>
                  <li className="flex items-center"><ShieldCheck className="w-5 h-5 ml-3 text-gray-600" /><span>آليات لضمان الجودة وتقديم أفضل النتائج.</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">الميزانية والمخاطر </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">الميزانية الإعلانية الشهرية المقترحة</p>
                    <p className="text-2xl font-bold text-green-700">5,000 - 10,000 ريال سعودي </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-800">استراتيجيات التخفيف من المخاطر</p>
                    <p className="text-sm text-red-700">مواجهة صعوبة الاختراق، المنافسة، الميزانية، والأخطاء الثقافية. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* KPIs Tab */}
        {activeTab === 'kpis' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">الأهداف الذكية (SMART Objectives) </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg text-center">
                  <p className="text-sm text-blue-800">اكتساب العملاء</p>
                  <p className="text-2xl font-bold text-blue-700">15-25 </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <p className="text-sm text-green-800">MRR (شهريًا)</p>
                  <p className="text-2xl font-bold text-green-700">75-100 ألف </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg text-center">
                  <p className="text-sm text-purple-800">MQLs (شهريًا)</p>
                  <p className="text-2xl font-bold text-purple-700">60-100 </p>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg text-center">
                  <p className="text-sm text-teal-800">دراسات حالة</p>
                  <p className="text-2xl font-bold text-teal-700">5-8 </p>
                </div>
                <div className="p-4 bg-gray-200 rounded-lg text-center">
                  <p className="text-sm text-gray-800">ترسيخ السمعة</p>
                  <p className="text-2xl font-bold text-gray-700">مستمر</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">توقعات اكتساب العملاء ودراسات الحالة </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={clientAcquisition} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip formatter={(value) => `${value} عميل/دراسة`} />
                    <Bar dataKey="count" name="العدد المستهدف" radius={[0, 4, 4, 0]}>
                      {clientAcquisition.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">توقعات توليد العملاء المحتملين (MQLs) </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={mqlProjection}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="mql" stroke="#8b5cf6" fill="#c4b5fd" name="MQLs شهريًا" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">مؤشرات الأداء الرئيسية للتبع (KPIs) </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-gray-100 rounded-lg text-center"><p className="font-semibold">CPL KSA</p><p className="text-sm text-gray-600">تكلفة العميل المحتمل</p></div>
                <div className="p-3 bg-gray-100 rounded-lg text-center"><p className="font-semibold">MRR KSA</p><p className="text-sm text-gray-600">الإيراد الشهري المتكرر</p></div>
                <div className="p-3 bg-gray-100 rounded-lg text-center"><p className="font-semibold">Conversion Rates</p><p className="text-sm text-gray-600">معدلات التحويل</p></div>
                <div className="p-3 bg-gray-100 rounded-lg text-center"><p className="font-semibold">Client Retention</p><p className="text-sm text-gray-600">الاحتفاظ بالعملاء</p></div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>2024 Exs Agency - استراتيجية اختراق السوق السعودي</p>
          <p>Mohamed Rabie - Business Strategy Consultant</p>
        </div>
      </div>
    </div>
  );
};

export default ExsAgencyDashboard;