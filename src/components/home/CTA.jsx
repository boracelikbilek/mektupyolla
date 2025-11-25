import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Hemen Denemeye Başla!</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            İlk mektubun bizden hediye. Hiç risk yok, sadece aşk var.
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            İlk mektubunuzu ücretsiz gönderin. Sevdiklerinize ulaşmanın ne kadar
            kolay olduğunu görün.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/giris")}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group"
            >
              Ücretsiz Dene
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
              Nasıl Çalışır?
            </button>
          </div>

          <p className="mt-8 text-white/70 text-sm">
            ✨ Kredi kartı gerekmez • 📦 Anında hazır • 🚀 7/24 destek
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
