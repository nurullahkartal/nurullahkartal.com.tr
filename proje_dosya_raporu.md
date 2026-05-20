# Nurullah Kartal Kişisel Web Sitesi - Proje ve Dosya Yapısı Raporu

Bu rapor, `c:\github\nurullahkartal.com.tr` dizinindeki tüm aktif ve pasif dosyaları, klasör yapılarını ve otomasyon araçlarını açıklamak amacıyla hazırlanmıştır. Proje, eski WordPress tabanlı statik yapıdan arındırılarak modern, hızlı ve görsel odaklı bir **React + TypeScript + Tailwind CSS v4** tek sayfa uygulamasına (SPA) dönüştürülmüştür.

---

## 1. Giriş
Nurullah Kartal Kişisel Web Sitesi, ön muhasebe ve lojistik alanındaki saha tecrübenizi, eğitim hayatınızı ve teknolojiye olan hobi düzeyindeki ilginizi modern bir arayüzle sunan profesyonel bir portfolyo ve galeri sitesidir. Sitenin tüm içerikleri sadeleştirilmiş, samimi bir dile kavuşturulmuş ve gereksiz kütüphanelerden arındırılarak maksimum hıza ulaştırılmıştır.

---

## 2. Aktif Kişisel Web Sitesi Dosyaları (Hayati)
Sitenin çalışmasını sağlayan modern React tabanlı uygulama mimarisine ait temel bileşenler şunlardır:

### Klasörler:
*   **`src/`**: Uygulamanın tüm kaynak kodlarını barındıran ana klasördür.
    *   **`src/main.tsx`**: Uygulamanın giriş noktasıdır; React uygulamasını `index.html` içindeki kök elemana bağlar.
    *   **`src/App.tsx`**: Tüm sayfa geçişlerini (Ana Sayfa, Dijital Gelişim & Hobiler, Hakkımda), tema yönetimini (Dark Mode) ve arayüz bileşenlerini barındıran **ana uygulama bileşenidir**. Dijital Gelişim sekmesinde eski statik araçları ve Hakkımda sayfasında yeni eriyen iletişim alanını aktif olarak sunar.
    *   **`src/index.css`**: Tailwind CSS v4 direktiflerini içeren stil dosyasıdır.
    *   **`src/data/`**: Sitede kullanılan statik verileri barındırır.
        *   **`src/data/siteData.ts`**: Hobi projelerini (`Project` şeması) ve aktif edilen dijital web araçlarının verilerini (`WebTool` şeması) tutan veri dosyasıdır. (Kişisel fotoğraflar ön yüzden tamamen gizlenmiş olup, doğrudan site haritası üzerinden arama motorlarına sunulmaktadır).
    *   **`src/assets/`**: Uygulama içinde kullanılan yerel görsel varlıkları barındırır.
*   **`public/`**: Tarayıcıya doğrudan servis edilen statik varlıkları barındırır. Vite derleme esnasında bu dosyalara dokunmaz, aynen sunar.
    *   **`public/favicon.svg`**: Sitenin tarayıcı sekmesindeki ikonudur.
    *   **`public/images/`**: Karşılama alanında ve navigasyon header'ında sergilenen yüksek kaliteli görsel varlıkları ve `sitemap.xml` üzerinden Google botlarına sunulan kişisel fotoğrafları barındırır. Nurullah Kartal markasını temsil eden kurumsal **`nklogo.png`** görseli de bu klasördedir.
    *   **`public/doviz/`**: Portfolyoda aktif olarak sunulan, farklı para birimleri arasında anlık ve hassas dönüşüm sağlayan finansal hesaplama ve çevrim modülüdür.
    *   **`public/zerdoviz/`**: Portfolyoda aktif olarak sunulan, anlık piyasa kurlarını gerçek zamanlı izleme ve analiz etme amaçlı Zerdöviz finansal kur takip modülüdür.
    *   **`public/yazilimlar/`**: Portfolyoda aktif olarak sunulan, sektörel ve modern kurumsal web arayüz şablonlarını barındıran hazır web tasarım portalıdır.

