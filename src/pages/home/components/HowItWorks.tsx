export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'حط اللوحة على الطابلة',
      description: 'لصق اللوحة على الطابلة، الكاس أو البيرو تاعك في مكان واضح للزبائن.',
      icon: 'ri-store-2-line',
      image: '/Generate_a_realistic_202601210331.jpeg',
    },
    {
      number: '2',
      title: 'الزبون يقرب الهاتف',
      description: 'بعد الخدمة، قول للزبون يقرب الهاتف من اللوحة. بسيطة وسريعة.',
      icon: 'ri-smartphone-line',
      image: '/Generate_a_realistic_202601210337 (1).jpeg',
    },
    {
      number: '3',
      title: 'صفحة التقييم تفتح مباشرة',
      description: 'صفحة Google Review تفتح أوتوماتيكيا. الزبون يكتب التقييم ويخلصها.',
      icon: 'ri-star-smile-line',
      image: 'https://readdy.ai/api/search-image?query=Smartphone%20screen%20displaying%20Google%20review%20page%20interface%20five%20star%20rating%20system%20modern%20app%20interface%20clean%20design%20male%20business%20owner%20looking%20satisfied%20professional%20business%20environment%20positive%20customer%20experience%20realistic%20mobile%20display&width=600&height=400&seq=how-step-3&orientation=landscape',
    },
  ];

  return (
    <section 
      className="pt-0 pb-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.7), rgba(249, 250, 251, 0.7)), url('/whatsapp-bg-new.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" dir="rtl">
            كيفاش تخدم؟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" dir="rtl">
            3 خطوات بسيطة وتكون قاعد تجمع التقييمات
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="w-full h-80 bg-gray-100">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-xl">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 lg:p-10 border border-teal-100">
                  <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${step.icon} text-white text-2xl w-6 h-6 flex items-center justify-center`}></i>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4" dir="rtl">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed" dir="rtl">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Result Banner */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" dir="rtl">
              🚀 في أقل من دقيقة، الزبون يكتبلك تقييم
            </h3>
            <p className="text-gray-300 text-lg mb-6" dir="rtl">
              بلا تحميل التطبيقات، بلا تسجيل، بلا تعقيد
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-teal-400 mb-1">3 ثواني</div>
                <div className="text-sm text-gray-300" dir="rtl">وقت التقييم</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-teal-400 mb-1">بلا اشتراك</div>
                <div className="text-sm text-gray-300" dir="rtl">دفعة وحدة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-teal-400 mb-1">100%</div>
                <div className="text-sm text-gray-300" dir="rtl">توافق الهواتف</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
