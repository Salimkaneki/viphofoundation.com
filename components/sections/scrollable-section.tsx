"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

interface ScrollableSectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function ScrollableSection({
  title,
  subtitle,
  children,
  className = ""
}: ScrollableSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <section className={`px-15 py-10 ${className}`}>
      {title && (
        <div className="flex flex-row items-center">
          <h1 className="font-display font-bold text-3xl text-gray-500">{title}</h1>
          <div className="w-25 h-px bg-gray-400 ml-4"></div>
        </div>
      )}

      <div className={`flex flex-row items-center ${title ? 'justify-between mt-4' : 'justify-end'}`}>
        {subtitle && (
          <h1 className="font-sans text-3xl font-bold">{subtitle}</h1>
        )}

        {/* --- FLÈCHES --- */}
        <div className="flex gap-6 items-center">
          {/* Flèche gauche */}
          <button onClick={scrollLeft} className="group flex items-center">
            <img
              src={canScrollLeft ? "/icons/fleche-gauche-1.svg" : "/icons/fleche-gauche-0.svg"}
              width="100"
              height="18"
              alt="Flèche gauche"
            />
          </button>

          {/* Flèche droite */}
          <button onClick={scrollRight} className="group flex items-center">
            <img
              src={canScrollRight ? "/icons/fleche-droite-1.svg" : "/icons/fleche-droite-0.svg"}
              width="112"
              height="18"
              alt="Flèche droite"
            />
          </button>
        </div>
      </div>

      {/* --- SLIDER --- */}
      <div
        ref={scrollRef}
        className={`flex flex-row gap-10 overflow-x-auto ${title ? 'mt-10' : 'mt-4'}`}
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </div>
    </section>
  );
}