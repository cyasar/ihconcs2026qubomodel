import React, { useState } from 'react';
import type { SlideProps } from '../content/types';

export const Slide15_PenaltyMethod: React.FC<SlideProps> = ({ lang }) => {
  const [lambda, setLambda] = useState(10);
  
  // Dummy logic for demonstration: 
  // If lambda < 50, constraint is violated (model broken)
  // If lambda >= 50, constraint holds
  const isBroken = lambda < 50;
  const originalObjective = 2170;
  const constraintViolation = isBroken ? 200 : 0;
  const penalty = lambda * constraintViolation;
  const quboObjective = originalObjective - penalty;

  return (
    <div className="slide-content">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
        {lang === 'en' ? 'The Penalty Method: Unconstraining the Model' : 'Ceza Yöntemi: Modeli Kısıtsız Hale Getirme'}
      </h2>

      <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-mono)', marginBottom: '2rem' }}>
        QUBO = f(x) <span style={{ color: '#f44336' }}>- λ(g(x) + s)²</span>
      </div>

      <div className="grid-2-col" style={{ alignItems: 'stretch' }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h4 style={{ color: 'var(--accent-cyan)' }}>{lang === 'en' ? 'Interactive Parameter (λ)' : 'İnteraktif Parametre (λ)'}</h4>
          
          <div>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              <span>Penalty Multiplier (λ)</span> <span>{lambda}</span>
            </label>
            <input type="range" min="0" max="200" step="10" value={lambda} onChange={e => setLambda(parseInt(e.target.value))} style={{ width: '100%', accentColor: '#f44336' }} />
          </div>

          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
            {lang === 'en' 
              ? 'If λ is too small, the optimiser ignores the constraint to get a higher (but infeasible) profit. Break the model to see this!' 
              : 'Eğer λ çok küçükse, algoritma daha yüksek (ancak geçersiz) kâr elde etmek için kısıtı görmezden gelir. Modeli bozmayı deneyin!'}
          </div>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: isBroken ? 'rgba(244,67,54,0.1)' : 'rgba(76,175,80,0.1)', border: `2px solid ${isBroken ? '#f44336' : '#4caf50'}` }}>
          <h4 style={{ color: isBroken ? '#f44336' : '#4caf50' }}>{lang === 'en' ? 'Solver Behavior' : 'Çözücü Davranışı'}</h4>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            <span>Original Profit:</span> <span>{originalObjective + (isBroken ? 500 : 0)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            <span>Penalty Applied:</span> <span style={{ color: '#f44336' }}>-{penalty}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '0.5rem' }}>
            <span>QUBO Value:</span> <span>{quboObjective}</span>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', textAlign: 'center', fontWeight: 'bold', borderRadius: '8px', background: isBroken ? '#f44336' : '#4caf50', color: 'white' }}>
            {isBroken 
              ? (lang === 'en' ? 'MODEL BROKEN! Constraint violated' : 'MODEL BOZULDU! Kısıt ihlal edildi') 
              : (lang === 'en' ? 'FEASIBLE! Constraint respected' : 'OLURLU! Kısıt sağlandı')}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Slide16_QuboMatrix: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'The Final QUBO Matrix (Q)' : 'Nihai QUBO Matrisi (Q)'}
    </h2>

    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'The problem is now fully encoded in a single upper-triangular matrix.' : 'Problem artık tek bir üst-üçgen matris (Q) içinde tamamen kodlanmıştır.'}
    </p>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', width: '100%', alignItems: 'center' }}>
      <div style={{ fontSize: '3rem', fontFamily: 'var(--font-mono)' }}>
        <span style={{ color: 'var(--accent-violet)' }}>min</span> <span style={{ color: 'white' }}>xᵀQx</span>
      </div>
      
      {/* Mock Matrix visualization */}
      <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px' }}>
        {[...Array(25)].map((_, i) => {
          const row = Math.floor(i / 5);
          const col = i % 5;
          const isUpper = col >= row;
          const val = isUpper ? (row === col ? 'L' : 'Q') : '';
          const color = isUpper ? (row === col ? '#00bcd4' : '#8e24aa') : 'transparent';
          return (
            <div key={i} style={{ width: '40px', height: '40px', background: isUpper ? 'rgba(255,255,255,0.05)' : 'transparent', border: isUpper ? '1px solid rgba(255,255,255,0.1)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color, fontWeight: 'bold', fontFamily: 'var(--font-mono)' }}>
              {val && `${val}${row}${col}`}
            </div>
          );
        })}
      </div>
    </div>
    
    <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ width: '15px', height: '15px', background: '#00bcd4' }}></div>
        <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Linear terms (Diagonal)' : 'Doğrusal terimler (Köşegen)'}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ width: '15px', height: '15px', background: '#8e24aa' }}></div>
        <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Quadratic terms (Off-diagonal)' : 'Karesel terimler (Köşegen dışı)'}</span>
      </div>
    </div>
  </div>
);

