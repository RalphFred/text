"use client";

import { useState, Fragment, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";

import { fetchSpeech } from "@/utils";

import { languages } from "@/constants";
import { DisplayCardProps } from "@/types";
import Image from "next/image";

interface SpeechData {
  audioContent: string;
}

export async function getServerSideProps() {
  const inputText = "Hi there!";

  try {
    const outputSpeech = await fetchSpeech({ inputText });

    return { props: outputSpeech };
  } catch (error) {
    console.error("Error fetching speech:", error);
    return { props: { error: "Failed to fetch speech data." } };
  }
}

export default function DisplayCard({
  language,
  setLanguage,
  text,
  setText,
  input,
  getTranslation,
}: DisplayCardProps) {
  const [query, setQuery] = useState("");
  // const [audioSrc, setAudioSrc] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (audioSrc) {
  //     const audio = new Audio(audioSrc);
  //     audio.play();
  //   }
  // }, [audioSrc]);

  const filteredLanguages =
    query === ""
      ? languages
      : languages.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleTranslation = async () => {
    if (getTranslation) {
      setIsLoading(true);
      await getTranslation();
      setIsLoading(false);
    }
  };

  // const getSpeech = async () => {
  //   console.log(text);
  //   try {
  //     if (text) {
  //       const speech = await fetchSpeech({
  //         inputText: text,
  //       });

  //       if (speech?.audioContent) {
  //         setAudioSrc(speech.audioContent);
  //       }
  //     } else {
  //       console.error("No speech returned");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data", error);
  //   }
  // };

  return (
    <div className="w-full xl:w-[600px]">
      <Combobox value={language} onChange={setLanguage}>
        <Combobox.Input
          placeholder="Select Language"
          displayValue={(selectedLanguage: string) =>
            languages.find((item) => item.code === selectedLanguage)?.name || ""
          }
          onChange={(e) => setQuery(e.target.value)}
          className="p-4 rounded-lg border border-black w-full"
        />
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <div className="relative">
            <Combobox.Options className="max-h-40 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 absolute top-full z-10 w-full bg-white combobox px-4">
              {filteredLanguages.map((item, index) => (
                <Combobox.Option
                  key={index}
                  className={({ active }) => `
                    relative search-manufacturer__option cursor-pointer ${
                      active ? "font-bold" : ""
                    }
                    `}
                  value={item.code}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </div>
        </Transition>
      </Combobox>

      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText?.(e.target.value)}
          className={`w-full p-4 rounded-lg border-black h-[200px] md:h-[300px] border mt-4 mb-2 outline-1 ${
            input ? "" : "pointer-events-none"
          }`}
          placeholder="Enter text"
        />
        {/* <button
          className="absolute bottom-8 right-4 text-white font-bold"
          onClick={getSpeech}
        >
          <Image src="/read.svg" alt="read icon" width={30} height={30} />
        </button> */}
      </div>

      {input && (
        <div className="flex justify-end">
          <button
            className="flex items-center px-4 md:px-6 py-3 w-full xl:w-auto justify-center bg-black text-gray-200 rounded-lg"
            onClick={handleTranslation}
          >
            <span className="font-semibold mr-4 text-lg">Translate</span>
            {isLoading ? (
              <Image
                src="/load.svg"
                alt="translate icon"
                width={25}
                height={25}
              />
            ) : (
              <Image
                src="/translate.svg"
                alt="translate icon"
                width={25}
                height={25}
              />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
