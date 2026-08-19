import type { SlideDefinition } from './types';

import { Slide01_Title } from '../slides/TitleSlide';
import { Slide02_Hook, Slide03_RealWorldProblem, Slide04_ProblemStatement, Slide05_WhyQubo, Slide06_ResearchAim, Slide07_ResearchGap, Slide08_NovelContributions } from '../slides/SlideContentPart1';
import { Slide09_CaseStudy, Slide10_NonlinearObjective, Slide11_FeasibleRegion, Slide12_Pipeline, Slide13_BinaryEncoding, Slide14_SlackVariables } from '../slides/SlideContentPart2';
import { Slide15_PenaltyMethod, Slide16_QuboMatrix, Slide17_SolutionStrategies, Slide18_ExperimentalSetup, Slide19_KeyResult, Slide20_ComparisonConclusion } from '../slides/SlideContentPart3';
import { Slide21_AppendixMath, Slide22_AppendixQAOA } from '../slides/AppendixSlides';

export const slides: SlideDefinition[] = [
  {
    id: "01",
    component: Slide01_Title,
    titleEn: "Title Slide",
    titleTr: "Başlık Slaydı",
    notesEn: "Welcome everyone to our presentation on QUBO-based reformulation framework for nonlinear constrained optimization problems.",
    notesTr: "Doğrusal olmayan kısıtlı optimizasyon problemleri için QUBO tabanlı yeniden formülasyon çerçevesi sunumumuza hoş geldiniz."
  },
  {
    id: "02",
    component: Slide02_Hook,
    titleEn: "The Hook",
    titleTr: "Dikkat Çekici Giriş",
    notesEn: "We are used to continuous models. But quantum-oriented solvers require unconstrained binary representations.",
    notesTr: "Sürekli modellere alışkınız. Ancak kuantum-odaklı çözücüler kısıtsız ikili gösterimler gerektirir."
  },
  {
    id: "03",
    component: Slide03_RealWorldProblem,
    titleEn: "Real-World Domains",
    titleTr: "Gerçek Dünya Alanları",
    notesEn: "These problems appear everywhere: engineering, production planning, finance. We cannot ignore nonlinearity and constraints.",
    notesTr: "Bu problemler her yerde karşımıza çıkar: mühendislik, üretim planlama, finans. Doğrusal olmama durumunu ve kısıtları görmezden gelemeyiz."
  },
  {
    id: "04",
    component: Slide04_ProblemStatement,
    titleEn: "Problem Statement",
    titleTr: "Problem Tanımı",
    notesEn: "The core problem: Transforming from continuous/constrained to binary/unconstrained is complex and error-prone.",
    notesTr: "Temel problem: Sürekli/kısıtlı formdan ikili/kısıtsız forma dönüşüm karmaşıktır ve hataya açıktır."
  },
  {
    id: "05",
    component: Slide05_WhyQubo,
    titleEn: "Why QUBO?",
    titleTr: "Neden QUBO?",
    notesEn: "QUBO is the bridge. Without it, we cannot use quantum annealers or QAOA.",
    notesTr: "QUBO bir köprüdür. O olmadan kuantum tavlama veya QAOA kullanamayız."
  },
  {
    id: "06",
    component: Slide06_ResearchAim,
    titleEn: "Research Aim",
    titleTr: "Araştırmanın Amacı",
    notesEn: "Our goal is a transparent, reproducible pipeline. Not just solving a problem, but providing a framework.",
    notesTr: "Amacımız şeffaf ve tekrarlanabilir bir ardışık düzen kurmaktır. Sadece bir problemi çözmek değil, bir çerçeve sunmaktır."
  },
  {
    id: "07",
    component: Slide07_ResearchGap,
    titleEn: "Research Gap",
    titleTr: "Araştırma Boşluğu",
    notesEn: "Many papers skip the intermediate steps. We explicitly show the end-to-end workflow.",
    notesTr: "Birçok makale ara adımları atlar. Biz uçtan uca iş akışını açıkça gösteriyoruz."
  },
  {
    id: "08",
    component: Slide08_NovelContributions,
    titleEn: "Novel Contributions",
    titleTr: "Özgün Katkılar",
    notesEn: "Three main contributions: Workflow, Validation against classical SLSQP, and reproducible Python implementation.",
    notesTr: "Üç temel katkı: İş akışı, klasik SLSQP'ye karşı doğrulama ve tekrarlanabilir Python uygulaması."
  },
  {
    id: "09",
    component: Slide09_CaseStudy,
    titleEn: "Case Study Overview",
    titleTr: "Vaka Çalışmasına Genel Bakış",
    notesEn: "We demonstrate this on a nonlinear production planning problem. Adjust the sliders to see the nonlinear cost effects.",
    notesTr: "Bunu doğrusal olmayan bir üretim planlama probleminde gösteriyoruz. Doğrusal olmayan maliyet etkilerini görmek için kaydırıcıları ayarlayın."
  },
  {
    id: "10",
    component: Slide10_NonlinearObjective,
    titleEn: "Nonlinear Objective",
    titleTr: "Doğrusal Olmayan Amaç",
    notesEn: "The profit surface is curved. This requires a quadratic representation in QUBO.",
    notesTr: "Kâr yüzeyi kavislidir. Bu, QUBO'da karesel bir gösterim gerektirir."
  },
  {
    id: "11",
    component: Slide11_FeasibleRegion,
    titleEn: "Feasible Region",
    titleTr: "Olurlu Bölge",
    notesEn: "We have multiple constraints defining the valid space.",
    notesTr: "Geçerli alanı tanımlayan birden fazla kısıtımız var."
  },
  {
    id: "12",
    component: Slide12_Pipeline,
    titleEn: "Pipeline Definition",
    titleTr: "İş Akışı Tanımı",
    notesEn: "Here is the 9-step pipeline we developed. From scaling to decoding.",
    notesTr: "İşte geliştirdiğimiz 9 adımlı iş akışı. Ölçeklendirmeden kod çözmeye kadar."
  },
  {
    id: "13",
    component: Slide13_BinaryEncoding,
    titleEn: "Binary Encoding",
    titleTr: "İkili Kodlama",
    notesEn: "Click the bits! We convert the continuous variable into a binary representation.",
    notesTr: "Bitlere tıklayın! Sürekli değişkeni ikili (binary) bir gösterime dönüştürüyoruz."
  },
  {
    id: "14",
    component: Slide14_SlackVariables,
    titleEn: "Slack Variables",
    titleTr: "Gevşek Değişkenler",
    notesEn: "Inequalities require slack variables to become equalities, which are then encoded as bits.",
    notesTr: "Eşitsizliklerin eşitlik haline gelmesi için gevşek değişkenlere ihtiyacı vardır ve bunlar daha sonra bit olarak kodlanır."
  },
  {
    id: "15",
    component: Slide15_PenaltyMethod,
    titleEn: "Penalty Method",
    titleTr: "Ceza Yöntemi",
    notesEn: "Try changing the penalty lambda! If it's too low, the optimiser cheats and breaks the constraint.",
    notesTr: "Ceza lambdasını değiştirmeyi deneyin! Çok düşükse, algoritma hile yapar ve kısıtı bozar."
  },
  {
    id: "16",
    component: Slide16_QuboMatrix,
    titleEn: "QUBO Matrix Construction",
    titleTr: "QUBO Matrisi Oluşturma",
    notesEn: "Everything collapses into a single matrix Q.",
    notesTr: "Her şey tek bir Q matrisine indirgenir."
  },
  {
    id: "17",
    component: Slide17_SolutionStrategies,
    titleEn: "Solution Strategies",
    titleTr: "Çözüm Stratejileri",
    notesEn: "We solve this using SLSQP (ground truth), Exact QUBO, SA, and QAOA.",
    notesTr: "Bunu SLSQP (referans), Kesin QUBO, SA ve QAOA kullanarak çözüyoruz."
  },
  {
    id: "18",
    component: Slide18_ExperimentalSetup,
    titleEn: "Experimental Setup",
    titleTr: "Deneysel Kurulum",
    notesEn: "Crucial parameters: Lambda is 1000, 13 total qubits used.",
    notesTr: "Kritik parametreler: Lambda 1000, toplam 13 kübit kullanıldı."
  },
  {
    id: "19",
    component: Slide19_KeyResult,
    titleEn: "Key Result: Matrix Match",
    titleTr: "Temel Sonuç: Matris Eşleşmesi",
    notesEn: "The exact QUBO solver perfectly matches the SLSQP baseline. The reformulation is valid.",
    notesTr: "Kesin QUBO çözücü, SLSQP referansıyla mükemmel şekilde eşleşiyor. Yeniden formülasyon geçerlidir."
  },
  {
    id: "20",
    component: Slide20_ComparisonConclusion,
    titleEn: "Conclusion",
    titleTr: "Sonuç",
    notesEn: "Note: QAOA is a workflow demo, we do not claim quantum advantage here.",
    notesTr: "Not: QAOA bir iş akışı demosudur, burada kuantum üstünlüğü iddia etmiyoruz."
  },
  {
    id: "A1",
    component: Slide21_AppendixMath,
    titleEn: "Appendix: Math",
    titleTr: "Ek: Matematik",
    notesEn: "Mathematical details.",
    notesTr: "Matematiksel detaylar."
  },
  {
    id: "A2",
    component: Slide22_AppendixQAOA,
    titleEn: "Appendix: QAOA",
    titleTr: "Ek: QAOA",
    notesEn: "QAOA circuit representation.",
    notesTr: "QAOA devre gösterimi."
  }
];
