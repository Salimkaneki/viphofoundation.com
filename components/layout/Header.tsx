"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'backdrop-blur-2xl bg-white/10 border-b border-white/20 shadow-2xl'
        : 'backdrop-blur-xl bg-white/5 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo simplifié */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/icons/vf-icon.svg"
              alt="VIPHO Logo"
              width={30}
              height={30}
              className="w-8 h-8 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
            />
            <span className="text-xl font-bold text-white drop-shadow-lg group-hover:text-blue-100 transition-colors duration-300">VIPHO</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#qui-sommes-nous" className="text-white/90 hover:text-white transition-all duration-300 hover:drop-shadow-lg relative group">
              Qui sommes-nous ?
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#nos-actions" className="text-white/90 hover:text-white transition-all duration-300 hover:drop-shadow-lg relative group">
              Nos actions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#blog" className="text-white/90 hover:text-white transition-all duration-300 hover:drop-shadow-lg relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#s-engager" className="text-white/90 hover:text-white transition-all duration-300 hover:drop-shadow-lg relative group">
              S'engager
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Bouton CTA */}
          <div className="hidden md:flex">
            <Link
              href="#faire-un-don"
              className="backdrop-blur-xl bg-blue-600/80 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 border border-blue-400/30 hover:border-blue-400/50"
            >
              Faire un don
            </Link>
          </div>

          {/* Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/90 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className={`md:hidden transition-all duration-300 backdrop-blur-2xl bg-white/10 border-t border-white/20 shadow-2xl`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#qui-sommes-nous"
                className="block px-3 py-3 text-white/90 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Qui sommes-nous ?
              </Link>
              <Link
                href="#nos-actions"
                className="block px-3 py-3 text-white/90 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nos actions
              </Link>
              <Link
                href="#blog"
                className="block px-3 py-3 text-white/90 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="#s-engager"
                className="block px-3 py-3 text-white/90 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                S'engager
              </Link>
              <div className="pt-3 border-t border-white/20">
                <Link
                  href="#faire-un-don"
                  className="flex items-center justify-center backdrop-blur-xl bg-blue-600/80 hover:bg-blue-600 text-white px-4 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 border border-blue-400/30 hover:border-blue-400/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Faire un don
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}