import { SectionHeader } from "@/components/sections";
import Button from "@/components/ui/button";
import { Plus } from "lucide-react";

 export default function engagerPage() {
    return (
      <div className="w-full">
        <section className="bg-primary-100 py-20 px-8">
            <div className="flex gap-5 flex-col">
                <SectionHeader title="S'engager" className="" />
                <h1 className="text-3xl font-bold text-gray-800">Rejoignez VIPHO et faites la différence !</h1>
            </div>

            <div className="">
                <p className="">Vous avez des compétences, des idées ou simplement l’envie de contribuer à des projets qui ont un véritable impact ? VIPHO vous offre la possibilité de vous engager activement et de participer à la transformation de notre communauté.</p>
                <Button 
                  label="Rejoindre VIPHO"
                  icon={<Plus />}
                  bgColor="bg-primary-900"
                  
                />  
            </div>
        </section>
      </div>
    );
  }