import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
YAZILIM_DIR = os.path.join(BASE_DIR, 'yazilimlar', 'yazilim')
TEMPLATE_PATH = os.path.join(BASE_DIR, 'template_light.html')

products = [
    { "id": "101", "title": "Oto Kurtarma Sitesi V2", "slug": "acil-yol-yardim-oto-kurtarici-arac-tasima-v1" },
    { "id": "102", "title": "Berber & Kuaför Sitesi", "slug": "berber-v1-hazir-site" },
    { "id": "103", "title": "Dondurmacı Web Sitesi", "slug": "dondurma-pastane-tasarimi-v1" },
    { "id": "104", "title": "Düğün Fotoğrafçısı Scripti", "slug": "dugun-fotografcisi-v1" },
    { "id": "105", "title": "Ekspertiz | Oto Tamir", "slug": "ekspertiz-ve-oto-tamir-v1" },
    { "id": "106", "title": "Güzellik Salonu", "slug": "guzellik-salonu-v1" },
    { "id": "107", "title": "Halı ve Koltuk Yıkama", "slug": "hali-ve-koltuk-yikama-v1" },
    { "id": "108", "title": "Kişisel & Ajans Sitesi", "slug": "kisisel-ajans-hazir-site" },
    { "id": "109", "title": "Kişisel Portfolyo V1", "slug": "kisisel-v1-hazir-site" },
    { "id": "110", "title": "Kurumsal Firma Sitesi", "slug": "kurumsal-firma-hazir-site" },
    { "id": "111", "title": "Nakliye ve Lojistik V1", "slug": "nakliyat-tasarimi-v1" },
    { "id": "112", "title": "Psikolog Scripti", "slug": "psikolog-site-tasarimi-v1" },
    { "id": "113", "title": "Psikolog Klinik Sitesi", "slug": "psikolog-site-tasarimi-v2" },
    { "id": "114", "title": "Dijital QR Menü Sistemi", "slug": "qr-menu-hazir-site" },
    { "id": "115", "title": "Restoran & Cafe Sitesi", "slug": "restoran-hazir-site" },
    { "id": "116", "title": "Spor Salonu Scripti", "slug": "spor-salonu_v1" },
    { "id": "117", "title": "Fitness & Spor Salonu", "slug": "spor-salonu-v2" },
    { "id": "118", "title": "Gym & Spor Salonu V3", "slug": "spor-salonu-v3" },
    { "id": "119", "title": "Su Arıtma Sistemleri", "slug": "su-aritma-sistemleri-v1" },
    { "id": "120", "title": "Ürün Tanıtım & E-Ticaret", "slug": "urun-tanitim-v1" }
]

def generate():
    if not os.path.exists(TEMPLATE_PATH):
        print("Template file not found!")
        return

    with open(TEMPLATE_PATH, 'r', encoding='utf-8') as f:
        template = f.read()

    for p in products:
        slug_dir = os.path.join(YAZILIM_DIR, p['slug'])
        if not os.path.exists(slug_dir):
            os.makedirs(slug_dir)
        
        index_path = os.path.join(slug_dir, 'index.html')
        
        # Neon Tasarım Yasasına Uygun Yeni HTML
        html_content = template.replace('{title}', p['title']).replace('{id}', p['id']).replace('{slug}', p['slug'])
        
        # Ekstra Güvenlik: Eski şirket isimlerini filtrele
        html_content = html_content.replace('Ceyhan Yazılım', 'Nurullah Kartal')
        html_content = html_content.replace('CYHNYZLM', 'Digital Architect')
        
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        print(f"Oluşturuldu: {p['slug']} (ID: {p['id']})")

if __name__ == '__main__':
    generate()
