import React from 'react';
import type { SlideProps } from '../content/types';

export const Slide21_AppendixMath: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem' }}>
      APPENDIX A1
    </div>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Appendix: Detailed Mathematics' : 
       lang === 'tr' ? 'Ekler: Detaylı Matematik' : 
       'Қосымша: Егжей-тегжейлі математика'}
    </h2>
    <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      <h4 style={{ color: 'var(--accent-cyan)' }}>{lang === 'en' ? 'Scaling and Discretisation' : lang === 'tr' ? 'Ölçeklendirme ve Ayrıklaştırma' : 'Масштабтау және дискретизация'}</h4>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', marginBottom: '2rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
        x = x<sub>min</sub> + [(x<sub>max</sub> - x<sub>min</sub>) / (2<sup>N</sup> - 1)] <span style={{ fontSize: '1.2em' }}>Σ</span>(2<sup>i</sup> q<sub>i</sub>)
      </div>
      <h4 style={{ color: 'var(--accent-violet)' }}>{lang === 'en' ? 'Quadratic Penalty Formulation' : lang === 'tr' ? 'Karesel Ceza Formülasyonu' : 'Квадраттық жаза формуласы'}</h4>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
        P(x) = λ [ <span style={{ fontSize: '1.2em' }}>Σ</span> max(0, g<sub>j</sub>(x))<sup>2</sup> ]
      </div>
    </div>
  </div>
);

export const Slide22_AppendixQAOA: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem' }}>
      APPENDIX A2
    </div>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Appendix: QAOA Circuit' : 
       lang === 'tr' ? 'Ekler: QAOA Devresi' : 
       'Қосымша: QAOA схемасы'}
    </h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-secondary)', width: '600px' }}>
        <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
          Circuit representation of mixing and cost Hamiltonians
        </div>
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <div style={{ padding: '1rem', background: '#303f9f', color: 'white', borderRadius: '4px', width: '80%' }}>Initial State |+⟩</div>
          <div style={{ color: 'white' }}>↓</div>
          <div style={{ padding: '1rem', background: '#512da8', color: 'white', borderRadius: '4px', width: '80%' }}>Cost Unitary: exp(-iγH_C)</div>
          <div style={{ color: 'white' }}>↓</div>
          <div style={{ padding: '1rem', background: '#00796b', color: 'white', borderRadius: '4px', width: '80%' }}>Mixer Unitary: exp(-iβH_M)</div>
          <div style={{ color: 'white' }}>↓</div>
          <div style={{ padding: '1rem', background: '#455a64', color: 'white', borderRadius: '4px', width: '80%' }}>Measurement</div>
        </div>
      </div>
    </div>
  </div>
);
