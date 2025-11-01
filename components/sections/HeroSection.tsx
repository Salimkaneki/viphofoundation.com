import Image from "next/image";
import { Heart, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - commence du haut pour l'image */}
      <section className="relative flex items-end justify-center min-h-screen pb-16">
        {/* Conteneur centré pour la carte */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            {/* Carte glassmorphisme à gauche */}
            <div className="z-10">
              <div className="backdrop-blur-2xl bg-linear-to-br from-blue-50/30 via-white/20 to-blue-100/25 border border-white/40 rounded-3xl p-8 md:p-10 shadow-2xl max-w-2xl hover:shadow-blue-500/20 hover:border-white/50 transition-all duration-500">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug drop-shadow-lg transform translate-y-4 opacity-0 transition-all duration-1000 delay-200" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}>
                  Agir ensemble pour un avenir meilleur
                </h1>
                <p className="text-base md:text-lg text-white/95 mb-8 leading-relaxed drop-shadow-md transform translate-y-4 opacity-0 transition-all duration-1000 delay-400" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}>
                  Ensemble, nous créons un impact durable pour un monde plus équitable.
                </p>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-3 transform translate-y-4 opacity-0 transition-all duration-1000 delay-600" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s forwards' }}>
                  <a
                    href="#faire-un-don"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 duration-300"
                  >
                    <Heart className="w-4 h-4" />
                    Faire un don
                  </a>

                  <a
                    href="#nos-actions"
                    className="inline-flex items-center justify-center gap-2 backdrop-blur-xl bg-white/25 hover:bg-white/35 text-white px-6 py-3 rounded-full font-semibold text-base transition-all border border-white/50 hover:border-white/70 group"
                  >
                    Découvrir
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image et overlay optimisé */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/2.jpg"
            alt="VIPHO Foundation"
            fill
            className="object-cover"
            priority
          />

          {/* UN SEUL overlay suffit */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/50 via-blue-900/30 to-blue-900/20"></div>
        </div>

        {/* Blobs décoratifs subtils */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-30 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>
    </div>
  );
}