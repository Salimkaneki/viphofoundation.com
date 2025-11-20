import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  bgColor?: 'primary-50' | 'gray-50' | 'yellow-50';
}

const bgClassMap: Record<NonNullable<FooterProps["bgColor"]>, string> = {
  "primary-50": "bg-primary-50",
  "gray-50": "bg-gray-50",
  "yellow-50": "bg-yellow-50",
};

export default function Footer({ bgColor = 'primary-50' }: FooterProps) {
  const linkClass = "text-gray-600 hover:text-primary-600 transition-colors";
  const titleClass = "font-semibold text-gray-700 mb-4";
  const socialTitleClass = "font-semibold text-gray-700 mb-2";
  const listClass = "space-y-2 text-sm";
  const bgClass = bgClassMap[bgColor];

  return (
    <footer className={`${bgClass} pt-14 px-4 md:px-14 pb-8`}>
      <div className="max-w-7xl mx-auto flex flex-row items-start justify-between gap-8 overflow-x-auto">
        <div className="shrink-0 w-[250px]">
          <h3 className="font-display text-2xl font-bold text-gray-700 mb-4">VIPHO Foundation</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Construire un monde où chaque être humain, quelles que soient ses conditions, jouit d'une vie digne, d'opportunités équitables et du respect de ses droits fondamentaux.
          </p>
        </div>

        <div className="shrink-0 w-[200px]">
          <h3 className={titleClass}>Navigation</h3>
          <ul className={listClass}>
            <li><Link href="#apropos" className={linkClass}>À propos</Link></li>
            <li><Link href="#blog&activités" className={linkClass}>Blog & Activités</Link></li>
            <li><Link href="#sengager" className={linkClass}>S'engager</Link></li>
            <li><Link href="#contact" className={linkClass}>Contact</Link></li>
          </ul>
        </div>

        <div className="shrink-0 w-[200px]">
          <h3 className={titleClass}>Engagement</h3>
          <ul className={listClass}>
            <li><Link href="#devenir-benevole" className={linkClass}>Devenir bénévole</Link></li>
            <li><Link href="#faire-un-don" className={linkClass}>Faire un don</Link></li>
          </ul>
        </div>

        <div className="shrink-0 w-[200px]">
          <h4 className={socialTitleClass}>Suivez-nous sur :</h4>
          <div className="flex space-x-6">
            <a href="#facebook" className={linkClass}><img src="/icons/facebook.svg" alt="Facebook" width={30} height={30} /></a>
            <a href="#tiktok" className={linkClass}><img src="/icons/tiktok.svg" alt="TikTok" width={30} height={30} /></a>
            <a href="#instagram" className={linkClass}><img src="/icons/insta.svg" alt="Instagram" width={30} height={30} /></a>
            <a href="#x" className={linkClass}><img src="/icons/x.svg" alt="X" width={30} height={30} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} VIPHO Foundation. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}