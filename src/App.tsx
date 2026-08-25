import { useState, useEffect } from 'react';
import { slides } from './content/slides';
import type { Language } from './content/types';
import { uiTranslations } from './i18n';
import { ChevronRight, ChevronLeft, LayoutGrid, Smartphone } from 'lucide-react';

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [lang, setLang] = useState<Language>('en');
  const [showNotes, setShowNotes] = useState(false);
  const [safeMode] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  
  // Parse hash on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const idx = slides.findIndex(s => s.id === hash);
      if (idx !== -1) setCurrentSlideIndex(idx);
    }
  }, []);

  // Update hash when slide changes
  useEffect(() => {
    window.location.hash = slides[currentSlideIndex].id;
  }, [currentSlideIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        setCurrentSlideIndex(prev => Math.min(slides.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentSlideIndex(prev => Math.max(0, prev - 1));
      } else if (e.key === 'Home') {
        setCurrentSlideIndex(0);
      } else if (e.key === 'End') {
        setCurrentSlideIndex(slides.length - 1);
      } else if (e.key === 'g') {
        setShowGrid(prev => !prev);
      } else if (e.key === 'n') {
        setShowNotes(prev => !prev);
      } else if (e.key === '?') {
        alert(uiTranslations[lang].pressQuestionMark + "\n\nRight/Space: Next\nLeft: Prev\nG: Grid View\nN: Notes");
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lang]);

  const CurrentSlideComponent = slides[currentSlideIndex].component;
  const currentNotes = lang === 'en' ? slides[currentSlideIndex].notesEn : 
                       lang === 'tr' ? slides[currentSlideIndex].notesTr : 
                       slides[currentSlideIndex].notesKk;
  const progress = ((currentSlideIndex + 1) / slides.length) * 100;
  const t = uiTranslations[lang];

  return (
    <div className="presentation-container">
      
      {/* Mobile Rotate Overlay */}
      <div className="mobile-rotate-overlay">
        <Smartphone size={64} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem', animation: 'pulse 2s infinite' }} />
        <h2>
          {lang === 'en' ? 'Please rotate your device' : 
           lang === 'tr' ? 'Lütfen cihazınızı yan çevirin' : 
           'Құрылғыны бұрыңыз'}
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          {lang === 'en' ? 'This presentation is designed for landscape mode.' : 
           lang === 'tr' ? 'Bu sunum yatay mod için tasarlanmıştır.' : 
           'Бұл презентация ландшафт режиміне арналған.'}
        </p>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="top-controls">
        <div style={{ display: 'flex', gap: '0.2rem', background: 'rgba(0,0,0,0.3)', padding: '0.2rem', borderRadius: '8px' }}>
          <button 
            className={lang === 'en' ? 'active' : ''} 
            onClick={() => setLang('en')}
            title="English"
            style={{ padding: '0.4rem 0.8rem', borderRadius: '6px' }}
          >
            EN
          </button>
          <button 
            className={lang === 'tr' ? 'active' : ''} 
            onClick={() => setLang('tr')}
            title="Türkçe"
            style={{ padding: '0.4rem 0.8rem', borderRadius: '6px' }}
          >
            TR
          </button>
          <button 
            className={lang === 'kk' ? 'active' : ''} 
            onClick={() => setLang('kk')}
            title="Қазақша"
            style={{ padding: '0.4rem 0.8rem', borderRadius: '6px' }}
          >
            KK
          </button>
        </div>
        <button 
          className={showGrid ? 'active' : ''} 
          onClick={() => setShowGrid(!showGrid)}
          title="Grid View (G)"
        >
          <LayoutGrid size={16} />
        </button>
      </div>

      {/* Persistent Top Header */}
      <div style={{ 
        position: 'absolute', 
        top: '1.5rem', 
        left: '50%', 
        transform: 'translateX(-50%)',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center', 
        gap: '2rem', 
        padding: '0.6rem 2rem', 
        background: 'rgba(26, 29, 36, 0.8)', 
        borderRadius: '12px', 
        border: '1px solid var(--border-color)',
        zIndex: 90,
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        <img src="./ihconcs_logo.png" alt="IHCONCS Logo" style={{ height: '35px', objectFit: 'contain' }} />
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ margin: '0 0 0.2rem 0', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
            {lang === 'en' ? 'The International Conference on Computer Sciences (IHCONCS 2026)' : 
             lang === 'tr' ? 'Uluslararası Bilgisayar Bilimleri Konferansı (IHCONCS 2026)' : 
             'Халықаралық компьютерлік ғылымдар конференциясы (IHCONCS 2026)'}
          </h4>
          <p style={{ margin: '0', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
            {lang === 'en' ? 'September 17-18, 2026 • Zagreb, Croatia (Hybrid)' : 
             lang === 'tr' ? '17-18 Eylül 2026 • Zagreb, Hırvatistan (Hibrit)' : 
             '17-18 Қыркүйек 2026 • Загреб, Хорватия (Гибрид)'}
          </p>
        </div>
        <img src="./ihconcs.png" alt="IHCONCS" style={{ height: '35px', objectFit: 'contain' }} />
      </div>

      <CurrentSlideComponent lang={lang} safeMode={safeMode} />

      {showNotes && (
        <div className="speaker-notes-overlay">
          <h4>{t.presenterMode}</h4>
          <p>{currentNotes}</p>
        </div>
      )}

      {showGrid && (
        <div className="overview-grid">
          {slides.map((slide, idx) => (
            <div 
              key={slide.id} 
              className={`overview-card ${idx === currentSlideIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentSlideIndex(idx);
                setShowGrid(false);
              }}
            >
              <div className="overview-card-number">Slide {slide.id}</div>
              <div className="overview-card-title">
                {lang === 'en' ? slide.titleEn : 
                 lang === 'tr' ? slide.titleTr : 
                 slide.titleKk}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="bottom-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
          <span style={{ fontFamily: 'var(--font-mono)' }}>{currentSlideIndex + 1} / {slides.length}</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span style={{ fontSize: '0.9rem' }}>IHCONCS 2026</span>
        </div>
        
        <div className="nav-buttons">
          <button onClick={() => setCurrentSlideIndex(0)} disabled={currentSlideIndex === 0}>
            {t.home}
          </button>
          <button onClick={() => setCurrentSlideIndex(prev => Math.max(0, prev - 1))} disabled={currentSlideIndex === 0}>
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => setCurrentSlideIndex(prev => Math.min(slides.length - 1, prev + 1))} disabled={currentSlideIndex === slides.length - 1}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
