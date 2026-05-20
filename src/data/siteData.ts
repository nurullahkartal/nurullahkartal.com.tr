export interface Photo {
  id: string;
  url: string;
  title: string;
  location: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface WebTool {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url: string;
}

export const photos: Photo[] = [
  {
    id: "gaziantep-1",
    url: "/images/gaziantep.svg",
    title: "Tarihi Bakırcılar Çarşısı Esintileri",
    location: "Gaziantep",
    date: "Eylül 2025"
  },
  {
    id: "ankara-1",
    url: "/images/ankara.svg",
    title: "Akşam Alacakaranlığında Başkent",
    location: "Ankara",
    date: "Kasım 2025"
  },
  {
    id: "mardin-1",
    url: "/images/mardin.svg",
    title: "Güneşin Altında Tarihi Mardin Evleri",
    location: "Mardin",
    date: "Nisan 2026"
  }
];

export const projects: Project[] = [
  {
    id: "nk-ai",
    title: "NK AI Geliştirme Ortamı",
    description: "Teknolojiye meraklıyım. Boş zamanlarımda tamamen hobi amaçlı ve kendimi denemek için kurguladığım, yapay zeka entegrasyonu üzerine fikir ve SEO aşamalarıyla uğraştığım küçük bir dijital çalışma.",
    tech: ["React", "TypeScript", "Vite"],
    githubUrl: "https://github.com/nurullahkartal"
  }
];

export const webTools: WebTool[] = [
  {
    id: "doviz-takip",
    title: "Finansal Döviz Takip Modülü (Zerdöviz)",
    description: "Anlık piyasa kurlarını ve finansal verileri gerçek zamanlı izlemek ve analiz etmek amacıyla geliştirilmiş, yüksek performanslı takip modülü.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "/zerdoviz/zerdoviz.html"
  },
  {
    id: "doviz-hesapla",
    title: "Döviz Hesaplama ve Çevrim Modülü",
    description: "Farklı para birimleri arasında anlık ve hassas dönüşüm sağlayan, hızlı ve kullanıcı dostu finansal çevrim aracı.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "/doviz/doviz.html"
  },
  {
    id: "yazilim-portal",
    title: "Sektörel Hazır Web Tasarım Portalı",
    description: "Farklı iş kolları ve sektörler için optimize edilmiş, modern ve responsive kurumsal web arayüz şablonlarını barındıran profesyonel tasarım vitrini.",
    tech: ["HTML", "CSS", "PHP"],
    url: "/yazilimlar/"
  }
];

export interface Education {
  id: string;
  degree: string;
  school: string;
  date: string;
  logoUrl?: string;
  fallbackText: string;
}

export interface Experience {
  id: string;
  period: string;
  company: string;
  companyUrl?: string;
  role: string;
  bullets: string[];
}

export interface Skill {
  name: string;
  value: number;
}

export interface Activity {
  id: string;
  title: string;
  organizer: string;
  date: string;
  description: string;
  url?: string;
}

export interface PhilosophyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const educations: Education[] = [
  {
    id: "edu-1",
    degree: "Muhasebe ve Finansman",
    school: "Mesleki Teknik Anadolu Lisesi (MESEM)",
    date: "Haziran 2024 Mezun",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStNfMqA_gpYzPqEJ6BiL4EKzxNmLep3s8cCw&s",
    fallbackText: "MESEM"
  },
  {
    id: "edu-2",
    degree: "Uluslararası Ticaret ve Lojistik",
    school: "Anadolu Üniversitesi (Açıköğretim)",
    date: "2024 – Devam Ediyor",
    logoUrl: "https://upload.wikimedia.org/wikipedia/tr/archive/a/a7/20140328173903%21Anadolu_%C3%9Cniversitesi_logo.png",
    fallbackText: "AÖF"
  },
  {
    id: "edu-3",
    degree: "Muhasebe ve Vergi Uygulamaları",
    school: "Atatürk Üniversitesi (Açıköğretim)",
    date: "2024 – Devam Ediyor",
    logoUrl: "https://upload.wikimedia.org/wikipedia/tr/9/91/Ataturk_Universitesi_logo.png",
    fallbackText: "AÖF"
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    period: "Kasım 2025 - Ocak 2026",
    company: "SOLVİSS YAZILIM",
    companyUrl: "https://www.solviss.net/",
    role: "Banka ve Operasyon Destek Elemanı",
    bullets: [
      "Şirketin banka işlemlerinin ve finansal evrak trafiğinin ofis dışı takibi ve yürütülmesi.",
      "Resmi kurumlarla olan evrak süreçlerinin yönetilmesi ve idari operasyonel destek sağlanması."
    ]
  },
  {
    id: "exp-2",
    period: "Eylül 2025 - Kasım 2025",
    company: "TEKKELİOĞLU YUMURTA",
    companyUrl: "https://www.tekkelioglu.com/",
    role: "Lojistik Departmanı (Veri Giriş)",
    bullets: [
      "Lojistik operasyonlarında araç giriş-çıkış süreçlerinin sistem üzerinden takibi ve kayıt altına alınması.",
      "Operasyonel verilerin sisteme düzenli girişinin sağlanması ve süreç yönetimi desteği."
    ]
  },
  {
    id: "exp-3",
    period: "Şubat 2022 - Ağustos 2025",
    company: "ALTUNKAYNAK GRUP / ALTUNTUR",
    companyUrl: "https://www.altuntur.com/",
    role: "Muhasebe ve Operasyon (Staj ve Çalışma)",
    bullets: [
      "Günlük muhasebe kayıtlarının işlenmesi, banka hesap mutabakatları ve gelir-gider takibi.",
      "İrsaliye yönetimi, alış-satış ve ihracat faturalarının düzenlenmesi, DAB takibi.",
      "Mikro üzerinden e-Fatura/e-Arşiv süreçlerinin ve fatura kesim işlemlerinin yürütülmesi.",
      "Cari hesap takibi ve vergi beyannameleri için ön hazırlık ve belge düzenleme desteği.",
      "Araç işlemleri takipleri ve arşivleme süreçlerinin yönetilmesi."
    ]
  }
];

export const skills: Skill[] = [
  { name: "Mikro Yazılım", value: 90 },
  { name: "Logo Yazılım", value: 85 },
  { name: "Nes Portal", value: 85 },
  { name: "MS Office (Excel, Word)", value: 95 },
  { name: "e-Fatura / e-Arşiv", value: 90 }
];

export const activities: Activity[] = [
  {
    id: "act-1",
    title: "DevFest 2025 Gaziantep Katılımı",
    organizer: "GDG Gaziantep",
    date: "Aralık 2025",
    description: "Teknoloji dünyasındaki güncel gelişmeleri ve yeni araçları deneyimleme fırsatı bulduğum DevFest 2025 etkinliği çok ilham vericiydi.",
    url: "https://tr.linkedin.com/posts/n47kartal_devfest2025-gdggaziantep-yaz%C4%B1l%C4%B1mgeli%C5%9Ftirme-activity-7387895373123702784-gDq1"
  }
];

export const philosophies: PhilosophyItem[] = [
  {
    id: "phil-1",
    title: "Nasıl Çalışırım?",
    description: "Titiz, planlı ve süreç odaklı çalışırım. Muhasebe kayıtlarında ve operasyonel takiplerde hatasız ilerlemek için her adımı kontrol ederim.",
    icon: "📋"
  },
  {
    id: "phil-2",
    title: "Uzmanlıklarım",
    description: "Asıl uzmanlığım ön muhasebe, fatura süreçleri ve operasyonel veri takibidir. Mikro ve Logo programlarında deneyimliyim.",
    icon: "💻"
  },
  {
    id: "phil-3",
    title: "Banka & Resmi İşlemler",
    description: "Banka mutabakatları, resmi kurum evrak takibi ve şirket dışı operasyonel işlemlerde deneyim sahibiyim.",
    icon: "🏦"
  },
  {
    id: "phil-4",
    title: "Lojistik Destek",
    description: "Araç giriş-çıkış takibi, irsaliye yönetimi ve sevkiyat planlama konularında aktif rol aldım.",
    icon: "🚛"
  }
];

