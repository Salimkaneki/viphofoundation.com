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
    <footer className={`${bgClass}`}>
      <div className="px-4 md:px-15 pt-14 pb-8">
        <div className="max-w-360 mx-auto flex flex-row items-start justify-between gap-8 overflow-x-auto">
        <div className="shrink-0 w-62.5">
          <h3 className="font-display text-2xl font-bold text-gray-700 mb-4">VIPHO Foundation</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Construire un monde où chaque être humain, quelles que soient ses conditions, jouit d&apos;une vie digne, d&apos;opportunités équitables et du respect de ses droits fondamentaux.
          </p>
        </div>

        <div className="shrink-0 w-50">
          <h3 className={titleClass}>Navigation</h3>
          <ul className={listClass}>
            <li><Link href="/a-propos" className={linkClass}>À propos</Link></li>
            <li><Link href="/blog-et-activite" className={linkClass}>Blog & Activités</Link></li>
            <li><Link href="/s-engager" className={linkClass}>S&apos;engager</Link></li>
            <li><Link href="/contact" className={linkClass}>Contact</Link></li>
          </ul>
        </div>

        <div className="shrink-0 w-50">
          <h3 className={titleClass}>Engagement</h3>
          <ul className={listClass}>
            <li><Link href="/postuler" className={linkClass}>Devenir bénévole</Link></li>
            <li><Link href="/faire-un-don" className={linkClass}>Faire un don</Link></li>
          </ul>
        </div>

        <div className="shrink-0 w-50">
          <h4 className={socialTitleClass}>Suivez-nous sur :</h4>
          <div className="flex space-x-4">
            <a href="#facebook" className={linkClass}><Image src="/icons/facebook.svg" alt="Facebook" width={30} height={30} /></a>
            <a href="#tiktok" className={linkClass}><Image src="/icons/tiktok.svg" alt="TikTok" width={30} height={30} /></a>
            <a href="#instagram" className={linkClass}><Image src="/icons/insta.svg" alt="Instagram" width={30} height={30} /></a>
            <a href="#x" className={linkClass}><Image src="/icons/x.svg" alt="X" width={30} height={30} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-8 text-center flex flex-row justify-between">
        <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} VIPHO Foundation. Tous droits r&eacute;serv&eacute;s.
        </p>

        <div className="flex flex-row text-sm text-gray-500 gap-4">
          <a href="" className="">Mention l&eacute;gales</a>
          <a href="" className="">Conditions d'utilisation</a>
          <a href="" className="">Politique de confidentialité</a>
        </div>
      </div>
      </div>
    </footer>
  );
}