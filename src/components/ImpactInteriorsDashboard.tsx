'use client';
import React, { useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Palette, TrendingUp, Users, DollarSign, Target, Building, Home, Hotel, HeartPulse, MapPin } from 'lucide-react';

const ImpactInteriorsDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Data for charts adapted for Impact Interiors
  const kpiMetrics = [
    { title: 'نمو الإيرادات', value: '+25%', change: 'مستهدف سنوي', icon: DollarSign, color: 'bg-amber-500' },
    { title: 'نمو العملاء الفاخرين', value: '+20-30%', change: 'مستهدف سنوي', icon: Users, color: 'bg-blue-500' },
    { title: 'زيادة زيارات الموقع', value: '+50%', change: 'مستهدف', icon: TrendingUp, color: 'bg-teal-500' },
    { title: 'زيادة تفاعل السوشيال ميديا', value: '+30%', change: 'مستهدف', icon: Palette, color: 'bg-rose-500' }
  ];

  const digitalAdBudget = [
    { name: 'Google Ads', value: 40, color: '#4285F4' },
    { name: 'LinkedIn', value: 25, color: '#0A66C2' },
    { name: 'Instagram', value: 20, color: '#E1306C' },
    { name: 'Email Campaigns', value: 15, color: '#34A853' }
  ];

  const quarterlyPlan = [
    { quarter: 'الربع 1: التأسيس', focus: 'بناء الوعي والهوية الرقمية' },
    { quarter: 'الربع 2: التنشيط', focus: 'تفعيل المحتوى وجذب العملاء' },
    { quarter: 'الربع 3: التوسع', focus: 'التوسع الجغرافي وبناء الشراكات' },
    { quarter: 'الربع 4: الحفاظ', focus: 'تعزيز ولاء العملاء وتحسين النتائج' }
  ];

  const revenueProjection = [
    { month: 'البداية', revenue: 1.0 },
    { month: 'الربع 1', revenue: 1.05 },
    { month: 'الربع 2', revenue: 1.12 },
    { month: 'الربع 3', revenue: 1.18 },
    { month: 'الربع 4', revenue: 1.25 }
  ];

  const targetSectors = [
    { name: 'الضيافة', icon: Hotel, color: 'text-cyan-600' },
    { name: 'التجاري', icon: Building, color: 'text-indigo-600' },
    { name: 'السكني', icon: Home, color: 'text-emerald-600' },
    { name: 'الرعاية الصحية', icon: HeartPulse, color: 'text-red-600' }
  ];

  const targetGeographies = [
    { name: 'البحرين', icon: MapPin },
    { name: 'السعودية', icon: MapPin },
    { name: 'قطر', icon: MapPin },
    { name: 'الإمارات', icon: MapPin }
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
                Impact Interiors
              </h1>
              <p className="text-sm md:text-xl text-gray-600 mt-1 md:mt-2">خطة التحول التسويقي والنمو الاستراتيجي السنوية</p>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex overflow-x-auto pb-2 mb-6 md:mb-8 gap-2 md:gap-4 bg-white p-2 rounded-lg md:rounded-xl shadow-sm">
          <TabButton id="overview" label="نظرة عامة" active={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="goals" label="الأهداف والنتائج المتوقعة" active={activeTab === 'goals'} onClick={setActiveTab} />
          <TabButton id="strategy" label="الاستراتيجية التسويقية" active={activeTab === 'strategy'} onClick={setActiveTab} />
          <TabButton id="execution" label="خطة التنفيذ والتوسع" active={activeTab === 'execution'} onClick={setActiveTab} />
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">التحدي الأساسي</h3>
                <div className="space-y-4 text-gray-700">
                  <p>تعزيز مكانة Impact Interiors كوجهة رائدة في التصميم والـ fit-out، مع تحدي جذب عملاء راقين في قطاعات متنوعة والسعي للتوسع الجغرافي في سوق تنافسي.</p>
                  <ul className="space-y-2 mr-4">
                    <li>• بناء علامة تجارية قوية ومتميزة.</li>
                    <li>• زيادة الحصة السوقية والإيرادات.</li>
                    <li>• التوسع في أسواق الخليج (السعودية، قطر، الإمارات).</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">النهج الاستراتيجي الشامل</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-cyan-600 ml-3" />
                    <span className="font-medium">الاستهداف الدقيق للقطاعات والمناطق الجغرافية.</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Palette className="w-5 h-5 text-teal-600 ml-3" />
                    <span className="font-medium">إبراز الخبرة، الابتكار، والرقي في هوية العلامة.</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 ml-3" />
                    <span className="font-medium">التكامل بين التسويق الرقمي والأوفلاين لضمان أقصى تأثير.</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-amber-500 ml-3" />
                    <span className="font-medium">بناء الثقة والمصداقية عبر دراسات الحالة والفعاليات.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Goals Tab */}
        {activeTab === 'goals' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">الأهداف الاستراتيجية الكمية (النتائج المتوقعة)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 bg-amber-50 rounded-lg text-center border-l-4 border-amber-500">
                  <p className="text-lg font-bold text-amber-800">+25%</p>
                  <p className="text-sm text-gray-600">نمو في الإيرادات</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg text-center border-l-4 border-blue-500">
                  <p className="text-lg font-bold text-blue-800">+20-30%</p>
                  <p className="text-sm text-gray-600">نمو العملاء الفاخرين</p>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg text-center border-l-4 border-teal-500">
                  <p className="text-lg font-bold text-teal-800">+50%</p>
                  <p className="text-sm text-gray-600">زيارات للموقع الإلكتروني</p>
                </div>
                <div className="p-4 bg-rose-50 rounded-lg text-center border-l-4 border-rose-500">
                  <p className="text-lg font-bold text-rose-800">+20%</p>
                  <p className="text-sm text-gray-600">استفسارات من العملاء</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">النمو المتوقع في الإيرادات (+25%)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[1, 1.3]} tickFormatter={(tick) => `${(tick * 100 - 100).toFixed(0)}%`} />
                  <Tooltip formatter={(value) => `+${((Number(value) * 100) - 100).toFixed(1)}%`} />
                  <Line type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={3} name="النمو التراكمي" dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Marketing Strategy Tab */}
        {activeTab === 'strategy' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">توزيع ميزانية الإعلانات الرقمية</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={digitalAdBudget} cx="50%" cy="50%" outerRadius={120} dataKey="value" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                      {digitalAdBudget.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">الاستراتيجيات الرقمية الرئيسية</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-800">بناء وتوحيد هوية العلامة التجارية</h4>
                    <p className="text-sm text-gray-600">تعزيز الهوية البصرية، تطوير الموقع، تقوية الحضور على Instagram و LinkedIn.</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-800">إنتاج محتوى مرئي عالي الجودة</h4>
                    <p className="text-sm text-gray-600">فيديوهات قبل/بعد، جولات افتراضية، وعرض المشاريع بشكل احترافي.</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-800">حملات إعلانية مستهدفة</h4>
                    <p className="text-sm text-gray-600">تصميم صفحات هبوط مخصصة وحملات إعادة استهداف لجذب العملاء في كل قطاع.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">استراتيجيات الأوفلاين والعلاقات العامة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-cyan-50 rounded-lg">
                  <h4 className="font-semibold text-cyan-800">المعارض والفعاليات</h4>
                  <p className="text-xs text-gray-600">المشاركة في INDEX Saudi و Hospitality Qatar.</p>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg">
                  <h4 className="font-semibold text-teal-800">الشراكات الاستراتيجية</h4>
                  <p className="text-xs text-gray-600">مع شركات العقارات، المقاولات، والفنادق.</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">التسويق المباشر</h4>
                  <p className="text-xs text-gray-600">رسائل بريدية موجهة وزيارات ميدانية.</p>
                </div>
                <div className="p-4 bg-rose-50 rounded-lg">
                  <h4 className="font-semibold text-rose-800">العلاقات العامة</h4>
                  <p className="text-xs text-gray-600">علاقات مع الإعلاميين والمؤثرين ودعم المجتمع.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Execution & Expansion Tab */}
        {activeTab === 'execution' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">خطة التنفيذ السنوية (مقسمة على أرباع)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quarterlyPlan.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-lg border-t-4 border-cyan-500">
                    <h4 className="font-bold text-gray-800 mb-2">{item.quarter}</h4>
                    <p className="text-sm text-gray-600">{item.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">القطاعات المستهدفة</h3>
                <div className="grid grid-cols-2 gap-4">
                  {targetSectors.map((sector) => (
                    <div key={sector.name} className="flex items-center p-4 bg-gray-100 rounded-lg">
                      <sector.icon className={`w-8 h-8 ml-4 ${sector.color}`} />
                      <span className="font-semibold text-gray-700">{sector.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">التوسع الجغرافي المستهدف</h3>
                <div className="grid grid-cols-2 gap-4">
                  {targetGeographies.map((geo) => (
                    <div key={geo.name} className="flex items-center p-4 bg-gray-100 rounded-lg">
                      <geo.icon className="w-8 h-8 ml-4 text-gray-500" />
                      <span className="font-semibold text-gray-700">{geo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>2024 Impact Interiors - خطة التحول التسويقي والنمو</p>
          <p>Mohamed Rabie - Business Strategy Consultant</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactInteriorsDashboard;