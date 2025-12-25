"use client";

import { BlogCard } from "@/components/cards";
import { ScrollableSection } from "@/components/sections";

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center ">
        <h1 className="font-display text-5xl font-bold text-center text-gray-800 mb-6">
          A Propos de VIPHO Foundation
        </h1>
        <div className="bg-primary-400 w-311.5 h-86.5"></div>
      </section>

      <section className="bg-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-lg text-gray-700 mb-6">
            La Fondation VIPHO est dédiée à créer un impact positif et durable dans nos communautés. Nous œuvrons pour un avenir meilleur en soutenant des initiatives sociales, éducatives et environnementales.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
            <li>Soutien aux familles en difficulté</li>
            <li>Programmes éducatifs pour les jeunes</li>
            <li>Actions environnementales durables</li>
            <li>Accompagnement des personnes vulnérables</li>
          </ul>
        </div>
      </section>

      <ScrollableSection
        title="Blog et articles"
        subtitle="Récentes actualités et articles"
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </ScrollableSection>

    </div>
  );
}