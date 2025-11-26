import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SEO from "../components/SEO";
import {
  ShoppingCart,
  CreditCard,
  Check,
  ArrowLeft,
  Package,
  Mail,
  Sparkles,
  Star,
  Heart,
  Shield,
  AlertCircle,
  Loader,
} from "lucide-react";

const CheckoutPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Location state'den gelen data
  const { letterType, formData } = location.state || {};

  // Fiyat listesi
  const prices = {
    baseLetter: 50, // Temel mektup fiyatı
    addons: {
      flower: 50,
      sticker: 20,
      perfume: 75,
      "wax-seal": 40,
    },
  };

  const addonNames = {
    flower: "Çiçek",
    sticker: "Sticker",
    perfume: "Parfüm",
    "wax-seal": "Mum Mühür",
  };

  const addonIcons = {
    flower: Sparkles,
    sticker: Star,
    perfume: Heart,
    "wax-seal": Shield,
  };

  // Redirect if no data
  useEffect(() => {
    if (!letterType || !formData) {
      navigate("/dashboard");
    }
  }, [letterType, formData, navigate]);

  // Toplam hesapla
  const calculateTotal = () => {
    let total = prices.baseLetter;
    
    if (formData?.addons) {
      formData.addons.forEach((addonId) => {
        total += prices.addons[addonId] || 0;
      });
    }
    
    return total;
  };

  const handlePayment = async () => {
    setLoading(true);

    // Dummy ödeme işlemi (3 saniye bekle)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setLoading(false);
    setPaymentSuccess(true);

    // 2 saniye sonra dashboard'a yönlendir
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  if (!formData) {
    return null;
  }

  const letterTypeNames = {
    love: "Sevgiliye Mektup",
    future: "Geleceğe Mektup",
  };

  return (
    <>
      <SEO
        title="Ödeme | MektupYolla"
        description="Siparişinizi tamamlayın"
        canonical="https://mektupyolla.com/checkout"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Geri Dön</span>
              </button>

              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Sipariş Özeti
                </h1>
              </div>

              <Link
                to="/dashboard"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {!paymentSuccess ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sipariş Özeti - Sol Taraf */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Mektup Tipi */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-primary-600" />
                      Mektup Detayları
                    </h2>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-400">
                          Mektup Tipi
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {letterTypeNames[letterType]}
                        </span>
                      </div>

                      <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-400">
                          Zarf
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white capitalize">
                          {formData.envelope} Zarf
                        </span>
                      </div>

                      <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-400">
                          Sayfa Rengi
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white capitalize">
                          {formData.paperColor}
                        </span>
                      </div>

                      {formData.envelopeText && (
                        <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-600 dark:text-gray-400">
                            Zarf Üzerine Yazı
                          </span>
                          <span
                            className="font-semibold text-gray-900 dark:text-white italic"
                            style={{ fontFamily: "'Caveat', cursive" }}
                          >
                            "{formData.envelopeText}"
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">
                          Alıcı
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {formData.recipient.firstName}{" "}
                          {formData.recipient.lastName}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Ekstra Özellikler */}
                  {formData.addons && formData.addons.length > 0 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Package className="w-5 h-5 mr-2 text-purple-600" />
                        Ekstra Özellikler
                      </h2>

                      <div className="space-y-3">
                        {formData.addons.map((addonId) => {
                          const Icon = addonIcons[addonId];
                          return (
                            <div
                              key={addonId}
                              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <span className="font-medium text-gray-900 dark:text-white">
                                  {addonNames[addonId]}
                                </span>
                              </div>
                              <span className="font-bold text-gray-900 dark:text-white">
                                {prices.addons[addonId]}₺
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Ödeme Bilgileri */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-green-600" />
                      Ödeme Bilgileri
                    </h2>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-yellow-800 dark:text-yellow-300">
                          Bu bir demo ödeme sayfasıdır. Gerçek ödeme işlemi
                          yapılmayacaktır.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Kart Numarası
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          disabled={loading}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Son Kullanma
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            disabled={loading}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            disabled={loading}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Kart Üzerindeki İsim
                        </label>
                        <input
                          type="text"
                          placeholder="AD SOYAD"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fiyat Özeti - Sağ Taraf */}
                <div className="lg:col-span-1">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Fiyat Özeti
                    </h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">
                          Temel Mektup
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {prices.baseLetter}₺
                        </span>
                      </div>

                      {formData.addons &&
                        formData.addons.map((addonId) => (
                          <div
                            key={addonId}
                            className="flex justify-between items-center"
                          >
                            <span className="text-gray-600 dark:text-gray-400">
                              {addonNames[addonId]}
                            </span>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {prices.addons[addonId]}₺
                            </span>
                          </div>
                        ))}

                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-900 dark:text-white">
                            Toplam
                          </span>
                          <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                            {calculateTotal()}₺
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handlePayment}
                      disabled={loading}
                      className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          <span>İşleniyor...</span>
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" />
                          <span>Ödemeyi Tamamla</span>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                      Ödemeniz güvenli bir şekilde işlenir
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Başarı Mesajı */
              <div className="max-w-md mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Ödeme Başarılı!
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Siparişiniz alındı. Mektubunuz en kısa sürede hazırlanıp
                    gönderilecektir.
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Sipariş No
                    </p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      #MKT-{Math.floor(Math.random() * 100000)}
                    </p>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dashboard'a yönlendiriliyorsunuz...
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default CheckoutPage;
