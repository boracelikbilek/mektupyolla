import { PenTool, MapPin, Send, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: PenTool,
    title: "Mektubunu Yaz",
    description:
      "Modern editörümüzle duygularınızı kelimelerle bezeleyin. Farklı yazı tipleri ve renklerle kişiselleştirin.",
    color: "bg-primary-500",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Adresi Belirt",
    description:
      "Sevdiklerinizin adres bilgilerini güvenle bizimle paylaşın. Tek seferde kaydedin, tekrar kullanın.",
    color: "bg-purple-500",
  },
  {
    number: "03",
    icon: Send,
    title: "Biz Teslim Edelim",
    description:
      "Premium kağıda basıp, özenle zarflayarak kapısına kadar güvenle ulaştıralım.",
    color: "bg-pink-500",
  },
];

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <section
      id="nasil-calisir"
      className="section-padding bg-white dark:bg-gray-900"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sadece 3 Adımda
            <span className="gradient-text block mt-2">Kalplere Dokun</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Teknoloji ve gelenek buluştu. En basit yöntemle en değerli hediyeyi
            gönderin.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Step Card */}
                    <div className="card text-center bg-white">
                      {/* Number Badge */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div
                          className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                        >
                          {index + 1}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="mt-8 mb-6">
                        <div
                          className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-xl`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button
              onClick={() => navigate("/giris")}
              className="btn-primary text-lg px-8 py-4"
            >
              Hemen Başla
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
