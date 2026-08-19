import React from 'react';
import type { SlideProps } from '../content/types';

export const Slide02_Hook: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', justifyContent: 'center' }}>
    <h2 style={{ fontSize: '3rem', color: 'var(--accent-cyan)' }}>
      {lang === 'en' ? 'What if a quantum optimizer cannot understand your problem?' : 'Kuantum optimizasyon algoritması probleminizi anlayamıyorsa ne olur?'}
    </h2>
    
    <div className="grid-2-col" style={{ alignItems: 'stretch' }}>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', background: 'rgba(255, 61, 0, 0.05)', borderLeft: '4px solid #ff3d00' }}>
        <h4 style={{ color: '#ff3d00', marginBottom: '1.5rem' }}>{lang === 'en' ? 'Familiar Optimization' : 'Bildik Optimizasyon'}</h4>
        <div style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
          <strong>{lang === 'en' ? 'Maximize profit' : 'Kârı maksimize et'}</strong><br/>
          <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'subject to:' : 'kısıtlar:'}</span>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li>{lang === 'en' ? 'labour constraints' : 'işgücü kısıtları'}</li>
            <li>{lang === 'en' ? 'raw material constraints' : 'hammadde kısıtları'}</li>
            <li>{lang === 'en' ? 'production capacity' : 'üretim kapasitesi'}</li>
            <li>{lang === 'en' ? 'nonlinear production costs' : 'doğrusal olmayan üretim maliyetleri'}</li>
          </ul>
        </div>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(142, 36, 170, 0.05)', borderRight: '4px solid var(--accent-violet)' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          {lang === 'en' ? 'Quantum-oriented optimization methods generally require another representation.' : 'Kuantum-odaklı optimizasyon yöntemleri genellikle farklı bir gösterime ihtiyaç duyar.'}
        </p>
        <div style={{ fontSize: '4.5rem', fontWeight: 'bold', margin: '1rem 0', color: 'var(--accent-violet)', textShadow: '0 0 30px rgba(142, 36, 170, 0.4)' }}>
          QUBO
        </div>
        <p style={{ fontSize: '1rem', color: 'var(--text-primary)', letterSpacing: '1px' }}>
          Quadratic Unconstrained Binary Optimization
        </p>
      </div>
    </div>
  </div>
);

export const Slide03_RealWorldProblem: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '3rem' }}>
      {lang === 'en' ? 'Nonlinear Constrained Optimization Is Everywhere' : 'Doğrusal Olmayan Kısıtlı Optimizasyon Her Yerde'}
    </h2>
    
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Domains */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', flex: 1 }}>
        {['Engineering design', 'Production planning', 'Logistics', 'Finance', 'Machine learning', 'Resource allocation'].map((item, i) => (
          <div key={i} style={{ background: 'rgba(0,188,212,0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--accent-cyan)', fontSize: '1.1rem' }}>
            {item}
          </div>
        ))}
      </div>

      {/* Math Model */}
      <div style={{ flex: 1, padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-15px', right: '20px', background: 'var(--accent-cyan)', color: 'black', padding: '0.2rem 1rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.8rem' }}>
          {lang === 'en' ? 'Common Mathematical Model' : 'Ortak Matematiksel Model'}
        </div>
        
        <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-mono)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <span style={{ color: 'var(--accent-violet)' }}>max/min</span> <span style={{ color: 'white' }}>f(x)</span>
          </div>
          <div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{lang === 'en' ? 'subject to:' : 'kısıtlar:'}</span><br/>
            <span style={{ color: '#ff9800' }}>g<sub>1</sub>(x) ≤ 0</span><br/>
            <span style={{ color: '#ff9800' }}>g<sub>2</sub>(x) ≤ 0</span><br/>
            <span style={{ color: 'var(--text-secondary)' }}>...</span><br/>
            <span style={{ color: '#ff9800' }}>g<sub>n</sub>(x) ≤ 0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Slide04_ProblemStatement: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-cyan)' }}>
      {lang === 'en' ? 'What is the research problem?' : 'Araştırma problemi nedir?'}
    </h2>
    
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '4px solid var(--accent-cyan)', textAlign: 'left', fontSize: '1.2rem', lineHeight: '1.6' }}>
      <p style={{ margin: 0 }}>
        {lang === 'en' 
          ? 'Nonlinear constrained optimisation problems contain continuous decision variables, nonlinear objective terms and constraints, while many quantum-oriented optimisation frameworks require unconstrained binary quadratic representations.' 
          : 'Doğrusal olmayan kısıtlı optimizasyon problemleri sürekli karar değişkenleri, doğrusal olmayan amaç terimleri ve kısıtlar içerirken, birçok kuantum-odaklı optimizasyon çerçevesi kısıtsız ikili (binary) karesel gösterimler gerektirir.'}
      </p>
      <p style={{ marginTop: '1rem', color: '#ff9800', fontWeight: 'bold' }}>
        {lang === 'en' ? 'Transforming one representation into the other is not straightforward.' : 'Bir gösterimi diğerine dönüştürmek basit bir işlem değildir.'}
      </p>
    </div>

    {/* Vertical Flow */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '3rem' }}>
      <div style={{ padding: '1rem 2rem', background: '#37474f', borderRadius: '8px', border: '1px solid #546e7a', width: '400px', fontWeight: 'bold', fontSize: '1.1rem' }}>
        {lang === 'en' ? 'NONLINEAR CONSTRAINED MODEL' : 'DOĞRUSAL OLMAYAN KISITLI MODEL'}
      </div>
      <div style={{ fontSize: '2rem', color: 'var(--text-secondary)' }}>↓</div>
      <div style={{ 
        width: '60px', height: '60px', borderRadius: '50%', background: '#ff3d00', color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold',
        boxShadow: '0 0 20px rgba(255, 61, 0, 0.5)'
      }}>
        ?
      </div>
      <div style={{ fontSize: '2rem', color: 'var(--text-secondary)' }}>↓</div>
      <div style={{ padding: '1rem 2rem', background: 'rgba(142, 36, 170, 0.2)', borderRadius: '8px', border: '1px solid var(--accent-violet)', width: '400px', fontWeight: 'bold', fontSize: '1.1rem', color: '#e1bee7' }}>
        QUBO
      </div>
      <div style={{ fontSize: '2rem', color: 'var(--text-secondary)' }}>↓</div>
      <div style={{ padding: '1rem 2rem', background: 'rgba(0, 188, 212, 0.2)', borderRadius: '8px', border: '1px solid var(--accent-cyan)', width: '400px', fontWeight: 'bold', fontSize: '1.1rem', color: '#b2ebf2' }}>
        {lang === 'en' ? 'QUANTUM-ORIENTED SOLVER' : 'KUANTUM-ODAKLI ÇÖZÜCÜ'}
      </div>
    </div>
  </div>
);

