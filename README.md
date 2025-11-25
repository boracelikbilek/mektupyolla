# MektupYolla - Fiziksel Mektup Gönderme Servisi

Modern teknoloji ile geleneksel mektup kültürünü birleştiren dijital mektup gönderme platformu.

## 🚀 Özellikler

- ✉️ Online mektup yazma ve gönderme
- 🎨 Sınırsız özelleştirme seçenekleri
- 📱 Tam mobil uyumlu tasarım
- 🔒 Güvenli ödeme sistemi
- 📦 Kargo takip entegrasyonu
- 💾 Dijital mektup arşivi
- 🎭 Emoji ve renk desteği
- 🖼️ Fotoğraf ekleme özelliği

## 🛠️ Teknolojiler

- **Frontend Framework:** React 18
- **Build Tool:** Vites
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Lucide React
- **SEO:** React Helmet Async
- **Animations:** Framer Motion

## 📦 Kurulum

1. Bağımlılıkları yükleyin:

```bash
npm install
```

2. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

3. Tarayıcınızda açın:

```
http://localhost:3000
```

## 🏗️ Build

Production için build almak için:

```bash
npm run build
```

Build dosyaları `dist/` klasöründe oluşturulacaktır.

## 📁 Proje Yapısı

```
mektupyollacom/
├── public/              # Statik dosyalar
├── src/
│   ├── components/      # React bileşenleri
│   │   ├── home/       # Ana sayfa bileşenleri
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── SEO.jsx
│   ├── pages/          # Sayfa bileşenleri
│   │   ├── HomePage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── BlogPage.jsx
│   │   └── FAQPage.jsx
│   ├── App.jsx         # Ana uygulama
│   ├── main.jsx        # Giriş noktası
│   └── index.css       # Global stiller
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Tasarım Sistemi

### Renkler

- **Primary:** Indigo/Purple gradient (#6366f1)
- **Accent:** Amber (#fbbf24)
- **Background:** White/Gray

### Tipografi

- **Font:** Inter

## 🔐 Güvenlik

- SSL/TLS şifreleme
- 3D Secure ödeme
- GDPR uyumlu
- Güvenli veri saklama

## 📱 Responsive Tasarım

Tüm sayfalar aşağıdaki ekran boyutları için optimize edilmiştir:

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🌐 SEO Optimizasyonu

- Meta tag yönetimi
- Open Graph desteği
- Twitter Card desteği
- Structured Data
- Canonical URL'ler
- Robots.txt
- Sitemap

## 📄 Sayfalar

- **Ana Sayfa (/):** Hero, Mektup Türleri, Nasıl Çalışır, Neden MektupYolla, Hikayemiz
- **İletişim (/iletisim):** İletişim formu ve bilgileri
- **Blog (/blog):** Mektup yazma rehberi ve ipuçları
- **SSS (/sss):** Sıkça sorulan sorular

## 🚀 Performans

- Code splitting
- Lazy loading
- Image optimization
- Minification
- Tree shaking

## 📞 İletişim

- **E-posta:** info@mektupyolla.com
- **Web:** https://mektupyolla.com
- **Telefon:** 0850 123 45 67

## 📝 Lisans

© 2024 MektupYolla. Tüm hakları saklıdır.

## 🤝 Katkıda Bulunma

Bu proje açık kaynak değildir. Ticari bir üründür.

---

**Not:** Bu proje MAMP sunucusu üzerinde çalışmak üzere yapılandırılmıştır.
