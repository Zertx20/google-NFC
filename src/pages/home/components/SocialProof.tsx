export default function SocialProof() {
  const testimonials = [
    {
      name: 'صاحب مقهى',
      business: 'مقهى',
      text: 'الزبائن يفهموها في ثواني، غير يقربو التليفون ويديرو تقييم في Google.',
      rating: 5,
      image: '/Closeup_portrait_of_202601240329.jpeg',
      icon: 'ri-cup-line',
    },
    {
      name: 'مطعم',
      business: 'مطعم',
      text: 'من نهار حطّيت الكارت على الطاولات، عدد التقييمات زاد بشكل واضح.',
      rating: 5,
      image: '/Portrait_of_a_202601240329.jpeg',
      icon: 'ri-restaurant-line',
    },
    {
      name: 'محل خدمات',
      business: 'محل خدمات',
      text: 'ساهلة بزاف وما تحتاج حتى تطبيق، حتى الناس الكبار عرفو يستعملوها.',
      rating: 5,
      image: '/Closeup_portrait_of_202601240336.jpeg',
      icon: 'ri-store-line',
    },
    {
      name: 'صاحب مشروع',
      business: 'مشروع تجاري',
      text: 'الكارت تخدم مليح، غير لازم تضبط رابط Google مرة وحدة وخلاص.',
      rating: 4,
      image: '/Portrait_of_a_202601240335.jpeg',
      icon: 'ri-briefcase-line',
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
