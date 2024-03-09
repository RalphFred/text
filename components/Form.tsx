import { DisplayCard } from ".";

export default function Form() {

  

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