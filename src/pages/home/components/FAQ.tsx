import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'وش هي لوحة Google NFC وكيفاش تخدم؟',
      answer: 'لوحة Google NFC هي حل ذكي يستعمل تقنية NFC (الاتصال القريب بدون تماس). كي الزبون يقرب الهاتف من اللوحة، صفحة التقييم في Google تفتح مباشرة. بلا تطبيق، بلا تسجيل، بلا تعقيد. في 3 ثواني غير.',
    },
    {
      question: 'واش تخدم مع كل الهواتف؟',
      answer: 'إيه، تخدم مع كل الهواتف الذكية الحديثة اللي فيهم تقنية NFC. هذا يشمل كل هواتف iPhone من iPhone 7 وما فوق، وكل هواتف Android الحديثة. تقريبا 95% من الهواتف في الجزائر الآن فيهم NFC.',
    },
    {
      question: 'واش فيها اشتراك شهري؟',
      answer: 'لا، بالعكس! تدفع مرة وحدة غير وتستعملها طول العمر. بلا اشتراك شهري، بلا تكاليف خفية، بلا فلوس زايدة. دفعة واحدة وخلاص.',
    },
    {
      question: 'شحال من وقت تاخذ التوصيل؟',
      answer: 'التوصيل يكون في 48 إلى 72 ساعة لكل ولايات الجزائر. نوصلو لباب الدار أو Stop Desk على حسب اختيارك. التوصيل مضمون ومؤمن.',
    },
    {
      question: 'كيفاش نركبها؟',
      answer: 'سهلة بزاف! انزع الغلاف اللاصق من الخلفية، لصقها على الطابلة أو جدار أو البيرو في مكان واضح للزبائن، وخلاص. في 20 ثانية تكون جاهزة للاستعمال.',
    },
    {
      question: 'واش تزيد فعلا التقييمات؟',
      answer: 'إيه وبقوة! الإحصائيات تقول أن المشاريع اللي استعملت اللوحة زادت التقييمات تاعها بـ 250% في أقل من شهرين. الزبائن يحبو السهولة، وكي الأمور تكون سهلة، يكتبو التقييم مباشرة.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" dir="rtl">
            ❓ أسئلة متكررة
          </h2>
          <p className="text-lg text-gray-600" dir="rtl">
            كل حاجة تحب تعرفها على لوحة Google NFC
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-right hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="font-bold text-gray-900 text-lg pr-4 flex-1" dir="rtl">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-teal-50 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <i className="ri-arrow-down-s-line text-teal-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed" dir="rtl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-3" dir="rtl">
            مازال عندك أسئلة؟
          </h3>
          <p className="text-teal-50 mb-6" dir="rtl">
            فريقنا متاح 24/7 للإجابة على كل استفساراتك
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+213795651299"
              className="bg-white text-teal-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-50 transition-all shadow-lg whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
            >
              <i className="ri-phone-line text-xl w-5 h-5 flex items-center justify-center"></i>
              <span dir="rtl">اتصل بنا</span>
            </a>
            <button
              onClick={() => {
                const phoneNumber = '+213795651299';
                const message = encodeURIComponent('Bonjour, je suis intéressé(e) par la Plaque Avis Google NFC. Pouvez-vous me donner plus d\'informations ?');
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
              }}
              className="bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition-all shadow-lg whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
            >
              <i className="ri-whatsapp-line text-xl w-5 h-5 flex items-center justify-center"></i>
              <span dir="rtl">واتساب</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
