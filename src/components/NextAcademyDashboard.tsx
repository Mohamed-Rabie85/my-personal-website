'use client';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart, Legend } from 'recharts';
import { Users, Target, Globe, Award, DollarSign } from 'lucide-react';

const NextAcademyDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // ... (البيانات تبقى كما هي بدون تغيير)
  const audienceSegments = [
    { name: 'طلاب جامعيون', value: 35, color: '#3B82F6' },
    { name: 'خريجون جدد', value: 28, color: '#10B981' },
    { name: 'محترفون شباب', value: 22, color: '#F59E0B' },
    { name: 'رواد أعمال ناشئون', value: 15, color: '#EF4444' }
  ];
  const revenueStreams = [
    { name: 'دورات فردية', value: 40, amount: 120000 },
    { name: 'اشتراكات شهرية', value: 35, amount: 105000 },
    { name: 'استشارات', value: 25, amount: 75000 }
  ];
  const monthlyGrowth = [
    { month: 'يناير', students: 120, revenue: 45000 },
    { month: 'فبراير', students: 180, revenue: 68000 },
    { month: 'مارس', students: 250, revenue: 95000 },
    { month: 'أبريل', students: 320, revenue: 128000 },
    { month: 'مايو', students: 420, revenue: 165000 },
    { month: 'يونيو', students: 580, revenue: 220000 }
  ];
  const strategicMetrics = [
    { title: 'إجمالي المشتركين', value: '2,847', change: '+23%', icon: Users, color: 'bg-blue-500' },
    { title: 'معدل التحويل', value: '12.4%', change: '+5.2%', icon: Target, color: 'bg-green-500' },
    { title: 'الإيرادات الشهرية', value: '$220K', change: '+31%', icon: DollarSign, color: 'bg-purple-500' },
    { title: 'الدورات المكتملة', value: '1,234', change: '+18%', icon: Award, color: 'bg-orange-500' }
  ];
  const partnerships = [
    { name: 'حاضنات الأعمال', count: 15, status: 'نشط' },
    { name: 'الجامعات', count: 8, status: 'تطوير' },
    { name: 'المؤثرين', count: 25, status: 'نشط' },
    { name: 'الشركات', count: 12, status: 'مخطط' }
  ];


  interface TabButtonProps {
    id: string;
    label: string;
    active: boolean;
    onClick: (id: string) => void;
  }

  const TabButton = ({ id, label, active, onClick }: TabButtonProps) => (
    <button
      onClick={() => onClick(id)}
      // **تعديل:** تقليل حجم الهوامش على الموبايل
      className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-lg transition-all ${active
        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
        : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
    >
      {label}
    </button>
  );

  return (
    <section className="w-full bg-[var(--foreground)] py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">دراسة حالة: لوحة تحكم Next Academy</h2>
      {/* **تعديل:** تقليل الهوامش على الموبايل */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-2 md:p-6 rounded-lg" dir="rtl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              {/* **تعديل:** حجم خط متجاوب */}
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center md:text-right">
                Next Academy
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mt-2 text-center md:text-right">قيادة ريادة الأعمال الرقمية</p>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="bg-white rounded-lg p-3 shadow-md">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">آخر تحديث</p>
                <p className="text-lg font-semibold">يونيو 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        {/* **تعديل:** جعل التبويبات تلتف على الموبايل */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm">
          <TabButton id="overview" label="نظرة عامة" active={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="audience" label="الجمهور" active={activeTab === 'audience'} onClick={setActiveTab} />
          <TabButton id="revenue" label="الإيرادات" active={activeTab === 'revenue'} onClick={setActiveTab} />
          <TabButton id="partnerships" label="الشراكات" active={activeTab === 'partnerships'} onClick={setActiveTab} />
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strategicMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  {/* ... المحتوى الداخلي للبطاقة يبقى كما هو */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">{metric.title}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{metric.value}</p>
                      <p className="text-green-600 text-sm mt-1">{metric.change}</p>
                    </div>
                    <div className={`${metric.color} p-3 rounded-lg`}>
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">نمو المنصة الشهري</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyGrowth} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  {/* **تعديل:** جعل المحور السيني متجاوبًا */}
                  <XAxis dataKey="month" angle={-45} textAnchor="end" height={60} tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Area type="monotone" dataKey="students" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4">التحدي</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• سوق مكتظ في التعليم وريادة الأعمال</li>
                  <li>• تمكين الشباب العربي من تأسيس مشاريعهم</li>
                  <li>• فهم الجمهور شديد التنوع</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">الحل</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• أكاديمية رقمية متكاملة لريادة الأعمال</li>
                  <li>• تركيز على التعلم العملي والتفاعل</li>
                  <li>• دمج أحدث التقنيات والذكاء الاصطناعي</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Audience Tab */}
        {activeTab === 'audience' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">شرائح الجمهور المستهدف</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    {/* **تعديل:** استخدام Legend بدلاً من النصوص الطويلة على المخطط */}
                    <Pie data={audienceSegments} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                      {audienceSegments.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              {/* Audience Details */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">تفاصيل الشرائح</h3>
                <div className="space-y-4">
                  {audienceSegments.map((segment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div
                          className="w-4 h-4 rounded-full ml-3"
                          style={{ backgroundColor: segment.color }}
                        ></div>
                        <span className="font-medium">{segment.name}</span>
                      </div>
                      <span className="text-2xl font-bold" style={{ color: segment.color }}>
                        {segment.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Target Demographics */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">المواصفات الديموغرافية</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-blue-800">الفئة العمرية</h4>
                  <p className="text-blue-600 mt-2">18-30 سنة</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Globe className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-green-800">النطاق الجغرافي</h4>
                  <p className="text-green-600 mt-2">الشباب العربي</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Target className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-purple-800">الاهتمامات</h4>
                  <p className="text-purple-600 mt-2">ريادة الأعمال والتقنية</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Revenue Tab */}
        {activeTab === 'revenue' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">مصادر الإيرادات</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueStreams} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    {/* **تعديل:** جعل المحور السيني متجاوبًا */}
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'المبلغ']} />
                    <Bar dataKey="amount" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">نمو الإيرادات الشهرية</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyGrowth} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    {/* **تعديل:** جعل المحور السيني متجاوبًا */}
                    <XAxis dataKey="month" angle={-45} textAnchor="end" height={60} tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'الإيرادات']} />
                    <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Revenue Strategy */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">استراتيجية تحقيق الإيرادات</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {revenueStreams.map((stream, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border">
                    <h4 className="font-bold text-gray-800 mb-2">{stream.name}</h4>
                    <p className="text-3xl font-bold text-blue-600 mb-2">${stream.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{stream.value}% من إجمالي الإيرادات</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Partnerships Tab */}
        {activeTab === 'partnerships' && (
          // ... محتوى تبويب الشراكات يبقى كما هو، فهو متجاوب بشكل جيد
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">الشراكات الاستراتيجية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerships.map((partnership, index) => (
                <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-800">{partnership.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm ${partnership.status === 'نشط' ? 'bg-green-100 text-green-800' :
                      partnership.status === 'تطوير' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                      {partnership.status}
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-blue-600">{partnership.count}</p>
                  <p className="text-gray-600 text-sm">شريك</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 Next Academy - قيادة ريادة الأعمال الرقمية</p>
        </div>
      </div>
    </section >
  );
};

export default NextAcademyDashboard;