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
