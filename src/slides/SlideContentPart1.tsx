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
  const pipeline = [
    { en: 'Original Problem', tr: 'Orijinal Problem', kk: 'Бастапқы мәселе' },
    { en: 'Scaling', tr: 'Ölçeklendirme', kk: 'Масштабтау' },
    { en: 'Discretisation', tr: 'Ayrıklaştırma', kk: 'Дискретизация' },
    { en: 'Binary encoding', tr: 'İkili Kodlama', kk: 'Екілік кодтау' },
    { en: 'Slack variables', tr: 'Gevşek Değişkenler', kk: 'Бос айнымалылар' },
    { en: 'Penalty embedding', tr: 'Ceza Ekleme', kk: 'Жазаны енгізу' },
    { en: 'QUBO matrix', tr: 'QUBO Matrisi', kk: 'QUBO матрицасы' },
    { en: 'Solving', tr: 'Çözüm', kk: 'Шешу' },
    { en: 'Decoding', tr: 'Kod Çözme', kk: 'Декодтау' },
    { en: 'Comparison', tr: 'Karşılaştırma', kk: 'Салыстыру' }
  ];

  return (
    <div className="slide-content" style={{ overflow: 'visible' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        {lang === 'en' ? 'What Is Missing?' : 
         lang === 'tr' ? 'Eksik Olan Nedir?' : 
         'Не жетіспейді?'}
      </h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
        {lang === 'en' 
          ? 'While individual studies exist on QUBO, constraint encoding, and QAOA, this study targets the integrated end-to-end workflow.' 
          : lang === 'tr' 
          ? 'QUBO, kısıt kodlama ve QAOA üzerine bireysel çalışmalar mevcut olsa da, bu çalışma entegre bir uçtan uca (end-to-end) iş akışını hedefler.' 
          : 'QUBO, шектеулерді кодтау және QAOA бойынша жекелеген зерттеулер болғанымен, бұл зерттеу интеграцияланған толық жұмыс процесін мақсат етеді.'}
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
              {lang === 'en' ? step.en : lang === 'tr' ? step.tr : step.kk}
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
      {lang === 'en' ? 'What Does This Study Contribute?' : 
       lang === 'tr' ? 'Bu Çalışmanın Katkıları Nelerdir?' : 
       'Бұл зерттеудің үлесі қандай?'}
    </h2>
    
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', width: '100%' }}>
      
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem', borderTop: '4px solid #4CAF50' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔗</div>
        <h3 style={{ color: '#4CAF50', fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {lang === 'en' ? 'Contribution 1' : lang === 'tr' ? 'Katkı 1' : 'Үлес 1'}
        </h3>
        <p style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>
          {lang === 'en' ? 'Transparent QUBO reformulation workflow.' : 
           lang === 'tr' ? 'Şeffaf QUBO yeniden formülasyon iş akışı.' : 
           'Ашық QUBO қайта тұжырымдау процесі.'}
        </p>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem', borderTop: '4px solid #FF9800' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
        <h3 style={{ color: '#FF9800', fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {lang === 'en' ? 'Contribution 2' : lang === 'tr' ? 'Katkı 2' : 'Үлес 2'}
        </h3>
        <p style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>
          {lang === 'en' ? 'Validation against a classical constrained optimiser.' : 
           lang === 'tr' ? 'Klasik kısıtlı bir optimizasyon algoritmasına karşı doğrulama (validation).' : 
           'Классикалық шектеулі оңтайландыру алгоритміне қарсы тексеру.'}
        </p>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem', borderTop: '4px solid var(--accent-cyan)' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🐍</div>
        <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {lang === 'en' ? 'Contribution 3' : lang === 'tr' ? 'Katkı 3' : 'Үлес 3'}
        </h3>
        <p style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>
          {lang === 'en' ? 'Reproducible Python workflow connecting Classical → QUBO → Quantum-oriented optimization.' : 
           lang === 'tr' ? 'Klasik → QUBO → Kuantum-odaklı optimizasyon bağlantısını kuran tekrarlanabilir Python iş akışı.' : 
           'Классикалық → QUBO → Кванттық бағдарланған оңтайландыру байланысын құратын қайталанатын Python процесі.'}
        </p>
      </div>

    </div>
  </div>
);
