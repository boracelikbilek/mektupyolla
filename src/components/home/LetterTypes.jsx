import { Heart, Shield, Lock, Mail, ArrowRight } from 'lucide-react'

const letterTypes = [
  {
    icon: Heart,
    title: 'Sevgiliye Mektup',
    description: 'Aşkınızı ve özleminizi en romantik şekilde ifade edin.',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600'
  },
  {
    icon: Shield,
    title: 'Askere Mektup',
    description: 'Vatanı görevini yapan sevdiklerinize moral ve destek gönderin.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    icon: Lock,
    title: 'Cezaevine Mektup',
    description: 'Mahkum yakınlarınıza umut ve güç verin.',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
  {
    icon: Mail,
    title: 'Normal Mektup',
    description: 'Her türlü duygu ve düşüncenizi paylaşın.',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  }
]

const LetterTypes = () => {
  return (
    <section id="mektup-turleri" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hangi Mektubu
            <span className="gradient-text block mt-2">Yazmak İstiyorsun?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Her durum için özel kategoriler. Duygularınızı en doğru şekilde ifade edin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {letterTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <div
                key={index}
                className="group card hover:scale-105 cursor-pointer"
              >
                <div className={`w-16 h-16 ${type.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${type.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {type.title}
                </h3>
                
                <p className="text-gray-600 mb-4 min-h-[3rem]">
                  {type.description}
                </p>
                
                <button className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${type.color} bg-clip-text text-transparent group-hover:gap-2 transition-all`}>
                  Mektup Yaz
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LetterTypes
