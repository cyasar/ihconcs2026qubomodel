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

export const Slide16_QuboMatrix: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'The Final QUBO Matrix (Q)' : 
       lang === 'tr' ? 'Nihai QUBO Matrisi (Q)' : 
       'Соңғы QUBO матрицасы (Q)'}
    </h2>

    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'The problem is now fully encoded in a single upper-triangular matrix.' : 
       lang === 'tr' ? 'Problem artık tek bir üst-üçgen matris (Q) içinde tamamen kodlanmıştır.' : 
       'Мәселе енді толығымен жоғарғы үшбұрышты матрицада (Q) кодталған.'}
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
        <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Linear terms (Diagonal)' : lang === 'tr' ? 'Doğrusal terimler (Köşegen)' : 'Сызықтық терминдер (Диагональ)'}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ width: '15px', height: '15px', background: '#8e24aa' }}></div>
        <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Quadratic terms (Off-diagonal)' : lang === 'tr' ? 'Karesel terimler (Köşegen dışı)' : 'Квадраттық терминдер (Диагональдан тыс)'}</span>
      </div>
    </div>
  </div>
);

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

export const Slide19_KeyResult: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Key Result: Validation of the Framework' : 
       lang === 'tr' ? 'Temel Sonuç: Çerçevenin Doğrulanması' : 
       'Негізгі нәтиже: Жүйені тексеру'}
    </h2>

    <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
      {lang === 'en' ? 'The QUBO reformulation successfully matches the classical solver.' : 
       lang === 'tr' ? 'QUBO formülasyonu, klasik çözücü ile başarıyla eşleşmektedir.' : 
       'QUBO формулировкасы классикалық шешушімен сәтті сәйкес келеді.'}
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
      {lang === 'en' ? 'Conclusion' : lang === 'tr' ? 'Sonuç' : 'Қорытынды'}
    </h2>

    <div className="grid-2-col" style={{ alignItems: 'start' }}>
      
      <div className="card" style={{ textAlign: 'left' }}>
        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>{lang === 'en' ? 'Results Summary' : lang === 'tr' ? 'Sonuç Özeti' : 'Нәтижелердің қысқаша мазмұны'}</h4>
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
          * {lang === 'en' ? 'QAOA results depend heavily on hardware simulation depth and shots. This study demonstrates workflow integration, not quantum advantage.' : 
             lang === 'tr' ? 'QAOA sonuçları donanım simülasyon derinliğine ve atış sayısına bağlıdır. Bu çalışma kuantum üstünlüğü değil, iş akışı entegrasyonu gösterir.' : 
             'QAOA нәтижелері аппараттық модельдеу тереңдігіне және кадрлар санына байланысты. Бұл зерттеу кванттық артықшылықты емес, жұмыс процесінің интеграциясын көрсетеді.'}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ background: 'rgba(0,188,212,0.1)', borderLeft: '4px solid var(--accent-cyan)', padding: '2rem', textAlign: 'left', borderRadius: '0 8px 8px 0' }}>
          <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>{lang === 'en' ? 'Framework Validated' : lang === 'tr' ? 'Çerçeve Doğrulandı' : 'Жүйе тексерілді'}</h4>
          <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {lang === 'en' ? 'The penalty method and binary discretisation reliably map nonlinear constraints into the QUBO space.' : 
             lang === 'tr' ? 'Ceza yöntemi ve ikili ayrıklaştırma, doğrusal olmayan kısıtları QUBO uzayına güvenilir bir şekilde eşler.' : 
             'Жазалау әдісі мен екілік дискретизация сызықтық емес шектеулерді QUBO кеңістігіне сенімді түрде бейнелейді.'}
          </p>
        </div>

        <div style={{ background: 'rgba(142,36,170,0.1)', borderLeft: '4px solid var(--accent-violet)', padding: '2rem', textAlign: 'left', borderRadius: '0 8px 8px 0' }}>
          <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>{lang === 'en' ? 'Future Work' : lang === 'tr' ? 'Gelecek Çalışmalar' : 'Болашақ жұмыстар'}</h4>
          <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {lang === 'en' ? 'Scaling to larger industrial models and testing on physical QPU hardware to analyze noise robustness.' : 
             lang === 'tr' ? 'Daha büyük endüstriyel modellere ölçekleme ve gürültü direncini analiz etmek için fiziksel QPU donanımında test etme.' : 
             'Шуға төзімділікті талдау үшін ірі өнеркәсіптік модельдерге дейін масштабтау және физикалық QPU жабдығында сынау.'}
          </p>
        </div>
      </div>

    </div>
  </div>
);
