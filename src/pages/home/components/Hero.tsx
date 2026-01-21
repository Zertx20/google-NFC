import { useState, useEffect } from 'react';
import OrderForm from './OrderForm';

export default function Hero() {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFloatingBar, setShowFloatingBar] = useState(true);

  const productImages = [
    '/product-image-2.jpg',
    '/product-image-3.jpg',
    'https://static.readdy.ai/image/23c802d7f9313d983d4e57c3b073a22a/a6d6811163bcc17336b1418e22ff5673.jpeg',
    '/product-image-4.jpg',
  ];

  const pricingOptions = [
    { qty: 1, price: 3800, oldPrice: 5000, discount: '-24%', label: '1 plaque' },
    { qty: 2, price: 7400, oldPrice: 10000, discount: '-26%', label: '2 plaques' },
    { qty: 3, price: 10500, oldPrice: 15000, discount: '-30%', label: '3 plaques' },
    { qty: 4, price: 13000, oldPrice: 20000, discount: '-35%', label: '4 plaques' },
    { qty: 5, price: 16000, oldPrice: 25000, discount: '-36%', label: '5 plaques personnalisées (logo)' },
  ];

  const selectedOption = pricingOptions.find(opt => opt.qty === selectedQuantity) || pricingOptions[0];

  useEffect(() => {
    const handleScroll = () => {
      const orderFormSection = document.getElementById('order-form-section');
      if (orderFormSection) {
        const rect = orderFormSection.getBoundingClientRect();
        // Hide bar when form is visible on screen
        setShowFloatingBar(rect.top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const scrollToOrderForm = () => {
    const orderFormElement = document.getElementById('order-form-section');
    if (orderFormElement) {
      orderFormElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-white">
      {/* Mobile Layout - Image Carousel First */}
      <div className="lg:hidden">
        {/* Image Carousel */}
        <div className="relative w-full bg-gray-50">
          <div className="relative w-full aspect-square overflow-hidden">
            <img 
              src={productImages[currentImageIndex]} 
              alt={`Plaque Avis Google NFC - Digifeel vue ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
            
            {/* Carousel Navigation */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all z-10"
              aria-label="Image précédente"
            >
              <i className="ri-arrow-left-s-line text-gray-900 text-xl w-6 h-6 flex items-center justify-center"></i>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all z-10"
              aria-label="Image suivante"
            >
              <i className="ri-arrow-right-s-line text-gray-900 text-xl w-6 h-6 flex items-center justify-center"></i>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {productImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentImageIndex ? 'bg-teal-600 w-6' : 'bg-white/60'
                  }`}
                  aria-label={`Voir image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Info - Mobile */}
        <div className="px-4 py-6 pb-32">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-block bg-teal-50 text-teal-600 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
              Nouvelle Collection
            </span>
            <div className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-full">
              <i className="ri-star-fill text-amber-400 text-base w-4 h-4 flex items-center justify-center"></i>
              <span className="text-sm font-bold text-gray-900">4.9</span>
              <span className="text-xs text-gray-600">(148 avis)</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Plaque connectée NFC
          </h1>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-4 mb-4 border border-teal-100">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-3xl font-bold text-gray-900">{selectedOption.price.toLocaleString()} DZD</span>
              <span className="text-lg text-gray-400 line-through">{selectedOption.oldPrice.toLocaleString()} DZD</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">TOTAL À PAYER:</span>
              <span className="text-2xl font-bold text-teal-600">{selectedOption.price.toLocaleString()} DZD</span>
            </div>
            <div className="mt-3 inline-flex items-center bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm font-semibold">
              <i className="ri-check-line mr-1.5 w-4 h-4 flex items-center justify-center"></i>
              Économisez {(selectedOption.oldPrice - selectedOption.price).toLocaleString()} DZD ({selectedOption.discount})
            </div>
          </div>

          {/* Trust Badges - Mobile */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <i className="ri-shield-check-line text-teal-600 text-xl mb-1.5 w-5 h-5 flex items-center justify-center mx-auto"></i>
              <p className="text-xs text-gray-600 font-medium">Paiement sécurisé</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <i className="ri-truck-line text-teal-600 text-xl mb-1.5 w-5 h-5 flex items-center justify-center mx-auto"></i>
              <p className="text-xs text-gray-600 font-medium">Livraison 48h-72h</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <i className="ri-customer-service-2-line text-teal-600 text-xl mb-1.5 w-5 h-5 flex items-center justify-center mx-auto"></i>
              <p className="text-xs text-gray-600 font-medium">Support 24/7</p>
            </div>
          </div>
        </div>

        {/* Floating Bottom Bar - Mobile Only (like a shopping app) */}
        {showFloatingBar && (
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 transition-all">
            <div className="flex items-center justify-between px-4 py-4 gap-4">
              {/* Left Side - Price Info */}
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-2xl font-bold text-gray-900">{selectedOption.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-900">DZD</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">TOTAL À PAYER</p>
                <p className="text-xs text-green-600 font-semibold mt-0.5">
                  Économisez {(selectedOption.oldPrice - selectedOption.price).toLocaleString()} DZD
                </p>
              </div>

              {/* Right Side - Commander Button */}
              <button
                onClick={scrollToOrderForm}
                className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full shadow-lg whitespace-nowrap cursor-pointer flex items-center gap-2 transition-all"
              >
                <span className="text-base">Commander</span>
                <i className="ri-arrow-down-line text-lg w-5 h-5 flex items-center justify-center"></i>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout - Original Side by Side */}
      <div className="hidden lg:block py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Product Gallery - Desktop */}
          <div className="w-full">
            <div className="sticky top-8">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <img 
                  src={productImages[currentImageIndex]} 
                  alt="Plaque Avis Google NFC - Digifeel pour collecter des avis clients avec technologie NFC sans contact"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="mt-6 grid grid-cols-4 gap-3">
                {productImages.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setCurrentImageIndex(i)}
                    className={`bg-gray-50 rounded-lg p-3 cursor-pointer transition-all ${
                      currentImageIndex === i ? 'ring-2 ring-teal-500' : 'hover:ring-2 hover:ring-gray-300'
                    }`}
                  >
                    <img 
                      src={img}
                      alt={`Vue ${i + 1} de la plaque avis Google NFC`}
                      className="w-full h-auto object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info - Desktop */}
          <div className="w-full">
            <div className="mb-4">
              <span className="inline-block bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-medium">
                Nouvelle Collection
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plaque Avis Google NFC
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-amber-400 text-lg w-5 h-5 flex items-center justify-center"></i>
                ))}
                <span className="text-gray-700 font-medium">4.9</span>
              </div>
              <span className="text-gray-500">(148 avis)</span>
            </div>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-bold text-gray-900">{selectedOption.price.toLocaleString()} DZD</span>
              <span className="text-xl text-gray-400 line-through">{selectedOption.oldPrice.toLocaleString()} DZD</span>
              <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                Économisez {(selectedOption.oldPrice - selectedOption.price).toLocaleString()} DZD ({selectedOption.discount})
              </span>
            </div>

            {/* Quantity Options - Desktop */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Choisissez votre option</h3>
              <div className="space-y-3">
                {pricingOptions.map((option) => (
                  <div
                    key={option.qty}
                    onClick={() => setSelectedQuantity(option.qty)}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      selectedQuantity === option.qty
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedQuantity === option.qty
                            ? 'border-teal-500 bg-teal-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedQuantity === option.qty && (
                            <i className="ri-check-line text-white text-sm w-4 h-4 flex items-center justify-center"></i>
                          )}
                        </div>
                        <span className="font-medium text-gray-900">{option.label}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-gray-900">{option.price.toLocaleString()} DZD</span>
                        <span className="ml-3 text-sm text-teal-600 font-medium">{option.discount}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Form - Desktop */}
            <OrderForm selectedPrice={selectedOption.price} selectedQuantity={selectedQuantity} />

            {/* Trust Badges - Desktop */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <i className="ri-shield-check-line text-teal-600 text-2xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
                <p className="text-xs text-gray-600 font-medium">Paiement sécurisé</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <i className="ri-truck-line text-teal-600 text-2xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
                <p className="text-xs text-gray-600 font-medium">Livraison 48h-72h</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <i className="ri-customer-service-2-line text-teal-600 text-2xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
                <p className="text-xs text-gray-600 font-medium">Support 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Form Section - Mobile (scrolled to from button) */}
      <div id="order-form-section" className="lg:hidden px-4 pb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Complétez votre commande</h2>
        
        {/* Quantity Options - Mobile */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Choisissez votre option</h3>
          <div className="space-y-3">
            {pricingOptions.map((option) => (
              <div
                key={option.qty}
                onClick={() => setSelectedQuantity(option.qty)}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedQuantity === option.qty
                    ? 'border-teal-500 bg-teal-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedQuantity === option.qty
                        ? 'border-teal-500 bg-teal-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedQuantity === option.qty && (
                        <i className="ri-check-line text-white text-sm w-4 h-4 flex items-center justify-center"></i>
                      )}
                    </div>
                    <span className="font-medium text-gray-900">{option.label}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-900">{option.price.toLocaleString()} DZD</span>
                    <span className="ml-2 text-sm text-teal-600 font-medium">{option.discount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <OrderForm selectedPrice={selectedOption.price} selectedQuantity={selectedQuantity} />
      </div>
    </section>
  );
}
