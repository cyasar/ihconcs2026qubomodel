import React, { useState } from 'react';
import type { SlideProps } from '../content/types';

export const Slide09_CaseStudy: React.FC<SlideProps> = ({ lang }) => {
  const [x1, setX1] = useState(30);
  const [x2, setX2] = useState(20);

  // Generic dummy calculation for illustration (since exact paper formula isn't fully supplied, we mock the visual)
  const revenue = (x1 * 80) + (x2 * 60);
  const cost = (x1 * x1 * 0.5) + (x2 * x2 * 0.4) + (x1 * x2 * 0.2);
  const profit = revenue - cost;
  
  // Resources mock
  const res1 = (x1 * 2) + (x2 * 1);
  const res2 = (x1 * 1) + (x2 * 3);
  
  return (
    <div className="slide-content">
      <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem' }}>
        {lang === 'en' ? 'A Production Planning Problem' : 'Bir Üretim Planlama Problemi'}
      </h2>
      
      <div className="grid-2-col">
        
        {/* Left: Interactive Controls */}
        <div className="card" style={{ textAlign: 'left' }}>
          <h4 style={{ color: 'var(--accent-cyan)' }}>{lang === 'en' ? 'Production Variables' : 'Üretim Değişkenleri'}</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            {lang === 'en' ? 'Adjust production levels to see nonlinear effects.' : 'Doğrusal olmayan etkileri görmek için üretim seviyelerini ayarlayın.'}
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              <span>Product 1 (x₁)</span> <span>{x1} units</span>
            </label>
            <input type="range" min="0" max="40" step="10" value={x1} onChange={e => setX1(parseInt(e.target.value))} style={{ width: '100%', accentColor: 'var(--accent-cyan)' }} />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              <span>Product 2 (x₂)</span> <span>{x2} units</span>
            </label>
            <input type="range" min="0" max="40" step="10" value={x2} onChange={e => setX2(parseInt(e.target.value))} style={{ width: '100%', accentColor: 'var(--accent-violet)' }} />
          </div>
        </div>

        {/* Right: Dynamic Outputs */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Revenue (+)' : 'Gelir (+)'}</span>
            <span style={{ color: '#4caf50', fontWeight: 'bold' }}>{revenue.toFixed(1)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Nonlinear Cost (-)' : 'Doğrusal Olmayan Maliyet (-)'}</span>
            <span style={{ color: '#f44336', fontWeight: 'bold' }}>{cost.toFixed(1)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', fontSize: '1.5rem' }}>
            <span style={{ color: 'white', fontWeight: 'bold' }}>{lang === 'en' ? 'Profit' : 'Kâr'}</span>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>{profit.toFixed(1)}</span>
          </div>

          <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{lang === 'en' ? 'Resource Usage' : 'Kaynak Kullanımı'}</div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.3rem' }}>
              <span style={{ width: '60px', fontSize: '0.8rem' }}>Res 1</span>
              <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, (res1/100)*100)}%`, height: '100%', background: res1 > 80 ? '#f44336' : '#4caf50' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ width: '60px', fontSize: '0.8rem' }}>Res 2</span>
              <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, (res2/100)*100)}%`, height: '100%', background: res2 > 90 ? '#f44336' : '#4caf50' }}></div>
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
      {lang === 'en' ? 'Why Is the Problem Nonlinear?' : 'Problem Neden Doğrusal Değildir?'}
    </h2>
    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Revenue increases with production. But cost also increases nonlinearly.' : 'Gelir üretimle birlikte artar. Ancak maliyetler de doğrusal olmayan bir şekilde artar.'}
    </p>

    <div className="grid-2-col" style={{ alignItems: 'start' }}>
      <div style={{ textAlign: 'left' }}>
        <h4 style={{ color: 'var(--accent-violet)' }}>{lang === 'en' ? 'Possible reasons for nonlinearity:' : 'Doğrusal olmamanın olası nedenleri:'}</h4>
        <ul style={{ fontSize: '1.1rem', lineHeight: '2', color: 'var(--text-primary)', background: 'rgba(142,36,170,0.05)', padding: '2rem 3rem', borderRadius: '12px', border: '1px solid rgba(142,36,170,0.2)' }}>
          <li>{lang === 'en' ? 'overtime labour' : 'fazla mesai maliyetleri'}</li>
          <li>{lang === 'en' ? 'machine wear' : 'makine yıpranması'}</li>
          <li>{lang === 'en' ? 'storage limitations' : 'depolama sınırları'}</li>
          <li>{lang === 'en' ? 'coordination cost' : 'koordinasyon maliyeti'}</li>
          <li>{lang === 'en' ? 'production interference' : 'üretim çakışmaları'}</li>
        </ul>
      </div>

      <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        <div style={{ width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)', borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
          {/* Conceptual Profit Surface using simple CSS gradients */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(76, 175, 80, 0.4) 0%, rgba(244, 67, 54, 0.3) 100%)', opacity: 0.8 }}></div>
          
          {/* Grid lines */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'perspective(500px) rotateX(60deg) scale(2)', transformOrigin: 'top' }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, padding: '1rem', background: 'rgba(0,0,0,0.8)', border: '1px solid var(--accent-cyan)', borderRadius: '8px', color: 'white', fontWeight: 'bold' }}>
            {lang === 'en' ? 'Conceptual Profit Surface' : 'Kavramsal Kâr Yüzeyi'}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Slide11_FeasibleRegion: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Constraints Define What Is Possible' : 'Kısıtlar Nelerin Mümkün Olduğunu Belirler'}
    </h2>

    <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      
      {/* Constraints List */}
      <div style={{ flex: 1, textAlign: 'left', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px' }}>
        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>{lang === 'en' ? 'Boundaries:' : 'Sınırlar:'}</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '20px', height: '4px', background: '#e91e63' }}></div>
            <span>{lang === 'en' ? 'Resource constraint 1' : 'Kaynak kısıtı 1'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '20px', height: '4px', background: '#ff9800' }}></div>
            <span>{lang === 'en' ? 'Resource constraint 2' : 'Kaynak kısıtı 2'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '20px', height: '4px', background: '#00bcd4' }}></div>
            <span>{lang === 'en' ? 'Total production capacity' : 'Toplam üretim kapasitesi'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '20px', height: '4px', background: '#fff' }}></div>
            <span>{lang === 'en' ? 'Upper bounds' : 'Üst sınırlar'}</span>
          </div>
        </div>
      </div>

      {/* Conceptual Chart */}
      <div style={{ flex: 1.5, position: 'relative', height: '400px', width: '100%', borderLeft: '2px solid white', borderBottom: '2px solid white' }}>
        <div style={{ position: 'absolute', bottom: '-30px', left: '50%', transform: 'translateX(-50%)' }}>x₁</div>
        <div style={{ position: 'absolute', left: '-30px', top: '50%', transform: 'translateY(-50%)' }}>x₂</div>
        
        {/* Polygon for feasible region */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
          {/* Feasible Region shaded area */}
          <polygon points="0,100 0,40 40,20 80,80 80,100" fill="rgba(76, 175, 80, 0.3)" />
          
          {/* Lines */}
          <line x1="0" y1="40" x2="60" y2="0" stroke="#e91e63" strokeWidth="1" />
          <line x1="10" y1="0" x2="80" y2="80" stroke="#ff9800" strokeWidth="1" />
          <line x1="80" y1="100" x2="80" y2="0" stroke="#00bcd4" strokeWidth="1" />
          
          {/* Infeasible point */}
          <circle cx="70" cy="30" r="2" fill="#f44336" />
          <text x="73" y="32" fill="#f44336" fontSize="4">Infeasible</text>
          
          {/* Feasible optimum point */}
          <circle cx="40" cy="20" r="2" fill="#4caf50" />
          <text x="43" y="18" fill="#4caf50" fontSize="4">Optimum</text>
        </svg>

        <div style={{ position: 'absolute', top: '50%', left: '30%', color: 'white', fontWeight: 'bold', fontSize: '1.2rem', textShadow: '0 0 10px black' }}>
          {lang === 'en' ? 'FEASIBLE REGION' : 'OLURLU BÖLGE'}
        </div>
      </div>
    </div>
  </div>
);

