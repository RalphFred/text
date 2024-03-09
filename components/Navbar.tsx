import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-4 py-4 md:px-16">
      <Link href="/">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className="mr-4"
          />
          <h1 className="text-3xl font-semibold hidden md:block text-slate-900">LinguaLibre</h1>
        </div>
      </Link>

      <button className="flex items-center px-3 md:px-6 py-3 bg-black text-gray-200 rounded-2xl">
        <span className="font-semibold text-lg mr-4 hidden md:block">
          Settings
        </span>
        <Image 
         src="/settings.svg"
         alt="settings icon"
         width={30}
         height={30}
         className=""
        />
      </button>
    </nav>
  );
}
