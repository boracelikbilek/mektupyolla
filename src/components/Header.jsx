import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Mail } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-primary-500 to-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">
              MektupYolla
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('mektup-turleri')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Mektup Türleri
            </button>
            <button 
              onClick={() => scrollToSection('nasil-calisir')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Nasıl Çalışır
            </button>
            <button 
              onClick={() => scrollToSection('hakkimizda')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Hakkımızda
            </button>
            <Link 
              to="/blog" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Blog
            </Link>
            <Link 
              to="/sss" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              SSS
            </Link>
            <Link 
              to="/iletisim" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              İletişim
            </Link>
            <button className="btn-primary">
              Hemen Mektup Yaz
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-xl rounded-b-2xl border-t">
            <div className="flex flex-col space-y-4 p-6">
              <button 
                onClick={() => scrollToSection('mektup-turleri')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left"
              >
                Mektup Türleri
              </button>
              <button 
                onClick={() => scrollToSection('nasil-calisir')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left"
              >
                Nasıl Çalışır
              </button>
              <button 
                onClick={() => scrollToSection('hakkimizda')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left"
              >
                Hakkımızda
              </button>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Blog
              </Link>
              <Link 
                to="/sss" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                SSS
              </Link>
              <Link 
                to="/iletisim" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                İletişim
              </Link>
              <button className="btn-primary w-full">
                Hemen Mektup Yaz
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
