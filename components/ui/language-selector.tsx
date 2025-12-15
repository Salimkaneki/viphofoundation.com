'use client'
import React, { useState } from "react";

interface LanguageSelectorProps {
  className?: string;
}

export default function LanguageSelector({ className = "" }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("fr");

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    // Ici vous pourrez ajouter la logique pour changer la langue de l'application
    console.log("Langue sélectionnée:", value);
  };

  const getLanguageDisplay = (lang: string) => {
    switch (lang) {
      case "fr": return "Fr";
      case "en": return "En";
      case "es": return "Es";
      default: return "Fr";
    }
  };

  return (
    <div className={`flex flex-row gap-2 items-center ${className}`}>
      <div className="size-5 rounded-full bg-yellow-300"></div>
      <div className="relative">
        <select
          value={selectedLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="bg-transparent border-none text-gray-700 font-medium cursor-pointer focus:outline-none appearance-none"
        >
          <option value="fr">Fr</option>
          <option value="en">En</option>
          <option value="es">Es</option>
        </select>
      </div>
    </div>
  );
}