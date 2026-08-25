import React from 'react';

export type Language = 'en' | 'tr' | 'kk';

export interface SlideProps {
  lang: Language;
  safeMode: boolean;
}

export interface SlideDefinition {
  id: string;
  component: React.FC<SlideProps>;
  titleEn: string;
  titleTr: string;
  titleKk: string;
  notesEn: string;
  notesTr: string;
  notesKk: string;
}