export const Slide17_SolutionStrategies: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
      {lang === 'en' ? 'Solution Strategies' : 'Çözüm Stratejileri'}
    </h2>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', width: '100%', maxWidth: '1000px' }}>
      
      {/* Classical Baseline */}
      <div style={{ borderLeft: '4px solid #9e9e9e', paddingLeft: '2rem', textAlign: 'left' }}>
        <h3 style={{ color: '#9e9e9e', fontSize: '1.2rem', letterSpacing: '1px' }}>{lang === 'en' ? 'CLASSICAL BASELINE' : 'KLASİK TEMEL DOĞRULAMA'}</h3>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>SLSQP</div>
        <p style={{ color: 'var(--text-secondary)' }}>
          {lang === 'en' ? 'Sequential Least SQuares Programming. Solves the original constrained continuous model. Acts as ground truth.' : 'Orijinal kısıtlı sürekli modeli çözer. Temel referans (ground truth) görevi görür.'}
        </p>
      </div>

      {/* QUBO Solvers */}
      <div style={{ borderLeft: '4px solid var(--accent-cyan)', paddingLeft: '2rem', textAlign: 'left' }}>
        <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', letterSpacing: '1px' }}>{lang === 'en' ? 'QUBO SOLVERS' : 'QUBO ÇÖZÜCÜLERİ'}</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <li>
            <strong style={{ fontSize: '1.4rem' }}>Exact Solver (NumPy)</strong><br/>
            <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Brute-force verification for small instances.' : 'Küçük örnekler için kesin doğrulama.'}</span>
          </li>
          <li>
            <strong style={{ fontSize: '1.4rem' }}>Simulated Annealing (SA)</strong><br/>
            <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Classical heuristic for QUBO.' : 'QUBO için klasik sezgisel yöntem.'}</span>
          </li>
          <li>
            <strong style={{ fontSize: '1.4rem', color: 'var(--accent-violet)' }}>QAOA</strong><br/>
            <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Quantum Approximate Optimization Algorithm (workflow demo).' : 'Kuantum Yaklaşık Optimizasyon Algoritması (iş akışı demosu).'}</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
);

export const Slide18_ExperimentalSetup: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Experimental Setup' : 'Deneysel Kurulum'}
    </h2>

    <div className="card" style={{ width: '100%', maxWidth: '800px', padding: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
        
        <div>
          <h4 style={{ color: 'var(--accent-cyan)' }}>{lang === 'en' ? 'Model Parameters' : 'Model Parametreleri'}</h4>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '2' }}>
            <li>Penalty (λ): <strong style={{ color: 'white' }}>1000</strong></li>
            <li>Decision Bits: <strong style={{ color: 'white' }}>3 bits per variable</strong></li>
            <li>Slack Bits: <strong style={{ color: 'white' }}>3 bits per constraint</strong></li>
            <li>Total Qubits: <strong style={{ color: 'white' }}>13 qubits</strong></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'var(--accent-violet)' }}>{lang === 'en' ? 'QAOA Configuration' : 'QAOA Konfigürasyonu'}</h4>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '2' }}>
            <li>Optimizer: <strong style={{ color: 'white' }}>COBYLA</strong></li>
            <li>Max iterations: <strong style={{ color: 'white' }}>250</strong></li>
            <li>Shots: <strong style={{ color: 'white' }}>10000</strong></li>
            <li>Backend: <strong style={{ color: 'white' }}>AerSimulator</strong></li>
          </ul>
        </div>

      </div>
    </div>
  </div>
);

