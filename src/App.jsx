import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import FAQPage from "./pages/FAQPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import CreateFutureLetterPage from "./pages/CreateFutureLetterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="iletisim" element={<ContactPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="sss" element={<FAQPage />} />
      </Route>
      <Route path="giris" element={<LoginPage />} />
      <Route path="kayit" element={<RegisterPage />} />
      <Route path="sifremi-unuttum" element={<ForgotPasswordPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="gelecege-mektup" element={<CreateFutureLetterPage />} />
    </Routes>
  );
}

export default App;
