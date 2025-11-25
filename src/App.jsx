import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import FAQPage from './pages/FAQPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="iletisim" element={<ContactPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="sss" element={<FAQPage />} />
      </Route>
    </Routes>
  )
}

export default App