export const Slide12_Pipeline: React.FC<SlideProps> = ({ lang }) => {
  const steps = [
    { en: '1. Variable scaling', tr: '1. Değişken ölçeklendirme' },
    { en: '2. Discretisation', tr: '2. Ayrıklaştırma' },
    { en: '3. Binary encoding', tr: '3. İkili (Binary) kodlama' },
    { en: '4. Slack-variable introduction', tr: '4. Gevşek değişken ekleme' },
    { en: '5. Penalty-based constraint embedding', tr: '5. Ceza tabanlı kısıt gömme' },
    { en: '6. QUBO matrix construction', tr: '6. QUBO matrisi oluşturma' },
    { en: '7. Solve', tr: '7. Çözüm' },
    { en: '8. Decode', tr: '8. Kod Çözme' },
    { en: '9. Validate in original problem space', tr: '9. Orijinal problem uzayında doğrulama' }
  ];

  return (
    <div className="slide-content">
      <h2 style={{ fontSize: '2.8rem', color: 'var(--accent-cyan)', marginBottom: '3rem' }}>
        {lang === 'en' ? 'From Nonlinear Optimization to QUBO' : 'Doğrusal Olmayan Optimizasyondan QUBO\'ya'}
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
              {lang === 'en' ? step.en : step.tr}
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
        {lang === 'en' ? 'Continuous Variables Must Become Bits' : 'Sürekli Değişkenler Bitlere Dönüşmeli'}
      </h2>
      
      <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>x₁</div>
        <div style={{ color: 'var(--text-secondary)' }}>→</div>
        <div style={{ fontSize: '1.5rem', color: 'var(--accent-violet)', background: 'rgba(142,36,170,0.1)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
          {lang === 'en' ? 'scaled variable u₁' : 'ölçeklenmiş değişken u₁'}
        </div>
        <div style={{ color: 'var(--text-secondary)' }}>→</div>
        <div style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', background: 'rgba(0,188,212,0.1)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
          {lang === 'en' ? 'binary representation' : 'ikili gösterim'}
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
          <div>{lang === 'en' ? 'Binary:' : 'İkili:'} <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{bits[3]}{bits[2]}{bits[1]}{bits[0]}</span></div>
          <div>{lang === 'en' ? 'Decimal (u₁):' : 'Ondalık (u₁):'} <span style={{ fontWeight: 'bold' }}>{decimal}</span></div>
          <div style={{ color: 'var(--accent-violet)' }}>{lang === 'en' ? 'Scaled production (x₁ = 10u₁):' : 'Ölçeklenmiş üretim (x₁ = 10u₁):'} <span style={{ fontWeight: 'bold' }}>{scaledX}</span></div>
        </div>
      </div>

      <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px' }}>
        {lang === 'en' 
          ? 'A quantum-oriented optimiser manipulates binary decision representations rather than the original continuous variable directly.' 
          : 'Kuantum-odaklı bir algoritma, doğrudan orijinal sürekli değişkeni değil, ikili karar gösterimlerini (bitleri) manipüle eder.'}
      </p>
    </div>
  );
};

export const Slide14_SlackVariables: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '2rem' }}>
      {lang === 'en' ? 'How Do Inequalities Enter QUBO?' : 'Eşitsizlikler QUBO\'ya Nasıl Girer?'}
    </h2>
    
    <div className="grid-2-col" style={{ alignItems: 'center' }}>
      <div style={{ textAlign: 'left', fontSize: '1.5rem', fontFamily: 'var(--font-mono)', background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '12px' }}>
        <div style={{ color: '#f44336', marginBottom: '1rem' }}>a₁x₁ + a₂x₂ ≤ B</div>
        <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1rem' }}>↓</div>
        <div style={{ color: '#4caf50', marginBottom: '1rem' }}>a₁x₁ + a₂x₂ <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>+ s</span> = B</div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{lang === 'en' ? 'where' : 'öyle ki'} <span style={{ color: 'var(--accent-cyan)' }}>s ≥ 0</span></div>
      </div>
      
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
        <p style={{ fontSize: '1.2rem' }}>
          {lang === 'en' ? 'Slack represents unused resource.' : 'Gevşek değişken (slack), kullanılmayan kaynağı temsil eder.'}
        </p>
        
        {/* Resource Tank Metaphor */}
        <div style={{ width: '100%', maxWidth: '300px', height: '200px', border: '4px solid var(--border-color)', borderRadius: '8px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '10%', width: '100%', textAlign: 'center', color: 'white', fontWeight: 'bold', zIndex: 2 }}>
            Slack (s) = 25<br/><span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>({lang === 'en' ? 'Unused' : 'Kullanılmayan'})</span>
          </div>
          <div style={{ position: 'absolute', bottom: '20%', width: '100%', textAlign: 'center', color: 'white', fontWeight: 'bold', zIndex: 2 }}>
            {lang === 'en' ? 'Used Resource' : 'Kullanılan Kaynak'} = 75
          </div>
          
          <div style={{ height: '25%', background: 'rgba(0,188,212,0.3)', width: '100%' }}></div>
          <div style={{ height: '75%', background: '#4caf50', width: '100%' }}></div>
        </div>
        
        <div style={{ color: 'var(--text-secondary)' }}>
          {lang === 'en' ? 'Available resource (B) = 100' : 'Mevcut kaynak (B) = 100'}
        </div>
      </div>
    </div>
    
    <div style={{ marginTop: '3rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>
      slack variable → binary encoded slack
    </div>
  </div>
);
