import { useState, useEffect } from 'react';
import { slides } from './content/slides';
import type { Language } from './content/types';
import { uiTranslations } from './i18n';
import { Monitor, Shield, AlertTriangle, ChevronRight, ChevronLeft, LayoutGrid, Smartphone } from 'lucide-react';

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [lang, setLang] = useState<Language>('en');
  const [showNotes, setShowNotes] = useState(false);
  const [safeMode, setSafeMode] = useState(true);
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
  const currentNotes = lang === 'en' ? slides[currentSlideIndex].notesEn : slides[currentSlideIndex].notesTr;
  const progress = ((currentSlideIndex + 1) / slides.length) * 100;
  const t = uiTranslations[lang];

  return (
    <div className="presentation-container">
      
      {/* Mobile Rotate Overlay */}
      <div className="mobile-rotate-overlay">
        <Smartphone size={64} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem', animation: 'pulse 2s infinite' }} />
        <h2>{lang === 'en' ? 'Please rotate your device' : 'Lütfen cihazınızı yan çevirin'}</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          {lang === 'en' ? 'This presentation is designed for landscape mode.' : 'Bu sunum yatay mod için tasarlanmıştır.'}
        </p>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="top-controls">
        <button 
          onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
          title="Toggle Language"
        >
          {lang === 'en' ? 'TR' : 'EN'}
        </button>
        <button 
          className={safeMode ? 'active' : ''} 
          onClick={() => setSafeMode(!safeMode)}
          title="Toggle Safe Mode"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          {safeMode ? <Shield size={16} /> : <AlertTriangle size={16} color="#f44336" />}
          {safeMode ? t.safeMode : 'Lab Mode'}
        </button>
        <button 
          className={showNotes ? 'active-violet' : ''} 
          onClick={() => setShowNotes(!showNotes)}
          title="Toggle Presenter Notes (N)"
        >
          <Monitor size={16} />
        </button>
        <button 
          className={showGrid ? 'active' : ''} 
          onClick={() => setShowGrid(!showGrid)}
          title="Grid View (G)"
        >
          <LayoutGrid size={16} />
        </button>
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
                {lang === 'en' ? slide.titleEn : slide.titleTr}
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
