"use client";

import { BlogCard } from "@/components/cards";
import { ScrollableSection, SectionHeader } from "@/components/sections";
import { TextBlogCard } from "@/components/cards";
import Pagination from "@/components/pagination";

export default function BlogActivitePage() {
  return (
    <div className="min-h-screen">
      <section>
        <h1 className="font-display text-5xl pt-10 font-bold text-center text-gray-800 mb-6">
          Blog & Activité
        </h1>
      </section>

      <ScrollableSection>
        <BlogCard
          cardColor="bg-primary-300"
          title="Projet éducatif : Soutien scolaire pour les enfants défavorisés"
        />
        <BlogCard
          cardColor="bg-primary-400"
          title="Campagne de sensibilisation environnementale dans les écoles"
        />
        <BlogCard
          cardColor="bg-primary-500"
          title="Distribution de repas chauds aux familles nécessiteuses"
        />
        <BlogCard
          cardColor="bg-yellow-300"
          title="Atelier de formation professionnelle pour les jeunes"
        />
        <BlogCard
          cardColor="bg-yellow-400"
          title="Partenariat avec les associations locales pour l'aide sociale"
        />
        <BlogCard
          cardColor="bg-yellow-500"
          title="Programme de santé préventive dans les quartiers populaires"
        />
      </ScrollableSection>

      <section>
        <div className="px-15 py-10">
          <SectionHeader title="Tous les articles et blogs" />

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

        <div className="px-15 pb-10">
          <Pagination
            currentPage={1}
            totalPages={5}
            onPageChange={(_unusedPage) => {}}
          />
        </div>
      </section>
    </div>
  );
}