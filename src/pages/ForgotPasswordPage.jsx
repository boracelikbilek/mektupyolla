import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import {
  Mail,
  ArrowLeft,
  AlertCircle,
  CheckCircle,
  Home,
  Sun,
  Moon,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error } = await resetPassword(email);

      if (error) {
        setError(
          "Şifre sıfırlama e-postası gönderilemedi. Lütfen e-posta adresinizi kontrol edin."
        );
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Şifremi Unuttum | MektupYolla"
        description="MektupYolla hesap şifrenizi sıfırlayın."
        canonical="https://mektupyolla.com/sifremi-unuttum"
      />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="fixed top-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all z-50"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>

        <div className="max-w-md w-full space-y-8">
          {/* Logo ve Ana Sayfa Butonu */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex flex-col items-center justify-center mb-6"
            >
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-4">
                <Home className="w-5 h-5" />
                <span className="font-medium">Ana Sayfa</span>
              </div>
              <img
                src="/logo-2.png"
                alt="MektupYolla Logo"
                className="h-24 w-auto object-contain"
              />
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Şifremi Unuttum
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              E-posta adresinizi girin, size şifre sıfırlama bağlantısı
              gönderelim.
            </p>
          </div>

          {/* Forgot Password Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            {!submitted ? (
              <>
                {error && (
                  <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-red-800 dark:text-red-300">
                      {error}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
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
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading
                      ? "Gönderiliyor..."
                      : "Şifre Sıfırlama Bağlantısı Gönder"}
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
              </>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  E-posta Gönderildi!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>{email}</strong> adresine şifre sıfırlama bağlantısı
                  gönderdik. Lütfen e-posta kutunuzu kontrol edin.
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
              Hesabınız yok mu?{" "}
              <Link
                to="/kayit"
                className="font-medium text-primary-600 hover:text-primary-700"
              >
                Hemen Kayıt Olun
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
