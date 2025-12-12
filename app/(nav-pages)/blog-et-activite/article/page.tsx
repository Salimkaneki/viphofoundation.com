"use client";

import Breadcrumb from "@/components/breadcrumb";
import { TextBlogCard } from "@/components/cards";
import Pagination from "@/components/pagination";
import { SectionHeader } from "@/components/sections";

export default function ArticlePage() {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog-et-activite" },
          { label: "Article", href: "/blog-et-activite/article" },
        ]}
      />

      {/* Section principale */}
      <section className="w-full bg-yellow-50 mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center">
        <h1 className="font-display text-5xl font-bold text-center text-gray-800 mb-6">
          Lorem article ipsum dolor sit amet consectetur.
        </h1>
        <div className="bg-primary-400 w-311.5 h-86.5"></div>
      </section>

      {/* Section secondaire */}
      <section className="w-full px-15 py-12">
        <div className="  text-gray-800">
          <SectionHeader title= "Autres articles"/>
          <div>
            <TextBlogCard
              date="10 août 2023"
              readTime="5"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia culpa accusamus dolorem eius."
            />

            <TextBlogCard
              date="22 septembre 2023"
              readTime="3"
              title="Comment structurer un composant React proprement et efficacement."
            />

            <TextBlogCard
              date="14 janvier 2024"
              readTime="7"
              title="Les bonnes pratiques UI/UX pour améliorer l’expérience utilisateur sur mobile."
            />

            <TextBlogCard
              date="30 mars 2024"
              readTime="4"
              title="Guide rapide pour optimiser les performances d’un site Next.js."
            />

            <TextBlogCard
              date="18 juin 2024"
              readTime="6"
              title="Pourquoi Tailwind CSS est devenu le standard du design moderne."
            />
          </div>
        </div>

        <div className="px-15 pb-10 mt-8">
          <Pagination
            currentPage={1}
            totalPages={5}
            onPageChange={(page) => console.log("Page changed to:", page)}
          />
        </div>
      </section>
    </div>
  );
}
