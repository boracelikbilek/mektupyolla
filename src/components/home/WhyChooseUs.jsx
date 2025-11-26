import { Palette, Clock, Truck, Shield, Smile, Archive } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Sınırsız Kişiselleştirme',
    description: 'Kağıt rengi, zarf seçimi, fotoğraf ekleme ve daha fazlası.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Clock,
    title: 'Anında Hazırlık',
    description: 'Dakikalar içinde mektubunuzu hazırlayın, biz gerisini halledelim.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Truck,
    title: 'Takipli Teslimat',
    description: 'SMS ile kargo takip kodu alın, teslim sürecini izleyin.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  },
  {
    icon: Shield,
    title: 'Emoji & Renk Desteği',
    description: 'Emojileri kullanın, renkli çıktılar alın, duygularınızı renklendirin.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: Smile,
    title: 'Premium Kalite',
    description: 'Yüksek kaliteli kağıt ve mürekkeplerle profesyonel sonuç.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Archive,
    title: 'Dijital Arşiv',
    description: 'Tüm mektuplarınızı güvenle saklayın, istediğiniz zaman erişin.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
]

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Neden
            <span className="gradient-text"> MektupYolla</span>
            <span> Seçmelisiniz?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Modern teknoloji ile geleneksel mektup kültürünü birleştiren benzersiz özellikler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="card group hover:border-primary-200 border-2 border-transparent"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