export const Slide05_WhyQubo: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
      {lang === 'en' ? 'Why Is Reformulation Necessary?' : 'Yeniden Formülasyon Neden Gereklidir?'}
    </h2>
    
    <div style={{ display: 'flex', gap: '1rem', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Real Problem */}
      <div style={{ flex: 1, padding: '2rem', background: 'rgba(255, 61, 0, 0.05)', border: '1px solid rgba(255, 61, 0, 0.2)', borderRadius: '12px' }}>
        <h3 style={{ color: '#ff3d00', fontSize: '1.5rem', textAlign: 'center' }}>
          {lang === 'en' ? 'REAL PROBLEM' : 'GERÇEK PROBLEM'}
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.4rem', lineHeight: '2.5', textAlign: 'center', color: '#e0e0e0' }}>
          <li>{lang === 'en' ? 'Continuous' : 'Sürekli (Continuous)'}</li>
          <li>{lang === 'en' ? 'Constrained' : 'Kısıtlı (Constrained)'}</li>
          <li>{lang === 'en' ? 'Nonlinear' : 'Doğrusal Olmayan (Nonlinear)'}</li>
        </ul>
      </div>

      {/* Reformulation Bridge */}
      <div style={{ flex: 0.5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ height: '3px', width: '100%', background: 'linear-gradient(90deg, transparent, var(--text-secondary), transparent)' }}></div>
        <div style={{ padding: '1rem', background: 'var(--text-secondary)', color: 'var(--bg-color)', fontWeight: 'bold', borderRadius: '30px', letterSpacing: '2px', fontSize: '1.2rem', boxShadow: '0 0 20px rgba(255,255,255,0.2)' }}>
          {lang === 'en' ? 'REFORMULATION' : 'YENİDEN FORMÜLASYON'}
        </div>
        <div style={{ height: '3px', width: '100%', background: 'linear-gradient(90deg, transparent, var(--text-secondary), transparent)' }}></div>
      </div>

      {/* QUBO World */}
      <div style={{ flex: 1, padding: '2rem', background: 'rgba(142, 36, 170, 0.05)', border: '1px solid rgba(142, 36, 170, 0.3)', borderRadius: '12px' }}>
        <h3 style={{ color: 'var(--accent-violet)', fontSize: '1.5rem', textAlign: 'center' }}>
          {lang === 'en' ? 'QUBO WORLD' : 'QUBO DÜNYASI'}
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.4rem', lineHeight: '2.5', textAlign: 'center', color: '#e0e0e0' }}>
          <li>{lang === 'en' ? 'Binary' : 'İkili (Binary)'}</li>
          <li>{lang === 'en' ? 'Unconstrained' : 'Kısıtsız (Unconstrained)'}</li>
          <li>{lang === 'en' ? 'Quadratic' : 'Karesel (Quadratic)'}</li>
        </ul>
      </div>
      
    </div>
  </div>
);

