import React from 'react';

export type Language = 'en' | 'tr';

export interface SlideProps {
  lang: Language;
  safeMode: boolean;
}

export interface SlideDefinition {
  id: string;
  component: React.FC<SlideProps>;
  titleEn: string;
  titleTr: string;
  notesEn: string;
  notesTr: string;
}
