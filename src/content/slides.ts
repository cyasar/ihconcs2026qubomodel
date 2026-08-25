import type { SlideDefinition } from './types';

import { Slide01_Title } from '../slides/TitleSlide';
import { Slide02_Hook, Slide03_RealWorldProblem, Slide04_ProblemStatement, Slide05_WhyQubo, Slide05b_QuboAdvantages, Slide06_ResearchAim, Slide07_ResearchGap, Slide08_NovelContributions } from '../slides/SlideContentPart1';
import { Slide09_CaseStudy, Slide10_NonlinearObjective, Slide11_FeasibleRegion, Slide12_Pipeline, Slide12b_InteractivePipeline, Slide13_BinaryEncoding, Slide14_SlackVariables } from '../slides/SlideContentPart2';
import { Slide15_PenaltyMethod, Slide16_QuboMatrix, Slide17_SolutionStrategies, Slide18_ExperimentalSetup, Slide19_KeyResult, Slide19b_SolutionComparison, Slide20_ComparisonConclusion } from '../slides/SlideContentPart3';
import { Slide21_AppendixMath, Slide22_AppendixQAOA } from '../slides/AppendixSlides';

export const slides: SlideDefinition[] = [
  {
    id: "01",
    component: Slide01_Title,
    titleEn: "Title Slide",
    titleTr: "Başlık Slaydı",
    titleKk: "Атау слайды",
    notesEn: "Welcome everyone to our presentation on QUBO-based reformulation framework for nonlinear constrained optimization problems.",
    notesTr: "Doğrusal olmayan kısıtlı optimizasyon problemleri için QUBO tabanlı yeniden formülasyon çerçevesi sunumumuza hoş geldiniz.",
    notesKk: "Сызықтық емес шектеулі оңтайландыру мәселелеріне арналған QUBO негізіндегі қайта тұжырымдау жүйесі туралы презентациямызға қош келдіңіздер."
  },
  {
    id: "02",
    component: Slide02_Hook,
    titleEn: "The Hook",
    titleTr: "Dikkat Çekici Giriş",
    titleKk: "Назар аударту",
    notesEn: "We are used to continuous models. But quantum-oriented solvers require unconstrained binary representations.",
    notesTr: "Sürekli modellere alışkınız. Ancak kuantum-odaklı çözücüler kısıtsız ikili gösterimler gerektirir.",
    notesKk: "Біз үздіксіз модельдерге үйренгенбіз. Бірақ кванттық шешімдер шектеусіз екілік (binary) көріністерді қажет етеді."
  },
  {
    id: "03",
    component: Slide03_RealWorldProblem,
    titleEn: "Real-World Domains",
    titleTr: "Gerçek Dünya Alanları",
    titleKk: "Нақты әлем салалары",
    notesEn: "These problems appear everywhere: engineering, production planning, finance. We cannot ignore nonlinearity and constraints.",
    notesTr: "Bu problemler her yerde karşımıza çıkar: mühendislik, üretim planlama, finans. Doğrusal olmama durumunu ve kısıtları görmezden gelemeyiz.",
    notesKk: "Бұл мәселелер барлық жерде кездеседі: инженерия, өндірісті жоспарлау, қаржы. Біз сызықтық емес және шектеулерді елемей қоя алмаймыз."
  },
  {
    id: "04",
    component: Slide04_ProblemStatement,
    titleEn: "Problem Statement",
    titleTr: "Problem Tanımı",
    titleKk: "Мәселенің қойылымы",
    notesEn: "The core problem: Transforming from continuous/constrained to binary/unconstrained is complex and error-prone.",
    notesTr: "Temel problem: Sürekli/kısıtlı formdan ikili/kısıtsız forma dönüşüm karmaşıktır ve hataya açıktır.",
    notesKk: "Негізгі мәселе: Үздіксіз/шектеулі формадан екілік/шектеусіз формаға түрлендіру күрделі және қатеге бейім."
  },
  {
    id: "05",
    component: Slide05_WhyQubo,
    titleEn: "Why QUBO?",
    titleTr: "Neden QUBO?",
    titleKk: "Неліктен QUBO?",
    notesEn: "We need a bridge. The real problem is continuous and constrained. Quantum hardware needs binary and unconstrained.",
    notesTr: "Bir köprüye ihtiyacımız var. Gerçek problem sürekli ve kısıtlıdır. Kuantum donanımları ikili ve kısıtsız bir formata ihtiyaç duyar.",
    notesKk: "Бізге көпір керек. Нақты мәселе үздіксіз және шектеулі. Кванттық аппараттық құралға екілік және шектеусіз формат қажет."
  },
  {
    id: "05b",
    component: Slide05b_QuboAdvantages,
    titleEn: "Advantages & Comparison",
    titleTr: "Avantajlar ve Karşılaştırma",
    titleKk: "Артықшылықтары мен салыстыру",
    notesEn: "Here we contrast the Classical approach with the QUBO model and highlight its quantum-ready advantages.",
    notesTr: "Burada Klasik yaklaşım ile QUBO modelini karşılaştırıyor ve kuantuma hazır olmasının avantajlarını vurguluyoruz.",
    notesKk: "Мұнда біз Классикалық тәсілді QUBO моделімен салыстырамыз және оның кванттық дайындығының артықшылықтарын көрсетеміз."
  },
  {
    id: "06",
    component: Slide06_ResearchAim,
    titleEn: "Research Aim",
    titleTr: "Araştırmanın Amacı",
    titleKk: "Зерттеу мақсаты",
    notesEn: "Our goal is a transparent, reproducible pipeline. Not just solving a problem, but providing a framework.",
    notesTr: "Amacımız şeffaf ve tekrarlanabilir bir ardışık düzen kurmaktır. Sadece bir problemi çözmek değil, bir çerçeve sunmaktır.",
    notesKk: "Біздің мақсатымыз — ашық және қайталанатын жұмыс процесін құру. Тек мәселені шешу ғана емес, негізін ұсыну."
  },
  {
    id: "07",
    component: Slide07_ResearchGap,
    titleEn: "Research Gap",
    titleTr: "Araştırma Boşluğu",
    titleKk: "Зерттеудегі олқылық",
    notesEn: "Many papers skip the intermediate steps. We explicitly show the end-to-end workflow.",
    notesTr: "Birçok makale ara adımları atlar. Biz uçtan uca iş akışını açıkça gösteriyoruz.",
    notesKk: "Көптеген мақалалар аралық қадамды өткізіп жібереді. Біз толық жұмыс процесін нақты көрсетеміз."
  },
  {
    id: "08",
    component: Slide08_NovelContributions,
    titleEn: "Novel Contributions",
    titleTr: "Özgün Katkılar",
    titleKk: "Жаңа үлестер",
    notesEn: "Three main contributions: Workflow, Validation against classical SLSQP, and reproducible Python implementation.",
    notesTr: "Üç temel katkı: İş akışı, klasik SLSQP'ye karşı doğrulama ve tekrarlanabilir Python uygulaması.",
    notesKk: "Үш негізгі үлес: Жұмыс процесі, классикалық SLSQP-ге қарсы валидация және қайталанатын Python қолданбасы."
  },
  {
    id: "09",
    component: Slide09_CaseStudy,
    titleEn: "Case Study Overview",
    titleTr: "Vaka Çalışmasına Genel Bakış",
    titleKk: "Жағдайлық зерттеуге шолу",
    notesEn: "We demonstrate this on a nonlinear production planning problem. Adjust the sliders to see the nonlinear cost effects.",
    notesTr: "Bunu doğrusal olmayan bir üretim planlama probleminde gösteriyoruz. Doğrusal olmayan maliyet etkilerini görmek için kaydırıcıları ayarlayın.",
    notesKk: "Біз мұны сызықтық емес өндірісті жоспарлау мәселесінде көрсетеміз. Сызықтық емес шығындар әсерін көру үшін сырғытпаларды реттеңіз."
  },
  {
    id: "10",
    component: Slide10_NonlinearObjective,
    titleEn: "Nonlinear Objective",
    titleTr: "Doğrusal Olmayan Amaç",
    titleKk: "Сызықтық емес мақсат",
    notesEn: "The profit surface is curved. This requires a quadratic representation in QUBO.",
    notesTr: "Kâr yüzeyi kavislidir. Bu, QUBO'da karesel bir gösterim gerektirir.",
    notesKk: "Пайда беті қисық. Бұл QUBO-да квадраттық көріністі қажет етеді."
  },
  {
    id: "11",
    component: Slide11_FeasibleRegion,
    titleEn: "Feasible Region",
    titleTr: "Olurlu Bölge",
    titleKk: "Мүмкін аймақ",
    notesEn: "We have multiple constraints defining the valid space.",
    notesTr: "Geçerli alanı tanımlayan birden fazla kısıtımız var.",
    notesKk: "Жарамды кеңістікті анықтайтын бірнеше шектеулеріміз бар."
  },
  {
    id: "12",
    component: Slide12_Pipeline,
    titleEn: "Pipeline Definition",
    titleTr: "İş Akışı Tanımı",
    titleKk: "Жұмыс процесін анықтау",
    notesEn: "Here is the 9-step pipeline we developed. From scaling to decoding.",
    notesTr: "İşte geliştirdiğimiz 9 adımlı iş akışı. Ölçeklendirmeden kod çözmeye kadar.",
    notesKk: "Міне, біз жасаған 9 қадамдық жұмыс процесі. Масштабтаудан декодтауға дейін."
  },
  {
    id: "12b",
    component: Slide12b_InteractivePipeline,
    titleEn: "Pipeline Walkthrough",
    titleTr: "İş Akışı Ayrıntıları",
    titleKk: "Жұмыс процесінің мәліметтері",
    notesEn: "Let's go through the 9 steps one by one. Notice the math and the practical application for each step.",
    notesTr: "Şimdi 9 adımı tek tek inceleyelim. Her adım için matematiğe ve pratik uygulamaya dikkat edin.",
    notesKk: "Енді 9 қадамды бір-бірден қарастырайық. Әр қадам үшін математика мен практикалық қолдануға назар аударыңыз."
  },
  {
    id: "13",
    component: Slide13_BinaryEncoding,
    titleEn: "Binary Encoding",
    titleTr: "İkili Kodlama",
    titleKk: "Екілік кодтау",
    notesEn: "Click the bits! We convert the continuous variable into a binary representation.",
    notesTr: "Bitlere tıklayın! Sürekli değişkeni ikili (binary) bir gösterime dönüştürüyoruz.",
    notesKk: "Биттерді басыңыз! Біз үздіксіз айнымалыны екілік көрініске түрлендіреміз."
  },
  {
    id: "14",
    component: Slide14_SlackVariables,
    titleEn: "Slack Variables",
    titleTr: "Gevşek Değişkenler",
    titleKk: "Бос айнымалылар",
    notesEn: "Inequalities require slack variables to become equalities, which are then encoded as bits.",
    notesTr: "Eşitsizliklerin eşitlik haline gelmesi için gevşek değişkenlere ihtiyacı vardır ve bunlar daha sonra bit olarak kodlanır.",
    notesKk: "Теңсіздіктер теңдік болуы үшін бос айнымалыларды қажет етеді, содан кейін олар бит ретінде кодталады."
  },
  {
    id: "15",
    component: Slide15_PenaltyMethod,
    titleEn: "Penalty Method",
    titleTr: "Ceza Yöntemi",
    titleKk: "Жазалау әдісі",
    notesEn: "Try changing the penalty lambda! If it's too low, the optimiser cheats and breaks the constraint.",
    notesTr: "Ceza lambdasını değiştirmeyi deneyin! Çok düşükse, algoritma hile yapar ve kısıtı bozar.",
    notesKk: "Жазалау лямбдасын өзгертіп көріңіз! Егер ол тым төмен болса, алгоритм алдап, шектеуді бұзады."
  },
  {
    id: "16",
    component: Slide16_QuboMatrix,
    titleEn: "QUBO Matrix Construction",
    titleTr: "QUBO Matrisi Oluşturma",
    titleKk: "QUBO матрицасын құру",
    notesEn: "Everything collapses into a single matrix Q.",
    notesTr: "Her şey tek bir Q matrisine indirgenir.",
    notesKk: "Барлығы бір Q матрицасына жинақталады."
  },
  {
    id: "17",
    component: Slide17_SolutionStrategies,
    titleEn: "Solution Strategies",
    titleTr: "Çözüm Stratejileri",
    titleKk: "Шешім стратегиялары",
    notesEn: "We solve this using SLSQP (ground truth), Exact QUBO, SA, and QAOA.",
    notesTr: "Bunu SLSQP (referans), Kesin QUBO, SA ve QAOA kullanarak çözüyoruz.",
    notesKk: "Біз мұны SLSQP (негізгі ақиқат), дәл QUBO, SA және QAOA арқылы шешеміз."
  },
  {
    id: "18",
    component: Slide18_ExperimentalSetup,
    titleEn: "Experimental Setup",
    titleTr: "Deneysel Kurulum",
    titleKk: "Тәжірибелік орнату",
    notesEn: "Crucial parameters: Lambda is 1000, 13 total qubits used.",
    notesTr: "Kritik parametreler: Lambda 1000, toplam 13 kübit kullanıldı.",
    notesKk: "Маңызды параметрлер: Лямбда 1000, барлығы 13 кубит пайдаланылды."
  },
  {
    id: "19",
    component: Slide19_KeyResult,
    titleEn: "Matrix Matching",
    titleTr: "Matris Eşleşmesi",
    titleKk: "Матрица сәйкестігі",
    notesEn: "The analytic and encoded Q matrices match perfectly. The core of the paper is validated.",
    notesTr: "Analitik ve kodlanmış Q matrisleri mükemmel eşleşiyor. Makalenin özü doğrulanmış oldu.",
    notesKk: "Аналитикалық және кодталған Q матрицалары тамаша сәйкес келеді. Мақаланың негізгі бөлігі расталды."
  },
  {
    id: "19b",
    component: Slide19b_SolutionComparison,
    titleEn: "Solution Comparison",
    titleTr: "Çözüm Karşılaştırması",
    titleKk: "Шешімдерді салыстыру",
    notesEn: "Let's compare the classical optimization output directly with the QUBO output on an example problem.",
    notesTr: "Örnek bir problem üzerinde klasik optimizasyon çıktısı ile QUBO çıktısını doğrudan karşılaştıralım.",
    notesKk: "Классикалық оңтайландыру нәтижесін мысал мәселесіндегі QUBO нәтижесімен тікелей салыстырайық."
  },
  {
    id: "20",
    component: Slide20_ComparisonConclusion,
    titleEn: "Conclusion",
    titleTr: "Sonuçlar",
    titleKk: "Қорытынды",
    notesEn: "Note: QAOA is a workflow demo, we do not claim quantum advantage here.",
    notesTr: "Not: QAOA bir iş akışı demosudur, burada kuantum üstünlüğü iddia etmiyoruz.",
    notesKk: "Ескерту: QAOA — бұл жұмыс процесінің демо нұсқасы, біз мұнда кванттық артықшылықты мәлімдемейміз."
  },
  {
    id: "A1",
    component: Slide21_AppendixMath,
    titleEn: "Appendix: Math",
    titleTr: "Ek: Matematik",
    titleKk: "Қосымша: Математика",
    notesEn: "Mathematical details.",
    notesTr: "Matematiksel detaylar.",
    notesKk: "Математикалық мәліметтер."
  },
  {
    id: "A2",
    component: Slide22_AppendixQAOA,
    titleEn: "Appendix: QAOA",
    titleTr: "Ek: QAOA",
    titleKk: "Қосымша: QAOA",
    notesEn: "QAOA circuit representation.",
    notesTr: "QAOA devre gösterimi.",
    notesKk: "QAOA схемасының көрінісі."
  }
];
