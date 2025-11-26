import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SEO from "../components/SEO";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Heart,
  Mail,
  Palette,
  Gift,
  User,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  Star,
  Shield,
  FileText,
  AlertCircle,
  Clock,
  Calendar,
  Send,
} from "lucide-react";

const CreateLoveLetterPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    envelope: "",
    paperColor: "",
    letterContent: "",
    envelopeText: "",
    addons: [],
    futureDeliveryDays: 30,
    deliveryOption: "1-month", // "1-month", "2-month", "custom"
    customDeliveryDate: "",
    recipient: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
    },
  });

  // Supabase Storage URL'leri
  const envelopes = [
    {
      id: "kraft",
      name: "Kraft Zarf",
      image:
        "https://crdsrjcicdbgnylfjewd.supabase.co/storage/v1/object/public/envelopes/kraft.jpg",
      description: "Doğal ve şık",
    },
    {
      id: "pink",
      name: "Pembe Zarf",
      image:
        "https://crdsrjcicdbgnylfjewd.supabase.co/storage/v1/object/public/envelopes/pink.jpg",
      description: "Romantik ve sevgi dolu",
    },
    {
      id: "blue",
      name: "Mavi Zarf",
      image:
        "https://crdsrjcicdbgnylfjewd.supabase.co/storage/v1/object/public/envelopes/blue.jpg",
      description: "Huzurlu ve sakin",
    },
    {
      id: "white",
      name: "Beyaz Zarf",
      image:
        "https://crdsrjcicdbgnylfjewd.supabase.co/storage/v1/object/public/envelopes/white.jpg",
      description: "Klasik ve zarif",
    },
    {
      id: "heart",
      name: "Kalpli Zarf",
      image:
        "https://crdsrjcicdbgnylfjewd.supabase.co/storage/v1/object/public/envelopes/heart.jpg",
      description: "Aşk dolu",
    },
    {
      id: "pattern",
      name: "Desenli Zarf",
      image:
        "https://crdsrjcicdbgnylfjewd.supabase.co/storage/v1/object/public/envelopes/pattern.jpg",
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
      price: 50,
      description: "Kuru çiçek süslemesi",
    },
    {
      id: "sticker",
      name: "Sticker",
      icon: Star,
      price: 20,
      description: "Özel tasarım çıkartmalar",
    },
    {
      id: "perfume",
      name: "Parfüm",
      icon: Heart,
      price: 75,
      description: "Hafif koku spreyi",
    },
    {
      id: "wax-seal",
      name: "Mum Mühür",
      icon: Shield,
      price: 40,
      description: "Geleneksel mum mühür",
    },
  ];

  const totalSteps = 6;

  const calculateDeliveryDate = () => {
    const today = new Date();
    let deliveryDate = new Date(today);

    if (formData.deliveryOption === "custom" && formData.customDeliveryDate) {
      deliveryDate = new Date(formData.customDeliveryDate);
    } else {
      deliveryDate.setDate(today.getDate() + formData.futureDeliveryDays);
    }

    return deliveryDate;
  };

  const daysToMonthsText = (days) => {
    if (days < 30) return `${days} gün`;
    const months = Math.floor(days / 30);
    const remainingDays = days % 30;
    if (remainingDays === 0) return `${months} ay`;
    return `${months} ay ${remainingDays} gün`;
  };

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
    // Checkout sayfasına yönlendir
    navigate("/checkout", {
      state: {
        letterType: "love",
        formData: formData,
      },
    });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.envelope !== "";
      case 2:
        return formData.paperColor !== "";
      case 3:
        return formData.letterContent.trim() !== "";
      case 4:
        return true; // Addons opsiyonel
      case 5:
        if (formData.deliveryOption === "custom") {
          return formData.customDeliveryDate !== "";
        }
        return formData.futureDeliveryDays > 0;
      case 6:
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
        title="Sevgiliye Mektup Yaz | MektupYolla"
        description="Sevgiline romantik bir mektup yaz, duygularını ifade et"
        canonical="https://mektupyolla.com/sevgiliye-mektup"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 shadow-sm">
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
                <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Sevgiliye Mektup
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
                  className="h-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-500 ease-out"
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Zarfını Seç
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Sevgilinin eline geçecek zarfı özenle seç. Her zarf, aşkına
                  özel bir dokunuş katacak.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                {envelopes.map((envelope) => (
                  <button
                    key={envelope.id}
                    onClick={() => handleEnvelopeSelect(envelope.id)}
                    className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      formData.envelope === envelope.id
                        ? "border-pink-500 dark:border-pink-400 shadow-2xl shadow-pink-500/50 ring-4 ring-pink-500/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-600"
                    }`}
                  >
                    {formData.envelope === envelope.id && (
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full mb-4">
                  <Palette className="w-8 h-8 text-rose-600 dark:text-rose-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Sayfa Rengini Seç
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Mektubunun yazılacağı kağıdın rengini seç. Aşkına uygun rengi
                  bul.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {paperColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => handlePaperColorSelect(color.id)}
                    className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      formData.paperColor === color.id
                        ? "border-rose-500 dark:border-rose-400 shadow-2xl shadow-rose-500/50 ring-4 ring-rose-500/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-rose-300 dark:hover:border-rose-600"
                    }`}
                  >
                    {formData.paperColor === color.id && (
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
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
                        Seni seviyorum
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

          {/* Step 3: Mektup İçeriği */}
          {currentStep === 3 && (
            <div className="animate-fadeIn">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
                  <FileText className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Mektubunu Yaz
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  İçini dök, aşkını anlat. Sevgilinin kalbine dokunacak
                  kelimeleri seç.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {/* Zarf Üzerine Yazı */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Zarf Üzerine Yazı (Opsiyonel)
                  </label>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    Zarfın üzerine el yazısı ile yazılacak romantik bir mesaj.
                    Maksimum 50 karakter.
                  </p>
                  <input
                    type="text"
                    maxLength={50}
                    value={formData.envelopeText}
                    onChange={(e) =>
                      setFormData({ ...formData, envelopeText: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-lg"
                    placeholder="Örn: Seni çok seviyorum ❤️"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  />
                  <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {formData.envelopeText.length}/50
                  </div>
                </div>

                {/* Mektup İçeriği */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mektup İçeriği *
                  </label>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    Kalbinden geleni yaz. Aşkını, özlemini, duygularını anlat.
                  </p>
                  <div className="max-w-none">
                    <ReactQuill
                      theme="snow"
                      value={formData.letterContent}
                      onChange={(value) =>
                        setFormData({ ...formData, letterContent: value })
                      }
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, 3, false] }],
                          ["bold", "italic", "underline", "strike"],
                          [{ list: "ordered" }, { list: "bullet" }],
                          [{ align: [] }],
                          ["link"],
                          ["clean"],
                        ],
                      }}
                      className="bg-white dark:bg-gray-700 rounded-lg w-full"
                      style={{ minHeight: "480px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Add-ons */}
          {currentStep === 4 && (
            <div className="animate-fadeIn">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                  <Gift className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Ekstra Özellikler
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Mektubuna özel dokunuşlar ekle. Sevgilini daha çok mutlu et!
                </p>
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
                          ? "border-purple-500 dark:border-purple-400 shadow-xl shadow-purple-500/30 ring-4 ring-purple-500/20"
                          : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                      )}

                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                          isSelected
                            ? "bg-purple-100 dark:bg-purple-900/30"
                            : "bg-gray-100 dark:bg-gray-700"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            isSelected
                              ? "text-purple-600 dark:text-purple-400"
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
                      <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {addon.price}₺
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 5: Teslimat Süresi */}
          {currentStep === 5 && (
            <div className="animate-fadeIn">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-4">
                  <Calendar className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Ne Zaman Teslim Edilsin?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Mektubun bugünden kaç gün sonra teslim edilmesini istiyorsun?
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
                  <div className="flex items-center justify-center space-x-4 mb-8">
                    <Send className="w-12 h-12 text-pink-600 dark:text-pink-400" />
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      →
                    </div>
                    <Clock className="w-12 h-12 text-pink-600 dark:text-pink-400" />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-center text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                        Teslimat Süresi
                      </label>

                      {/* Hızlı Seçim Butonları */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                        <button
                          onClick={() =>
                            setFormData({
                              ...formData,
                              futureDeliveryDays: 30,
                              deliveryOption: "1-month",
                              customDeliveryDate: "",
                            })
                          }
                          className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                            formData.deliveryOption === "1-month"
                              ? "bg-pink-500 text-white shadow-lg scale-105"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                          }`}
                        >
                          <div className="text-2xl font-bold">1 Ay</div>
                          <div className="text-xs">30 Gün</div>
                        </button>

                        <button
                          onClick={() =>
                            setFormData({
                              ...formData,
                              futureDeliveryDays: 60,
                              deliveryOption: "2-month",
                              customDeliveryDate: "",
                            })
                          }
                          className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                            formData.deliveryOption === "2-month"
                              ? "bg-pink-500 text-white shadow-lg scale-105"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                          }`}
                        >
                          <div className="text-2xl font-bold">2 Ay</div>
                          <div className="text-xs">60 Gün</div>
                        </button>

                        <button
                          onClick={() =>
                            setFormData({
                              ...formData,
                              deliveryOption: "custom",
                            })
                          }
                          className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                            formData.deliveryOption === "custom"
                              ? "bg-pink-500 text-white shadow-lg scale-105"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                          }`}
                        >
                          <div className="text-2xl font-bold">Diğer</div>
                          <div className="text-xs">Özel Tarih</div>
                        </button>
                      </div>

                      {/* Özel Gün Sayısı veya Date Picker */}
                      {formData.deliveryOption === "custom" && (
                        <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-4 border border-pink-200 dark:border-pink-800">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                            Gün Sayısı Gir veya Tarih Seç
                          </label>

                          {/* Gün Sayısı Input */}
                          <div className="mb-4">
                            <label className="block text-xs text-gray-600 dark:text-gray-400 mb-2">
                              Gün Sayısı
                            </label>
                            <input
                              type="number"
                              min="1"
                              max="1825"
                              value={formData.futureDeliveryDays}
                              onChange={(e) => {
                                const days = parseInt(e.target.value) || 1;
                                setFormData({
                                  ...formData,
                                  futureDeliveryDays: days,
                                  customDeliveryDate: "",
                                });
                              }}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-center text-xl font-bold focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                              placeholder="Örn: 45"
                            />
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
                              {daysToMonthsText(formData.futureDeliveryDays)}{" "}
                              sonra
                            </p>
                          </div>

                          <div className="text-center text-sm text-gray-600 dark:text-gray-400 my-3">
                            - VEYA -
                          </div>

                          {/* Date Picker */}
                          <div>
                            <label className="block text-xs text-gray-600 dark:text-gray-400 mb-2">
                              Teslimat Tarihi Seç
                            </label>
                            <input
                              type="date"
                              min={
                                new Date(Date.now() + 24 * 60 * 60 * 1000)
                                  .toISOString()
                                  .split("T")[0]
                              }
                              value={formData.customDeliveryDate}
                              onChange={(e) => {
                                const selectedDate = new Date(e.target.value);
                                const today = new Date();
                                const diffTime = selectedDate - today;
                                const diffDays = Math.ceil(
                                  diffTime / (1000 * 60 * 60 * 24)
                                );

                                setFormData({
                                  ...formData,
                                  customDeliveryDate: e.target.value,
                                  futureDeliveryDays: diffDays,
                                });
                              }}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Teslimat Bilgisi */}
                    <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6 border border-pink-200 dark:border-pink-800">
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-6 h-6 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            Teslimat Tarihi
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            Mektubun{" "}
                            <span className="font-bold text-pink-600 dark:text-pink-400">
                              {calculateDeliveryDate().toLocaleDateString(
                                "tr-TR",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  weekday: "long",
                                }
                              )}
                            </span>{" "}
                            tarihinde sevgiline teslim edilecek.
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            Bugünden{" "}
                            <span className="font-semibold">
                              {formData.deliveryOption === "custom" &&
                              formData.customDeliveryDate
                                ? Math.ceil(
                                    (new Date(formData.customDeliveryDate) -
                                      new Date()) /
                                      (1000 * 60 * 60 * 24)
                                  )
                                : formData.futureDeliveryDays}{" "}
                              gün
                            </span>{" "}
                            sonra (
                            {daysToMonthsText(formData.futureDeliveryDays)})
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Alıcı Bilgileri */}
          {currentStep === 6 && (
            <div className="animate-fadeIn">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
                  <User className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Sevgilinin Bilgileri
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
                  Mektubun sevgiline ulaşması için bilgileri eksiksiz doldurun.
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
                        Tüm mektuplar yapay zeka ile otomatik kontrol
                        edilmektedir. Uygunsuz içerik tespit edilirse mektubunuz
                        gönderilemeyecektir.
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="Sevgilinin adı"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="Sevgilinin soyadı"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
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
                <span>Ödemeye Geç</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default CreateLoveLetterPage;
