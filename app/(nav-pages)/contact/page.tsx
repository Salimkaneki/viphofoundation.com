"use client";

import { SectionHeader } from "@/components/sections";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nomPrenoms: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form data:", formData);
    // Handle form submission
  };

  return (
    <div className="w-full">
      <section className="bg-yellow-50 py-20 px-15">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-5 flex-col mb-12">
            <SectionHeader title="Contact" className="" />
            <h1 className="text-3xl font-bold text-gray-800">Contactez-nous</h1>
          </div>

          <div className="space-y-4">
            <p className="max-w-xl text-lg text-gray-700">
              Vous avez des questions ou souhaitez nous contacter ? N'hésitez pas à nous envoyer un message.
              Notre équipe vous répondra dans les plus brefs délais.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Nos coordonnées</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">viphofoundation@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Téléphone</h3>
                  <p className="text-gray-600">+228 00 00 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Adresse</h3>
                  <p className="text-gray-600">Sed vitae urna ac lorem sagittis ultrices.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
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

              <Textarea
                label="Message"
                placeholder="Votre message..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
              />

              <div className="pt-4">
                <Button
                  type="submit"
                  label="Envoyer le message"
                  bgColor="bg-primary-300"
                  textColor="text-white"
                  className="w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}