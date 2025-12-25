"use client";

import { SectionHeader } from "@/components/sections";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Select from "@/components/ui/select";
import FileInput from "@/components/ui/file-input";
import { useState } from "react";

export default function PostulerPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenoms: "",
    sexe: "",
    email: "",
    dateNaissance: "",
    telephone: "",
    motivation: "",
  });

  const sexeOptions = ["Homme", "Femme", "Autre"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="w-full">
      <section className="bg-primary-100 py-20 px-15">
        <div className="max-w-360 mx-auto">
          <div className="flex gap-5 flex-col mb-12">
            <SectionHeader title="Postuler" className="" />
            <h1 className="text-3xl font-bold text-gray-800">Soumettez votre candidature</h1>
          </div>

          <div className="space-y-4">
            <p className="max-w-xl text-lg text-gray-700">
              Vous souhaitez rejoindre l&apos;équipe VIPHO ? Remplissez ce formulaire pour soumettre votre candidature.
              Que vous soyez intéressé par un poste ou un bénévolat, nous serons ravis de vous accueillir.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-360 mx-auto py-12 px-15">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Nom"
              placeholder="Entrez votre nom"
              value={formData.nom}
              onChange={(e) => handleInputChange("nom", e.target.value)}
              required
            />

            <Input
              label="Prénoms"
              placeholder="Entrez vos prénoms"
              value={formData.prenoms}
              onChange={(e) => handleInputChange("prenoms", e.target.value)}
              required
            />

            <Select
              label="Sexe"
              options={sexeOptions}
              value={formData.sexe}
              onChange={(value) => handleInputChange("sexe", value)}
              placeholder="Sélectionnez votre sexe"
              required
            />

            <Input
              label="Email"
              type="email"
              placeholder="votre.email@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />

            <Input
              label="Date de naissance"
              type="date"
              value={formData.dateNaissance}
              onChange={(e) => handleInputChange("dateNaissance", e.target.value)}
              required
            />

            <Input
              label="Numéro de téléphone"
              type="tel"
              placeholder="+33 6 12 34 56 78"
              value={formData.telephone}
              onChange={(e) => handleInputChange("telephone", e.target.value)}
              required
            />
          </div>

          <Textarea
            label="Parlez-nous de votre motivation"
            placeholder="Pourquoi souhaitez-vous ce poste ou être bénévole ?"
            value={formData.motivation}
            onChange={(e) => handleInputChange("motivation", e.target.value)}
            rows={6}
            required
          />

          <FileInput
            label="CV ou document complémentaire"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            maxSizeText="(La taille du fichier ne doit pas dépasser 10MB)"
          />

          <div className="pt-6 ">
            <Button
              type="submit"
              label="Soumettre ma candidature"
              bgColor="bg-primary-300"
              textColor="text-white"
              className="w-full"
            />
          </div>
        </form>
      </section>
    </div>
  );
}