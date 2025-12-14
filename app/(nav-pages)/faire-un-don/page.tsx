"use client";

import { SectionHeader } from "@/components/sections";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import FileInput from "@/components/ui/file-input";
import { useState } from "react";

export default function FaireUnDonPage() {
  const [formData, setFormData] = useState({
    nomPrenoms: "",
    email: "",
    telephone: "",
    typeDon: "",
    numeroTelephone: "",
    montant: "",
    message: "",
  });

  const typeDonOptions = [
    "Virement bancaire",
    "Flooz",
    "TMoney",
    "Vivres",
    "Vêtements",
    "Vivres et Vêtements"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Donation form data:", formData);
    // Handle form submission
  };

  const renderDonationFields = () => {
    switch (formData.typeDon) {
      case "Virement bancaire":
        return (
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Informations de virement</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Numéro de compte bancaire :</p>
                <p className="text-lg font-mono bg-white px-4 py-2 border border-gray-300 rounded-md">
                  CI123 4567 8901 2345 6789 01
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Nom du bénéficiaire :</p>
                <p className="text-lg bg-white px-4 py-2 border border-gray-300 rounded-md">
                  VIPHO Foundation
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Banque :</p>
                <p className="text-lg bg-white px-4 py-2 border border-gray-300 rounded-md">
                  Ecobank Côte d'Ivoire
                </p>
              </div>
            </div>
          </div>
        );

      case "Flooz":
      case "TMoney":
        return (
          <div className="space-y-4">
            <Input
              label={`Numéro de téléphone ${formData.typeDon}`}
              placeholder={`Entrez votre numéro ${formData.typeDon}`}
              value={formData.numeroTelephone}
              onChange={(e) => handleInputChange("numeroTelephone", e.target.value)}
              required
            />
            <Input
              label="Montant (FCFA)"
              type="number"
              placeholder="Entrez le montant"
              value={formData.montant}
              onChange={(e) => handleInputChange("montant", e.target.value)}
              required
            />
          </div>
        );

      case "Vivres":
        return (
          <div className="space-y-4">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Dons de vivres</h3>
              <p className="text-gray-700 mb-4">
                Vous pouvez apporter vos dons de vivres directement à nos locaux ou nous contacter pour l'organisation du retrait.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Adresse :</strong> Sed vitae urna ac lorem sagittis ultrices.</p>
                <p><strong>Téléphone :</strong> +228 00 00 00 00</p>
              </div>
            </div>
            <FileInput
              label="Photo des vivres (optionnel)"
              accept=".jpg,.jpeg,.png"
              maxSizeText="(La taille du fichier ne doit pas dépasser 5MB)"
            />
          </div>
        );

      case "Vêtements":
        return (
          <div className="space-y-4">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">Dons de vêtements</h3>
              <p className="text-gray-700 mb-4">
                Nous acceptons les vêtements en bon état. Vous pouvez les apporter directement ou nous contacter pour organiser la collecte.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Adresse :</strong> Sed vitae urna ac lorem sagittis ultrices.</p>
                <p><strong>Téléphone :</strong> +228 00 00 00 00</p>
              </div>
            </div>
            <FileInput
              label="Photo des vêtements (optionnel)"
              accept=".jpg,.jpeg,.png"
              maxSizeText="(La taille du fichier ne doit pas dépasser 5MB)"
            />
          </div>
        );

      case "Vivres et Vêtements":
        return (
          <div className="space-y-4">
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-4">Dons de vivres et vêtements</h3>
              <p className="text-gray-700 mb-4">
                Merci pour votre générosité ! Vous pouvez apporter vos dons directement à nos locaux.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Adresse :</strong> Sed vitae urna ac lorem sagittis ultrices.</p>
                <p><strong>Téléphone :</strong> +228 00 00 00 00</p>
              </div>
            </div>
            <FileInput
              label="Photo des vivres et vêtements (optionnel)"
              accept=".jpg,.jpeg,.png"
              maxSizeText="(La taille du fichier ne doit pas dépasser 5MB)"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <section className="bg-yellow-50 py-20 px-15">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-5 flex-col mb-12">
            <SectionHeader title="Faire un don" className="" />
            <h1 className="text-3xl font-bold text-gray-800">Soutenez notre mission</h1>
          </div>

          <div className="space-y-4">
            <p className="max-w-xl text-lg text-gray-700">
              Votre générosité nous permet d'aider ceux qui en ont besoin. Choisissez le type de don qui vous convient le mieux.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-15">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Nom et Prénoms"
              placeholder="Entrez votre nom et prénoms"
              value={formData.nomPrenoms}
              onChange={(e) => handleInputChange("nomPrenoms", e.target.value)}
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
          </div>

          <Input
            label="Téléphone"
            type="tel"
            placeholder="+225 01 02 03 04 05"
            value={formData.telephone}
            onChange={(e) => handleInputChange("telephone", e.target.value)}
            required
          />

          <Select
            label="Type de don"
            options={typeDonOptions}
            value={formData.typeDon}
            onChange={(value) => handleInputChange("typeDon", value)}
            placeholder="Sélectionnez le type de don"
            required
          />

          {renderDonationFields()}

          <div className="pt-6 ">
            <Button
              type="submit"
              label="Confirmer mon don"
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