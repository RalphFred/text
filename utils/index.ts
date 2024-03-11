import { FetchTranslationProps } from "@/types";

interface EnvironmentVariables {
  NEXT_PUBLIC_RAPIDAPI_KEY: string;
}

export async function fetchTranslation({
  sourceLanguage,
  targetLanguage,
  text,
}: FetchTranslationProps) {
  const url = "https://text-translator2.p.rapidapi.com/translate";

  console.log(process.env.NEXT_PUBLIC_RAPIDAPI_KEY)

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
