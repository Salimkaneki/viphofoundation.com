import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page vierge - composants à ajouter */}
      <Header />

      {/* Maintenant on peut utiliser les classes simples ! */}
      <div className="bg-primary-100 text-primary-900 p-4 ">
        Texte avec bg-primary-100 et text-primary-900
        <h1 className="font-display text-display-3">40px Display</h1>
      </div>

      <div className="bg-gray-500 text-white p-4 mt-4">
        Texte avec bg-gray-500
      </div>

      <div className="bg-yellow-50 text-yellow-900 p-4 mt-4">
        Texte avec bg-yellow-400
      </div>

      <Footer />
    </div>
  );
}
