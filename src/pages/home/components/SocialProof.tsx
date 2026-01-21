export default function SocialProof() {
  const testimonials = [
    {
      name: 'أحمد - صاحب مطعم',
      business: 'مطعم البركة - الجزائر العاصمة',
      text: 'ساهلة على الزبائن وتزيد ثقتهم. من وقت ركبت اللوحة، التقييمات زادت بزاف والزبائن الجداد يجيو.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Algerian%20restaurant%20owner%20male%2035%20years%20old%20wearing%20chef%20uniform%20standing%20in%20modern%20restaurant%20interior%20smiling%20confident%20successful%20businessman%20authentic%20Middle%20Eastern%20features%20warm%20lighting%20realistic%20professional%20photography&width=400&height=400&seq=testimonial-1&orientation=squarish',
      icon: 'ri-restaurant-line',
    },
    {
      name: 'كريم - صاحب صالون حلاقة',
      business: 'Salon Elite - وهران',
      text: 'التقييمات زادت بعد ما ركبت اللوحة. الزبائن يكتبو التقييم قبل ما يخرجو. حاجة عملية بزاف.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Algerian%20barber%20male%2030%20years%20old%20wearing%20black%20barber%20apron%20standing%20in%20modern%20barbershop%20interior%20confident%20successful%20businessman%20Middle%20Eastern%20features%20clean%20professional%20environment%20realistic%20photography&width=400&height=400&seq=testimonial-2&orientation=squarish',
      icon: 'ri-scissors-line',
    },
    {
      name: 'رضا - صاحب محل هواتف',
      business: 'Phone Store - قسنطينة',
      text: 'منتج عملي ويوفرلي الوقت. بدل ما نقول للزبون كيفاش يدخل للصفحة، هو يقرب الهاتف وخلص.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Algerian%20mobile%20phone%20shop%20owner%20male%2028%20years%20old%20wearing%20casual%20business%20attire%20standing%20in%20modern%20tech%20store%20interior%20confident%20successful%20entrepreneur%20Middle%20Eastern%20features%20bright%20lighting%20realistic%20photography&width=400&height=400&seq=testimonial-3&orientation=squarish',
      icon: 'ri-smartphone-line',
    },
    {
      name: 'ياسين - صاحب مقهى',
      business: 'Café Moderne - عنابة',
      text: 'الزبائن يحبوها بزاف. سهلة وسريعة، وأنا نشوف التقييمات تزيد كل يوم. استثمار يستاهل.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Algerian%20caf%C3%A9%20owner%20male%2032%20years%20old%20wearing%20casual%20business%20attire%20standing%20in%20modern%20coffee%20shop%20interior%20smiling%20confident%20successful%20businessman%20Middle%20Eastern%20features%20cozy%20atmosphere%20realistic%20photography&width=400&height=400&seq=testimonial-4&orientation=squarish',
      icon: 'ri-cup-line',
    },
    {
      name: 'محمد - صاحب وكالة',
      business: 'Agence Premium - بجاية',
      text: 'احسن حاجة درتها للوكالة. الزبائن يكتبو التقييمات الإيجابية وهذا يجيبلي زبائن جداد.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Algerian%20business%20agency%20owner%20male%2040%20years%20old%20wearing%20elegant%20business%20suit%20standing%20in%20modern%20office%20interior%20confident%20successful%20businessman%20Middle%20Eastern%20features%20professional%20environment%20realistic%20photography&width=400&height=400&seq=testimonial-5&orientation=squarish',
      icon: 'ri-briefcase-line',
    },
    {
      name: 'عبد الرحمن - صاحب كراج',
      business: 'Garage Auto - سطيف',
      text: 'الزبائن راضيين بالخدمة ودبا يقدرو يكتبو التقييم في ثواني. مشروعي ولى معروف في المنطقة.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Algerian%20auto%20garage%20owner%20male%2038%20years%20old%20wearing%20mechanic%20work%20uniform%20standing%20in%20modern%20auto%20repair%20shop%20interior%20confident%20successful%20businessman%20Middle%20Eastern%20features%20industrial%20environment%20realistic%20photography&width=400&height=400&seq=testimonial-6&orientation=squarish',
      icon: 'ri-car-line',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" dir="rtl">
            🌟 شوفوا كيفاش المشاريع اللي ركبوها يزيدو في المبيعات!
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto" dir="rtl">
            أصحاب المشاريع في الجزائر يشاركو تجاربهم مع لوحة Google NFC
          </p>
        </div>

        {/* Statistics Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 text-center shadow-xl">
            <div className="text-5xl font-bold text-white mb-2">+250%</div>
            <div className="text-teal-100 font-medium" dir="rtl">زيادة في التقييمات</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-center shadow-xl">
            <div className="text-5xl font-bold text-white mb-2">5,000+</div>
            <div className="text-emerald-100 font-medium" dir="rtl">مشروع في الجزائر</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 text-center shadow-xl">
            <div className="text-5xl font-bold text-white mb-2">4.9⭐</div>
            <div className="text-cyan-100 font-medium" dir="rtl">تقييم المنتج</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
            >
              {/* Header with Image and Info */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1" dir="rtl">
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <i className={`${testimonial.icon} w-4 h-4 flex items-center justify-center`}></i>
                    <span>{testimonial.business}</span>
                  </div>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-amber-400 text-lg w-5 h-5 flex items-center justify-center"></i>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed" dir="rtl">
                "{testimonial.text}"
              </p>

              {/* Verified Badge */}
              <div className="mt-4 inline-flex items-center bg-teal-50 text-teal-600 px-3 py-1.5 rounded-full text-sm font-medium">
                <i className="ri-checkbox-circle-fill mr-1.5 w-4 h-4 flex items-center justify-center"></i>
                <span dir="rtl">زبون حقيقي</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
            <i className="ri-shield-check-line text-teal-400 text-2xl w-6 h-6 flex items-center justify-center"></i>
            <span className="text-white font-semibold text-lg" dir="rtl">
              كل التقييمات من زبائن حقيقيين استعملو المنتج
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
