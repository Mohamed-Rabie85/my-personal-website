'use client';
import React, { useState } from 'react';
import { Target, Users, DollarSign, Briefcase, Package, Calendar, Gift, Brush, Lightbulb, Wrench, Heart } from 'lucide-react';

const PixelHDServicesDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Data for the dashboard based on the Pixel HD project document
  const coreObjectives = [
    { title: 'تحقيق إيرادات سريعة', description: 'من خلال عملاء Pixel HD الحاليين', icon: DollarSign, color: 'bg-green-500' },
    { title: 'بناء سابقة أعمال قوية', description: 'عبر تنفيذ مشاريع مع العملاء الأوائل', icon: Briefcase, color: 'bg-blue-500' },
    { title: 'توسيع قاعدة العملاء', description: 'جذب عملاء جدد باستراتيجيات واضحة', icon: Users, color: 'bg-purple-500' },
    { title: 'هيكلة مرنة وفعالة', description: 'لتقليل التكاليف الأولية وتحقيق الكفاءة', icon: Wrench, color: 'bg-orange-500' }
  ];

  const coreServices = [
    { name: 'تنظيم المناسبات والفعاليات', icon: Calendar, description: 'تخطيط، تنسيق، تنفيذ، وإدارة متكاملة.' },
    { name: 'خدمات التغليف والطباعة', icon: Package, description: 'عبوات مبتكرة ومطبوعات للحملات الكبيرة.' },
    { name: 'الهدايا الترويجية للشركات', icon: Gift, description: 'تصميم وتغليف هدايا راقية ومخصصة.' },
    { name: 'خدمات التصميم المتنوعة', icon: Brush, description: 'تصاميم إبداعية تلبي كافة الاحتياجات.' }
  ];

  const initialHumanResources = [
    { role: 'مصمم جرافيك', count: 2 },
    { role: 'مشرف إنتاج وجودة', count: 1 },
    { role: 'موظف مبيعات/تسويق', count: 2 },
    { role: 'مدير إداري', count: 1 },
    { role: 'سكرتارية/خدمة عملاء', count: 1 },
  ];

  const nextSteps = [
    { step: "تحديد هوية مستقلة للشركة", details: "مثل Elite Solutions، وتحديد قيمها الأساسية.", icon: Lightbulb },
    { step: "تحديد الهيكل الإداري وفريق العمل", details: "بمرونة لضمان الكفاءة وتقليل التكاليف.", icon: Users },
    { step: "وضع خطة تسويق واضحة", details: "تستفيد من موارد وقاعدة عملاء Pixel HD.", icon: Target },
    { step: "خطة تشغيل لأول 6 أشهر", details: "مع تحديد خطوات النمو التدريجي.", icon: Calendar },
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

  const CanvasCard = ({ title, items, icon: Icon }: { title: string; items: string[]; icon: React.ElementType }) => (
    <div className="bg-white p-4 rounded-lg shadow h-full">
      <div className="flex items-center mb-3">
        <Icon className="w-6 h-6 text-blue-600 ml-2" />
        <h4 className="font-bold text-gray-800">{title}</h4>
      </div>
      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-slate-200 p-4 md:p-6" dir="rtl">
      <div className="section-container">
        {/* Header */}
        <header className="mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="section-container text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Pixel HD - إطلاق شركة خدمات متكاملة
              </h1>
              <p className="text-sm md:text-xl text-gray-600 mt-1 md:mt-2">صياغة نموذج العمل والاحتياجات الأساسية للانطلاق</p>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex overflow-x-auto pb-2 mb-6 md:mb-8 gap-2 md:gap-4 bg-white p-2 rounded-lg md:rounded-xl shadow-sm">
          <TabButton id="overview" label="نظرة عامة" active={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="businessModel" label="نموذج العمل (Canvas)" active={activeTab === 'businessModel'} onClick={setActiveTab} />
          <TabButton id="needs" label="الاحتياجات وخطة الإطلاق" active={activeTab === 'needs'} onClick={setActiveTab} />
        </nav>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Core Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreObjectives.map((metric, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className={`${metric.color} p-3 rounded-full inline-block mb-3`}>
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{metric.title} </h3>
                  <p className="text-gray-600 text-sm mt-1">{metric.description}</p>
                </div>
              ))}
            </div>

            {/* Challenge & Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">التحدي الأساسي</h3>
                <div className="space-y-4 text-gray-700">
                  <p>استثمار الميزة التنافسية في قاعدة عملاء Pixel HD الحالية لإنشاء كيان تجاري جديد يقدم خدمات متكاملة (دعاية، تغليف، فعاليات)، مع الحاجة لتحقيق إيرادات سريعة وتحديد نموذج عمل وهيكلة فعالة للموارد.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">النهج الاستراتيجي</h3>
                <div className="space-y-4 text-gray-700">
                  <p>صياغة خدمات الشركة ونموذج العمل والاحتياجات الأساسية بالارتكاز على:</p>
                  <ul className="space-y-2 mr-4 list-disc">
                    <li>الاستفادة من الأصول القائمة (قاعدة عملاء Pixel HD).</li>
                    <li>تصميم نموذج عمل شامل (Business Model Canvas).</li>
                    <li>هيكلة الموارد بكفاءة لتقليل تكاليف البدء والمخاطر.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Services */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">الخدمات الأساسية المتكاملة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreServices.map((service, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg text-center border-t-4 border-blue-500">
                    <service.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800">{service.name} </h4>
                    <p className="text-xs text-gray-600 mt-1">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Business Model Canvas Tab */}
        {activeTab === 'businessModel' && (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">نموذج العمل (Business Model Canvas) </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Center Column */}
              <div className="space-y-4">
                <CanvasCard title="عرض القيمة" icon={Heart} items={['خدمات متكاملة (تصميم إلى تنفيذ)', 'مرونة والتزام بالمواعيد', 'حلول مخصصة وعلاقات طويلة الأمد', 'تصميمات إبداعية']} />
              </div>
              {/* Right Column */}
              <div className="space-y-4">
                <CanvasCard title="شرائح العملاء" icon={Users} items={['الشركات الكبيرة والمتوسطة', 'مصانع الأدوية والتجميل', 'الشركات الغذائية والمطاعم']} />
                <CanvasCard title="علاقات العملاء" icon={Briefcase} items={['خدمة عملاء احترافية', 'برامج ولاء وعروض ترويجية', 'علاقات شخصية وتقارير مفصلة']} />
              </div>
              {/* Left Column */}
              <div className="space-y-4">
                <CanvasCard title="الشراكات الرئيسية" icon={Users} items={['موردون في الطباعة والتغليف والفعاليات', 'شركات تصميم وإعلان وتسويق']} />
                <CanvasCard title="الأنشطة الرئيسية" icon={Wrench} items={['تخطيط وتنفيذ الفعاليات', 'خدمات تغليف وطباعة عالية الجودة', 'تطوير هدايا مبتكرة', 'إدارة الحملات التسويقية']} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <CanvasCard title="الموارد الرئيسية" icon={Package} items={['شبكة موردين مؤهلين', 'فريق عمل مؤهل', 'قاعدة عملاء Pixel HD', 'نظم إدارية وتقنية']} />
              <CanvasCard title="القنوات" icon={Target} items={['فريق مبيعات مباشر', 'وسائل التواصل وموقع إلكتروني', 'شبكة عملاء Pixel HD', 'شراكات ومعارض ومؤتمرات']} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-green-50 p-4 rounded-lg shadow">
                <h4 className="font-bold text-green-800 mb-2">مصادر الإيرادات</h4>
                <p className="text-sm text-green-700">عقود الفعاليات، مبيعات التغليف والمطبوعات، الهدايا الترويجية، والشراكات الاستراتيجية.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg shadow">
                <h4 className="font-bold text-red-800 mb-2">هيكل التكاليف</h4>
                <p className="text-sm text-red-700">تكاليف الموردين، رواتب التوظيف، تكاليف تشغيلية (تسويق، معدات)، واستثمارات في النظم الداخلية.</p>
              </div>
            </div>
          </div>
        )}

        {/* Needs & Launch Plan Tab */}
        {activeTab === 'needs' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">الاحتياجات الأساسية الأولية</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">الموارد البشرية (بمرونة) </h4>
                    <ul className="mt-2 space-y-2">
                      {initialHumanResources.map((item, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-50  p-2 rounded">
                          <span className='text-blue-900'>{item.role}</span>
                          <span className="font-bold text-blue-600">{item.count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mt-4">تجهيز المقر والتراخيص </h4>
                    <p className="text-sm text-gray-600">مكاتب، أجهزة كمبيوتر، برامج تصميم ومحاسبة، وتراخيص لازمة.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">تصور للخطوة القادمة وخطة الإطلاق</h3>
                <div className="space-y-4">
                  {nextSteps.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full ml-3">
                        <item.icon className="w-6 h-6 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{item.step} </h4>
                        <p className="text-sm text-gray-600">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>2023 Pixel HD - خطة تأسيس شركة الخدمات المتكاملة</p>
          <p>Mohamed Rabie - Business Strategy Consultant</p>
        </div>
      </div>
    </div>
  );
};

export default PixelHDServicesDashboard;