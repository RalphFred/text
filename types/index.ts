export interface DisplayCardProps {
  language: string;
  setLanguage: (language: string) => void;
}

export interface FetchTranslationProps {
  sourceLanguage: string;
  targetLanguage: string;
  text: string;
}