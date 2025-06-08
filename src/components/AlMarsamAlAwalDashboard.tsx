'use client';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { MapPin, Smartphone, TrendingUp, Users, Heart, MessageSquare, Share2, ArrowUpRight, DollarSign, Globe } from 'lucide-react';

const AlMarsamAlAwalDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // بيانات المنصات الرقمية
  const platformData = [
    { name: 'Google Maps', visits: 1250, growth: 35, color: '#4285F4' },
    { name: 'Instagram', engagement: 8.2, growth: 42, color: '#E1306C' },
    { name: 'Facebook', engagement: 6.5, growth: 28, color: '#1877F2' },
    { name: 'TikTok', engagement: 12.7, growth: 65, color: '#000000' }
  ];

  // بيانات الحملات الإعلانية
  const campaignPerformance = [
    { campaign: 'بحث محلي', clicks: 320, conversions: 45, cost: 1200, color: '#34A853' },
    { campaign: 'إنستجرام', clicks: 280, conversions: 38, cost: 1500, color: '#E1306C' },
    { campaign: 'تيك توك', clicks: 180, conversions: 25, cost: 1000, color: '#000000' }
  ];

  // بيانات النمو الشهري
  const monthlyGrowth = [
    { month: 'يناير', storeVisits: 120, onlineEngagement: 450 },
    { month: 'فبراير', storeVisits: 180, onlineEngagement: 680 },
    { month: 'مارس', storeVisits: 250, onlineEngagement: 950 },
    { month: 'أبريل', storeVisits: 320, onlineEngagement: 1280 },
    { month: 'مايو', storeVisits: 420, onlineEngagement: 1650 },
    { month: 'يونيو', storeVisits: 580, onlineEngagement: 2200 }
  ];

  // مؤشرات الأداء الرئيسية
  const kpiMetrics = [
    { title: 'زيارات المتجر', value: '580', change: '+42%', icon: MapPin, color: 'bg-blue-500' },
    { title: 'تفاعل رقمي', value: '2,200', change: '+65%', icon: Smartphone, color: 'bg-pink-500' },
    { title: 'تحويلات إعلانية', value: '108', change: '+38%', icon: TrendingUp, color: 'bg-green-500' },
    { title: 'متابعين جدد', value: '1,250', change: '+55%', icon: Users, color: 'bg-purple-500' }
  ];

  // مراحل التحول
  const transformationPhases = [
    { phase: 'التأسيس', focus: 'تحسين المنصات الرقمية', progress: 100 },
    { phase: 'الإطلاق', focus: 'بدء الحملات الإعلانية', progress: 85 },
    { phase: 'النمو', focus: 'تحسين الأداء المستمر', progress: 60 }
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
                المرسم الأول
              </h1>
              <p className="text-sm md:text-xl text-gray-600 mt-1 md:mt-2"> التحول التسويقي الرقمي</p>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex overflow-x-auto pb-2 mb-6 md:mb-8 gap-2 md:gap-4 bg-white p-2 rounded-lg md:rounded-xl shadow-sm">
          <TabButton id="overview" label="نظرة عامة" active={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="platforms" label="المنصات الرقمية" active={activeTab === 'platforms'} onClick={setActiveTab} />
          <TabButton id="campaigns" label="الحملات الإعلانية" active={activeTab === 'campaigns'} onClick={setActiveTab} />
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
                <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-3 md:mb-4">التحول الرقمي</h3>
                <ul className="space-y-2 text-blue-700 text-sm md:text-base">
                  <li>• تحسين الوجود على Google Maps</li>
                  <li>• توحيد الحسابات الرقمية</li>
                  <li>• إنشاء محتوى جذاب</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg md:rounded-xl p-4 md:p-6 border border-purple-200">
                <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-3 md:mb-4">التسويق المحلي</h3>
                <ul className="space-y-2 text-purple-700 text-sm md:text-base">
                  <li>• استهداف الجمهور الجغرافي</li>
                  <li>• تحفيز الزيارات الفعلية</li>
                  <li>• بناء الولاء المحلي</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg md:rounded-xl p-4 md:p-6 border border-pink-200">
                <h3 className="text-lg md:text-xl font-bold text-pink-800 mb-3 md:mb-4">القياس والتحسين</h3>
                <ul className="space-y-2 text-pink-700 text-sm md:text-base">
                  <li>• تتبع مؤشرات الأداء</li>
                  <li>• تحسين الحملات باستمرار</li>
                  <li>• زيادة العائد على الاستثمار</li>
                </ul>
              </div>
            </div>

            {/* Transformation Progress */}
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">مراحل التحول</h3>
              <div className="space-y-4">
                {transformationPhases.map((phase, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{phase.phase}: {phase.focus}</span>
                      <span className="text-sm font-medium text-blue-600">{phase.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                        style={{ width: `${phase.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Platforms Tab */}
        {activeTab === 'platforms' && (
          <div className="space-y-6 md:space-y-8">
            {/* Platform Performance */}
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">أداء المنصات الرقمية</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {platformData.map((platform, index) => (
                  <div key={index} className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white mr-3"
                          style={{ backgroundColor: platform.color }}
                        >
                          {platform.name.charAt(0)}
                        </div>
                        <span className="font-bold">{platform.name}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-gray-600 text-xs md:text-sm">النمو</p>
                        <p className="text-xl md:text-2xl font-bold" style={{ color: platform.color }}>
                          +{platform.growth}%
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {platform.visits ? 'الزيارات' : 'معدل التفاعل'}
                        </p>
                        <p className="text-lg md:text-xl font-bold text-gray-900">
                          {platform.visits || platform.engagement}
                          {!platform.visits && '%'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Metrics */}
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">مقاييس التفاعل</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-blue-600 ml-3" />
                    <span className="text-xs md:text-sm">الإعجابات</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-blue-800 mt-1">1,245</p>
                  <p className="text-green-600 text-xs">+32%</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-purple-600 ml-3" />
                    <span className="text-xs md:text-sm">التعليقات</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-purple-800 mt-1">328</p>
                  <p className="text-green-600 text-xs">+28%</p>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg">
                  <div className="flex items-center">
                    <Share2 className="w-5 h-5 text-pink-600 ml-3" />
                    <span className="text-xs md:text-sm">المشاركات</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-pink-800 mt-1">156</p>
                  <p className="text-green-600 text-xs">+45%</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <ArrowUpRight className="w-5 h-5 text-green-600 ml-3" />
                    <span className="text-xs md:text-sm">التحويلات</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-green-800 mt-1">108</p>
                  <p className="text-green-600 text-xs">+38%</p>
                </div>
              </div>
            </div>

            {/* Content Strategy */}
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">استراتيجية المحتوى</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">Google Maps</h4>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• تحديث الصور والفيديوهات</li>
                    <li>• الرد على المراجعات</li>
                    <li>• نشر العروض المميزة</li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border border-pink-200">
                  <h4 className="font-bold text-pink-800 mb-2">Instagram & TikTok</h4>
                  <ul className="space-y-1 text-pink-700 text-sm">
                    <li>• محتوى يومي جذاب</li>
                    <li>• استخدام الـ Reels</li>
                    <li>• دعوة واضحة للزيارة</li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2">Facebook</h4>
                  <ul className="space-y-1 text-purple-700 text-sm">
                    <li>• صفحة احترافية</li>
                    <li>• تفاعل مع الجمهور</li>
                    <li>• نشر الأحداث والعروض</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="space-y-6 md:space-y-8">
            {/* Campaign Performance */}
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">أداء الحملات الإعلانية</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={campaignPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="campaign" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="clicks" fill="#3B82F6" name="النقرات" />
                  <Bar dataKey="conversions" fill="#10B981" name="التحويلات" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Campaign Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">تفاصيل الحملات</h3>
                <div className="space-y-4">
                  {campaignPerformance.map((campaign, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between mb-3">
                        <h4 className="font-bold" style={{ color: campaign.color }}>{campaign.campaign}</h4>
                        <span className="text-sm font-medium text-gray-600">{campaign.cost.toLocaleString()} ريال</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-gray-500">النقرات</p>
                          <p className="font-bold">{campaign.clicks}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">التحويلات</p>
                          <p className="font-bold text-green-600">{campaign.conversions}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">تحليل الكفاءة</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-xs md:text-sm text-blue-600">معدل النقر (CTR)</p>
                    <p className="text-xl md:text-2xl font-bold text-blue-800">4.8%</p>
                    <p className="text-green-600 text-xs">+1.2%</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-xs md:text-sm text-green-600">تكلفة التحويل</p>
                    <p className="text-xl md:text-2xl font-bold text-green-800">34.5 ريال</p>
                    <p className="text-red-600 text-xs">-12%</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="text-xs md:text-sm text-purple-600">عائد الاستثمار</p>
                    <p className="text-xl md:text-2xl font-bold text-purple-800">3.2x</p>
                    <p className="text-green-600 text-xs">+0.8x</p>
                  </div>
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
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">مؤشرات النمو الشهرية</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="storeVisits"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                    name="زيارات المتجر"
                  />
                  <Line
                    type="monotone"
                    dataKey="onlineEngagement"
                    stroke="#E1306C"
                    strokeWidth={2}
                    dot={{ fill: '#E1306C', strokeWidth: 2, r: 4 }}
                    name="التفاعل الرقمي"
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
                      <h4 className="font-bold text-gray-800 text-sm md:text-base">تحسين الظهور المحلي</h4>
                      <p className="text-gray-600 text-xs md:text-sm">زيادة طلبات الاتجاهات على خرائط جوجل</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm md:text-base">زيادة التفاعل الرقمي</h4>
                      <p className="text-gray-600 text-xs md:text-sm">تحسين معدلات المشاركة على وسائل التواصل</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm md:text-base">تحسين كفاءة الإعلانات</h4>
                      <p className="text-gray-600 text-xs md:text-sm">خفض تكلفة التحويل وزيادة العائد</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">أهداف النمو</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs md:text-sm text-blue-600">زيارات المتجر</p>
                    <p className="text-lg md:text-xl font-bold text-blue-800">+50%</p>
                  </div>
                  <div className="p-3 bg-pink-50 rounded-lg">
                    <p className="text-xs md:text-sm text-pink-600">المتابعون</p>
                    <p className="text-lg md:text-xl font-bold text-pink-800">+60%</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-xs md:text-sm text-purple-600">التحويلات</p>
                    <p className="text-lg md:text-xl font-bold text-purple-800">+40%</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-xs md:text-sm text-green-600">عائد الاستثمار</p>
                    <p className="text-lg md:text-xl font-bold text-green-800">4x</p>
                  </div>
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
                  <h4 className="font-bold text-blue-800 mb-3">النتائج الرقمية</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center">
                      <TrendingUp className="w-5 h-5 ml-3" />
                      <span>+65% نمو في التفاعل</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="w-5 h-5 ml-3" />
                      <span>+55% متابعين جدد</span>
                    </li>
                    <li className="flex items-center">
                      <Share2 className="w-5 h-5 ml-3" />
                      <span>+45% مشاركات</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-3">النتائج المادية</h4>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-center">
                      <MapPin className="w-5 h-5 ml-3" />
                      <span>+42% زيارات المتجر</span>
                    </li>
                    <li className="flex items-center">
                      <DollarSign className="w-5 h-5 ml-3" />
                      <span>+35% زيادة في المبيعات</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowUpRight className="w-5 h-5 ml-3" />
                      <span>+38% تحويلات إعلانية</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-3">العلامة التجارية</h4>
                  <ul className="space-y-2 text-purple-700">
                    <li className="flex items-center">
                      <Heart className="w-5 h-5 ml-3" />
                      <span>زيادة الولاء المحلي</span>
                    </li>
                    <li className="flex items-center">
                      <MessageSquare className="w-5 h-5 ml-3" />
                      <span>تحسين سمعة المتجر</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="w-5 h-5 ml-3" />
                      <span>زيادة الوعي بالعلامة</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">الخطوات القادمة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">التوسع الرقمي</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <span>إطلاق حملات موسمية</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <span>تحسين استهداف TikTok</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <span>إضافة محتوى تعليمي</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">التجربة المادية</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <span>تحسين تجربة المتجر</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <span>برامج ولاء العملاء</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <span>أحداث وفعاليات خاصة</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-8 md:mt-12 py-4 text-sm md:text-base text-gray-500">
          <p>2025 المرسم الأول - لوحة متابعة التحول التسويقي الرقمي</p>
          <p>Mohamed Rabie - Business Strategy Consultant</p>
        </footer>
      </div>
    </div>
  );
};

export default AlMarsamAlAwalDashboard;