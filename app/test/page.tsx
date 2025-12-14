"use client";

import Select from "@/components/ui/select";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import { useState } from "react";

export default function TestPage() {
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const departmentOptions = [
    "Tous les départements",
    "Ain (01)",
    "Aisne (02)",
    "Allier (03)",
    "Alpes-de-Haute-Provence (04)",
    "Hautes-Alpes (05)",
    "Alpes-Maritimes (06)"
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Page de Test</h1>
          <p className="text-gray-600">Test des composants et fonctionnalités</p>
        </div>

        {/* Form Components */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Composants de Formulaire</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Select</h3>
              <Select
                label="Département"
                options={departmentOptions}
                value={selectedValue}
                onChange={setSelectedValue}
                placeholder="Choisissez un département"
              />
              <p className="mt-2 text-sm text-gray-600">
                Valeur sélectionnée : <span className="font-medium">{selectedValue || "Aucune"}</span>
              </p>
            </div>

            <div>
              <Input
                label="Nom"
                placeholder="Entrez votre nom"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
              <p className="mt-2 text-sm text-gray-600">
                Valeur saisie : <span className="font-medium">{inputValue || "Vide"}</span>
              </p>
            </div>

            <div>
              <Textarea
                label="Message"
                placeholder="Entrez votre message"
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                rows={4}
              />
              <p className="mt-2 text-sm text-gray-600">
                Caractères : <span className="font-medium">{textareaValue.length}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Tests à ajouter */}
      </div>
    </div>
  );
}