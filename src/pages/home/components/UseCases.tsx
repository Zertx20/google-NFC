export default function UseCases() {
  const useCases = [
    {
      title: 'مطاعم و كافيهات',
      description: 'الزبون يكتب التقييم بعد الأكلة مباشرة وهو راضي. تزيد سمعة المطعم وتجيب زبائن جداد.',
      icon: 'ri-restaurant-2-line',
      image: 'https://readdy.ai/api/search-image?query=Modern%20elegant%20restaurant%20interior%20dining%20area%20with%20professional%20tables%20chairs%20ambient%20lighting%20NFC%20review%20plate%20on%20table%20male%20business%20owner%20in%20background%20authentic%20Algerian%20restaurant%20atmosphere%20warm%20welcoming%20environment%20realistic%20professional%20photography&width=700&height=500&seq=usecase-restaurant&orientation=landscape',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'محلات الهواتف',
      description: 'بعد البيع أو الإصلاح، الزبون يعطيك التقييم في ثواني. يزيد ثقة الزبائن الجداد.',
      icon: 'ri-smartphone-line',
      image: 'https://readdy.ai/api/search-image?query=Modern%20mobile%20phone%20shop%20interior%20display%20cases%20smartphones%20accessories%20tech%20products%20NFC%20review%20plate%20on%20counter%20male%20shop%20owner%20professional%20retail%20environment%20bright%20lighting%20organized%20space%20realistic%20professional%20photography&width=700&height=500&seq=usecase-phone&orientation=landscape',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'مقاهي',
      description: 'القهوة زينة والخدمة مليحة؟ الزبون يكتبلك تقييم 5 نجوم قبل ما يخرج من المقهى.',
      icon: 'ri-cup-line',
      image: 'https://readdy.ai/api/search-image?query=Cozy%20modern%20coffee%20shop%20interior%20caf%C3%A9%20tables%20chairs%20coffee%20bar%20espresso%20machine%20NFC%20review%20plate%20on%20table%20male%20barista%20in%20background%20warm%20atmosphere%20authentic%20Algerian%20caf%C3%A9%20style%20realistic%20professional%20photography&width=700&height=500&seq=usecase-cafe&orientation=landscape',
      color: 'from-amber-600 to-yellow-500',
    },
    {
      title: 'وكالات الخدمات',
      description: 'عقارات، سياحة، نقل... كل خدمة تخلصها، الزبون يكتبلك التقييم ويزيد مصداقيتك.',
      icon: 'ri-briefcase-4-line',
      image: 'https://readdy.ai/api/search-image?query=Professional%20modern%20business%20agency%20office%20interior%20reception%20desk%20workspace%20computers%20NFC%20review%20plate%20on%20counter%20male%20business%20consultant%20professional%20corporate%20environment%20bright%20clean%20organized%20realistic%20professional%20photography&width=700&height=500&seq=usecase-agency&orientation=landscape',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      title: 'كراجات السيارات',
      description: 'بعد الإصلاح، الزبون راضي ويكتبلك تقييم إيجابي. تزيد شهرة الكراج وتجيب خدمة أكثر.',
      icon: 'ri-car-line',
      image: 'https://readdy.ai/api/search-image?query=Professional%20auto%20repair%20garage%20interior%20mechanic%20workshop%20car%20lift%20tools%20equipment%20NFC%20review%20plate%20visible%20male%20mechanic%20working%20organized%20industrial%20space%20authentic%20Algerian%20garage%20realistic%20professional%20photography&width=700&height=500&seq=usecase-garage&orientation=landscape',
      color: 'from-gray-600 to-gray-800',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" dir="rtl">
            💼 مشاريع مختلفة، نتائج واحدة
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" dir="rtl">
            لوحة Google NFC تخدم مع كل أنواع المشاريع في الجزائر
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="w-full h-full bg-gray-100">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${useCase.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <i className={`${useCase.icon} text-white text-xl w-6 h-6 flex items-center justify-center`}></i>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3" dir="rtl">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" dir="rtl">
                  {useCase.description}
                </p>

                {/* Action Hint */}
                <div className="mt-4 flex items-center gap-2 text-teal-600 font-medium group-hover:gap-3 transition-all">
                  <span className="text-sm" dir="rtl">جرب المنتج</span>
                  <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3" dir="rtl">
              مشروعك ماشي في القائمة؟
            </h3>
            <p className="text-gray-600 mb-6" dir="rtl">
              لوحة Google NFC تخدم مع كل نوع خدمة أو مشروع. جربها اليوم!
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
            >
              <span dir="rtl">اطلبها الآن</span>
              <i className="ri-arrow-up-line text-xl w-5 h-5 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