export const Slide19_KeyResult: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Key Result: Validation of the Framework' : 'Temel Sonuç: Çerçevenin Doğrulanması'}
    </h2>

    <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
      {lang === 'en' ? 'The QUBO reformulation successfully matches the classical solver.' : 'QUBO formülasyonu, klasik çözücü ile başarıyla eşleşmektedir.'}
    </p>

    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
      
      <div className="card" style={{ padding: '2rem', border: '2px solid #9e9e9e', width: '300px' }}>
        <div style={{ fontSize: '1.2rem', color: '#9e9e9e', marginBottom: '1rem', fontWeight: 'bold' }}>SLSQP (Baseline)</div>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>2170</div>
        <div style={{ color: 'var(--text-secondary)' }}>x₁ = 30, x₂ = 20</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', fontSize: '3rem', color: '#4caf50', fontWeight: 'bold' }}>
        =
      </div>

      <div className="card" style={{ padding: '2rem', border: '2px solid var(--accent-cyan)', width: '300px' }}>
        <div style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', marginBottom: '1rem', fontWeight: 'bold' }}>Exact QUBO</div>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>2170</div>
        <div style={{ color: 'var(--text-secondary)' }}>x₁ = 30, x₂ = 20</div>
      </div>

    </div>
  </div>
);

export const Slide20_ComparisonConclusion: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.8rem', color: 'var(--accent-cyan)', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Conclusion' : 'Sonuç'}
    </h2>

    <div className="grid-2-col" style={{ alignItems: 'start' }}>
      
      <div className="card" style={{ textAlign: 'left' }}>
        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>{lang === 'en' ? 'Results Summary' : 'Sonuç Özeti'}</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.1rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Solver</th>
              <th style={{ textAlign: 'right', padding: '0.5rem' }}>Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem 0.5rem' }}>SLSQP</td>
              <td style={{ textAlign: 'right', padding: '1rem 0.5rem' }}>2170</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem 0.5rem' }}>Exact QUBO</td>
              <td style={{ textAlign: 'right', padding: '1rem 0.5rem', color: '#4caf50', fontWeight: 'bold' }}>2170</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem 0.5rem' }}>Simulated Annealing</td>
              <td style={{ textAlign: 'right', padding: '1rem 0.5rem' }}>2170</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem 0.5rem' }}>QAOA (COBYLA)</td>
              <td style={{ textAlign: 'right', padding: '1rem 0.5rem' }}>1816</td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#ff9800', fontStyle: 'italic' }}>
          * {lang === 'en' ? 'QAOA results depend heavily on hardware simulation depth and shots. This study demonstrates workflow integration, not quantum advantage.' : 'QAOA sonuçları donanım simülasyon derinliğine ve atış sayısına bağlıdır. Bu çalışma kuantum üstünlüğü değil, iş akışı entegrasyonu gösterir.'}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ background: 'rgba(0,188,212,0.1)', borderLeft: '4px solid var(--accent-cyan)', padding: '2rem', textAlign: 'left', borderRadius: '0 8px 8px 0' }}>
          <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>{lang === 'en' ? 'Framework Validated' : 'Çerçeve Doğrulandı'}</h4>
          <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {lang === 'en' ? 'The penalty method and binary discretisation reliably map nonlinear constraints into the QUBO space.' : 'Ceza yöntemi ve ikili ayrıklaştırma, doğrusal olmayan kısıtları QUBO uzayına güvenilir bir şekilde eşler.'}
          </p>
        </div>

        <div style={{ background: 'rgba(142,36,170,0.1)', borderLeft: '4px solid var(--accent-violet)', padding: '2rem', textAlign: 'left', borderRadius: '0 8px 8px 0' }}>
          <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>{lang === 'en' ? 'Future Work' : 'Gelecek Çalışmalar'}</h4>
          <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {lang === 'en' ? 'Scaling to larger industrial models and testing on physical QPU hardware to analyze noise robustness.' : 'Daha büyük endüstriyel modellere ölçekleme ve gürültü direncini analiz etmek için fiziksel QPU donanımında test etme.'}
          </p>
        </div>
      </div>

    </div>
  </div>
);
