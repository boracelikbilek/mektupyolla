import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SEO from "../components/SEO";
import {
  Calendar,
  Mail,
  Palette,
  Gift,
  User,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  Clock,
  Heart,
  Star,
  Shield,
} from "lucide-react";

const CreateFutureLetterPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    envelope: "",
    paperColor: "",
    addons: [],
    recipient: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
    },
    letterContent: "",
    deliveryDate: "",
  });

  // Supabase Storage URL'leri (Placeholder'lar - gerçek görselleri yükledikten sonra değişecek)
  const envelopes = [
    {
      id: "kraft",
      name: "Kraft Zarf",
      image: "https://placehold.co/400x300/e8d7c3/8b4513?text=Kraft+Zarf",
      description: "Doğal ve şık",
    },
    {
      id: "pink",
      name: "Pembe Zarf",
      image: "https://placehold.co/400x300/ffc0cb/c71585?text=Pembe+Zarf",
      description: "Romantik ve sevgi dolu",
    },
    {
      id: "blue",
      name: "Mavi Zarf",
      image: "https://placehold.co/400x300/87ceeb/4169e1?text=Mavi+Zarf",
      description: "Huzurlu ve sakin",
    },
    {
      id: "white",
      name: "Beyaz Zarf",
      image: "https://placehold.co/400x300/ffffff/000000?text=Beyaz+Zarf",
      description: "Klasik ve zarif",
    },
    {
      id: "heart",
      name: "Kalpli Zarf",
      image: "https://placehold.co/400x300/ff69b4/c71585?text=Kalpli+Zarf",
      description: "Aşk dolu",
    },
    {
      id: "pattern",
      name: "Desenli Zarf",
      image: "https://placehold.co/400x300/f0e68c/8b4513?text=Desenli+Zarf",
      description: "Eğlenceli ve renkli",
    },
  ];

  const paperColors = [
    {
      id: "white",
      name: "Beyaz",
      color: "#ffffff",
      textColor: "#000000",
      description: "Klasik ve temiz",
    },
    {
      id: "pink",
      name: "Pembe",
      color: "#ffe4e1",
      textColor: "#8b4789",
      description: "Romantik ve sıcak",
    },
    {
      id: "blue",
      name: "Mavi",
      color: "#e6f2ff",
      textColor: "#1e40af",
      description: "Sakin ve profesyonel",
    },
  ];

  const addons = [
    {
      id: "flower",
      name: "Çiçek",
      icon: Sparkles,
      price: "50₺",
      description: "Kuru çiçek süslemesi",
    },
    {
      id: "sticker",
      name: "Sticker",
      icon: Star,
      price: "20₺",
      description: "Özel tasarım çıkartmalar",
    },
    {
      id: "perfume",
      name: "Parfüm",
      icon: Heart,
      price: "75₺",
      description: "Hafif koku spreyi",
    },
    {
      id: "wax-seal",
      name: "Mum Mühür",
      icon: Shield,
      price: "40₺",
      description: "Geleneksel mum mühür",
    },
  ];

  const totalSteps = 4;

  const handleEnvelopeSelect = (envelopeId) => {
    setFormData({ ...formData, envelope: envelopeId });
  };

  const handlePaperColorSelect = (colorId) => {
    setFormData({ ...formData, paperColor: colorId });
  };

  const handleAddonToggle = (addonId) => {
    const currentAddons = formData.addons;
    if (currentAddons.includes(addonId)) {
      setFormData({
        ...formData,
        addons: currentAddons.filter((id) => id !== addonId),
      });
    } else {
      setFormData({ ...formData, addons: [...currentAddons, addonId] });
    }
  };

  const handleRecipientChange = (field, value) => {
    setFormData({
      ...formData,
      recipient: { ...formData.recipient, [field]: value },
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    // TODO: Backend'e gönderim yapılacak
    console.log("Form Data:", formData);
    alert("Mektubunuz oluşturuldu! (Backend entegrasyonu yapılacak)");
    navigate("/dashboard");
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.envelope !== "";
      case 2:
        return formData.paperColor !== "";
      case 3:
        return true; // Addons opsiyonel
      case 4:
        return (
          formData.recipient.firstName &&
          formData.recipient.lastName &&
          formData.recipient.phone &&
          formData.recipient.email &&
          formData.recipient.address
        );
      default:
        return false;
    }
  };

  return (
    <>
      <SEO
        title="Geleceğe Mektup Oluştur | MektupYolla"
        description="Gelecekteki sana veya sevdiklerine mektup yaz"
        canonical="https://mektupyolla.com/gelecege-mektup"
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        {/* Header */}
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Dashboard'a Dön</span>
              </button>

              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Geleceğe Mektup
                </h1>
              </div>

              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {currentStep}/{totalSteps}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Step 1: Zarf Seçimi */}
          {currentStep === 1 && (
            <div className="animate-fadeIn">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Zarfını Seç
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Mektubun hangi zarfta gelecek? Her zarf, mesajına özel bir
                  dokunuş katacak.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                {envelopes.map((envelope) => (
                  <button
                    key={envelope.id}
                    onClick={() => handleEnvelopeSelect(envelope.id)}
                    className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      formData.envelope === envelope.id
                        ? "border-purple-500 dark:border-purple-400 shadow-2xl shadow-purple-500/50 ring-4 ring-purple-500/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600"
                    }`}
                  >
                    {formData.envelope === envelope.id && (
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                    )}

                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                      <img
                        src={envelope.image}
                        alt={envelope.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {envelope.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {envelope.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Sayfa Rengi */}
          {currentStep === 2 && (
            <div className="animate-fadeIn">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-4">
                  <Palette className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Sayfa Rengini Seç
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Mektubunun yazılacağı kağıdın rengini seç. Bu, mektubuna özel
                  bir atmosfer katacak.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {paperColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => handlePaperColorSelect(color.id)}
                    className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      formData.paperColor === color.id
                        ? "border-pink-500 dark:border-pink-400 shadow-2xl shadow-pink-500/50 ring-4 ring-pink-500/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-600"
                    }`}
                  >
                    {formData.paperColor === color.id && (
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                    )}

                    <div
                      className="w-full aspect-square rounded-xl mb-4 shadow-inner border-2 border-gray-200 dark:border-gray-600"
                      style={{
                        backgroundColor: color.color,
                        backgroundImage: `
                          repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 30px,
                            ${color.textColor}15 30px,
                            ${color.textColor}15 31px
                          )
                        `,
                      }}
                    >
                      <div
                        className="p-4 text-sm font-medium"
                        style={{ color: color.textColor }}
                      >
                        Örnek yazı
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {color.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {color.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Add-ons */}
          {currentStep === 3 && (
            <div className="animate-fadeIn">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
                  <Gift className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Ekstra Özellikler
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Mektubuna özel dokunuşlar ekle. Bu seçenekler tamamen
                  opsiyonel, istersen atla!
                </p>
                <div className="flex items-center justify-center space-x-2 mt-4 text-sm">
                  <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Bu mektup belirlediğin tarihte teslim edilecek
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
                {addons.map((addon) => {
                  const Icon = addon.icon;
                  const isSelected = formData.addons.includes(addon.id);

                  return (
                    <button
                      key={addon.id}
                      onClick={() => handleAddonToggle(addon.id)}
                      className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                        isSelected
                          ? "border-indigo-500 dark:border-indigo-400 shadow-xl shadow-indigo-500/30 ring-4 ring-indigo-500/20"
                          : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                      )}

                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                          isSelected
                            ? "bg-indigo-100 dark:bg-indigo-900/30"
                            : "bg-gray-100 dark:bg-gray-700"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            isSelected
                              ? "text-indigo-600 dark:text-indigo-400"
                              : "text-gray-600 dark:text-gray-400"
                          }`}
                        />
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {addon.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {addon.description}
                      </p>
                      <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                        {addon.price}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 4: Alıcı Bilgileri */}
          {currentStep === 4 && (
            <div className="animate-fadeIn">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                  <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Alıcı Bilgileri
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
                  Mektubun kime gönderilecek? Bilgileri eksiksiz doldurun.
                </p>

                {/* AI Moderasyon Uyarısı */}
                <div className="max-w-3xl mx-auto bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div className="text-left">
                      <h4 className="text-sm font-bold text-yellow-900 dark:text-yellow-200 mb-1">
                        İçerik Moderasyonu
                      </h4>
                      <p className="text-xs text-yellow-800 dark:text-yellow-300">
                        Tüm mektuplar yapay zeka ile otomatik olarak
                        kontrol edilmektedir. Uygunsuz içerik tespit edilirse
                        mektubunuz gönderilemeyecektir. (Örnek: küfür, hakaret,
                        tehdit vb.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        İsim *
                      </label>
                      <input
                        type="text"
                        value={formData.recipient.firstName}
                        onChange={(e) =>
                          handleRecipientChange("firstName", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Alıcının adı"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Soyisim *
                      </label>
                      <input
                        type="text"
                        value={formData.recipient.lastName}
                        onChange={(e) =>
                          handleRecipientChange("lastName", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Alıcının soyadı"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        value={formData.recipient.phone}
                        onChange={(e) =>
                          handleRecipientChange("phone", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="05XX XXX XX XX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        value={formData.recipient.email}
                        onChange={(e) =>
                          handleRecipientChange("email", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="ornek@email.com"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Adres *
                      </label>
                      <textarea
                        value={formData.recipient.address}
                        onChange={(e) =>
                          handleRecipientChange("address", e.target.value)
                        }
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Mahalle, Sokak, Bina No, Daire, İlçe, İl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="max-w-6xl mx-auto mt-8 sm:mt-12 flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="btn-secondary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Geri</span>
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Devam Et</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Mektubu Oluştur</span>
                <Check className="w-5 h-5" />
              </button>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default CreateFutureLetterPage;
