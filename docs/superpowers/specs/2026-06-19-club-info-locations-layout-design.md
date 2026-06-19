# Kulüp Bilgileri ve Konumlar Yerleşim Tasarımı

## Amaç

Ana sayfadaki konum kartlarını, “Elazığ'ın En Büyük ve En Donanımlı Spor Salonu” bölümündeki bilgi kartlarının hemen altına taşımak. Büyük “Bizi Ziyaret Edin” başlığını kaldırarak iletişim ve şube bilgilerini tek, kesintisiz bir içerik alanında toplamak.

## Onaylanan Görsel Yaklaşım

Seçilen yaklaşım: **B — küçük bölüm etiketi**.

- Mevcut “Kulüp Bilgileri” etiketi, ana başlık, açıklama ve dört bilgi kartı korunacak.
- Dört bilgi kartından sonra küçük, altın renkli “Konumlarımız” etiketi gösterilecek.
- Elazığ Ana Şube ve Ataşehir Şubesi kartları bu etiketin hemen altında yer alacak.
- “Bizi Ziyaret Edin” büyük başlığı ve ona ait üst başlık alanı kaldırılacak.
- Konum kartlarının mevcut harita, adres, “Yakında Açılıyor” ve “Haritada Aç” davranışları korunacak.

## İçerik

Bilgi kartlarında aşağıdaki içerik kullanılacak:

1. **İletişim**
   - Telefon: 0533 688 82 82
   - E-posta: optimumfitnesselazig@hotmail.com
   - Adres: Cumhuriyet Mah. Üniversite Sk. No:1, Elysium AVM Bitişiği, Elazığ 23100
2. **Çalışma Saatleri**
   - Pazartesi – Cumartesi: 10:00 – 22:00
   - Pazar: Bayan bölümü kapalı
   - Ramazan Ayı: 11:00 – 23:00, Pazar kapalı
   - Zumba & Pilates Seansları: Pzt / Sal / Per / Cuma / Cmt 19:00
3. **Sosyal Kanıt**
   - Instagram: 7.669 takipçi
   - Facebook: 3,4K takipçi
   - Tavsiye Oranı: %98
4. **Ataşehir Şubesi**
   - Durum: Yakında Açılıyor
   - Alan: 2.200 m²
   - Özellikler: Modern Ekipmanlar · Uzman Antrenörler · Kadın ve Erkek Bölümleri Ayrı

## Bileşen Yapısı

- `ClubInfo` ana bölüm kabuğunu, başlığı, açıklamayı ve bilgi kartlarını yönetmeye devam edecek.
- `Locations`, bağımsız tam genişlikte bir bölüm olmaktan çıkarılıp `ClubInfo` içinde kullanılabilecek bir konum kartları bloğuna dönüştürülecek.
- `app/page.tsx` içindeki ayrı `Locations` çağrısı kaldırılacak.
- Konum verileri ve harita bağlantıları `Locations` bileşeninde kalacak; gereksiz veri tekrarı oluşturulmayacak.

## Duyarlı Yerleşim

- Bilgi kartları mevcut şekilde mobilde tek, tablette iki, geniş ekranda dört sütun olacak.
- Konum kartları mobilde tek, geniş ekranda iki sütun olacak.
- “Konumlarımız” etiketi bilgi kartlarıyla konum kartları arasında yeterli dikey boşlukla gösterilecek.
- Birleşen bölümde üst üste yığılmış büyük dış boşluklar azaltılacak.

## Erişilebilirlik ve Davranış

- Telefon, e-posta ve sosyal medya bağlantıları mevcut erişilebilir bağlantı davranışlarını koruyacak.
- Harita iframe başlığı ve dış bağlantı özellikleri korunacak.
- Hareket animasyonları mevcut `framer-motion` yaklaşımıyla devam edecek ve sitenin azaltılmış hareket ayarlarıyla uyumlu kalacak.

## Test ve Doğrulama

- Ana sayfada `Locations` bileşeninin ayrı kardeş bölüm olarak render edilmediğini doğrulayan regresyon testi eklenecek.
- “Bizi Ziyaret Edin” başlığının kaldırıldığı ve “Konumlarımız” etiketinin bulunduğu doğrulanacak.
- İletişim, çalışma saatleri, sosyal kanıt ve Ataşehir içeriklerinin korunduğu doğrulanacak.
- Mevcut test paketi ve üretim derlemesi çalıştırılacak.
- Yerel sunucuda masaüstü ve mobil yerleşim görsel olarak kontrol edilecek.

## Kapsam Dışı

- Şube verilerinin harici bir CMS veya API'ye taşınması
- Yeni harita sağlayıcısı eklenmesi
- Bilgi kartlarının metin veya renk tasarımının yeniden oluşturulması
- Footer ya da diğer ana sayfa bölümlerinin yeniden düzenlenmesi