### Yapılandırma ve Konfigürasyon Dosyaları:
*   **`index.html`**: Sitenin ana HTML şablonudur. Arama motorları için optimize edilmiş SEO meta etiketlerini ve yapılandırılmış JSON-LD veri şemasını (Person & Author) barındırır.
*   **`package.json`**: Projenin bağımlılıklarını (React, Vite, Tailwind v4 vb.) ve çalıştırılabilir terminal komutlarını barındıran temel yapılandırma dosyasıdır.
*   **`tsconfig.json` & `tsconfig.app.json` & `tsconfig.node.json`**: Projedeki kod güvenliğini ve derleme kurallarını belirleyen TypeScript konfigürasyon dosyalarıdır.
*   **`vite.config.ts`**: Vite derleyicisinin eklenti ve yapılandırma ayarlarını barındırır.
*   **`eslint.config.js`**: Kod yazım standartlarını ve kurallarını denetleyen ESLint ayar dosyasıdır.
*   **`.gitignore`**: Git versiyon kontrol sistemine dahil edilmeyecek dosyaları (örn. `node_modules`, `dist`) tanımlar.

---

## 3. Tarihsel Arşiv Dosyaları (Düzenli Klasör Yapısı)
Eski WordPress tabanlı sitenizden kalan ve tarihsel yedek niteliği taşıyan tüm varlıklar, kök dizinde dağınıklık yaratmaması için tek bir `arsiv/` klasörü altında toplanmıştır:

*   **`arsiv/`**: Eski sistem yedeklerinin toplandığı ana arşiv dizinidir.
    *   **`arsiv/index.old.html`**: Eski WordPress tabanlı sitenin ana sayfa yedek HTML kodudur.
    *   **`arsiv/files/`**: Eski siteye ait stil, font, eski JS ve resim yedeğini barındıran arşiv klasörüdür.
    *   **`arsiv/galeri/`**: Eski jQuery tabanlı fotoğraf galerisine ait dosyaları barındıran arşiv klasörüdür.

*Not: Eski `iletisim/` dizini, barındırdığı abartılı yazılım ajansı dili ("NK YAZILIM") nedeniyle tamamen silinmiş; kök dizindeki gereksiz/yinelenen ve atıl dosyalar (`demo/`, `resources/`, `nurullahkartal-blog/`, `mass_modernize.py`, `template_light.html`) ise tamamen temizlenerek geliştirme ortamı sadeleştirilmiştir.*

---

## 4. Yayınlama ve Otomasyon Dosyaları
Sitenizin internette kesintisiz ve hatasız yayınlanmasını sağlayan araçlar:

*   **`.github/workflows/deploy.yml`**: Projenin GitHub Actions üzerindeki CI/CD (Sürekli Dağıtım) boru hattıdır. Ana dala (`main` branşına) her kod gönderdiğinizde sitenizi otomatik olarak derler ve GitHub Pages üzerinde yayınlar.
*   **`CNAME`**: Sitenizin `nurullahkartal.com.tr` özel alan adı üzerinden sorunsuz çalışmasını sağlayan GitHub Pages yönlendirme dosyasıdır.
*   **`sitemap.xml`**: Arama motorlarının sitenizi kolayca indeksleyebilmesi için oluşturulmuş site haritasıdır.

---

## 5. Süreç Dosyaları
Geliştirme esnasında proje takibi ve planlaması için kullanılan ve sistemin arka planında yer alan yardımcı dökümanlardır:

*   **`task.md`** (Arka Plan Görev Listesi): Geliştirme esnasında hangi adımların tamamlandığını, hangilerinin devam ettiğini gösteren interaktif yapılacaklar listesidir.
*   **`walkthrough.md`** (Aşama Özeti): Tamamlanan geliştirme aşamalarını, performans kazanımlarını ve derleme çıktılarını kayıt altında tutan özet dosyasıdır.
*   **`implementation_plan.md`** (Uygulama Planı): Büyük mimari değişikliklerden önce hazırlanan ve geliştirici ile kullanıcı arasındaki fikir birliğini sağlayan teknik tasarım belgesidir.

*Not: Bu süreç dosyaları sistemin proje yönetim hafızasında (`C:\Users\NK\.gemini\antigravity\brain\`) tutulmakta olup, projenin kök dizininde herhangi bir kalabalık yaratmamaktadır.*

---

## 6. Proje Durumu
Proje, gereksiz bağımlılıklardan arındırılmış olup, modern **Tailwind v4** ve **TypeScript** ile kusursuz bir şekilde derlenmektedir. Yapılan test derlemesi sonuçlarına göre site, **1.2 saniye** gibi rekor bir sürede derlenmekte ve minimum paket boyutuyla maksimum tarayıcı performansı sunmaktadır.
