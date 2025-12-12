"use client";

import { SectionHeader } from "@/components/sections";
import Button from "@/components/ui/button";
import Select from "@/components/ui/select";
import BlogCard from "@/components/cards/blog-card";
import { Plus } from "lucide-react";
import { useState } from "react";

 export default function engagerPage() {
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    return (
      <div className="w-full">
        <section className="bg-primary-100 py-20 px-15">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-5 flex-col mb-12">
                    <SectionHeader title="S'engager" className="" />
                    <h1 className="text-3xl font-bold text-gray-800 ">Rejoignez VIPHO et faites la différence !</h1>
                </div>

                <div className="space-y-4">
                    <p className="max-w-xl text-lg text-gray-700">Vous avez des compétences, des idées ou simplement l’envie de contribuer à des projets qui ont un véritable impact ? VIPHO vous offre la possibilité de vous engager activement et de participer à la transformation de notre communauté.</p>
                    <Button 
                      label="Rejoindre VIPHO"
                      icon={<Plus />}
                      bgColor="bg-primary-900"
                      
                    />  
                </div>
            </div>
        </section>

        <section className="w-full px-15 py-12">
            <div className="flex-1 gap-1">
                <h1 className="text-xl font-bold ">Rejoignez VIPHO et faites la différence !</h1>
                <p className="text-lg text-gray-700 mt-4">Découvrez de quel type de profil nous avons besoin</p>
            </div>
            <div className="flex-1 mt-8 space-y-4">
                <h1 className="font-display font-bold text-xl text-gray-600 ">Filtre:</h1>
                <div className="flex gap-10">
                  <Select
                    label="Département"
                    options={["Toutes les catégories", "Informatique", "Marketing", "Finance", "Ressources Humaines"]}
                    value={selectedDepartment}
                    onChange={setSelectedDepartment}
                    placeholder="Choisissez un département"
                  />
                  <Select
                    label="Catégorie"
                    options={["Toutes les catégories", "Informatique", "Marketing", "Finance", "Ressources Humaines"]}
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                    placeholder="Sélectionnez une catégorie"
                  />
                </div>
            </div>
        </section>

        <section className="w-full px-15 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BlogCard
                        cardColor="bg-primary-200"
                        title="Comment contribuer à la transformation digitale de notre communauté"
                    />
                </div>
            </div>
        </section>
      </div>
    );
  }