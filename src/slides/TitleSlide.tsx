import React from 'react';
import type { SlideProps } from '../content/types';

export const Slide01_Title: React.FC<SlideProps> = ({ lang }) => {
  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem' }}>
      
      {/* Main Title Section */}
      <div style={{ margin: 'auto 0' }}>
        <h1 style={{ 
          fontSize: '4.5rem', 
          marginBottom: '2rem', 
          color: 'var(--accent-cyan)',
          textShadow: '0 0 40px rgba(0, 188, 212, 0.4)',
          letterSpacing: '-1px',
          lineHeight: 1.1
        }}>
          A QUBO-Based Reformulation<br/>and Quantum Solution Framework<br/>for Nonlinear Constrained<br/>Optimization Problems
        </h1>
        
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', flex: 1, maxWidth: '400px' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Cumali Yaşar</p>
            <p style={{ margin: '0', color: 'var(--text-secondary)' }}>
              {lang === 'en' ? 'Çanakkale Onsekiz Mart University, Türkiye' : 
               lang === 'tr' ? 'Çanakkale Onsekiz Mart Üniversitesi, Türkiye' : 
               'Чанаккале Онсекиз Март Университеті, Түркия'}
            </p>
          </div>
          <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', flex: 1, maxWidth: '400px' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Yerlan Izbassarov</p>
            <p style={{ margin: '0', color: 'var(--text-secondary)' }}>
              {lang === 'en' ? 'Khalel Dosmukhamedov Atyrau University, Kazakhstan' : 
               lang === 'tr' ? 'Khalel Dosmukhamedov Atyrau Üniversitesi, Kazakistan' : 
               'Халел Досмұхамедов атындағы Атырау Университеті, Қазақстан'}
            </p>
          </div>
        </div>
      </div>

      {/* Footer - University Logos */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', marginTop: 'auto', padding: '2rem 0 0 0' }}>
        <img src={`${import.meta.env.BASE_URL}gazi-logo.png`} alt="Gazi University" style={{ height: '70px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }} />
        <img src={`${import.meta.env.BASE_URL}zagreb-logo.png`} alt="University of Zagreb" style={{ height: '70px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }} />
        <img src={`${import.meta.env.BASE_URL}tvz-logo.png`} alt="TVZ" style={{ height: '70px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }} />
      </div>

    </div>
  );
};
