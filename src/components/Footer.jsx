import { Link } from 'react-router-dom'
import { Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-purple-600 p-2 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">MektupYolla</span>
            </div>
            <p className="text-gray-400 text-sm">
              Sevgiyi, özlemi ve duyguları en özel şekilde iletmenin dijital hali. 
              Teknoloji ve gelenek buluştu.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/sss" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Mektup Türleri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mektup Türleri</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Sevgiliye Mektup</li>
              <li className="text-gray-400 text-sm">Askere Mektup</li>
              <li className="text-gray-400 text-sm">Cezaevine Mektup</li>
              <li className="text-gray-400 text-sm">Normal Mektup</li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:info@mektupyolla.com" className="hover:text-primary-400 transition-colors">
                  info@mektupyolla.com
                </a>
              </li>
              <li>Türkiye'nin #1 Dijital Mektup Servisi</li>
              <li className="pt-2">
                <span className="text-primary-400 font-semibold">10K+</span> Mutlu Kalp
              </li>
              <li>
                <span className="text-primary-400 font-semibold">50K+</span> Teslim Edilen Mektup
              </li>
              <li>
                <span className="text-primary-400 font-semibold">%99.8</span> Memnuniyet Oranı
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} MektupYolla. Tüm hakları saklıdır.</p>
          <p className="mt-2">
            <Link to="/gizlilik-politikasi" className="hover:text-primary-400 transition-colors">
              Gizlilik Politikası
            </Link>
            {' • '}
            <Link to="/kullanim-kosullari" className="hover:text-primary-400 transition-colors">
              Kullanım Koşulları
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
