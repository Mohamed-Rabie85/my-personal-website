'use client';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { Leaf, Target, TrendingUp, Users, Globe, Award, Calendar, DollarSign, Instagram, Facebook, Linkedin, ShoppingCart, Eye } from 'lucide-react';

const VerdeVerticalDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Data for charts
  const platformMetrics = [
    { name: 'Instagram', followers: 2500, engagement: 8.5, color: '#E4405F' },
    { name: 'Facebook', followers: 1800, engagement: 6.2, color: '#1877F2' },
    { name: 'LinkedIn', followers: 950, engagement: 12.8, color: '#0A66C2' },
    { name: 'TikTok', followers: 3200, engagement: 15.3, color: '#000000' }
  ];

  const contentPillars = [
    { name: 'جماليات الحياة الخضراء', percentage: 35, color: '#10B981' },
    { name: 'حلول مستدامة', percentage: 30, color: '#059669' },
    { name: 'نصائح الحدائق', percentage: 20, color: '#34D399' },
    { name: 'قيادة فكرية', percentage: 15, color: '#6EE7B7' }
  ];

  const campaignOptions = [
    { option: 'الخيار أ - B2C Meta Ads', budget: 15000, expectedROAS: 4.2, leads: 120 },
    { option: 'الخيار ب - B2B LinkedIn', budget: 10000, expectedROAS: 6.5, leads: 85 }
  ];

  const monthlyProjection = [
    { month: 'الشهر 1', brandAwareness: 25, sales: 45000, followers: 1200 },
    { month: 'الشهر 2', brandAwareness: 45, sales: 78000, followers: 2800 },
    { month: 'الشهر 3', brandAwareness: 70, sales: 125000, followers: 4500 }
  ];

  const kpiMetrics = [
    { title: 'نمو المتابعين', value: '+185%', change: '+45%', icon: Users, color: 'bg-green-500' },
    { title: 'معدل التفاعل', value: '10.7%', change: '+3.2%', icon: TrendingUp, color: 'bg-blue-500' },
    { title: 'ROAS المتوقع', value: '4.8x', change: '+2.1x', icon: Target, color: 'bg-purple-500' },
    { title: 'تحويل أمازون', value: '12.4%', change: '+6.8%', icon: ShoppingCart, color: 'bg-orange-500' }
  ];

  const phaseStrategy = [
    { phase: 'المرحلة 1', duration: '30 يوم', focus: 'تأسيس الهوية الرقمية', budget: 25000 },
    { phase: 'المرحلة 2', duration: '30 يوم', focus: 'تفعيل المحتوى والحملات', budget: 30000 },
    { phase: 'المرحلة 3', duration: '30 يوم', focus: 'تحسين وتوسيع النتائج', budget: 35000 }
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6" dir="rtl">
      <div className="section-container">
        {/* Header */}
        <header className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="section-container text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Verde Vertical
              </h1>
              <p className="text-sm md:text-xl text-gray-600 mt-1 md:mt-2">استراتيجية التحول التسويقي والنمو الشامل</p>
            </div>

          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex overflow-x-auto pb-2 mb-6 md:mb-8 gap-2 md:gap-4 bg-white p-2 rounded-lg md:rounded-xl shadow-sm">
          <TabButton id="overview" label="نظرة عامة" active={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="strategy" label="الاستراتيجية" active={activeTab === 'strategy'} onClick={setActiveTab} />
          <TabButton id="platforms" label="المنصات الرقمية" active={activeTab === 'platforms'} onClick={setActiveTab} />
          <TabButton id="campaigns" label="الحملات" active={activeTab === 'campaigns'} onClick={setActiveTab} />
          <TabButton id="results" label="النتائج المتوقعة" active={activeTab === 'results'} onClick={setActiveTab} />
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
                      <p className="text-green-600 text-sm mt-1">{metric.change}</p>
                    </div>
                    <div className={`${metric.color} p-3 rounded-lg`}>
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">تحول تسويقي</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• ترسيخ الهوية الرقمية</li>
                  <li>• بناء علامة تجارية قوية</li>
                  <li>• تفعيل المبيعات المستدامة</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">نمو شامل</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• ربط العلامة التجارية بالمبيعات</li>
                  <li>• تحقيق النمو الكلي للشركة</li>
                  <li>• بناء استراتيجية مستدامة</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-4">حل مشكلات معقدة</h3>
                <ul className="space-y-2 text-purple-700">
                  <li>• تحدي الميزانية المحدودة</li>
                  <li>• استراتيجية مرحلية ذكية</li>
                  <li>• كفاءة التكلفة والعائد</li>
                </ul>
              </div>
            </div>

            {/* Challenge & Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">التحدي الأساسي</h3>
                <div className="space-y-4 text-gray-700">
                  <p>شركة Verde Vertical تقدم حلولاً خضراء ومنتجات للحدائق، وتسعى لتحقيق:</p>
                  <ul className="space-y-2 mr-4">
                    <li>• بناء علامة تجارية قوية وموثوقة</li>
                    <li>• زيادة المبيعات بشكل مستدام</li>
                    <li>• العمل ضمن ميزانية محدودة</li>
                    <li>• تأسيس أساس رقمي صحيح</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">النهج المتكامل</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-green-600 ml-3" />
                    <span className="font-medium">الرؤية المتكاملة للنمو</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Calendar className="w-5 h-5 text-blue-600 ml-3" />
                    <span className="font-medium">النهج المرحلي الذكي (3 أشهر)</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-5 h-5 text-purple-600 ml-3" />
                    <span className="font-medium">تحسين نقاط التحويل</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 text-orange-600 ml-3" />
                    <span className="font-medium">تطبيق علم النفس العاطفي</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Growth Projection */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">التوقعات الشهرية للنمو</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="brandAwareness"
                    stackId="1"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.6}
                    name="الوعي بالعلامة التجارية %"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Strategy Tab */}
        {activeTab === 'strategy' && (
          <div className="space-y-8">
            {/* Phase Strategy */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">الاستراتيجية المرحلية</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {phaseStrategy.map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200 hover:border-green-300 transition-colors">
                      <div className="absolute -top-3 -right-3 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <h4 className="font-bold text-green-800 mb-2">{phase.phase}</h4>
                      <p className="text-sm text-green-600 mb-3">{phase.duration}</p>
                      <p className="text-gray-700 mb-4">{phase.focus}</p>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-600">الميزانية المقترحة</p>
                        <p className="text-2xl font-bold text-green-600">{phase.budget.toLocaleString()} ريال</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Strategy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">محاور المحتوى الأساسية</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={contentPillars}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="percentage"
                    >
                      {contentPillars.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">تفاصيل المحاور</h3>
                <div className="space-y-4">
                  {contentPillars.map((pillar, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div
                          className="w-4 h-4 rounded-full ml-3"
                          style={{ backgroundColor: pillar.color }}
                        ></div>
                        <span className="font-medium text-sm">{pillar.name}</span>
                      </div>
                      <span className="text-lg font-bold" style={{ color: pillar.color }}>
                        {pillar.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Actions */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">الإجراءات الرئيسية</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-800">البنية التحتية الرقمية</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <span>تحديد هوية العلامة التجارية الرقمية</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <span>توحيد المنصات الرقمية والملفات الشخصية</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <span>تحسين متجر أمازون والكلمات المفتاحية</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-800">التفعيل والتحسين</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <span>استراتيجية المحتوى متعدد المنصات</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <span>إطلاق حملات إعلانية مركزة</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <span>تتبع مؤشرات الأداء الرئيسية</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Platforms Tab */}
        {activeTab === 'platforms' && (
          <div className="space-y-8">
            {/* Platform Performance */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">أداء المنصات الرقمية</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={platformMetrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="followers" fill="#10B981" radius={[4, 4, 0, 0]} name="المتابعون" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Platform Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformMetrics.map((platform, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {platform.name === 'Instagram' && <Instagram className="w-6 h-6" style={{ color: platform.color }} />}
                      {platform.name === 'Facebook' && <Facebook className="w-6 h-6" style={{ color: platform.color }} />}
                      {platform.name === 'LinkedIn' && <Linkedin className="w-6 h-6" style={{ color: platform.color }} />}
                      {platform.name === 'TikTok' && <div className="w-6 h-6 bg-black rounded"></div>}
                      <span className="font-bold mr-3">{platform.name}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-600 text-sm">المتابعون</p>
                      <p className="text-2xl font-bold" style={{ color: platform.color }}>
                        {platform.followers.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">معدل التفاعل</p>
                      <p className="text-lg font-bold text-green-600">{platform.engagement}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Platform Strategy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">استراتيجية المحتوى لكل منصة</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-lg border border-pink-200">
                    <h4 className="font-bold text-pink-800 mb-2">Instagram & TikTok</h4>
                    <p className="text-pink-700 text-sm">صور وفيديوهات قصيرة جذابة تُظهر جمال النباتات والحدائق</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-2">Facebook</h4>
                    <p className="text-blue-700 text-sm">بناء مجتمع ومعلومات تفصيلية عن الحلول الخضراء</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                    <h4 className="font-bold text-indigo-800 mb-2">LinkedIn</h4>
                    <p className="text-indigo-700 text-sm">قيادة فكرية وبناء مصداقية لجمهور B2B</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">تحسين أمازون</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">تحليل الكلمات المفتاحية</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">تحسين العناوين والوصف</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">المحتوى المرئي</span>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">استراتيجية المراجعات</span>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="space-y-8">
            {/* Campaign Options */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {campaignOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-300 transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{option.option}</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-600">الميزانية</p>
                        <p className="text-lg font-bold text-blue-800">{option.budget.toLocaleString()} ريال</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-600">ROAS المتوقع</p>
                        <p className="text-lg font-bold text-green-800">{option.expectedROAS}x</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm text-purple-600">العملاء المحتملون</p>
                        <p className="text-lg font-bold text-purple-800">{option.leads}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      {index === 0 ? (
                        <p className="text-gray-700 text-sm">حملة مركزة على Meta Ads لبناء الوعي بالعلامة التجارية وتحفيز المبيعات على أمازون مع التركيز على الرسائل العاطفية</p>
                      ) : (
                        <p className="text-gray-700 text-sm">استراتيجية محتوى منتظم على LinkedIn لبناء المصداقية وتوليد عملاء محتملين نوعيين دون إعلانات مدفوعة في البداية</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Investment Breakdown */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">تفصيل الاستثمار المقترح</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-blue-800 mb-2">رسوم الإدارة الشهرية</h4>
                  <p className="text-3xl font-bold text-blue-600">15,000 ريال</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-green-800 mb-2">الميزانية الإعلانية</h4>
                  <p className="text-3xl font-bold text-green-600">10-20K ريال</p>
                  <p className="text-sm text-green-600 mt-1">شهرياً</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-purple-800 mb-2">العائد المتوقع</h4>
                  <p className="text-3xl font-bold text-purple-600">4-6x ROAS</p>
                  <p className="text-sm text-purple-600 mt-1">بعد 3 أشهر</p>
                </div>
              </div>
            </div>

            {/* Campaign Timeline */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">الجدول الزمني للحملات</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-green-600 ml-3" />
                    <h4 className="font-bold text-green-800">الأسبوع 1-4</h4>
                  </div>
                  <ul className="space-y-2 text-green-700">
                    <li>• إعداد المحتوى الأساسي</li>
                    <li>• إطلاق حملات اختبارية</li>
                    <li>• تحليل البيانات الأولية</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-blue-600 ml-3" />
                    <h4 className="font-bold text-blue-800">الأسبوع 5-8</h4>
                  </div>
                  <ul className="space-y-2 text-blue-700">
                    <li>• تحسين الحملات الناجحة</li>
                    <li>• توسيع نطاق الاستهداف</li>
                    <li>• إطلاق محتوى متقدم</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-purple-600 ml-3" />
                    <h4 className="font-bold text-purple-800">الأسبوع 9-12</h4>
                  </div>
                  <ul className="space-y-2 text-purple-700">
                    <li>• تحسين معدلات التحويل</li>
                    <li>• توسيع قنوات التوزيع</li>
                    <li>• إعداد تقرير النتائج</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Tab */}
        {activeTab === 'results' && (
          <div className="space-y-8">
            {/* Expected Results */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">النتائج المتوقعة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-4">النمو الرقمي</h4>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-center">
                      <Users className="w-5 h-5 ml-3" />
                      <span>+250% متابعين</span>
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="w-5 h-5 ml-3" />
                      <span>+15% معدل تفاعل</span>
                    </li>
                    <li className="flex items-center">
                      <Eye className="w-5 h-5 ml-3" />
                      <span>50K+ وصول</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-4">الأداء المالي</h4>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-center">
                      <DollarSign className="w-5 h-5 ml-3" />
                      <span>4-6x عائد على الإعلان</span>
                    </li>
                    <li className="flex items-center">
                      <ShoppingCart className="w-5 h-5 ml-3" />
                      <span>+30% مبيعات أمازون</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="w-5 h-5 ml-3" />
                      <span>25 عميلًا جديدًا</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-4">العلامة التجارية</h4>
                  <ul className="space-y-3 text-purple-700">
                    <li className="flex items-center">
                      <Globe className="w-5 h-5 ml-3" />
                      <span>+70% وعي بالعلامة</span>
                    </li>
                    <li className="flex items-center">
                      <Linkedin className="w-5 h-5 ml-3" />
                      <span>قيادة فكرية راسخة</span>
                    </li>
                    <li className="flex items-center">
                      <Leaf className="w-5 h-5 ml-3" />
                      <span>تموضع فريد في السوق</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projected Growth */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">التوقعات الشهرية</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                    name="المبيعات (ريال)"
                  />
                  <Line
                    type="monotone"
                    dataKey="brandAwareness"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                    name="الوعي بالعلامة (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Key Success Factors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">عوامل النجاح الرئيسية</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-800">التكامل بين المنصات</h4>
                      <p className="text-gray-600 text-sm">تنسيق الرسائل عبر جميع القنوات الرقمية</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-800">التحسين المستمر</h4>
                      <p className="text-gray-600 text-sm">مراجعة البيانات أسبوعيًا وتعديل الاستراتيجية</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-800">المحتوى القوي</h4>
                      <p className="text-gray-600 text-sm">إنشاء محتوى عالي الجودة يلامس احتياجات الجمهور</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">مؤشرات الأداء الرئيسية (KPIs)</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">معدل التفاعل</p>
                    <p className="text-xl font-bold text-green-600">≥ 10%</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">تكلفة التحويل</p>
                    <p className="text-xl font-bold text-blue-600">≤ 50 ريال</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">العائد على الإعلان</p>
                    <p className="text-xl font-bold text-purple-600">≥ 4x</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">نمو المتابعين</p>
                    <p className="text-xl font-bold text-orange-600">+200%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>2025 Verde Vertical - استراتيجية التحول التسويقي والنمو الشامل</p>
          <p>Mohamed Rabie - Business Strategy Consultant</p>
        </div>
      </div>
    </div>
  );
};

export default VerdeVerticalDashboard;