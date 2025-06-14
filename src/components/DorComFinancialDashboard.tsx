'use client';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Target, Users, DollarSign, TrendingUp, TrendingDown, Home, } from 'lucide-react';

const DorComFinancialDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const projectHighlights = [
    { title: 'الفكرة الأساسية', value: 'دليل إلكتروني دقيق للقطاعات التجارية والخدمية', icon: Target },
    { title: 'الجمهور المستهدف', value: 'أصحاب الأعمال (للاشتراك) وعامة الجمهور (للبحث)', icon: Users },
    { title: 'نموذج الربح', value: 'اشتراك سنوي مقابل صفحة مخصصة في الدليل', icon: DollarSign },
    { title: 'الميزة التنافسية', value: 'دقة البيانات والترويج المستمر للمشتركين', icon: TrendingUp },
  ];

  const startupBudget = [
    { name: 'أجهزة ومعدات', value: 25000, color: '#3B82F6' },
    { name: 'دعاية وإعلان', value: 40000, color: '#10B981' },
    { name: 'أجور ومرتبات', value: 40000, color: '#F59E0B' },
    { name: 'مستلزمات إنتاج', value: 35000, color: '#EF4444' },
    { name: 'تأجير وشراء مكان', value: 10000, color: '#8B5CF6' },
    { name: 'رسوم وتراخيص', value: 8000, color: '#6366F1' },
    { name: 'مصاريف أخرى', value: 11000, color: '#D946EF' },
  ];
  const totalStartupBudget = 169000;

  const operatingExpenses = [
    { name: 'مصاريف ثابتة (6 شهور)', value: 270000, icon: Home },
    { name: 'مصاريف متغيرة (6 شهور)', value: 335000, icon: TrendingDown },
  ];

  const profitAndLoss = [
    { month: '1', sales: 1050000, cost: 95000, profit: 955000 }, { month: '2', sales: 525000, cost: 95000, profit: 430000 },
    { month: '3', sales: 525000, cost: 95000, profit: 430000 }, { month: '4', sales: 525000, cost: 95000, profit: 430000 },
    { month: '5', sales: 525000, cost: 95000, profit: 430000 }, { month: '6', sales: 525000, cost: 95000, profit: 430000 },
    { month: '7', sales: 525000, cost: 95000, profit: 430000 }, { month: '8', sales: 525000, cost: 95000, profit: 430000 },
    { month: '9', sales: 525000, cost: 95000, profit: 430000 }, { month: '10', sales: 525000, cost: 95000, profit: 430000 },
  ];

  interface TabButtonProps { id: string; label: string; active: boolean; onClick: (id: string) => void; }
  const TabButton = ({ id, label, active, onClick }: TabButtonProps) => (
    <button onClick={() => onClick(id)} className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-lg transition-all ${active ? 'bg-[var(--secondary-medium)] text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
      {label}
    </button>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 p-4 md:p-6" dir="rtl">
      <div className="section-container">
        {/* Header */}
        <header className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="section-container text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                دور دوت كوم
              </h1>
              <p className="text-sm md:text-xl text-gray-600 mt-1 md:mt-2">خطة المشروع من الفكرة إلى التوقعات المالية</p>
            </div>
          </div>
        </header>

        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm">
          <TabButton id="overview" label="نظرة عامة" active={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="financials" label="التحليل المالي" active={activeTab === 'financials'} onClick={setActiveTab} />
          <TabButton id="pnl" label="توقعات الأرباح والخسائر" active={activeTab === 'pnl'} onClick={setActiveTab} />
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectHighlights.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[var(--secondary-medium)] hover:shadow-lg transition-shadow duration-300">
                <item.icon className="w-8 h-8 text-[var(--secondary-medium)] mb-3" />
                <h3 className="font-bold text-lg text-[var(--primary-medium)]">{item.title}</h3>
                <p className="text-gray-600">{item.value}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'financials' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">ميزانية بدء المشروع</h3>
                <p className="text-gray-500 mb-4">إجمالي: {totalStartupBudget.toLocaleString()} جنيه</p>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={startupBudget} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                      {startupBudget.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value.toLocaleString()} ج`, name]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-lg shadow p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--primary-medium)]">ميزانية التشغيل (أول 6 شهور)</h3>
                  {operatingExpenses.map((exp, i) => (
                    <div key={i} className="mt-4 flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <exp.icon className="w-6 h-6 text-orange-500 ml-3" />
                        <span className="font-semibold text-[var(--primary-medium)]">{exp.name}</span>
                      </div>
                      <span className="text-xl font-bold text-gray-700">{exp.value.toLocaleString()} جنيه</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <h3 className="text-xl font-bold text-[var(--primary-medium)]">التمويل والأهداف</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-600">التمويل المتاح</span>
                    <span className="font-bold text-green-600">800,000 جنيه</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-600">هدف الربح (السنة الأولى)</span>
                    <span className="font-bold text-blue-600">5,525,000 جنيه</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pnl' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">تقرير الأرباح والخسائر المتوقع (10 أشهر)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={profitAndLoss} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" label={{ value: 'الشهر', position: 'insideBottom', offset: -5 }} />
                <YAxis yAxisId="left" orientation="right" tickFormatter={(value) => `${value / 1000}K`} />
                <Tooltip formatter={(value) => `${value.toLocaleString()} ج`} />
                <Legend />
                <Bar yAxisId="left" dataKey="sales" name="إجمالي المبيعات" fill="#8884d8" />
                <Bar yAxisId="left" dataKey="cost" name="إجمالي التكلفة" fill="#82ca9d" />
                <Bar yAxisId="left" dataKey="profit" name="إجمالي الربح" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-500">
        <p>2024 Impact Interiors - خطة التحول التسويقي والنمو</p>
        <p>Mohamed Rabie - Business Strategy Consultant</p>
      </div>
    </section>
  );
};

export default DorComFinancialDashboard;