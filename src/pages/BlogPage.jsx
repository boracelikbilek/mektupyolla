import SEO from '../components/SEO'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Sevgiliye Mektup Nasıl Yazılır? En Romantik İpuçları',
    excerpt: 'Sevgilinize duygularınızı en güzel şekilde ifade etmek için mektup yazma ipuçları ve örnekler.',
    date: '15 Kasım 2024',
    author: 'Ayşe Yılmaz',
    category: 'Romantik',
    image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&q=80',
    readTime: '5 dk'
  },
  {
    id: 2,
    title: 'Askere Mektup Yazarken Dikkat Edilmesi Gerekenler',
    excerpt: 'Askerlik görevini yapan sevdiklerinize moral ve destek dolu mektuplar yazmak için rehber.',
    date: '10 Kasım 2024',
    author: 'Mehmet Demir',
    category: 'Rehber',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    readTime: '4 dk'
  },
  {
    id: 3,
    title: 'Mektup Yazmanın Kaybolmaya Yüz Tutan Sanatı',
    excerpt: 'Dijital çağda mektup yazmanın önemi ve bu güzel geleneği yaşatmanın yolları.',
    date: '5 Kasım 2024',
    author: 'Zeynep Kaya',
    category: 'Kültür',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    readTime: '6 dk'
  },
  {
    id: 4,
    title: 'Özel Günler İçin Mektup Önerileri',
    excerpt: 'Doğum günü, yıldönümü ve özel günler için unutulmaz mektup fikirleri.',
    date: '1 Kasım 2024',
    author: 'Can Öztürk',
    category: 'İpuçları',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80',
    readTime: '3 dk'
  },
  {
    id: 5,
    title: 'Cezaevine Mektup: Umut ve Güç Vermenin Yolları',
    excerpt: 'Sevdiklerinize umut taşıyan, moral verici mektuplar yazmanın incelikleri.',
    date: '28 Ekim 2024',
    author: 'Elif Şahin',
    category: 'Rehber',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    readTime: '5 dk'
  },
  {
    id: 6,
    title: 'El Yazısı vs Dijital: Hangi Mektup Daha Etkili?',
    excerpt: 'Geleneksel el yazısı ile modern dijital mektupların avantajları ve farkları.',
    date: '25 Ekim 2024',
    author: 'Ahmet Yurt',
    category: 'Karşılaştırma',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    readTime: '4 dk'
  }
]

const categories = ['Tümü', 'Romantik', 'Rehber', 'İpuçları', 'Kültür', 'Karşılaştırma']

const BlogPage = () => {
  return (
    <>
      <SEO 
        title="Blog | MektupYolla - Mektup Yazma Rehberi ve İpuçları"
        description="Mektup yazma sanatı, romantik mektup örnekleri, askere mektup nasıl yazılır ve daha fazlası hakkında bilgi edinin."
        canonical="https://mektupyolla.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-500 to-primary-700 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Mektup yazma sanatı, ipuçları ve ilham verici hikayeler
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card group cursor-pointer overflow-hidden p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                    </div>

                    <button className="text-primary-600 dark:text-primary-400 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Devamını Oku
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-primary">
              Daha Fazla Yükle
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
