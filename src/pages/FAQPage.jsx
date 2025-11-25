import { useState } from 'react'
import SEO from '../components/SEO'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    category: 'Genel',
    questions: [
      {
        question: 'MektupYolla nedir?',
        answer: 'MektupYolla, sevdiklerinize online olarak mektup yazıp, fiziksel olarak adreslerine teslim edilmesini sağlayan Türkiye\'nin ilk dijital mektup servisidir. Modern teknoloji ile geleneksel mektup kültürünü birleştiriyoruz.'
      },
      {
        question: 'Nasıl çalışır?',
        answer: 'Çok basit! Web sitemizden mektubunuzu yazın, alıcı adresini belirtin ve ödeme yapın. Biz mektubunuzu premium kağıda basıp, özenle zarflayarak kargo ile adresine teslim ediyoruz.'
      },
      {
        question: 'Mektup ne kadar sürede ulaşır?',
        answer: 'Kargo süresi genellikle 2-5 iş günüdür. Siparişiniz onaylandıktan sonra, kargo takip numaranızı SMS ile size göndeririz.'
      }
    ]
  },
  {
    category: 'Fiyatlandırma',
    questions: [
      {
        question: 'Mektup göndermek ne kadar?',
        answer: 'Fiyatlarımız mektup türüne, sayfa sayısına ve özel seçeneklere göre değişmektedir. Standart bir mektup 50 TL\'den başlayan fiyatlarla gönderebilirsiniz. İlk mektubunuz bizden hediye!'
      },
      {
        question: 'Ödeme yöntemleri nelerdir?',
        answer: 'Kredi kartı, banka kartı ve havale/EFT ile ödeme yapabilirsiniz. Tüm ödemeleriniz 3D Secure güvencesi altındadır.'
      },
      {
        question: 'İptal ve iade politikanız nedir?',
        answer: 'Mektubunuz baskıya gönderilmeden önce (yaklaşık 2 saat içinde) siparişinizi ücretsiz iptal edebilirsiniz. Baskıya gönderildikten sonra iptal işlemi yapılamamaktadır.'
      }
    ]
  },
  {
    category: 'Özelleştirme',
    questions: [
      {
        question: 'Mektubumu özelleştirebilir miyim?',
        answer: 'Evet! Farklı yazı tipleri, renkli çıktı, özel kağıt seçenekleri, zarf türleri ve fotoğraf ekleme gibi birçok özelleştirme seçeneği sunuyoruz.'
      },
      {
        question: 'Emoji kullanabilir miyim?',
        answer: 'Elbette! Mektubunuzda emoji kullanabilir ve renkli olarak basılmasını sağlayabilirsiniz.'
      },
      {
        question: 'Fotoğraf ekleyebilir miyim?',
        answer: 'Evet, mektubunuza fotoğraf ekleyebilirsiniz. Fotoğraflar yüksek kalitede basılır ve mektubunuzla birlikte gönderilir.'
      }
    ]
  },
  {
    category: 'Güvenlik',
    questions: [
      {
        question: 'Bilgilerim güvende mi?',
        answer: 'Kesinlikle! Tüm kişisel bilgileriniz ve mektup içerikleriniz SSL sertifikası ile şifrelenir ve gizli tutulur. Üçüncü şahıslarla asla paylaşılmaz.'
      },
      {
        question: 'Mektuplarım arşivlenir mi?',
        answer: 'Evet, gönderdiğiniz tüm mektuplar dijital arşivinizde güvenle saklanır. İstediğiniz zaman erişebilir veya silebilirsiniz.'
      }
    ]
  },
  {
    category: 'Teslimat',
    questions: [
      {
        question: 'Hangi bölgelere gönderim yapıyorsunuz?',
        answer: 'Türkiye\'nin her yerine gönderim yapıyoruz. Askeri bölgeler ve cezaevleri için özel prosedürler uygulanmaktadır.'
      },
      {
        question: 'Kargo takibi yapabilir miyim?',
        answer: 'Evet, mektubunuz kargoya verildiğinde size SMS ile takip numarası gönderilir. Bu numara ile kargo durumunu takip edebilirsiniz.'
      },
      {
        question: 'Mektup teslim edilmezse ne olur?',
        answer: 'Eğer mektubunuz yanlış adres, alıcı bulunamadı gibi sebeplerle teslim edilemezse, durumu size bildiririz ve ücreti iade ederiz.'
      }
    ]
  }
]

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left hover:text-primary-600 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-8">{question}</span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5 text-primary-600" />
          ) : (
            <Plus className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="pb-5 pr-12">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

const FAQPage = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <>
      <SEO 
        title="Sıkça Sorulan Sorular | MektupYolla"
        description="MektupYolla hakkında merak ettiğiniz her şey. Fiyatlandırma, teslimat, özelleştirme ve daha fazlası."
        canonical="https://mektupyolla.com/sss"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-purple-600">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Merak ettiğiniz her şey burada. Aradığınızı bulamadıysanız bize ulaşın!
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-primary-600 rounded-full mr-3"></span>
                  {category.category}
                </h2>

                <div className="card">
                  {category.questions.map((item, index) => (
                    <FAQItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openItems[`${category.category}-${index}`]}
                      onClick={() => toggleItem(category.category, index)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center card bg-gradient-to-r from-primary-50 to-purple-50 border-2 border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Cevabını Bulamadınız mı?
            </h3>
            <p className="text-gray-600 mb-6">
              7/24 müşteri hizmetleri ekibimiz size yardımcı olmak için burada
            </p>
            <button className="btn-primary">
              Bize Ulaşın
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQPage
