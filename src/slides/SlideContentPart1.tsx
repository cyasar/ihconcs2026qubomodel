import React from 'react';
import type { SlideProps } from '../content/types';

export const Slide02_Hook: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', justifyContent: 'center' }}>
    <h2 style={{ fontSize: '3rem', color: 'var(--accent-cyan)' }}>
      {lang === 'en' ? 'What if a quantum optimizer cannot understand your problem?' : 
       lang === 'tr' ? 'Kuantum optimizasyon algoritması probleminizi anlayamıyorsa ne olur?' : 
       'Кванттық оңтайландыру алгоритмі сіздің мәселеңізді түсінбесе не болады?'}
    </h2>
    
    <div className="grid-2-col" style={{ alignItems: 'stretch' }}>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', background: 'rgba(255, 61, 0, 0.05)', borderLeft: '4px solid #ff3d00' }}>
        <h4 style={{ color: '#ff3d00', marginBottom: '1.5rem' }}>
          {lang === 'en' ? 'Familiar Optimization' : lang === 'tr' ? 'Bildik Optimizasyon' : 'Үйреншікті оңтайландыру'}
        </h4>
        <div style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
          <strong>{lang === 'en' ? 'Maximize profit' : lang === 'tr' ? 'Kârı maksimize et' : 'Пайданы барынша арттыру'}</strong><br/>
          <span style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'subject to:' : lang === 'tr' ? 'kısıtlar:' : 'шектеулер:'}</span>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li>{lang === 'en' ? 'labour constraints' : lang === 'tr' ? 'işgücü kısıtları' : 'жұмыс күшінің шектеулері'}</li>
            <li>{lang === 'en' ? 'raw material constraints' : lang === 'tr' ? 'hammadde kısıtları' : 'шикізат шектеулері'}</li>
            <li>{lang === 'en' ? 'production capacity' : lang === 'tr' ? 'üretim kapasitesi' : 'өндірістік қуаттылық'}</li>
            <li>{lang === 'en' ? 'nonlinear production costs' : lang === 'tr' ? 'doğrusal olmayan üretim maliyetleri' : 'сызықтық емес өндіріс шығындары'}</li>
          </ul>
        </div>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(142, 36, 170, 0.05)', borderRight: '4px solid var(--accent-violet)' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          {lang === 'en' ? 'Quantum-oriented optimization methods generally require another representation.' : 
           lang === 'tr' ? 'Kuantum-odaklı optimizasyon yöntemleri genellikle farklı bir gösterime ihtiyaç duyar.' : 
           'Кванттық оңтайландыру әдістері әдетте басқаша көріністі талап етеді.'}
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
      {lang === 'en' ? 'Nonlinear Constrained Optimization Is Everywhere' : 
       lang === 'tr' ? 'Doğrusal Olmayan Kısıtlı Optimizasyon Her Yerde' : 
       'Сызықтық емес шектеулі оңтайландыру барлық жерде кездеседі'}
    </h2>
    
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Domains */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', flex: 1 }}>
        {['Engineering design', 'Production planning', 'Logistics', 'Finance', 'Machine learning', 'Resource allocation'].map((item, i) => {
          const trans = {
            'Engineering design': { tr: 'Mühendislik tasarımı', kk: 'Инженерлік дизайн' },
            'Production planning': { tr: 'Üretim planlama', kk: 'Өндірісті жоспарлау' },
            'Logistics': { tr: 'Lojistik', kk: 'Логистика' },
            'Finance': { tr: 'Finans', kk: 'Қаржы' },
            'Machine learning': { tr: 'Makine öğrenmesi', kk: 'Машиналық оқыту' },
            'Resource allocation': { tr: 'Kaynak tahsisi', kk: 'Ресурстарды бөлу' }
          } as Record<string, { tr: string, kk: string }>;
          const translated = lang === 'en' ? item : lang === 'tr' ? trans[item].tr : trans[item].kk;
          return (
            <div key={i} style={{ background: 'rgba(0,188,212,0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--accent-cyan)', fontSize: '1.1rem' }}>
              {translated}
            </div>
          );
        })}
      </div>

      {/* Math Model */}
      <div style={{ flex: 1, padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-15px', right: '20px', background: 'var(--accent-cyan)', color: 'black', padding: '0.2rem 1rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.8rem' }}>
          {lang === 'en' ? 'Common Mathematical Model' : lang === 'tr' ? 'Ortak Matematiksel Model' : 'Жалпы математикалық модель'}
        </div>
        
        <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-mono)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <span style={{ color: 'var(--accent-violet)' }}>max/min</span> <span style={{ color: 'white' }}>f(x)</span>
          </div>
          <div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{lang === 'en' ? 'subject to:' : lang === 'tr' ? 'kısıtlar:' : 'шектеулер:'}</span><br/>
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
      {lang === 'en' ? 'What is the research problem?' : 
       lang === 'tr' ? 'Araştırma problemi nedir?' : 
       'Зерттеу мәселесі қандай?'}
    </h2>
    
    <div style={{ maxWidth: '900px', margin: '1rem auto', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '4px solid var(--accent-cyan)', textAlign: 'left', fontSize: '1.1rem', lineHeight: '1.5' }}>
      <p style={{ margin: 0 }}>
        {lang === 'en' 
          ? 'Nonlinear constrained optimisation problems contain continuous decision variables, nonlinear objective terms and constraints, while many quantum-oriented optimisation frameworks require unconstrained binary quadratic representations.' 
          : lang === 'tr' 
          ? 'Doğrusal olmayan kısıtlı optimizasyon problemleri sürekli karar değişkenleri, doğrusal olmayan amaç terimleri ve kısıtlar içerirken, birçok kuantum-odaklı optimizasyon çerçevesi kısıtsız ikili (binary) karesel gösterimler gerektirir.' 
          : 'Сызықтық емес шектеулі оңтайландыру мәселелерінде үздіксіз шешім айнымалылары, сызықтық емес мақсаттық терминдер және шектеулер болады, ал көптеген кванттық оңтайландыру жүйелері шектеусіз екілік квадраттық (binary quadratic) көріністерді қажет етеді.'}
      </p>
      <p style={{ marginTop: '1rem', color: '#ff9800', fontWeight: 'bold' }}>
        {lang === 'en' ? 'Transforming one representation into the other is not straightforward.' : 
         lang === 'tr' ? 'Bir gösterimi diğerine dönüştürmek basit bir işlem değildir.' : 
         'Бір көріністі екіншісіне айналдыру оңай процесс емес.'}
      </p>
    </div>

    {/* Vertical Flow */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
      <div style={{ padding: '0.8rem 2rem', background: '#37474f', borderRadius: '8px', border: '1px solid #546e7a', width: '400px', fontWeight: 'bold', fontSize: '1.1rem' }}>
        {lang === 'en' ? 'NONLINEAR CONSTRAINED MODEL' : lang === 'tr' ? 'DOĞRUSAL OLMAYAN KISITLI MODEL' : 'СЫЗЫҚТЫҚ ЕМЕС ШЕКТЕУЛІ МОДЕЛЬ'}
      </div>
      <div style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>↓</div>
      <div style={{ 
        width: '50px', height: '50px', borderRadius: '50%', background: '#ff3d00', color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold',
        boxShadow: '0 0 20px rgba(255, 61, 0, 0.5)'
      }}>
        ?
      </div>
      <div style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>↓</div>
      <div style={{ padding: '0.8rem 2rem', background: 'rgba(142, 36, 170, 0.2)', borderRadius: '8px', border: '1px solid var(--accent-violet)', width: '400px', fontWeight: 'bold', fontSize: '1.1rem', color: '#e1bee7' }}>
        QUBO
      </div>
      <div style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>↓</div>
      <div style={{ padding: '0.8rem 2rem', background: 'rgba(0, 188, 212, 0.2)', borderRadius: '8px', border: '1px solid var(--accent-cyan)', width: '400px', fontWeight: 'bold', fontSize: '1.1rem', color: '#b2ebf2' }}>
        {lang === 'en' ? 'QUANTUM-ORIENTED SOLVER' : lang === 'tr' ? 'KUANTUM-ODAKLI ÇÖZÜCÜ' : 'КВАНТТЫҚ ШЕШІМ ҚАБЫЛДАУШЫ'}
      </div>
    </div>
  </div>
);

export const Slide05_WhyQubo: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
      {lang === 'en' ? 'Why Is Reformulation Necessary?' : 
       lang === 'tr' ? 'Yeniden Formülasyon Neden Gereklidir?' : 
       'Неліктен қайта тұжырымдау қажет?'}
    </h2>
    
    <div style={{ display: 'flex', gap: '1rem', width: '100%', alignItems: 'stretch', justifyContent: 'center' }}>
      
      {/* Real Problem */}
      <div style={{ flex: 1, padding: '1.5rem', background: 'rgba(255, 61, 0, 0.05)', border: '1px solid rgba(255, 61, 0, 0.2)', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ color: '#ff3d00', fontSize: '1.4rem', textAlign: 'center', marginBottom: '1rem' }}>
          {lang === 'en' ? 'REAL PROBLEM' : lang === 'tr' ? 'GERÇEK PROBLEM' : 'НАҚТЫ МӘСЕЛЕ'}
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', lineHeight: '2', textAlign: 'center', color: '#e0e0e0', flex: 1 }}>
          <li>{lang === 'en' ? 'Continuous' : lang === 'tr' ? 'Sürekli (Continuous)' : 'Үздіксіз (Continuous)'}</li>
          <li>{lang === 'en' ? 'Constrained' : lang === 'tr' ? 'Kısıtlı (Constrained)' : 'Шектеулі (Constrained)'}</li>
          <li>{lang === 'en' ? 'Nonlinear' : lang === 'tr' ? 'Doğrusal Olmayan (Nonlinear)' : 'Сызықтық емес (Nonlinear)'}</li>
        </ul>
        <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.5)', borderRadius: '8px', fontSize: '1.1rem', fontFamily: 'monospace', textAlign: 'center', color: '#ff9800', lineHeight: '1.5' }}>
          min f(x) = x₁³ - x₁x₂²<br/>
          <span style={{ color: 'var(--text-secondary)' }}>s.t.</span> x₁ + x₂ ≤ 10<br/>
          x₁, x₂ ∈ ℝ
        </div>
      </div>

      {/* Reformulation Bridge */}
      <div style={{ flex: 0.5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <div style={{ height: '3px', width: '100%', background: 'linear-gradient(90deg, transparent, var(--text-secondary), transparent)' }}></div>
        <div style={{ padding: '1rem', background: 'var(--text-secondary)', color: 'var(--bg-color)', fontWeight: 'bold', borderRadius: '30px', letterSpacing: '2px', fontSize: '1.1rem', boxShadow: '0 0 20px rgba(255,255,255,0.2)', textAlign: 'center' }}>
          {lang === 'en' ? 'REFORMULATION' : lang === 'tr' ? 'YENİDEN FORMÜLASYON' : 'ҚАЙТА ТҰЖЫРЫМДАУ'}
        </div>
        <div style={{ height: '3px', width: '100%', background: 'linear-gradient(90deg, transparent, var(--text-secondary), transparent)' }}></div>
      </div>

      {/* QUBO World */}
      <div style={{ flex: 1, padding: '1.5rem', background: 'rgba(142, 36, 170, 0.05)', border: '1px solid rgba(142, 36, 170, 0.3)', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ color: 'var(--accent-violet)', fontSize: '1.4rem', textAlign: 'center', marginBottom: '1rem' }}>
          {lang === 'en' ? 'QUBO WORLD' : lang === 'tr' ? 'QUBO DÜNYASI' : 'QUBO ӘЛЕМІ'}
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', lineHeight: '2', textAlign: 'center', color: '#e0e0e0', flex: 1 }}>
          <li>{lang === 'en' ? 'Binary' : lang === 'tr' ? 'İkili (Binary)' : 'Екілік (Binary)'}</li>
          <li>{lang === 'en' ? 'Unconstrained' : lang === 'tr' ? 'Kısıtsız (Unconstrained)' : 'Шектеусіз (Unconstrained)'}</li>
          <li>{lang === 'en' ? 'Quadratic' : lang === 'tr' ? 'Karesel (Quadratic)' : 'Квадраттық (Quadratic)'}</li>
        </ul>
        <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.5)', borderRadius: '8px', fontSize: '1.1rem', fontFamily: 'monospace', textAlign: 'center', color: '#e1bee7', lineHeight: '1.5' }}>
          min y = 3q₁ + 2q₂ - 5q₁q₂<br/>
          <span style={{ color: 'var(--text-secondary)' }}>(No constraints)</span><br/>
          q₁, q₂ ∈ &#123;0, 1&#125;
        </div>
      </div>
      
    </div>
  </div>
);

export const Slide05b_QuboAdvantages: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Classical vs QUBO & Advantages' : 
       lang === 'tr' ? 'Klasik vs QUBO ve QUBO\'nun Avantajları' : 
       'Классикалық және QUBO және оның артықшылықтары'}
    </h2>
    
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1, alignItems: 'stretch' }}>
      {/* TEXT SIDE */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
        
        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderLeft: '4px solid #9e9e9e', borderRadius: '0 12px 12px 0' }}>
          <h3 style={{ color: '#9e9e9e', marginTop: 0, fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🚶</span> {lang === 'en' ? 'Classical Optimisation' : lang === 'tr' ? 'Klasik Optimizasyon' : 'Классикалық оңтайландыру'}
          </h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.6', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            <li>{lang === 'en' ? 'Uses gradients (derivatives) to walk downhill.' : lang === 'tr' ? 'Aşağı inmek için gradyanları (türevleri) kullanır.' : 'Градиенттер мен туындыларды пайдаланады.'}</li>
            <li>{lang === 'en' ? 'Prone to getting trapped in Local Minima.' : lang === 'tr' ? 'Yerel minimumlara (Local Minima) hapsolmaya eğilimlidir.' : 'Жергілікті оңтайлы нүктелерде қалып қоюы мүмкін.'}</li>
          </ul>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(142,36,170,0.05)', borderLeft: '4px solid var(--accent-violet)', borderRadius: '0 12px 12px 0', boxShadow: '0 10px 30px rgba(142,36,170,0.1)' }}>
          <h3 style={{ color: 'var(--accent-violet)', marginTop: 0, fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🚀</span> {lang === 'en' ? 'QUBO Model (Quantum Advantage)' : lang === 'tr' ? 'QUBO Modeli (Kuantum Avantajı)' : 'QUBO моделі'}
          </h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.6', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
            <li>{lang === 'en' ? 'Maps directly to Quantum Hardware (Ising Model).' : lang === 'tr' ? 'Kuantum donanımlarına (Ising Modeli) doğrudan eşlenir.' : 'Кванттық жабдық үшін Ising моделіне тікелей бейнеленеді.'}</li>
            <li>{lang === 'en' ? 'Evaluates many states simultaneously.' : lang === 'tr' ? 'Birçok durumu aynı anda değerlendirir.' : 'Көптеген жағдайларды бір уақытта бағалайды.'}</li>
            <li style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>{lang === 'en' ? 'Finds the Global Minimum via Quantum Tunneling.' : lang === 'tr' ? 'Kuantum Tünelleme ile doğrudan Global Minimumu bulur.' : 'Кванттық туннельдеу арқылы жаһандық минималды табады.'}</li>
          </ul>
        </div>

      </div>

      {/* VISUAL SIDE */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)', padding: '2rem', position: 'relative' }}>
        <h4 style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem', textAlign: 'center' }}>
          {lang === 'en' ? 'Local vs Global Minimum Visualization' : lang === 'tr' ? 'Yerel ve Global Minimum Görselleştirmesi' : 'Көрнекілік'}
        </h4>
        
        <svg viewBox="0 0 400 200" style={{ width: '100%', maxWidth: '350px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }}>
          {/* Energy Landscape Curve */}
          <path d="M 20 50 Q 80 180 150 120 T 260 60 T 380 160" fill="none" stroke="#546e7a" strokeWidth="4" strokeLinecap="round" />
          
          {/* Labels for Minima */}
          <text x="110" y="150" fill="#9e9e9e" fontSize="12" fontWeight="bold">{lang === 'en' ? 'Local Min' : 'Yerel Min'}</text>
          <text x="360" y="190" fill="var(--accent-cyan)" fontSize="14" fontWeight="bold" textAnchor="middle">{lang === 'en' ? 'Global Min' : 'Global Min'}</text>

          {/* Classical Path (Stuck in Local Min) */}
          <circle cx="100" cy="126" r="8" fill="#ff9800" />
          <path d="M 40 75 Q 70 126 100 126" fill="none" stroke="#ff9800" strokeWidth="2" strokeDasharray="4,4" />
          <text x="50" y="60" fill="#ff9800" fontSize="12">{lang === 'en' ? 'Classical' : 'Klasik'}</text>

          {/* QUBO Quantum Tunneling Path */}
          <path d="M 115 130 Q 240 160 375 160" fill="none" stroke="var(--accent-violet)" strokeWidth="3" strokeDasharray="6,4" />
          <circle cx="375" cy="160" r="8" fill="var(--accent-cyan)" />
          
          <rect x="180" y="125" width="100" height="24" rx="12" fill="var(--accent-violet)" opacity="0.8" />
          <text x="230" y="141" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">{lang === 'en' ? 'Quantum Tunneling' : lang === 'tr' ? 'Kuantum Tünelleme' : 'Туннельдеу'}</text>
        </svg>

        <p style={{ marginTop: '2rem', fontSize: '0.95rem', color: 'var(--text-secondary)', textAlign: 'center', fontStyle: 'italic' }}>
          {lang === 'en' ? 'While classical solvers get trapped in local valleys, quantum approaches can tunnel through barriers to find the optimal solution.' : 
           lang === 'tr' ? 'Klasik çözücüler yerel vadilere hapsolurken, kuantum yaklaşımları engellerin içinden tünel açarak optimum çözümü bulabilir.' : 
           'Классикалық шешімдер жергілікті алқаптарда қалып қойғанда, кванттық тәсілдер кедергілерден өтіп, оңтайлы шешімді табады.'}
        </p>
      </div>
    </div>
  </div>
);

export const Slide06_ResearchAim: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '2rem' }}>
      {lang === 'en' ? 'Aim of the Study' : 
       lang === 'tr' ? 'Çalışmanın Amacı' : 
       'Зерттеу мақсаты'}
    </h2>
    
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2.5rem', background: 'rgba(0,188,212,0.05)', borderRadius: '12px', borderLeft: '5px solid var(--accent-cyan)', textAlign: 'center', fontSize: '1.4rem', lineHeight: '1.6', fontStyle: 'italic', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
      "{lang === 'en' 
        ? 'To develop a transparent and reproducible QUBO-based framework for transforming nonlinear constrained optimization problems into binary quadratic models suitable for classical QUBO, quantum-inspired and quantum-oriented solution approaches.' 
        : lang === 'tr' 
        ? 'Doğrusal olmayan kısıtlı optimizasyon problemlerini klasik QUBO, kuantum-ilhamlı ve kuantum-odaklı çözüm yaklaşımlarına uygun ikili karesel (binary quadratic) modellere dönüştürmek için şeffaf ve tekrarlanabilir bir QUBO tabanlı çerçeve geliştirmek.' 
        : 'Сызықтық емес шектеулі оңтайландыру мәселелерін классикалық QUBO, кванттық шабыттандырылған және кванттық бағдарланған шешім тәсілдеріне сәйкес келетін екілік квадраттық модельдерге түрлендіру үшін ашық және қайталанатын QUBO негізіндегі жүйені дамыту.'}"
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '4rem' }}>
      {[
        { id: 1, en: '1. Reformulate', tr: '1. Yeniden Formüle Et', kk: '1. Қайта тұжырымдау', icon: '📐' },
        { id: 2, en: '2. Validate', tr: '2. Doğrula', kk: '2. Тексеру', icon: '✅' },
        { id: 3, en: '3. Connect to quantum', tr: '3. Kuantuma Bağla', kk: '3. Кванттық байланыс', icon: '⚛️' }
      ].map(obj => (
        <div key={obj.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '3.5rem' }}>{obj.icon}</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
            {lang === 'en' ? obj.en : lang === 'tr' ? obj.tr : obj.kk}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Slide07_ResearchGap: React.FC<SlideProps> = ({ lang }) => {
  const [activeArea, setActiveArea] = React.useState<number | null>(null);
  const [viewMode, setViewMode] = React.useState<'typical' | 'ours'>('typical');

  const literatureAreas = [
    {
      icon: '📊', color: '#ff9800',
      title: { en: 'QUBO Formulation', tr: 'QUBO Formülasyonu', kk: 'QUBO формулировкасы' },
      exists: { en: 'Matrix construction techniques studied', tr: 'Matris oluşturma teknikleri incelenmiş', kk: 'Матрица құру әдістері зерттелген' },
      missing: { en: 'No step-by-step workflow from a real nonlinear problem', tr: 'Gerçek bir doğrusal olmayan problemden adım adım iş akışı yok', kk: 'Нақты сызықтық емес мәселеден қадамдық процесс жоқ' },
    },
    {
      icon: '⚛️', color: 'var(--accent-violet)',
      title: { en: 'QAOA / Quantum Annealing', tr: 'QAOA / Kuantum Tavlama', kk: 'QAOA / Кванттық күйдіру' },
      exists: { en: 'Algorithms tested on benchmark QUBOs', tr: 'Algoritmalar referans QUBO problemlerinde test edilmiş', kk: 'Алгоритмдер эталондық QUBO мәселелерінде сыналған' },
      missing: { en: 'Rarely show HOW the QUBO was derived', tr: 'QUBO\'nun NASIL türetildiği nadiren gösteriliyor', kk: 'QUBO ҚАЛАЙ алынғаны сирек көрсетіледі' },
    },
    {
      icon: '🔧', color: 'var(--accent-cyan)',
      title: { en: 'Constraint Encoding', tr: 'Kısıt Kodlama', kk: 'Шектеулерді кодтау' },
      exists: { en: 'Penalty methods & slack variables known', tr: 'Ceza yöntemleri ve gevşek değişkenler biliniyor', kk: 'Жаза әдістері мен бос айнымалылар белгілі' },
      missing: { en: 'Intermediate math steps often skipped', tr: 'Ara matematiksel adımlar genellikle atlanıyor', kk: 'Аралық математикалық қадамдар жиі өткізіледі' },
    },
    {
      icon: '✅', color: '#4caf50',
      title: { en: 'Validation', tr: 'Doğrulama', kk: 'Тексеру' },
      exists: { en: 'QUBO solutions reported', tr: 'QUBO çözümleri raporlanıyor', kk: 'QUBO шешімдері хабарланады' },
      missing: { en: 'Rarely compared back to classical solver on the ORIGINAL problem', tr: 'ORİJİNAL problemdeki klasik çözücü ile nadiren karşılaştırılıyor', kk: 'БАСТАПҚЫ мәселедегі классикалық шешушімен сирек салыстырылады' },
    },
  ];

  const t = (obj: { en: string; tr: string; kk: string }) =>
    lang === 'en' ? obj.en : lang === 'tr' ? obj.tr : obj.kk;

  return (
    <div className="slide-content" style={{ overflow: 'visible', display: 'flex', flexDirection: 'column', padding: '7rem 3rem 4rem 3rem' }}>
      <h2 style={{ fontSize: '2.4rem', marginBottom: '0.5rem' }}>
        {lang === 'en' ? 'What Is Missing in the Literature?' : 
         lang === 'tr' ? 'Literatürde Eksik Olan Nedir?' : 
         'Әдебиетте не жетіспейді?'}
      </h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem' }}>
        {lang === 'en' ? 'Individual pieces exist. But the integrated end-to-end workflow is missing.' : 
         lang === 'tr' ? 'Bireysel parçalar mevcut. Ancak entegre uçtan uca iş akışı eksik.' : 
         'Жеке бөліктер бар. Бірақ интеграцияланған толық жұмыс процесі жетіспейді.'}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', flex: 1 }}>
        
        {/* LEFT: Literature Areas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
            {lang === 'en' ? '📚 Existing Literature' : lang === 'tr' ? '📚 Mevcut Literatür' : '📚 Бар әдебиет'}
          </h4>
          {literatureAreas.map((area, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveArea(activeArea === idx ? null : idx)}
              style={{ 
                padding: '0.8rem 1rem', 
                background: activeArea === idx ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${activeArea === idx ? area.color : 'var(--border-color)'}`,
                borderRadius: '10px', 
                cursor: 'pointer',
                transition: 'all 0.3s',
                transform: activeArea === idx ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: activeArea === idx ? '0.8rem' : 0 }}>
                <span style={{ fontSize: '1.3rem' }}>{area.icon}</span>
                <span style={{ fontWeight: 'bold', fontSize: '1rem', color: 'var(--text-primary)' }}>{t(area.title)}</span>
              </div>
              {activeArea === idx && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginLeft: '2.2rem', animation: 'fadeIn 0.3s ease-out' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: '#4caf50', fontSize: '1.1rem', flexShrink: 0 }}>✓</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t(area.exists)}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: '#f44336', fontSize: '1.1rem', flexShrink: 0 }}>✗</span>
                    <span style={{ color: '#f44336', fontSize: '0.9rem', fontWeight: 'bold' }}>{t(area.missing)}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginTop: '0.3rem', textAlign: 'center' }}>
            {lang === 'en' ? '↑ Click each area to see the gap' : lang === 'tr' ? '↑ Boşluğu görmek için tıklayın' : '↑ Олқылықты көру үшін басыңыз'}
          </div>
        </div>

        {/* RIGHT: Our Concrete Pipeline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>
              {lang === 'en' ? '🔬 This Study\'s Approach' : lang === 'tr' ? '🔬 Bu Çalışmanın Yaklaşımı' : '🔬 Осы зерттеудің тәсілі'}
            </h4>
            <div style={{ display: 'flex', gap: '0.3rem', background: 'rgba(0,0,0,0.3)', padding: '0.2rem', borderRadius: '8px' }}>
              <button 
                onClick={() => setViewMode('typical')}
                style={{ padding: '0.3rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: viewMode === 'typical' ? 'bold' : 'normal', background: viewMode === 'typical' ? '#f44336' : 'transparent', color: viewMode === 'typical' ? 'white' : 'var(--text-secondary)', border: 'none' }}
              >
                {lang === 'en' ? 'Typical Paper' : lang === 'tr' ? 'Tipik Makale' : 'Типтік мақала'}
              </button>
              <button 
                onClick={() => setViewMode('ours')}
                style={{ padding: '0.3rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: viewMode === 'ours' ? 'bold' : 'normal', background: viewMode === 'ours' ? 'var(--accent-cyan)' : 'transparent', color: viewMode === 'ours' ? 'black' : 'var(--text-secondary)', border: 'none' }}
              >
                {lang === 'en' ? 'Our Approach' : lang === 'tr' ? 'Bizim Yaklaşım' : 'Біздің тәсіл'}
              </button>
            </div>
          </div>

          {viewMode === 'typical' ? (
            /* Typical Paper: fragmented view with hidden steps */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
              <div style={{ padding: '1rem', background: '#37474f', borderRadius: '8px', border: '1px solid #546e7a', textAlign: 'center' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{lang === 'en' ? 'Original Problem' : lang === 'tr' ? 'Orijinal Problem' : 'Бастапқы мәселе'}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>max f(x), s.t. g(x) ≤ 0</div>
              </div>
              <div style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>↓</div>
              
              {/* Hidden black box */}
              <div style={{ padding: '1.5rem', background: 'rgba(244,67,54,0.1)', borderRadius: '8px', border: '2px dashed #f44336', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ fontSize: '3rem' }}>🔒</div>
                <div style={{ color: '#f44336', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  {lang === 'en' ? '"Then we construct the QUBO..."' : lang === 'tr' ? '"Sonra QUBO\'yu oluştururuz..."' : '"Содан кейін QUBO құрамыз..."'}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  {lang === 'en' ? 'Scaling? Encoding? Slack? Penalty? — Often skipped!' : 
                   lang === 'tr' ? 'Ölçekleme? Kodlama? Gevşek değişken? Ceza? — Genellikle atlanıyor!' : 
                   'Масштабтау? Кодтау? Бос айнымалы? Жаза? — Жиі өткізіледі!'}
                </div>
              </div>

              <div style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>↓</div>
              <div style={{ padding: '1rem', background: 'rgba(142,36,170,0.15)', borderRadius: '8px', border: '1px solid var(--accent-violet)', textAlign: 'center' }}>
                <div style={{ fontWeight: 'bold', color: '#e1bee7' }}>QUBO Result</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {lang === 'en' ? '"We solved it" — but how?' : lang === 'tr' ? '"Çözdük" — ama nasıl?' : '"Шештік" — бірақ қалай?'}
                </div>
              </div>
            </div>
          ) : (
            /* Our Approach: full transparent pipeline with real numbers */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', flex: 1, overflowY: 'auto' }}>
              {[
                { step: { en: '1. Problem', tr: '1. Problem', kk: '1. Мәселе' }, 
                  detail: 'max 80x₁+60x₂−x₁²−0.5x₂²', color: '#37474f', border: '#546e7a' },
                { step: { en: '2. Scale', tr: '2. Ölçekle', kk: '2. Масштабта' }, 
                  detail: 'x₁=10u₁ → u₁∈{0,...,7}', color: 'rgba(255,152,0,0.1)', border: '#ff9800' },
                { step: { en: '3. Binary', tr: '3. İkili Kodla', kk: '3. Екілік' }, 
                  detail: 'u₁=q₀+2q₁+4q₂ → 3→011', color: 'rgba(0,188,212,0.1)', border: 'var(--accent-cyan)' },
                { step: { en: '4. Slack', tr: '4. Gevşek Değ.', kk: '4. Бос айн.' }, 
                  detail: '2x₁+x₂+s=80, s→bits', color: 'rgba(233,30,99,0.1)', border: '#e91e63' },
                { step: { en: '5. Penalty', tr: '5. Ceza', kk: '5. Жаза' }, 
                  detail: 'QUBO=f(q)−1000·(violation)²', color: 'rgba(244,67,54,0.1)', border: '#f44336' },
                { step: { en: '6. Build Q', tr: '6. Q Matrisi', kk: '6. Q Құру' }, 
                  detail: 'min qᵀQq (13×13 matrix)', color: 'rgba(142,36,170,0.1)', border: 'var(--accent-violet)' },
                { step: { en: '7. Solve→Decode', tr: '7. Çöz→Çöz', kk: '7. Шеш→Декод' }, 
                  detail: '011 010→x₁=30,x₂=20', color: 'rgba(0,188,212,0.1)', border: 'var(--accent-cyan)' },
                { step: { en: '8. Validate ✓', tr: '8. Doğrula ✓', kk: '8. Тексер ✓' }, 
                  detail: 'Profit=2170=SLSQP ✓', color: 'rgba(76,175,80,0.15)', border: '#4caf50' },
              ].map((item, idx) => (
                <React.Fragment key={idx}>
                  <div style={{ 
                    padding: '0.5rem 0.8rem', background: item.color, borderRadius: '6px', 
                    borderLeft: `3px solid ${item.border}`, display: 'flex', justifyContent: 'space-between', 
                    alignItems: 'center', transition: 'all 0.3s' 
                  }}>
                    <span style={{ fontWeight: 'bold', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                      {t(item.step)}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      {item.detail}
                    </span>
                  </div>
                  {idx < 7 && <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1' }}>↓</div>}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Slide08_NovelContributions: React.FC<SlideProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = React.useState<number | null>(null);

  const concreteExamples = [
    {
      titleEn: '1. Transparent Workflow Example', titleTr: '1. Şeffaf İş Akışı Örneği', titleKk: '1. Ашық жұмыс процесінің мысалы',
      descEn: 'From mathematical formulation to QUBO matrix: We explicitly show how a constraint like x₁ + x₂ ≤ 5 is mathematically squared, scaled by penalty λ, and embedded into the Q matrix without hiding intermediate steps.',
      descTr: 'Matematiksel formülasyondan QUBO matrisine: x₁ + x₂ ≤ 5 gibi bir kısıtın matematiksel olarak nasıl karesinin alındığını, ceza çarpanı (λ) ile nasıl ölçeklendiğini ve ara adımları gizlemeden Q matrisine nasıl gömüldüğünü somut olarak gösteriyoruz.',
      descKk: 'Математикалық формадан QUBO матрицасына: x₁ + x₂ ≤ 5 шектеуінің қалай квадратталатынын, λ жазалау көбейткішімен қалай масштабталатынын және Q матрицасына қалай енгізілетінін нақты көрсетеміз.'
    },
    {
      titleEn: '2. Validation Example', titleTr: '2. Doğrulama (Validation) Örneği', titleKk: '2. Тексеру мысалы',
      descEn: 'Classical vs QUBO: We first solve the problem using a classical optimizer (like SLSQP) which yields [x₁=2, x₂=3] at cost -15. Then we solve the derived QUBO matrix and prove that decoding the optimal bitstring matches exactly cost -15.',
      descTr: 'Klasik ve QUBO Karşılaştırması: Problemi önce klasik bir çözücü (SLSQP) ile çözüp [x₁=2, x₂=3] ve maliyet=-15 sonucunu buluyoruz. Ardından ürettiğimiz QUBO matrisini çözüp, bit dizilimini geri kodladığımızda sonucun yine mükemmel şekilde -15 ile eşleştiğini kanıtlıyoruz.',
      descKk: 'Классикалық және QUBO: Алдымен мәселені классикалық алгоритммен (SLSQP) шешіп, нәтижені табамыз. Содан кейін QUBO матрицасын шешіп, екі нәтиженің мінсіз сәйкес келетінін дәлелдейміз.'
    },
    {
      titleEn: '3. Reproducible Python Example', titleTr: '3. Tekrarlanabilir Python Örneği', titleKk: '3. Қайталанатын Python мысалы',
      descEn: 'Automated Pipeline: We provide Python code that automatically bridges SciPy (for classical modeling), Dimod (for QUBO formulation), and Qiskit/D-Wave (for quantum execution) in one seamless script.',
      descTr: 'Otomatik Kod Akışı: SciPy (klasik modelleme için), Dimod (QUBO için) ve Qiskit/D-Wave (kuantum çözümü için) kütüphanelerini tek bir akışta birleştiren, herkesin çalıştırabileceği açık kaynaklı Python kodları sunuyoruz.',
      descKk: 'Автоматтандырылған код: SciPy, Dimod және Qiskit/D-Wave кітапханаларын біріктіретін, кез келген адам іске қоса алатын ашық Python кодтарын ұсынамыз.'
    }
  ];

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem', color: 'white' }}>
        {lang === 'en' ? 'What Does This Study Contribute?' : 
         lang === 'tr' ? 'Bu Çalışmanın Katkıları Nelerdir?' : 
         'Бұл зерттеудің үлесі қандай?'}
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', width: '100%', marginBottom: '2rem' }}>
        {/* Card 1 */}
        <div 
          onClick={() => setActiveTab(activeTab === 0 ? null : 0)}
          className="card" 
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 1.5rem', borderTop: '4px solid #4CAF50', cursor: 'pointer', transform: activeTab === 0 ? 'scale(1.05)' : 'scale(1)', transition: 'all 0.3s', boxShadow: activeTab === 0 ? '0 10px 30px rgba(76, 175, 80, 0.3)' : 'none' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔗</div>
          <h3 style={{ color: '#4CAF50', fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
            {lang === 'en' ? 'Contribution 1' : lang === 'tr' ? 'Katkı 1' : 'Үлес 1'}
          </h3>
          <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-primary)', textAlign: 'center' }}>
            {lang === 'en' ? 'Transparent QUBO reformulation workflow.' : 
             lang === 'tr' ? 'Şeffaf QUBO yeniden formülasyon iş akışı.' : 
             'Ашық QUBO қайта тұжырымдау процесі.'}
          </p>
          <div style={{ marginTop: '1rem', color: '#4CAF50', fontSize: '0.9rem' }}>
            {lang === 'en' ? 'Click for example ↓' : lang === 'tr' ? 'Örnek için tıkla ↓' : 'Мысал үшін басыңыз ↓'}
          </div>
        </div>

        {/* Card 2 */}
        <div 
          onClick={() => setActiveTab(activeTab === 1 ? null : 1)}
          className="card" 
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 1.5rem', borderTop: '4px solid #FF9800', cursor: 'pointer', transform: activeTab === 1 ? 'scale(1.05)' : 'scale(1)', transition: 'all 0.3s', boxShadow: activeTab === 1 ? '0 10px 30px rgba(255, 152, 0, 0.3)' : 'none' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ color: '#FF9800', fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
            {lang === 'en' ? 'Contribution 2' : lang === 'tr' ? 'Katkı 2' : 'Үлес 2'}
          </h3>
          <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-primary)', textAlign: 'center' }}>
            {lang === 'en' ? 'Validation against a classical constrained optimiser.' : 
             lang === 'tr' ? 'Klasik kısıtlı bir optimizasyon algoritmasına karşı doğrulama.' : 
             'Классикалық алгоритмге қарсы тексеру.'}
          </p>
          <div style={{ marginTop: '1rem', color: '#FF9800', fontSize: '0.9rem' }}>
            {lang === 'en' ? 'Click for example ↓' : lang === 'tr' ? 'Örnek için tıkla ↓' : 'Мысал үшін басыңыз ↓'}
          </div>
        </div>

        {/* Card 3 */}
        <div 
          onClick={() => setActiveTab(activeTab === 2 ? null : 2)}
          className="card" 
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 1.5rem', borderTop: '4px solid var(--accent-cyan)', cursor: 'pointer', transform: activeTab === 2 ? 'scale(1.05)' : 'scale(1)', transition: 'all 0.3s', boxShadow: activeTab === 2 ? '0 10px 30px rgba(0, 188, 212, 0.3)' : 'none' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🐍</div>
          <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
            {lang === 'en' ? 'Contribution 3' : lang === 'tr' ? 'Katkı 3' : 'Үлес 3'}
          </h3>
          <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-primary)', textAlign: 'center' }}>
            {lang === 'en' ? 'Reproducible Python workflow connecting Classical → QUBO → Quantum.' : 
             lang === 'tr' ? 'Klasik → QUBO → Kuantum bağlantısını kuran Python iş akışı.' : 
             'Классикалық → QUBO → Кванттық байланысын құратын Python процесі.'}
          </p>
          <div style={{ marginTop: '1rem', color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>
            {lang === 'en' ? 'Click for example ↓' : lang === 'tr' ? 'Örnek için tıkla ↓' : 'Мысал үшін басыңыз ↓'}
          </div>
        </div>
      </div>

      {/* Concrete Example Box */}
      <div style={{ 
        minHeight: '150px',
        padding: '2rem', 
        background: 'rgba(255,255,255,0.05)', 
        borderRadius: '12px', 
        border: `1px solid ${activeTab === 0 ? '#4CAF50' : activeTab === 1 ? '#FF9800' : activeTab === 2 ? 'var(--accent-cyan)' : '#444'}`,
        transition: 'all 0.3s',
        opacity: activeTab !== null ? 1 : 0.3
      }}>
        {activeTab !== null ? (
          <div>
            <h4 style={{ 
              color: activeTab === 0 ? '#4CAF50' : activeTab === 1 ? '#FF9800' : 'var(--accent-cyan)', 
              marginTop: 0, fontSize: '1.4rem' 
            }}>
              {lang === 'en' ? concreteExamples[activeTab].titleEn : lang === 'tr' ? concreteExamples[activeTab].titleTr : concreteExamples[activeTab].titleKk}
            </h4>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
              {lang === 'en' ? concreteExamples[activeTab].descEn : lang === 'tr' ? concreteExamples[activeTab].descTr : concreteExamples[activeTab].descKk}
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '1.2rem' }}>
            {lang === 'en' ? 'Select a contribution above to see a concrete example.' : 
             lang === 'tr' ? 'Somut bir örnek görmek için yukarıdan bir katkıya tıklayın.' : 
             'Мысалды көру үшін жоғарыдағы үлесті таңдаңыз.'}
          </div>
        )}
      </div>

    </div>
  );
};
