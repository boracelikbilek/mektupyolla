# Environment Variables Kurulum Rehberi

## .env Dosyası Yapılandırması

Projenin çalışması için `.env` dosyasında aşağıdaki değişkenleri ayarlamanız gerekmektedir.

### 1. Supabase Ayarları

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Nasıl Alınır:**

1. https://supabase.com adresine gidin
2. Projenize tıklayın
3. Settings > API bölümüne gidin
4. "Project URL" ve "anon/public" key değerlerini kopyalayın

### 2. Uygulama URL'i

```env
VITE_APP_URL=https://your-domain.com
```

**Örnekler:**

- Development: `VITE_APP_URL=http://localhost:5173`
- Vercel: `VITE_APP_URL=https://your-app.vercel.app`
- Production: `VITE_APP_URL=https://mektupyolla.com`

**Neden Gerekli:**

- OAuth redirect URL'leri için kullanılır
- Şifre sıfırlama email linkleri için kullanılır
- Google ile giriş yaptıktan sonra doğru URL'e yönlendirme için

### Tam .env Dosyası Örneği

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Application Configuration
VITE_APP_URL=http://localhost:5173
```

## Deployment Ortamları İçin

### Vercel

1. Vercel Dashboard'a gidin
2. Projenizi seçin
3. Settings > Environment Variables
4. Her değişkeni ekleyin
5. Production, Preview ve Development ortamları için ayrı değerler belirleyebilirsiniz

### Netlify

1. Netlify Dashboard'a gidin
2. Site settings > Build & deploy > Environment
3. Her değişkeni ekleyin

## Güvenlik Notları

⚠️ **ÖNEMLİ:**

- `.env` dosyasını asla Git'e commit etmeyin
- `.env` dosyası `.gitignore` içinde olmalı
- `VITE_SUPABASE_ANON_KEY` public kullanım için güvenlidir
- Asla `service_role` key'i frontend'de kullanmayın

## Sorun Giderme

### Problem: OAuth redirect çalışmıyor

**Çözüm:**

- `VITE_APP_URL` değerinin deployment URL'iniz ile eşleştiğinden emin olun
- Supabase Dashboard > Authentication > URL Configuration
- "Redirect URLs" kısmına deployment URL'inizi ekleyin

### Problem: Localhost'ta çalışıyor ama production'da çalışmıyor

**Çözüm:**

- Vercel/Netlify environment variables'ı kontrol edin
- `VITE_APP_URL` değerinin production URL'i olduğundan emin olun

### Problem: "Invalid API Key" hatası

**Çözüm:**

- Supabase key'lerini tekrar kontrol edin
- Development sunucusunu yeniden başlatın: `npm run dev`

## Test Etme

Local ortamda test etmek için:

```bash
# .env dosyasını oluşturun
cp .env.example .env

# Değişkenleri düzenleyin
nano .env  # veya VS Code ile açın

# Sunucuyu başlatın
npm run dev
```

Production'da test etmek için:

1. Deployment platform'unda environment variables'ı ayarlayın
2. Yeniden deploy edin
3. Login/Register işlemlerini test edin
