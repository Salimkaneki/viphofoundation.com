"use client";

import { BlogCard, ExpandableCard } from "../components/cards";
import { TestimonialCard } from "../components/cards";
import { ScrollableSection } from "../components/sections";
import { SectionHeader } from "../components/sections";
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import Textarea from "../components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const titleClass = "font-display font-bold text-3xl text-gray-500";

const ContactForm = () => {
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
    // Handle form submission
  };

  return (
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
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* -------- SECTION 1 -------- */}
      <section className="w-full">
        <div className="max-w-360 mx-auto">
          <div className="px-15">
            <div className="w-full flex flex-col items-center justify-between gap-8">
              <h1 className="w-240 font-display text-5xl font-bold text-center text-gray-800 mt-10 px-4">
                Quand la solidarite devient un geste, l’espoir renait dans chaque vie.
              </h1>

              <div className="flex flex-row w-full gap-8">
                <div className="flex-1 h-86.5 bg-primary-300"></div>
                <div className="w-86.5 h-86.5 bg-primary-900"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------- SECTION 2 -------- */}
      <section className="w-full bg-yellow-50 justify-center flex items-center px-4 mt-10 py-20">
        <div className="max-w-360 mx-auto">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-center text-gray-800 mt-10 mb-8">
              Nos domaines d&apos;intervention
            </h2>
          </div>
        </div>
      </section>

      {/* -------- A PROPOS -------- */}
      <section className="w-full">
        <div className="max-w-360 mx-auto">
          <div className="flex flex-row px-15 py-10 gap-4">
            <div className="flex-[0.95]">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center">
                  <h1 className={titleClass}>A propos</h1>
                  <div className="w-25 h-px bg-gray-400 ml-4"></div>
                </div>

                <h1 className="font-sans text-3xl font-bold">
                  Lorem Ipsum dolor sit amet
                </h1>

                <p className="font-sans text-base text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p className="font-sans text-base text-gray-700 mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <div className="flex-[0.95] h-87.5 bg-primary-300"></div>
          </div>
        </div>
      </section>

      {/* -------- VIDEO -------- */}
      <section className="w-full">
        <div className="max-w-360 mx-auto">
          <div className="flex flex-col px-15 py-10 gap-15">
            <div className="flex flex-row items-center">
              <h1 className={titleClass}>Vipho Foundation en vidéo</h1>
              <div className="w-25 h-px bg-gray-400 ml-4"></div>
            </div>

            <div className="flex align-center justify-center">
              <div className="bg-primary-700 w-220 h-120 "></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-360 mx-auto">
          <ScrollableSection
            title="Blog"
            subtitle="Récentes actualités et articles"
          >
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </ScrollableSection>
        </div>
      </section>  

      <section className="w-full">
        <div className="max-w-360 mx-auto">
          <div className="px-15 py-20">
            <ExpandableCard />
          </div>
        </div>
      </section>

      {/* -------- OBJECTIFS -------- */}
      <section className="w-full">
        <div className="max-w-360 mx-auto">
          <div className="flex flex-col px-15 py-10 gap-4">
            <div className="flex flex-row items-center">
              <h1 className={titleClass}>Objectifs</h1>
              <div className="w-25 h-[1.5px] bg-gray-400 ml-4"></div>
            </div>

            <div className="w-full bg-yellow-50 p-8">
              <div className="flex flex-row gap-8 justify-center">
                <div className="flex flex-col items-center text-center">
                  <h1 className="font-display text-4xl font-bold mb-4">Humanite</h1>
                  <p className="w-87.5 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <h1 className="font-display text-4xl font-bold mb-4">Solidarite</h1>
                  <p className="w-87.5 text-gray-700">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <h1 className="font-display text-4xl font-bold mb-4">Espoir</h1>
                  <p className="w-87.5 text-gray-700">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-360 mx-auto">
          <ScrollableSection
            title="Témoignages"
            subtitle="Ce que disent nos bénéficiaires"
          >
            <TestimonialCard
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              name="Marie Dupont"
              role="Bénéficiaire"
            />
            <TestimonialCard
              quote="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              name="Jean Martin"
              role="Bénéficiaire"
            />
            <TestimonialCard
              quote="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              name="Sophie Leroy"
              role="Bénéficiaire"
            />
            <TestimonialCard
              quote="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              name="Paul Durand"
              role="Bénéficiaire"
            />
          </ScrollableSection>
        </div>
      </section>

      {/* -------- CONTACT SECTION -------- */}
      <section id="contact" className="w-full bg-gray-50 py-16">
        <div className="max-w-360 mx-auto">
          <div className="px-15">
            <div className="flex gap-5 flex-col mb-12">
              <SectionHeader title="Contactez-nous" className="" />
              <p className="max-w-xl text-lg text-gray-600">
                Vous avez des questions ou souhaitez nous contacter ? N&apos;hésitez pas à nous envoyer un message.
                Notre équipe vous répondra dans les plus brefs délais.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left side - Contact Info */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-800">Nos coordonnées</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">viphofoundation@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Téléphone</h4>
                      <p className="text-gray-600">+228 00 00 00 00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Adresse</h4>
                      <p className="text-gray-600">Sed vitae urna ac lorem sagittis ultrices.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}