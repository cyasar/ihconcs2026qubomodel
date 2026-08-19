import React from 'react';
import type { SlideProps } from '../content/types';

export const Slide01_Title: React.FC<SlideProps> = ({ lang }) => {
  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem' }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'auto', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ margin: '0 0 0.2rem 0', color: 'var(--text-primary)' }}>
            {lang === 'en' ? 'IHCONCS 2026 — International Conference on Computer Sciences' : 'IHCONCS 2026 — Uluslararası Bilgisayar Bilimleri Konferansı'}
          </h4>
        </div>
      </div>

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
              {lang === 'en' ? 'Çanakkale Onsekiz Mart University, Türkiye' : 'Çanakkale Onsekiz Mart Üniversitesi, Türkiye'}
            </p>
          </div>
          <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', flex: 1, maxWidth: '400px' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Yerlan Izbassarov</p>
            <p style={{ margin: '0', color: 'var(--text-secondary)' }}>
              {lang === 'en' ? 'Khalel Dosmukhamedov Atyrau University, Kazakhstan' : 'Khalel Dosmukhamedov Atyrau Üniversitesi, Kazakistan'}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Visual Concept */}
      <div style={{ marginTop: 'auto', padding: '2rem 0 0 0', display: 'flex', justifyContent: 'center', gap: '3rem', opacity: 0.6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
          <span>f(x)</span> <span>→</span> <span style={{ fontFamily: 'monospace', color: 'var(--accent-violet)' }}>min zᵀQz</span> <span>→</span> <span style={{ fontSize: '1.5rem' }}>⚛️</span>
        </div>
      </div>

    </div>
  );
};
