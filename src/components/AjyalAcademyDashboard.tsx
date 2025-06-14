'use client';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { GraduationCap, Target, TrendingUp, Users, Globe, Award, DollarSign, Facebook, Linkedin, Code, Briefcase, BarChart2, BookOpen } from 'lucide-react';

const AjyalAcademyDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Data for charts adapted for Ajyal Academy
  const marketDemandMetrics = [
    { name: 'Full-Stack Web Dev', demand: 9.2, color: '#1877F2' },
    { name: 'Data Science & AI', demand: 8.5, color: '#0A66C2' },
    { name: 'Mobile App Dev', demand: 7.8, color: '#10B981' },
    { name: 'Cybersecurity', demand: 8.9, color: '#E4405F' }
  ];

  const targetAudienceSegments = [
    { name: 'طلاب جامعيين', percentage: 45, color: '#10B981' },
    { name: 'خريجون جدد', percentage: 35, color: '#059669' },
    { name: 'مهنيون', percentage: 20, color: '#34D399' }
  ];

  const marketingBudgetOptions = [
    { option: 'الخيار أ - حملات رقمية مركزة', budget: 15000, expectedRegistrations: 80, cpl: 187.5 },
    { option: 'الخيار ب - محتوى وشراكات', budget: 10000, expectedRegistrations: 50, cpl: 200 }
  ];

  const quarterlyProjection = [
    { quarter: 'الربع 1', awareness: 30, revenue: 90000, students: 50 },
    { quarter: 'الربع 2', awareness: 55, revenue: 150000, students: 110 },
    { quarter: 'الربع 3', awareness: 75, revenue: 250000, students: 180 },
    { quarter: 'الربع 4', awareness: 90, revenue: 400000, students: 250 }
  ];

  const kpiMetrics = [
    { title: 'الطلاب المسجلون', value: '+250', change: 'الربع الأول', icon: Users, color: 'bg-blue-500' },
    { title: 'معدل التوظيف', value: '85%', change: 'بعد 6 أشهر', icon: Briefcase, color: 'bg-green-500' },
    { title: 'العائد على الاستثمار', value: '3.5x', change: 'متوقع', icon: Target, color: 'bg-purple-500' },
    { title: 'الوعي بالعلامة التجارية', value: '75%', change: '+45%', icon: TrendingUp, color: 'bg-orange-500' }
  ];

  const implementationPhases = [
    { phase: 'المرحلة 1: التأسيس والإطلاق', duration: '3 أشهر', focus: 'بناء الهوية وتطوير المناهج وإطلاق الموقع', budget: 150000 },
    { phase: 'المرحلة 2: النمو والتوسع', duration: '6 أشهر', focus: 'تفعيل الحملات التسويقية وبناء الشراكات', budget: 250000 },
    { phase: 'المرحلة 3: التحسين والقيادة', duration: '3 أشهر', focus: 'تحليل الأداء وإضافة برامج متقدمة', budget: 200000 }
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
                أكاديمية أجيال لتعليم تكنولوجيا المعلومات
              </h1>
              <p className="text-sm md:text-xl text-gray-600 mt-1 md:mt-2">دراسة جدوى وخطة تسويقية للنمو المستدام</p>
            </div>

          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm">
          <TabButton id="overview" label="نظرة عامة" active={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="strategy" label="الاستراتيجية المتكاملة" active={activeTab === 'strategy'} onClick={setActiveTab} />
          <TabButton id="operations" label="النموذج التشغيلي" active={activeTab === 'operations'} onClick={setActiveTab} />
          <TabButton id="marketing" label="الخطة التسويقية" active={activeTab === 'marketing'} onClick={setActiveTab} />
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
                      <p className="text-blue-600 text-sm mt-1">{metric.change}</p>
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
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">حل مشكلات معقدة</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• تأسيس كيان تعليمي جديد ومنافس</li>
                  <li>• تلبية فجوة المهارات في سوق العمل</li>
                  <li>• مواجهة تحديات الميزانية والتشغيل</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">نمو شامل</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• تأهيل الخريجين بمهارات عملية</li>
                  <li>• بناء شراكات توظيف فعالة</li>
                  <li>• تحقيق أهداف مالية مستدامة</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-4">تحول تسويقي</h3>
                <ul className="space-y-2 text-purple-700">
                  <li>• صياغة استراتيجية تسويق متكاملة</li>
                  <li>• بناء علامة تجارية تعليمية قوية</li>
                  <li>• جذب الطلاب عبر قنوات رقمية</li>
                </ul>
              </div>
            </div>

            {/* Challenge & Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">التحدي الأساسي</h3>
                <div className="space-y-4 text-gray-700">
                  <p>تأسيس أكاديمية أجيال لتلبية الطلب المتزايد على المهارات التقنية في السوق المصري، مع التركيز على:</p>
                  <ul className="space-y-2 mr-4">
                    <li>• سد فجوة الكفاءات بين الخريجين ومتطلبات السوق.</li>
                    <li>• تقديم برامج تدريبية متخصصة ومحدثة.</li>
                    <li>• ضمان فرص توظيف حقيقية للخريجين.</li>
                    <li>• العمل ضمن ميزانية محددة وتكاليف تشغيلية.</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">النهج الاستراتيجي</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center mb-3">
                    <BarChart2 className="w-5 h-5 text-blue-600 ml-3" />
                    <span className="font-medium">التحليل الشامل للسوق والمنافسين</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-green-600 ml-3" />
                    <span className="font-medium">التركيز على القيمة المضافة (مناهج، توظيف)</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Globe className="w-5 h-5 text-purple-600 ml-3" />
                    <span className="font-medium">استراتيجية تسويق متكاملة (رقمي وتقليدي)</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-orange-600 ml-3" />
                    <span className="font-medium">نموذج تشغيلي قابل للتنفيذ والقياس</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quarterly Growth Projection */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">التوقعات الربعية للنمو</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={quarterlyProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="awareness"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                    name="الوعي بالعلامة التجارية %"
                  />
                  <Area
                    type="monotone"
                    dataKey="students"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.6}
                    name="عدد الطلاب"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Strategy Tab */}
        {activeTab === 'strategy' && (
          <div className="space-y-8">
            {/* Implementation Phases */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">مراحل التنفيذ الاستراتيجية</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {implementationPhases.map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200 hover:border-blue-300 transition-colors">
                      <div className="absolute -top-3 -right-3 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <h4 className="font-bold text-blue-800 mb-2">{phase.phase}</h4>
                      <p className="text-sm text-blue-600 mb-3">{phase.duration}</p>
                      <p className="text-gray-700 mb-4">{phase.focus}</p>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-600">الميزانية المقترحة</p>
                        <p className="text-2xl font-bold text-blue-600">{phase.budget.toLocaleString()} جنيه</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">شرائح الجمهور المستهدف</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={targetAudienceSegments}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="percentage"
                    >
                      {targetAudienceSegments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">خصائص الجمهور</h3>
                <div className="space-y-4">
                  {targetAudienceSegments.map((pillar, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div
                          className="w-4 h-4 rounded-full ml-3"
                          style={{ backgroundColor: pillar.color }}
                        ></div>
                        <span className="font-medium text-blue-900 text-sm">{pillar.name}</span>
                      </div>
                      <span className="text-lg font-bold" style={{ color: pillar.color }}>
                        {pillar.percentage}%
                      </span>
                    </div>
                  ))}
                  <div className='text-sm text-gray-600 pt-2'>
                    <p><strong>المشكلات:</strong> صعوبة إيجاد وظائف، نقص المهارات العملية، تكلفة البرامج.</p>
                    <p><strong>الاحتياجات:</strong> مهارات مطلوبة، شهادات معتمدة، فرص عمل، أسعار مناسبة.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SWOT Analysis - Simplified */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">تحليل SWOT</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <h4 className="font-bold text-green-600">نقاط القوة</h4>
                  <ul className="list-disc mr-5 text-sm text-gray-700">
                    <li>مناهج متوافقة مع سوق العمل</li>
                    <li>مدربون ذوو خبرة عملية</li>
                    <li>شراكات توظيف محتملة</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600">نقاط الضعف</h4>
                  <ul className="list-disc mr-5 text-sm text-gray-700">
                    <li>علامة تجارية جديدة</li>
                    <li>ميزانية محدودة في البداية</li>
                    <li>الحاجة لبناء شبكة علاقات</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600">الفرص</h4>
                  <ul className="list-disc mr-5 text-sm text-gray-700">
                    <li>نمو متزايد في الطلب على المهارات التقنية</li>
                    <li>فجوة واضحة في السوق يمكن تلبيتها</li>
                    <li>نمو استخدام منصات مثل LinkedIn و TikTok</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-orange-600">التهديدات</h4>
                  <ul className="list-disc mr-5 text-sm text-gray-700">
                    <li>منافسة قوية من أكاديميات قائمة</li>
                    <li>تغيرات تكنولوجية سريعة</li>
                    <li>تغيرات اقتصادية تؤثر على القدرة الشرائية</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Operations Tab */}
        {activeTab === 'operations' && (
          <div className="space-y-8">
            {/* Operational Model */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">النموذج التشغيلي المقترح</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <BookOpen className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-800">المناهج التعليمية</h4>
                  <p className="text-sm text-gray-600">مناهج متكاملة في البرمجة وتطوير الويب وعلوم البيانات.</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <GraduationCap className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-800">المدربون</h4>
                  <p className="text-sm text-gray-600">معايير صارمة لاختيار المحاضرين والمدربين ذوي الخبرة.</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-800">الدعم الطلابي</h4>
                  <p className="text-sm text-gray-600">خدمات دعم واستشارات مهنية لمساعدة الطلاب.</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Briefcase className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-800">التوظيف</h4>
                  <p className="text-sm text-gray-600">برامج وشراكات لتوفير فرص عمل حقيقية للخريجين.</p>
                </div>
              </div>
            </div>

            {/* Market Demand */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">الطلب في السوق على المهارات التقنية</h3>
              <ResponsiveContainer width="100%" height={300} className="text-blue-900">
                <BarChart data={marketDemandMetrics} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={150} />
                  <Tooltip />
                  <Bar dataKey="demand" name="مؤشر الطلب (من 10)" radius={[0, 4, 4, 0]}>
                    {marketDemandMetrics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Marketing Tab */}
        {activeTab === 'marketing' && (
          <div className="space-y-8">
            {/* Marketing Budget Options */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {marketingBudgetOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-blue-300 transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{option.option}</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-600">الميزانية الشهرية</p>
                        <p className="text-lg font-bold text-blue-800">{option.budget.toLocaleString()} جنيه</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-600">تسجيلات متوقعة</p>
                        <p className="text-lg font-bold text-green-800">{option.expectedRegistrations}</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm text-purple-600">تكلفة التسجيل</p>
                        <p className="text-lg font-bold text-purple-800">{option.cpl} جنيه</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Investment Breakdown */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">تفصيل الاستثمار التسويقي المقترح (المرحلة الأولى)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-blue-800 mb-2">ميزانية شهرية</h4>
                  <p className="text-3xl font-bold text-blue-600">45,000 - 90,000 جنيه</p>
                  <p className="text-sm text-blue-600 mt-1">(1,000 - 2,000 دولار)</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-green-800 mb-2">القنوات الأساسية</h4>
                  <div className="flex justify-center gap-4 mt-2">
                    <Facebook className="w-8 h-8 text-[#1877F2]" />
                    <Linkedin className="w-8 h-8 text-[#0A66C2]" />
                    <Code className="w-8 h-8 text-black" />
                  </div>
                  <p className="text-sm text-green-600 mt-1">Meta, LinkedIn, Google Ads</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-purple-800 mb-2">التركيز على</h4>
                  <p className="text-xl font-bold text-purple-600">التسويق بالمحتوى</p>
                  <p className="text-sm text-purple-600 mt-1">والحملات المدفوعة</p>
                </div>
              </div>
            </div>

            {/* Marketing Strategy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">استراتيجية التسويق الرقمي</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-2">Facebook & Instagram</h4>
                    <p className="text-blue-700 text-sm">حملات مدفوعة للوصول للطلاب والخريجين، محتوى بصري جذاب.</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                    <h4 className="font-bold text-indigo-800 mb-2">LinkedIn</h4>
                    <p className="text-indigo-700 text-sm">بناء المصداقية، استهداف المهنيين، والتواصل مع الشركات للتوظيف.</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">SEO & Google Ads</h4>
                    <p className="text-gray-700 text-sm">استهداف الكلمات البحثية المتعلقة بالدورات التدريبية والوظائف التقنية.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">استراتيجية التسويق التقليدي</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2">المعارض والمؤتمرات</h4>
                    <p className="text-green-700 text-sm">المشاركة في فعاليات التوظيف والتعليم للتواصل المباشر مع الجمهور.</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                    <h4 className="font-bold text-orange-800 mb-2">الندوات وورش العمل</h4>
                    <p className="text-orange-700 text-sm">تنظيم فعاليات مجانية لتعريف الجمهور بالأكاديمية وتقديم قيمة أولية.</p>
                  </div>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">النتائج الملموسة المتوقعة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-4">نمو الأكاديمية</h4>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-center">
                      <Users className="w-5 h-5 ml-3" />
                      <span>+250 طالب في السنة الأولى</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-5 h-5 ml-3" />
                      <span>+75% وعي بالعلامة التجارية</span>
                    </li>
                    <li className="flex items-center">
                      <Target className="w-5 h-5 ml-3" />
                      <span>إطلاق ناجح في السوق</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-4">الأثر على الطلاب</h4>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-center">
                      <Briefcase className="w-5 h-5 ml-3" />
                      <span>+85% معدل توظيف للخريجين</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="w-5 h-5 ml-3" />
                      <span>شهادات معتمدة ومهارات عملية</span>
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="w-5 h-5 ml-3" />
                      <span>تقليل فجوة الكفاءات التقنية</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-4">الأداء المالي</h4>
                  <ul className="space-y-3 text-purple-700">
                    <li className="flex items-center">
                      <DollarSign className="w-5 h-5 ml-3" />
                      <span>تحقيق نقطة التعادل والربحية</span>
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="w-5 h-5 ml-3" />
                      <span>نموذج إيرادات مستدام</span>
                    </li>
                    <li className="flex items-center">
                      <Target className="w-5 h-5 ml-3" />
                      <span>عائد استثمار إيجابي</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projected Financials */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">التوقعات المالية الربعية</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={quarterlyProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value.toLocaleString()} جنيه`} />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                    name="الإيرادات (جنيه)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* KPIs */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">مؤشرات الأداء الرئيسية (KPIs) للقياس</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-sm text-gray-600">معدل تسجيل الطلاب</p>
                  <p className="text-xl font-bold text-blue-600">≥ 200/سنة</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-sm text-gray-600">معدل توظيف الخريجين</p>
                  <p className="text-xl font-bold text-green-600">≥ 85%</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-sm text-gray-600">رضا الطلاب</p>
                  <p className="text-xl font-bold text-purple-600">≥ 4.5/5</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-sm text-gray-600">العائد على الاستثمار</p>
                  <p className="text-xl font-bold text-orange-600">≥ 3x</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>2025 أكاديمية أجيال - خطة استراتيجية وتسويقية</p>
          <p>Mohamed Rabie - Business Strategy Consultant</p>
        </div>
      </div>
    </div>
  );
};

export default AjyalAcademyDashboard;