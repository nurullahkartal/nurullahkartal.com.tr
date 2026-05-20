import { useState, useEffect } from 'react';
import { photos, projects, webTools } from './data/siteData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'gallery' | 'projects' | 'about'>('home');
  
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
      home: "Nurullah Kartal | Muhasebe & Lojistik & Öğrenci",
      gallery: "Fotoğraflarım | Nurullah Kartal",
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
              {(['home', 'gallery', 'projects', 'about'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setCurrentTab(tab); }}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors capitalize cursor-pointer ${
                    currentTab === tab
                      ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400'
                      : 'text-slate-600 dark:text-slate-355 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-850'
                  }`}
                >
                  {tab === 'home' ? 'Ana Sayfa' : tab === 'gallery' ? 'Fotoğraflarım' : tab === 'projects' ? 'Dijital Gelişim & Hobiler' : 'Hakkımda'}
                </button>
              ))}
            </nav>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors text-lg cursor-pointer border border-slate-200/50 dark:border-slate-700/50"
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
                  <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    Muhasebe ve Lojistik Alanında Deneyimli, Atatürk Üniversitesi Öğrencisi
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-350 max-w-2xl leading-relaxed mt-4">
                    Yaklaşık 4 yıldır sahada ön muhasebe, fatura takipleri ve lojistik veri girişleri üzerine çalışıyorum. Bir yandan Atatürk Üniversitesi'nde eğitimime devam ederken, bir yandan da teknoloji ve yazılım dünyasını hobi olarak takip ediyor, kendimi geliştiriyorum.
                  </p>
                  <div className="flex justify-center md:justify-start gap-4 pt-2">
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">LinkedIn</a>
                    <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Instagram</a>
                    <a href={socialLinks.email} className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">E-Posta</a>
                  </div>
                </div>

                {/* Avatar Visual Area */}
                <div className="flex-shrink-0">
                  <div className="relative group">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-sm opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 shadow-md group-hover:scale-102 transition duration-300">
                      <img 
                        src="/images/avatar.svg" 
                        alt="Nurullah Kartal" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Öne Çıkan Fotoğraflar Bölümü */}
              <section className="space-y-6">
                <div className="flex justify-between items-baseline border-b border-slate-200 dark:border-slate-800 pb-2">
                  <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Fotoğraflarım</h2>
                  <button onClick={() => setCurrentTab('gallery')} className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">Tümünü Gör →</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {photos.slice(0, 3).map(photo => (
                    <div 
                      key={photo.id} 
                      className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 aspect-[4/3] shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                      onClick={() => setCurrentTab('gallery')}
                    >
                      <img 
                        src={photo.url} 
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 backdrop-blur-[2px]">
                        <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="font-bold text-sm line-clamp-1">{photo.title}</h3>
                          <div className="flex items-center gap-2 text-[10px] text-slate-200 mt-0.5">
                            <span>📍 {photo.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* 2. FOTOĞRAFLARIM (GALERİ) */}
          {currentTab === 'gallery' && (
            <section className="space-y-8">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white">Fotoğraflarım</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Gezdiğim şehirlerden ve kadrajıma takılan estetik kareler.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {photos.map(photo => (
                  <div 
                    key={photo.id} 
                    className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 aspect-[4/3] shadow-xs hover:shadow-md transition-all duration-300"
                  >
                    <img 
                      src={photo.url} 
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover Glassmorphism Overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 backdrop-blur-[2px]">
                      <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-bold text-base line-clamp-1">{photo.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-slate-200 mt-1">
                          <span className="flex items-center gap-1">📍 {photo.location}</span>
                          <span>📅 {photo.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
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
                    <div key={project.id} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs flex flex-col justify-between hover:shadow-sm transition-all duration-200">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                        <p className="text-slate-600 dark:text-slate-350 text-sm mt-2 leading-relaxed">{project.description}</p>
                      </div>
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.map(t => (
                            <span 
                              key={t} 
                              className="px-2 py-0.5 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 text-xs rounded border border-slate-100 dark:border-slate-800"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 text-xs font-semibold">
                          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">GitHub</a>}
                          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">Canlı Önizleme →</a>}
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
                    <div key={tool.id} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs flex flex-col justify-between hover:shadow-sm transition-all duration-200">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{tool.title}</h3>
                        <p className="text-slate-600 dark:text-slate-350 text-sm mt-2 leading-relaxed">{tool.description}</p>
                      </div>
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {tool.tech.map(t => (
                            <span 
                              key={t} 
                              className="px-2 py-0.5 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 text-xs rounded border border-slate-100 dark:border-slate-800"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="text-xs font-semibold">
                          <a href={tool.url} target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1">
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
            <section className="space-y-6 max-w-2xl">
              <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">Hakkımda</h1>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Ben Nurullah Kartal. Yaklaşık 4 yıldır sahada ön muhasebe, fatura takipleri ve lojistik veri girişleri üzerine çalışıyorum. Bir yandan iş hayatında tecrübe kazanırken, diğer yandan Atatürk Üniversitesi'nde eğitimime (Muhasebe ve Vergi Uygulamaları ile Uluslararası Ticaret ve Lojistik) aktif olarak devam ediyorum.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Yazılım ve teknoloji dünyası benim için büyük bir merak ve hobi alanı. Boş zamanlarımda kendimi denemek, yeni araçlar öğrenmek ve dijital süreçleri anlamak için küçük çalışmalar yapıyorum. Bu alanda öğrendiklerimi ve hobi amaçlı geliştirdiğim fikirleri de burada paylaşıyorum.
              </p>
              
              {/* İletişim Bilgileri (Eritilmiş Bölüm) */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3">Doğrudan İletişim</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Soru, görüş veya hobi projeleriyle ilgili işbirlikleri için benimle aşağıdaki kanallar üzerinden doğrudan iletişime geçebilirsiniz:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <div className="text-xs text-slate-500 dark:text-slate-450">E-Posta Adresi</div>
                    <a href={socialLinks.email} className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">{socialLinks.email.replace('mailto:', '')}</a>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <div className="text-xs text-slate-500 dark:text-slate-450">Lokasyon</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">Gaziantep, Türkiye</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Eğitim & Saha Deneyimi</h3>
                <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-1 text-sm">
                  <li>Atatürk Üniversitesi - Muhasebe ve Vergi Uygulamaları</li>
                  <li>Atatürk Üniversitesi - Uluslararası Ticaret ve Lojistik</li>
                  <li>Saha Deneyimi - Ön Muhasebe, Fatura ve Lojistik Veri Girişi (4 Yıl)</li>
                  <li>Teknoloji Çalışmaları - Python, İleri SQL ve İş Süreçleri Otomasyonu</li>
                </ul>
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
