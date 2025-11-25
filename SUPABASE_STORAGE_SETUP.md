# Supabase Storage Kurulumu - Zarf Görselleri

## 1. Bucket Oluşturma

1. Supabase Dashboard'a gidin: https://supabase.com/dashboard
2. Projenizi seçin: `crdsrjcicdbgnylfjewd`
3. Sol menüden **Storage** seçeneğine tıklayın
4. **Create a new bucket** butonuna tıklayın
5. Bucket ayarları:
   - **Name**: `envelopes`
   - **Public bucket**: ✅ İşaretleyin (görseller herkese açık olmalı)
   - **File size limit**: 5 MB (varsayılan)
   - **Allowed MIME types**: `image/*` (tüm resim formatları)

## 2. Zarf Görsellerini Yükleme

Bucket oluşturduktan sonra aşağıdaki görselleri yükleyin:

### Gerekli Zarf Görselleri (6 Adet):

1. **kraft.jpg** - Kraft kağıt zarf
2. **pink.jpg** - Pembe zarf
3. **blue.jpg** - Mavi zarf
4. **white.jpg** - Beyaz zarf
5. **heart.jpg** - Kalpli zarf
6. **pattern.jpg** - Desenli zarf

### Yükleme Adımları:

1. `envelopes` bucket'ına tıklayın
2. **Upload file** butonuna tıklayın
3. Görselleri sürükleyip bırakın veya seçin
4. Her görsel için dosya adının yukarıdaki gibi olduğundan emin olun

## 3. Public URL Yapısı

Yüklenen görsellerin URL'leri şu formatta olacak:

```
https://crdsrjcicdbgnylfjewd.supabase.co/storage/v1/object/public/envelopes/kraft.jpg
https://crdsrjcicdbgnylfjewd.supabase.co/storage/v1/object/public/envelopes/pink.jpg
https://crdsrjcicdbgnylfjewd.supabase.co/storage/v1/object/public/envelopes/blue.jpg
https://crdsrjcicdbgnylfjewd.supabase.co/storage/v1/object/public/envelopes/white.jpg
https://crdsrjcicdbgnylfjewd.supabase.co/storage/v1/object/public/envelopes/heart.jpg
https://crdsrjcicdbgnylfjewd.supabase.co/storage/v1/object/public/envelopes/pattern.jpg
```

## 4. Alternatif: Placeholder Görseller

Eğer henüz gerçek görsellere sahip değilseniz, geçici olarak placeholder kullanabilirsiniz:

```
https://placehold.co/400x300/e8d7c3/8b4513?text=Kraft+Zarf
https://placehold.co/400x300/ffc0cb/c71585?text=Pembe+Zarf
https://placehold.co/400x300/87ceeb/4169e1?text=Mavi+Zarf
https://placehold.co/400x300/ffffff/000000?text=Beyaz+Zarf
https://placehold.co/400x300/ff69b4/c71585?text=Kalpli+Zarf
https://placehold.co/400x300/f0e68c/8b4513?text=Desenli+Zarf
```

## 5. Kod Entegrasyonu

Görseller yüklendikten sonra, `CreateFutureLetterPage.jsx` içinde bu URL'leri kullanacağız.

## 6. Güvenlik (Opsiyonel)

Public bucket kullandığımız için herkes görsellere erişebilir. Bu zarflar için sorun değil ama kullanıcı yüklemeleri için ayrı bir private bucket oluşturun.
