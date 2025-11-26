import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-primary-500/90 backdrop-blur-md"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo-2.png"
              alt="MektupYolla Logo"
              className="h-16 w-auto object-contain group-hover:scale-110 transition-transform"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-6">
            <button
              onClick={() => scrollToSection("mektup-turleri")}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  : "text-white hover:text-primary-100"
              }`}
            >
              Mektup Türleri
            </button>
            <button
              onClick={() => scrollToSection("nasil-calisir")}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  : "text-white hover:text-primary-100"
              }`}
            >
              Nasıl Çalışır
            </button>
            <button
              onClick={() => scrollToSection("hakkimizda")}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  : "text-white hover:text-primary-100"
              }`}
            >
              Hakkımızda
            </button>
            <Link
              to="/blog"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  : "text-white hover:text-primary-100"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/sss"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  : "text-white hover:text-primary-100"
              }`}
            >
              SSS
            </Link>
            <Link
              to="/iletisim"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  : "text-white hover:text-primary-100"
              }`}
            >
              İletişim
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button onClick={() => navigate("/giris")} className="btn-primary">
              Hemen Başla
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled
                ? "text-gray-700 dark:text-gray-300 hover:text-primary-600"
                : "text-white hover:text-primary-100"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-gray-800 shadow-xl rounded-b-2xl border-t dark:border-gray-700">
            <div className="flex flex-col space-y-4 p-6">
              <button
                onClick={() => scrollToSection("mektup-turleri")}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors text-left"
              >
                Mektup Türleri
              </button>
              <button
                onClick={() => scrollToSection("nasil-calisir")}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors text-left"
              >
                Nasıl Çalışır
              </button>
              <button
                onClick={() => scrollToSection("hakkimizda")}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors text-left"
              >
                Hakkımızda
              </button>
              <Link
                to="/blog"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/sss"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
              >
                SSS
              </Link>
              <Link
                to="/iletisim"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
              >
                İletişim
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors text-left"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-5 h-5" />
                    <span>Açık Mod</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>Koyu Mod</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  navigate("/giris");
                  setIsOpen(false);
                }}
                className="btn-primary w-full"
              >
                Hemen Başla
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
