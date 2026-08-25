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
        {lang === 'en' ? 'The Penalty Method: Unconstraining the Model' : 
         lang === 'tr' ? 'Ceza Yöntemi: Modeli Kısıtsız Hale Getirme' : 
         'Жазалау әдісі: Модельді шектеусіз ету'}
      </h2>

      <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-mono)', marginBottom: '2rem' }}>
        QUBO = f(x) <span style={{ color: '#f44336' }}>- λ(g(x) + s)²</span>
      </div>

      <div className="grid-2-col" style={{ alignItems: 'stretch' }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h4 style={{ color: 'var(--accent-cyan)' }}>{lang === 'en' ? 'Interactive Parameter (λ)' : lang === 'tr' ? 'İnteraktif Parametre (λ)' : 'Интерактивті параметр (λ)'}</h4>
          
          <div>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              <span>Penalty Multiplier (λ)</span> <span>{lambda}</span>
            </label>
            <input type="range" min="0" max="200" step="10" value={lambda} onChange={e => setLambda(parseInt(e.target.value))} style={{ width: '100%', accentColor: '#f44336' }} />
          </div>

          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
            {lang === 'en' 
              ? 'If λ is too small, the optimiser ignores the constraint to get a higher (but infeasible) profit. Break the model to see this!' 
              : lang === 'tr' 
              ? 'Eğer λ çok küçükse, algoritma daha yüksek (ancak geçersiz) kâr elde etmek için kısıtı görmezden gelir. Modeli bozmayı deneyin!' 
              : 'Егер λ тым кішкентай болса, алгоритм жоғары (бірақ жарамсыз) пайда алу үшін шектеуді елемейді. Мұны көру үшін модельді бұзыңыз!'}
          </div>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: isBroken ? 'rgba(244,67,54,0.1)' : 'rgba(76,175,80,0.1)', border: `2px solid ${isBroken ? '#f44336' : '#4caf50'}` }}>
          <h4 style={{ color: isBroken ? '#f44336' : '#4caf50' }}>{lang === 'en' ? 'Solver Behavior' : lang === 'tr' ? 'Çözücü Davranışı' : 'Шешушінің мінез-құлқы'}</h4>
          
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
              ? (lang === 'en' ? 'MODEL BROKEN! Constraint violated' : lang === 'tr' ? 'MODEL BOZULDU! Kısıt ihlal edildi' : 'МОДЕЛЬ БҰЗЫЛДЫ! Шектеу бұзылды') 
              : (lang === 'en' ? 'FEASIBLE! Constraint respected' : lang === 'tr' ? 'OLURLU! Kısıt sağlandı' : 'МҮМКІН! Шектеу сақталды')}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Slide16_QuboMatrix: React.FC<SlideProps> = ({ lang }) => {
  const [hoveredCell, setHoveredCell] = useState<{ r: number, c: number } | null>(null);
  const size = 13; // 13 variables in the actual case study (2x3 bits for x1,x2 + 7 slack bits)

  return (
    <div className="slide-content">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        {lang === 'en' ? 'The Final QUBO Matrix (Q)' : 
         lang === 'tr' ? 'Nihai QUBO Matrisi (Q)' : 
         'Соңғы QUBO матрицасы (Q)'}
      </h2>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        {lang === 'en' ? 'The entire nonlinear constrained problem is now a single 13×13 upper-triangular matrix. Hover to explore.' : 
         lang === 'tr' ? 'Tüm doğrusal olmayan kısıtlı problem artık tek bir 13×13 üst-üçgen matris. Keşfetmek için üzerine gelin.' : 
         'Барлық сызықтық емес шектеулі мәселе енді жалғыз 13×13 жоғарғы үшбұрышты матрица болып табылады. Зерттеу үшін үстіне апарыңыз.'}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', width: '100%', alignItems: 'center' }}>
        <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-mono)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div><span style={{ color: 'var(--accent-violet)' }}>min</span> <span style={{ color: 'white' }}>qᵀQq</span></div>
          <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>q ∈ {"{0,1}¹³"}</div>
        </div>
        
        {/* Interactive 13x13 Heatmap Matrix visualization */}
        <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${size}, 1fr)`, gap: '2px' }}>
            {[...Array(size * size)].map((_, i) => {
              const r = Math.floor(i / size);
              const c = i % size;
              const isUpper = c >= r;
              const isDiag = c === r;
              
              const isHovered = hoveredCell?.r === r && hoveredCell?.c === c;
              const isRelated = isUpper && hoveredCell && (hoveredCell.r === r || hoveredCell.c === c);
              
              let bg = 'transparent';
              if (isUpper) {
                if (isHovered) bg = isDiag ? '#00bcd4' : '#8e24aa';
                else if (isRelated) bg = isDiag ? 'rgba(0,188,212,0.4)' : 'rgba(142,36,170,0.4)';
                else bg = isDiag ? 'rgba(0,188,212,0.15)' : 'rgba(142,36,170,0.15)';
              }

              return (
                <div 
                  key={i} 
                  onMouseEnter={() => setHoveredCell({ r, c })}
                  onMouseLeave={() => setHoveredCell(null)}
                  style={{ 
                    width: '24px', height: '24px', 
                    background: bg, 
                    border: isUpper ? '1px solid rgba(255,255,255,0.05)' : 'none', 
                    borderRadius: '2px',
                    transition: 'all 0.2s',
                    cursor: isUpper ? 'pointer' : 'default',
                    transform: isHovered && isUpper ? 'scale(1.2)' : 'scale(1)',
                    zIndex: isHovered ? 10 : 1
                  }} 
                />
              );
            })}
          </div>

          {/* Tooltip */}
          <div style={{ 
            position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', 
            marginTop: '1.5rem', height: '60px', width: '100%', textAlign: 'center' 
          }}>
            {hoveredCell ? (
              <div style={{ animation: 'fadeIn 0.2s' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 'bold', color: 'white' }}>
                  Q<sub style={{ fontSize: '0.7rem' }}>{hoveredCell.r},{hoveredCell.c}</sub>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {!hoveredCell || hoveredCell.c < hoveredCell.r ? (
                    <span style={{ color: 'var(--text-secondary)' }}>Zero (Lower triangular)</span>
                  ) : hoveredCell.c === hoveredCell.r ? (
                    <span style={{ color: 'var(--accent-cyan)' }}>Linear Term: Biases individual qubit q{hoveredCell.r}</span>
                  ) : (
                    <span style={{ color: 'var(--accent-violet)' }}>Quadratic Term: Coupling strength between q{hoveredCell.r} and q{hoveredCell.c}</span>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', paddingTop: '1rem' }}>
                {lang === 'en' ? 'Hover over cells to inspect QUBO terms' : lang === 'tr' ? 'QUBO terimlerini incelemek için hücrelerin üzerine gelin' : 'QUBO терминдерін тексеру үшін ұяшықтардың үстіне апарыңыз'}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '4.5rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '15px', height: '15px', background: '#00bcd4' }}></div>
          <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Linear terms (Diagonal)' : lang === 'tr' ? 'Doğrusal terimler (Köşegen)' : 'Сызықтық терминдер (Диагональ)'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '15px', height: '15px', background: '#8e24aa' }}></div>
          <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Quadratic terms (Off-diagonal)' : lang === 'tr' ? 'Karesel terimler (Köşegen dışı)' : 'Квадраттық терминдер (Диагональдан тыс)'}</span>
        </div>
      </div>
    </div>
  );
};

export const Slide17_SolutionStrategies: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
      {lang === 'en' ? 'Solution Strategies' : 
       lang === 'tr' ? 'Çözüm Stratejileri' : 
       'Шешім стратегиялары'}
    </h2>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', width: '100%', maxWidth: '1000px' }}>
      
      {/* Classical Baseline */}
      <div style={{ borderLeft: '4px solid #9e9e9e', paddingLeft: '2rem', textAlign: 'left' }}>
        <h3 style={{ color: '#9e9e9e', fontSize: '1.2rem', letterSpacing: '1px' }}>{lang === 'en' ? 'CLASSICAL BASELINE' : lang === 'tr' ? 'KLASİK TEMEL DOĞRULAMA' : 'КЛАССИКАЛЫҚ НЕГІЗГІ ТЕКСЕРУ'}</h3>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>SLSQP</div>
        <p style={{ color: 'var(--text-secondary)' }}>
          {lang === 'en' ? 'Sequential Least SQuares Programming. Solves the original constrained continuous model. Acts as ground truth.' : 
           lang === 'tr' ? 'Orijinal kısıtlı sürekli modeli çözer. Temel referans (ground truth) görevi görür.' : 
           'Түпнұсқа шектеулі үздіксіз модельді шешеді. Негізгі анықтамалық (ground truth) қызметін атқарады.'}
        </p>
      </div>

      {/* QUBO Solvers */}
      <div style={{ borderLeft: '4px solid var(--accent-cyan)', paddingLeft: '2rem', textAlign: 'left' }}>
        <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', letterSpacing: '1px' }}>{lang === 'en' ? 'QUBO SOLVERS' : lang === 'tr' ? 'QUBO ÇÖZÜCÜLERİ' : 'QUBO ШЕШУШІЛЕРІ'}</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <li>
            <strong style={{ fontSize: '1.4rem' }}>Exact Solver (NumPy)</strong><br/>
            <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Brute-force verification for small instances.' : lang === 'tr' ? 'Küçük örnekler için kesin doğrulama.' : 'Кішігірім мысалдар үшін нақты тексеру.'}</span>
          </li>
          <li>
            <strong style={{ fontSize: '1.4rem' }}>Simulated Annealing (SA)</strong><br/>
            <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Classical heuristic for QUBO.' : lang === 'tr' ? 'QUBO için klasik sezgisel yöntem.' : 'QUBO үшін классикалық эвристикалық әдіс.'}</span>
          </li>
          <li>
            <strong style={{ fontSize: '1.4rem', color: 'var(--accent-violet)' }}>QAOA</strong><br/>
            <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Quantum Approximate Optimization Algorithm (workflow demo).' : lang === 'tr' ? 'Kuantum Yaklaşık Optimizasyon Algoritması (iş akışı demosu).' : 'Кванттық шамамен оңтайландыру алгоритмі (жұмыс процесінің демосы).'}</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
);

export const Slide18_ExperimentalSetup: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Experimental Setup' : 
       lang === 'tr' ? 'Deneysel Kurulum' : 
       'Тәжірибелік орнату'}
    </h2>

    <div className="card" style={{ width: '100%', maxWidth: '800px', padding: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
        
        <div>
          <h4 style={{ color: 'var(--accent-cyan)' }}>{lang === 'en' ? 'Model Parameters' : lang === 'tr' ? 'Model Parametreleri' : 'Модель параметрлері'}</h4>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '2' }}>
            <li>Penalty (λ): <strong style={{ color: 'white' }}>1000</strong></li>
            <li>Decision Bits: <strong style={{ color: 'white' }}>3 bits per variable</strong></li>
            <li>Slack Bits: <strong style={{ color: 'white' }}>3 bits per constraint</strong></li>
            <li>Total Qubits: <strong style={{ color: 'white' }}>13 qubits</strong></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'var(--accent-violet)' }}>{lang === 'en' ? 'QAOA Configuration' : lang === 'tr' ? 'QAOA Konfigürasyonu' : 'QAOA конфигурациясы'}</h4>
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

export const Slide19b_SolutionComparison: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Classical vs QUBO: Example Comparison' : 
       lang === 'tr' ? 'Klasik vs QUBO: Örnek Karşılaştırma' : 
       'Классикалық және QUBO: Мысал салыстыру'}
    </h2>

    <div className="grid-2-col" style={{ alignItems: 'start', marginTop: '2rem' }}>
      {/* Classical Result */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid #9e9e9e', background: 'rgba(255,255,255,0.02)' }}>
        <h3 style={{ color: '#9e9e9e', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
          {lang === 'en' ? 'Classical Solution (SLSQP)' : lang === 'tr' ? 'Klasik Çözüm (SLSQP)' : 'Классикалық шешім (SLSQP)'}
        </h3>
        <div style={{ textAlign: 'left', fontSize: '1.3rem', lineHeight: '2' }}>
          <div><span style={{ color: 'var(--text-secondary)' }}>Method:</span> Continuous Space Optimization</div>
          <div><span style={{ color: 'var(--text-secondary)' }}>Variables:</span> x₁ = 30, x₂ = 20</div>
          <div><span style={{ color: 'var(--text-secondary)' }}>Constraints:</span> Feasible (res1=80, res2=90)</div>
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dotted rgba(255,255,255,0.1)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Max Profit:</span> <span style={{ color: '#4caf50', fontWeight: 'bold', fontSize: '1.5rem' }}>2170</span>
          </div>
        </div>
      </div>

      {/* QUBO Result */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid var(--accent-cyan)', background: 'rgba(0,188,212,0.05)' }}>
        <h3 style={{ color: 'var(--accent-cyan)', borderBottom: '1px solid rgba(0,188,212,0.2)', paddingBottom: '1rem' }}>
          {lang === 'en' ? 'QUBO Solution (Exact/QAOA)' : lang === 'tr' ? 'QUBO Çözümü (Kesin/QAOA)' : 'QUBO шешімі (Дәл/QAOA)'}
        </h3>
        <div style={{ textAlign: 'left', fontSize: '1.3rem', lineHeight: '2' }}>
          <div><span style={{ color: 'var(--text-secondary)' }}>Method:</span> Binary Space (Matrix Q)</div>
          <div><span style={{ color: 'var(--text-secondary)' }}>Variables (Decode):</span> x₁ = 30, x₂ = 20</div>
          <div><span style={{ color: 'var(--text-secondary)' }}>Penalties:</span> 0 (Valid bitstring)</div>
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dotted rgba(0,188,212,0.2)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Max Profit:</span> <span style={{ color: '#4caf50', fontWeight: 'bold', fontSize: '1.5rem' }}>2170</span>
          </div>
        </div>
      </div>
    </div>

    <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(76,175,80,0.1)', border: '1px solid #4caf50', borderRadius: '12px', fontSize: '1.4rem' }}>
      <span style={{ fontWeight: 'bold', color: '#4caf50' }}>{lang === 'en' ? 'Conclusion: ' : lang === 'tr' ? 'Sonuç: ' : 'Қорытынды: '}</span>
      {lang === 'en' ? 'Both approaches arrive at the exact same optimal point. This mathematically validates the penalty framework and discretisation steps!' : 
       lang === 'tr' ? 'Her iki yaklaşım da birebir aynı optimal noktaya ulaşıyor. Bu durum, uygulanan karesel ceza çerçevesini ve ayrıklaştırma adımlarını matematiksel olarak doğrular!' : 
       'Екі тәсіл де бірдей оңтайлы нүктеге жетеді. Бұл жазалау жүйесі мен дискретизация қадамдарын математикалық түрде растайды!'}
    </div>
  </div>
);

export const Slide19_KeyResult: React.FC<SlideProps> = ({ lang }) => {
  const [showQubo, setShowQubo] = useState(false);
  const [counter, setCounter] = useState(0);
  const [showMatch, setShowMatch] = useState(false);

  const revealQubo = () => {
    setShowQubo(true);
    setCounter(0);
    setShowMatch(false);
    const target = 2170;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounter(target);
        clearInterval(interval);
        setTimeout(() => setShowMatch(true), 300);
      } else {
        setCounter(Math.round(current));
      }
    }, duration / steps);
  };

  const reset = () => { setShowQubo(false); setCounter(0); setShowMatch(false); };

  return (
    <div className="slide-content">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        {lang === 'en' ? 'Did QUBO Preserve the Original Optimum?' : 
         lang === 'tr' ? 'QUBO Orijinal Optimumu Korudu mu?' : 
         'QUBO бастапқы оңтайлыны сақтады ма?'}
      </h2>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        {lang === 'en' ? 'The most important result: comparing classical solver vs QUBO reformulation.' : 
         lang === 'tr' ? 'En önemli sonuç: klasik çözücü ile QUBO formülasyonunun karşılaştırması.' : 
         'Ең маңызды нәтиже: классикалық шешуші мен QUBO формулировкасын салыстыру.'}
      </p>

      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
        
        {/* SLSQP Card - Always visible */}
        <div className="card" style={{ padding: '2rem 3rem', border: '2px solid #9e9e9e', width: '320px', textAlign: 'center' }}>
          <div style={{ fontSize: '1rem', color: '#9e9e9e', marginBottom: '0.5rem', fontWeight: 'bold', letterSpacing: '1px' }}>SLSQP ({lang === 'en' ? 'Baseline' : lang === 'tr' ? 'Referans' : 'Негізгі'})</div>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: 1 }}>2170</div>
          <div style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>x₁ = 30, x₂ = 20</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Runtime: 0.021s</div>
        </div>

        {/* Equals / Question */}
        <div style={{ fontSize: '3rem', fontWeight: 'bold', color: showMatch ? '#4caf50' : 'var(--text-secondary)', transition: 'all 0.5s' }}>
          {showMatch ? '=' : '?'}
        </div>

        {/* QUBO Card - Revealed on click */}
        <div className="card" style={{ 
          padding: '2rem 3rem', width: '320px', textAlign: 'center',
          border: `2px solid ${showQubo ? 'var(--accent-cyan)' : 'var(--border-color)'}`,
          background: showQubo ? 'rgba(0,188,212,0.05)' : 'var(--bg-secondary)',
          transition: 'all 0.5s'
        }}>
          {showQubo ? (
            <>
              <div style={{ fontSize: '1rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontWeight: 'bold', letterSpacing: '1px' }}>Exact QUBO</div>
              <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: 1 }}>{counter}</div>
              <div style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>x₁ = 30, x₂ = 20</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Runtime: 9.694s</div>
            </>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '120px', gap: '1rem' }}>
              <div style={{ fontSize: '3rem' }}>❓</div>
              <button 
                onClick={revealQubo}
                style={{ padding: '0.8rem 2rem', background: 'var(--accent-cyan)', color: 'black', fontWeight: 'bold', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', boxShadow: '0 0 20px rgba(0,188,212,0.3)' }}
              >
                {lang === 'en' ? 'Reveal QUBO Result →' : lang === 'tr' ? 'QUBO Sonucunu Göster →' : 'QUBO нәтижесін көрсету →'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MATCH Badge */}
      {showMatch && (
        <div style={{ 
          textAlign: 'center', padding: '1.5rem', 
          background: 'rgba(76,175,80,0.15)', border: '2px solid #4caf50', borderRadius: '16px',
          animation: 'fadeIn 0.5s ease-out',
          boxShadow: '0 0 40px rgba(76,175,80,0.3)'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4caf50', marginBottom: '0.5rem' }}>
            ✓ {lang === 'en' ? 'PERFECT MATCH' : lang === 'tr' ? 'MÜKEMMEL EŞLEŞME' : 'ТАМАША СӘЙКЕСТІК'}
          </div>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            {lang === 'en' ? 'The QUBO reformulation preserved the original optimum. The framework is validated!' : 
             lang === 'tr' ? 'QUBO formülasyonu orijinal optimumu korudu. Çerçeve doğrulandı!' : 
             'QUBO формулировкасы бастапқы оңтайлыны сақтады. Жүйе расталды!'}
          </p>
        </div>
      )}

      {showMatch && (
        <button onClick={reset} style={{ marginTop: '1rem', padding: '0.5rem 1.5rem', background: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}>
          {lang === 'en' ? '↻ Reset Demo' : lang === 'tr' ? '↻ Demoyu Sıfırla' : '↻ Демоны қалпына келтіру'}
        </button>
      )}
    </div>
  );
};

export const Slide20_ComparisonConclusion: React.FC<SlideProps> = ({ lang }) => {
  const [metric, setMetric] = useState<'profit' | 'runtime'>('profit');
  const [highlight, setHighlight] = useState<string | null>(null);

  const solvers = [
    { name: 'SLSQP', profit: 2170, runtime: 0.021, x1: 30, x2: 20, color: '#9e9e9e', tags: ['best', 'fastest', 'exact'] },
    { name: 'Exact QUBO', profit: 2170, runtime: 9.694, x1: 30, x2: 20, color: 'var(--accent-cyan)', tags: ['best', 'exact'] },
    { name: 'Random Search', profit: 1446, runtime: 0.503, x1: 10, x2: 20, color: '#ff9800', tags: [] },
    { name: 'Sim. Annealing', profit: 1472, runtime: 1.504, x1: 40, x2: 0, color: '#e91e63', tags: [] },
    { name: 'QAOA', profit: 1816, runtime: 747.456, x1: 20, x2: 20, color: 'var(--accent-violet)', tags: ['quantum'] },
  ];

  const maxProfit = 2170;
  const maxRuntime = 747.456;

  const isHighlighted = (s: typeof solvers[0]) => {
    if (!highlight) return true;
    return s.tags.includes(highlight);
  };

  const highlightMessage: Record<string, { en: string; tr: string; kk: string }> = {
    best: { en: 'SLSQP & Exact QUBO both reach profit 2170', tr: 'SLSQP ve Exact QUBO, her ikisi de 2170 kâra ulaşır', kk: 'SLSQP пен Exact QUBO екеуі де 2170 пайдаға жетеді' },
    fastest: { en: 'SLSQP is fastest (0.021s) — it solves the original problem directly', tr: 'SLSQP en hızlı (0.021s) — orijinal problemi doğrudan çözer', kk: 'SLSQP ең жылдам (0.021s) — бастапқы мәселені тікелей шешеді' },
    exact: { en: 'Exact QUBO matches SLSQP — reformulation preserves the optimum', tr: 'Exact QUBO, SLSQP ile eşleşir — formülasyon optimumu korur', kk: 'Exact QUBO SLSQP-мен сәйкес — формулировка оңтайлыны сақтайды' },
    quantum: { en: 'QAOA demonstrates the quantum-oriented workflow (not quantum advantage)', tr: 'QAOA kuantum-odaklı iş akışını gösterir (kuantum üstünlüğü değil)', kk: 'QAOA кванттық жұмыс процесін көрсетеді (кванттық артықшылық емес)' },
  };

  const t = (obj: { en: string; tr: string; kk: string }) => lang === 'en' ? obj.en : lang === 'tr' ? obj.tr : obj.kk;

  return (
    <div className="slide-content" style={{ padding: '7rem 3rem 4rem 3rem' }}>
      <h2 style={{ fontSize: '2.4rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>
        {lang === 'en' ? 'Method Comparison & Conclusion' : lang === 'tr' ? 'Yöntem Karşılaştırması ve Sonuç' : 'Әдістерді салыстыру және қорытынды'}
      </h2>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.3rem', background: 'rgba(0,0,0,0.3)', padding: '0.2rem', borderRadius: '8px' }}>
          <button onClick={() => setMetric('profit')} style={{ padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: metric === 'profit' ? 'bold' : 'normal', background: metric === 'profit' ? 'var(--accent-cyan)' : 'transparent', color: metric === 'profit' ? 'black' : 'var(--text-secondary)', border: 'none' }}>
            {lang === 'en' ? 'Profit' : lang === 'tr' ? 'Kâr' : 'Пайда'}
          </button>
          <button onClick={() => setMetric('runtime')} style={{ padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: metric === 'runtime' ? 'bold' : 'normal', background: metric === 'runtime' ? '#ff9800' : 'transparent', color: metric === 'runtime' ? 'black' : 'var(--text-secondary)', border: 'none' }}>
            Runtime
          </button>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {[
            { key: 'best', label: { en: '🏆 Best Profit', tr: '🏆 En İyi Kâr', kk: '🏆 Ең жақсы' } },
            { key: 'fastest', label: { en: '⚡ Fastest', tr: '⚡ En Hızlı', kk: '⚡ Ең жылдам' } },
            { key: 'exact', label: { en: '✓ Exact Match', tr: '✓ Birebir Eşleşme', kk: '✓ Дәл сәйкестік' } },
            { key: 'quantum', label: { en: '⚛️ Quantum', tr: '⚛️ Kuantum', kk: '⚛️ Кванттық' } },
          ].map(btn => (
            <button key={btn.key} onClick={() => setHighlight(highlight === btn.key ? null : btn.key)} style={{ padding: '0.3rem 0.7rem', borderRadius: '6px', fontSize: '0.75rem', background: highlight === btn.key ? 'rgba(255,255,255,0.15)' : 'transparent', color: highlight === btn.key ? 'white' : 'var(--text-secondary)', border: `1px solid ${highlight === btn.key ? 'var(--text-secondary)' : 'var(--border-color)'}` }}>
              {t(btn.label)}
            </button>
          ))}
        </div>
      </div>

      {/* Bar Chart */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
        {solvers.map((s, idx) => {
          const val = metric === 'profit' ? s.profit : s.runtime;
          const pct = metric === 'profit' ? (s.profit / maxProfit) * 100 : Math.min(100, (Math.log10(s.runtime + 1) / Math.log10(maxRuntime + 1)) * 100);
          const dimmed = !isHighlighted(s);
          return (
            <div key={idx} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 90px 80px', alignItems: 'center', gap: '1rem', opacity: dimmed ? 0.25 : 1, transition: 'opacity 0.3s' }}>
              <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: s.color }}>{s.name}</span>
              <div style={{ height: '28px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: s.color, borderRadius: '4px', transition: 'width 0.8s ease-out', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                    {metric === 'profit' ? val : `${val}s`}
                  </span>
                </div>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>x₁={s.x1}, x₂={s.x2}</span>
              <span style={{ fontSize: '0.7rem', color: '#4caf50' }}>✓ Feasible</span>
            </div>
          );
        })}
      </div>

      {/* Highlight Message */}
      <div style={{ padding: '1rem', background: highlight ? 'rgba(255,255,255,0.05)' : 'transparent', borderRadius: '12px', border: highlight ? '1px solid var(--border-color)' : 'none', textAlign: 'center', minHeight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
        {highlight ? (
          <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{t(highlightMessage[highlight])}</span>
        ) : (
          <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            {lang === 'en' ? '↑ Click a filter above to explore • Different methods answer different questions.' : 
             lang === 'tr' ? '↑ Keşfetmek için yukarıdaki filtrelere tıklayın • Farklı yöntemler farklı soruları cevaplar.' : 
             '↑ Зерттеу үшін жоғарыдағы сүзгілерді басыңыз • Әртүрлі әдістер әртүрлі сұрақтарға жауап береді.'}
          </span>
        )}
      </div>

      {/* QAOA Disclaimer */}
      <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#ff9800', fontStyle: 'italic', textAlign: 'center' }}>
        * {lang === 'en' ? 'QAOA is a workflow demonstration, not evidence of quantum advantage.' : 
           lang === 'tr' ? 'QAOA bir iş akışı demosudur, kuantum üstünlüğü kanıtı değildir.' : 
           'QAOA — жұмыс процесінің демосы, кванттық артықшылықтың дәлелі емес.'}
      </div>
    </div>
  );
};
