import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { Mail, ArrowLeft } from 'lucide-react'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Password reset logic will be implemented later
    console.log('Password reset request for:', email)
    setSubmitted(true)
  }

  return (
    <>
      <SEO 
        title="Şifremi Unuttum | MektupYolla"
        description="MektupYolla hesap şifrenizi sıfırlayın."
        canonical="https://mektupyolla.com/sifremi-unuttum"
      />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Logo */}
          <div className="text-center">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <img 
                src="/logo-2.png" 
                alt="MektupYolla Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-3xl font-bold gradient-text">
                MektupYolla
              </span>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Şifremi Unuttum
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim.
            </p>
          </div>

          {/* Forgot Password Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    E-posta Adresi
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Şifre Sıfırlama Bağlantısı Gönder
                </button>

                {/* Back to Login */}
                <Link 
                  to="/giris" 
                  className="flex items-center justify-center text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Giriş Sayfasına Dön
                </Link>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  E-posta Gönderildi!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>{email}</strong> adresine şifre sıfırlama bağlantısı gönderdik. 
                  Lütfen e-posta kutunuzu kontrol edin.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  E-postayı görmüyorsanız, spam klasörünü kontrol edin.
                </p>
                <Link 
                  to="/giris" 
                  className="inline-flex items-center justify-center text-sm text-primary-600 hover:text-primary-700 font-medium mt-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Giriş Sayfasına Dön
                </Link>
              </div>
            )}
          </div>

          {/* Sign Up Link */}
          {!submitted && (
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Hesabınız yok mu?{' '}
              <Link to="/kayit" className="font-medium text-primary-600 hover:text-primary-700">
                Hemen Kayıt Olun
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default ForgotPasswordPage
