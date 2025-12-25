'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("Fr");

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    // Ici vous pourrez ajouter la logique pour changer la langue de l'application
  };

  return (
    <header className="bg-white border-b border-b-gray-300 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="max-w-360 mx-auto px-4 md:px-15 w-full flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/V-F_Blue-Logo.svg"
              alt="VIPHO Foundation Logo"
              width={100}
              height={10}
              className=" "
            />
          </Link>
        </div>

        <nav className=" text-md hidden md:flex flex-row gap-8">
          <Link href="/a-propos" className="text-gray-700 hover:text-primary-600 font-regular transition-colors">À propos</Link>
          <Link href="/blog-et-activite" className="text-gray-700 hover:text-primary-600 font-regular transition-colors">Blog & Activités</Link>

          <Link href="/candidatures" className="text-gray-700 hover:text-primary-600 font-regular transition-colors">Candidatures</Link>
          <Link href="/faire-un-don" className="text-gray-700 hover:text-primary-600 font-regular transition-colors">Faire un don</Link>
        </nav>

        <div className="flex flex-row gap-2 items-center">
          <span className="text-gray-700 text-sm">Fr | En | Es</span>
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 appearance-none"
          >
            <option value="Fr">Fr</option>
            <option value="En">En</option>
            <option value="Es">Es</option>
          </select>
        </div>
      </div>
    </header>
  );
}