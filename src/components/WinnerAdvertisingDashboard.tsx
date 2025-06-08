'use client';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';
import { Factory, Target, TrendingUp, Users, Globe, Award, Calendar, DollarSign, Layout, Cpu, Shield, Package } from 'lucide-react';

const WinnerAdvertisingDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Data for charts
  const serviceDistribution = [
    { name: 'تصنيع أجنحة المعارض', value: 45, color: '#3B82F6' },
    { name: 'تجهيزات الفعاليات', value: 25, color: '#10B981' },
    { name: 'خدمات BTL متكاملة', value: 20, color: '#F59E0B' },
    { name: 'تصاميم مبتكرة', value: 10, color: '#EF4444' }
  ];

  const revenueStreams = [
    { name: 'تصنيع', value: 55, amount: 550000 },
    { name: 'خدمات BTL', value: 30, amount: 300000 },
    { name: 'تصاميم', value: 15, amount: 150000 }
  ];

  const growthMetrics = [
    { month: 'يناير', revenue: 250000, clients: 12 },
    { month: 'فبراير', revenue: 320000, clients: 18 },
    { month: 'مارس', revenue: 400000, clients: 25 },
    { month: 'أبريل', revenue: 480000, clients: 32 },
    { month: 'مايو', revenue: 550000, clients: 40 },
    { month: 'يونيو', revenue: 650000, clients: 50 }
  ];

  const kpiMetrics = [
    { title: 'نمو المبيعات', value: '+50%', change: '+15%', icon: DollarSign, color: 'bg-blue-500' },
    { title: 'العملاء الجدد', value: '42', change: '+8', icon: Users, color: 'bg-green-500' },
    { title: 'كفاءة الإنتاج', value: '+35%', change: '+12%', icon: Factory, color: 'bg-orange-500' },
    { title: 'الوعي بالعلامة', value: '+70%', change: '+25%', icon: Globe, color: 'bg-purple-500' }
  ];

  const transformationPhases = [
    { phase: 'المرحلة 1', duration: '3 أشهر', focus: 'بناء النظام الإداري', budget: 200000 },
    { phase: 'المرحلة 2', duration: '6 أشهر', focus: 'التحول الرقمي', budget: 350000 },
    { phase: 'المرحلة 3', duration: '3 أشهر', focus: 'توسيع الشراكات', budget: 250000 }
  ];

  const TabButton = ({ id, label, active, onClick }: { id: string; label: string; active: boolean; onClick: (id: string) => void }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base transition-all ${
        active
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
          : 'bg-white text-gray-600 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6" dir="rtl">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Winner Advertising
            </h1>
            <p className="text-sm md:text-xl text-gray-600 mt-1 md:mt-2">لوحة متابعة التحول الاستراتيجي الشامل</p>
          </div>
          <div className="flex items-center gap-3 md:gap-4 md:space-x-reverse">
            <div className="bg-white rounded-lg p-2 md:p-3 shadow-md">
              <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <div className="text-right">
              <p className="text-xs md:text-sm text-gray-500">حالة المشروع</p>
              <p className="text-base md:text-lg font-semibold">جاري التنفيذ</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="flex overflow-x-auto pb-2 mb-6 md:mb-8 gap-2 md:gap-4 bg-white p-2 rounded-lg md:rounded-xl shadow-sm">
        <TabButton id="overview" label="نظرة عامة" active={activeTab === 'overview'} onClick={setActiveTab} />
        <TabButton id="transformation" label="مراحل التحول" active={activeTab === 'transformation'} onClick={setActiveTab} />
        <TabButton id="services" label="الخدمات" active={activeTab === 'services'} onClick={setActiveTab} />
        <TabButton id="growth" label="مؤشرات النمو" active={activeTab === 'growth'} onClick={setActiveTab} />
        <TabButton id="results" label="النتائج" active={activeTab === 'results'} onClick={setActiveTab} />
      </nav>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6 md:space-y-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {kpiMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-xs md:text-sm">{metric.title}</p>
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mt-1 md:mt-2">{metric.value}</p>
                    <p className="text-green-600 text-xs md:text-sm mt-1">{metric.change}</p>
                  </div>
                  <div className={`${metric.color} p-2 md:p-3 rounded-lg`}>
                    <metric.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg md:rounded-xl p-4 md:p-6 border border-blue-200">
              <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-3 md:mb-4">التحول الاستراتيجي</h3>
              <ul className="space-y-2 text-blue-700 text-sm md:text-base">
                <li>• من مورد تصنيع إلى شريك متكامل</li>
                <li>• بناء نظام إداري متكامل</li>
                <li>• تعزيز الهوية الرقمية</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg md:rounded-xl p-4 md:p-6 border border-green-200">
              <h3 className="text-lg md:text-xl font-bold text-green-800 mb-3 md:mb-4">الابتكار التكنولوجي</h3>
              <ul className="space-y-2 text-green-700 text-sm md:text-base">
                <li>• دمج الذكاء الاصطناعي في التصميم</li>
                <li>• موقع إلكتروني متكامل</li>
                <li>• تحسين العمليات الرقمية</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg md:rounded-xl p-4 md:p-6 border border-purple-200">
              <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-3 md:mb-4">التوسع والشراكات</h3>
              <ul className="space-y-2 text-purple-700 text-sm md:text-base">
                <li>• استهداف قطاعات جديدة</li>
                <li>• بناء شبكة شراكات استراتيجية</li>
                <li>• برامج ولاء العملاء</li>
              </ul>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">التحدي الأساسي</h3>
              <div className="space-y-3 text-gray-700 text-sm md:text-base">
                <p>تحويل الشركة من مجرد مورد تصنيع إلى شريك استراتيجي متكامل:</p>
                <ul className="space-y-2 mr-4">
                  <li>• محدودية النمو في دور المورد التقليدي</li>
                  <li>• غياب الاستراتيجية التسويقية</li>
                  <li>• ضعف التواجد الرقمي</li>
                  <li>• الحاجة لنظام إداري متكامل</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">النهج الاستراتيجي</h3>
              <div className="space-y-3 text-gray-700 text-sm md:text-base">
                <div className="flex items-center mb-2">
                  <Target className="w-5 h-5 text-blue-600 ml-3" />
                  <span className="font-medium">إعادة تموضع العلامة التجارية</span>
                </div>
                <div className="flex items-center mb-2">
                  <Layout className="w-5 h-5 text-green-600 ml-3" />
                  <span className="font-medium">بناء البنية التحتية الرقمية</span>
                </div>
                <div className="flex items-center mb-2">
                  <Cpu className="w-5 h-5 text-purple-600 ml-3" />
                  <span className="font-medium">دمج التكنولوجيا والابتكار</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-orange-600 ml-3" />
                  <span className="font-medium">تعزيز الكفاءة التشغيلية</span>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Chart */}
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">مؤشرات النمو الشهرية</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={growthMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stackId="1"
                  stroke="#3B82F6" 
                  fill="#3B82F6" 
                  fillOpacity={0.6}
                  name="الإيرادات (جنيه)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Transformation Tab */}
      {activeTab === 'transformation' && (
        <div className="space-y-6 md:space-y-8">
          {/* Transformation Phases */}
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">مراحل التحول الاستراتيجي</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {transformationPhases.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 md:p-6 border-2 border-blue-200 hover:border-blue-300 transition-colors">
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-bold text-xs md:text-sm">
                      {index + 1}
                    </div>
                    <h4 className="font-bold text-blue-800 mb-1 md:mb-2">{phase.phase}</h4>
                    <p className="text-xs md:text-sm text-blue-600 mb-2 md:mb-3">{phase.duration}</p>
                    <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">{phase.focus}</p>
                    <div className="bg-white rounded-lg p-2 md:p-3">
                      <p className="text-xs md:text-sm text-gray-600">الميزانية</p>
                      <p className="text-lg md:text-xl font-bold text-blue-600">{phase.budget.toLocaleString()} ج.م</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transformation Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">إعادة هيكلة العمليات</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">بناء نظام إداري متكامل</h4>
                    <p className="text-gray-600 text-xs md:text-sm">تطوير عمليات الإنتاج، الجودة، والمخزون</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">تدريب الفريق</h4>
                    <p className="text-gray-600 text-xs md:text-sm">رفع كفاءة الموظفين لمواكبة التحول</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">تحسين سلسلة التوريد</h4>
                    <p className="text-gray-600 text-xs md:text-sm">ضمان كفاءة تدفق المواد والمنتجات</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">التحول الرقمي</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">الموقع الإلكتروني</h4>
                    <p className="text-gray-600 text-xs md:text-sm">واجهة رقمية متكاملة للخدمات</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">منصات التواصل</h4>
                    <p className="text-gray-600 text-xs md:text-sm">بناء حضور فعال على وسائل التواصل</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">أدوات الذكاء الاصطناعي</h4>
                    <p className="text-gray-600 text-xs md:text-sm">دمج التكنولوجيا في عمليات التصميم</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Transformation Chart */}
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">مؤشرات التحول الرقمي</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={growthMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="clients" fill="#10B981" radius={[4, 4, 0, 0]} name="العملاء الجدد" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Services Tab */}
      {activeTab === 'services' && (
        <div className="space-y-6 md:space-y-8">
          {/* Services Distribution */}
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">توزيع الخدمات</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={serviceDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {serviceDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">تفاصيل الخدمات</h3>
                <div className="space-y-3">
                  {serviceDistribution.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full ml-3"
                          style={{backgroundColor: service.color}}
                        ></div>
                        <span className="font-medium text-sm md:text-base">{service.name}</span>
                      </div>
                      <span className="text-base md:text-lg font-bold" style={{color: service.color}}>
                        {service.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Streams */}
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">مصادر الإيرادات</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueStreams}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value.toLocaleString()} ج.م`, 'المبلغ']} />
                    <Bar dataKey="amount" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                {revenueStreams.map((stream, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-1 md:mb-2">{stream.name}</h4>
                    <p className="text-xl md:text-2xl font-bold text-blue-600 mb-1">{stream.amount.toLocaleString()} ج.م</p>
                    <p className="text-xs md:text-sm text-gray-600">{stream.value}% من إجمالي الإيرادات</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">مميزات الخدمات</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <Package className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-blue-800 mb-2">حلول متكاملة</h4>
                <p className="text-blue-700 text-sm">تصنيع وتصميم وتركيب بجودة عالية</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <Cpu className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-bold text-green-800 mb-2">تصاميم ذكية</h4>
                <p className="text-green-700 text-sm">استخدام الذكاء الاصطناعي في التصميم</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                <Shield className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-bold text-purple-800 mb-2">ضمان الجودة</h4>
                <p className="text-purple-700 text-sm">نظام متكامل لمراقبة الجودة</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Growth Tab */}
      {activeTab === 'growth' && (
        <div className="space-y-6 md:space-y-8">
          {/* Growth Metrics */}
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">مؤشرات النمو</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  name="الإيرادات (جنيه)"
                />
                <Line 
                  type="monotone" 
                  dataKey="clients" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                  name="العملاء الجدد"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Growth Strategy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">استراتيجية النمو</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">تموضع استراتيجي</h4>
                    <p className="text-gray-600 text-xs md:text-sm">من مورد إلى شريك متكامل</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">توسيع قاعدة العملاء</h4>
                    <p className="text-gray-600 text-xs md:text-sm">استهداف قطاعات جديدة</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">بناء الشراكات</h4>
                    <p className="text-gray-600 text-xs md:text-sm">تعاون مع شركات التسويق والبرمجيات</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">أهداف النمو</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs md:text-sm text-blue-600">نمو الإيرادات</p>
                  <p className="text-lg md:text-xl font-bold text-blue-800">+50%</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-xs md:text-sm text-green-600">العملاء الجدد</p>
                  <p className="text-lg md:text-xl font-bold text-green-800">50+</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-xs md:text-sm text-purple-600">الوعي بالعلامة</p>
                  <p className="text-lg md:text-xl font-bold text-purple-800">+70%</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-xs md:text-sm text-orange-600">كفاءة التشغيل</p>
                  <p className="text-lg md:text-xl font-bold text-orange-800">+35%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Market Expansion */}
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">توسيع السوق</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold text-blue-800 mb-1">القطاع التجاري</h4>
                <p className="text-blue-700 text-sm">مراكز تجارية، معارض</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-bold text-green-800 mb-1">الشركات الكبرى</h4>
                <p className="text-green-700 text-sm">تصاميم مخصصة للعلامات التجارية</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                <Layout className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-bold text-purple-800 mb-1">القطاع الحكومي</h4>
                <p className="text-purple-700 text-sm">فعاليات ومعارض حكومية</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-bold text-orange-800 mb-1">القطاع التعليمي</h4>
                <p className="text-orange-700 text-sm">جامعات ومعاهد تعليمية</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Tab */}
      {activeTab === 'results' && (
        <div className="space-y-6 md:space-y-8">
          {/* Expected Results */}
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">النتائج المتوقعة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-3">النتائج المالية</h4>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-center">
                    <DollarSign className="w-5 h-5 ml-3" />
                    <span>زيادة الإيرادات بنسبة 50%</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 ml-3" />
                    <span>تحسين هوامش الربح</span>
                  </li>
                  <li className="flex items-center">
                    <Package className="w-5 h-5 ml-3" />
                    <span>تنويع مصادر الدخل</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-3">النتائج التشغيلية</h4>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center">
                    <Factory className="w-5 h-5 ml-3" />
                    <span>تحسين كفاءة الإنتاج</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 ml-3" />
                    <span>ضمان جودة المنتجات</span>
                  </li>
                  <li className="flex items-center">
                    <Calendar className="w-5 h-5 ml-3" />
                    <span>الالتزام بالمواعيد</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">النتائج التسويقية</h4>
                <ul className="space-y-2 text-purple-700">
                  <li className="flex items-center">
                    <Globe className="w-5 h-5 ml-3" />
                    <span>زيادة الوعي بالعلامة</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 ml-3" />
                    <span>جذب عملاء جدد</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="w-5 h-5 ml-3" />
                    <span>تعزيز المصداقية</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Performance Indicators */}
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">مؤشرات الأداء الرئيسية</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs md:text-sm text-gray-600">نمو الإيرادات</p>
                <p className="text-lg md:text-xl font-bold text-blue-600">≥ 50%</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs md:text-sm text-gray-600">العملاء الجدد</p>
                <p className="text-lg md:text-xl font-bold text-green-600">≥ 50</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs md:text-sm text-gray-600">كفاءة التشغيل</p>
                <p className="text-lg md:text-xl font-bold text-orange-600">≥ 35%</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs md:text-sm text-gray-600">الوعي بالعلامة</p>
                <p className="text-lg md:text-xl font-bold text-purple-600">≥ 70%</p>
              </div>
            </div>
          </div>

          {/* Success Factors */}
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">عوامل النجاح الرئيسية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">الإدارة الاستراتيجية</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span>الالتزام بخطة التحول الشاملة</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span>التقييم المستمر للأداء</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span>المرونة في التكيف مع التحديات</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3">التميز التشغيلي</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span>تحسين جودة المنتجات</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span>تقليل الهدر وزيادة الكفاءة</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span>تدريب وتطوير الفريق</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-8 md:mt-12 py-4 text-sm md:text-base text-gray-500">
        <p>© 2025 Winner Advertising - لوحة متابعة التحول الاستراتيجي الشامل</p>
      </footer>
    </div>
  );
};

export default WinnerAdvertisingDashboard;