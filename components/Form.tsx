"use client"

import { languages } from "@/constants";
import { DisplayCard } from ".";
import { useState } from "react";

export default function Form() {

  const [language, setLanguage] = useState("")

  return(
    <div className="px-4 py-4 md:px-16 flex flex-col xl:flex-row justify-between items-start">
      <DisplayCard 
       language={language}
       setLanguage={setLanguage}
      />
      <div>
        Hello
      </div>
      <div className="w-full lg:w-[600px]">
        Hii
      </div>
    </div>
  )
}