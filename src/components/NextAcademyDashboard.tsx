'use client';
import * as React from 'react';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { BrainCircuit, Target, TrendingUp, Users, Lightbulb, Award, DollarSign, Share2, Rocket, Puzzle } from 'lucide-react';

const NextAcademyDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Data for charts adapted for Next Academy
  const audienceSegments = [
    { name: 'الحالمون والمستكشفون', percentage: 35, color: '#8884d8' },
    { name: 'رواد الأعمال المبتدئون', percentage: 30, color: '#82ca9d' },
    { name: 'أصحاب المشاريع الصغيرة', percentage: 25, color: '#ffc658' },
    { name: 'الموظفون المستكشفون', percentage: 10, color: '#ff8042' }
  ];

  const contentStrategyMix = [
    { name: 'فيديوهات قصيرة (Reels/TikTok)', engagement: 9.5, color: '#E1306C' },
    { name: 'مقالات (SEO)', engagement: 7.8, color: '#4285F4' },
    { name: 'بودكاست', engagement: 8.2, color: '#9333ea' },
    { name: 'ورش عمل مجانية', engagement: 9.1, color: '#1DB954' },
    { name: 'فيديوهات يوتيوب', engagement: 8.8, color: '#FF0000' }
  ];

  const leadMagnetEffectiveness = [
    { name: 'دورات مصغرة', conversionRate: 15, color: '#3b82f6' },
    { name: 'تحديات ريادية', conversionRate: 12, color: '#10b981' },
    { name: 'أدلة PDF', conversionRate: 8, color: '#f97316' },
    { name: 'ورش عمل', conversionRate: 18, color: '#8b5cf6' },
  ];

  const leadGrowthProjection = [
    { month: 'الشهر 1', leads: 500 },
    { month: 'الشهر 2', leads: 1200 },
    { month: 'الشهر 3', leads: 2500 },
    { month: 'الشهر 4', leads: 4500 },
    { month: 'الشهر 5', leads: 7000 },
    { month: 'الشهر 6', leads: 10000 },
  ];

  const kpiMetrics = [
    { title: 'العملاء المحتملون (Leads)', value: '+10,000', change: 'متوقع في 6 أشهر', icon: Users, color: 'bg-purple-500' },
    { title: 'معدل التحويل', value: '5%', change: 'من Lead إلى طالب', icon: Target, color: 'bg-green-500' },
    { title: 'الوصول الشهري', value: '+100k', change: 'عبر كل المنصات', icon: TrendingUp, color: 'bg-blue-500' },
    { title: 'الإيرادات المتوقعة', value: 'مستدامة', change: 'مصادر متنوعة', icon: DollarSign, color: 'bg-orange-500' }
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
    <section className="w-full bg-[var(--foreground)] py-12 md:py-16">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6" dir="rtl">
        <div className="section-container">
          {/* Header */}
          <header className="mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="section-container text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Next Academy
                </h1>
                <p className="text-sm md:text-xl text-gray-600 mt-1 md:mt-2">قيادة التأسيس والنمو لأكاديمية ريادة أعمال رقمية رائدة</p>
              </div>
            </div>
          </header>

          {/* Navigation Tabs */}
          <nav className="flex overflow-x-auto pb-2 mb-6 md:mb-8 gap-2 md:gap-4 bg-white p-2 rounded-lg md:rounded-xl shadow-sm">
            <TabButton id="overview" label="نظرة عامة" active={activeTab === 'overview'} onClick={setActiveTab} />
            <TabButton id="audience" label="تحليل الجمهور" active={activeTab === 'audience'} onClick={setActiveTab} />
            <TabButton id="strategy" label="الاستراتيجية التسويقية" active={activeTab === 'strategy'} onClick={setActiveTab} />
            <TabButton id="business" label="نموذج العمل" active={activeTab === 'business'} onClick={setActiveTab} />
            <TabButton id="results" label="النتائج والتوسع" active={activeTab === 'results'} onClick={setActiveTab} />
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
                        <p className="text-purple-600 text-sm mt-1">{metric.change}</p>
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
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">حل مشكلات معقدة</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• تأسيس كيان تعليمي من الصفر </li>
                    <li>• تصميم برامج ومسارات نمو فعالة </li>
                    <li>• مواجهة سوق تنافسي مكتظ </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">تحول تسويقي</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• استراتيجيات تسويق رقمي شاملة </li>
                    <li>• جذب وتأهيل العملاء المحتملين </li>
                    <li>• بناء الثقة مع جمهور متنوع </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-6 border border-teal-200">
                  <h3 className="text-xl font-bold text-teal-800 mb-4">بناء أصول رقمية وتقنية</h3>
                  <ul className="space-y-2 text-teal-700">
                    <li>• تطوير محتوى رقمي متنوع </li>
                    <li>• إطلاق بودكاست وفيديوهات </li>
                    <li>• التخطيط لمنصة تعليمية خاصة </li>
                  </ul>
                </div>
              </div>

              {/* Challenge & Approach */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">التحدي الأساسي</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>إطلاق أكاديمية رقمية جديدة (Next Academy) في سوق ريادة الأعمال المكتظ، بهدف تمكين الشباب العربي من خلال: </p>
                    <ul className="space-y-2 mr-4">
                      <li>• تصميم دورات تعليمية عملية ومبتكرة</li>
                      <li>• فهم عميق لجمهور مستهدف شديد التنوع وجذبهم</li>
                      <li>• بناء الثقة وتحويل المهتمين إلى طلاب ملتزمين</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">النهج الاستراتيجي القائم على الرؤى</h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center mb-3">
                      <BrainCircuit className="w-5 h-5 text-purple-600 ml-3" />
                      <span className="font-medium">التحليل العميق للجمهور وتقسيمه لشرائح دقيقة </span>
                    </div>
                    <div className="flex items-center mb-3">
                      <Award className="w-5 h-5 text-blue-600 ml-3" />
                      <span className="font-medium">تصميم عرض قيمة مخصص يلبي الاحتياجات </span>
                    </div>
                    <div className="flex items-center mb-3">
                      <Puzzle className="w-5 h-5 text-teal-600 ml-3" />
                      <span className="font-medium">استراتيجية تسويق متكاملة (محتوى، إعلانات، شراكات) </span>
                    </div>
                    <div className="flex items-center">
                      <Share2 className="w-5 h-5 text-orange-600 ml-3" />
                      <span className="font-medium">بناء مجتمع تعليمي داعم لتبادل الخبرات </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Audience Tab */}
          {activeTab === 'audience' && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">جوهر تصميم الرؤى: فهم الجمهور</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">قمت بتقسيم الجمهور (الشباب العربي 18-30 سنة) إلى 4 شرائح رئيسية وشرائح فرعية دقيقة لفهم الدوافع، الاحتياجات، والسلوكيات، مما مكّن من تصميم رسائل وعروض قيمة مخصصة. </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">الشرائح الرئيسية للجمهور</h3>
                  <ResponsiveContainer width="100%" height={250} >
                    <PieChart>
                      <Pie data={audienceSegments} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="percentage" label>
                        {audienceSegments.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">تفاصيل الشرائح الرئيسية</h3>
                  <div className="space-y-4">
                    {audienceSegments.map((segment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-4 h-4 rounded-full ml-3" style={{ backgroundColor: segment.color }}></div>
                          <span className="font-medium text-sm text-blue-900">{segment.name}</span>
                        </div>
                        <span className="text-lg font-bold" style={{ color: segment.color }}>{segment.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Target Demographics */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">الشرائح الفرعية الدقيقة (أمثلة)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                  <div className="p-3 bg-indigo-50 rounded-lg"><p className="text-sm font-medium text-indigo-800">الباحثون عن العملاء</p></div>
                  <div className="p-3 bg-green-50 rounded-lg"><p className="text-sm font-medium text-green-800">المنظمون للمالية</p></div>
                  <div className="p-3 bg-rose-50 rounded-lg"><p className="text-sm font-medium text-rose-800">صناع المحتوى</p></div>
                  <div className="p-3 bg-amber-50 rounded-lg"><p className="text-sm font-medium text-amber-800">مهتمو التجارة الإلكترونية</p></div>
                  <div className="p-3 bg-sky-50 rounded-lg"><p className="text-sm font-medium text-sky-800">الباحثون عن تمويل</p></div>
                </div>
              </div>
            </div>
          )}

          {/* Marketing Strategy Tab */}
          {activeTab === 'strategy' && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">استراتيجية تسويقية متكاملة ومبتكرة</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">دمجت بين التسويق بالمحتوى عالي القيمة، الإعلانات المدفوعة الموجهة، والشراكات الاستراتيجية، مع التركيز على Lead Magnets مبتكرة لجذب وتأهيل العملاء المحتملين. </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">مزيج استراتيجية المحتوى</h3>
                  <ResponsiveContainer width="100%" height={300} className="text-blue-900">
                    <BarChart data={contentStrategyMix} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={150} />
                      <Tooltip />
                      <Bar dataKey="engagement" name="مؤشر التفاعل المتوقع">
                        {contentStrategyMix.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">فعالية آليات جذب العملاء (Lead Magnets)</h3>
                  <ResponsiveContainer width="100%" height={300} className="text-blue-900">
                    <BarChart data={leadMagnetEffectiveness}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Bar dataKey="conversionRate" name="معدل التحويل المتوقع" radius={[4, 4, 0, 0]}>
                        {leadMagnetEffectiveness.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              {/* Revenue Strategy */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">قنوات التسويق والإعلان</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                  <div className="p-4 bg-gray-100 text-blue-900 rounded-lg">Facebook</div>
                  <div className="p-4 bg-gray-100 text-blue-900 rounded-lg">Instagram</div>
                  <div className="p-4 bg-gray-100 text-blue-900 rounded-lg">TikTok</div>
                  <div className="p-4 bg-gray-100 text-blue-900 rounded-lg">LinkedIn</div>
                  <div className="p-4 bg-gray-100 text-blue-900 rounded-lg">Google</div>
                  <div className="p-4 bg-gray-100 text-blue-900 rounded-lg">YouTube</div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">استهداف دقيق للفئات العمرية والاهتمامات والدول (مصر، الخليج، المغرب العربي). </p>
              </div>
            </div>
          )}

          {/* Business Model Tab */}
          {activeTab === 'business' && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">نموذج العمل (Business Model Canvas)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Column 1 */}
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">الشراكات الرئيسية</h4>
                      <ul className="text-sm text-blue-700 list-disc list-inside">
                        <li>مؤثرون، حاضنات أعمال </li>
                        <li>جامعات، منصات تعليمية </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">الأنشطة الرئيسية</h4>
                      <ul className="text-sm text-blue-700 list-disc list-inside">
                        <li>إنتاج محتوى تعليمي </li>
                        <li>حملات تسويقية </li>
                        <li>بناء مجتمع </li>
                      </ul>
                    </div>
                  </div>
                  {/* Column 2 */}
                  <div className="space-y-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2">عرض القيمة</h4>
                      <ul className="text-sm text-green-700 list-disc list-inside">
                        <li>تعليم عملي تطبيقي </li>
                        <li>مجتمع دعم وتفاعل </li>
                        <li>أسعار مرنة </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2">علاقات العملاء</h4>
                      <ul className="text-sm text-green-700 list-disc list-inside">
                        <li>متابعة عبر WhatsApp </li>
                        <li>محتوى حصري (بريد) </li>
                      </ul>
                    </div>
                  </div>
                  {/* Column 3 */}
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2">شرائح العملاء</h4>
                      <ul className="text-sm text-purple-700 list-disc list-inside">
                        <li>الحالمون والمستكشفون </li>
                        <li>رواد الأعمال المبتدئون </li>
                        <li>أصحاب المشاريع الصغيرة </li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2">القنوات</h4>
                      <ul className="text-sm text-purple-700 list-disc list-inside">
                        <li>وسائل التواصل الاجتماعي </li>
                        <li>بودكاست، يوتيوب، مدونة </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-800 mb-2">مصادر الإيرادات</h4>
                    <p className="text-sm text-orange-700">بيع دورات فردية، اشتراكات شهرية، استشارات، برامج مخصصة للشركات. </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-2">هيكل التكاليف</h4>
                    <p className="text-sm text-red-700">تكاليف التسويق والإعلانات، تطوير المحتوى، أجور المدربين، تكاليف المنصات التقنية.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results & Expansion Tab */}
          {activeTab === 'results' && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">النتائج الملموسة المتوقعة</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                    <h4 className="font-bold text-purple-800 mb-4">نمو القاعدة الجماهيرية</h4>
                    <ul className="space-y-3 text-purple-700">
                      <li className="flex items-center"><Users className="w-5 h-5 ml-3" /><span>نمو كبير في العملاء المحتملين </span></li>
                      <li className="flex items-center"><TrendingUp className="w-5 h-5 ml-3" /><span>زيادة معدلات التسجيل والتحويل </span></li>
                      <li className="flex items-center"><Share2 className="w-5 h-5 ml-3" /><span>بناء مجتمع طلابي قوي ونشط </span></li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-4">ترسيخ العلامة التجارية</h4>
                    <ul className="space-y-3 text-blue-700">
                      <li className="flex items-center"><Award className="w-5 h-5 ml-3" /><span>أكاديمية رائدة في الوطن العربي </span></li>
                      <li className="flex items-center"><Lightbulb className="w-5 h-5 ml-3" /><span>قيادة فكرية في ريادة الأعمال </span></li>
                      <li className="flex items-center"><Target className="w-5 h-5 ml-3" /><span>زيادة الوعي والوصول للشباب </span></li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-800 mb-4">الأثر المالي والاجتماعي</h4>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-center"><DollarSign className="w-5 h-5 ml-3" /><span>تحقيق إيرادات مستدامة ومتنوعة </span></li>
                      <li className="flex items-center"><BrainCircuit className="w-5 h-5 ml-3" /><span>تمكين آلاف الشباب العربي </span></li>
                      <li className="flex items-center"><Rocket className="w-5 h-5 ml-3" /><span>تزويدهم بمهارات عملية للنجاح </span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">توقعات نمو قاعدة العملاء المحتملين</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={leadGrowthProjection}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="leads" stroke="#8884d8" fill="#8884d8" name="العملاء المحتملون" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">خطط التوسع المستقبلية</h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <Rocket className="w-6 h-6 text-purple-600 ml-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-800">إضافة تخصصات جديدة</h4>
                        <p className="text-gray-600 text-sm">التجارة الإلكترونية، الذكاء الاصطناعي للتسويق. </p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <Target className="w-6 h-6 text-blue-600 ml-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-800">استهداف أسواق جديدة</h4>
                        <p className="text-gray-600 text-sm">التوسع في مناطق جغرافية جديدة بالوطن العربي. </p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <Puzzle className="w-6 h-6 text-teal-600 ml-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-800">تطوير منصة تعليمية خاصة</h4>
                        <p className="text-gray-600 text-sm">بناء منصة خاصة لتعزيز تجربة المستخدم وجمع البيانات. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-12 text-center text-gray-500">
            <p>2025 Next Academy - قيادة التأسيس والنمو الاستراتيجي</p>
            <p>Mohamed Rabie - Business Strategy Consultant</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextAcademyDashboard;