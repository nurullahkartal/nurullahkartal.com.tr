import { useState, useEffect } from 'react';
import { 
  projects, 
  webTools, 
  educations, 
  experiences, 
  skills, 
  activities, 
  philosophies 
} from './data/siteData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'projects' | 'about'>('home');
  
  // Theme State
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Sync dark class with document element when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Dynamic Browser Tab Title Updater
  useEffect(() => {
    const tabTitleMap = {
      home: "Nurullah Kartal | Muhasebe & Lojistik Uzmanı",
      projects: "Dijital Gelişim & Hobiler | Nurullah Kartal",
      about: "Hakkımda | Nurullah Kartal"
    };
    document.title = tabTitleMap[currentTab];
  }, [currentTab]);

  // Sosyal Medya Linkleri
  const socialLinks = {
    instagram: "https://www.instagram.com/nurullahkrtal/",
    linkedin: "https://tr.linkedin.com/in/n47kartal",
    email: "mailto:nurullahkartaltr@gmail.com"
  };

  // Text Rotation Effect Loop
  const rotations = ["Muhasebe Uzmanı", "Lojistik Operasyon", "Banka Operasyonları", "e-Fatura / e-Arşiv"];
  const [rotationIndex, setRotationIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setRotationIndex((prev) => (prev + 1) % rotations.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white antialiased transition-colors duration-200 flex flex-col">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => { setCurrentTab('home'); }}
          >
            <img 
              src="/images/nklogo.png" 
              alt="Nurullah Kartal Logo" 
              className="h-9 w-auto object-contain dark:brightness-110" 
            />
            <span className="text-lg font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
              Nurullah KARTAL
            </span>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <nav className="flex space-x-1 sm:space-x-2">
              {(['home', 'projects', 'about'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setCurrentTab(tab); }}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors capitalize cursor-pointer ${
                    currentTab === tab
                      ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {tab === 'home' ? 'Ana Sayfa' : tab === 'projects' ? 'Dijital Gelişim & Hobiler' : 'Hakkımda'}
                </button>
              ))}
            </nav>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-lg cursor-pointer border border-slate-200/50 dark:border-slate-700/50"
              aria-label="Tema Değiştir"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-4xl mx-auto px-4 py-12 flex-grow w-full">
        
        {/* TAB DEĞİŞİMİNE GÖRE İÇERİK */}
        <div>
          {/* 1. ANA SAYFA */}
          {currentTab === 'home' && (
            <div className="space-y-16">
              {/* Hero Bölümü */}
              <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left py-4">
                <div className="space-y-4 flex-1">
                  <h1 className="text-4xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
                    Selam, ben Nurullah. 👋
                  </h1>
                  
                  {/* Rotating Text Badge Area */}
                  <div className="h-9 flex items-center justify-center md:justify-start">
                    <span 
                      key={rotationIndex} 
                      className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/30 rounded-lg text-sm sm:text-base font-bold tracking-wide animate-fade-in-up uppercase"
                    >
                      {rotations[rotationIndex]}
                    </span>
                  </div>

                  <p className="text-lg text-slate-600 dark:text-slate-350 max-w-2xl leading-relaxed mt-4">
                    Muhasebe, lojistik ve banka süreçleri üzerine yaklaşık 4 yıllık saha ve ofis deneyimine sahibim. Mikro, Logo ve Nes Portal programlarını aktif kullanarak e-fatura/e-arşiv süreçlerini ve resmi evrak takibini yürüttüm.
                  </p>
                  
                  {/* Social links row */}
                  <div className="flex justify-center md:justify-start gap-4 pt-2">
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">LinkedIn</a>
                    <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Instagram</a>
                    <a href={socialLinks.email} className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">E-Posta</a>
                  </div>

                  {/* Primary Call to Actions */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
                    <button 
                      onClick={() => setCurrentTab('about')} 
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                    >
                      Deneyimlerim
                    </button>
                    <button 
                      onClick={() => setCurrentTab('about')} 
                      className="px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold rounded-lg shadow-xs transition-all cursor-pointer"
                    >
                      Teknik Yetkinlikler
                    </button>
                    <button 
                      onClick={() => setCurrentTab('projects')} 
                      className="px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold rounded-lg shadow-xs transition-all cursor-pointer"
                    >
                      🚀 Hazır Yazılımlar
                    </button>
                    <a 
                      href="/files/nurullah_kartal_cv.pdf" 
                      download 
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all inline-flex items-center gap-1.5"
                    >
                      📄 CV'mi İndir
                    </a>
                  </div>
                </div>

                {/* Avatar Visual Area */}
                <div className="flex-shrink-0">
                  <div className="relative group">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-sm opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 shadow-md group-hover:scale-102 transition duration-300">
                      <img 
                        src="/images/profil.jpg" 
                        alt="Nurullah Kartal - Ön Muhasebe, Lojistik ve Banka Operasyonları Uzmanı" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Hızlı Özet (Quick Facts) Grid */}
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl text-center space-y-2 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="text-3xl select-none">🏢</div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-sm">Saha Deneyimi</h3>
                  <p className="text-xs text-slate-650 dark:text-slate-450 font-medium">4 Yıl Ön Muhasebe & Lojistik Veri Girişi</p>
                </div>
                <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl text-center space-y-2 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="text-3xl select-none">🎓</div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-sm">Akademik Eğitim</h3>
                  <p className="text-xs text-slate-650 dark:text-slate-450 font-medium">Atatürk Üniversitesi & Anadolu Üniversitesi</p>
                </div>
                <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl text-center space-y-2 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="text-3xl select-none">💻</div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-sm">Uzmanlık & ERP</h3>
                  <p className="text-xs text-slate-650 dark:text-slate-450 font-medium">Mikro, Logo, Nes Portal, MS Excel</p>
                </div>
                <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl text-center space-y-2 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="text-3xl select-none">📍</div>
                  <h3 className="font-bold text-slate-950 dark:text-white text-sm">Lokasyon</h3>
                  <p className="text-xs text-slate-650 dark:text-slate-450 font-medium">Gaziantep Merkezli</p>
                </div>
              </section>
            </div>
          )}

          {/* 3. PROJELER (DİJİTAL GELİŞİM & HOBİLER) */}
          {currentTab === 'projects' && (
            <section className="space-y-12">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white">Dijital Gelişim & Hobiler</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Tamamen hobi amaçlı, kendimi denemek ve dijital süreçleri öğrenmek adına yaptığım çalışmalar.</p>
              </div>

              {/* Öne Çıkan Dijital Çalışmalar */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                  Öne Çıkan Dijital Çalışmalar
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {projects.map(project => (
                    <div key={project.id} className="p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl shadow-xs hover:shadow-md hover:border-indigo-500/40 dark:hover:border-indigo-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl select-none">🚀</span>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{project.title}</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed">{project.description}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.map(t => (
                            <span 
                              key={t} 
                              className="px-2.5 py-0.5 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-450 text-xs rounded border border-slate-100 dark:border-slate-850 font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3 text-xs font-semibold">
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="px-3.5 py-1.5 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                            >
                              GitHub
                            </a>
                          )}
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg text-xs font-semibold shadow-xs hover:shadow-sm transition-all cursor-pointer"
                            >
                              Canlı Önizleme →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Web Araçları & Portallar */}
              <div className="space-y-6 pt-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                  Web Araçları & Portallar
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {webTools.map(tool => (
                    <div key={tool.id} className="p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl shadow-xs hover:shadow-md hover:border-indigo-500/40 dark:hover:border-indigo-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl select-none">⚡</span>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{tool.title}</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed">{tool.description}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {tool.tech.map(t => (
                            <span 
                              key={t} 
                              className="px-2.5 py-0.5 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-450 text-xs rounded border border-slate-100 dark:border-slate-850 font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="text-xs font-semibold">
                          <a 
                            href={tool.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg text-sm font-semibold shadow-xs hover:shadow-sm transition-all cursor-pointer"
                          >
                            Uygulamayı Başlat ⚡
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 4. HAKKIMDA */}
          {currentTab === 'about' && (
            <section className="space-y-12">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white">Hakkımda</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Saha tecrübelerim, uzmanlık alanlarım ve iş felsefem.</p>
              </div>

              {/* Tanıtım Yazıları */}
              <div className="space-y-4 max-w-2xl text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  Ben Nurullah Kartal. Yaklaşık 4 yıldır sahada ön muhasebe, fatura takipleri ve lojistik veri girişleri üzerine çalışıyorum. Bir yandan iş hayatında tecrübe kazanırken, diğer yandan Atatürk Üniversitesi ve Anadolu Üniversitesi bünyesinde eğitimime (Muhasebe ve Vergi Uygulamaları ile Uluslararası Ticaret ve Lojistik) aktif olarak devam ediyorum.
                </p>
                <p>
                  Yazılım ve teknoloji dünyası benim için büyük bir merak ve hobi alanı. Boş zamanlarımda kendimi denemek, yeni araçlar öğrenmek ve dijital süreçleri anlamak için küçük çalışmalar yapıyorum. Bu alanda öğrendiklerimi ve hobi amaçlı geliştirdiğim fikirleri de burada paylaşıyorum.
                </p>
              </div>

              {/* İletişim Bilgileri Grid */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Doğrudan İletişim</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-xl">
                    <div className="text-xs text-slate-500 dark:text-slate-450 font-semibold uppercase tracking-wider">E-Posta Adresi</div>
                    <a href={socialLinks.email} className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline mt-1 block truncate">
                      {socialLinks.email.replace('mailto:', '')}
                    </a>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-xl">
                    <div className="text-xs text-slate-500 dark:text-slate-450 font-semibold uppercase tracking-wider">Lokasyon</div>
                    <div className="font-bold text-slate-800 dark:text-slate-200 mt-1">Gaziantep, Türkiye</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-xl">
                    <div className="text-xs text-slate-500 dark:text-slate-450 font-semibold uppercase tracking-wider">Sosyal Profiller</div>
                    <div className="flex gap-3 mt-1.5 text-sm">
                      <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline">LinkedIn</a>
                      <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Çalışma Felsefem Grid */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Çalışma Felsefem</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {philosophies.map(p => (
                    <div key={p.id} className="p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-xl flex gap-4 hover:shadow-xs transition-shadow duration-200">
                      <span className="text-3xl select-none">{p.icon}</span>
                      <div>
                        <h4 className="font-bold text-slate-950 dark:text-white text-base">{p.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* İş Deneyimi Chronological Timeline */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">İş Deneyimi</h3>
                <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
                  {experiences.map(exp => (
                    <div key={exp.id} className="pl-10 relative group">
                      <span className="absolute left-[11px] top-2.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white dark:border-slate-950 group-hover:scale-125 transition-transform duration-200"></span>
                      <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-xl hover:border-slate-350 dark:hover:border-slate-700 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{exp.period}</span>
                          {exp.companyUrl ? (
                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 underline decoration-indigo-500/30">
                              {exp.company}
                            </a>
                          ) : (
                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{exp.company}</span>
                          )}
                        </div>
                        <h4 className="text-lg font-bold text-slate-950 dark:text-white">{exp.role}</h4>
                        <ul className="list-disc list-outside pl-4 mt-3 text-sm text-slate-600 dark:text-slate-400 space-y-1.5 leading-relaxed">
                          {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eğitim Bilgilerim Grid */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Eğitim Bilgilerim</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {educations.map(edu => (
                    <div key={edu.id} className="p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-xl flex flex-col justify-between items-center text-center hover:shadow-xs transition-shadow">
                      <div className="w-16 h-16 flex items-center justify-center bg-slate-50 dark:bg-slate-950 rounded-full overflow-hidden p-2 border border-slate-100 dark:border-slate-850 shadow-inner">
                        {edu.logoUrl ? (
                          <img src={edu.logoUrl} alt={edu.school} className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        ) : (
                          <span className="text-xs font-bold text-slate-400">{edu.fallbackText}</span>
                        )}
                      </div>
                      <div className="mt-4 flex-grow flex flex-col justify-center">
                        <h4 className="font-bold text-sm text-slate-950 dark:text-white line-clamp-1">{edu.degree}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-450 mt-1 line-clamp-2">{edu.school}</p>
                      </div>
                      <span className="mt-4 px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] rounded font-medium">{edu.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Yetkinlikler & Programlar Progress Bar */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Yetkinlikler & Programlar</h3>
                <div className="space-y-4 p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-xl">
                  {skills.map(s => (
                    <div key={s.name} className="space-y-1.5">
                      <div className="flex justify-between text-sm font-semibold">
                        <span className="text-slate-800 dark:text-slate-200">{s.name}</span>
                        <span className="text-indigo-600 dark:text-indigo-400">{s.value}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-850 rounded-full overflow-hidden border border-slate-200/30 dark:border-slate-800/20">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 rounded-full transition-all duration-1000" 
                          style={{ width: `${s.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Son Etkinlikler GDG Badge */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Son Etkinlikler</h3>
                <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-xl flex gap-6 hover:shadow-xs transition-shadow">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-2xl select-none shadow-sm">in</div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-baseline gap-2 flex-wrap">
                      <h4 className="font-bold text-slate-950 dark:text-white text-base">{activities[0].title}</h4>
                      <span className="text-xs text-slate-500 dark:text-slate-450">{activities[0].date}</span>
                    </div>
                    <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">{activities[0].organizer}</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">{activities[0].description}</p>
                    {activities[0].url && (
                      <a href={activities[0].url} target="_blank" rel="noreferrer" className="inline-block mt-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 px-4 py-2 rounded-lg transition-colors cursor-pointer shadow-xs">
                        LinkedIn Gönderisini Görüntüle
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Sertifikalar & Diller Gray Blocks */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-xl flex gap-4 items-center">
                    <span className="text-3xl select-none">📜</span>
                    <div>
                      <h4 className="font-bold text-slate-950 dark:text-white">Sertifikalar</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-450 mt-0.5">Muhasebe Dalı Kalfalık ve Ustalık Belgesi</p>
                    </div>
                  </div>
                  <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-xl flex gap-4 items-center">
                    <span className="text-3xl select-none">🌐</span>
                    <div>
                      <h4 className="font-bold text-slate-950 dark:text-white">Diller</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-450 mt-0.5">Türkçe (Anadil), Kürtçe (Anadil)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div>© 2026 Nurullah Kartal. Tüm hakları saklıdır.</div>
          <div className="flex gap-4">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
