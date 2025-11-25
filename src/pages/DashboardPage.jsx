import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SEO from "../components/SEO";
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
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
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
    // Mock data - gerçek veriler backend'den gelecek
  ];

  const quickActions = [
    {
      icon: Heart,
      title: "Sevgiliye Mektup",
      description: "Romantik bir mektup yaz",
      color: "from-pink-500 to-rose-500",
      path: "/yeni-mektup?type=sevgili",
    },
    {
      icon: Shield,
      title: "Askere Mektup",
      description: "Moral ve destek gönder",
      color: "from-green-500 to-emerald-500",
      path: "/yeni-mektup?type=asker",
    },
    {
      icon: LockIcon,
      title: "Cezaevine Mektup",
      description: "Umut ve güç ver",
      color: "from-orange-500 to-amber-500",
      path: "/yeni-mektup?type=cezaevi",
    },
    {
      icon: Mail,
      title: "Normal Mektup",
      description: "Genel amaçlı mektup",
      color: "from-blue-500 to-indigo-500",
      path: "/yeni-mektup?type=normal",
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
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-40">
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo-2.png"
                  alt="MektupYolla"
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              <Link
                to="/dashboard"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium transition-colors"
              >
                <Home className="w-5 h-5" />
                <span>Ana Sayfa</span>
              </Link>

              <Link
                to="/mektuplarım"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Mektuplarım</span>
              </Link>

              <Link
                to="/profil"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Profilim</span>
              </Link>

              <Link
                to="/ayarlar"
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
        <main className="ml-64 min-h-screen">
          {/* Header */}
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
            <div className="px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Hoş Geldin, {user?.user_metadata?.full_name || "Kullanıcı"}!
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Duygularını sevdiklerinle paylaşmaya hazır mısın?
                  </p>
                </div>
                <Link
                  to="/yeni-mektup"
                  className="btn-primary flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Yeni Mektup Yaz</span>
                </Link>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="p-8">
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Hızlı Mektup Oluştur
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
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
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
                  <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PenTool className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Henüz mektup yazmadınız
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                    İlk mektubunuzu yazarak sevdiklerinize duygularınızı
                    iletmeye başlayın.
                  </p>
                  <Link
                    to="/yeni-mektup"
                    className="btn-primary inline-flex items-center"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    İlk Mektubunu Yaz
                  </Link>
                </div>
              )}
            </div>

            {/* Activity Timeline */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Aktivite Geçmişi
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
                <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
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