export const Slide06_ResearchAim: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Aim of the Study' : 'Çalışmanın Amacı'}
    </h2>
    
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2.5rem', background: 'rgba(0,188,212,0.05)', borderRadius: '12px', borderLeft: '5px solid var(--accent-cyan)', textAlign: 'center', fontSize: '1.4rem', lineHeight: '1.6', fontStyle: 'italic', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
      "{lang === 'en' 
        ? 'To develop a transparent and reproducible QUBO-based framework for transforming nonlinear constrained optimization problems into binary quadratic models suitable for classical QUBO, quantum-inspired and quantum-oriented solution approaches.' 
        : 'Doğrusal olmayan kısıtlı optimizasyon problemlerini klasik QUBO, kuantum-ilhamlı ve kuantum-odaklı çözüm yaklaşımlarına uygun ikili karesel (binary quadratic) modellere dönüştürmek için şeffaf ve tekrarlanabilir bir QUBO tabanlı çerçeve geliştirmek.'}"
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '4rem' }}>
      {[
        { id: 1, en: '1. Reformulate', tr: '1. Yeniden Formüle Et', icon: '📐' },
        { id: 2, en: '2. Validate', tr: '2. Doğrula', icon: '✅' },
        { id: 3, en: '3. Connect to quantum', tr: '3. Kuantuma Bağla', icon: '⚛️' }
      ].map(obj => (
        <div key={obj.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '3.5rem' }}>{obj.icon}</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
            {lang === 'en' ? obj.en : obj.tr}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Slide07_ResearchGap: React.FC<SlideProps> = ({ lang }) => {
  const pipeline = [
    { en: 'Original Problem', tr: 'Orijinal Problem' },
    { en: 'Scaling', tr: 'Ölçeklendirme' },
    { en: 'Discretisation', tr: 'Ayrıklaştırma' },
    { en: 'Binary encoding', tr: 'İkili Kodlama' },
    { en: 'Slack variables', tr: 'Gevşek Değişkenler' },
    { en: 'Penalty embedding', tr: 'Ceza Ekleme' },
    { en: 'QUBO matrix', tr: 'QUBO Matrisi' },
    { en: 'Solving', tr: 'Çözüm' },
    { en: 'Decoding', tr: 'Kod Çözme' },
    { en: 'Comparison', tr: 'Karşılaştırma' }
  ];

  return (
    <div className="slide-content" style={{ overflow: 'visible' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        {lang === 'en' ? 'What Is Missing?' : 'Eksik Olan Nedir?'}
      </h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
        {lang === 'en' 
          ? 'While individual studies exist on QUBO, constraint encoding, and QAOA, this study targets the integrated end-to-end workflow.' 
          : 'QUBO, kısıt kodlama ve QAOA üzerine bireysel çalışmalar mevcut olsa da, bu çalışma entegre bir uçtan uca (end-to-end) iş akışını hedefler.'}
      </p>

      {/* Horizontal Pipeline */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center', maxWidth: '1200px' }}>
        {pipeline.map((step, index) => (
          <React.Fragment key={index}>
            <div style={{ 
              padding: '1rem 1.5rem', 
              background: index === 0 ? '#37474f' : index === 6 ? 'rgba(142,36,170,0.3)' : index === pipeline.length-1 ? 'rgba(0,188,212,0.3)' : 'rgba(255,255,255,0.05)', 
              border: `1px solid ${index === 0 ? '#546e7a' : index === 6 ? 'var(--accent-violet)' : index === pipeline.length-1 ? 'var(--accent-cyan)' : 'var(--border-color)'}`,
              borderRadius: '8px', 
              fontSize: '1rem',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
              {lang === 'en' ? step.en : step.tr}
            </div>
            {index < pipeline.length - 1 && (
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}>→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const Slide08_NovelContributions: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.8rem', marginBottom: '3rem', color: 'white' }}>
      {lang === 'en' ? 'What Does This Study Contribute?' : 'Bu Çalışmanın Katkıları Nelerdir?'}
    </h2>
    
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', width: '100%' }}>
      
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem', borderTop: '4px solid #4CAF50' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔗</div>
        <h3 style={{ color: '#4CAF50', fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {lang === 'en' ? 'Contribution 1' : 'Katkı 1'}
        </h3>
        <p style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>
          {lang === 'en' ? 'Transparent QUBO reformulation workflow.' : 'Şeffaf QUBO yeniden formülasyon iş akışı.'}
        </p>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem', borderTop: '4px solid #FF9800' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
        <h3 style={{ color: '#FF9800', fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {lang === 'en' ? 'Contribution 2' : 'Katkı 2'}
        </h3>
        <p style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>
          {lang === 'en' ? 'Validation against a classical constrained optimiser.' : 'Klasik kısıtlı bir optimizasyon algoritmasına karşı doğrulama (validation).'}
        </p>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem', borderTop: '4px solid var(--accent-cyan)' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🐍</div>
        <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {lang === 'en' ? 'Contribution 3' : 'Katkı 3'}
        </h3>
        <p style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>
          {lang === 'en' ? 'Reproducible Python workflow connecting Classical → QUBO → Quantum-oriented optimization.' : 'Klasik → QUBO → Kuantum-odaklı optimizasyon bağlantısını kuran tekrarlanabilir Python iş akışı.'}
        </p>
      </div>

    </div>
  </div>
);
