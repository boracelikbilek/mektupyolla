import { CheckCircle2, Users, Heart, TrendingUp } from 'lucide-react'

const highlights = [
  { icon: CheckCircle2, text: 'Güvenli & Hızlı Teslimat' },
  { icon: Users, text: 'Premium Kağıt Kalitesi' },
  { icon: Heart, text: 'Kişisel Müşteri Temsilcisi' },
  { icon: TrendingUp, text: '%100 Memnuniyet Garantisi' }
]

const OurStory = () => {
  return (
    <section id="hakkimizda" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hikayemiz
              <span className="gradient-text block mt-2">Aşkla Başladı</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Teknoloji çağında kaybolmaya yüz tutan mektup kültürünü canlandırmak 
                için yola çıktık. Her mektubun bir hikayesi, her kelimein bir anlamı 
                olduğuna inanıyoruz.
              </p>

              <p>
                Amacımız basit: Sevgiyi, özlemi, umutları en samimi haliyle 
                sevdiklerinize ulaştırmak. Dijital dünyanın hızında kaybolmadan, 
                kalplerinizi buluşturmak.
              </p>

              <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-6 border border-primary-100">
                <p className="text-gray-700 font-medium mb-4">
                  <span className="text-2xl font-bold text-primary-600">2021</span> yılında kurulan MektupYolla, 
                  bugün <span className="font-bold text-primary-600">50.000+</span> mektup ile 
                  Türkiye'nin en güvenilir mektup servisi.
                </p>
                
                <div className="flex items-center gap-2 text-sm text-primary-600">
                  <span className="font-bold text-3xl">7/24</span>
                  <span>Müşteri Desteği</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mb-4">
                  <Heart className="w-5 h-5 text-pink-300" />
                  <span className="text-sm font-medium">50.000+ Mutlu Kalp</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-2">
                  Güvenli & Hızlı Teslimat
                </h3>
                <p className="text-white/90">
                  Premium kağıt kalitesi, yüksek kaliteli kağıt ve mürekkeplerle 
                  profesyonel sonuç. Dedikleri zamanda, dedikleri yerde teslim.
                </p>
              </div>

              <div className="space-y-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm"
                    >
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-200" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-1">2021</div>
                    <div className="text-sm text-white/80">Kuruluş Yılı</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">7/24</div>
                    <div className="text-sm text-white/80">Müşteri Desteği</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">%99.8</div>
                    <div className="text-sm text-white/80">Memnuniyet</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full blur-2xl opacity-50 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-400 rounded-full blur-2xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
