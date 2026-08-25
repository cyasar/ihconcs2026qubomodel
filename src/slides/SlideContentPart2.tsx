import React, { useState } from 'react';
import type { SlideProps } from '../content/types';

export const Slide09_CaseStudy: React.FC<SlideProps> = ({ lang }) => {
  const [x1, setX1] = useState(30);
  const [x2, setX2] = useState(20);

  // Exact model to yield 2170 profit at (30, 20)
  const revenue = (x1 * 68) + (x2 * 45);
  const cost = (x1 * x1 * 0.5) + (x2 * x2 * 0.5) + (x1 * x2 * 0.2);
  const profit = revenue - cost;
  
  // Real constraints
  const res1 = (x1 * 2) + (x2 * 1); // <= 80
  const res2 = (x1 * 1) + (x2 * 3); // <= 90
  const total = x1 + x2;            // <= 50

  const isFeasible = res1 <= 80 && res2 <= 90 && total <= 50;
  
  return (
    <div className="slide-content">
      <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>
        {lang === 'en' ? 'A Production Planning Problem' : 
         lang === 'tr' ? 'Bir Üretim Planlama Problemi' : 
         'Өндірісті жоспарлау мәселесі'}
      </h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
        {lang === 'en' ? 'Profit = 68x₁ + 45x₂ − 0.5x₁² − 0.5x₂² − 0.2x₁x₂' : 
         lang === 'tr' ? 'Kâr = 68x₁ + 45x₂ − 0.5x₁² − 0.5x₂² − 0.2x₁x₂' : 
         'Пайда = 68x₁ + 45x₂ − 0.5x₁² − 0.5x₂² − 0.2x₁x₂'}
      </p>
      
      <div className="grid-2-col">
        
        {/* Left: Interactive Controls */}
        <div className="card" style={{ textAlign: 'left' }}>
          <h4 style={{ color: 'var(--accent-cyan)' }}>{lang === 'en' ? 'Production Variables' : lang === 'tr' ? 'Üretim Değişkenleri' : 'Өндіріс айнымалылары'}</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            {lang === 'en' ? 'Adjust production levels to see nonlinear effects.' : 
             lang === 'tr' ? 'Doğrusal olmayan etkileri ve kısıtları görmek için ayarlayın.' : 
             'Сызықтық емес әсерлерді көру үшін өндіріс деңгейлерін реттеңіз.'}
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              <span>Product 1 (x₁)</span> <span>{x1} units</span>
            </label>
            <input type="range" min="0" max="40" step="5" value={x1} onChange={e => setX1(parseInt(e.target.value))} style={{ width: '100%', accentColor: 'var(--accent-cyan)' }} />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              <span>Product 2 (x₂)</span> <span>{x2} units</span>
            </label>
            <input type="range" min="0" max="40" step="5" value={x2} onChange={e => setX2(parseInt(e.target.value))} style={{ width: '100%', accentColor: 'var(--accent-violet)' }} />
          </div>
        </div>

        {/* Right: Dynamic Outputs */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: isFeasible ? 'rgba(0,0,0,0.4)' : 'rgba(244,67,54,0.1)', border: `1px solid ${isFeasible ? 'rgba(255,255,255,0.1)' : '#f44336'}`, transition: 'all 0.3s' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Revenue (+)' : lang === 'tr' ? 'Gelir (+)' : 'Табыс (+)'}</span>
            <span style={{ color: '#4caf50', fontWeight: 'bold' }}>{revenue.toFixed(1)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Nonlinear Cost (-)' : lang === 'tr' ? 'Doğrusal Olmayan Maliyet (-)' : 'Сызықтық емес шығын (-)'}</span>
            <span style={{ color: '#f44336', fontWeight: 'bold' }}>{cost.toFixed(1)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', fontSize: '1.5rem' }}>
            <span style={{ color: 'white', fontWeight: 'bold' }}>{lang === 'en' ? 'Profit' : lang === 'tr' ? 'Kâr' : 'Пайда'}</span>
            <span style={{ color: isFeasible ? 'var(--accent-cyan)' : '#f44336', fontWeight: 'bold', textShadow: isFeasible && profit === 2170 ? '0 0 15px var(--accent-cyan)' : 'none' }}>
              {profit.toFixed(1)}
              {isFeasible && profit === 2170 && ' ⭐'}
            </span>
          </div>

          <div style={{ marginTop: '0.5rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>{lang === 'en' ? 'Constraints Usage' : lang === 'tr' ? 'Kısıt Kullanımı' : 'Шектеулерді пайдалану'}</span>
              {!isFeasible && <span style={{ color: '#f44336', fontWeight: 'bold' }}>INFEASIBLE!</span>}
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ width: '80px', fontSize: '0.75rem', color: res1 > 80 ? '#f44336' : 'white' }}>Res 1 (≤80)</span>
              <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, (res1/80)*100)}%`, height: '100%', background: res1 > 80 ? '#f44336' : '#4caf50' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ width: '80px', fontSize: '0.75rem', color: res2 > 90 ? '#f44336' : 'white' }}>Res 2 (≤90)</span>
              <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, (res2/90)*100)}%`, height: '100%', background: res2 > 90 ? '#f44336' : '#4caf50' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ width: '80px', fontSize: '0.75rem', color: total > 50 ? '#f44336' : 'white' }}>Total (≤50)</span>
              <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, (total/50)*100)}%`, height: '100%', background: total > 50 ? '#f44336' : '#4caf50' }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export const Slide10_NonlinearObjective: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
      {lang === 'en' ? 'Why Is the Problem Nonlinear?' : 
       lang === 'tr' ? 'Problem Neden Doğrusal Değildir?' : 
       'Мәселе неліктен сызықтық емес?'}
    </h2>
    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Revenue increases with production. But cost also increases nonlinearly.' : 
       lang === 'tr' ? 'Gelir üretimle birlikte artar. Ancak maliyetler de doğrusal olmayan bir şekilde artar.' : 
       'Табыс өндіріспен бірге өседі. Бірақ шығындар да сызықтық емес түрде артады.'}
    </p>

    <div className="grid-2-col" style={{ alignItems: 'start' }}>
      <div style={{ textAlign: 'left' }}>
        <h4 style={{ color: 'var(--accent-violet)' }}>{lang === 'en' ? 'Possible reasons for nonlinearity:' : lang === 'tr' ? 'Doğrusal olmamanın olası nedenleri:' : 'Сызықтық еместіктің ықтимал себептері:'}</h4>
        <ul style={{ fontSize: '1.1rem', lineHeight: '2', color: 'var(--text-primary)', background: 'rgba(142,36,170,0.05)', padding: '2rem 3rem', borderRadius: '12px', border: '1px solid rgba(142,36,170,0.2)' }}>
          <li>{lang === 'en' ? 'overtime labour' : lang === 'tr' ? 'fazla mesai maliyetleri' : 'үстеме жұмыс шығындары'}</li>
          <li>{lang === 'en' ? 'machine wear' : lang === 'tr' ? 'makine yıpranması' : 'машинаның тозуы'}</li>
          <li>{lang === 'en' ? 'storage limitations' : lang === 'tr' ? 'depolama sınırları' : 'сақтау шектеулері'}</li>
          <li>{lang === 'en' ? 'coordination cost' : lang === 'tr' ? 'koordinasyon maliyeti' : 'үйлестіру шығыны'}</li>
          <li>{lang === 'en' ? 'production interference' : lang === 'tr' ? 'üretim çakışmaları' : 'өндірістегі кедергілер'}</li>
        </ul>
      </div>

      <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        <div style={{ width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)', borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
          {/* Conceptual Profit Surface using simple CSS gradients */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(76, 175, 80, 0.4) 0%, rgba(244, 67, 54, 0.3) 100%)', opacity: 0.8 }}></div>
          
          {/* Grid lines */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'perspective(500px) rotateX(60deg) scale(2)', transformOrigin: 'top' }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, padding: '1rem', background: 'rgba(0,0,0,0.8)', border: '1px solid var(--accent-cyan)', borderRadius: '8px', color: 'white', fontWeight: 'bold' }}>
            {lang === 'en' ? 'Conceptual Profit Surface' : lang === 'tr' ? 'Kavramsal Kâr Yüzeyi' : 'Тұжырымдамалық пайда беті'}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Slide11_FeasibleRegion: React.FC<SlideProps> = ({ lang }) => {
  const [hoverPt, setHoverPt] = useState<{ x1: number, x2: number, px: number, py: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // SVG viewbox is 0 0 100 100
    // We map 0-100 px to 0-50 units (scale x2)
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    
    const x1 = Math.round(px / 2);
    const x2 = Math.round((100 - py) / 2);
    
    setHoverPt({ x1, x2, px, py });
  };

  const getStatus = () => {
    if (!hoverPt) return null;
    const { x1, x2 } = hoverPt;
    const res1 = 2*x1 + x2;
    const res2 = x1 + 3*x2;
    const total = x1 + x2;
    const profit = 68*x1 + 45*x2 - 0.5*x1*x1 - 0.5*x2*x2 - 0.2*x1*x2;
    
    const fails = [];
    if (res1 > 80) fails.push(`Res1 (${res1}>80)`);
    if (res2 > 90) fails.push(`Res2 (${res2}>90)`);
    if (total > 50) fails.push(`Total (${total}>50)`);
    if (x1 < 0 || x2 < 0) fails.push('Negative');

    return { profit, fails, isFeasible: fails.length === 0 };
  };

  const status = getStatus();

  return (
    <div className="slide-content">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        {lang === 'en' ? 'Constraints Define What Is Possible' : 
         lang === 'tr' ? 'Kısıtlar Nelerin Mümkün Olduğunu Belirler' : 
         'Шектеулер ненің мүмкін екенін анықтайды'}
      </h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        {lang === 'en' ? 'Hover over the chart to explore the constraint space. We map inequalities to penalties.' : 
         lang === 'tr' ? 'Kısıt uzayını keşfetmek için grafiğin üzerine gelin. Eşitsizlikleri cezalara dönüştürüyoruz.' : 
         'Шектеу кеңістігін зерттеу үшін тінтуірді графиктің үстіне апарыңыз. Біз теңсіздіктерді жазаларға айналдырамыз.'}
      </p>

      <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        
        {/* Constraints List */}
        <div style={{ flex: 1, textAlign: 'left', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>{lang === 'en' ? 'Inequality Boundaries:' : lang === 'tr' ? 'Eşitsizlik Sınırları:' : 'Теңсіздік шекаралары:'}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '20px', height: '4px', background: '#e91e63' }}></div>
              <span>2x₁ + x₂ ≤ 80 (Res 1)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '20px', height: '4px', background: '#ff9800' }}></div>
              <span>x₁ + 3x₂ ≤ 90 (Res 2)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '20px', height: '4px', background: '#00bcd4' }}></div>
              <span>x₁ + x₂ ≤ 50 (Total)</span>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              {lang === 'en' ? 'Classical solvers use these bounds directly.' : 
               lang === 'tr' ? 'Klasik çözücüler bu sınırları doğrudan kullanır.' : 
               'Классикалық шешушілер осы шектерді тікелей пайдаланады.'}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', marginTop: '0.5rem', fontWeight: 'bold' }}>
              {lang === 'en' ? 'QUBO requires them converted to equations via slack variables.' : 
               lang === 'tr' ? 'QUBO, bunların gevşek değişkenlerle (slack) denklemlere dönüştürülmesini gerektirir.' : 
               'QUBO олардың бос айнымалылар (slack) арқылы теңдеулерге айналуын талап етеді.'}
            </div>
          </div>
        </div>

        {/* Interactive Chart */}
        <div style={{ flex: 1.5, position: 'relative', height: '400px', width: '100%', borderLeft: '2px solid white', borderBottom: '2px solid white' }}>
          <div style={{ position: 'absolute', bottom: '-30px', left: '50%', transform: 'translateX(-50%)' }}>x₁ (0-50)</div>
          <div style={{ position: 'absolute', left: '-50px', top: '50%', transform: 'translateY(-50%) rotate(-90deg)' }}>x₂ (0-50)</div>
          
          {/* Coordinate system and Polygon */}
          <svg 
            width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" 
            style={{ position: 'absolute', inset: 0, cursor: 'crosshair' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoverPt(null)}
          >
            {/* Grid lines */}
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />

            {/* Feasible Region polygon (0,0) -> (40,0) -> (30,20) -> (0,30) in math coords => in px: (0,100)->(80,100)->(60,60)->(0,40) */}
            <polygon points="0,100 80,100 60,60 0,40" fill="rgba(76, 175, 80, 0.2)" stroke="#4caf50" strokeWidth="1" />
            
            {/* Line 1: 2x1+x2=80 => px=40(x1=20) py=20(x2=40), px=60(x1=30) py=60(x2=20), px=80(x1=40) py=100(x2=0) */}
            <line x1="30" y1="-40" x2="80" y2="100" stroke="#e91e63" strokeWidth="1.5" />
            
            {/* Line 2: x1+3x2=90 => px=0(x1=0) py=40(x2=30), px=60(x1=30) py=60(x2=20), px=100(x1=50) py=73(x2=13) */}
            <line x1="0" y1="40" x2="100" y2="73.3" stroke="#ff9800" strokeWidth="1.5" />
            
            {/* Line 3: x1+x2=50 => px=0 py=0(x2=50), px=50 py=50(x2=25), px=100 py=100(x2=0) */}
            <line x1="0" y1="0" x2="100" y2="100" stroke="#00bcd4" strokeWidth="1.5" />
            
            {/* Feasible optimum point */}
            <circle cx="60" cy="60" r="2.5" fill="#4caf50" style={{ filter: 'drop-shadow(0 0 4px #4caf50)' }} />
            <text x="63" y="58" fill="#4caf50" fontSize="4" fontWeight="bold">Optimum (30,20)</text>

            {/* Interactive hover point */}
            {hoverPt && (
              <g style={{ transition: 'all 0.1s ease-out' }}>
                <line x1="0" y1={hoverPt.py} x2="100" y2={hoverPt.py} stroke="rgba(255,255,255,0.3)" strokeDasharray="2,2" strokeWidth="0.5" />
                <line x1={hoverPt.px} y1="0" x2={hoverPt.px} y2="100" stroke="rgba(255,255,255,0.3)" strokeDasharray="2,2" strokeWidth="0.5" />
                <circle cx={hoverPt.px} cy={hoverPt.py} r="3" fill={status?.isFeasible ? 'white' : '#f44336'} />
              </g>
            )}
          </svg>

          {/* Dynamic Tooltip */}
          {hoverPt && status && (
            <div style={{
              position: 'absolute',
              left: hoverPt.px > 50 ? `${hoverPt.px - 3}%` : `${hoverPt.px + 3}%`,
              top: hoverPt.py > 50 ? `${hoverPt.py - 5}%` : `${hoverPt.py + 5}%`,
              transform: hoverPt.px > 50 ? 'translateX(-100%)' : 'none',
              background: 'rgba(0,0,0,0.85)',
              border: `1px solid ${status.isFeasible ? '#4caf50' : '#f44336'}`,
              padding: '0.8rem',
              borderRadius: '8px',
              pointerEvents: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              minWidth: '150px',
              zIndex: 10
            }}>
              <div style={{ fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.3rem', marginBottom: '0.3rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>(x₁: {hoverPt.x1}, x₂: {hoverPt.x2})</span>
                {status.isFeasible ? <span style={{ color: '#4caf50' }}>✓</span> : <span style={{ color: '#f44336' }}>✗</span>}
              </div>
              <div style={{ fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                Profit: <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>{status.profit.toFixed(0)}</span>
              </div>
              {!status.isFeasible && (
                <div style={{ fontSize: '0.8rem', color: '#f44336', marginTop: '0.5rem' }}>
                  {status.fails.map((f, i) => <div key={i}>• {f}</div>)}
                </div>
              )}
            </div>
          )}

          {!hoverPt && (
            <div style={{ position: 'absolute', top: '20%', left: '30%', color: 'rgba(255,255,255,0.3)', fontWeight: 'bold', fontSize: '1.2rem', pointerEvents: 'none', animation: 'pulse 2s infinite' }}>
              {lang === 'en' ? 'HOVER TO EXPLORE' : lang === 'tr' ? 'KEŞFETMEK İÇİN ÜZERİNE GELİN' : 'ЗЕРТТЕУ ҮШІН ҮСТІНЕ АПАРЫҢЫЗ'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Slide12_Pipeline: React.FC<SlideProps> = ({ lang }) => {
  const steps = [
    { en: '1. Variable scaling', tr: '1. Değişken ölçeklendirme', kk: '1. Айнымалыны масштабтау' },
    { en: '2. Discretisation', tr: '2. Ayrıklaştırma', kk: '2. Дискретизация' },
    { en: '3. Binary encoding', tr: '3. İkili (Binary) kodlama', kk: '3. Екілік кодтау' },
    { en: '4. Slack-variable introduction', tr: '4. Gevşek değişken ekleme', kk: '4. Бос айнымалыларды енгізу' },
    { en: '5. Penalty-based constraint embedding', tr: '5. Ceza tabanlı kısıt gömme', kk: '5. Жазаға негізделген шектеуді енгізу' },
    { en: '6. QUBO matrix construction', tr: '6. QUBO matrisi oluşturma', kk: '6. QUBO матрицасын құру' },
    { en: '7. Solve', tr: '7. Çözüm', kk: '7. Шешу' },
    { en: '8. Decode', tr: '8. Kod Çözme', kk: '8. Декодтау' },
    { en: '9. Validate in original problem space', tr: '9. Orijinal problem uzayında doğrulama', kk: '9. Түпнұсқа кеңістікте тексеру' }
  ];

  return (
    <div className="slide-content">
      <h2 style={{ fontSize: '2.8rem', color: 'var(--accent-cyan)', marginBottom: '3rem' }}>
        {lang === 'en' ? 'From Nonlinear Optimization to QUBO' : 
         lang === 'tr' ? 'Doğrusal Olmayan Optimizasyondan QUBO\'ya' : 
         'Сызықтық емес оңтайландырудан QUBO-ға дейін'}
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', maxWidth: '1200px' }}>
        {steps.map((step, idx) => (
          <div key={idx} style={{ 
            background: 'var(--bg-secondary)', 
            border: '1px solid var(--border-color)', 
            padding: '1.5rem', 
            borderRadius: '8px',
            textAlign: 'center',
            position: 'relative',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
          }}>
            <span style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem', fontWeight: 'bold' }}>
              {lang === 'en' ? step.en : lang === 'tr' ? step.tr : step.kk}
            </span>
            {idx < steps.length - 1 && idx % 3 !== 2 && (
              <div style={{ position: 'absolute', right: '-15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>→</div>
            )}
            {idx < steps.length - 1 && idx % 3 === 2 && (
              <div style={{ position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-secondary)' }}>↓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Slide13_BinaryEncoding: React.FC<SlideProps> = ({ lang }) => {
  const [bits, setBits] = useState([1, 0, 1, 1]);
  
  const toggleBit = (index: number) => {
    const newBits = [...bits];
    newBits[index] = newBits[index] === 0 ? 1 : 0;
    setBits(newBits);
  };
  
  // Array is [b0, b1, b2, b3] -> MSB is usually b3 or b0 depending on endianness. 
  // We'll treat index 0 as b0 (2^0).
  const decimal = bits[0]*(1) + bits[1]*(2) + bits[2]*(4) + bits[3]*(8);
  const scaledX = decimal * 10; // based on paper's x = 10u

  return (
    <div className="slide-content">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
        {lang === 'en' ? 'Continuous Variables Must Become Bits' : 
         lang === 'tr' ? 'Sürekli Değişkenler Bitlere Dönüşmeli' : 
         'Үздіксіз айнымалылар биттерге айналуы керек'}
      </h2>
      
      <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>x₁</div>
        <div style={{ color: 'var(--text-secondary)' }}>→</div>
        <div style={{ fontSize: '1.5rem', color: 'var(--accent-violet)', background: 'rgba(142,36,170,0.1)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
          {lang === 'en' ? 'scaled variable u₁' : lang === 'tr' ? 'ölçeklenmiş değişken u₁' : 'масштабталған u₁'}
        </div>
        <div style={{ color: 'var(--text-secondary)' }}>→</div>
        <div style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', background: 'rgba(0,188,212,0.1)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
          {lang === 'en' ? 'binary representation' : lang === 'tr' ? 'ikili gösterim' : 'екілік көрініс'}
        </div>
      </div>

      <div style={{ margin: '3rem 0', fontSize: '1.8rem', fontFamily: 'var(--font-mono)' }}>
        u₁ = b₀2⁰ + b₁2¹ + b₂2² + b₃2³
      </div>

      <div className="card" style={{ display: 'inline-block', padding: '2rem 4rem' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
          {[3, 2, 1, 0].map(power => {
            const val = bits[power];
            return (
              <div key={power} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>b{power}</span>
                <button 
                  onClick={() => toggleBit(power)}
                  style={{
                    width: '60px', height: '60px', fontSize: '2rem', fontWeight: 'bold',
                    background: val ? 'var(--accent-cyan)' : 'var(--bg-secondary)',
                    color: val ? 'black' : 'white',
                    border: `2px solid ${val ? 'var(--accent-cyan)' : 'var(--border-color)'}`
                  }}
                >
                  {val}
                </button>
              </div>
            );
          })}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.5rem' }}>
          <div>{lang === 'en' ? 'Binary:' : lang === 'tr' ? 'İkili:' : 'Екілік:'} <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{bits[3]}{bits[2]}{bits[1]}{bits[0]}</span></div>
          <div>{lang === 'en' ? 'Decimal (u₁):' : lang === 'tr' ? 'Ondalık (u₁):' : 'Ондық (u₁):'} <span style={{ fontWeight: 'bold' }}>{decimal}</span></div>
          <div style={{ color: 'var(--accent-violet)' }}>{lang === 'en' ? 'Scaled production (x₁ = 10u₁):' : lang === 'tr' ? 'Ölçeklenmiş üretim (x₁ = 10u₁):' : 'Өндіріс (x₁ = 10u₁):'} <span style={{ fontWeight: 'bold' }}>{scaledX}</span></div>
        </div>
      </div>

      <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px' }}>
        {lang === 'en' 
          ? 'A quantum-oriented optimiser manipulates binary decision representations rather than the original continuous variable directly.' 
          : lang === 'tr' 
          ? 'Kuantum-odaklı bir algoritma, doğrudan orijinal sürekli değişkeni değil, ikili karar gösterimlerini (bitleri) manipüle eder.' 
          : 'Кванттық бағдарланған оңтайландыру алгоритмі тікелей бастапқы үздіксіз айнымалыны емес, екілік шешімдерді басқарады.'}
      </p>
    </div>
  );
};

export const Slide14_SlackVariables: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '2rem' }}>
      {lang === 'en' ? 'How Do Inequalities Enter QUBO?' : 
       lang === 'tr' ? 'Eşitsizlikler QUBO\'ya Nasıl Girer?' : 
       'Теңсіздіктер QUBO-ға қалай енеді?'}
    </h2>
    
    <div className="grid-2-col" style={{ alignItems: 'center' }}>
      <div style={{ textAlign: 'left', fontSize: '1.5rem', fontFamily: 'var(--font-mono)', background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '12px' }}>
        <div style={{ color: '#f44336', marginBottom: '1rem' }}>a₁x₁ + a₂x₂ ≤ B</div>
        <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1rem' }}>↓</div>
        <div style={{ color: '#4caf50', marginBottom: '1rem' }}>a₁x₁ + a₂x₂ <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>+ s</span> = B</div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{lang === 'en' ? 'where' : lang === 'tr' ? 'öyle ki' : 'мұндағы'} <span style={{ color: 'var(--accent-cyan)' }}>s ≥ 0</span></div>
      </div>
      
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
        <p style={{ fontSize: '1.2rem' }}>
          {lang === 'en' ? 'Slack represents unused resource.' : 
           lang === 'tr' ? 'Gevşek değişken (slack), kullanılmayan kaynağı temsil eder.' : 
           'Бос айнымалы (slack) пайдаланылмаған ресурсты білдіреді.'}
        </p>
        
        {/* Resource Tank Metaphor */}
        <div style={{ width: '100%', maxWidth: '300px', height: '200px', border: '4px solid var(--border-color)', borderRadius: '8px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '10%', width: '100%', textAlign: 'center', color: 'white', fontWeight: 'bold', zIndex: 2 }}>
            Slack (s) = 25<br/><span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>({lang === 'en' ? 'Unused' : lang === 'tr' ? 'Kullanılmayan' : 'Бос'})</span>
          </div>
          <div style={{ position: 'absolute', bottom: '20%', width: '100%', textAlign: 'center', color: 'white', fontWeight: 'bold', zIndex: 2 }}>
            {lang === 'en' ? 'Used Resource' : lang === 'tr' ? 'Kullanılan Kaynak' : 'Пайдаланылған ресурс'} = 75
          </div>
          
          <div style={{ height: '25%', background: 'rgba(0,188,212,0.3)', width: '100%' }}></div>
          <div style={{ height: '75%', background: '#4caf50', width: '100%' }}></div>
        </div>
        
        <div style={{ color: 'var(--text-secondary)' }}>
          {lang === 'en' ? 'Available resource (B) = 100' : lang === 'tr' ? 'Mevcut kaynak (B) = 100' : 'Қолда бар ресурс (B) = 100'}
        </div>
      </div>
    </div>
    
    <div style={{ marginTop: '3rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>
      slack variable → binary encoded slack
    </div>
  </div>
);

export const Slide12b_InteractivePipeline: React.FC<SlideProps> = ({ lang }) => {
  const [activeStep, setActiveStep] = useState(0);

  const stepDetails = [
    {
      title: { en: 'Variable Scaling', tr: 'Değişken Ölçeklendirme', kk: 'Айнымалыны масштабтау' },
      math: <>x = x<sub>min</sub> + [(x<sub>max</sub> - x<sub>min</sub>) / (2<sup>N</sup> - 1)] &middot; u</>,
      app: { en: 'Map continuous variables to a finite discrete range.', tr: 'Sürekli değişkenleri sonlu bir aralığa eşliyoruz.', kk: 'Үздіксіз айнымалыларды шектеулі ауқымға бейнелеу.' }
    },
    {
      title: { en: 'Discretisation', tr: 'Ayrıklaştırma', kk: 'Дискретизация' },
      math: <>u &isin; &#123;0, 1, 2, ..., 2<sup>N</sup> - 1&#125;</>,
      app: { en: 'Divide the range into discrete integer steps.', tr: 'Aralığı ayrık adımlara bölüyoruz.', kk: 'Диапазонды дискретті қадамдарға бөлу.' }
    },
    {
      title: { en: 'Binary Encoding', tr: 'İkili (Binary) Kodlama', kk: 'Екілік кодтау' },
      math: <>u = <span style={{ fontSize: '1.2em' }}>&Sigma;</span> (2<sup>i</sup> q<sub>i</sub>) &nbsp;&nbsp; (q<sub>i</sub> &isin; &#123;0, 1&#125;)</>,
      app: { en: 'Represent integers as binary qubits.', tr: 'Tam sayıları ikili (binary) kübitler olarak ifade ediyoruz.', kk: 'Бүтін сандарды екілік кубиттер ретінде көрсету.' }
    },
    {
      title: { en: 'Slack-variable Introduction', tr: 'Gevşek Değişken Ekleme', kk: 'Бос айнымалыларды енгізу' },
      math: <>g(x) &le; B &rArr; g(x) + s = B</>,
      app: { en: 'Convert inequality constraints into equalities.', tr: 'Eşitsizlik kısıtlarını eşitliklere dönüştürüyoruz.', kk: 'Теңсіздік шектеулерін теңдіктерге айналдыру.' }
    },
    {
      title: { en: 'Penalty-based Constraint Embedding', tr: 'Ceza Tabanlı Kısıt Gömme', kk: 'Жазаға негізделген шектеуді енгізу' },
      math: <>P(x) = &lambda; [g(x) + s - B]<sup>2</sup></>,
      app: { en: 'Add squared penalties to the objective function.', tr: 'Amaç fonksiyonuna karesel cezalar ekliyoruz.', kk: 'Мақсатты функцияға квадраттық жазаларды қосу.' }
    },
    {
      title: { en: 'QUBO Matrix Construction', tr: 'QUBO Matrisi Oluşturma', kk: 'QUBO матрицасын құру' },
      math: <>min<sub>q</sub> q<sup>T</sup> Q q</>,
      app: { en: 'Expand formulas and collect coefficients into matrix Q.', tr: 'Formülleri genişletip katsayıları Q matrisine topluyoruz.', kk: 'Формулаларды кеңейтіп, коэффициенттерді Q матрицасына жинау.' }
    },
    {
      title: { en: 'Solve', tr: 'Çözüm', kk: 'Шешу' },
      math: <>q<sup>*</sup> = argmin<sub>q</sub> (q<sup>T</sup> Q q)</>,
      app: { en: 'Use QAOA, SA, or exact solvers to find the optimal bitstring.', tr: 'En uygun bit dizisini bulmak için kuantum veya klasik çözücüler kullanıyoruz.', kk: 'Оңтайлы бит жолын табу үшін QAOA немесе QA пайдалану.' }
    },
    {
      title: { en: 'Decode', tr: 'Kod Çözme', kk: 'Декодтау' },
      math: <>q<sup>*</sup> &rArr; u<sup>*</sup> &rArr; x<sup>*</sup></>,
      app: { en: 'Convert optimal bits back to integers and real values.', tr: 'Optimum bitleri tekrar tam sayılara ve gerçek değerlere dönüştürüyoruz.', kk: 'Оңтайлы биттерді бүтін сандар мен нақты мәндерге қайтару.' }
    },
    {
      title: { en: 'Validate', tr: 'Orijinal Uzayda Doğrulama', kk: 'Түпнұсқа кеңістікте тексеру' },
      math: <>f(x<sup>*</sup>) and g(x<sup>*</sup>) &le; B</>,
      app: { en: 'Verify constraints and cost in original problem space.', tr: 'Orijinal problem uzayında kısıtları ve maliyeti doğruluyoruz.', kk: 'Түпнұсқа мәселе кеңістігінде шектеулер мен шығындарды тексеру.' }
    }
  ];

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
        {lang === 'en' ? 'Step-by-Step Pipeline Walkthrough' : 
         lang === 'tr' ? 'Adım Adım İş Akışı Ayrıntıları' : 
         'Қадамдық жұмыс процесі'}
      </h2>
      
      <div style={{ display: 'flex', gap: '2rem', flex: 1, overflow: 'hidden' }}>
        
        {/* Left Side: Steps List */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', overflowY: 'auto', paddingRight: '1rem' }}>
          {stepDetails.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: activeStep === idx ? 'var(--accent-cyan)' : 'var(--bg-secondary)',
                color: activeStep === idx ? 'black' : 'white',
                border: `1px solid ${activeStep === idx ? 'var(--accent-cyan)' : 'var(--border-color)'}`,
                borderRadius: '8px',
                textAlign: 'left',
                transition: 'all 0.2s',
                fontWeight: activeStep === idx ? 'bold' : 'normal'
              }}
            >
              <div style={{ 
                background: activeStep === idx ? 'black' : 'rgba(255,255,255,0.1)', 
                color: activeStep === idx ? 'var(--accent-cyan)' : 'white',
                width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0
              }}>
                {idx + 1}
              </div>
              <div style={{ fontSize: '1rem' }}>
                {lang === 'en' ? step.title.en : lang === 'tr' ? step.title.tr : step.title.kk}
              </div>
            </button>
          ))}
        </div>

        {/* Right Side: Step Details */}
        <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem', textAlign: 'center', border: '2px solid var(--accent-cyan)' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-cyan)', marginBottom: '2rem' }}>
              {(() => {
                const s = stepDetails[activeStep];
                return `${activeStep + 1}. ${lang === 'en' ? s.title.en : lang === 'tr' ? s.title.tr : s.title.kk}`;
              })()}
            </h3>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', width: '100%', marginBottom: '2rem' }}>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {lang === 'en' ? 'Mathematics' : lang === 'tr' ? 'Matematik' : 'Математика'}
              </div>
              <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-mono)', color: 'white' }}>
                {stepDetails[activeStep].math}
              </div>
            </div>

            <div style={{ background: 'rgba(142,36,170,0.1)', border: '1px solid var(--accent-violet)', padding: '2rem', borderRadius: '12px', width: '100%' }}>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {lang === 'en' ? 'Application' : lang === 'tr' ? 'Uygulama' : 'Қолданба'}
              </div>
              <div style={{ fontSize: '1.2rem', color: 'white' }}>
                {lang === 'en' ? stepDetails[activeStep].app.en : 
                 lang === 'tr' ? stepDetails[activeStep].app.tr : 
                 stepDetails[activeStep].app.kk}
              </div>
            </div>
            
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <button 
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                style={{ background: 'var(--bg-secondary)', color: 'white', padding: '0.8rem 2rem', borderRadius: '8px', opacity: activeStep === 0 ? 0.5 : 1 }}
              >
                {lang === 'en' ? 'Previous' : lang === 'tr' ? 'Önceki' : 'Алдыңғы'}
              </button>
              <button 
                onClick={() => setActiveStep(prev => Math.min(stepDetails.length - 1, prev + 1))}
                disabled={activeStep === stepDetails.length - 1}
                style={{ background: 'var(--accent-cyan)', color: 'black', padding: '0.8rem 2rem', borderRadius: '8px', fontWeight: 'bold', opacity: activeStep === stepDetails.length - 1 ? 0.5 : 1 }}
              >
                {lang === 'en' ? 'Next Step' : lang === 'tr' ? 'Sonraki Adım' : 'Келесі қадам'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
