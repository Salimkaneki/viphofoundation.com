"use client";

import BlogCard from "../components/cards/blog-card";
import { useRef, useState, useEffect } from "react";

const titleClass = "font-display font-bold text-3xl text-gray-500";

export default function Home() {
  const visionItems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  ];

  const TickIcon = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6666 4.08337L8.52202 7.85685C7.27595 9.35214 6.65291 10.0998 5.83325 10.0998C5.0136 10.0998 4.39056 9.35214 3.14448 7.85684L2.33325 6.88337"
        stroke="#00359E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

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
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* -------- SECTION 1 -------- */}
      <section className="px-15">
        <div className="w-full flex flex-col items-center justify-between gap-8">
          <h1 className="w-[960px] font-display text-5xl font-bold text-center text-gray-800 mt-10 px-4">
            Quand la solidarite devient un geste, l’espoir renait dans chaque vie.
          </h1>

          <div className="flex flex-row w-full gap-8">
            <div className="flex-1 h-[346px] bg-primary-300"></div>
            <div className="w-[346px] h-[346px] bg-primary-500"></div>
          </div>
        </div>
      </section>

      {/* -------- SECTION 2 -------- */}
      <section className="w-full h-[200px] bg-yellow-50 justify-center flex items-center px-4 mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-gray-800 mt-10 mb-8">
            Nos domaines d&apos;intervention
          </h2>
        </div>
      </section>

      {/* -------- A PROPOS -------- */}
      <section className="flex flex-row px-15 py-10 gap-4">
        <div className="flex-[0.95]">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center">
              <h1 className={titleClass}>A propos</h1>
              <div className="w-[100px] h-px bg-gray-400 ml-4"></div>
            </div>

            <h1 className="font-sans text-3xl font-bold">
              Lorem Ipsum dolor sit amet
            </h1>

            <p className="font-sans text-base text-gray-700 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="font-sans text-base text-gray-700 mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        <div className="flex-[0.95] h-[350px] bg-primary-300"></div>
      </section>

      {/* -------- VISION -------- */}
      <section className="flex flex-row px-15 py-10 gap-4">
        <div className="flex-[0.95] h-[350px] bg-primary-300"></div>

        <div className="flex-[0.95]">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center">
              <h1 className={titleClass}>Notre vision</h1>
              <div className="w-[100px] h-px bg-gray-400 ml-4"></div>
            </div>

            <h1 className="font-sans text-3xl font-bold">
              Lorem Ipsum dolor sit amet
            </h1>

            <ul className="font-sans text-base text-gray-700 mt-4 space-y-2">
              {visionItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-primary-100 rounded-full p-2 mr-3">
                    <TickIcon />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* -------- BLOG -------- */}
      <section className="px-15 py-10">
        <div className="flex flex-row items-center">
          <h1 className={titleClass}>Blog</h1>
          <div className="w-[100px] h-px bg-gray-400 ml-4"></div>
        </div>

        <div className="flex flex-row items-center justify-between mt-4">
          <h1 className="font-sans text-3xl font-bold">
            Récentes actualités et articles
          </h1>

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
          className="flex flex-row gap-8 overflow-x-auto mt-10"
          style={{ scrollbarWidth: "none" }}
        >
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </div>
  );
}
