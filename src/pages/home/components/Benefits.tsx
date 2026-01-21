export default function Benefits() {
  const benefits = [
    {
      icon: 'ri-time-line',
      title: 'جمع التقييمات في 3 ثواني',
      description: 'الزبون يكتب التقييم غير بقرب الهاتف. بلا تطبيق، بلا تعقيد.',
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'بلا اشتراك شهري',
      description: 'دفعة وحدة غير. تستعملها طول العمر بلا ما تخلص كل شهر.',
    },
    {
      icon: 'ri-eye-line',
      title: 'ترفع ترتيبك في Google',
      description: 'كي يزيدو التقييمات الإيجابية، مشروعك يظهر الأول في البحث ويجيبلك زبائن جداد.',
    },
    {
      icon: 'ri-smartphone-line',
      title: 'تخدم مع جميع الهواتف',
      description: 'كل الهواتف Android و iPhone الجديدة اللي فيهم NFC تخدم عادي.',
    },
    {
      icon: 'ri-flashlight-line',
      title: 'إعداد في 20 ثانية غير',
      description: 'حوس الفيلم الواقي، لصقها وخلصتي. جاهزة للاستعمال.',
    },
    {
      icon: 'ri-palette-line',
      title: 'تصميم راقي',
      description: 'شكل بريميوم للطابلة، الكاس أو البيرو. يتناسب مليح مع أي مكان.',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/WhatsApp Image 2026-01-19 at 13.46.23.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" dir="rtl">
            ✨ وش هي لوحة Google NFC؟
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" dir="rtl">
            لوحة ذكية تخلي الزبون يفتح صفحة التقييم في Google غير بقرب الهاتف، بلا تطبيق، بلا تعقيد.
            حل بسيط وسريع يزيدلك التقييمات الإيجابية ويقوي سمعة مشروعك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                <i className={`${benefit.icon} text-teal-600 text-2xl w-6 h-6 flex items-center justify-center`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" dir="rtl">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed" dir="rtl">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
