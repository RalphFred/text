"use client";

import { DisplayCard } from ".";

import { fetchTranslation } from "@/utils";
import { useState } from "react";
import Image from "next/image";

export async function getServerSideProps() {

  const sourceLanguage = "en";
  const targetLanguage = "es";
  const text = "Hello";

  try {
    const translatedText = await fetchTranslation({
      sourceLanguage,
      targetLanguage,
      text,
    });

    return { props: { translatedText } };
  } catch (error) {
    console.error("Error fetching translation:", error);
    return { props: { error: "Failed to fetch translation data." } };
  }
}



export default function Form() {

  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");

  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const getTranslation = async () => {
    try {
      const translation = await fetchTranslation({
        sourceLanguage,
        targetLanguage,
        text: inputText,
      });
      
      setOutputText(translation.data.translatedText);
    } catch (error) {
      console.error("Error fetching translation:", error);
    }
  };

  return (
    <div className="px-4 py-4 mb-8 md:px-16 flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:items-start">
      <DisplayCard
        language={sourceLanguage}
        setLanguage={setSourceLanguage}
        text={inputText}
        setText={setInputText}
        input={true}
        getTranslation={getTranslation}
      />
      <Image
        src="/arrow.svg"
        alt="arrow"
        width={30}
        height={30}
        className="rotate-90 xl:rotate-0 my-8 xl:my-0"
      />
      <DisplayCard
        language={targetLanguage}
        setLanguage={setTargetLanguage}
        text={outputText}
        setText={setOutputText}
        input={false}
      />
    </div>
  );
}
