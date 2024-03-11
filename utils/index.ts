  import { FetchTranslationProps } from "@/types";

  export async function fetchTranslation({sourceLanguage, targetLanguage, text}: FetchTranslationProps) {
    const url = "https://text-translator2.p.rapidapi.com/translate";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        'X-RapidAPI-Key': '3088144f5cmsh2ecbf9657015e88p145729jsnaa0931a6397e',
        // "X-RapidAPI-Key": process.env.RAPIDAPI_KEY as string,
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: new URLSearchParams({
        source_language: sourceLanguage,
        target_language: targetLanguage,
        text: text,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
