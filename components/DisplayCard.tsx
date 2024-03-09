"use client";

import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";

import { languages } from "@/constants";
import { DisplayCardProps } from "@/types";
import Image from "next/image";

export default function DisplayCard({
  language,
  setLanguage,
}: DisplayCardProps) {
  const [query, setQuery] = useState("");

  const filteredLanguages =
    query === ""
      ? languages
      : languages.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full xl:w-[600px]">
      <Combobox value={language} onChange={setLanguage}>
        <Combobox.Input
          placeholder="Select Language"
          displayValue={(language: string) => language}
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
                    relative search-manufacturer__option ${
                      active ? "font-bold" : ""
                    }
                    `}
                value={item.name}
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

      <textarea className="w-full p-4 rounded-lg border-black h-[200px] md:h-[300px] border mt-4 mb-2 outline-1" placeholder="Enter text"></textarea>

      <div className="flex">
        {/* <button className="flex items-center px-3 md:px-6 py-3 bg-black text-gray-200 rounded-lg mr-4">
          <span className="font-semibold mr-4 hidden md:block">Search</span>
          <Image src="/search.svg" alt="search icon" width={25} height={25} />
        </button> */}
        <button className="bg-black p-3 rounded-lg">
          <Image src="/read.svg" alt="read icon" width={28} height={28} />
        </button>
      </div>
    </div>
  );
}
