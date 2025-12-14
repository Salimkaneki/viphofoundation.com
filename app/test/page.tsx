"use client";

import Select from "@/components/ui/select";
import { i } from "framer-motion/client";
import EnrolmentCard from "@/components/cards/enrolment-card";
import BlogCard from "@/components/cards/blog-card";
import TestimonialCard from "@/components/cards/testimonial-card";
import TextBlogCard from "@/components/cards/text-blogCard";
import { useState } from "react";
import Tag from "@/components/ui/tag";

export default function TestPage() {
  const [selectedValue, setSelectedValue] = useState("");

  const departmentOptions = [
    "Tous les départements",
    "Ain (01)",
    "Aisne (02)",
    "Allier (03)",
    "Alpes-de-Haute-Provence (04)",
    "Hautes-Alpes (05)",
    "Alpes-Maritimes (06)"
  ];

  const categoryOptions = [
    "Toutes les catégories",
    "Informatique",
    "Marketing",
    "Finance",
    "Ressources Humaines"
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Test du Composant Select Réutilisable</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Select avec départements :</h2>
          <Select
            label="Département"
            options={departmentOptions}
            value={selectedValue}
            onChange={setSelectedValue}
            placeholder="Choisissez un département"
          />
          <p className="mt-2 text-sm text-gray-600">Valeur sélectionnée : {selectedValue || "Aucune"}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Select avec catégories :</h2>
          <Select
            label="Catégorie"
            options={categoryOptions}
            placeholder="Sélectionnez une catégorie"
          />
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded">
          <h2 className="text-lg font-semibold mb-2">Exemple d'utilisation :</h2>
          <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`import Select from "@/components/ui/select";
import { useState } from "react";

export default function MyComponent() {
  const [value, setValue] = useState("");

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <Select
      label="Mon Label"
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Choisissez une option"
    />
  );
}`}
          </pre>
        </div>
      </div>

      <div className="">
        <EnrolmentCard />
      </div>

      <div className="">
        <BlogCard />
      </div>

      <div className="">
        <TestimonialCard quote="This is a great testimonial!" name="John Doe" role="CEO" />
      </div>

      <div className="">
        <TextBlogCard date="2023-10-01" readTime="5" title="Sample Blog Title" />
      </div>
    </div>
  );
}