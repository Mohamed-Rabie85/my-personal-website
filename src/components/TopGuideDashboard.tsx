'use client';
import React, { useState } from 'react';
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Instagram, Linkedin, MessageCircle, Twitter } from 'lucide-react';

const TopGuideDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Data for charts adapted for Top Guide
  const primaryGoals = [
    { name: 'مشتركون جدد', value: 0, target: 50, color: '#3b82f6' },
    { name: 'متابعون جدد', value: 0, target: 1000, color: '#10b981' },
  ];

  const contentPillars = [
    { name: 'تعليمي', value: 35, color: '#3b82f6' },
    { name: 'إلهامي (قصص نجاح)', value: 30, color: '#10b981' },
    { name: 'تفاعلي', value: 20, color: '#f97316' },
    { name: 'ترويجي', value: 15, color: '#ef4444' },
  ];

  const socialChannels = [
    { name: 'Instagram', strategy: 'Reels لقصص النجاح وإعلانات مرئية جذابة', icon: Instagram, color: "text-pink-600" },
    { name: 'TikTok', strategy: 'محتوى إبداعي وسريع ومقارنات بين الدول', icon: MessageCircle, color: "text-black" },
    { name: 'X (Twitter)', strategy: 'نصائح ومعلومات سريعة وتحديثات', icon: Twitter, color: "text-sky-500" },
    { name: 'LinkedIn', strategy: 'محتوى احترافي لأولياء الأمور وبناء الشراكات', icon: Linkedin, color: "text-blue-700" },
  ];

  const executionPlan = [
    { month: 'الشهر الأول', focus: 'بناء الوعي', activities: 'إطلاق الحملات الأولية، نشر محتوى تعريفي، تفعيل المنصات.' },
    { month: 'الشهر الثاني', focus: 'التركيز على الجودة والتفاصيل', activities: 'نشر قصص نجاح، محتوى تعليمي عميق، تحسين الموقع.' },
    { month: 'الشهر الثالث', focus: 'توسيع الجمهور وتحقيق التحويلات', activities: 'تكثيف الإعلانات، حملات إعادة استهداف، عروض خاصة.' },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 p-4 md:p-6" dir="rtl">
      <div className="section-container">
        {/* Header */}
        <header className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="section-container text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Top Guide for Study Abroad
              </h1>
              <p className="text-sm md:text-xl text-gray-600 mt-1 md:mt-2">تمكين الشباب السعودي من خلال التعليم الدولي</p>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex overflow-x-auto pb-2 mb-6 md:mb-8 gap-2 md:gap-4 bg-white p-2 rounded-lg md:rounded-xl shadow-sm">
          <TabButton id="overview" label="نظرة عامة" active={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="strategy" label="الاستراتيجية والجمهور" active={activeTab === 'strategy'} onClick={setActiveTab} />
          <TabButton id="execution" label="خطة التنفيذ والنتائج" active={activeTab === 'execution'} onClick={setActiveTab} />
        </nav>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Primary Goals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {primaryGoals.map((goal, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  {index === 0 ? <Users className="w-12 h-12 text-blue-500 mx-auto mb-3" /> : <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-3" />}
                  <p className="text-gray-600 text-sm">الهدف الرئيسي</p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">{goal.target} {goal.name}</p>
                  <p className="text-sm mt-1" style={{ color: goal.color }}>تحقيق الأهداف</p>
                </div>
              ))}
            </div>

            {/* Challenge & Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">التحدي الأساسي</h3>
                <div className="space-y-4 text-gray-700">
                  <p>بناء علامة تجارية قوية وجذابة لـ Top Guide في سوق تنافسي، بهدف استقطاب الشباب السعودي (15-35 عامًا) وأولياء أمورهم للدراسة في الخارج.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">النهج الاستراتيجي</h3>
                <div className="space-y-4 text-gray-700">
                  <p>صياغة خطة تسويقية متكاملة ترتكز على:</p>
                  <ul className="space-y-2 mr-4 list-disc">
                    <li>فهم عميق لاحتياجات الشباب واهتمامات أولياء الأمور.</li>
                    <li>إبراز نقاط القوة التنافسية (المرونة، الخدمات المتكاملة).</li>
                    <li>استراتيجية محتوى متعددة الأبعاد ومصممة لكل منصة.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Content Pillars */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">محاور المحتوى الأساسية</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={contentPillars} cx="50%" cy="50%" outerRadius={110} dataKey="value" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                    {contentPillars.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Strategy & Audience Tab */}
        {activeTab === 'strategy' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">استراتيجيات التسويق عبر القنوات المستهدفة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {socialChannels.map((channel, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <channel.icon className={`w-6 h-6 ml-2 ${channel.color}`} />
                      <h4 className="font-bold text-gray-800">{channel.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{channel.strategy} </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">تحليل الجمهور المستهدف</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800">الشباب (15-35 سنة)</h4>
                    <p className="text-sm text-gray-700">الاحتياجات: خيارات مرنة، تكلفة مناسبة، إرشاد واضح.</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800">أولياء الأمور</h4>
                    <p className="text-sm text-gray-700">الاهتمامات: مستقبل الأبناء، جودة التعليم، خيارات التمويل.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">تحليل المنافسين</h3>
                <p className="text-gray-700 mb-2">تحليل نقاط قوة وضعف المنافسين الرئيسيين لتحديد فرص التمايز:</p>
                <div className="flex flex-wrap gap-2">
                  {['سات', 'رحلة التعلم', 'سفراء المعرفة', 'يس أطلس', 'بعثتي'].map(name => (
                    <span key={name} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">{name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Execution & Results Tab */}
        {activeTab === 'execution' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">خطة التنفيذ (3 أشهر)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {executionPlan.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-lg border-t-4 border-blue-500">
                    <h4 className="font-bold text-gray-800 mb-1">{item.month}: <span className="text-blue-600">{item.focus}</span></h4>
                    <p className="text-sm text-gray-600">{item.activities} </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">النتائج الملموسة المتوقعة</h3>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                <li>زيادة الوعي بالعلامة التجارية وتعزيز مكانة Top Guide كخيار موثوق للدراسة بالخارج.</li>
                <li>جذب العملاء المحتملين المؤهلين من الشباب السعودي المهتمين بالدراسة في الخارج.</li>
                <li>تحقيق أهداف المبيعات بالوصول إلى 50 مشتركًا جديدًا في الخدمة.</li>
                <li>نمو التفاعل الرقمي من خلال جذب 1000 متابع جديد على وسائل التواصل الاجتماعي.</li>
                <li>بناء الثقة والمصداقية مع الجمهور عبر قصص النجاح والمحتوى الشفاف.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>2025 Top Guide - خطة التحول التسويقي والنمو</p>
          <p>Mohamed Rabie - Business Strategy Consultant</p>
        </div>
      </div>
    </div>
  );
};

export default TopGuideDashboard;