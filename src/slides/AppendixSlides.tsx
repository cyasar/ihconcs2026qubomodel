import React from 'react';
import type { SlideProps } from '../content/types';

export const Slide21_AppendixMath: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem' }}>
      APPENDIX A1
    </div>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Appendix: Detailed Mathematics' : 'Ekler: Detaylı Matematik'}
    </h2>
    <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      <h4 style={{ color: 'var(--accent-cyan)' }}>{lang === 'en' ? 'Scaling and Discretisation' : 'Ölçeklendirme ve Ayrıklaştırma'}</h4>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', marginBottom: '2rem' }}>
        x = x_min + \frac{x_max - x_min}{2^N - 1} \sum_{i=0}^{N-1} 2^i q_i
      </div>
      <h4 style={{ color: 'var(--accent-violet)' }}>{lang === 'en' ? 'Quadratic Penalty Formulation' : 'Karesel Ceza Formülasyonu'}</h4>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem' }}>
        P(x) = \lambda \left[ \sum_{j} \max(0, g_j(x))^2 \right]
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
      {lang === 'en' ? 'Appendix: QAOA Circuit' : 'Ekler: QAOA Devresi'}
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
