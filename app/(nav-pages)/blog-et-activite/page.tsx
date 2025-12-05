import { BlogCard } from "../../../components/cards";
import { ScrollableSection } from "../../../components/sections";

export default function BlogActivitePage() {
  return (
    <div className="min-h-screen">
      <section className="">
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
    </div>
  );
}