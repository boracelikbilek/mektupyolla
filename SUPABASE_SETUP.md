# Supabase Entegrasyon Rehberi - MektupYolla

## 📋 Yapılması Gerekenler

### 1. Supabase Kurulumu

#### Adım 1: Supabase Package'ini Yükleyin
Terminalde şu komutu çalıştırın:
```bash
npm install @supabase/supabase-js
```

#### Adım 2: Supabase Projesi Oluşturun
1. https://supabase.com adresine gidin
2. "Start your project" butonuna tıklayın
3. GitHub hesabınızla giriş yapın
4. "New project" butonuna tıklayın
5. Proje bilgilerini doldurun:
   - Name: `mektupyolla` veya istediğiniz bir isim
   - Database Password: Güçlü bir şifre seçin (kaydedin!)
   - Region: `Europe (Frankfurt)` veya size yakın bir bölge
   - Pricing Plan: `Free` (Başlangıç için yeterli)

#### Adım 3: API Keys'i Alın
1. Proje oluşturulduktan sonra, sol menüden "Settings" > "API" bölümüne gidin
2. Şu bilgileri kopyalayın:
   - `Project URL` (VITE_SUPABASE_URL)
   - `anon/public` key (VITE_SUPABASE_ANON_KEY)

#### Adım 4: .env Dosyası Oluşturun
Proje kök dizininde `.env` dosyası oluşturun ve şu bilgileri ekleyin:

```env
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

**ÖNEMLİ:** `.env` dosyasını `.gitignore` dosyanıza ekleyin!

### 2. Supabase Authentication Ayarları

#### Adım 1: Email Authentication'ı Etkinleştirin
1. Supabase Dashboard'da "Authentication" > "Providers" bölümüne gidin
2. "Email" provider'ı etkinleştirin
3. "Enable email confirmations" seçeneğini açın/kapalı tutun (tercihinize göre)

#### Adım 2: Google OAuth Ayarlayın
1. [Google Cloud Console](https://console.cloud.google.com/) adresine gidin
2. Yeni bir proje oluşturun veya mevcut projeyi seçin
3. "APIs & Services" > "Credentials" bölümüne gidin
4. "Create Credentials" > "OAuth 2.0 Client ID" seçin
5. Uygulama türü olarak "Web application" seçin
6. Authorized redirect URIs kısmına şu URL'i ekleyin:
   ```
   https://your-project-ref.supabase.co/auth/v1/callback
   ```
   (your-project-ref kısmını kendi Supabase proje URL'inizden alın)
7. Client ID ve Client Secret'i kopyalayın
8. Supabase Dashboard'a dönün
9. "Authentication" > "Providers" > "Google" bölümüne gidin
10. "Enable Google" seçeneğini açın
11. Client ID ve Client Secret'i yapıştırın
12. Save butonuna tıklayın

#### Adım 3: URL Configuration
1. "Authentication" > "URL Configuration" bölümüne gidin
2. "Site URL" olarak production URL'inizi ekleyin (örn: https://mektupyolla.com)
3. "Redirect URLs" kısmına şu URL'leri ekleyin:
   ```
   http://localhost:5173/**
   https://mektupyolla.com/**
   ```

### 3. Database Schema Oluşturun (Opsiyonel - Gelecekte kullanmak için)

Supabase SQL Editor'da şu tabloları oluşturabilirsiniz:

```sql
-- Kullanıcı profilleri için ek bilgiler
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) politikaları
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" 
  ON profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
  ON profiles FOR UPDATE 
  USING (auth.uid() = id);

-- Yeni kullanıcı kaydında otomatik profil oluşturma
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Mektuplar tablosu
CREATE TABLE letters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  recipient_name TEXT NOT NULL,
  recipient_address TEXT NOT NULL,
  content TEXT NOT NULL,
  letter_type TEXT NOT NULL,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE letters ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own letters" 
  ON letters FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own letters" 
  ON letters FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own letters" 
  ON letters FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own letters" 
  ON letters FOR DELETE 
  USING (auth.uid() = user_id);
