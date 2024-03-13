export interface DisplayCardProps {
  language?: string;
  setLanguage?: (language: string) => void;
  sourceLanguage?: string;
  setSourceLanguage?: (sourceLanguage: string) => void;
  text?: string;
  setText?: (text: string) => void;
  input?: boolean;
  getTranslation?: () => void;
  placeholder?: string;
}

export interface FetchTranslationProps {
  sourceLanguage: string;
  targetLanguage: string;
  text: string;
}

export interface FetchSpeechProps {
  inputText: string;
}