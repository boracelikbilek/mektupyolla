import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SEO from "../components/SEO";
import { useState } from "react";
import {
  Home,
  Mail,
  User,
  Settings,
  LogOut,
  PenTool,
  Package,
  Clock,
  CheckCircle,
  TrendingUp,
  Heart,
  Shield,
  Lock as LockIcon,
  ArrowRight,
  Plus,
  Menu,
  X,
  Calendar,
  Moon,
  Sun,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Mock data - gerçek veriler backend'den gelecek
  const stats = [
    {
      icon: Mail,
      title: "Toplam Mektup",
      value: "0",
      color: "bg-blue-500",
      lightColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Clock,
      title: "Beklemede",
      value: "0",
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50 dark:bg-yellow-900/20",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Package,
      title: "Yolda",
      value: "0",
      color: "bg-purple-500",
      lightColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: CheckCircle,
      title: "Teslim Edildi",
      value: "0",
      color: "bg-green-500",
      lightColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
  ];

  const recentLetters = [
    // Mock daata - gerçek veriler backend'den gelecek
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Geleceğe Mektup",
      description: "Gelecekteki sana veya sevdiklerine",
      color: "from-indigo-500 to-purple-500",
      path: "/gelecege-mektup",
    },
    {
      icon: Heart,
      title: "Sevgiliye Mektup",
      description: "Romantik bir mektup yaz",
      color: "from-pink-500 to-rose-500",
      path: "/sevgiliye-mektup",
    },
    {
      icon: Shield,
      title: "Askere Mektup",
      description: "Moral ve destek gönder",
      color: "from-green-500 to-emerald-500",
      path: "/askere-mektup",
    },
    {
      icon: LockIcon,
      title: "Cezaevine Mektup",
      description: "Umut ve güç ver",
      color: "from-orange-500 to-amber-500",
      path: "/cezaevi-mektup",
    },
    {
      icon: Mail,
      title: "Normal Mektup",
      description: "Genel amaçlı mektup",
      color: "from-blue-500 to-indigo-500",
      path: "/normal-mektup",
    },
  ];

  return (
    <>
      <SEO
        title="Dashboard | MektupYolla"
        description="MektupYolla hesap yönetim paneli"
        canonical="https://mektupyolla.com/dashboard"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <div className="flex flex-col h-full">
            {/* Logo & Close Button */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <Link to="/" className="flex items-center" onClick={closeSidebar}>
                <img
                  src="/logo-2.png"
                  alt="MektupYolla"
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <button
                onClick={closeSidebar}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              <Link
                to="/dashboard"
                onClick={closeSidebar}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium transition-colors"
              >
                <Home className="w-5 h-5" />
                <span>Ana Sayfa</span>
              </Link>

              <Link
                to="/mektuplarım"
                onClick={closeSidebar}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Mektuplarım</span>
              </Link>

              <Link
                to="/profil"
                onClick={closeSidebar}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Profilim</span>
              </Link>

              <Link
                to="/ayarlar"
                onClick={closeSidebar}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Settings className="w-5 h-5" />
                <span>Ayarlar</span>
              </Link>
            </nav>

            {/* User Info & Logout */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3 px-4 py-2">
                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                  {user?.email?.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {user?.user_metadata?.full_name || "Kullanıcı"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {user?.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Çıkış Yap</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:ml-64 min-h-screen">
          {/* Header */}
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
            <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
              <div className="flex items-center justify-between">
                {/* Mobile Menu Button */}
                <button
                  onClick={toggleSidebar}
                  className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </button>

                <div className="flex-1 lg:flex-none">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    Hoş Geldin{" "}
                    <span className="hidden sm:inline">
                      , {user?.user_metadata?.full_name || "Kullanıcı"}!
                    </span>
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm hidden sm:block">
                    Duygularını sevdiklerinle paylaşmaya hazır mısın?
                  </p>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <Sun className="w-6 h-6 text-yellow-500" />
                  ) : (
                    <Moon className="w-6 h-6 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          {stat.title}
                        </p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </p>
                      </div>
                      <div
                        className={`w-14 h-14 ${stat.lightColor} rounded-xl flex items-center justify-center`}
                      >
                        <Icon className={`w-7 h-7 ${stat.iconColor}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Hızlı Mektup Oluştur
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Link
                      key={index}
                      to={action.path}
                      className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {action.description}
                      </p>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
                        <span>Başla</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Recent Letters */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Son Mektuplar
                </h2>
                <Link
                  to="/mektuplarım"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm flex items-center"
                >
                  Tümünü Gör
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {recentLetters.length > 0 ? (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  {/* Letter list will go here */}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 sm:p-12 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PenTool className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Henüz mektup yazmadınız
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    Yukarıdaki hızlı erişim kartlarından birini seçerek ilk mektubunuzu yazmaya başlayın.
                  </p>
                </div>
              )}
            </div>

            {/* Activity Timeline */}
            <div className="mt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Aktivite Geçmişi
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sm:p-8 text-center">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Henüz aktivite geçmişiniz bulunmuyor
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
