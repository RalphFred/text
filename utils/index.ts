import { FetchTranslationProps, FetchSpeechProps } from "@/types";

interface EnvironmentVariables {
  NEXT_PUBLIC_RAPIDAPI_KEY: string;
}

export async function fetchTranslation({
  sourceLanguage,
  targetLanguage,
  text,
}: FetchTranslationProps) {
  const url = "https://text-translator2.p.rapidapi.com/translate";

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    body: new URLSearchParams({
      source_language: sourceLanguage,
      target_language: targetLanguage,
      text: text,
    }),
  };

  try {
    const response = await fetch(url, options as RequestInit);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSpeech({inputText}: FetchSpeechProps) {
  const url = 'https://text-to-speech-realistic-ai-voices.p.rapidapi.com/text-to-speech/EXAVITQu4vr4xnSDxMaL/';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'text-to-speech-realistic-ai-voices.p.rapidapi.com'
    },
    body: new URLSearchParams({
      text: inputText,
    })
  }
  try {
    const response = await fetch(url, options as RequestInit);
    const result = await response.text();
  } catch (error) {
    console.error(error);
  }
}