import React from "react";
import Footer from "@/components/layout/footer";
import TextBlogCard from "@/components/cards/text-blogCard";

export default function TestPage() {
  return (
    <div>


      {/* <Footer
        bgColor="gray-50"
      /> */}  

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
  );
}