```

## ✅ Yapılan Değişiklikler

### Oluşturulan Dosyalar:
- ✅ `/src/lib/supabase.js` - Supabase client konfigürasyonu
- ✅ `/src/contexts/AuthContext.jsx` - Authentication context ve hooks
- ✅ `/.env.example` - Environment variables şablonu

### Güncellenen Dosyalar:
- ✅ `/src/pages/LoginPage.jsx` - Supabase login entegrasyonu
- ✅ `/src/pages/RegisterPage.jsx` - Supabase register entegrasyonu
- ✅ `/src/pages/ForgotPasswordPage.jsx` - Şifre sıfırlama entegrasyonu
- ✅ `/src/main.jsx` - AuthProvider eklendi

### UI İyileştirmeleri:
- ✅ Dark mode'da başlıklar beyaz renkte
- ✅ Logo boyutları büyütüldü (h-16 & h-24)
- ✅ "MektupYolla" span'ları kaldırıldı
- ✅ Navbar yazıları merkezlendi
- ✅ Navbar arkaplan rengi yumuşatıldı (primary-500/90)
- ✅ Light mode renkleri yumuşatıldı (primary-400 to primary-600)
- ✅ Login/Register sayfalarında logo tam gözüküyor

## 🧪 Test Etme

### 1. Uygulamayı Başlatın
```bash
npm run dev
```

### 2. Test Senaryoları
1. **Kayıt Olma:**
   - `/kayit` sayfasına gidin
   - E-posta, şifre ve ad soyad girin
   - "Kayıt Ol" butonuna tıklayın
   - E-posta onayı (enabled ise) bekleyin

2. **Giriş Yapma:**
   - `/giris` sayfasına gidin
   - E-posta ve şifre ile giriş yapın

3. **Google ile Giriş:**
   - "Google ile Giriş Yap" butonuna tıklayın
   - Google hesabınızı seçin

4. **Şifre Sıfırlama:**
   - `/sifremi-unuttum` sayfasına gidin
   - E-posta adresinizi girin
   - E-postanıza gelen linke tıklayın

## 🔒 Güvenlik Notları

1. **Environment Variables:**
   - `.env` dosyasını asla Git'e commit etmeyin
   - Production'da environment variables'ları host platformunuzda ayarlayın

2. **API Keys:**
   - Anon key public kullanım içindir (frontend'de kullanılabilir)
   - Service role key'i asla frontend'de kullanmayın

3. **Row Level Security (RLS):**
   - Tüm tablolarda RLS aktif olmalı
   - Her kullanıcı sadece kendi verilerine erişebilmeli

## 📚 Ek Kaynaklar

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [React + Supabase Tutorial](https://supabase.com/docs/guides/getting-started/tutorials/with-react)

## 🐛 Sorun Giderme

### Hata: "Invalid API Key"
- `.env` dosyasındaki key'leri kontrol edin
- Geliştirme sunucusunu yeniden başlatın

### Hata: "Email not confirmed"
- Supabase Dashboard > Authentication > Settings
- "Enable email confirmations" seçeneğini kapatın (development için)

### Google OAuth çalışmıyor
- Authorized redirect URIs'ı kontrol edin
- Google Cloud Console'da OAuth consent screen'i ayarlayın
- Supabase'de Google provider ayarlarını kontrol edin

## 🎉 Sonuç

Tüm adımlar tamamlandığında:
- ✅ Kullanıcılar email ile kayıt olabilir
- ✅ Kullanıcılar email ile giriş yapabilir
- ✅ Kullanıcılar Google ile giriş yapabilir
- ✅ Kullanıcılar şifrelerini sıfırlayabilir
- ✅ Authentication state global olarak yönetilir
- ✅ UI dark mode ve light mode'da mükemmel görünür
